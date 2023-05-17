# vue-notice-roll(基于Vue2的垂直滚动公告插件)

## Install
``` shell
# npm
npm i vue-notice-roll
# yarn
yarn add vue-notice-roll
```

## Quick Start
``` js
import notice from 'vue-notice-roll'
Vue.use(notice)

//or
import {Notice} from 'vue-notice-roll'
Vue.component(Notice.name, Notice);

//component
<IMNotice></IMNotice>
```

## 参数说明
| 参数 | 说明 | 默认值(类型) |
| :----:| :----: | :----: |
| height | 父级高度 | 40(Number) |
| childHeight | 单个子元素高度 | 40(Number) |
| jump | 一次滚动子元素个数 | 1(Number) |
| autoplay | 自动切换的时间间隔，单位为毫秒 | 3000(Number) |
| list | 滚动列表 | [] (Array) |
| setting | 所有参数集合 | 如：{height: 40,jump: 1,autoplay:1000,...}(Object) |