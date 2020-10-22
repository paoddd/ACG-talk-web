<template>
  <div>
    <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
      <mu-avatar size="80" class="avatar">
        <img src="http://p1.qhimg.com/bdm/960_593_0/t0121a1e4e2a32d0502.jpg" />
      </mu-avatar>
      <mu-divider></mu-divider>
    </mu-drawer>
  </div>
</template>

<script>
export default {
  name: "DrawerMain",
  data() {
    return {
      open: false,
      position: "left",
      docked: false,
    };
  },
};
</script>

<style scoped>
.avatar {
  margin: 3vh 0vh;
}
</style>