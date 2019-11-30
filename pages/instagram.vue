<template>
  <div class="container">
    <div class="row font-custom">
      <div class="col-md-4" v-for="(item, index) in imgList" v-bind:key="index" ref="igImgContainer">
        <transition name="fade" appear>
          <div class="img-container bg-center"  style="background-color: #fff;" :style="{ backgroundImage: 'url(' + item.imgUrl + ')'}">
            <a :href="item.url" target="_blank">
              <div class="overlay-info text-center d-flex align-items-center" :style="{ height: containerWidth + 'px' }">
                <div class="w-100 text-center p-4">
                  <!-- <span class="item-title-main">{{item.caption}}</span><br> -->
                  <span class="item-price-main">{{item.caption}}</span>
                </div>
              </div>
              <div class="overlay"></div>
            </a>
          </div>a
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {},
  data() {
    return {
      imgList: [
        {
          imgUrl: '/',
          url: '/',
          caption: ''
        }
      ],
      containerWidth: null
    }
  },  
  methods: {
    updateWidth: function () {
      if (this.$refs.hasOwnProperty('igImgContainer')) {
        this.containerWidth = this.$refs.igImgContainer[0].clientWidth
      }
    }
  },  
  mounted(){
    let self = this

    window.addEventListener('resize', function() {
      self.updateWidth()
    });

    this.updateWidth()
  },
  created() {
    let self = this

    axios
      .get('https://api.instagram.com/v1/users/self/media/recent?access_token=7708982671.d90570a.53834e48180f4efd946ce4d34782eddf')
      .then(function(response){
        const list = response.data.data

        console.log(list)
        // setTimeout(function(){
        self.imgList = []

        list.forEach((item, index) => {
          return (index <= 8) ? self.imgList.push({
            imgUrl: item.images.standard_resolution.url,
            url: item.link,
            caption: (!item.caption) ? '' : item.caption.text
          }) : null;
        })
        // }, 0); 
    })
  },
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

.bg-center {
  background-position: center;
  background-size: cover;
}
</style>
