<template>
  <div id="app">
    <router-view class="myapp" />
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.myapp {
  /*top: 0px;*/
  /*bottom: 0px;*/
  height: 100%;
}
html {
  scroll-behavior: smooth;
}
</style>
