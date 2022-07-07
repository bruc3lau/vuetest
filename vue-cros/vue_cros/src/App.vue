<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <BlobImage src="/img/loginBI.1ac2a1e9.png" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import BlobImage from "./components/BlobImage.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    BlobImage,
  },
};
</script>

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
