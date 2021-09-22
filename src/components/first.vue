<template>
  <div id="firstcomponent">
    <h1>{{ msg }}</h1>
    <h1>I am a title.</h1>
    <a> written by {{ author }} </a>
  </div>
</template>
 
<script type="text/javascript" setup>
defineProps({
  msg: String
})
</script>
 
<style>
</style>