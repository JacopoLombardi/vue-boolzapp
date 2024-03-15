
// libreria luxon
const {DateTime} = luxon;


const {createApp} = Vue;


import{contacts} from "./contacts.js";


createApp({

   // variabili
   data(){
      return{
         
         contacts,

         clickedContact: '',

         indiceContact: 0,

         newMessage: '',

         searchUser: '',
      };
   },




   // funzioni
   methods:{

      // prendo l'indice del contatto cliccato
      caugthIndex(indice){
         this.indiceContact = indice;
      },



      // inserire i messaggi scritti dall'utente
      userMessage(){ 
         this.contacts[this.indiceContact].messages.push({
            date: DateTime.now().toFormat('dd/MM/yy - hh:mm:ss'),
            message: this.newMessage,
            status: 'sent'
         });
         this.newMessage = '';

         
         // dopo 1s viene generata una risposta in automatico
         setTimeout(() => {
            this.contacts[this.indiceContact].messages.push({
               date: DateTime.now().toFormat('dd/MM/yy - hh:mm:ss'),
               message: 'OK!',
               status: 'received'
            });
         }, 2000);
      },



      // eliminazione un messaggio
      deleteMessage(indiceMessage){
         this.contacts[this.indiceContact].messages.splice(indiceMessage, 1);
      },

   },




    computed:{
        // ricerca di un contatto
        contactFiltered(){
            return this.contacts.filter(contact => 
                contact.name.toLowerCase().includes (this.searchUser.toLowerCase()));
        },
   },



   monted(){
    
   }


}).mount('#app');