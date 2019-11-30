<template>
  <div>
    <div class="container font-custom shop-item">
      <transition name="fade" appear>
        <div class="row" v-for="(item, index) in $store.state.shopItems" v-if="item.itemShrtName === $route.params.shopItem" v-bind:key="index">
          <!-- Mobile -->
          <div class="col-md-8">
            <img v-for="(img, index) in item.itemDetailImgs" :src="img" class="lrg-thumb" v-bind:key="index" :alt="'Img: ' + img">
          </div>
          <div class="col-md-4 item-detail-container d-md-none text-center mb-3">
            <span class="item-title">{{ item.itemName }}</span><br>
            <span class="item-price">
              {{ item.price }}
            </span><br><br>
            <span class="item-description">
              {{ item.description }}
              <br>
            </span>
          </div>
          <!-- Desktop -->
          <div class="col-md-4 item-detail-container d-none d-md-block">
            <span class="item-title">{{ item.itemName }}</span><br>
            <span class="item-price">
              {{ item.price }}
            </span><br><br>
            <span class="item-description">
              {{ item.description }}
            </span>
          </div>
          <div class="container">
            <div class="row text-center">
              <div class="col-md-12 mb-3">
                <div id="back-link">
                  <nuxt-link to="/shop">go back</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  data: function () {
    return {
      // itemQuantity: 1,
      currentItem: {
        id: '00123',
        name: 'Mocha',
        price: '25',
        quantity: 1
      }
    }
  },
  created: function () {
    this.filterMatches()
  },
  methods: {
    filterMatches: function () {
      let match = false

      for (let item in this.$store.state.shopItems) {
        let searchForItem = this.$route.params.shopItem
        let searchCurrentItem = this.$store.state.shopItems[item].itemShrtName

        if (searchForItem === searchCurrentItem) {
          match = true
        }
      }

      if (!match) {
        this.goHome()
      }
    },
    addToCart: function () {
      // alert('Add to Cart ' + this.currentItem.quantity)
      // this.$store.commit('addItemToCart', this.currentItem)
    },
    goHome: function () {
      this.$router.push('/shop')
    }
  }
}
</script>

<style>
.shop-item {
  margin-bottom: 0px;
}

.item-title {
  font-size: 36px;
  font-style: italic;
  text-transform: uppercase;
  line-height: 54px;
}

.item-description {
  font-weight: 300;
  font-style: italic;
}

.item-price {
  font-size: 36px;
}

.item-detail-container {
  margin-top: -12px;
}

.lrg-thumb {
  width: 100%;
  margin-bottom: 30px;
}

.back-to-top {
  margin-top: -15px;
  margin-bottom: 15px;
}
</style>
