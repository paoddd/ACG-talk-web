<template>
  <div id="app">
<<<<<<< HEAD
    <router-view class="myapp"/>
  </div>
</template>
=======
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

>>>>>>> e65270c3aade407f2611685874bccf1e04a1feb8
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
<<<<<<< HEAD
.myapp{
  /*top: 0px;*/
  /*bottom: 0px;*/
  height: 100%;
}

=======

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
>>>>>>> e65270c3aade407f2611685874bccf1e04a1feb8
</style>
