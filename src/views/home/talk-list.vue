<template>
  <div>
  <mu-container>

      <mu-flex justify-content="center">
        <mu-paper :z-depth="1">
          <mu-grid-list class="gridlist-demo">
            <mu-sub-header>December</mu-sub-header>
            <mu-grid-tile v-for="(tile, index) in list" :key="index" class="grid-item">
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
  </mu-container>
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
    };
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
.grid-item{
    margin-top:2%;
}
</style>