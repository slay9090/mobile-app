<template>
  <div class="footer">
    <button class="btn_next" @click="next">
      <span class="btn_next_text">Далее</span>
    </button>
    <div class="separator-line"></div>
  </div>
</template>

<script>
import { stepsMap } from "@/utills/configs/StepsMap";
import router from "@/router";
import { mapGetters } from "vuex";
export default {
  name: "Footer",
  computed: {
    ...mapGetters(["getPerson"]),
  },
  methods: {
    next() {
      const currentIndex = stepsMap.orders.indexOf(this.$route.name);
      if(stepsMap.orders[currentIndex + 1]){
        router.push({ path: stepsMap.orders[currentIndex + 1] });
      }
      else {
        alert(JSON.stringify(this.getPerson))
      }

    },
  },
};
</script>

<style scoped lang="scss">
@import "Footer";
</style>
