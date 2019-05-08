<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> &nbsp;|&nbsp;
      <router-link to="/reader">Reader</router-link> &nbsp;|&nbsp;
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <Footer id="footer"/>
  </div>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  background-color: #46abf3;
  font-size: 1rem;
  height: 80px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: white;
}

#footer {
  width: 100%;
  bottom: 0px;
  position: absolute;
  }
</style>
