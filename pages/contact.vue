<template>
  <div>
    <div class="container contact-container">
      <div class="row font-custom">
        <transition name="fade" appear>
          <div class="offset-md-2 col-md-8">
            <div class="contact-header text-center w-100">leave me a message!</div>
            <form action="https://getsimpleform.com/messages?form_api_token=ac2fde00ae6aeab4808aab1389938e7f" method="post">
            name <br><input name='name' type="text" class="w-100"><br>
            email <br><input name='email' type="text" class="w-100"><br>
            subject <br><input name='subject' type="text" class="w-100"><br>
            message <br><textarea name="body" class="w-100" rows="6"></textarea><br>
            <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
            <input type='hidden' name='redirect_to' value='https://poyear.com' />
            <input type='submit' value='leave a message' class="w-100 font-custom" />
          </form>
          </div>
        </transition>
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
.contact-container {
  margin-bottom: 30px;
}

.img-thumb {
  width: 100%;
}

.contact-header {
  font-size: 32px;
  font-weight: 500;
}

input, textarea {
  padding: 4px;
  border-radius: 4px;
}

input[type=submit], button {
  padding:5px 15px; 
  background:#FFF; 
  border: 2px solid #333;
  -webkit-border-radius: 0px;
  border-radius: 10px; 
  cursor: pointer;
}

input[type=submit]:hover, button {
  background-color: #EEE;
}
</style>
