<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="myapp" />
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transitionName: "",
    };
  },
  watch: {
    $route(to, from) {
      if (to.matched.length > from.matched.length) {
        this.transitionName = 'slide-right';
      } else {
        this.transitionName = 'slide-left';
      }
    },
  },
  created(){
    document.body.removeChild(document.getElementById('Loading'))
  }
};
</script>
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

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translateX(100%);
}

.slide-left-enter {
  opacity: 0;
  transform: translateX(100%);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
