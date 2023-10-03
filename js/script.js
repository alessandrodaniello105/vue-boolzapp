const { createApp } = Vue;

const initDate = luxon.DateTime
const dt = initDate.now();
const day = String(dt.day).padStart(2, '0');
const month = String(dt.month).padStart(2, '0');
const year = String(dt.year);
const myDate = {
  day: day,
  month: month,
  year: year
}

let message;

message = day + '/' + month + '/' + year
console.log(message);

// console.log(dt.now().year);

const chatContainer = document.querySelector('.conversation-box')

import { contacts } from "./contacts.js";

// console.log(contacts)

createApp({
  data() {
    return {

      contacts,

      counter: 1,
      activeContact: '',
      inputMessage: '',
      chatContainer,
      dt,
      myDate
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

    myFunction(index) {
      this.counter = index;

      this.contacts[this.counter].visible = true
      this.activeContact = this.contacts[this.counter]
      console.log(this.activeContact)
    },

    isSent(message) {
      return (message.status === 'sent') ? 'sent-msg' : 'received-msg'
    },

    sendMsg() {
      console.log(this.activeContact.messages)
      this.activeContact.messages.push(
        {
          date: '10/01/2020 15:50:00',
          message: this.inputMessage,
          status: 'sent'
      },
      )
      
      this.inputMessage = ''

      this.autoScroll()
      
      console.log(this.activeContact.messages)
    },

    autoScroll() {
      window.scrollBy(100, 200)
      
    }

  },

  computed: {
    date() {
      return console.log(this.myDate.join('/'));
    }
  },

  mounted() {
    // console.log(this.contacts)
    this.activeContact = this.contacts[this.counter]

    

  }
}).mount('#app')