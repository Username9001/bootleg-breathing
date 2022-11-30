exports.ids = [1];
exports.modules = {

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Options.vue?vue&type=template&id=6f7a49c0&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('b-button', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebar-variant",
      modifiers: {
        "sidebar-variant": true
      }
    }]
  }, [_vm._v("Toggle Sidebar")]), _vm._ssrNode(" "), _c('b-sidebar', {
    attrs: {
      "id": "sidebar-variant",
      "title": "Sidebar",
      "bg-variant": "dark",
      "text-variant": "light",
      "shadow": ""
    }
  }, [_c('div', {
    staticClass: "px-3 py-2"
  }, [_c('div', {
    staticClass: "option-buttons row"
  }, [_c('b-btn', {
    on: {
      "click": function ($event) {
        return _vm.toggleSound();
      }
    }
  }, [_vm._v("\n              Breathing sound\n              "), _vm.soundActive ? _c('div', [_vm._v("\n                  ✓\n              ")]) : _vm._e()]), _vm._v(" "), _c('b-btn', {
    on: {
      "click": function ($event) {
        return _vm.toggleChimes();
      }
    }
  }, [_vm._v("\n              Chime sounds\n              "), _vm.chimesActive ? _c('div', [_vm._v("\n                  ✓\n              ")]) : _vm._e()]), _vm._v(" "), _c('b-btn', {
    on: {
      "click": function ($event) {
        return _vm.finishSet();
      }
    }
  }, [_vm._v("\n              Reset\n          ")])], 1)])])], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Options.vue?vue&type=template&id=6f7a49c0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Options.vue?vue&type=script&lang=js&
/* harmony default export */ var Optionsvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Options.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Optionsvue_type_script_lang_js_ = (Optionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Options.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Optionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9c8db50e"
  
)

/* harmony default export */ var Options = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=options.js.map