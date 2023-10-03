import contacts from "./contacts.js";


console.log(contacts)

const {createApp} = Vue;

createApp({
  data() {
    return {
      contacts
    }
  },

  mounted() {
    console.log(this.contacts)
  }
}).mount('#app')