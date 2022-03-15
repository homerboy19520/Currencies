<template>
  <div class="card-currencies">
    <div class="card-currencies__wrapper">
      <Paragraph>
        1 {{ isSwitch ? "RUB" : char }} -
        {{ isSwitch ? calcValue : value }}
        {{ isSwitch ? char : "RUB" }}</Paragraph
      >
      <Icons
        :class="[`m-${state}`]"
        :width="16"
        :height="16"
        icon-name="arrow"
        viewBox="0 0 1280.000000 1280.000000"
        ><g
          transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M3145 12785 c-49 -17 -90 -62 -104 -112 -8 -26 -11 -697 -11 -2145
l0 -2108 -1275 0 c-1049 0 -1281 -2 -1308 -14 -78 -32 -124 -132 -97 -208 13
-36 5793 -6786 5841 -6821 40 -29 111 -34 161 -11 34 15 291 315 1633 1909
876 1039 2153 2556 2839 3370 687 814 1260 1497 1274 1518 47 71 28 168 -45
224 l-36 28 -1294 3 -1293 2 0 2134 0 2133 -23 34 c-12 19 -42 44 -67 57 l-44
22 -3056 0 c-2607 -1 -3061 -3 -3095 -15z"
          /> </g
      ></Icons>
    </div>
  </div>
</template>

<script>
import Paragraph from "@/components/ui/Paragraph.vue";
import Icons from "@/components/icons/icons";

export default {
  name: "CardCurrencies",

  props: {
    state: {
      type: String,
    },

    nominal: {
      type: Number,
    },

    char: {
      type: String,
    },

    value: {
      type: Number,
    },

    previous: {
      type: Number,
    },

    isSwitch: {
      type: Boolean,
      required: true,
    },
  },

  components: {
    Icons,
    Paragraph,
  },

  computed: {
    calcValue() {
      return ((1 / this.value) * this.nominal).toFixed(3);
    },
  },
};
</script>

<style lang="scss" scoped>
.card-currencies {
  font-family: var(--font-montseratt);
  padding: 30px;

  &__wrapper {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    & svg {
      transition: transform 0.2s ease-out;

      & g {
        transition: fill 0.2s ease-out;
      }
    }

    & svg.m-up {
      transform: rotate(180deg);
      g {
        fill: #42b983;
      }
    }

    & svg.m-down {
      g {
        fill: #d63200;
      }
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    max-width: 20px;
    max-height: 20px;
  }
}
</style>
