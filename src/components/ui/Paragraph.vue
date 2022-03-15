<template>
  <p class="paragraph" :class="[`m-${this.size},m-${this.weight},m-${this.color}`]"><slot></slot></p>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    size: {
      type: String,
      default: "14"
    },
    weight: {
      type: String,
      default: "regular"
    },
    color: {
      type: String,
      default: 'black'
    },
  },
  computed: {
    classes() {
      return [
        'paragraph',
        `m-${this.size}`,
        `m-${this.weight}`,
        `m-${this.color}`
      ]
    }
  },
}
</script>

<style lang="scss">
.paragraph {
  &.m-16 {
    font-size: 16px;
    line-height: 24px;
  }

  &.m-13 {
    font-size: 13px;
    line-height: 15px;
  }

  &.m-medium {
    font-weight: 500;
  }

  &.m-regular {
    font-weight: 400;
  }

  &.m-bold {
    font-weight: 700;
  }


  &.m-black {
    color: #111111
  }

  &.m-str-black {
    color: #000000
  }

}
</style>
