<template>
  <div class="page">
    <div class="search-input-box">
      <mu-row>
        <mu-col span="10">
          <input id="search" />
        </mu-col>
        <mu-col span="2">
          <mu-button flat class="cancel-btn" @click="exitSearch">取 消</mu-button>
        </mu-col>
      </mu-row>
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
      imgSrc: "http://p4.qhimg.com/bdm/960_593_0/t014a4670b3066516dc.jpg"
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
    }
  },
  mounted() {}
};
</script>

<style scope>
input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  border: 0px solid #fff;
  border-radius: 20px;
}
.html,
body {
  background-color: #ffffff;
}
.page {
  padding: 0vh;
  margin: 0vh;
  height: 100%;
  width: 100%;
}
.search-input-box {
  margin: 10px;
}
#search {
  width: 100%;
  height: 30px;
  background-image: url("../../assets/img/search.svg");
  background-size: 13px;
  background-repeat: no-repeat;
  background-position: 10px 8px;
  background-color: #f3f3f3;
  padding: 0 10px 0 35px;
  cursor: pointer;
}
.cancel-btn {
  height: 30px;
  font-weight:500;
  min-width: none;
  text-align: center;
  color: #505050;
}
.mu-flat-button{
  min-width: 0;
}
.cancel-btn .mu-button-wrapper {
  padding: 0;
  justify-content:space-between;
}
</style>