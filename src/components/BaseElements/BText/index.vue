<template>
<div class="btext">

  <input type="text" class="btext_element" v-model="comVal">
  <div class="btext_suffix">
    {{suffixText}}
  </div>
</div>
</template>

<script>
export default {
  name: "BText",
  props: {
    suffixText: String
  },
  data(){
    return{
      // либо пропсом если нужны данным при инициализ
      value: null
    }
  },
  computed: {
    comVal:{
      get(){
        return this.value
      },
      set(val){
        this.$emit("input", val)
      }

    }
  }
};
</script>

<style scoped lang="scss">
@import "BText";
</style>