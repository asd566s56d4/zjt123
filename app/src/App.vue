<template>
  <div id="app">
    <div class="warp">
      <header></header>
      <main><router-view /></main>
      <footer>
        <nav>
          <router-link to="/home">首页</router-link>

          <router-link to="/mine">我的</router-link>
        </nav>
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
.warp {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: 50px;
    background: #ccc;
  }
  main {
    flex: 1;
  }
  footer {
    width: 100%;
    height: 50px;
    background: #ccc;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
