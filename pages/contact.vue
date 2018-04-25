<template>
  <div>
    <div class="container contact-container">
      <div class="row">
        <transition name="fade" appear>
          <div class="offset-md-4 col-md-4">
            <span class="contact-header">Contact</span> <br>
            <form action="https://getsimpleform.com/messages?form_api_token=ac2fde00ae6aeab4808aab1389938e7f" method="post">
            Name <br><input name='name' type="text" size="40"><br>
            Email <br><input name='email' type="text" size="40"><br>
            Subject <br><input name='subject' type="text" size="40"><br>
            Message <br><textarea name="body" id="" cols="40" rows="6"></textarea><br>
            <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
            <input type='hidden' name='redirect_to' value='https://poyear.com' />
            <input type='submit' value='Submit' />
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
