<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from "./views/Home/Home";
export default {
  components: {
    Home
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
ul,
dl,
dt,
dd,
li,
div {
  list-style: none;
}
img {
  vertical-align: bottom;
}
</style>
