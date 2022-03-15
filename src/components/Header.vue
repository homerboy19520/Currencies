<template>
  <header class="header">
    <nav class="header__nav">
      <router-link to="/">
        <Button modifier="text">currencies</Button>
      </router-link>
      <router-link to="/converter">
        <Button modifier="text">converter</Button>
      </router-link>
    </nav>
  </header>
</template>

<script>
import Button from "@/components/ui/Button";

export default {
  name: "Header",

  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  border-bottom: 1px solid #E7E7E7;
  margin-bottom: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding: 28px 92px 25px 92px;

  @media (max-width: 560px) {
    padding: 28px;
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 24px;
    height: 29px;
  }

  &__logo {
    width: 93px;
    height: 29px;
  }
}
</style>
