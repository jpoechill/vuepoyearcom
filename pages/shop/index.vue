<template>
  <div>
    <div class="container">
      <div class="row">
        <div v-for="(item) in $store.state.firestoreShopItems" v-if="item.visible" v-bind:key="item.itemName" class="col-md-4">
          <transition name="fade" appear>
            <div class="img-container">
              <nuxt-link :to="item.url">
                <div class="overlay-info text-center">
                  <span class="item-title-main">{{ item.itemName }}</span><br>
                  <span class="item-price-main">{{ item.price }}</span>
                </div>
                <div class="overlay"></div>
                <div class="img-container-child">
                  <img :src="item.itemImg" class="img-thumb" alt="">
                </div>
              </nuxt-link>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {}
  },
  components: {}
}
</script>

<style>
.shop-container {
  min-height: 400px;
}

.img-container {
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
}

.img-container:hover .overlay {
  display: block;
  opacity: 1;
}

.img-container:hover .overlay-info {
  display: block;
  cursor: pointer;
  opacity: 1;
}

.img-thumb {
  width: 100%;
}

.overlay {
  background-color: rgba(255, 255, 255, 0.4);
  opacity: 0;
  padding-bottom: 100%;
  width: 100%;
  position: absolute;
  z-index: 11;
  -webkit-transition: width 2s; /* Safari */
  transition: opacity .2s ease-in-out;;
}

.overlay-info {
  opacity: 0;
  padding-bottom: 100%;
  padding-top: 40%;
  width: 100%;
  position: absolute;
  z-index: 12;
  -webkit-transition: width 2s; /* Safari */
  transition: opacity .2s ease-in-out;;
}

.item-title-main {
  letter-spacing: 4px;
  font-style: italic;
  text-transform: uppercase;
  color: #FFF;
  font-weight: 600;
  font-size: 24px;
}

.item-price-main {
  color: #FFF;
  font-size: 18px;
}

.img-container-child {
  position: absolute;
  width: 100%;
  z-index: -10;
}
</style>
