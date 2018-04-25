<template>
  <div>
    <transition name="fade" appear>
      <div class="container contact-container">
        <div class="row">
          <div class="col-md-6">
            <span class="contact-header">Shopping Cart</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            Items <br>
            <div v-for="(item, index) in $store.state.cart" v-bind:key="index">
              Item {{ index }}: {{ item.name }}, Item Description, Item Quantity, Item Subtotal <br>
              Edit Quantity <br>
              Delete Item <br><br>
            </div>
            Cart Quantity: {{ $store.state.cart.length }} <br><br>
            Order Total <br>
          </div>
          <div class="col-md-6">
            Enter Delivery Information <br>
            Enter Payment Information <br>
            Confirm Order
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {}
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
  font-size: 36px;
  font-weight: 500;
}

input[type=submit], button {
  padding:5px 15px; 
  background:#FFF; 
  border: 2px solid #333;
  -webkit-border-radius: 0px;
  border-radius: 0px; 
  cursor: pointer;
}

input[type=submit]:hover, button {
  background-color: #EEE;
}
</style>
