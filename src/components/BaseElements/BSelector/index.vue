<template>
  <div class="bselector">
    <input type="text" class="bselector_element" @click="collapsed" :value="selected ? selected.name : null"/>
    <div class="bselector_suffix" @click="collapsed">
      <img :src="require('@/assets/img/Arrow_3.svg')" />
    </div>
    <div class="bselector_dropdown-list" v-if="isCollapse">
      <div class="bselector_dropdown-list_title">
        <div class="title_box">
          <div>Выбрать</div>
          <div class="bselector_suffix" @click="collapsed">
            <img :src="require('@/assets/img/Arrow_3.svg')" />
          </div>
        </div>
        <div class="separator-line"></div>
      </div>
      <div class="bselector_dropdown-list_items">
        <p
          class="options_item"
          v-for="item in options"
          :key="item.id"
          @click="setSelectItem(item)"
        >
          {{ item.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BSelector",
  props: {
    options: Array,
  },
  data() {
    return {
      isCollapse: false,
      selected: null,
    };
  },
  methods: {
    collapsed() {
      this.isCollapse = !this.isCollapse;
    },
    setSelectItem(item) {
      this.$emit("input", item);
      this.selected = item
      this.isCollapse = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import "BSelector";
</style>
