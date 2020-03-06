<template>
  <div>
    <div class="container contact-container">
      <div class="row font-custom">
        <transition name="fade" appear>
          <div class="offset-md-2 col-md-8">
            <div class="contact-header text-center w-100 mb-4">
              say hello, make an order, or leave a message
            </div>

            <form @submit.prevent="sendEmail" data-netlify-recaptcha="true">
              <input type="hidden" name="avoidBots" value="">
              <div>
                <label for="name">contact info</label>
                <input type="text" name="customerName" class="w-100" v-model="contact" id="name" aria-describedby="emailHelp">
              </div>
              <div class="form-group">
                <label for="dateExpected">date expected</label>
                <input type="text" name="dateExpected" v-model="dateExpected" class="w-100" id="dateExpected" aria-describedby="dateExpected">
              </div>
              <div class="form-group">
                <label for="orderType">order type</label>
                <input type="text" name="orderType" class="w-100" v-model="orderType" id="orderType" aria-describedby="emailHelp">
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">description of project</label>
                <textarea class="w-100" v-model="description" name="description" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
              <div class="form-group mb-4">
                <label for="orderType">what is 2+2?</label>
                <input type="text" name="spamFighter" v-model="spamFighter" class="w-100" id="spamFighter" aria-describedby="spamFighter">
              </div>
              <div class="form-group text-center pt-2 mb-2">
                <button type="submit" value="Send" class="text-uppercase w-100 font-custom">Submit Order Request</button>
              </div>
            </form>

          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import axios from 'axios';

export default {
  data: function () {
    return {
      hidden: '',
      contact: '',
      orderType: '',
      description: '',
      dateExpected: '',
      spamFighter: ''
    }
  },
  methods: {
    processSubmit: function (msg) {
      this.contact = ''
      this.orderType = ''
      this.description = ''
      this.spamFighter = ''

      alert('Thank you for your order!')
    },
    sendEmail: function (e) {
      let self = this

      console.log(this.contact)
      console.log(this.orderType)
      console.log(this.description)
      console.log(this.spamFighter)

      if (this.contact !== '' && this.orderType !== '' && this.description !== '' && this.spamFighter === '4') {
        emailjs.sendForm('poyear_biz_gmail_com', 'template_XY9SLZs0', e.target, 'user_RJcuqrS1tkjsKkpmX86tS')
          .then((result) => {
              console.log('SUCCESS!', result.status, result.text);

              self.processSubmit()
          }, (error) => {
              console.log('FAILED...', error);

              console.log(self)
              // self.sendAlert()
              alert(burgers)
          });
      } else {
        alert('All form fields required.')
      }
    }
  },
  computed: {
  	isDisabled: function(){
    	return this.hidden !== '';
    }
  }
}
</script>

<style>
.contact-container {
  margin-bottom: 30px;
}

.img-thumb {
  width: 100%;
}

.contact-header {
  font-size: 32px;
  font-weight: 500;
}

input, textarea {
  padding: 4px;
  border-radius: 4px;
}

input[type=submit], button {
  padding:5px 15px; 
  background:#FFF; 
  border: 2px solid #333;
  -webkit-border-radius: 0px;
  border-radius: 10px; 
  cursor: pointer;
}

input[type=submit]:hover, button {
  /* background-color: #EEE; */
}
</style>
