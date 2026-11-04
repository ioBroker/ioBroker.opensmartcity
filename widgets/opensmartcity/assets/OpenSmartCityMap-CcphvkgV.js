var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
import {r as e, t} from "./rolldown-runtime-XKyaHtl9.js";
import {a as n, g as r, p as i} from "./_virtual_mf___mfe_internal__opensmartcity__mf_owner__135060680301585__loadShare__shared-DG-3THKX.js";
var a = t((e19, t2) => {
  t2.exports = `SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`;
}), o = t((e19, t2) => {
  var n2 = a();
  function r2() {
  }
  function i2() {
  }
  i2.resetWarningCache = r2, t2.exports = function() {
    function e20(e21, t4, r3, i3, a3, o2) {
      if (o2 !== n2) {
        var s2 = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw s2.name = `Invariant Violation`, s2;
      }
    }
    e20.isRequired = e20;
    function t3() {
      return e20;
    }
    var a2 = {array: e20, bigint: e20, bool: e20, func: e20, number: e20, object: e20, string: e20, symbol: e20, any: e20, arrayOf: t3, element: e20, elementType: e20, instanceOf: t3, node: e20, objectOf: t3, oneOf: t3, oneOfType: t3, shape: t3, exact: t3, checkPropTypes: i2, resetWarningCache: r2};
    return a2.PropTypes = a2, a2;
  };
}), s = e(t((e19, t2) => {
  t2.exports = o()();
})(), 1), c = class {
  constructor(e19) {
    this.propagationStopped, this.defaultPrevented, this.type = e19, this.target = null;
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
  stopPropagation() {
    this.propagationStopped = true;
  }
}, l = {PROPERTYCHANGE: `propertychange`}, u = class {
  constructor() {
    this.disposed = false;
  }
  dispose() {
    this.disposed || (this.disposed = true, this.disposeInternal());
  }
  disposeInternal() {
  }
};
function d(e19, t2, n2) {
  let r2, i2;
  n2 || (n2 = f);
  let a2 = 0, o2 = e19.length, s2 = false;
  for (; a2 < o2; )
    r2 = a2 + (o2 - a2 >> 1), i2 = +n2(e19[r2], t2), i2 < 0 ? a2 = r2 + 1 : (o2 = r2, s2 = !i2);
  return s2 ? a2 : ~a2;
}
function f(e19, t2) {
  return e19 > t2 ? 1 : e19 < t2 ? -1 : 0;
}
function p(e19, t2, n2) {
  if (e19[0] <= t2)
    return 0;
  let r2 = e19.length;
  if (t2 <= e19[r2 - 1])
    return r2 - 1;
  if (typeof n2 == `function`) {
    for (let i2 = 1; i2 < r2; ++i2) {
      let r3 = e19[i2];
      if (r3 === t2)
        return i2;
      if (r3 < t2)
        return n2(t2, e19[i2 - 1], r3) > 0 ? i2 - 1 : i2;
    }
    return r2 - 1;
  }
  if (n2 > 0) {
    for (let n3 = 1; n3 < r2; ++n3)
      if (e19[n3] < t2)
        return n3 - 1;
    return r2 - 1;
  }
  if (n2 < 0) {
    for (let n3 = 1; n3 < r2; ++n3)
      if (e19[n3] <= t2)
        return n3;
    return r2 - 1;
  }
  for (let n3 = 1; n3 < r2; ++n3) {
    if (e19[n3] == t2)
      return n3;
    if (e19[n3] < t2)
      return e19[n3 - 1] - t2 < t2 - e19[n3] ? n3 - 1 : n3;
  }
  return r2 - 1;
}
function m(e19, t2, n2) {
  for (; t2 < n2; ) {
    let r2 = e19[t2];
    e19[t2] = e19[n2], e19[n2] = r2, ++t2, --n2;
  }
}
function h(e19, t2) {
  let n2 = Array.isArray(t2) ? t2 : [t2], r2 = n2.length;
  for (let t3 = 0; t3 < r2; t3++)
    e19[e19.length] = n2[t3];
}
function g(e19, t2) {
  let n2 = e19.length;
  if (n2 !== t2.length)
    return false;
  for (let r2 = 0; r2 < n2; r2++)
    if (e19[r2] !== t2[r2])
      return false;
  return true;
}
function _(e19, t2, n2) {
  let r2 = t2 || f;
  return e19.every(function(t3, i2) {
    if (i2 === 0)
      return true;
    let a2 = r2(e19[i2 - 1], t3);
    return !(a2 > 0 || n2 && a2 === 0);
  });
}
function v() {
  return true;
}
function y() {
  return false;
}
function b() {
}
function x(e19) {
  let t2 = false, n2, r2, i2;
  return function() {
    let a2 = Array.prototype.slice.call(arguments);
    return t2 && this === i2 && g(a2, r2) || (t2 = true, i2 = this, r2 = a2, n2 = e19.apply(this, arguments)), n2;
  };
}
function S(e19) {
  function t2() {
    let t3;
    try {
      t3 = e19();
    } catch (e20) {
      return Promise.reject(e20);
    }
    return t3 instanceof Promise ? t3 : Promise.resolve(t3);
  }
  return t2();
}
function C(e19) {
  for (let t2 in e19)
    delete e19[t2];
}
function w(e19) {
  let t2;
  for (t2 in e19)
    return false;
  return !t2;
}
var T = class extends u {
  constructor(e19) {
    super(), this.eventTarget_ = e19, this.pendingRemovals_ = null, this.dispatching_ = null, this.listeners_ = null;
  }
  addEventListener(e19, t2) {
    if (!e19 || !t2)
      return;
    let n2 = this.listeners_ || (this.listeners_ = {}), r2 = n2[e19] || (n2[e19] = []);
    r2.includes(t2) || r2.push(t2);
  }
  dispatchEvent(e19) {
    let t2 = typeof e19 == `string`, n2 = t2 ? e19 : e19.type, r2 = this.listeners_ && this.listeners_[n2];
    if (!r2)
      return;
    let i2 = t2 ? new c(e19) : e19;
    i2.target || (i2.target = this.eventTarget_ || this);
    let a2 = this.dispatching_ || (this.dispatching_ = {}), o2 = this.pendingRemovals_ || (this.pendingRemovals_ = {});
    n2 in a2 || (a2[n2] = 0, o2[n2] = 0), ++a2[n2];
    let s2;
    for (let e20 = 0, t3 = r2.length; e20 < t3; ++e20)
      if (s2 = `handleEvent` in r2[e20] ? r2[e20].handleEvent(i2) : r2[e20].call(this, i2), s2 === false || i2.propagationStopped) {
        s2 = false;
        break;
      }
    if (--a2[n2] === 0) {
      let e20 = o2[n2];
      for (delete o2[n2]; e20--; )
        this.removeEventListener(n2, b);
      delete a2[n2];
    }
    return s2;
  }
  disposeInternal() {
    this.listeners_ && C(this.listeners_);
  }
  getListeners(e19) {
    return this.listeners_ && this.listeners_[e19] || void 0;
  }
  hasListener(e19) {
    return this.listeners_ ? e19 ? e19 in this.listeners_ : Object.keys(this.listeners_).length > 0 : false;
  }
  removeEventListener(e19, t2) {
    if (!this.listeners_)
      return;
    let n2 = this.listeners_[e19];
    if (!n2)
      return;
    let r2 = n2.indexOf(t2);
    r2 !== -1 && (this.pendingRemovals_ && e19 in this.pendingRemovals_ ? (n2[r2] = b, ++this.pendingRemovals_[e19]) : (n2.splice(r2, 1), n2.length === 0 && delete this.listeners_[e19]));
  }
}, E = {CHANGE: `change`, ERROR: `error`, BLUR: `blur`, CLEAR: `clear`, CONTEXTMENU: `contextmenu`, CLICK: `click`, DBLCLICK: `dblclick`, DRAGENTER: `dragenter`, DRAGOVER: `dragover`, DROP: `drop`, FOCUS: `focus`, KEYDOWN: `keydown`, KEYPRESS: `keypress`, LOAD: `load`, RESIZE: `resize`, TOUCHMOVE: `touchmove`, WHEEL: `wheel`};
function D(e19, t2, n2, r2, i2) {
  if (r2 && r2 !== e19 && (n2 = n2.bind(r2)), i2) {
    let r3 = n2;
    n2 = function() {
      e19.removeEventListener(t2, n2), r3.apply(this, arguments);
    };
  }
  let a2 = {target: e19, type: t2, listener: n2};
  return e19.addEventListener(t2, n2), a2;
}
function O(e19, t2, n2, r2) {
  return D(e19, t2, n2, r2, true);
}
function k(e19) {
  e19 && e19.target && (e19.target.removeEventListener(e19.type, e19.listener), C(e19));
}
var ee = class extends T {
  constructor() {
    super(), this.on = this.onInternal, this.once = this.onceInternal, this.un = this.unInternal, this.revision_ = 0;
  }
  changed() {
    ++this.revision_, this.dispatchEvent(E.CHANGE);
  }
  getRevision() {
    return this.revision_;
  }
  onInternal(e19, t2) {
    if (Array.isArray(e19)) {
      let n2 = e19.length, r2 = Array(n2);
      for (let i2 = 0; i2 < n2; ++i2)
        r2[i2] = D(this, e19[i2], t2);
      return r2;
    }
    return D(this, e19, t2);
  }
  onceInternal(e19, t2) {
    let n2;
    if (Array.isArray(e19)) {
      let r2 = e19.length;
      n2 = Array(r2);
      for (let i2 = 0; i2 < r2; ++i2)
        n2[i2] = O(this, e19[i2], t2);
    } else
      n2 = O(this, e19, t2);
    return t2.ol_key = n2, n2;
  }
  unInternal(e19, t2) {
    let n2 = t2.ol_key;
    if (n2)
      te(n2);
    else if (Array.isArray(e19))
      for (let n3 = 0, r2 = e19.length; n3 < r2; ++n3)
        this.removeEventListener(e19[n3], t2);
    else
      this.removeEventListener(e19, t2);
  }
};
ee.prototype.on, ee.prototype.once, ee.prototype.un;
function te(e19) {
  if (Array.isArray(e19))
    for (let t2 = 0, n2 = e19.length; t2 < n2; ++t2)
      k(e19[t2]);
  else
    k(e19);
}
function A() {
  throw Error(`Unimplemented abstract method.`);
}
var ne = 0;
function j(e19) {
  return e19.ol_uid || (e19.ol_uid = String(++ne));
}
var re = class extends c {
  constructor(e19, t2, n2) {
    super(e19), this.key = t2, this.oldValue = n2;
  }
}, M = class extends ee {
  constructor(e19) {
    super(), this.on, this.once, this.un, j(this), this.values_ = null, e19 !== void 0 && this.setProperties(e19);
  }
  get(e19) {
    let t2;
    return this.values_ && this.values_.hasOwnProperty(e19) && (t2 = this.values_[e19]), t2;
  }
  getKeys() {
    return this.values_ && Object.keys(this.values_) || [];
  }
  getProperties() {
    return this.values_ && Object.assign({}, this.values_) || {};
  }
  getPropertiesInternal() {
    return this.values_;
  }
  hasProperties() {
    return !!this.values_;
  }
  notify(e19, t2) {
    let n2;
    n2 = `change:${e19}`, this.hasListener(n2) && this.dispatchEvent(new re(n2, e19, t2)), n2 = l.PROPERTYCHANGE, this.hasListener(n2) && this.dispatchEvent(new re(n2, e19, t2));
  }
  addChangeListener(e19, t2) {
    this.addEventListener(`change:${e19}`, t2);
  }
  removeChangeListener(e19, t2) {
    this.removeEventListener(`change:${e19}`, t2);
  }
  set(e19, t2, n2) {
    let r2 = this.values_ || (this.values_ = {});
    if (n2)
      r2[e19] = t2;
    else {
      let n3 = r2[e19];
      r2[e19] = t2, n3 !== t2 && this.notify(e19, n3);
    }
  }
  setProperties(e19, t2) {
    for (let n2 in e19)
      this.set(n2, e19[n2], t2);
  }
  applyProperties(e19) {
    e19.values_ && Object.assign(this.values_ || (this.values_ = {}), e19.values_);
  }
  unset(e19, t2) {
    if (this.values_ && e19 in this.values_) {
      let n2 = this.values_[e19];
      delete this.values_[e19], w(this.values_) && (this.values_ = null), t2 || this.notify(e19, n2);
    }
  }
}, N = {ADD: `add`, REMOVE: `remove`}, ie = {LENGTH: `length`}, ae = class extends c {
  constructor(e19, t2, n2) {
    super(e19), this.element = t2, this.index = n2;
  }
}, oe = class extends M {
  constructor(e19, t2) {
    if (super(), this.on, this.once, this.un, t2 || (t2 = {}), this.unique_ = !!t2.unique, this.array_ = e19 || [], this.unique_)
      for (let e20 = 0, t3 = this.array_.length; e20 < t3; ++e20)
        this.assertUnique_(this.array_[e20], e20);
    this.updateLength_();
  }
  clear() {
    for (; this.getLength() > 0; )
      this.pop();
  }
  extend(e19) {
    for (let t2 = 0, n2 = e19.length; t2 < n2; ++t2)
      this.push(e19[t2]);
    return this;
  }
  forEach(e19) {
    let t2 = this.array_;
    for (let n2 = 0, r2 = t2.length; n2 < r2; ++n2)
      e19(t2[n2], n2, t2);
  }
  getArray() {
    return this.array_;
  }
  item(e19) {
    return this.array_[e19];
  }
  getLength() {
    return this.get(ie.LENGTH);
  }
  insertAt(e19, t2) {
    if (e19 < 0 || e19 > this.getLength())
      throw Error(`Index out of bounds: ` + e19);
    this.unique_ && this.assertUnique_(t2), this.array_.splice(e19, 0, t2), this.updateLength_(), this.dispatchEvent(new ae(N.ADD, t2, e19));
  }
  pop() {
    return this.removeAt(this.getLength() - 1);
  }
  push(e19) {
    this.unique_ && this.assertUnique_(e19);
    let t2 = this.getLength();
    return this.insertAt(t2, e19), this.getLength();
  }
  remove(e19) {
    let t2 = this.array_;
    for (let n2 = 0, r2 = t2.length; n2 < r2; ++n2)
      if (t2[n2] === e19)
        return this.removeAt(n2);
  }
  removeAt(e19) {
    if (e19 < 0 || e19 >= this.getLength())
      return;
    let t2 = this.array_[e19];
    return this.array_.splice(e19, 1), this.updateLength_(), this.dispatchEvent(new ae(N.REMOVE, t2, e19)), t2;
  }
  setAt(e19, t2) {
    if (e19 >= this.getLength()) {
      this.insertAt(e19, t2);
      return;
    }
    if (e19 < 0)
      throw Error(`Index out of bounds: ` + e19);
    this.unique_ && this.assertUnique_(t2, e19);
    let n2 = this.array_[e19];
    this.array_[e19] = t2, this.dispatchEvent(new ae(N.REMOVE, n2, e19)), this.dispatchEvent(new ae(N.ADD, t2, e19));
  }
  updateLength_() {
    this.set(ie.LENGTH, this.array_.length);
  }
  assertUnique_(e19, t2) {
    for (let n2 = 0, r2 = this.array_.length; n2 < r2; ++n2)
      if (this.array_[n2] === e19 && n2 !== t2)
        throw Error(`Duplicate item added to a unique collection`);
  }
};
function P(e19, t2) {
  if (!e19)
    throw Error(t2);
}
var se = class e2 extends M {
  constructor(e19) {
    if (super(), this.on, this.once, this.un, this.id_ = void 0, this.geometryName_ = `geometry`, this.style_ = null, this.styleFunction_ = void 0, this.geometryChangeKey_ = null, this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), e19) {
      if (typeof e19.getSimplifiedGeometry == `function`) {
        let t2 = e19;
        this.setGeometry(t2);
      } else {
        let t2 = e19;
        this.setProperties(t2);
      }
    }
  }
  clone() {
    let t2 = new e2(this.hasProperties() ? this.getProperties() : null);
    t2.setGeometryName(this.getGeometryName());
    let n2 = this.getGeometry();
    n2 && t2.setGeometry(n2.clone());
    let r2 = this.getStyle();
    return r2 && t2.setStyle(r2), t2;
  }
  getGeometry() {
    return this.get(this.geometryName_);
  }
  getId() {
    return this.id_;
  }
  getGeometryName() {
    return this.geometryName_;
  }
  getStyle() {
    return this.style_;
  }
  getStyleFunction() {
    return this.styleFunction_;
  }
  handleGeometryChange_() {
    this.changed();
  }
  handleGeometryChanged_() {
    this.geometryChangeKey_ && (this.geometryChangeKey_ = (k(this.geometryChangeKey_), null));
    let e19 = this.getGeometry();
    e19 && (this.geometryChangeKey_ = D(e19, E.CHANGE, this.handleGeometryChange_, this)), this.changed();
  }
  setGeometry(e19) {
    this.set(this.geometryName_, e19);
  }
  setStyle(e19) {
    this.style_ = e19, this.styleFunction_ = e19 ? ce(e19) : void 0, this.changed();
  }
  setId(e19) {
    this.id_ = e19, this.changed();
  }
  setGeometryName(e19) {
    this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_), this.geometryName_ = e19, this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), this.handleGeometryChanged_();
  }
};
function ce(e19) {
  if (typeof e19 == `function`)
    return e19;
  let t2;
  return Array.isArray(e19) ? t2 = e19 : (P(typeof e19.getZIndex == `function`, "Expected an `ol/style/Style` or an array of `ol/style/Style.js`"), t2 = [e19]), function() {
    return t2;
  };
}
function le() {
  return [1, 0, 0, 1, 0, 0];
}
function ue(e19, t2) {
  return e19[0] = t2[0], e19[1] = t2[1], e19[2] = t2[2], e19[3] = t2[3], e19[4] = t2[4], e19[5] = t2[5], e19;
}
function F(e19, t2) {
  let n2 = t2[0], r2 = t2[1];
  return t2[0] = e19[0] * n2 + e19[2] * r2 + e19[4], t2[1] = e19[1] * n2 + e19[3] * r2 + e19[5], t2;
}
function de(e19, t2, n2, r2, i2, a2, o2, s2) {
  let c2 = Math.sin(a2), l2 = Math.cos(a2);
  return e19[0] = r2 * l2, e19[1] = i2 * c2, e19[2] = -r2 * c2, e19[3] = i2 * l2, e19[4] = o2 * r2 * l2 - s2 * r2 * c2 + t2, e19[5] = o2 * i2 * c2 + s2 * i2 * l2 + n2, e19;
}
function fe(e19, t2) {
  let n2 = pe(t2);
  P(n2 !== 0, `Transformation matrix cannot be inverted`);
  let r2 = t2[0], i2 = t2[1], a2 = t2[2], o2 = t2[3], s2 = t2[4], c2 = t2[5];
  return e19[0] = o2 / n2, e19[1] = -i2 / n2, e19[2] = -a2 / n2, e19[3] = r2 / n2, e19[4] = (a2 * c2 - o2 * s2) / n2, e19[5] = -(r2 * c2 - i2 * s2) / n2, e19;
}
function pe(e19) {
  return e19[0] * e19[3] - e19[1] * e19[2];
}
var me = [1e6, 1e6, 1e6, 1e6, 2, 2];
function he(e19) {
  return `matrix(` + e19.map((e20, t2) => Math.round(e20 * me[t2]) / me[t2]).join(`, `) + `)`;
}
var I = {UNKNOWN: 0, INTERSECTING: 1, ABOVE: 2, RIGHT: 4, BELOW: 8, LEFT: 16};
function ge(e19) {
  let t2 = we();
  for (let n2 = 0, r2 = e19.length; n2 < r2; ++n2)
    je(t2, e19[n2]);
  return t2;
}
function _e(e19, t2, n2) {
  return n2 ? (n2[0] = e19[0] - t2, n2[1] = e19[1] - t2, n2[2] = e19[2] + t2, n2[3] = e19[3] + t2, n2) : [e19[0] - t2, e19[1] - t2, e19[2] + t2, e19[3] + t2];
}
function ve(e19, t2) {
  return t2 ? (t2[0] = e19[0], t2[1] = e19[1], t2[2] = e19[2], t2[3] = e19[3], t2) : e19.slice();
}
function ye(e19, t2, n2) {
  let r2, i2;
  return r2 = t2 < e19[0] ? e19[0] - t2 : e19[2] < t2 ? t2 - e19[2] : 0, i2 = n2 < e19[1] ? e19[1] - n2 : e19[3] < n2 ? n2 - e19[3] : 0, r2 * r2 + i2 * i2;
}
function be(e19, t2) {
  return Se(e19, t2[0], t2[1]);
}
function xe(e19, t2) {
  return e19[0] <= t2[0] && t2[2] <= e19[2] && e19[1] <= t2[1] && t2[3] <= e19[3];
}
function Se(e19, t2, n2) {
  return e19[0] <= t2 && t2 <= e19[2] && e19[1] <= n2 && n2 <= e19[3];
}
function Ce(e19, t2) {
  let n2 = e19[0], r2 = e19[1], i2 = e19[2], a2 = e19[3], o2 = t2[0], s2 = t2[1], c2 = I.UNKNOWN;
  return o2 < n2 ? c2 |= I.LEFT : o2 > i2 && (c2 |= I.RIGHT), s2 < r2 ? c2 |= I.BELOW : s2 > a2 && (c2 |= I.ABOVE), c2 === I.UNKNOWN && (c2 = I.INTERSECTING), c2;
}
function we() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
}
function Te(e19, t2, n2, r2, i2) {
  return i2 ? (i2[0] = e19, i2[1] = t2, i2[2] = n2, i2[3] = r2, i2) : [e19, t2, n2, r2];
}
function Ee(e19) {
  return Te(1 / 0, 1 / 0, -1 / 0, -1 / 0, e19);
}
function De(e19, t2) {
  let n2 = e19[0], r2 = e19[1];
  return Te(n2, r2, n2, r2, t2);
}
function Oe(e19, t2, n2, r2, i2) {
  return Me(Ee(i2), e19, t2, n2, r2);
}
function ke(e19, t2) {
  return e19[0] == t2[0] && e19[2] == t2[2] && e19[1] == t2[1] && e19[3] == t2[3];
}
function Ae(e19, t2) {
  return t2[0] < e19[0] && (e19[0] = t2[0]), t2[2] > e19[2] && (e19[2] = t2[2]), t2[1] < e19[1] && (e19[1] = t2[1]), t2[3] > e19[3] && (e19[3] = t2[3]), e19;
}
function je(e19, t2) {
  t2[0] < e19[0] && (e19[0] = t2[0]), t2[0] > e19[2] && (e19[2] = t2[0]), t2[1] < e19[1] && (e19[1] = t2[1]), t2[1] > e19[3] && (e19[3] = t2[1]);
}
function Me(e19, t2, n2, r2, i2) {
  for (; n2 < r2; n2 += i2)
    Ne(e19, t2[n2], t2[n2 + 1]);
  return e19;
}
function Ne(e19, t2, n2) {
  e19[0] = Math.min(e19[0], t2), e19[1] = Math.min(e19[1], n2), e19[2] = Math.max(e19[2], t2), e19[3] = Math.max(e19[3], n2);
}
function Pe(e19, t2) {
  let n2;
  return n2 = t2(Ie(e19)), n2 || (n2 = t2(Le(e19)), n2) || (n2 = t2(Ge(e19)), n2) || (n2 = t2(We(e19)), n2) ? n2 : false;
}
function Fe(e19) {
  let t2 = 0;
  return qe(e19) || (t2 = L(e19) * He(e19)), t2;
}
function Ie(e19) {
  return [e19[0], e19[1]];
}
function Le(e19) {
  return [e19[2], e19[1]];
}
function Re(e19) {
  return [(e19[0] + e19[2]) / 2, (e19[1] + e19[3]) / 2];
}
function ze(e19, t2) {
  let n2;
  if (t2 === `bottom-left`)
    n2 = Ie(e19);
  else if (t2 === `bottom-right`)
    n2 = Le(e19);
  else if (t2 === `top-left`)
    n2 = We(e19);
  else if (t2 === `top-right`)
    n2 = Ge(e19);
  else
    throw Error(`Invalid corner`);
  return n2;
}
function Be(e19, t2, n2, r2, i2) {
  let [a2, o2, s2, c2, l2, u2, d2, f2] = Ve(e19, t2, n2, r2);
  return Te(Math.min(a2, s2, l2, d2), Math.min(o2, c2, u2, f2), Math.max(a2, s2, l2, d2), Math.max(o2, c2, u2, f2), i2);
}
function Ve(e19, t2, n2, r2) {
  let i2 = t2 * r2[0] / 2, a2 = t2 * r2[1] / 2, o2 = Math.cos(n2), s2 = Math.sin(n2), c2 = i2 * o2, l2 = i2 * s2, u2 = a2 * o2, d2 = a2 * s2, f2 = e19[0], p2 = e19[1];
  return [f2 - c2 + d2, p2 - l2 - u2, f2 - c2 - d2, p2 - l2 + u2, f2 + c2 - d2, p2 + l2 + u2, f2 + c2 + d2, p2 + l2 - u2, f2 - c2 + d2, p2 - l2 - u2];
}
function He(e19) {
  return e19[3] - e19[1];
}
function Ue(e19, t2, n2) {
  let r2 = n2 || we();
  return Ke(e19, t2) ? (r2[0] = e19[0] > t2[0] ? e19[0] : t2[0], r2[1] = e19[1] > t2[1] ? e19[1] : t2[1], r2[2] = e19[2] < t2[2] ? e19[2] : t2[2], r2[3] = e19[3] < t2[3] ? e19[3] : t2[3]) : Ee(r2), r2;
}
function We(e19) {
  return [e19[0], e19[3]];
}
function Ge(e19) {
  return [e19[2], e19[3]];
}
function L(e19) {
  return e19[2] - e19[0];
}
function Ke(e19, t2) {
  return e19[0] <= t2[2] && e19[2] >= t2[0] && e19[1] <= t2[3] && e19[3] >= t2[1];
}
function qe(e19) {
  return e19[2] < e19[0] || e19[3] < e19[1];
}
function Je(e19, t2) {
  return t2 ? (t2[0] = e19[0], t2[1] = e19[1], t2[2] = e19[2], t2[3] = e19[3], t2) : e19;
}
function Ye(e19, t2, n2) {
  let r2 = false, i2 = Ce(e19, t2), a2 = Ce(e19, n2);
  if (i2 === I.INTERSECTING || a2 === I.INTERSECTING)
    r2 = true;
  else {
    let o2 = e19[0], s2 = e19[1], c2 = e19[2], l2 = e19[3], u2 = t2[0], d2 = t2[1], f2 = n2[0], p2 = n2[1], m2 = (p2 - d2) / (f2 - u2), h2, g2;
    a2 & I.ABOVE && !(i2 & I.ABOVE) && (h2 = f2 - (p2 - l2) / m2, r2 = h2 >= o2 && h2 <= c2), !r2 && a2 & I.RIGHT && !(i2 & I.RIGHT) && (g2 = p2 - (f2 - c2) * m2, r2 = g2 >= s2 && g2 <= l2), !r2 && a2 & I.BELOW && !(i2 & I.BELOW) && (h2 = f2 - (p2 - s2) / m2, r2 = h2 >= o2 && h2 <= c2), !r2 && a2 & I.LEFT && !(i2 & I.LEFT) && (g2 = p2 - (f2 - o2) * m2, r2 = g2 >= s2 && g2 <= l2);
  }
  return r2;
}
function Xe(e19, t2) {
  let n2 = t2.getExtent(), r2 = Re(e19);
  if (t2.canWrapX() && (r2[0] < n2[0] || r2[0] >= n2[2])) {
    let t3 = L(n2), i2 = Math.floor((r2[0] - n2[0]) / t3) * t3;
    e19[0] -= i2, e19[2] -= i2;
  }
  return e19;
}
function Ze(e19, t2, n2) {
  if (t2.canWrapX()) {
    let r2 = t2.getExtent();
    if (!isFinite(e19[0]) || !isFinite(e19[2]))
      return [[r2[0], e19[1], r2[2], e19[3]]];
    Xe(e19, t2);
    let i2 = L(r2);
    if (L(e19) > i2 && !n2)
      return [[r2[0], e19[1], r2[2], e19[3]]];
    if (e19[0] < r2[0])
      return [[e19[0] + i2, e19[1], r2[2], e19[3]], [r2[0], e19[1], e19[2], e19[3]]];
    if (e19[2] > r2[2])
      return [[e19[0], e19[1], r2[2], e19[3]], [r2[0], e19[1], e19[2] - i2, e19[3]]];
  }
  return [e19];
}
var Qe = {radians: 6370997 / (2 * Math.PI), degrees: 2 * Math.PI * 6370997 / 360, ft: 0.3048, m: 1, "us-ft": 1200 / 3937}, $e = class {
  constructor(e19) {
    this.code_ = e19.code, this.units_ = e19.units, this.extent_ = e19.extent === void 0 ? null : e19.extent, this.worldExtent_ = e19.worldExtent === void 0 ? null : e19.worldExtent, this.axisOrientation_ = e19.axisOrientation === void 0 ? `enu` : e19.axisOrientation, this.global_ = e19.global !== void 0 && e19.global, this.canWrapX_ = !!(this.global_ && this.extent_), this.getPointResolutionFunc_ = e19.getPointResolution, this.defaultTileGrid_ = null, this.metersPerUnit_ = e19.metersPerUnit;
  }
  canWrapX() {
    return this.canWrapX_;
  }
  getCode() {
    return this.code_;
  }
  getExtent() {
    return this.extent_;
  }
  getUnits() {
    return this.units_;
  }
  getMetersPerUnit() {
    return this.metersPerUnit_ || Qe[this.units_];
  }
  getWorldExtent() {
    return this.worldExtent_;
  }
  getAxisOrientation() {
    return this.axisOrientation_;
  }
  isGlobal() {
    return this.global_;
  }
  setGlobal(e19) {
    this.global_ = e19, this.canWrapX_ = !!(e19 && this.extent_);
  }
  getDefaultTileGrid() {
    return this.defaultTileGrid_;
  }
  setDefaultTileGrid(e19) {
    this.defaultTileGrid_ = e19;
  }
  setExtent(e19) {
    this.extent_ = e19, this.canWrapX_ = !!(this.global_ && e19);
  }
  setWorldExtent(e19) {
    this.worldExtent_ = e19;
  }
  setGetPointResolution(e19) {
    this.getPointResolutionFunc_ = e19;
  }
  getPointResolutionFunc() {
    return this.getPointResolutionFunc_;
  }
}, et = 6378137, tt = Math.PI * et, nt = [-tt, -tt, tt, tt], rt = [-180, -85, 180, 85], it = et * Math.log(Math.tan(Math.PI / 2)), at = class extends $e {
  constructor(e19) {
    super({code: e19, units: `m`, extent: nt, global: true, worldExtent: rt, getPointResolution: function(e20, t2) {
      return e20 / Math.cosh(t2[1] / et);
    }});
  }
}, ot = [new at(`EPSG:3857`), new at(`EPSG:102100`), new at(`EPSG:102113`), new at(`EPSG:900913`), new at(`http://www.opengis.net/def/crs/EPSG/0/3857`), new at(`http://www.opengis.net/gml/srs/epsg.xml#3857`)];
function st(e19, t2, n2) {
  let r2 = e19.length;
  n2 = n2 > 1 ? n2 : 2, t2 === void 0 && (t2 = n2 > 2 ? e19.slice() : Array(r2));
  for (let i2 = 0; i2 < r2; i2 += n2) {
    t2[i2] = tt * e19[i2] / 180;
    let n3 = et * Math.log(Math.tan(Math.PI * (+e19[i2 + 1] + 90) / 360));
    n3 > it ? n3 = it : n3 < -it && (n3 = -it), t2[i2 + 1] = n3;
  }
  return t2;
}
function ct(e19, t2, n2) {
  let r2 = e19.length;
  n2 = n2 > 1 ? n2 : 2, t2 === void 0 && (t2 = n2 > 2 ? e19.slice() : Array(r2));
  for (let i2 = 0; i2 < r2; i2 += n2)
    t2[i2] = 180 * e19[i2] / tt, t2[i2 + 1] = 360 * Math.atan(Math.exp(e19[i2 + 1] / et)) / Math.PI - 90;
  return t2;
}
var lt = 6378137, ut = [-180, -90, 180, 90], dt = Math.PI * lt / 180, ft = class extends $e {
  constructor(e19, t2) {
    super({code: e19, units: `degrees`, extent: ut, axisOrientation: t2, global: true, metersPerUnit: dt, worldExtent: ut});
  }
}, pt = [new ft(`CRS:84`), new ft(`EPSG:4326`, `neu`), new ft(`urn:ogc:def:crs:OGC:1.3:CRS84`), new ft(`urn:ogc:def:crs:OGC:2:84`), new ft(`http://www.opengis.net/def/crs/OGC/1.3/CRS84`), new ft(`http://www.opengis.net/gml/srs/epsg.xml#4326`, `neu`), new ft(`http://www.opengis.net/def/crs/EPSG/0/4326`, `neu`)], mt = {};
function ht(e19) {
  return mt[e19] || mt[e19.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, `EPSG:$3`)] || null;
}
function gt(e19, t2) {
  mt[e19] = t2;
}
var _t = {};
function vt(e19, t2, n2) {
  let r2 = e19.getCode(), i2 = t2.getCode();
  r2 in _t || (_t[r2] = {}), _t[r2][i2] = n2;
}
function yt(e19, t2) {
  let n2;
  return e19 in _t && t2 in _t[e19] && (n2 = _t[e19][t2]), n2;
}
function R(e19, t2, n2) {
  return Math.min(Math.max(e19, t2), n2);
}
function bt(e19, t2, n2, r2, i2, a2) {
  let o2 = i2 - n2, s2 = a2 - r2;
  if (o2 !== 0 || s2 !== 0) {
    let c2 = ((e19 - n2) * o2 + (t2 - r2) * s2) / (o2 * o2 + s2 * s2);
    c2 > 1 ? (n2 = i2, r2 = a2) : c2 > 0 && (n2 += o2 * c2, r2 += s2 * c2);
  }
  return xt(e19, t2, n2, r2);
}
function xt(e19, t2, n2, r2) {
  let i2 = n2 - e19, a2 = r2 - t2;
  return i2 * i2 + a2 * a2;
}
function St(e19) {
  let t2 = e19.length;
  for (let n3 = 0; n3 < t2; n3++) {
    let r2 = n3, i2 = Math.abs(e19[n3][n3]);
    for (let a3 = n3 + 1; a3 < t2; a3++) {
      let t3 = Math.abs(e19[a3][n3]);
      t3 > i2 && (i2 = t3, r2 = a3);
    }
    if (i2 === 0)
      return null;
    let a2 = e19[r2];
    e19[r2] = e19[n3], e19[n3] = a2;
    for (let r3 = n3 + 1; r3 < t2; r3++) {
      let i3 = -e19[r3][n3] / e19[n3][n3];
      for (let a3 = n3; a3 < t2 + 1; a3++)
        n3 == a3 ? e19[r3][a3] = 0 : e19[r3][a3] += i3 * e19[n3][a3];
    }
  }
  let n2 = Array(t2);
  for (let r2 = t2 - 1; r2 >= 0; r2--) {
    n2[r2] = e19[r2][t2] / e19[r2][r2];
    for (let i2 = r2 - 1; i2 >= 0; i2--)
      e19[i2][t2] -= e19[i2][r2] * n2[r2];
  }
  return n2;
}
function Ct(e19) {
  return e19 * Math.PI / 180;
}
function wt(e19, t2) {
  let n2 = e19 % t2;
  return n2 * t2 < 0 ? n2 + t2 : n2;
}
function Tt(e19, t2, n2) {
  return e19 + n2 * (t2 - e19);
}
function Et(e19, t2) {
  let n2 = 10 ** t2;
  return Math.round(e19 * n2) / n2;
}
function Dt(e19, t2) {
  return Math.floor(Et(e19, t2));
}
function Ot(e19, t2) {
  return Math.ceil(Et(e19, t2));
}
function kt(e19, t2) {
  return e19[0] += +t2[0], e19[1] += +t2[1], e19;
}
function At(e19, t2) {
  let n2 = true;
  for (let r2 = e19.length - 1; r2 >= 0; --r2)
    if (e19[r2] != t2[r2]) {
      n2 = false;
      break;
    }
  return n2;
}
function jt(e19, t2) {
  let n2 = Math.cos(t2), r2 = Math.sin(t2), i2 = e19[0] * n2 - e19[1] * r2, a2 = e19[1] * n2 + e19[0] * r2;
  return e19[0] = i2, e19[1] = a2, e19;
}
function Mt(e19, t2) {
  return e19[0] *= t2, e19[1] *= t2, e19;
}
function Nt(e19, t2) {
  if (t2.canWrapX()) {
    let n2 = L(t2.getExtent()), r2 = Pt(e19, t2, n2);
    r2 && (e19[0] -= r2 * n2);
  }
  return e19;
}
function Pt(e19, t2, n2) {
  let r2 = t2.getExtent(), i2 = 0;
  return t2.canWrapX() && (e19[0] < r2[0] || e19[0] > r2[2]) && (n2 || (n2 = L(r2)), i2 = Math.floor((e19[0] - r2[0]) / n2)), i2;
}
function Ft(e19, t2, n2) {
  n2 || (n2 = 63710088e-1);
  let r2 = Ct(e19[1]), i2 = Ct(t2[1]), a2 = (i2 - r2) / 2, o2 = Ct(t2[0] - e19[0]) / 2, s2 = Math.sin(a2) * Math.sin(a2) + Math.sin(o2) * Math.sin(o2) * Math.cos(r2) * Math.cos(i2);
  return 2 * n2 * Math.atan2(Math.sqrt(s2), Math.sqrt(1 - s2));
}
var It = {info: 1, warn: 2, error: 3, none: 4}, Lt = It.info;
function Rt(...e19) {
  Lt > It.warn || console.warn(...e19);
}
var zt = true;
function Bt(e19) {
  zt = !(e19 === void 0 || e19);
}
function Vt(e19, t2) {
  if (t2 !== void 0) {
    for (let n2 = 0, r2 = e19.length; n2 < r2; ++n2)
      t2[n2] = e19[n2];
    t2 = t2;
  } else
    t2 = e19.slice();
  return t2;
}
function Ht(e19, t2) {
  if (t2 !== void 0 && e19 !== t2) {
    for (let n2 = 0, r2 = e19.length; n2 < r2; ++n2)
      t2[n2] = e19[n2];
    e19 = t2;
  }
  return e19;
}
function Ut(e19) {
  gt(e19.getCode(), e19), vt(e19, e19, Vt);
}
function Wt(e19) {
  e19.forEach(Ut);
}
function Gt(e19) {
  return typeof e19 == `string` ? ht(e19) : e19 || null;
}
function Kt(e19, t2, n2, r2) {
  e19 = Gt(e19);
  let i2, a2 = e19.getPointResolutionFunc();
  if (a2) {
    if (i2 = a2(t2, n2), r2 && r2 !== e19.getUnits()) {
      let t3 = e19.getMetersPerUnit();
      t3 && (i2 = i2 * t3 / Qe[r2]);
    }
  } else {
    let a3 = e19.getUnits();
    if (a3 == `degrees` && !r2 || r2 == `degrees`)
      i2 = t2;
    else {
      let o2 = Qt(e19, Gt(`EPSG:4326`));
      if (o2 === Ht && a3 !== `degrees`)
        i2 = t2 * e19.getMetersPerUnit();
      else {
        let e20 = [n2[0] - t2 / 2, n2[1], n2[0] + t2 / 2, n2[1], n2[0], n2[1] - t2 / 2, n2[0], n2[1] + t2 / 2];
        e20 = o2(e20, e20, 2), i2 = (Ft(e20.slice(0, 2), e20.slice(2, 4)) + Ft(e20.slice(4, 6), e20.slice(6, 8))) / 2;
      }
      let s2 = r2 ? Qe[r2] : e19.getMetersPerUnit();
      s2 !== void 0 && (i2 /= s2);
    }
  }
  return i2;
}
function qt(e19) {
  Wt(e19), e19.forEach(function(t2) {
    e19.forEach(function(e20) {
      t2 !== e20 && vt(t2, e20, Vt);
    });
  });
}
function Jt(e19, t2, n2, r2) {
  e19.forEach(function(e20) {
    t2.forEach(function(t3) {
      vt(e20, t3, n2), vt(t3, e20, r2);
    });
  });
}
function Yt(e19, t2) {
  return e19 ? typeof e19 == `string` ? Gt(e19) : e19 : Gt(t2);
}
function Xt(e19, t2) {
  return Bt(), en(e19, `EPSG:4326`, t2 === void 0 ? `EPSG:3857` : t2);
}
function Zt(e19, t2) {
  if (e19 === t2)
    return true;
  let n2 = e19.getUnits() === t2.getUnits();
  return (e19.getCode() === t2.getCode() || Qt(e19, t2) === Vt) && n2;
}
function Qt(e19, t2) {
  let n2 = yt(e19.getCode(), t2.getCode());
  return n2 || (n2 = Ht), n2;
}
function $t(e19, t2) {
  return Qt(Gt(e19), Gt(t2));
}
function en(e19, t2, n2) {
  return $t(t2, n2)(e19, void 0, e19.length);
}
var tn = null;
function nn() {
  return tn;
}
function rn(e19, t2) {
  return e19;
}
function an(e19, t2) {
  return zt && !At(e19, [0, 0]) && e19[0] >= -180 && e19[0] <= 180 && e19[1] >= -90 && e19[1] <= 90 && (zt = false, Rt(`Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.`)), e19;
}
function on(e19, t2) {
  return e19;
}
function sn(e19, t2) {
  return e19;
}
function cn(e19, t2) {
  return e19;
}
function ln() {
  qt(ot), qt(pt), Jt(pt, ot, st, ct);
}
ln();
function un(e19, t2, n2, r2, i2, a2) {
  a2 || (a2 = []);
  let o2 = 0;
  for (let s2 = t2; s2 < n2; s2 += r2) {
    let t3 = e19[s2], n3 = e19[s2 + 1];
    a2[o2++] = i2[0] * t3 + i2[2] * n3 + i2[4], a2[o2++] = i2[1] * t3 + i2[3] * n3 + i2[5];
  }
  return a2 && a2.length != o2 && (a2.length = o2), a2;
}
function dn(e19, t2, n2, r2, i2, a2, o2) {
  o2 || (o2 = []);
  let s2 = Math.cos(i2), c2 = Math.sin(i2), l2 = a2[0], u2 = a2[1], d2 = 0;
  for (let i3 = t2; i3 < n2; i3 += r2) {
    let t3 = e19[i3] - l2, n3 = e19[i3 + 1] - u2;
    o2[d2++] = l2 + t3 * s2 - n3 * c2, o2[d2++] = u2 + t3 * c2 + n3 * s2;
    for (let t4 = i3 + 2; t4 < i3 + r2; ++t4)
      o2[d2++] = e19[t4];
  }
  return o2 && o2.length != d2 && (o2.length = d2), o2;
}
function fn(e19, t2, n2, r2, i2, a2, o2, s2) {
  s2 || (s2 = []);
  let c2 = o2[0], l2 = o2[1], u2 = 0;
  for (let o3 = t2; o3 < n2; o3 += r2) {
    let t3 = e19[o3] - c2, n3 = e19[o3 + 1] - l2;
    s2[u2++] = c2 + i2 * t3, s2[u2++] = l2 + a2 * n3;
    for (let t4 = o3 + 2; t4 < o3 + r2; ++t4)
      s2[u2++] = e19[t4];
  }
  return s2 && s2.length != u2 && (s2.length = u2), s2;
}
function pn(e19, t2, n2, r2, i2, a2, o2) {
  o2 || (o2 = []);
  let s2 = 0;
  for (let c2 = t2; c2 < n2; c2 += r2) {
    o2[s2++] = e19[c2] + i2, o2[s2++] = e19[c2 + 1] + a2;
    for (let t3 = c2 + 2; t3 < c2 + r2; ++t3)
      o2[s2++] = e19[t3];
  }
  return o2 && o2.length != s2 && (o2.length = s2), o2;
}
var mn = le(), hn = class extends M {
  constructor() {
    super(), this.extent_ = we(), this.extentRevision_ = -1, this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = 0, this.simplifyTransformedInternal = x((e19, t2, n2) => {
      if (!n2)
        return this.getSimplifiedGeometry(t2);
      let r2 = this.clone();
      return r2.applyTransform(n2), r2.getSimplifiedGeometry(t2);
    });
  }
  simplifyTransformed(e19, t2) {
    return this.simplifyTransformedInternal(this.getRevision(), e19, t2);
  }
  clone() {
    return A();
  }
  closestPointXY(e19, t2, n2, r2) {
    return A();
  }
  containsXY(e19, t2) {
    let n2 = this.getClosestPoint([e19, t2]);
    return n2[0] === e19 && n2[1] === t2;
  }
  getClosestPoint(e19, t2) {
    return t2 || (t2 = [NaN, NaN]), this.closestPointXY(e19[0], e19[1], t2, 1 / 0), t2;
  }
  intersectsCoordinate(e19) {
    return this.containsXY(e19[0], e19[1]);
  }
  computeExtent(e19) {
    return A();
  }
  getExtent(e19) {
    if (this.extentRevision_ != this.getRevision()) {
      let e20 = this.computeExtent(this.extent_);
      (isNaN(e20[0]) || isNaN(e20[1])) && Ee(e20), this.extentRevision_ = this.getRevision();
    }
    return Je(this.extent_, e19);
  }
  rotate(e19, t2) {
    A();
  }
  scale(e19, t2, n2) {
    A();
  }
  simplify(e19) {
    return this.getSimplifiedGeometry(e19 * e19);
  }
  getSimplifiedGeometry(e19) {
    return A();
  }
  getType() {
    return A();
  }
  applyTransform(e19) {
    A();
  }
  intersectsExtent(e19) {
    return A();
  }
  translate(e19, t2) {
    A();
  }
  transform(e19, t2) {
    let n2 = Gt(e19), r2 = n2.getUnits() == `tile-pixels` ? function(e20, r3, i2) {
      let a2 = n2.getExtent(), o2 = n2.getWorldExtent(), s2 = He(o2) / He(a2);
      return de(mn, o2[0], o2[3], s2, -s2, 0, 0, 0), un(e20, 0, e20.length, i2, mn, r3), $t(n2, t2)(e20, r3, i2);
    } : $t(n2, t2);
    return this.applyTransform(r2), this;
  }
}, gn = class extends hn {
  constructor() {
    super(), this.layout = `XY`, this.stride = 2, this.flatCoordinates;
  }
  computeExtent(e19) {
    return Oe(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, e19);
  }
  getCoordinates() {
    return A();
  }
  getFirstCoordinate() {
    return this.flatCoordinates.slice(0, this.stride);
  }
  getFlatCoordinates() {
    return this.flatCoordinates;
  }
  getLastCoordinate() {
    return this.flatCoordinates.slice(this.flatCoordinates.length - this.stride);
  }
  getLayout() {
    return this.layout;
  }
  getSimplifiedGeometry(e19) {
    if (this.simplifiedGeometryRevision !== this.getRevision() && (this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = this.getRevision()), e19 < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && e19 <= this.simplifiedGeometryMaxMinSquaredTolerance)
      return this;
    let t2 = this.getSimplifiedGeometryInternal(e19);
    return t2.getFlatCoordinates().length < this.flatCoordinates.length ? t2 : (this.simplifiedGeometryMaxMinSquaredTolerance = e19, this);
  }
  getSimplifiedGeometryInternal(e19) {
    return this;
  }
  getStride() {
    return this.stride;
  }
  setFlatCoordinates(e19, t2) {
    this.stride = vn(e19), this.layout = e19, this.flatCoordinates = t2;
  }
  setCoordinates(e19, t2) {
    A();
  }
  setLayout(e19, t2, n2) {
    let r2;
    if (e19)
      r2 = vn(e19);
    else {
      for (let e20 = 0; e20 < n2; ++e20) {
        if (t2.length === 0) {
          this.layout = `XY`, this.stride = 2;
          return;
        }
        t2 = t2[0];
      }
      r2 = t2.length, e19 = _n(r2);
    }
    this.layout = e19, this.stride = r2;
  }
  applyTransform(e19) {
    this.flatCoordinates && (e19(this.flatCoordinates, this.flatCoordinates, this.stride), this.changed());
  }
  rotate(e19, t2) {
    let n2 = this.getFlatCoordinates();
    if (n2) {
      let r2 = this.getStride();
      dn(n2, 0, n2.length, r2, e19, t2, n2), this.changed();
    }
  }
  scale(e19, t2, n2) {
    t2 === void 0 && (t2 = e19), n2 || (n2 = Re(this.getExtent()));
    let r2 = this.getFlatCoordinates();
    if (r2) {
      let i2 = this.getStride();
      fn(r2, 0, r2.length, i2, e19, t2, n2, r2), this.changed();
    }
  }
  translate(e19, t2) {
    let n2 = this.getFlatCoordinates();
    if (n2) {
      let r2 = this.getStride();
      pn(n2, 0, n2.length, r2, e19, t2, n2), this.changed();
    }
  }
};
function _n(e19) {
  let t2;
  return e19 == 2 ? t2 = `XY` : e19 == 3 ? t2 = `XYZ` : e19 == 4 && (t2 = `XYZM`), t2;
}
function vn(e19) {
  let t2;
  return e19 == `XY` ? t2 = 2 : e19 == `XYZ` || e19 == `XYM` ? t2 = 3 : e19 == `XYZM` && (t2 = 4), t2;
}
function yn(e19, t2, n2) {
  let r2 = e19.getFlatCoordinates();
  if (!r2)
    return null;
  let i2 = e19.getStride();
  return un(r2, 0, r2.length, i2, t2, n2);
}
function bn(e19, t2, n2, r2, i2, a2, o2) {
  let s2 = e19[t2], c2 = e19[t2 + 1], l2 = e19[n2] - s2, u2 = e19[n2 + 1] - c2, d2;
  if (l2 === 0 && u2 === 0)
    d2 = t2;
  else {
    let f2 = ((i2 - s2) * l2 + (a2 - c2) * u2) / (l2 * l2 + u2 * u2);
    if (f2 > 1)
      d2 = n2;
    else if (f2 > 0) {
      for (let i3 = 0; i3 < r2; ++i3)
        o2[i3] = Tt(e19[t2 + i3], e19[n2 + i3], f2);
      o2.length = r2;
      return;
    } else
      d2 = t2;
  }
  for (let t3 = 0; t3 < r2; ++t3)
    o2[t3] = e19[d2 + t3];
  o2.length = r2;
}
function xn(e19, t2, n2, r2, i2) {
  let a2 = e19[t2], o2 = e19[t2 + 1];
  for (t2 += r2; t2 < n2; t2 += r2) {
    let n3 = e19[t2], r3 = e19[t2 + 1], s2 = xt(a2, o2, n3, r3);
    s2 > i2 && (i2 = s2), a2 = n3, o2 = r3;
  }
  return i2;
}
function Sn(e19, t2, n2, r2, i2) {
  for (let a2 = 0, o2 = n2.length; a2 < o2; ++a2) {
    let o3 = n2[a2];
    i2 = xn(e19, t2, o3, r2, i2), t2 = o3;
  }
  return i2;
}
function Cn(e19, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2) {
  if (t2 == n2)
    return l2;
  let d2, f2;
  if (i2 === 0) {
    if (f2 = xt(o2, s2, e19[t2], e19[t2 + 1]), f2 < l2) {
      for (d2 = 0; d2 < r2; ++d2)
        c2[d2] = e19[t2 + d2];
      return c2.length = r2, f2;
    }
    return l2;
  }
  u2 || (u2 = [NaN, NaN]);
  let p2 = t2 + r2;
  for (; p2 < n2; )
    if (bn(e19, p2 - r2, p2, r2, o2, s2, u2), f2 = xt(o2, s2, u2[0], u2[1]), f2 < l2) {
      for (l2 = f2, d2 = 0; d2 < r2; ++d2)
        c2[d2] = u2[d2];
      c2.length = r2, p2 += r2;
    } else
      p2 += r2 * Math.max((Math.sqrt(f2) - Math.sqrt(l2)) / i2 | 0, 1);
  if (a2 && (bn(e19, n2 - r2, t2, r2, o2, s2, u2), f2 = xt(o2, s2, u2[0], u2[1]), f2 < l2)) {
    for (l2 = f2, d2 = 0; d2 < r2; ++d2)
      c2[d2] = u2[d2];
    c2.length = r2;
  }
  return l2;
}
function wn(e19, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2) {
  u2 || (u2 = [NaN, NaN]);
  for (let d2 = 0, f2 = n2.length; d2 < f2; ++d2) {
    let f3 = n2[d2];
    l2 = Cn(e19, t2, f3, r2, i2, a2, o2, s2, c2, l2, u2), t2 = f3;
  }
  return l2;
}
function Tn(e19, t2, n2, r2) {
  for (let r3 = 0, i2 = n2.length; r3 < i2; ++r3)
    e19[t2++] = n2[r3];
  return t2;
}
function En(e19, t2, n2, r2) {
  for (let i2 = 0, a2 = n2.length; i2 < a2; ++i2) {
    let a3 = n2[i2];
    for (let n3 = 0; n3 < r2; ++n3)
      e19[t2++] = a3[n3];
  }
  return t2;
}
function Dn(e19, t2, n2, r2, i2) {
  i2 || (i2 = []);
  let a2 = 0;
  for (let o2 = 0, s2 = n2.length; o2 < s2; ++o2) {
    let s3 = En(e19, t2, n2[o2], r2);
    i2[a2++] = s3, t2 = s3;
  }
  return i2.length = a2, i2;
}
function On(e19, t2, n2, r2, i2, a2, o2) {
  let s2 = (n2 - t2) / r2;
  if (s2 < 3) {
    for (; t2 < n2; t2 += r2)
      a2[o2++] = e19[t2], a2[o2++] = e19[t2 + 1];
    return o2;
  }
  let c2 = Array(s2);
  c2[0] = 1, c2[s2 - 1] = 1;
  let l2 = [t2, n2 - r2], u2 = 0;
  for (; l2.length > 0; ) {
    let n3 = l2.pop(), a3 = l2.pop(), o3 = 0, s3 = e19[a3], d2 = e19[a3 + 1], f2 = e19[n3], p2 = e19[n3 + 1];
    for (let t3 = a3 + r2; t3 < n3; t3 += r2) {
      let n4 = e19[t3], r3 = e19[t3 + 1], i3 = bt(n4, r3, s3, d2, f2, p2);
      i3 > o3 && (u2 = t3, o3 = i3);
    }
    o3 > i2 && (c2[(u2 - t2) / r2] = 1, a3 + r2 < u2 && l2.push(a3, u2), u2 + r2 < n3 && l2.push(u2, n3));
  }
  for (let n3 = 0; n3 < s2; ++n3)
    c2[n3] && (a2[o2++] = e19[t2 + n3 * r2], a2[o2++] = e19[t2 + n3 * r2 + 1]);
  return o2;
}
function kn(e19, t2, n2, r2, i2, a2, o2, s2) {
  for (let c2 = 0, l2 = n2.length; c2 < l2; ++c2) {
    let l3 = n2[c2];
    o2 = On(e19, t2, l3, r2, i2, a2, o2), s2.push(o2), t2 = l3;
  }
  return o2;
}
function An(e19, t2) {
  return t2 * Math.round(e19 / t2);
}
function jn(e19, t2, n2, r2, i2, a2, o2) {
  if (t2 == n2)
    return o2;
  let s2 = An(e19[t2], i2), c2 = An(e19[t2 + 1], i2);
  t2 += r2, a2[o2++] = s2, a2[o2++] = c2;
  let l2, u2;
  do
    if (l2 = An(e19[t2], i2), u2 = An(e19[t2 + 1], i2), t2 += r2, t2 == n2)
      return a2[o2++] = l2, a2[o2++] = u2, o2;
  while (l2 == s2 && u2 == c2);
  for (; t2 < n2; ) {
    let n3 = An(e19[t2], i2), d2 = An(e19[t2 + 1], i2);
    if (t2 += r2, n3 == l2 && d2 == u2)
      continue;
    let f2 = l2 - s2, p2 = u2 - c2, m2 = n3 - s2, h2 = d2 - c2;
    f2 * h2 == p2 * m2 && (f2 < 0 && m2 < f2 || f2 == m2 || f2 > 0 && m2 > f2) && (p2 < 0 && h2 < p2 || p2 == h2 || p2 > 0 && h2 > p2) ? (l2 = n3, u2 = d2) : (a2[o2++] = l2, a2[o2++] = u2, s2 = l2, c2 = u2, l2 = n3, u2 = d2);
  }
  return a2[o2++] = l2, a2[o2++] = u2, o2;
}
function Mn(e19, t2, n2, r2, i2, a2, o2, s2) {
  for (let c2 = 0, l2 = n2.length; c2 < l2; ++c2) {
    let l3 = n2[c2];
    o2 = jn(e19, t2, l3, r2, i2, a2, o2), s2.push(o2), t2 = l3;
  }
  return o2;
}
function Nn(e19, t2, n2, r2, i2) {
  i2 = i2 === void 0 ? [] : i2;
  let a2 = 0;
  for (let o2 = t2; o2 < n2; o2 += r2)
    i2[a2++] = e19.slice(o2, o2 + r2);
  return i2.length = a2, i2;
}
function Pn(e19, t2, n2, r2, i2) {
  i2 = i2 === void 0 ? [] : i2;
  let a2 = 0;
  for (let o2 = 0, s2 = n2.length; o2 < s2; ++o2) {
    let s3 = n2[o2];
    i2[a2++] = Nn(e19, t2, s3, r2, i2[a2]), t2 = s3;
  }
  return i2.length = a2, i2;
}
function Fn(e19, t2, n2, r2, i2) {
  i2 = i2 === void 0 ? [] : i2;
  let a2 = 0;
  for (let o2 = 0, s2 = n2.length; o2 < s2; ++o2) {
    let s3 = n2[o2];
    i2[a2++] = s3.length === 1 && s3[0] === t2 ? [] : Pn(e19, t2, s3, r2, i2[a2]), t2 = s3[s3.length - 1];
  }
  return i2.length = a2, i2;
}
function In(e19, t2, n2, r2) {
  let i2 = 0, a2 = e19[n2 - r2], o2 = e19[n2 - r2 + 1];
  for (; t2 < n2; t2 += r2) {
    let n3 = e19[t2], r3 = e19[t2 + 1];
    i2 += o2 * n3 - a2 * r3, a2 = n3, o2 = r3;
  }
  return i2 / 2;
}
function Ln(e19, t2, n2, r2) {
  let i2 = 0;
  for (let a2 = 0, o2 = n2.length; a2 < o2; ++a2) {
    let o3 = n2[a2];
    i2 += In(e19, t2, o3, r2), t2 = o3;
  }
  return i2;
}
var Rn = class e3 extends gn {
  constructor(e19, t2) {
    super(), this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, t2 !== void 0 && !Array.isArray(e19[0]) ? this.setFlatCoordinates(t2, e19) : this.setCoordinates(e19, t2);
  }
  clone() {
    return new e3(this.flatCoordinates.slice(), this.layout);
  }
  closestPointXY(e19, t2, n2, r2) {
    return r2 < ye(this.getExtent(), e19, t2) ? r2 : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(xn(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), Cn(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, true, e19, t2, n2, r2));
  }
  getArea() {
    return In(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
  }
  getCoordinates() {
    return Nn(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
  }
  getSimplifiedGeometryInternal(t2) {
    let n2 = [];
    return n2.length = On(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t2, n2, 0), new e3(n2, `XY`);
  }
  getType() {
    return `LinearRing`;
  }
  intersectsExtent(e19) {
    return false;
  }
  setCoordinates(e19, t2) {
    this.setLayout(t2, e19, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = En(this.flatCoordinates, 0, e19, this.stride), this.changed();
  }
}, zn = class e4 extends gn {
  constructor(e19, t2) {
    super(), this.setCoordinates(e19, t2);
  }
  clone() {
    let t2 = new e4(this.flatCoordinates.slice(), this.layout);
    return t2.applyProperties(this), t2;
  }
  closestPointXY(e19, t2, n2, r2) {
    let i2 = this.flatCoordinates, a2 = xt(e19, t2, i2[0], i2[1]);
    if (a2 < r2) {
      let e20 = this.stride;
      for (let t3 = 0; t3 < e20; ++t3)
        n2[t3] = i2[t3];
      return n2.length = e20, a2;
    }
    return r2;
  }
  getCoordinates() {
    return this.flatCoordinates.slice();
  }
  computeExtent(e19) {
    return De(this.flatCoordinates, e19);
  }
  getType() {
    return `Point`;
  }
  intersectsExtent(e19) {
    return Se(e19, this.flatCoordinates[0], this.flatCoordinates[1]);
  }
  setCoordinates(e19, t2) {
    this.setLayout(t2, e19, 0), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Tn(this.flatCoordinates, 0, e19, this.stride), this.changed();
  }
};
function Bn(e19, t2, n2, r2, i2) {
  return !Pe(i2, function(i3) {
    return !Vn(e19, t2, n2, r2, i3[0], i3[1]);
  });
}
function Vn(e19, t2, n2, r2, i2, a2) {
  let o2 = 0, s2 = e19[n2 - r2], c2 = e19[n2 - r2 + 1];
  for (; t2 < n2; t2 += r2) {
    let n3 = e19[t2], r3 = e19[t2 + 1];
    c2 <= a2 ? r3 > a2 && (n3 - s2) * (a2 - c2) - (i2 - s2) * (r3 - c2) > 0 && o2++ : r3 <= a2 && (n3 - s2) * (a2 - c2) - (i2 - s2) * (r3 - c2) < 0 && o2--, s2 = n3, c2 = r3;
  }
  return o2 !== 0;
}
function Hn(e19, t2, n2, r2, i2, a2) {
  if (n2.length === 0 || !Vn(e19, t2, n2[0], r2, i2, a2))
    return false;
  for (let t3 = 1, o2 = n2.length; t3 < o2; ++t3)
    if (Vn(e19, n2[t3 - 1], n2[t3], r2, i2, a2))
      return false;
  return true;
}
function Un(e19, t2, n2, r2, i2, a2, o2) {
  let s2, c2, l2, u2, d2, p2, m2, h2 = i2[a2 + 1], g2 = [];
  for (let i3 = 0, a3 = n2.length; i3 < a3; ++i3) {
    let a4 = n2[i3];
    for (u2 = e19[a4 - r2], p2 = e19[a4 - r2 + 1], s2 = t2; s2 < a4; s2 += r2)
      d2 = e19[s2], m2 = e19[s2 + 1], (h2 <= p2 && m2 <= h2 || p2 <= h2 && h2 <= m2) && (l2 = (h2 - p2) / (m2 - p2) * (d2 - u2) + u2, g2.push(l2)), u2 = d2, p2 = m2;
  }
  let _2 = NaN, v2 = -1 / 0;
  for (g2.sort(f), u2 = g2[0], s2 = 1, c2 = g2.length; s2 < c2; ++s2) {
    d2 = g2[s2];
    let i3 = Math.abs(d2 - u2);
    i3 > v2 && (l2 = (u2 + d2) / 2, Hn(e19, t2, n2, r2, l2, h2) && (_2 = l2, v2 = i3)), u2 = d2;
  }
  return isNaN(_2) && (_2 = i2[a2]), o2 ? (o2.push(_2, h2, v2), o2) : [_2, h2, v2];
}
function Wn(e19, t2, n2, r2, i2) {
  let a2 = [];
  for (let o2 = 0, s2 = n2.length; o2 < s2; ++o2) {
    let s3 = n2[o2];
    a2 = Un(e19, t2, s3, r2, i2, 2 * o2, a2), t2 = s3[s3.length - 1];
  }
  return a2;
}
function Gn(e19, t2, n2, r2, i2) {
  let a2;
  for (t2 += r2; t2 < n2; t2 += r2)
    if (a2 = i2(e19.slice(t2 - r2, t2), e19.slice(t2, t2 + r2)), a2)
      return a2;
  return false;
}
function Kn(e19, t2, n2, r2, i2) {
  let a2 = Me(we(), e19, t2, n2, r2);
  return Ke(i2, a2) ? xe(i2, a2) || a2[0] >= i2[0] && a2[2] <= i2[2] || a2[1] >= i2[1] && a2[3] <= i2[3] ? true : Gn(e19, t2, n2, r2, function(e20, t3) {
    return Ye(i2, e20, t3);
  }) : false;
}
function qn(e19, t2, n2, r2, i2) {
  return !!(Kn(e19, t2, n2, r2, i2) || Vn(e19, t2, n2, r2, i2[0], i2[1]) || Vn(e19, t2, n2, r2, i2[0], i2[3]) || Vn(e19, t2, n2, r2, i2[2], i2[1]) || Vn(e19, t2, n2, r2, i2[2], i2[3]));
}
function Jn(e19, t2, n2, r2, i2) {
  if (!qn(e19, t2, n2[0], r2, i2))
    return false;
  if (n2.length === 1)
    return true;
  for (let t3 = 1, a2 = n2.length; t3 < a2; ++t3)
    if (Bn(e19, n2[t3 - 1], n2[t3], r2, i2) && !Kn(e19, n2[t3 - 1], n2[t3], r2, i2))
      return false;
  return true;
}
function Yn(e19, t2, n2, r2) {
  for (; t2 < n2 - r2; ) {
    for (let i2 = 0; i2 < r2; ++i2) {
      let a2 = e19[t2 + i2];
      e19[t2 + i2] = e19[n2 - r2 + i2], e19[n2 - r2 + i2] = a2;
    }
    t2 += r2, n2 -= r2;
  }
}
function Xn(e19, t2, n2, r2) {
  let i2 = 0, a2 = e19[n2 - r2], o2 = e19[n2 - r2 + 1];
  for (; t2 < n2; t2 += r2) {
    let n3 = e19[t2], r3 = e19[t2 + 1];
    i2 += (n3 - a2) * (r3 + o2), a2 = n3, o2 = r3;
  }
  return i2 === 0 ? void 0 : i2 > 0;
}
function Zn(e19, t2, n2, r2, i2) {
  i2 = i2 !== void 0 && i2;
  for (let a2 = 0, o2 = n2.length; a2 < o2; ++a2) {
    let o3 = n2[a2], s2 = Xn(e19, t2, o3, r2);
    if (a2 === 0) {
      if (i2 && s2 || !i2 && !s2)
        return false;
    } else if (i2 && !s2 || !i2 && s2)
      return false;
    t2 = o3;
  }
  return true;
}
function Qn(e19, t2, n2, r2, i2) {
  i2 = i2 !== void 0 && i2;
  for (let a2 = 0, o2 = n2.length; a2 < o2; ++a2) {
    let o3 = n2[a2], s2 = Xn(e19, t2, o3, r2);
    (a2 === 0 ? i2 && s2 || !i2 && !s2 : i2 && !s2 || !i2 && s2) && Yn(e19, t2, o3, r2), t2 = o3;
  }
  return t2;
}
function $n(e19, t2) {
  let n2 = [], r2 = 0, i2 = 0, a2;
  for (let o2 = 0, s2 = t2.length; o2 < s2; ++o2) {
    let s3 = t2[o2], c2 = Xn(e19, r2, s3, 2);
    if (a2 === void 0 && (a2 = c2), c2 === a2)
      n2.push(t2.slice(i2, o2 + 1));
    else {
      if (n2.length === 0)
        continue;
      n2[n2.length - 1].push(t2[i2]);
    }
    i2 = o2 + 1, r2 = s3;
  }
  return n2;
}
var er = class e5 extends gn {
  constructor(e19, t2, n2) {
    super(), this.ends_ = [], this.flatInteriorPointRevision_ = -1, this.flatInteriorPoint_ = null, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, this.orientedRevision_ = -1, this.orientedFlatCoordinates_ = null, t2 !== void 0 && n2 ? (this.setFlatCoordinates(t2, e19), this.ends_ = n2) : this.setCoordinates(e19, t2);
  }
  appendLinearRing(e19) {
    this.flatCoordinates ? h(this.flatCoordinates, e19.getFlatCoordinates()) : this.flatCoordinates = e19.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
  }
  clone() {
    let t2 = new e5(this.flatCoordinates.slice(), this.layout, this.ends_.slice());
    return t2.applyProperties(this), t2;
  }
  closestPointXY(e19, t2, n2, r2) {
    return r2 < ye(this.getExtent(), e19, t2) ? r2 : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(Sn(this.flatCoordinates, 0, this.ends_, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), wn(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, true, e19, t2, n2, r2));
  }
  containsXY(e19, t2) {
    return Hn(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, e19, t2);
  }
  getArea() {
    return Ln(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride);
  }
  getCoordinates(e19) {
    let t2;
    return e19 === void 0 ? t2 = this.flatCoordinates : (t2 = this.getOrientedFlatCoordinates().slice(), Qn(t2, 0, this.ends_, this.stride, e19)), Pn(t2, 0, this.ends_, this.stride);
  }
  getEnds() {
    return this.ends_;
  }
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      let e19 = Re(this.getExtent());
      this.flatInteriorPoint_ = Un(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, e19, 0), this.flatInteriorPointRevision_ = this.getRevision();
    }
    return this.flatInteriorPoint_;
  }
  getInteriorPoint() {
    return new zn(this.getFlatInteriorPoint(), `XYM`);
  }
  getLinearRingCount() {
    return this.ends_.length;
  }
  getLinearRing(e19) {
    return e19 < 0 || this.ends_.length <= e19 ? null : new Rn(this.flatCoordinates.slice(e19 === 0 ? 0 : this.ends_[e19 - 1], this.ends_[e19]), this.layout);
  }
  getLinearRings() {
    let e19 = this.layout, t2 = this.flatCoordinates, n2 = this.ends_, r2 = [], i2 = 0;
    for (let a2 = 0, o2 = n2.length; a2 < o2; ++a2) {
      let o3 = n2[a2], s2 = new Rn(t2.slice(i2, o3), e19);
      r2.push(s2), i2 = o3;
    }
    return r2;
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      let e19 = this.flatCoordinates;
      Zn(e19, 0, this.ends_, this.stride) ? this.orientedFlatCoordinates_ = e19 : (this.orientedFlatCoordinates_ = e19.slice(), this.orientedFlatCoordinates_.length = Qn(this.orientedFlatCoordinates_, 0, this.ends_, this.stride)), this.orientedRevision_ = this.getRevision();
    }
    return this.orientedFlatCoordinates_;
  }
  getSimplifiedGeometryInternal(t2) {
    let n2 = [], r2 = [];
    return n2.length = Mn(this.flatCoordinates, 0, this.ends_, this.stride, Math.sqrt(t2), n2, 0, r2), new e5(n2, `XY`, r2);
  }
  getType() {
    return `Polygon`;
  }
  intersectsExtent(e19) {
    return Jn(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, e19);
  }
  setCoordinates(e19, t2) {
    this.setLayout(t2, e19, 2), this.flatCoordinates || (this.flatCoordinates = []);
    let n2 = Dn(this.flatCoordinates, 0, e19, this.stride, this.ends_);
    this.flatCoordinates.length = n2.length === 0 ? 0 : n2[n2.length - 1], this.changed();
  }
};
function tr(e19) {
  if (qe(e19))
    throw Error(`Cannot create polygon from empty extent`);
  let t2 = e19[0], n2 = e19[1], r2 = e19[2], i2 = e19[3], a2 = [t2, n2, t2, i2, r2, i2, r2, n2, t2, n2];
  return new er(a2, `XY`, [a2.length]);
}
var nr = {PRERENDER: `prerender`, POSTRENDER: `postrender`, PRECOMPOSE: `precompose`, POSTCOMPOSE: `postcompose`, RENDERCOMPLETE: `rendercomplete`}, z = {IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4}, rr = {name: `rgb`, min: [0, 0, 0], max: [255, 255, 255], channel: [`red`, `green`, `blue`], alias: [`RGB`]}, ir = {name: `xyz`, min: [0, 0, 0], channel: [`X`, `Y`, `Z`], alias: [`XYZ`, `ciexyz`, `cie1931`], whitepoint: {2: {A: [109.85, 100, 35.585], C: [98.074, 100, 118.232], D50: [96.422, 100, 82.521], D55: [95.682, 100, 92.149], D65: [95.045592705167, 100, 108.9057750759878], D75: [94.972, 100, 122.638], F2: [99.187, 100, 67.395], F7: [95.044, 100, 108.755], F11: [100.966, 100, 64.37], E: [100, 100, 100]}, 10: {A: [111.144, 100, 35.2], C: [97.285, 100, 116.145], D50: [96.72, 100, 81.427], D55: [95.799, 100, 90.926], D65: [94.811, 100, 107.304], D75: [94.416, 100, 120.641], F2: [103.28, 100, 69.026], F7: [95.792, 100, 107.687], F11: [103.866, 100, 65.627], E: [100, 100, 100]}}};
ir.max = ir.whitepoint[2].D65, ir.rgb = function(e19, t2) {
  t2 || (t2 = ir.whitepoint[2].E);
  var n2 = e19[0] / t2[0], r2 = e19[1] / t2[1], i2 = e19[2] / t2[2], a2 = n2 * 3.240969941904521 + r2 * -1.537383177570093 + i2 * -0.498610760293, o2 = n2 * -0.96924363628087 + r2 * 1.87596750150772 + i2 * 0.041555057407175, s2 = n2 * 0.055630079696993 + r2 * -0.20397695888897 + i2 * 1.056971514242878;
  return a2 = a2 > 31308e-7 ? 1.055 * a2 ** (1 / 2.4) - 0.055 : a2 *= 12.92, o2 = o2 > 31308e-7 ? 1.055 * o2 ** (1 / 2.4) - 0.055 : o2 *= 12.92, s2 = s2 > 31308e-7 ? 1.055 * s2 ** (1 / 2.4) - 0.055 : s2 *= 12.92, a2 = Math.min(Math.max(0, a2), 1), o2 = Math.min(Math.max(0, o2), 1), s2 = Math.min(Math.max(0, s2), 1), [a2 * 255, o2 * 255, s2 * 255];
}, rr.xyz = function(e19, t2) {
  var n2 = e19[0] / 255, r2 = e19[1] / 255, i2 = e19[2] / 255;
  n2 = n2 > 0.04045 ? ((n2 + 0.055) / 1.055) ** 2.4 : n2 / 12.92, r2 = r2 > 0.04045 ? ((r2 + 0.055) / 1.055) ** 2.4 : r2 / 12.92, i2 = i2 > 0.04045 ? ((i2 + 0.055) / 1.055) ** 2.4 : i2 / 12.92;
  var a2 = n2 * 0.41239079926595 + r2 * 0.35758433938387 + i2 * 0.18048078840183, o2 = n2 * 0.21263900587151 + r2 * 0.71516867876775 + i2 * 0.072192315360733, s2 = n2 * 0.019330818715591 + r2 * 0.11919477979462 + i2 * 0.95053215224966;
  return t2 || (t2 = ir.whitepoint[2].E), [a2 * t2[0], o2 * t2[1], s2 * t2[2]];
};
var ar = {name: `luv`, min: [0, -134, -140], max: [100, 224, 122], channel: [`lightness`, `u`, `v`], alias: [`LUV`, `cieluv`, `cie1976`], xyz: function(e19, t2, n2) {
  var r2, i2, a2 = e19[0], o2 = e19[1], s2 = e19[2], c2, l2, u2, d2, f2, p2, m2, h2;
  return a2 === 0 ? [0, 0, 0] : (t2 || (t2 = `D65`), n2 || (n2 = 2), d2 = ir.whitepoint[n2][t2][0], f2 = ir.whitepoint[n2][t2][1], p2 = ir.whitepoint[n2][t2][2], m2 = 4 * d2 / (d2 + 15 * f2 + 3 * p2), h2 = 9 * f2 / (d2 + 15 * f2 + 3 * p2), r2 = o2 / (13 * a2) + m2 || 0, i2 = s2 / (13 * a2) + h2 || 0, l2 = a2 > 8 ? f2 * ((a2 + 16) / 116) ** 3 : f2 * a2 * 0.0011070564598794539, c2 = l2 * 9 * r2 / (4 * i2) || 0, u2 = l2 * (12 - 3 * r2 - 20 * i2) / (4 * i2) || 0, [c2, l2, u2]);
}};
ir.luv = function(e19, t2, n2) {
  var r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2 = 0.008856451679035631, _2 = 903.2962962962961;
  t2 || (t2 = `D65`), n2 || (n2 = 2), d2 = ir.whitepoint[n2][t2][0], f2 = ir.whitepoint[n2][t2][1], p2 = ir.whitepoint[n2][t2][2], m2 = 4 * d2 / (d2 + 15 * f2 + 3 * p2), h2 = 9 * f2 / (d2 + 15 * f2 + 3 * p2), c2 = e19[0], l2 = e19[1], u2 = e19[2], r2 = 4 * c2 / (c2 + 15 * l2 + 3 * u2) || 0, i2 = 9 * l2 / (c2 + 15 * l2 + 3 * u2) || 0;
  var v2 = l2 / f2;
  return a2 = v2 <= g2 ? _2 * v2 : 116 * v2 ** (1 / 3) - 16, o2 = 13 * a2 * (r2 - m2), s2 = 13 * a2 * (i2 - h2), [a2, o2, s2];
};
var or = {name: `lchuv`, channel: [`lightness`, `chroma`, `hue`], alias: [`LCHuv`, `cielchuv`], min: [0, 0, 0], max: [100, 100, 360], luv: function(e19) {
  var t2 = e19[0], n2 = e19[1], r2 = e19[2], i2, a2, o2 = r2 / 360 * 2 * Math.PI;
  return i2 = n2 * Math.cos(o2), a2 = n2 * Math.sin(o2), [t2, i2, a2];
}, xyz: function(e19) {
  return ar.xyz(or.luv(e19));
}};
ar.lchuv = function(e19) {
  var t2 = e19[0], n2 = e19[1], r2 = e19[2], i2 = Math.sqrt(n2 * n2 + r2 * r2), a2 = Math.atan2(r2, n2) * 360 / 2 / Math.PI;
  return a2 < 0 && (a2 += 360), [t2, i2, a2];
}, ir.lchuv = function(e19) {
  return ar.lchuv(ir.luv(e19));
};
var sr = {aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50]};
for (let e19 in sr)
  Object.freeze(sr[e19]);
var cr = Object.freeze(sr), lr = fr, ur = new Set([`srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50`, `xyz-d65`]), dr = {red: 0, orange: 60, yellow: 120, green: 180, blue: 240, purple: 300};
function fr(e19) {
  var t2, n2 = [], r2 = 1, i2;
  if (typeof e19 == `number`)
    return {space: `rgb`, values: [e19 >>> 16, (e19 & 65280) >>> 8, e19 & 255], alpha: 1};
  if (e19 = String(e19).trim().toLowerCase(), Object.hasOwn(cr, e19))
    n2 = cr[e19].slice(), i2 = `rgb`;
  else if (e19 === `transparent`)
    r2 = 0, i2 = `rgb`, n2 = [0, 0, 0];
  else if (e19[0] === `#`) {
    var a2 = e19.slice(1), o2 = a2.length;
    if (/^[0-9a-f]{3,8}$/.test(a2) && o2 !== 5 && o2 !== 7) {
      var s2 = o2 <= 4;
      r2 = 1, s2 ? (n2 = [parseInt(a2[0] + a2[0], 16), parseInt(a2[1] + a2[1], 16), parseInt(a2[2] + a2[2], 16)], o2 === 4 && (r2 = parseInt(a2[3] + a2[3], 16) / 255)) : (n2 = [parseInt(a2[0] + a2[1], 16), parseInt(a2[2] + a2[3], 16), parseInt(a2[4] + a2[5], 16)], o2 === 8 && (r2 = parseInt(a2[6] + a2[7], 16) / 255)), i2 = `rgb`;
    }
  } else if (t2 = /^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(e19)) {
    i2 = t2[1].replace(/a$/, ``);
    var c2 = i2 === `cmyk` ? 4 : i2 === `gray` ? 1 : 3;
    if (n2 = t2[2].trim().split(/\s*[,\/]\s*|\s+/), i2 === `color` && (i2 = n2.shift(), !ur.has(i2) && !/^--[a-z0-9-]+$/.test(i2)) || (n2 = n2.map(function(e20, t3) {
      if (e20[e20.length - 1] === `%`)
        return e20 = parseFloat(e20) / 100, t3 === 3 ? e20 : i2 === `rgb` ? e20 * 255 : i2[0] === `h` || i2[0] === `l` && !t3 ? e20 * 100 : i2 === `lab` ? e20 * 125 : i2 === `lch` ? t3 < 2 ? e20 * 150 : e20 * 360 : i2[0] === `o` && !t3 ? e20 : i2 === `oklab` ? e20 * 0.4 : i2 === `oklch` ? t3 < 2 ? e20 * 0.4 : e20 * 360 : e20;
      if (i2[t3] === `h` || t3 === 2 && i2[i2.length - 1] === `h`) {
        if (dr[e20] !== void 0)
          return dr[e20];
        if (e20.endsWith(`deg`))
          return parseFloat(e20);
        if (e20.endsWith(`turn`))
          return parseFloat(e20) * 360;
        if (e20.endsWith(`grad`))
          return parseFloat(e20) * 360 / 400;
        if (e20.endsWith(`rad`))
          return parseFloat(e20) * 180 / Math.PI;
      }
      return e20 === `none` ? 0 : parseFloat(e20);
    }), r2 = n2.length > c2 ? n2.pop() : 1, n2.length !== c2 || !n2.every(Number.isFinite) || !Number.isFinite(r2)))
      return pr();
  } else
    !/^[a-z][a-z0-9-]*\s*\(/.test(e19) && /[0-9](?:\s|\/|,)/.test(e19) && (n2 = e19.match(/-?[0-9]*\.?[0-9]+/g).map(Number), i2 = e19.replace(/grad|deg|rad|turn/g, ``).match(/([a-z])/gi)?.join(``)?.toLowerCase() || `rgb`, i2.length > 3 && i2[i2.length - 1] === `a` && i2.length === n2.length ? (i2 = i2.slice(0, -1), r2 = n2.pop()) : i2 === `rgb` && n2.length === 4 && (r2 = n2.pop()));
  return i2 ? {space: i2, values: n2, alpha: r2} : pr();
}
function pr() {
  return {space: void 0, values: [], alpha: 1};
}
var mr = {name: `rgb`, range: [[0, 255], [0, 255], [0, 255]]}, hr = {name: `hsl`, range: [[0, 360], [0, 100], [0, 100]], rgb: function(e19, t2, n2) {
  e19 = (e19 / 360 % 1 + 1) % 1, t2 /= 100, n2 /= 100;
  var r2, i2, a2, o2, s2, c2 = 0;
  if (t2 === 0)
    return s2 = n2 * 255, [s2, s2, s2];
  for (i2 = n2 < 0.5 ? n2 * (1 + t2) : n2 + t2 - n2 * t2, r2 = 2 * n2 - i2, o2 = [0, 0, 0]; c2 < 3; )
    a2 = e19 + 1 / 3 * -(c2 - 1), a2 < 0 ? a2++ : a2 > 1 && a2--, s2 = 6 * a2 < 1 ? r2 + (i2 - r2) * 6 * a2 : 2 * a2 < 1 ? i2 : 3 * a2 < 2 ? r2 + (i2 - r2) * (2 / 3 - a2) * 6 : r2, o2[c2++] = s2 * 255;
  return o2;
}};
mr.hsl = function(e19, t2, n2) {
  e19 /= 255, t2 /= 255, n2 /= 255;
  var r2 = Math.min(e19, t2, n2), i2 = Math.max(e19, t2, n2), a2 = i2 - r2, o2 = 0, s2, c2;
  return i2 === r2 ? o2 = 0 : e19 === i2 ? o2 = (t2 - n2) / a2 : t2 === i2 ? o2 = 2 + (n2 - e19) / a2 : n2 === i2 && (o2 = 4 + (e19 - t2) / a2), o2 = Math.min(o2 / 6, 1), o2 < 0 && (o2 += 1), c2 = (r2 + i2) / 2, s2 = i2 === r2 ? 0 : c2 <= 0.5 ? a2 / (i2 + r2) : a2 / (2 - i2 - r2), [o2 * 360, s2 * 100, c2 * 100];
};
var gr = {name: `hsv`, range: [[0, 360], [0, 100], [0, 100]], rgb: function(e19, t2, n2) {
  e19 = (e19 / 360 % 1 + 1) % 1 * 6, t2 /= 100, n2 /= 100;
  var r2 = Math.floor(e19) % 6, i2 = e19 - Math.floor(e19), a2 = n2 * (1 - t2), o2 = n2 * (1 - t2 * i2), s2 = n2 * (1 - t2 * (1 - i2)), c2;
  switch (r2) {
    case 0:
      c2 = [n2, s2, a2];
      break;
    case 1:
      c2 = [o2, n2, a2];
      break;
    case 2:
      c2 = [a2, n2, s2];
      break;
    case 3:
      c2 = [a2, o2, n2];
      break;
    case 4:
      c2 = [s2, a2, n2];
      break;
    case 5:
      c2 = [n2, a2, o2];
  }
  return [c2[0] * 255, c2[1] * 255, c2[2] * 255];
}, hsl: function(e19, t2, n2) {
  t2 /= 100, n2 /= 100;
  var r2, i2 = (2 - t2) * n2;
  return r2 = t2 * n2, r2 /= i2 <= 1 ? i2 : 2 - i2, r2 || (r2 = 0), i2 /= 2, [e19, r2 * 100, i2 * 100];
}};
mr.hsv = function(e19, t2, n2) {
  e19 /= 255, t2 /= 255, n2 /= 255;
  var r2 = Math.min(e19, t2, n2), i2 = Math.max(e19, t2, n2), a2 = i2 - r2, o2 = 0, s2 = i2 === 0 ? 0 : a2 / i2, c2;
  return i2 === r2 ? o2 = 0 : e19 === i2 ? o2 = (t2 - n2) / a2 : t2 === i2 ? o2 = 2 + (n2 - e19) / a2 : n2 === i2 && (o2 = 4 + (e19 - t2) / a2), o2 = Math.min(o2 / 6, 1), o2 < 0 && (o2 += 1), c2 = i2, [o2 * 360, s2 * 100, c2 * 100];
}, hr.hsv = function(e19, t2, n2) {
  t2 /= 100, n2 /= 100;
  var r2 = n2 * 2, i2 = t2 * (r2 <= 1 ? r2 : 2 - r2), a2 = (r2 + i2) / 2;
  return [e19, 2 * i2 / (r2 + i2) * 100, a2 * 100];
};
var _r = {name: `hwb`, range: [[0, 360], [0, 100], [0, 100]], rgb: function(e19, t2, n2) {
  e19 = (e19 / 360 % 1 + 1) % 1, t2 /= 100, n2 /= 100;
  var r2 = t2 + n2, i2, a2, o2, s2, c2, l2, u2;
  if (r2 >= 1) {
    var d2 = t2 / r2 * 255;
    return [d2, d2, d2];
  }
  switch (i2 = Math.floor(6 * e19), a2 = 1 - n2, o2 = 6 * e19 - i2, i2 & 1 && (o2 = 1 - o2), s2 = t2 + o2 * (a2 - t2), i2) {
    default:
    case 6:
    case 0:
      c2 = a2, l2 = s2, u2 = t2;
      break;
    case 1:
      c2 = s2, l2 = a2, u2 = t2;
      break;
    case 2:
      c2 = t2, l2 = a2, u2 = s2;
      break;
    case 3:
      c2 = t2, l2 = s2, u2 = a2;
      break;
    case 4:
      c2 = s2, l2 = t2, u2 = a2;
      break;
    case 5:
      c2 = a2, l2 = t2, u2 = s2;
  }
  return [c2 * 255, l2 * 255, u2 * 255];
}, hsv: function(e19, t2, n2) {
  t2 /= 100, n2 /= 100;
  var r2, i2;
  return t2 + n2 >= 1 ? (r2 = 0, i2 = t2 / (t2 + n2)) : (r2 = 1 - t2 / (1 - n2), i2 = 1 - n2), [e19, r2 * 100, i2 * 100];
}, hsl: function(e19, t2, n2) {
  return gr.hsl(..._r.hsv(e19, t2, n2));
}};
mr.hwb = function(e19, t2, n2) {
  e19 /= 255, t2 /= 255, n2 /= 255;
  var r2 = mr.hsl(e19 * 255, t2 * 255, n2 * 255)[0], i2 = Math.min(e19, Math.min(t2, n2));
  return n2 = 1 - Math.max(e19, Math.max(t2, n2)), [r2, i2 * 100, n2 * 100];
}, gr.hwb = function(e19, t2, n2) {
  return t2 /= 100, n2 /= 100, [e19, (n2 === 0 ? 0 : n2 * (1 - t2)) * 100, (1 - n2) * 100];
}, hr.hwb = function(e19, t2, n2) {
  return gr.hwb(...hr.hsv(e19, t2, n2));
};
var vr = {name: `cmyk`, range: [[0, 100], [0, 100], [0, 100], [0, 100]]};
vr.rgb = (e19, t2, n2, r2) => (e19 /= 100, t2 /= 100, n2 /= 100, r2 /= 100, [(1 - Math.min(1, e19 * (1 - r2) + r2)) * 255, (1 - Math.min(1, t2 * (1 - r2) + r2)) * 255, (1 - Math.min(1, n2 * (1 - r2) + r2)) * 255]), mr.cmyk = (e19, t2, n2) => {
  e19 /= 255, t2 /= 255, n2 /= 255;
  let r2, i2, a2, o2;
  return o2 = Math.min(1 - e19, 1 - t2, 1 - n2), r2 = (1 - e19 - o2) / (1 - o2) || 0, i2 = (1 - t2 - o2) / (1 - o2) || 0, a2 = (1 - n2 - o2) / (1 - o2) || 0, [r2 * 100, i2 * 100, a2 * 100, o2 * 100];
};
var yr = (e19) => e19 < 0 ? -1 : 1, br = (e19) => {
  let t2 = Math.abs(e19);
  return yr(e19) * (t2 > 0.04045 ? ((t2 + 0.055) / 1.055) ** 2.4 : t2 / 12.92);
}, xr = (e19) => {
  let t2 = Math.abs(e19);
  return yr(e19) * (t2 > 31308e-7 ? 1.055 * t2 ** (1 / 2.4) - 0.055 : t2 * 12.92);
}, Sr = (e19) => {
  let t2 = Math.abs(e19);
  return yr(e19) * (t2 < 0.018053968510807 ? 4.5 * t2 : 1.09929682680944 * t2 ** 0.45 - 0.09929682680944008);
}, Cr = (e19) => {
  let t2 = Math.abs(e19);
  return yr(e19) * (t2 < 0.08124285829863151 ? t2 / 4.5 : ((t2 + 0.09929682680944008) / 1.09929682680944) ** (1 / 0.45));
};
12 / (Math.exp(0.19008926999999998 / 0.17883277) + 0.28466892);
var wr = {name: `lrgb`, range: [[0, 1], [0, 1], [0, 1]]};
mr.lrgb = (e19, t2, n2) => [br(e19 / 255), br(t2 / 255), br(n2 / 255)], wr.rgb = (e19, t2, n2) => [255 * xr(e19), 255 * xr(t2), 255 * xr(n2)];
var B = (e19, t2, n2, r2) => [t2 * e19[0] + n2 * e19[1] + r2 * e19[2], t2 * e19[3] + n2 * e19[4] + r2 * e19[5], t2 * e19[6] + n2 * e19[7] + r2 * e19[8]], Tr = (e19, t2) => [e19[0] * t2[0] + e19[1] * t2[3] + e19[2] * t2[6], e19[0] * t2[1] + e19[1] * t2[4] + e19[2] * t2[7], e19[0] * t2[2] + e19[1] * t2[5] + e19[2] * t2[8], e19[3] * t2[0] + e19[4] * t2[3] + e19[5] * t2[6], e19[3] * t2[1] + e19[4] * t2[4] + e19[5] * t2[7], e19[3] * t2[2] + e19[4] * t2[5] + e19[5] * t2[8], e19[6] * t2[0] + e19[7] * t2[3] + e19[8] * t2[6], e19[6] * t2[1] + e19[7] * t2[4] + e19[8] * t2[7], e19[6] * t2[2] + e19[7] * t2[5] + e19[8] * t2[8]], Er = (e19) => {
  let [t2, n2, r2, i2, a2, o2, s2, c2, l2] = e19, u2 = a2 * l2 - o2 * c2, d2 = o2 * s2 - i2 * l2, f2 = i2 * c2 - a2 * s2, p2 = t2 * u2 + n2 * d2 + r2 * f2;
  return [u2 / p2, (r2 * c2 - n2 * l2) / p2, (n2 * o2 - r2 * a2) / p2, d2 / p2, (t2 * l2 - r2 * s2) / p2, (r2 * i2 - t2 * o2) / p2, f2 / p2, (n2 * s2 - t2 * c2) / p2, (t2 * a2 - n2 * i2) / p2];
}, Dr = (e19, t2) => Math.sign(e19) * Math.abs(e19) ** t2, Or = (e19, t2, n2, r2 = 1e-8) => {
  let i2 = Math.sqrt(t2 * t2 + n2 * n2), a2 = i2 < r2 ? 0 : Math.atan2(n2, t2) * 180 / Math.PI;
  return [e19, i2, a2 < 0 ? a2 + 360 : a2];
}, kr = (e19, t2, n2) => {
  let r2 = n2 * Math.PI / 180;
  return [e19, t2 * Math.cos(r2), t2 * Math.sin(r2)];
}, Ar = {D50_D65: [0.9554734527042182, -0.023098536874261423, 0.0632593086610217, -0.028369706963208136, 1.0099954580058226, 0.021041398966943008, 0.012314001688319899, -0.020507696433477912, 1.3303659366080753], D65_D50: [1.0479298208405488, 0.022946793341019088, -0.05019222954313557, 0.029627815688159344, 0.990434484573249, -0.01707382502938514, -0.009243058152591178, 0.015055144896577895, 0.7518742899580008]}, V = {name: `xyz`, range: [[0, 95.05], [0, 100], [0, 108.91]]}, jr = [0.41239079926595, 0.35758433938387, 0.18048078840183, 0.21263900587151, 0.71516867876775, 0.072192315360733, 0.019330818715591, 0.11919477979462, 0.95053215224966], Mr = Er(jr);
V.lrgb = (e19, t2, n2) => B(Mr, e19 / 100, t2 / 100, n2 / 100), wr.xyz = (e19, t2, n2) => {
  let r2 = B(jr, e19, t2, n2);
  return r2[0] *= 100, r2[1] *= 100, r2[2] *= 100, r2;
}, mr.xyz = (e19, t2, n2) => {
  let r2 = mr.lrgb(e19, t2, n2);
  return wr.xyz(r2[0], r2[1], r2[2]);
}, V.rgb = (e19, t2, n2) => {
  let r2 = V.lrgb(e19, t2, n2);
  return wr.rgb(r2[0], r2[1], r2[2]);
};
var Nr = {name: `xyz-d50`, range: [[0, 96.42], [0, 100], [0, 82.51]]};
Nr.xyz = (e19, t2, n2) => B(Ar.D50_D65, e19, t2, n2), V[Nr.name] = (e19, t2, n2) => B(Ar.D65_D50, e19, t2, n2);
var Pr = {2: {A: [109.85, 100, 35.585], B: [99.0927, 100, 85.313], C: [98.074, 100, 118.232], D50: [96.422, 100, 82.521], D55: [95.682, 100, 92.149], D65: [95.04559270516717, 100, 108.90577507598783], D75: [94.972, 100, 122.638], F1: [92.834, 100, 103.665], F2: [99.187, 100, 67.395], F3: [103.913, 100, 65.71], F4: [109.147, 100, 38.813], F5: [90.872, 100, 98.723], F6: [97.309, 100, 60.191], F7: [95.044, 100, 108.755], F8: [96.413, 100, 82.333], F9: [100.365, 100, 67.868], F10: [96.174, 100, 81.712], F11: [100.966, 100, 64.37], F12: [108.046, 100, 39.228], E: [100, 100, 100]}, 10: {A: [111.144, 100, 35.2], B: [99.178, 100, 84.349], C: [97.285, 100, 116.145], D50: [96.72, 100, 81.427], D55: [95.799, 100, 90.926], D65: [94.811, 100, 107.304], D75: [94.416, 100, 120.641], F1: [94.791, 100, 103.191], F2: [103.28, 100, 69.026], F3: [108.968, 100, 66.5], F4: [114.961, 100, 40.963], F5: [93.369, 100, 98.636], F6: [102.148, 100, 62.074], F7: [95.792, 100, 107.687], F8: [97.115, 100, 81.135], F9: [102.116, 100, 67.826], F10: [99.001, 100, 83.134], F11: [103.866, 100, 65.627], F12: [111.428, 100, 40.353], E: [100, 100, 100]}}, Fr = {name: `xyy`, range: [[0, 1], [0, 1], [0, 100]]};
Fr.xyz = function(e19, t2, n2) {
  var r2, i2;
  return t2 === 0 ? [0, 0, 0] : (r2 = e19 * n2 / t2, i2 = (1 - e19 - t2) * n2 / t2, [r2, n2, i2]);
};
var [Ir, Lr, Rr] = Pr[2].D65, zr = Ir / (Ir + Lr + Rr), Br = Lr / (Ir + Lr + Rr);
V.xyy = function(e19, t2, n2) {
  var r2 = e19 + t2 + n2;
  return r2 === 0 ? [zr, Br, t2] : [e19 / r2, t2 / r2, t2];
};
var Vr = 24389 / 27, Hr = (e19) => e19 > 0.008856451679035631 ? Math.cbrt(e19) : (Vr * e19 + 16) / 116, Ur = (e19) => e19 > 0.20689655172413793 ? e19 * e19 * e19 : (116 * e19 - 16) / Vr, Wr = {name: `lab`, range: [[0, 100], [-125, 125], [-125, 125]]}, Gr = [0.9642956764295677, 1, 0.8251046025104602];
Wr.xyz = (e19, t2, n2) => {
  let r2 = (e19 + 16) / 116, i2 = t2 / 500 + r2, a2 = r2 - n2 / 200, o2 = B(Ar.D50_D65, Ur(i2) * Gr[0], Ur(r2) * Gr[1], Ur(a2) * Gr[2]);
  return o2[0] *= 100, o2[1] *= 100, o2[2] *= 100, o2;
}, V.lab = (e19, t2, n2) => {
  let r2 = B(Ar.D65_D50, e19 / 100, t2 / 100, n2 / 100), i2 = Hr(r2[0] / Gr[0]), a2 = Hr(r2[1] / Gr[1]), o2 = Hr(r2[2] / Gr[2]);
  return [116 * a2 - 16, 500 * (i2 - a2), 200 * (a2 - o2)];
};
var Kr = Tr(Mr, Ar.D50_D65), qr = Er(Kr);
Wr.rgb = (e19, t2, n2) => {
  let r2 = (e19 + 16) / 116, i2 = t2 / 500 + r2, a2 = r2 - n2 / 200, o2 = B(Kr, Ur(i2) * Gr[0], Ur(r2) * Gr[1], Ur(a2) * Gr[2]);
  return [255 * xr(o2[0]), 255 * xr(o2[1]), 255 * xr(o2[2])];
}, mr.lab = (e19, t2, n2) => {
  let r2 = B(qr, br(e19 / 255), br(t2 / 255), br(n2 / 255)), i2 = Hr(r2[0] / Gr[0]), a2 = Hr(r2[1] / Gr[1]), o2 = Hr(r2[2] / Gr[2]);
  return [116 * a2 - 16, 500 * (i2 - a2), 200 * (a2 - o2)];
};
var Jr = {name: `lchab`, range: [[0, 100], [0, 150], [0, 360]], lab: (e19, t2, n2) => kr(e19, t2, n2)};
Wr.lchab = (e19, t2, n2) => Or(e19, t2, n2);
var Yr = {name: `luv`, range: [[0, 100], [-215, 215], [-215, 215]], xyz: function(e19, t2, n2, r2, i2) {
  var a2, o2, s2, c2, l2, u2, d2, f2, p2, m2;
  return e19 === 0 ? [0, 0, 0] : (r2 || (r2 = `D65`), i2 || (i2 = 2), u2 = Pr[i2][r2][0], d2 = Pr[i2][r2][1], f2 = Pr[i2][r2][2], p2 = 4 * u2 / (u2 + 15 * d2 + 3 * f2), m2 = 9 * d2 / (u2 + 15 * d2 + 3 * f2), a2 = t2 / (13 * e19) + p2 || 0, o2 = n2 / (13 * e19) + m2 || 0, c2 = d2 * Ur((e19 + 16) / 116), s2 = c2 * 9 * a2 / (4 * o2) || 0, l2 = c2 * (12 - 3 * a2 - 20 * o2) / (4 * o2) || 0, [s2, c2, l2]);
}};
V.luv = function(e19, t2, n2, r2, i2) {
  var a2, o2, s2, c2, l2, u2, d2, f2, p2, m2;
  return r2 || (r2 = `D65`), i2 || (i2 = 2), u2 = Pr[i2][r2][0], d2 = Pr[i2][r2][1], f2 = Pr[i2][r2][2], p2 = 4 * u2 / (u2 + 15 * d2 + 3 * f2), m2 = 9 * d2 / (u2 + 15 * d2 + 3 * f2), a2 = 4 * e19 / (e19 + 15 * t2 + 3 * n2) || 0, o2 = 9 * t2 / (e19 + 15 * t2 + 3 * n2) || 0, s2 = 116 * Hr(t2 / d2) - 16, c2 = 13 * s2 * (a2 - p2), l2 = 13 * s2 * (o2 - m2), [s2, c2, l2];
};
var Xr = {name: `lchuv`, range: [[0, 100], [0, 220], [0, 360]], luv: (e19, t2, n2) => kr(e19, t2, n2), xyz: function(e19, t2, n2) {
  return Yr.xyz(...Xr.luv(e19, t2, n2));
}};
Yr.lchuv = (e19, t2, n2) => Or(e19, t2, n2), V.lchuv = function(e19, t2, n2) {
  return Yr.lchuv(...V.luv(e19, t2, n2));
};
var Zr = {name: `oklab`, range: [[0, 1], [-0.4, 0.4], [-0.4, 0.4]]};
Zr.rgb = (e19, t2, n2) => {
  let r2 = e19 + 0.3963377774 * t2 + 0.2158037573 * n2, i2 = e19 - 0.1055613458 * t2 - 0.0638541728 * n2, a2 = e19 - 0.0894841775 * t2 - 1.291485548 * n2, o2 = r2 * r2 * r2, s2 = i2 * i2 * i2, c2 = a2 * a2 * a2;
  return wr.rgb(4.0767416621 * o2 - 3.307711591 * s2 + 0.2309699292 * c2, -1.2684380046 * o2 + 2.6097574011 * s2 - 0.3413193965 * c2, -0.0041960863 * o2 - 0.7034186147 * s2 + 1.707614701 * c2);
}, mr.oklab = (e19, t2, n2) => {
  let [r2, i2, a2] = mr.lrgb(e19, t2, n2), o2 = 0.4122214708 * r2 + 0.5363325363 * i2 + 0.0514459929 * a2, s2 = 0.2119034982 * r2 + 0.6806995451 * i2 + 0.1073969566 * a2, c2 = 0.0883024619 * r2 + 0.2817188376 * i2 + 0.6299787005 * a2, l2 = Math.cbrt(o2), u2 = Math.cbrt(s2), d2 = Math.cbrt(c2);
  return [0.2104542553 * l2 + 0.793617785 * u2 - 0.0040720468 * d2, 1.9779984951 * l2 - 2.428592205 * u2 + 0.4505937099 * d2, 0.0259040371 * l2 + 0.7827717662 * u2 - 0.808675766 * d2];
}, Zr.xyz = (e19, t2, n2) => {
  let r2 = e19 + 0.3963377774 * t2 + 0.2158037573 * n2, i2 = e19 - 0.1055613458 * t2 - 0.0638541728 * n2, a2 = e19 - 0.0894841775 * t2 - 1.291485548 * n2, o2 = r2 * r2 * r2, s2 = i2 * i2 * i2, c2 = a2 * a2 * a2;
  return [1.2270138511 * o2 - 0.5577999807 * s2 + 0.281256149 * c2, -0.0405801784 * o2 + 1.1122568696 * s2 - 0.0716766787 * c2, -0.0763812845 * o2 - 0.4214819784 * s2 + 1.5861632204 * c2].map((e20) => e20 * 100);
}, V.oklab = (e19, t2, n2) => {
  e19 /= 100, t2 /= 100, n2 /= 100;
  let r2 = Math.cbrt(0.8189330101 * e19 + 0.3618667424 * t2 - 0.1288597137 * n2), i2 = Math.cbrt(0.0329845436 * e19 + 0.9293118715 * t2 + 0.0361456387 * n2), a2 = Math.cbrt(0.0482003018 * e19 + 0.2643662691 * t2 + 0.633851707 * n2);
  return [0.2104542553 * r2 + 0.793617785 * i2 - 0.0040720468 * a2, 1.9779984951 * r2 - 2.428592205 * i2 + 0.4505937099 * a2, 0.0259040371 * r2 + 0.7827717662 * i2 - 0.808675766 * a2];
};
var Qr = {name: `oklch`, range: [[0, 1], [0, 0.4], [0, 360]]};
Qr.oklab = (e19, t2, n2) => kr(e19, t2, n2), Zr.oklch = (e19, t2, n2) => Or(e19, t2, n2), Qr.rgb = (e19, t2, n2) => {
  let r2 = Qr.oklab(e19, t2, n2);
  return Zr.rgb(r2[0], r2[1], r2[2]);
}, mr.oklch = (e19, t2, n2) => {
  let r2 = mr.oklab(e19, t2, n2);
  return Zr.oklch(r2[0], r2[1], r2[2]);
};
var $r = {name: `p3-linear`, range: [[0, 1], [0, 1], [0, 1]]}, ei = [0.4865709486482162, 0.26566769316909306, 0.1982172852343625, 0.2289745640697488, 0.6917385218365064, 0.079286914093745, 0, 0.04511338185890264, 1.043944368900976], ti = Er(ei);
$r.xyz = (e19, t2, n2) => {
  let [r2, i2, a2] = B(ei, e19, t2, n2);
  return [r2 * 100, i2 * 100, a2 * 100];
}, V[$r.name] = (e19, t2, n2) => B(ti, e19 / 100, t2 / 100, n2 / 100);
var ni = {name: `p3`, range: [[0, 1], [0, 1], [0, 1]]};
ni.xyz = (e19, t2, n2) => $r.xyz(br(e19), br(t2), br(n2)), V.p3 = (e19, t2, n2) => {
  let [r2, i2, a2] = V[`p3-linear`](e19, t2, n2);
  return [xr(r2), xr(i2), xr(a2)];
};
var ri = Tr(Mr, ei), ii = Er(ri);
ni.rgb = (e19, t2, n2) => {
  let r2 = B(ri, br(e19), br(t2), br(n2));
  return [255 * xr(r2[0]), 255 * xr(r2[1]), 255 * xr(r2[2])];
}, mr.p3 = (e19, t2, n2) => {
  let r2 = B(ii, br(e19 / 255), br(t2 / 255), br(n2 / 255));
  return [xr(r2[0]), xr(r2[1]), xr(r2[2])];
};
var ai = {name: `a98rgb-linear`, range: [[0, 1], [0, 1], [0, 1]]}, oi = [0.5766690429101305, 0.1855582379065463, 0.1882286462349947, 0.29734497525053605, 0.6273635662554661, 0.07529145849399788, 0.02703136138641234, 0.07068885253582723, 0.9913375368376388], si = Er(oi);
ai.xyz = (e19, t2, n2) => {
  let [r2, i2, a2] = B(oi, e19, t2, n2);
  return [r2 * 100, i2 * 100, a2 * 100];
}, V[ai.name] = (e19, t2, n2) => B(si, e19 / 100, t2 / 100, n2 / 100);
var ci = {name: `a98rgb`, range: [[0, 1], [0, 1], [0, 1]]}, li = 563 / 256, ui = 256 / 563;
ci.xyz = (e19, t2, n2) => ai.xyz(Dr(e19, li), Dr(t2, li), Dr(n2, li)), V.a98rgb = (e19, t2, n2) => {
  let [r2, i2, a2] = V[`a98rgb-linear`](e19, t2, n2);
  return [Dr(r2, ui), Dr(i2, ui), Dr(a2, ui)];
};
var di = {name: `prophoto-linear`, range: [[0, 1], [0, 1], [0, 1]]}, fi = [0.7977666449006423, 0.13518129740053308, 0.0313477341283922, 0.2880748288194013, 0.711835234241873, 8993693872564e-17, 0, 0, 0.8251046025104602], pi = [1.3457868816471583, -0.25557208737979464, -0.05110186497554526, -0.5446307051249019, 1.5082477428451468, 0.02052744743642139, 0, 0, 1.2119675456389452];
di.xyz = (e19, t2, n2) => {
  let [r2, i2, a2] = B(fi, e19, t2, n2);
  return B(Ar.D50_D65, r2, i2, a2).map((e20) => e20 * 100);
}, V[di.name] = (e19, t2, n2) => {
  let [r2, i2, a2] = B(Ar.D65_D50, e19 / 100, t2 / 100, n2 / 100);
  return B(pi, r2, i2, a2);
};
var mi = {name: `prophoto`, range: [[0, 1], [0, 1], [0, 1]]}, hi = 1 / 512, gi = 16 / 512;
function _i(e19) {
  let t2 = e19 < 0 ? -1 : 1, n2 = Math.abs(e19);
  return n2 < gi ? e19 / 16 : t2 * n2 ** 1.8;
}
function vi(e19) {
  let t2 = e19 < 0 ? -1 : 1, n2 = Math.abs(e19);
  return n2 >= hi ? t2 * n2 ** (1 / 1.8) : 16 * e19;
}
mi.xyz = (e19, t2, n2) => di.xyz(_i(e19), _i(t2), _i(n2)), V.prophoto = (e19, t2, n2) => {
  let [r2, i2, a2] = V[`prophoto-linear`](e19, t2, n2);
  return [vi(r2), vi(i2), vi(a2)];
};
var yi = {name: `rec2020-linear`, range: [[0, 1], [0, 1], [0, 1]]}, bi = [0.6369580483012914, 0.14461690358620832, 0.1688809751641721, 0.2627002120112671, 0.6779980715188708, 0.05930171646986196, 0, 0.028072693049087428, 1.060985057710791], xi = Er(bi);
yi.xyz = (e19, t2, n2) => {
  let [r2, i2, a2] = B(bi, e19, t2, n2);
  return [r2 * 100, i2 * 100, a2 * 100];
}, V[yi.name] = (e19, t2, n2) => B(xi, e19 / 100, t2 / 100, n2 / 100);
var Si = {name: `rec2020`, range: [[0, 1], [0, 1], [0, 1]]};
Si.xyz = (e19, t2, n2) => yi.xyz(Cr(e19), Cr(t2), Cr(n2)), V.rec2020 = (e19, t2, n2) => {
  let [r2, i2, a2] = V[`rec2020-linear`](e19, t2, n2);
  return [Sr(r2), Sr(i2), Sr(a2)];
};
var Ci = {rgb: [mr.range, (e19) => e19], hsl: [hr.range, (e19) => hr.rgb(...e19)], hsv: [gr.range, (e19) => gr.rgb(...e19)], hsb: [gr.range, (e19) => gr.rgb(...e19)], hwb: [_r.range, (e19) => _r.rgb(...e19)], cmyk: [vr.range, (e19) => vr.rgb(...e19)], xyz: [V.range, (e19) => V.rgb(...e19)], xyy: [Fr.range, (e19) => V.rgb(...Fr.xyz(...e19))], lab: [Wr.range, (e19) => Wr.rgb(...e19)], lch: [Jr.range, (e19) => Wr.rgb(...Jr.lab(...e19))], luv: [Yr.range, (e19) => V.rgb(...Yr.xyz(...e19))], lchuv: [Xr.range, (e19) => V.rgb(...Xr.xyz(...e19))], oklab: [Zr.range, (e19) => Zr.rgb(...e19)], oklch: [Qr.range, (e19) => Qr.rgb(...e19)], srgb: [mr.range, (e19) => e19, 255], "srgb-linear": [wr.range, (e19) => wr.rgb(...e19)], "display-p3": [ni.range, (e19) => V.rgb(...ni.xyz(...e19))], "a98-rgb": [ci.range, (e19) => V.rgb(...ci.xyz(...e19))], "prophoto-rgb": [mi.range, (e19) => V.rgb(...mi.xyz(...e19))], rec2020: [Si.range, (e19) => V.rgb(...Si.xyz(...e19))], "xyz-d65": [V.range, (e19) => V.rgb(...e19), 100], "xyz-d50": [Nr.range, (e19) => V.rgb(...Nr.xyz(...e19)), 100]}, wi = (e19, [t2, n2]) => n2 === 360 ? (e19 % 360 + 360) % 360 : Math.min(Math.max(e19, t2), n2);
function Ti(e19) {
  Array.isArray(e19) && e19.raw && (e19 = String.raw(...arguments)), e19 instanceof Number && (e19 = +e19);
  let t2 = lr(e19);
  if (!t2.space)
    return [];
  let [n2, r2, i2 = 1] = Ci[t2.space] || [];
  if (!n2 || t2.values.length < n2.length)
    return [];
  let a2 = r2(n2.map((e20, n3) => wi(t2.values[n3] * i2, e20)));
  return a2 = [...a2].map((e20) => Math.min(Math.max(e20, 0), 255)), a2.push(Math.min(Math.max(t2.alpha, 0), 1)), a2;
}
function Ei(e19) {
  return typeof e19 == `string` ? e19 : Ii(e19);
}
var Di = 1024, Oi = {}, ki = 0;
function Ai(e19) {
  if (e19.length === 4)
    return e19;
  let t2 = e19.slice();
  return t2[3] = 1, t2;
}
function ji(e19) {
  let t2 = ir.lchuv(rr.xyz(e19));
  return t2[3] = e19[3], t2;
}
function Mi(e19) {
  let t2 = ir.rgb(or.xyz(e19));
  return t2[3] = e19[3], t2;
}
function Ni(e19) {
  if (Oi.hasOwnProperty(e19))
    return Oi[e19];
  if (ki >= Di) {
    let e20 = 0;
    for (let t3 in Oi)
      e20++ & 3 || (delete Oi[t3], --ki);
  }
  let t2 = Ti(e19);
  if (t2.length !== 4)
    throw Error(`Failed to parse "` + e19 + `" as color`);
  for (let n2 of t2)
    if (isNaN(n2))
      throw Error(`Failed to parse "` + e19 + `" as color`);
  return Fi(t2), Oi[e19] = t2, ++ki, t2;
}
function Pi(e19) {
  return Array.isArray(e19) ? e19 : Ni(e19);
}
function Fi(e19) {
  return e19[0] = R(e19[0] + 0.5 | 0, 0, 255), e19[1] = R(e19[1] + 0.5 | 0, 0, 255), e19[2] = R(e19[2] + 0.5 | 0, 0, 255), e19[3] = R(e19[3], 0, 1), e19;
}
function Ii(e19) {
  let t2 = e19[0];
  t2 != (t2 | 0) && (t2 = t2 + 0.5 | 0);
  let n2 = e19[1];
  n2 != (n2 | 0) && (n2 = n2 + 0.5 | 0);
  let r2 = e19[2];
  r2 != (r2 | 0) && (r2 = r2 + 0.5 | 0);
  let i2 = e19[3] === void 0 ? 1 : Math.round(e19[3] * 1e3) / 1e3;
  return `rgba(` + t2 + `,` + n2 + `,` + r2 + `,` + i2 + `)`;
}
function Li(e19) {
  try {
    return Ni(e19), true;
  } catch {
    return false;
  }
}
var Ri = typeof navigator < `u` && navigator.userAgent !== void 0 ? navigator.userAgent.toLowerCase() : ``, zi = Ri.includes(`firefox`);
Ri.includes(`safari`) && !Ri.includes(`chrom`) && (Ri.includes(`version/15.4`) || /cpu (os|iphone os) 15_4 like mac os x/.test(Ri));
var Bi = Ri.includes(`webkit`) && !Ri.includes(`edge`), Vi = Ri.includes(`macintosh`), Hi = typeof devicePixelRatio < `u` ? devicePixelRatio : 1, Ui = typeof WorkerGlobalScope < `u` && typeof OffscreenCanvas < `u` && self instanceof WorkerGlobalScope, Wi = typeof Image < `u` && Image.prototype.decode, Gi = function() {
  let e19 = false;
  try {
    let t2 = Object.defineProperty({}, "passive", {get: function() {
      e19 = true;
    }});
    window.addEventListener(`_`, null, t2), window.removeEventListener(`_`, null, t2);
  } catch {
  }
  return e19;
}();
function Ki(e19, t2, n2, r2) {
  let i2;
  return i2 = n2 && n2.length ? n2.shift() : Ui ? new OffscreenCanvas(e19 || 300, t2 || 300) : document.createElement(`canvas`), e19 && (i2.width = e19), t2 && (i2.height = t2), i2.getContext(`2d`, r2);
}
var qi;
function Ji() {
  return qi || (qi = Ki(1, 1)), qi;
}
function Yi(e19) {
  let t2 = e19.canvas;
  t2.width = 1, t2.height = 1, e19.clearRect(0, 0, 1, 1);
}
function Xi(e19, t2) {
  let n2 = t2.parentNode;
  n2 && n2.replaceChild(e19, t2);
}
function Zi(e19) {
  return e19 && e19.parentNode ? e19.parentNode.removeChild(e19) : null;
}
function Qi(e19) {
  for (; e19.lastChild; )
    e19.removeChild(e19.lastChild);
}
function $i(e19, t2) {
  let n2 = e19.childNodes;
  for (let r2 = 0; ; ++r2) {
    let i2 = n2[r2], a2 = t2[r2];
    if (!i2 && !a2)
      break;
    i2 !== a2 && (i2 ? a2 ? e19.insertBefore(a2, i2) : (e19.removeChild(i2), --r2) : e19.appendChild(a2));
  }
}
function ea(e19, t2, n2) {
  let r2 = e19, i2 = true, a2 = false, o2 = false, s2 = [O(r2, E.LOAD, function() {
    o2 = true, a2 || t2();
  })];
  return r2.src && Wi ? (a2 = true, r2.decode().then(function() {
    i2 && t2();
  }).catch(function(e20) {
    i2 && (o2 ? t2() : n2());
  })) : s2.push(O(r2, E.ERROR, n2)), function() {
    i2 = false, s2.forEach(k);
  };
}
function ta(e19, t2) {
  return new Promise((n2, r2) => {
    function i2() {
      o2(), n2(e19);
    }
    function a2() {
      o2(), r2(Error(`Image load error`));
    }
    function o2() {
      e19.removeEventListener(`load`, i2), e19.removeEventListener(`error`, a2);
    }
    e19.addEventListener(`load`, i2), e19.addEventListener(`error`, a2), t2 && (e19.src = t2);
  });
}
function na(e19, t2) {
  return t2 && (e19.src = t2), e19.src && Wi ? new Promise((t3, n2) => e19.decode().then(() => t3(e19)).catch((r2) => e19.complete && e19.width ? t3(e19) : n2(r2))) : ta(e19);
}
var ra = class {
  constructor() {
    this.cache_ = {}, this.patternCache_ = {}, this.cacheSize_ = 0, this.maxCacheSize_ = 32;
  }
  clear() {
    this.cache_ = {}, this.patternCache_ = {}, this.cacheSize_ = 0;
  }
  canExpireCache() {
    return this.cacheSize_ > this.maxCacheSize_;
  }
  expire() {
    if (this.canExpireCache()) {
      let e19 = 0;
      for (let t2 in this.cache_) {
        let n2 = this.cache_[t2];
        !(e19++ & 3) && !n2.hasListener() && (delete this.cache_[t2], delete this.patternCache_[t2], --this.cacheSize_);
      }
    }
  }
  get(e19, t2, n2) {
    let r2 = ia(e19, t2, n2);
    return r2 in this.cache_ ? this.cache_[r2] : null;
  }
  getPattern(e19, t2, n2) {
    let r2 = ia(e19, t2, n2);
    return r2 in this.patternCache_ ? this.patternCache_[r2] : null;
  }
  set(e19, t2, n2, r2, i2) {
    let a2 = ia(e19, t2, n2), o2 = a2 in this.cache_;
    this.cache_[a2] = r2, i2 && (r2.getImageState() === z.IDLE && r2.load(), r2.getImageState() === z.LOADING ? r2.ready().then(() => {
      this.patternCache_[a2] = Ji().createPattern(r2.getImage(1), `repeat`);
    }) : this.patternCache_[a2] = Ji().createPattern(r2.getImage(1), `repeat`)), o2 || ++this.cacheSize_;
  }
  setSize(e19) {
    this.maxCacheSize_ = e19, this.expire();
  }
};
function ia(e19, t2, n2) {
  let r2 = n2 ? Pi(n2) : `null`;
  return t2 + `:` + e19 + `:` + r2;
}
var aa = new ra(), oa = null, sa = class extends T {
  constructor(e19, t2, n2, r2, i2) {
    super(), this.hitDetectionImage_ = null, this.image_ = e19, this.crossOrigin_ = n2, this.canvas_ = {}, this.color_ = i2, this.imageState_ = r2 === void 0 ? z.IDLE : r2, this.size_ = e19 && e19.width && e19.height ? [e19.width, e19.height] : null, this.src_ = t2, this.tainted_, this.ready_ = null;
  }
  initializeImage_() {
    this.image_ = new Image(), this.crossOrigin_ !== null && (this.image_.crossOrigin = this.crossOrigin_);
  }
  isTainted_() {
    if (this.tainted_ === void 0 && this.imageState_ === z.LOADED) {
      oa || (oa = Ki(1, 1, void 0, {willReadFrequently: true})), oa.drawImage(this.image_, 0, 0);
      try {
        oa.getImageData(0, 0, 1, 1), this.tainted_ = false;
      } catch {
        oa = null, this.tainted_ = true;
      }
    }
    return this.tainted_ === true;
  }
  dispatchChangeEvent_() {
    this.dispatchEvent(E.CHANGE);
  }
  handleImageError_() {
    this.imageState_ = z.ERROR, this.dispatchChangeEvent_();
  }
  handleImageLoad_() {
    this.imageState_ = z.LOADED, this.size_ = [this.image_.width, this.image_.height], this.dispatchChangeEvent_();
  }
  getImage(e19) {
    return this.image_ || this.initializeImage_(), this.replaceColor_(e19), this.canvas_[e19] ? this.canvas_[e19] : this.image_;
  }
  getPixelRatio(e19) {
    return this.replaceColor_(e19), this.canvas_[e19] ? e19 : 1;
  }
  getImageState() {
    return this.imageState_;
  }
  getHitDetectionImage() {
    if (this.image_ || this.initializeImage_(), !this.hitDetectionImage_) {
      if (this.isTainted_()) {
        let e19 = this.size_[0], t2 = this.size_[1], n2 = Ki(e19, t2);
        n2.fillRect(0, 0, e19, t2), this.hitDetectionImage_ = n2.canvas;
      } else
        this.hitDetectionImage_ = this.image_;
    }
    return this.hitDetectionImage_;
  }
  getSize() {
    return this.size_;
  }
  getSrc() {
    return this.src_;
  }
  load() {
    if (this.imageState_ === z.IDLE) {
      this.image_ || this.initializeImage_(), this.imageState_ = z.LOADING;
      try {
        this.src_ !== void 0 && (this.image_.src = this.src_);
      } catch {
        this.handleImageError_();
      }
      this.image_ instanceof HTMLImageElement && na(this.image_, this.src_).then((e19) => {
        this.image_ = e19, this.handleImageLoad_();
      }).catch(this.handleImageError_.bind(this));
    }
  }
  replaceColor_(e19) {
    if (!this.color_ || this.canvas_[e19] || this.imageState_ !== z.LOADED)
      return;
    let t2 = this.image_, n2 = document.createElement(`canvas`);
    n2.width = Math.ceil(t2.width * e19), n2.height = Math.ceil(t2.height * e19);
    let r2 = n2.getContext(`2d`);
    r2.scale(e19, e19), r2.drawImage(t2, 0, 0), r2.globalCompositeOperation = `multiply`, r2.fillStyle = Ei(this.color_), r2.fillRect(0, 0, n2.width / e19, n2.height / e19), r2.globalCompositeOperation = `destination-in`, r2.drawImage(t2, 0, 0), this.canvas_[e19] = n2;
  }
  ready() {
    return this.ready_ || (this.ready_ = new Promise((e19) => {
      this.imageState_ === z.LOADED || this.imageState_ === z.ERROR ? e19() : this.addEventListener(E.CHANGE, function t2() {
        (this.imageState_ === z.LOADED || this.imageState_ === z.ERROR) && (this.removeEventListener(E.CHANGE, t2), e19());
      });
    })), this.ready_;
  }
};
function ca(e19, t2, n2, r2, i2, a2) {
  let o2 = t2 === void 0 ? void 0 : aa.get(t2, n2, i2);
  return o2 || (o2 = new sa(e19, e19 && `src` in e19 ? e19.src || void 0 : t2, n2, r2, i2), aa.set(t2, n2, i2, o2, a2)), a2 && o2 && !aa.getPattern(t2, n2, i2) && aa.set(t2, n2, i2, o2, a2), o2;
}
var la = class e6 {
  constructor(e19) {
    e19 || (e19 = {}), this.patternImage_ = null, this.color_ = null, e19.color !== void 0 && this.setColor(e19.color);
  }
  clone() {
    let t2 = this.getColor();
    return new e6({color: Array.isArray(t2) ? t2.slice() : t2 || void 0});
  }
  getColor() {
    return this.color_;
  }
  setColor(e19) {
    if (typeof e19 == `object` && e19 && `src` in e19) {
      let t2 = ca(null, e19.src, `anonymous`, void 0, e19.offset ? null : e19.color ? e19.color : null, !(e19.offset && e19.size));
      t2.ready().then(() => {
        this.patternImage_ = null;
      }), t2.getImageState() === z.IDLE && t2.load(), t2.getImageState() === z.LOADING && (this.patternImage_ = t2);
    }
    this.color_ = e19;
  }
  loading() {
    return !!this.patternImage_;
  }
  ready() {
    return this.patternImage_ ? this.patternImage_.ready() : Promise.resolve();
  }
};
function ua(e19, t2, n2, r2, i2, a2, o2) {
  let s2, c2, l2 = (n2 - t2) / r2;
  if (l2 === 1)
    s2 = t2;
  else if (l2 === 2)
    s2 = t2, c2 = i2;
  else if (l2 !== 0) {
    let a3 = e19[t2], o3 = e19[t2 + 1], l3 = 0, u2 = [0];
    for (let i3 = t2 + r2; i3 < n2; i3 += r2) {
      let t3 = e19[i3], n3 = e19[i3 + 1];
      l3 += Math.sqrt((t3 - a3) * (t3 - a3) + (n3 - o3) * (n3 - o3)), u2.push(l3), a3 = t3, o3 = n3;
    }
    let f2 = i2 * l3, p2 = d(u2, f2);
    p2 < 0 ? (c2 = (f2 - u2[-p2 - 2]) / (u2[-p2 - 1] - u2[-p2 - 2]), s2 = t2 + (-p2 - 2) * r2) : s2 = t2 + p2 * r2;
  }
  o2 = o2 > 1 ? o2 : 2, a2 || (a2 = Array(o2));
  for (let t3 = 0; t3 < o2; ++t3)
    a2[t3] = s2 === void 0 ? NaN : c2 === void 0 ? e19[s2 + t3] : Tt(e19[s2 + t3], e19[s2 + r2 + t3], c2);
  return a2;
}
function da(e19, t2, n2, r2) {
  let i2 = e19[t2], a2 = e19[t2 + 1], o2 = 0;
  for (let s2 = t2 + r2; s2 < n2; s2 += r2) {
    let t3 = e19[s2], n3 = e19[s2 + 1];
    o2 += Math.sqrt((t3 - i2) * (t3 - i2) + (n3 - a2) * (n3 - a2)), i2 = t3, a2 = n3;
  }
  return o2;
}
var fa = class e7 {
  constructor(e19) {
    e19 || (e19 = {}), this.color_ = e19.color === void 0 ? null : e19.color, this.lineCap_ = e19.lineCap, this.lineDash_ = e19.lineDash === void 0 ? null : e19.lineDash, this.lineDashOffset_ = e19.lineDashOffset, this.lineJoin_ = e19.lineJoin, this.miterLimit_ = e19.miterLimit, this.width_ = e19.width;
  }
  clone() {
    let t2 = this.getColor();
    return new e7({color: Array.isArray(t2) ? t2.slice() : t2 || void 0, lineCap: this.getLineCap(), lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0, lineDashOffset: this.getLineDashOffset(), lineJoin: this.getLineJoin(), miterLimit: this.getMiterLimit(), width: this.getWidth()});
  }
  getColor() {
    return this.color_;
  }
  getLineCap() {
    return this.lineCap_;
  }
  getLineDash() {
    return this.lineDash_;
  }
  getLineDashOffset() {
    return this.lineDashOffset_;
  }
  getLineJoin() {
    return this.lineJoin_;
  }
  getMiterLimit() {
    return this.miterLimit_;
  }
  getWidth() {
    return this.width_;
  }
  setColor(e19) {
    this.color_ = e19;
  }
  setLineCap(e19) {
    this.lineCap_ = e19;
  }
  setLineDash(e19) {
    this.lineDash_ = e19;
  }
  setLineDashOffset(e19) {
    this.lineDashOffset_ = e19;
  }
  setLineJoin(e19) {
    this.lineJoin_ = e19;
  }
  setMiterLimit(e19) {
    this.miterLimit_ = e19;
  }
  setWidth(e19) {
    this.width_ = e19;
  }
};
function pa(e19) {
  return e19[0] > 0 && e19[1] > 0;
}
function ma(e19, t2, n2) {
  return n2 === void 0 && (n2 = [0, 0]), n2[0] = e19[0] * t2 + 0.5 | 0, n2[1] = e19[1] * t2 + 0.5 | 0, n2;
}
function ha(e19, t2) {
  return Array.isArray(e19) ? e19 : (t2 === void 0 ? t2 = [e19, e19] : (t2[0] = e19, t2[1] = e19), t2);
}
var ga = class e8 {
  constructor(e19) {
    this.opacity_ = e19.opacity, this.rotateWithView_ = e19.rotateWithView, this.rotation_ = e19.rotation, this.scale_ = e19.scale, this.scaleArray_ = ha(e19.scale), this.displacement_ = e19.displacement, this.declutterMode_ = e19.declutterMode;
  }
  clone() {
    let t2 = this.getScale();
    return new e8({opacity: this.getOpacity(), scale: Array.isArray(t2) ? t2.slice() : t2, rotation: this.getRotation(), rotateWithView: this.getRotateWithView(), displacement: this.getDisplacement().slice(), declutterMode: this.getDeclutterMode()});
  }
  getOpacity() {
    return this.opacity_;
  }
  getRotateWithView() {
    return this.rotateWithView_;
  }
  getRotation() {
    return this.rotation_;
  }
  getScale() {
    return this.scale_;
  }
  getScaleArray() {
    return this.scaleArray_;
  }
  getDisplacement() {
    return this.displacement_;
  }
  getDeclutterMode() {
    return this.declutterMode_;
  }
  getAnchor() {
    return A();
  }
  getImage(e19) {
    return A();
  }
  getHitDetectionImage() {
    return A();
  }
  getPixelRatio(e19) {
    return 1;
  }
  getImageState() {
    return A();
  }
  getImageSize() {
    return A();
  }
  getOrigin() {
    return A();
  }
  getSize() {
    return A();
  }
  setDisplacement(e19) {
    this.displacement_ = e19;
  }
  setOpacity(e19) {
    this.opacity_ = e19;
  }
  setRotateWithView(e19) {
    this.rotateWithView_ = e19;
  }
  setRotation(e19) {
    this.rotation_ = e19;
  }
  setScale(e19) {
    this.scale_ = e19, this.scaleArray_ = ha(e19);
  }
  listenImageChange(e19) {
    A();
  }
  load() {
    A();
  }
  unlistenImageChange(e19) {
    A();
  }
  ready() {
    return Promise.resolve();
  }
};
function _a(e19) {
  return e19 ? Array.isArray(e19) ? Ii(e19) : typeof e19 == `object` && `src` in e19 ? va(e19) : e19 : null;
}
function va(e19) {
  if (!e19.offset || !e19.size)
    return aa.getPattern(e19.src, `anonymous`, e19.color);
  let t2 = e19.src + `:` + e19.offset, n2 = aa.getPattern(t2, void 0, e19.color);
  if (n2)
    return n2;
  let r2 = aa.get(e19.src, `anonymous`, null);
  if (r2.getImageState() !== z.LOADED)
    return null;
  let i2 = Ki(e19.size[0], e19.size[1]);
  return i2.drawImage(r2.getImage(1), e19.offset[0], e19.offset[1], e19.size[0], e19.size[1], 0, 0, e19.size[0], e19.size[1]), ca(i2.canvas, t2, void 0, z.LOADED, e19.color, true), aa.getPattern(t2, void 0, e19.color);
}
var ya = `ol-hidden`, ba = `ol-unselectable`, xa = `ol-control`, Sa = `ol-collapsed`, Ca = RegExp(`^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`, `i`), wa = [`style`, `variant`, `weight`, `size`, `lineHeight`, `family`], Ta = function(e19) {
  let t2 = e19.match(Ca);
  if (!t2)
    return null;
  let n2 = {lineHeight: `normal`, size: `1.2em`, style: `normal`, weight: `normal`, variant: `normal`};
  for (let e20 = 0, r2 = wa.length; e20 < r2; ++e20) {
    let r3 = t2[e20 + 1];
    r3 !== void 0 && (n2[wa[e20]] = r3);
  }
  return n2.families = n2.family.split(/,\s?/), n2;
}, Ea = `10px sans-serif`, Da = `#000`, Oa = `round`, ka = [], Aa = `round`, ja = `#000`, Ma = `center`, Na = `middle`, Pa = [0, 0, 0, 0], Fa = new M(), Ia = null, La, Ra = {}, za = function() {
  let e19 = [`monospace`, `serif`], t2 = e19.length, n2 = `wmytzilWMYTZIL@#/&?$%10\uF013`, r2, i2;
  function a2(r3, a3, o3) {
    let s2 = true;
    for (let c2 = 0; c2 < t2; ++c2) {
      let t3 = e19[c2];
      if (i2 = Ha(r3 + ` ` + a3 + ` 32px ` + t3, n2), o3 != t3) {
        let e20 = Ha(r3 + ` ` + a3 + ` 32px ` + o3 + `,` + t3, n2);
        s2 && (s2 = e20 != i2);
      }
    }
    return !!s2;
  }
  function o2() {
    let e20 = true, t3 = Fa.getKeys();
    for (let n3 = 0, r3 = t3.length; n3 < r3; ++n3) {
      let r4 = t3[n3];
      Fa.get(r4) < 100 && (a2.apply(this, r4.split(`
`)) ? (C(Ra), Ia = null, La = void 0, Fa.set(r4, 100)) : (Fa.set(r4, Fa.get(r4) + 1, true), e20 = false));
    }
    e20 && (clearInterval(r2), r2 = void 0);
  }
  return function(e20) {
    let t3 = Ta(e20);
    if (!t3)
      return;
    let n3 = t3.families;
    for (let e21 = 0, i3 = n3.length; e21 < i3; ++e21) {
      let i4 = n3[e21], s2 = t3.style + `
` + t3.weight + `
` + i4;
      Fa.get(s2) === void 0 && (Fa.set(s2, 100, true), a2(t3.style, t3.weight, i4) || (Fa.set(s2, 0, true), r2 === void 0 && (r2 = setInterval(o2, 32))));
    }
  };
}(), Ba = function() {
  let e19;
  return function(t2) {
    let n2 = Ra[t2];
    if (n2 == null) {
      if (Ui) {
        let e20 = Ta(t2), r2 = Va(t2, `\u017Dg`);
        n2 = (isNaN(Number(e20.lineHeight)) ? 1.2 : Number(e20.lineHeight)) * (r2.actualBoundingBoxAscent + r2.actualBoundingBoxDescent);
      } else
        e19 || (e19 = document.createElement(`div`), e19.innerHTML = `M`, e19.style.minHeight = `0`, e19.style.maxHeight = `none`, e19.style.height = `auto`, e19.style.padding = `0`, e19.style.border = `none`, e19.style.position = `absolute`, e19.style.display = `block`, e19.style.left = `-99999px`), e19.style.font = t2, document.body.appendChild(e19), n2 = e19.offsetHeight, document.body.removeChild(e19);
      Ra[t2] = n2;
    }
    return n2;
  };
}();
function Va(e19, t2) {
  return Ia || (Ia = Ki(1, 1)), e19 != La && (Ia.font = e19, La = Ia.font), Ia.measureText(t2);
}
function Ha(e19, t2) {
  return Va(e19, t2).width;
}
function Ua(e19, t2, n2) {
  if (t2 in n2)
    return n2[t2];
  let r2 = t2.split(`
`).reduce((t3, n3) => Math.max(t3, Ha(e19, n3)), 0);
  return n2[t2] = r2, r2;
}
function Wa(e19, t2) {
  let n2 = [], r2 = [], i2 = [], a2 = 0, o2 = 0, s2 = 0, c2 = 0;
  for (let l2 = 0, u2 = t2.length; l2 <= u2; l2 += 2) {
    let d2 = t2[l2];
    if (d2 === `
` || l2 === u2) {
      a2 = Math.max(a2, o2), i2.push(o2), o2 = 0, s2 += c2, c2 = 0;
      continue;
    }
    let f2 = t2[l2 + 1] || e19.font, p2 = Ha(f2, d2);
    n2.push(p2), o2 += p2;
    let m2 = Ba(f2);
    r2.push(m2), c2 = Math.max(c2, m2);
  }
  return {width: a2, height: s2, widths: n2, heights: r2, lineWidths: i2};
}
function Ga(e19, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2) {
  e19.save(), n2 !== 1 && (e19.globalAlpha === void 0 ? e19.globalAlpha = (e20) => e20.globalAlpha *= n2 : e19.globalAlpha *= n2), t2 && e19.transform.apply(e19, t2), r2.contextInstructions ? (e19.translate(c2, l2), e19.scale(u2[0], u2[1]), Ka(r2, e19)) : u2[0] < 0 || u2[1] < 0 ? (e19.translate(c2, l2), e19.scale(u2[0], u2[1]), e19.drawImage(r2, i2, a2, o2, s2, 0, 0, o2, s2)) : e19.drawImage(r2, i2, a2, o2, s2, c2, l2, o2 * u2[0], s2 * u2[1]), e19.restore();
}
function Ka(e19, t2) {
  let n2 = e19.contextInstructions;
  for (let e20 = 0, r2 = n2.length; e20 < r2; e20 += 2)
    Array.isArray(n2[e20 + 1]) ? t2[n2[e20]].apply(t2, n2[e20 + 1]) : t2[n2[e20]] = n2[e20 + 1];
}
var qa = class e9 extends ga {
  constructor(e19) {
    super({opacity: 1, rotateWithView: e19.rotateWithView !== void 0 && e19.rotateWithView, rotation: e19.rotation === void 0 ? 0 : e19.rotation, scale: e19.scale === void 0 ? 1 : e19.scale, displacement: e19.displacement === void 0 ? [0, 0] : e19.displacement, declutterMode: e19.declutterMode}), this.canvases_, this.hitDetectionCanvas_ = null, this.fill_ = e19.fill === void 0 ? null : e19.fill, this.origin_ = [0, 0], this.points_ = e19.points, this.radius_ = e19.radius, this.radius2_ = e19.radius2, this.angle_ = e19.angle === void 0 ? 0 : e19.angle, this.stroke_ = e19.stroke === void 0 ? null : e19.stroke, this.size_, this.renderOptions_, this.imageState_ = this.fill_ && this.fill_.loading() ? z.LOADING : z.LOADED, this.imageState_ === z.LOADING && this.ready().then(() => this.imageState_ = z.LOADED), this.render();
  }
  clone() {
    let t2 = this.getScale(), n2 = new e9({fill: this.getFill() ? this.getFill().clone() : void 0, points: this.getPoints(), radius: this.getRadius(), radius2: this.getRadius2(), angle: this.getAngle(), stroke: this.getStroke() ? this.getStroke().clone() : void 0, rotation: this.getRotation(), rotateWithView: this.getRotateWithView(), scale: Array.isArray(t2) ? t2.slice() : t2, displacement: this.getDisplacement().slice(), declutterMode: this.getDeclutterMode()});
    return n2.setOpacity(this.getOpacity()), n2;
  }
  getAnchor() {
    let e19 = this.size_, t2 = this.getDisplacement(), n2 = this.getScaleArray();
    return [e19[0] / 2 - t2[0] / n2[0], e19[1] / 2 + t2[1] / n2[1]];
  }
  getAngle() {
    return this.angle_;
  }
  getFill() {
    return this.fill_;
  }
  setFill(e19) {
    this.fill_ = e19, this.render();
  }
  getHitDetectionImage() {
    return this.hitDetectionCanvas_ || (this.hitDetectionCanvas_ = this.createHitDetectionCanvas_(this.renderOptions_)), this.hitDetectionCanvas_;
  }
  getImage(e19) {
    let t2 = this.canvases_[e19];
    if (!t2) {
      let n2 = this.renderOptions_, r2 = Ki(n2.size * e19, n2.size * e19);
      this.draw_(n2, r2, e19), t2 = r2.canvas, this.canvases_[e19] = t2;
    }
    return t2;
  }
  getPixelRatio(e19) {
    return e19;
  }
  getImageSize() {
    return this.size_;
  }
  getImageState() {
    return this.imageState_;
  }
  getOrigin() {
    return this.origin_;
  }
  getPoints() {
    return this.points_;
  }
  getRadius() {
    return this.radius_;
  }
  getRadius2() {
    return this.radius2_;
  }
  getSize() {
    return this.size_;
  }
  getStroke() {
    return this.stroke_;
  }
  setStroke(e19) {
    this.stroke_ = e19, this.render();
  }
  listenImageChange(e19) {
  }
  load() {
  }
  unlistenImageChange(e19) {
  }
  calculateLineJoinSize_(e19, t2, n2) {
    if (t2 === 0 || this.points_ === 1 / 0 || e19 !== `bevel` && e19 !== `miter`)
      return t2;
    let r2 = this.radius_, i2 = this.radius2_ === void 0 ? r2 : this.radius2_;
    if (r2 < i2) {
      let e20 = r2;
      r2 = i2, i2 = e20;
    }
    let a2 = this.radius2_ === void 0 ? this.points_ : this.points_ * 2, o2 = 2 * Math.PI / a2, s2 = i2 * Math.sin(o2), c2 = Math.sqrt(i2 * i2 - s2 * s2), l2 = r2 - c2, u2 = Math.sqrt(s2 * s2 + l2 * l2), d2 = u2 / s2;
    if (e19 === `miter` && d2 <= n2)
      return d2 * t2;
    let f2 = t2 / 2 / d2, p2 = t2 / 2 * (l2 / u2), m2 = Math.sqrt((r2 + f2) * (r2 + f2) + p2 * p2) - r2;
    if (this.radius2_ === void 0 || e19 === `bevel`)
      return m2 * 2;
    let h2 = r2 * Math.sin(o2), g2 = Math.sqrt(r2 * r2 - h2 * h2), _2 = i2 - g2, v2 = Math.sqrt(h2 * h2 + _2 * _2) / h2;
    if (v2 <= n2) {
      let e20 = v2 * t2 / 2 - i2 - r2;
      return 2 * Math.max(m2, e20);
    }
    return m2 * 2;
  }
  createRenderOptions() {
    let e19 = Oa, t2 = Aa, n2 = 0, r2 = null, i2 = 0, a2, o2 = 0;
    this.stroke_ && (a2 = _a(this.stroke_.getColor() ?? `#000`), o2 = this.stroke_.getWidth() ?? 1, r2 = this.stroke_.getLineDash(), i2 = this.stroke_.getLineDashOffset() ?? 0, t2 = this.stroke_.getLineJoin() ?? `round`, e19 = this.stroke_.getLineCap() ?? `round`, n2 = this.stroke_.getMiterLimit() ?? 10);
    let s2 = this.calculateLineJoinSize_(t2, o2, n2), c2 = Math.max(this.radius_, this.radius2_ || 0), l2 = Math.ceil(2 * c2 + s2);
    return {strokeStyle: a2, strokeWidth: o2, size: l2, lineCap: e19, lineDash: r2, lineDashOffset: i2, lineJoin: t2, miterLimit: n2};
  }
  render() {
    this.renderOptions_ = this.createRenderOptions();
    let e19 = this.renderOptions_.size;
    this.canvases_ = {}, this.hitDetectionCanvas_ = null, this.size_ = [e19, e19];
  }
  draw_(e19, t2, n2) {
    if (t2.scale(n2, n2), t2.translate(e19.size / 2, e19.size / 2), this.createPath_(t2), this.fill_) {
      let e20 = this.fill_.getColor();
      e20 === null && (e20 = Da), t2.fillStyle = _a(e20), t2.fill();
    }
    e19.strokeStyle && (t2.strokeStyle = e19.strokeStyle, t2.lineWidth = e19.strokeWidth, e19.lineDash && (t2.setLineDash(e19.lineDash), t2.lineDashOffset = e19.lineDashOffset), t2.lineCap = e19.lineCap, t2.lineJoin = e19.lineJoin, t2.miterLimit = e19.miterLimit, t2.stroke());
  }
  createHitDetectionCanvas_(e19) {
    let t2;
    if (this.fill_) {
      let n2 = this.fill_.getColor(), r2 = 0;
      typeof n2 == `string` && (n2 = Pi(n2)), n2 === null ? r2 = 1 : Array.isArray(n2) && (r2 = n2.length === 4 ? n2[3] : 1), r2 === 0 && (t2 = Ki(e19.size, e19.size), this.drawHitDetectionCanvas_(e19, t2));
    }
    return t2 ? t2.canvas : this.getImage(1);
  }
  createPath_(e19) {
    let t2 = this.points_, n2 = this.radius_;
    if (t2 === 1 / 0)
      e19.arc(0, 0, n2, 0, 2 * Math.PI);
    else {
      let r2 = this.radius2_ === void 0 ? n2 : this.radius2_;
      this.radius2_ !== void 0 && (t2 *= 2);
      let i2 = this.angle_ - Math.PI / 2, a2 = 2 * Math.PI / t2;
      for (let o2 = 0; o2 < t2; o2++) {
        let t3 = i2 + o2 * a2, s2 = o2 % 2 == 0 ? n2 : r2;
        e19.lineTo(s2 * Math.cos(t3), s2 * Math.sin(t3));
      }
      e19.closePath();
    }
  }
  drawHitDetectionCanvas_(e19, t2) {
    t2.translate(e19.size / 2, e19.size / 2), this.createPath_(t2), t2.fillStyle = Da, t2.fill(), e19.strokeStyle && (t2.strokeStyle = e19.strokeStyle, t2.lineWidth = e19.strokeWidth, e19.lineDash && (t2.setLineDash(e19.lineDash), t2.lineDashOffset = e19.lineDashOffset), t2.lineJoin = e19.lineJoin, t2.miterLimit = e19.miterLimit, t2.stroke());
  }
  ready() {
    return this.fill_ ? this.fill_.ready() : Promise.resolve();
  }
}, Ja = class e10 extends qa {
  constructor(e19) {
    e19 || (e19 = {radius: 5}), super({points: 1 / 0, fill: e19.fill, radius: e19.radius, stroke: e19.stroke, scale: e19.scale === void 0 ? 1 : e19.scale, rotation: e19.rotation === void 0 ? 0 : e19.rotation, rotateWithView: e19.rotateWithView !== void 0 && e19.rotateWithView, displacement: e19.displacement === void 0 ? [0, 0] : e19.displacement, declutterMode: e19.declutterMode});
  }
  clone() {
    let t2 = this.getScale(), n2 = new e10({fill: this.getFill() ? this.getFill().clone() : void 0, stroke: this.getStroke() ? this.getStroke().clone() : void 0, radius: this.getRadius(), scale: Array.isArray(t2) ? t2.slice() : t2, rotation: this.getRotation(), rotateWithView: this.getRotateWithView(), displacement: this.getDisplacement().slice(), declutterMode: this.getDeclutterMode()});
    return n2.setOpacity(this.getOpacity()), n2;
  }
  setRadius(e19) {
    this.radius_ = e19, this.render();
  }
}, Ya = class e11 {
  constructor(e19) {
    e19 || (e19 = {}), this.geometry_ = null, this.geometryFunction_ = $a, e19.geometry !== void 0 && this.setGeometry(e19.geometry), this.fill_ = e19.fill === void 0 ? null : e19.fill, this.image_ = e19.image === void 0 ? null : e19.image, this.renderer_ = e19.renderer === void 0 ? null : e19.renderer, this.hitDetectionRenderer_ = e19.hitDetectionRenderer === void 0 ? null : e19.hitDetectionRenderer, this.stroke_ = e19.stroke === void 0 ? null : e19.stroke, this.text_ = e19.text === void 0 ? null : e19.text, this.zIndex_ = e19.zIndex;
  }
  clone() {
    let t2 = this.getGeometry();
    return t2 && typeof t2 == `object` && (t2 = t2.clone()), new e11({geometry: t2 ?? void 0, fill: this.getFill() ? this.getFill().clone() : void 0, image: this.getImage() ? this.getImage().clone() : void 0, renderer: this.getRenderer() ?? void 0, stroke: this.getStroke() ? this.getStroke().clone() : void 0, text: this.getText() ? this.getText().clone() : void 0, zIndex: this.getZIndex()});
  }
  getRenderer() {
    return this.renderer_;
  }
  setRenderer(e19) {
    this.renderer_ = e19;
  }
  setHitDetectionRenderer(e19) {
    this.hitDetectionRenderer_ = e19;
  }
  getHitDetectionRenderer() {
    return this.hitDetectionRenderer_;
  }
  getGeometry() {
    return this.geometry_;
  }
  getGeometryFunction() {
    return this.geometryFunction_;
  }
  getFill() {
    return this.fill_;
  }
  setFill(e19) {
    this.fill_ = e19;
  }
  getImage() {
    return this.image_;
  }
  setImage(e19) {
    this.image_ = e19;
  }
  getStroke() {
    return this.stroke_;
  }
  setStroke(e19) {
    this.stroke_ = e19;
  }
  getText() {
    return this.text_;
  }
  setText(e19) {
    this.text_ = e19;
  }
  getZIndex() {
    return this.zIndex_;
  }
  setGeometry(e19) {
    typeof e19 == `function` ? this.geometryFunction_ = e19 : typeof e19 == `string` ? this.geometryFunction_ = function(t2) {
      return t2.get(e19);
    } : e19 ? e19 !== void 0 && (this.geometryFunction_ = function() {
      return e19;
    }) : this.geometryFunction_ = $a, this.geometry_ = e19;
  }
  setZIndex(e19) {
    this.zIndex_ = e19;
  }
};
function Xa(e19) {
  let t2;
  if (typeof e19 == `function`)
    t2 = e19;
  else {
    let n2;
    Array.isArray(e19) ? n2 = e19 : (P(typeof e19.getZIndex == `function`, "Expected an `Style` or an array of `Style`"), n2 = [e19]), t2 = function() {
      return n2;
    };
  }
  return t2;
}
var Za = null;
function Qa(e19, t2) {
  if (!Za) {
    let e20 = new la({color: `rgba(255,255,255,0.4)`}), t3 = new fa({color: `#3399CC`, width: 1.25});
    Za = [new Ya({image: new Ja({fill: e20, stroke: t3, radius: 5}), fill: e20, stroke: t3})];
  }
  return Za;
}
function $a(e19) {
  return e19.getGeometry();
}
var eo = `#333`, to = class e12 {
  constructor(e19) {
    e19 || (e19 = {}), this.font_ = e19.font, this.rotation_ = e19.rotation, this.rotateWithView_ = e19.rotateWithView, this.scale_ = e19.scale, this.scaleArray_ = ha(e19.scale === void 0 ? 1 : e19.scale), this.text_ = e19.text, this.textAlign_ = e19.textAlign, this.justify_ = e19.justify, this.repeat_ = e19.repeat, this.textBaseline_ = e19.textBaseline, this.fill_ = e19.fill === void 0 ? new la({color: eo}) : e19.fill, this.maxAngle_ = e19.maxAngle === void 0 ? Math.PI / 4 : e19.maxAngle, this.placement_ = e19.placement === void 0 ? `point` : e19.placement, this.overflow_ = !!e19.overflow, this.stroke_ = e19.stroke === void 0 ? null : e19.stroke, this.offsetX_ = e19.offsetX === void 0 ? 0 : e19.offsetX, this.offsetY_ = e19.offsetY === void 0 ? 0 : e19.offsetY, this.backgroundFill_ = e19.backgroundFill ? e19.backgroundFill : null, this.backgroundStroke_ = e19.backgroundStroke ? e19.backgroundStroke : null, this.padding_ = e19.padding === void 0 ? null : e19.padding, this.declutterMode_ = e19.declutterMode;
  }
  clone() {
    let t2 = this.getScale();
    return new e12({font: this.getFont(), placement: this.getPlacement(), repeat: this.getRepeat(), maxAngle: this.getMaxAngle(), overflow: this.getOverflow(), rotation: this.getRotation(), rotateWithView: this.getRotateWithView(), scale: Array.isArray(t2) ? t2.slice() : t2, text: this.getText(), textAlign: this.getTextAlign(), justify: this.getJustify(), textBaseline: this.getTextBaseline(), fill: this.getFill() ? this.getFill().clone() : void 0, stroke: this.getStroke() ? this.getStroke().clone() : void 0, offsetX: this.getOffsetX(), offsetY: this.getOffsetY(), backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : void 0, backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : void 0, padding: this.getPadding() || void 0, declutterMode: this.getDeclutterMode()});
  }
  getOverflow() {
    return this.overflow_;
  }
  getFont() {
    return this.font_;
  }
  getMaxAngle() {
    return this.maxAngle_;
  }
  getPlacement() {
    return this.placement_;
  }
  getRepeat() {
    return this.repeat_;
  }
  getOffsetX() {
    return this.offsetX_;
  }
  getOffsetY() {
    return this.offsetY_;
  }
  getFill() {
    return this.fill_;
  }
  getRotateWithView() {
    return this.rotateWithView_;
  }
  getRotation() {
    return this.rotation_;
  }
  getScale() {
    return this.scale_;
  }
  getScaleArray() {
    return this.scaleArray_;
  }
  getStroke() {
    return this.stroke_;
  }
  getText() {
    return this.text_;
  }
  getTextAlign() {
    return this.textAlign_;
  }
  getJustify() {
    return this.justify_;
  }
  getTextBaseline() {
    return this.textBaseline_;
  }
  getBackgroundFill() {
    return this.backgroundFill_;
  }
  getBackgroundStroke() {
    return this.backgroundStroke_;
  }
  getPadding() {
    return this.padding_;
  }
  getDeclutterMode() {
    return this.declutterMode_;
  }
  setOverflow(e19) {
    this.overflow_ = e19;
  }
  setFont(e19) {
    this.font_ = e19;
  }
  setMaxAngle(e19) {
    this.maxAngle_ = e19;
  }
  setOffsetX(e19) {
    this.offsetX_ = e19;
  }
  setOffsetY(e19) {
    this.offsetY_ = e19;
  }
  setPlacement(e19) {
    this.placement_ = e19;
  }
  setRepeat(e19) {
    this.repeat_ = e19;
  }
  setRotateWithView(e19) {
    this.rotateWithView_ = e19;
  }
  setFill(e19) {
    this.fill_ = e19;
  }
  setRotation(e19) {
    this.rotation_ = e19;
  }
  setScale(e19) {
    this.scale_ = e19, this.scaleArray_ = ha(e19 === void 0 ? 1 : e19);
  }
  setStroke(e19) {
    this.stroke_ = e19;
  }
  setText(e19) {
    this.text_ = e19;
  }
  setTextAlign(e19) {
    this.textAlign_ = e19;
  }
  setJustify(e19) {
    this.justify_ = e19;
  }
  setTextBaseline(e19) {
    this.textBaseline_ = e19;
  }
  setBackgroundFill(e19) {
    this.backgroundFill_ = e19;
  }
  setBackgroundStroke(e19) {
    this.backgroundStroke_ = e19;
  }
  setPadding(e19) {
    this.padding_ = e19;
  }
}, H = {OPACITY: `opacity`, VISIBLE: `visible`, EXTENT: `extent`, Z_INDEX: `zIndex`, MAX_RESOLUTION: `maxResolution`, MIN_RESOLUTION: `minResolution`, MAX_ZOOM: `maxZoom`, MIN_ZOOM: `minZoom`, SOURCE: `source`, MAP: `map`}, no = class extends M {
  constructor(e19) {
    super(), this.on, this.once, this.un, this.background_ = e19.background;
    let t2 = Object.assign({}, e19);
    typeof e19.properties == `object` && (delete t2.properties, Object.assign(t2, e19.properties)), t2[H.OPACITY] = e19.opacity === void 0 ? 1 : e19.opacity, P(typeof t2[H.OPACITY] == `number`, `Layer opacity must be a number`), t2[H.VISIBLE] = e19.visible === void 0 || e19.visible, t2[H.Z_INDEX] = e19.zIndex, t2[H.MAX_RESOLUTION] = e19.maxResolution === void 0 ? 1 / 0 : e19.maxResolution, t2[H.MIN_RESOLUTION] = e19.minResolution === void 0 ? 0 : e19.minResolution, t2[H.MIN_ZOOM] = e19.minZoom === void 0 ? -1 / 0 : e19.minZoom, t2[H.MAX_ZOOM] = e19.maxZoom === void 0 ? 1 / 0 : e19.maxZoom, this.className_ = t2.className === void 0 ? `ol-layer` : t2.className, delete t2.className, this.setProperties(t2), this.state_ = null;
  }
  getBackground() {
    return this.background_;
  }
  getClassName() {
    return this.className_;
  }
  getLayerState(e19) {
    let t2 = this.state_ || {layer: this, managed: e19 === void 0 || e19}, n2 = this.getZIndex();
    return t2.opacity = R(Math.round(this.getOpacity() * 100) / 100, 0, 1), t2.visible = this.getVisible(), t2.extent = this.getExtent(), t2.zIndex = n2 === void 0 && !t2.managed ? 1 / 0 : n2, t2.maxResolution = this.getMaxResolution(), t2.minResolution = Math.max(this.getMinResolution(), 0), t2.minZoom = this.getMinZoom(), t2.maxZoom = this.getMaxZoom(), this.state_ = t2, t2;
  }
  getLayersArray(e19) {
    return A();
  }
  getLayerStatesArray(e19) {
    return A();
  }
  getExtent() {
    return this.get(H.EXTENT);
  }
  getMaxResolution() {
    return this.get(H.MAX_RESOLUTION);
  }
  getMinResolution() {
    return this.get(H.MIN_RESOLUTION);
  }
  getMinZoom() {
    return this.get(H.MIN_ZOOM);
  }
  getMaxZoom() {
    return this.get(H.MAX_ZOOM);
  }
  getOpacity() {
    return this.get(H.OPACITY);
  }
  getSourceState() {
    return A();
  }
  getVisible() {
    return this.get(H.VISIBLE);
  }
  getZIndex() {
    return this.get(H.Z_INDEX);
  }
  setBackground(e19) {
    this.background_ = e19, this.changed();
  }
  setExtent(e19) {
    this.set(H.EXTENT, e19);
  }
  setMaxResolution(e19) {
    this.set(H.MAX_RESOLUTION, e19);
  }
  setMinResolution(e19) {
    this.set(H.MIN_RESOLUTION, e19);
  }
  setMaxZoom(e19) {
    this.set(H.MAX_ZOOM, e19);
  }
  setMinZoom(e19) {
    this.set(H.MIN_ZOOM, e19);
  }
  setOpacity(e19) {
    P(typeof e19 == `number`, `Layer opacity must be a number`), this.set(H.OPACITY, e19);
  }
  setVisible(e19) {
    this.set(H.VISIBLE, e19);
  }
  setZIndex(e19) {
    this.set(H.Z_INDEX, e19);
  }
  disposeInternal() {
    this.state_ && (this.state_ = (this.state_.layer = null, null)), super.disposeInternal();
  }
}, ro = {ANIMATING: 0, INTERACTING: 1}, io = {CENTER: `center`, RESOLUTION: `resolution`, ROTATION: `rotation`};
function ao(e19, t2, n2) {
  return function(r2, i2, a2, o2, s2) {
    if (!r2)
      return;
    if (!i2 && !t2)
      return r2;
    let c2 = t2 ? 0 : a2[0] * i2, l2 = t2 ? 0 : a2[1] * i2, u2 = s2 ? s2[0] : 0, d2 = s2 ? s2[1] : 0, f2 = e19[0] + c2 / 2 + u2, p2 = e19[2] - c2 / 2 + u2, m2 = e19[1] + l2 / 2 + d2, h2 = e19[3] - l2 / 2 + d2;
    f2 > p2 && (f2 = (p2 + f2) / 2, p2 = f2), m2 > h2 && (m2 = (h2 + m2) / 2, h2 = m2);
    let g2 = R(r2[0], f2, p2), _2 = R(r2[1], m2, h2);
    if (o2 && n2 && i2) {
      let e20 = 30 * i2;
      g2 += -e20 * Math.log(1 + Math.max(0, f2 - r2[0]) / e20) + e20 * Math.log(1 + Math.max(0, r2[0] - p2) / e20), _2 += -e20 * Math.log(1 + Math.max(0, m2 - r2[1]) / e20) + e20 * Math.log(1 + Math.max(0, r2[1] - h2) / e20);
    }
    return [g2, _2];
  };
}
function oo(e19) {
  return e19;
}
function so(e19, t2, n2, r2) {
  let i2 = L(t2) / n2[0], a2 = He(t2) / n2[1];
  return r2 ? Math.min(e19, Math.max(i2, a2)) : Math.min(e19, Math.min(i2, a2));
}
function co(e19, t2, n2) {
  let r2 = Math.min(e19, t2);
  return r2 *= Math.log(1 + 50 * Math.max(0, e19 / t2 - 1)) / 50 + 1, n2 && (r2 = Math.max(r2, n2), r2 /= Math.log(1 + 50 * Math.max(0, n2 / e19 - 1)) / 50 + 1), R(r2, n2 / 2, t2 * 2);
}
function lo(e19, t2, n2, r2) {
  return t2 = t2 === void 0 || t2, function(i2, a2, o2, s2) {
    if (i2 !== void 0) {
      let c2 = e19[0], l2 = e19[e19.length - 1], u2 = n2 ? so(c2, n2, o2, r2) : c2;
      if (s2)
        return t2 ? co(i2, u2, l2) : R(i2, l2, u2);
      let d2 = Math.floor(p(e19, Math.min(u2, i2), a2));
      return e19[d2] > u2 && d2 < e19.length - 1 ? e19[d2 + 1] : e19[d2];
    }
  };
}
function uo(e19, t2, n2, r2, i2, a2) {
  return r2 = r2 === void 0 || r2, n2 = n2 === void 0 ? 0 : n2, function(o2, s2, c2, l2) {
    if (o2 !== void 0) {
      let u2 = i2 ? so(t2, i2, c2, a2) : t2;
      if (l2)
        return r2 ? co(o2, u2, n2) : R(o2, n2, u2);
      let d2 = Math.ceil(Math.log(t2 / u2) / Math.log(e19) - 1e-9), f2 = -s2 * 0.499999999 + 0.5, p2 = Math.floor(Math.log(t2 / Math.min(u2, o2)) / Math.log(e19) + f2);
      return R(t2 / e19 ** +Math.max(d2, p2), n2, u2);
    }
  };
}
function fo(e19, t2, n2, r2, i2) {
  return n2 = n2 === void 0 || n2, function(a2, o2, s2, c2) {
    if (a2 !== void 0) {
      let o3 = r2 ? so(e19, r2, s2, i2) : e19;
      return !n2 || !c2 ? R(a2, t2, o3) : co(a2, o3, t2);
    }
  };
}
function po(e19) {
  if (e19 !== void 0)
    return 0;
}
function mo(e19) {
  if (e19 !== void 0)
    return e19;
}
function ho(e19) {
  let t2 = 2 * Math.PI / e19;
  return function(e20, n2) {
    if (n2)
      return e20;
    if (e20 !== void 0)
      return e20 = Math.floor(e20 / t2 + 0.5) * t2, e20;
  };
}
function go(e19) {
  let t2 = e19 === void 0 ? Ct(5) : e19;
  return function(e20, n2) {
    return n2 || e20 === void 0 ? e20 : Math.abs(e20) <= t2 ? 0 : e20;
  };
}
function _o(e19) {
  return e19 ** 3;
}
function vo(e19) {
  return 1 - _o(1 - e19);
}
function yo(e19) {
  return 3 * e19 * e19 - 2 * e19 * e19 * e19;
}
function bo(e19) {
  return e19;
}
var xo = 0, So = class extends M {
  constructor(e19) {
    super(), this.on, this.once, this.un, e19 = Object.assign({}, e19), this.hints_ = [0, 0], this.animations_ = [], this.updateAnimationKey_, this.projection_ = Yt(e19.projection, `EPSG:3857`), this.viewportSize_ = [100, 100], this.targetCenter_ = null, this.targetResolution_, this.targetRotation_, this.nextCenter_ = null, this.nextResolution_, this.nextRotation_, this.cancelAnchor_ = void 0, e19.projection && Bt(), e19.center && (e19.center = an(e19.center, this.projection_)), e19.extent && (e19.extent = sn(e19.extent, this.projection_)), this.applyOptions_(e19);
  }
  applyOptions_(e19) {
    let t2 = Object.assign({}, e19);
    for (let e20 in io)
      delete t2[e20];
    this.setProperties(t2, true);
    let n2 = To(e19);
    this.maxResolution_ = n2.maxResolution, this.minResolution_ = n2.minResolution, this.zoomFactor_ = n2.zoomFactor, this.resolutions_ = e19.resolutions, this.padding_ = e19.padding, this.minZoom_ = n2.minZoom;
    let r2 = wo(e19), i2 = n2.constraint, a2 = Eo(e19);
    this.constraints_ = {center: r2, resolution: i2, rotation: a2}, this.setRotation(e19.rotation === void 0 ? 0 : e19.rotation), this.setCenterInternal(e19.center === void 0 ? null : e19.center), e19.resolution === void 0 ? e19.zoom !== void 0 && this.setZoom(e19.zoom) : this.setResolution(e19.resolution);
  }
  get padding() {
    return this.padding_;
  }
  set padding(e19) {
    let t2 = this.padding_;
    this.padding_ = e19;
    let n2 = this.getCenterInternal();
    if (n2) {
      let r2 = e19 || [0, 0, 0, 0];
      t2 || (t2 = [0, 0, 0, 0]);
      let i2 = this.getResolution(), a2 = i2 / 2 * (r2[3] - t2[3] + t2[1] - r2[1]), o2 = i2 / 2 * (r2[0] - t2[0] + t2[2] - r2[2]);
      this.setCenterInternal([n2[0] + a2, n2[1] - o2]);
    }
  }
  getUpdatedOptions_(e19) {
    let t2 = this.getProperties();
    return t2.resolution === void 0 ? t2.zoom = this.getZoom() : t2.resolution = this.getResolution(), t2.center = this.getCenterInternal(), t2.rotation = this.getRotation(), Object.assign({}, t2, e19);
  }
  animate(e19) {
    this.isDef() && !this.getAnimating() && this.resolveConstraints(0);
    let t2 = Array(arguments.length);
    for (let e20 = 0; e20 < t2.length; ++e20) {
      let n2 = arguments[e20];
      n2.center && (n2 = Object.assign({}, n2), n2.center = an(n2.center, this.getProjection())), n2.anchor && (n2 = Object.assign({}, n2), n2.anchor = an(n2.anchor, this.getProjection())), t2[e20] = n2;
    }
    this.animateInternal.apply(this, t2);
  }
  animateInternal(e19) {
    let t2 = arguments.length, n2;
    t2 > 1 && typeof arguments[t2 - 1] == `function` && (n2 = arguments[t2 - 1], --t2);
    let r2 = 0;
    for (; r2 < t2 && !this.isDef(); ++r2) {
      let e20 = arguments[r2];
      e20.center && this.setCenterInternal(e20.center), e20.zoom === void 0 ? e20.resolution && this.setResolution(e20.resolution) : this.setZoom(e20.zoom), e20.rotation !== void 0 && this.setRotation(e20.rotation);
    }
    if (r2 === t2) {
      n2 && Co(n2, true);
      return;
    }
    let i2 = Date.now(), a2 = this.targetCenter_.slice(), o2 = this.targetResolution_, s2 = this.targetRotation_, c2 = [];
    for (; r2 < t2; ++r2) {
      let e20 = arguments[r2], t3 = {start: i2, complete: false, anchor: e20.anchor, duration: e20.duration === void 0 ? 1e3 : e20.duration, easing: e20.easing || yo, callback: n2};
      if (e20.center && (t3.sourceCenter = a2, t3.targetCenter = e20.center.slice(), a2 = t3.targetCenter), e20.zoom === void 0 ? e20.resolution && (t3.sourceResolution = o2, t3.targetResolution = e20.resolution, o2 = t3.targetResolution) : (t3.sourceResolution = o2, t3.targetResolution = this.getResolutionForZoom(e20.zoom), o2 = t3.targetResolution), e20.rotation !== void 0) {
        t3.sourceRotation = s2;
        let n3 = wt(e20.rotation - s2 + Math.PI, 2 * Math.PI) - Math.PI;
        t3.targetRotation = s2 + n3, s2 = t3.targetRotation;
      }
      Do(t3) ? t3.complete = true : i2 += t3.duration, c2.push(t3);
    }
    this.animations_.push(c2), this.setHint(ro.ANIMATING, 1), this.updateAnimations_();
  }
  getAnimating() {
    return this.hints_[ro.ANIMATING] > 0;
  }
  getInteracting() {
    return this.hints_[ro.INTERACTING] > 0;
  }
  cancelAnimations() {
    this.setHint(ro.ANIMATING, -this.hints_[ro.ANIMATING]);
    let e19;
    for (let t2 = 0, n2 = this.animations_.length; t2 < n2; ++t2) {
      let n3 = this.animations_[t2];
      if (n3[0].callback && Co(n3[0].callback, false), !e19)
        for (let t3 = 0, r2 = n3.length; t3 < r2; ++t3) {
          let r3 = n3[t3];
          if (!r3.complete) {
            e19 = r3.anchor;
            break;
          }
        }
    }
    this.animations_.length = 0, this.cancelAnchor_ = e19, this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
  }
  updateAnimations_() {
    if (this.updateAnimationKey_ !== void 0 && (cancelAnimationFrame(this.updateAnimationKey_), this.updateAnimationKey_ = void 0), !this.getAnimating())
      return;
    let e19 = Date.now(), t2 = false;
    for (let n2 = this.animations_.length - 1; n2 >= 0; --n2) {
      let r2 = this.animations_[n2], i2 = true;
      for (let n3 = 0, a2 = r2.length; n3 < a2; ++n3) {
        let a3 = r2[n3];
        if (a3.complete)
          continue;
        let o2 = e19 - a3.start, s2 = a3.duration > 0 ? o2 / a3.duration : 1;
        s2 >= 1 ? (a3.complete = true, s2 = 1) : i2 = false;
        let c2 = a3.easing(s2);
        if (a3.sourceCenter) {
          let e20 = a3.sourceCenter[0], t3 = a3.sourceCenter[1], n4 = a3.targetCenter[0], r3 = a3.targetCenter[1];
          this.nextCenter_ = a3.targetCenter;
          let i3 = e20 + c2 * (n4 - e20), o3 = t3 + c2 * (r3 - t3);
          this.targetCenter_ = [i3, o3];
        }
        if (a3.sourceResolution && a3.targetResolution) {
          let e20 = c2 === 1 ? a3.targetResolution : a3.sourceResolution + c2 * (a3.targetResolution - a3.sourceResolution);
          if (a3.anchor) {
            let t3 = this.getViewportSize_(this.getRotation()), n4 = this.constraints_.resolution(e20, 0, t3, true);
            this.targetCenter_ = this.calculateCenterZoom(n4, a3.anchor);
          }
          this.nextResolution_ = a3.targetResolution, this.targetResolution_ = e20, this.applyTargetState_(true);
        }
        if (a3.sourceRotation !== void 0 && a3.targetRotation !== void 0) {
          let e20 = c2 === 1 ? wt(a3.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : a3.sourceRotation + c2 * (a3.targetRotation - a3.sourceRotation);
          if (a3.anchor) {
            let t3 = this.constraints_.rotation(e20, true);
            this.targetCenter_ = this.calculateCenterRotate(t3, a3.anchor);
          }
          this.nextRotation_ = a3.targetRotation, this.targetRotation_ = e20;
        }
        if (this.applyTargetState_(true), t2 = true, !a3.complete)
          break;
      }
      if (i2) {
        this.animations_[n2] = null, this.setHint(ro.ANIMATING, -1), this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
        let e20 = r2[0].callback;
        e20 && Co(e20, true);
      }
    }
    this.animations_ = this.animations_.filter(Boolean), t2 && this.updateAnimationKey_ === void 0 && (this.updateAnimationKey_ = requestAnimationFrame(this.updateAnimations_.bind(this)));
  }
  calculateCenterRotate(e19, t2) {
    let n2, r2 = this.getCenterInternal();
    return r2 !== void 0 && (n2 = [r2[0] - t2[0], r2[1] - t2[1]], jt(n2, e19 - this.getRotation()), kt(n2, t2)), n2;
  }
  calculateCenterZoom(e19, t2) {
    let n2, r2 = this.getCenterInternal(), i2 = this.getResolution();
    return r2 !== void 0 && i2 !== void 0 && (n2 = [t2[0] - e19 * (t2[0] - r2[0]) / i2, t2[1] - e19 * (t2[1] - r2[1]) / i2]), n2;
  }
  getViewportSize_(e19) {
    let t2 = this.viewportSize_;
    if (e19) {
      let n2 = t2[0], r2 = t2[1];
      return [Math.abs(n2 * Math.cos(e19)) + Math.abs(r2 * Math.sin(e19)), Math.abs(n2 * Math.sin(e19)) + Math.abs(r2 * Math.cos(e19))];
    }
    return t2;
  }
  setViewportSize(e19) {
    this.viewportSize_ = Array.isArray(e19) ? e19.slice() : [100, 100], this.getAnimating() || this.resolveConstraints(0);
  }
  getCenter() {
    let e19 = this.getCenterInternal();
    return e19 && rn(e19, this.getProjection());
  }
  getCenterInternal() {
    return this.get(io.CENTER);
  }
  getConstraints() {
    return this.constraints_;
  }
  getConstrainResolution() {
    return this.get(`constrainResolution`);
  }
  getHints(e19) {
    return e19 === void 0 ? this.hints_.slice() : (e19[0] = this.hints_[0], e19[1] = this.hints_[1], e19);
  }
  calculateExtent(e19) {
    return on(this.calculateExtentInternal(e19), this.getProjection());
  }
  calculateExtentInternal(e19) {
    e19 || (e19 = this.getViewportSizeMinusPadding_());
    let t2 = this.getCenterInternal();
    P(t2, `The view center is not defined`);
    let n2 = this.getResolution();
    P(n2 !== void 0, `The view resolution is not defined`);
    let r2 = this.getRotation();
    return P(r2 !== void 0, `The view rotation is not defined`), Be(t2, n2, r2, e19);
  }
  getMaxResolution() {
    return this.maxResolution_;
  }
  getMinResolution() {
    return this.minResolution_;
  }
  getMaxZoom() {
    return this.getZoomForResolution(this.minResolution_);
  }
  setMaxZoom(e19) {
    this.applyOptions_(this.getUpdatedOptions_({maxZoom: e19}));
  }
  getMinZoom() {
    return this.getZoomForResolution(this.maxResolution_);
  }
  setMinZoom(e19) {
    this.applyOptions_(this.getUpdatedOptions_({minZoom: e19}));
  }
  setConstrainResolution(e19) {
    this.applyOptions_(this.getUpdatedOptions_({constrainResolution: e19}));
  }
  getProjection() {
    return this.projection_;
  }
  getResolution() {
    return this.get(io.RESOLUTION);
  }
  getResolutions() {
    return this.resolutions_;
  }
  getResolutionForExtent(e19, t2) {
    return this.getResolutionForExtentInternal(sn(e19, this.getProjection()), t2);
  }
  getResolutionForExtentInternal(e19, t2) {
    t2 || (t2 = this.getViewportSizeMinusPadding_());
    let n2 = L(e19) / t2[0], r2 = He(e19) / t2[1];
    return Math.max(n2, r2);
  }
  getResolutionForValueFunction(e19) {
    e19 || (e19 = 2);
    let t2 = this.getConstrainedResolution(this.maxResolution_), n2 = this.minResolution_, r2 = Math.log(t2 / n2) / Math.log(e19);
    return function(n3) {
      return t2 / e19 ** +(n3 * r2);
    };
  }
  getRotation() {
    return this.get(io.ROTATION);
  }
  getValueForResolutionFunction(e19) {
    let t2 = Math.log(e19 || 2), n2 = this.getConstrainedResolution(this.maxResolution_), r2 = this.minResolution_, i2 = Math.log(n2 / r2) / t2;
    return function(e20) {
      return Math.log(n2 / e20) / t2 / i2;
    };
  }
  getViewportSizeMinusPadding_(e19) {
    let t2 = this.getViewportSize_(e19), n2 = this.padding_;
    return n2 && (t2 = [t2[0] - n2[1] - n2[3], t2[1] - n2[0] - n2[2]]), t2;
  }
  getState() {
    let e19 = this.getProjection(), t2 = this.getResolution(), n2 = this.getRotation(), r2 = this.getCenterInternal(), i2 = this.padding_;
    if (i2) {
      let e20 = this.getViewportSizeMinusPadding_();
      r2 = Oo(r2, this.getViewportSize_(), [e20[0] / 2 + i2[3], e20[1] / 2 + i2[0]], t2, n2);
    }
    return {center: r2.slice(0), projection: e19 === void 0 ? null : e19, resolution: t2, nextCenter: this.nextCenter_, nextResolution: this.nextResolution_, nextRotation: this.nextRotation_, rotation: n2, zoom: this.getZoom()};
  }
  getViewStateAndExtent() {
    return {viewState: this.getState(), extent: this.calculateExtent()};
  }
  getZoom() {
    let e19, t2 = this.getResolution();
    return t2 !== void 0 && (e19 = this.getZoomForResolution(t2)), e19;
  }
  getZoomForResolution(e19) {
    let t2 = this.minZoom_ || 0, n2, r2;
    if (this.resolutions_) {
      let i2 = p(this.resolutions_, e19, 1);
      t2 = i2, n2 = this.resolutions_[i2], r2 = i2 == this.resolutions_.length - 1 ? 2 : n2 / this.resolutions_[i2 + 1];
    } else
      n2 = this.maxResolution_, r2 = this.zoomFactor_;
    return t2 + Math.log(n2 / e19) / Math.log(r2);
  }
  getResolutionForZoom(e19) {
    if (this.resolutions_) {
      if (this.resolutions_.length <= 1)
        return 0;
      let t2 = R(Math.floor(e19), 0, this.resolutions_.length - 2), n2 = this.resolutions_[t2] / this.resolutions_[t2 + 1];
      return this.resolutions_[t2] / n2 ** +R(e19 - t2, 0, 1);
    }
    return this.maxResolution_ / this.zoomFactor_ ** +(e19 - this.minZoom_);
  }
  fit(e19, t2) {
    let n2;
    if (P(Array.isArray(e19) || typeof e19.getSimplifiedGeometry == `function`, "Invalid extent or geometry provided as `geometry`"), Array.isArray(e19))
      P(!qe(e19), "Cannot fit empty extent provided as `geometry`"), n2 = tr(sn(e19, this.getProjection()));
    else if (e19.getType() === `Circle`) {
      let t3 = sn(e19.getExtent(), this.getProjection());
      n2 = tr(t3), n2.rotate(this.getRotation(), Re(t3));
    } else {
      let t3 = nn();
      n2 = t3 ? e19.clone().transform(t3, this.getProjection()) : e19;
    }
    this.fitInternal(n2, t2);
  }
  rotatedExtentForGeometry(e19) {
    let t2 = this.getRotation(), n2 = Math.cos(t2), r2 = Math.sin(-t2), i2 = e19.getFlatCoordinates(), a2 = e19.getStride(), o2 = 1 / 0, s2 = 1 / 0, c2 = -1 / 0, l2 = -1 / 0;
    for (let e20 = 0, t3 = i2.length; e20 < t3; e20 += a2) {
      let t4 = i2[e20] * n2 - i2[e20 + 1] * r2, a3 = i2[e20] * r2 + i2[e20 + 1] * n2;
      o2 = Math.min(o2, t4), s2 = Math.min(s2, a3), c2 = Math.max(c2, t4), l2 = Math.max(l2, a3);
    }
    return [o2, s2, c2, l2];
  }
  fitInternal(e19, t2) {
    t2 || (t2 = {});
    let n2 = t2.size;
    n2 || (n2 = this.getViewportSizeMinusPadding_());
    let r2 = t2.padding === void 0 ? [0, 0, 0, 0] : t2.padding, i2 = t2.nearest !== void 0 && t2.nearest, a2;
    a2 = t2.minResolution === void 0 ? t2.maxZoom === void 0 ? 0 : this.getResolutionForZoom(t2.maxZoom) : t2.minResolution;
    let o2 = this.rotatedExtentForGeometry(e19), s2 = this.getResolutionForExtentInternal(o2, [n2[0] - r2[1] - r2[3], n2[1] - r2[0] - r2[2]]);
    s2 = isNaN(s2) ? a2 : Math.max(s2, a2), s2 = this.getConstrainedResolution(s2, +!i2);
    let c2 = this.getRotation(), l2 = Math.sin(c2), u2 = Math.cos(c2), d2 = Re(o2);
    d2[0] += (r2[1] - r2[3]) / 2 * s2, d2[1] += (r2[0] - r2[2]) / 2 * s2;
    let f2 = d2[0] * u2 - d2[1] * l2, p2 = d2[1] * u2 + d2[0] * l2, m2 = this.getConstrainedCenter([f2, p2], s2), h2 = t2.callback ? t2.callback : b;
    t2.duration === void 0 ? (this.targetResolution_ = s2, this.targetCenter_ = m2, this.applyTargetState_(false, true), Co(h2, true)) : this.animateInternal({resolution: s2, center: m2, duration: t2.duration, easing: t2.easing}, h2);
  }
  centerOn(e19, t2, n2) {
    this.centerOnInternal(an(e19, this.getProjection()), t2, n2);
  }
  centerOnInternal(e19, t2, n2) {
    this.setCenterInternal(Oo(e19, t2, n2, this.getResolution(), this.getRotation()));
  }
  calculateCenterShift(e19, t2, n2, r2) {
    let i2, a2 = this.padding_;
    if (a2 && e19) {
      let o2 = this.getViewportSizeMinusPadding_(-n2), s2 = Oo(e19, r2, [o2[0] / 2 + a2[3], o2[1] / 2 + a2[0]], t2, n2);
      i2 = [e19[0] - s2[0], e19[1] - s2[1]];
    }
    return i2;
  }
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0;
  }
  adjustCenter(e19) {
    let t2 = rn(this.targetCenter_, this.getProjection());
    this.setCenter([t2[0] + e19[0], t2[1] + e19[1]]);
  }
  adjustCenterInternal(e19) {
    let t2 = this.targetCenter_;
    this.setCenterInternal([t2[0] + e19[0], t2[1] + e19[1]]);
  }
  adjustResolution(e19, t2) {
    t2 && (t2 = an(t2, this.getProjection())), this.adjustResolutionInternal(e19, t2);
  }
  adjustResolutionInternal(e19, t2) {
    let n2 = this.getAnimating() || this.getInteracting(), r2 = this.getViewportSize_(this.getRotation()), i2 = this.constraints_.resolution(this.targetResolution_ * e19, 0, r2, n2);
    t2 && (this.targetCenter_ = this.calculateCenterZoom(i2, t2)), this.targetResolution_ *= e19, this.applyTargetState_();
  }
  adjustZoom(e19, t2) {
    this.adjustResolution(this.zoomFactor_ ** +-e19, t2);
  }
  adjustRotation(e19, t2) {
    t2 && (t2 = an(t2, this.getProjection())), this.adjustRotationInternal(e19, t2);
  }
  adjustRotationInternal(e19, t2) {
    let n2 = this.getAnimating() || this.getInteracting(), r2 = this.constraints_.rotation(this.targetRotation_ + e19, n2);
    t2 && (this.targetCenter_ = this.calculateCenterRotate(r2, t2)), this.targetRotation_ += e19, this.applyTargetState_();
  }
  setCenter(e19) {
    this.setCenterInternal(e19 && an(e19, this.getProjection()));
  }
  setCenterInternal(e19) {
    this.targetCenter_ = e19, this.applyTargetState_();
  }
  setHint(e19, t2) {
    return this.hints_[e19] += t2, this.changed(), this.hints_[e19];
  }
  setResolution(e19) {
    this.targetResolution_ = e19, this.applyTargetState_();
  }
  setRotation(e19) {
    this.targetRotation_ = e19, this.applyTargetState_();
  }
  setZoom(e19) {
    this.setResolution(this.getResolutionForZoom(e19));
  }
  applyTargetState_(e19, t2) {
    let n2 = this.getAnimating() || this.getInteracting() || t2, r2 = this.constraints_.rotation(this.targetRotation_, n2), i2 = this.getViewportSize_(r2), a2 = this.constraints_.resolution(this.targetResolution_, 0, i2, n2), o2 = this.constraints_.center(this.targetCenter_, a2, i2, n2, this.calculateCenterShift(this.targetCenter_, a2, r2, i2));
    this.get(io.ROTATION) !== r2 && this.set(io.ROTATION, r2), this.get(io.RESOLUTION) !== a2 && (this.set(io.RESOLUTION, a2), this.set(`zoom`, this.getZoom(), true)), o2 && this.get(io.CENTER) && At(this.get(io.CENTER), o2) || this.set(io.CENTER, o2), this.getAnimating() && !e19 && this.cancelAnimations(), this.cancelAnchor_ = void 0;
  }
  resolveConstraints(e19, t2, n2) {
    e19 = e19 === void 0 ? 200 : e19;
    let r2 = t2 || 0, i2 = this.constraints_.rotation(this.targetRotation_), a2 = this.getViewportSize_(i2), o2 = this.constraints_.resolution(this.targetResolution_, r2, a2), s2 = this.constraints_.center(this.targetCenter_, o2, a2, false, this.calculateCenterShift(this.targetCenter_, o2, i2, a2));
    e19 === 0 && !this.cancelAnchor_ ? (this.targetResolution_ = o2, this.targetRotation_ = i2, this.targetCenter_ = s2, this.applyTargetState_()) : (n2 || (n2 = e19 === 0 ? this.cancelAnchor_ : void 0), this.cancelAnchor_ = void 0, this.getResolution() === o2 && this.getRotation() === i2 && this.getCenterInternal() && At(this.getCenterInternal(), s2) || (this.getAnimating() && this.cancelAnimations(), this.animateInternal({rotation: i2, center: s2, resolution: o2, duration: e19, easing: vo, anchor: n2})));
  }
  beginInteraction() {
    this.resolveConstraints(0), this.setHint(ro.INTERACTING, 1);
  }
  endInteraction(e19, t2, n2) {
    n2 && (n2 = an(n2, this.getProjection())), this.endInteractionInternal(e19, t2, n2);
  }
  endInteractionInternal(e19, t2, n2) {
    this.getInteracting() && (this.setHint(ro.INTERACTING, -1), this.resolveConstraints(e19, t2, n2));
  }
  getConstrainedCenter(e19, t2) {
    let n2 = this.getViewportSize_(this.getRotation());
    return this.constraints_.center(e19, t2 || this.getResolution(), n2);
  }
  getConstrainedZoom(e19, t2) {
    let n2 = this.getResolutionForZoom(e19);
    return this.getZoomForResolution(this.getConstrainedResolution(n2, t2));
  }
  getConstrainedResolution(e19, t2) {
    t2 || (t2 = 0);
    let n2 = this.getViewportSize_(this.getRotation());
    return this.constraints_.resolution(e19, t2, n2);
  }
};
function Co(e19, t2) {
  setTimeout(function() {
    e19(t2);
  }, 0);
}
function wo(e19) {
  if (e19.extent !== void 0) {
    let t3 = e19.smoothExtentConstraint === void 0 || e19.smoothExtentConstraint;
    return ao(e19.extent, e19.constrainOnlyCenter, t3);
  }
  let t2 = Yt(e19.projection, `EPSG:3857`);
  if (e19.multiWorld !== true && t2.isGlobal()) {
    let e20 = t2.getExtent().slice();
    return e20[0] = -1 / 0, e20[2] = 1 / 0, ao(e20, false, false);
  }
  return oo;
}
function To(e19) {
  let t2, n2, r2, i2 = e19.minZoom === void 0 ? xo : e19.minZoom, a2 = e19.maxZoom === void 0 ? 28 : e19.maxZoom, o2 = e19.zoomFactor === void 0 ? 2 : e19.zoomFactor, s2 = e19.multiWorld !== void 0 && e19.multiWorld, c2 = e19.smoothResolutionConstraint === void 0 || e19.smoothResolutionConstraint, l2 = e19.showFullExtent !== void 0 && e19.showFullExtent, u2 = Yt(e19.projection, `EPSG:3857`), d2 = u2.getExtent(), f2 = e19.constrainOnlyCenter, p2 = e19.extent;
  if (!s2 && !p2 && u2.isGlobal() && (f2 = false, p2 = d2), e19.resolutions !== void 0) {
    let o3 = e19.resolutions;
    n2 = o3[i2], r2 = o3[a2] === void 0 ? o3[o3.length - 1] : o3[a2], t2 = e19.constrainResolution ? lo(o3, c2, !f2 && p2, l2) : fo(n2, r2, c2, !f2 && p2, l2);
  } else {
    let s3 = (d2 ? Math.max(L(d2), He(d2)) : 360 * Qe.degrees / u2.getMetersPerUnit()) / 256 / 2 ** xo, m2 = s3 / 2 ** 28;
    n2 = e19.maxResolution, n2 === void 0 ? n2 = s3 / o2 ** +i2 : i2 = 0, r2 = e19.minResolution, r2 === void 0 && (r2 = e19.maxZoom === void 0 ? m2 : e19.maxResolution === void 0 ? s3 / o2 ** +a2 : n2 / o2 ** +a2), a2 = i2 + Math.floor(Math.log(n2 / r2) / Math.log(o2)), r2 = n2 / o2 ** +(a2 - i2), t2 = e19.constrainResolution ? uo(o2, n2, r2, c2, !f2 && p2, l2) : fo(n2, r2, c2, !f2 && p2, l2);
  }
  return {constraint: t2, maxResolution: n2, minResolution: r2, minZoom: i2, zoomFactor: o2};
}
function Eo(e19) {
  if (e19.enableRotation === void 0 || e19.enableRotation) {
    let t2 = e19.constrainRotation;
    return t2 === void 0 || t2 === true ? go() : t2 === false ? mo : typeof t2 == `number` ? ho(t2) : mo;
  }
  return po;
}
function Do(e19) {
  return !(e19.sourceCenter && e19.targetCenter && !At(e19.sourceCenter, e19.targetCenter) || e19.sourceResolution !== e19.targetResolution || e19.sourceRotation !== e19.targetRotation);
}
function Oo(e19, t2, n2, r2, i2) {
  let a2 = Math.cos(-i2), o2 = Math.sin(-i2), s2 = e19[0] * a2 - e19[1] * o2, c2 = e19[1] * a2 + e19[0] * o2;
  return s2 += (t2[0] / 2 - n2[0]) * r2, c2 += (n2[1] - t2[1] / 2) * r2, o2 = -o2, [s2 * a2 - c2 * o2, c2 * a2 + s2 * o2];
}
var ko = class extends no {
  constructor(e19) {
    let t2 = Object.assign({}, e19);
    delete t2.source, super(t2), this.on, this.once, this.un, this.mapPrecomposeKey_ = null, this.mapRenderKey_ = null, this.sourceChangeKey_ = null, this.renderer_ = null, this.sourceReady_ = false, this.rendered = false, e19.render && (this.render = e19.render), e19.map && this.setMap(e19.map), this.addChangeListener(H.SOURCE, this.handleSourcePropertyChange_);
    let n2 = e19.source ? e19.source : null;
    this.setSource(n2);
  }
  getLayersArray(e19) {
    return e19 || (e19 = []), e19.push(this), e19;
  }
  getLayerStatesArray(e19) {
    return e19 || (e19 = []), e19.push(this.getLayerState()), e19;
  }
  getSource() {
    return this.get(H.SOURCE) || null;
  }
  getRenderSource() {
    return this.getSource();
  }
  getSourceState() {
    let e19 = this.getSource();
    return e19 ? e19.getState() : `undefined`;
  }
  handleSourceChange_() {
    this.changed(), this.sourceReady_ || this.getSource().getState() !== `ready` || (this.sourceReady_ = true, this.dispatchEvent(`sourceready`));
  }
  handleSourcePropertyChange_() {
    this.sourceChangeKey_ && (this.sourceChangeKey_ = (k(this.sourceChangeKey_), null)), this.sourceReady_ = false;
    let e19 = this.getSource();
    e19 && (this.sourceChangeKey_ = D(e19, E.CHANGE, this.handleSourceChange_, this), e19.getState() === `ready` && (this.sourceReady_ = true, setTimeout(() => {
      this.dispatchEvent(`sourceready`);
    }, 0))), this.changed();
  }
  getFeatures(e19) {
    return this.renderer_ ? this.renderer_.getFeatures(e19) : Promise.resolve([]);
  }
  getData(e19) {
    return !this.renderer_ || !this.rendered ? null : this.renderer_.getData(e19);
  }
  isVisible(e19) {
    let t2, n2 = this.getMapInternal();
    !e19 && n2 && (e19 = n2.getView()), t2 = e19 instanceof So ? {viewState: e19.getState(), extent: e19.calculateExtent()} : e19, !t2.layerStatesArray && n2 && (t2.layerStatesArray = n2.getLayerGroup().getLayerStatesArray());
    let r2;
    r2 = t2.layerStatesArray ? t2.layerStatesArray.find((e20) => e20.layer === this) : this.getLayerState();
    let i2 = this.getExtent();
    return Ao(r2, t2.viewState) && (!i2 || Ke(i2, t2.extent));
  }
  getAttributions(e19) {
    if (!this.isVisible(e19))
      return [];
    let t2, n2 = this.getSource();
    if (n2 && (t2 = n2.getAttributions()), !t2)
      return [];
    let r2 = e19 instanceof So ? e19.getViewStateAndExtent() : e19, i2 = t2(r2);
    return Array.isArray(i2) || (i2 = [i2]), i2;
  }
  render(e19, t2) {
    let n2 = this.getRenderer();
    return n2.prepareFrame(e19) ? (this.rendered = true, n2.renderFrame(e19, t2)) : null;
  }
  unrender() {
    this.rendered = false;
  }
  getDeclutter() {
  }
  renderDeclutter(e19, t2) {
  }
  renderDeferred(e19) {
    let t2 = this.getRenderer();
    t2 && t2.renderDeferred(e19);
  }
  setMapInternal(e19) {
    e19 || this.unrender(), this.set(H.MAP, e19);
  }
  getMapInternal() {
    return this.get(H.MAP);
  }
  setMap(e19) {
    this.mapPrecomposeKey_ && (this.mapPrecomposeKey_ = (k(this.mapPrecomposeKey_), null)), e19 || this.changed(), this.mapRenderKey_ && (this.mapRenderKey_ = (k(this.mapRenderKey_), null)), e19 && (this.mapPrecomposeKey_ = D(e19, nr.PRECOMPOSE, function(e20) {
      let t2 = e20.frameState.layerStatesArray, n2 = this.getLayerState(false);
      P(!t2.some(function(e21) {
        return e21.layer === n2.layer;
      }), "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."), t2.push(n2);
    }, this), this.mapRenderKey_ = D(this, E.CHANGE, e19.render, e19), this.changed());
  }
  setSource(e19) {
    this.set(H.SOURCE, e19);
  }
  getRenderer() {
    return this.renderer_ || (this.renderer_ = this.createRenderer()), this.renderer_;
  }
  hasRenderer() {
    return !!this.renderer_;
  }
  createRenderer() {
    return null;
  }
  disposeInternal() {
    this.renderer_ && (this.renderer_.dispose(), delete this.renderer_), this.setSource(null), super.disposeInternal();
  }
};
function Ao(e19, t2) {
  if (!e19.visible)
    return false;
  let n2 = t2.resolution;
  if (n2 < e19.minResolution || n2 >= e19.maxResolution)
    return false;
  let r2 = t2.zoom;
  return r2 > e19.minZoom && r2 <= e19.maxZoom;
}
var jo = t((e19, t2, n2) => {
  (function(n3, r2) {
    typeof e19 == `object` && t2 !== void 0 ? t2.exports = r2() : typeof define == `function` && define.amd ? define(r2) : (n3 || (n3 = self)).RBush = r2();
  })(n2, function() {
    function e20(e21, r3, i3, a3, o3) {
      (function e22(n4, r4, i4, a4, o4) {
        for (; a4 > i4; ) {
          if (a4 - i4 > 600) {
            var s3 = a4 - i4 + 1, c3 = r4 - i4 + 1, l3 = Math.log(s3), u3 = 0.5 * Math.exp(2 * l3 / 3), d3 = 0.5 * Math.sqrt(l3 * u3 * (s3 - u3) / s3) * (c3 - s3 / 2 < 0 ? -1 : 1);
            e22(n4, r4, Math.max(i4, Math.floor(r4 - c3 * u3 / s3 + d3)), Math.min(a4, Math.floor(r4 + (s3 - c3) * u3 / s3 + d3)), o4);
          }
          var f3 = n4[r4], p3 = i4, m3 = a4;
          for (t3(n4, i4, r4), o4(n4[a4], f3) > 0 && t3(n4, i4, a4); p3 < m3; ) {
            for (t3(n4, p3, m3), p3++, m3--; o4(n4[p3], f3) < 0; )
              p3++;
            for (; o4(n4[m3], f3) > 0; )
              m3--;
          }
          o4(n4[i4], f3) === 0 ? t3(n4, i4, m3) : t3(n4, ++m3, a4), m3 <= r4 && (i4 = m3 + 1), r4 <= m3 && (a4 = m3 - 1);
        }
      })(e21, r3, i3 || 0, a3 || e21.length - 1, o3 || n3);
    }
    function t3(e21, t4, n4) {
      var r3 = e21[t4];
      e21[t4] = e21[n4], e21[n4] = r3;
    }
    function n3(e21, t4) {
      return e21 < t4 ? -1 : +(e21 > t4);
    }
    var r2 = function(e21) {
      e21 === void 0 && (e21 = 9), this._maxEntries = Math.max(4, e21), this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries)), this.clear();
    };
    function i2(e21, t4, n4) {
      if (!n4)
        return t4.indexOf(e21);
      for (var r3 = 0; r3 < t4.length; r3++)
        if (n4(e21, t4[r3]))
          return r3;
      return -1;
    }
    function a2(e21, t4) {
      o2(e21, 0, e21.children.length, t4, e21);
    }
    function o2(e21, t4, n4, r3, i3) {
      i3 || (i3 = m2(null)), i3.minX = 1 / 0, i3.minY = 1 / 0, i3.maxX = -1 / 0, i3.maxY = -1 / 0;
      for (var a3 = t4; a3 < n4; a3++) {
        var o3 = e21.children[a3];
        s2(i3, e21.leaf ? r3(o3) : o3);
      }
      return i3;
    }
    function s2(e21, t4) {
      return e21.minX = Math.min(e21.minX, t4.minX), e21.minY = Math.min(e21.minY, t4.minY), e21.maxX = Math.max(e21.maxX, t4.maxX), e21.maxY = Math.max(e21.maxY, t4.maxY), e21;
    }
    function c2(e21, t4) {
      return e21.minX - t4.minX;
    }
    function l2(e21, t4) {
      return e21.minY - t4.minY;
    }
    function u2(e21) {
      return (e21.maxX - e21.minX) * (e21.maxY - e21.minY);
    }
    function d2(e21) {
      return e21.maxX - e21.minX + (e21.maxY - e21.minY);
    }
    function f2(e21, t4) {
      return e21.minX <= t4.minX && e21.minY <= t4.minY && t4.maxX <= e21.maxX && t4.maxY <= e21.maxY;
    }
    function p2(e21, t4) {
      return t4.minX <= e21.maxX && t4.minY <= e21.maxY && t4.maxX >= e21.minX && t4.maxY >= e21.minY;
    }
    function m2(e21) {
      return {children: e21, height: 1, leaf: true, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0};
    }
    function h2(t4, n4, r3, i3, a3) {
      for (var o3 = [n4, r3]; o3.length; )
        if (!((r3 = o3.pop()) - (n4 = o3.pop()) <= i3)) {
          var s3 = n4 + Math.ceil((r3 - n4) / i3 / 2) * i3;
          e20(t4, s3, n4, r3, a3), o3.push(n4, s3, s3, r3);
        }
    }
    return r2.prototype.all = function() {
      return this._all(this.data, []);
    }, r2.prototype.search = function(e21) {
      var t4 = this.data, n4 = [];
      if (!p2(e21, t4))
        return n4;
      for (var r3 = this.toBBox, i3 = []; t4; ) {
        for (var a3 = 0; a3 < t4.children.length; a3++) {
          var o3 = t4.children[a3], s3 = t4.leaf ? r3(o3) : o3;
          p2(e21, s3) && (t4.leaf ? n4.push(o3) : f2(e21, s3) ? this._all(o3, n4) : i3.push(o3));
        }
        t4 = i3.pop();
      }
      return n4;
    }, r2.prototype.collides = function(e21) {
      var t4 = this.data;
      if (!p2(e21, t4))
        return false;
      for (var n4 = []; t4; ) {
        for (var r3 = 0; r3 < t4.children.length; r3++) {
          var i3 = t4.children[r3], a3 = t4.leaf ? this.toBBox(i3) : i3;
          if (p2(e21, a3)) {
            if (t4.leaf || f2(e21, a3))
              return true;
            n4.push(i3);
          }
        }
        t4 = n4.pop();
      }
      return false;
    }, r2.prototype.load = function(e21) {
      if (!e21 || !e21.length)
        return this;
      if (e21.length < this._minEntries) {
        for (var t4 = 0; t4 < e21.length; t4++)
          this.insert(e21[t4]);
        return this;
      }
      var n4 = this._build(e21.slice(), 0, e21.length - 1, 0);
      if (this.data.children.length) {
        if (this.data.height === n4.height)
          this._splitRoot(this.data, n4);
        else {
          if (this.data.height < n4.height) {
            var r3 = this.data;
            this.data = n4, n4 = r3;
          }
          this._insert(n4, this.data.height - n4.height - 1, true);
        }
      } else
        this.data = n4;
      return this;
    }, r2.prototype.insert = function(e21) {
      return e21 && this._insert(e21, this.data.height - 1), this;
    }, r2.prototype.clear = function() {
      return this.data = m2([]), this;
    }, r2.prototype.remove = function(e21, t4) {
      if (!e21)
        return this;
      for (var n4, r3, a3, o3 = this.data, s3 = this.toBBox(e21), c3 = [], l3 = []; o3 || c3.length; ) {
        if (o3 || (o3 = c3.pop(), r3 = c3[c3.length - 1], n4 = l3.pop(), a3 = true), o3.leaf) {
          var u3 = i2(e21, o3.children, t4);
          if (u3 !== -1)
            return o3.children.splice(u3, 1), c3.push(o3), this._condense(c3), this;
        }
        a3 || o3.leaf || !f2(o3, s3) ? r3 ? (n4++, o3 = r3.children[n4], a3 = false) : o3 = null : (c3.push(o3), l3.push(n4), n4 = 0, r3 = o3, o3 = o3.children[0]);
      }
      return this;
    }, r2.prototype.toBBox = function(e21) {
      return e21;
    }, r2.prototype.compareMinX = function(e21, t4) {
      return e21.minX - t4.minX;
    }, r2.prototype.compareMinY = function(e21, t4) {
      return e21.minY - t4.minY;
    }, r2.prototype.toJSON = function() {
      return this.data;
    }, r2.prototype.fromJSON = function(e21) {
      return this.data = e21, this;
    }, r2.prototype._all = function(e21, t4) {
      for (var n4 = []; e21; )
        e21.leaf ? t4.push.apply(t4, e21.children) : n4.push.apply(n4, e21.children), e21 = n4.pop();
      return t4;
    }, r2.prototype._build = function(e21, t4, n4, r3) {
      var i3, o3 = n4 - t4 + 1, s3 = this._maxEntries;
      if (o3 <= s3)
        return a2(i3 = m2(e21.slice(t4, n4 + 1)), this.toBBox), i3;
      r3 || (r3 = Math.ceil(Math.log(o3) / Math.log(s3)), s3 = Math.ceil(o3 / s3 ** (r3 - 1))), (i3 = m2([])).leaf = false, i3.height = r3;
      var c3 = Math.ceil(o3 / s3), l3 = c3 * Math.ceil(Math.sqrt(s3));
      h2(e21, t4, n4, l3, this.compareMinX);
      for (var u3 = t4; u3 <= n4; u3 += l3) {
        var d3 = Math.min(u3 + l3 - 1, n4);
        h2(e21, u3, d3, c3, this.compareMinY);
        for (var f3 = u3; f3 <= d3; f3 += c3) {
          var p3 = Math.min(f3 + c3 - 1, d3);
          i3.children.push(this._build(e21, f3, p3, r3 - 1));
        }
      }
      return a2(i3, this.toBBox), i3;
    }, r2.prototype._chooseSubtree = function(e21, t4, n4, r3) {
      for (; r3.push(t4), !t4.leaf && r3.length - 1 !== n4; ) {
        for (var i3 = 1 / 0, a3 = 1 / 0, o3 = void 0, s3 = 0; s3 < t4.children.length; s3++) {
          var c3 = t4.children[s3], l3 = u2(c3), d3 = (f3 = e21, p3 = c3, (Math.max(p3.maxX, f3.maxX) - Math.min(p3.minX, f3.minX)) * (Math.max(p3.maxY, f3.maxY) - Math.min(p3.minY, f3.minY)) - l3);
          d3 < a3 ? (a3 = d3, i3 = l3 < i3 ? l3 : i3, o3 = c3) : d3 === a3 && l3 < i3 && (i3 = l3, o3 = c3);
        }
        t4 = o3 || t4.children[0];
      }
      var f3, p3;
      return t4;
    }, r2.prototype._insert = function(e21, t4, n4) {
      var r3 = n4 ? e21 : this.toBBox(e21), i3 = [], a3 = this._chooseSubtree(r3, this.data, t4, i3);
      for (a3.children.push(e21), s2(a3, r3); t4 >= 0 && i3[t4].children.length > this._maxEntries; )
        this._split(i3, t4), t4--;
      this._adjustParentBBoxes(r3, i3, t4);
    }, r2.prototype._split = function(e21, t4) {
      var n4 = e21[t4], r3 = n4.children.length, i3 = this._minEntries;
      this._chooseSplitAxis(n4, i3, r3);
      var o3 = this._chooseSplitIndex(n4, i3, r3), s3 = m2(n4.children.splice(o3, n4.children.length - o3));
      s3.height = n4.height, s3.leaf = n4.leaf, a2(n4, this.toBBox), a2(s3, this.toBBox), t4 ? e21[t4 - 1].children.push(s3) : this._splitRoot(n4, s3);
    }, r2.prototype._splitRoot = function(e21, t4) {
      this.data = m2([e21, t4]), this.data.height = e21.height + 1, this.data.leaf = false, a2(this.data, this.toBBox);
    }, r2.prototype._chooseSplitIndex = function(e21, t4, n4) {
      for (var r3, i3, a3, s3, c3, l3, d3, f3 = 1 / 0, p3 = 1 / 0, m3 = t4; m3 <= n4 - t4; m3++) {
        var h3 = o2(e21, 0, m3, this.toBBox), g2 = o2(e21, m3, n4, this.toBBox), _2 = (i3 = h3, a3 = g2, s3 = void 0, c3 = void 0, l3 = void 0, d3 = void 0, s3 = Math.max(i3.minX, a3.minX), c3 = Math.max(i3.minY, a3.minY), l3 = Math.min(i3.maxX, a3.maxX), d3 = Math.min(i3.maxY, a3.maxY), Math.max(0, l3 - s3) * Math.max(0, d3 - c3)), v2 = u2(h3) + u2(g2);
        _2 < f3 ? (f3 = _2, r3 = m3, p3 = v2 < p3 ? v2 : p3) : _2 === f3 && v2 < p3 && (p3 = v2, r3 = m3);
      }
      return r3 || n4 - t4;
    }, r2.prototype._chooseSplitAxis = function(e21, t4, n4) {
      var r3 = e21.leaf ? this.compareMinX : c2, i3 = e21.leaf ? this.compareMinY : l2;
      this._allDistMargin(e21, t4, n4, r3) < this._allDistMargin(e21, t4, n4, i3) && e21.children.sort(r3);
    }, r2.prototype._allDistMargin = function(e21, t4, n4, r3) {
      e21.children.sort(r3);
      for (var i3 = this.toBBox, a3 = o2(e21, 0, t4, i3), c3 = o2(e21, n4 - t4, n4, i3), l3 = d2(a3) + d2(c3), u3 = t4; u3 < n4 - t4; u3++) {
        var f3 = e21.children[u3];
        s2(a3, e21.leaf ? i3(f3) : f3), l3 += d2(a3);
      }
      for (var p3 = n4 - t4 - 1; p3 >= t4; p3--) {
        var m3 = e21.children[p3];
        s2(c3, e21.leaf ? i3(m3) : m3), l3 += d2(c3);
      }
      return l3;
    }, r2.prototype._adjustParentBBoxes = function(e21, t4, n4) {
      for (var r3 = n4; r3 >= 0; r3--)
        s2(t4[r3], e21);
    }, r2.prototype._condense = function(e21) {
      for (var t4 = e21.length - 1, n4 = void 0; t4 >= 0; t4--)
        e21[t4].children.length === 0 ? t4 > 0 ? (n4 = e21[t4 - 1].children).splice(n4.indexOf(e21[t4]), 1) : this.clear() : a2(e21[t4], this.toBBox);
    }, r2;
  });
});
function Mo(e19, t2, n2, r2) {
  return n2 !== void 0 && r2 !== void 0 ? [n2 / e19, r2 / t2] : n2 === void 0 ? r2 === void 0 ? 1 : r2 / t2 : n2 / e19;
}
var No = class e13 extends ga {
  constructor(e19) {
    e19 || (e19 = {});
    let t2 = e19.opacity === void 0 ? 1 : e19.opacity, n2 = e19.rotation === void 0 ? 0 : e19.rotation, r2 = e19.scale === void 0 ? 1 : e19.scale, i2 = e19.rotateWithView !== void 0 && e19.rotateWithView;
    super({opacity: t2, rotation: n2, scale: r2, displacement: e19.displacement === void 0 ? [0, 0] : e19.displacement, rotateWithView: i2, declutterMode: e19.declutterMode}), this.anchor_ = e19.anchor === void 0 ? [0.5, 0.5] : e19.anchor, this.normalizedAnchor_ = null, this.anchorOrigin_ = e19.anchorOrigin === void 0 ? `top-left` : e19.anchorOrigin, this.anchorXUnits_ = e19.anchorXUnits === void 0 ? `fraction` : e19.anchorXUnits, this.anchorYUnits_ = e19.anchorYUnits === void 0 ? `fraction` : e19.anchorYUnits, this.crossOrigin_ = e19.crossOrigin === void 0 ? null : e19.crossOrigin;
    let a2 = e19.img === void 0 ? null : e19.img, o2 = e19.src;
    P(!(o2 !== void 0 && a2), "`image` and `src` cannot be provided at the same time"), (o2 === void 0 || o2.length === 0) && a2 && (o2 = a2.src || j(a2)), P(o2 !== void 0 && o2.length > 0, "A defined and non-empty `src` or `image` must be provided"), P(e19.width === void 0 && e19.height === void 0 || e19.scale === void 0, "`width` or `height` cannot be provided together with `scale`");
    let s2;
    if (e19.src === void 0 ? a2 !== void 0 && (s2 = `complete` in a2 ? a2.complete ? a2.src ? z.LOADED : z.IDLE : z.LOADING : z.LOADED) : s2 = z.IDLE, this.color_ = e19.color === void 0 ? null : Pi(e19.color), this.iconImage_ = ca(a2, o2, this.crossOrigin_, s2, this.color_), this.offset_ = e19.offset === void 0 ? [0, 0] : e19.offset, this.offsetOrigin_ = e19.offsetOrigin === void 0 ? `top-left` : e19.offsetOrigin, this.origin_ = null, this.size_ = e19.size === void 0 ? null : e19.size, e19.width !== void 0 || e19.height !== void 0) {
      let t3, n3;
      if (e19.size)
        [t3, n3] = e19.size;
      else {
        let r3 = this.getImage(1);
        if (r3.width && r3.height)
          t3 = r3.width, n3 = r3.height;
        else if (r3 instanceof HTMLImageElement) {
          this.initialOptions_ = e19;
          let t4 = () => {
            if (this.unlistenImageChange(t4), !this.initialOptions_)
              return;
            let n4 = this.iconImage_.getSize();
            this.setScale(Mo(n4[0], n4[1], e19.width, e19.height));
          };
          this.listenImageChange(t4);
          return;
        }
      }
      t3 !== void 0 && this.setScale(Mo(t3, n3, e19.width, e19.height));
    }
  }
  clone() {
    let t2, n2, r2;
    return this.initialOptions_ ? (n2 = this.initialOptions_.width, r2 = this.initialOptions_.height) : (t2 = this.getScale(), t2 = Array.isArray(t2) ? t2.slice() : t2), new e13({anchor: this.anchor_.slice(), anchorOrigin: this.anchorOrigin_, anchorXUnits: this.anchorXUnits_, anchorYUnits: this.anchorYUnits_, color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || void 0, crossOrigin: this.crossOrigin_, offset: this.offset_.slice(), offsetOrigin: this.offsetOrigin_, opacity: this.getOpacity(), rotateWithView: this.getRotateWithView(), rotation: this.getRotation(), scale: t2, width: n2, height: r2, size: this.size_ === null ? void 0 : this.size_.slice(), src: this.getSrc(), displacement: this.getDisplacement().slice(), declutterMode: this.getDeclutterMode()});
  }
  getAnchor() {
    let e19 = this.normalizedAnchor_;
    if (!e19) {
      e19 = this.anchor_;
      let t3 = this.getSize();
      if (this.anchorXUnits_ == `fraction` || this.anchorYUnits_ == `fraction`) {
        if (!t3)
          return null;
        e19 = this.anchor_.slice(), this.anchorXUnits_ == `fraction` && (e19[0] *= t3[0]), this.anchorYUnits_ == `fraction` && (e19[1] *= t3[1]);
      }
      if (this.anchorOrigin_ != `top-left`) {
        if (!t3)
          return null;
        e19 === this.anchor_ && (e19 = this.anchor_.slice()), (this.anchorOrigin_ == `top-right` || this.anchorOrigin_ == `bottom-right`) && (e19[0] = -e19[0] + t3[0]), (this.anchorOrigin_ == `bottom-left` || this.anchorOrigin_ == `bottom-right`) && (e19[1] = -e19[1] + t3[1]);
      }
      this.normalizedAnchor_ = e19;
    }
    let t2 = this.getDisplacement(), n2 = this.getScaleArray();
    return [e19[0] - t2[0] / n2[0], e19[1] + t2[1] / n2[1]];
  }
  setAnchor(e19) {
    this.anchor_ = e19, this.normalizedAnchor_ = null;
  }
  getColor() {
    return this.color_;
  }
  getImage(e19) {
    return this.iconImage_.getImage(e19);
  }
  getPixelRatio(e19) {
    return this.iconImage_.getPixelRatio(e19);
  }
  getImageSize() {
    return this.iconImage_.getSize();
  }
  getImageState() {
    return this.iconImage_.getImageState();
  }
  getHitDetectionImage() {
    return this.iconImage_.getHitDetectionImage();
  }
  getOrigin() {
    if (this.origin_)
      return this.origin_;
    let e19 = this.offset_;
    if (this.offsetOrigin_ != `top-left`) {
      let t2 = this.getSize(), n2 = this.iconImage_.getSize();
      if (!t2 || !n2)
        return null;
      e19 = e19.slice(), (this.offsetOrigin_ == `top-right` || this.offsetOrigin_ == `bottom-right`) && (e19[0] = n2[0] - t2[0] - e19[0]), (this.offsetOrigin_ == `bottom-left` || this.offsetOrigin_ == `bottom-right`) && (e19[1] = n2[1] - t2[1] - e19[1]);
    }
    return this.origin_ = e19, this.origin_;
  }
  getSrc() {
    return this.iconImage_.getSrc();
  }
  getSize() {
    return this.size_ ? this.size_ : this.iconImage_.getSize();
  }
  getWidth() {
    let e19 = this.getScaleArray();
    if (this.size_)
      return this.size_[0] * e19[0];
    if (this.iconImage_.getImageState() == z.LOADED)
      return this.iconImage_.getSize()[0] * e19[0];
  }
  getHeight() {
    let e19 = this.getScaleArray();
    if (this.size_)
      return this.size_[1] * e19[1];
    if (this.iconImage_.getImageState() == z.LOADED)
      return this.iconImage_.getSize()[1] * e19[1];
  }
  setScale(e19) {
    delete this.initialOptions_, super.setScale(e19);
  }
  listenImageChange(e19) {
    this.iconImage_.addEventListener(E.CHANGE, e19);
  }
  load() {
    this.iconImage_.load();
  }
  unlistenImageChange(e19) {
    this.iconImage_.removeEventListener(E.CHANGE, e19);
  }
  ready() {
    return this.iconImage_.ready();
  }
}, Po = 0, U = 1 << Po++, W = 1 << Po++, Fo = 1 << Po++, G = 1 << Po++, Io = 1 << Po++, Lo = 1 << Po++, Ro = 2 ** Po - 1, zo = {[U]: `boolean`, [W]: `number`, [Fo]: `string`, [G]: `color`, [Io]: `number[]`, [Lo]: `size`}, Bo = Object.keys(zo).map(Number).sort(f);
function Vo(e19) {
  let t2 = [];
  for (let n2 of Bo)
    Ho(e19, n2) && t2.push(zo[n2]);
  return t2.length === 0 ? `untyped` : t2.length < 3 ? t2.join(` or `) : t2.slice(0, -1).join(`, `) + `, or ` + t2[t2.length - 1];
}
function Ho(e19, t2) {
  return (e19 & t2) === t2;
}
function Uo(e19, t2) {
  return !!(e19 & t2);
}
function Wo(e19, t2) {
  return e19 === t2;
}
var Go = class {
  constructor(e19, t2) {
    this.type = e19, this.value = t2;
  }
}, Ko = class {
  constructor(e19, t2, ...n2) {
    this.type = e19, this.operator = t2, this.args = n2;
  }
};
function qo() {
  return {variables: new Set(), properties: new Set(), featureId: false, geometryType: false, style: {}};
}
function Jo(e19) {
  switch (e19) {
    case `string`:
      return Fo;
    case `color`:
      return G;
    case `number`:
      return W;
    case `boolean`:
      return U;
    case `number[]`:
      return Io;
    default:
      throw Error(`Unrecognized type hint: ${e19}`);
  }
}
function K(e19, t2, n2) {
  switch (typeof e19) {
    case `boolean`:
      return new Go(U, e19);
    case `number`:
      return new Go(n2 === Lo ? Lo : W, e19);
    case `string`: {
      let t3 = Fo;
      return Li(e19) && (t3 |= G), Wo(t3 & n2, 0) || (t3 &= n2), new Go(t3, e19);
    }
  }
  if (!Array.isArray(e19))
    throw Error(`Expression must be an array or a primitive value`);
  if (e19.length === 0)
    throw Error(`Empty expression`);
  if (typeof e19[0] == `string`)
    return ls(e19, t2, n2);
  for (let t3 of e19)
    if (typeof t3 != `number`)
      throw Error(`Expected an array of numbers`);
  let r2 = Io;
  return e19.length === 2 ? r2 |= Lo : (e19.length === 3 || e19.length === 4) && (r2 |= G), n2 && (r2 &= n2), new Go(r2, e19);
}
var q = {Get: `get`, Var: `var`, Concat: `concat`, GeometryType: `geometry-type`, Any: `any`, All: `all`, Not: `!`, Resolution: `resolution`, Zoom: `zoom`, Time: `time`, Equal: `==`, NotEqual: `!=`, GreaterThan: `>`, GreaterThanOrEqualTo: `>=`, LessThan: `<`, LessThanOrEqualTo: `<=`, Multiply: `*`, Divide: `/`, Add: `+`, Subtract: `-`, Clamp: `clamp`, Mod: `%`, Pow: `^`, Abs: `abs`, Floor: `floor`, Ceil: `ceil`, Round: `round`, Sin: `sin`, Cos: `cos`, Atan: `atan`, Sqrt: `sqrt`, Match: `match`, Between: `between`, Interpolate: `interpolate`, Coalesce: `coalesce`, Case: `case`, In: `in`, Number: `number`, String: `string`, Array: `array`, Color: `color`, Id: `id`, Band: `band`, Palette: `palette`, ToString: `to-string`}, Yo = {[q.Get]: X(([e19, t2]) => t2 === void 0 ? Ro : Jo(t2.value), J(1, 2), Xo), [q.Var]: X(([e19]) => e19.type, J(1, 1), Zo), [q.Id]: X(W | Fo, es, Qo), [q.Concat]: X(Fo, J(2, 1 / 0), Y(Ro)), [q.GeometryType]: X(Fo, es, $o), [q.Resolution]: X(W, es), [q.Zoom]: X(W, es), [q.Time]: X(W, es), [q.Any]: X(U, J(2, 1 / 0), Y(U)), [q.All]: X(U, J(2, 1 / 0), Y(U)), [q.Not]: X(U, J(1, 1), Y(U)), [q.Equal]: X(U, J(2, 2), Y(Ro), ts), [q.NotEqual]: X(U, J(2, 2), Y(Ro), ts), [q.GreaterThan]: X(U, J(2, 2), Y(Ro), ts), [q.GreaterThanOrEqualTo]: X(U, J(2, 2), Y(Ro), ts), [q.LessThan]: X(U, J(2, 2), Y(Ro), ts), [q.LessThanOrEqualTo]: X(U, J(2, 2), Y(Ro), ts), [q.Multiply]: X((e19) => {
  let t2 = W | G;
  for (let n2 = 0; n2 < e19.length; n2++)
    t2 &= e19[n2].type;
  return t2;
}, J(2, 1 / 0), Y(W | G), ts), [q.Coalesce]: X((e19) => {
  let t2 = Ro;
  for (let n2 = 1; n2 < e19.length; n2 += 2)
    t2 &= e19[n2].type;
  return t2 &= e19[e19.length - 1].type, t2;
}, J(2, 1 / 0), Y(Ro), ts), [q.Divide]: X(W, J(2, 2), Y(W)), [q.Add]: X(W, J(2, 1 / 0), Y(W)), [q.Subtract]: X(W, J(2, 2), Y(W)), [q.Clamp]: X(W, J(3, 3), Y(W)), [q.Mod]: X(W, J(2, 2), Y(W)), [q.Pow]: X(W, J(2, 2), Y(W)), [q.Abs]: X(W, J(1, 1), Y(W)), [q.Floor]: X(W, J(1, 1), Y(W)), [q.Ceil]: X(W, J(1, 1), Y(W)), [q.Round]: X(W, J(1, 1), Y(W)), [q.Sin]: X(W, J(1, 1), Y(W)), [q.Cos]: X(W, J(1, 1), Y(W)), [q.Atan]: X(W, J(1, 2), Y(W)), [q.Sqrt]: X(W, J(1, 1), Y(W)), [q.Match]: X((e19) => {
  let t2 = Ro;
  for (let n2 = 2; n2 < e19.length; n2 += 2)
    t2 &= e19[n2].type;
  return t2 &= e19[e19.length - 1].type, t2;
}, J(4, 1 / 0), rs, is), [q.Between]: X(U, J(3, 3), Y(W)), [q.Interpolate]: X((e19) => {
  let t2 = G | W;
  for (let n2 = 3; n2 < e19.length; n2 += 2)
    t2 &= e19[n2].type;
  return t2;
}, J(6, 1 / 0), rs, as), [q.Case]: X((e19) => {
  let t2 = Ro;
  for (let n2 = 1; n2 < e19.length; n2 += 2)
    t2 &= e19[n2].type;
  return t2 &= e19[e19.length - 1].type, t2;
}, J(3, 1 / 0), ns, os), [q.In]: X(U, J(2, 2), ss), [q.Number]: X(W, J(1, 1 / 0), Y(Ro)), [q.String]: X(Fo, J(1, 1 / 0), Y(Ro)), [q.Array]: X((e19) => e19.length === 2 ? Io | Lo : e19.length === 3 || e19.length === 4 ? Io | G : Io, J(1, 1 / 0), Y(W)), [q.Color]: X(G, J(1, 4), Y(W)), [q.Band]: X(W, J(1, 3), Y(W)), [q.Palette]: X(G, J(2, 2), cs), [q.ToString]: X(Fo, J(1, 1), Y(U | W | Fo | G))};
function Xo(e19, t2) {
  let n2 = K(e19[1], t2);
  if (!(n2 instanceof Go))
    throw Error(`Expected a literal argument for get operation`);
  if (typeof n2.value != `string`)
    throw Error(`Expected a string argument for get operation`);
  return t2.properties.add(n2.value), e19.length === 3 ? [n2, K(e19[2], t2)] : [n2];
}
function Zo(e19, t2, n2, r2) {
  let i2 = e19[1];
  if (typeof i2 != `string`)
    throw Error(`Expected a string argument for var operation`);
  if (t2.variables.add(i2), !(`variables` in t2.style) || t2.style.variables[i2] === void 0)
    return [new Go(Ro, i2)];
  let a2 = t2.style.variables[i2], o2 = K(a2, t2);
  if (o2.value = i2, r2 && !Uo(r2, o2.type))
    throw Error(`The variable ${i2} has type ${Vo(o2.type)} but the following type was expected: ${Vo(r2)}`);
  return [o2];
}
function Qo(e19, t2) {
  t2.featureId = true;
}
function $o(e19, t2) {
  t2.geometryType = true;
}
function es(e19, t2) {
  let n2 = e19[0];
  if (e19.length !== 1)
    throw Error(`Expected no arguments for ${n2} operation`);
  return [];
}
function J(e19, t2) {
  return function(n2, r2) {
    let i2 = n2[0], a2 = n2.length - 1;
    if (e19 === t2) {
      if (a2 !== e19)
        throw Error(`Expected ${e19} argument${e19 === 1 ? `` : `s`} for ${i2}, got ${a2}`);
    } else if (a2 < e19 || a2 > t2) {
      let n3 = t2 === 1 / 0 ? `${e19} or more` : `${e19} to ${t2}`;
      throw Error(`Expected ${n3} arguments for ${i2}, got ${a2}`);
    }
  };
}
function Y(e19) {
  return function(t2, n2) {
    let r2 = t2[0], i2 = t2.length - 1, a2 = Array(i2);
    for (let o2 = 0; o2 < i2; ++o2) {
      let i3 = K(t2[o2 + 1], n2);
      if (!Uo(e19, i3.type)) {
        let t3 = Vo(e19), n3 = Vo(i3.type);
        throw Error(`Unexpected type for argument ${o2} of ${r2} operation, got ${t3} but expected ${n3}`);
      }
      i3.type &= e19, a2[o2] = i3;
    }
    return a2;
  };
}
function ts(e19, t2, n2) {
  let r2 = e19[0], i2 = e19.length - 1, a2 = Ro;
  for (let e20 = 0; e20 < n2.length; ++e20)
    a2 &= n2[e20].type;
  if (a2 === 0)
    throw Error(`No common type could be found for arguments of ${r2} operation`);
  let o2 = Array(i2);
  for (let n3 = 0; n3 < i2; ++n3)
    o2[n3] = K(e19[n3 + 1], t2, a2);
  return o2;
}
function ns(e19, t2) {
  let n2 = e19[0], r2 = e19.length - 1;
  if (r2 % 2 == 0)
    throw Error(`An odd amount of arguments was expected for operation ${n2}, got ${JSON.stringify(r2)} instead`);
}
function rs(e19, t2) {
  let n2 = e19[0], r2 = e19.length - 1;
  if (r2 % 2 == 1)
    throw Error(`An even amount of arguments was expected for operation ${n2}, got ${JSON.stringify(r2)} instead`);
}
function is(e19, t2, n2, r2) {
  let i2 = e19.length - 1, a2 = K(e19[1], t2).type, o2 = K(e19[e19.length - 1], t2), s2 = r2 === void 0 ? o2.type : r2 & o2.type, c2 = Array(i2 - 2);
  for (let n3 = 0; n3 < i2 - 2; n3 += 2) {
    let r3 = K(e19[n3 + 2], t2), i3 = K(e19[n3 + 3], t2);
    a2 &= r3.type, s2 &= i3.type, c2[n3] = r3, c2[n3 + 1] = i3;
  }
  let l2 = Fo | W | U;
  if (!Uo(l2, a2))
    throw Error(`Expected an input of type ${Vo(l2)} for the interpolate operation, got ${Vo(a2)} instead`);
  if (a2 &= l2, Wo(s2, 0))
    throw Error(`Could not find a common output type for the following match operation: ` + JSON.stringify(e19));
  for (let n3 = 0; n3 < i2 - 2; n3 += 2) {
    let r3 = K(e19[n3 + 2], t2, a2), i3 = K(e19[n3 + 3], t2, s2);
    c2[n3] = r3, c2[n3 + 1] = i3;
  }
  return [K(e19[1], t2, a2), ...c2, K(e19[e19.length - 1], t2, s2)];
}
function as(e19, t2, n2, r2) {
  let i2 = e19[1], a2;
  switch (i2[0]) {
    case `linear`:
      a2 = 1;
      break;
    case `exponential`:
      if (a2 = i2[1], typeof a2 != `number`)
        throw Error(`Expected a number base for exponential interpolation, got ${JSON.stringify(a2)} instead`);
      break;
    default:
      a2 = null;
  }
  if (!a2)
    throw Error(`Invalid interpolation type: ${JSON.stringify(i2)}`);
  a2 = K(a2, t2);
  let o2 = K(e19[2], t2);
  if (!Uo(W, o2.type))
    throw Error(`Expected an input of type number for the interpolate operation, got ${Vo(o2.type)} instead`);
  o2 = K(e19[2], t2, W);
  let s2 = Array(e19.length - 3);
  for (let n3 = 0; n3 < s2.length; n3 += 2) {
    let r3 = K(e19[n3 + 3], t2);
    if (!Uo(W, r3.type))
      throw Error(`Expected all stop input values in the interpolate operation to be of type number, got ${Vo(r3.type)} at position ${n3 + 2} instead`);
    let i3 = K(e19[n3 + 4], t2);
    if (!Uo(W | G, i3.type))
      throw Error(`Expected all stop output values in the interpolate operation to be a number or color, got ${Vo(i3.type)} at position ${n3 + 3} instead`);
    r3 = K(e19[n3 + 3], t2, W), i3 = K(e19[n3 + 4], t2, W | G), s2[n3] = r3, s2[n3 + 1] = i3;
  }
  return [a2, o2, ...s2];
}
function os(e19, t2, n2, r2) {
  let i2 = K(e19[e19.length - 1], t2, r2), a2 = r2 === void 0 ? i2.type : r2 & i2.type, o2 = Array(e19.length - 1);
  for (let n3 = 0; n3 < o2.length - 1; n3 += 2) {
    let i3 = K(e19[n3 + 1], t2), s2 = K(e19[n3 + 2], t2, r2);
    if (!Uo(U, i3.type))
      throw Error(`Expected all conditions in the case operation to be of type boolean, got ${Vo(i3.type)} at position ${n3} instead`);
    a2 &= s2.type, o2[n3] = i3, o2[n3 + 1] = s2;
  }
  if (Wo(a2, 0))
    throw Error(`Could not find a common output type for the following case operation: ` + JSON.stringify(e19));
  for (let n3 = 0; n3 < o2.length - 1; n3 += 2)
    o2[n3 + 1] = K(e19[n3 + 2], t2, a2);
  return o2[o2.length - 1] = K(e19[e19.length - 1], t2, a2), o2;
}
function ss(e19, t2) {
  let n2 = e19[2];
  if (!Array.isArray(n2))
    throw Error(`The "in" operator was provided a literal value which was not an array as second argument.`);
  if (typeof n2[0] == `string`) {
    if (n2[0] !== `literal`)
      throw Error(`For the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions.`);
    if (!Array.isArray(n2[1]))
      throw Error(`The "in" operator was provided a literal value which was not an array as second argument.`);
    n2 = n2[1];
  }
  let r2 = Fo | W, i2 = Array(n2.length);
  for (let e20 = 0; e20 < i2.length; e20++) {
    let a2 = K(n2[e20], t2);
    r2 &= a2.type, i2[e20] = a2;
  }
  if (Wo(r2, 0))
    throw Error(`Could not find a common type for the following in operation: ` + JSON.stringify(e19));
  return [K(e19[1], t2, r2), ...i2];
}
function cs(e19, t2) {
  let n2 = K(e19[1], t2, W);
  if (n2.type !== W)
    throw Error(`The first argument of palette must be an number, got ${Vo(n2.type)} instead`);
  let r2 = e19[2];
  if (!Array.isArray(r2))
    throw Error(`The second argument of palette must be an array`);
  let i2 = Array(r2.length);
  for (let e20 = 0; e20 < i2.length; e20++) {
    let n3 = K(r2[e20], t2, G);
    if (!(n3 instanceof Go))
      throw Error(`The palette color at index ${e20} must be a literal value`);
    if (!Uo(n3.type, G))
      throw Error(`The palette color at index ${e20} should be of type color, got ${Vo(n3.type)} instead`);
    i2[e20] = n3;
  }
  return [n2, ...i2];
}
function X(e19, ...t2) {
  return function(n2, r2, i2) {
    let a2 = n2[0], o2 = [];
    for (let e20 = 0; e20 < t2.length; e20++)
      o2 = t2[e20](n2, r2, o2, i2) || o2;
    let s2 = typeof e19 == `function` ? e19(o2) : e19;
    if (i2 !== void 0) {
      if (!Uo(s2, i2))
        throw Error(`The following expression was expected to return ${Vo(i2)}, but returns ${Vo(s2)} instead: ${JSON.stringify(n2)}`);
      s2 &= i2;
    }
    if (s2 === 0)
      throw Error(`No matching type was found for the following expression: ${JSON.stringify(n2)}`);
    return new Ko(s2, a2, ...o2);
  };
}
function ls(e19, t2, n2) {
  let r2 = e19[0], i2 = Yo[r2];
  if (!i2)
    throw Error(`Unknown operator: ${r2}`);
  return i2(e19, t2, n2);
}
function us(e19) {
  if (!e19)
    return ``;
  let t2 = e19.getType();
  switch (t2) {
    case `Point`:
    case `LineString`:
    case `Polygon`:
      return t2;
    case `MultiPoint`:
    case `MultiLineString`:
    case `MultiPolygon`:
      return t2.substring(5);
    case `Circle`:
      return `Polygon`;
    case `GeometryCollection`:
      return us(e19.getGeometries()[0]);
    default:
      return ``;
  }
}
function ds() {
  return {variables: {}, properties: {}, resolution: NaN, featureId: null, geometryType: ``};
}
function fs(e19, t2, n2) {
  let r2 = K(e19, n2);
  if (!Uo(t2, r2.type)) {
    let e20 = Vo(t2), n3 = Vo(r2.type);
    throw Error(`Expected expression to be of type ${e20}, got ${n3}`);
  }
  return ps(r2, n2);
}
function ps(e19, t2) {
  if (e19 instanceof Go) {
    if (e19.type === G && typeof e19.value == `string`) {
      let t3 = Ni(e19.value);
      return function() {
        return t3;
      };
    }
    return function() {
      return e19.value;
    };
  }
  let n2 = e19.operator;
  switch (n2) {
    case q.Number:
    case q.String:
    case q.Coalesce:
      return ms(e19, t2);
    case q.Get:
    case q.Var:
      return hs(e19, t2);
    case q.Id:
      return (e20) => e20.featureId;
    case q.GeometryType:
      return (e20) => e20.geometryType;
    case q.Concat: {
      let n3 = e19.args.map((e20) => ps(e20, t2));
      return (e20) => ``.concat(...n3.map((t3) => t3(e20).toString()));
    }
    case q.Resolution:
      return (e20) => e20.resolution;
    case q.Any:
    case q.All:
    case q.Between:
    case q.In:
    case q.Not:
      return _s(e19, t2);
    case q.Equal:
    case q.NotEqual:
    case q.LessThan:
    case q.LessThanOrEqualTo:
    case q.GreaterThan:
    case q.GreaterThanOrEqualTo:
      return gs(e19, t2);
    case q.Multiply:
    case q.Divide:
    case q.Add:
    case q.Subtract:
    case q.Clamp:
    case q.Mod:
    case q.Pow:
    case q.Abs:
    case q.Floor:
    case q.Ceil:
    case q.Round:
    case q.Sin:
    case q.Cos:
    case q.Atan:
    case q.Sqrt:
      return vs(e19, t2);
    case q.Case:
      return ys(e19, t2);
    case q.Match:
      return bs(e19, t2);
    case q.Interpolate:
      return xs(e19, t2);
    case q.ToString:
      return Ss(e19, t2);
    default:
      throw Error(`Unsupported operator ${n2}`);
  }
}
function ms(e19, t2) {
  let n2 = e19.operator, r2 = e19.args.length, i2 = Array(r2);
  for (let n3 = 0; n3 < r2; ++n3)
    i2[n3] = ps(e19.args[n3], t2);
  switch (n2) {
    case q.Coalesce:
      return (e20) => {
        for (let t3 = 0; t3 < r2; ++t3) {
          let n3 = i2[t3](e20);
          if (n3 != null)
            return n3;
        }
        throw Error(`Expected one of the values to be non-null`);
      };
    case q.Number:
    case q.String:
      return (e20) => {
        for (let t3 = 0; t3 < r2; ++t3) {
          let r3 = i2[t3](e20);
          if (typeof r3 === n2)
            return r3;
        }
        throw Error(`Expected one of the values to be a ${n2}`);
      };
    default:
      throw Error(`Unsupported assertion operator ${n2}`);
  }
}
function hs(e19, t2) {
  let n2 = e19.args[0].value;
  switch (e19.operator) {
    case q.Get:
      return (e20) => e20.properties[n2];
    case q.Var:
      return (e20) => e20.variables[n2];
    default:
      throw Error(`Unsupported accessor operator ${e19.operator}`);
  }
}
function gs(e19, t2) {
  let n2 = e19.operator, r2 = ps(e19.args[0], t2), i2 = ps(e19.args[1], t2);
  switch (n2) {
    case q.Equal:
      return (e20) => r2(e20) === i2(e20);
    case q.NotEqual:
      return (e20) => r2(e20) !== i2(e20);
    case q.LessThan:
      return (e20) => r2(e20) < i2(e20);
    case q.LessThanOrEqualTo:
      return (e20) => r2(e20) <= i2(e20);
    case q.GreaterThan:
      return (e20) => r2(e20) > i2(e20);
    case q.GreaterThanOrEqualTo:
      return (e20) => r2(e20) >= i2(e20);
    default:
      throw Error(`Unsupported comparison operator ${n2}`);
  }
}
function _s(e19, t2) {
  let n2 = e19.operator, r2 = e19.args.length, i2 = Array(r2);
  for (let n3 = 0; n3 < r2; ++n3)
    i2[n3] = ps(e19.args[n3], t2);
  switch (n2) {
    case q.Any:
      return (e20) => {
        for (let t3 = 0; t3 < r2; ++t3)
          if (i2[t3](e20))
            return true;
        return false;
      };
    case q.All:
      return (e20) => {
        for (let t3 = 0; t3 < r2; ++t3)
          if (!i2[t3](e20))
            return false;
        return true;
      };
    case q.Between:
      return (e20) => {
        let t3 = i2[0](e20), n3 = i2[1](e20), r3 = i2[2](e20);
        return t3 >= n3 && t3 <= r3;
      };
    case q.In:
      return (e20) => {
        let t3 = i2[0](e20);
        for (let n3 = 1; n3 < r2; ++n3)
          if (t3 === i2[n3](e20))
            return true;
        return false;
      };
    case q.Not:
      return (e20) => !i2[0](e20);
    default:
      throw Error(`Unsupported logical operator ${n2}`);
  }
}
function vs(e19, t2) {
  let n2 = e19.operator, r2 = e19.args.length, i2 = Array(r2);
  for (let n3 = 0; n3 < r2; ++n3)
    i2[n3] = ps(e19.args[n3], t2);
  switch (n2) {
    case q.Multiply:
      return (e20) => {
        let t3 = 1;
        for (let n3 = 0; n3 < r2; ++n3)
          t3 *= i2[n3](e20);
        return t3;
      };
    case q.Divide:
      return (e20) => i2[0](e20) / i2[1](e20);
    case q.Add:
      return (e20) => {
        let t3 = 0;
        for (let n3 = 0; n3 < r2; ++n3)
          t3 += i2[n3](e20);
        return t3;
      };
    case q.Subtract:
      return (e20) => i2[0](e20) - i2[1](e20);
    case q.Clamp:
      return (e20) => {
        let t3 = i2[0](e20), n3 = i2[1](e20);
        if (t3 < n3)
          return n3;
        let r3 = i2[2](e20);
        return t3 > r3 ? r3 : t3;
      };
    case q.Mod:
      return (e20) => i2[0](e20) % i2[1](e20);
    case q.Pow:
      return (e20) => i2[0](e20) ** +i2[1](e20);
    case q.Abs:
      return (e20) => Math.abs(i2[0](e20));
    case q.Floor:
      return (e20) => Math.floor(i2[0](e20));
    case q.Ceil:
      return (e20) => Math.ceil(i2[0](e20));
    case q.Round:
      return (e20) => Math.round(i2[0](e20));
    case q.Sin:
      return (e20) => Math.sin(i2[0](e20));
    case q.Cos:
      return (e20) => Math.cos(i2[0](e20));
    case q.Atan:
      return r2 === 2 ? (e20) => Math.atan2(i2[0](e20), i2[1](e20)) : (e20) => Math.atan(i2[0](e20));
    case q.Sqrt:
      return (e20) => Math.sqrt(i2[0](e20));
    default:
      throw Error(`Unsupported numeric operator ${n2}`);
  }
}
function ys(e19, t2) {
  let n2 = e19.args.length, r2 = Array(n2);
  for (let i2 = 0; i2 < n2; ++i2)
    r2[i2] = ps(e19.args[i2], t2);
  return (e20) => {
    for (let t3 = 0; t3 < n2 - 1; t3 += 2)
      if (r2[t3](e20))
        return r2[t3 + 1](e20);
    return r2[n2 - 1](e20);
  };
}
function bs(e19, t2) {
  let n2 = e19.args.length, r2 = Array(n2);
  for (let i2 = 0; i2 < n2; ++i2)
    r2[i2] = ps(e19.args[i2], t2);
  return (e20) => {
    let t3 = r2[0](e20);
    for (let i2 = 1; i2 < n2; i2 += 2)
      if (t3 === r2[i2](e20))
        return r2[i2 + 1](e20);
    return r2[n2 - 1](e20);
  };
}
function xs(e19, t2) {
  let n2 = e19.args.length, r2 = Array(n2);
  for (let i2 = 0; i2 < n2; ++i2)
    r2[i2] = ps(e19.args[i2], t2);
  return (e20) => {
    let t3 = r2[0](e20), i2 = r2[1](e20), a2, o2;
    for (let s2 = 2; s2 < n2; s2 += 2) {
      let n3 = r2[s2](e20), c2 = r2[s2 + 1](e20), l2 = Array.isArray(c2);
      if (l2 && (c2 = Ai(c2)), n3 >= i2)
        return s2 === 2 ? c2 : l2 ? ws(t3, i2, a2, o2, n3, c2) : Cs(t3, i2, a2, o2, n3, c2);
      a2 = n3, o2 = c2;
    }
    return o2;
  };
}
function Ss(e19, t2) {
  let n2 = e19.operator, r2 = e19.args.length, i2 = Array(r2);
  for (let n3 = 0; n3 < r2; ++n3)
    i2[n3] = ps(e19.args[n3], t2);
  switch (n2) {
    case q.ToString:
      return (t3) => {
        let n3 = i2[0](t3);
        return e19.args[0].type === G ? Ii(n3) : n3.toString();
      };
    default:
      throw Error(`Unsupported convert operator ${n2}`);
  }
}
function Cs(e19, t2, n2, r2, i2, a2) {
  let o2 = i2 - n2;
  if (o2 === 0)
    return r2;
  let s2 = t2 - n2;
  return r2 + (e19 === 1 ? s2 / o2 : (e19 ** +s2 - 1) / (e19 ** +o2 - 1)) * (a2 - r2);
}
function ws(e19, t2, n2, r2, i2, a2) {
  if (i2 - n2 === 0)
    return r2;
  let o2 = ji(r2), s2 = ji(a2), c2 = s2[2] - o2[2];
  return c2 > 180 ? c2 -= 360 : c2 < -180 && (c2 += 360), Fi(Mi([Cs(e19, t2, n2, o2[0], i2, s2[0]), Cs(e19, t2, n2, o2[1], i2, s2[1]), o2[2] + Cs(e19, t2, n2, 0, i2, c2), Cs(e19, t2, n2, r2[3], i2, a2[3])]));
}
function Ts(e19) {
  return true;
}
function Es(e19) {
  let t2 = qo(), n2 = Os(e19, t2), r2 = ds();
  return function(e20, i2) {
    if (r2.properties = e20.getPropertiesInternal(), r2.resolution = i2, t2.featureId) {
      let t3 = e20.getId();
      t3 === void 0 ? r2.featureId = null : r2.featureId = t3;
    }
    return t2.geometryType && (r2.geometryType = us(e20.getGeometry())), n2(r2);
  };
}
function Ds(e19) {
  let t2 = qo(), n2 = e19.length, r2 = Array(n2);
  for (let i3 = 0; i3 < n2; ++i3)
    r2[i3] = ks(e19[i3], t2);
  let i2 = ds(), a2 = Array(n2);
  return function(e20, o2) {
    if (i2.properties = e20.getPropertiesInternal(), i2.resolution = o2, t2.featureId) {
      let t3 = e20.getId();
      t3 === void 0 ? i2.featureId = null : i2.featureId = t3;
    }
    let s2 = 0;
    for (let e21 = 0; e21 < n2; ++e21) {
      let t3 = r2[e21](i2);
      t3 && (a2[s2] = t3, s2 += 1);
    }
    return a2.length = s2, a2;
  };
}
function Os(e19, t2) {
  let n2 = e19.length, r2 = Array(n2);
  for (let i2 = 0; i2 < n2; ++i2) {
    let n3 = e19[i2], a2 = `filter` in n3 ? fs(n3.filter, U, t2) : Ts, o2;
    if (Array.isArray(n3.style)) {
      let e20 = n3.style.length;
      o2 = Array(e20);
      for (let r3 = 0; r3 < e20; ++r3)
        o2[r3] = ks(n3.style[r3], t2);
    } else
      o2 = [ks(n3.style, t2)];
    r2[i2] = {filter: a2, styles: o2};
  }
  return function(t3) {
    let i2 = [], a2 = false;
    for (let o2 = 0; o2 < n2; ++o2) {
      let n3 = r2[o2].filter;
      if (n3(t3) && !(e19[o2].else && a2)) {
        a2 = true;
        for (let e20 of r2[o2].styles) {
          let n4 = e20(t3);
          n4 && i2.push(n4);
        }
      }
    }
    return i2;
  };
}
function ks(e19, t2) {
  let n2 = As(e19, ``, t2), r2 = js(e19, ``, t2), i2 = Ms(e19, t2), a2 = Ns(e19, t2), o2 = Ls(e19, `z-index`, t2);
  if (!n2 && !r2 && !i2 && !a2 && !w(e19))
    throw Error(`No fill, stroke, point, or text symbolizer properties in style: ` + JSON.stringify(e19));
  let s2 = new Ya();
  return function(e20) {
    let t3 = true;
    if (n2) {
      let r3 = n2(e20);
      r3 && (t3 = false), s2.setFill(r3);
    }
    if (r2) {
      let n3 = r2(e20);
      n3 && (t3 = false), s2.setStroke(n3);
    }
    if (i2) {
      let n3 = i2(e20);
      n3 && (t3 = false), s2.setText(n3);
    }
    if (a2) {
      let n3 = a2(e20);
      n3 && (t3 = false), s2.setImage(n3);
    }
    return o2 && s2.setZIndex(o2(e20)), t3 ? null : s2;
  };
}
function As(e19, t2, n2) {
  let r2;
  if (r2 = t2 + `fill-pattern-src` in e19 ? zs(e19, t2 + `fill-`, n2) : Vs(e19, t2 + `fill-color`, n2), !r2)
    return null;
  let i2 = new la();
  return function(e20) {
    let t3 = r2(e20);
    return t3 === `none` ? null : (i2.setColor(t3), i2);
  };
}
function js(e19, t2, n2) {
  let r2 = Ls(e19, t2 + `stroke-width`, n2), i2 = Vs(e19, t2 + `stroke-color`, n2);
  if (!r2 && !i2)
    return null;
  let a2 = Rs(e19, t2 + `stroke-line-cap`, n2), o2 = Rs(e19, t2 + `stroke-line-join`, n2), s2 = Hs(e19, t2 + `stroke-line-dash`, n2), c2 = Ls(e19, t2 + `stroke-line-dash-offset`, n2), l2 = Ls(e19, t2 + `stroke-miter-limit`, n2), u2 = new fa();
  return function(e20) {
    if (i2) {
      let t3 = i2(e20);
      if (t3 === `none`)
        return null;
      u2.setColor(t3);
    }
    if (r2 && u2.setWidth(r2(e20)), a2) {
      let t3 = a2(e20);
      if (t3 !== `butt` && t3 !== `round` && t3 !== `square`)
        throw Error(`Expected butt, round, or square line cap`);
      u2.setLineCap(t3);
    }
    if (o2) {
      let t3 = o2(e20);
      if (t3 !== `bevel` && t3 !== `round` && t3 !== `miter`)
        throw Error(`Expected bevel, round, or miter line join`);
      u2.setLineJoin(t3);
    }
    return s2 && u2.setLineDash(s2(e20)), c2 && u2.setLineDashOffset(c2(e20)), l2 && u2.setMiterLimit(l2(e20)), u2;
  };
}
function Ms(e19, t2) {
  let n2 = `text-`, r2 = Rs(e19, `text-value`, t2);
  if (!r2)
    return null;
  let i2 = As(e19, n2, t2), a2 = As(e19, `text-background-`, t2), o2 = js(e19, n2, t2), s2 = js(e19, `text-background-`, t2), c2 = Rs(e19, `text-font`, t2), l2 = Ls(e19, `text-max-angle`, t2), u2 = Ls(e19, `text-offset-x`, t2), d2 = Ls(e19, `text-offset-y`, t2), f2 = Bs(e19, `text-overflow`, t2), p2 = Rs(e19, `text-placement`, t2), m2 = Ls(e19, `text-repeat`, t2), h2 = Gs(e19, `text-scale`, t2), g2 = Bs(e19, `text-rotate-with-view`, t2), _2 = Ls(e19, `text-rotation`, t2), v2 = Rs(e19, `text-align`, t2), y2 = Rs(e19, `text-justify`, t2), b2 = Rs(e19, `text-baseline`, t2), x2 = Hs(e19, `text-padding`, t2), S2 = new to({declutterMode: Qs(e19, `text-declutter-mode`)});
  return function(e20) {
    if (S2.setText(r2(e20)), i2 && S2.setFill(i2(e20)), a2 && S2.setBackgroundFill(a2(e20)), o2 && S2.setStroke(o2(e20)), s2 && S2.setBackgroundStroke(s2(e20)), c2 && S2.setFont(c2(e20)), l2 && S2.setMaxAngle(l2(e20)), u2 && S2.setOffsetX(u2(e20)), d2 && S2.setOffsetY(d2(e20)), f2 && S2.setOverflow(f2(e20)), p2) {
      let t3 = p2(e20);
      if (t3 !== `point` && t3 !== `line`)
        throw Error(`Expected point or line for text-placement`);
      S2.setPlacement(t3);
    }
    if (m2 && S2.setRepeat(m2(e20)), h2 && S2.setScale(h2(e20)), g2 && S2.setRotateWithView(g2(e20)), _2 && S2.setRotation(_2(e20)), v2) {
      let t3 = v2(e20);
      if (t3 !== `left` && t3 !== `center` && t3 !== `right` && t3 !== `end` && t3 !== `start`)
        throw Error(`Expected left, right, center, start, or end for text-align`);
      S2.setTextAlign(t3);
    }
    if (y2) {
      let t3 = y2(e20);
      if (t3 !== `left` && t3 !== `right` && t3 !== `center`)
        throw Error(`Expected left, right, or center for text-justify`);
      S2.setJustify(t3);
    }
    if (b2) {
      let t3 = b2(e20);
      if (t3 !== `bottom` && t3 !== `top` && t3 !== `middle` && t3 !== `alphabetic` && t3 !== `hanging`)
        throw Error(`Expected bottom, top, middle, alphabetic, or hanging for text-baseline`);
      S2.setTextBaseline(t3);
    }
    return x2 && S2.setPadding(x2(e20)), S2;
  };
}
function Ns(e19, t2) {
  return `icon-src` in e19 ? Ps(e19, t2) : `shape-points` in e19 ? Fs(e19, t2) : `circle-radius` in e19 ? Is(e19, t2) : null;
}
function Ps(e19, t2) {
  let n2 = `icon-src`, r2 = tc(e19[n2], n2), i2 = Us(e19, `icon-anchor`, t2), a2 = Gs(e19, `icon-scale`, t2), o2 = Ls(e19, `icon-opacity`, t2), s2 = Us(e19, `icon-displacement`, t2), c2 = Ls(e19, `icon-rotation`, t2), l2 = Bs(e19, `icon-rotate-with-view`, t2), u2 = Ys(e19, `icon-anchor-origin`), d2 = Xs(e19, `icon-anchor-x-units`), f2 = Xs(e19, `icon-anchor-y-units`), p2 = $s(e19, `icon-color`), m2 = Js(e19, `icon-cross-origin`), h2 = Zs(e19, `icon-offset`), g2 = Ys(e19, `icon-offset-origin`), _2 = Ks(e19, `icon-width`), v2 = new No({src: r2, anchorOrigin: u2, anchorXUnits: d2, anchorYUnits: f2, color: p2, crossOrigin: m2, offset: h2, offsetOrigin: g2, height: Ks(e19, `icon-height`), width: _2, size: qs(e19, `icon-size`), declutterMode: Qs(e19, `icon-declutter-mode`)});
  return function(e20) {
    return o2 && v2.setOpacity(o2(e20)), s2 && v2.setDisplacement(s2(e20)), c2 && v2.setRotation(c2(e20)), l2 && v2.setRotateWithView(l2(e20)), a2 && v2.setScale(a2(e20)), i2 && v2.setAnchor(i2(e20)), v2;
  };
}
function Fs(e19, t2) {
  let n2 = `shape-`, r2 = `shape-points`, i2 = `shape-radius`, a2 = nc(e19[r2], r2), o2 = nc(e19[i2], i2), s2 = As(e19, n2, t2), c2 = js(e19, n2, t2), l2 = Gs(e19, `shape-scale`, t2), u2 = Us(e19, `shape-displacement`, t2), d2 = Ls(e19, `shape-rotation`, t2), f2 = Bs(e19, `shape-rotate-with-view`, t2), p2 = new qa({points: a2, radius: o2, radius2: Ks(e19, `shape-radius2`), angle: Ks(e19, `shape-angle`), declutterMode: Qs(e19, `shape-declutter-mode`)});
  return function(e20) {
    return s2 && p2.setFill(s2(e20)), c2 && p2.setStroke(c2(e20)), u2 && p2.setDisplacement(u2(e20)), d2 && p2.setRotation(d2(e20)), f2 && p2.setRotateWithView(f2(e20)), l2 && p2.setScale(l2(e20)), p2;
  };
}
function Is(e19, t2) {
  let n2 = `circle-`, r2 = As(e19, n2, t2), i2 = js(e19, n2, t2), a2 = Ls(e19, `circle-radius`, t2), o2 = Gs(e19, `circle-scale`, t2), s2 = Us(e19, `circle-displacement`, t2), c2 = Ls(e19, `circle-rotation`, t2), l2 = Bs(e19, `circle-rotate-with-view`, t2), u2 = new Ja({radius: 5, declutterMode: Qs(e19, `circle-declutter-mode`)});
  return function(e20) {
    return a2 && u2.setRadius(a2(e20)), r2 && u2.setFill(r2(e20)), i2 && u2.setStroke(i2(e20)), s2 && u2.setDisplacement(s2(e20)), c2 && u2.setRotation(c2(e20)), l2 && u2.setRotateWithView(l2(e20)), o2 && u2.setScale(o2(e20)), u2;
  };
}
function Ls(e19, t2, n2) {
  if (!(t2 in e19))
    return;
  let r2 = fs(e19[t2], W, n2);
  return function(e20) {
    return nc(r2(e20), t2);
  };
}
function Rs(e19, t2, n2) {
  if (!(t2 in e19))
    return null;
  let r2 = fs(e19[t2], Fo, n2);
  return function(e20) {
    return tc(r2(e20), t2);
  };
}
function zs(e19, t2, n2) {
  let r2 = Rs(e19, t2 + `pattern-src`, n2), i2 = Ws(e19, t2 + `pattern-offset`, n2), a2 = Ws(e19, t2 + `pattern-size`, n2), o2 = Vs(e19, t2 + `color`, n2);
  return function(e20) {
    return {src: r2(e20), offset: i2 && i2(e20), size: a2 && a2(e20), color: o2 && o2(e20)};
  };
}
function Bs(e19, t2, n2) {
  if (!(t2 in e19))
    return null;
  let r2 = fs(e19[t2], U, n2);
  return function(e20) {
    let n3 = r2(e20);
    if (typeof n3 != `boolean`)
      throw Error(`Expected a boolean for ${t2}`);
    return n3;
  };
}
function Vs(e19, t2, n2) {
  if (!(t2 in e19))
    return null;
  let r2 = fs(e19[t2], G | Fo, n2);
  return function(e20) {
    return rc(r2(e20), t2);
  };
}
function Hs(e19, t2, n2) {
  if (!(t2 in e19))
    return null;
  let r2 = fs(e19[t2], Io, n2);
  return function(e20) {
    return ec(r2(e20), t2);
  };
}
function Us(e19, t2, n2) {
  if (!(t2 in e19))
    return null;
  let r2 = fs(e19[t2], Io, n2);
  return function(e20) {
    let n3 = ec(r2(e20), t2);
    if (n3.length !== 2)
      throw Error(`Expected two numbers for ${t2}`);
    return n3;
  };
}
function Ws(e19, t2, n2) {
  if (!(t2 in e19))
    return null;
  let r2 = fs(e19[t2], Io, n2);
  return function(e20) {
    return ic(r2(e20), t2);
  };
}
function Gs(e19, t2, n2) {
  if (!(t2 in e19))
    return null;
  let r2 = fs(e19[t2], Io | W, n2);
  return function(e20) {
    return ac(r2(e20), t2);
  };
}
function Ks(e19, t2) {
  let n2 = e19[t2];
  if (n2 !== void 0) {
    if (typeof n2 != `number`)
      throw Error(`Expected a number for ${t2}`);
    return n2;
  }
}
function qs(e19, t2) {
  let n2 = e19[t2];
  if (n2 !== void 0) {
    if (typeof n2 == `number`)
      return ha(n2);
    if (!Array.isArray(n2) || n2.length !== 2 || typeof n2[0] != `number` || typeof n2[1] != `number`)
      throw Error(`Expected a number or size array for ${t2}`);
    return n2;
  }
}
function Js(e19, t2) {
  let n2 = e19[t2];
  if (n2 !== void 0) {
    if (typeof n2 != `string`)
      throw Error(`Expected a string for ${t2}`);
    return n2;
  }
}
function Ys(e19, t2) {
  let n2 = e19[t2];
  if (n2 !== void 0) {
    if (n2 !== `bottom-left` && n2 !== `bottom-right` && n2 !== `top-left` && n2 !== `top-right`)
      throw Error(`Expected bottom-left, bottom-right, top-left, or top-right for ${t2}`);
    return n2;
  }
}
function Xs(e19, t2) {
  let n2 = e19[t2];
  if (n2 !== void 0) {
    if (n2 !== `pixels` && n2 !== `fraction`)
      throw Error(`Expected pixels or fraction for ${t2}`);
    return n2;
  }
}
function Zs(e19, t2) {
  let n2 = e19[t2];
  if (n2 !== void 0)
    return ec(n2, t2);
}
function Qs(e19, t2) {
  let n2 = e19[t2];
  if (n2 !== void 0) {
    if (typeof n2 != `string`)
      throw Error(`Expected a string for ${t2}`);
    if (n2 !== `declutter` && n2 !== `obstacle` && n2 !== `none`)
      throw Error(`Expected declutter, obstacle, or none for ${t2}`);
    return n2;
  }
}
function $s(e19, t2) {
  let n2 = e19[t2];
  if (n2 !== void 0)
    return rc(n2, t2);
}
function ec(e19, t2) {
  if (!Array.isArray(e19))
    throw Error(`Expected an array for ${t2}`);
  let n2 = e19.length;
  for (let r2 = 0; r2 < n2; ++r2)
    if (typeof e19[r2] != `number`)
      throw Error(`Expected an array of numbers for ${t2}`);
  return e19;
}
function tc(e19, t2) {
  if (typeof e19 != `string`)
    throw Error(`Expected a string for ${t2}`);
  return e19;
}
function nc(e19, t2) {
  if (typeof e19 != `number`)
    throw Error(`Expected a number for ${t2}`);
  return e19;
}
function rc(e19, t2) {
  if (typeof e19 == `string`)
    return e19;
  let n2 = ec(e19, t2), r2 = n2.length;
  if (r2 < 3 || r2 > 4)
    throw Error(`Expected a color with 3 or 4 values for ${t2}`);
  return n2;
}
function ic(e19, t2) {
  let n2 = ec(e19, t2);
  if (n2.length !== 2)
    throw Error(`Expected an array of two numbers for ${t2}`);
  return n2;
}
function ac(e19, t2) {
  return typeof e19 == `number` ? e19 : ic(e19, t2);
}
var oc = e(jo(), 1), sc = {RENDER_ORDER: `renderOrder`}, cc = class extends ko {
  constructor(e19) {
    e19 || (e19 = {});
    let t2 = Object.assign({}, e19);
    delete t2.style, delete t2.renderBuffer, delete t2.updateWhileAnimating, delete t2.updateWhileInteracting, super(t2), this.declutter_ = e19.declutter ? String(e19.declutter) : void 0, this.renderBuffer_ = e19.renderBuffer === void 0 ? 100 : e19.renderBuffer, this.style_ = null, this.styleFunction_ = void 0, this.setStyle(e19.style), this.updateWhileAnimating_ = e19.updateWhileAnimating !== void 0 && e19.updateWhileAnimating, this.updateWhileInteracting_ = e19.updateWhileInteracting !== void 0 && e19.updateWhileInteracting;
  }
  getDeclutter() {
    return this.declutter_;
  }
  getFeatures(e19) {
    return super.getFeatures(e19);
  }
  getRenderBuffer() {
    return this.renderBuffer_;
  }
  getRenderOrder() {
    return this.get(sc.RENDER_ORDER);
  }
  getStyle() {
    return this.style_;
  }
  getStyleFunction() {
    return this.styleFunction_;
  }
  getUpdateWhileAnimating() {
    return this.updateWhileAnimating_;
  }
  getUpdateWhileInteracting() {
    return this.updateWhileInteracting_;
  }
  renderDeclutter(e19, t2) {
    let n2 = this.getDeclutter();
    n2 in e19.declutter || (e19.declutter[n2] = new oc.default(9)), this.getRenderer().renderDeclutter(e19, t2);
  }
  setRenderOrder(e19) {
    this.set(sc.RENDER_ORDER, e19);
  }
  setStyle(e19) {
    this.style_ = e19 === void 0 ? Qa : e19;
    let t2 = lc(e19);
    this.styleFunction_ = e19 === null ? void 0 : Xa(t2), this.changed();
  }
};
function lc(e19) {
  if (e19 === void 0)
    return Qa;
  if (!e19)
    return null;
  if (typeof e19 == `function` || e19 instanceof Ya)
    return e19;
  if (!Array.isArray(e19))
    return Ds([e19]);
  if (e19.length === 0)
    return [];
  let t2 = e19.length, n2 = e19[0];
  if (n2 instanceof Ya) {
    let n3 = Array(t2);
    for (let r2 = 0; r2 < t2; ++r2) {
      let t3 = e19[r2];
      if (!(t3 instanceof Ya))
        throw Error(`Expected a list of style instances`);
      n3[r2] = t3;
    }
    return n3;
  }
  if (`style` in n2) {
    let n3 = Array(t2);
    for (let r2 = 0; r2 < t2; ++r2) {
      let t3 = e19[r2];
      if (!(`style` in t3))
        throw Error(`Expected a list of rules with a style property`);
      n3[r2] = t3;
    }
    return Es(n3);
  }
  return Ds(e19);
}
var Z = {BEGIN_GEOMETRY: 0, BEGIN_PATH: 1, CIRCLE: 2, CLOSE_PATH: 3, CUSTOM: 4, DRAW_CHARS: 5, DRAW_IMAGE: 6, END_GEOMETRY: 7, FILL: 8, MOVE_TO_LINE_TO: 9, SET_FILL_STYLE: 10, SET_STROKE_STYLE: 11, STROKE: 12}, uc = [Z.FILL], dc = [Z.STROKE], fc = [Z.BEGIN_PATH], pc = [Z.CLOSE_PATH], mc = class {
  drawCustom(e19, t2, n2, r2, i2) {
  }
  drawGeometry(e19) {
  }
  setStyle(e19) {
  }
  drawCircle(e19, t2, n2) {
  }
  drawFeature(e19, t2, n2) {
  }
  drawGeometryCollection(e19, t2, n2) {
  }
  drawLineString(e19, t2, n2) {
  }
  drawMultiLineString(e19, t2, n2) {
  }
  drawMultiPoint(e19, t2, n2) {
  }
  drawMultiPolygon(e19, t2, n2) {
  }
  drawPoint(e19, t2, n2) {
  }
  drawPolygon(e19, t2, n2) {
  }
  drawText(e19, t2, n2) {
  }
  setFillStrokeStyle(e19, t2) {
  }
  setImageStyle(e19, t2) {
  }
  setTextStyle(e19, t2) {
  }
}, hc = class extends mc {
  constructor(e19, t2, n2, r2) {
    super(), this.tolerance = e19, this.maxExtent = t2, this.pixelRatio = r2, this.maxLineWidth = 0, this.resolution = n2, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_ = null, this.bufferedMaxExtent_ = null, this.instructions = [], this.coordinates = [], this.tmpCoordinate_ = [], this.hitDetectionInstructions = [], this.state = {};
  }
  applyPixelRatio(e19) {
    let t2 = this.pixelRatio;
    return t2 == 1 ? e19 : e19.map(function(e20) {
      return e20 * t2;
    });
  }
  appendFlatPointCoordinates(e19, t2) {
    let n2 = this.getBufferedMaxExtent(), r2 = this.tmpCoordinate_, i2 = this.coordinates, a2 = i2.length;
    for (let o2 = 0, s2 = e19.length; o2 < s2; o2 += t2)
      r2[0] = e19[o2], r2[1] = e19[o2 + 1], be(n2, r2) && (i2[a2++] = r2[0], i2[a2++] = r2[1]);
    return a2;
  }
  appendFlatLineCoordinates(e19, t2, n2, r2, i2, a2) {
    let o2 = this.coordinates, s2 = o2.length, c2 = this.getBufferedMaxExtent();
    a2 && (t2 += r2);
    let l2 = e19[t2], u2 = e19[t2 + 1], d2 = this.tmpCoordinate_, f2 = true, p2, m2, h2;
    for (p2 = t2 + r2; p2 < n2; p2 += r2)
      d2[0] = e19[p2], d2[1] = e19[p2 + 1], h2 = Ce(c2, d2), h2 === m2 ? h2 === I.INTERSECTING ? (o2[s2++] = d2[0], o2[s2++] = d2[1], f2 = false) : f2 = true : (f2 && (f2 = (o2[s2++] = l2, o2[s2++] = u2, false)), o2[s2++] = d2[0], o2[s2++] = d2[1]), l2 = d2[0], u2 = d2[1], m2 = h2;
    return (i2 && f2 || p2 === t2 + r2) && (o2[s2++] = l2, o2[s2++] = u2), s2;
  }
  drawCustomCoordinates_(e19, t2, n2, r2, i2) {
    for (let a2 = 0, o2 = n2.length; a2 < o2; ++a2) {
      let o3 = n2[a2], s2 = this.appendFlatLineCoordinates(e19, t2, o3, r2, false, false);
      i2.push(s2), t2 = o3;
    }
    return t2;
  }
  drawCustom(e19, t2, n2, r2, i2) {
    this.beginGeometry(e19, t2, i2);
    let a2 = e19.getType(), o2 = e19.getStride(), s2 = this.coordinates.length, c2, l2, u2, d2, f2;
    switch (a2) {
      case `MultiPolygon`:
        c2 = e19.getOrientedFlatCoordinates(), d2 = [];
        let t3 = e19.getEndss();
        f2 = 0;
        for (let e20 = 0, n3 = t3.length; e20 < n3; ++e20) {
          let n4 = [];
          f2 = this.drawCustomCoordinates_(c2, f2, t3[e20], o2, n4), d2.push(n4);
        }
        this.instructions.push([Z.CUSTOM, s2, d2, e19, n2, Fn, i2]), this.hitDetectionInstructions.push([Z.CUSTOM, s2, d2, e19, r2 || n2, Fn, i2]);
        break;
      case `Polygon`:
      case `MultiLineString`:
        u2 = [], c2 = a2 == `Polygon` ? e19.getOrientedFlatCoordinates() : e19.getFlatCoordinates(), f2 = this.drawCustomCoordinates_(c2, 0, e19.getEnds(), o2, u2), this.instructions.push([Z.CUSTOM, s2, u2, e19, n2, Pn, i2]), this.hitDetectionInstructions.push([Z.CUSTOM, s2, u2, e19, r2 || n2, Pn, i2]);
        break;
      case `LineString`:
      case `Circle`:
        c2 = e19.getFlatCoordinates(), l2 = this.appendFlatLineCoordinates(c2, 0, c2.length, o2, false, false), this.instructions.push([Z.CUSTOM, s2, l2, e19, n2, Nn, i2]), this.hitDetectionInstructions.push([Z.CUSTOM, s2, l2, e19, r2 || n2, Nn, i2]);
        break;
      case `MultiPoint`:
        c2 = e19.getFlatCoordinates(), l2 = this.appendFlatPointCoordinates(c2, o2), l2 > s2 && (this.instructions.push([Z.CUSTOM, s2, l2, e19, n2, Nn, i2]), this.hitDetectionInstructions.push([Z.CUSTOM, s2, l2, e19, r2 || n2, Nn, i2]));
        break;
      case `Point`:
        c2 = e19.getFlatCoordinates(), this.coordinates.push(c2[0], c2[1]), l2 = this.coordinates.length, this.instructions.push([Z.CUSTOM, s2, l2, e19, n2, void 0, i2]), this.hitDetectionInstructions.push([Z.CUSTOM, s2, l2, e19, r2 || n2, void 0, i2]);
    }
    this.endGeometry(t2);
  }
  beginGeometry(e19, t2, n2) {
    this.beginGeometryInstruction1_ = [Z.BEGIN_GEOMETRY, t2, 0, e19, n2], this.instructions.push(this.beginGeometryInstruction1_), this.beginGeometryInstruction2_ = [Z.BEGIN_GEOMETRY, t2, 0, e19, n2], this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
  }
  finish() {
    return {instructions: this.instructions, hitDetectionInstructions: this.hitDetectionInstructions, coordinates: this.coordinates};
  }
  reverseHitDetectionInstructions() {
    let e19 = this.hitDetectionInstructions;
    e19.reverse();
    let t2, n2 = e19.length, r2, i2, a2 = -1;
    for (t2 = 0; t2 < n2; ++t2)
      r2 = e19[t2], i2 = r2[0], i2 == Z.END_GEOMETRY ? a2 = t2 : i2 == Z.BEGIN_GEOMETRY && (r2[2] = t2, m(this.hitDetectionInstructions, a2, t2), a2 = -1);
  }
  setFillStrokeStyle(e19, t2) {
    let n2 = this.state;
    if (e19) {
      let t3 = e19.getColor();
      n2.fillPatternScale = t3 && typeof t3 == `object` && `src` in t3 ? this.pixelRatio : 1, n2.fillStyle = _a(t3 || Da);
    } else
      n2.fillStyle = void 0;
    if (t2) {
      n2.strokeStyle = _a(t2.getColor() || ja);
      let e20 = t2.getLineCap();
      n2.lineCap = e20 === void 0 ? Oa : e20;
      let r2 = t2.getLineDash();
      n2.lineDash = r2 ? r2.slice() : ka, n2.lineDashOffset = t2.getLineDashOffset() || 0;
      let i2 = t2.getLineJoin();
      n2.lineJoin = i2 === void 0 ? Aa : i2;
      let a2 = t2.getWidth();
      n2.lineWidth = a2 === void 0 ? 1 : a2;
      let o2 = t2.getMiterLimit();
      n2.miterLimit = o2 === void 0 ? 10 : o2, n2.lineWidth > this.maxLineWidth && (this.maxLineWidth = n2.lineWidth, this.bufferedMaxExtent_ = null);
    } else
      n2.strokeStyle = void 0, n2.lineCap = void 0, n2.lineDash = null, n2.lineDashOffset = void 0, n2.lineJoin = void 0, n2.lineWidth = void 0, n2.miterLimit = void 0;
  }
  createFill(e19) {
    let t2 = e19.fillStyle, n2 = [Z.SET_FILL_STYLE, t2];
    return typeof t2 != `string` && n2.push(e19.fillPatternScale), n2;
  }
  applyStroke(e19) {
    this.instructions.push(this.createStroke(e19));
  }
  createStroke(e19) {
    return [Z.SET_STROKE_STYLE, e19.strokeStyle, e19.lineWidth * this.pixelRatio, e19.lineCap, e19.lineJoin, e19.miterLimit, this.applyPixelRatio(e19.lineDash), e19.lineDashOffset * this.pixelRatio];
  }
  updateFillStyle(e19, t2) {
    let n2 = e19.fillStyle;
    (typeof n2 != `string` || e19.currentFillStyle != n2) && (n2 !== void 0 && this.instructions.push(t2.call(this, e19)), e19.currentFillStyle = n2);
  }
  updateStrokeStyle(e19, t2) {
    let n2 = e19.strokeStyle, r2 = e19.lineCap, i2 = e19.lineDash, a2 = e19.lineDashOffset, o2 = e19.lineJoin, s2 = e19.lineWidth, c2 = e19.miterLimit;
    (e19.currentStrokeStyle != n2 || e19.currentLineCap != r2 || i2 != e19.currentLineDash && !g(e19.currentLineDash, i2) || e19.currentLineDashOffset != a2 || e19.currentLineJoin != o2 || e19.currentLineWidth != s2 || e19.currentMiterLimit != c2) && (n2 !== void 0 && t2.call(this, e19), e19.currentStrokeStyle = n2, e19.currentLineCap = r2, e19.currentLineDash = i2, e19.currentLineDashOffset = a2, e19.currentLineJoin = o2, e19.currentLineWidth = s2, e19.currentMiterLimit = c2);
  }
  endGeometry(e19) {
    this.beginGeometryInstruction1_[2] = this.instructions.length, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length, this.beginGeometryInstruction2_ = null;
    let t2 = [Z.END_GEOMETRY, e19];
    this.instructions.push(t2), this.hitDetectionInstructions.push(t2);
  }
  getBufferedMaxExtent() {
    if (!this.bufferedMaxExtent_ && (this.bufferedMaxExtent_ = ve(this.maxExtent), this.maxLineWidth > 0)) {
      let e19 = this.resolution * (this.maxLineWidth + 1) / 2;
      _e(this.bufferedMaxExtent_, e19, this.bufferedMaxExtent_);
    }
    return this.bufferedMaxExtent_;
  }
}, gc = class extends hc {
  constructor(e19, t2, n2, r2) {
    super(e19, t2, n2, r2), this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.anchorX_ = void 0, this.anchorY_ = void 0, this.height_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.scale_ = void 0, this.width_ = void 0, this.declutterMode_ = void 0, this.declutterImageWithText_ = void 0;
  }
  drawPoint(e19, t2, n2) {
    if (!this.image_ || this.maxExtent && !be(this.maxExtent, e19.getFlatCoordinates()))
      return;
    this.beginGeometry(e19, t2, n2);
    let r2 = e19.getFlatCoordinates(), i2 = e19.getStride(), a2 = this.coordinates.length, o2 = this.appendFlatPointCoordinates(r2, i2);
    this.instructions.push([Z.DRAW_IMAGE, a2, o2, this.image_, this.anchorX_ * this.imagePixelRatio_, this.anchorY_ * this.imagePixelRatio_, Math.ceil(this.height_ * this.imagePixelRatio_), this.opacity_, this.originX_ * this.imagePixelRatio_, this.originY_ * this.imagePixelRatio_, this.rotateWithView_, this.rotation_, [this.scale_[0] * this.pixelRatio / this.imagePixelRatio_, this.scale_[1] * this.pixelRatio / this.imagePixelRatio_], Math.ceil(this.width_ * this.imagePixelRatio_), this.declutterMode_, this.declutterImageWithText_]), this.hitDetectionInstructions.push([Z.DRAW_IMAGE, a2, o2, this.hitDetectionImage_, this.anchorX_, this.anchorY_, this.height_, 1, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_, this.width_, this.declutterMode_, this.declutterImageWithText_]), this.endGeometry(t2);
  }
  drawMultiPoint(e19, t2, n2) {
    if (!this.image_)
      return;
    this.beginGeometry(e19, t2, n2);
    let r2 = e19.getFlatCoordinates(), i2 = [];
    for (let t3 = 0, n3 = r2.length; t3 < n3; t3 += e19.getStride())
      (!this.maxExtent || be(this.maxExtent, r2.slice(t3, t3 + 2))) && i2.push(r2[t3], r2[t3 + 1]);
    let a2 = this.coordinates.length, o2 = this.appendFlatPointCoordinates(i2, 2);
    this.instructions.push([Z.DRAW_IMAGE, a2, o2, this.image_, this.anchorX_ * this.imagePixelRatio_, this.anchorY_ * this.imagePixelRatio_, Math.ceil(this.height_ * this.imagePixelRatio_), this.opacity_, this.originX_ * this.imagePixelRatio_, this.originY_ * this.imagePixelRatio_, this.rotateWithView_, this.rotation_, [this.scale_[0] * this.pixelRatio / this.imagePixelRatio_, this.scale_[1] * this.pixelRatio / this.imagePixelRatio_], Math.ceil(this.width_ * this.imagePixelRatio_), this.declutterMode_, this.declutterImageWithText_]), this.hitDetectionInstructions.push([Z.DRAW_IMAGE, a2, o2, this.hitDetectionImage_, this.anchorX_, this.anchorY_, this.height_, 1, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_, this.width_, this.declutterMode_, this.declutterImageWithText_]), this.endGeometry(t2);
  }
  finish() {
    return this.reverseHitDetectionInstructions(), this.anchorX_ = void 0, this.anchorY_ = void 0, this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.height_ = void 0, this.scale_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.width_ = void 0, super.finish();
  }
  setImageStyle(e19, t2) {
    let n2 = e19.getAnchor(), r2 = e19.getSize(), i2 = e19.getOrigin();
    this.imagePixelRatio_ = e19.getPixelRatio(this.pixelRatio), this.anchorX_ = n2[0], this.anchorY_ = n2[1], this.hitDetectionImage_ = e19.getHitDetectionImage(), this.image_ = e19.getImage(this.pixelRatio), this.height_ = r2[1], this.opacity_ = e19.getOpacity(), this.originX_ = i2[0], this.originY_ = i2[1], this.rotateWithView_ = e19.getRotateWithView(), this.rotation_ = e19.getRotation(), this.scale_ = e19.getScaleArray(), this.width_ = r2[0], this.declutterMode_ = e19.getDeclutterMode(), this.declutterImageWithText_ = t2;
  }
}, _c = class extends hc {
  constructor(e19, t2, n2, r2) {
    super(e19, t2, n2, r2);
  }
  drawFlatCoordinates_(e19, t2, n2, r2) {
    let i2 = this.coordinates.length, a2 = this.appendFlatLineCoordinates(e19, t2, n2, r2, false, false), o2 = [Z.MOVE_TO_LINE_TO, i2, a2];
    return this.instructions.push(o2), this.hitDetectionInstructions.push(o2), n2;
  }
  drawLineString(e19, t2, n2) {
    let r2 = this.state, i2 = r2.strokeStyle, a2 = r2.lineWidth;
    if (i2 === void 0 || a2 === void 0)
      return;
    this.updateStrokeStyle(r2, this.applyStroke), this.beginGeometry(e19, t2, n2), this.hitDetectionInstructions.push([Z.SET_STROKE_STYLE, r2.strokeStyle, r2.lineWidth, r2.lineCap, r2.lineJoin, r2.miterLimit, ka, 0], fc);
    let o2 = e19.getFlatCoordinates(), s2 = e19.getStride();
    this.drawFlatCoordinates_(o2, 0, o2.length, s2), this.hitDetectionInstructions.push(dc), this.endGeometry(t2);
  }
  drawMultiLineString(e19, t2, n2) {
    let r2 = this.state, i2 = r2.strokeStyle, a2 = r2.lineWidth;
    if (i2 === void 0 || a2 === void 0)
      return;
    this.updateStrokeStyle(r2, this.applyStroke), this.beginGeometry(e19, t2, n2), this.hitDetectionInstructions.push([Z.SET_STROKE_STYLE, r2.strokeStyle, r2.lineWidth, r2.lineCap, r2.lineJoin, r2.miterLimit, ka, 0], fc);
    let o2 = e19.getEnds(), s2 = e19.getFlatCoordinates(), c2 = e19.getStride(), l2 = 0;
    for (let e20 = 0, t3 = o2.length; e20 < t3; ++e20)
      l2 = this.drawFlatCoordinates_(s2, l2, o2[e20], c2);
    this.hitDetectionInstructions.push(dc), this.endGeometry(t2);
  }
  finish() {
    let e19 = this.state;
    return e19.lastStroke != null && e19.lastStroke != this.coordinates.length && this.instructions.push(dc), this.reverseHitDetectionInstructions(), this.state = null, super.finish();
  }
  applyStroke(e19) {
    e19.lastStroke != null && e19.lastStroke != this.coordinates.length && (this.instructions.push(dc), e19.lastStroke = this.coordinates.length), e19.lastStroke = 0, super.applyStroke(e19), this.instructions.push(fc);
  }
}, vc = class extends hc {
  constructor(e19, t2, n2, r2) {
    super(e19, t2, n2, r2);
  }
  drawFlatCoordinatess_(e19, t2, n2, r2) {
    let i2 = this.state, a2 = i2.fillStyle !== void 0, o2 = i2.strokeStyle !== void 0, s2 = n2.length;
    this.instructions.push(fc), this.hitDetectionInstructions.push(fc);
    for (let i3 = 0; i3 < s2; ++i3) {
      let a3 = n2[i3], s3 = this.coordinates.length, c2 = this.appendFlatLineCoordinates(e19, t2, a3, r2, true, !o2), l2 = [Z.MOVE_TO_LINE_TO, s3, c2];
      this.instructions.push(l2), this.hitDetectionInstructions.push(l2), o2 && (this.instructions.push(pc), this.hitDetectionInstructions.push(pc)), t2 = a3;
    }
    return a2 && (this.instructions.push(uc), this.hitDetectionInstructions.push(uc)), o2 && (this.instructions.push(dc), this.hitDetectionInstructions.push(dc)), t2;
  }
  drawCircle(e19, t2, n2) {
    let r2 = this.state, i2 = r2.fillStyle, a2 = r2.strokeStyle;
    if (i2 === void 0 && a2 === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(e19, t2, n2), r2.fillStyle !== void 0 && this.hitDetectionInstructions.push([Z.SET_FILL_STYLE, Da]), r2.strokeStyle !== void 0 && this.hitDetectionInstructions.push([Z.SET_STROKE_STYLE, r2.strokeStyle, r2.lineWidth, r2.lineCap, r2.lineJoin, r2.miterLimit, ka, 0]);
    let o2 = e19.getFlatCoordinates(), s2 = e19.getStride(), c2 = this.coordinates.length;
    this.appendFlatLineCoordinates(o2, 0, o2.length, s2, false, false);
    let l2 = [Z.CIRCLE, c2];
    this.instructions.push(fc, l2), this.hitDetectionInstructions.push(fc, l2), r2.fillStyle !== void 0 && (this.instructions.push(uc), this.hitDetectionInstructions.push(uc)), r2.strokeStyle !== void 0 && (this.instructions.push(dc), this.hitDetectionInstructions.push(dc)), this.endGeometry(t2);
  }
  drawPolygon(e19, t2, n2) {
    let r2 = this.state, i2 = r2.fillStyle, a2 = r2.strokeStyle;
    if (i2 === void 0 && a2 === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(e19, t2, n2), r2.fillStyle !== void 0 && this.hitDetectionInstructions.push([Z.SET_FILL_STYLE, Da]), r2.strokeStyle !== void 0 && this.hitDetectionInstructions.push([Z.SET_STROKE_STYLE, r2.strokeStyle, r2.lineWidth, r2.lineCap, r2.lineJoin, r2.miterLimit, ka, 0]);
    let o2 = e19.getEnds(), s2 = e19.getOrientedFlatCoordinates(), c2 = e19.getStride();
    this.drawFlatCoordinatess_(s2, 0, o2, c2), this.endGeometry(t2);
  }
  drawMultiPolygon(e19, t2, n2) {
    let r2 = this.state, i2 = r2.fillStyle, a2 = r2.strokeStyle;
    if (i2 === void 0 && a2 === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(e19, t2, n2), r2.fillStyle !== void 0 && this.hitDetectionInstructions.push([Z.SET_FILL_STYLE, Da]), r2.strokeStyle !== void 0 && this.hitDetectionInstructions.push([Z.SET_STROKE_STYLE, r2.strokeStyle, r2.lineWidth, r2.lineCap, r2.lineJoin, r2.miterLimit, ka, 0]);
    let o2 = e19.getEndss(), s2 = e19.getOrientedFlatCoordinates(), c2 = e19.getStride(), l2 = 0;
    for (let e20 = 0, t3 = o2.length; e20 < t3; ++e20)
      l2 = this.drawFlatCoordinatess_(s2, l2, o2[e20], c2);
    this.endGeometry(t2);
  }
  finish() {
    this.reverseHitDetectionInstructions(), this.state = null;
    let e19 = this.tolerance;
    if (e19 !== 0) {
      let t2 = this.coordinates;
      for (let n2 = 0, r2 = t2.length; n2 < r2; ++n2)
        t2[n2] = An(t2[n2], e19);
    }
    return super.finish();
  }
  setFillStrokeStyles_() {
    let e19 = this.state;
    e19.fillStyle !== void 0 && this.updateFillStyle(e19, this.createFill), e19.strokeStyle !== void 0 && this.updateStrokeStyle(e19, this.applyStroke);
  }
};
function yc(e19, t2, n2, r2, i2) {
  let a2 = [], o2 = n2, s2 = 0, c2 = t2.slice(n2, 2);
  for (; s2 < e19 && o2 + i2 < r2; ) {
    let [n3, r3] = c2.slice(-2), l2 = t2[o2 + i2], u2 = t2[o2 + i2 + 1], d2 = Math.sqrt((l2 - n3) * (l2 - n3) + (u2 - r3) * (u2 - r3));
    if (s2 += d2, s2 >= e19) {
      let t3 = (e19 - s2 + d2) / d2, f2 = Tt(n3, l2, t3), p2 = Tt(r3, u2, t3);
      c2.push(f2, p2), a2.push(c2), c2 = [f2, p2], s2 == e19 && (o2 += i2), s2 = 0;
    } else if (s2 < e19)
      c2.push(t2[o2 + i2], t2[o2 + i2 + 1]), o2 += i2;
    else {
      let e20 = d2 - s2, t3 = Tt(n3, l2, e20 / d2), f2 = Tt(r3, u2, e20 / d2);
      c2.push(t3, f2), a2.push(c2), c2 = [t3, f2], s2 = 0, o2 += i2;
    }
  }
  return s2 > 0 && a2.push(c2), a2;
}
function bc(e19, t2, n2, r2, i2) {
  let a2 = n2, o2 = n2, s2 = 0, c2 = 0, l2 = n2, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2;
  for (d2 = n2; d2 < r2; d2 += i2) {
    let n3 = t2[d2], r3 = t2[d2 + 1];
    m2 !== void 0 && (v2 = n3 - m2, y2 = r3 - h2, p2 = Math.sqrt(v2 * v2 + y2 * y2), g2 !== void 0 && (c2 += f2, u2 = Math.acos((g2 * v2 + _2 * y2) / (f2 * p2)), u2 > e19 && (c2 > s2 && (s2 = c2, a2 = l2, o2 = d2), c2 = 0, l2 = d2 - i2)), f2 = p2, g2 = v2, _2 = y2), m2 = n3, h2 = r3;
  }
  return c2 += p2, c2 > s2 ? [l2, d2] : [a2, o2];
}
var xc = {left: 0, center: 0.5, right: 1, top: 0, middle: 0.5, hanging: 0.2, alphabetic: 0.8, ideographic: 0.8, bottom: 1}, Sc = {Circle: vc, Default: hc, Image: gc, LineString: _c, Polygon: vc, Text: class extends hc {
  constructor(e19, t2, n2, r2) {
    super(e19, t2, n2, r2), this.labels_ = null, this.text_ = ``, this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = void 0, this.textRotation_ = 0, this.textFillState_ = null, this.fillStates = {}, this.fillStates[Da] = {fillStyle: Da}, this.textStrokeState_ = null, this.strokeStates = {}, this.textState_ = {}, this.textStates = {}, this.textKey_ = ``, this.fillKey_ = ``, this.strokeKey_ = ``, this.declutterMode_ = void 0, this.declutterImageWithText_ = void 0;
  }
  finish() {
    let e19 = super.finish();
    return e19.textStates = this.textStates, e19.fillStates = this.fillStates, e19.strokeStates = this.strokeStates, e19;
  }
  drawText(e19, t2, n2) {
    let r2 = this.textFillState_, i2 = this.textStrokeState_, a2 = this.textState_;
    if (this.text_ === `` || !a2 || !r2 && !i2)
      return;
    let o2 = this.coordinates, s2 = o2.length, c2 = e19.getType(), l2 = null, u2 = e19.getStride();
    if (a2.placement === `line` && (c2 == `LineString` || c2 == `MultiLineString` || c2 == `Polygon` || c2 == `MultiPolygon`)) {
      if (!Ke(this.maxExtent, e19.getExtent()))
        return;
      let r3;
      if (l2 = e19.getFlatCoordinates(), c2 == `LineString`)
        r3 = [l2.length];
      else if (c2 == `MultiLineString`)
        r3 = e19.getEnds();
      else if (c2 == `Polygon`)
        r3 = e19.getEnds().slice(0, 1);
      else if (c2 == `MultiPolygon`) {
        let t3 = e19.getEndss();
        r3 = [];
        for (let e20 = 0, n3 = t3.length; e20 < n3; ++e20)
          r3.push(t3[e20][0]);
      }
      this.beginGeometry(e19, t2, n2);
      let i3 = a2.repeat, d2 = i3 ? void 0 : a2.textAlign, f2 = 0;
      for (let e20 = 0, t3 = r3.length; e20 < t3; ++e20) {
        let t4;
        t4 = i3 ? yc(i3 * this.resolution, l2, f2, r3[e20], u2) : [l2.slice(f2, r3[e20])];
        for (let n3 = 0, i4 = t4.length; n3 < i4; ++n3) {
          let i5 = t4[n3], c3 = 0, l3 = i5.length;
          if (d2 == null) {
            let e21 = bc(a2.maxAngle, i5, 0, i5.length, 2);
            c3 = e21[0], l3 = e21[1];
          }
          for (let e21 = c3; e21 < l3; e21 += u2)
            o2.push(i5[e21], i5[e21 + 1]);
          let p2 = o2.length;
          f2 = r3[e20], this.drawChars_(s2, p2), s2 = p2;
        }
      }
      this.endGeometry(t2);
    } else {
      let r3 = a2.overflow ? null : [];
      switch (c2) {
        case `Point`:
        case `MultiPoint`:
          l2 = e19.getFlatCoordinates();
          break;
        case `LineString`:
          l2 = e19.getFlatMidpoint();
          break;
        case `Circle`:
          l2 = e19.getCenter();
          break;
        case `MultiLineString`:
          l2 = e19.getFlatMidpoints(), u2 = 2;
          break;
        case `Polygon`:
          l2 = e19.getFlatInteriorPoint(), a2.overflow || r3.push(l2[2] / this.resolution), u2 = 3;
          break;
        case `MultiPolygon`:
          let t3 = e19.getFlatInteriorPoints();
          l2 = [];
          for (let e20 = 0, n3 = t3.length; e20 < n3; e20 += 3)
            a2.overflow || r3.push(t3[e20 + 2] / this.resolution), l2.push(t3[e20], t3[e20 + 1]);
          if (l2.length === 0)
            return;
          u2 = 2;
      }
      let i3 = this.appendFlatPointCoordinates(l2, u2);
      if (i3 === s2)
        return;
      if (r3 && (i3 - s2) / 2 !== l2.length / u2) {
        let e20 = s2 / 2;
        r3 = r3.filter((t3, n3) => {
          let r4 = o2[(e20 + n3) * 2] === l2[n3 * u2] && o2[(e20 + n3) * 2 + 1] === l2[n3 * u2 + 1];
          return r4 || --e20, r4;
        });
      }
      this.saveTextStates_(), (a2.backgroundFill || a2.backgroundStroke) && (this.setFillStrokeStyle(a2.backgroundFill, a2.backgroundStroke), a2.backgroundFill && this.updateFillStyle(this.state, this.createFill), a2.backgroundStroke && (this.updateStrokeStyle(this.state, this.applyStroke), this.hitDetectionInstructions.push(this.createStroke(this.state)))), this.beginGeometry(e19, t2, n2);
      let d2 = a2.padding;
      if (d2 != Pa && (a2.scale[0] < 0 || a2.scale[1] < 0)) {
        let e20 = a2.padding[0], t3 = a2.padding[1], n3 = a2.padding[2], r4 = a2.padding[3];
        a2.scale[0] < 0 && (t3 = -t3, r4 = -r4), a2.scale[1] < 0 && (e20 = -e20, n3 = -n3), d2 = [e20, t3, n3, r4];
      }
      let f2 = this.pixelRatio;
      this.instructions.push([Z.DRAW_IMAGE, s2, i3, null, NaN, NaN, NaN, 1, 0, 0, this.textRotateWithView_, this.textRotation_, [1, 1], NaN, this.declutterMode_, this.declutterImageWithText_, d2 == Pa ? Pa : d2.map(function(e20) {
        return e20 * f2;
      }), !!a2.backgroundFill, !!a2.backgroundStroke, this.text_, this.textKey_, this.strokeKey_, this.fillKey_, this.textOffsetX_, this.textOffsetY_, r3]);
      let p2 = 1 / f2, m2 = this.state.fillStyle;
      a2.backgroundFill && (this.state.fillStyle = Da, this.hitDetectionInstructions.push(this.createFill(this.state))), this.hitDetectionInstructions.push([Z.DRAW_IMAGE, s2, i3, null, NaN, NaN, NaN, 1, 0, 0, this.textRotateWithView_, this.textRotation_, [p2, p2], NaN, this.declutterMode_, this.declutterImageWithText_, d2, !!a2.backgroundFill, !!a2.backgroundStroke, this.text_, this.textKey_, this.strokeKey_, this.fillKey_ ? Da : this.fillKey_, this.textOffsetX_, this.textOffsetY_, r3]), a2.backgroundFill && (this.state.fillStyle = m2, this.hitDetectionInstructions.push(this.createFill(this.state))), this.endGeometry(t2);
    }
  }
  saveTextStates_() {
    let e19 = this.textStrokeState_, t2 = this.textState_, n2 = this.textFillState_, r2 = this.strokeKey_;
    e19 && (r2 in this.strokeStates || (this.strokeStates[r2] = {strokeStyle: e19.strokeStyle, lineCap: e19.lineCap, lineDashOffset: e19.lineDashOffset, lineWidth: e19.lineWidth, lineJoin: e19.lineJoin, miterLimit: e19.miterLimit, lineDash: e19.lineDash}));
    let i2 = this.textKey_;
    i2 in this.textStates || (this.textStates[i2] = {font: t2.font, textAlign: t2.textAlign || `center`, justify: t2.justify, textBaseline: t2.textBaseline || `middle`, scale: t2.scale});
    let a2 = this.fillKey_;
    n2 && (a2 in this.fillStates || (this.fillStates[a2] = {fillStyle: n2.fillStyle}));
  }
  drawChars_(e19, t2) {
    let n2 = this.textStrokeState_, r2 = this.textState_, i2 = this.strokeKey_, a2 = this.textKey_, o2 = this.fillKey_;
    this.saveTextStates_();
    let s2 = this.pixelRatio, c2 = xc[r2.textBaseline], l2 = this.textOffsetY_ * s2, u2 = this.text_, d2 = n2 ? n2.lineWidth * Math.abs(r2.scale[0]) / 2 : 0;
    this.instructions.push([Z.DRAW_CHARS, e19, t2, c2, r2.overflow, o2, r2.maxAngle, s2, l2, i2, d2 * s2, u2, a2, 1, this.declutterMode_]), this.hitDetectionInstructions.push([Z.DRAW_CHARS, e19, t2, c2, r2.overflow, o2 && Da, r2.maxAngle, s2, l2, i2, d2 * s2, u2, a2, 1 / s2, this.declutterMode_]);
  }
  setTextStyle(e19, t2) {
    let n2, r2, i2;
    if (!e19)
      this.text_ = ``;
    else {
      let t3 = e19.getFill();
      t3 ? (r2 = this.textFillState_, r2 || (r2 = {}, this.textFillState_ = r2), r2.fillStyle = _a(t3.getColor() || `#000`)) : (r2 = null, this.textFillState_ = r2);
      let a2 = e19.getStroke();
      if (!a2)
        i2 = null, this.textStrokeState_ = i2;
      else {
        i2 = this.textStrokeState_, i2 || (i2 = {}, this.textStrokeState_ = i2);
        let e20 = a2.getLineDash(), t4 = a2.getLineDashOffset(), n3 = a2.getWidth(), r3 = a2.getMiterLimit();
        i2.lineCap = a2.getLineCap() || `round`, i2.lineDash = e20 ? e20.slice() : ka, i2.lineDashOffset = t4 === void 0 ? 0 : t4, i2.lineJoin = a2.getLineJoin() || `round`, i2.lineWidth = n3 === void 0 ? 1 : n3, i2.miterLimit = r3 === void 0 ? 10 : r3, i2.strokeStyle = _a(a2.getColor() || `#000`);
      }
      n2 = this.textState_;
      let o2 = e19.getFont() || `10px sans-serif`;
      za(o2);
      let s2 = e19.getScaleArray();
      n2.overflow = e19.getOverflow(), n2.font = o2, n2.maxAngle = e19.getMaxAngle(), n2.placement = e19.getPlacement(), n2.textAlign = e19.getTextAlign(), n2.repeat = e19.getRepeat(), n2.justify = e19.getJustify(), n2.textBaseline = e19.getTextBaseline() || `middle`, n2.backgroundFill = e19.getBackgroundFill(), n2.backgroundStroke = e19.getBackgroundStroke(), n2.padding = e19.getPadding() || Pa, n2.scale = s2 === void 0 ? [1, 1] : s2;
      let c2 = e19.getOffsetX(), l2 = e19.getOffsetY(), u2 = e19.getRotateWithView(), d2 = e19.getRotation();
      this.text_ = e19.getText() || ``, this.textOffsetX_ = c2 === void 0 ? 0 : c2, this.textOffsetY_ = l2 === void 0 ? 0 : l2, this.textRotateWithView_ = u2 !== void 0 && u2, this.textRotation_ = d2 === void 0 ? 0 : d2, this.strokeKey_ = i2 ? (typeof i2.strokeStyle == `string` ? i2.strokeStyle : j(i2.strokeStyle)) + i2.lineCap + i2.lineDashOffset + `|` + i2.lineWidth + i2.lineJoin + i2.miterLimit + `[` + i2.lineDash.join() + `]` : ``, this.textKey_ = n2.font + n2.scale + (n2.textAlign || `?`) + (n2.repeat || `?`) + (n2.justify || `?`) + (n2.textBaseline || `?`), this.fillKey_ = r2 && r2.fillStyle ? typeof r2.fillStyle == `string` ? r2.fillStyle : `|` + j(r2.fillStyle) : ``;
    }
    this.declutterMode_ = e19.getDeclutterMode(), this.declutterImageWithText_ = t2;
  }
}}, Cc = class {
  constructor(e19, t2, n2, r2) {
    this.tolerance_ = e19, this.maxExtent_ = t2, this.pixelRatio_ = r2, this.resolution_ = n2, this.buildersByZIndex_ = {};
  }
  finish() {
    let e19 = {};
    for (let t2 in this.buildersByZIndex_) {
      e19[t2] = e19[t2] || {};
      let n2 = this.buildersByZIndex_[t2];
      for (let r2 in n2) {
        let i2 = n2[r2].finish();
        e19[t2][r2] = i2;
      }
    }
    return e19;
  }
  getBuilder(e19, t2) {
    let n2 = e19 === void 0 ? `0` : e19.toString(), r2 = this.buildersByZIndex_[n2];
    r2 === void 0 && (r2 = {}, this.buildersByZIndex_[n2] = r2);
    let i2 = r2[t2];
    if (i2 === void 0) {
      let e20 = Sc[t2];
      i2 = new e20(this.tolerance_, this.maxExtent_, this.resolution_, this.pixelRatio_), r2[t2] = i2;
    }
    return i2;
  }
}, wc = class extends ee {
  constructor(e19) {
    super(), this.ready = true, this.boundHandleImageChange_ = this.handleImageChange_.bind(this), this.layer_ = e19;
  }
  getFeatures(e19) {
    return A();
  }
  getData(e19) {
    return null;
  }
  prepareFrame(e19) {
    return A();
  }
  renderFrame(e19, t2) {
    return A();
  }
  loadedTileCallback(e19, t2, n2) {
    e19[t2] || (e19[t2] = {}), e19[t2][n2.tileCoord.toString()] = n2;
  }
  createLoadedTileFinder(e19, t2, n2) {
    return (r2, i2) => {
      let a2 = this.loadedTileCallback.bind(this, n2, r2);
      return e19.forEachLoadedTile(t2, r2, i2, a2);
    };
  }
  forEachFeatureAtCoordinate(e19, t2, n2, r2, i2) {
  }
  getLayer() {
    return this.layer_;
  }
  handleFontsChanged() {
  }
  handleImageChange_(e19) {
    let t2 = e19.target;
    (t2.getState() === z.LOADED || t2.getState() === z.ERROR) && this.renderIfReadyAndVisible();
  }
  loadImage(e19) {
    let t2 = e19.getState();
    return t2 != z.LOADED && t2 != z.ERROR && e19.addEventListener(E.CHANGE, this.boundHandleImageChange_), t2 == z.IDLE && (e19.load(), t2 = e19.getState()), t2 == z.LOADED;
  }
  renderIfReadyAndVisible() {
    let e19 = this.getLayer();
    e19 && e19.getVisible() && e19.getSourceState() === `ready` && e19.changed();
  }
  renderDeferred(e19) {
  }
  disposeInternal() {
    delete this.layer_, super.disposeInternal();
  }
}, Tc = class extends c {
  constructor(e19, t2, n2, r2) {
    super(e19), this.inversePixelTransform = t2, this.frameState = n2, this.context = r2;
  }
}, Ec = class {
  constructor() {
    this.instructions_ = [], this.zIndex = 0, this.offset_ = 0, this.context_ = new Proxy(Ji(), {get: (e19, t2) => {
      if (typeof Ji()[t2] == `function`)
        return this.instructions_[this.zIndex + this.offset_] || (this.instructions_[this.zIndex + this.offset_] = []), this.instructions_[this.zIndex + this.offset_].push(t2), this.pushMethodArgs_;
    }, set: (e19, t2, n2) => (this.instructions_[this.zIndex + this.offset_] || (this.instructions_[this.zIndex + this.offset_] = []), this.instructions_[this.zIndex + this.offset_].push(t2, n2), true)});
  }
  pushMethodArgs_ = (...e19) => (this.instructions_[this.zIndex + this.offset_].push(e19), this);
  pushFunction(e19) {
    this.instructions_[this.zIndex + this.offset_].push(e19);
  }
  getContext() {
    return this.context_;
  }
  draw(e19) {
    this.instructions_.forEach((t2) => {
      for (let n2 = 0, r2 = t2.length; n2 < r2; ++n2) {
        let r3 = t2[n2];
        if (typeof r3 == `function`) {
          r3(e19);
          continue;
        }
        let i2 = t2[++n2];
        if (typeof e19[r3] == `function`)
          e19[r3](...i2);
        else {
          if (typeof i2 == `function`) {
            e19[r3] = i2(e19);
            continue;
          }
          e19[r3] = i2;
        }
      }
    });
  }
  clear() {
    this.instructions_.length = 0, this.zIndex = 0, this.offset_ = 0;
  }
  offset() {
    this.offset_ = this.instructions_.length, this.zIndex = 0;
  }
}, Dc = [], Oc = null;
function kc() {
  Oc = Ki(1, 1, void 0, {willReadFrequently: true});
}
var Ac = class extends wc {
  constructor(e19) {
    super(e19), this.container = null, this.renderedResolution, this.tempTransform = le(), this.pixelTransform = le(), this.inversePixelTransform = le(), this.context = null, this.deferredContext_ = null, this.containerReused = false, this.pixelContext_ = null, this.frameState = null;
  }
  getImageData(e19, t2, n2) {
    Oc || kc(), Oc.clearRect(0, 0, 1, 1);
    let r2;
    try {
      Oc.drawImage(e19, t2, n2, 1, 1, 0, 0, 1, 1), r2 = Oc.getImageData(0, 0, 1, 1).data;
    } catch {
      return Oc = null, null;
    }
    return r2;
  }
  getBackground(e19) {
    let t2 = this.getLayer().getBackground();
    return typeof t2 == `function` && (t2 = t2(e19.viewState.resolution)), t2 || void 0;
  }
  useContainer(e19, t2, n2) {
    let r2 = this.getLayer().getClassName(), i2, a2;
    if (e19 && e19.className === r2 && (!n2 || e19 && e19.style.backgroundColor && g(Pi(e19.style.backgroundColor), Pi(n2)))) {
      let t3 = e19.firstElementChild;
      t3 instanceof HTMLCanvasElement && (a2 = t3.getContext(`2d`));
    }
    if (a2 && a2.canvas.style.transform === t2 ? (this.container = e19, this.context = a2, this.containerReused = true) : this.containerReused ? (this.container = null, this.context = null, this.containerReused = false) : this.container && (this.container.style.backgroundColor = null), !this.container) {
      i2 = document.createElement(`div`), i2.className = r2;
      let e20 = i2.style;
      e20.position = `absolute`, e20.width = `100%`, e20.height = `100%`, a2 = Ki();
      let t3 = a2.canvas;
      i2.appendChild(t3), e20 = t3.style, e20.position = `absolute`, e20.left = `0`, e20.transformOrigin = `top left`, this.container = i2, this.context = a2;
    }
    !this.containerReused && n2 && !this.container.style.backgroundColor && (this.container.style.backgroundColor = n2);
  }
  clipUnrotated(e19, t2, n2) {
    let r2 = We(n2), i2 = Ge(n2), a2 = Le(n2), o2 = Ie(n2);
    F(t2.coordinateToPixelTransform, r2), F(t2.coordinateToPixelTransform, i2), F(t2.coordinateToPixelTransform, a2), F(t2.coordinateToPixelTransform, o2);
    let s2 = this.inversePixelTransform;
    F(s2, r2), F(s2, i2), F(s2, a2), F(s2, o2), e19.save(), e19.beginPath(), e19.moveTo(Math.round(r2[0]), Math.round(r2[1])), e19.lineTo(Math.round(i2[0]), Math.round(i2[1])), e19.lineTo(Math.round(a2[0]), Math.round(a2[1])), e19.lineTo(Math.round(o2[0]), Math.round(o2[1])), e19.clip();
  }
  prepareContainer(e19, t2) {
    let n2 = e19.extent, r2 = e19.viewState.resolution, i2 = e19.viewState.rotation, a2 = e19.pixelRatio, o2 = Math.round(L(n2) / r2 * a2), s2 = Math.round(He(n2) / r2 * a2);
    de(this.pixelTransform, e19.size[0] / 2, e19.size[1] / 2, 1 / a2, 1 / a2, i2, -o2 / 2, -s2 / 2), fe(this.inversePixelTransform, this.pixelTransform);
    let c2 = he(this.pixelTransform);
    if (this.useContainer(t2, c2, this.getBackground(e19)), !this.containerReused) {
      let e20 = this.context.canvas;
      e20.width != o2 || e20.height != s2 ? (e20.width = o2, e20.height = s2) : this.context.clearRect(0, 0, o2, s2), c2 !== e20.style.transform && (e20.style.transform = c2);
    }
  }
  dispatchRenderEvent_(e19, t2, n2) {
    let r2 = this.getLayer();
    if (r2.hasListener(e19)) {
      let i2 = new Tc(e19, this.inversePixelTransform, n2, t2);
      r2.dispatchEvent(i2);
    }
  }
  preRender(e19, t2) {
    this.frameState = t2, t2.declutter || this.dispatchRenderEvent_(nr.PRERENDER, e19, t2);
  }
  postRender(e19, t2) {
    t2.declutter || this.dispatchRenderEvent_(nr.POSTRENDER, e19, t2);
  }
  renderDeferredInternal(e19) {
  }
  getRenderContext(e19) {
    return e19.declutter && !this.deferredContext_ && (this.deferredContext_ = new Ec()), e19.declutter ? this.deferredContext_.getContext() : this.context;
  }
  renderDeferred(e19) {
    e19.declutter && (this.dispatchRenderEvent_(nr.PRERENDER, this.context, e19), e19.declutter && this.deferredContext_ && (this.deferredContext_.draw(this.context), this.deferredContext_.clear()), this.renderDeferredInternal(e19), this.dispatchRenderEvent_(nr.POSTRENDER, this.context, e19));
  }
  getRenderTransform(e19, t2, n2, r2, i2, a2, o2) {
    let s2 = i2 / 2, c2 = a2 / 2, l2 = r2 / t2, u2 = -l2, d2 = -e19[0] + o2, f2 = -e19[1];
    return de(this.tempTransform, s2, c2, l2, u2, -n2, d2, f2);
  }
  disposeInternal() {
    delete this.frameState, super.disposeInternal();
  }
};
function jc(e19, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2) {
  let f2 = e19[t2], p2 = e19[t2 + 1], m2 = 0, h2 = 0, g2 = 0, _2 = 0;
  function v2() {
    m2 = f2, h2 = p2, t2 += r2, f2 = e19[t2], p2 = e19[t2 + 1], _2 += g2, g2 = Math.sqrt((f2 - m2) * (f2 - m2) + (p2 - h2) * (p2 - h2));
  }
  do
    v2();
  while (t2 < n2 - r2 && _2 + g2 < a2);
  let y2 = g2 === 0 ? 0 : (a2 - _2) / g2, b2 = Tt(m2, f2, y2), x2 = Tt(h2, p2, y2), S2 = t2 - r2, C2 = _2, w2 = a2 + s2 * c2(l2, i2, u2);
  for (; t2 < n2 - r2 && _2 + g2 < w2; )
    v2();
  y2 = g2 === 0 ? 0 : (w2 - _2) / g2;
  let T2 = Tt(m2, f2, y2), E2 = Tt(h2, p2, y2), D2;
  if (d2) {
    let e20 = [b2, x2, T2, E2];
    dn(e20, 0, 4, 2, d2, e20, e20), D2 = e20[0] > e20[2];
  } else
    D2 = b2 > T2;
  let O2 = Math.PI, k2 = [], ee2 = S2 + r2 === t2;
  t2 = S2, g2 = 0, _2 = C2, f2 = e19[t2], p2 = e19[t2 + 1];
  let te2;
  if (ee2)
    return v2(), te2 = Math.atan2(p2 - h2, f2 - m2), D2 && (te2 += te2 > 0 ? -O2 : O2), k2[0] = [(T2 + b2) / 2, (E2 + x2) / 2, (w2 - a2) / 2, te2, i2], k2;
  i2 = i2.replace(/\n/g, ` `);
  for (let e20 = 0, d3 = i2.length; e20 < d3; ) {
    v2();
    let b3 = Math.atan2(p2 - h2, f2 - m2);
    if (D2 && (b3 += b3 > 0 ? -O2 : O2), te2 !== void 0) {
      let e21 = b3 - te2;
      if (e21 += e21 > O2 ? -2 * O2 : e21 < -O2 ? 2 * O2 : 0, Math.abs(e21) > o2)
        return null;
    }
    te2 = b3;
    let x3 = e20, S3 = 0;
    for (; e20 < d3; ++e20) {
      let o3 = D2 ? d3 - e20 - 1 : e20, f3 = s2 * c2(l2, i2[o3], u2);
      if (t2 + r2 < n2 && _2 + g2 < a2 + S3 + f3 / 2)
        break;
      S3 += f3;
    }
    if (e20 === x3)
      continue;
    let C3 = D2 ? i2.substring(d3 - x3, d3 - e20) : i2.substring(x3, e20);
    y2 = g2 === 0 ? 0 : (a2 + S3 / 2 - _2) / g2;
    let w3 = Tt(m2, f2, y2), T3 = Tt(h2, p2, y2);
    k2.push([w3, T3, S3 / 2, b3, C3]), a2 += S3;
  }
  return k2;
}
var Mc = we(), Nc = [], Pc = [], Fc = [], Ic = [];
function Lc(e19) {
  return e19[3].declutterBox;
}
var Rc = RegExp(`[\u0591-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFC\u0800-\u0FFF\uE800-\uEFFF]`);
function zc(e19, t2) {
  return t2 === `start` ? t2 = Rc.test(e19) ? `right` : `left` : t2 === `end` && (t2 = Rc.test(e19) ? `left` : `right`), xc[t2];
}
function Bc(e19, t2, n2) {
  return n2 > 0 && e19.push(`
`, ``), e19.push(t2, ``), e19;
}
var Vc = class {
  constructor(e19, t2, n2, r2, i2) {
    this.overlaps = n2, this.pixelRatio = t2, this.resolution = e19, this.alignAndScaleFill_, this.instructions = r2.instructions, this.coordinates = r2.coordinates, this.coordinateCache_ = {}, this.renderedTransform_ = le(), this.hitDetectionInstructions = r2.hitDetectionInstructions, this.pixelCoordinates_ = null, this.viewRotation_ = 0, this.fillStates = r2.fillStates || {}, this.strokeStates = r2.strokeStates || {}, this.textStates = r2.textStates || {}, this.widths_ = {}, this.labels_ = {}, this.zIndexContext_ = i2 ? new Ec() : null;
  }
  getZIndexContext() {
    return this.zIndexContext_;
  }
  createLabel(e19, t2, n2, r2) {
    let i2 = e19 + t2 + n2 + r2;
    if (this.labels_[i2])
      return this.labels_[i2];
    let a2 = r2 ? this.strokeStates[r2] : null, o2 = n2 ? this.fillStates[n2] : null, s2 = this.textStates[t2], c2 = this.pixelRatio, l2 = [s2.scale[0] * c2, s2.scale[1] * c2], u2 = Array.isArray(e19), d2 = s2.justify ? xc[s2.justify] : zc(Array.isArray(e19) ? e19[0] : e19, s2.textAlign || `center`), f2 = r2 && a2.lineWidth ? a2.lineWidth : 0, p2 = u2 ? e19 : e19.split(`
`).reduce(Bc, []), {width: m2, height: h2, widths: g2, heights: _2, lineWidths: v2} = Wa(s2, p2), y2 = m2 + f2, b2 = [], x2 = (y2 + 2) * l2[0], S2 = (h2 + f2) * l2[1], C2 = {width: x2 < 0 ? Math.floor(x2) : Math.ceil(x2), height: S2 < 0 ? Math.floor(S2) : Math.ceil(S2), contextInstructions: b2};
    (l2[0] != 1 || l2[1] != 1) && b2.push(`scale`, l2), r2 && (b2.push(`strokeStyle`, a2.strokeStyle), b2.push(`lineWidth`, f2), b2.push(`lineCap`, a2.lineCap), b2.push(`lineJoin`, a2.lineJoin), b2.push(`miterLimit`, a2.miterLimit), b2.push(`setLineDash`, [a2.lineDash]), b2.push(`lineDashOffset`, a2.lineDashOffset)), n2 && b2.push(`fillStyle`, o2.fillStyle), b2.push(`textBaseline`, `middle`), b2.push(`textAlign`, `center`);
    let w2 = 0.5 - d2, T2 = d2 * y2 + w2 * f2, E2 = [], D2 = [], O2 = 0, k2 = 0, ee2 = 0, te2 = 0, A2;
    for (let e20 = 0, t3 = p2.length; e20 < t3; e20 += 2) {
      let t4 = p2[e20];
      if (t4 === `
`) {
        k2 += O2, O2 = 0, T2 = d2 * y2 + w2 * f2, ++te2;
        continue;
      }
      let i3 = p2[e20 + 1] || s2.font;
      i3 !== A2 && (r2 && E2.push(`font`, i3), n2 && D2.push(`font`, i3), A2 = i3), O2 = Math.max(O2, _2[ee2]);
      let a3 = [t4, T2 + w2 * g2[ee2] + d2 * (g2[ee2] - v2[te2]), 0.5 * (f2 + O2) + k2];
      T2 += g2[ee2], r2 && E2.push(`strokeText`, a3), n2 && D2.push(`fillText`, a3), ++ee2;
    }
    return Array.prototype.push.apply(b2, E2), Array.prototype.push.apply(b2, D2), this.labels_[i2] = C2, C2;
  }
  replayTextBackground_(e19, t2, n2, r2, i2, a2, o2) {
    e19.beginPath(), e19.moveTo.apply(e19, t2), e19.lineTo.apply(e19, n2), e19.lineTo.apply(e19, r2), e19.lineTo.apply(e19, i2), e19.lineTo.apply(e19, t2), a2 && (this.alignAndScaleFill_ = a2[2], this.fill_(e19)), o2 && (this.setStrokeStyle_(e19, o2), e19.stroke());
  }
  calculateImageOrLabelDimensions_(e19, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2) {
    o2 *= d2[0], s2 *= d2[1];
    let g2 = n2 - o2, _2 = r2 - s2, v2 = i2 + c2 > e19 ? e19 - c2 : i2, y2 = a2 + l2 > t2 ? t2 - l2 : a2, b2 = p2[3] + v2 * d2[0] + p2[1], x2 = p2[0] + y2 * d2[1] + p2[2], S2 = g2 - p2[3], C2 = _2 - p2[0];
    (m2 || u2 !== 0) && (Nc[0] = S2, Ic[0] = S2, Nc[1] = C2, Pc[1] = C2, Pc[0] = S2 + b2, Fc[0] = Pc[0], Fc[1] = C2 + x2, Ic[1] = Fc[1]);
    let w2;
    return u2 === 0 ? Te(Math.min(S2, S2 + b2), Math.min(C2, C2 + x2), Math.max(S2, S2 + b2), Math.max(C2, C2 + x2), Mc) : (w2 = de(le(), n2, r2, 1, 1, u2, -n2, -r2), F(w2, Nc), F(w2, Pc), F(w2, Fc), F(w2, Ic), Te(Math.min(Nc[0], Pc[0], Fc[0], Ic[0]), Math.min(Nc[1], Pc[1], Fc[1], Ic[1]), Math.max(Nc[0], Pc[0], Fc[0], Ic[0]), Math.max(Nc[1], Pc[1], Fc[1], Ic[1]), Mc)), f2 && (g2 = Math.round(g2), _2 = Math.round(_2)), {drawImageX: g2, drawImageY: _2, drawImageW: v2, drawImageH: y2, originX: c2, originY: l2, declutterBox: {minX: Mc[0], minY: Mc[1], maxX: Mc[2], maxY: Mc[3], value: h2}, canvasTransform: w2, scale: d2};
  }
  replayImageOrLabel_(e19, t2, n2, r2, i2, a2, o2) {
    let s2 = !!(a2 || o2), c2 = r2.declutterBox, l2 = o2 ? o2[2] * r2.scale[0] / 2 : 0;
    return c2.minX - l2 <= t2[0] && c2.maxX + l2 >= 0 && c2.minY - l2 <= t2[1] && c2.maxY + l2 >= 0 && (s2 && this.replayTextBackground_(e19, Nc, Pc, Fc, Ic, a2, o2), Ga(e19, r2.canvasTransform, i2, n2, r2.originX, r2.originY, r2.drawImageW, r2.drawImageH, r2.drawImageX, r2.drawImageY, r2.scale)), true;
  }
  fill_(e19) {
    let t2 = this.alignAndScaleFill_;
    if (t2) {
      let n2 = F(this.renderedTransform_, [0, 0]), r2 = 512 * this.pixelRatio;
      e19.save(), e19.translate(n2[0] % r2, n2[1] % r2), t2 !== 1 && e19.scale(t2, t2), e19.rotate(this.viewRotation_);
    }
    e19.fill(), t2 && e19.restore();
  }
  setStrokeStyle_(e19, t2) {
    e19.strokeStyle = t2[1], e19.lineWidth = t2[2], e19.lineCap = t2[3], e19.lineJoin = t2[4], e19.miterLimit = t2[5], e19.lineDashOffset = t2[7], e19.setLineDash(t2[6]);
  }
  drawLabelWithPointPlacement_(e19, t2, n2, r2) {
    let i2 = this.textStates[t2], a2 = this.createLabel(e19, t2, r2, n2), o2 = this.strokeStates[n2], s2 = this.pixelRatio, c2 = zc(Array.isArray(e19) ? e19[0] : e19, i2.textAlign || `center`), l2 = xc[i2.textBaseline || `middle`], u2 = o2 && o2.lineWidth ? o2.lineWidth : 0;
    return {label: a2, anchorX: c2 * (a2.width / s2 - 2 * i2.scale[0]) + 2 * (0.5 - c2) * u2, anchorY: l2 * a2.height / s2 + 2 * (0.5 - l2) * u2};
  }
  execute_(e19, t2, n2, r2, i2, a2, o2, s2) {
    let c2 = this.zIndexContext_, l2;
    this.pixelCoordinates_ && g(n2, this.renderedTransform_) ? l2 = this.pixelCoordinates_ : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []), l2 = un(this.coordinates, 0, this.coordinates.length, 2, n2, this.pixelCoordinates_), ue(this.renderedTransform_, n2));
    let u2 = 0, d2 = r2.length, f2 = 0, p2, m2, h2, _2, v2, y2, b2, x2, S2, C2, w2, T2, E2, D2 = 0, O2 = 0, k2 = null, ee2 = null, te2 = this.coordinateCache_, A2 = this.viewRotation_, ne2 = Math.round(Math.atan2(-n2[1], n2[0]) * 1e12) / 1e12, j2 = {context: e19, pixelRatio: this.pixelRatio, resolution: this.resolution, rotation: A2}, re2 = this.instructions != r2 || this.overlaps ? 0 : 200, M2, N2, ie2, ae2;
    for (; u2 < d2; ) {
      let n3 = r2[u2];
      switch (n3[0]) {
        case Z.BEGIN_GEOMETRY:
          M2 = n3[1], ae2 = n3[3], M2.getGeometry() ? o2 !== void 0 && !Ke(o2, ae2.getExtent()) ? u2 = n3[2] + 1 : ++u2 : u2 = n3[2], c2 && (c2.zIndex = n3[4]);
          break;
        case Z.BEGIN_PATH:
          D2 > re2 && (this.fill_(e19), D2 = 0), O2 > re2 && (e19.stroke(), O2 = 0), !D2 && !O2 && (e19.beginPath(), v2 = NaN, y2 = NaN), ++u2;
          break;
        case Z.CIRCLE:
          f2 = n3[1];
          let r3 = l2[f2], d3 = l2[f2 + 1], g2 = l2[f2 + 2], oe2 = l2[f2 + 3], P2 = g2 - r3, se2 = oe2 - d3, ce2 = Math.sqrt(P2 * P2 + se2 * se2);
          e19.moveTo(r3 + ce2, d3), e19.arc(r3, d3, ce2, 0, 2 * Math.PI, true), ++u2;
          break;
        case Z.CLOSE_PATH:
          e19.closePath(), ++u2;
          break;
        case Z.CUSTOM:
          f2 = n3[1], p2 = n3[2];
          let le2 = n3[3], ue2 = n3[4], F2 = n3[5];
          j2.geometry = le2, j2.feature = M2, u2 in te2 || (te2[u2] = []);
          let de2 = te2[u2];
          F2 ? F2(l2, f2, p2, 2, de2) : (de2[0] = l2[f2], de2[1] = l2[f2 + 1], de2.length = 2), c2 && (c2.zIndex = n3[6]), ue2(de2, j2), ++u2;
          break;
        case Z.DRAW_IMAGE:
          f2 = n3[1], p2 = n3[2], S2 = n3[3], m2 = n3[4], h2 = n3[5];
          let fe2 = n3[6], pe2 = n3[7], me2 = n3[8], he2 = n3[9], I2 = n3[10], ge2 = n3[11], _e2 = n3[12], ve2 = n3[13];
          _2 = n3[14] || `declutter`;
          let ye2 = n3[15];
          if (!S2 && n3.length >= 20) {
            C2 = n3[19], w2 = n3[20], T2 = n3[21], E2 = n3[22];
            let e20 = this.drawLabelWithPointPlacement_(C2, w2, T2, E2);
            S2 = e20.label, n3[3] = S2;
            let t3 = n3[23];
            m2 = (e20.anchorX - t3) * this.pixelRatio, n3[4] = m2;
            let r4 = n3[24];
            h2 = (e20.anchorY - r4) * this.pixelRatio, n3[5] = h2, fe2 = S2.height, n3[6] = fe2, ve2 = S2.width, n3[13] = ve2;
          }
          let be2;
          n3.length > 25 && (be2 = n3[25]);
          let xe2, Se2, Ce2;
          n3.length > 17 ? (xe2 = n3[16], Se2 = n3[17], Ce2 = n3[18]) : (xe2 = Pa, Se2 = false, Ce2 = false), I2 && ne2 ? ge2 += A2 : !I2 && !ne2 && (ge2 -= A2);
          let we2 = 0;
          for (; f2 < p2; f2 += 2) {
            if (be2 && be2[we2++] < ve2 / this.pixelRatio)
              continue;
            let n4 = this.calculateImageOrLabelDimensions_(S2.width, S2.height, l2[f2], l2[f2 + 1], ve2, fe2, m2, h2, me2, he2, ge2, _e2, i2, xe2, Se2 || Ce2, M2), r4 = [e19, t2, S2, n4, pe2, Se2 ? k2 : null, Ce2 ? ee2 : null];
            if (s2) {
              let e20, t3, i3;
              if (ye2) {
                let n5 = p2 - f2;
                if (!ye2[n5]) {
                  ye2[n5] = {args: r4, declutterMode: _2};
                  continue;
                }
                let a4 = ye2[n5];
                e20 = a4.args, t3 = a4.declutterMode, delete ye2[n5], i3 = Lc(e20);
              }
              let a3, o3;
              if (e20 && (t3 !== `declutter` || !s2.collides(i3)) && (a3 = true), _2 === `declutter` && s2.collides(n4.declutterBox) || (o3 = true), t3 === `declutter` && _2 === `declutter`) {
                let e21 = a3 && o3;
                a3 = e21, o3 = e21;
              }
              a3 && (t3 !== `none` && s2.insert(i3), this.replayImageOrLabel_.apply(this, e20)), o3 && (_2 !== `none` && s2.insert(n4.declutterBox), this.replayImageOrLabel_.apply(this, r4));
            } else
              this.replayImageOrLabel_.apply(this, r4);
          }
          ++u2;
          break;
        case Z.DRAW_CHARS:
          let Te2 = n3[1], Ee2 = n3[2], De2 = n3[3], Oe2 = n3[4];
          E2 = n3[5];
          let ke2 = n3[6], Ae2 = n3[7], je2 = n3[8];
          T2 = n3[9];
          let Me2 = n3[10];
          C2 = n3[11], w2 = n3[12];
          let Ne2 = [n3[13], n3[13]];
          _2 = n3[14] || `declutter`;
          let Pe2 = this.textStates[w2], Fe2 = Pe2.font, Ie2 = [Pe2.scale[0] * Ae2, Pe2.scale[1] * Ae2], Le2;
          Fe2 in this.widths_ ? Le2 = this.widths_[Fe2] : (Le2 = {}, this.widths_[Fe2] = Le2);
          let Re2 = da(l2, Te2, Ee2, 2), ze2 = Math.abs(Ie2[0]) * Ua(Fe2, C2, Le2);
          if (Oe2 || ze2 <= Re2) {
            let n4 = this.textStates[w2].textAlign, r4 = (Re2 - ze2) * zc(C2, n4), i3 = jc(l2, Te2, Ee2, 2, C2, r4, ke2, Math.abs(Ie2[0]), Ua, Fe2, Le2, ne2 ? 0 : this.viewRotation_);
            drawChars:
              if (i3) {
                let n5 = [], r5, a3, o3, c3, l3;
                if (T2)
                  for (r5 = 0, a3 = i3.length; r5 < a3; ++r5) {
                    l3 = i3[r5], o3 = l3[4], c3 = this.createLabel(o3, w2, ``, T2), m2 = l3[2] + (Ie2[0] < 0 ? -Me2 : Me2), h2 = De2 * c3.height + (0.5 - De2) * 2 * Me2 * Ie2[1] / Ie2[0] - je2;
                    let a4 = this.calculateImageOrLabelDimensions_(c3.width, c3.height, l3[0], l3[1], c3.width, c3.height, m2, h2, 0, 0, l3[3], Ne2, false, Pa, false, M2);
                    if (s2 && _2 === `declutter` && s2.collides(a4.declutterBox))
                      break drawChars;
                    n5.push([e19, t2, c3, a4, 1, null, null]);
                  }
                if (E2)
                  for (r5 = 0, a3 = i3.length; r5 < a3; ++r5) {
                    l3 = i3[r5], o3 = l3[4], c3 = this.createLabel(o3, w2, E2, ``), m2 = l3[2], h2 = De2 * c3.height - je2;
                    let a4 = this.calculateImageOrLabelDimensions_(c3.width, c3.height, l3[0], l3[1], c3.width, c3.height, m2, h2, 0, 0, l3[3], Ne2, false, Pa, false, M2);
                    if (s2 && _2 === `declutter` && s2.collides(a4.declutterBox))
                      break drawChars;
                    n5.push([e19, t2, c3, a4, 1, null, null]);
                  }
                s2 && _2 !== `none` && s2.load(n5.map(Lc));
                for (let e20 = 0, t3 = n5.length; e20 < t3; ++e20)
                  this.replayImageOrLabel_.apply(this, n5[e20]);
              }
          }
          ++u2;
          break;
        case Z.END_GEOMETRY:
          if (a2 !== void 0) {
            M2 = n3[1];
            let e20 = a2(M2, ae2, _2);
            if (e20)
              return e20;
          }
          ++u2;
          break;
        case Z.FILL:
          re2 ? D2++ : this.fill_(e19), ++u2;
          break;
        case Z.MOVE_TO_LINE_TO:
          for (f2 = n3[1], p2 = n3[2], N2 = l2[f2], ie2 = l2[f2 + 1], e19.moveTo(N2, ie2), v2 = N2 + 0.5 | 0, y2 = ie2 + 0.5 | 0, f2 += 2; f2 < p2; f2 += 2)
            N2 = l2[f2], ie2 = l2[f2 + 1], b2 = N2 + 0.5 | 0, x2 = ie2 + 0.5 | 0, (f2 == p2 - 2 || b2 !== v2 || x2 !== y2) && (e19.lineTo(N2, ie2), v2 = b2, y2 = x2);
          ++u2;
          break;
        case Z.SET_FILL_STYLE:
          k2 = n3, this.alignAndScaleFill_ = n3[2], D2 && (this.fill_(e19), D2 = 0, O2 && (O2 = (e19.stroke(), 0))), e19.fillStyle = n3[1], ++u2;
          break;
        case Z.SET_STROKE_STYLE:
          ee2 = n3, O2 && (O2 = (e19.stroke(), 0)), this.setStrokeStyle_(e19, n3), ++u2;
          break;
        case Z.STROKE:
          re2 ? O2++ : e19.stroke(), ++u2;
          break;
        default:
          ++u2;
      }
    }
    D2 && this.fill_(e19), O2 && e19.stroke();
  }
  execute(e19, t2, n2, r2, i2, a2) {
    this.viewRotation_ = r2, this.execute_(e19, t2, n2, this.instructions, i2, void 0, void 0, a2);
  }
  executeHitDetection(e19, t2, n2, r2, i2) {
    return this.viewRotation_ = n2, this.execute_(e19, [e19.canvas.width, e19.canvas.height], t2, this.hitDetectionInstructions, true, r2, i2);
  }
}, Hc = [`Polygon`, `Circle`, `LineString`, `Image`, `Text`, `Default`], Uc = [`Image`, `Text`], Wc = Hc.filter((e19) => !Uc.includes(e19)), Gc = class {
  constructor(e19, t2, n2, r2, i2, a2, o2) {
    this.maxExtent_ = e19, this.overlaps_ = r2, this.pixelRatio_ = n2, this.resolution_ = t2, this.renderBuffer_ = a2, this.executorsByZIndex_ = {}, this.hitDetectionContext_ = null, this.hitDetectionTransform_ = le(), this.renderedContext_ = null, this.deferredZIndexContexts_ = {}, this.createExecutors_(i2, o2);
  }
  clip(e19, t2) {
    let n2 = this.getClipCoords(t2);
    e19.beginPath(), e19.moveTo(n2[0], n2[1]), e19.lineTo(n2[2], n2[3]), e19.lineTo(n2[4], n2[5]), e19.lineTo(n2[6], n2[7]), e19.clip();
  }
  createExecutors_(e19, t2) {
    for (let n2 in e19) {
      let r2 = this.executorsByZIndex_[n2];
      r2 === void 0 && (r2 = {}, this.executorsByZIndex_[n2] = r2);
      let i2 = e19[n2];
      for (let e20 in i2) {
        let n3 = i2[e20];
        r2[e20] = new Vc(this.resolution_, this.pixelRatio_, this.overlaps_, n3, t2);
      }
    }
  }
  hasExecutors(e19) {
    for (let t2 in this.executorsByZIndex_) {
      let n2 = this.executorsByZIndex_[t2];
      for (let t3 = 0, r2 = e19.length; t3 < r2; ++t3)
        if (e19[t3] in n2)
          return true;
    }
    return false;
  }
  forEachFeatureAtCoordinate(e19, t2, n2, r2, i2, a2) {
    r2 = Math.round(r2);
    let o2 = r2 * 2 + 1, s2 = de(this.hitDetectionTransform_, r2 + 0.5, r2 + 0.5, 1 / t2, -1 / t2, -n2, -e19[0], -e19[1]), c2 = !this.hitDetectionContext_;
    c2 && (this.hitDetectionContext_ = Ki(o2, o2, void 0, {willReadFrequently: true}));
    let l2 = this.hitDetectionContext_;
    l2.canvas.width !== o2 || l2.canvas.height !== o2 ? (l2.canvas.width = o2, l2.canvas.height = o2) : c2 || l2.clearRect(0, 0, o2, o2);
    let u2;
    this.renderBuffer_ !== void 0 && (u2 = we(), je(u2, e19), _e(u2, t2 * (this.renderBuffer_ + r2), u2));
    let d2 = qc(r2), p2;
    function m2(e20, t3, n3) {
      let s3 = l2.getImageData(0, 0, o2, o2).data;
      for (let c3 = 0, u3 = d2.length; c3 < u3; c3++)
        if (s3[d2[c3]] > 0) {
          if (!a2 || n3 === `none` || p2 !== `Image` && p2 !== `Text` || a2.includes(e20)) {
            let n4 = (d2[c3] - 3) / 4, a3 = r2 - n4 % o2, s4 = r2 - (n4 / o2 | 0), l3 = i2(e20, t3, a3 * a3 + s4 * s4);
            if (l3)
              return l3;
          }
          l2.clearRect(0, 0, o2, o2);
          break;
        }
    }
    let h2 = Object.keys(this.executorsByZIndex_).map(Number);
    h2.sort(f);
    let g2, _2, v2, y2, b2;
    for (g2 = h2.length - 1; g2 >= 0; --g2) {
      let e20 = h2[g2].toString();
      for (v2 = this.executorsByZIndex_[e20], _2 = Hc.length - 1; _2 >= 0; --_2)
        if (p2 = Hc[_2], y2 = v2[p2], y2 !== void 0 && (b2 = y2.executeHitDetection(l2, s2, n2, m2, u2), b2))
          return b2;
    }
  }
  getClipCoords(e19) {
    let t2 = this.maxExtent_;
    if (!t2)
      return null;
    let n2 = t2[0], r2 = t2[1], i2 = t2[2], a2 = t2[3], o2 = [n2, r2, n2, a2, i2, a2, i2, r2];
    return un(o2, 0, 8, 2, e19, o2), o2;
  }
  isEmpty() {
    return w(this.executorsByZIndex_);
  }
  execute(e19, t2, n2, r2, i2, a2, o2) {
    let s2 = Object.keys(this.executorsByZIndex_).map(Number);
    s2.sort(f), a2 || (a2 = Hc);
    let c2 = Hc.length, l2, u2, d2, p2, m2;
    for (o2 && s2.reverse(), l2 = 0, u2 = s2.length; l2 < u2; ++l2) {
      let u3 = s2[l2].toString();
      for (m2 = this.executorsByZIndex_[u3], d2 = 0, p2 = a2.length; d2 < p2; ++d2) {
        let u4 = a2[d2], f2 = m2[u4];
        if (f2 !== void 0) {
          let a3 = o2 === null ? void 0 : f2.getZIndexContext(), p3 = a3 ? a3.getContext() : e19, m3 = this.maxExtent_ && u4 !== `Image` && u4 !== `Text`;
          if (m3 && (p3.save(), this.clip(p3, n2)), !a3 || u4 === `Text` || u4 === `Image` ? f2.execute(p3, t2, n2, r2, i2, o2) : a3.pushFunction((e20) => f2.execute(e20, t2, n2, r2, i2, o2)), m3 && p3.restore(), a3) {
            a3.offset();
            let e20 = s2[l2] * c2 + d2;
            this.deferredZIndexContexts_[e20] || (this.deferredZIndexContexts_[e20] = []), this.deferredZIndexContexts_[e20].push(a3);
          }
        }
      }
    }
    this.renderedContext_ = e19;
  }
  getDeferredZIndexContexts() {
    return this.deferredZIndexContexts_;
  }
  getRenderedContext() {
    return this.renderedContext_;
  }
  renderDeferred() {
    let e19 = this.deferredZIndexContexts_, t2 = Object.keys(e19).map(Number).sort(f);
    for (let n2 = 0, r2 = t2.length; n2 < r2; ++n2)
      e19[t2[n2]].forEach((e20) => {
        e20.draw(this.renderedContext_), e20.clear();
      }), e19[t2[n2]].length = 0;
  }
}, Kc = {};
function qc(e19) {
  if (Kc[e19] !== void 0)
    return Kc[e19];
  let t2 = e19 * 2 + 1, n2 = e19 * e19, r2 = Array(n2 + 1);
  for (let i3 = 0; i3 <= e19; ++i3)
    for (let a2 = 0; a2 <= e19; ++a2) {
      let o2 = i3 * i3 + a2 * a2;
      if (o2 > n2)
        break;
      let s2 = r2[o2];
      s2 || (s2 = [], r2[o2] = s2), s2.push(((e19 + i3) * t2 + (e19 + a2)) * 4 + 3), i3 > 0 && s2.push(((e19 - i3) * t2 + (e19 + a2)) * 4 + 3), a2 > 0 && (s2.push(((e19 + i3) * t2 + (e19 - a2)) * 4 + 3), i3 > 0 && s2.push(((e19 - i3) * t2 + (e19 - a2)) * 4 + 3));
    }
  let i2 = [];
  for (let e20 = 0, t3 = r2.length; e20 < t3; ++e20)
    r2[e20] && i2.push(...r2[e20]);
  return Kc[e19] = i2, i2;
}
var Jc = class extends mc {
  constructor(e19, t2, n2, r2, i2, a2, o2) {
    super(), this.context_ = e19, this.pixelRatio_ = t2, this.extent_ = n2, this.transform_ = r2, this.transformRotation_ = r2 ? Et(Math.atan2(r2[1], r2[0]), 10) : 0, this.viewRotation_ = i2, this.squaredTolerance_ = a2, this.userTransform_ = o2, this.contextFillState_ = null, this.contextStrokeState_ = null, this.contextTextState_ = null, this.fillState_ = null, this.strokeState_ = null, this.image_ = null, this.imageAnchorX_ = 0, this.imageAnchorY_ = 0, this.imageHeight_ = 0, this.imageOpacity_ = 0, this.imageOriginX_ = 0, this.imageOriginY_ = 0, this.imageRotateWithView_ = false, this.imageRotation_ = 0, this.imageScale_ = [0, 0], this.imageWidth_ = 0, this.text_ = ``, this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = false, this.textRotation_ = 0, this.textScale_ = [0, 0], this.textFillState_ = null, this.textStrokeState_ = null, this.textState_ = null, this.pixelCoordinates_ = [], this.tmpLocalTransform_ = le();
  }
  drawImages_(e19, t2, n2, r2) {
    if (!this.image_)
      return;
    let i2 = un(e19, t2, n2, r2, this.transform_, this.pixelCoordinates_), a2 = this.context_, o2 = this.tmpLocalTransform_, s2 = a2.globalAlpha;
    this.imageOpacity_ != 1 && (a2.globalAlpha = s2 * this.imageOpacity_);
    let c2 = this.imageRotation_;
    this.transformRotation_ === 0 && (c2 -= this.viewRotation_), this.imageRotateWithView_ && (c2 += this.viewRotation_);
    for (let e20 = 0, t3 = i2.length; e20 < t3; e20 += 2) {
      let t4 = i2[e20] - this.imageAnchorX_, n3 = i2[e20 + 1] - this.imageAnchorY_;
      if (c2 !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
        let e21 = t4 + this.imageAnchorX_, r3 = n3 + this.imageAnchorY_;
        de(o2, e21, r3, 1, 1, c2, -e21, -r3), a2.save(), a2.transform.apply(a2, o2), a2.translate(e21, r3), a2.scale(this.imageScale_[0], this.imageScale_[1]), a2.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, -this.imageAnchorX_, -this.imageAnchorY_, this.imageWidth_, this.imageHeight_), a2.restore();
      } else
        a2.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, t4, n3, this.imageWidth_, this.imageHeight_);
    }
    this.imageOpacity_ != 1 && (a2.globalAlpha = s2);
  }
  drawText_(e19, t2, n2, r2) {
    if (!this.textState_ || this.text_ === ``)
      return;
    this.textFillState_ && this.setContextFillState_(this.textFillState_), this.textStrokeState_ && this.setContextStrokeState_(this.textStrokeState_), this.setContextTextState_(this.textState_);
    let i2 = un(e19, t2, n2, r2, this.transform_, this.pixelCoordinates_), a2 = this.context_, o2 = this.textRotation_;
    for (this.transformRotation_ === 0 && (o2 -= this.viewRotation_), this.textRotateWithView_ && (o2 += this.viewRotation_); t2 < n2; t2 += r2) {
      let e20 = i2[t2] + this.textOffsetX_, n3 = i2[t2 + 1] + this.textOffsetY_;
      o2 !== 0 || this.textScale_[0] != 1 || this.textScale_[1] != 1 ? (a2.save(), a2.translate(e20 - this.textOffsetX_, n3 - this.textOffsetY_), a2.rotate(o2), a2.translate(this.textOffsetX_, this.textOffsetY_), a2.scale(this.textScale_[0], this.textScale_[1]), this.textStrokeState_ && a2.strokeText(this.text_, 0, 0), this.textFillState_ && a2.fillText(this.text_, 0, 0), a2.restore()) : (this.textStrokeState_ && a2.strokeText(this.text_, e20, n3), this.textFillState_ && a2.fillText(this.text_, e20, n3));
    }
  }
  moveToLineTo_(e19, t2, n2, r2, i2) {
    let a2 = this.context_, o2 = un(e19, t2, n2, r2, this.transform_, this.pixelCoordinates_);
    a2.moveTo(o2[0], o2[1]);
    let s2 = o2.length;
    i2 && (s2 -= 2);
    for (let e20 = 2; e20 < s2; e20 += 2)
      a2.lineTo(o2[e20], o2[e20 + 1]);
    return i2 && a2.closePath(), n2;
  }
  drawRings_(e19, t2, n2, r2) {
    for (let i2 = 0, a2 = n2.length; i2 < a2; ++i2)
      t2 = this.moveToLineTo_(e19, t2, n2[i2], r2, true);
    return t2;
  }
  drawCircle(e19) {
    if (this.squaredTolerance_ && (e19 = e19.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), Ke(this.extent_, e19.getExtent())) {
      if (this.fillState_ || this.strokeState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        let t2 = yn(e19, this.transform_, this.pixelCoordinates_), n2 = t2[2] - t2[0], r2 = t2[3] - t2[1], i2 = Math.sqrt(n2 * n2 + r2 * r2), a2 = this.context_;
        a2.beginPath(), a2.arc(t2[0], t2[1], i2, 0, 2 * Math.PI), this.fillState_ && a2.fill(), this.strokeState_ && a2.stroke();
      }
      this.text_ !== `` && this.drawText_(e19.getCenter(), 0, 2, 2);
    }
  }
  setStyle(e19) {
    this.setFillStrokeStyle(e19.getFill(), e19.getStroke()), this.setImageStyle(e19.getImage()), this.setTextStyle(e19.getText());
  }
  setTransform(e19) {
    this.transform_ = e19;
  }
  drawGeometry(e19) {
    switch (e19.getType()) {
      case `Point`:
        this.drawPoint(e19);
        break;
      case `LineString`:
        this.drawLineString(e19);
        break;
      case `Polygon`:
        this.drawPolygon(e19);
        break;
      case `MultiPoint`:
        this.drawMultiPoint(e19);
        break;
      case `MultiLineString`:
        this.drawMultiLineString(e19);
        break;
      case `MultiPolygon`:
        this.drawMultiPolygon(e19);
        break;
      case `GeometryCollection`:
        this.drawGeometryCollection(e19);
        break;
      case `Circle`:
        this.drawCircle(e19);
    }
  }
  drawFeature(e19, t2) {
    let n2 = t2.getGeometryFunction()(e19);
    n2 && (this.setStyle(t2), this.drawGeometry(n2));
  }
  drawGeometryCollection(e19) {
    let t2 = e19.getGeometriesArray();
    for (let e20 = 0, n2 = t2.length; e20 < n2; ++e20)
      this.drawGeometry(t2[e20]);
  }
  drawPoint(e19) {
    this.squaredTolerance_ && (e19 = e19.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    let t2 = e19.getFlatCoordinates(), n2 = e19.getStride();
    this.image_ && this.drawImages_(t2, 0, t2.length, n2), this.text_ !== `` && this.drawText_(t2, 0, t2.length, n2);
  }
  drawMultiPoint(e19) {
    this.squaredTolerance_ && (e19 = e19.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    let t2 = e19.getFlatCoordinates(), n2 = e19.getStride();
    this.image_ && this.drawImages_(t2, 0, t2.length, n2), this.text_ !== `` && this.drawText_(t2, 0, t2.length, n2);
  }
  drawLineString(e19) {
    if (this.squaredTolerance_ && (e19 = e19.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), Ke(this.extent_, e19.getExtent())) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        let t2 = this.context_, n2 = e19.getFlatCoordinates();
        t2.beginPath(), this.moveToLineTo_(n2, 0, n2.length, e19.getStride(), false), t2.stroke();
      }
      if (this.text_ !== ``) {
        let t2 = e19.getFlatMidpoint();
        this.drawText_(t2, 0, 2, 2);
      }
    }
  }
  drawMultiLineString(e19) {
    this.squaredTolerance_ && (e19 = e19.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    let t2 = e19.getExtent();
    if (Ke(this.extent_, t2)) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        let t3 = this.context_, n2 = e19.getFlatCoordinates(), r2 = 0, i2 = e19.getEnds(), a2 = e19.getStride();
        t3.beginPath();
        for (let e20 = 0, t4 = i2.length; e20 < t4; ++e20)
          r2 = this.moveToLineTo_(n2, r2, i2[e20], a2, false);
        t3.stroke();
      }
      if (this.text_ !== ``) {
        let t3 = e19.getFlatMidpoints();
        this.drawText_(t3, 0, t3.length, 2);
      }
    }
  }
  drawPolygon(e19) {
    if (this.squaredTolerance_ && (e19 = e19.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), Ke(this.extent_, e19.getExtent())) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        let t2 = this.context_;
        t2.beginPath(), this.drawRings_(e19.getOrientedFlatCoordinates(), 0, e19.getEnds(), e19.getStride()), this.fillState_ && t2.fill(), this.strokeState_ && t2.stroke();
      }
      if (this.text_ !== ``) {
        let t2 = e19.getFlatInteriorPoint();
        this.drawText_(t2, 0, 2, 2);
      }
    }
  }
  drawMultiPolygon(e19) {
    if (this.squaredTolerance_ && (e19 = e19.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), Ke(this.extent_, e19.getExtent())) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        let t2 = this.context_, n2 = e19.getOrientedFlatCoordinates(), r2 = 0, i2 = e19.getEndss(), a2 = e19.getStride();
        t2.beginPath();
        for (let e20 = 0, t3 = i2.length; e20 < t3; ++e20) {
          let t4 = i2[e20];
          r2 = this.drawRings_(n2, r2, t4, a2);
        }
        this.fillState_ && t2.fill(), this.strokeState_ && t2.stroke();
      }
      if (this.text_ !== ``) {
        let t2 = e19.getFlatInteriorPoints();
        this.drawText_(t2, 0, t2.length, 2);
      }
    }
  }
  setContextFillState_(e19) {
    let t2 = this.context_, n2 = this.contextFillState_;
    n2 ? n2.fillStyle != e19.fillStyle && (n2.fillStyle = e19.fillStyle, t2.fillStyle = e19.fillStyle) : (t2.fillStyle = e19.fillStyle, this.contextFillState_ = {fillStyle: e19.fillStyle});
  }
  setContextStrokeState_(e19) {
    let t2 = this.context_, n2 = this.contextStrokeState_;
    n2 ? (n2.lineCap != e19.lineCap && (n2.lineCap = e19.lineCap, t2.lineCap = e19.lineCap), g(n2.lineDash, e19.lineDash) || t2.setLineDash(n2.lineDash = e19.lineDash), n2.lineDashOffset != e19.lineDashOffset && (n2.lineDashOffset = e19.lineDashOffset, t2.lineDashOffset = e19.lineDashOffset), n2.lineJoin != e19.lineJoin && (n2.lineJoin = e19.lineJoin, t2.lineJoin = e19.lineJoin), n2.lineWidth != e19.lineWidth && (n2.lineWidth = e19.lineWidth, t2.lineWidth = e19.lineWidth), n2.miterLimit != e19.miterLimit && (n2.miterLimit = e19.miterLimit, t2.miterLimit = e19.miterLimit), n2.strokeStyle != e19.strokeStyle && (n2.strokeStyle = e19.strokeStyle, t2.strokeStyle = e19.strokeStyle)) : (t2.lineCap = e19.lineCap, t2.setLineDash(e19.lineDash), t2.lineDashOffset = e19.lineDashOffset, t2.lineJoin = e19.lineJoin, t2.lineWidth = e19.lineWidth, t2.miterLimit = e19.miterLimit, t2.strokeStyle = e19.strokeStyle, this.contextStrokeState_ = {lineCap: e19.lineCap, lineDash: e19.lineDash, lineDashOffset: e19.lineDashOffset, lineJoin: e19.lineJoin, lineWidth: e19.lineWidth, miterLimit: e19.miterLimit, strokeStyle: e19.strokeStyle});
  }
  setContextTextState_(e19) {
    let t2 = this.context_, n2 = this.contextTextState_, r2 = e19.textAlign ? e19.textAlign : Ma;
    n2 ? (n2.font != e19.font && (n2.font = e19.font, t2.font = e19.font), n2.textAlign != r2 && (n2.textAlign = r2, t2.textAlign = r2), n2.textBaseline != e19.textBaseline && (n2.textBaseline = e19.textBaseline, t2.textBaseline = e19.textBaseline)) : (t2.font = e19.font, t2.textAlign = r2, t2.textBaseline = e19.textBaseline, this.contextTextState_ = {font: e19.font, textAlign: r2, textBaseline: e19.textBaseline});
  }
  setFillStrokeStyle(e19, t2) {
    if (!e19)
      this.fillState_ = null;
    else {
      let t3 = e19.getColor();
      this.fillState_ = {fillStyle: _a(t3 || Da)};
    }
    if (!t2)
      this.strokeState_ = null;
    else {
      let e20 = t2.getColor(), n2 = t2.getLineCap(), r2 = t2.getLineDash(), i2 = t2.getLineDashOffset(), a2 = t2.getLineJoin(), o2 = t2.getWidth(), s2 = t2.getMiterLimit(), c2 = r2 || ka;
      this.strokeState_ = {lineCap: n2 === void 0 ? Oa : n2, lineDash: this.pixelRatio_ === 1 ? c2 : c2.map((e21) => e21 * this.pixelRatio_), lineDashOffset: (i2 || 0) * this.pixelRatio_, lineJoin: a2 === void 0 ? Aa : a2, lineWidth: (o2 === void 0 ? 1 : o2) * this.pixelRatio_, miterLimit: s2 === void 0 ? 10 : s2, strokeStyle: _a(e20 || ja)};
    }
  }
  setImageStyle(e19) {
    let t2;
    if (!e19 || !(t2 = e19.getSize())) {
      this.image_ = null;
      return;
    }
    let n2 = e19.getPixelRatio(this.pixelRatio_), r2 = e19.getAnchor(), i2 = e19.getOrigin();
    this.image_ = e19.getImage(this.pixelRatio_), this.imageAnchorX_ = r2[0] * n2, this.imageAnchorY_ = r2[1] * n2, this.imageHeight_ = t2[1] * n2, this.imageOpacity_ = e19.getOpacity(), this.imageOriginX_ = i2[0], this.imageOriginY_ = i2[1], this.imageRotateWithView_ = e19.getRotateWithView(), this.imageRotation_ = e19.getRotation();
    let a2 = e19.getScaleArray();
    this.imageScale_ = [a2[0] * this.pixelRatio_ / n2, a2[1] * this.pixelRatio_ / n2], this.imageWidth_ = t2[0] * n2;
  }
  setTextStyle(e19) {
    if (!e19)
      this.text_ = ``;
    else {
      let t2 = e19.getFill();
      if (!t2)
        this.textFillState_ = null;
      else {
        let e20 = t2.getColor();
        this.textFillState_ = {fillStyle: _a(e20 || Da)};
      }
      let n2 = e19.getStroke();
      if (!n2)
        this.textStrokeState_ = null;
      else {
        let e20 = n2.getColor(), t3 = n2.getLineCap(), r3 = n2.getLineDash(), i3 = n2.getLineDashOffset(), a3 = n2.getLineJoin(), o3 = n2.getWidth(), s3 = n2.getMiterLimit();
        this.textStrokeState_ = {lineCap: t3 === void 0 ? Oa : t3, lineDash: r3 || ka, lineDashOffset: i3 || 0, lineJoin: a3 === void 0 ? Aa : a3, lineWidth: o3 === void 0 ? 1 : o3, miterLimit: s3 === void 0 ? 10 : s3, strokeStyle: _a(e20 || ja)};
      }
      let r2 = e19.getFont(), i2 = e19.getOffsetX(), a2 = e19.getOffsetY(), o2 = e19.getRotateWithView(), s2 = e19.getRotation(), c2 = e19.getScaleArray(), l2 = e19.getText(), u2 = e19.getTextAlign(), d2 = e19.getTextBaseline();
      this.textState_ = {font: r2 === void 0 ? Ea : r2, textAlign: u2 === void 0 ? Ma : u2, textBaseline: d2 === void 0 ? Na : d2}, this.text_ = l2 === void 0 ? `` : Array.isArray(l2) ? l2.reduce((e20, t3, n3) => e20 += n3 % 2 ? ` ` : t3, ``) : l2, this.textOffsetX_ = i2 === void 0 ? 0 : this.pixelRatio_ * i2, this.textOffsetY_ = a2 === void 0 ? 0 : this.pixelRatio_ * a2, this.textRotateWithView_ = o2 !== void 0 && o2, this.textRotation_ = s2 === void 0 ? 0 : s2, this.textScale_ = [this.pixelRatio_ * c2[0], this.pixelRatio_ * c2[1]];
    }
  }
}, Yc = 0.5;
function Xc(e19, t2, n2, r2, i2, a2, o2, s2, c2) {
  let l2 = c2 ? on(i2, c2) : i2, u2 = Ki(e19[0] * Yc, e19[1] * Yc);
  u2.imageSmoothingEnabled = false;
  let d2 = u2.canvas, p2 = new Jc(u2, Yc, i2, null, o2, s2, c2 ? Qt(nn(), c2) : null), m2 = n2.length, h2 = Math.floor(16777215 / m2), g2 = {};
  for (let e20 = 1; e20 <= m2; ++e20) {
    let t3 = n2[e20 - 1], i3 = t3.getStyleFunction() || r2;
    if (!i3)
      continue;
    let o3 = i3(t3, a2);
    if (!o3)
      continue;
    Array.isArray(o3) || (o3 = [o3]);
    let s3 = (e20 * h2).toString(16).padStart(7, `#00000`);
    for (let e21 = 0, n3 = o3.length; e21 < n3; ++e21) {
      let n4 = o3[e21], r3 = n4.getGeometryFunction()(t3);
      if (!r3 || !Ke(l2, r3.getExtent()))
        continue;
      let i4 = n4.clone(), a3 = i4.getFill();
      a3 && a3.setColor(s3);
      let c3 = i4.getStroke();
      c3 && (c3.setColor(s3), c3.setLineDash(null)), i4.setText(void 0);
      let u3 = n4.getImage();
      if (u3) {
        let e22 = u3.getImageSize();
        if (!e22)
          continue;
        let t4 = Ki(e22[0], e22[1], void 0, {alpha: false}), n5 = t4.canvas;
        t4.fillStyle = s3, t4.fillRect(0, 0, n5.width, n5.height), i4.setImage(new No({img: n5, anchor: u3.getAnchor(), anchorXUnits: `pixels`, anchorYUnits: `pixels`, offset: u3.getOrigin(), opacity: 1, size: u3.getSize(), scale: u3.getScale(), rotation: u3.getRotation(), rotateWithView: u3.getRotateWithView()}));
      }
      let d3 = i4.getZIndex() || 0, f2 = g2[d3];
      f2 || (f2 = {}, g2[d3] = f2, f2.Polygon = [], f2.Circle = [], f2.LineString = [], f2.Point = []);
      let p3 = r3.getType();
      if (p3 === `GeometryCollection`) {
        let e22 = r3.getGeometriesArrayRecursive();
        for (let t4 = 0, n5 = e22.length; t4 < n5; ++t4) {
          let n6 = e22[t4];
          f2[n6.getType().replace(`Multi`, ``)].push(n6, i4);
        }
      } else
        f2[p3.replace(`Multi`, ``)].push(r3, i4);
    }
  }
  let _2 = Object.keys(g2).map(Number).sort(f);
  for (let e20 = 0, n3 = _2.length; e20 < n3; ++e20) {
    let n4 = g2[_2[e20]];
    for (let e21 in n4) {
      let r3 = n4[e21];
      for (let e22 = 0, n5 = r3.length; e22 < n5; e22 += 2) {
        p2.setStyle(r3[e22 + 1]);
        for (let n6 = 0, i3 = t2.length; n6 < i3; ++n6)
          p2.setTransform(t2[n6]), p2.drawGeometry(r3[e22]);
      }
    }
  }
  return u2.getImageData(0, 0, d2.width, d2.height);
}
function Zc(e19, t2, n2) {
  let r2 = [];
  if (n2) {
    let i2 = Math.floor(Math.round(e19[0]) * Yc), a2 = Math.floor(Math.round(e19[1]) * Yc), o2 = (R(i2, 0, n2.width - 1) + R(a2, 0, n2.height - 1) * n2.width) * 4, s2 = n2.data[o2], c2 = n2.data[o2 + 1], l2 = n2.data[o2 + 2] + 256 * (c2 + 256 * s2), u2 = Math.floor(16777215 / t2.length);
    l2 && l2 % u2 === 0 && r2.push(t2[l2 / u2 - 1]);
  }
  return r2;
}
var Qc = 0.5, $c = {Point: dl, LineString: cl, Polygon: pl, MultiPoint: fl, MultiLineString: ll, MultiPolygon: ul, GeometryCollection: sl, Circle: rl};
function el(e19, t2) {
  return parseInt(j(e19), 10) - parseInt(j(t2), 10);
}
function tl(e19, t2) {
  let n2 = nl(e19, t2);
  return n2 * n2;
}
function nl(e19, t2) {
  return Qc * e19 / t2;
}
function rl(e19, t2, n2, r2, i2) {
  let a2 = n2.getFill(), o2 = n2.getStroke();
  if (a2 || o2) {
    let s3 = e19.getBuilder(n2.getZIndex(), `Circle`);
    s3.setFillStrokeStyle(a2, o2), s3.drawCircle(t2, r2, i2);
  }
  let s2 = n2.getText();
  if (s2 && s2.getText()) {
    let i3 = e19.getBuilder(n2.getZIndex(), `Text`);
    i3.setTextStyle(s2), i3.drawText(t2, r2);
  }
}
function il(e19, t2, n2, r2, i2, a2, o2, s2) {
  let c2 = [], l2 = n2.getImage();
  if (l2) {
    let e20 = true, t3 = l2.getImageState();
    t3 == z.LOADED || t3 == z.ERROR ? e20 = false : t3 == z.IDLE && l2.load(), e20 && c2.push(l2.ready());
  }
  let u2 = n2.getFill();
  u2 && u2.loading() && c2.push(u2.ready());
  let d2 = c2.length > 0;
  return d2 && Promise.all(c2).then(() => i2(null)), al(e19, t2, n2, r2, a2, o2, s2), d2;
}
function al(e19, t2, n2, r2, i2, a2, o2) {
  let s2 = n2.getGeometryFunction()(t2);
  if (!s2)
    return;
  let c2 = s2.simplifyTransformed(r2, i2);
  if (n2.getRenderer())
    ol(e19, c2, n2, t2, o2);
  else {
    let r3 = $c[c2.getType()];
    r3(e19, c2, n2, t2, o2, a2);
  }
}
function ol(e19, t2, n2, r2, i2) {
  if (t2.getType() == `GeometryCollection`) {
    let a2 = t2.getGeometries();
    for (let t3 = 0, o2 = a2.length; t3 < o2; ++t3)
      ol(e19, a2[t3], n2, r2, i2);
  } else
    e19.getBuilder(n2.getZIndex(), `Default`).drawCustom(t2, r2, n2.getRenderer(), n2.getHitDetectionRenderer(), i2);
}
function sl(e19, t2, n2, r2, i2, a2) {
  let o2 = t2.getGeometriesArray(), s2, c2;
  for (s2 = 0, c2 = o2.length; s2 < c2; ++s2) {
    let t3 = $c[o2[s2].getType()];
    t3(e19, o2[s2], n2, r2, i2, a2);
  }
}
function cl(e19, t2, n2, r2, i2) {
  let a2 = n2.getStroke();
  if (a2) {
    let o3 = e19.getBuilder(n2.getZIndex(), `LineString`);
    o3.setFillStrokeStyle(null, a2), o3.drawLineString(t2, r2, i2);
  }
  let o2 = n2.getText();
  if (o2 && o2.getText()) {
    let a3 = e19.getBuilder(n2.getZIndex(), `Text`);
    a3.setTextStyle(o2), a3.drawText(t2, r2, i2);
  }
}
function ll(e19, t2, n2, r2, i2) {
  let a2 = n2.getStroke();
  if (a2) {
    let o3 = e19.getBuilder(n2.getZIndex(), `LineString`);
    o3.setFillStrokeStyle(null, a2), o3.drawMultiLineString(t2, r2, i2);
  }
  let o2 = n2.getText();
  if (o2 && o2.getText()) {
    let a3 = e19.getBuilder(n2.getZIndex(), `Text`);
    a3.setTextStyle(o2), a3.drawText(t2, r2, i2);
  }
}
function ul(e19, t2, n2, r2, i2) {
  let a2 = n2.getFill(), o2 = n2.getStroke();
  if (o2 || a2) {
    let s3 = e19.getBuilder(n2.getZIndex(), `Polygon`);
    s3.setFillStrokeStyle(a2, o2), s3.drawMultiPolygon(t2, r2, i2);
  }
  let s2 = n2.getText();
  if (s2 && s2.getText()) {
    let a3 = e19.getBuilder(n2.getZIndex(), `Text`);
    a3.setTextStyle(s2), a3.drawText(t2, r2, i2);
  }
}
function dl(e19, t2, n2, r2, i2, a2) {
  let o2 = n2.getImage(), s2 = n2.getText(), c2 = s2 && s2.getText(), l2 = a2 && o2 && c2 ? {} : void 0;
  if (o2) {
    if (o2.getImageState() != z.LOADED)
      return;
    let a3 = e19.getBuilder(n2.getZIndex(), `Image`);
    a3.setImageStyle(o2, l2), a3.drawPoint(t2, r2, i2);
  }
  if (c2) {
    let a3 = e19.getBuilder(n2.getZIndex(), `Text`);
    a3.setTextStyle(s2, l2), a3.drawText(t2, r2, i2);
  }
}
function fl(e19, t2, n2, r2, i2, a2) {
  let o2 = n2.getImage(), s2 = o2 && o2.getOpacity() !== 0, c2 = n2.getText(), l2 = c2 && c2.getText(), u2 = a2 && s2 && l2 ? {} : void 0;
  if (s2) {
    if (o2.getImageState() != z.LOADED)
      return;
    let a3 = e19.getBuilder(n2.getZIndex(), `Image`);
    a3.setImageStyle(o2, u2), a3.drawMultiPoint(t2, r2, i2);
  }
  if (l2) {
    let a3 = e19.getBuilder(n2.getZIndex(), `Text`);
    a3.setTextStyle(c2, u2), a3.drawText(t2, r2, i2);
  }
}
function pl(e19, t2, n2, r2, i2) {
  let a2 = n2.getFill(), o2 = n2.getStroke();
  if (a2 || o2) {
    let s3 = e19.getBuilder(n2.getZIndex(), `Polygon`);
    s3.setFillStrokeStyle(a2, o2), s3.drawPolygon(t2, r2, i2);
  }
  let s2 = n2.getText();
  if (s2 && s2.getText()) {
    let a3 = e19.getBuilder(n2.getZIndex(), `Text`);
    a3.setTextStyle(s2), a3.drawText(t2, r2, i2);
  }
}
var ml = class extends Ac {
  constructor(e19) {
    super(e19), this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this), this.animatingOrInteracting_, this.hitDetectionImageData_ = null, this.clipped_ = false, this.renderedFeatures_ = null, this.renderedRevision_ = -1, this.renderedResolution_ = NaN, this.renderedExtent_ = we(), this.wrappedRenderedExtent_ = we(), this.renderedRotation_, this.renderedCenter_ = null, this.renderedProjection_ = null, this.renderedPixelRatio_ = 1, this.renderedRenderOrder_ = null, this.renderedFrameDeclutter_, this.replayGroup_ = null, this.replayGroupChanged = true, this.clipping = true, this.targetContext_ = null, this.opacity_ = 1;
  }
  renderWorlds(e19, t2, n2) {
    let r2 = t2.extent, i2 = t2.viewState, a2 = i2.center, o2 = i2.resolution, s2 = i2.projection, c2 = i2.rotation, l2 = s2.getExtent(), u2 = this.getLayer().getSource(), d2 = this.getLayer().getDeclutter(), f2 = t2.pixelRatio, p2 = t2.viewHints, m2 = !(p2[ro.ANIMATING] || p2[ro.INTERACTING]), h2 = this.context, g2 = Math.round(L(r2) / o2 * f2), _2 = Math.round(He(r2) / o2 * f2), v2 = u2.getWrapX() && s2.canWrapX(), y2 = v2 ? L(l2) : null, b2 = v2 ? Math.ceil((r2[2] - l2[2]) / y2) + 1 : 1, x2 = v2 ? Math.floor((r2[0] - l2[0]) / y2) : 0;
    do {
      let r3 = this.getRenderTransform(a2, o2, 0, f2, g2, _2, x2 * y2);
      t2.declutter && (r3 = r3.slice(0)), e19.execute(h2, [h2.canvas.width, h2.canvas.height], r3, c2, m2, n2 === void 0 ? Hc : n2 ? Uc : Wc, n2 ? d2 && t2.declutter[d2] : void 0);
    } while (++x2 < b2);
  }
  setDrawContext_() {
    this.opacity_ !== 1 && (this.targetContext_ = this.context, this.context = Ki(this.context.canvas.width, this.context.canvas.height, Dc));
  }
  resetDrawContext_() {
    if (this.opacity_ !== 1) {
      let e19 = this.targetContext_.globalAlpha;
      this.targetContext_.globalAlpha = this.opacity_, this.targetContext_.drawImage(this.context.canvas, 0, 0), this.targetContext_.globalAlpha = e19, Yi(this.context), Dc.push(this.context.canvas), this.context = this.targetContext_, this.targetContext_ = null;
    }
  }
  renderDeclutter(e19) {
    this.replayGroup_ && this.getLayer().getDeclutter() && this.renderWorlds(this.replayGroup_, e19, true);
  }
  renderDeferredInternal(e19) {
    this.replayGroup_ && (this.replayGroup_.renderDeferred(), this.clipped_ && this.context.restore(), this.resetDrawContext_());
  }
  renderFrame(e19, t2) {
    let n2 = e19.layerStatesArray[e19.layerIndex];
    this.opacity_ = n2.opacity;
    let r2 = e19.viewState;
    this.prepareContainer(e19, t2);
    let i2 = this.context, a2 = this.replayGroup_, o2 = a2 && !a2.isEmpty();
    if (!o2 && !(this.getLayer().hasListener(nr.PRERENDER) || this.getLayer().hasListener(nr.POSTRENDER)))
      return null;
    this.setDrawContext_(), this.preRender(i2, e19);
    let s2 = r2.projection;
    if (this.clipped_ = false, o2 && n2.extent && this.clipping) {
      let t3 = sn(n2.extent, s2);
      o2 = Ke(t3, e19.extent), this.clipped_ = o2 && !xe(t3, e19.extent), this.clipped_ && this.clipUnrotated(i2, e19, t3);
    }
    return o2 && this.renderWorlds(a2, e19, !this.getLayer().getDeclutter() && void 0), !e19.declutter && this.clipped_ && i2.restore(), this.postRender(i2, e19), this.renderedRotation_ !== r2.rotation && (this.renderedRotation_ = r2.rotation, this.hitDetectionImageData_ = null), e19.declutter || this.resetDrawContext_(), this.container;
  }
  getFeatures(e19) {
    return new Promise((t2) => {
      if (this.frameState && !this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
        let e20 = this.frameState.size.slice(), t3 = this.renderedCenter_, n2 = this.renderedResolution_, r2 = this.renderedRotation_, i2 = this.renderedProjection_, a2 = this.wrappedRenderedExtent_, o2 = this.getLayer(), s2 = [], c2 = e20[0] * Yc, l2 = e20[1] * Yc;
        s2.push(this.getRenderTransform(t3, n2, r2, Yc, c2, l2, 0).slice());
        let u2 = o2.getSource(), d2 = i2.getExtent();
        if (u2.getWrapX() && i2.canWrapX() && !xe(d2, a2)) {
          let e21 = a2[0], i3 = L(d2), o3 = 0, u3;
          for (; e21 < d2[0]; )
            --o3, u3 = i3 * o3, s2.push(this.getRenderTransform(t3, n2, r2, Yc, c2, l2, u3).slice()), e21 += i3;
          for (o3 = 0, e21 = a2[2]; e21 > d2[2]; )
            ++o3, u3 = i3 * o3, s2.push(this.getRenderTransform(t3, n2, r2, Yc, c2, l2, u3).slice()), e21 -= i3;
        }
        let f2 = nn();
        this.hitDetectionImageData_ = Xc(e20, s2, this.renderedFeatures_, o2.getStyleFunction(), a2, n2, r2, tl(n2, this.renderedPixelRatio_), f2 ? i2 : null);
      }
      t2(Zc(e19, this.renderedFeatures_, this.hitDetectionImageData_));
    });
  }
  forEachFeatureAtCoordinate(e19, t2, n2, r2, i2) {
    if (!this.replayGroup_)
      return;
    let a2 = t2.viewState.resolution, o2 = t2.viewState.rotation, s2 = this.getLayer(), c2 = {}, l2 = function(e20, t3, n3) {
      let a3 = j(e20), o3 = c2[a3];
      if (!o3) {
        if (n3 === 0)
          return c2[a3] = true, r2(e20, s2, t3);
        i2.push(c2[a3] = {feature: e20, layer: s2, geometry: t3, distanceSq: n3, callback: r2});
      } else if (o3 !== true && n3 < o3.distanceSq) {
        if (n3 === 0)
          return c2[a3] = true, i2.splice(i2.lastIndexOf(o3), 1), r2(e20, s2, t3);
        o3.geometry = t3, o3.distanceSq = n3;
      }
    }, u2, d2 = [this.replayGroup_], f2 = this.getLayer().getDeclutter();
    return d2.some((r3) => u2 = r3.forEachFeatureAtCoordinate(e19, a2, o2, n2, l2, f2 && t2.declutter[f2] ? t2.declutter[f2].all().map((e20) => e20.value) : null)), u2;
  }
  handleFontsChanged() {
    let e19 = this.getLayer();
    e19.getVisible() && this.replayGroup_ && e19.changed();
  }
  handleStyleImageChange_(e19) {
    this.renderIfReadyAndVisible();
  }
  prepareFrame(e19) {
    let t2 = this.getLayer(), n2 = t2.getSource();
    if (!n2)
      return false;
    let r2 = e19.viewHints[ro.ANIMATING], i2 = e19.viewHints[ro.INTERACTING], a2 = t2.getUpdateWhileAnimating(), o2 = t2.getUpdateWhileInteracting();
    if (this.ready && !a2 && r2 || !o2 && i2)
      return this.animatingOrInteracting_ = true, true;
    this.animatingOrInteracting_ = false;
    let s2 = e19.extent, c2 = e19.viewState, l2 = c2.projection, u2 = c2.resolution, d2 = e19.pixelRatio, f2 = t2.getRevision(), p2 = t2.getRenderBuffer(), m2 = t2.getRenderOrder();
    m2 === void 0 && (m2 = el);
    let h2 = c2.center.slice(), _2 = _e(s2, p2 * u2), v2 = _2.slice(), y2 = [_2.slice()], b2 = l2.getExtent();
    if (n2.getWrapX() && l2.canWrapX() && !xe(b2, e19.extent)) {
      let e20 = L(b2), t3 = Math.max(L(_2) / 2, e20);
      _2[0] = b2[0] - t3, _2[2] = b2[2] + t3, Nt(h2, l2);
      let n3 = Xe(y2[0], l2);
      n3[0] < b2[0] && n3[2] < b2[2] ? y2.push([n3[0] + e20, n3[1], n3[2] + e20, n3[3]]) : n3[0] > b2[0] && n3[2] > b2[2] && y2.push([n3[0] - e20, n3[1], n3[2] - e20, n3[3]]);
    }
    if (this.ready && this.renderedResolution_ == u2 && this.renderedRevision_ == f2 && this.renderedRenderOrder_ == m2 && this.renderedFrameDeclutter_ === !!e19.declutter && xe(this.wrappedRenderedExtent_, _2))
      return g(this.renderedExtent_, v2) || (this.hitDetectionImageData_ = null, this.renderedExtent_ = v2), this.renderedCenter_ = h2, this.replayGroupChanged = false, true;
    this.replayGroup_ = null;
    let x2 = new Cc(nl(u2, d2), _2, u2, d2), S2 = nn(), C2;
    if (S2) {
      for (let e20 = 0, t3 = y2.length; e20 < t3; ++e20) {
        let t4 = y2[e20], r3 = on(t4, l2);
        n2.loadFeatures(r3, cn(u2, l2), S2);
      }
      C2 = Qt(S2, l2);
    } else
      for (let e20 = 0, t3 = y2.length; e20 < t3; ++e20)
        n2.loadFeatures(y2[e20], u2, l2);
    let w2 = tl(u2, d2), T2 = true, E2 = (e20, n3) => {
      let r3, i3 = e20.getStyleFunction() || t2.getStyleFunction();
      if (i3 && (r3 = i3(e20, u2)), r3) {
        let t3 = this.renderFeature(e20, w2, r3, x2, C2, this.getLayer().getDeclutter(), n3);
        T2 && (T2 = !t3);
      }
    }, D2 = on(_2, l2), O2 = n2.getFeaturesInExtent(D2);
    m2 && O2.sort(m2);
    for (let e20 = 0, t3 = O2.length; e20 < t3; ++e20)
      E2(O2[e20], e20);
    this.renderedFeatures_ = O2, this.ready = T2;
    let k2 = x2.finish(), ee2 = new Gc(_2, u2, d2, n2.getOverlaps(), k2, t2.getRenderBuffer(), !!e19.declutter);
    return this.renderedResolution_ = u2, this.renderedRevision_ = f2, this.renderedRenderOrder_ = m2, this.renderedFrameDeclutter_ = !!e19.declutter, this.renderedExtent_ = v2, this.wrappedRenderedExtent_ = _2, this.renderedCenter_ = h2, this.renderedProjection_ = l2, this.renderedPixelRatio_ = d2, this.replayGroup_ = ee2, this.hitDetectionImageData_ = null, this.replayGroupChanged = true, true;
  }
  renderFeature(e19, t2, n2, r2, i2, a2, o2) {
    if (!n2)
      return false;
    let s2 = false;
    if (Array.isArray(n2))
      for (let c2 = 0, l2 = n2.length; c2 < l2; ++c2)
        s2 = il(r2, e19, n2[c2], t2, this.boundHandleStyleImageChange_, i2, a2, o2) || s2;
    else
      s2 = il(r2, e19, n2, t2, this.boundHandleStyleImageChange_, i2, a2, o2);
    return s2;
  }
}, hl = class extends cc {
  constructor(e19) {
    super(e19);
  }
  createRenderer() {
    return new ml(this);
  }
}, gl = class {
  constructor(e19) {
    this.rbush_ = new oc.default(e19), this.items_ = {};
  }
  insert(e19, t2) {
    let n2 = {minX: e19[0], minY: e19[1], maxX: e19[2], maxY: e19[3], value: t2};
    this.rbush_.insert(n2), this.items_[j(t2)] = n2;
  }
  load(e19, t2) {
    let n2 = Array(t2.length);
    for (let r2 = 0, i2 = t2.length; r2 < i2; r2++) {
      let i3 = e19[r2], a2 = t2[r2], o2 = {minX: i3[0], minY: i3[1], maxX: i3[2], maxY: i3[3], value: a2};
      n2[r2] = o2, this.items_[j(a2)] = o2;
    }
    this.rbush_.load(n2);
  }
  remove(e19) {
    let t2 = j(e19), n2 = this.items_[t2];
    return delete this.items_[t2], this.rbush_.remove(n2) !== null;
  }
  update(e19, t2) {
    let n2 = this.items_[j(t2)];
    ke([n2.minX, n2.minY, n2.maxX, n2.maxY], e19) || (this.remove(t2), this.insert(e19, t2));
  }
  getAll() {
    return this.rbush_.all().map(function(e19) {
      return e19.value;
    });
  }
  getInExtent(e19) {
    let t2 = {minX: e19[0], minY: e19[1], maxX: e19[2], maxY: e19[3]};
    return this.rbush_.search(t2).map(function(e20) {
      return e20.value;
    });
  }
  forEach(e19) {
    return this.forEach_(this.getAll(), e19);
  }
  forEachInExtent(e19, t2) {
    return this.forEach_(this.getInExtent(e19), t2);
  }
  forEach_(e19, t2) {
    let n2;
    for (let r2 = 0, i2 = e19.length; r2 < i2; r2++)
      if (n2 = t2(e19[r2]), n2)
        return n2;
    return n2;
  }
  isEmpty() {
    return w(this.items_);
  }
  clear() {
    this.rbush_.clear(), this.items_ = {};
  }
  getExtent(e19) {
    let t2 = this.rbush_.toJSON();
    return Te(t2.minX, t2.minY, t2.maxX, t2.maxY, e19);
  }
  concat(e19) {
    this.rbush_.load(e19.rbush_.all());
    for (let t2 in e19.items_)
      this.items_[t2] = e19.items_[t2];
  }
};
function _l(e19, t2, n2, r2) {
  let i2 = [], a2 = we();
  for (let o2 = 0, s2 = n2.length; o2 < s2; ++o2) {
    let s3 = n2[o2];
    a2 = Oe(e19, t2, s3[0], r2), i2.push((a2[0] + a2[2]) / 2, (a2[1] + a2[3]) / 2), t2 = s3[s3.length - 1];
  }
  return i2;
}
var vl = le(), yl = class e14 {
  constructor(e19, t2, n2, r2, i2, a2) {
    this.styleFunction, this.extent_, this.id_ = a2, this.type_ = e19, this.flatCoordinates_ = t2, this.flatInteriorPoints_ = null, this.flatMidpoints_ = null, this.ends_ = n2 || null, this.properties_ = i2, this.squaredTolerance_, this.stride_ = r2, this.simplifiedGeometry_;
  }
  get(e19) {
    return this.properties_[e19];
  }
  getExtent() {
    return this.extent_ || (this.extent_ = this.type_ === `Point` ? De(this.flatCoordinates_) : Oe(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2)), this.extent_;
  }
  getFlatInteriorPoint() {
    if (!this.flatInteriorPoints_) {
      let e19 = Re(this.getExtent());
      this.flatInteriorPoints_ = Un(this.flatCoordinates_, 0, this.ends_, 2, e19, 0);
    }
    return this.flatInteriorPoints_;
  }
  getFlatInteriorPoints() {
    if (!this.flatInteriorPoints_) {
      let e19 = $n(this.flatCoordinates_, this.ends_), t2 = _l(this.flatCoordinates_, 0, e19, 2);
      this.flatInteriorPoints_ = Wn(this.flatCoordinates_, 0, e19, 2, t2);
    }
    return this.flatInteriorPoints_;
  }
  getFlatMidpoint() {
    return this.flatMidpoints_ || (this.flatMidpoints_ = ua(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2, 0.5)), this.flatMidpoints_;
  }
  getFlatMidpoints() {
    if (!this.flatMidpoints_) {
      this.flatMidpoints_ = [];
      let e19 = this.flatCoordinates_, t2 = 0, n2 = this.ends_;
      for (let r2 = 0, i2 = n2.length; r2 < i2; ++r2) {
        let i3 = n2[r2], a2 = ua(e19, t2, i3, 2, 0.5);
        h(this.flatMidpoints_, a2), t2 = i3;
      }
    }
    return this.flatMidpoints_;
  }
  getId() {
    return this.id_;
  }
  getOrientedFlatCoordinates() {
    return this.flatCoordinates_;
  }
  getGeometry() {
    return this;
  }
  getSimplifiedGeometry(e19) {
    return this;
  }
  simplifyTransformed(e19, t2) {
    return this;
  }
  getProperties() {
    return this.properties_;
  }
  getPropertiesInternal() {
    return this.properties_;
  }
  getStride() {
    return this.stride_;
  }
  getStyleFunction() {
    return this.styleFunction;
  }
  getType() {
    return this.type_;
  }
  transform(e19) {
    e19 = Gt(e19);
    let t2 = e19.getExtent(), n2 = e19.getWorldExtent();
    if (t2 && n2) {
      let e20 = He(n2) / He(t2);
      de(vl, n2[0], n2[3], e20, -e20, 0, 0, 0), un(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2, vl, this.flatCoordinates_);
    }
  }
  applyTransform(e19) {
    e19(this.flatCoordinates_, this.flatCoordinates_, this.stride_);
  }
  clone() {
    return new e14(this.type_, this.flatCoordinates_.slice(), this.ends_?.slice(), this.stride_, Object.assign({}, this.properties_), this.id_);
  }
  getEnds() {
    return this.ends_;
  }
  enableSimplifyTransformed() {
    return this.simplifyTransformed = x((t2, n2) => {
      if (t2 === this.squaredTolerance_)
        return this.simplifiedGeometry_;
      this.simplifiedGeometry_ = this.clone(), n2 && this.simplifiedGeometry_.applyTransform(n2);
      let r2 = this.simplifiedGeometry_.getFlatCoordinates(), i2;
      switch (this.type_) {
        case `LineString`:
          r2.length = On(r2, 0, this.simplifiedGeometry_.flatCoordinates_.length, this.simplifiedGeometry_.stride_, t2, r2, 0), i2 = [r2.length];
          break;
        case `MultiLineString`:
          i2 = [], r2.length = kn(r2, 0, this.simplifiedGeometry_.ends_, this.simplifiedGeometry_.stride_, t2, r2, 0, i2);
          break;
        case `Polygon`:
          i2 = [], r2.length = Mn(r2, 0, this.simplifiedGeometry_.ends_, this.simplifiedGeometry_.stride_, Math.sqrt(t2), r2, 0, i2);
      }
      return i2 && (this.simplifiedGeometry_ = new e14(this.type_, r2, i2, 2, this.properties_, this.id_)), this.squaredTolerance_ = t2, this.simplifiedGeometry_;
    }), this;
  }
};
yl.prototype.getFlatCoordinates = yl.prototype.getOrientedFlatCoordinates;
var bl = class extends M {
  constructor(e19) {
    super(), this.projection = Gt(e19.projection), this.attributions_ = xl(e19.attributions), this.attributionsCollapsible_ = e19.attributionsCollapsible === void 0 || e19.attributionsCollapsible, this.loading = false, this.state_ = e19.state === void 0 ? `ready` : e19.state, this.wrapX_ = e19.wrapX !== void 0 && e19.wrapX, this.interpolate_ = !!e19.interpolate, this.viewResolver = null, this.viewRejector = null;
    let t2 = this;
    this.viewPromise_ = new Promise(function(e20, n2) {
      t2.viewResolver = e20, t2.viewRejector = n2;
    });
  }
  getAttributions() {
    return this.attributions_;
  }
  getAttributionsCollapsible() {
    return this.attributionsCollapsible_;
  }
  getProjection() {
    return this.projection;
  }
  getResolutions(e19) {
    return null;
  }
  getView() {
    return this.viewPromise_;
  }
  getState() {
    return this.state_;
  }
  getWrapX() {
    return this.wrapX_;
  }
  getInterpolate() {
    return this.interpolate_;
  }
  refresh() {
    this.changed();
  }
  setAttributions(e19) {
    this.attributions_ = xl(e19), this.changed();
  }
  setState(e19) {
    this.state_ = e19, this.changed();
  }
};
function xl(e19) {
  return e19 ? Array.isArray(e19) ? function(t2) {
    return e19;
  } : typeof e19 == `function` ? e19 : function(t2) {
    return [e19];
  } : null;
}
var Sl = {ADDFEATURE: `addfeature`, CHANGEFEATURE: `changefeature`, CLEAR: `clear`, REMOVEFEATURE: `removefeature`, FEATURESLOADSTART: `featuresloadstart`, FEATURESLOADEND: `featuresloadend`, FEATURESLOADERROR: `featuresloaderror`};
function Cl(e19, t2) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
}
var wl = false;
function Tl(e19, t2, n2, r2, i2, a2, o2) {
  let s2 = new XMLHttpRequest();
  s2.open(`GET`, typeof e19 == `function` ? e19(n2, r2, i2) : e19, true), t2.getType() == `arraybuffer` && (s2.responseType = `arraybuffer`), s2.withCredentials = wl, s2.onload = function(e20) {
    if (!s2.status || s2.status >= 200 && s2.status < 300) {
      let e21 = t2.getType();
      try {
        let r3;
        e21 == `text` || e21 == `json` ? r3 = s2.responseText : e21 == `xml` ? r3 = s2.responseXML || s2.responseText : e21 == `arraybuffer` && (r3 = s2.response), r3 ? a2(t2.readFeatures(r3, {extent: n2, featureProjection: i2}), t2.readProjection(r3)) : o2();
      } catch {
        o2();
      }
    } else
      o2();
  }, s2.onerror = o2, s2.send();
}
function El(e19, t2) {
  return function(n2, r2, i2, a2, o2) {
    let s2 = this;
    Tl(e19, t2, n2, r2, i2, function(e20, t3) {
      s2.addFeatures(e20), a2 !== void 0 && a2(e20);
    }, o2 || b);
  };
}
var Dl = class extends c {
  constructor(e19, t2, n2) {
    super(e19), this.feature = t2, this.features = n2;
  }
}, Ol = class extends bl {
  constructor(e19) {
    e19 || (e19 = {}), super({attributions: e19.attributions, interpolate: true, projection: void 0, state: `ready`, wrapX: e19.wrapX === void 0 || e19.wrapX}), this.on, this.once, this.un, this.loader_ = b, this.format_ = e19.format, this.overlaps_ = e19.overlaps === void 0 || e19.overlaps, this.url_ = e19.url, e19.loader === void 0 ? this.url_ !== void 0 && (P(this.format_, "`format` must be set when `url` is set"), this.loader_ = El(this.url_, this.format_)) : this.loader_ = e19.loader, this.strategy_ = e19.strategy === void 0 ? Cl : e19.strategy;
    let t2 = e19.useSpatialIndex === void 0 || e19.useSpatialIndex;
    this.featuresRtree_ = t2 ? new gl() : null, this.loadedExtentsRtree_ = new gl(), this.loadingExtentsCount_ = 0, this.nullGeometryFeatures_ = {}, this.idIndex_ = {}, this.uidIndex_ = {}, this.featureChangeKeys_ = {}, this.featuresCollection_ = null;
    let n2, r2;
    Array.isArray(e19.features) ? r2 = e19.features : e19.features && (n2 = e19.features, r2 = n2.getArray()), !t2 && n2 === void 0 && (n2 = new oe(r2)), r2 !== void 0 && this.addFeaturesInternal(r2), n2 !== void 0 && this.bindFeaturesCollection_(n2);
  }
  addFeature(e19) {
    this.addFeatureInternal(e19), this.changed();
  }
  addFeatureInternal(e19) {
    let t2 = j(e19);
    if (!this.addToIndex_(t2, e19)) {
      this.featuresCollection_ && this.featuresCollection_.remove(e19);
      return;
    }
    this.setupChangeEvents_(t2, e19);
    let n2 = e19.getGeometry();
    if (n2) {
      let t3 = n2.getExtent();
      this.featuresRtree_ && this.featuresRtree_.insert(t3, e19);
    } else
      this.nullGeometryFeatures_[t2] = e19;
    this.dispatchEvent(new Dl(Sl.ADDFEATURE, e19));
  }
  setupChangeEvents_(e19, t2) {
    t2 instanceof yl || (this.featureChangeKeys_[e19] = [D(t2, E.CHANGE, this.handleFeatureChange_, this), D(t2, l.PROPERTYCHANGE, this.handleFeatureChange_, this)]);
  }
  addToIndex_(e19, t2) {
    let n2 = true;
    if (t2.getId() !== void 0) {
      let e20 = String(t2.getId());
      if (!(e20 in this.idIndex_))
        this.idIndex_[e20] = t2;
      else if (t2 instanceof yl) {
        let r2 = this.idIndex_[e20];
        r2 instanceof yl ? Array.isArray(r2) ? r2.push(t2) : this.idIndex_[e20] = [r2, t2] : n2 = false;
      } else
        n2 = false;
    }
    return n2 && (P(!(e19 in this.uidIndex_), "The passed `feature` was already added to the source"), this.uidIndex_[e19] = t2), n2;
  }
  addFeatures(e19) {
    this.addFeaturesInternal(e19), this.changed();
  }
  addFeaturesInternal(e19) {
    let t2 = [], n2 = [], r2 = [];
    for (let t3 = 0, r3 = e19.length; t3 < r3; t3++) {
      let r4 = e19[t3], i2 = j(r4);
      this.addToIndex_(i2, r4) && n2.push(r4);
    }
    for (let e20 = 0, i2 = n2.length; e20 < i2; e20++) {
      let i3 = n2[e20], a2 = j(i3);
      this.setupChangeEvents_(a2, i3);
      let o2 = i3.getGeometry();
      if (o2) {
        let e21 = o2.getExtent();
        t2.push(e21), r2.push(i3);
      } else
        this.nullGeometryFeatures_[a2] = i3;
    }
    if (this.featuresRtree_ && this.featuresRtree_.load(t2, r2), this.hasListener(Sl.ADDFEATURE))
      for (let e20 = 0, t3 = n2.length; e20 < t3; e20++)
        this.dispatchEvent(new Dl(Sl.ADDFEATURE, n2[e20]));
  }
  bindFeaturesCollection_(e19) {
    let t2 = false;
    this.addEventListener(Sl.ADDFEATURE, function(n2) {
      t2 || (t2 = (t2 = true, e19.push(n2.feature), false));
    }), this.addEventListener(Sl.REMOVEFEATURE, function(n2) {
      t2 || (t2 = (t2 = true, e19.remove(n2.feature), false));
    }), e19.addEventListener(N.ADD, (e20) => {
      t2 || (t2 = (t2 = true, this.addFeature(e20.element), false));
    }), e19.addEventListener(N.REMOVE, (e20) => {
      t2 || (t2 = (t2 = true, this.removeFeature(e20.element), false));
    }), this.featuresCollection_ = e19;
  }
  clear(e19) {
    if (e19) {
      for (let e20 in this.featureChangeKeys_)
        this.featureChangeKeys_[e20].forEach(k);
      this.featuresCollection_ || (this.featureChangeKeys_ = {}, this.idIndex_ = {}, this.uidIndex_ = {});
    } else if (this.featuresRtree_) {
      this.featuresRtree_.forEach((e20) => {
        this.removeFeatureInternal(e20);
      });
      for (let e20 in this.nullGeometryFeatures_)
        this.removeFeatureInternal(this.nullGeometryFeatures_[e20]);
    }
    this.featuresCollection_ && this.featuresCollection_.clear(), this.featuresRtree_ && this.featuresRtree_.clear(), this.nullGeometryFeatures_ = {};
    let t2 = new Dl(Sl.CLEAR);
    this.dispatchEvent(t2), this.changed();
  }
  forEachFeature(e19) {
    if (this.featuresRtree_)
      return this.featuresRtree_.forEach(e19);
    this.featuresCollection_ && this.featuresCollection_.forEach(e19);
  }
  forEachFeatureAtCoordinateDirect(e19, t2) {
    let n2 = [e19[0], e19[1], e19[0], e19[1]];
    return this.forEachFeatureInExtent(n2, function(n3) {
      let r2 = n3.getGeometry();
      if (r2 instanceof yl || r2.intersectsCoordinate(e19))
        return t2(n3);
    });
  }
  forEachFeatureInExtent(e19, t2) {
    if (this.featuresRtree_)
      return this.featuresRtree_.forEachInExtent(e19, t2);
    this.featuresCollection_ && this.featuresCollection_.forEach(t2);
  }
  forEachFeatureIntersectingExtent(e19, t2) {
    return this.forEachFeatureInExtent(e19, function(n2) {
      let r2 = n2.getGeometry();
      if (r2 instanceof yl || r2.intersectsExtent(e19)) {
        let e20 = t2(n2);
        if (e20)
          return e20;
      }
    });
  }
  getFeaturesCollection() {
    return this.featuresCollection_;
  }
  getFeatures() {
    let e19;
    return this.featuresCollection_ ? e19 = this.featuresCollection_.getArray().slice(0) : this.featuresRtree_ && (e19 = this.featuresRtree_.getAll(), w(this.nullGeometryFeatures_) || h(e19, Object.values(this.nullGeometryFeatures_))), e19;
  }
  getFeaturesAtCoordinate(e19) {
    let t2 = [];
    return this.forEachFeatureAtCoordinateDirect(e19, function(e20) {
      t2.push(e20);
    }), t2;
  }
  getFeaturesInExtent(e19, t2) {
    if (this.featuresRtree_) {
      if (!(t2 && t2.canWrapX() && this.getWrapX()))
        return this.featuresRtree_.getInExtent(e19);
      let n2 = Ze(e19, t2);
      return [].concat(...n2.map((e20) => this.featuresRtree_.getInExtent(e20)));
    }
    return this.featuresCollection_ ? this.featuresCollection_.getArray().slice(0) : [];
  }
  getClosestFeatureToCoordinate(e19, t2) {
    let n2 = e19[0], r2 = e19[1], i2 = null, a2 = [NaN, NaN], o2 = 1 / 0, s2 = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
    return t2 || (t2 = v), this.featuresRtree_.forEachInExtent(s2, function(e20) {
      if (t2(e20)) {
        let t3 = e20.getGeometry(), c2 = o2;
        if (o2 = t3 instanceof yl ? 0 : t3.closestPointXY(n2, r2, a2, o2), o2 < c2) {
          i2 = e20;
          let t4 = Math.sqrt(o2);
          s2[0] = n2 - t4, s2[1] = r2 - t4, s2[2] = n2 + t4, s2[3] = r2 + t4;
        }
      }
    }), i2;
  }
  getExtent(e19) {
    return this.featuresRtree_.getExtent(e19);
  }
  getFeatureById(e19) {
    let t2 = this.idIndex_[e19.toString()];
    return t2 === void 0 ? null : t2;
  }
  getFeatureByUid(e19) {
    let t2 = this.uidIndex_[e19];
    return t2 === void 0 ? null : t2;
  }
  getFormat() {
    return this.format_;
  }
  getOverlaps() {
    return this.overlaps_;
  }
  getUrl() {
    return this.url_;
  }
  handleFeatureChange_(e19) {
    let t2 = e19.target, n2 = j(t2), r2 = t2.getGeometry();
    if (!r2)
      n2 in this.nullGeometryFeatures_ || (this.featuresRtree_ && this.featuresRtree_.remove(t2), this.nullGeometryFeatures_[n2] = t2);
    else {
      let e20 = r2.getExtent();
      n2 in this.nullGeometryFeatures_ ? (delete this.nullGeometryFeatures_[n2], this.featuresRtree_ && this.featuresRtree_.insert(e20, t2)) : this.featuresRtree_ && this.featuresRtree_.update(e20, t2);
    }
    let i2 = t2.getId();
    if (i2 !== void 0) {
      let e20 = i2.toString();
      this.idIndex_[e20] !== t2 && (this.removeFromIdIndex_(t2), this.idIndex_[e20] = t2);
    } else
      this.removeFromIdIndex_(t2), this.uidIndex_[n2] = t2;
    this.changed(), this.dispatchEvent(new Dl(Sl.CHANGEFEATURE, t2));
  }
  hasFeature(e19) {
    let t2 = e19.getId();
    return t2 === void 0 ? j(e19) in this.uidIndex_ : t2 in this.idIndex_;
  }
  isEmpty() {
    return this.featuresRtree_ ? this.featuresRtree_.isEmpty() && w(this.nullGeometryFeatures_) : !this.featuresCollection_ || this.featuresCollection_.getLength() === 0;
  }
  loadFeatures(e19, t2, n2) {
    let r2 = this.loadedExtentsRtree_, i2 = this.strategy_(e19, t2, n2);
    for (let e20 = 0, a2 = i2.length; e20 < a2; ++e20) {
      let a3 = i2[e20];
      r2.forEachInExtent(a3, function(e21) {
        return xe(e21.extent, a3);
      }) || (++this.loadingExtentsCount_, this.dispatchEvent(new Dl(Sl.FEATURESLOADSTART)), this.loader_.call(this, a3, t2, n2, (e21) => {
        --this.loadingExtentsCount_, this.dispatchEvent(new Dl(Sl.FEATURESLOADEND, void 0, e21));
      }, () => {
        --this.loadingExtentsCount_, this.dispatchEvent(new Dl(Sl.FEATURESLOADERROR));
      }), r2.insert(a3, {extent: a3.slice()}));
    }
    this.loading = this.loader_.length < 4 ? false : this.loadingExtentsCount_ > 0;
  }
  refresh() {
    this.clear(true), this.loadedExtentsRtree_.clear(), super.refresh();
  }
  removeLoadedExtent(e19) {
    let t2 = this.loadedExtentsRtree_, n2;
    t2.forEachInExtent(e19, function(t3) {
      if (ke(t3.extent, e19))
        return n2 = t3, true;
    }), n2 && t2.remove(n2);
  }
  removeFeatures(e19) {
    let t2 = [];
    for (let n2 = 0, r2 = e19.length; n2 < r2; ++n2) {
      let r3 = e19[n2], i2 = this.removeFeatureInternal(r3);
      i2 && t2.push(i2);
    }
    t2.length > 0 && this.changed();
  }
  removeFeature(e19) {
    e19 && this.removeFeatureInternal(e19) && this.changed();
  }
  removeFeatureInternal(e19) {
    let t2 = j(e19);
    if (!(t2 in this.uidIndex_))
      return;
    t2 in this.nullGeometryFeatures_ ? delete this.nullGeometryFeatures_[t2] : this.featuresRtree_ && this.featuresRtree_.remove(e19), this.featureChangeKeys_[t2]?.forEach(k), delete this.featureChangeKeys_[t2];
    let n2 = e19.getId();
    if (n2 !== void 0) {
      let t3 = n2.toString(), r2 = this.idIndex_[t3];
      r2 === e19 ? delete this.idIndex_[t3] : Array.isArray(r2) && (r2.splice(r2.indexOf(e19), 1), r2.length === 1 && (this.idIndex_[t3] = r2[0]));
    }
    return delete this.uidIndex_[t2], this.hasListener(Sl.REMOVEFEATURE) && this.dispatchEvent(new Dl(Sl.REMOVEFEATURE, e19)), e19;
  }
  removeFromIdIndex_(e19) {
    let t2 = false;
    for (let n2 in this.idIndex_) {
      let r2 = this.idIndex_[n2];
      if (e19 instanceof yl && Array.isArray(r2) && r2.includes(e19))
        r2.splice(r2.indexOf(e19), 1);
      else if (this.idIndex_[n2] === e19) {
        delete this.idIndex_[n2], t2 = true;
        break;
      }
    }
    return t2;
  }
  setLoader(e19) {
    this.loader_ = e19;
  }
  setUrl(e19) {
    P(this.format_, "`format` must be set when `url` is set"), this.url_ = e19, this.setLoader(El(e19, this.format_));
  }
}, Q = {IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4}, kl = class extends T {
  constructor(e19, t2, n2) {
    super(), n2 || (n2 = {}), this.tileCoord = e19, this.state = t2, this.interimTile = null, this.key = ``, this.transition_ = n2.transition === void 0 ? 250 : n2.transition, this.transitionStarts_ = {}, this.interpolate = !!n2.interpolate;
  }
  changed() {
    this.dispatchEvent(E.CHANGE);
  }
  release() {
    this.state === Q.ERROR && this.setState(Q.EMPTY);
  }
  getKey() {
    return this.key + `/` + this.tileCoord;
  }
  getInterimTile() {
    let e19 = this.interimTile;
    if (!e19)
      return this;
    do {
      if (e19.getState() == Q.LOADED)
        return this.transition_ = 0, e19;
      e19 = e19.interimTile;
    } while (e19);
    return this;
  }
  refreshInterimChain() {
    let e19 = this.interimTile;
    if (!e19)
      return;
    let t2 = this;
    do {
      if (e19.getState() == Q.LOADED) {
        e19.interimTile = null;
        break;
      }
      e19.getState() == Q.LOADING ? t2 = e19 : e19.getState() == Q.IDLE ? t2.interimTile = e19.interimTile : t2 = e19, e19 = t2.interimTile;
    } while (e19);
  }
  getTileCoord() {
    return this.tileCoord;
  }
  getState() {
    return this.state;
  }
  setState(e19) {
    if (this.state !== Q.ERROR && this.state > e19)
      throw Error(`Tile load sequence violation`);
    this.state = e19, this.changed();
  }
  load() {
    A();
  }
  getAlpha(e19, t2) {
    if (!this.transition_)
      return 1;
    let n2 = this.transitionStarts_[e19];
    if (!n2)
      n2 = t2, this.transitionStarts_[e19] = n2;
    else if (n2 === -1)
      return 1;
    let r2 = t2 - n2 + 1e3 / 60;
    return r2 >= this.transition_ ? 1 : _o(r2 / this.transition_);
  }
  inTransition(e19) {
    return this.transition_ ? this.transitionStarts_[e19] !== -1 : false;
  }
  endTransition(e19) {
    this.transition_ && (this.transitionStarts_[e19] = -1);
  }
}, Al = class extends kl {
  constructor(e19, t2, n2, r2, i2, a2) {
    super(e19, t2, a2), this.crossOrigin_ = r2, this.src_ = n2, this.key = n2, this.image_ = new Image(), r2 !== null && (this.image_.crossOrigin = r2), this.unlisten_ = null, this.tileLoadFunction_ = i2;
  }
  getImage() {
    return this.image_;
  }
  setImage(e19) {
    this.image_ = e19, this.state = Q.LOADED, this.unlistenImage_(), this.changed();
  }
  handleImageError_() {
    this.state = Q.ERROR, this.unlistenImage_(), this.image_ = jl(), this.changed();
  }
  handleImageLoad_() {
    let e19 = this.image_;
    this.state = e19.naturalWidth && e19.naturalHeight ? Q.LOADED : Q.EMPTY, this.unlistenImage_(), this.changed();
  }
  load() {
    this.state == Q.ERROR && (this.state = Q.IDLE, this.image_ = new Image(), this.crossOrigin_ !== null && (this.image_.crossOrigin = this.crossOrigin_)), this.state == Q.IDLE && (this.state = Q.LOADING, this.changed(), this.tileLoadFunction_(this, this.src_), this.unlisten_ = ea(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this)));
  }
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_ = (this.unlisten_(), null));
  }
};
function jl() {
  let e19 = Ki(1, 1);
  return e19.fillStyle = `rgba(0,0,0,0)`, e19.fillRect(0, 0, 1, 1), e19.canvas;
}
var Ml = class {
  constructor(e19, t2, n2) {
    this.decay_ = e19, this.minVelocity_ = t2, this.delay_ = n2, this.points_ = [], this.angle_ = 0, this.initialVelocity_ = 0;
  }
  begin() {
    this.points_.length = 0, this.angle_ = 0, this.initialVelocity_ = 0;
  }
  update(e19, t2) {
    this.points_.push(e19, t2, Date.now());
  }
  end() {
    if (this.points_.length < 6)
      return false;
    let e19 = Date.now() - this.delay_, t2 = this.points_.length - 3;
    if (this.points_[t2 + 2] < e19)
      return false;
    let n2 = t2 - 3;
    for (; n2 > 0 && this.points_[n2 + 2] > e19; )
      n2 -= 3;
    let r2 = this.points_[t2 + 2] - this.points_[n2 + 2];
    if (r2 < 1e3 / 60)
      return false;
    let i2 = this.points_[t2] - this.points_[n2], a2 = this.points_[t2 + 1] - this.points_[n2 + 1];
    return this.angle_ = Math.atan2(a2, i2), this.initialVelocity_ = Math.sqrt(i2 * i2 + a2 * a2) / r2, this.initialVelocity_ > this.minVelocity_;
  }
  getDistance() {
    return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
  }
  getAngle() {
    return this.angle_;
  }
}, Nl = class extends u {
  constructor(e19) {
    super(), this.map_ = e19;
  }
  dispatchRenderEvent(e19, t2) {
    A();
  }
  calculateMatrices2D(e19) {
    let t2 = e19.viewState, n2 = e19.coordinateToPixelTransform, r2 = e19.pixelToCoordinateTransform;
    de(n2, e19.size[0] / 2, e19.size[1] / 2, 1 / t2.resolution, -1 / t2.resolution, -t2.rotation, -t2.center[0], -t2.center[1]), fe(r2, n2);
  }
  forEachFeatureAtCoordinate(e19, t2, n2, r2, i2, a2, o2, s2) {
    let c2, l2 = t2.viewState;
    function u2(e20, t3, n3, r3) {
      return i2.call(a2, t3, e20 ? n3 : null, r3);
    }
    let d2 = l2.projection, f2 = Nt(e19.slice(), d2), p2 = [[0, 0]];
    if (d2.canWrapX() && r2) {
      let e20 = L(d2.getExtent());
      p2.push([-e20, 0], [e20, 0]);
    }
    let m2 = t2.layerStatesArray, h2 = m2.length, g2 = [], _2 = [];
    for (let r3 = 0; r3 < p2.length; r3++)
      for (let i3 = h2 - 1; i3 >= 0; --i3) {
        let a3 = m2[i3], d3 = a3.layer;
        if (d3.hasRenderer() && Ao(a3, l2) && o2.call(s2, d3)) {
          let i4 = d3.getRenderer(), o3 = d3.getSource();
          if (i4 && o3) {
            let s3 = o3.getWrapX() ? f2 : e19, l3 = u2.bind(null, a3.managed);
            _2[0] = s3[0] + p2[r3][0], _2[1] = s3[1] + p2[r3][1], c2 = i4.forEachFeatureAtCoordinate(_2, t2, n2, l3, g2);
          }
          if (c2)
            return c2;
        }
      }
    if (g2.length === 0)
      return;
    let v2 = 1 / g2.length;
    return g2.forEach((e20, t3) => e20.distanceSq += t3 * v2), g2.sort((e20, t3) => e20.distanceSq - t3.distanceSq), g2.some((e20) => c2 = e20.callback(e20.feature, e20.layer, e20.geometry)), c2;
  }
  hasFeatureAtCoordinate(e19, t2, n2, r2, i2, a2) {
    return this.forEachFeatureAtCoordinate(e19, t2, n2, r2, v, this, i2, a2) !== void 0;
  }
  getMap() {
    return this.map_;
  }
  renderFrame(e19) {
    A();
  }
  scheduleExpireIconCache(e19) {
    aa.canExpireCache() && e19.postRenderFunctions.push(Pl);
  }
};
function Pl(e19, t2) {
  aa.expire();
}
var Fl = class extends Nl {
  constructor(e19) {
    super(e19), this.fontChangeListenerKey_ = D(Fa, l.PROPERTYCHANGE, e19.redrawText.bind(e19)), this.element_ = document.createElement(`div`);
    let t2 = this.element_.style;
    t2.position = `absolute`, t2.width = `100%`, t2.height = `100%`, t2.zIndex = `0`, this.element_.className = ba + ` ol-layers`;
    let n2 = e19.getViewport();
    n2.insertBefore(this.element_, n2.firstChild || null), this.children_ = [], this.renderedVisible_ = true;
  }
  dispatchRenderEvent(e19, t2) {
    let n2 = this.getMap();
    if (n2.hasListener(e19)) {
      let r2 = new Tc(e19, void 0, t2);
      n2.dispatchEvent(r2);
    }
  }
  disposeInternal() {
    k(this.fontChangeListenerKey_), this.element_.parentNode.removeChild(this.element_), super.disposeInternal();
  }
  renderFrame(e19) {
    if (!e19) {
      this.renderedVisible_ && (this.renderedVisible_ = (this.element_.style.display = `none`, false));
      return;
    }
    this.calculateMatrices2D(e19), this.dispatchRenderEvent(nr.PRECOMPOSE, e19);
    let t2 = e19.layerStatesArray.sort(function(e20, t3) {
      return e20.zIndex - t3.zIndex;
    });
    t2.some((e20) => e20.layer instanceof cc && e20.layer.getDeclutter()) && (e19.declutter = {});
    let n2 = e19.viewState;
    this.children_.length = 0;
    let r2 = [], i2 = null;
    for (let a2 = 0, o2 = t2.length; a2 < o2; ++a2) {
      let o3 = t2[a2];
      e19.layerIndex = a2;
      let s2 = o3.layer, c2 = s2.getSourceState();
      if (!Ao(o3, n2) || c2 != `ready` && c2 != `undefined`) {
        s2.unrender();
        continue;
      }
      let l2 = s2.render(e19, i2);
      l2 && (l2 !== i2 && (this.children_.push(l2), i2 = l2), r2.push(o3));
    }
    this.declutter(e19, r2), $i(this.element_, this.children_), this.dispatchRenderEvent(nr.POSTCOMPOSE, e19), this.renderedVisible_ || (this.renderedVisible_ = (this.element_.style.display = ``, true)), this.scheduleExpireIconCache(e19);
  }
  declutter(e19, t2) {
    if (e19.declutter) {
      for (let n2 = t2.length - 1; n2 >= 0; --n2) {
        let r2 = t2[n2], i2 = r2.layer;
        i2.getDeclutter() && i2.renderDeclutter(e19, r2);
      }
      t2.forEach((t3) => t3.layer.renderDeferred(e19));
    }
  }
}, Il = class extends c {
  constructor(e19, t2) {
    super(e19), this.layer = t2;
  }
}, Ll = {LAYERS: `layers`}, Rl = class e15 extends no {
  constructor(e19) {
    e19 || (e19 = {});
    let t2 = Object.assign({}, e19);
    delete t2.layers;
    let n2 = e19.layers;
    super(t2), this.on, this.once, this.un, this.layersListenerKeys_ = [], this.listenerKeys_ = {}, this.addChangeListener(Ll.LAYERS, this.handleLayersChanged_), n2 ? Array.isArray(n2) ? n2 = new oe(n2.slice(), {unique: true}) : P(typeof n2.getArray == `function`, "Expected `layers` to be an array or a `Collection`") : n2 = new oe(void 0, {unique: true}), this.setLayers(n2);
  }
  handleLayerChange_() {
    this.changed();
  }
  handleLayersChanged_() {
    this.layersListenerKeys_.forEach(k), this.layersListenerKeys_.length = 0;
    let e19 = this.getLayers();
    this.layersListenerKeys_.push(D(e19, N.ADD, this.handleLayersAdd_, this), D(e19, N.REMOVE, this.handleLayersRemove_, this));
    for (let e20 in this.listenerKeys_)
      this.listenerKeys_[e20].forEach(k);
    C(this.listenerKeys_);
    let t2 = e19.getArray();
    for (let e20 = 0, n2 = t2.length; e20 < n2; e20++) {
      let n3 = t2[e20];
      this.registerLayerListeners_(n3), this.dispatchEvent(new Il(`addlayer`, n3));
    }
    this.changed();
  }
  registerLayerListeners_(t2) {
    let n2 = [D(t2, l.PROPERTYCHANGE, this.handleLayerChange_, this), D(t2, E.CHANGE, this.handleLayerChange_, this)];
    t2 instanceof e15 && n2.push(D(t2, `addlayer`, this.handleLayerGroupAdd_, this), D(t2, `removelayer`, this.handleLayerGroupRemove_, this)), this.listenerKeys_[j(t2)] = n2;
  }
  handleLayerGroupAdd_(e19) {
    this.dispatchEvent(new Il(`addlayer`, e19.layer));
  }
  handleLayerGroupRemove_(e19) {
    this.dispatchEvent(new Il(`removelayer`, e19.layer));
  }
  handleLayersAdd_(e19) {
    let t2 = e19.element;
    this.registerLayerListeners_(t2), this.dispatchEvent(new Il(`addlayer`, t2)), this.changed();
  }
  handleLayersRemove_(e19) {
    let t2 = e19.element, n2 = j(t2);
    this.listenerKeys_[n2].forEach(k), delete this.listenerKeys_[n2], this.dispatchEvent(new Il(`removelayer`, t2)), this.changed();
  }
  getLayers() {
    return this.get(Ll.LAYERS);
  }
  setLayers(e19) {
    let t2 = this.getLayers();
    if (t2) {
      let e20 = t2.getArray();
      for (let t3 = 0, n2 = e20.length; t3 < n2; ++t3)
        this.dispatchEvent(new Il(`removelayer`, e20[t3]));
    }
    this.set(Ll.LAYERS, e19);
  }
  getLayersArray(e19) {
    return e19 = e19 === void 0 ? [] : e19, this.getLayers().forEach(function(t2) {
      t2.getLayersArray(e19);
    }), e19;
  }
  getLayerStatesArray(e19) {
    let t2 = e19 === void 0 ? [] : e19, n2 = t2.length;
    this.getLayers().forEach(function(e20) {
      e20.getLayerStatesArray(t2);
    });
    let r2 = this.getLayerState(), i2 = r2.zIndex;
    !e19 && r2.zIndex === void 0 && (i2 = 0);
    for (let e20 = n2, a2 = t2.length; e20 < a2; e20++) {
      let n3 = t2[e20];
      n3.opacity *= r2.opacity, n3.visible = n3.visible && r2.visible, n3.maxResolution = Math.min(n3.maxResolution, r2.maxResolution), n3.minResolution = Math.max(n3.minResolution, r2.minResolution), n3.minZoom = Math.max(n3.minZoom, r2.minZoom), n3.maxZoom = Math.min(n3.maxZoom, r2.maxZoom), r2.extent !== void 0 && (n3.extent = n3.extent === void 0 ? r2.extent : Ue(n3.extent, r2.extent)), n3.zIndex === void 0 && (n3.zIndex = i2);
    }
    return t2;
  }
  getSourceState() {
    return `ready`;
  }
}, zl = class extends c {
  constructor(e19, t2, n2) {
    super(e19), this.map = t2, this.frameState = n2 === void 0 ? null : n2;
  }
}, Bl = class extends zl {
  constructor(e19, t2, n2, r2, i2, a2) {
    super(e19, t2, i2), this.originalEvent = n2, this.pixel_ = null, this.coordinate_ = null, this.dragging = r2 !== void 0 && r2, this.activePointers = a2;
  }
  get pixel() {
    return this.pixel_ || (this.pixel_ = this.map.getEventPixel(this.originalEvent)), this.pixel_;
  }
  set pixel(e19) {
    this.pixel_ = e19;
  }
  get coordinate() {
    return this.coordinate_ || (this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel)), this.coordinate_;
  }
  set coordinate(e19) {
    this.coordinate_ = e19;
  }
  preventDefault() {
    super.preventDefault(), `preventDefault` in this.originalEvent && this.originalEvent.preventDefault();
  }
  stopPropagation() {
    super.stopPropagation(), `stopPropagation` in this.originalEvent && this.originalEvent.stopPropagation();
  }
}, $ = {SINGLECLICK: `singleclick`, CLICK: E.CLICK, DBLCLICK: E.DBLCLICK, POINTERDRAG: `pointerdrag`, POINTERMOVE: `pointermove`, POINTERDOWN: `pointerdown`, POINTERUP: `pointerup`, POINTEROVER: `pointerover`, POINTEROUT: `pointerout`, POINTERENTER: `pointerenter`, POINTERLEAVE: `pointerleave`, POINTERCANCEL: `pointercancel`}, Vl = {POINTERMOVE: `pointermove`, POINTERDOWN: `pointerdown`, POINTERUP: `pointerup`, POINTEROVER: `pointerover`, POINTEROUT: `pointerout`, POINTERENTER: `pointerenter`, POINTERLEAVE: `pointerleave`, POINTERCANCEL: `pointercancel`}, Hl = class extends T {
  constructor(e19, t2) {
    super(e19), this.map_ = e19, this.clickTimeoutId_, this.emulateClicks_ = false, this.dragging_ = false, this.dragListenerKeys_ = [], this.moveTolerance_ = t2 === void 0 ? 1 : t2, this.down_ = null;
    let n2 = this.map_.getViewport();
    this.activePointers_ = [], this.trackedTouches_ = {}, this.element_ = n2, this.pointerdownListenerKey_ = D(n2, Vl.POINTERDOWN, this.handlePointerDown_, this), this.originalPointerMoveEvent_, this.relayedListenerKey_ = D(n2, Vl.POINTERMOVE, this.relayMoveEvent_, this), this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this), this.element_.addEventListener(E.TOUCHMOVE, this.boundHandleTouchMove_, Gi ? {passive: false} : false);
  }
  emulateClick_(e19) {
    let t2 = new Bl($.CLICK, this.map_, e19);
    this.dispatchEvent(t2), this.clickTimeoutId_ === void 0 ? this.clickTimeoutId_ = setTimeout(() => {
      this.clickTimeoutId_ = void 0;
      let t3 = new Bl($.SINGLECLICK, this.map_, e19);
      this.dispatchEvent(t3);
    }, 250) : (clearTimeout(this.clickTimeoutId_), this.clickTimeoutId_ = void 0, t2 = new Bl($.DBLCLICK, this.map_, e19), this.dispatchEvent(t2));
  }
  updateActivePointers_(e19) {
    let t2 = e19, n2 = t2.pointerId;
    if (t2.type == $.POINTERUP || t2.type == $.POINTERCANCEL) {
      delete this.trackedTouches_[n2];
      for (let e20 in this.trackedTouches_)
        if (this.trackedTouches_[e20].target !== t2.target) {
          delete this.trackedTouches_[e20];
          break;
        }
    } else
      (t2.type == $.POINTERDOWN || t2.type == $.POINTERMOVE) && (this.trackedTouches_[n2] = t2);
    this.activePointers_ = Object.values(this.trackedTouches_);
  }
  handlePointerUp_(e19) {
    this.updateActivePointers_(e19);
    let t2 = new Bl($.POINTERUP, this.map_, e19, void 0, void 0, this.activePointers_);
    this.dispatchEvent(t2), this.emulateClicks_ && !t2.defaultPrevented && !this.dragging_ && this.isMouseActionButton_(e19) && this.emulateClick_(this.down_), this.activePointers_.length === 0 && (this.dragListenerKeys_.forEach(k), this.dragListenerKeys_.length = 0, this.dragging_ = false, this.down_ = null);
  }
  isMouseActionButton_(e19) {
    return e19.button === 0;
  }
  handlePointerDown_(e19) {
    this.emulateClicks_ = this.activePointers_.length === 0, this.updateActivePointers_(e19);
    let t2 = new Bl($.POINTERDOWN, this.map_, e19, void 0, void 0, this.activePointers_);
    if (this.dispatchEvent(t2), this.down_ = new PointerEvent(e19.type, e19), Object.defineProperty(this.down_, "target", {writable: false, value: e19.target}), this.dragListenerKeys_.length === 0) {
      let e20 = this.map_.getOwnerDocument();
      this.dragListenerKeys_.push(D(e20, $.POINTERMOVE, this.handlePointerMove_, this), D(e20, $.POINTERUP, this.handlePointerUp_, this), D(this.element_, $.POINTERCANCEL, this.handlePointerUp_, this)), this.element_.getRootNode && this.element_.getRootNode() !== e20 && this.dragListenerKeys_.push(D(this.element_.getRootNode(), $.POINTERUP, this.handlePointerUp_, this));
    }
  }
  handlePointerMove_(e19) {
    if (this.isMoving_(e19)) {
      this.updateActivePointers_(e19), this.dragging_ = true;
      let t2 = new Bl($.POINTERDRAG, this.map_, e19, this.dragging_, void 0, this.activePointers_);
      this.dispatchEvent(t2);
    }
  }
  relayMoveEvent_(e19) {
    this.originalPointerMoveEvent_ = e19;
    let t2 = !!(this.down_ && this.isMoving_(e19));
    this.dispatchEvent(new Bl($.POINTERMOVE, this.map_, e19, t2));
  }
  handleTouchMove_(e19) {
    let t2 = this.originalPointerMoveEvent_;
    t2 && !t2.defaultPrevented || typeof e19.cancelable == `boolean` && e19.cancelable !== true || e19.preventDefault();
  }
  isMoving_(e19) {
    return this.dragging_ || Math.abs(e19.clientX - this.down_.clientX) > this.moveTolerance_ || Math.abs(e19.clientY - this.down_.clientY) > this.moveTolerance_;
  }
  disposeInternal() {
    this.relayedListenerKey_ && (this.relayedListenerKey_ = (k(this.relayedListenerKey_), null)), this.element_.removeEventListener(E.TOUCHMOVE, this.boundHandleTouchMove_), this.pointerdownListenerKey_ && (this.pointerdownListenerKey_ = (k(this.pointerdownListenerKey_), null)), this.dragListenerKeys_.forEach(k), this.dragListenerKeys_.length = 0, this.element_ = null, super.disposeInternal();
  }
}, Ul = {POSTRENDER: `postrender`, MOVESTART: `movestart`, MOVEEND: `moveend`, LOADSTART: `loadstart`, LOADEND: `loadend`}, Wl = {LAYERGROUP: `layergroup`, SIZE: `size`, TARGET: `target`, VIEW: `view`}, Gl = 1 / 0, Kl = class {
  constructor(e19, t2) {
    this.priorityFunction_ = e19, this.keyFunction_ = t2, this.elements_ = [], this.priorities_ = [], this.queuedElements_ = {};
  }
  clear() {
    this.elements_.length = 0, this.priorities_.length = 0, C(this.queuedElements_);
  }
  dequeue() {
    let e19 = this.elements_, t2 = this.priorities_, n2 = e19[0];
    e19.length == 1 ? (e19.length = 0, t2.length = 0) : (e19[0] = e19.pop(), t2[0] = t2.pop(), this.siftUp_(0));
    let r2 = this.keyFunction_(n2);
    return delete this.queuedElements_[r2], n2;
  }
  enqueue(e19) {
    P(!(this.keyFunction_(e19) in this.queuedElements_), "Tried to enqueue an `element` that was already added to the queue");
    let t2 = this.priorityFunction_(e19);
    return t2 != 1 / 0 && (this.elements_.push(e19), this.priorities_.push(t2), this.queuedElements_[this.keyFunction_(e19)] = true, this.siftDown_(0, this.elements_.length - 1), true);
  }
  getCount() {
    return this.elements_.length;
  }
  getLeftChildIndex_(e19) {
    return e19 * 2 + 1;
  }
  getRightChildIndex_(e19) {
    return e19 * 2 + 2;
  }
  getParentIndex_(e19) {
    return e19 - 1 >> 1;
  }
  heapify_() {
    let e19;
    for (e19 = (this.elements_.length >> 1) - 1; e19 >= 0; e19--)
      this.siftUp_(e19);
  }
  isEmpty() {
    return this.elements_.length === 0;
  }
  isKeyQueued(e19) {
    return e19 in this.queuedElements_;
  }
  isQueued(e19) {
    return this.isKeyQueued(this.keyFunction_(e19));
  }
  siftUp_(e19) {
    let t2 = this.elements_, n2 = this.priorities_, r2 = t2.length, i2 = t2[e19], a2 = n2[e19], o2 = e19;
    for (; e19 < r2 >> 1; ) {
      let i3 = this.getLeftChildIndex_(e19), a3 = this.getRightChildIndex_(e19), o3 = a3 < r2 && n2[a3] < n2[i3] ? a3 : i3;
      t2[e19] = t2[o3], n2[e19] = n2[o3], e19 = o3;
    }
    t2[e19] = i2, n2[e19] = a2, this.siftDown_(o2, e19);
  }
  siftDown_(e19, t2) {
    let n2 = this.elements_, r2 = this.priorities_, i2 = n2[t2], a2 = r2[t2];
    for (; t2 > e19; ) {
      let e20 = this.getParentIndex_(t2);
      if (r2[e20] > a2)
        n2[t2] = n2[e20], r2[t2] = r2[e20], t2 = e20;
      else
        break;
    }
    n2[t2] = i2, r2[t2] = a2;
  }
  reprioritize() {
    let e19 = this.priorityFunction_, t2 = this.elements_, n2 = this.priorities_, r2 = 0, i2 = t2.length, a2, o2, s2;
    for (o2 = 0; o2 < i2; ++o2)
      a2 = t2[o2], s2 = e19(a2), s2 == 1 / 0 ? delete this.queuedElements_[this.keyFunction_(a2)] : (n2[r2] = s2, t2[r2++] = a2);
    t2.length = r2, n2.length = r2, this.heapify_();
  }
}, ql = class extends Kl {
  constructor(e19, t2) {
    super(function(t3) {
      return e19.apply(null, t3);
    }, function(e20) {
      return e20[0].getKey();
    }), this.boundHandleTileChange_ = this.handleTileChange.bind(this), this.tileChangeCallback_ = t2, this.tilesLoading_ = 0, this.tilesLoadingKeys_ = {};
  }
  enqueue(e19) {
    let t2 = super.enqueue(e19);
    return t2 && e19[0].addEventListener(E.CHANGE, this.boundHandleTileChange_), t2;
  }
  getTilesLoading() {
    return this.tilesLoading_;
  }
  handleTileChange(e19) {
    let t2 = e19.target, n2 = t2.getState();
    if (n2 === Q.LOADED || n2 === Q.ERROR || n2 === Q.EMPTY) {
      n2 !== Q.ERROR && t2.removeEventListener(E.CHANGE, this.boundHandleTileChange_);
      let e20 = t2.getKey();
      e20 in this.tilesLoadingKeys_ && (delete this.tilesLoadingKeys_[e20], --this.tilesLoading_), this.tileChangeCallback_();
    }
  }
  loadMoreTiles(e19, t2) {
    let n2 = 0, r2, i2, a2;
    for (; this.tilesLoading_ < e19 && n2 < t2 && this.getCount() > 0; )
      i2 = this.dequeue()[0], a2 = i2.getKey(), r2 = i2.getState(), r2 === Q.IDLE && !(a2 in this.tilesLoadingKeys_) && (this.tilesLoadingKeys_[a2] = true, ++this.tilesLoading_, ++n2, i2.load());
  }
};
function Jl(e19, t2, n2, r2, i2) {
  if (!e19 || !(n2 in e19.wantedTiles) || !e19.wantedTiles[n2][t2.getKey()])
    return Gl;
  let a2 = e19.viewState.center, o2 = r2[0] - a2[0], s2 = r2[1] - a2[1];
  return 65536 * Math.log(i2) + Math.sqrt(o2 * o2 + s2 * s2) / i2;
}
var Yl = class extends M {
  constructor(e19) {
    super();
    let t2 = e19.element;
    t2 && !e19.target && !t2.style.pointerEvents && (t2.style.pointerEvents = `auto`), this.element = t2 || null, this.target_ = null, this.map_ = null, this.listenerKeys = [], e19.render && (this.render = e19.render), e19.target && this.setTarget(e19.target);
  }
  disposeInternal() {
    Zi(this.element), super.disposeInternal();
  }
  getMap() {
    return this.map_;
  }
  setMap(e19) {
    this.map_ && Zi(this.element);
    for (let e20 = 0, t2 = this.listenerKeys.length; e20 < t2; ++e20)
      k(this.listenerKeys[e20]);
    this.listenerKeys.length = 0, this.map_ = e19, e19 && ((this.target_ ? this.target_ : e19.getOverlayContainerStopEvent()).appendChild(this.element), this.render !== b && this.listenerKeys.push(D(e19, Ul.POSTRENDER, this.render, this)), e19.render());
  }
  render(e19) {
  }
  setTarget(e19) {
    this.target_ = typeof e19 == `string` ? document.getElementById(e19) : e19;
  }
}, Xl = class extends Yl {
  constructor(e19) {
    e19 || (e19 = {}), super({element: document.createElement(`div`), render: e19.render, target: e19.target}), this.ulElement_ = document.createElement(`ul`), this.collapsed_ = e19.collapsed === void 0 || e19.collapsed, this.userCollapsed_ = this.collapsed_, this.overrideCollapsible_ = e19.collapsible !== void 0, this.collapsible_ = e19.collapsible === void 0 || e19.collapsible, this.collapsible_ || (this.collapsed_ = false);
    let t2 = e19.className === void 0 ? `ol-attribution` : e19.className, n2 = e19.tipLabel === void 0 ? `Attributions` : e19.tipLabel, r2 = e19.expandClassName === void 0 ? t2 + `-expand` : e19.expandClassName, i2 = e19.collapseLabel === void 0 ? `\u203A` : e19.collapseLabel, a2 = e19.collapseClassName === void 0 ? t2 + `-collapse` : e19.collapseClassName;
    typeof i2 == `string` ? (this.collapseLabel_ = document.createElement(`span`), this.collapseLabel_.textContent = i2, this.collapseLabel_.className = a2) : this.collapseLabel_ = i2;
    let o2 = e19.label === void 0 ? `i` : e19.label;
    typeof o2 == `string` ? (this.label_ = document.createElement(`span`), this.label_.textContent = o2, this.label_.className = r2) : this.label_ = o2;
    let s2 = this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
    this.toggleButton_ = document.createElement(`button`), this.toggleButton_.setAttribute(`type`, `button`), this.toggleButton_.setAttribute(`aria-expanded`, String(!this.collapsed_)), this.toggleButton_.title = n2, this.toggleButton_.appendChild(s2), this.toggleButton_.addEventListener(E.CLICK, this.handleClick_.bind(this), false);
    let c2 = t2 + ` ` + ba + ` ` + xa + (this.collapsed_ && this.collapsible_ ? ` ` + Sa : ``) + (this.collapsible_ ? `` : ` ol-uncollapsible`), l2 = this.element;
    l2.className = c2, l2.appendChild(this.toggleButton_), l2.appendChild(this.ulElement_), this.renderedAttributions_ = [], this.renderedVisible_ = true;
  }
  collectSourceAttributions_(e19) {
    let t2 = Array.from(new Set(this.getMap().getAllLayers().flatMap((t3) => t3.getAttributions(e19)))), n2 = !this.getMap().getAllLayers().some((e20) => e20.getSource() && e20.getSource().getAttributionsCollapsible() === false);
    return this.overrideCollapsible_ || this.setCollapsible(n2), t2;
  }
  async updateElement_(e19) {
    if (!e19) {
      this.renderedVisible_ && (this.renderedVisible_ = (this.element.style.display = `none`, false));
      return;
    }
    let t2 = await Promise.all(this.collectSourceAttributions_(e19).map((e20) => S(() => e20))), n2 = t2.length > 0;
    if (this.renderedVisible_ != n2 && (this.element.style.display = n2 ? `` : `none`, this.renderedVisible_ = n2), !g(t2, this.renderedAttributions_)) {
      Qi(this.ulElement_);
      for (let e20 = 0, n3 = t2.length; e20 < n3; ++e20) {
        let n4 = document.createElement(`li`);
        n4.innerHTML = t2[e20], this.ulElement_.appendChild(n4);
      }
      this.renderedAttributions_ = t2;
    }
  }
  handleClick_(e19) {
    e19.preventDefault(), this.handleToggle_(), this.userCollapsed_ = this.collapsed_;
  }
  handleToggle_() {
    this.element.classList.toggle(Sa), this.collapsed_ ? Xi(this.collapseLabel_, this.label_) : Xi(this.label_, this.collapseLabel_), this.collapsed_ = !this.collapsed_, this.toggleButton_.setAttribute(`aria-expanded`, String(!this.collapsed_));
  }
  getCollapsible() {
    return this.collapsible_;
  }
  setCollapsible(e19) {
    this.collapsible_ !== e19 && (this.collapsible_ = e19, this.element.classList.toggle(`ol-uncollapsible`), this.userCollapsed_ && this.handleToggle_());
  }
  setCollapsed(e19) {
    this.userCollapsed_ = e19, this.collapsible_ && this.collapsed_ !== e19 && this.handleToggle_();
  }
  getCollapsed() {
    return this.collapsed_;
  }
  render(e19) {
    this.updateElement_(e19.frameState);
  }
}, Zl = class extends Yl {
  constructor(e19) {
    e19 || (e19 = {}), super({element: document.createElement(`div`), render: e19.render, target: e19.target});
    let t2 = e19.className === void 0 ? `ol-rotate` : e19.className, n2 = e19.label === void 0 ? `\u21E7` : e19.label, r2 = e19.compassClassName === void 0 ? `ol-compass` : e19.compassClassName;
    this.label_ = null, typeof n2 == `string` ? (this.label_ = document.createElement(`span`), this.label_.className = r2, this.label_.textContent = n2) : (this.label_ = n2, this.label_.classList.add(r2));
    let i2 = e19.tipLabel ? e19.tipLabel : `Reset rotation`, a2 = document.createElement(`button`);
    a2.className = t2 + `-reset`, a2.setAttribute(`type`, `button`), a2.title = i2, a2.appendChild(this.label_), a2.addEventListener(E.CLICK, this.handleClick_.bind(this), false);
    let o2 = t2 + ` ` + ba + ` ` + xa, s2 = this.element;
    s2.className = o2, s2.appendChild(a2), this.callResetNorth_ = e19.resetNorth ? e19.resetNorth : void 0, this.duration_ = e19.duration === void 0 ? 250 : e19.duration, this.autoHide_ = e19.autoHide === void 0 || e19.autoHide, this.rotation_ = void 0, this.autoHide_ && this.element.classList.add(ya);
  }
  handleClick_(e19) {
    e19.preventDefault(), this.callResetNorth_ === void 0 ? this.resetNorth_() : this.callResetNorth_();
  }
  resetNorth_() {
    let e19 = this.getMap().getView();
    if (!e19)
      return;
    let t2 = e19.getRotation();
    t2 !== void 0 && (this.duration_ > 0 && t2 % (2 * Math.PI) != 0 ? e19.animate({rotation: 0, duration: this.duration_, easing: vo}) : e19.setRotation(0));
  }
  render(e19) {
    let t2 = e19.frameState;
    if (!t2)
      return;
    let n2 = t2.viewState.rotation;
    if (n2 != this.rotation_) {
      let e20 = `rotate(` + n2 + `rad)`;
      if (this.autoHide_) {
        let e21 = this.element.classList.contains(ya);
        !e21 && n2 === 0 ? this.element.classList.add(ya) : e21 && n2 !== 0 && this.element.classList.remove(ya);
      }
      this.label_.style.transform = e20;
    }
    this.rotation_ = n2;
  }
}, Ql = class extends Yl {
  constructor(e19) {
    e19 || (e19 = {}), super({element: document.createElement(`div`), target: e19.target});
    let t2 = e19.className === void 0 ? `ol-zoom` : e19.className, n2 = e19.delta === void 0 ? 1 : e19.delta, r2 = e19.zoomInClassName === void 0 ? t2 + `-in` : e19.zoomInClassName, i2 = e19.zoomOutClassName === void 0 ? t2 + `-out` : e19.zoomOutClassName, a2 = e19.zoomInLabel === void 0 ? `+` : e19.zoomInLabel, o2 = e19.zoomOutLabel === void 0 ? `\u2013` : e19.zoomOutLabel, s2 = e19.zoomInTipLabel === void 0 ? `Zoom in` : e19.zoomInTipLabel, c2 = e19.zoomOutTipLabel === void 0 ? `Zoom out` : e19.zoomOutTipLabel, l2 = document.createElement(`button`);
    l2.className = r2, l2.setAttribute(`type`, `button`), l2.title = s2, l2.appendChild(typeof a2 == `string` ? document.createTextNode(a2) : a2), l2.addEventListener(E.CLICK, this.handleClick_.bind(this, n2), false);
    let u2 = document.createElement(`button`);
    u2.className = i2, u2.setAttribute(`type`, `button`), u2.title = c2, u2.appendChild(typeof o2 == `string` ? document.createTextNode(o2) : o2), u2.addEventListener(E.CLICK, this.handleClick_.bind(this, -n2), false);
    let d2 = t2 + ` ` + ba + ` ` + xa, f2 = this.element;
    f2.className = d2, f2.appendChild(l2), f2.appendChild(u2), this.duration_ = e19.duration === void 0 ? 250 : e19.duration;
  }
  handleClick_(e19, t2) {
    t2.preventDefault(), this.zoomByDelta_(e19);
  }
  zoomByDelta_(e19) {
    let t2 = this.getMap().getView();
    if (!t2)
      return;
    let n2 = t2.getZoom();
    if (n2 !== void 0) {
      let r2 = t2.getConstrainedZoom(n2 + e19);
      this.duration_ > 0 ? (t2.getAnimating() && t2.cancelAnimations(), t2.animate({zoom: r2, duration: this.duration_, easing: vo})) : t2.setZoom(r2);
    }
  }
};
function $l(e19) {
  e19 || (e19 = {});
  let t2 = new oe();
  return (e19.zoom === void 0 || e19.zoom) && t2.push(new Ql(e19.zoomOptions)), (e19.rotate === void 0 || e19.rotate) && t2.push(new Zl(e19.rotateOptions)), (e19.attribution === void 0 || e19.attribution) && t2.push(new Xl(e19.attributionOptions)), t2;
}
var eu = {ACTIVE: `active`}, tu = class extends M {
  constructor(e19) {
    super(), this.on, this.once, this.un, e19 && e19.handleEvent && (this.handleEvent = e19.handleEvent), this.map_ = null, this.setActive(true);
  }
  getActive() {
    return this.get(eu.ACTIVE);
  }
  getMap() {
    return this.map_;
  }
  handleEvent(e19) {
    return true;
  }
  setActive(e19) {
    this.set(eu.ACTIVE, e19);
  }
  setMap(e19) {
    this.map_ = e19;
  }
};
function nu(e19, t2, n2) {
  let r2 = e19.getCenterInternal();
  if (r2) {
    let i2 = [r2[0] + t2[0], r2[1] + t2[1]];
    e19.animateInternal({duration: n2 === void 0 ? 250 : n2, easing: bo, center: e19.getConstrainedCenter(i2)});
  }
}
function ru(e19, t2, n2, r2) {
  let i2 = e19.getZoom();
  if (i2 === void 0)
    return;
  let a2 = e19.getConstrainedZoom(i2 + t2), o2 = e19.getResolutionForZoom(a2);
  e19.getAnimating() && e19.cancelAnimations(), e19.animate({resolution: o2, anchor: n2, duration: r2 === void 0 ? 250 : r2, easing: vo});
}
var iu = class extends tu {
  constructor(e19) {
    super(), e19 || (e19 = {}), this.delta_ = e19.delta ? e19.delta : 1, this.duration_ = e19.duration === void 0 ? 250 : e19.duration;
  }
  handleEvent(e19) {
    let t2 = false;
    if (e19.type == $.DBLCLICK) {
      let n2 = e19.originalEvent, r2 = e19.map, i2 = e19.coordinate, a2 = n2.shiftKey ? -this.delta_ : this.delta_;
      ru(r2.getView(), a2, i2, this.duration_), n2.preventDefault(), t2 = true;
    }
    return !t2;
  }
}, au = class extends tu {
  constructor(e19) {
    e19 || (e19 = {}), super(e19), e19.handleDownEvent && (this.handleDownEvent = e19.handleDownEvent), e19.handleDragEvent && (this.handleDragEvent = e19.handleDragEvent), e19.handleMoveEvent && (this.handleMoveEvent = e19.handleMoveEvent), e19.handleUpEvent && (this.handleUpEvent = e19.handleUpEvent), e19.stopDown && (this.stopDown = e19.stopDown), this.handlingDownUpSequence = false, this.targetPointers = [];
  }
  getPointerCount() {
    return this.targetPointers.length;
  }
  handleDownEvent(e19) {
    return false;
  }
  handleDragEvent(e19) {
  }
  handleEvent(e19) {
    if (!e19.originalEvent)
      return true;
    let t2 = false;
    if (this.updateTrackedPointers_(e19), this.handlingDownUpSequence) {
      if (e19.type == $.POINTERDRAG)
        this.handleDragEvent(e19), e19.originalEvent.preventDefault();
      else if (e19.type == $.POINTERUP) {
        let t3 = this.handleUpEvent(e19);
        this.handlingDownUpSequence = t3 && this.targetPointers.length > 0;
      }
    } else if (e19.type == $.POINTERDOWN) {
      let n2 = this.handleDownEvent(e19);
      this.handlingDownUpSequence = n2, t2 = this.stopDown(n2);
    } else
      e19.type == $.POINTERMOVE && this.handleMoveEvent(e19);
    return !t2;
  }
  handleMoveEvent(e19) {
  }
  handleUpEvent(e19) {
    return false;
  }
  stopDown(e19) {
    return e19;
  }
  updateTrackedPointers_(e19) {
    e19.activePointers && (this.targetPointers = e19.activePointers);
  }
};
function ou(e19) {
  let t2 = e19.length, n2 = 0, r2 = 0;
  for (let i2 = 0; i2 < t2; i2++)
    n2 += e19[i2].clientX, r2 += e19[i2].clientY;
  return {clientX: n2 / t2, clientY: r2 / t2};
}
function su(e19) {
  let t2 = arguments;
  return function(e20) {
    let n2 = true;
    for (let r2 = 0, i2 = t2.length; r2 < i2 && (n2 && (n2 = t2[r2](e20)), n2); ++r2)
      ;
    return n2;
  };
}
var cu = function(e19) {
  let t2 = e19.originalEvent;
  return t2.altKey && !(t2.metaKey || t2.ctrlKey) && t2.shiftKey;
}, lu = function(e19) {
  let t2 = e19.map.getTargetElement(), n2 = e19.map.getOwnerDocument().activeElement;
  return t2.contains(n2);
}, uu = function(e19) {
  return !e19.map.getTargetElement().hasAttribute(`tabindex`) || lu(e19);
}, du = v, fu = function(e19) {
  let t2 = e19.originalEvent;
  return t2.button == 0 && !(Bi && Vi && t2.ctrlKey);
}, pu = function(e19) {
  let t2 = e19.originalEvent;
  return !t2.altKey && !(t2.metaKey || t2.ctrlKey) && !t2.shiftKey;
}, mu = function(e19) {
  let t2 = e19.originalEvent;
  return Vi ? t2.metaKey : t2.ctrlKey;
}, hu = function(e19) {
  let t2 = e19.originalEvent;
  return !t2.altKey && !(t2.metaKey || t2.ctrlKey) && t2.shiftKey;
}, gu = function(e19) {
  let t2 = e19.originalEvent, n2 = t2.target.tagName;
  return n2 !== `INPUT` && n2 !== `SELECT` && n2 !== `TEXTAREA` && !t2.target.isContentEditable;
}, _u = function(e19) {
  let t2 = e19.originalEvent;
  return P(t2 !== void 0, `mapBrowserEvent must originate from a pointer event`), t2.pointerType == `mouse`;
}, vu = function(e19) {
  let t2 = e19.originalEvent;
  return P(t2 !== void 0, `mapBrowserEvent must originate from a pointer event`), t2.isPrimary && t2.button === 0;
}, yu = class extends au {
  constructor(e19) {
    super({stopDown: y}), e19 || (e19 = {}), this.kinetic_ = e19.kinetic, this.lastCentroid = null, this.lastPointersCount_, this.panning_ = false;
    let t2 = e19.condition ? e19.condition : su(pu, vu);
    this.condition_ = e19.onFocusOnly ? su(uu, t2) : t2, this.noKinetic_ = false;
  }
  handleDragEvent(e19) {
    let t2 = e19.map;
    this.panning_ || (this.panning_ = true, t2.getView().beginInteraction());
    let n2 = this.targetPointers, r2 = t2.getEventPixel(ou(n2));
    if (n2.length == this.lastPointersCount_) {
      if (this.kinetic_ && this.kinetic_.update(r2[0], r2[1]), this.lastCentroid) {
        let t3 = [this.lastCentroid[0] - r2[0], r2[1] - this.lastCentroid[1]], n3 = e19.map.getView();
        Mt(t3, n3.getResolution()), jt(t3, n3.getRotation()), n3.adjustCenterInternal(t3);
      }
    } else
      this.kinetic_ && this.kinetic_.begin();
    this.lastCentroid = r2, this.lastPointersCount_ = n2.length, e19.originalEvent.preventDefault();
  }
  handleUpEvent(e19) {
    let t2 = e19.map, n2 = t2.getView();
    if (this.targetPointers.length === 0) {
      if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
        let e20 = this.kinetic_.getDistance(), r2 = this.kinetic_.getAngle(), i2 = n2.getCenterInternal(), a2 = t2.getPixelFromCoordinateInternal(i2), o2 = t2.getCoordinateFromPixelInternal([a2[0] - e20 * Math.cos(r2), a2[1] - e20 * Math.sin(r2)]);
        n2.animateInternal({center: n2.getConstrainedCenter(o2), duration: 500, easing: vo});
      }
      return this.panning_ && (this.panning_ = false, n2.endInteraction()), false;
    }
    return this.kinetic_ && this.kinetic_.begin(), this.lastCentroid = null, true;
  }
  handleDownEvent(e19) {
    if (this.targetPointers.length > 0 && this.condition_(e19)) {
      let t2 = e19.map.getView();
      return this.lastCentroid = null, t2.getAnimating() && t2.cancelAnimations(), this.kinetic_ && this.kinetic_.begin(), this.noKinetic_ = this.targetPointers.length > 1, true;
    }
    return false;
  }
}, bu = class extends au {
  constructor(e19) {
    e19 || (e19 = {}), super({stopDown: y}), this.condition_ = e19.condition ? e19.condition : cu, this.lastAngle_ = void 0, this.duration_ = e19.duration === void 0 ? 250 : e19.duration;
  }
  handleDragEvent(e19) {
    if (!_u(e19))
      return;
    let t2 = e19.map, n2 = t2.getView();
    if (n2.getConstraints().rotation === po)
      return;
    let r2 = t2.getSize(), i2 = e19.pixel, a2 = Math.atan2(r2[1] / 2 - i2[1], i2[0] - r2[0] / 2);
    if (this.lastAngle_ !== void 0) {
      let e20 = a2 - this.lastAngle_;
      n2.adjustRotationInternal(-e20);
    }
    this.lastAngle_ = a2;
  }
  handleUpEvent(e19) {
    return !_u(e19) || (e19.map.getView().endInteraction(this.duration_), false);
  }
  handleDownEvent(e19) {
    return _u(e19) && fu(e19) && this.condition_(e19) ? (e19.map.getView().beginInteraction(), this.lastAngle_ = void 0, true) : false;
  }
}, xu = class extends u {
  constructor(e19) {
    super(), this.geometry_ = null, this.element_ = document.createElement(`div`), this.element_.style.position = `absolute`, this.element_.style.pointerEvents = `auto`, this.element_.className = `ol-box ` + e19, this.map_ = null, this.startPixel_ = null, this.endPixel_ = null;
  }
  disposeInternal() {
    this.setMap(null);
  }
  render_() {
    let e19 = this.startPixel_, t2 = this.endPixel_, n2 = this.element_.style;
    n2.left = Math.min(e19[0], t2[0]) + `px`, n2.top = Math.min(e19[1], t2[1]) + `px`, n2.width = Math.abs(t2[0] - e19[0]) + `px`, n2.height = Math.abs(t2[1] - e19[1]) + `px`;
  }
  setMap(e19) {
    if (this.map_) {
      this.map_.getOverlayContainer().removeChild(this.element_);
      let e20 = this.element_.style;
      e20.left = `inherit`, e20.top = `inherit`, e20.width = `inherit`, e20.height = `inherit`;
    }
    this.map_ = e19, this.map_ && this.map_.getOverlayContainer().appendChild(this.element_);
  }
  setPixels(e19, t2) {
    this.startPixel_ = e19, this.endPixel_ = t2, this.createOrUpdateGeometry(), this.render_();
  }
  createOrUpdateGeometry() {
    if (!this.map_)
      return;
    let e19 = this.startPixel_, t2 = this.endPixel_, n2 = [e19, [e19[0], t2[1]], t2, [t2[0], e19[1]]].map(this.map_.getCoordinateFromPixelInternal, this.map_);
    n2[4] = n2[0].slice(), this.geometry_ ? this.geometry_.setCoordinates([n2]) : this.geometry_ = new er([n2]);
  }
  getGeometry() {
    return this.geometry_;
  }
}, Su = {BOXSTART: `boxstart`, BOXDRAG: `boxdrag`, BOXEND: `boxend`, BOXCANCEL: `boxcancel`}, Cu = class extends c {
  constructor(e19, t2, n2) {
    super(e19), this.coordinate = t2, this.mapBrowserEvent = n2;
  }
}, wu = class extends au {
  constructor(e19) {
    super(), this.on, this.once, this.un, e19 || (e19 = {}), this.box_ = new xu(e19.className || `ol-dragbox`), this.minArea_ = e19.minArea === void 0 ? 64 : e19.minArea, e19.onBoxEnd && (this.onBoxEnd = e19.onBoxEnd), this.startPixel_ = null, this.condition_ = e19.condition ? e19.condition : fu, this.boxEndCondition_ = e19.boxEndCondition ? e19.boxEndCondition : this.defaultBoxEndCondition;
  }
  defaultBoxEndCondition(e19, t2, n2) {
    let r2 = n2[0] - t2[0], i2 = n2[1] - t2[1];
    return r2 * r2 + i2 * i2 >= this.minArea_;
  }
  getGeometry() {
    return this.box_.getGeometry();
  }
  handleDragEvent(e19) {
    this.startPixel_ && (this.box_.setPixels(this.startPixel_, e19.pixel), this.dispatchEvent(new Cu(Su.BOXDRAG, e19.coordinate, e19)));
  }
  handleUpEvent(e19) {
    if (!this.startPixel_)
      return false;
    this.box_.setMap(null);
    let t2 = this.boxEndCondition_(e19, this.startPixel_, e19.pixel);
    return t2 && this.onBoxEnd(e19), this.dispatchEvent(new Cu(t2 ? Su.BOXEND : Su.BOXCANCEL, e19.coordinate, e19)), false;
  }
  handleDownEvent(e19) {
    return this.condition_(e19) ? (this.startPixel_ = e19.pixel, this.box_.setMap(e19.map), this.box_.setPixels(this.startPixel_, this.startPixel_), this.dispatchEvent(new Cu(Su.BOXSTART, e19.coordinate, e19)), true) : false;
  }
  onBoxEnd(e19) {
  }
  setActive(e19) {
    e19 || (this.box_.setMap(null), this.startPixel_ && (this.startPixel_ = (this.dispatchEvent(new Cu(Su.BOXCANCEL, this.startPixel_, null)), null))), super.setActive(e19);
  }
}, Tu = class extends wu {
  constructor(e19) {
    e19 || (e19 = {});
    let t2 = e19.condition ? e19.condition : hu;
    super({condition: t2, className: e19.className || `ol-dragzoom`, minArea: e19.minArea}), this.duration_ = e19.duration === void 0 ? 200 : e19.duration, this.out_ = e19.out !== void 0 && e19.out;
  }
  onBoxEnd(e19) {
    let t2 = this.getMap().getView(), n2 = this.getGeometry();
    if (this.out_) {
      let e20 = t2.rotatedExtentForGeometry(n2), r2 = t2.getResolutionForExtentInternal(e20), i2 = t2.getResolution() / r2;
      n2 = n2.clone(), n2.scale(i2 * i2);
    }
    t2.fitInternal(n2, {duration: this.duration_, easing: vo});
  }
}, Eu = {LEFT: `ArrowLeft`, UP: `ArrowUp`, RIGHT: `ArrowRight`, DOWN: `ArrowDown`}, Du = class extends tu {
  constructor(e19) {
    super(), e19 || (e19 = {}), this.defaultCondition_ = function(e20) {
      return pu(e20) && gu(e20);
    }, this.condition_ = e19.condition === void 0 ? this.defaultCondition_ : e19.condition, this.duration_ = e19.duration === void 0 ? 100 : e19.duration, this.pixelDelta_ = e19.pixelDelta === void 0 ? 128 : e19.pixelDelta;
  }
  handleEvent(e19) {
    let t2 = false;
    if (e19.type == E.KEYDOWN) {
      let n2 = e19.originalEvent, r2 = n2.key;
      if (this.condition_(e19) && (r2 == Eu.DOWN || r2 == Eu.LEFT || r2 == Eu.RIGHT || r2 == Eu.UP)) {
        let i2 = e19.map.getView(), a2 = i2.getResolution() * this.pixelDelta_, o2 = 0, s2 = 0;
        r2 == Eu.DOWN ? s2 = -a2 : r2 == Eu.LEFT ? o2 = -a2 : r2 == Eu.RIGHT ? o2 = a2 : s2 = a2;
        let c2 = [o2, s2];
        jt(c2, i2.getRotation()), nu(i2, c2, this.duration_), n2.preventDefault(), t2 = true;
      }
    }
    return !t2;
  }
}, Ou = class extends tu {
  constructor(e19) {
    super(), e19 || (e19 = {}), this.condition_ = e19.condition ? e19.condition : function(e20) {
      return !mu(e20) && gu(e20);
    }, this.delta_ = e19.delta ? e19.delta : 1, this.duration_ = e19.duration === void 0 ? 100 : e19.duration;
  }
  handleEvent(e19) {
    let t2 = false;
    if (e19.type == E.KEYDOWN || e19.type == E.KEYPRESS) {
      let n2 = e19.originalEvent, r2 = n2.key;
      if (this.condition_(e19) && (r2 === `+` || r2 === `-`)) {
        let i2 = e19.map, a2 = r2 === `+` ? this.delta_ : -this.delta_;
        ru(i2.getView(), a2, void 0, this.duration_), n2.preventDefault(), t2 = true;
      }
    }
    return !t2;
  }
}, ku = class extends tu {
  constructor(e19) {
    e19 || (e19 = {}), super(e19), this.totalDelta_ = 0, this.lastDelta_ = 0, this.maxDelta_ = e19.maxDelta === void 0 ? 1 : e19.maxDelta, this.duration_ = e19.duration === void 0 ? 250 : e19.duration, this.timeout_ = e19.timeout === void 0 ? 80 : e19.timeout, this.useAnchor_ = e19.useAnchor === void 0 || e19.useAnchor, this.constrainResolution_ = e19.constrainResolution !== void 0 && e19.constrainResolution;
    let t2 = e19.condition ? e19.condition : du;
    this.condition_ = e19.onFocusOnly ? su(uu, t2) : t2, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_, this.mode_ = void 0, this.trackpadEventGap_ = 400, this.trackpadTimeoutId_, this.deltaPerZoom_ = 300;
  }
  endInteraction_() {
    this.trackpadTimeoutId_ = void 0;
    let e19 = this.getMap();
    e19 && e19.getView().endInteraction(void 0, this.lastDelta_ ? this.lastDelta_ > 0 ? 1 : -1 : 0, this.lastAnchor_);
  }
  handleEvent(e19) {
    if (!this.condition_(e19) || e19.type !== E.WHEEL)
      return true;
    let t2 = e19.map, n2 = e19.originalEvent;
    n2.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = e19.coordinate);
    let r2;
    if (e19.type == E.WHEEL && (r2 = n2.deltaY, zi && n2.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (r2 /= Hi), n2.deltaMode === WheelEvent.DOM_DELTA_LINE && (r2 *= 40)), r2 === 0)
      return false;
    this.lastDelta_ = r2;
    let i2 = Date.now();
    this.startTime_ === void 0 && (this.startTime_ = i2), (!this.mode_ || i2 - this.startTime_ > this.trackpadEventGap_) && (this.mode_ = Math.abs(r2) < 4 ? `trackpad` : `wheel`);
    let a2 = t2.getView();
    if (this.mode_ === `trackpad` && !(a2.getConstrainResolution() || this.constrainResolution_))
      return this.trackpadTimeoutId_ ? clearTimeout(this.trackpadTimeoutId_) : (a2.getAnimating() && a2.cancelAnimations(), a2.beginInteraction()), this.trackpadTimeoutId_ = setTimeout(this.endInteraction_.bind(this), this.timeout_), a2.adjustZoom(-r2 / this.deltaPerZoom_, this.lastAnchor_), this.startTime_ = i2, false;
    this.totalDelta_ += r2;
    let o2 = Math.max(this.timeout_ - (i2 - this.startTime_), 0);
    return clearTimeout(this.timeoutId_), this.timeoutId_ = setTimeout(this.handleWheelZoom_.bind(this, t2), o2), false;
  }
  handleWheelZoom_(e19) {
    let t2 = e19.getView();
    t2.getAnimating() && t2.cancelAnimations();
    let n2 = -R(this.totalDelta_, -this.maxDelta_ * this.deltaPerZoom_, this.maxDelta_ * this.deltaPerZoom_) / this.deltaPerZoom_;
    (t2.getConstrainResolution() || this.constrainResolution_) && (n2 = n2 ? n2 > 0 ? 1 : -1 : 0), ru(t2, n2, this.lastAnchor_, this.duration_), this.mode_ = void 0, this.totalDelta_ = 0, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_ = void 0;
  }
  setMouseAnchor(e19) {
    this.useAnchor_ = e19, e19 || (this.lastAnchor_ = null);
  }
}, Au = class extends au {
  constructor(e19) {
    e19 || (e19 = {});
    let t2 = e19;
    t2.stopDown || (t2.stopDown = y), super(t2), this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = false, this.rotationDelta_ = 0, this.threshold_ = e19.threshold === void 0 ? 0.3 : e19.threshold, this.duration_ = e19.duration === void 0 ? 250 : e19.duration;
  }
  handleDragEvent(e19) {
    let t2 = 0, n2 = this.targetPointers[0], r2 = this.targetPointers[1], i2 = Math.atan2(r2.clientY - n2.clientY, r2.clientX - n2.clientX);
    if (this.lastAngle_ !== void 0) {
      let e20 = i2 - this.lastAngle_;
      this.rotationDelta_ += e20, !this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_ && (this.rotating_ = true), t2 = e20;
    }
    this.lastAngle_ = i2;
    let a2 = e19.map, o2 = a2.getView();
    o2.getConstraints().rotation !== po && (this.anchor_ = a2.getCoordinateFromPixelInternal(a2.getEventPixel(ou(this.targetPointers))), this.rotating_ && (a2.render(), o2.adjustRotationInternal(t2, this.anchor_)));
  }
  handleUpEvent(e19) {
    return this.targetPointers.length < 2 ? (e19.map.getView().endInteraction(this.duration_), false) : true;
  }
  handleDownEvent(e19) {
    if (this.targetPointers.length >= 2) {
      let t2 = e19.map;
      return this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = false, this.rotationDelta_ = 0, this.handlingDownUpSequence || t2.getView().beginInteraction(), true;
    }
    return false;
  }
}, ju = class extends au {
  constructor(e19) {
    e19 || (e19 = {});
    let t2 = e19;
    t2.stopDown || (t2.stopDown = y), super(t2), this.anchor_ = null, this.duration_ = e19.duration === void 0 ? 400 : e19.duration, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1;
  }
  handleDragEvent(e19) {
    let t2 = 1, n2 = this.targetPointers[0], r2 = this.targetPointers[1], i2 = n2.clientX - r2.clientX, a2 = n2.clientY - r2.clientY, o2 = Math.sqrt(i2 * i2 + a2 * a2);
    this.lastDistance_ !== void 0 && (t2 = this.lastDistance_ / o2), this.lastDistance_ = o2;
    let s2 = e19.map, c2 = s2.getView();
    t2 != 1 && (this.lastScaleDelta_ = t2), this.anchor_ = s2.getCoordinateFromPixelInternal(s2.getEventPixel(ou(this.targetPointers))), s2.render(), c2.adjustResolutionInternal(t2, this.anchor_);
  }
  handleUpEvent(e19) {
    if (this.targetPointers.length < 2) {
      let t2 = e19.map.getView(), n2 = this.lastScaleDelta_ > 1 ? 1 : -1;
      return t2.endInteraction(this.duration_, n2), false;
    }
    return true;
  }
  handleDownEvent(e19) {
    if (this.targetPointers.length >= 2) {
      let t2 = e19.map;
      return this.anchor_ = null, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1, this.handlingDownUpSequence || t2.getView().beginInteraction(), true;
    }
    return false;
  }
};
function Mu(e19) {
  e19 || (e19 = {});
  let t2 = new oe(), n2 = new Ml(-5e-3, 0.05, 100);
  return (e19.altShiftDragRotate === void 0 || e19.altShiftDragRotate) && t2.push(new bu()), (e19.doubleClickZoom === void 0 || e19.doubleClickZoom) && t2.push(new iu({delta: e19.zoomDelta, duration: e19.zoomDuration})), (e19.dragPan === void 0 || e19.dragPan) && t2.push(new yu({onFocusOnly: e19.onFocusOnly, kinetic: n2})), (e19.pinchRotate === void 0 || e19.pinchRotate) && t2.push(new Au()), (e19.pinchZoom === void 0 || e19.pinchZoom) && t2.push(new ju({duration: e19.zoomDuration})), (e19.keyboard === void 0 || e19.keyboard) && (t2.push(new Du()), t2.push(new Ou({delta: e19.zoomDelta, duration: e19.zoomDuration}))), (e19.mouseWheelZoom === void 0 || e19.mouseWheelZoom) && t2.push(new ku({onFocusOnly: e19.onFocusOnly, duration: e19.zoomDuration})), (e19.shiftDragZoom === void 0 || e19.shiftDragZoom) && t2.push(new Tu({duration: e19.zoomDuration})), t2;
}
function Nu(e19) {
  e19 instanceof ko ? e19.setMapInternal(null) : e19 instanceof Rl && e19.getLayers().forEach(Nu);
}
function Pu(e19, t2) {
  if (e19 instanceof ko)
    e19.setMapInternal(t2);
  else if (e19 instanceof Rl) {
    let n2 = e19.getLayers().getArray();
    for (let e20 = 0, r2 = n2.length; e20 < r2; ++e20)
      Pu(n2[e20], t2);
  }
}
var Fu = class extends M {
  constructor(e19) {
    super(), e19 || (e19 = {}), this.on, this.once, this.un;
    let t2 = Iu(e19);
    this.renderComplete_, this.loaded_ = true, this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this), this.maxTilesLoading_ = e19.maxTilesLoading === void 0 ? 16 : e19.maxTilesLoading, this.pixelRatio_ = e19.pixelRatio === void 0 ? Hi : e19.pixelRatio, this.postRenderTimeoutHandle_, this.animationDelayKey_, this.animationDelay_ = this.animationDelay_.bind(this), this.coordinateToPixelTransform_ = le(), this.pixelToCoordinateTransform_ = le(), this.frameIndex_ = 0, this.frameState_ = null, this.previousExtent_ = null, this.viewPropertyListenerKey_ = null, this.viewChangeListenerKey_ = null, this.layerGroupPropertyListenerKeys_ = null, this.viewport_ = document.createElement(`div`), this.viewport_.className = `ol-viewport` + (`ontouchstart` in window ? ` ol-touch` : ``), this.viewport_.style.position = `relative`, this.viewport_.style.overflow = `hidden`, this.viewport_.style.width = `100%`, this.viewport_.style.height = `100%`, this.overlayContainer_ = document.createElement(`div`), this.overlayContainer_.style.position = `absolute`, this.overlayContainer_.style.zIndex = `0`, this.overlayContainer_.style.width = `100%`, this.overlayContainer_.style.height = `100%`, this.overlayContainer_.style.pointerEvents = `none`, this.overlayContainer_.className = `ol-overlaycontainer`, this.viewport_.appendChild(this.overlayContainer_), this.overlayContainerStopEvent_ = document.createElement(`div`), this.overlayContainerStopEvent_.style.position = `absolute`, this.overlayContainerStopEvent_.style.zIndex = `0`, this.overlayContainerStopEvent_.style.width = `100%`, this.overlayContainerStopEvent_.style.height = `100%`, this.overlayContainerStopEvent_.style.pointerEvents = `none`, this.overlayContainerStopEvent_.className = `ol-overlaycontainer-stopevent`, this.viewport_.appendChild(this.overlayContainerStopEvent_), this.mapBrowserEventHandler_ = null, this.moveTolerance_ = e19.moveTolerance, this.keyboardEventTarget_ = t2.keyboardEventTarget, this.targetChangeHandlerKeys_ = null, this.targetElement_ = null, this.resizeObserver_ = new ResizeObserver(() => this.updateSize()), this.controls = t2.controls || $l(), this.interactions = t2.interactions || Mu({onFocusOnly: true}), this.overlays_ = t2.overlays, this.overlayIdIndex_ = {}, this.renderer_ = null, this.postRenderFunctions_ = [], this.tileQueue_ = new ql(this.getTilePriority.bind(this), this.handleTileChange_.bind(this)), this.addChangeListener(Wl.LAYERGROUP, this.handleLayerGroupChanged_), this.addChangeListener(Wl.VIEW, this.handleViewChanged_), this.addChangeListener(Wl.SIZE, this.handleSizeChanged_), this.addChangeListener(Wl.TARGET, this.handleTargetChanged_), this.setProperties(t2.values);
    let n2 = this;
    e19.view && !(e19.view instanceof So) && e19.view.then(function(e20) {
      n2.setView(new So(e20));
    }), this.controls.addEventListener(N.ADD, (e20) => {
      e20.element.setMap(this);
    }), this.controls.addEventListener(N.REMOVE, (e20) => {
      e20.element.setMap(null);
    }), this.interactions.addEventListener(N.ADD, (e20) => {
      e20.element.setMap(this);
    }), this.interactions.addEventListener(N.REMOVE, (e20) => {
      e20.element.setMap(null);
    }), this.overlays_.addEventListener(N.ADD, (e20) => {
      this.addOverlayInternal_(e20.element);
    }), this.overlays_.addEventListener(N.REMOVE, (e20) => {
      let t3 = e20.element.getId();
      t3 !== void 0 && delete this.overlayIdIndex_[t3.toString()], e20.element.setMap(null);
    }), this.controls.forEach((e20) => {
      e20.setMap(this);
    }), this.interactions.forEach((e20) => {
      e20.setMap(this);
    }), this.overlays_.forEach(this.addOverlayInternal_.bind(this));
  }
  addControl(e19) {
    this.getControls().push(e19);
  }
  addInteraction(e19) {
    this.getInteractions().push(e19);
  }
  addLayer(e19) {
    this.getLayerGroup().getLayers().push(e19);
  }
  handleLayerAdd_(e19) {
    Pu(e19.layer, this);
  }
  addOverlay(e19) {
    this.getOverlays().push(e19);
  }
  addOverlayInternal_(e19) {
    let t2 = e19.getId();
    t2 !== void 0 && (this.overlayIdIndex_[t2.toString()] = e19), e19.setMap(this);
  }
  disposeInternal() {
    this.controls.clear(), this.interactions.clear(), this.overlays_.clear(), this.resizeObserver_.disconnect(), this.setTarget(null), super.disposeInternal();
  }
  forEachFeatureAtPixel(e19, t2, n2) {
    if (!this.frameState_ || !this.renderer_)
      return;
    let r2 = this.getCoordinateFromPixelInternal(e19);
    n2 = n2 === void 0 ? {} : n2;
    let i2 = n2.hitTolerance === void 0 ? 0 : n2.hitTolerance, a2 = n2.layerFilter === void 0 ? v : n2.layerFilter, o2 = n2.checkWrapped !== false;
    return this.renderer_.forEachFeatureAtCoordinate(r2, this.frameState_, i2, o2, t2, null, a2, null);
  }
  getFeaturesAtPixel(e19, t2) {
    let n2 = [];
    return this.forEachFeatureAtPixel(e19, function(e20) {
      n2.push(e20);
    }, t2), n2;
  }
  getAllLayers() {
    let e19 = [];
    function t2(n2) {
      n2.forEach(function(n3) {
        n3 instanceof Rl ? t2(n3.getLayers()) : e19.push(n3);
      });
    }
    return t2(this.getLayers()), e19;
  }
  hasFeatureAtPixel(e19, t2) {
    if (!this.frameState_ || !this.renderer_)
      return false;
    let n2 = this.getCoordinateFromPixelInternal(e19);
    t2 = t2 === void 0 ? {} : t2;
    let r2 = t2.layerFilter === void 0 ? v : t2.layerFilter, i2 = t2.hitTolerance === void 0 ? 0 : t2.hitTolerance, a2 = t2.checkWrapped !== false;
    return this.renderer_.hasFeatureAtCoordinate(n2, this.frameState_, i2, a2, r2, null);
  }
  getEventCoordinate(e19) {
    return this.getCoordinateFromPixel(this.getEventPixel(e19));
  }
  getEventCoordinateInternal(e19) {
    return this.getCoordinateFromPixelInternal(this.getEventPixel(e19));
  }
  getEventPixel(e19) {
    let t2 = this.viewport_.getBoundingClientRect(), n2 = this.getSize(), r2 = t2.width / n2[0], i2 = t2.height / n2[1], a2 = `changedTouches` in e19 ? e19.changedTouches[0] : e19;
    return [(a2.clientX - t2.left) / r2, (a2.clientY - t2.top) / i2];
  }
  getTarget() {
    return this.get(Wl.TARGET);
  }
  getTargetElement() {
    return this.targetElement_;
  }
  getCoordinateFromPixel(e19) {
    return rn(this.getCoordinateFromPixelInternal(e19), this.getView().getProjection());
  }
  getCoordinateFromPixelInternal(e19) {
    let t2 = this.frameState_;
    return t2 ? F(t2.pixelToCoordinateTransform, e19.slice()) : null;
  }
  getControls() {
    return this.controls;
  }
  getOverlays() {
    return this.overlays_;
  }
  getOverlayById(e19) {
    let t2 = this.overlayIdIndex_[e19.toString()];
    return t2 === void 0 ? null : t2;
  }
  getInteractions() {
    return this.interactions;
  }
  getLayerGroup() {
    return this.get(Wl.LAYERGROUP);
  }
  setLayers(e19) {
    let t2 = this.getLayerGroup();
    if (e19 instanceof oe) {
      t2.setLayers(e19);
      return;
    }
    let n2 = t2.getLayers();
    n2.clear(), n2.extend(e19);
  }
  getLayers() {
    return this.getLayerGroup().getLayers();
  }
  getLoadingOrNotReady() {
    let e19 = this.getLayerGroup().getLayerStatesArray();
    for (let t2 = 0, n2 = e19.length; t2 < n2; ++t2) {
      let n3 = e19[t2];
      if (!n3.visible)
        continue;
      let r2 = n3.layer.getRenderer();
      if (r2 && !r2.ready)
        return true;
      let i2 = n3.layer.getSource();
      if (i2 && i2.loading)
        return true;
    }
    return false;
  }
  getPixelFromCoordinate(e19) {
    let t2 = an(e19, this.getView().getProjection());
    return this.getPixelFromCoordinateInternal(t2);
  }
  getPixelFromCoordinateInternal(e19) {
    let t2 = this.frameState_;
    return t2 ? F(t2.coordinateToPixelTransform, e19.slice(0, 2)) : null;
  }
  getRenderer() {
    return this.renderer_;
  }
  getSize() {
    return this.get(Wl.SIZE);
  }
  getView() {
    return this.get(Wl.VIEW);
  }
  getViewport() {
    return this.viewport_;
  }
  getOverlayContainer() {
    return this.overlayContainer_;
  }
  getOverlayContainerStopEvent() {
    return this.overlayContainerStopEvent_;
  }
  getOwnerDocument() {
    let e19 = this.getTargetElement();
    return e19 ? e19.ownerDocument : document;
  }
  getTilePriority(e19, t2, n2, r2) {
    return Jl(this.frameState_, e19, t2, n2, r2);
  }
  handleBrowserEvent(e19, t2) {
    t2 || (t2 = e19.type);
    let n2 = new Bl(t2, this, e19);
    this.handleMapBrowserEvent(n2);
  }
  handleMapBrowserEvent(e19) {
    if (!this.frameState_)
      return;
    let t2 = e19.originalEvent, n2 = t2.type;
    if (n2 === Vl.POINTERDOWN || n2 === E.WHEEL || n2 === E.KEYDOWN) {
      let e20 = this.getOwnerDocument(), n3 = this.viewport_.getRootNode ? this.viewport_.getRootNode() : e20, r2 = t2.target;
      if (this.overlayContainerStopEvent_.contains(r2) || !(n3 === e20 ? e20.documentElement : n3).contains(r2))
        return;
    }
    if (e19.frameState = this.frameState_, this.dispatchEvent(e19) !== false) {
      let t3 = this.getInteractions().getArray().slice();
      for (let n3 = t3.length - 1; n3 >= 0; n3--) {
        let r2 = t3[n3];
        if (r2.getMap() === this && r2.getActive() && this.getTargetElement() && (!r2.handleEvent(e19) || e19.propagationStopped))
          break;
      }
    }
  }
  handlePostRender() {
    let e19 = this.frameState_, t2 = this.tileQueue_;
    if (!t2.isEmpty()) {
      let n3 = this.maxTilesLoading_, r2 = n3;
      if (e19) {
        let t3 = e19.viewHints;
        if (t3[ro.ANIMATING] || t3[ro.INTERACTING]) {
          let t4 = Date.now() - e19.time > 8;
          n3 = t4 ? 0 : 8, r2 = t4 ? 0 : 2;
        }
      }
      t2.getTilesLoading() < n3 && (t2.reprioritize(), t2.loadMoreTiles(n3, r2));
    }
    e19 && this.renderer_ && !e19.animate && (this.renderComplete_ === true ? (this.hasListener(nr.RENDERCOMPLETE) && this.renderer_.dispatchRenderEvent(nr.RENDERCOMPLETE, e19), this.loaded_ === false && (this.loaded_ = true, this.dispatchEvent(new zl(Ul.LOADEND, this, e19)))) : this.loaded_ === true && (this.loaded_ = false, this.dispatchEvent(new zl(Ul.LOADSTART, this, e19))));
    let n2 = this.postRenderFunctions_;
    for (let t3 = 0, r2 = n2.length; t3 < r2; ++t3)
      n2[t3](this, e19);
    n2.length = 0;
  }
  handleSizeChanged_() {
    this.getView() && !this.getView().getAnimating() && this.getView().resolveConstraints(0), this.render();
  }
  handleTargetChanged_() {
    if (this.mapBrowserEventHandler_) {
      for (let e20 = 0, t3 = this.targetChangeHandlerKeys_.length; e20 < t3; ++e20)
        k(this.targetChangeHandlerKeys_[e20]);
      this.targetChangeHandlerKeys_ = null, this.viewport_.removeEventListener(E.CONTEXTMENU, this.boundHandleBrowserEvent_), this.viewport_.removeEventListener(E.WHEEL, this.boundHandleBrowserEvent_), this.mapBrowserEventHandler_.dispose(), this.mapBrowserEventHandler_ = null, Zi(this.viewport_);
    }
    if (this.targetElement_) {
      this.resizeObserver_.unobserve(this.targetElement_);
      let e20 = this.targetElement_.getRootNode();
      e20 instanceof ShadowRoot && this.resizeObserver_.unobserve(e20.host), this.setSize(void 0);
    }
    let e19 = this.getTarget(), t2 = typeof e19 == `string` ? document.getElementById(e19) : e19;
    if (this.targetElement_ = t2, !t2)
      this.renderer_ && (this.renderer_ = (clearTimeout(this.postRenderTimeoutHandle_), this.postRenderTimeoutHandle_ = void 0, this.postRenderFunctions_.length = 0, this.renderer_.dispose(), null)), this.animationDelayKey_ && (this.animationDelayKey_ = (cancelAnimationFrame(this.animationDelayKey_), void 0));
    else {
      t2.appendChild(this.viewport_), this.renderer_ || (this.renderer_ = new Fl(this)), this.mapBrowserEventHandler_ = new Hl(this, this.moveTolerance_);
      for (let e21 in $)
        this.mapBrowserEventHandler_.addEventListener($[e21], this.handleMapBrowserEvent.bind(this));
      this.viewport_.addEventListener(E.CONTEXTMENU, this.boundHandleBrowserEvent_, false), this.viewport_.addEventListener(E.WHEEL, this.boundHandleBrowserEvent_, Gi ? {passive: false} : false);
      let e20 = this.keyboardEventTarget_ ? this.keyboardEventTarget_ : t2;
      this.targetChangeHandlerKeys_ = [D(e20, E.KEYDOWN, this.handleBrowserEvent, this), D(e20, E.KEYPRESS, this.handleBrowserEvent, this)];
      let n2 = t2.getRootNode();
      n2 instanceof ShadowRoot && this.resizeObserver_.observe(n2.host), this.resizeObserver_.observe(t2);
    }
    this.updateSize();
  }
  handleTileChange_() {
    this.render();
  }
  handleViewPropertyChanged_() {
    this.render();
  }
  handleViewChanged_() {
    this.viewPropertyListenerKey_ && (this.viewPropertyListenerKey_ = (k(this.viewPropertyListenerKey_), null)), this.viewChangeListenerKey_ && (this.viewChangeListenerKey_ = (k(this.viewChangeListenerKey_), null));
    let e19 = this.getView();
    e19 && (this.updateViewportSize_(this.getSize()), this.viewPropertyListenerKey_ = D(e19, l.PROPERTYCHANGE, this.handleViewPropertyChanged_, this), this.viewChangeListenerKey_ = D(e19, E.CHANGE, this.handleViewPropertyChanged_, this), e19.resolveConstraints(0)), this.render();
  }
  handleLayerGroupChanged_() {
    this.layerGroupPropertyListenerKeys_ && (this.layerGroupPropertyListenerKeys_ = (this.layerGroupPropertyListenerKeys_.forEach(k), null));
    let e19 = this.getLayerGroup();
    e19 && (this.handleLayerAdd_(new Il(`addlayer`, e19)), this.layerGroupPropertyListenerKeys_ = [D(e19, l.PROPERTYCHANGE, this.render, this), D(e19, E.CHANGE, this.render, this), D(e19, `addlayer`, this.handleLayerAdd_, this), D(e19, `removelayer`, this.handleLayerRemove_, this)]), this.render();
  }
  isRendered() {
    return !!this.frameState_;
  }
  animationDelay_() {
    this.animationDelayKey_ = void 0, this.renderFrame_(Date.now());
  }
  renderSync() {
    this.animationDelayKey_ && cancelAnimationFrame(this.animationDelayKey_), this.animationDelay_();
  }
  redrawText() {
    let e19 = this.getLayerGroup().getLayerStatesArray();
    for (let t2 = 0, n2 = e19.length; t2 < n2; ++t2) {
      let n3 = e19[t2].layer;
      n3.hasRenderer() && n3.getRenderer().handleFontsChanged();
    }
  }
  render() {
    this.renderer_ && this.animationDelayKey_ === void 0 && (this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_));
  }
  removeControl(e19) {
    return this.getControls().remove(e19);
  }
  removeInteraction(e19) {
    return this.getInteractions().remove(e19);
  }
  removeLayer(e19) {
    return this.getLayerGroup().getLayers().remove(e19);
  }
  handleLayerRemove_(e19) {
    Nu(e19.layer);
  }
  removeOverlay(e19) {
    return this.getOverlays().remove(e19);
  }
  renderFrame_(e19) {
    let t2 = this.getSize(), n2 = this.getView(), r2 = this.frameState_, i2 = null;
    if (t2 !== void 0 && pa(t2) && n2 && n2.isDef()) {
      let r3 = n2.getHints(this.frameState_ ? this.frameState_.viewHints : void 0), a2 = n2.getState();
      if (i2 = {animate: false, coordinateToPixelTransform: this.coordinateToPixelTransform_, declutter: null, extent: Be(a2.center, a2.resolution, a2.rotation, t2), index: this.frameIndex_++, layerIndex: 0, layerStatesArray: this.getLayerGroup().getLayerStatesArray(), pixelRatio: this.pixelRatio_, pixelToCoordinateTransform: this.pixelToCoordinateTransform_, postRenderFunctions: [], size: t2, tileQueue: this.tileQueue_, time: e19, usedTiles: {}, viewState: a2, viewHints: r3, wantedTiles: {}, mapId: j(this), renderTargets: {}}, a2.nextCenter && a2.nextResolution) {
        let e20 = isNaN(a2.nextRotation) ? a2.rotation : a2.nextRotation;
        i2.nextExtent = Be(a2.nextCenter, a2.nextResolution, e20, t2);
      }
    }
    this.frameState_ = i2, this.renderer_.renderFrame(i2), i2 && (i2.animate && this.render(), Array.prototype.push.apply(this.postRenderFunctions_, i2.postRenderFunctions), r2 && (this.previousExtent_ && (qe(this.previousExtent_) || ke(i2.extent, this.previousExtent_)) || (this.dispatchEvent(new zl(Ul.MOVESTART, this, r2)), this.previousExtent_ = Ee(this.previousExtent_))), this.previousExtent_ && !i2.viewHints[ro.ANIMATING] && !i2.viewHints[ro.INTERACTING] && !ke(i2.extent, this.previousExtent_) && (this.dispatchEvent(new zl(Ul.MOVEEND, this, i2)), ve(i2.extent, this.previousExtent_))), this.dispatchEvent(new zl(Ul.POSTRENDER, this, i2)), this.renderComplete_ = this.hasListener(Ul.LOADSTART) || this.hasListener(Ul.LOADEND) || this.hasListener(nr.RENDERCOMPLETE) ? !this.tileQueue_.getTilesLoading() && !this.tileQueue_.getCount() && !this.getLoadingOrNotReady() : void 0, this.postRenderTimeoutHandle_ || (this.postRenderTimeoutHandle_ = setTimeout(() => {
      this.postRenderTimeoutHandle_ = void 0, this.handlePostRender();
    }, 0));
  }
  setLayerGroup(e19) {
    let t2 = this.getLayerGroup();
    t2 && this.handleLayerRemove_(new Il(`removelayer`, t2)), this.set(Wl.LAYERGROUP, e19);
  }
  setSize(e19) {
    this.set(Wl.SIZE, e19);
  }
  setTarget(e19) {
    this.set(Wl.TARGET, e19);
  }
  setView(e19) {
    if (!e19 || e19 instanceof So) {
      this.set(Wl.VIEW, e19);
      return;
    }
    this.set(Wl.VIEW, new So());
    let t2 = this;
    e19.then(function(e20) {
      t2.setView(new So(e20));
    });
  }
  updateSize() {
    let e19 = this.getTargetElement(), t2;
    if (e19) {
      let n3 = getComputedStyle(e19), r2 = e19.offsetWidth - parseFloat(n3.borderLeftWidth) - parseFloat(n3.paddingLeft) - parseFloat(n3.paddingRight) - parseFloat(n3.borderRightWidth), i2 = e19.offsetHeight - parseFloat(n3.borderTopWidth) - parseFloat(n3.paddingTop) - parseFloat(n3.paddingBottom) - parseFloat(n3.borderBottomWidth);
      !isNaN(r2) && !isNaN(i2) && (t2 = [r2, i2], !pa(t2) && (e19.offsetWidth || e19.offsetHeight || e19.getClientRects().length) && Rt(`No map visible because the map container's width or height are 0.`));
    }
    let n2 = this.getSize();
    !t2 || n2 && g(t2, n2) || (this.setSize(t2), this.updateViewportSize_(t2));
  }
  updateViewportSize_(e19) {
    let t2 = this.getView();
    t2 && t2.setViewportSize(e19);
  }
};
function Iu(e19) {
  let t2 = null;
  e19.keyboardEventTarget !== void 0 && (t2 = typeof e19.keyboardEventTarget == `string` ? document.getElementById(e19.keyboardEventTarget) : e19.keyboardEventTarget);
  let n2 = {}, r2 = e19.layers && typeof e19.layers.getLayers == `function` ? e19.layers : new Rl({layers: e19.layers});
  n2[Wl.LAYERGROUP] = r2, n2[Wl.TARGET] = e19.target, n2[Wl.VIEW] = e19.view instanceof So ? e19.view : new So();
  let i2;
  e19.controls !== void 0 && (Array.isArray(e19.controls) ? i2 = new oe(e19.controls.slice()) : (P(typeof e19.controls.getArray == `function`, "Expected `controls` to be an array or an `ol/Collection.js`"), i2 = e19.controls));
  let a2;
  e19.interactions !== void 0 && (Array.isArray(e19.interactions) ? a2 = new oe(e19.interactions.slice()) : (P(typeof e19.interactions.getArray == `function`, "Expected `interactions` to be an array or an `ol/Collection.js`"), a2 = e19.interactions));
  let o2;
  return e19.overlays === void 0 ? o2 = new oe() : Array.isArray(e19.overlays) ? o2 = new oe(e19.overlays.slice()) : (P(typeof e19.overlays.getArray == `function`, "Expected `overlays` to be an array or an `ol/Collection.js`"), o2 = e19.overlays), {controls: i2, interactions: a2, keyboardEventTarget: t2, overlays: o2, values: n2};
}
var Lu = class {
  constructor(e19) {
    this.highWaterMark = e19 === void 0 ? 2048 : e19, this.count_ = 0, this.entries_ = {}, this.oldest_ = null, this.newest_ = null;
  }
  canExpireCache() {
    return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
  }
  expireCache(e19) {
    for (; this.canExpireCache(); )
      this.pop();
  }
  clear() {
    this.count_ = 0, this.entries_ = {}, this.oldest_ = null, this.newest_ = null;
  }
  containsKey(e19) {
    return this.entries_.hasOwnProperty(e19);
  }
  forEach(e19) {
    let t2 = this.oldest_;
    for (; t2; )
      e19(t2.value_, t2.key_, this), t2 = t2.newer;
  }
  get(e19, t2) {
    let n2 = this.entries_[e19];
    return P(n2 !== void 0, `Tried to get a value for a key that does not exist in the cache`), n2 === this.newest_ || (n2 === this.oldest_ ? (this.oldest_ = this.oldest_.newer, this.oldest_.older = null) : (n2.newer.older = n2.older, n2.older.newer = n2.newer), n2.newer = null, n2.older = this.newest_, this.newest_.newer = n2, this.newest_ = n2), n2.value_;
  }
  remove(e19) {
    let t2 = this.entries_[e19];
    return P(t2 !== void 0, `Tried to get a value for a key that does not exist in the cache`), t2 === this.newest_ ? (this.newest_ = t2.older, this.newest_ && (this.newest_.newer = null)) : t2 === this.oldest_ ? (this.oldest_ = t2.newer, this.oldest_ && (this.oldest_.older = null)) : (t2.newer.older = t2.older, t2.older.newer = t2.newer), delete this.entries_[e19], --this.count_, t2.value_;
  }
  getCount() {
    return this.count_;
  }
  getKeys() {
    let e19 = Array(this.count_), t2 = 0, n2;
    for (n2 = this.newest_; n2; n2 = n2.older)
      e19[t2++] = n2.key_;
    return e19;
  }
  getValues() {
    let e19 = Array(this.count_), t2 = 0, n2;
    for (n2 = this.newest_; n2; n2 = n2.older)
      e19[t2++] = n2.value_;
    return e19;
  }
  peekLast() {
    return this.oldest_.value_;
  }
  peekLastKey() {
    return this.oldest_.key_;
  }
  peekFirstKey() {
    return this.newest_.key_;
  }
  peek(e19) {
    return this.entries_[e19]?.value_;
  }
  pop() {
    let e19 = this.oldest_;
    return delete this.entries_[e19.key_], e19.newer && (e19.newer.older = null), this.oldest_ = e19.newer, this.oldest_ || (this.newest_ = null), --this.count_, e19.value_;
  }
  replace(e19, t2) {
    this.get(e19), this.entries_[e19].value_ = t2;
  }
  set(e19, t2) {
    P(!(e19 in this.entries_), `Tried to set a value for a key that is used already`);
    let n2 = {key_: e19, newer: null, older: this.newest_, value_: t2};
    this.newest_ ? this.newest_.newer = n2 : this.oldest_ = n2, this.newest_ = n2, this.entries_[e19] = n2, ++this.count_;
  }
  setSize(e19) {
    this.highWaterMark = e19;
  }
};
function Ru(e19, t2, n2, r2) {
  return r2 === void 0 ? [e19, t2, n2] : (r2[0] = e19, r2[1] = t2, r2[2] = n2, r2);
}
function zu(e19, t2, n2) {
  return e19 + `/` + t2 + `/` + n2;
}
function Bu(e19) {
  return zu(e19[0], e19[1], e19[2]);
}
function Vu(e19) {
  return e19.split(`/`).map(Number);
}
function Hu(e19) {
  return (e19[1] << e19[0]) + e19[2];
}
function Uu(e19, t2) {
  let n2 = e19[0], r2 = e19[1], i2 = e19[2];
  if (t2.getMinZoom() > n2 || n2 > t2.getMaxZoom())
    return false;
  let a2 = t2.getFullTileRange(n2);
  return !a2 || a2.containsXY(r2, i2);
}
var Wu = class extends Lu {
  clear() {
    for (; this.getCount() > 0; )
      this.pop().release();
    super.clear();
  }
  expireCache(e19) {
    for (; this.canExpireCache() && !(this.peekLast().getKey() in e19); )
      this.pop().release();
  }
  pruneExceptNewestZ() {
    if (this.getCount() === 0)
      return;
    let e19 = Vu(this.peekFirstKey())[0];
    this.forEach((t2) => {
      t2.tileCoord[0] !== e19 && (this.remove(Bu(t2.tileCoord)), t2.release());
    });
  }
}, Gu = class {
  constructor(e19, t2, n2, r2) {
    this.minX = e19, this.maxX = t2, this.minY = n2, this.maxY = r2;
  }
  contains(e19) {
    return this.containsXY(e19[1], e19[2]);
  }
  containsTileRange(e19) {
    return this.minX <= e19.minX && e19.maxX <= this.maxX && this.minY <= e19.minY && e19.maxY <= this.maxY;
  }
  containsXY(e19, t2) {
    return this.minX <= e19 && e19 <= this.maxX && this.minY <= t2 && t2 <= this.maxY;
  }
  equals(e19) {
    return this.minX == e19.minX && this.minY == e19.minY && this.maxX == e19.maxX && this.maxY == e19.maxY;
  }
  extend(e19) {
    e19.minX < this.minX && (this.minX = e19.minX), e19.maxX > this.maxX && (this.maxX = e19.maxX), e19.minY < this.minY && (this.minY = e19.minY), e19.maxY > this.maxY && (this.maxY = e19.maxY);
  }
  getHeight() {
    return this.maxY - this.minY + 1;
  }
  getSize() {
    return [this.getWidth(), this.getHeight()];
  }
  getWidth() {
    return this.maxX - this.minX + 1;
  }
  intersects(e19) {
    return this.minX <= e19.maxX && this.maxX >= e19.minX && this.minY <= e19.maxY && this.maxY >= e19.minY;
  }
};
function Ku(e19, t2, n2, r2, i2) {
  return i2 === void 0 ? new Gu(e19, t2, n2, r2) : (i2.minX = e19, i2.maxX = t2, i2.minY = n2, i2.maxY = r2, i2);
}
var qu = 0.5, Ju = 10, Yu = 0.25, Xu = class {
  constructor(e19, t2, n2, r2, i2, a2) {
    this.sourceProj_ = e19, this.targetProj_ = t2;
    let o2 = {}, s2 = $t(this.targetProj_, this.sourceProj_);
    this.transformInv_ = function(e20) {
      let t3 = e20[0] + `/` + e20[1];
      return o2[t3] || (o2[t3] = s2(e20)), o2[t3];
    }, this.maxSourceExtent_ = r2, this.errorThresholdSquared_ = i2 * i2, this.triangles_ = [], this.wrapsXInSource_ = false, this.canWrapXInSource_ = this.sourceProj_.canWrapX() && !!r2 && !!this.sourceProj_.getExtent() && L(r2) >= L(this.sourceProj_.getExtent()), this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? L(this.sourceProj_.getExtent()) : null, this.targetWorldWidth_ = this.targetProj_.getExtent() ? L(this.targetProj_.getExtent()) : null;
    let c2 = We(n2), l2 = Ge(n2), u2 = Le(n2), d2 = Ie(n2), f2 = this.transformInv_(c2), p2 = this.transformInv_(l2), m2 = this.transformInv_(u2), h2 = this.transformInv_(d2), g2 = Ju + (a2 ? Math.max(0, Math.ceil(Math.log2(Fe(n2) / (a2 * a2 * 256 * 256)))) : 0);
    if (this.addQuad_(c2, l2, u2, d2, f2, p2, m2, h2, g2), this.wrapsXInSource_) {
      let e20 = 1 / 0;
      this.triangles_.forEach(function(t3, n3, r3) {
        e20 = Math.min(e20, t3.source[0][0], t3.source[1][0], t3.source[2][0]);
      }), this.triangles_.forEach((t3) => {
        if (Math.max(t3.source[0][0], t3.source[1][0], t3.source[2][0]) - e20 > this.sourceWorldWidth_ / 2) {
          let n3 = [[t3.source[0][0], t3.source[0][1]], [t3.source[1][0], t3.source[1][1]], [t3.source[2][0], t3.source[2][1]]];
          n3[0][0] - e20 > this.sourceWorldWidth_ / 2 && (n3[0][0] -= this.sourceWorldWidth_), n3[1][0] - e20 > this.sourceWorldWidth_ / 2 && (n3[1][0] -= this.sourceWorldWidth_), n3[2][0] - e20 > this.sourceWorldWidth_ / 2 && (n3[2][0] -= this.sourceWorldWidth_);
          let r3 = Math.min(n3[0][0], n3[1][0], n3[2][0]);
          Math.max(n3[0][0], n3[1][0], n3[2][0]) - r3 < this.sourceWorldWidth_ / 2 && (t3.source = n3);
        }
      });
    }
    o2 = {};
  }
  addTriangle_(e19, t2, n2, r2, i2, a2) {
    this.triangles_.push({source: [r2, i2, a2], target: [e19, t2, n2]});
  }
  addQuad_(e19, t2, n2, r2, i2, a2, o2, s2, c2) {
    let l2 = ge([i2, a2, o2, s2]), u2 = this.sourceWorldWidth_ ? L(l2) / this.sourceWorldWidth_ : null, d2 = this.sourceWorldWidth_, f2 = this.sourceProj_.canWrapX() && u2 > 0.5 && u2 < 1, p2 = false;
    if (c2 > 0 && (this.targetProj_.isGlobal() && this.targetWorldWidth_ && (p2 = L(ge([e19, t2, n2, r2])) / this.targetWorldWidth_ > Yu || p2), !f2 && this.sourceProj_.isGlobal() && u2 && (p2 = u2 > Yu || p2)), !p2 && this.maxSourceExtent_ && isFinite(l2[0]) && isFinite(l2[1]) && isFinite(l2[2]) && isFinite(l2[3]) && !Ke(l2, this.maxSourceExtent_))
      return;
    let m2 = 0;
    if (!p2 && (!isFinite(i2[0]) || !isFinite(i2[1]) || !isFinite(a2[0]) || !isFinite(a2[1]) || !isFinite(o2[0]) || !isFinite(o2[1]) || !isFinite(s2[0]) || !isFinite(s2[1]))) {
      if (c2 > 0)
        p2 = true;
      else if (m2 = (!isFinite(i2[0]) || !isFinite(i2[1]) ? 8 : 0) + (!isFinite(a2[0]) || !isFinite(a2[1]) ? 4 : 0) + (!isFinite(o2[0]) || !isFinite(o2[1]) ? 2 : 0) + +(!isFinite(s2[0]) || !isFinite(s2[1])), m2 != 1 && m2 != 2 && m2 != 4 && m2 != 8)
        return;
    }
    if (c2 > 0) {
      if (!p2) {
        let t3 = [(e19[0] + n2[0]) / 2, (e19[1] + n2[1]) / 2], r3 = this.transformInv_(t3), a3;
        a3 = f2 ? (wt(i2[0], d2) + wt(o2[0], d2)) / 2 - wt(r3[0], d2) : (i2[0] + o2[0]) / 2 - r3[0];
        let s3 = (i2[1] + o2[1]) / 2 - r3[1];
        p2 = a3 * a3 + s3 * s3 > this.errorThresholdSquared_;
      }
      if (p2) {
        if (Math.abs(e19[0] - n2[0]) <= Math.abs(e19[1] - n2[1])) {
          let l3 = [(t2[0] + n2[0]) / 2, (t2[1] + n2[1]) / 2], u3 = this.transformInv_(l3), d3 = [(r2[0] + e19[0]) / 2, (r2[1] + e19[1]) / 2], f3 = this.transformInv_(d3);
          this.addQuad_(e19, t2, l3, d3, i2, a2, u3, f3, c2 - 1), this.addQuad_(d3, l3, n2, r2, f3, u3, o2, s2, c2 - 1);
        } else {
          let l3 = [(e19[0] + t2[0]) / 2, (e19[1] + t2[1]) / 2], u3 = this.transformInv_(l3), d3 = [(n2[0] + r2[0]) / 2, (n2[1] + r2[1]) / 2], f3 = this.transformInv_(d3);
          this.addQuad_(e19, l3, d3, r2, i2, u3, f3, s2, c2 - 1), this.addQuad_(l3, t2, n2, d3, u3, a2, o2, f3, c2 - 1);
        }
        return;
      }
    }
    if (f2) {
      if (!this.canWrapXInSource_)
        return;
      this.wrapsXInSource_ = true;
    }
    m2 & 11 || this.addTriangle_(e19, n2, r2, i2, o2, s2), m2 & 14 || this.addTriangle_(e19, n2, t2, i2, o2, a2), m2 && (m2 & 13 || this.addTriangle_(t2, r2, e19, a2, s2, i2), m2 & 7 || this.addTriangle_(t2, r2, n2, a2, s2, o2));
  }
  calculateSourceExtent() {
    let e19 = we();
    return this.triangles_.forEach(function(t2, n2, r2) {
      let i2 = t2.source;
      je(e19, i2[0]), je(e19, i2[1]), je(e19, i2[2]);
    }), e19;
  }
  getTriangles() {
    return this.triangles_;
  }
}, Zu, Qu = [];
function $u(e19, t2, n2, r2, i2) {
  e19.beginPath(), e19.moveTo(0, 0), e19.lineTo(t2, n2), e19.lineTo(r2, i2), e19.closePath(), e19.save(), e19.clip(), e19.fillRect(0, 0, Math.max(t2, r2) + 1, Math.max(n2, i2)), e19.restore();
}
function ed(e19, t2) {
  return Math.abs(e19[t2 * 4] - 210) > 2 || Math.abs(e19[t2 * 4 + 3] - 191.25) > 2;
}
function td() {
  if (Zu === void 0) {
    let e19 = Ki(6, 6, Qu);
    e19.globalCompositeOperation = `lighter`, e19.fillStyle = `rgba(210, 0, 0, 0.75)`, $u(e19, 4, 5, 4, 0), $u(e19, 4, 5, 0, 5);
    let t2 = e19.getImageData(0, 0, 3, 3).data;
    Zu = ed(t2, 0) || ed(t2, 4) || ed(t2, 8), Yi(e19), Qu.push(e19.canvas);
  }
  return Zu;
}
function nd(e19, t2, n2, r2) {
  let i2 = en(n2, t2, e19), a2 = Kt(t2, r2, n2), o2 = t2.getMetersPerUnit();
  o2 !== void 0 && (a2 *= o2);
  let s2 = e19.getMetersPerUnit();
  s2 !== void 0 && (a2 /= s2);
  let c2 = e19.getExtent();
  if (!c2 || be(c2, i2)) {
    let t3 = Kt(e19, a2, i2) / a2;
    isFinite(t3) && t3 > 0 && (a2 /= t3);
  }
  return a2;
}
function rd(e19, t2, n2, r2) {
  let i2 = nd(e19, t2, Re(n2), r2);
  return (!isFinite(i2) || i2 <= 0) && Pe(n2, function(n3) {
    return i2 = nd(e19, t2, n3, r2), isFinite(i2) && i2 > 0;
  }), i2;
}
function id(e19, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2) {
  let m2 = Ki(Math.round(n2 * e19), Math.round(n2 * t2), Qu);
  if (d2 || (m2.imageSmoothingEnabled = false), c2.length === 0)
    return m2.canvas;
  m2.scale(n2, n2);
  function h2(e20) {
    return Math.round(e20 * n2) / n2;
  }
  m2.globalCompositeOperation = `lighter`;
  let g2 = we();
  c2.forEach(function(e20, t3, n3) {
    Ae(g2, e20.extent);
  });
  let _2, v2 = n2 / r2, y2 = (d2 ? 1 : 1 + 2 ** -24) / v2;
  if (!f2 || c2.length !== 1 || l2 !== 0) {
    if (_2 = Ki(Math.round(L(g2) * v2), Math.round(He(g2) * v2), Qu), d2 || (_2.imageSmoothingEnabled = false), i2 && p2) {
      let e20 = (i2[0] - g2[0]) * v2, t3 = -(i2[3] - g2[3]) * v2, n3 = L(i2) * v2, r3 = He(i2) * v2;
      _2.rect(e20, t3, n3, r3), _2.clip();
    }
    c2.forEach(function(e20, t3, n3) {
      if (e20.image.width > 0 && e20.image.height > 0) {
        if (e20.clipExtent) {
          _2.save();
          let t5 = (e20.clipExtent[0] - g2[0]) * v2, n5 = -(e20.clipExtent[3] - g2[3]) * v2, r4 = L(e20.clipExtent) * v2, i4 = He(e20.clipExtent) * v2;
          _2.rect(d2 ? t5 : Math.round(t5), d2 ? n5 : Math.round(n5), d2 ? r4 : Math.round(t5 + r4) - Math.round(t5), d2 ? i4 : Math.round(n5 + i4) - Math.round(n5)), _2.clip();
        }
        let t4 = (e20.extent[0] - g2[0]) * v2, n4 = -(e20.extent[3] - g2[3]) * v2, r3 = L(e20.extent) * v2, i3 = He(e20.extent) * v2;
        _2.drawImage(e20.image, l2, l2, e20.image.width - 2 * l2, e20.image.height - 2 * l2, d2 ? t4 : Math.round(t4), d2 ? n4 : Math.round(n4), d2 ? r3 : Math.round(t4 + r3) - Math.round(t4), d2 ? i3 : Math.round(n4 + i3) - Math.round(n4)), e20.clipExtent && _2.restore();
      }
    });
  }
  let b2 = We(o2);
  return s2.getTriangles().forEach(function(e20, t3, n3) {
    let r3 = e20.source, i3 = e20.target, o3 = r3[0][0], s3 = r3[0][1], l3 = r3[1][0], u3 = r3[1][1], f3 = r3[2][0], p3 = r3[2][1], v3 = h2((i3[0][0] - b2[0]) / a2), x2 = h2(-(i3[0][1] - b2[1]) / a2), S2 = h2((i3[1][0] - b2[0]) / a2), C2 = h2(-(i3[1][1] - b2[1]) / a2), w2 = h2((i3[2][0] - b2[0]) / a2), T2 = h2(-(i3[2][1] - b2[1]) / a2), E2 = o3, D2 = s3;
    o3 = 0, s3 = 0, l3 -= E2, u3 -= D2, f3 -= E2, p3 -= D2;
    let O2 = St([[l3, u3, 0, 0, S2 - v3], [f3, p3, 0, 0, w2 - v3], [0, 0, l3, u3, C2 - x2], [0, 0, f3, p3, T2 - x2]]);
    if (!O2)
      return;
    if (m2.save(), m2.beginPath(), td() || !d2) {
      m2.moveTo(S2, C2);
      let e21 = v3 - S2, t4 = x2 - C2;
      for (let n4 = 0; n4 < 4; n4++)
        m2.lineTo(S2 + h2((n4 + 1) * e21 / 4), C2 + h2(n4 * t4 / 3)), n4 != 3 && m2.lineTo(S2 + h2((n4 + 1) * e21 / 4), C2 + h2((n4 + 1) * t4 / 3));
      m2.lineTo(w2, T2);
    } else
      m2.moveTo(S2, C2), m2.lineTo(v3, x2), m2.lineTo(w2, T2);
    m2.clip(), m2.transform(O2[0], O2[2], O2[1], O2[3], v3, x2), m2.translate(g2[0] - E2, g2[3] - D2);
    let k2;
    if (_2)
      k2 = _2.canvas, m2.scale(y2, -y2);
    else {
      let e21 = c2[0], t4 = e21.extent;
      k2 = e21.image, m2.scale(L(t4) / k2.width, -He(t4) / k2.height);
    }
    m2.drawImage(k2, 0, 0), m2.restore();
  }), _2 && (Yi(_2), Qu.push(_2.canvas)), u2 && (m2.save(), m2.globalCompositeOperation = `source-over`, m2.strokeStyle = `black`, m2.lineWidth = 1, s2.getTriangles().forEach(function(e20, t3, n3) {
    let r3 = e20.target, i3 = (r3[0][0] - b2[0]) / a2, o3 = -(r3[0][1] - b2[1]) / a2, s3 = (r3[1][0] - b2[0]) / a2, c3 = -(r3[1][1] - b2[1]) / a2, l3 = (r3[2][0] - b2[0]) / a2, u3 = -(r3[2][1] - b2[1]) / a2;
    m2.beginPath(), m2.moveTo(s3, c3), m2.lineTo(i3, o3), m2.lineTo(l3, u3), m2.closePath(), m2.stroke();
  }), m2.restore()), m2.canvas;
}
var ad = class extends kl {
  constructor(e19, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2) {
    super(i2, Q.IDLE, d2), this.renderEdges_ = u2 !== void 0 && u2, this.pixelRatio_ = o2, this.gutter_ = s2, this.canvas_ = null, this.sourceTileGrid_ = t2, this.targetTileGrid_ = r2, this.wrappedTileCoord_ = a2 || i2, this.sourceTiles_ = [], this.sourcesListenerKeys_ = null, this.sourceZ_ = 0, this.clipExtent_ = e19.canWrapX() ? e19.getExtent() : void 0;
    let f2 = r2.getTileCoordExtent(this.wrappedTileCoord_), p2 = this.targetTileGrid_.getExtent(), m2 = this.sourceTileGrid_.getExtent(), h2 = p2 ? Ue(f2, p2) : f2;
    if (Fe(h2) === 0) {
      this.state = Q.EMPTY;
      return;
    }
    let g2 = e19.getExtent();
    g2 && (m2 = m2 ? Ue(m2, g2) : g2);
    let _2 = r2.getResolution(this.wrappedTileCoord_[0]), v2 = rd(e19, n2, h2, _2);
    if (!isFinite(v2) || v2 <= 0) {
      this.state = Q.EMPTY;
      return;
    }
    let y2 = l2 === void 0 ? qu : l2;
    if (this.triangulation_ = new Xu(e19, n2, h2, m2, v2 * y2, _2), this.triangulation_.getTriangles().length === 0) {
      this.state = Q.EMPTY;
      return;
    }
    this.sourceZ_ = t2.getZForResolution(v2);
    let b2 = this.triangulation_.calculateSourceExtent();
    if (m2 && (e19.canWrapX() ? (b2[1] = R(b2[1], m2[1], m2[3]), b2[3] = R(b2[3], m2[1], m2[3])) : b2 = Ue(b2, m2)), !Fe(b2))
      this.state = Q.EMPTY;
    else {
      let n3 = 0, r3 = 0;
      e19.canWrapX() && (n3 = L(g2), r3 = Math.floor((b2[0] - g2[0]) / n3)), Ze(b2.slice(), e19, true).forEach((e20) => {
        let i3 = t2.getTileRangeForExtentAndZ(e20, this.sourceZ_);
        for (let e21 = i3.minX; e21 <= i3.maxX; e21++)
          for (let t3 = i3.minY; t3 <= i3.maxY; t3++) {
            let i4 = c2(this.sourceZ_, e21, t3, o2);
            if (i4) {
              let e22 = r3 * n3;
              this.sourceTiles_.push({tile: i4, offset: e22});
            }
          }
        ++r3;
      }), this.sourceTiles_.length === 0 && (this.state = Q.EMPTY);
    }
  }
  getImage() {
    return this.canvas_;
  }
  reproject_() {
    let e19 = [];
    if (this.sourceTiles_.forEach((t2) => {
      let n2 = t2.tile;
      if (n2 && n2.getState() == Q.LOADED) {
        let r2 = this.sourceTileGrid_.getTileCoordExtent(n2.tileCoord);
        r2[0] += t2.offset, r2[2] += t2.offset;
        let i2 = this.clipExtent_?.slice();
        i2 && (i2[0] += t2.offset, i2[2] += t2.offset), e19.push({extent: r2, clipExtent: i2, image: n2.getImage()});
      }
    }), this.sourceTiles_.length = 0, e19.length === 0)
      this.state = Q.ERROR;
    else {
      let t2 = this.wrappedTileCoord_[0], n2 = this.targetTileGrid_.getTileSize(t2), r2 = typeof n2 == `number` ? n2 : n2[0], i2 = typeof n2 == `number` ? n2 : n2[1], a2 = this.targetTileGrid_.getResolution(t2), o2 = this.sourceTileGrid_.getResolution(this.sourceZ_), s2 = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);
      this.canvas_ = id(r2, i2, this.pixelRatio_, o2, this.sourceTileGrid_.getExtent(), a2, s2, this.triangulation_, e19, this.gutter_, this.renderEdges_, this.interpolate), this.state = Q.LOADED;
    }
    this.changed();
  }
  load() {
    if (this.state == Q.IDLE) {
      this.state = Q.LOADING, this.changed();
      let e19 = 0;
      this.sourcesListenerKeys_ = [], this.sourceTiles_.forEach(({tile: t2}) => {
        let n2 = t2.getState();
        if (n2 == Q.IDLE || n2 == Q.LOADING) {
          e19++;
          let n3 = D(t2, E.CHANGE, function(r2) {
            let i2 = t2.getState();
            (i2 == Q.LOADED || i2 == Q.ERROR || i2 == Q.EMPTY) && (k(n3), e19--, e19 === 0 && (this.unlistenSources_(), this.reproject_()));
          }, this);
          this.sourcesListenerKeys_.push(n3);
        }
      }), e19 === 0 ? setTimeout(this.reproject_.bind(this), 0) : this.sourceTiles_.forEach(function({tile: e20}, t2, n2) {
        e20.getState() == Q.IDLE && e20.load();
      });
    }
  }
  unlistenSources_() {
    this.sourcesListenerKeys_.forEach(k), this.sourcesListenerKeys_ = null;
  }
  release() {
    this.canvas_ && (this.canvas_ = (Yi(this.canvas_.getContext(`2d`)), Qu.push(this.canvas_), null)), super.release();
  }
}, od = {PRELOAD: `preload`, USE_INTERIM_TILES_ON_ERROR: `useInterimTilesOnError`}, sd = class extends ko {
  constructor(e19) {
    e19 || (e19 = {});
    let t2 = Object.assign({}, e19);
    delete t2.preload, delete t2.useInterimTilesOnError, super(t2), this.on, this.once, this.un, this.setPreload(e19.preload === void 0 ? 0 : e19.preload), this.setUseInterimTilesOnError(e19.useInterimTilesOnError === void 0 || e19.useInterimTilesOnError);
  }
  getPreload() {
    return this.get(od.PRELOAD);
  }
  setPreload(e19) {
    this.set(od.PRELOAD, e19);
  }
  getUseInterimTilesOnError() {
    return this.get(od.USE_INTERIM_TILES_ON_ERROR);
  }
  setUseInterimTilesOnError(e19) {
    this.set(od.USE_INTERIM_TILES_ON_ERROR, e19);
  }
  getData(e19) {
    return super.getData(e19);
  }
}, cd = class extends Ac {
  constructor(e19) {
    super(e19), this.extentChanged = true, this.renderedExtent_ = null, this.renderedPixelRatio, this.renderedProjection = null, this.renderedRevision, this.renderedTiles = [], this.newTiles_ = false, this.tmpExtent = we(), this.tmpTileRange_ = new Gu(0, 0, 0, 0);
  }
  isDrawableTile(e19) {
    let t2 = this.getLayer(), n2 = e19.getState(), r2 = t2.getUseInterimTilesOnError();
    return n2 == Q.LOADED || n2 == Q.EMPTY || n2 == Q.ERROR && !r2;
  }
  getTile(e19, t2, n2, r2) {
    let i2 = r2.pixelRatio, a2 = r2.viewState.projection, o2 = this.getLayer(), s2 = o2.getSource().getTile(e19, t2, n2, i2, a2);
    return s2.getState() == Q.ERROR && o2.getUseInterimTilesOnError() && o2.getPreload() > 0 && (this.newTiles_ = true), this.isDrawableTile(s2) || (s2 = s2.getInterimTile()), s2;
  }
  getData(e19) {
    let t2 = this.frameState;
    if (!t2)
      return null;
    let n2 = this.getLayer(), r2 = F(t2.pixelToCoordinateTransform, e19.slice()), i2 = n2.getExtent();
    if (i2 && !be(i2, r2))
      return null;
    let a2 = t2.pixelRatio, o2 = t2.viewState.projection, s2 = t2.viewState, c2 = n2.getRenderSource(), l2 = c2.getTileGridForProjection(s2.projection), u2 = c2.getTilePixelRatio(t2.pixelRatio);
    for (let e20 = l2.getZForResolution(s2.resolution); e20 >= l2.getMinZoom(); --e20) {
      let t3 = l2.getTileCoordForCoordAndZ(r2, e20), n3 = c2.getTile(e20, t3[1], t3[2], a2, o2);
      if (!(n3 instanceof Al || n3 instanceof ad) || n3 instanceof ad && n3.getState() === Q.EMPTY)
        return null;
      if (n3.getState() !== Q.LOADED)
        continue;
      let i3 = l2.getOrigin(e20), d2 = ha(l2.getTileSize(e20)), f2 = l2.getResolution(e20), p2 = Math.floor(u2 * ((r2[0] - i3[0]) / f2 - t3[1] * d2[0])), m2 = Math.floor(u2 * ((i3[1] - r2[1]) / f2 - t3[2] * d2[1])), h2 = Math.round(u2 * c2.getGutterForProjection(s2.projection));
      return this.getImageData(n3.getImage(), p2 + h2, m2 + h2);
    }
    return null;
  }
  loadedTileCallback(e19, t2, n2) {
    return this.isDrawableTile(n2) ? super.loadedTileCallback(e19, t2, n2) : false;
  }
  prepareFrame(e19) {
    return !!this.getLayer().getSource();
  }
  renderFrame(e19, t2) {
    let n2 = e19.layerStatesArray[e19.layerIndex], r2 = e19.viewState, i2 = r2.projection, a2 = r2.resolution, o2 = r2.center, s2 = r2.rotation, c2 = e19.pixelRatio, l2 = this.getLayer(), u2 = l2.getSource(), d2 = u2.getRevision(), p2 = u2.getTileGridForProjection(i2), m2 = p2.getZForResolution(a2, u2.zDirection), h2 = p2.getResolution(m2), g2 = e19.extent, _2 = e19.viewState.resolution, v2 = u2.getTilePixelRatio(c2);
    this.prepareContainer(e19, t2);
    let y2 = this.context.canvas.width, b2 = this.context.canvas.height, x2 = n2.extent && sn(n2.extent, i2);
    x2 && (g2 = Ue(g2, sn(n2.extent, i2)));
    let S2 = h2 * y2 / 2 / v2, C2 = h2 * b2 / 2 / v2, w2 = [o2[0] - S2, o2[1] - C2, o2[0] + S2, o2[1] + C2], T2 = p2.getTileRangeForExtentAndZ(g2, m2), E2 = {};
    E2[m2] = {};
    let D2 = this.createLoadedTileFinder(u2, i2, E2), O2 = this.tmpExtent, k2 = this.tmpTileRange_;
    this.newTiles_ = false;
    let ee2 = s2 ? Ve(r2.center, _2, s2, e19.size) : void 0;
    for (let t3 = T2.minX; t3 <= T2.maxX; ++t3)
      for (let r3 = T2.minY; r3 <= T2.maxY; ++r3) {
        if (s2 && !p2.tileCoordIntersectsViewport([m2, t3, r3], ee2))
          continue;
        let i3 = this.getTile(m2, t3, r3, e19);
        if (this.isDrawableTile(i3)) {
          let t4 = j(this);
          if (i3.getState() == Q.LOADED) {
            E2[m2][i3.tileCoord.toString()] = i3;
            let e20 = i3.inTransition(t4);
            e20 && n2.opacity !== 1 && (i3.endTransition(t4), e20 = false), this.newTiles_ || !e20 && this.renderedTiles.includes(i3) || (this.newTiles_ = true);
          }
          if (i3.getAlpha(t4, e19.time) === 1)
            continue;
        }
        let a3 = p2.getTileCoordChildTileRange(i3.tileCoord, k2, O2), o3 = false;
        a3 && (o3 = D2(m2 + 1, a3)), o3 || p2.forEachTileCoordParentTileRange(i3.tileCoord, D2, k2, O2);
      }
    let te2 = h2 / a2 * c2 / v2, A2 = this.getRenderContext(e19);
    de(this.tempTransform, y2 / 2, b2 / 2, te2, te2, 0, -y2 / 2, -b2 / 2), x2 && this.clipUnrotated(A2, e19, x2), u2.getInterpolate() || (A2.imageSmoothingEnabled = false), this.preRender(A2, e19), this.renderedTiles.length = 0;
    let ne2 = Object.keys(E2).map(Number);
    ne2.sort(f);
    let re2, M2, N2;
    n2.opacity === 1 && (!this.containerReused || u2.getOpaque(e19.viewState.projection)) ? ne2 = ne2.reverse() : (re2 = [], M2 = []);
    for (let t3 = ne2.length - 1; t3 >= 0; --t3) {
      let n3 = ne2[t3], r3 = u2.getTilePixelSize(n3, c2, i2), a3 = p2.getResolution(n3) / h2, o3 = r3[0] * a3 * te2, s3 = r3[1] * a3 * te2, l3 = p2.getTileCoordForCoordAndZ(We(w2), n3), d3 = p2.getTileCoordExtent(l3), f2 = F(this.tempTransform, [v2 * (d3[0] - w2[0]) / h2, v2 * (w2[3] - d3[3]) / h2]), g3 = v2 * u2.getGutterForProjection(i2), _3 = E2[n3];
      for (let t4 in _3) {
        let r4 = _3[t4], i3 = r4.tileCoord, a4 = l3[1] - i3[1], c3 = Math.round(f2[0] - (a4 - 1) * o3), d4 = l3[2] - i3[2], p3 = Math.round(f2[1] - (d4 - 1) * s3), h3 = Math.round(f2[0] - a4 * o3), v3 = Math.round(f2[1] - d4 * s3), y3 = c3 - h3, b3 = p3 - v3, x3 = m2 === n3, S3 = x3 && r4.getAlpha(j(this), e19.time) !== 1, C3 = false;
        if (!S3) {
          if (re2) {
            N2 = [h3, v3, h3 + y3, v3, h3 + y3, v3 + b3, h3, v3 + b3];
            for (let e20 = 0, t5 = re2.length; e20 < t5; ++e20)
              if (m2 !== n3 && n3 < M2[e20]) {
                let t6 = re2[e20];
                Ke([h3, v3, h3 + y3, v3 + b3], [t6[0], t6[3], t6[4], t6[7]]) && (C3 || (C3 = (A2.save(), true)), A2.beginPath(), A2.moveTo(N2[0], N2[1]), A2.lineTo(N2[2], N2[3]), A2.lineTo(N2[4], N2[5]), A2.lineTo(N2[6], N2[7]), A2.moveTo(t6[6], t6[7]), A2.lineTo(t6[4], t6[5]), A2.lineTo(t6[2], t6[3]), A2.lineTo(t6[0], t6[1]), A2.clip());
              }
            re2.push(N2), M2.push(n3);
          } else
            A2.clearRect(h3, v3, y3, b3);
        }
        this.drawTileImage(r4, e19, h3, v3, y3, b3, g3, x3), re2 && !S3 ? (C3 && A2.restore(), this.renderedTiles.unshift(r4)) : this.renderedTiles.push(r4), this.updateUsedTiles(e19.usedTiles, u2, r4);
      }
    }
    return this.renderedRevision = d2, this.renderedResolution = h2, this.extentChanged = !this.renderedExtent_ || !ke(this.renderedExtent_, w2), this.renderedExtent_ = w2, this.renderedPixelRatio = c2, this.renderedProjection = i2, this.manageTilePyramid(e19, u2, p2, c2, i2, g2, m2, l2.getPreload()), this.scheduleExpireCache(e19, u2), this.postRender(this.context, e19), n2.extent && A2.restore(), A2.imageSmoothingEnabled = true, this.container;
  }
  drawTileImage(e19, t2, n2, r2, i2, a2, o2, s2) {
    let c2 = this.getTileImage(e19);
    if (!c2)
      return;
    let l2 = this.getRenderContext(t2), u2 = j(this), d2 = t2.layerStatesArray[t2.layerIndex], f2 = d2.opacity * (s2 ? e19.getAlpha(u2, t2.time) : 1), p2 = f2 !== l2.globalAlpha;
    p2 && (l2.save(), l2.globalAlpha = f2), l2.drawImage(c2, o2, o2, c2.width - 2 * o2, c2.height - 2 * o2, n2, r2, i2, a2), p2 && l2.restore(), f2 === d2.opacity ? s2 && e19.endTransition(u2) : t2.animate = true;
  }
  getImage() {
    let e19 = this.context;
    return e19 ? e19.canvas : null;
  }
  getTileImage(e19) {
    return e19.getImage();
  }
  scheduleExpireCache(e19, t2) {
    if (t2.canExpireCache()) {
      let n2 = function(e20, t3, n3) {
        let r2 = j(e20);
        r2 in n3.usedTiles && e20.expireCache(n3.viewState.projection, n3.usedTiles[r2]);
      }.bind(null, t2);
      e19.postRenderFunctions.push(n2);
    }
  }
  updateUsedTiles(e19, t2, n2) {
    let r2 = j(t2);
    r2 in e19 || (e19[r2] = {}), e19[r2][n2.getKey()] = true;
  }
  manageTilePyramid(e19, t2, n2, r2, i2, a2, o2, s2, c2) {
    let l2 = j(t2);
    l2 in e19.wantedTiles || (e19.wantedTiles[l2] = {});
    let u2 = e19.wantedTiles[l2], d2 = e19.tileQueue, f2 = n2.getMinZoom(), p2 = e19.viewState.rotation, m2 = p2 ? Ve(e19.viewState.center, e19.viewState.resolution, p2, e19.size) : void 0, h2 = 0, g2, _2, v2, y2, b2, x2;
    for (x2 = f2; x2 <= o2; ++x2)
      for (_2 = n2.getTileRangeForExtentAndZ(a2, x2, _2), v2 = n2.getResolution(x2), y2 = _2.minX; y2 <= _2.maxX; ++y2)
        for (b2 = _2.minY; b2 <= _2.maxY; ++b2)
          (!p2 || n2.tileCoordIntersectsViewport([x2, y2, b2], m2)) && (o2 - x2 <= s2 ? (++h2, g2 = t2.getTile(x2, y2, b2, r2, i2), g2.getState() == Q.IDLE && (u2[g2.getKey()] = true, d2.isKeyQueued(g2.getKey()) || d2.enqueue([g2, l2, n2.getTileCoordCenter(g2.tileCoord), v2])), c2 !== void 0 && c2(g2)) : t2.useTile(x2, y2, b2, i2));
    t2.updateCacheSize(h2, i2);
  }
}, ld = class extends sd {
  constructor(e19) {
    super(e19);
  }
  createRenderer() {
    return new cd(this);
  }
}, ud = {TILELOADSTART: `tileloadstart`, TILELOADEND: `tileloadend`, TILELOADERROR: `tileloaderror`}, dd = [0, 0, 0], fd = 5, pd = class {
  constructor(e19) {
    this.minZoom = e19.minZoom === void 0 ? 0 : e19.minZoom, this.resolutions_ = e19.resolutions, P(_(this.resolutions_, (e20, t3) => t3 - e20, true), "`resolutions` must be sorted in descending order");
    let t2;
    if (!e19.origins) {
      for (let e20 = 0, n3 = this.resolutions_.length - 1; e20 < n3; ++e20)
        if (!t2)
          t2 = this.resolutions_[e20] / this.resolutions_[e20 + 1];
        else if (this.resolutions_[e20] / this.resolutions_[e20 + 1] !== t2) {
          t2 = void 0;
          break;
        }
    }
    this.zoomFactor_ = t2, this.maxZoom = this.resolutions_.length - 1, this.origin_ = e19.origin === void 0 ? null : e19.origin, this.origins_ = null, e19.origins !== void 0 && (this.origins_ = e19.origins, P(this.origins_.length == this.resolutions_.length, "Number of `origins` and `resolutions` must be equal"));
    let n2 = e19.extent;
    n2 !== void 0 && !this.origin_ && !this.origins_ && (this.origin_ = We(n2)), P(!this.origin_ && this.origins_ || this.origin_ && !this.origins_, "Either `origin` or `origins` must be configured, never both"), this.tileSizes_ = null, e19.tileSizes !== void 0 && (this.tileSizes_ = e19.tileSizes, P(this.tileSizes_.length == this.resolutions_.length, "Number of `tileSizes` and `resolutions` must be equal")), this.tileSize_ = e19.tileSize === void 0 ? this.tileSizes_ ? null : 256 : e19.tileSize, P(!this.tileSize_ && this.tileSizes_ || this.tileSize_ && !this.tileSizes_, "Either `tileSize` or `tileSizes` must be configured, never both"), this.extent_ = n2 === void 0 ? null : n2, this.fullTileRanges_ = null, this.tmpSize_ = [0, 0], this.tmpExtent_ = [0, 0, 0, 0], e19.sizes === void 0 ? n2 && this.calculateTileRanges_(n2) : this.fullTileRanges_ = e19.sizes.map((e20, t3) => {
      let r2 = new Gu(Math.min(0, e20[0]), Math.max(e20[0] - 1, -1), Math.min(0, e20[1]), Math.max(e20[1] - 1, -1));
      if (n2) {
        let e21 = this.getTileRangeForExtentAndZ(n2, t3);
        r2.minX = Math.max(e21.minX, r2.minX), r2.maxX = Math.min(e21.maxX, r2.maxX), r2.minY = Math.max(e21.minY, r2.minY), r2.maxY = Math.min(e21.maxY, r2.maxY);
      }
      return r2;
    });
  }
  forEachTileCoord(e19, t2, n2) {
    let r2 = this.getTileRangeForExtentAndZ(e19, t2);
    for (let e20 = r2.minX, i2 = r2.maxX; e20 <= i2; ++e20)
      for (let i3 = r2.minY, a2 = r2.maxY; i3 <= a2; ++i3)
        n2([t2, e20, i3]);
  }
  forEachTileCoordParentTileRange(e19, t2, n2, r2) {
    let i2, a2, o2, s2 = null, c2 = e19[0] - 1;
    for (this.zoomFactor_ === 2 ? (a2 = e19[1], o2 = e19[2]) : s2 = this.getTileCoordExtent(e19, r2); c2 >= this.minZoom; ) {
      if (a2 !== void 0 && o2 !== void 0 ? (a2 = Math.floor(a2 / 2), o2 = Math.floor(o2 / 2), i2 = Ku(a2, a2, o2, o2, n2)) : i2 = this.getTileRangeForExtentAndZ(s2, c2, n2), t2(c2, i2))
        return true;
      --c2;
    }
    return false;
  }
  getExtent() {
    return this.extent_;
  }
  getMaxZoom() {
    return this.maxZoom;
  }
  getMinZoom() {
    return this.minZoom;
  }
  getOrigin(e19) {
    return this.origin_ ? this.origin_ : this.origins_[e19];
  }
  getResolution(e19) {
    return this.resolutions_[e19];
  }
  getResolutions() {
    return this.resolutions_;
  }
  getTileCoordChildTileRange(e19, t2, n2) {
    if (e19[0] < this.maxZoom) {
      if (this.zoomFactor_ === 2) {
        let n3 = e19[1] * 2, r3 = e19[2] * 2;
        return Ku(n3, n3 + 1, r3, r3 + 1, t2);
      }
      let r2 = this.getTileCoordExtent(e19, n2 || this.tmpExtent_);
      return this.getTileRangeForExtentAndZ(r2, e19[0] + 1, t2);
    }
    return null;
  }
  getTileRangeForTileCoordAndZ(e19, t2, n2) {
    if (t2 > this.maxZoom || t2 < this.minZoom)
      return null;
    let r2 = e19[0], i2 = e19[1], a2 = e19[2];
    if (t2 === r2)
      return Ku(i2, a2, i2, a2, n2);
    if (this.zoomFactor_) {
      let e20 = this.zoomFactor_ ** +(t2 - r2), o3 = Math.floor(i2 * e20), s2 = Math.floor(a2 * e20);
      return t2 < r2 ? Ku(o3, o3, s2, s2, n2) : Ku(o3, Math.floor(e20 * (i2 + 1)) - 1, s2, Math.floor(e20 * (a2 + 1)) - 1, n2);
    }
    let o2 = this.getTileCoordExtent(e19, this.tmpExtent_);
    return this.getTileRangeForExtentAndZ(o2, t2, n2);
  }
  getTileRangeForExtentAndZ(e19, t2, n2) {
    this.getTileCoordForXYAndZ_(e19[0], e19[3], t2, false, dd);
    let r2 = dd[1], i2 = dd[2];
    this.getTileCoordForXYAndZ_(e19[2], e19[1], t2, true, dd);
    let a2 = dd[1], o2 = dd[2];
    return Ku(r2, a2, i2, o2, n2);
  }
  getTileCoordCenter(e19) {
    let t2 = this.getOrigin(e19[0]), n2 = this.getResolution(e19[0]), r2 = ha(this.getTileSize(e19[0]), this.tmpSize_);
    return [t2[0] + (e19[1] + 0.5) * r2[0] * n2, t2[1] - (e19[2] + 0.5) * r2[1] * n2];
  }
  getTileCoordExtent(e19, t2) {
    let n2 = this.getOrigin(e19[0]), r2 = this.getResolution(e19[0]), i2 = ha(this.getTileSize(e19[0]), this.tmpSize_), a2 = n2[0] + e19[1] * i2[0] * r2, o2 = n2[1] - (e19[2] + 1) * i2[1] * r2;
    return Te(a2, o2, a2 + i2[0] * r2, o2 + i2[1] * r2, t2);
  }
  getTileCoordForCoordAndResolution(e19, t2, n2) {
    return this.getTileCoordForXYAndResolution_(e19[0], e19[1], t2, false, n2);
  }
  getTileCoordForXYAndResolution_(e19, t2, n2, r2, i2) {
    let a2 = this.getZForResolution(n2), o2 = n2 / this.getResolution(a2), s2 = this.getOrigin(a2), c2 = ha(this.getTileSize(a2), this.tmpSize_), l2 = o2 * (e19 - s2[0]) / n2 / c2[0], u2 = o2 * (s2[1] - t2) / n2 / c2[1];
    return r2 ? (l2 = Ot(l2, fd) - 1, u2 = Ot(u2, fd) - 1) : (l2 = Dt(l2, fd), u2 = Dt(u2, fd)), Ru(a2, l2, u2, i2);
  }
  getTileCoordForXYAndZ_(e19, t2, n2, r2, i2) {
    let a2 = this.getOrigin(n2), o2 = this.getResolution(n2), s2 = ha(this.getTileSize(n2), this.tmpSize_), c2 = (e19 - a2[0]) / o2 / s2[0], l2 = (a2[1] - t2) / o2 / s2[1];
    return r2 ? (c2 = Ot(c2, fd) - 1, l2 = Ot(l2, fd) - 1) : (c2 = Dt(c2, fd), l2 = Dt(l2, fd)), Ru(n2, c2, l2, i2);
  }
  getTileCoordForCoordAndZ(e19, t2, n2) {
    return this.getTileCoordForXYAndZ_(e19[0], e19[1], t2, false, n2);
  }
  getTileCoordResolution(e19) {
    return this.resolutions_[e19[0]];
  }
  getTileSize(e19) {
    return this.tileSize_ ? this.tileSize_ : this.tileSizes_[e19];
  }
  getFullTileRange(e19) {
    return this.fullTileRanges_ ? this.fullTileRanges_[e19] : this.extent_ ? this.getTileRangeForExtentAndZ(this.extent_, e19) : null;
  }
  getZForResolution(e19, t2) {
    return R(p(this.resolutions_, e19, t2 || 0), this.minZoom, this.maxZoom);
  }
  tileCoordIntersectsViewport(e19, t2) {
    return qn(t2, 0, t2.length, 2, this.getTileCoordExtent(e19));
  }
  calculateTileRanges_(e19) {
    let t2 = this.resolutions_.length, n2 = Array(t2);
    for (let r2 = this.minZoom; r2 < t2; ++r2)
      n2[r2] = this.getTileRangeForExtentAndZ(e19, r2);
    this.fullTileRanges_ = n2;
  }
};
function md(e19) {
  let t2 = e19.getDefaultTileGrid();
  return t2 || (t2 = yd(e19), e19.setDefaultTileGrid(t2)), t2;
}
function hd(e19, t2, n2) {
  let r2 = t2[0], i2 = e19.getTileCoordCenter(t2), a2 = bd(n2);
  if (!be(a2, i2)) {
    let t3 = L(a2), n3 = Math.ceil((a2[0] - i2[0]) / t3);
    return i2[0] += t3 * n3, e19.getTileCoordForCoordAndZ(i2, r2);
  }
  return t2;
}
function gd(e19, t2, n2, r2) {
  r2 = r2 === void 0 ? `top-left` : r2;
  let i2 = vd(e19, t2, n2);
  return new pd({extent: e19, origin: ze(e19, r2), resolutions: i2, tileSize: n2});
}
function _d(e19) {
  let t2 = e19 || {}, n2 = t2.extent || Gt(`EPSG:3857`).getExtent();
  return new pd({extent: n2, minZoom: t2.minZoom, tileSize: t2.tileSize, resolutions: vd(n2, t2.maxZoom, t2.tileSize, t2.maxResolution)});
}
function vd(e19, t2, n2, r2) {
  t2 = t2 === void 0 ? 42 : t2, n2 = ha(n2 === void 0 ? 256 : n2);
  let i2 = He(e19), a2 = L(e19);
  r2 = r2 > 0 ? r2 : Math.max(a2 / n2[0], i2 / n2[1]);
  let o2 = t2 + 1, s2 = Array(o2);
  for (let e20 = 0; e20 < o2; ++e20)
    s2[e20] = r2 / 2 ** e20;
  return s2;
}
function yd(e19, t2, n2, r2) {
  return gd(bd(e19), t2, n2, r2);
}
function bd(e19) {
  e19 = Gt(e19);
  let t2 = e19.getExtent();
  if (!t2) {
    let n2 = 180 * Qe.degrees / e19.getMetersPerUnit();
    t2 = Te(-n2, -n2, n2, n2);
  }
  return t2;
}
var xd = class extends bl {
  constructor(e19) {
    super({attributions: e19.attributions, attributionsCollapsible: e19.attributionsCollapsible, projection: e19.projection, state: e19.state, wrapX: e19.wrapX, interpolate: e19.interpolate}), this.on, this.once, this.un, this.opaque_ = e19.opaque !== void 0 && e19.opaque, this.tilePixelRatio_ = e19.tilePixelRatio === void 0 ? 1 : e19.tilePixelRatio, this.tileGrid = e19.tileGrid === void 0 ? null : e19.tileGrid, this.tileGrid && ha(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), [256, 256]), this.tileCache = new Wu(e19.cacheSize || 0), this.tmpSize = [0, 0], this.key_ = e19.key || ``, this.tileOptions = {transition: e19.transition, interpolate: e19.interpolate}, this.zDirection = e19.zDirection ? e19.zDirection : 0;
  }
  canExpireCache() {
    return this.tileCache.canExpireCache();
  }
  expireCache(e19, t2) {
    let n2 = this.getTileCacheForProjection(e19);
    n2 && n2.expireCache(t2);
  }
  forEachLoadedTile(e19, t2, n2, r2) {
    let i2 = this.getTileCacheForProjection(e19);
    if (!i2)
      return false;
    let a2 = true, o2, s2, c2;
    for (let e20 = n2.minX; e20 <= n2.maxX; ++e20)
      for (let l2 = n2.minY; l2 <= n2.maxY; ++l2)
        s2 = zu(t2, e20, l2), c2 = false, i2.containsKey(s2) && (o2 = i2.get(s2), c2 = o2.getState() === Q.LOADED, c2 && (c2 = r2(o2) !== false)), c2 || (a2 = false);
    return a2;
  }
  getGutterForProjection(e19) {
    return 0;
  }
  getKey() {
    return this.key_;
  }
  setKey(e19) {
    this.key_ !== e19 && (this.key_ = e19, this.changed());
  }
  getOpaque(e19) {
    return this.opaque_;
  }
  getResolutions(e19) {
    let t2 = e19 ? this.getTileGridForProjection(e19) : this.tileGrid;
    return t2 ? t2.getResolutions() : null;
  }
  getTile(e19, t2, n2, r2, i2) {
    return A();
  }
  getTileGrid() {
    return this.tileGrid;
  }
  getTileGridForProjection(e19) {
    return this.tileGrid ? this.tileGrid : md(e19);
  }
  getTileCacheForProjection(e19) {
    let t2 = this.getProjection();
    return P(t2 === null || Zt(t2, e19), `A VectorTile source can only be rendered if it has a projection compatible with the view projection.`), this.tileCache;
  }
  getTilePixelRatio(e19) {
    return this.tilePixelRatio_;
  }
  getTilePixelSize(e19, t2, n2) {
    let r2 = this.getTileGridForProjection(n2), i2 = this.getTilePixelRatio(t2), a2 = ha(r2.getTileSize(e19), this.tmpSize);
    return i2 == 1 ? a2 : ma(a2, i2, this.tmpSize);
  }
  getTileCoordForTileUrlFunction(e19, t2) {
    t2 = t2 === void 0 ? this.getProjection() : t2;
    let n2 = this.getTileGridForProjection(t2);
    return this.getWrapX() && t2.isGlobal() && (e19 = hd(n2, e19, t2)), Uu(e19, n2) ? e19 : null;
  }
  clear() {
    this.tileCache.clear();
  }
  refresh() {
    this.clear(), super.refresh();
  }
  updateCacheSize(e19, t2) {
    let n2 = this.getTileCacheForProjection(t2);
    e19 > n2.highWaterMark && (n2.highWaterMark = e19);
  }
  useTile(e19, t2, n2, r2) {
  }
}, Sd = class extends c {
  constructor(e19, t2) {
    super(e19), this.tile = t2;
  }
};
function Cd(e19, t2) {
  let n2 = /\{z\}/g, r2 = /\{x\}/g, i2 = /\{y\}/g, a2 = /\{-y\}/g;
  return function(o2, s2, c2) {
    if (o2)
      return e19.replace(n2, o2[0].toString()).replace(r2, o2[1].toString()).replace(i2, o2[2].toString()).replace(a2, function() {
        let e20 = o2[0], n3 = t2.getFullTileRange(e20);
        if (!n3)
          throw Error(`The {-y} placeholder requires a tile grid with extent`);
        return (n3.getHeight() - o2[2] - 1).toString();
      });
  };
}
function wd(e19, t2) {
  let n2 = e19.length, r2 = Array(n2);
  for (let i2 = 0; i2 < n2; ++i2)
    r2[i2] = Cd(e19[i2], t2);
  return Td(r2);
}
function Td(e19) {
  return e19.length === 1 ? e19[0] : function(t2, n2, r2) {
    return t2 ? e19[wt(Hu(t2), e19.length)](t2, n2, r2) : void 0;
  };
}
function Ed(e19) {
  let t2 = [], n2 = /\{([a-z])-([a-z])\}/.exec(e19);
  if (n2) {
    let r2 = n2[1].charCodeAt(0), i2 = n2[2].charCodeAt(0), a2;
    for (a2 = r2; a2 <= i2; ++a2)
      t2.push(e19.replace(n2[0], String.fromCharCode(a2)));
    return t2;
  }
  if (n2 = /\{(\d+)-(\d+)\}/.exec(e19), n2) {
    let r2 = parseInt(n2[2], 10);
    for (let i2 = parseInt(n2[1], 10); i2 <= r2; i2++)
      t2.push(e19.replace(n2[0], i2.toString()));
    return t2;
  }
  return t2.push(e19), t2;
}
var Dd = class e16 extends xd {
  constructor(t2) {
    super({attributions: t2.attributions, cacheSize: t2.cacheSize, opaque: t2.opaque, projection: t2.projection, state: t2.state, tileGrid: t2.tileGrid, tilePixelRatio: t2.tilePixelRatio, wrapX: t2.wrapX, transition: t2.transition, interpolate: t2.interpolate, key: t2.key, attributionsCollapsible: t2.attributionsCollapsible, zDirection: t2.zDirection}), this.generateTileUrlFunction_ = this.tileUrlFunction === e16.prototype.tileUrlFunction, this.tileLoadFunction = t2.tileLoadFunction, t2.tileUrlFunction && (this.tileUrlFunction = t2.tileUrlFunction), this.urls = null, t2.urls ? this.setUrls(t2.urls) : t2.url && this.setUrl(t2.url), this.tileLoadingKeys_ = {};
  }
  getTileLoadFunction() {
    return this.tileLoadFunction;
  }
  getTileUrlFunction() {
    return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction ? this.tileUrlFunction.bind(this) : this.tileUrlFunction;
  }
  getUrls() {
    return this.urls;
  }
  handleTileChange(e19) {
    let t2 = e19.target, n2 = j(t2), r2 = t2.getState(), i2;
    r2 == Q.LOADING ? (this.tileLoadingKeys_[n2] = true, i2 = ud.TILELOADSTART) : n2 in this.tileLoadingKeys_ && (delete this.tileLoadingKeys_[n2], i2 = r2 == Q.ERROR ? ud.TILELOADERROR : r2 == Q.LOADED ? ud.TILELOADEND : void 0), i2 != null && this.dispatchEvent(new Sd(i2, t2));
  }
  setTileLoadFunction(e19) {
    this.tileCache.clear(), this.tileLoadFunction = e19, this.changed();
  }
  setTileUrlFunction(e19, t2) {
    this.tileUrlFunction = e19, this.tileCache.pruneExceptNewestZ(), t2 === void 0 ? this.changed() : this.setKey(t2);
  }
  setUrl(e19) {
    let t2 = Ed(e19);
    this.urls = t2, this.setUrls(t2);
  }
  setUrls(e19) {
    this.urls = e19;
    let t2 = e19.join(`
`);
    this.generateTileUrlFunction_ ? this.setTileUrlFunction(wd(e19, this.tileGrid), t2) : this.setKey(t2);
  }
  tileUrlFunction(e19, t2, n2) {
  }
  useTile(e19, t2, n2) {
    let r2 = zu(e19, t2, n2);
    this.tileCache.containsKey(r2) && this.tileCache.get(r2);
  }
}, Od = class extends Dd {
  constructor(e19) {
    super({attributions: e19.attributions, cacheSize: e19.cacheSize, opaque: e19.opaque, projection: e19.projection, state: e19.state, tileGrid: e19.tileGrid, tileLoadFunction: e19.tileLoadFunction ? e19.tileLoadFunction : kd, tilePixelRatio: e19.tilePixelRatio, tileUrlFunction: e19.tileUrlFunction, url: e19.url, urls: e19.urls, wrapX: e19.wrapX, transition: e19.transition, interpolate: e19.interpolate === void 0 || e19.interpolate, key: e19.key, attributionsCollapsible: e19.attributionsCollapsible, zDirection: e19.zDirection}), this.crossOrigin = e19.crossOrigin === void 0 ? null : e19.crossOrigin, this.tileClass = e19.tileClass === void 0 ? Al : e19.tileClass, this.tileCacheForProjection = {}, this.tileGridForProjection = {}, this.reprojectionErrorThreshold_ = e19.reprojectionErrorThreshold, this.renderReprojectionEdges_ = false;
  }
  canExpireCache() {
    if (this.tileCache.canExpireCache())
      return true;
    for (let e19 in this.tileCacheForProjection)
      if (this.tileCacheForProjection[e19].canExpireCache())
        return true;
    return false;
  }
  expireCache(e19, t2) {
    let n2 = this.getTileCacheForProjection(e19);
    this.tileCache.expireCache(this.tileCache == n2 ? t2 : {});
    for (let e20 in this.tileCacheForProjection) {
      let r2 = this.tileCacheForProjection[e20];
      r2.expireCache(r2 == n2 ? t2 : {});
    }
  }
  getGutterForProjection(e19) {
    return this.getProjection() && e19 && !Zt(this.getProjection(), e19) ? 0 : this.getGutter();
  }
  getGutter() {
    return 0;
  }
  getKey() {
    let e19 = super.getKey();
    return this.getInterpolate() || (e19 += `:disable-interpolation`), e19;
  }
  getOpaque(e19) {
    return this.getProjection() && e19 && !Zt(this.getProjection(), e19) ? false : super.getOpaque(e19);
  }
  getTileGridForProjection(e19) {
    let t2 = this.getProjection();
    if (this.tileGrid && (!t2 || Zt(t2, e19)))
      return this.tileGrid;
    let n2 = j(e19);
    return n2 in this.tileGridForProjection || (this.tileGridForProjection[n2] = md(e19)), this.tileGridForProjection[n2];
  }
  getTileCacheForProjection(e19) {
    let t2 = this.getProjection();
    if (!t2 || Zt(t2, e19))
      return this.tileCache;
    let n2 = j(e19);
    return n2 in this.tileCacheForProjection || (this.tileCacheForProjection[n2] = new Wu(this.tileCache.highWaterMark)), this.tileCacheForProjection[n2];
  }
  createTile_(e19, t2, n2, r2, i2, a2) {
    let o2 = [e19, t2, n2], s2 = this.getTileCoordForTileUrlFunction(o2, i2), c2 = s2 ? this.tileUrlFunction(s2, r2, i2) : void 0, l2 = new this.tileClass(o2, c2 === void 0 ? Q.EMPTY : Q.IDLE, c2 === void 0 ? `` : c2, this.crossOrigin, this.tileLoadFunction, this.tileOptions);
    return l2.key = a2, l2.addEventListener(E.CHANGE, this.handleTileChange.bind(this)), l2;
  }
  getTile(e19, t2, n2, r2, i2) {
    let a2 = this.getProjection();
    if (!a2 || !i2 || Zt(a2, i2))
      return this.getTileInternal(e19, t2, n2, r2, a2 || i2);
    let o2 = this.getTileCacheForProjection(i2), s2 = [e19, t2, n2], c2, l2 = Bu(s2);
    o2.containsKey(l2) && (c2 = o2.get(l2));
    let u2 = this.getKey();
    if (c2 && c2.key == u2)
      return c2;
    let d2 = new ad(a2, this.getTileGridForProjection(a2), i2, this.getTileGridForProjection(i2), s2, this.getTileCoordForTileUrlFunction(s2, i2), this.getTilePixelRatio(r2), this.getGutter(), (e20, t3, n3, r3) => this.getTileInternal(e20, t3, n3, r3, a2), this.reprojectionErrorThreshold_, this.renderReprojectionEdges_, this.tileOptions);
    return d2.key = u2, c2 ? (d2.interimTile = c2, d2.refreshInterimChain(), o2.replace(l2, d2)) : o2.set(l2, d2), d2;
  }
  getTileInternal(e19, t2, n2, r2, i2) {
    let a2 = null, o2 = zu(e19, t2, n2), s2 = this.getKey();
    if (!this.tileCache.containsKey(o2))
      a2 = this.createTile_(e19, t2, n2, r2, i2, s2), this.tileCache.set(o2, a2);
    else if (a2 = this.tileCache.get(o2), a2.key != s2) {
      let c2 = a2;
      a2 = this.createTile_(e19, t2, n2, r2, i2, s2), c2.getState() == Q.IDLE ? a2.interimTile = c2.interimTile : a2.interimTile = c2, a2.refreshInterimChain(), this.tileCache.replace(o2, a2);
    }
    return a2;
  }
  setRenderReprojectionEdges(e19) {
    if (this.renderReprojectionEdges_ != e19) {
      this.renderReprojectionEdges_ = e19;
      for (let e20 in this.tileCacheForProjection)
        this.tileCacheForProjection[e20].clear();
      this.changed();
    }
  }
  setTileGridForProjection(e19, t2) {
    let n2 = Gt(e19);
    if (n2) {
      let e20 = j(n2);
      e20 in this.tileGridForProjection || (this.tileGridForProjection[e20] = t2);
    }
  }
  clear() {
    super.clear();
    for (let e19 in this.tileCacheForProjection)
      this.tileCacheForProjection[e19].clear();
  }
};
function kd(e19, t2) {
  e19.getImage().src = t2;
}
var Ad = class extends Od {
  constructor(e19) {
    e19 || (e19 = {});
    let t2 = e19.projection === void 0 ? `EPSG:3857` : e19.projection, n2 = e19.tileGrid === void 0 ? _d({extent: bd(t2), maxResolution: e19.maxResolution, maxZoom: e19.maxZoom, minZoom: e19.minZoom, tileSize: e19.tileSize}) : e19.tileGrid;
    super({attributions: e19.attributions, cacheSize: e19.cacheSize, crossOrigin: e19.crossOrigin, interpolate: e19.interpolate, opaque: e19.opaque, projection: t2, reprojectionErrorThreshold: e19.reprojectionErrorThreshold, tileGrid: n2, tileLoadFunction: e19.tileLoadFunction, tilePixelRatio: e19.tilePixelRatio, tileUrlFunction: e19.tileUrlFunction, url: e19.url, urls: e19.urls, wrapX: e19.wrapX === void 0 || e19.wrapX, transition: e19.transition, attributionsCollapsible: e19.attributionsCollapsible, zDirection: e19.zDirection}), this.gutter_ = e19.gutter === void 0 ? 0 : e19.gutter;
  }
  getGutter() {
    return this.gutter_;
  }
}, jd = `&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.`, Md = class extends Ad {
  constructor(e19) {
    e19 || (e19 = {});
    let t2;
    t2 = e19.attributions === void 0 ? [jd] : e19.attributions;
    let n2 = e19.crossOrigin === void 0 ? `anonymous` : e19.crossOrigin, r2 = e19.url === void 0 ? `https://tile.openstreetmap.org/{z}/{x}/{y}.png` : e19.url;
    super({attributions: t2, attributionsCollapsible: false, cacheSize: e19.cacheSize, crossOrigin: n2, interpolate: e19.interpolate, maxZoom: e19.maxZoom === void 0 ? 19 : e19.maxZoom, opaque: e19.opaque === void 0 || e19.opaque, reprojectionErrorThreshold: e19.reprojectionErrorThreshold, tileLoadFunction: e19.tileLoadFunction, transition: e19.transition, url: r2, wrapX: e19.wrapX, zDirection: e19.zDirection});
  }
};
window.i18nTranslations || (window.i18nTranslations = {}), window.sysLang || (window.sysLang = `en`);
var Nd = class e17 {
  static unknownTranslations = [];
  static _disableWarning = false;
  static setLanguage(e19) {
    e19 && (window.sysLang = e19);
  }
  static extendTranslations(e19, t2) {
    var _a2;
    if (e19.prefix) {
      let t3 = e19;
      if (typeof t3.prefix == `string`) {
        let n2 = t3.prefix;
        delete t3.prefix, Object.keys(t3).forEach((r2) => {
          let i2 = r2, a2 = {}, o2 = t3[i2];
          Object.keys(o2).forEach((e20) => {
            e20 && o2 && (e20.startsWith(n2) ? a2[e20] = o2[e20] : a2[`${n2}${e20}`] = o2[e20]);
          }), e19[i2] = a2;
        });
      } else
        console.warn(`Found prefix in translations, but it is not a string`);
    }
    try {
      if (!t2)
        e19.en && e19.de && e19.ru ? Object.keys(e19).forEach((t3) => {
          var _a3;
          let n2 = t3;
          (_a3 = window.i18nTranslations)[n2] || (_a3[n2] = {}), Object.assign(window.i18nTranslations[n2], e19[n2]);
        }) : Object.keys(e19).forEach((t3) => {
          let n2 = e19[t3];
          Object.keys(n2).forEach((e20) => {
            let r2 = e20, i2 = window.i18nTranslations[r2];
            i2 ? i2[t3] ? i2[t3] !== n2[r2] && console.warn(`Translation for word "${t3}" in "${r2}" was ignored: existing = "${i2[t3]}", new = ${n2[r2]}`) : i2[t3] = n2[r2] : console.warn(`Used unknown language: ${r2}`);
          });
        });
      else {
        window.i18nTranslations[t2] || console.warn(`Used unknown language: ${t2}`), (_a2 = window.i18nTranslations)[t2] || (_a2[t2] = {});
        let n2 = window.i18nTranslations[t2];
        Object.keys(e19).forEach((r2) => {
          n2[r2] ? n2[r2] !== e19[r2] && console.warn(`Translation for word "${r2}" in "${t2}" was ignored: existing = "${n2[r2]}", new = ${e19[r2]}`) : n2[r2] = e19[r2];
        });
      }
    } catch (e20) {
      console.error(`Cannot apply translations: ${e20}`);
    }
  }
  static setTranslations(t2) {
    t2 && e17.extendTranslations(t2);
  }
  static getLanguage() {
    return window.sysLang;
  }
  static t(t2, ...n2) {
    let r2 = window.i18nTranslations[window.sysLang];
    if (r2) {
      let n3 = r2[t2];
      if (n3)
        t2 = n3;
      else if (e17.unknownTranslations.includes(t2) || (e17.unknownTranslations.push(t2), !e17._disableWarning && console.log(`Translate: ${t2}`)), window.sysLang !== `en` && window.i18nTranslations.en) {
        let e19 = window.i18nTranslations.en[t2];
        e19 && (t2 = e19);
      }
    }
    for (let e19 of n2)
      t2 = t2.replace(`%s`, e19);
    return t2;
  }
  static i18nShow(t2) {
    let n2 = {};
    t2 ? typeof t2 == `string` ? (e17.unknownTranslations.forEach((e19) => {
      e19.startsWith(t2) && (n2[e19] = e19.replace(t2, ``));
    }), console.log(JSON.stringify(n2, null, 2))) : t2 && typeof t2 == `object` && (e17.unknownTranslations.forEach((e19) => {
      t2.test(e19) && (n2[e19] = e19);
    }), console.log(JSON.stringify(n2, null, 2))) : (e17.unknownTranslations.forEach((e19) => n2[e19] = e19), console.log(JSON.stringify(n2, null, 2)));
  }
  static disableWarning(t2) {
    e17._disableWarning = !!t2;
  }
};
window.i18nShow = Nd.i18nShow, window.i18nDisableWarning = Nd.disableWarning;
var Pd = `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%2300F%22%20d%3D%22M360-440h80v-110h80v110h80v-190l-120-80-120%2080v190Zm120%20254q122-112%20181-203.5T720-552q0-109-69.5-178.5T480-800q-101%200-170.5%2069.5T240-552q0%2071%2059%20162.5T480-186Zm0%20106Q319-217%20239.5-334.5T160-552q0-150%2096.5-239T480-880q127%200%20223.5%2089T800-552q0%20100-79.5%20217.5T480-80Zm0-480Z%22%2F%3E%0A%3C%2Fsvg%3E`, Fd = `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2248%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2248%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23080%22%20d%3D%22M480-120q-75.53%200-128.765-53.235Q298-226.47%20298-302q0-49.099%2024-91.55Q346-436%20388-462v-286q0-38.333%2026.765-65.167%2026.764-26.833%2065-26.833Q518-840%20545-813.167q27%2026.834%2027%2065.167v286q42%2026%2066%2068.45%2024%2042.451%2024%2091.55%200%2075.53-53.235%20128.765Q555.53-120%20480-120Zm.118-59Q531-179%20566.5-214.875%20602-250.75%20602-302q0-37.81-18-70.405T532-420l-20-9v-319q0-13.6-9.2-22.8-9.2-9.2-22.8-9.2-13.6%200-22.8%209.2-9.2%209.2-9.2%2022.8v319l-20%209q-34%2015-52%2047.595T358-302q0%2051.25%2035.618%2087.125Q429.235-179%20480.118-179ZM480-302Z%22%2F%3E%0A%3C%2Fsvg%3E`, Id = class extends r {
  constructor(e19) {
    super(e19), this.state = {longitude: 0, latitude: 0, things: [...this.props.things], mapHeight: 0, mapWidth: 0}, this.refMap = i();
  }
  calculateZoomLevel(e19) {
    let t2 = Xt([parseFloat(this.state.longitude || 0), parseFloat(this.state.latitude || 0)]);
    if (!this.state.things?.length)
      return 17;
    let n2;
    if (!this.props.hideHome)
      n2 = Te(t2[0], t2[1], t2[0], t2[1]);
    else {
      let e20 = Xt([this.state.things[0].longitude, this.state.things[0].latitude]);
      n2 = Te(e20[0], e20[1], e20[0], e20[1]);
    }
    return this.state.things.forEach((e20, t3) => {
      if (!t3 && this.props.hideHome)
        return;
      let r2 = Xt([e20.longitude, e20.latitude]);
      Ae(n2, [r2[0], r2[1], r2[0], r2[1]]);
    }), e19.getView().fit(n2, e19.getSize()), e19.getView().getZoom() - 1;
  }
  calculateCenter() {
    let e19 = +!this.props.hideHome, t2 = this.props.hideHome ? 0 : parseFloat(this.state.longitude || 0), n2 = this.props.hideHome ? 0 : parseFloat(this.state.latitude || 0);
    return this.state.things.forEach((r2) => {
      t2 += r2.longitude, n2 += r2.latitude, e19++;
    }), Xt([t2 / e19, n2 / e19]);
  }
  displayTooltip(e19, t2) {
    let n2 = t2.closest(`.ol-control`) ? void 0 : this.OSM.oMap.forEachFeatureAtPixel(e19, (e20) => e20);
    if (n2) {
      this.hideTimer && clearTimeout(this.hideTimer);
      let t3 = {left: e19[0], top: e19[1], text: n2.get(`name`)};
      this.setState({tooltip: t3});
    } else
      this.hideTimer && clearTimeout(this.hideTimer), this.hideTimer = setTimeout(() => this.setState({tooltip: null}), 500);
  }
  updateMap() {
    let e19 = Xt([parseFloat(this.state.longitude || 0), parseFloat(this.state.latitude || 0)]);
    if (!this.OSM) {
      this.OSM = {}, this.props.hideHome || (this.OSM.markerSource = new Ol()), this.OSM.pointsSource = new Ol(), this.OSM.markerStyle = new Ya({image: new No({anchor: [0.5, 49], anchorXUnits: `fraction`, anchorYUnits: `pixels`, opacity: 0.75, src: Pd})}), this.OSM.tempStyle = new Ya({image: new No({anchor: [0.5, 49], anchorXUnits: `fraction`, anchorYUnits: `pixels`, opacity: 0.75, src: Fd})}), this.OSM.pointsLayer = new hl({source: this.OSM.pointsSource, style: this.OSM.tempStyle});
      let t2 = [new ld({source: new Md()}), this.OSM.pointsLayer];
      this.props.hideHome || t2.push(new hl({source: this.OSM.markerSource, style: this.OSM.markerStyle})), this.OSM.oMap = new Fu({target: this.props.id || `map`, layers: t2, view: new So({center: e19, zoom: 17})}), this.props.hideHome || (this.OSM.marker = new se({geometry: new zn(e19), name: Nd.t(`Your home`)}), this.OSM.markerSource.addFeature(this.OSM.marker)), this.OSM.oMap.on(`pointermove`, (e20) => {
        if (e20.dragging) {
          this.state.tooltip && this.setState({tooltip: null});
          return;
        }
        let t3 = this.OSM.oMap.getEventPixel(e20.originalEvent);
        this.displayTooltip(t3, e20.originalEvent.target);
      }), this.OSM.oMap.on(`singleclick`, (e20) => {
        let t3 = this.OSM.oMap.getEventPixel(e20.originalEvent), n2 = this.OSM.oMap.forEachFeatureAtPixel(t3, (e21) => e21);
        this.props.onSelect && n2 && this.props.onSelect(n2.get(`name`));
      });
    }
    this.OSM.pointsSource.clear();
    for (let e20 = 0; e20 < this.state.things.length; e20++) {
      let t2 = this.state.things[e20], n2 = new se({geometry: new zn(Xt([t2.longitude, t2.latitude])), name: t2.name}), r2 = [];
      t2.dataStreams.forEach((e21) => {
        console.log(e21), e21.value !== void 0 && e21.value !== null && r2.push((Math.round(e21.value * 10) / 10).toString() + (e21.unit || ``));
      });
      let i2 = new Ya({image: new No({anchor: [0.5, 49], anchorXUnits: `fraction`, anchorYUnits: `pixels`, opacity: 0.75, src: Fd}), text: new to({text: r2.join(`
`), scale: 1.2, fill: new la({color: `#004f00`})})});
      n2.setStyle(i2), this.OSM.pointsSource.addFeature(n2);
    }
    this.props.hideHome || this.OSM.marker.setGeometry(new zn(e19)), this.OSM.oMap.setView(new So({center: this.calculateCenter(), zoom: this.calculateZoomLevel(this.OSM.oMap)}));
  }
  componentDidMount() {
    this.props.socket.getSystemConfig().then((e19) => this.setState({longitude: e19.common.longitude, latitude: e19.common.latitude}, () => this.refMap.current?.clientHeight && this.updateMap()));
  }
  componentDidUpdate() {
    this.refMap.current && this.refMap.current.clientWidth !== this.state.mapWidth && this.refMap.current.clientHeight !== this.state.mapHeight && (this.OSM ? this.setState({mapWidth: this.refMap.current.clientWidth, mapHeight: this.refMap.current.clientHeight}, () => this.OSM.oMap.updateSize()) : this.setState({mapWidth: this.refMap.current.clientWidth, mapHeight: this.refMap.current.clientHeight}, () => setTimeout(() => this.updateMap(), 10)));
  }
  renderTooltip() {
    return this.state.tooltip ? n(`div`, {style: {position: `absolute`, top: this.state.tooltip.top, left: this.state.tooltip.left, color: `#000`, padding: `3px 5px`, backgroundColor: `#fff`, borderRadius: 5}, children: this.state.tooltip.text}, `tooltip`) : null;
  }
  render() {
    return JSON.stringify(this.props.things) !== JSON.stringify(this.state.things) && this.OSM && setTimeout(() => this.setState({things: [...this.props.things]}, () => this.refMap.current?.clientWidth && this.updateMap()), 100), [n(`div`, {ref: this.refMap, id: this.props.id || `map`, style: {height: `100%`, width: `100%`, overflow: `hidden`}}, `map`), this.renderTooltip()];
  }
};
Id.propTypes = {id: s.default.string, socket: s.default.object, things: s.default.array, onSelect: s.default.func, hideHome: s.default.bool};
var Ld = class e18 extends window.visRxWidget {
  constructor(e19) {
    super(e19), this.state._key = 0, this.hideHome = null;
  }
  static getWidgetInfo() {
    return {id: `tplOpenSmartCityMap`, visSet: `opensmartcity`, visSetLabel: `set_label`, visSetColor: `#dcca19`, visWidgetLabel: `OpenSmartCityMap`, visName: `OpenSmartCityMap`, visAttrs: [{name: `common`, fields: [{name: `noCard`, label: `without_card`, type: `checkbox`, default: false}, {name: `widgetTitle`, label: `name`, hidden: `!!data.noCard`}, {label: `instance`, name: `instance`, type: `instance`, adapter: `opensmartcity`}, {name: `hideHome`, label: `hide_home`, type: `checkbox`}, {label: `zoom_level`, name: `zoomLevel`, type: `slider`, min: -1, max: 17, default: 0}]}], visDefaultStyle: {width: `100%`, height: 300, position: `relative`}, visPrev: `widgets/opensmartcity/img/prev_opensmartcity.png`};
  }
  getWidgetInfo() {
    return e18.getWidgetInfo();
  }
  static buildPoints(e19, t2, n2) {
    return Object.keys(e19).map((r2) => {
      let i2 = e19[r2];
      return !i2.native || !i2.native.coordinates || !i2.native.coordinates.length ? null : {longitude: i2.native.coordinates[0], latitude: i2.native.coordinates[1], name: i2.common.name && typeof i2.common.name == `object` ? i2.common.name[this.props.context.lang] || i2.common.name.en : i2.common.name || ``, description: i2.common.desc && typeof i2.common.desc == `object` ? i2.common.desc[this.props.context.lang] || i2.common.desc.en : i2.common.desc || ``, dataStreams: Object.keys(t2).filter((e20) => e20.startsWith(`${r2}.`)).map((e20) => ({id: e20.split(`.`).pop(), name: t2[e20].common.name, description: t2[e20].common.desc, value: n2[e20] && n2[e20].val !== void 0 ? n2[e20].val : null, unit: t2[e20].common.unit || ``}))};
    }).filter((e20) => e20);
  }
  onDataUpdated = (t2, n2) => {
    let r2 = __spreadValues({}, this.state.values);
    r2[t2] = n2, this.setState({values: r2, points: e18.buildPoints(this.state.things, this.state.dataStreams, r2)});
  };
  async propertiesUpdate() {
    let t2 = `${this.state.rxData.instance}.*`;
    if (this.subscribed && this.subscribed !== t2 && (this.props.context.socket.unsubscribeObject(this.subscribed, this.onPointsChanged), await this.props.context.socket.unsubscribeStates(this.subscribed, this.onDataUpdated), this.subscribed = null), this.state.rxData.instance !== null && this.state.rxData.instance !== void 0 && this.subscribed !== t2) {
      this.subscribed = t2;
      let n2 = await this.props.context.socket.getObjectViewSystem(`channel`, this.subscribed.replace(/\*$/, ``), `${this.subscribed.replace(/\*$/, ``)}\u9999`), r2 = await this.props.context.socket.getObjectViewSystem(`state`, this.subscribed.replace(/\*$/, ``), `${this.subscribed.replace(/\*$/, ``)}\u9999`), i2 = await this.props.context.socket.getForeignStates(this.subscribed);
      this.setState({things: n2, values: i2, dataStreams: r2, points: e18.buildPoints(n2, r2, i2)}, async () => {
        await this.props.context.socket.subscribeObject(this.subscribed, this.onPointsChanged), await this.props.context.socket.subscribeState(this.subscribed, this.onDataUpdated);
      });
    }
  }
  static getI18nPrefix() {
    return `opensmartcity_`;
  }
  async componentDidMount() {
    super.componentDidMount(), await this.propertiesUpdate();
  }
  onPointsChanged = (t2, n2) => {
    if (!n2) {
      if (this.state.things[t2]) {
        let n3 = __spreadValues({}, this.state.things);
        delete n3[t2], this.setState({things: n3, points: e18.buildPoints(n3, this.state.dataStreams, this.state.values)});
      } else if (this.state.dataStreams[t2]) {
        let n3 = __spreadValues({}, this.state.dataStreams);
        delete n3[t2], this.setState({dataStreams: n3, points: e18.buildPoints(this.state.things, n3, this.state.values)});
      }
    } else if (n2.type === `channel`) {
      let r2 = __spreadValues({}, this.state.things);
      r2[t2] = n2, this.setState({things: r2, points: e18.buildPoints(r2, this.state.dataStreams, this.state.values)});
    } else if (n2.type === `state`) {
      let r2 = __spreadValues({}, this.state.dataStreams);
      r2[t2] = n2, this.setState({dataStreams: r2, points: e18.buildPoints(this.state.things, r2, this.state.values)});
    }
  };
  async componentWillUnmount() {
    this.subscribed && (this.subscribed = (await this.props.context.socket.unsubscribeObject(this.subscribed, this.onPointsChanged), await this.props.context.socket.unsubscribeState(this.subscribed, this.onDataUpdated), null));
  }
  onRxDataChanged() {
    this.propertiesUpdate();
  }
  renderWidgetBody(e19) {
    super.renderWidgetBody(e19), this.hideHome === null ? this.hideHome = this.state.rxData.hideHome : this.hideHome !== this.state.rxData.hideHome && (this.hideHome = this.state.rxData.hideHome, setTimeout(() => this.setState({_key: this.state._key + 1}), 100));
    let t2 = n(Id, {socket: this.props.context.socket, id: `map_${this.props.id}`, things: this.state.points || [], hideHome: this.state.rxData.hideHome}, this.state._key);
    return this.state.rxData.noCard ? t2 : this.wrapContent(t2);
  }
};
Ld.propTypes = {context: s.default.object, themeType: s.default.string, style: s.default.object, data: s.default.object};
export {
  Ld as default
};
