<template>
  <div class="page">
    <div class="search-input-box">
      <mu-text-field
        v-model="searchText"
        full-width
        class="search-text"
        icon="search"
        placeholder="您想搜些什么"
        :action-icon="searchText.length === 0 ? '' : 'cancel'"
        :action-click="cancelBtn"
      >
      </mu-text-field>
      <mu-button flat class="cancel-btn" @click="exitSearch">
        <b> 取 消</b>
      </mu-button>
    </div>
    <!--
      <img v-lazy="imgSrc" :key="imgSrc" @error="handleLazyErr" style="width: 100%;"> 
    -->
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchText: "",
      imgSrc: "http://p4.qhimg.com/bdm/960_593_0/t014a4670b3066516dc.jpg",
    };
  },
  methods: {
    handleLazyErr(e) {
      console.log(e);
    },
    cancelBtn() {
      this.searchText = "";
    },
    exitSearch() {
      this.$router.go(-1);
    },
  },
  mounted() {},
};
</script>

<style scope>
.page {
  padding: 0vh;
  margin: 0vh;
  height: 100%;
  width: 100%;
}
.search-input-box {
  display: flex;
}
.cancel-btn {
  line-height: 10vh;
  font-size: 2vh;
  color: #303f9f;
}
</style>