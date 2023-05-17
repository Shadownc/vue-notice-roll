<template>
  <div
    :style="{
      height: computedHeight,
      overflow: 'hidden',
      '--upPx': upPx,
    }"
  >
    <!-- 为了兼容改用绑定行内样式 -->
    <!-- 支持scss的可使用：:class="animate ? 'toUp' : ''" -->
    <div
      :style="{
        height: computedChildHeight,
        'line-height': computedChildHeight,
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
    //父级高级
    height: {
      type: Number,
      default: 40,
    },
    //单个子元素高度
    childHeight: {
      type: Number,
      default: 40,
    },
    //一次滚动子元素个数
    jump: {
      type: Number,
      default: 1,
    },
    autoplay: {
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
  computed: {
    computedHeight() {
      const { height } = this.setting;
      return height ? height + "px" : this.height + "px";
    },
    computedChildHeight() {
      const { childHeight } = this.setting;
      return childHeight ? childHeight + "px" : this.childHeight + "px";
    },
    upPx() {
      const { jump, childHeight } = this.setting;
      return `-${(jump || this.jump) * (childHeight || this.childHeight)}px`;
    },
  },

  data() {
    return {
      intervalId: null,
      animate: false,
    };
  },
  mounted() {
    const { autoplay = this.autoplay } = this.setting;
    this.intervalId = setInterval(
      this.showMarquee,
      autoplay == 1000 ? 1100 : autoplay
    );
  },
  destory() {
    clearInterval(this.intervalId);
  },
  methods: {
    showMarquee() {
      const { jump, childHeight } = this.setting;
      const count = jump || this.jump;
      const distance = count * (childHeight || this.childHeight);

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
<style lang="scss" scoped>
.toUp {
  margin-top: var(--upPx) !important;
  transition: all 1s;
}
</style>
