<template>
  <div>
    <div>
      <keep-alive>
        <transition name="fade">
          <router-view />
        </transition>
      </keep-alive>
    </div>
    <div class="bottom-nav">
      <mu-bottom-nav :value.sync="shift">
        <mu-bottom-nav-item
          value="home"
          title="主页"
          icon="home"
          to="/home"
        ></mu-bottom-nav-item>
        <mu-bottom-nav-item
          value="me"
          title="我的"
          icon="person"
          to="/me"
        ></mu-bottom-nav-item>
      </mu-bottom-nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shift: "home",
    };
  },
};
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>