<template>
  <div class="converter">
    <div class="converter__wrapper">
      <Select
        :mass="mainMass"
        class="converter__select"
        @onitem="activeMain"
      ></Select>
      <Input
        class="converter__input"
        placeholder="RUB"
        modifier="number"
        :value="mainValue"
        @oninput="setMainValue"
      ></Input>
      <Icons
        class="converter__img"
        @click="toggle"
        icon-name="arrow"
        :height="30"
        :width="60"
        viewBox="0 0 511.624 511.623"
      >
        <g>
          <path
            d="M9.135,200.996h392.862v54.818c0,2.475,0.9,4.613,2.707,6.424c1.811,1.81,3.953,2.713,6.427,2.713
			c2.666,0,4.856-0.855,6.563-2.569l91.365-91.362c1.707-1.713,2.563-3.903,2.563-6.565c0-2.667-0.856-4.858-2.57-6.567
			l-91.07-91.078c-2.286-1.906-4.572-2.856-6.858-2.856c-2.662,0-4.853,0.856-6.563,2.568c-1.711,1.715-2.566,3.901-2.566,6.567
			v54.818H9.135c-2.474,0-4.615,0.903-6.423,2.712S0,134.568,0,137.042v54.818c0,2.474,0.903,4.615,2.712,6.423
			S6.661,200.996,9.135,200.996z"
          />
          <path
            d="M502.49,310.637H109.632v-54.82c0-2.474-0.905-4.615-2.712-6.423c-1.809-1.809-3.951-2.712-6.424-2.712
			c-2.667,0-4.854,0.856-6.567,2.568L2.568,340.607C0.859,342.325,0,344.509,0,347.179c0,2.471,0.855,4.568,2.568,6.275
			l91.077,91.365c2.285,1.902,4.569,2.851,6.854,2.851c2.473,0,4.615-0.903,6.423-2.707c1.807-1.813,2.712-3.949,2.712-6.427V383.72
			H502.49c2.478,0,4.613-0.899,6.427-2.71c1.807-1.811,2.707-3.949,2.707-6.427v-54.816c0-2.475-0.903-4.613-2.707-6.42
			C507.103,311.54,504.967,310.637,502.49,310.637z"
          />
        </g>
      </Icons>
      <Input
        class="converter__input"
        modifier="disabled"
        :isDisabled="isDisabled"
        :value="calcSecondValue"
        @oninput="setSecondValue"
      ></Input>
      <Select
        :mass="secondMass"
        @onitem="activeSecond"
        class="converter__select"
      ></Select>
    </div>
  </div>
</template>

<script>
import Input from "@/components/ui/Input";
import Icons from "@/components/icons/icons";
import axios from "axios";
import Select from "@/components/Select";

export default {
  data() {
    return {
      isDisabled: true,

      isSwitched: false,

      mainValue: null,
      secondValue: null,

      massMain: ["RUB"],

      request: null,

      activeSelect: null,
      // объект активной валюты
    };
  },
  components: { Select, Icons, Input },

  methods: {
    setMainValue(value) {
      this.mainValue = value;
    },

    setSecondValue(value) {
      this.secondValue = value;
    },

    toggle() {
      this.isSwitched = !this.isSwitched;
      this.switchValues();
    },

    switchValues() {
      [this.mainValue, this.secondValue] = [this.secondValue, this.mainValue];
    },

    activeMain(value) {
      // приходит активный селект main
      this.calcValute(value);
    },

    activeSecond(value) {
      // приходит активный селект second
      this.calcValute(value);
    },

    calcValute(valute) {
      // принимает название валюты,возвращает объект это валюты
      this.activeSelect = this.massOfValues.find(
        (item) => item.CharCode === valute
      );
    },

    getRequest() {
      // делает запрос и присваивает к request объект c валютами
      axios
        .get("https://www.cbr-xml-daily.ru/daily_json.js")
        .then((response) => {
          this.request = response.data.Valute;
        });
    },
  },

  computed: {
    mainMass() {
      // возвращает массив main селекту
      if (this.isSwitched) {
        return this.massSecond;
      } else return this.massMain;
    },

    secondMass() {
      // возвращает массив second селекту
      if (this.isSwitched) {
        return this.massMain;
      } else return this.massSecond;
    },

    massSecond() {
      // возвращает массив названий валют с request
      if (this.request) {
        return Object.keys(this.request);
      } else return [];
    },

    // formatMainValue() {
    //   // возвращает value в инпут main
    //
    //   if (this.isSwitched) {
    //     return this.secondValue;
    //   } else return this.mainValue;
    // },
    //
    // formatSecondValue() {
    //   // возвращает value в инпут second
    //   if (this.isSwitched) {
    //     return this.mainValue;
    //   } else return this.secondValue;
    // },

    massOfValues() {
      let mass = [];
      for (let key in this.request) {
        mass.push(this.request[key]);
      }
      return mass;
    },

    calcSecondValue() {
      // высчитывает стоимость валюты, принимает активный селект,и данные в инпуте
      if (this.dinamicSelect) {
        return (
          (this.mainValue / this.dinamicSelect.Value) *
          this.dinamicSelect.Nominal
        ).toFixed(3);
      } else return "0";
    },

    dinamicSelect() {
      // возвращает дефолтный селект или если есть активный селект
      if (this.activeSelect) {
        return this.activeSelect;
      } else return this.massOfValues[0];
    },
  },

  mounted() {
    setInterval(this.getRequest, 4000);
  },

  created() {
    this.getRequest();
  },
};
</script>

<style lang="scss" scoped>
.converter {
  &__wrapper {
    display: flex;
    gap: 40px;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  &__input {
    width: 25%;
  }

  &__img {
    cursor: pointer;
  }

  &__select {
    min-width: 72px;
    min-height: 54px;
    max-height: 276px;
    overflow: hidden auto;
  }
}
</style>
