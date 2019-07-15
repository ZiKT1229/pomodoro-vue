<template>
  <div id="app">
    <Pomodoro/>
    <main>
      <nav>
        <router-link to="/">&#8801;TO DO LIST</router-link> |
        <router-link to="/analytics">&#9678;ANALYTICS</router-link> |
        <router-link to="/setting">&#10033;SETTING</router-link>
      </nav>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Pomodoro from '@/components/Pomodoro.vue';

export default {
  name: 'App',
  components: {
    Pomodoro,
  },
}
</script>

<style>
#app {
  width: 1280px;
  height: 800px;
  display: flex;
  text-align: center;
}

main {
  width: 718px;
  box-sizing: border-box;
  padding: 0 114px 0 79px;
}

nav {
  margin-top: 114px;
  margin-bottom: 74px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
