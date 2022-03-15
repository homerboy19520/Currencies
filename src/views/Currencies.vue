<template>
  <div class="about">
    <Button modifier="text" @onclick="onClick"> Переключение</Button>
    <Input @oninput="oninput" />
    <div v-for="(item, index) in currencies" :key="index">
      <CardCurrencies
        :isSwitch="isSwitched"
        :state="state(item.Previous, item.Value)"
        :nominal="item.Nominal"
        :previous="item.Previous"
        :value="item.Value"
        :char="item.CharCode"
      ></CardCurrencies>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardCurrencies from "@/components/CardCurrencies";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default {
  components: { CardCurrencies, Input, Button },
  data() {
    return {
      localCurrencies: null,
      localValue: null,
      isSwitched: false,
    };
  },

  methods: {
    getRequest() {
      axios
        .get("https://www.cbr-xml-daily.ru/daily_json.js")
        .then((response) => {
          this.localCurrencies = response.data.Valute;
        });
    },

    oninput(value) {
      this.localValue = value;
      console.log(this.massCurrencies, "Массив объектов char");
    },

    filtration(mass) {
      return mass.filter((item) => {
        return (
          item.CharCode.indexOf(this.localValue.toUpperCase()) !== -1 ||
          item.Name.toLowerCase().indexOf(this.localValue.toLowerCase()) !== -1
        );
      });
    },

    state(previouse, value) {
      if (previouse > value) {
        return "down";
      } else return "up";
    },

    onClick() {
      this.isSwitched = !this.isSwitched;
    },
  },

  computed: {
    massCurrencies() {
      let mass = [];
      for (let key in this.localCurrencies) {
        mass.push(this.localCurrencies[key]);
      }
      return mass;
    },

    currencies() {
      if (!this.localValue) {
        return this.massCurrencies;
      } else return this.filtration(this.massCurrencies);
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
