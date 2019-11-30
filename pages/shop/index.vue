<template>
  <div>
    <div class="container">
      <div class="row font-custom">
        <div class="col-md-4" v-for="(item) in $store.state.shopItems" v-bind:key="item.itemName">
          <transition name="fade" appear>
            <div v-if="item.visible" class="img-container" ref="imgContainer">
              <nuxt-link :to="item.url">
                <div class="overlay-info text-center d-flex align-items-center" :style="{ height: containerWidth + 'px' }">
                  <div class="w-100 text-center">
                    <span class="item-title-main">{{ item.itemName }}</span><br>
                    <span class="item-price-main">{{ item.price }}</span>
                  </div>
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
    return {
      containerWidth: null
    }
  },
  methods: {
    updateWidth: function () {
      if (this.$refs.imgContainer[0]) {
        console.log('123')
        this.containerWidth = this.$refs.imgContainer[0].clientWidth
      }
    }
  },
  mounted(){
      this.updateWidth()
      let self = this

      window.addEventListener('resize', function() {
        self.updateWidth()
      });
  }
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
  background-color: rgba(0, 0, 0, 0.3);
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
  /* padding-bottom: 100%;
  padding-top: 30%; */
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
  font-size: 40px;
}

.item-price-main {
  color: #FFF;
  font-size: 30px;
}

.img-container-child {
  position: absolute;
  width: 100%;
  z-index: -10;
}
</style>
