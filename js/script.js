const { createApp } = Vue;

const initDate = luxon.DateTime;
const dt = initDate.now();

const day = String(dt.day).padStart(2, '0');
const month = String(dt.month).padStart(2, '0');
const year = String(dt.year);
const myDate = day + '/' + month + '/' + year;
// const myDate = dt.setLocale('it').toLocaleString(initDate.TIME_24_WITH_SECONDS);

const hour = String(dt.hour).padStart(2, '0');
const minute = String(dt.minute).padStart(2, '0');
const second = String(dt.second).padStart(2, '0');
// const myTime =  hour + ':' + minute + ':' + second;
// const myTime = dt.setLocale('it').toLocaleString(initDate.TIME_24_WITH_SECONDS);
// let message;

// message = day + '/' + month + '/' + year
// console.log(message);

// console.log(dt.now().year);

const chatContainer = document.querySelector('.conversation-box');
const delBtnContainer = document.querySelector('.delete-msg');

// delBtnContainer.innerHTML ='<i class="fa-solid fa-chevron-down"></i>'




import { contacts } from "./contacts.js";

// console.log(contacts)

createApp({
  data() {
    return {

      contacts,

      counter: '',

      activeContact: '',

      inputMessage: '',

      chatContainer,

      dt,
      myDate,

      inputSearch: ''
      // myTime

    }
  },

  methods: {

    // readConv(){
      // contact.visible = false;
      // if (contact.visible) {
      //   ''
      // } else {
      //   contact.visible = true
      // }

      // return this.contacts.filter(contact => {
      //   console.log(contact.visible)
      // })
    // }

    setActive(index) {
      this.counter = index;

      this.contacts[this.counter].visible = true;
      this.activeContact = this.contacts[this.counter];
      console.log(this.activeContact);
    },

    // isSent(message) {
    //   return (message.status === 'sent') ? 'sent-msg' : 'received-msg';
    // },

    sendMsg() {

      console.log(this.activeContact.messages);

      this.activeContact.messages.push(

        {
          date: this.myTime(),
          message: this.inputMessage,
          status: 'sent'
        },

      )
      
      this.inputMessage = '';

      setTimeout(() =>{
        this.activeContact.messages.push(

          {
            date: this.myTime(),
            message: 'Ok',
            status: 'received'
          },
  
        )
      }, 1000)

      // this.autoScroll();2
      
      console.log(this.activeContact.messages);

    },

    getLastMessage(contact) {
      return contact.messages[contact.messages.length - 1].message
    },

    getLastDate(contact) {
      return contact.messages[contact.messages.length - 1].date
    },

    deleteMsg(index) {
      
      if (this.activeContact.messages.length == 1) {
        this.activeContact.messages = [
          {
            date: '',
            message: ''
          }
        ];
        
      } else {
        this.activeContact.messages.splice(index, 1);
        console.log('index ->', index, 'length ->', this.activeContact.messages.length )
      }

    },

    
    // contactsFilter() {
    //   return this.contacts.filter(contact => contact.name.includes('mich'))
    //   // console.log(this.contacts)
    // },

    resetFilter() {
      this.inputSearch = '';
    },

    
    myTime() {
      return dt.setLocale('it').toLocaleString(initDate.TIME_24_WITH_SECONDS);
    },

  

    // autoScroll() {
    //   window.scrollBy(100, 200);      
    // }

  },

  computed: {

    date() {
      return this.myDate;
    },

    myShortTime() {
      return dt.setLocale('it').toLocaleString(initDate.TIME_24_SIMPLE)
    },

    contactsFiltered(){
      return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.inputSearch.toLowerCase()))
    }

    
  },

  created() {

    // console.log(this.contacts)

    console.log(dt.setLocale('it').toLocaleString(initDate.TIME_24_WITH_SECONDS))

    // this.activeContact = this.contacts[this.counter]

  }
}).mount('#app')