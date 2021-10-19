<template>
  <div :class="{card: true, 'is-selected': getPerson.sex === type}">
    <div class="card_image">
      <img :src="require(`@/assets/img/${imgName}`)" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Card",
  props: {
    imgName: String,
    type: String,
  },
  computed: {
    ...mapGetters(["getPerson"]),
  },
};
</script>

<style scoped lang="scss">
@import "Card";
</style>
