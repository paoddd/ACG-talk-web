<template>
  <div>
    <!-- 导航条 -->
    <mu-appbar style="width: 100%" color="primary" class="appbar">
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
    <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
      <mu-list>
        <mu-list-item button>
          <mu-list-item-title>Menu Item 1</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Menu Item 2</mu-list-item-title>
        </mu-list-item>
        <mu-list-item @click="open = false" button>
          <mu-list-item-title>Close</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>

    <app-main />
  </div>
</template>

<script>
import AppMain from "./components/AppMain";
export default {
  name: "Layout",
  components: {
    AppMain,
  },
  data() {
    return {
      open: false,
      position: "left",
      docked: false,
    };
  },
  methods: {
    openDrawer() {
      this.open = true;
    },
  },
};
</script>

<style scoped>
.appbar {
  position: sticky;
  top: 0;
}
</style>