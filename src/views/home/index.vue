<template>
  <div class="home">
    <talk-list></talk-list>
  </div>
</template>

<script>
import TalkList from './talk-list.vue'
export default {
  name: "Home",
  components:{
    TalkList
  }
};
</script>
