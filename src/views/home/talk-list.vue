<template>
  <div>
    <mu-container ref="container">
      <mu-load-more
        @refresh="refresh"
        :refreshing="refreshing"
        :loading="loading"
        @load="load"
      >
        <mu-flex justify-content="center">
          <mu-paper :z-depth="1">
            <mu-grid-list class="gridlist-demo">
              <mu-grid-tile
                v-for="(tile, index) in list"
                :key="index"
                class="grid-item"
              >
                <img :src="tile.image" class="talk-img" />
                <span slot="title">{{ tile.title }}</span>
                <span slot="subTitle"
                  >by <b>{{ tile.author }}</b></span
                >
                <mu-button slot="action" icon>
                  <mu-icon value="star_border"></mu-icon>
                </mu-button>
              </mu-grid-tile>
            </mu-grid-list>
          </mu-paper>
        </mu-flex>
      </mu-load-more>
    </mu-container>
    <!-- 返回顶部 -->
    <div class="back-top">
      <mu-scale-transition>
        <mu-button fab small color="error" v-show="gotop" @click="backTop">
          <mu-icon value="arrow_upward "></mu-icon>
        </mu-button>
      </mu-scale-transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "TalkList",
  data() {
    return {
      list: [
        {
          image:
            "http://browser9.qhimg.com/bdm/960_593_0/t013a4ed4683039d101.jpg",
          title: "Breakfast",
          author: "Myron",
        },
        {
          image:
            "http://browser9.qhimg.com/bdm/960_593_0/t01af57b41a16dbe0fb.jpg",
          title: "Burger",
          author: "Linyu",
        },
        {
          image:
            "http://browser9.qhimg.com/bdm/960_593_0/t013a4ed4683039d101.jpg",
          title: "Camera",
          author: "ruolin",
        },
        {
          image:
            "http://browser9.qhimg.com/bdm/960_593_0/t013a4ed4683039d101.jpg",
          title: "Hats",
          author: "kakali",
        },
        {
          image:
            "http://browser9.qhimg.com/bdm/960_593_0/t013a4ed4683039d101.jpg",
          title: "Honey",
          author: "yuyang",
        },
        {
          image:
            "http://browser9.qhimg.com/bdm/960_593_0/t013a4ed4683039d101.jpg",
          title: "Morning",
          author: "mokayi",
        },
        {
          image:
            "http://browser9.qhimg.com/bdm/960_593_0/t013a4ed4683039d101.jpg",
          title: "Vegetables",
          author: "NUyyyyyyy",
        },
        {
          image:
            "http://browser9.qhimg.com/bdm/960_593_0/t013a4ed4683039d101.jpg",
          title: "water",
          author: "TDDyyyyyyy",
        },
      ],
      refreshing: false,
      loading: false,
      scrollTop: 0,
      gotop: false,
    };
  },
  methods: {
    refresh() {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
        this.list = [
          {
            image:
              "http://browser9.qhimg.com/bdm/960_593_0/t013a4ed4683039d101.jpg",
            title: "Breakfast",
            author: "Myron",
          },
          {
            image:
              "http://browser9.qhimg.com/bdm/960_593_0/t01af57b41a16dbe0fb.jpg",
            title: "Burger",
            author: "Linyu",
          },
          {
            image:
              "http://browser9.qhimg.com/bdm/960_593_0/t013a4ed4683039d101.jpg",
            title: "Camera",
            author: "ruolin",
          },
          {
            image:
              "http://browser9.qhimg.com/bdm/960_593_0/t013a4ed4683039d101.jpg",
            title: "Hats",
            author: "kakali",
          },
          {
            image:
              "http://browser9.qhimg.com/bdm/960_593_0/t013a4ed4683039d101.jpg",
            title: "Honey",
            author: "yuyang",
          },
          {
            image:
              "http://browser9.qhimg.com/bdm/960_593_0/t013a4ed4683039d101.jpg",
            title: "Morning",
            author: "mokayi",
          },
          {
            image:
              "http://browser9.qhimg.com/bdm/960_593_0/t013a4ed4683039d101.jpg",
            title: "Vegetables",
            author: "NUyyyyyyy",
          },
          {
            image:
              "http://browser9.qhimg.com/bdm/960_593_0/t013a4ed4683039d101.jpg",
            title: "water",
            author: "TDDyyyyyyy",
          },
        ];
      }, 2000);
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        this.list = this.list.concat(this.list);
        this.loading = false;
      }, 2000);
    },
    backTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
    handleScroll() {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true); // 注册滚动事件
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.talk-list {
  width: 100%;
  overflow-y: auto;
}
.mu-grid-tile {
  border-radius: 5%;
}
.talk-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.grid-item {
  margin-top: 2%;
}
.back-top {
  position: fixed;
  bottom: 15vh;
  right: 5vh;
  z-index: 2;
}
</style>