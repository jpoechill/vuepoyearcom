<template>
  <div>
    <div class="container ">
      <!-- Desktop View, Logo Header -->
      <div class=" d-none d-md-block">
        <div class="position-absolute w-100">
          <div class="row">
            <div class="col-md-5 text-center">
              <img src="/stripe-left.png" class="w-custom pt-5" alt="POYEAR.COM">
            </div>
            <div class="col-md-5 offset-md-2 text-center">
              <img src="/stripe-right.png" class="w-custom pt-5" alt="POYEAR.COM">
            </div>
          </div>
        </div>
        <div class="row header">
          <div class="col-md-4">
            <a href="https://instagram.com/poyearcom">
              <img src="/ig-glyph.png" class="logo-img w-10" alt="POYEAR.COM">
            </a>
          </div>
          <div class="col-md-4 text-center">
            <span class="logo logo-lrg">
              <nuxt-link to="/"><img class="logo-img" src="/logo-mark-02-2019.png" alt="POYEAR.COM"></nuxt-link>
            </span>
          </div>
        </div>
      </div>
      <!-- End Desktop View, Logo Header -->
      <!-- Start Mobile View, Logo Header -->
      <div class="d-md-none">
        <div class="row header d-md-none">
          <div class="col-md-4 position-absolute z-index-top">
            <a href="https://instagram.com/poyearcom">
              <img src="/ig-glyph.png" class="logo-img w-10" alt="POYEAR.COM">
            </a>
          </div>
          <div class="col-md-12 text-center">
            <span class="logo logo-sm">
              <nuxt-link to="/"><img class="logo-img-sml" src="/logo-mark-2019.png" alt="POYEAR.COM"></nuxt-link>
            </span>
          </div>
        </div>
      </div>
      <!-- End Mobile View, Logo Header -->
      <!-- Start Nav -->
      <div class="row text-center font-custom">
        <div class="col-md-12">
        <nuxt-link to="/">poyear.com</nuxt-link>
        </div>
      </div>
      <div class="row text-center font-custom pb-4">
        <div class="col-md-12">
          <nuxt-link to="/about">about</nuxt-link>&nbsp;
          <nuxt-link to="/shop">shop</nuxt-link>&nbsp;
          <nuxt-link to="/contact">contact</nuxt-link>&nbsp;
        </div>
      </div>
      <div class="d-md-none">
        <div class="row">
          <div class="col-md-4 offset-md-4 mb-4 text-center">
            <img src="/stripe-top.png" class="w-100" alt="">
          </div>
        </div>
      </div>
      <!-- End Nav -->
    </div>
    <nuxt></nuxt>
    <!-- Start Footer -->
    <div class="container footer">
      <div class="row">
        <div class="col-md-4 offset-md-4 mb-4 text-center">
          <img src="/stripe-bottom.png" class="w-100" alt="">
        </div>
      </div>
      <div class="row font-custom">
        <!-- for Desktop -->
        <div class="col-md-12 d-none d-md-block text-center">
          <div class="mb-3">
            crafted by hand from Oakland, CA
          </div>
          <a href="https://twitter.com/poyearrith"><i class="fab fa-twitter font-awesome"></i></a>
          <a href="https://www.instagram.com/poyear/"><i class="fab fa-instagram font-awesome"></i></a>
          <a href="https://www.facebook.com/poyear.rith"><i class="fab fa-facebook font-awesome"></i></a>
        </div>
      </div>
      <div class="row d-md-none font-custom">
        <!-- for Mobile -->
        <div class="col-md-6 text-center">
          <div class="mb-3">
            crafted by hand from Oakland, CA
          </div>
          <a href="https://twitter.com/poyearrith"><i class="fab fa-twitter font-awesome-left"></i></a>
          <a href="https://www.instagram.com/poyear/"><i class="fab fa-instagram font-awesome-left"></i></a>
          <a href="https://www.facebook.com/poyear.rith"><i class="fab fa-facebook font-awesome-left"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import db from '~/components/firebaseInit'

export default {
  data: () => {
    return {
      currCollection: 'shop-items',
      useCloudData: true
    }
  },
  methods: {
    getItemsFromFirestore: function () {
      let self = this

      // db.collection(this.currCollection).get().then(function(querySnapshot) {
      //   querySnapshot.forEach(function(doc) {
      //     // console.log('Doc ID: ' + doc.id)
      //     // self.$store.commit('updateFirestoreItems', { item: doc.data(), itemID: doc.id })
      //   });
      // });
    },
    initialize: function () {
      let self = this
      let currCollection = this.currCollection

      // clear the collection, and replace with local data (Vuex store)
      // db.collection(currCollection).get().then(function(querySnapshot) {
      //   querySnapshot.forEach(function(doc) {
      //     db.collection(currCollection).doc(doc.id).delete()
      //   });
      // }).then(function() {
      //   for (let item in self.$store.state.shopItems) {
      //     let currItem = self.$store.state.shopItems[item]

      //     // provide an index num for reference
      //     currItem['index'] = Number(item)
      //     db.collection(currCollection).add(currItem)
      //   }
      // });
    }
  },
  created: function () {
    // let self = this

    // if (this.useCloudData) {
    //   this.getItemsFromFirestore()
    // } else {
    //   for (let item in self.$store.state.shopItems) {
    //     let currItem = self.$store.state.shopItems[item]

    //     currItem['index'] = Number(item)
    //     self.$store.commit('updateFirestoreItems', { item: currItem, itemID: '' })
    //   }
    // }

    // use this function for flushing
    // out data (collections) on the cloud
    // this.initialize()
  }
}
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.nav-container a, a:link, a:active, a:visited {
  color: #111;
  text-decoration: none;
}

.nav-container a:hover {
  color: #111;
  text-decoration: none;
  border-bottom: 3px solid lightpink;
  padding-bottom: 4px;
}


.z-index-top {
  z-index: 100;
}

.position-absolute {
  position: absolute;
}

.w-10 {
  width: 10%;
}

.w-custom {
  width: 60%;
}

.w-15 {
  width: 15%;
}

.w-30 {
  width: 30%;
}

.logo {
  /* border: 4px solid #DDD; */
  padding: 4px 0px;
  font-family: 'Gochi Hand', cursive;
}

.logo-lrg {
  font-size: 80px;
}

.font-custom {
  font-family: 'Gaegu', cursive;
  font-size: 32px;
}

.logo-sm {
  font-size: 50px;
}


.logo-img {
  max-width: 175px;
  padding: 30px 0px 6px;
}


.logo-img-sml {
  width: 170px;
  margin: 28px 0px 10px;
}

a:hover {
  color: lightpink;
  /* border-bottom: 3px solid lightpink; */
}

.logo a {
  color: lightpink;
}

.header {
  margin-top: 0px;
}

.header-details {
  margin-bottom: 30px;
  margin-top: -8px;
  font-weight: 500;
  color: #111;
  letter-spacing: 2px;
}

.word-spacing {
  word-spacing: 20px;
}

.nav-links {
  color: #111;
  font-size: 14px;
  font-weight: 500;
}

.nav-container {
  margin-bottom: 30px;
}

.footer {
  margin-top: 0px;
  margin-bottom: 100px;
  font-size: 16px;
}

.footer a {
  color: #111;
}

.font-awesome {
  font-size: 32px;
  margin-left: 20px;
}

.font-awesome-left {
  font-size: 32px;
  margin-right: 20px;
}

button {
  padding:5px 15px; 
  background:#FFF; 
  border: 2px solid #333;
  -webkit-border-radius: 0px;
  border-radius: 0px; 
  cursor: pointer;
}

button:hover {
  background-color: #EEE;
}

#back-link, #back-link:link, #back-link:visited, #back-link:active {
  color: #555;
  margin-bottom: 15px;
  display: block;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
