<template>
  <div class="input-block">
    <input
      :type="modifier"
      :disabled="isDisabled"
      required
      :value="localValue"
      @input="input($event.target.value)"
    />
    <span class="placeholder">
      {{ placeholder }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Input",

  props: {
    placeholder: {
      type: String,
      default: "",
    },
    modifier: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },

    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localValue: "",
    };
  },
  methods: {
    input(value) {
      this.localValue = value;
    },
  },
  mounted() {
    this.localValue = this.value;
  },
  watch: {
    localValue() {
      this.$emit("oninput", this.localValue);
    },

    value() {
      this.localValue = this.value;
    },
  },
};
</script>

<style lang="scss">
.input-block {
  position: relative;
  width: 100%;

  & input {
    width: 100%;
    outline: none;
    padding: 24px 16px 6px 16px;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    font-family: var(--font-montseratt);
    font-weight: 400;
    color: var(--color-black);
    font-size: 14px;
    line-height: 24px;

    &:focus {
      color: #284b63;
      border-color: #284b63;
    }

    &:focus + span.placeholder {
      color: #284b63;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  & .placeholder {
    position: absolute;
    top: 50%;
    left: 16px;
    display: flex;
    align-items: center;
    transition: all 0.2s;
    transform-origin: 0 0;
    background: none;
    pointer-events: none;
    transform: scale(1) translateY(-20px);

    font-family: var(--font-montseratt);
    font-weight: 400;
    color: var(--color-grey);
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
