var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
import {n as e} from "./rolldown-runtime-XKyaHtl9.js";
import {T as t, a as n, d as r, y as i} from "./_virtual_mf___mfe_internal__opensmartcity__mf_owner__135060680301585__loadShare__shared-U0IBWbSk.js";
var a = r(null);
function o() {
  return i(a);
}
var s = typeof Symbol == `function` && Symbol.for ? Symbol.for(`mui.nested`) : `__THEME_NESTED__`;
function c(e2, t2) {
  return typeof t2 == `function` ? t2(e2) : __spreadValues(__spreadValues({}, e2), t2);
}
function l(e2) {
  let {children: r2, theme: i2} = e2, l2 = o(), u2 = t(() => {
    let e3 = l2 === null ? __spreadValues({}, i2) : c(l2, i2);
    return e3 != null && (e3[s] = l2 !== null), e3;
  }, [i2, l2]);
  return n(a.Provider, {value: u2, children: r2});
}
var u = e({ThemeProvider: () => l, unstable_nested: () => s, useTheme: () => o}), d = u, f = d.ThemeProvider, p = d.useTheme, m = d.unstable_nested, h = Reflect.get(u, `default`) ?? u;
export {
  f as ThemeProvider,
  h as default,
  m as unstable_nested,
  p as useTheme
};
