<template>
  <div
    class="notice-container"
    :style="{
      '--upPx': upPx,
    }"
  >
    <!-- 为了兼容改用绑定行内样式 -->
    <!-- 支持scss的可使用：:class="animate ? 'toUp' : ''" -->
    <div
      :style="{
        'margin-top': animate ? upPx : '',
        transition: animate ? 'all 1s' : '',
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "IMNotice",
  props: {
    jump: {
      type: Number,
      default: 1,
    },
    showNumber:{
      type: Number,
      default: 1,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    list: {
      type: Array,
      default: () => [],
    },
    setting: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      intervalId: null,
      animate: false,
      upPx: null,
    };
  },
  mounted() {
    const {
      duration = this.duration,
      autoplay = this.autoplay,
      jump = this.jump,
      showNumber=this.showNumber
    } = this.setting;
    this.$nextTick(() => {
      let rollDistance = parseFloat(
        document.getElementsByClassName("notice-container")[0].offsetHeight/showNumber
      );
      this.upPx = `-${jump * rollDistance}px`;
    });

    if (autoplay) {
      this.intervalId = setInterval(
        this.showMarquee,
        duration == 1000 ? 1100 : duration
      );
    }
  },
  destory() {
    clearInterval(this.intervalId);
  },
  methods: {
    showMarquee() {
      const { jump } = this.setting;
      const count = jump || this.jump;

      this.animate = true;

      setTimeout(() => {
        for (let i = 0; i < count; i++) {
          this.list.push(this.list[i]);
        }
        this.list.splice(0, count);
        this.animate = false;
      }, 1000);
    },
  },
};
</script>
<style scoped>
.notice-container {
  height: 100%;
  overflow: hidden;
}
</style>
<style lang="scss" scoped>
.toUp {
  margin-top: var(--upPx) !important;
  transition: all 1s;
}
</style>
