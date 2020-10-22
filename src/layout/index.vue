<template>
  <div>
    <!-- 导航条 -->
    <mu-appbar style="width: 100%" class="appbar">
      <mu-button icon slot="left" @click="openDrawer">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      Title
      <mu-menu slot="right">
        <mu-button flat>MENU</mu-button>
        <mu-list slot="content">
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>Menu Item 1</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>Menu Item 2</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu>
    </mu-appbar>
    <!-- 抽屉 -->
    <drawer-main ref="drawer" />
    <app-main class="app-main"/>    
  </div>
</template>

<script>
import DrawerMain from "./components/DrawerMain"
import AppMain from "./components/AppMain"
export default {
  name: "Layout",
  components: {
    AppMain,
    DrawerMain
  },
  data() {
    return {
      
    };
  },
  methods: {
    openDrawer() {
      this.$refs.drawer.open = true
    },
  },
};
</script>

<style scoped>
.appbar {
  position: sticky;
  top: 0;
}
.app-main{

  padding-bottom: 10vh;
}
</style>