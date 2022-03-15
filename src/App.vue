<template>
  <div class="app">
  <Header></Header>
  <main>
    <router-view></router-view>
  </main>
  <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {Footer, Header}
}
</script>

<style lang="scss">
@import "assets/styles/styles.css";

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
}

main {
  position: relative;
  flex: 1 0 auto;
  padding: 30px;

  @media (max-width: 560px) {
    padding: 20px;
  }
}

footer {
  flex: 0 0 auto;
}
</style>