import contacts from "./contacts.js";


// console.log(contacts)

const {createApp} = Vue;

createApp({
  data() {
    return {

      contacts,

      counter: 1,
      activeContact: '',

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
    }

  },

  mounted() {
    // console.log(this.contacts)
    this.activeContact = this.contacts[this.counter]
  }
}).mount('#app')