<template>
  <div id="app">
    <IMNotice
      class="wrap"
      :list="msg"
      :setting="{
        height: 40,
        jump: 1,
      }"
    >
      <div v-for="(item, index) in msg" :key="index">{{ item }}</div>
    </IMNotice>
  </div>
</template>

<script>
import Vue from "vue";
// import {Notice} from "./../packages/index.js";
// Vue.component(Notice.name, Notice);
import notice from "./../packages/index.js";
Vue.use(notice);

export default {
  name: "App",
  data() {
    return {
      msg: [
        "千磨万击还坚劲",
        "任尔东西南北风",
        "莫愁前路无知己",
        "天下谁人不识君",
        "会当凌绝顶",
        "一览众山小",
        "路漫漫其修远今",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  color: #ed6a0c;
  font-size: 14px;
  background-color: #fffbe8;
}
</style>
