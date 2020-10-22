<template>
    <section class="app-main">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </section>
</template>

<script>
export default {
  name: "AppMain",
};
</script>

<style scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header + .app-main {
  padding-top: 50px;
}
.hasTagsView .app-main {
  min-height: calc(100vh - 84px);
}
.hasTagsView .fixed-header + .app-main {
  padding-top: 84px;
}
</style>

<style >
.el-popup-parent--hidden .fixed-header {
  padding-right: 15px;
}
</style>
