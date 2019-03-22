<template>
  <div>
    <div class="container about-container">
      <div class="row">
        <div class="col-md-12">
          <transition name="fade" appear>
            <div style="position: relative">
              <!-- <div class="text-center col-md-12 d-none d-md-block img-about-text">
                ABOUT <br> –
              </div>
              <div class="text-center col-md-12 d-md-none img-about-text img-about-text-sml">
                ABOUT <br> –
              </div> -->
              <div class="img-about-container">
                  <img src="/about-page-04.png" class="img-about" alt="">
              </div>
            </div>
          </transition>
          <div class="about-text font-custom text-center pb-4">
            Poyear has been baking cupcakes since 2012. <br> 
            She is the mother of 2 mixed-race girls, Peyton and Olivia.      
          </div>
        </div>
      </div>
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

.about-text {
  margin-top: 30px;
}
</style>
