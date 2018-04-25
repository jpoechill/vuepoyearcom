<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 container-404">
          Oops, not here! Go <a href="/shop">home</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created: function () {
    this.$router.push('/shop')
  }
}
</script>
<style>
.container-404 {
  padding-bottom: 15px;
}
</style>