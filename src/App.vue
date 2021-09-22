<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import firstcomponent from './components/first.vue'
import About from './views/About.vue'
import Home from './views/Home.vue'
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <About></About>
  <Home></Home> -->
  <router-view></router-view>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" />
  <firstcomponent msg="hxy 好可爱"/> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
