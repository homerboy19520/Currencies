<template>
  <div class="select" @click="toggle">
    <p class="select__active" :class="{ choose: isShow }">{{ active }}</p>
    <ul class="select__list" v-show="isShow">
      <li
        class="select__item"
        v-for="(item, index) in mass"
        :key="index"
        @click="onItem(item)"
      >
        <Paragraph>{{ item }}</Paragraph>
      </li>
    </ul>
  </div>
</template>

<script>
import Paragraph from "@/components/ui/Paragraph";
export default {
  name: "Select",
  components: { Paragraph },
  data() {
    return {
      activeValue: null,
      isShow: false,
    };
  },

  props: {
    mass: {
      type: Array,
    },
  },

  methods: {
    onItem(value) {
      this.activeValue = value;
      this.$emit("onitem", value);
    },

    toggle() {
      this.isShow = !this.isShow;
    },
  },

  computed: {
    active() {
      if (this.activeValue === null) {
        return this.mass[0];
      } else {
        return this.activeValue;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  font-family: var(--font-montseratt);
  cursor: pointer;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  &__item {
    padding: 15px;
    cursor: pointer;
    border-bottom: 1px solid #f1f1f1;
  }

  &__active {
    padding: 15px;
    &.choose {
      border-bottom: 1px solid #f1f1f1;
    }
  }
}
</style>
