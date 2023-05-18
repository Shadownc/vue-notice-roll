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
| jump | 一次滚动子元素个数 | 1(Number) |
| showNumber | 可见的元素个数 | 1(Number) |
| autoplay | 是否自动切换 | false(Boolean) |
| duration | 自动切换的时间间隔，单位为毫秒 | 3000(Number) |
| list | 滚动列表 | [] (Array) |
| setting | 所有参数集合 | 如：{height: 40,jump: 1,autoplay:true,...}(Object) |

> `jump`可不传,默认滚动父元素的高度，即父元素下展示了几条就滚动几条 
`showNumber`值设置为2即可见元素是2个,`jump`值设置1即逐条往上滚动

**<font color=#8A2BE2 >展示条数不是1条的时候`showNumber`为必传参数</font>**