<template>
  <div class="physical-settings">
    <div class="physical-settings_form">
      <div class="physical-settings_input">
        <label>Ваш возвраст</label>
        <BInput type="BText" suffix-text="год(-а)/лет" v-model="comFormData.age" />
      </div>

      <div class="physical-settings_input">
        <label>Рост</label>
        <BInput type="BText" suffix-text="см" v-model="comFormData.height" />
      </div>
      <div class="physical-settings_input">
        <label>Текущий вес</label>
        <BInput type="BText" suffix-text="кг" v-model="comFormData.weight" />
      </div>
      <div class="physical-settings_input">
        <label>Цель</label>
        <BInput type="BSelector" :options="options" v-model="comFormData.target" />
      </div>
      <div class="physical-settings_input">
        <label>Целевой вес</label>
        <BInput type="BText" suffix-text="кг" v-model="comFormData.dreamWeight" />
      </div>
    </div>
  </div>
</template>

<script>
import BInput from "@/components/BaseElements/BInput";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Page2",
  components: { BInput },
  data() {
    return {
      options: [
        { id: 1, name: "Быстрая скорсоть набора" },
        { id: 2, name: "Средняя скорсоть набора" },
        { id: 3, name: "Поддержка" },
        { id: 4, name: "Средняя скорсоть похудения" },
      ],
    };
  },
  computed: {
    ...mapGetters(["getPerson"]),
    comFormData: {
      get(){

        return this.getPerson
      },
      set(val){
        this.setPersonData(val)
      }
    },

  },
  methods: {
    ...mapMutations(["setPersonData"]),
  },
};
</script>

<style scoped lang="scss">
@import "src/assets/styles/physical-settings";
</style>
