<template>
  <div>
    <div class="container about-container">
      <transition name="fade" appear>
        <div class="row">
          <div class="col-md-8 mb-4">
            <div class="img-about-container">
                <img src="/about-page-05.jpeg" class="img-about" alt="">
            </div>
          </div>
          <div class="col-md-4">
            <div class="font-custom text-left pb-4">
              Poyear has been baking cupcakes since 2012. <br><br>
              She specializes in decorative cupcakes, macarons, and multi-layered cakes. <br><br>
              Poyear is the mother of 2 mixed-race girls, Peyton and Olivia.      
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.img-about-text {
  margin-top: 80px; 
  font-size: 80px; 
  line-height: 60px; 
  font-weight: 600; 
  letter-spacing: 10px; 
  color: #FFF; 
  position: absolute;
}

.img-about-text-sml {
  font-size: 50px; 
}

.img-about-container {
  background-color: #EEE;
}

.img-about {
  width: 100%;
}

.about-container {
  margin-bottom: 15px;
}
</style>
