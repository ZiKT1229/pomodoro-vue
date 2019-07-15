<template>
  <section>
    <form class="text-bar">
      <input class="addtext" v-model="mission" type="text" required placeholder="ADD NEW MISSION…">
      <button @click="add" class="add">&#9654;</button>
    </form>
    <div class="dropdown">
      <button v-if='todo' @click="todo = false" class="dropbtn">&#9650;TO-DO&#9650;</button>
      <button v-else @click="todo = true" class="dropbtn">&#9660;TO-DO&#9660;</button>
      <ul v-if='todo' id="todo">
        <li v-for="(todo, index) in todos" :key="index">
          <button>&#9711;</button>
          <span>{{todo.name}}</span>
          <button>&#9654;</button>
        </li>
      </ul>
    </div>
    <div class="dropdown">
      <button v-if='done' @click="done = false" class="dropbtn">&#9650;DONE&#9650;</button>
      <button v-else @click="done = true" class="dropbtn">&#9660;DONE&#9660;</button>
      <ul v-if='done' id="done">
        <li v-for="(done, index) in dones" :key="index">{{done.name}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Todolist',
  data() {
    return {
      todo: true,
      done: true,
      mission: '',
    }
  },
  methods: {
    ...mapActions([
      'addTodo'
    ]),
    add() {
      console.log(this.mission);
      this.addTodo(this.mission);
      this.mission = '';
    },
  },
  computed: {
    ...mapGetters([
      'todos',
      'dones'
    ]),
  },
};
</script>

<style scoped>
button,
input,
input::placeholder {
  display: inline-block;
  padding: 0;
  border:none;
  outline: none;
  background-image:none;
  background-color:transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  color: #42b983;
}

button {
  cursor: pointer;
}

.text-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 525px;
  height: 70px;
  box-sizing: border-box;
  border: 1px solid #000000;
  padding: 0 28px 0 28px;
}

.addtext {
  height: 18px;
  width: 400px;
  font-size: 18px;
}

.add {
  width: 18px;
  height: 18px;
  font-size: 18px;
  line-height: 18px;
}

.dropdown {
  margin-top: 28px;
}

.dropbtn {
  width: 100%;
  height: 35px;
  font-size: 20px;
  background: #000000;
  color: #ffffff;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  height: 55px;
  padding: 18px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #000000;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
