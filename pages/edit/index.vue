<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12" v-if="$store.state.loggedIn">
          Poyear Rith <button @click="logOut">Logout</button><br><br>
        </div>
        <div class="col-md-12" v-if="!$store.state.loggedIn">
          <input type="text" placeholder="Email"> <input type="password" placeholder="Password"> 
          <button @click="logIn">Login</button><br><br>
        </div>
      </div>
      <div class="row" v-if="$store.state.loggedIn">
        <div class="col-md-6 edit-container" v-for="(item, index) in $store.state.firestoreShopItems" :key="index">
          <!-- Edit Products -->
          Item Num: {{ index + 1 }} <br>
          Item Name: <br><input type="text" v-model="item.itemName"><br>
          Item Price: <br><input type="text" v-model="item.price"><br>
          Description: <br>
          <textarea name="" id="" cols="30" rows="5" v-model="item.description"></textarea>
          <br>
          <!-- Cover Image: <br>
          <input name="myFile" type="file"> <br>
          Detail Images: <br>
          <input name="myFile" type="file"> <br><br> -->
          <button @click="deleteItem(item.itemID, index)">Delete</button><button @click="saveItem(item)">Save</button>
          <br>
        </div>
        <div class="col-md-6">
            Item Num: {{ $store.state.firestoreShopItems.length + 1 }} <br>
            Item Name: <br><input type="text" placeholder="New Name..."><br>
            Item Price: <br><input type="text" placeholder="New Price..."><br>
            Description: <br>
            <textarea name="" id="" cols="30" rows="5" placeholder="New Description..."></textarea>
            <br>
            <!-- Cover Image: <br>
            <input name="myFile" type="file"> <br>
            Detail Images: <br>
            <input name="myFile" type="file"> <br><br> -->
            <button>Save</button>
            <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '~/components/firebaseInit'

export default {
  data: function () {
    return {
    }
  },
  methods: {
    getItemsFromFirestore: function () {
      let self = this

      // self.$store.commit('clearStateItems')

      // db.collection("items").get().then(function(querySnapshot) {
      //   querySnapshot.forEach(function(doc) {
      //     console.log(doc.id, " => ", doc.data());
          
      //     self.$store.commit('updateFirestoreItems', doc.data())
      //   });
      // });
    },
    deleteItem: function (itemID, index) {
      let self = this

      if (confirm('Are you sure you want to delete this item?')) {
        self.$store.commit('deleteFirestoreItem', {itemID, index})
      }
    },
    saveItem: function (item) {
      // console.log('Saving: ' + item.itemName)

      // db.collection("items").doc(item.itemID).update(item)
      // .then(function() {

      //   alert('Changes saved.')
      //   console.log("Document successfully updated!");
      // })
      // .catch(function(error) {
      //     // The document probably doesn't exist.
      //     console.error("Error updating document: ", error);
      // });

      // this.getItemsFromFirestore()
    },
    logIn: function () {
      // this.$store.commit('logIn')
    },
    logOut: function () {
      alert('Logout')

      // this.$router.push('/shop')
    }
  },
  created: function () {
    // this.getItemsFromFirestore()
  },
  components: {}
}
</script>

<style>
.edit-container {
  margin-bottom: 15px;
}
</style>
