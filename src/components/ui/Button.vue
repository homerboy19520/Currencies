<template>
  <button class="button" :class="[`m-${modifier}`]" @click.self="click">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",

  data() {
    return {};
  },

  props: {
    modifier: String,
    default: null,
  },

  methods: {
    click() {
      this.$emit("onclick");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  box-sizing: border-box;
  cursor: pointer;
  padding: 0;

  &.m-text {
    font-family: var(--font-montseratt);
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-grey);
    transition: opacity 0.2s ease-out;
    background-color: transparent;
    border: none;

    &:hover {
      opacity: 0.6;
    }
  }

  &.m-primary {
    width: fit-content;
    padding: 10px 20px;
    border-radius: 100px;
    background-color: var(--color-blue);
    border: 1px solid transparent;
    font-family: var(--font-montseratt);
    font-size: 14px;
    line-height: 24px;
    color: var(--color-white);
    font-weight: 400;
    transition: border-color 0.2s ease-out, background-color 0.2s ease-out,
      color 0.2s ease-out;

    &:hover {
      border-color: var(--color-blue);
      background-color: transparent;
      color: var(--color-blue);
    }

    @media (max-width: 560px) {
      padding: 5px 10px;
      font-size: 12px;
      width: 100%;
    }
  }

  &.m-secondary {
    width: fit-content;
    display: flex;
    gap: 4px;
    padding: 10px 20px;
    border-radius: 100px;
    background-color: var(--color-white);
    border: 2px solid var(--color-blue);
    font-family: var(--font-montseratt);
    font-size: 14px;
    line-height: 24px;
    color: var(--color-blue);
    font-weight: 400;
    transition: border-color 0.2s ease-out, background-color 0.2s ease-out,
      color 0.2s ease-out;

    & svg path {
      transition: fill 0.2s ease-out;
    }

    &:hover {
      border-color: transparent;
      background-color: var(--color-blue);
      color: var(--color-white);

      svg path {
        fill: var(--color-white);
      }
    }

    @media (max-width: 560px) {
      padding: 5px 10px;
      font-size: 12px;
    }
  }

  &.m-delete {
    font-family: var(--font-montseratt);
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-blue);
    transition: opacity 0.2s ease-out;
    background-color: transparent;
    border: none;

    &:hover {
      opacity: 0.6;
    }

    @media (max-width: 560px) {
      padding: 10px 50px;
    }
  }
}
</style>
