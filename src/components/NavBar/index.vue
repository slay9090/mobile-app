<template>
  <div class="navbar">
    <div class="status-block">
      <div class="status-block_time">08:15</div>
      <div class="status-block_connections">
        <img :src="require('@/assets/img/CellularConnection.svg')" />
        <img :src="require('@/assets/img/Wifi.svg')" />
        <img :src="require('@/assets/img/Battery.svg')" />
      </div>
    </div>
    <div class="panel-block">
      <div class="panel-block_title">

          <button
            class="btn_previes"
            v-if="$route.name !== stepsMap.orders[0]"
            @click="back"
          >
            <img :src="require('@/assets/img/Arrow_2.svg')">
          </button>

        <span class="panel-block_title__text">{{
          stepsMap[routeName] ? stepsMap[routeName].navTitle : null
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { stepsMap } from "@/utills/configs/StepsMap";
import router from "@/router";
export default {
  name: "NavBar",
  data() {
    return {
      stepsMap: stepsMap,
    };
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
  },
  methods: {
    back(){
      const currentIndex = stepsMap.orders.indexOf(this.$route.name);
      router.push({ path: stepsMap.orders[currentIndex - 1] });
    }
  }
};
</script>

<style scoped lang="scss">
@import "NavBar";
</style>
