(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-notice-roll"] = factory();
	else
		root["vue-notice-roll"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Notice": function() { return /* reexport */ notice; },
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/notice/notive.vue?vue&type=template&id=59426178&scoped=true&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{style:({
    height: _vm.computedHeight,
    overflow: 'hidden',
    '--upPx': _vm.upPx,
  })},[_c('div',{style:({
      height: _vm.computedChildHeight,
      'line-height': _vm.computedChildHeight,
      'margin-top': _vm.animate ? _vm.upPx : '',
      transition: _vm.animate ? 'all 1s' : '',
    })},[_vm._t("default")],2)])
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/notice/notive.vue?vue&type=script&lang=js&

/* harmony default export */ var notivevue_type_script_lang_js_ = ({
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
});

;// CONCATENATED MODULE: ./packages/notice/notive.vue?vue&type=script&lang=js&
 /* harmony default export */ var notice_notivevue_type_script_lang_js_ = (notivevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/notice/notive.vue?vue&type=style&index=0&id=59426178&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/notice/notive.vue?vue&type=style&index=0&id=59426178&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/notice/notive.vue



;


/* normalize component */

var component = normalizeComponent(
  notice_notivevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "59426178",
  null
  
)

/* harmony default export */ var notive = (component.exports);
;// CONCATENATED MODULE: ./packages/notice/index.js


notive.install = function (Vue) {
    Vue.component(notive.name, notive)
}

/* harmony default export */ var notice = (notive);
;// CONCATENATED MODULE: ./packages/index.js


const components = [
    notice
]


// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    Notice: notice
});


;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vue-notice-roll.umd.js.map