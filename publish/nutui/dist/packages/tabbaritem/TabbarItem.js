var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, useSlots, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, createVNode, normalizeProps, guardReactiveProps, withCtx, createElementVNode, renderSlot, createCommentVNode, createBlock, resolveDynamicComponent, unref, toDisplayString } from "vue";
import { r as renderIcon } from "../renderIcon-BfOvhG7i.js";
import { u as useRouter } from "../index-aiGQ-EiA.js";
import { u as useParent } from "../useParent-D6DiuxZZ.js";
import { T as TABBAR_KEY } from "../types-MuhxzCWc.js";
import NutBadge from "../badge/Badge.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = { class: "nut-tabbar-item_icon-box" };
const _hoisted_2 = {
  key: 0,
  class: "nut-tabbar-item_icon-box_icon"
};
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutTabbarItem"
}), {
  __name: "tabbar-item",
  props: {
    tabTitle: { default: "" },
    name: {},
    icon: {},
    href: { default: "" },
    to: {}
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const router = useRouter();
    const { parent, index } = useParent(TABBAR_KEY);
    const active = computed(() => {
      var _a;
      return ((_a = props.name) != null ? _a : index.value) === parent.activeIndex.value;
    });
    const activeColor = computed(() => active.value ? parent.props.activeColor : parent.props.unactiveColor);
    const isHaveSlot = (slot) => {
      return slots[slot];
    };
    const change = () => {
      var _a, _b, _c;
      const key = (_a = props.name) != null ? _a : index.value;
      parent.changeIndex(index.value, key);
      if ((_b = parent.children[index.value]) == null ? void 0 : _b.href) {
        window.location.href = parent.children[index.value].href;
        return;
      }
      if ((_c = parent.children[index.value]) == null ? void 0 : _c.to) {
        const to = parent.children[index.value].to;
        if (to && router) {
          router.push(to);
        } else {
          location.replace(to);
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["nut-tabbar-item", { "nut-tabbar-item__icon--unactive": !active.value }]),
        style: normalizeStyle({
          color: activeColor.value
        }),
        onClick: change
      }, [
        createVNode(NutBadge, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
          default: withCtx(() => [
            createElementVNode("view", _hoisted_1, [
              isHaveSlot("icon") ? (openBlock(), createElementBlock("div", _hoisted_2, [
                renderSlot(_ctx.$slots, "icon", { active: active.value })
              ])) : createCommentVNode("", true),
              _ctx.icon && !isHaveSlot("icon") ? (openBlock(), createElementBlock("view", _hoisted_3, [
                (openBlock(), createBlock(resolveDynamicComponent(unref(renderIcon)(_ctx.icon)), { class: "nut-popover-item-img" }))
              ])) : createCommentVNode("", true),
              createElementVNode("view", {
                class: normalizeClass([
                  "nut-tabbar-item_icon-box_nav-word",
                  { "nut-tabbar-item_icon-box_big-word": !_ctx.icon && !isHaveSlot("icon") }
                ])
              }, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  _ctx.tabTitle ? (openBlock(), createElementBlock("view", _hoisted_4, toDisplayString(_ctx.tabTitle), 1)) : createCommentVNode("", true)
                ])
              ], 2)
            ])
          ]),
          _: 3
        }, 16)
      ], 6);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as TabbarItem,
  _sfc_main as default
};
