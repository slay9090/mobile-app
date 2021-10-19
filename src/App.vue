<template>
  <div id="app">
    <div class="app_wrapper">
      <div class="app_container">
        <NavBar />
        <div class="app_content">
          <router-view />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>


import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default {
  name: "App",
   components: { Footer, NavBar },
};
</script>

<style lang="scss">
@import "assets/styles/app";
</style>
