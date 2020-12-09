<template>
  <div id="nav"
       v-if="$store.state.isShow">
    <router-link to="/"
                 active-class="active">Home</router-link> |
    <router-link to="/about"
                 active-class="active">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
.active {
  color: #4289b9;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    // color: #2c3e50;

    &.router-link-exact-active {
      // color: #42b983;
    }
  }
}
</style>
