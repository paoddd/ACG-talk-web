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
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    cancelBtn() {
      this.searchText = "";
    },
    exitSearch(){
        this.$router.go(-1)
    }
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