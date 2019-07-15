<template>
  <aside>
    <section class="clock-border">
      <figure class="clock">
        <button :class="{ play: isPlay, pause: !isPlay }" class="btn" @click="play"></button>
      </figure>
      <img class="leaf" src="../assets/leaf.svg" alt="" srcset="">
    </section>
    <section>
      <div class="time">{{convertTime(currentMission.time)}}</div>
      <hr>
      <div class="mission">{{currentMission.name}}</div>
    </section>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Pomodoro',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'currentMission',
      'timer',
      'isPlay',
    ]),
  },
  methods: {
    ...mapActions([
      'timeReducer',
      'setPlay'
    ]),
    convertTime(time) {
      let minute = Math.floor(time / 60);
      let second = Math.floor(time % 60);;
      return `${minute > 9 ? minute : `0${minute}`}:${second > 9 ? second : `0${second}`}`;
    },
    play() {
      if (this.isPlay) {
        this.timeReducer();
      } else {
        clearInterval(this.timer);
      }
      this.setPlay();
    },
  },
}
</script>

<style scoped>
aside {
  width: 562px;
  height: 800px;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.clock-border {
  width: 215px;
  height: 215px;
  background-color: transparent;
  border: 5px solid #BA000D;
  border-radius: 100%;
  box-sizing: border-box;
  padding: 15px;
}

.leaf {
  position: relative;
  top: -285px;
  left: -115px;
}

.clock {
  margin: 0;
  width: 175px;
  height: 175px;
  background-color: #F44336;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  width: 64px;
  height: 64px;
  border: 0;
  padding: 0;
  background-color: transparent;
}

.play {
  background-image: url(../assets/play.png);
}

.pause {
  background-image: url(../assets/pause.png);
}

.time {
  margin-top: 50px;
  width: 300px;
  height: 90px;
  font-size: 90px;
  line-height: 90px;
  color: #ffffff;
}

.mission {
  height: 22px;
  font-size: 22px;
  line-height: 22px;
  color: #ffffff;
  text-transform: uppercase;
}
</style>
