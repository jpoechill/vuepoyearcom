<template>
  <div class="shop-container"></div>
</template>

<script>
export default {
  created: function () {
    this.$router.push('/shop')
  }
}
</script>

<style>
.img-container {
  width: 100%;
  margin-bottom: 30px;
}

.img-thumb {
  width: 100%;
}
</style>
