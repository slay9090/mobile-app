<template>
  <div class="sex-chooser">
    <div class="sex-chooser_panel">
      <Card type="female" imgName="bella3-min.png" @click.native="setSexType('female')"/>
      <Card type="male" imgName="male2.png" @click.native="setSexType('male')"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import Card from "@/components/Card";
export default {
  name: "Page1",
  components: { Card },
  computed: {
    ...mapGetters(["getPerson"]),
  },
  methods: {
    ...mapMutations(['setPersonData',]),
    setSexType(typeValue){
      this.setPersonData({sex: typeValue})
    }
  }
};
</script>
<style lang="scss">
@import "src/assets/styles/sex_chooser";
</style>
