import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    dones: [],
    timer: null,
    isPlay: true,
  },
  getters: {
    todos: (state) => {
      return state.todos.filter(todo => !todo.done);
    },
    dones: (state) => {
      return state.dones.filter(done => done.done);
    },
    currentMission: (state) => {
      return state.todos.filter(todo => !todo.done)[0] || { name: 'Nothing', done: false, time: 0 };
    },
    timer: (state) => {
      return state.timer;
    },
    isPlay: (state) => {
      return state.isPlay;
    },
  },
  mutations: {
    addTodo(state, mission) {
      state.todos.push({
        name: mission,
        done: false,
        time: 25 * 60,
      });
    },
    timeReducer(state) {
      if (state.todos.length > 0) {
        state.timer = setInterval(() => {
          if (state.todos[0].time > 0) {
            --state.todos[0].time;
          } else {
            state.isPlay = true;
            clearInterval(state.timer);
            state.todos[0].done = true;
            state.dones.push(state.todos[0]);
            state.todos.shift();
          }
        }, 1000);
      }
    },
    setPlay(state) {
      state.isPlay = !state.isPlay;
    },
  },
  actions: {
    addTodo({commit}, mission) {
      commit('addTodo', mission);
    },
    timeReducer({commit}) {
      commit('timeReducer');
    },
    setPlay({commit}) {
      commit('setPlay');
    },
  },
});
