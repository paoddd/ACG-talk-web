<template>
  <div>
    <!-- 导航条 -->
    <mu-appbar style="width: 100%" class="appbar">
      <mu-button icon slot="left" @click="openDrawer">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
         <mu-button icon class="search-btn" @click="toSearch">
          <mu-icon value="search"></mu-icon>
        </mu-button>
      <mu-menu slot="right">
        <mu-button flat>
          <mu-icon value="more_horiz"></mu-icon>
        </mu-button>
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
    <app-main class="app-main" />
  </div>
</template>

<script>
import DrawerMain from "./components/DrawerMain";
import AppMain from "./components/AppMain";
export default {
  name: "Layout",
  components: {
    AppMain,
    DrawerMain,
  },
  data() {
    return {};
  },
  methods: {
    openDrawer() {
      this.$refs.drawer.open = true;
    },
    toSearch(){
      this.$router.push('/search')
    }
  },
};
</script>

<style scoped>
.appbar {
  position: sticky;
  top: 0;
}
.app-main {
  padding-bottom: 10vh;
}
.search-btn{
  float:right
}
</style>