<template>

  <div>

    <component
      :is="type"
      :suffix-text="suffixText"
      :options="options"
      v-model="value"
    />
  </div>

</template>

<script>
import BText from "@/components/BaseElements/BText";
import BSelector from "@/components/BaseElements/BSelector";
export default {
  name: "BInput",
  components: { BSelector, BText },
  props: {
    suffixText: String,
    type: String,
    options: Array
  },
  data(){
    return{
      value: null
    }
  },
  watch: {
    value(val){
      this.$emit('input', val)
    }
  }
};
</script>

<style scoped></style>
