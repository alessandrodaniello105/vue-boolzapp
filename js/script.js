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
// const myTimeStr =  hour + ':' + minute + ':' + second;
// const myTime = dt.setLocale('it').toLocaleString(initDate.TIME_24_WITH_SECONDS);


// console.log(dt.now().year);

const chatContainer = document.querySelector('.conversation-box');
const downloadBtn = document.getElementById('wapp-download-btn');
const imgAlert = document.getElementById('test-alert-img');
const themeBtn = document.querySelector('.test-btn')

console.log(themeBtn);
let themedElements = document.querySelectorAll('.light')
console.log('theme elements -> ', themedElements)

// themeBtn.addEventListener(onclick, function(){
//   console.log('hai cliccato il bottone del tema')
// });

function funnyAlert() {
  return alert('Ti consiglio di non cliccare su qualsiasi bottone che trovi in giro su internet. Per questa volta sei andato bene')
}

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

      inputSearch: '',
      
      themedElements,

      isDark: false

      // myTime

    }
  },

  methods: {

    setActive(index) {
      this.counter = index;

      this.contacts[this.counter].visible = true;
      this.activeContact = this.contacts[this.counter];
      console.log(this.activeContact);
    },

    sendMsg() {

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
            message: 'Ok!',
            status: 'received'
          },
  
        )
      }, 1000)

      
      console.log(this.activeContact.messages);

    },

    getLastMessage(contact) {
      return contact.messages.at(- 1).message
    },

    getLastDate(contact) {
      return contact.messages.at(- 1).date
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

    resetFilter() {
      this.inputSearch = '';
    },
    
    
    myTime() {
      return dt.setLocale('it').toLocaleString(initDate.TIME_24_WITH_SECONDS);
    },
    
    
    splitTime(contact) {
      const lastDate = this.getLastDate(contact).split(' ').at(0);
      const lastTime = this.getLastDate(contact).split(' ').at(1);
      // console.log(lastDate)
      // console.log(lastTime)



      // if (lastDate === myDate) {
      //   console.log('OGGI!!')
      // }


      return `${lastDate} ${lastTime.split(':').splice(0, 2).join(':')}`
    },

    getSure() {
      downloadBtn.addEventListener('click', funnyAlert);
  
  
      imgAlert.addEventListener('click', function(){
        funnyAlert();
        console.log('hai cliccato')
      });
    },

    changeTheme() {

      console.log('hai cliccato il bottone del tema')

      // console.log(this.themedElements)

      this.themedElements.forEach(element => {
        element.classList.toggle('dark')
      })
      this.isDark = !this.isDark
      console.log(this.isDark)

      // this.themedElements.forEach((element) => {
      //   console.log(element)
      // });

    }

  },

  computed: {

    date() {
      return this.myDate;
    },
    
    contactsFiltered(){
      return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.inputSearch.toLowerCase()))
    }
    
  },

  created() {

    // console.log(this.contacts)

    console.log(dt.setLocale('it').toLocaleString(initDate.TIME_24_WITH_SECONDS))

    // this.activeContact = this.contacts[this.counter]
    this.getSure()
  }

}).mount('#app')
