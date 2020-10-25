<template>
  <div>
    <mu-appbar style="width: 100%" color="primary" class="page-appbar">
      <mu-button icon slot="left" @click="back">
        <mu-icon value="chevron_left"></mu-icon>
      </mu-button>
      <div class="route-name">
      {{$route.name}}
      
      </div>
    </mu-appbar>
    
    <transition :name="transitionName">
      <router-view class="page-body" />
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
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
 
  watch: {
    $route(to, from) {
      if (to.matched.length > from.matched.length) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
    },
  },
};
</script>

<style scoped>
.route-name{
  float:left
}
.page-appbar{
    position: fixed;
    top: 0;
}
.page-body{
    width: 100%;
    margin-top: 12vh;
}
</style>