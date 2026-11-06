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
import {a as n, g as r, p as i} from "./_virtual_mf___mfe_internal__opensmartcity__mf_owner__135060680301585__loadShare__shared-U0IBWbSk.js";
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
})(), 1), c = {ADD: `add`, REMOVE: `remove`}, l = {PROPERTYCHANGE: `propertychange`};
function u(e19) {
  for (let t2 in e19)
    delete e19[t2];
}
function d(e19) {
  let t2;
  for (t2 in e19)
    return false;
  return !t2;
}
function f(e19, t2, n2, r2, i2) {
  if (i2) {
    let i3 = n2;
    n2 = function(a3) {
      return e19.removeEventListener(t2, n2), i3.call(r2 ?? this, a3);
    };
  } else
    r2 && r2 !== e19 && (n2 = n2.bind(r2));
  let a2 = {target: e19, type: t2, listener: n2};
  return e19.addEventListener(t2, n2), a2;
}
function p(e19, t2, n2, r2) {
  return f(e19, t2, n2, r2, true);
}
function m(e19) {
  e19 && e19.target && (e19.target.removeEventListener(e19.type, e19.listener), u(e19));
}
var h = {CHANGE: `change`, ERROR: `error`, BLUR: `blur`, CLEAR: `clear`, CONTEXTMENU: `contextmenu`, CLICK: `click`, DBLCLICK: `dblclick`, DRAGENTER: `dragenter`, DRAGOVER: `dragover`, DROP: `drop`, FOCUS: `focus`, KEYDOWN: `keydown`, KEYPRESS: `keypress`, KEYUP: `keyup`, LOAD: `load`, RESIZE: `resize`, TOUCHMOVE: `touchmove`, WHEEL: `wheel`}, g = class {
  constructor() {
    this.disposed = false;
  }
  dispose() {
    this.disposed || (this.disposed = true, this.disposeInternal());
  }
  disposeInternal() {
  }
};
function _(e19, t2, n2) {
  let r2, i2;
  n2 || (n2 = v);
  let a2 = 0, o2 = e19.length, s2 = false;
  for (; a2 < o2; )
    r2 = a2 + (o2 - a2 >> 1), i2 = +n2(e19[r2], t2), i2 < 0 ? a2 = r2 + 1 : (o2 = r2, s2 = !i2);
  return s2 ? a2 : ~a2;
}
function v(e19, t2) {
  return e19 > t2 ? 1 : e19 < t2 ? -1 : 0;
}
function y(e19, t2) {
  return e19 < t2 ? 1 : e19 > t2 ? -1 : 0;
}
function b(e19, t2, n2) {
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
function x(e19, t2, n2) {
  for (; t2 < n2; ) {
    let r2 = e19[t2];
    e19[t2] = e19[n2], e19[n2] = r2, ++t2, --n2;
  }
}
function S(e19, t2) {
  let n2 = Array.isArray(t2) ? t2 : [t2], r2 = n2.length;
  for (let t3 = 0; t3 < r2; t3++)
    e19[e19.length] = n2[t3];
}
function C(e19, t2) {
  let n2 = e19.length;
  if (n2 !== t2.length)
    return false;
  for (let r2 = 0; r2 < n2; r2++)
    if (e19[r2] !== t2[r2])
      return false;
  return true;
}
function w(e19, t2, n2) {
  let r2 = t2 || v;
  return e19.every(function(t3, i2) {
    if (i2 === 0)
      return true;
    let a2 = r2(e19[i2 - 1], t3);
    return !(a2 > 0 || n2 && a2 === 0);
  });
}
function T() {
  throw Error(`Unimplemented abstract method.`);
}
var E = 0;
function D(e19) {
  let t2 = e19;
  return t2.ol_uid || (t2.ol_uid = String(++E));
}
function O(e19) {
  return !!e19 && typeof e19.then == `function` && typeof e19.catch == `function`;
}
function k() {
  return true;
}
function A() {
  return false;
}
function ee() {
}
function te(e19) {
  let t2, n2, r2;
  return function() {
    let i2 = Array.prototype.slice.call(arguments);
    return n2 && this === r2 && C(i2, n2) || (r2 = this, n2 = i2, t2 = e19.apply(this, i2)), t2;
  };
}
function ne(e19) {
  function t2() {
    let t3;
    try {
      t3 = e19();
    } catch (e20) {
      return Promise.reject(e20);
    }
    return O(t3) ? t3 : Promise.resolve(t3);
  }
  return t2();
}
var re = class {
  constructor(e19) {
    this.propagationStopped, this.defaultPrevented, this.type = e19, this.target = null;
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
  stopPropagation() {
    this.propagationStopped = true;
  }
}, ie = class extends g {
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
    let i2 = t2 ? new re(e19) : e19;
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
        this.removeEventListener(n2, ee);
      delete a2[n2];
    }
    return s2;
  }
  disposeInternal() {
    this.listeners_ && u(this.listeners_);
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
    r2 !== -1 && (this.pendingRemovals_ && e19 in this.pendingRemovals_ ? (n2[r2] = ee, ++this.pendingRemovals_[e19]) : (n2.splice(r2, 1), n2.length === 0 && delete this.listeners_[e19]));
  }
}, ae = class extends ie {
  constructor() {
    super(), this.on = this.onInternal, this.once = this.onceInternal, this.un = this.unInternal, this.revision_ = 0;
  }
  changed() {
    ++this.revision_, this.dispatchEvent(h.CHANGE);
  }
  getRevision() {
    return this.revision_;
  }
  onInternal(e19, t2) {
    if (Array.isArray(e19)) {
      let n2 = e19.length, r2 = Array(n2);
      for (let i2 = 0; i2 < n2; ++i2)
        r2[i2] = f(this, e19[i2], t2);
      return r2;
    }
    return f(this, e19, t2);
  }
  onceInternal(e19, t2) {
    let n2;
    if (Array.isArray(e19)) {
      let r2 = e19.length;
      n2 = Array(r2);
      for (let i2 = 0; i2 < r2; ++i2)
        n2[i2] = p(this, e19[i2], t2);
    } else
      n2 = p(this, e19, t2);
    return t2.ol_key = n2, n2;
  }
  unInternal(e19, t2) {
    let n2 = t2.ol_key;
    if (n2)
      oe(n2);
    else if (Array.isArray(e19))
      for (let n3 = 0, r2 = e19.length; n3 < r2; ++n3)
        this.removeEventListener(e19[n3], t2);
    else
      this.removeEventListener(e19, t2);
  }
};
ae.prototype.on, ae.prototype.once, ae.prototype.un;
function oe(e19) {
  if (Array.isArray(e19))
    for (let t2 = 0, n2 = e19.length; t2 < n2; ++t2)
      m(e19[t2]);
  else
    m(e19);
}
var se = class extends re {
  constructor(e19, t2, n2) {
    super(e19), this.key = t2, this.oldValue = n2;
  }
}, ce = class extends ae {
  constructor(e19) {
    super(), this.on, this.once, this.un, D(this), this.values_ = null, e19 !== void 0 && this.setProperties(e19);
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
    n2 = `change:${e19}`, this.hasListener(n2) && this.dispatchEvent(new se(n2, e19, t2)), n2 = l.PROPERTYCHANGE, this.hasListener(n2) && this.dispatchEvent(new se(n2, e19, t2));
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
      delete this.values_[e19], d(this.values_) && (this.values_ = null), t2 || this.notify(e19, n2);
    }
  }
}, le = {LENGTH: `length`}, ue = class extends re {
  constructor(e19, t2, n2) {
    super(e19), this.element = t2, this.index = n2;
  }
}, de = class extends ce {
  constructor(e19, t2) {
    if (super(), this.on, this.once, this.un, t2 || (t2 = {}), this.unique_ = !!t2.unique, this.array_ = e19 ?? [], this.unique_)
      for (let e20 = 1, t3 = this.array_.length; e20 < t3; ++e20)
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
    return this.get(le.LENGTH);
  }
  insertAt(e19, t2) {
    if (e19 < 0 || e19 > this.getLength())
      throw Error(`Index out of bounds: ` + e19);
    this.unique_ && this.assertUnique_(t2), this.array_.splice(e19, 0, t2), this.updateLength_(), this.dispatchEvent(new ue(c.ADD, t2, e19));
  }
  pop() {
    return this.removeAt(this.getLength() - 1);
  }
  push(e19) {
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
    return this.array_.splice(e19, 1), this.updateLength_(), this.dispatchEvent(new ue(c.REMOVE, t2, e19)), t2;
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
    this.array_[e19] = t2, this.dispatchEvent(new ue(c.REMOVE, n2, e19)), this.dispatchEvent(new ue(c.ADD, t2, e19));
  }
  updateLength_() {
    this.set(le.LENGTH, this.array_.length);
  }
  assertUnique_(e19, t2) {
    let n2 = this.array_;
    for (let r2 = 0, i2 = n2.length; r2 < i2; ++r2)
      if (n2[r2] === e19 && r2 !== t2)
        throw Error(`Duplicate item added to a unique collection`);
  }
};
function j(e19, t2) {
  if (!e19)
    throw Error(t2);
}
var fe = class e2 extends ce {
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
    let t2 = new e2(), n2 = this.geometryName_;
    t2.setGeometryName(n2);
    let r2 = this.getPropertiesInternal();
    if (r2) {
      let e19 = this.getGeometry();
      for (let i3 in r2)
        i3 === n2 && e19 ? t2.set(i3, e19.clone()) : t2.set(i3, r2[i3], true);
    }
    let i2 = this.getStyle();
    return i2 && t2.setStyle(i2), t2;
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
    this.geometryChangeKey_ && (this.geometryChangeKey_ = (m(this.geometryChangeKey_), null));
    let e19 = this.getGeometry();
    e19 && (this.geometryChangeKey_ = f(e19, h.CHANGE, this.handleGeometryChange_, this)), this.changed();
  }
  setGeometry(e19) {
    this.set(this.geometryName_, e19);
  }
  setStyle(e19) {
    this.style_ = e19 ?? null, this.styleFunction_ = e19 ? pe(e19) : void 0, this.changed();
  }
  setId(e19) {
    this.id_ = e19, this.changed();
  }
  setGeometryName(e19) {
    e19 !== this.geometryName_ && (this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_), this.geometryName_ = e19, this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), this.handleGeometryChanged_());
  }
};
function pe(e19) {
  if (typeof e19 == `function`)
    return e19;
  let t2;
  return Array.isArray(e19) ? t2 = e19 : (j(typeof e19.getZIndex == `function`, "Expected an `ol/style/Style` or an array of `ol/style/Style.js`"), t2 = [e19]), function() {
    return t2;
  };
}
var M = {UNKNOWN: 0, INTERSECTING: 1, ABOVE: 2, RIGHT: 4, BELOW: 8, LEFT: 16};
function me(e19) {
  let t2 = N();
  for (let n2 = 0, r2 = e19.length; n2 < r2; ++n2)
    Oe(t2, e19[n2]);
  return t2;
}
function he(e19, t2, n2) {
  return n2 ? (n2[0] = e19[0] - t2, n2[1] = e19[1] - t2, n2[2] = e19[2] + t2, n2[3] = e19[3] + t2, n2) : [e19[0] - t2, e19[1] - t2, e19[2] + t2, e19[3] + t2];
}
function ge(e19, t2) {
  return t2 ? (t2[0] = e19[0], t2[1] = e19[1], t2[2] = e19[2], t2[3] = e19[3], t2) : e19.slice();
}
function _e(e19, t2, n2) {
  let r2, i2;
  return r2 = t2 < e19[0] ? e19[0] - t2 : e19[2] < t2 ? t2 - e19[2] : 0, i2 = n2 < e19[1] ? e19[1] - n2 : e19[3] < n2 ? n2 - e19[3] : 0, r2 * r2 + i2 * i2;
}
function ve(e19, t2) {
  return be(e19, t2[0], t2[1]);
}
function ye(e19, t2) {
  return e19[0] <= t2[0] && t2[2] <= e19[2] && e19[1] <= t2[1] && t2[3] <= e19[3];
}
function be(e19, t2, n2) {
  return e19[0] <= t2 && t2 <= e19[2] && e19[1] <= n2 && n2 <= e19[3];
}
function xe(e19, t2) {
  let n2 = e19[0], r2 = e19[1], i2 = e19[2], a2 = e19[3], o2 = t2[0], s2 = t2[1], c2 = M.UNKNOWN;
  return o2 < n2 ? c2 |= M.LEFT : o2 > i2 && (c2 |= M.RIGHT), s2 < r2 ? c2 |= M.BELOW : s2 > a2 && (c2 |= M.ABOVE), c2 === M.UNKNOWN && (c2 = M.INTERSECTING), c2;
}
function N() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
}
function Se(e19, t2, n2, r2, i2) {
  return i2 ? (i2[0] = e19, i2[1] = t2, i2[2] = n2, i2[3] = r2, i2) : [e19, t2, n2, r2];
}
function Ce(e19) {
  return Se(1 / 0, 1 / 0, -1 / 0, -1 / 0, e19);
}
function we(e19, t2) {
  let n2 = e19[0], r2 = e19[1];
  return Se(n2, r2, n2, r2, t2);
}
function Te(e19, t2, n2, r2, i2) {
  return ke(Ce(i2), e19, t2, n2, r2);
}
function Ee(e19, t2) {
  return e19[0] == t2[0] && e19[2] == t2[2] && e19[1] == t2[1] && e19[3] == t2[3];
}
function De(e19, t2) {
  return t2[0] < e19[0] && (e19[0] = t2[0]), t2[2] > e19[2] && (e19[2] = t2[2]), t2[1] < e19[1] && (e19[1] = t2[1]), t2[3] > e19[3] && (e19[3] = t2[3]), e19;
}
function Oe(e19, t2) {
  t2[0] < e19[0] && (e19[0] = t2[0]), t2[0] > e19[2] && (e19[2] = t2[0]), t2[1] < e19[1] && (e19[1] = t2[1]), t2[1] > e19[3] && (e19[3] = t2[1]);
}
function ke(e19, t2, n2, r2, i2) {
  for (; n2 < r2; n2 += i2)
    Ae(e19, t2[n2], t2[n2 + 1]);
  return e19;
}
function Ae(e19, t2, n2) {
  e19[0] = Math.min(e19[0], t2), e19[1] = Math.min(e19[1], n2), e19[2] = Math.max(e19[2], t2), e19[3] = Math.max(e19[3], n2);
}
function je(e19, t2) {
  let n2;
  return n2 = t2(Ne(e19)), n2 || (n2 = t2(Pe(e19)), n2) || (n2 = t2(He(e19)), n2) || (n2 = t2(Ve(e19)), n2) ? n2 : false;
}
function Me(e19) {
  let t2 = 0;
  return We(e19) || (t2 = F(e19) * P(e19)), t2;
}
function Ne(e19) {
  return [e19[0], e19[1]];
}
function Pe(e19) {
  return [e19[2], e19[1]];
}
function Fe(e19) {
  return [(e19[0] + e19[2]) / 2, (e19[1] + e19[3]) / 2];
}
function Ie(e19, t2) {
  let n2;
  if (t2 === `bottom-left`)
    n2 = Ne(e19);
  else if (t2 === `bottom-right`)
    n2 = Pe(e19);
  else if (t2 === `top-left`)
    n2 = Ve(e19);
  else if (t2 === `top-right`)
    n2 = He(e19);
  else
    throw Error(`Invalid corner`);
  return n2;
}
function Le(e19, t2, n2, r2, i2) {
  let [a2, o2, s2, c2, l2, u2, d2, f2] = Re(e19, t2, n2, r2);
  return Se(Math.min(a2, s2, l2, d2), Math.min(o2, c2, u2, f2), Math.max(a2, s2, l2, d2), Math.max(o2, c2, u2, f2), i2);
}
function Re(e19, t2, n2, r2) {
  let i2 = t2 * r2[0] / 2, a2 = t2 * r2[1] / 2, o2 = Math.cos(n2), s2 = Math.sin(n2), c2 = i2 * o2, l2 = i2 * s2, u2 = a2 * o2, d2 = a2 * s2, f2 = e19[0], p2 = e19[1];
  return [f2 - c2 + d2, p2 - l2 - u2, f2 - c2 - d2, p2 - l2 + u2, f2 + c2 - d2, p2 + l2 + u2, f2 + c2 + d2, p2 + l2 - u2, f2 - c2 + d2, p2 - l2 - u2];
}
function P(e19) {
  return e19[3] - e19[1];
}
function ze(e19, t2, n2) {
  let r2 = n2 || N();
  return Ue(e19, t2) ? (r2[0] = e19[0] > t2[0] ? e19[0] : t2[0], r2[1] = e19[1] > t2[1] ? e19[1] : t2[1], r2[2] = e19[2] < t2[2] ? e19[2] : t2[2], r2[3] = e19[3] < t2[3] ? e19[3] : t2[3]) : Ce(r2), r2;
}
function Be(e19, t2) {
  if (!Ue(e19, t2))
    return [e19.slice()];
  if (ye(t2, e19))
    return [];
  let [n2, r2, i2, a2] = e19, o2 = Math.max(n2, t2[0]), s2 = Math.max(r2, t2[1]), c2 = Math.min(i2, t2[2]), l2 = Math.min(a2, t2[3]), u2 = [];
  return o2 > n2 && u2.push([n2, r2, o2, a2]), c2 < i2 && u2.push([c2, r2, i2, a2]), s2 > r2 && u2.push([o2, r2, c2, s2]), l2 < a2 && u2.push([o2, l2, c2, a2]), u2;
}
function Ve(e19) {
  return [e19[0], e19[3]];
}
function He(e19) {
  return [e19[2], e19[3]];
}
function F(e19) {
  return e19[2] - e19[0];
}
function Ue(e19, t2) {
  return e19[0] <= t2[2] && e19[2] >= t2[0] && e19[1] <= t2[3] && e19[3] >= t2[1];
}
function We(e19) {
  return e19[2] < e19[0] || e19[3] < e19[1];
}
function Ge(e19, t2) {
  return t2 ? (t2[0] = e19[0], t2[1] = e19[1], t2[2] = e19[2], t2[3] = e19[3], t2) : e19;
}
function Ke(e19, t2, n2) {
  let r2 = false, i2 = xe(e19, t2), a2 = xe(e19, n2);
  if (i2 === M.INTERSECTING || a2 === M.INTERSECTING)
    r2 = true;
  else {
    let o2 = e19[0], s2 = e19[1], c2 = e19[2], l2 = e19[3], u2 = t2[0], d2 = t2[1], f2 = n2[0], p2 = n2[1], m2 = (p2 - d2) / (f2 - u2), h2, g2;
    a2 & M.ABOVE && !(i2 & M.ABOVE) && (h2 = f2 - (p2 - l2) / m2, r2 = h2 >= o2 && h2 <= c2), !r2 && a2 & M.RIGHT && !(i2 & M.RIGHT) && (g2 = p2 - (f2 - c2) * m2, r2 = g2 >= s2 && g2 <= l2), !r2 && a2 & M.BELOW && !(i2 & M.BELOW) && (h2 = f2 - (p2 - s2) / m2, r2 = h2 >= o2 && h2 <= c2), !r2 && a2 & M.LEFT && !(i2 & M.LEFT) && (g2 = p2 - (f2 - o2) * m2, r2 = g2 >= s2 && g2 <= l2);
  }
  return r2;
}
function qe(e19, t2) {
  let n2 = t2.getExtent(), r2 = Fe(e19);
  if (t2.canWrapX() && (r2[0] < n2[0] || r2[0] >= n2[2])) {
    let t3 = F(n2), i2 = Math.floor((r2[0] - n2[0]) / t3) * t3;
    e19[0] -= i2, e19[2] -= i2;
  }
  return e19;
}
function Je(e19, t2, n2) {
  if (t2.canWrapX()) {
    let r2 = t2.getExtent();
    if (!isFinite(e19[0]) || !isFinite(e19[2]))
      return [[r2[0], e19[1], r2[2], e19[3]]];
    qe(e19, t2);
    let i2 = F(r2);
    if (F(e19) > i2 && !n2)
      return [[r2[0], e19[1], r2[2], e19[3]]];
    if (e19[0] < r2[0])
      return [[e19[0] + i2, e19[1], r2[2], e19[3]], [r2[0], e19[1], e19[2], e19[3]]];
    if (e19[2] > r2[2])
      return [[e19[0], e19[1], r2[2], e19[3]], [r2[0], e19[1], e19[2] - i2, e19[3]]];
  }
  return [e19];
}
function Ye(e19, t2) {
  let n2 = [e19];
  for (let e20 = 0, r2 = t2.length; e20 < r2 && n2.length > 0; ++e20) {
    let r3 = [];
    for (let i2 = 0, a2 = n2.length; i2 < a2; ++i2)
      r3.push(...Be(n2[i2], t2[e20]));
    n2 = r3;
  }
  return n2;
}
function I(e19, t2, n2) {
  return Math.min(Math.max(e19, t2), n2);
}
function Xe(e19, t2, n2, r2, i2, a2) {
  let o2 = i2 - n2, s2 = a2 - r2;
  if (o2 !== 0 || s2 !== 0) {
    let c2 = ((e19 - n2) * o2 + (t2 - r2) * s2) / (o2 * o2 + s2 * s2);
    c2 > 1 ? (n2 = i2, r2 = a2) : c2 > 0 && (n2 += o2 * c2, r2 += s2 * c2);
  }
  return Ze(e19, t2, n2, r2);
}
function Ze(e19, t2, n2, r2) {
  let i2 = n2 - e19, a2 = r2 - t2;
  return i2 * i2 + a2 * a2;
}
function Qe(e19) {
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
function $e(e19) {
  return e19 * 180 / Math.PI;
}
function et(e19) {
  return e19 * Math.PI / 180;
}
function tt(e19, t2) {
  let n2 = e19 % t2;
  return n2 * t2 < 0 ? n2 + t2 : n2;
}
function nt(e19, t2, n2) {
  return e19 + n2 * (t2 - e19);
}
function rt(e19, t2) {
  let n2 = 10 ** t2;
  return Math.round(e19 * n2) / n2;
}
function it(e19, t2) {
  return Math.floor(rt(e19, t2));
}
function at(e19, t2) {
  return Math.ceil(rt(e19, t2));
}
function ot(e19, t2, n2) {
  if (e19 >= t2 && e19 < n2)
    return e19;
  let r2 = n2 - t2;
  return ((e19 - t2) % r2 + r2) % r2 + t2;
}
function st(e19, t2, n2) {
  n2 || (n2 = 63710088e-1);
  let r2 = et(e19[1]), i2 = et(t2[1]), a2 = (i2 - r2) / 2, o2 = et(t2[0] - e19[0]) / 2, s2 = Math.sin(a2) * Math.sin(a2) + Math.sin(o2) * Math.sin(o2) * Math.cos(r2) * Math.cos(i2);
  return 2 * n2 * Math.atan2(Math.sqrt(s2), Math.sqrt(1 - s2));
}
var ct = {info: 1, warn: 2, error: 3, none: 4}, lt = ct.info;
function ut(...e19) {
  lt > ct.warn || console.warn(...e19);
}
function dt(e19, t2) {
  return e19[0] += +t2[0], e19[1] += +t2[1], e19;
}
function ft(e19, t2) {
  let n2 = true;
  for (let r2 = e19.length - 1; r2 >= 0; --r2)
    if (e19[r2] != t2[r2]) {
      n2 = false;
      break;
    }
  return n2;
}
function pt(e19, t2) {
  let n2 = Math.cos(t2), r2 = Math.sin(t2), i2 = e19[0] * n2 - e19[1] * r2, a2 = e19[1] * n2 + e19[0] * r2;
  return e19[0] = i2, e19[1] = a2, e19;
}
function mt(e19, t2) {
  return e19[0] *= t2, e19[1] *= t2, e19;
}
function ht(e19, t2) {
  if (t2.canWrapX()) {
    let n2 = F(t2.getExtent()), r2 = _t(e19, t2, n2);
    r2 && (e19[0] -= r2 * n2);
  }
  return e19;
}
function gt(e19, t2, n2) {
  if (t2.canWrapX()) {
    let r2 = F(t2.getExtent()), i2 = Math.round((n2 - e19[0]) / r2);
    i2 !== 0 && (e19[0] += i2 * r2);
  }
  return e19;
}
function _t(e19, t2, n2) {
  let r2 = t2.getExtent(), i2 = 0;
  return t2.canWrapX() && (e19[0] < r2[0] || e19[0] > r2[2]) && (n2 || (n2 = F(r2)), i2 = Math.floor((e19[0] - r2[0]) / n2)), i2;
}
function vt(e19, t2, n2) {
  let r2 = Math.sqrt((t2[0] - e19[0]) * (t2[0] - e19[0]) + (t2[1] - e19[1]) * (t2[1] - e19[1])), i2 = [(t2[0] - e19[0]) / r2, (t2[1] - e19[1]) / r2], a2 = [-i2[1], i2[0]], o2 = Math.sqrt((n2[0] - e19[0]) * (n2[0] - e19[0]) + (n2[1] - e19[1]) * (n2[1] - e19[1])), s2 = [(n2[0] - e19[0]) / o2, (n2[1] - e19[1]) / o2], c2 = r2 === 0 || o2 === 0 ? 0 : Math.acos(I(s2[0] * i2[0] + s2[1] * i2[1], -1, 1));
  return c2 = Math.max(c2, 1e-5), s2[0] * a2[0] + s2[1] * a2[1] > 0 ? c2 : Math.PI * 2 - c2;
}
var yt = {radians: 6370997 / (2 * Math.PI), degrees: 2 * Math.PI * 6370997 / 360, ft: 0.3048, m: 1, "us-ft": 1200 / 3937}, bt = class {
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
    return this.metersPerUnit_ || yt[this.units_];
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
}, xt = 6378137, St = Math.PI * xt, Ct = [-St, -St, St, St], wt = [-180, -85, 180, 85], Tt = xt * Math.log(Math.tan(Math.PI / 2)), Et = class extends bt {
  constructor(e19) {
    super({code: e19, units: `m`, extent: Ct, global: true, worldExtent: wt, getPointResolution: function(e20, t2) {
      return e20 / Math.cosh(t2[1] / xt);
    }});
  }
}, Dt = [new Et(`EPSG:3857`), new Et(`EPSG:102100`), new Et(`EPSG:102113`), new Et(`EPSG:900913`), new Et(`http://www.opengis.net/def/crs/EPSG/0/3857`), new Et(`http://www.opengis.net/gml/srs/epsg.xml#3857`)];
function Ot(e19, t2, n2, r2) {
  let i2 = e19.length;
  n2 = n2 !== void 0 && n2 > 1 ? n2 : 2, r2 ?? (r2 = n2), t2 === void 0 && (t2 = n2 > 2 ? e19.slice() : Array(i2));
  for (let n3 = 0; n3 < i2; n3 += r2) {
    t2[n3] = St * e19[n3] / 180;
    let r3 = xt * Math.log(Math.tan(Math.PI * (+e19[n3 + 1] + 90) / 360));
    r3 > Tt ? r3 = Tt : r3 < -Tt && (r3 = -Tt), t2[n3 + 1] = r3;
  }
  return t2;
}
function kt(e19, t2, n2, r2) {
  let i2 = e19.length;
  n2 = n2 !== void 0 && n2 > 1 ? n2 : 2, r2 ?? (r2 = n2), t2 === void 0 && (t2 = n2 > 2 ? e19.slice() : Array(i2));
  for (let n3 = 0; n3 < i2; n3 += r2)
    t2[n3] = 180 * e19[n3] / St, t2[n3 + 1] = 360 * Math.atan(Math.exp(e19[n3 + 1] / xt)) / Math.PI - 90;
  return t2;
}
var At = 6378137, jt = [-180, -90, 180, 90], Mt = Math.PI * At / 180, Nt = class extends bt {
  constructor(e19, t2) {
    super({code: e19, units: `degrees`, extent: jt, axisOrientation: t2, global: true, metersPerUnit: Mt, worldExtent: jt});
  }
}, Pt = [new Nt(`CRS:84`), new Nt(`EPSG:4326`, `neu`), new Nt(`urn:ogc:def:crs:OGC:1.3:CRS84`), new Nt(`urn:ogc:def:crs:OGC:2:84`), new Nt(`http://www.opengis.net/def/crs/OGC/1.3/CRS84`), new Nt(`http://www.opengis.net/gml/srs/epsg.xml#4326`, `neu`), new Nt(`http://www.opengis.net/def/crs/EPSG/0/4326`, `neu`)], Ft = {};
function It(e19) {
  return Ft[e19] || Ft[e19.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, `EPSG:$3`)] || null;
}
function Lt(e19, t2) {
  Ft[e19] = t2;
}
var Rt = {};
function zt(e19, t2, n2) {
  let r2 = e19.getCode(), i2 = t2.getCode();
  r2 in Rt || (Rt[r2] = {}), Rt[r2][i2] = n2;
}
function Bt(e19, t2) {
  return e19 in Rt && t2 in Rt[e19] ? Rt[e19][t2] : null;
}
var Vt = 0.9996, Ht = 669438e-8, Ut = Ht * Ht, Wt = Ut * Ht, Gt = Ht / 0.99330562, Kt = Math.sqrt(0.99330562), qt = (1 - Kt) / (1 + Kt), Jt = qt * qt, Yt = Jt * qt, Xt = Yt * qt, Zt = Xt * qt, Qt = 1 - Ht / 4 - 3 * Ut / 64 - 5 * Wt / 256, $t = 0.002514607064228144, en = 26390466021299826e-22, tn = 35 * Wt / 3072, nn = 3 / 2 * qt - 27 / 32 * Yt + 269 / 512 * Zt, rn = 21 / 16 * Jt - 55 / 32 * Xt, an = 151 / 96 * Yt - 417 / 128 * Zt, on = 1097 / 512 * Xt, sn = 6378137;
function cn(e19, t2, n2) {
  let r2 = e19 - 5e5, i2 = (n2.north ? t2 : t2 - 1e7) / Vt / (sn * Qt), a2 = i2 + nn * Math.sin(2 * i2) + rn * Math.sin(4 * i2) + an * Math.sin(6 * i2) + on * Math.sin(8 * i2), o2 = Math.sin(a2), s2 = o2 * o2, c2 = Math.cos(a2), l2 = o2 / c2, u2 = l2 * l2, d2 = u2 * u2, f2 = 1 - Ht * s2, p2 = sn / Math.sqrt(1 - Ht * s2), m2 = 0.99330562 / f2, h2 = Gt * c2 ** 2, g2 = h2 * h2, _2 = r2 / (p2 * Vt), v2 = _2 * _2, y2 = v2 * _2, b2 = y2 * _2, x2 = b2 * _2, S2 = x2 * _2, C2 = a2 - l2 / m2 * (v2 / 2 - b2 / 24 * (5 + 3 * u2 + 10 * h2 - 4 * g2 - 9 * Gt)) + S2 / 720 * (61 + 90 * u2 + 298 * h2 + 45 * d2 - 252 * Gt - 3 * g2), w2 = (_2 - y2 / 6 * (1 + 2 * u2 + h2) + x2 / 120 * (5 - 2 * h2 + 28 * u2 - 3 * g2 + 8 * Gt + 24 * d2)) / c2;
  return w2 = ot(w2 + et(mn(n2.number)), -Math.PI, Math.PI), [$e(w2), $e(C2)];
}
var ln = -80, un = 84, dn = -180, fn = 180;
function pn(e19, t2, n2) {
  e19 = ot(e19, dn, fn), t2 < ln ? t2 = ln : t2 > un && (t2 = un);
  let r2 = et(t2), i2 = Math.sin(r2), a2 = Math.cos(r2), o2 = i2 / a2, s2 = o2 * o2, c2 = s2 * s2, l2 = et(e19), u2 = et(mn(n2.number)), d2 = sn / Math.sqrt(1 - Ht * i2 ** 2), f2 = Gt * a2 ** 2, p2 = a2 * ot(l2 - u2, -Math.PI, Math.PI), m2 = p2 * p2, h2 = m2 * p2, g2 = h2 * p2, _2 = g2 * p2, v2 = _2 * p2, y2 = sn * (Qt * r2 - $t * Math.sin(2 * r2) + en * Math.sin(4 * r2) - tn * Math.sin(6 * r2)), b2 = Vt * d2 * (p2 + h2 / 6 * (1 - s2 + f2) + _2 / 120 * (5 - 18 * s2 + c2 + 72 * f2 - 58 * Gt)) + 5e5, x2 = Vt * (y2 + d2 * o2 * (m2 / 2 + g2 / 24 * (5 - s2 + 9 * f2 + 4 * f2 ** 2) + v2 / 720 * (61 - 58 * s2 + c2 + 600 * f2 - 330 * Gt)));
  return n2.north || (x2 += 1e7), [b2, x2];
}
function mn(e19) {
  return (e19 - 1) * 6 - 180 + 3;
}
var hn = [/^EPSG:(\d+)$/, /^urn:ogc:def:crs:EPSG::(\d+)$/, /^http:\/\/www\.opengis\.net\/def\/crs\/EPSG\/0\/(\d+)$/];
function gn(e19) {
  let t2 = 0;
  for (let n3 of hn) {
    let r3 = e19.match(n3);
    if (r3) {
      t2 = parseInt(r3[1]);
      break;
    }
  }
  if (!t2)
    return null;
  let n2 = 0, r2 = false;
  return t2 > 32700 && t2 < 32761 ? n2 = t2 - 32700 : t2 > 32600 && t2 < 32661 && (r2 = true, n2 = t2 - 32600), n2 ? {number: n2, north: r2} : null;
}
function _n(e19, t2) {
  return function(n2, r2, i2, a2) {
    let o2 = n2.length;
    i2 = i2 !== void 0 && i2 > 1 ? i2 : 2, a2 ?? (a2 = i2), r2 || (r2 = i2 > 2 ? n2.slice() : Array(o2));
    for (let i3 = 0; i3 < o2; i3 += a2) {
      let a3 = n2[i3], o3 = n2[i3 + 1], s2 = e19(a3, o3, t2);
      r2[i3] = s2[0], r2[i3 + 1] = s2[1];
    }
    return r2;
  };
}
function vn(e19) {
  return gn(e19) ? new bt({code: e19, units: `m`}) : null;
}
function yn(e19) {
  let t2 = gn(e19.getCode());
  return t2 ? {forward: _n(pn, t2), inverse: _n(cn, t2)} : null;
}
var bn = [yn], xn = [vn], Sn = true;
function Cn(e19) {
  Sn = !(e19 === void 0 || e19);
}
function wn(e19, t2) {
  if (t2 !== void 0) {
    for (let n2 = 0, r2 = e19.length; n2 < r2; ++n2)
      t2[n2] = e19[n2];
    t2 = t2;
  } else
    t2 = e19.slice();
  return t2;
}
function Tn(e19) {
  Lt(e19.getCode(), e19), zt(e19, e19, wn);
}
function En(e19) {
  e19.forEach(Tn);
}
function Dn(e19) {
  if (typeof e19 != `string`)
    return e19 === void 0 ? null : e19;
  let t2 = It(e19);
  if (t2)
    return t2;
  for (let t3 of xn) {
    let n2 = t3(e19);
    if (n2)
      return n2;
  }
  return null;
}
function On(e19, t2, n2, r2) {
  let i2 = Dn(e19);
  if (!i2)
    return t2;
  let a2, o2 = i2.getPointResolutionFunc();
  if (o2) {
    if (a2 = o2(t2, n2), r2 && r2 !== i2.getUnits()) {
      let e20 = i2.getMetersPerUnit();
      e20 && (a2 = a2 * e20 / yt[r2]);
    }
  } else {
    let e20 = i2.getUnits();
    if (e20 == `degrees` && !r2 || r2 == `degrees`)
      a2 = t2;
    else {
      let o3 = Fn(i2, Dn(`EPSG:4326`));
      if (!o3 && e20 !== `degrees`)
        a2 = t2 * (i2.getMetersPerUnit() ?? 1);
      else {
        let e21 = [n2[0] - t2 / 2, n2[1], n2[0] + t2 / 2, n2[1], n2[0], n2[1] - t2 / 2, n2[0], n2[1] + t2 / 2];
        o3 && (e21 = o3(e21, e21, 2)), a2 = (st(e21.slice(0, 2), e21.slice(2, 4)) + st(e21.slice(4, 6), e21.slice(6, 8))) / 2;
      }
      let s2 = r2 ? yt[r2] : i2.getMetersPerUnit();
      s2 !== void 0 && (a2 /= s2);
    }
  }
  return a2;
}
function kn(e19) {
  En(e19), e19.forEach(function(t2) {
    e19.forEach(function(e20) {
      t2 !== e20 && zt(t2, e20, wn);
    });
  });
}
function An(e19, t2, n2, r2) {
  e19.forEach(function(e20) {
    t2.forEach(function(t3) {
      zt(e20, t3, n2), zt(t3, e20, r2);
    });
  });
}
function jn(e19, t2) {
  return e19 ? typeof e19 == `string` ? Dn(e19) : e19 : Dn(t2);
}
function Mn(e19) {
  return function(t2, n2, r2, i2) {
    let a2 = t2.length;
    r2 = r2 === void 0 ? 2 : r2, i2 ?? (i2 = r2), n2 = n2 === void 0 ? Array(a2) : n2;
    for (let o2 = 0; o2 < a2; o2 += i2) {
      let a3 = e19(t2.slice(o2, o2 + r2)), s2 = a3.length;
      for (let e20 = 0, r3 = i2; e20 < r3; ++e20)
        n2[o2 + e20] = e20 >= s2 ? t2[o2 + e20] : a3[e20];
    }
    return n2;
  };
}
function Nn(e19, t2) {
  return Cn(), Rn(e19, `EPSG:4326`, t2 === void 0 ? `EPSG:3857` : t2);
}
function Pn(e19, t2) {
  if (e19 === t2)
    return true;
  let n2 = e19.getUnits() === t2.getUnits();
  return (e19.getCode() === t2.getCode() || Fn(e19, t2) === wn) && n2;
}
function Fn(e19, t2) {
  if (!e19 || !t2)
    return null;
  let n2 = e19.getCode(), r2 = t2.getCode(), i2 = Bt(n2, r2);
  if (i2)
    return i2;
  let a2 = null, o2 = null;
  for (let n3 of bn)
    a2 || (a2 = n3(e19)), o2 || (o2 = n3(t2));
  if (!a2 && !o2)
    return null;
  let s2 = `EPSG:4326`;
  if (!o2 && a2) {
    let e20 = Bt(s2, r2);
    e20 && (i2 = In(a2.inverse, e20));
  } else if (!a2 && o2) {
    let e20 = Bt(n2, s2);
    e20 && (i2 = In(e20, o2.forward));
  } else
    a2 && o2 && (i2 = In(a2.inverse, o2.forward));
  return i2 && (Tn(e19), Tn(t2), zt(e19, t2, i2)), i2;
}
function In(e19, t2) {
  return function(n2, r2, i2, a2) {
    return r2 = e19(n2, r2, i2, a2), t2(r2, r2, i2, a2);
  };
}
function Ln(e19, t2) {
  return Fn(Dn(e19), Dn(t2));
}
function Rn(e19, t2, n2) {
  let r2 = Ln(t2, n2);
  if (!r2) {
    let e20 = Dn(t2)?.getCode() ?? String(t2), r3 = Dn(n2)?.getCode() ?? String(n2);
    throw Error(`No transform available between ${e20} and ${r3}`);
  }
  return r2(e19, void 0, e19.length);
}
var zn = null;
function Bn() {
  return zn;
}
function Vn(e19, t2) {
  return e19;
}
function Hn(e19, t2) {
  return Sn && !ft(e19, [0, 0]) && e19[0] >= -180 && e19[0] <= 180 && e19[1] >= -90 && e19[1] <= 90 && (Sn = false, ut(`Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.`)), e19;
}
function Un(e19, t2) {
  return e19;
}
function Wn(e19, t2) {
  return e19;
}
function Gn(e19, t2) {
  return e19;
}
function Kn() {
  kn(Dt), kn(Pt), An(Pt, Dt, Ot, kt);
}
Kn();
var qn = [1, 0, 0, 1, 0, 0];
function Jn() {
  return qn.slice(0);
}
function Yn(e19, t2) {
  return e19[0] = t2[0], e19[1] = t2[1], e19[2] = t2[2], e19[3] = t2[3], e19[4] = t2[4], e19[5] = t2[5], e19;
}
function L(e19, t2) {
  let n2 = t2[0], r2 = t2[1];
  return t2[0] = e19[0] * n2 + e19[2] * r2 + e19[4], t2[1] = e19[1] * n2 + e19[3] * r2 + e19[5], t2;
}
function Xn(e19, t2, n2, r2, i2, a2, o2, s2) {
  let c2 = Math.sin(a2), l2 = Math.cos(a2);
  return e19[0] = r2 * l2, e19[1] = i2 * c2, e19[2] = -r2 * c2, e19[3] = i2 * l2, e19[4] = o2 * r2 * l2 - s2 * r2 * c2 + t2, e19[5] = o2 * i2 * c2 + s2 * i2 * l2 + n2, e19;
}
function Zn(e19, t2) {
  let n2 = Qn(t2);
  j(n2 !== 0, `Transformation matrix cannot be inverted`);
  let r2 = t2[0], i2 = t2[1], a2 = t2[2], o2 = t2[3], s2 = t2[4], c2 = t2[5];
  return e19[0] = o2 / n2, e19[1] = -i2 / n2, e19[2] = -a2 / n2, e19[3] = r2 / n2, e19[4] = (a2 * c2 - o2 * s2) / n2, e19[5] = -(r2 * c2 - i2 * s2) / n2, e19;
}
function Qn(e19) {
  return e19[0] * e19[3] - e19[1] * e19[2];
}
var $n = [1e5, 1e5, 1e5, 1e5, 2, 2];
function er(e19) {
  return `matrix(` + e19.join(`, `) + `)`;
}
function tr(e19) {
  return e19.substring(7, e19.length - 1).split(`,`).map(parseFloat);
}
function nr(e19, t2) {
  let n2 = tr(e19), r2 = tr(t2);
  for (let e20 = 0; e20 < 6; ++e20)
    if (Math.round((n2[e20] - r2[e20]) * $n[e20]) !== 0)
      return false;
  return true;
}
function rr(e19, t2, n2, r2, i2, a2, o2) {
  a2 || (a2 = []), o2 || (o2 = 2);
  let s2 = 0;
  for (let c2 = t2; c2 < n2; c2 += r2) {
    let t3 = e19[c2], n3 = e19[c2 + 1];
    a2[s2++] = i2[0] * t3 + i2[2] * n3 + i2[4], a2[s2++] = i2[1] * t3 + i2[3] * n3 + i2[5];
    for (let t4 = 2; t4 < o2; t4++)
      a2[s2++] = e19[c2 + t4];
  }
  return a2 && a2.length != s2 && (a2.length = s2), a2;
}
function ir(e19, t2, n2, r2, i2, a2, o2) {
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
function ar(e19, t2, n2, r2, i2, a2, o2, s2) {
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
function or(e19, t2, n2, r2, i2, a2, o2) {
  o2 || (o2 = []);
  let s2 = 0;
  for (let c2 = t2; c2 < n2; c2 += r2) {
    o2[s2++] = e19[c2] + i2, o2[s2++] = e19[c2 + 1] + a2;
    for (let t3 = c2 + 2; t3 < c2 + r2; ++t3)
      o2[s2++] = e19[t3];
  }
  return o2 && o2.length != s2 && (o2.length = s2), o2;
}
var sr = Jn(), cr = [NaN, NaN], lr = class extends ce {
  constructor() {
    super(), this.extent_ = N(), this.extentRevision_ = -1, this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = 0, this.simplifyTransformedInternal = te((e19, t2, n2) => {
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
    return T();
  }
  closestPointXY(e19, t2, n2, r2) {
    return T();
  }
  containsXY(e19, t2) {
    return this.closestPointXY(e19, t2, cr, Number.MIN_VALUE) === 0;
  }
  getClosestPoint(e19, t2) {
    return t2 || (t2 = [NaN, NaN]), this.closestPointXY(e19[0], e19[1], t2, 1 / 0), t2;
  }
  intersectsCoordinate(e19) {
    return this.containsXY(e19[0], e19[1]);
  }
  computeExtent(e19) {
    return T();
  }
  getExtent(e19) {
    if (this.extentRevision_ != this.getRevision()) {
      let e20 = this.computeExtent(this.extent_);
      (isNaN(e20[0]) || isNaN(e20[1])) && Ce(e20), this.extentRevision_ = this.getRevision();
    }
    return Ge(this.extent_, e19);
  }
  rotate(e19, t2) {
    T();
  }
  scale(e19, t2, n2) {
    T();
  }
  simplify(e19) {
    return this.getSimplifiedGeometry(e19 * e19);
  }
  getSimplifiedGeometry(e19) {
    return T();
  }
  getType() {
    return T();
  }
  applyTransform(e19) {
    T();
  }
  intersectsExtent(e19) {
    return T();
  }
  translate(e19, t2) {
    T();
  }
  transform(e19, t2) {
    let n2 = Dn(e19);
    if (!n2)
      return this;
    let r2 = n2.getUnits() == `tile-pixels` ? function(e20, r3, i2) {
      let a2 = n2.getExtent(), o2 = n2.getWorldExtent(), s2 = P(o2) / P(a2);
      Xn(sr, o2[0], o2[3], s2, -s2, 0, 0, 0);
      let c2 = rr(e20, 0, e20.length, i2, sr, r3), l2 = Ln(n2, t2);
      return l2 ? l2(c2, c2, i2) : c2;
    } : Ln(n2, t2);
    return r2 && this.applyTransform(r2), this;
  }
}, ur = class extends lr {
  constructor() {
    super(), this.layout = `XY`, this.stride = 2, this.flatCoordinates;
  }
  computeExtent(e19) {
    return Te(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, e19);
  }
  getCoordinates() {
    return T();
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
    this.stride = fr(e19), this.layout = e19, this.flatCoordinates = t2;
  }
  setCoordinates(e19, t2) {
    T();
  }
  setLayout(e19, t2, n2) {
    let r2;
    if (e19)
      r2 = fr(e19);
    else {
      for (let e20 = 0; e20 < n2; ++e20) {
        if (t2.length === 0) {
          this.layout = `XY`, this.stride = 2;
          return;
        }
        t2 = t2[0];
      }
      r2 = t2.length, e19 = dr(r2);
    }
    this.layout = e19, this.stride = r2;
  }
  applyTransform(e19) {
    this.flatCoordinates && (e19(this.flatCoordinates, this.flatCoordinates, this.layout.startsWith(`XYZ`) ? 3 : 2, this.stride), this.changed());
  }
  rotate(e19, t2) {
    let n2 = this.getFlatCoordinates();
    if (n2) {
      let r2 = this.getStride();
      ir(n2, 0, n2.length, r2, e19, t2, n2), this.changed();
    }
  }
  scale(e19, t2, n2) {
    t2 === void 0 && (t2 = e19), n2 || (n2 = Fe(this.getExtent()));
    let r2 = this.getFlatCoordinates();
    if (r2) {
      let i2 = this.getStride();
      ar(r2, 0, r2.length, i2, e19, t2, n2, r2), this.changed();
    }
  }
  translate(e19, t2) {
    let n2 = this.getFlatCoordinates();
    if (n2) {
      let r2 = this.getStride();
      or(n2, 0, n2.length, r2, e19, t2, n2), this.changed();
    }
  }
};
function dr(e19) {
  let t2;
  return e19 == 2 ? t2 = `XY` : e19 == 3 ? t2 = `XYZ` : e19 == 4 && (t2 = `XYZM`), t2;
}
function fr(e19) {
  let t2;
  return e19 == `XY` ? t2 = 2 : e19 == `XYZ` || e19 == `XYM` ? t2 = 3 : e19 == `XYZM` && (t2 = 4), t2;
}
function pr(e19, t2, n2) {
  let r2 = e19.getFlatCoordinates();
  if (!r2)
    return null;
  let i2 = e19.getStride();
  return rr(r2, 0, r2.length, i2, t2, n2);
}
function mr(e19, t2, n2, r2) {
  let i2 = 0, a2 = e19[n2 - r2], o2 = e19[n2 - r2 + 1], s2 = 0, c2 = 0;
  for (; t2 < n2; t2 += r2) {
    let n3 = e19[t2] - a2, r3 = e19[t2 + 1] - o2;
    i2 += c2 * n3 - s2 * r3, s2 = n3, c2 = r3;
  }
  return i2 / 2;
}
function hr(e19, t2, n2, r2) {
  let i2 = 0;
  for (let a2 = 0, o2 = n2.length; a2 < o2; ++a2) {
    let o3 = n2[a2];
    i2 += mr(e19, t2, o3, r2), t2 = o3;
  }
  return i2;
}
function gr(e19, t2, n2, r2, i2, a2, o2) {
  let s2 = e19[t2], c2 = e19[t2 + 1], l2 = e19[n2] - s2, u2 = e19[n2 + 1] - c2, d2;
  if (l2 === 0 && u2 === 0)
    d2 = t2;
  else {
    let f2 = ((i2 - s2) * l2 + (a2 - c2) * u2) / (l2 * l2 + u2 * u2);
    if (f2 > 1)
      d2 = n2;
    else if (f2 > 0) {
      for (let i3 = 0; i3 < r2; ++i3)
        o2[i3] = nt(e19[t2 + i3], e19[n2 + i3], f2);
      o2.length = r2;
      return;
    } else
      d2 = t2;
  }
  for (let t3 = 0; t3 < r2; ++t3)
    o2[t3] = e19[d2 + t3];
  o2.length = r2;
}
function _r(e19, t2, n2, r2, i2) {
  let a2 = e19[t2], o2 = e19[t2 + 1];
  for (t2 += r2; t2 < n2; t2 += r2) {
    let n3 = e19[t2], r3 = e19[t2 + 1], s2 = Ze(a2, o2, n3, r3);
    s2 > i2 && (i2 = s2), a2 = n3, o2 = r3;
  }
  return i2;
}
function vr(e19, t2, n2, r2, i2) {
  for (let a2 = 0, o2 = n2.length; a2 < o2; ++a2) {
    let o3 = n2[a2];
    i2 = _r(e19, t2, o3, r2, i2), t2 = o3;
  }
  return i2;
}
function yr(e19, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2) {
  if (t2 == n2)
    return l2;
  let d2, f2;
  if (i2 === 0) {
    if (f2 = Ze(o2, s2, e19[t2], e19[t2 + 1]), f2 < l2) {
      for (d2 = 0; d2 < r2; ++d2)
        c2[d2] = e19[t2 + d2];
      return c2.length = r2, f2;
    }
    return l2;
  }
  u2 || (u2 = [NaN, NaN]);
  let p2 = t2 + r2;
  for (; p2 < n2; )
    if (gr(e19, p2 - r2, p2, r2, o2, s2, u2), f2 = Ze(o2, s2, u2[0], u2[1]), f2 < l2) {
      for (l2 = f2, d2 = 0; d2 < r2; ++d2)
        c2[d2] = u2[d2];
      c2.length = r2, p2 += r2;
    } else
      p2 += r2 * Math.max((Math.sqrt(f2) - Math.sqrt(l2)) / i2 | 0, 1);
  if (a2 && (gr(e19, n2 - r2, t2, r2, o2, s2, u2), f2 = Ze(o2, s2, u2[0], u2[1]), f2 < l2)) {
    for (l2 = f2, d2 = 0; d2 < r2; ++d2)
      c2[d2] = u2[d2];
    c2.length = r2;
  }
  return l2;
}
function br(e19, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2) {
  u2 || (u2 = [NaN, NaN]);
  for (let d2 = 0, f2 = n2.length; d2 < f2; ++d2) {
    let f3 = n2[d2];
    l2 = yr(e19, t2, f3, r2, i2, a2, o2, s2, c2, l2, u2), t2 = f3;
  }
  return l2;
}
function xr(e19, t2, n2, r2) {
  for (let i2 = 0; i2 < r2; ++i2)
    e19[t2++] = n2[i2];
  return t2;
}
function Sr(e19, t2, n2, r2) {
  for (let i2 = 0, a2 = n2.length; i2 < a2; ++i2) {
    let a3 = n2[i2];
    for (let n3 = 0; n3 < r2; ++n3)
      e19[t2++] = a3[n3];
  }
  return t2;
}
function Cr(e19, t2, n2, r2, i2) {
  i2 || (i2 = []);
  let a2 = 0;
  for (let o2 = 0, s2 = n2.length; o2 < s2; ++o2) {
    let s3 = Sr(e19, t2, n2[o2], r2);
    i2[a2++] = s3, t2 = s3;
  }
  return i2.length = a2, i2;
}
function wr(e19, t2, n2, r2, i2) {
  i2 = i2 === void 0 ? [] : i2;
  let a2 = 0;
  for (let o2 = t2; o2 < n2; o2 += r2)
    i2[a2++] = e19.slice(o2, o2 + r2);
  return i2.length = a2, i2;
}
function Tr(e19, t2, n2, r2, i2) {
  i2 = i2 === void 0 ? [] : i2;
  let a2 = 0;
  for (let o2 = 0, s2 = n2.length; o2 < s2; ++o2) {
    let s3 = n2[o2];
    i2[a2++] = wr(e19, t2, s3, r2, i2[a2]), t2 = s3;
  }
  return i2.length = a2, i2;
}
function Er(e19, t2, n2, r2, i2) {
  i2 = i2 === void 0 ? [] : i2;
  let a2 = 0;
  for (let o2 = 0, s2 = n2.length; o2 < s2; ++o2) {
    let s3 = n2[o2];
    i2[a2++] = s3.length === 1 && s3[0] === t2 ? [] : Tr(e19, t2, s3, r2, i2[a2]), t2 = s3[s3.length - 1];
  }
  return i2.length = a2, i2;
}
function Dr(e19, t2, n2, r2, i2) {
  return !je(i2, function(i3) {
    return !Or(e19, t2, n2, r2, i3[0], i3[1]);
  });
}
function Or(e19, t2, n2, r2, i2, a2) {
  let o2 = 0, s2 = e19[n2 - r2], c2 = e19[n2 - r2 + 1];
  for (; t2 < n2; t2 += r2) {
    let n3 = e19[t2], r3 = e19[t2 + 1];
    c2 <= a2 ? r3 > a2 && (n3 - s2) * (a2 - c2) - (i2 - s2) * (r3 - c2) > 0 && o2++ : r3 <= a2 && (n3 - s2) * (a2 - c2) - (i2 - s2) * (r3 - c2) < 0 && o2--, s2 = n3, c2 = r3;
  }
  return o2 !== 0;
}
function kr(e19, t2, n2, r2, i2, a2) {
  if (n2.length === 0 || !Or(e19, t2, n2[0], r2, i2, a2))
    return false;
  for (let t3 = 1, o2 = n2.length; t3 < o2; ++t3)
    if (Or(e19, n2[t3 - 1], n2[t3], r2, i2, a2))
      return false;
  return true;
}
function Ar(e19, t2, n2, r2, i2) {
  let a2;
  for (t2 += r2; t2 < n2; t2 += r2)
    if (a2 = i2(e19.slice(t2 - r2, t2), e19.slice(t2, t2 + r2)), a2)
      return a2;
  return false;
}
function jr(e19, t2, n2, r2, i2, a2) {
  return a2 ?? (a2 = ke(N(), e19, t2, n2, r2)), Ue(i2, a2) ? a2[0] >= i2[0] && a2[2] <= i2[2] || a2[1] >= i2[1] && a2[3] <= i2[3] || Ar(e19, t2, n2, r2, function(e20, t3) {
    return Ke(i2, e20, t3);
  }) : false;
}
function Mr(e19, t2, n2, r2, i2) {
  return !!(jr(e19, t2, n2, r2, i2) || Or(e19, t2, n2, r2, i2[0], i2[1]) || Or(e19, t2, n2, r2, i2[0], i2[3]) || Or(e19, t2, n2, r2, i2[2], i2[1]) || Or(e19, t2, n2, r2, i2[2], i2[3]));
}
function Nr(e19, t2, n2, r2, i2) {
  if (!Mr(e19, t2, n2[0], r2, i2))
    return false;
  if (n2.length === 1)
    return true;
  for (let t3 = 1, a2 = n2.length; t3 < a2; ++t3)
    if (Dr(e19, n2[t3 - 1], n2[t3], r2, i2) && !jr(e19, n2[t3 - 1], n2[t3], r2, i2))
      return false;
  return true;
}
function Pr(e19, t2, n2, r2, i2, a2, o2) {
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
      let n4 = e19[t3], r3 = e19[t3 + 1], i3 = Xe(n4, r3, s3, d2, f2, p2);
      i3 > o3 && (u2 = t3, o3 = i3);
    }
    o3 > i2 && (c2[(u2 - t2) / r2] = 1, a3 + r2 < u2 && l2.push(a3, u2), u2 + r2 < n3 && l2.push(u2, n3));
  }
  for (let n3 = 0; n3 < s2; ++n3)
    c2[n3] && (a2[o2++] = e19[t2 + n3 * r2], a2[o2++] = e19[t2 + n3 * r2 + 1]);
  return o2;
}
function Fr(e19, t2, n2, r2, i2, a2, o2, s2) {
  for (let c2 = 0, l2 = n2.length; c2 < l2; ++c2) {
    let l3 = n2[c2];
    o2 = Pr(e19, t2, l3, r2, i2, a2, o2), s2.push(o2), t2 = l3;
  }
  return o2;
}
function Ir(e19, t2) {
  return t2 * Math.round(e19 / t2);
}
function Lr(e19, t2, n2, r2, i2, a2, o2) {
  if (t2 == n2)
    return o2;
  let s2 = Ir(e19[t2], i2), c2 = Ir(e19[t2 + 1], i2);
  t2 += r2, a2[o2++] = s2, a2[o2++] = c2;
  let l2, u2;
  do
    if (l2 = Ir(e19[t2], i2), u2 = Ir(e19[t2 + 1], i2), t2 += r2, t2 == n2)
      return a2[o2++] = l2, a2[o2++] = u2, o2;
  while (l2 == s2 && u2 == c2);
  for (; t2 < n2; ) {
    let n3 = Ir(e19[t2], i2), d2 = Ir(e19[t2 + 1], i2);
    if (t2 += r2, n3 == l2 && d2 == u2)
      continue;
    let f2 = l2 - s2, p2 = u2 - c2, m2 = n3 - s2, h2 = d2 - c2;
    f2 * h2 == p2 * m2 && (f2 < 0 && m2 < f2 || f2 == m2 || f2 > 0 && m2 > f2) && (p2 < 0 && h2 < p2 || p2 == h2 || p2 > 0 && h2 > p2) ? (l2 = n3, u2 = d2) : (a2[o2++] = l2, a2[o2++] = u2, s2 = l2, c2 = u2, l2 = n3, u2 = d2);
  }
  return a2[o2++] = l2, a2[o2++] = u2, o2;
}
function Rr(e19, t2, n2, r2, i2, a2, o2, s2) {
  for (let c2 = 0, l2 = n2.length; c2 < l2; ++c2) {
    let l3 = n2[c2];
    o2 = Lr(e19, t2, l3, r2, i2, a2, o2), s2.push(o2), t2 = l3;
  }
  return o2;
}
var zr = class e3 extends ur {
  constructor(e19, t2) {
    super(), this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, t2 !== void 0 && !Array.isArray(e19[0]) ? this.setFlatCoordinates(t2, e19) : this.setCoordinates(e19, t2);
  }
  clone() {
    return new e3(this.flatCoordinates.slice(), this.layout);
  }
  closestPointXY(e19, t2, n2, r2) {
    return r2 < _e(this.getExtent(), e19, t2) ? r2 : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(_r(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), yr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, true, e19, t2, n2, r2));
  }
  getArea() {
    return mr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
  }
  getCoordinates() {
    return wr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
  }
  getSimplifiedGeometryInternal(t2) {
    let n2 = [];
    return n2.length = Pr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t2, n2, 0), new e3(n2, `XY`);
  }
  getType() {
    return `LinearRing`;
  }
  intersectsExtent(e19) {
    return jr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, e19);
  }
  setCoordinates(e19, t2) {
    this.setLayout(t2, e19, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Sr(this.flatCoordinates, 0, e19, this.stride), this.changed();
  }
}, Br = class e4 extends ur {
  constructor(e19, t2) {
    super(), this.setCoordinates(e19, t2);
  }
  clone() {
    let t2 = new e4(this.flatCoordinates.slice(), this.layout);
    return t2.applyProperties(this), t2;
  }
  closestPointXY(e19, t2, n2, r2) {
    let i2 = this.flatCoordinates, a2 = Ze(e19, t2, i2[0], i2[1]);
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
    return we(this.flatCoordinates, e19);
  }
  getType() {
    return `Point`;
  }
  intersectsExtent(e19) {
    return be(e19, this.flatCoordinates[0], this.flatCoordinates[1]);
  }
  setCoordinates(e19, t2) {
    this.setLayout(t2, e19, 0), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = xr(this.flatCoordinates, 0, e19, this.stride), this.changed();
  }
};
function Vr(e19, t2, n2, r2, i2, a2, o2) {
  let s2, c2, l2, u2, d2, f2, p2, m2 = i2[a2 + 1], h2 = [];
  for (let i3 = 0, a3 = n2.length; i3 < a3; ++i3) {
    let a4 = n2[i3];
    for (u2 = e19[a4 - r2], f2 = e19[a4 - r2 + 1], s2 = t2; s2 < a4; s2 += r2)
      d2 = e19[s2], p2 = e19[s2 + 1], (m2 <= f2 && p2 <= m2 || f2 <= m2 && m2 <= p2) && (l2 = (m2 - f2) / (p2 - f2) * (d2 - u2) + u2, h2.push(l2)), u2 = d2, f2 = p2;
  }
  let g2 = NaN, _2 = -1 / 0;
  for (h2.sort(v), u2 = h2[0], s2 = 1, c2 = h2.length; s2 < c2; ++s2) {
    d2 = h2[s2];
    let i3 = Math.abs(d2 - u2);
    i3 > _2 && (l2 = (u2 + d2) / 2, kr(e19, t2, n2, r2, l2, m2) && (g2 = l2, _2 = i3)), u2 = d2;
  }
  return isNaN(g2) && (g2 = i2[a2]), o2 ? (o2.push(g2, m2, _2), o2) : [g2, m2, _2];
}
function Hr(e19, t2, n2, r2, i2) {
  let a2 = [];
  for (let o2 = 0, s2 = n2.length; o2 < s2; ++o2) {
    let s3 = n2[o2];
    a2 = Vr(e19, t2, s3, r2, i2, 2 * o2, a2), t2 = s3[s3.length - 1];
  }
  return a2;
}
function Ur(e19, t2, n2, r2) {
  for (; t2 < n2 - r2; ) {
    for (let i2 = 0; i2 < r2; ++i2) {
      let a2 = e19[t2 + i2];
      e19[t2 + i2] = e19[n2 - r2 + i2], e19[n2 - r2 + i2] = a2;
    }
    t2 += r2, n2 -= r2;
  }
}
function Wr(e19, t2, n2, r2) {
  let i2 = 0, a2 = e19[n2 - r2], o2 = e19[n2 - r2 + 1];
  for (; t2 < n2; t2 += r2) {
    let n3 = e19[t2], r3 = e19[t2 + 1];
    i2 += (n3 - a2) * (r3 + o2), a2 = n3, o2 = r3;
  }
  return i2 === 0 ? void 0 : i2 > 0;
}
function Gr(e19, t2, n2, r2, i2) {
  i2 = i2 !== void 0 && i2;
  for (let a2 = 0, o2 = n2.length; a2 < o2; ++a2) {
    let o3 = n2[a2], s2 = Wr(e19, t2, o3, r2);
    if (a2 === 0) {
      if (i2 && s2 || !i2 && !s2)
        return false;
    } else if (i2 && !s2 || !i2 && s2)
      return false;
    t2 = o3;
  }
  return true;
}
function Kr(e19, t2, n2, r2, i2) {
  i2 = i2 !== void 0 && i2;
  for (let a2 = 0, o2 = n2.length; a2 < o2; ++a2) {
    let o3 = n2[a2], s2 = Wr(e19, t2, o3, r2);
    (a2 === 0 ? i2 && s2 || !i2 && !s2 : i2 && !s2 || !i2 && s2) && Ur(e19, t2, o3, r2), t2 = o3;
  }
  return t2;
}
function qr(e19, t2) {
  let n2 = [], r2 = 0, i2 = 0, a2;
  for (let o2 = 0, s2 = t2.length; o2 < s2; ++o2) {
    let s3 = t2[o2], c2 = Wr(e19, r2, s3, 2);
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
var Jr = class e5 extends ur {
  constructor(e19, t2, n2) {
    super(), this.ends_ = [], this.flatInteriorPointRevision_ = -1, this.flatInteriorPoint_ = null, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, this.orientedRevision_ = -1, this.orientedFlatCoordinates_ = null, t2 !== void 0 && n2 ? (this.setFlatCoordinates(t2, e19), this.ends_ = n2) : this.setCoordinates(e19, t2);
  }
  appendLinearRing(e19) {
    this.flatCoordinates ? S(this.flatCoordinates, e19.getFlatCoordinates()) : this.flatCoordinates = e19.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
  }
  clone() {
    let t2 = new e5(this.flatCoordinates.slice(), this.layout, this.ends_.slice());
    return t2.applyProperties(this), t2;
  }
  closestPointXY(e19, t2, n2, r2) {
    return r2 < _e(this.getExtent(), e19, t2) ? r2 : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(vr(this.flatCoordinates, 0, this.ends_, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), br(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, true, e19, t2, n2, r2));
  }
  containsXY(e19, t2) {
    return kr(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, e19, t2);
  }
  getArea() {
    return hr(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride);
  }
  getCoordinates(e19) {
    let t2;
    return e19 === void 0 ? t2 = this.flatCoordinates : (t2 = this.getOrientedFlatCoordinates().slice(), Kr(t2, 0, this.ends_, this.stride, e19)), Tr(t2, 0, this.ends_, this.stride);
  }
  getEnds() {
    return this.ends_;
  }
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      let e19 = Fe(this.getExtent());
      this.flatInteriorPoint_ = Vr(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, e19, 0), this.flatInteriorPointRevision_ = this.getRevision();
    }
    return this.flatInteriorPoint_;
  }
  getInteriorPoint() {
    return new Br(this.getFlatInteriorPoint(), `XYM`);
  }
  getLinearRingCount() {
    return this.ends_.length;
  }
  getLinearRing(e19) {
    return e19 < 0 || this.ends_.length <= e19 ? null : new zr(this.flatCoordinates.slice(e19 === 0 ? 0 : this.ends_[e19 - 1], this.ends_[e19]), this.layout);
  }
  getLinearRings() {
    let e19 = this.layout, t2 = this.flatCoordinates, n2 = this.ends_, r2 = [], i2 = 0;
    for (let a2 = 0, o2 = n2.length; a2 < o2; ++a2) {
      let o3 = n2[a2], s2 = new zr(t2.slice(i2, o3), e19);
      r2.push(s2), i2 = o3;
    }
    return r2;
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      let e19 = this.flatCoordinates;
      Gr(e19, 0, this.ends_, this.stride) ? this.orientedFlatCoordinates_ = e19 : (this.orientedFlatCoordinates_ = e19.slice(), this.orientedFlatCoordinates_.length = Kr(this.orientedFlatCoordinates_, 0, this.ends_, this.stride)), this.orientedRevision_ = this.getRevision();
    }
    return this.orientedFlatCoordinates_;
  }
  getSimplifiedGeometryInternal(t2) {
    let n2 = [], r2 = [];
    return n2.length = Rr(this.flatCoordinates, 0, this.ends_, this.stride, Math.sqrt(t2), n2, 0, r2), new e5(n2, `XY`, r2);
  }
  getType() {
    return `Polygon`;
  }
  intersectsExtent(e19) {
    return Nr(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, e19);
  }
  setCoordinates(e19, t2) {
    this.setLayout(t2, e19, 2), this.flatCoordinates || (this.flatCoordinates = []);
    let n2 = Cr(this.flatCoordinates, 0, e19, this.stride, this.ends_);
    this.flatCoordinates.length = n2.length === 0 ? 0 : n2[n2.length - 1], this.changed();
  }
};
function Yr(e19) {
  if (We(e19))
    throw Error(`Cannot create polygon from empty extent`);
  let t2 = e19[0], n2 = e19[1], r2 = e19[2], i2 = e19[3], a2 = [t2, n2, t2, i2, r2, i2, r2, n2, t2, n2];
  return new Jr(a2, `XY`, [a2.length]);
}
var R = {IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4}, Xr = typeof navigator < `u` && navigator.userAgent !== void 0 ? navigator.userAgent.toLowerCase() : ``;
Xr.includes(`safari`) && !Xr.includes(`chrom`) && (Xr.includes(`version/15.4`) || /cpu (os|iphone os) 15_4 like mac os x/.test(Xr));
var Zr = Xr.includes(`webkit`) && !Xr.includes(`edge`), Qr = Xr.includes(`macintosh`), $r = typeof devicePixelRatio < `u` ? devicePixelRatio : 1, ei = typeof WorkerGlobalScope < `u` && typeof OffscreenCanvas < `u` && self instanceof WorkerGlobalScope, ti = typeof Image < `u` && Image.prototype.decode, ni = function() {
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
function ri(e19, t2, n2) {
  let r2 = e19, i2 = true, a2 = false, o2 = false, s2 = [p(r2, h.LOAD, function() {
    o2 = true, a2 || t2();
  })];
  return r2.src && ti ? (a2 = true, r2.decode().then(function() {
    i2 && t2();
  }).catch(function(e20) {
    i2 && (o2 ? t2() : n2());
  })) : s2.push(p(r2, h.ERROR, n2)), function() {
    i2 = false, s2.forEach(m);
  };
}
function ii(e19, t2) {
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
function ai(e19, t2) {
  return t2 && (e19.src = t2), e19.src && ti ? new Promise((t3, n2) => e19.decode().then(() => t3(e19)).catch((r2) => e19.complete && e19.width ? t3(e19) : n2(r2))) : ii(e19);
}
var z = {IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4};
function oi(e19) {
  return e19 ** 3;
}
function si(e19) {
  return 1 - oi(1 - e19);
}
function ci(e19) {
  return 3 * e19 * e19 - 2 * e19 * e19 * e19;
}
function li(e19) {
  return e19;
}
var ui = class extends ie {
  constructor(e19, t2, n2) {
    super(), n2 || (n2 = {}), this.tileCoord = e19, this.state = t2, this.key = ``, this.transition_ = n2.transition === void 0 ? 250 : n2.transition, this.transitionStarts_ = {}, this.interpolate = !!n2.interpolate;
  }
  changed() {
    this.dispatchEvent(h.CHANGE);
  }
  release() {
    this.setState(z.EMPTY);
  }
  getKey() {
    return this.key + `/` + this.tileCoord;
  }
  getTileCoord() {
    return this.tileCoord;
  }
  getState() {
    return this.state;
  }
  setState(e19) {
    if (this.state !== z.EMPTY) {
      if (this.state !== z.ERROR && this.state > e19)
        throw Error(`Tile load sequence violation`);
      this.state = e19, this.changed();
    }
  }
  load() {
    T();
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
    return r2 >= this.transition_ ? 1 : oi(r2 / this.transition_);
  }
  inTransition(e19) {
    return this.transition_ ? this.transitionStarts_[e19] !== -1 : false;
  }
  endTransition(e19) {
    this.transition_ && (this.transitionStarts_[e19] = -1);
  }
  disposeInternal() {
    this.release(), super.disposeInternal();
  }
};
function B(e19, t2, n2, r2) {
  let i2;
  return i2 = n2 && n2.length ? n2.shift() : ei ? new class extends OffscreenCanvas {
    style = {};
  }(e19 ?? 300, t2 ?? 150) : document.createElement(`canvas`), e19 && (i2.width = e19), t2 && (i2.height = t2), i2.getContext(`2d`, r2);
}
var di;
function fi() {
  return di || (di = B(1, 1)), di;
}
function pi(e19) {
  let t2 = e19.canvas;
  t2.width = 1, t2.height = 1, e19.clearRect(0, 0, 1, 1);
}
function mi(e19, t2) {
  let n2 = t2.parentNode;
  n2 && n2.replaceChild(e19, t2);
}
function hi(e19) {
  for (; e19.lastChild; )
    e19.lastChild.remove();
}
function gi(e19, t2) {
  let n2 = e19.childNodes;
  for (let r2 = 0; ; ++r2) {
    let i2 = n2[r2], a2 = t2[r2];
    if (!i2 && !a2)
      break;
    i2 !== a2 && (i2 ? a2 ? e19.insertBefore(a2, i2) : (e19.removeChild(i2), --r2) : e19.appendChild(a2));
  }
}
function _i() {
  return new Proxy({childNodes: [], appendChild: function(e19) {
    return this.childNodes.push(e19), e19;
  }, remove: function() {
  }, removeChild: function(e19) {
    let t2 = this.childNodes.indexOf(e19);
    if (t2 === -1)
      throw Error(`Node to remove was not found`);
    return this.childNodes.splice(t2, 1), e19;
  }, insertBefore: function(e19, t2) {
    let n2 = this.childNodes.indexOf(t2);
    if (n2 === -1)
      throw Error(`Reference node not found`);
    return this.childNodes.splice(n2, 0, e19), e19;
  }, style: {}}, {get(e19, t2, n2) {
    return t2 === `firstElementChild` ? e19.childNodes.length > 0 ? e19.childNodes[0] : null : Reflect.get(e19, t2, n2);
  }});
}
function vi(e19) {
  return typeof HTMLCanvasElement < `u` && e19 instanceof HTMLCanvasElement || typeof OffscreenCanvas < `u` && e19 instanceof OffscreenCanvas;
}
var yi = class extends ui {
  constructor(e19, t2, n2, r2, i2, a2) {
    super(e19, t2, a2), this.crossOrigin_ = r2?.crossOrigin, this.referrerPolicy_ = r2?.referrerPolicy, this.src_ = n2, this.key = n2, this.image_, ei ? this.image_ = new OffscreenCanvas(1, 1) : (this.image_ = new Image(), this.crossOrigin_ !== null && this.crossOrigin_ !== void 0 && (this.image_.crossOrigin = this.crossOrigin_), this.referrerPolicy_ !== void 0 && (this.image_.referrerPolicy = this.referrerPolicy_)), this.unlisten_ = null, this.tileLoadFunction_ = i2;
  }
  getImage() {
    return this.image_;
  }
  setImage(e19) {
    this.image_ = e19, this.state = z.LOADED, this.unlistenImage_(), this.changed();
  }
  getCrossOrigin() {
    return this.crossOrigin_ ?? null;
  }
  getReferrerPolicy() {
    return this.referrerPolicy_;
  }
  handleImageError_() {
    this.state = z.ERROR, this.unlistenImage_(), this.image_ = bi(), this.changed();
  }
  handleImageLoad_() {
    if (ei)
      this.state = z.LOADED;
    else {
      let e19 = this.image_;
      this.state = e19.naturalWidth && e19.naturalHeight ? z.LOADED : z.EMPTY;
    }
    this.unlistenImage_(), this.changed();
  }
  load() {
    if (this.state == z.ERROR && (this.state = z.IDLE, this.image_ = new Image(), this.crossOrigin_ !== null && this.crossOrigin_ !== void 0 && (this.image_.crossOrigin = this.crossOrigin_), this.referrerPolicy_ !== void 0 && (this.image_.referrerPolicy = this.referrerPolicy_)), this.state == z.IDLE) {
      this.state = z.LOADING, this.changed(), this.tileLoadFunction_(this, this.src_);
      let e19 = this.image_;
      e19 && (this.unlisten_ = ri(e19, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this)));
    }
  }
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_ = (this.unlisten_(), null));
  }
  disposeInternal() {
    this.unlistenImage_(), this.image_ = null, super.disposeInternal();
  }
};
function bi() {
  let e19 = B(1, 1);
  return e19.fillStyle = `rgba(0,0,0,0)`, e19.fillRect(0, 0, 1, 1), e19.canvas;
}
var xi = class {
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
};
function Si(e19, t2, n2, r2, i2, a2, o2) {
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
    let d2 = i2 * l3, f2 = _(u2, d2);
    f2 < 0 ? (c2 = (d2 - u2[-f2 - 2]) / (u2[-f2 - 1] - u2[-f2 - 2]), s2 = t2 + (-f2 - 2) * r2) : s2 = t2 + f2 * r2;
  }
  o2 = o2 !== void 0 && o2 > 1 ? o2 : 2, a2 || (a2 = Array(o2));
  for (let t3 = 0; t3 < o2; ++t3)
    a2[t3] = s2 === void 0 ? NaN : c2 === void 0 ? e19[s2 + t3] : nt(e19[s2 + t3], e19[s2 + r2 + t3], c2);
  return a2;
}
function Ci(e19, t2, n2, r2) {
  let i2 = e19[t2], a2 = e19[t2 + 1], o2 = 0;
  for (let s2 = t2 + r2; s2 < n2; s2 += r2) {
    let t3 = e19[s2], n3 = e19[s2 + 1];
    o2 += Math.sqrt((t3 - i2) * (t3 - i2) + (n3 - a2) * (n3 - a2)), i2 = t3, a2 = n3;
  }
  return o2;
}
var wi = [NaN, NaN, NaN, 0], Ti;
function Ei() {
  return Ti || (Ti = B(1, 1, void 0, {willReadFrequently: true, desynchronized: true})), Ti;
}
var Di = /^rgba?\(\s*(\d+%?)\s+(\d+%?)\s+(\d+%?)(?:\s*\/\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i, Oi = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i, ki = /^rgba?\(\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i, Ai = /^#([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i;
function ji(e19, t2) {
  return e19.endsWith(`%`) ? Number(e19.substring(0, e19.length - 1)) / t2 : Number(e19);
}
function Mi(e19) {
  throw Error(`failed to parse "` + e19 + `" as color`);
}
function Ni(e19) {
  if (e19.toLowerCase().startsWith(`rgb`)) {
    let t3 = e19.match(Oi) || e19.match(Di) || e19.match(ki);
    if (t3) {
      let e20 = t3[4], n3 = 100 / 255;
      return [I(ji(t3[1], n3) + 0.5 | 0, 0, 255), I(ji(t3[2], n3) + 0.5 | 0, 0, 255), I(ji(t3[3], n3) + 0.5 | 0, 0, 255), e20 === void 0 ? 1 : I(ji(e20, 100), 0, 1)];
    }
    Mi(e19);
  }
  if (e19.startsWith(`#`)) {
    if (Ai.test(e19)) {
      let t3 = e19.substring(1), n3 = t3.length <= 4 ? 1 : 2, r3 = [0, 0, 0, 255];
      for (let e20 = 0, i3 = t3.length; e20 < i3; e20 += n3) {
        let i4 = parseInt(t3.substring(e20, e20 + n3), 16);
        n3 === 1 && (i4 += i4 << 4), r3[e20 / n3] = i4;
      }
      return r3[3] /= 255, r3;
    }
    Mi(e19);
  }
  let t2 = Ei();
  t2.fillStyle = `#abcdef`;
  let n2 = t2.fillStyle;
  t2.fillStyle = e19, t2.fillStyle === n2 && (t2.fillStyle = `#fedcba`, n2 = t2.fillStyle, t2.fillStyle = e19, t2.fillStyle === n2 && Mi(e19));
  let r2 = t2.fillStyle;
  if (r2.startsWith(`#`) || r2.startsWith(`rgba`))
    return Ni(r2);
  t2.clearRect(0, 0, 1, 1), t2.fillRect(0, 0, 1, 1);
  let i2 = Array.from(t2.getImageData(0, 0, 1, 1).data);
  return i2[3] = rt(i2[3] / 255, 3), i2;
}
function Pi(e19) {
  return typeof e19 == `string` ? e19 : qi(e19);
}
var Fi = 1024, Ii = {}, Li = 0;
function Ri(e19) {
  if (e19.length === 4)
    return e19;
  let t2 = e19.slice();
  return t2[3] = 1, t2;
}
function zi(e19) {
  return e19 > 31308e-7 ? e19 ** (1 / 2.4) * 269.025 - 14.025 : e19 * 3294.6;
}
function Bi(e19) {
  return e19 > 0.2068965 ? e19 ** 3 : (e19 - 4 / 29) * (108 / 841);
}
function Vi(e19) {
  return e19 > 10.314724 ? ((e19 + 14.025) / 269.025) ** 2.4 : e19 / 3294.6;
}
function Hi(e19) {
  return e19 > 88564e-7 ? e19 ** (1 / 3) : e19 / (108 / 841) + 4 / 29;
}
function Ui(e19) {
  let t2 = Vi(e19[0]), n2 = Vi(e19[1]), r2 = Vi(e19[2]), i2 = Hi(t2 * 0.222488403 + n2 * 0.716873169 + r2 * 0.06060791), a2 = 500 * (Hi(t2 * 0.452247074 + n2 * 0.399439023 + r2 * 0.148375274) - i2), o2 = 200 * (i2 - Hi(t2 * 0.016863605 + n2 * 0.117638439 + r2 * 0.865350722)), s2 = 180 / Math.PI * Math.atan2(o2, a2);
  return [116 * i2 - 16, Math.sqrt(a2 * a2 + o2 * o2), s2 < 0 ? s2 + 360 : s2, e19[3]];
}
function Wi(e19) {
  let t2 = (e19[0] + 16) / 116, n2 = e19[1], r2 = e19[2] * Math.PI / 180, i2 = Bi(t2), a2 = Bi(t2 + n2 / 500 * Math.cos(r2)), o2 = Bi(t2 - n2 / 200 * Math.sin(r2)), s2 = zi(a2 * 3.021973625 - i2 * 1.617392459 - o2 * 0.404875592), c2 = zi(a2 * -0.943766287 + i2 * 1.916279586 + o2 * 0.027607165), l2 = zi(a2 * 0.069407491 - i2 * 0.22898585 + o2 * 1.159737864);
  return [I(s2 + 0.5 | 0, 0, 255), I(c2 + 0.5 | 0, 0, 255), I(l2 + 0.5 | 0, 0, 255), e19[3]];
}
function Gi(e19) {
  if (e19 === `none`)
    return wi;
  if (Ii.hasOwnProperty(e19))
    return Ii[e19];
  if (Li >= Fi) {
    let e20 = 0;
    for (let t3 in Ii)
      e20++ & 3 || (delete Ii[t3], --Li);
  }
  let t2 = Ni(e19);
  t2.length !== 4 && Mi(e19);
  for (let n2 of t2)
    isNaN(n2) && Mi(e19);
  return Ii[e19] = t2, ++Li, t2;
}
function Ki(e19) {
  return Array.isArray(e19) ? e19 : Gi(e19);
}
function qi(e19) {
  let t2 = e19[0];
  t2 != (t2 | 0) && (t2 = t2 + 0.5 | 0);
  let n2 = e19[1];
  n2 != (n2 | 0) && (n2 = n2 + 0.5 | 0);
  let r2 = e19[2];
  r2 != (r2 | 0) && (r2 = r2 + 0.5 | 0);
  let i2 = e19[3] === void 0 ? 1 : Math.round(e19[3] * 1e3) / 1e3;
  return `rgba(` + t2 + `,` + n2 + `,` + r2 + `,` + i2 + `)`;
}
var Ji = class {
  constructor() {
    this.cache_ = {}, this.patternCache_ = {}, this.cacheSize_ = 0, this.maxCacheSize_ = 1024;
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
  get(e19, t2) {
    let n2 = Yi(e19, t2);
    return n2 in this.cache_ ? this.cache_[n2] : null;
  }
  getPattern(e19, t2) {
    let n2 = Yi(e19, t2);
    return n2 in this.patternCache_ ? this.patternCache_[n2] : null;
  }
  set(e19, t2, n2, r2) {
    let i2 = Yi(e19, t2), a2 = i2 in this.cache_;
    if (n2 && (this.cache_[i2] = n2), r2 && n2) {
      if (n2.getImageState() === R.IDLE && n2.load(), n2.getImageState() === R.LOADING)
        n2.ready().then(() => {
          let e20 = fi().createPattern(n2.getImage(1), `repeat`);
          e20 && (this.patternCache_[i2] = e20);
        });
      else {
        let e20 = fi().createPattern(n2.getImage(1), `repeat`);
        e20 && (this.patternCache_[i2] = e20);
      }
    }
    a2 || ++this.cacheSize_;
  }
  setSize(e19) {
    this.maxCacheSize_ = e19, this.expire();
  }
};
function Yi(e19, t2) {
  let n2 = t2 ? Ki(t2) : `null`;
  return e19 + `:` + n2;
}
var Xi = new Ji(), Zi = null, Qi = class extends ie {
  constructor(e19, t2, n2, r2, i2) {
    super(), this.hitDetectionImage_ = null, this.image_ = e19, this.crossOrigin_ = n2?.crossOrigin ?? null, this.referrerPolicy_ = n2?.referrerPolicy, this.canvas_ = {}, this.color_ = i2, this.imageState_ = r2 === void 0 ? R.IDLE : r2, this.size_ = e19 && e19.width && e19.height ? [e19.width, e19.height] : null, this.src_ = t2, this.tainted_, this.ready_ = null;
  }
  initializeImage_() {
    this.image_ = new Image(), this.crossOrigin_ !== null && (this.image_.crossOrigin = this.crossOrigin_), this.referrerPolicy_ !== void 0 && (this.image_.referrerPolicy = this.referrerPolicy_);
  }
  isTainted_() {
    if (this.tainted_ === void 0 && this.imageState_ === R.LOADED) {
      let e19 = this.image_;
      if (!e19)
        return false;
      Zi || (Zi = B(1, 1, void 0, {willReadFrequently: true})), Zi.drawImage(e19, 0, 0);
      try {
        Zi.getImageData(0, 0, 1, 1), this.tainted_ = false;
      } catch {
        Zi = null, this.tainted_ = true;
      }
    }
    return this.tainted_ === true;
  }
  dispatchChangeEvent_() {
    this.dispatchEvent(h.CHANGE);
  }
  handleImageError_() {
    this.imageState_ = R.ERROR, this.dispatchChangeEvent_();
  }
  handleImageLoad_() {
    this.imageState_ = R.LOADED;
    let e19 = this.image_;
    e19 && `width` in e19 && `height` in e19 && (this.size_ = [e19.width, e19.height]), this.dispatchChangeEvent_();
  }
  getImage(e19) {
    this.image_ || this.initializeImage_(), this.replaceColor_(e19);
    let t2 = this.image_;
    return this.canvas_[e19] ? this.canvas_[e19] : t2;
  }
  setImage(e19) {
    this.image_ = e19;
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
        let e19 = this.size_;
        if (!e19)
          return this.image_;
        let t2 = e19[0], n2 = e19[1], r2 = B(t2, n2);
        r2.fillRect(0, 0, t2, n2), this.hitDetectionImage_ = r2.canvas;
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
    if (this.imageState_ === R.IDLE) {
      this.image_ || this.initializeImage_(), this.imageState_ = R.LOADING;
      try {
        this.src_ !== void 0 && (this.image_.src = this.src_);
      } catch {
        this.handleImageError_();
      }
      this.image_ instanceof HTMLImageElement && ai(this.image_, this.src_).then((e19) => {
        this.image_ = e19, this.handleImageLoad_();
      }).catch(this.handleImageError_.bind(this));
    }
  }
  replaceColor_(e19) {
    if (!this.color_ || this.canvas_[e19] || this.imageState_ !== R.LOADED)
      return;
    let t2 = this.image_;
    if (!t2)
      return;
    let n2 = B(Math.ceil(t2.width * e19), Math.ceil(t2.height * e19)), r2 = n2.canvas;
    n2.scale(e19, e19), n2.drawImage(t2, 0, 0), n2.globalCompositeOperation = `multiply`, n2.fillStyle = Pi(this.color_), n2.fillRect(0, 0, r2.width / e19, r2.height / e19), n2.globalCompositeOperation = `destination-in`, n2.drawImage(t2, 0, 0), this.canvas_[e19] = r2;
  }
  ready() {
    return this.ready_ || (this.ready_ = new Promise((e19) => {
      if (this.imageState_ === R.LOADED || this.imageState_ === R.ERROR)
        e19();
      else {
        let t2 = () => {
          (this.imageState_ === R.LOADED || this.imageState_ === R.ERROR) && (this.removeEventListener(h.CHANGE, t2), e19());
        };
        this.addEventListener(h.CHANGE, t2);
      }
    })), this.ready_;
  }
};
function $i(e19, t2, n2, r2, i2, a2) {
  let o2 = t2 === void 0 ? void 0 : Xi.get(t2, i2);
  return o2 || (o2 = new Qi(e19, e19 && `src` in e19 ? e19.src || void 0 : t2, n2, r2, i2), t2 !== void 0 && Xi.set(t2, i2, o2, a2)), a2 && o2 && t2 !== void 0 && !Xi.getPattern(t2, i2) && Xi.set(t2, i2, o2, a2), o2;
}
function ea(e19) {
  return e19 ? Array.isArray(e19) ? qi(e19) : typeof e19 == `object` && `src` in e19 ? ta(e19) : e19 : null;
}
function ta(e19) {
  if (!e19.offset || !e19.size)
    return Xi.getPattern(e19.src, e19.color ?? null);
  let t2 = e19.src + `:` + e19.offset, n2 = Xi.getPattern(t2, e19.color ?? null);
  if (n2)
    return n2;
  let r2 = Xi.get(e19.src, null);
  if (!r2 || r2.getImageState() !== R.LOADED)
    return null;
  let i2 = B(e19.size[0], e19.size[1]);
  return i2.drawImage(r2.getImage(1), e19.offset[0], e19.offset[1], e19.size[0], e19.size[1], 0, 0, e19.size[0], e19.size[1]), $i(i2.canvas, t2, {}, R.LOADED, e19.color ?? null, true), Xi.getPattern(t2, e19.color ?? null);
}
function na(e19, t2, n2, r2, i2, a2, o2, s2) {
  o2 ?? (o2 = []), s2 ?? (s2 = r2);
  let c2 = e19[t2 + r2], l2 = e19[t2 + r2 + 1], u2 = e19[n2 - 2 * r2], d2 = e19[n2 - 2 * r2 + 1], f2, p2, m2, h2, g2, _2, v2, y2, b2 = 0;
  for (let x2 = t2; x2 < n2; x2 += r2) {
    m2 = f2, h2 = p2, g2 = void 0, _2 = void 0, x2 + r2 < n2 && (g2 = e19[x2 + r2], _2 = e19[x2 + r2 + 1]), a2 && x2 === t2 && (m2 = u2, h2 = d2), a2 && x2 === n2 - r2 && (g2 = c2, _2 = l2), f2 = e19[x2], p2 = e19[x2 + 1], [v2, y2] = ra(f2, p2, m2, h2, g2, _2, i2), o2[b2++] = v2, o2[b2++] = y2;
    for (let t3 = 2; t3 < s2; t3++)
      o2[b2++] = e19[x2 + t3];
  }
  return o2.length != b2 && (o2.length = b2), o2;
}
function ra(e19, t2, n2, r2, i2, a2, o2) {
  let s2, c2;
  n2 !== void 0 && r2 !== void 0 ? (s2 = e19 - n2, c2 = t2 - r2) : i2 !== void 0 && a2 !== void 0 ? (s2 = i2 - e19, c2 = a2 - t2) : (s2 = 1, c2 = 0);
  let l2 = Math.hypot(s2, c2), u2 = s2 / l2, d2 = c2 / l2;
  if (s2 = -d2, c2 = u2, n2 === void 0 || r2 === void 0 || i2 === void 0 || a2 === void 0)
    return [e19 + s2 * o2, t2 + c2 * o2];
  let f2 = vt([e19, t2], [n2, r2], [i2, a2]);
  if (Math.cos(f2) > 0.998)
    return [e19 + u2 * o2, t2 + d2 * o2];
  let p2 = Math.cos(f2 / 2), m2 = Math.sin(f2 / 2), h2 = m2 * s2 + p2 * c2, g2 = -p2 * s2 + m2 * c2, _2 = 1 / m2 * h2, v2 = 1 / m2 * g2;
  return [e19 + _2 * o2, t2 + v2 * o2];
}
function ia(e19, t2, n2 = false) {
  for (let r2 = 0, i2 = e19.length - 2; r2 < i2; r2 += t2) {
    let i3 = n2 && r2 === 0 ? e19.length - 3 * t2 : e19.length - 2 * t2;
    for (let n3 = i3; n3 > r2 + t2; n3 -= t2) {
      let i4 = e19[r2], a2 = e19[r2 + 1], o2 = e19[r2 + t2], s2 = e19[r2 + t2 + 1], c2 = e19[n3], l2 = e19[n3 + 1], u2 = e19[n3 + t2], d2 = e19[n3 + t2 + 1], f2 = (d2 - l2) * (o2 - i4) - (u2 - c2) * (s2 - a2);
      if (f2 === 0)
        continue;
      let p2 = ((u2 - c2) * (a2 - l2) - (d2 - l2) * (i4 - c2)) / f2, m2 = ((o2 - i4) * (a2 - l2) - (s2 - a2) * (i4 - c2)) / f2;
      if (p2 > 0 && p2 < 1 && m2 > 0 && m2 < 1) {
        let c3 = i4 + p2 * (o2 - i4), l3 = a2 + p2 * (s2 - a2);
        e19[r2 + t2] = c3, e19[r2 + t2 + 1] = l3, e19.splice(r2 + 2 * t2, n3 - r2 - t2);
        break;
      }
    }
  }
  return e19;
}
var aa = class {
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
}, oa = `ol-hidden`, sa = `ol-unselectable`, ca = `ol-control`, la = `ol-collapsed`, ua = RegExp(`^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))?\\s*([-,\\"\\'\\sa-z0-9]+?)\\s*$`, `i`), da = [`style`, `variant`, `weight`, `size`, `lineHeight`, `family`], fa = {normal: 400, bold: 700}, pa = function(e19) {
  let t2 = e19.match(ua);
  if (!t2)
    return null;
  let n2 = {lineHeight: `normal`, size: `1.2em`, style: `normal`, weight: `400`, variant: `normal`};
  for (let e20 = 0, r2 = da.length; e20 < r2; ++e20) {
    let r3 = t2[e20 + 1];
    r3 !== void 0 && (n2[da[e20]] = typeof r3 == `string` ? r3.trim() : r3);
  }
  return isNaN(Number(n2.weight)) && n2.weight in fa && (n2.weight = fa[n2.weight]), n2.families = n2.family.split(/,\s?/).map((e20) => e20.trim().replace(/^['"]|['"]$/g, ``)), n2;
}, ma = `10px sans-serif`, ha = `#000`, ga = `round`, _a = [], va = `round`, ya = `#000`, ba = `center`, xa = `middle`, Sa = [0, 0, 0, 0], Ca = new ce(), wa = null, Ta, Ea = {}, Da = new Set([`serif`, `sans-serif`, `monospace`, `cursive`, `fantasy`, `system-ui`, `ui-serif`, `ui-sans-serif`, `ui-monospace`, `ui-rounded`, `emoji`, `math`, `fangsong`]);
function Oa(e19, t2, n2) {
  return `${e19} ${t2} 16px "${n2}"`;
}
var ka = function() {
  let e19, t2;
  async function n2(e20) {
    await t2.ready;
    let n3 = pa(e20);
    if (!n3)
      return false;
    let r3 = n3.families[0].toLowerCase(), i2 = n3.weight, a2 = [];
    return t2.forEach((e21) => {
      let t3 = e21.family.replace(/^['"]|['"]$/g, ``).toLowerCase(), o2 = fa[e21.weight] || e21.weight;
      t3 === r3 && e21.style === n3.style && o2 == i2 && a2.push(e21);
    }), a2.length !== 0 && (await Promise.all(a2.map((e21) => e21.load().then(() => true, () => false)))).some((e21) => e21);
  }
  async function r2() {
    await t2.ready;
    let i2 = true, a2 = Ca.getProperties(), o2 = Object.keys(a2).filter((e20) => a2[e20] < 100);
    for (let e20 = o2.length - 1; e20 >= 0; --e20) {
      let t3 = o2[e20], r3 = a2[t3];
      r3 < 100 && (await n2(t3) ? (u(Ea), Ca.set(t3, 100)) : (r3 += 10, Ca.set(t3, r3, true), r3 < 100 && (i2 = false)));
    }
    e19 = void 0, i2 || (e19 = setTimeout(r2, 100));
  }
  return async function(n3) {
    t2 || (t2 = ei ? self.fonts : document.fonts);
    let i2 = pa(n3);
    if (!i2)
      return;
    let a2 = i2.families, o2 = false;
    for (let e20 of a2) {
      if (Da.has(e20))
        continue;
      let t3 = Oa(i2.style, i2.weight, e20);
      Ca.get(t3) === void 0 && (Ca.set(t3, 0, true), o2 = true);
    }
    o2 && (clearTimeout(e19), e19 = setTimeout(r2, 100));
  };
}(), Aa = function() {
  let e19;
  return function(t2) {
    let n2 = Ea[t2];
    if (n2 == null) {
      if (ei) {
        let e20 = pa(t2), r2 = ja(t2, `\u017Dg`);
        n2 = (!e20 || isNaN(Number(e20.lineHeight)) ? 1.2 : Number(e20.lineHeight)) * (r2.actualBoundingBoxAscent + r2.actualBoundingBoxDescent);
      } else
        e19 || (e19 = document.createElement(`div`), e19.innerHTML = `M`, e19.style.minHeight = `0`, e19.style.maxHeight = `none`, e19.style.height = `auto`, e19.style.padding = `0`, e19.style.border = `none`, e19.style.position = `absolute`, e19.style.display = `block`, e19.style.left = `-99999px`), e19.style.font = t2, document.body.appendChild(e19), n2 = e19.offsetHeight, document.body.removeChild(e19);
      Ea[t2] = n2;
    }
    return n2;
  };
}();
function ja(e19, t2) {
  return wa || (wa = B(1, 1)), e19 != Ta && (wa.font = e19, Ta = wa.font), wa.measureText(t2);
}
function Ma(e19, t2) {
  return ja(e19, t2).width;
}
function Na(e19, t2, n2) {
  if (t2 in n2)
    return n2[t2];
  let r2 = t2.split(`
`).reduce((t3, n3) => Math.max(t3, Ma(e19, n3)), 0);
  return n2[t2] = r2, r2;
}
function Pa(e19, t2) {
  let n2 = [], r2 = [], i2 = [], a2 = 0, o2 = 0, s2 = 0, c2 = 0;
  for (let l2 = 0, u2 = t2.length; l2 <= u2; l2 += 2) {
    let d2 = t2[l2];
    if (d2 === `
` || l2 === u2) {
      a2 = Math.max(a2, o2), i2.push(o2), o2 = 0, s2 += c2, c2 = 0;
      continue;
    }
    let f2 = t2[l2 + 1] || e19.font, p2 = Ma(f2, d2);
    n2.push(p2), o2 += p2;
    let m2 = Aa(f2);
    r2.push(m2), c2 = Math.max(c2, m2);
  }
  return {width: a2, height: s2, widths: n2, heights: r2, lineWidths: i2};
}
function Fa(e19, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2) {
  e19.save(), n2 !== 1 && (e19.globalAlpha === void 0 ? e19.globalAlpha = function(e20) {
    return e20.globalAlpha *= n2;
  } : e19.globalAlpha *= n2), t2 && e19.transform.apply(e19, t2), r2.contextInstructions ? (e19.translate(c2, l2), e19.scale(u2[0], u2[1]), Ia(r2, e19)) : u2[0] < 0 || u2[1] < 0 ? (e19.translate(c2, l2), e19.scale(u2[0], u2[1]), e19.drawImage(r2, i2, a2, o2, s2, 0, 0, o2, s2)) : e19.drawImage(r2, i2, a2, o2, s2, c2, l2, o2 * u2[0], s2 * u2[1]), e19.restore();
}
function Ia(e19, t2) {
  let n2 = t2, r2 = e19.contextInstructions;
  for (let e20 = 0, t3 = r2.length; e20 < t3; e20 += 2)
    if (Array.isArray(r2[e20 + 1]))
      n2[r2[e20]].apply(n2, r2[e20 + 1]);
    else {
      let t4 = r2[e20];
      n2[t4] = r2[e20 + 1];
    }
}
var La = class extends aa {
  constructor(e19, t2, n2, r2, i2, a2, o2) {
    super(), this.context_ = e19, this.pixelRatio_ = t2, this.extent_ = n2, this.transform_ = r2, this.transformRotation_ = r2 ? rt(Math.atan2(r2[1], r2[0]), 10) : 0, this.viewRotation_ = i2, this.squaredTolerance_ = a2, this.userTransform_ = o2, this.contextFillState_ = null, this.contextStrokeState_ = null, this.contextTextState_ = null, this.fillState_ = null, this.strokeState_ = null, this.image_ = null, this.imageAnchorX_ = 0, this.imageAnchorY_ = 0, this.imageHeight_ = 0, this.imageOpacity_ = 0, this.imageOriginX_ = 0, this.imageOriginY_ = 0, this.imageRotateWithView_ = false, this.imageRotation_ = 0, this.imageScale_ = [0, 0], this.imageWidth_ = 0, this.text_ = ``, this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = false, this.textRotation_ = 0, this.textScale_ = [0, 0], this.textFillState_ = null, this.textStrokeState_ = null, this.textState_ = null, this.pixelCoordinates_ = [], this.tmpLocalTransform_ = Jn();
  }
  drawImages_(e19, t2, n2, r2) {
    if (!this.image_)
      return;
    let i2 = rr(e19, t2, n2, r2, this.transform_, this.pixelCoordinates_), a2 = this.context_, o2 = this.tmpLocalTransform_, s2 = a2.globalAlpha;
    this.imageOpacity_ != 1 && (a2.globalAlpha = s2 * this.imageOpacity_);
    let c2 = this.imageRotation_;
    this.transformRotation_ === 0 && (c2 -= this.viewRotation_), this.imageRotateWithView_ && (c2 += this.viewRotation_);
    for (let e20 = 0, t3 = i2.length; e20 < t3; e20 += 2) {
      let t4 = i2[e20] - this.imageAnchorX_, n3 = i2[e20 + 1] - this.imageAnchorY_;
      if (c2 !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
        let e21 = t4 + this.imageAnchorX_, r3 = n3 + this.imageAnchorY_;
        Xn(o2, e21, r3, 1, 1, c2, -e21, -r3), a2.save(), a2.transform.apply(a2, o2), a2.translate(e21, r3), a2.scale(this.imageScale_[0], this.imageScale_[1]), a2.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, -this.imageAnchorX_, -this.imageAnchorY_, this.imageWidth_, this.imageHeight_), a2.restore();
      } else
        a2.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, t4, n3, this.imageWidth_, this.imageHeight_);
    }
    this.imageOpacity_ != 1 && (a2.globalAlpha = s2);
  }
  drawText_(e19, t2, n2, r2) {
    if (!this.textState_ || this.text_ === ``)
      return;
    this.textFillState_ && this.setContextFillState_(this.textFillState_), this.textStrokeState_ && this.setContextStrokeState_(this.textStrokeState_), this.setContextTextState_(this.textState_);
    let i2 = rr(e19, t2, n2, r2, this.transform_, this.pixelCoordinates_), a2 = this.context_, o2 = this.textRotation_;
    for (this.transformRotation_ === 0 && (o2 -= this.viewRotation_), this.textRotateWithView_ && (o2 += this.viewRotation_); t2 < n2; t2 += r2) {
      let e20 = i2[t2] + this.textOffsetX_, n3 = i2[t2 + 1] + this.textOffsetY_;
      o2 !== 0 || this.textScale_[0] != 1 || this.textScale_[1] != 1 ? (a2.save(), a2.translate(e20 - this.textOffsetX_, n3 - this.textOffsetY_), a2.rotate(o2), a2.translate(this.textOffsetX_, this.textOffsetY_), a2.scale(this.textScale_[0], this.textScale_[1]), this.textStrokeState_ && a2.strokeText(this.text_, 0, 0), this.textFillState_ && a2.fillText(this.text_, 0, 0), a2.restore()) : (this.textStrokeState_ && a2.strokeText(this.text_, e20, n3), this.textFillState_ && a2.fillText(this.text_, e20, n3));
    }
  }
  moveToLineTo_(e19, t2, n2, r2, i2, a2) {
    let o2 = this.context_, s2 = a2 ?? 0, c2 = rr(e19, t2, n2, r2, this.transform_, this.pixelCoordinates_);
    if (Math.abs(s2) > 0) {
      let e20 = c2.length, t3 = i2 || Math.abs(c2[0] - c2[e20 - 2]) < 1e-6 && Math.abs(c2[1] - c2[e20 - 1]) < 1e-6;
      c2 = na(c2, 0, e20, 2, s2, t3, c2), ia(c2, 2, t3);
    }
    o2.moveTo(c2[0], c2[1]);
    let l2 = c2.length;
    i2 && (l2 -= 2);
    for (let e20 = 2; e20 < l2; e20 += 2)
      o2.lineTo(c2[e20], c2[e20 + 1]);
    return i2 && o2.closePath(), n2;
  }
  drawRings_(e19, t2, n2, r2, i2) {
    for (let a2 = 0, o2 = n2.length; a2 < o2; ++a2)
      t2 = this.moveToLineTo_(e19, t2, n2[a2], r2, true, i2);
    return t2;
  }
  drawCircle(e19) {
    if (this.squaredTolerance_ && (e19 = e19.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), Ue(this.extent_, e19.getExtent())) {
      if (this.fillState_ || this.strokeState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        let t2 = pr(e19, this.transform_, this.pixelCoordinates_);
        if (!t2)
          return;
        let n2 = t2[2] - t2[0], r2 = t2[3] - t2[1], i2 = Math.sqrt(n2 * n2 + r2 * r2), a2 = this.context_;
        a2.beginPath(), a2.arc(t2[0], t2[1], i2, 0, 2 * Math.PI), this.fillState_ && a2.fill(), this.strokeState_ && a2.stroke();
      }
      this.text_ !== `` && this.drawText_(e19.getCenter(), 0, 2, 2);
    }
  }
  setStyle(e19) {
    this.setFillStrokeStyle(e19.getFill() ?? null, e19.getStroke() ?? null), this.setImageStyle(e19.getImage() ?? null), this.setTextStyle(e19.getText() ?? null);
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
    if (this.squaredTolerance_ && (e19 = e19.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), Ue(this.extent_, e19.getExtent())) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        let t2 = this.context_, n2 = e19.getFlatCoordinates();
        t2.beginPath(), this.moveToLineTo_(n2, 0, n2.length, e19.getStride(), false, this.strokeState_.strokeOffset), t2.stroke();
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
    if (Ue(this.extent_, t2)) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        let t3 = this.context_, n2 = e19.getFlatCoordinates(), r2 = 0, i2 = e19.getEnds(), a2 = e19.getStride();
        t3.beginPath();
        for (let e20 = 0, t4 = i2.length; e20 < t4; ++e20)
          r2 = this.moveToLineTo_(n2, r2, i2[e20], a2, false, this.strokeState_.strokeOffset);
        t3.stroke();
      }
      if (this.text_ !== ``) {
        let t3 = e19.getFlatMidpoints();
        this.drawText_(t3, 0, t3.length, 2);
      }
    }
  }
  drawPolygon(e19) {
    if (this.squaredTolerance_ && (e19 = e19.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), Ue(this.extent_, e19.getExtent())) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        let t2 = this.context_;
        t2.beginPath(), this.drawRings_(e19.getOrientedFlatCoordinates(), 0, e19.getEnds(), e19.getStride(), this.strokeState_?.strokeOffset), this.fillState_ && t2.fill(), this.strokeState_ && t2.stroke();
      }
      if (this.text_ !== ``) {
        let t2 = e19.getFlatInteriorPoint();
        this.drawText_(t2, 0, 2, 2);
      }
    }
  }
  drawMultiPolygon(e19) {
    if (this.squaredTolerance_ && (e19 = e19.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), Ue(this.extent_, e19.getExtent())) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        let t2 = this.context_, n2 = e19.getOrientedFlatCoordinates(), r2 = 0, i2 = e19.getEndss(), a2 = e19.getStride();
        t2.beginPath();
        for (let e20 = 0, t3 = i2.length; e20 < t3; ++e20) {
          let t4 = i2[e20];
          r2 = this.drawRings_(n2, r2, t4, a2, this.strokeState_?.strokeOffset);
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
    n2 ? (n2.lineCap != e19.lineCap && (n2.lineCap = e19.lineCap, t2.lineCap = e19.lineCap), C(n2.lineDash, e19.lineDash) || t2.setLineDash(n2.lineDash = e19.lineDash), n2.lineDashOffset != e19.lineDashOffset && (n2.lineDashOffset = e19.lineDashOffset, t2.lineDashOffset = e19.lineDashOffset), n2.lineJoin != e19.lineJoin && (n2.lineJoin = e19.lineJoin, t2.lineJoin = e19.lineJoin), n2.lineWidth != e19.lineWidth && (n2.lineWidth = e19.lineWidth, t2.lineWidth = e19.lineWidth), n2.miterLimit != e19.miterLimit && (n2.miterLimit = e19.miterLimit, t2.miterLimit = e19.miterLimit), n2.strokeStyle != e19.strokeStyle && (n2.strokeStyle = e19.strokeStyle, t2.strokeStyle = e19.strokeStyle)) : (t2.lineCap = e19.lineCap, t2.setLineDash(e19.lineDash), t2.lineDashOffset = e19.lineDashOffset, t2.lineJoin = e19.lineJoin, t2.lineWidth = e19.lineWidth, t2.miterLimit = e19.miterLimit, t2.strokeStyle = e19.strokeStyle, this.contextStrokeState_ = {lineCap: e19.lineCap, lineDash: e19.lineDash, lineDashOffset: e19.lineDashOffset, lineJoin: e19.lineJoin, lineWidth: e19.lineWidth, miterLimit: e19.miterLimit, strokeStyle: e19.strokeStyle});
  }
  setContextTextState_(e19) {
    let t2 = this.context_, n2 = this.contextTextState_, r2 = e19.textAlign ? e19.textAlign : ba;
    n2 ? (n2.font != e19.font && (n2.font = e19.font, t2.font = e19.font), n2.textAlign != r2 && (n2.textAlign = r2, t2.textAlign = r2), n2.textBaseline != e19.textBaseline && (n2.textBaseline = e19.textBaseline, t2.textBaseline = e19.textBaseline)) : (t2.font = e19.font, t2.textAlign = r2, t2.textBaseline = e19.textBaseline, this.contextTextState_ = {font: e19.font, textAlign: r2, textBaseline: e19.textBaseline});
  }
  setFillStrokeStyle(e19, t2) {
    if (!e19)
      this.fillState_ = null;
    else {
      let t3 = e19.getColor();
      this.fillState_ = {fillStyle: ea(t3 || `#000`) || `#000`};
    }
    if (!t2)
      this.strokeState_ = null;
    else {
      let e20 = t2.getColor(), n2 = t2.getLineCap(), r2 = t2.getLineDash(), i2 = t2.getLineDashOffset(), a2 = t2.getLineJoin(), o2 = t2.getWidth(), s2 = t2.getMiterLimit(), c2 = r2 || _a, l2 = t2.getOffset();
      this.strokeState_ = {lineCap: n2 === void 0 ? ga : n2, lineDash: this.pixelRatio_ === 1 ? c2 : c2.map((e21) => e21 * this.pixelRatio_), lineDashOffset: (i2 || 0) * this.pixelRatio_, lineJoin: a2 === void 0 ? va : a2, lineWidth: (o2 === void 0 ? 1 : o2) * this.pixelRatio_, miterLimit: s2 === void 0 ? 10 : s2, strokeStyle: ea(e20 || `#000`) || `#000`, strokeOffset: (l2 ?? 0) * this.pixelRatio_};
    }
  }
  setImageStyle(e19) {
    let t2;
    if (!e19 || !(t2 = e19.getSize())) {
      this.image_ = null;
      return;
    }
    let n2 = e19.getPixelRatio(this.pixelRatio_), r2 = e19.getAnchor(), i2 = e19.getOrigin();
    if (!r2 || !i2) {
      this.image_ = null;
      return;
    }
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
        this.textFillState_ = {fillStyle: ea(e20 || `#000`) || `#000`};
      }
      let n2 = e19.getStroke();
      if (!n2)
        this.textStrokeState_ = null;
      else {
        let e20 = n2.getColor(), t3 = n2.getLineCap(), r3 = n2.getLineDash(), i3 = n2.getLineDashOffset(), a3 = n2.getLineJoin(), o3 = n2.getWidth(), s3 = n2.getMiterLimit();
        this.textStrokeState_ = {lineCap: t3 === void 0 ? ga : t3, lineDash: r3 || _a, lineDashOffset: i3 || 0, lineJoin: a3 === void 0 ? va : a3, lineWidth: o3 === void 0 ? 1 : o3, miterLimit: s3 === void 0 ? 10 : s3, strokeStyle: ea(e20 || `#000`) || `#000`};
      }
      let r2 = e19.getFont(), i2 = e19.getOffsetX(), a2 = e19.getOffsetY(), o2 = e19.getRotateWithView(), s2 = e19.getRotation(), c2 = e19.getScaleArray(), l2 = e19.getText(), u2 = e19.getTextAlign(), d2 = e19.getTextBaseline();
      this.textState_ = {font: r2 === void 0 ? ma : r2, textAlign: u2 === void 0 ? ba : u2, textBaseline: d2 === void 0 ? xa : d2}, this.text_ = l2 === void 0 ? `` : Array.isArray(l2) ? l2.reduce((e20, t3, n3) => e20 += n3 % 2 ? ` ` : t3, ``) : l2, this.textOffsetX_ = i2 === void 0 ? 0 : this.pixelRatio_ * i2, this.textOffsetY_ = a2 === void 0 ? 0 : this.pixelRatio_ * a2, this.textRotateWithView_ = o2 !== void 0 && o2, this.textRotation_ = s2 === void 0 ? 0 : s2, this.textScale_ = [this.pixelRatio_ * c2[0], this.pixelRatio_ * c2[1]];
    }
  }
}, Ra = 0.5, za = {Point: Za, LineString: Ja, Polygon: $a, MultiPoint: Qa, MultiLineString: Ya, MultiPolygon: Xa, GeometryCollection: qa, Circle: Ua};
function Ba(e19, t2) {
  return parseInt(D(e19), 10) - parseInt(D(t2), 10);
}
function Va(e19, t2) {
  let n2 = Ha(e19, t2);
  return n2 * n2;
}
function Ha(e19, t2) {
  return Ra * e19 / t2;
}
function Ua(e19, t2, n2, r2, i2) {
  let a2 = n2.getFill(), o2 = n2.getStroke();
  if (a2 || o2) {
    let s3 = e19.getBuilder(n2.getZIndex(), `Circle`);
    s3.setFillStrokeStyle(a2, o2), s3.drawCircle(t2, r2, i2);
  }
  let s2 = n2.getText();
  if (s2 && s2.getText()) {
    let a3 = e19.getBuilder(n2.getZIndex(), `Text`);
    a3.setTextStyle(s2), a3.drawText(t2, r2, i2);
  }
}
function Wa(e19, t2, n2, r2, i2, a2, o2, s2) {
  let c2 = [], l2 = n2.getImage();
  if (l2) {
    let e20 = true, t3 = l2.getImageState();
    t3 == R.LOADED || t3 == R.ERROR ? e20 = false : t3 == R.IDLE && l2.load(), e20 && c2.push(l2.ready());
  }
  let u2 = n2.getFill();
  u2 && u2.loading() && c2.push(u2.ready());
  let d2 = c2.length > 0;
  return d2 && Promise.all(c2).then(() => i2(null)), Ga(e19, t2, n2, r2, a2, o2, s2), d2;
}
function Ga(e19, t2, n2, r2, i2, a2, o2) {
  let s2 = n2.getGeometryFunction()(t2);
  if (!s2)
    return;
  let c2 = s2.simplifyTransformed(r2, i2);
  if (n2.getRenderer())
    Ka(e19, c2, n2, t2, o2);
  else {
    let r3 = za[c2.getType()];
    r3(e19, c2, n2, t2, o2, a2);
  }
}
function Ka(e19, t2, n2, r2, i2) {
  if (t2.getType() == `GeometryCollection`) {
    let a2 = t2.getGeometries();
    for (let t3 = 0, o2 = a2.length; t3 < o2; ++t3)
      Ka(e19, a2[t3], n2, r2, i2);
  } else
    e19.getBuilder(n2.getZIndex(), `Default`).drawCustom(t2, r2, n2.getRenderer(), n2.getHitDetectionRenderer(), i2);
}
function qa(e19, t2, n2, r2, i2, a2) {
  let o2 = t2.getGeometriesArray(), s2, c2;
  for (s2 = 0, c2 = o2.length; s2 < c2; ++s2) {
    let t3 = za[o2[s2].getType()];
    t3(e19, o2[s2], n2, r2, i2, a2);
  }
}
function Ja(e19, t2, n2, r2, i2) {
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
function Ya(e19, t2, n2, r2, i2) {
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
function Xa(e19, t2, n2, r2, i2) {
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
function Za(e19, t2, n2, r2, i2, a2) {
  let o2 = n2.getImage(), s2 = n2.getText(), c2 = s2 && s2.getText(), l2 = a2 && o2 && c2 ? {} : void 0;
  if (o2) {
    if (o2.getImageState() != R.LOADED)
      return;
    let a3 = e19.getBuilder(n2.getZIndex(), `Image`);
    a3.setImageStyle(o2, l2), a3.drawPoint(t2, r2, i2);
  }
  if (c2) {
    let a3 = e19.getBuilder(n2.getZIndex(), `Text`);
    a3.setTextStyle(s2, l2), a3.drawText(t2, r2, i2);
  }
}
function Qa(e19, t2, n2, r2, i2, a2) {
  let o2 = n2.getImage(), s2 = o2 && o2.getOpacity() !== 0, c2 = n2.getText(), l2 = c2 && c2.getText(), u2 = a2 && s2 && l2 ? {} : void 0;
  if (s2) {
    if (o2.getImageState() != R.LOADED)
      return;
    let a3 = e19.getBuilder(n2.getZIndex(), `Image`);
    a3.setImageStyle(o2, u2), a3.drawMultiPoint(t2, r2, i2);
  }
  if (l2) {
    let a3 = e19.getBuilder(n2.getZIndex(), `Text`);
    a3.setTextStyle(c2, u2), a3.drawText(t2, r2, i2);
  }
}
function $a(e19, t2, n2, r2, i2) {
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
var eo = {PRERENDER: `prerender`, POSTRENDER: `postrender`, PRECOMPOSE: `precompose`, POSTCOMPOSE: `postcompose`, RENDERCOMPLETE: `rendercomplete`}, to = false;
function no(e19, t2, n2, r2, i2, a2, o2) {
  let s2 = new XMLHttpRequest();
  s2.open(`GET`, typeof e19 == `function` ? e19(n2, r2, i2) : e19, true), t2.getType() == `arraybuffer` && (s2.responseType = `arraybuffer`), s2.withCredentials = to, s2.onload = function(e20) {
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
function ro(e19, t2) {
  return function(n2, r2, i2, a2, o2) {
    no(e19, t2, n2, r2, i2, (e20, t3) => {
      this.addFeatures(e20), a2 !== void 0 && a2(e20);
    }, () => {
      this.changed(), o2 !== void 0 && o2();
    });
  };
}
function io(e19, t2) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
}
function ao(e19, t2, n2, r2) {
  let i2 = [], a2 = N();
  for (let o2 = 0, s2 = n2.length; o2 < s2; ++o2) {
    let s3 = n2[o2];
    a2 = Te(e19, t2, s3[0], r2), i2.push((a2[0] + a2[2]) / 2, (a2[1] + a2[3]) / 2), t2 = s3[s3.length - 1];
  }
  return i2;
}
var oo = Jn(), so = class e6 {
  constructor(e19, t2, n2, r2, i2, a2) {
    this.styleFunction, this.extent_, this.id_ = a2, this.type_ = e19, this.flatCoordinates_ = t2, this.flatInteriorPoints_ = null, this.flatMidpoints_ = null, this.ends_ = n2 || null, this.properties_ = i2, this.squaredTolerance_, this.stride_ = r2, this.simplifiedGeometry_;
  }
  get(e19) {
    return this.properties_[e19];
  }
  getExtent() {
    return this.extent_ || (this.extent_ = this.type_ === `Point` ? we(this.flatCoordinates_) : Te(this.flatCoordinates_, 0, this.flatCoordinates_.length, this.stride_)), this.extent_;
  }
  getFlatInteriorPoint() {
    if (!this.flatInteriorPoints_) {
      let e19 = Fe(this.getExtent());
      this.flatInteriorPoints_ = Vr(this.flatCoordinates_, 0, this.ends_, this.stride_, e19, 0);
    }
    return this.flatInteriorPoints_;
  }
  getFlatInteriorPoints() {
    if (!this.flatInteriorPoints_) {
      let e19 = qr(this.flatCoordinates_, this.ends_), t2 = ao(this.flatCoordinates_, 0, e19, this.stride_);
      this.flatInteriorPoints_ = Hr(this.flatCoordinates_, 0, e19, this.stride_, t2);
    }
    return this.flatInteriorPoints_;
  }
  getFlatMidpoint() {
    return this.flatMidpoints_ || (this.flatMidpoints_ = Si(this.flatCoordinates_, 0, this.flatCoordinates_.length, this.stride_, 0.5)), this.flatMidpoints_;
  }
  getFlatMidpoints() {
    if (!this.flatMidpoints_) {
      this.flatMidpoints_ = [];
      let e19 = this.flatCoordinates_, t2 = 0, n2 = this.ends_;
      for (let r2 = 0, i2 = n2.length; r2 < i2; ++r2) {
        let i3 = n2[r2], a2 = Si(e19, t2, i3, this.stride_, 0.5);
        S(this.flatMidpoints_, a2), t2 = i3;
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
    e19 = Dn(e19);
    let t2 = e19.getExtent(), n2 = e19.getWorldExtent();
    if (t2 && n2) {
      let e20 = P(n2) / P(t2);
      Xn(oo, n2[0], n2[3], e20, -e20, 0, 0, 0), rr(this.flatCoordinates_, 0, this.flatCoordinates_.length, this.stride_, oo, this.flatCoordinates_);
    }
  }
  applyTransform(e19) {
    e19(this.flatCoordinates_, this.flatCoordinates_, this.stride_);
  }
  clone() {
    return new e6(this.type_, this.flatCoordinates_.slice(), this.ends_?.slice(), this.stride_, Object.assign({}, this.properties_), this.id_);
  }
  getEnds() {
    return this.ends_;
  }
  enableSimplifyTransformed() {
    return this.simplifyTransformed = te((t2, n2) => {
      if (t2 === this.squaredTolerance_)
        return this.simplifiedGeometry_;
      this.simplifiedGeometry_ = this.clone(), n2 && this.simplifiedGeometry_.applyTransform(n2);
      let r2 = this.simplifiedGeometry_.getFlatCoordinates(), i2;
      switch (this.type_) {
        case `LineString`:
          r2.length = Pr(r2, 0, this.simplifiedGeometry_.flatCoordinates_.length, this.simplifiedGeometry_.stride_, t2, r2, 0), i2 = [r2.length];
          break;
        case `MultiLineString`:
          i2 = [], r2.length = Fr(r2, 0, this.simplifiedGeometry_.ends_, this.simplifiedGeometry_.stride_, t2, r2, 0, i2);
          break;
        case `Polygon`:
          i2 = [], r2.length = Rr(r2, 0, this.simplifiedGeometry_.ends_, this.simplifiedGeometry_.stride_, Math.sqrt(t2), r2, 0, i2);
      }
      return i2 && (this.simplifiedGeometry_ = new e6(this.type_, r2, i2, this.stride_, this.properties_, this.id_)), this.squaredTolerance_ = t2, this.simplifiedGeometry_;
    }), this;
  }
};
so.prototype.getFlatCoordinates = so.prototype.getOrientedFlatCoordinates;
function co(e19, t2, n2 = 0, r2 = e19.length - 1, i2 = uo) {
  for (; r2 > n2; ) {
    if (r2 - n2 > 600) {
      let a3 = r2 - n2 + 1, o3 = t2 - n2 + 1, s3 = Math.log(a3), c2 = 0.5 * Math.exp(2 * s3 / 3), l2 = 0.5 * Math.sqrt(s3 * c2 * (a3 - c2) / a3) * (o3 - a3 / 2 < 0 ? -1 : 1);
      co(e19, t2, Math.max(n2, Math.floor(t2 - o3 * c2 / a3 + l2)), Math.min(r2, Math.floor(t2 + (a3 - o3) * c2 / a3 + l2)), i2);
    }
    let a2 = e19[t2], o2 = n2, s2 = r2;
    for (lo(e19, n2, t2), i2(e19[r2], a2) > 0 && lo(e19, n2, r2); o2 < s2; ) {
      for (lo(e19, o2, s2), o2++, s2--; i2(e19[o2], a2) < 0; )
        o2++;
      for (; i2(e19[s2], a2) > 0; )
        s2--;
    }
    i2(e19[n2], a2) === 0 ? lo(e19, n2, s2) : (s2++, lo(e19, s2, r2)), s2 <= t2 && (n2 = s2 + 1), t2 <= s2 && (r2 = s2 - 1);
  }
}
function lo(e19, t2, n2) {
  let r2 = e19[t2];
  e19[t2] = e19[n2], e19[n2] = r2;
}
function uo(e19, t2) {
  return e19 < t2 ? -1 : +(e19 > t2);
}
var fo = class {
  constructor(e19 = 9) {
    this._maxEntries = Math.max(4, e19), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(e19) {
    let t2 = this.data, n2 = [];
    if (!wo(e19, t2))
      return n2;
    let r2 = this.toBBox, i2 = [];
    for (; t2; ) {
      for (let a2 = 0; a2 < t2.children.length; a2++) {
        let o2 = t2.children[a2], s2 = t2.leaf ? r2(o2) : o2;
        wo(e19, s2) && (t2.leaf ? n2.push(o2) : Co(e19, s2) ? this._all(o2, n2) : i2.push(o2));
      }
      t2 = i2.pop();
    }
    return n2;
  }
  collides(e19) {
    let t2 = this.data;
    if (!wo(e19, t2))
      return false;
    let n2 = [];
    for (; t2; ) {
      for (let r2 = 0; r2 < t2.children.length; r2++) {
        let i2 = t2.children[r2], a2 = t2.leaf ? this.toBBox(i2) : i2;
        if (wo(e19, a2)) {
          if (t2.leaf || Co(e19, a2))
            return true;
          n2.push(i2);
        }
      }
      t2 = n2.pop();
    }
    return false;
  }
  load(e19) {
    if (!(e19 && e19.length))
      return this;
    if (e19.length < this._minEntries) {
      for (let t3 = 0; t3 < e19.length; t3++)
        this.insert(e19[t3]);
      return this;
    }
    let t2 = this._build(e19.slice(), 0, e19.length - 1, 0);
    if (!this.data.children.length)
      this.data = t2;
    else if (this.data.height === t2.height)
      this._splitRoot(this.data, t2);
    else {
      if (this.data.height < t2.height) {
        let e20 = this.data;
        this.data = t2, t2 = e20;
      }
      this._insert(t2, this.data.height - t2.height - 1, true);
    }
    return this;
  }
  insert(e19) {
    return e19 && this._insert(e19, this.data.height - 1), this;
  }
  clear() {
    return this.data = To([]), this;
  }
  remove(e19, t2) {
    if (!e19)
      return this;
    let n2 = this.data, r2 = this.toBBox(e19), i2 = [], a2 = [], o2, s2, c2;
    for (; n2 || i2.length; ) {
      if (n2 || (n2 = i2.pop(), s2 = i2[i2.length - 1], o2 = a2.pop(), c2 = true), n2.leaf) {
        let r3 = po(e19, n2.children, t2);
        if (r3 !== -1)
          return n2.children.splice(r3, 1), i2.push(n2), this._condense(i2), this;
      }
      !c2 && !n2.leaf && Co(n2, r2) ? (i2.push(n2), a2.push(o2), o2 = 0, s2 = n2, n2 = n2.children[0]) : s2 ? (o2++, n2 = s2.children[o2], c2 = false) : n2 = null;
    }
    return this;
  }
  toBBox(e19) {
    return e19;
  }
  compareMinX(e19, t2) {
    return e19.minX - t2.minX;
  }
  compareMinY(e19, t2) {
    return e19.minY - t2.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(e19) {
    return this.data = e19, this;
  }
  _all(e19, t2) {
    let n2 = [];
    for (; e19; )
      e19.leaf ? t2.push(...e19.children) : n2.push(...e19.children), e19 = n2.pop();
    return t2;
  }
  _build(e19, t2, n2, r2) {
    let i2 = n2 - t2 + 1, a2 = this._maxEntries, o2;
    if (i2 <= a2)
      return o2 = To(e19.slice(t2, n2 + 1)), mo(o2, this.toBBox), o2;
    r2 || (r2 = Math.ceil(Math.log(i2) / Math.log(a2)), a2 = Math.ceil(i2 / a2 ** (r2 - 1))), o2 = To([]), o2.leaf = false, o2.height = r2;
    let s2 = Math.ceil(i2 / a2), c2 = s2 * Math.ceil(Math.sqrt(a2));
    Eo(e19, t2, n2, c2, this.compareMinX);
    for (let i3 = t2; i3 <= n2; i3 += c2) {
      let t3 = Math.min(i3 + c2 - 1, n2);
      Eo(e19, i3, t3, s2, this.compareMinY);
      for (let n3 = i3; n3 <= t3; n3 += s2) {
        let i4 = Math.min(n3 + s2 - 1, t3);
        o2.children.push(this._build(e19, n3, i4, r2 - 1));
      }
    }
    return mo(o2, this.toBBox), o2;
  }
  _chooseSubtree(e19, t2, n2, r2) {
    for (; r2.push(t2), !(t2.leaf || r2.length - 1 === n2); ) {
      let n3 = 1 / 0, r3 = 1 / 0, i2;
      for (let a2 = 0; a2 < t2.children.length; a2++) {
        let o2 = t2.children[a2], s2 = yo(o2), c2 = xo(e19, o2) - s2;
        c2 < r3 ? (r3 = c2, n3 = s2 < n3 ? s2 : n3, i2 = o2) : c2 === r3 && s2 < n3 && (n3 = s2, i2 = o2);
      }
      t2 = i2 || t2.children[0];
    }
    return t2;
  }
  _insert(e19, t2, n2) {
    let r2 = n2 ? e19 : this.toBBox(e19), i2 = [], a2 = this._chooseSubtree(r2, this.data, t2, i2);
    for (a2.children.push(e19), go(a2, r2); t2 >= 0 && i2[t2].children.length > this._maxEntries; )
      this._split(i2, t2), t2--;
    this._adjustParentBBoxes(r2, i2, t2);
  }
  _split(e19, t2) {
    let n2 = e19[t2], r2 = n2.children.length, i2 = this._minEntries;
    this._chooseSplitAxis(n2, i2, r2);
    let a2 = this._chooseSplitIndex(n2, i2, r2), o2 = To(n2.children.splice(a2, n2.children.length - a2));
    o2.height = n2.height, o2.leaf = n2.leaf, mo(n2, this.toBBox), mo(o2, this.toBBox), t2 ? e19[t2 - 1].children.push(o2) : this._splitRoot(n2, o2);
  }
  _splitRoot(e19, t2) {
    this.data = To([e19, t2]), this.data.height = e19.height + 1, this.data.leaf = false, mo(this.data, this.toBBox);
  }
  _chooseSplitIndex(e19, t2, n2) {
    let r2, i2 = 1 / 0, a2 = 1 / 0;
    for (let o2 = t2; o2 <= n2 - t2; o2++) {
      let t3 = ho(e19, 0, o2, this.toBBox), s2 = ho(e19, o2, n2, this.toBBox), c2 = So(t3, s2), l2 = yo(t3) + yo(s2);
      c2 < i2 ? (i2 = c2, r2 = o2, a2 = l2 < a2 ? l2 : a2) : c2 === i2 && l2 < a2 && (a2 = l2, r2 = o2);
    }
    return r2 || n2 - t2;
  }
  _chooseSplitAxis(e19, t2, n2) {
    let r2 = e19.leaf ? this.compareMinX : _o, i2 = e19.leaf ? this.compareMinY : vo;
    this._allDistMargin(e19, t2, n2, r2) < this._allDistMargin(e19, t2, n2, i2) && e19.children.sort(r2);
  }
  _allDistMargin(e19, t2, n2, r2) {
    e19.children.sort(r2);
    let i2 = this.toBBox, a2 = ho(e19, 0, t2, i2), o2 = ho(e19, n2 - t2, n2, i2), s2 = bo(a2) + bo(o2);
    for (let r3 = t2; r3 < n2 - t2; r3++) {
      let t3 = e19.children[r3];
      go(a2, e19.leaf ? i2(t3) : t3), s2 += bo(a2);
    }
    for (let r3 = n2 - t2 - 1; r3 >= t2; r3--) {
      let t3 = e19.children[r3];
      go(o2, e19.leaf ? i2(t3) : t3), s2 += bo(o2);
    }
    return s2;
  }
  _adjustParentBBoxes(e19, t2, n2) {
    for (let r2 = n2; r2 >= 0; r2--)
      go(t2[r2], e19);
  }
  _condense(e19) {
    for (let t2 = e19.length - 1, n2; t2 >= 0; t2--)
      e19[t2].children.length === 0 ? t2 > 0 ? (n2 = e19[t2 - 1].children, n2.splice(n2.indexOf(e19[t2]), 1)) : this.clear() : mo(e19[t2], this.toBBox);
  }
};
function po(e19, t2, n2) {
  if (!n2)
    return t2.indexOf(e19);
  for (let r2 = 0; r2 < t2.length; r2++)
    if (n2(e19, t2[r2]))
      return r2;
  return -1;
}
function mo(e19, t2) {
  ho(e19, 0, e19.children.length, t2, e19);
}
function ho(e19, t2, n2, r2, i2) {
  i2 || (i2 = To(null)), i2.minX = 1 / 0, i2.minY = 1 / 0, i2.maxX = -1 / 0, i2.maxY = -1 / 0;
  for (let a2 = t2; a2 < n2; a2++) {
    let t3 = e19.children[a2];
    go(i2, e19.leaf ? r2(t3) : t3);
  }
  return i2;
}
function go(e19, t2) {
  return e19.minX = Math.min(e19.minX, t2.minX), e19.minY = Math.min(e19.minY, t2.minY), e19.maxX = Math.max(e19.maxX, t2.maxX), e19.maxY = Math.max(e19.maxY, t2.maxY), e19;
}
function _o(e19, t2) {
  return e19.minX - t2.minX;
}
function vo(e19, t2) {
  return e19.minY - t2.minY;
}
function yo(e19) {
  return (e19.maxX - e19.minX) * (e19.maxY - e19.minY);
}
function bo(e19) {
  return e19.maxX - e19.minX + (e19.maxY - e19.minY);
}
function xo(e19, t2) {
  return (Math.max(t2.maxX, e19.maxX) - Math.min(t2.minX, e19.minX)) * (Math.max(t2.maxY, e19.maxY) - Math.min(t2.minY, e19.minY));
}
function So(e19, t2) {
  let n2 = Math.max(e19.minX, t2.minX), r2 = Math.max(e19.minY, t2.minY), i2 = Math.min(e19.maxX, t2.maxX), a2 = Math.min(e19.maxY, t2.maxY);
  return Math.max(0, i2 - n2) * Math.max(0, a2 - r2);
}
function Co(e19, t2) {
  return e19.minX <= t2.minX && e19.minY <= t2.minY && t2.maxX <= e19.maxX && t2.maxY <= e19.maxY;
}
function wo(e19, t2) {
  return t2.minX <= e19.maxX && t2.minY <= e19.maxY && t2.maxX >= e19.minX && t2.maxY >= e19.minY;
}
function To(e19) {
  return {children: e19, height: 1, leaf: true, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0};
}
function Eo(e19, t2, n2, r2, i2) {
  let a2 = [t2, n2];
  for (; a2.length; ) {
    if (n2 = a2.pop(), t2 = a2.pop(), n2 - t2 <= r2)
      continue;
    let o2 = t2 + Math.ceil((n2 - t2) / r2 / 2) * r2;
    co(e19, o2, t2, n2, i2), a2.push(t2, o2, o2, n2);
  }
}
var Do = class {
  constructor(e19) {
    this.rbush_ = new fo(e19), this.items_ = {};
  }
  insert(e19, t2) {
    let n2 = {minX: e19[0], minY: e19[1], maxX: e19[2], maxY: e19[3], value: t2};
    this.rbush_.insert(n2), this.items_[D(t2)] = n2;
  }
  load(e19, t2) {
    let n2 = Array(t2.length);
    for (let r2 = 0, i2 = t2.length; r2 < i2; r2++) {
      let i3 = e19[r2], a2 = t2[r2], o2 = {minX: i3[0], minY: i3[1], maxX: i3[2], maxY: i3[3], value: a2};
      n2[r2] = o2, this.items_[D(a2)] = o2;
    }
    this.rbush_.load(n2);
  }
  remove(e19) {
    let t2 = D(e19), n2 = this.items_[t2];
    return delete this.items_[t2], this.rbush_.remove(n2) !== null;
  }
  update(e19, t2) {
    let n2 = this.items_[D(t2)];
    Ee([n2.minX, n2.minY, n2.maxX, n2.maxY], e19) || (this.remove(t2), this.insert(e19, t2));
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
    return d(this.items_);
  }
  clear() {
    this.rbush_.clear(), this.items_ = {};
  }
  getExtent(e19) {
    let t2 = this.rbush_.toJSON();
    return Se(t2.minX, t2.minY, t2.maxX, t2.maxY, e19);
  }
  concat(e19) {
    this.rbush_.load(e19.rbush_.all());
    for (let t2 in e19.items_)
      this.items_[t2] = e19.items_[t2];
  }
}, Oo = class extends ce {
  constructor(e19) {
    super(), this.projection = Dn(e19.projection), this.attributions_ = ko(e19.attributions), this.attributionsCollapsible_ = e19.attributionsCollapsible ?? true, this.loading = false, this.canRotate = false, this.state_ = e19.state === void 0 ? `ready` : e19.state, this.wrapX_ = e19.wrapX !== void 0 && e19.wrapX, this.interpolate_ = !!e19.interpolate, this.viewResolver = null, this.viewRejector = null;
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
  ready() {
    let e19 = this.getState();
    return e19 === `ready` ? Promise.resolve() : e19 === `error` ? Promise.reject(Error(`Source failed to load`)) : new Promise((e20, t2) => {
      let n2 = () => {
        let r2 = this.getState();
        r2 === `ready` ? (this.un(`change`, n2), e20()) : r2 === `error` && (this.un(`change`, n2), t2(Error(`Source failed to load`)));
      };
      this.on(`change`, n2);
    });
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
    this.attributions_ = ko(e19), this.changed();
  }
  setState(e19) {
    this.state_ = e19, this.changed();
  }
};
function ko(e19) {
  return e19 ? typeof e19 == `function` ? e19 : (Array.isArray(e19) || (e19 = [e19]), (t2) => e19) : null;
}
var Ao = {ADDFEATURE: `addfeature`, CHANGEFEATURE: `changefeature`, CLEAR: `clear`, REMOVEFEATURE: `removefeature`, FEATURESLOADSTART: `featuresloadstart`, FEATURESLOADEND: `featuresloadend`, FEATURESLOADERROR: `featuresloaderror`}, jo = class extends re {
  constructor(e19, t2, n2) {
    super(e19), this.feature = t2, this.features = n2;
  }
}, Mo = class extends Oo {
  constructor(e19) {
    e19 || (e19 = {}), super({attributions: e19.attributions, interpolate: true, projection: void 0, state: `ready`, wrapX: e19.wrapX === void 0 || e19.wrapX}), this.canRotate = true, this.on, this.once, this.un, this.loader_ = ee, this.format_ = e19.format || null, this.overlaps_ = e19.overlaps === void 0 || e19.overlaps, this.url_ = e19.url, e19.loader === void 0 ? this.url_ !== void 0 && (j(this.format_, "`format` must be set when `url` is set"), this.loader_ = ro(this.url_, this.format_)) : this.loader_ = e19.loader, this.strategy_ = e19.strategy === void 0 ? io : e19.strategy;
    let t2 = e19.useSpatialIndex === void 0 || e19.useSpatialIndex;
    this.featuresRtree_ = t2 ? new Do() : null, this.loadedExtentsRtree_ = new Do(), this.nullGeometryFeatures_ = {}, this.idIndex_ = {}, this.uidIndex_ = {}, this.featureChangeKeys_ = {}, this.featuresCollection_ = null;
    let n2, r2;
    Array.isArray(e19.features) ? r2 = e19.features : e19.features && (n2 = e19.features, r2 = n2.getArray()), !t2 && n2 === void 0 && (n2 = new de(r2)), r2 !== void 0 && this.addFeaturesInternal(r2), n2 !== void 0 && this.bindFeaturesCollection_(n2);
  }
  addFeature(e19) {
    this.addFeatureInternal(e19), this.changed();
  }
  addFeatureInternal(e19) {
    let t2 = D(e19);
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
    this.dispatchEvent(new jo(Ao.ADDFEATURE, e19));
  }
  setupChangeEvents_(e19, t2) {
    t2 instanceof so || (this.featureChangeKeys_[e19] = [f(t2, h.CHANGE, this.handleFeatureChange_, this), f(t2, l.PROPERTYCHANGE, this.handleFeatureChange_, this)]);
  }
  addToIndex_(e19, t2) {
    let n2 = true;
    if (t2.getId() !== void 0) {
      let e20 = String(t2.getId());
      if (!(e20 in this.idIndex_))
        this.idIndex_[e20] = t2;
      else if (t2 instanceof so) {
        let r2 = this.idIndex_[e20];
        r2 instanceof so ? Array.isArray(r2) ? r2.push(t2) : this.idIndex_[e20] = [r2, t2] : n2 = false;
      } else
        n2 = false;
    }
    return n2 && (j(!(e19 in this.uidIndex_), "The passed `feature` was already added to the source"), this.uidIndex_[e19] = t2), n2;
  }
  addFeatures(e19) {
    this.addFeaturesInternal(e19), this.changed();
  }
  addFeaturesInternal(e19) {
    let t2 = [], n2 = [], r2 = [];
    for (let t3 = 0, r3 = e19.length; t3 < r3; t3++) {
      let r4 = e19[t3], i2 = D(r4);
      this.addToIndex_(i2, r4) && n2.push(r4);
    }
    for (let e20 = 0, i2 = n2.length; e20 < i2; e20++) {
      let i3 = n2[e20], a2 = D(i3);
      this.setupChangeEvents_(a2, i3);
      let o2 = i3.getGeometry();
      if (o2) {
        let e21 = o2.getExtent();
        t2.push(e21), r2.push(i3);
      } else
        this.nullGeometryFeatures_[a2] = i3;
    }
    if (this.featuresRtree_ && this.featuresRtree_.load(t2, r2), this.hasListener(Ao.ADDFEATURE))
      for (let e20 = 0, t3 = n2.length; e20 < t3; e20++)
        this.dispatchEvent(new jo(Ao.ADDFEATURE, n2[e20]));
  }
  bindFeaturesCollection_(e19) {
    let t2 = false;
    this.addEventListener(Ao.ADDFEATURE, function(n2) {
      !t2 && n2.feature && (t2 = true, e19.push(n2.feature), t2 = false);
    }), this.addEventListener(Ao.REMOVEFEATURE, function(n2) {
      !t2 && n2.feature && (t2 = true, e19.remove(n2.feature), t2 = false);
    }), e19.addEventListener(c.ADD, (e20) => {
      t2 || (t2 = (t2 = true, this.addFeature(e20.element), false));
    }), e19.addEventListener(c.REMOVE, (e20) => {
      t2 || (t2 = (t2 = true, this.removeFeature(e20.element), false));
    }), this.featuresCollection_ = e19;
  }
  clear(e19) {
    if (e19) {
      for (let e20 in this.featureChangeKeys_)
        this.featureChangeKeys_[e20].forEach(m);
      this.featuresCollection_ || (this.featureChangeKeys_ = {}, this.idIndex_ = {}, this.uidIndex_ = {});
    } else if (this.featuresRtree_) {
      this.featuresRtree_.forEach((e20) => {
        this.removeFeatureInternal(e20);
      });
      for (let e20 in this.nullGeometryFeatures_)
        this.removeFeatureInternal(this.nullGeometryFeatures_[e20]);
    }
    this.featuresCollection_ && this.featuresCollection_.clear(), this.featuresRtree_ && this.featuresRtree_.clear(), this.nullGeometryFeatures_ = {};
    let t2 = new jo(Ao.CLEAR);
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
      if (r2 instanceof so || r2 && r2.intersectsCoordinate(e19))
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
      if (r2 instanceof so || r2 && r2.intersectsExtent(e19)) {
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
    return this.featuresCollection_ ? e19 = this.featuresCollection_.getArray().slice(0) : this.featuresRtree_ && (e19 = this.featuresRtree_.getAll(), d(this.nullGeometryFeatures_) || S(e19, Object.values(this.nullGeometryFeatures_))), e19 || [];
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
      let n2 = this.featuresRtree_;
      return Je(e19, t2).flatMap((e20) => n2.getInExtent(e20));
    }
    return this.featuresCollection_ ? this.featuresCollection_.getArray().slice(0) : [];
  }
  getClosestFeatureToCoordinate(e19, t2) {
    let n2 = e19[0], r2 = e19[1], i2 = null, a2 = [NaN, NaN], o2 = 1 / 0, s2 = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
    t2 || (t2 = k);
    let c2 = this.featuresRtree_;
    return c2 ? (c2.forEachInExtent(s2, function(e20) {
      if (t2(e20)) {
        let t3 = e20.getGeometry();
        if (!t3)
          return;
        let c3 = o2;
        if (o2 = t3 instanceof so ? 0 : t3.closestPointXY(n2, r2, a2, o2), o2 < c3) {
          i2 = e20;
          let t4 = Math.sqrt(o2);
          s2[0] = n2 - t4, s2[1] = r2 - t4, s2[2] = n2 + t4, s2[3] = r2 + t4;
        }
      }
    }), i2) : null;
  }
  getExtent(e19) {
    return this.featuresRtree_?.getExtent(e19) ?? null;
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
    let t2 = e19.target, n2 = D(t2), r2 = t2.getGeometry();
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
    this.changed(), this.dispatchEvent(new jo(Ao.CHANGEFEATURE, t2));
  }
  hasFeature(e19) {
    let t2 = e19.getId();
    if (t2 !== void 0) {
      let n2 = this.idIndex_[String(t2)];
      return Array.isArray(n2) ? n2.includes(e19) : n2 === e19;
    }
    return D(e19) in this.uidIndex_;
  }
  isEmpty() {
    return this.featuresRtree_ ? this.featuresRtree_.isEmpty() && d(this.nullGeometryFeatures_) : !this.featuresCollection_ || this.featuresCollection_.getLength() === 0;
  }
  loadFeatures(e19, t2, n2) {
    let r2 = this.loadedExtentsRtree_, i2 = this.strategy_(e19, t2, n2);
    for (let e20 = 0, a2 = i2.length; e20 < a2; ++e20) {
      let a3 = i2[e20];
      if (!r2.forEachInExtent(a3, function(e21) {
        return ye(e21.extent, a3);
      })) {
        this.loading = Number(this.loading) + 1, this.dispatchEvent(new jo(Ao.FEATURESLOADSTART));
        let e21 = (e22) => {
          this.loading = Number(this.loading) - 1, this.dispatchEvent(new jo(Ao.FEATURESLOADEND, void 0, e22));
        }, i3 = () => {
          this.changed(), this.loading = Number(this.loading) - 1, this.dispatchEvent(new jo(Ao.FEATURESLOADERROR));
        }, o2 = false, s2 = this.loader_.call(this, a3, t2, n2, (t3) => o2 || e21(t3), () => o2 || i3());
        O(s2) ? (o2 = true, s2.then((t3) => {
          let n3 = t3;
          this.addFeatures(n3), e21(n3);
        }).catch(i3)) : this.loader_.length < 4 && (this.loading = false), r2.insert(a3, {extent: a3.slice()});
      }
    }
  }
  refresh() {
    this.clear(true), this.loadedExtentsRtree_.clear(), super.refresh();
  }
  removeLoadedExtent(e19) {
    let t2 = this.loadedExtentsRtree_, n2 = [];
    t2.forEachInExtent(e19, function(e20) {
      n2.push(e20);
    }), n2.forEach((n3) => {
      t2.remove(n3);
      let r2 = Be(n3.extent, e19);
      for (let e20 of r2)
        t2.insert(e20, {extent: e20});
    });
  }
  removeFeatures(e19) {
    let t2 = false;
    for (let n2 = 0, r2 = e19.length; n2 < r2; ++n2)
      t2 = this.removeFeatureInternal(e19[n2]) || t2;
    t2 && this.changed();
  }
  removeFeature(e19) {
    e19 && this.removeFeatureInternal(e19) && this.changed();
  }
  removeFeatureInternal(e19) {
    let t2 = D(e19);
    if (!(t2 in this.uidIndex_))
      return false;
    t2 in this.nullGeometryFeatures_ ? delete this.nullGeometryFeatures_[t2] : this.featuresRtree_ && this.featuresRtree_.remove(e19), this.featureChangeKeys_[t2]?.forEach(m), delete this.featureChangeKeys_[t2];
    let n2 = e19.getId();
    if (n2 !== void 0) {
      let t3 = n2.toString(), r2 = this.idIndex_[t3];
      r2 === e19 ? delete this.idIndex_[t3] : Array.isArray(r2) && (r2.splice(r2.indexOf(e19), 1), r2.length === 1 && (this.idIndex_[t3] = r2[0]));
    }
    return delete this.uidIndex_[t2], this.hasListener(Ao.REMOVEFEATURE) && this.dispatchEvent(new jo(Ao.REMOVEFEATURE, e19)), true;
  }
  removeFromIdIndex_(e19) {
    for (let t2 in this.idIndex_)
      if (this.idIndex_[t2] === e19) {
        delete this.idIndex_[t2];
        break;
      }
  }
  setLoader(e19) {
    this.loader_ = e19;
  }
  setUrl(e19) {
    j(this.format_, "`format` must be set when `url` is set"), this.url_ = e19, this.setLoader(ro(e19, this.format_));
  }
  setOverlaps(e19) {
    this.overlaps_ = e19, this.changed();
  }
}, No = class e7 {
  constructor(e19) {
    e19 || (e19 = {}), this.patternImage_ = null, this.color_ = null, e19.color !== void 0 && this.setColor(e19.color);
  }
  clone() {
    let t2 = this.getColor();
    return new e7({color: Array.isArray(t2) ? t2.slice() : t2 || void 0});
  }
  getColor() {
    return this.color_;
  }
  setColor(e19) {
    if (typeof e19 == `object` && e19 && `src` in e19) {
      let t2 = $i(null, e19.src, {crossOrigin: `anonymous`}, void 0, e19.offset ? null : e19.color ? e19.color : null, !(e19.offset && e19.size));
      t2.ready().then(() => {
        this.patternImage_ = null;
      }), t2.getImageState() === R.IDLE && t2.load(), t2.getImageState() === R.LOADING && (this.patternImage_ = t2);
    }
    this.color_ = e19;
  }
  getKey() {
    let e19 = this.getColor();
    return e19 ? e19 instanceof CanvasPattern || e19 instanceof CanvasGradient ? D(e19) : typeof e19 == `object` && `src` in e19 ? e19.src + `:` + e19.offset : Ki(e19).toString() : ``;
  }
  loading() {
    return !!this.patternImage_;
  }
  ready() {
    return this.patternImage_ ? this.patternImage_.ready() : Promise.resolve();
  }
}, Po = class e8 {
  constructor(e19) {
    e19 || (e19 = {}), this.color_ = e19.color === void 0 ? null : e19.color, this.lineCap_ = e19.lineCap, this.lineDash_ = e19.lineDash === void 0 ? null : e19.lineDash, this.lineDashOffset_ = e19.lineDashOffset, this.lineJoin_ = e19.lineJoin, this.miterLimit_ = e19.miterLimit, this.offset_ = e19.offset, this.width_ = e19.width;
  }
  clone() {
    let t2 = this.getColor();
    return new e8({color: Array.isArray(t2) ? t2.slice() : t2 || void 0, lineCap: this.getLineCap(), lineDash: this.getLineDash()?.slice(), lineDashOffset: this.getLineDashOffset(), lineJoin: this.getLineJoin(), miterLimit: this.getMiterLimit(), offset: this.getOffset(), width: this.getWidth()});
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
  getOffset() {
    return this.offset_;
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
  setOffset(e19) {
    this.offset_ = e19;
  }
  setWidth(e19) {
    this.width_ = e19;
  }
};
function Fo(e19) {
  return e19[0] > 0 && e19[1] > 0;
}
function Io(e19, t2, n2) {
  return n2 === void 0 && (n2 = [0, 0]), n2[0] = e19[0] * t2 + 0.5 | 0, n2[1] = e19[1] * t2 + 0.5 | 0, n2;
}
function Lo(e19, t2) {
  return Array.isArray(e19) ? e19 : (t2 === void 0 ? t2 = [e19, e19] : (t2[0] = e19, t2[1] = e19), t2);
}
var Ro = class e9 {
  constructor(e19) {
    this.opacity_ = e19.opacity, this.rotateWithView_ = e19.rotateWithView, this.rotation_ = e19.rotation, this.scale_ = e19.scale, this.scaleArray_ = Lo(e19.scale), this.displacement_ = e19.displacement, this.declutterMode_ = e19.declutterMode;
  }
  clone() {
    let t2 = this.getScale();
    return new e9({opacity: this.getOpacity(), scale: Array.isArray(t2) ? t2.slice() : t2, rotation: this.getRotation(), rotateWithView: this.getRotateWithView(), displacement: this.getDisplacement().slice(), declutterMode: this.getDeclutterMode()});
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
    return T();
  }
  getImage(e19) {
    return T();
  }
  getHitDetectionImage() {
    return T();
  }
  getPixelRatio(e19) {
    return 1;
  }
  getImageState() {
    return T();
  }
  getImageSize() {
    return T();
  }
  getOrigin() {
    return T();
  }
  getSize() {
    return T();
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
    this.scale_ = e19, this.scaleArray_ = Lo(e19);
  }
  listenImageChange(e19) {
    T();
  }
  load() {
    T();
  }
  unlistenImageChange(e19) {
    T();
  }
  ready() {
    return Promise.resolve();
  }
}, zo = class e10 extends Ro {
  constructor(e19) {
    super({opacity: 1, rotateWithView: e19.rotateWithView !== void 0 && e19.rotateWithView, rotation: e19.rotation === void 0 ? 0 : e19.rotation, scale: e19.scale === void 0 ? 1 : e19.scale, displacement: e19.displacement === void 0 ? [0, 0] : e19.displacement, declutterMode: e19.declutterMode}), this.hitDetectionCanvas_ = null, this.fill_ = e19.fill === void 0 ? null : e19.fill, this.origin_ = [0, 0], this.points_ = e19.points, this.radius = e19.radius, this.radius2_ = e19.radius2, this.angle_ = e19.angle === void 0 ? 0 : e19.angle, this.stroke_ = e19.stroke === void 0 ? null : e19.stroke, this.size_, this.renderOptions_, this.imageState_ = this.fill_ && this.fill_.loading() ? R.LOADING : R.LOADED, this.imageState_ === R.LOADING && this.ready().then(() => this.imageState_ = R.LOADED), this.render();
  }
  clone() {
    let t2 = this.getScale(), n2 = new e10({fill: this.getFill()?.clone(), points: this.getPoints(), radius: this.getRadius(), radius2: this.getRadius2(), angle: this.getAngle(), stroke: this.getStroke()?.clone(), rotation: this.getRotation(), rotateWithView: this.getRotateWithView(), scale: Array.isArray(t2) ? t2.slice() : t2, displacement: this.getDisplacement().slice(), declutterMode: this.getDeclutterMode()});
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
    let t2 = this.fill_?.getKey(), n2 = `${e19},${this.angle_},${this.radius},${this.radius2_},${this.points_},${t2}` + Object.values(this.renderOptions_).join(`,`), r2 = Xi.get(n2, null)?.getImage(1);
    if (!r2) {
      let t3 = this.renderOptions_, i2 = Math.ceil(t3.size * e19), a2 = B(i2, i2);
      this.draw_(t3, a2, e19), r2 = a2.canvas;
      let o2 = new Qi(r2, void 0, {}, R.LOADED, null);
      Xi.set(n2, null, o2), createImageBitmap(r2).then((e20) => {
        o2.setImage(e20);
      });
    }
    return r2;
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
    return this.radius;
  }
  setRadius(e19) {
    this.radius !== e19 && (this.radius = e19, this.render());
  }
  getRadius2() {
    return this.radius2_;
  }
  setRadius2(e19) {
    this.radius2_ !== e19 && (this.radius2_ = e19, this.render());
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
    let r2 = this.radius, i2 = this.radius2_ === void 0 ? r2 : this.radius2_;
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
    let e19 = ga, t2 = va, n2 = 0, r2 = null, i2 = 0, a2, o2 = 0;
    this.stroke_ && (a2 = ea(this.stroke_.getColor() ?? `#000`), o2 = this.stroke_.getWidth() ?? 1, r2 = this.stroke_.getLineDash(), i2 = this.stroke_.getLineDashOffset() ?? 0, t2 = this.stroke_.getLineJoin() ?? `round`, e19 = this.stroke_.getLineCap() ?? `round`, n2 = this.stroke_.getMiterLimit() ?? 10);
    let s2 = this.calculateLineJoinSize_(t2, o2, n2), c2 = Math.max(this.radius, this.radius2_ || 0), l2 = Math.ceil(2 * c2 + s2);
    return {strokeStyle: a2, strokeWidth: o2, size: l2, lineCap: e19, lineDash: r2, lineDashOffset: i2, lineJoin: t2, miterLimit: n2};
  }
  render() {
    this.renderOptions_ = this.createRenderOptions();
    let e19 = this.renderOptions_.size;
    this.hitDetectionCanvas_ = null, this.size_ = [e19, e19];
  }
  draw_(e19, t2, n2) {
    if (t2.scale(n2, n2), t2.translate(e19.size / 2, e19.size / 2), this.createPath_(t2), this.fill_) {
      let e20 = this.fill_.getColor();
      e20 === null && (e20 = ha), t2.fillStyle = ea(e20), t2.fill();
    }
    e19.strokeStyle && (t2.strokeStyle = e19.strokeStyle, t2.lineWidth = e19.strokeWidth, e19.lineDash && (t2.setLineDash(e19.lineDash), t2.lineDashOffset = e19.lineDashOffset), t2.lineCap = e19.lineCap, t2.lineJoin = e19.lineJoin, t2.miterLimit = e19.miterLimit, t2.stroke());
  }
  createHitDetectionCanvas_(e19) {
    let t2;
    if (this.fill_) {
      let n2 = this.fill_.getColor(), r2 = 0;
      typeof n2 == `string` && (n2 = Ki(n2)), n2 === null ? r2 = 1 : Array.isArray(n2) && (r2 = n2.length === 4 ? n2[3] : 1), r2 === 0 && (t2 = B(e19.size, e19.size), this.drawHitDetectionCanvas_(e19, t2));
    }
    return t2 ? t2.canvas : this.getImage(1);
  }
  createPath_(e19) {
    let t2 = this.points_, n2 = this.radius;
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
    t2.translate(e19.size / 2, e19.size / 2), this.createPath_(t2), t2.fillStyle = ha, t2.fill(), e19.strokeStyle && (t2.strokeStyle = e19.strokeStyle, t2.lineWidth = e19.strokeWidth, e19.lineDash && (t2.setLineDash(e19.lineDash), t2.lineDashOffset = e19.lineDashOffset), t2.lineJoin = e19.lineJoin, t2.miterLimit = e19.miterLimit, t2.stroke());
  }
  ready() {
    return this.fill_ ? this.fill_.ready() : Promise.resolve();
  }
}, Bo = class e11 extends zo {
  constructor(e19) {
    e19 || (e19 = {radius: 5}), super({points: 1 / 0, fill: e19.fill, radius: e19.radius, stroke: e19.stroke, scale: e19.scale === void 0 ? 1 : e19.scale, rotation: e19.rotation === void 0 ? 0 : e19.rotation, rotateWithView: e19.rotateWithView !== void 0 && e19.rotateWithView, displacement: e19.displacement === void 0 ? [0, 0] : e19.displacement, declutterMode: e19.declutterMode});
  }
  clone() {
    let t2 = this.getScale(), n2 = new e11({fill: this.getFill()?.clone(), stroke: this.getStroke()?.clone(), radius: this.getRadius(), scale: Array.isArray(t2) ? t2.slice() : t2, rotation: this.getRotation(), rotateWithView: this.getRotateWithView(), displacement: this.getDisplacement().slice(), declutterMode: this.getDeclutterMode()});
    return n2.setOpacity(this.getOpacity()), n2;
  }
}, Vo = class e12 {
  constructor(e19) {
    e19 || (e19 = {}), this.geometry_ = null, this.geometryFunction_ = Go, e19.geometry !== void 0 && this.setGeometry(e19.geometry), this.fill_ = e19.fill === void 0 ? null : e19.fill, this.image_ = e19.image === void 0 ? null : e19.image, this.renderer_ = e19.renderer === void 0 ? null : e19.renderer, this.hitDetectionRenderer_ = e19.hitDetectionRenderer === void 0 ? null : e19.hitDetectionRenderer, this.stroke_ = e19.stroke === void 0 ? null : e19.stroke, this.text_ = e19.text === void 0 ? null : e19.text, this.zIndex_ = e19.zIndex;
  }
  clone() {
    let t2 = this.getGeometry();
    return t2 && typeof t2 == `object` && (t2 = t2.clone()), new e12({geometry: t2 ?? void 0, fill: this.getFill()?.clone(), image: this.getImage()?.clone(), renderer: this.getRenderer() ?? void 0, stroke: this.getStroke()?.clone(), text: this.getText()?.clone(), zIndex: this.getZIndex()});
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
    }) : this.geometryFunction_ = Go, this.geometry_ = e19;
  }
  setZIndex(e19) {
    this.zIndex_ = e19;
  }
};
function Ho(e19) {
  let t2;
  if (typeof e19 == `function`)
    t2 = e19;
  else {
    let n2;
    Array.isArray(e19) ? n2 = e19 : (j(typeof e19.getZIndex == `function`, "Expected an `Style` or an array of `Style`"), n2 = [e19]), t2 = function() {
      return n2;
    };
  }
  return t2;
}
var Uo = null;
function Wo(e19, t2) {
  if (!Uo) {
    let e20 = new No({color: `rgba(255,255,255,0.4)`}), t3 = new Po({color: `#3399CC`, width: 1.25});
    Uo = [new Vo({image: new Bo({fill: e20, stroke: t3, radius: 5}), fill: e20, stroke: t3})];
  }
  return Uo;
}
function Go(e19) {
  return e19.getGeometry();
}
var Ko = `#333`, qo = class e13 {
  constructor(e19) {
    e19 || (e19 = {}), this.font_ = e19.font, this.rotation_ = e19.rotation, this.rotateWithView_ = e19.rotateWithView, this.keepUpright_ = e19.keepUpright, this.scale_ = e19.scale, this.scaleArray_ = Lo(e19.scale === void 0 ? 1 : e19.scale), this.text_ = e19.text, this.textAlign_ = e19.textAlign, this.justify_ = e19.justify, this.repeat_ = e19.repeat, this.textBaseline_ = e19.textBaseline, this.fill_ = e19.fill === void 0 ? new No({color: Ko}) : e19.fill, this.maxAngle_ = e19.maxAngle === void 0 ? Math.PI / 4 : e19.maxAngle, this.placement_ = e19.placement === void 0 ? `point` : e19.placement, this.overflow_ = !!e19.overflow, this.stroke_ = e19.stroke === void 0 ? null : e19.stroke, this.offsetX_ = e19.offsetX === void 0 ? 0 : e19.offsetX, this.offsetY_ = e19.offsetY === void 0 ? 0 : e19.offsetY, this.backgroundFill_ = e19.backgroundFill ? e19.backgroundFill : null, this.backgroundStroke_ = e19.backgroundStroke ? e19.backgroundStroke : null, this.padding_ = e19.padding === void 0 ? null : e19.padding, this.declutterMode_ = e19.declutterMode;
  }
  clone() {
    let t2 = this.getScale();
    return new e13({font: this.getFont(), placement: this.getPlacement(), repeat: this.getRepeat(), maxAngle: this.getMaxAngle(), overflow: this.getOverflow(), rotation: this.getRotation(), rotateWithView: this.getRotateWithView(), keepUpright: this.getKeepUpright(), scale: Array.isArray(t2) ? t2.slice() : t2, text: this.getText(), textAlign: this.getTextAlign(), justify: this.getJustify(), textBaseline: this.getTextBaseline(), fill: this.getFill() instanceof No ? this.getFill().clone() : this.getFill(), stroke: this.getStroke()?.clone(), offsetX: this.getOffsetX(), offsetY: this.getOffsetY(), backgroundFill: this.getBackgroundFill()?.clone(), backgroundStroke: this.getBackgroundStroke()?.clone(), padding: this.getPadding() || void 0, declutterMode: this.getDeclutterMode()});
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
  getKeepUpright() {
    return this.keepUpright_;
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
  setKeepUpright(e19) {
    this.keepUpright_ = e19;
  }
  setFill(e19) {
    this.fill_ = e19;
  }
  setRotation(e19) {
    this.rotation_ = e19;
  }
  setScale(e19) {
    this.scale_ = e19, this.scaleArray_ = Lo(e19 === void 0 ? 1 : e19);
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
}, V = {ANIMATING: 0, INTERACTING: 1}, H = {BEGIN_GEOMETRY: 0, BEGIN_PATH: 1, CIRCLE: 2, CLOSE_PATH: 3, CUSTOM: 4, DRAW_CHARS: 5, DRAW_IMAGE: 6, END_GEOMETRY: 7, FILL: 8, MOVE_TO_LINE_TO: 9, SET_FILL_STYLE: 10, SET_STROKE_STYLE: 11, STROKE: 12}, Jo = [H.FILL], Yo = [H.STROKE], Xo = [H.BEGIN_PATH], Zo = [H.CLOSE_PATH], Qo = class extends aa {
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
      r2[0] = e19[o2], r2[1] = e19[o2 + 1], ve(n2, r2) && (i2[a2++] = r2[0], i2[a2++] = r2[1]);
    return a2;
  }
  appendFlatLineCoordinates(e19, t2, n2, r2, i2, a2) {
    let o2 = this.coordinates, s2 = o2.length, c2 = this.getBufferedMaxExtent();
    a2 && (t2 += r2);
    let l2 = e19[t2], u2 = e19[t2 + 1], d2 = this.tmpCoordinate_, f2 = true, p2, m2, h2;
    for (p2 = t2 + r2; p2 < n2; p2 += r2)
      d2[0] = e19[p2], d2[1] = e19[p2 + 1], h2 = xe(c2, d2), h2 === m2 ? h2 === M.INTERSECTING ? (o2[s2++] = d2[0], o2[s2++] = d2[1], f2 = false) : f2 = true : (f2 && (f2 = (o2[s2++] = l2, o2[s2++] = u2, false)), o2[s2++] = d2[0], o2[s2++] = d2[1]), l2 = d2[0], u2 = d2[1], m2 = h2;
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
        c2 = e19.getOrientedFlatCoordinates(), u2 = [];
        let t3 = e19.getEndss();
        f2 = 0;
        for (let e20 = 0, n3 = t3.length; e20 < n3; ++e20) {
          let n4 = [];
          f2 = this.drawCustomCoordinates_(c2, f2, t3[e20], o2, n4), u2.push(n4);
        }
        this.instructions.push([H.CUSTOM, s2, u2, e19, n2, Er, i2]), this.hitDetectionInstructions.push([H.CUSTOM, s2, u2, e19, r2 || n2, Er, i2]);
        break;
      case `Polygon`:
      case `MultiLineString`:
        d2 = [], c2 = a2 == `Polygon` ? e19.getOrientedFlatCoordinates() : e19.getFlatCoordinates(), f2 = this.drawCustomCoordinates_(c2, 0, e19.getEnds(), o2, d2), this.instructions.push([H.CUSTOM, s2, d2, e19, n2, Tr, i2]), this.hitDetectionInstructions.push([H.CUSTOM, s2, d2, e19, r2 || n2, Tr, i2]);
        break;
      case `LineString`:
      case `Circle`:
        c2 = e19.getFlatCoordinates(), l2 = this.appendFlatLineCoordinates(c2, 0, c2.length, o2, false, false), this.instructions.push([H.CUSTOM, s2, l2, e19, n2, wr, i2]), this.hitDetectionInstructions.push([H.CUSTOM, s2, l2, e19, r2 || n2, wr, i2]);
        break;
      case `MultiPoint`:
        c2 = e19.getFlatCoordinates(), l2 = this.appendFlatPointCoordinates(c2, o2), l2 > s2 && (this.instructions.push([H.CUSTOM, s2, l2, e19, n2, wr, i2]), this.hitDetectionInstructions.push([H.CUSTOM, s2, l2, e19, r2 || n2, wr, i2]));
        break;
      case `Point`:
        c2 = e19.getFlatCoordinates(), this.coordinates.push(c2[0], c2[1]), l2 = this.coordinates.length, this.instructions.push([H.CUSTOM, s2, l2, e19, n2, void 0, i2]), this.hitDetectionInstructions.push([H.CUSTOM, s2, l2, e19, r2 || n2, void 0, i2]);
    }
    this.endGeometry(t2);
  }
  beginGeometry(e19, t2, n2) {
    this.beginGeometryInstruction1_ = [H.BEGIN_GEOMETRY, t2, 0, e19, n2], this.instructions.push(this.beginGeometryInstruction1_), this.beginGeometryInstruction2_ = [H.BEGIN_GEOMETRY, t2, 0, e19, n2], this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
  }
  finish() {
    return {instructions: this.instructions, hitDetectionInstructions: this.hitDetectionInstructions, coordinates: this.coordinates};
  }
  reverseHitDetectionInstructions() {
    let e19 = this.hitDetectionInstructions;
    e19.reverse();
    let t2, n2 = e19.length, r2, i2, a2 = -1;
    for (t2 = 0; t2 < n2; ++t2)
      r2 = e19[t2], i2 = r2[0], i2 == H.END_GEOMETRY ? a2 = t2 : i2 == H.BEGIN_GEOMETRY && (r2[2] = t2, x(this.hitDetectionInstructions, a2, t2), a2 = -1);
  }
  fillStyleToState(e19, t2 = {}) {
    if (e19) {
      let n2 = e19.getColor();
      t2.fillPatternScale = n2 && typeof n2 == `object` && `src` in n2 ? this.pixelRatio : 1, t2.fillStyle = ea(n2 || `#000`) ?? void 0;
    } else
      t2.fillStyle = void 0;
    return t2;
  }
  strokeStyleToState(e19, t2 = {}) {
    if (e19) {
      t2.strokeStyle = ea(e19.getColor() || `#000`) ?? void 0;
      let n2 = e19.getLineCap();
      t2.lineCap = n2 === void 0 ? ga : n2;
      let r2 = e19.getLineDash();
      t2.lineDash = r2 ? r2.slice() : _a, t2.lineDashOffset = e19.getLineDashOffset() || 0;
      let i2 = e19.getLineJoin();
      t2.lineJoin = i2 === void 0 ? va : i2;
      let a2 = e19.getWidth();
      t2.lineWidth = a2 === void 0 ? 1 : a2;
      let o2 = e19.getMiterLimit();
      t2.miterLimit = o2 === void 0 ? 10 : o2, t2.strokeOffset = e19.getOffset() ?? 0, t2.lineWidth > this.maxLineWidth && (this.maxLineWidth = t2.lineWidth, this.bufferedMaxExtent_ = null);
    } else
      t2.strokeStyle = void 0, t2.lineCap = void 0, t2.lineDash = null, t2.lineDashOffset = void 0, t2.lineJoin = void 0, t2.lineWidth = void 0, t2.miterLimit = void 0, t2.strokeOffset = void 0;
    return t2;
  }
  setFillStrokeStyle(e19, t2) {
    let n2 = this.state;
    this.fillStyleToState(e19, n2), this.strokeStyleToState(t2, n2);
  }
  createFill(e19) {
    let t2 = e19.fillStyle, n2 = [H.SET_FILL_STYLE, t2];
    return typeof t2 != `string` && n2.push(e19.fillPatternScale), n2;
  }
  applyStroke(e19) {
    this.instructions.push(this.createStroke(e19));
  }
  createStroke(e19) {
    return [H.SET_STROKE_STYLE, e19.strokeStyle, e19.lineWidth * this.pixelRatio, e19.lineCap, e19.lineJoin, e19.miterLimit, e19.lineDash ? this.applyPixelRatio(e19.lineDash) : null, e19.lineDashOffset * this.pixelRatio];
  }
  updateFillStyle(e19, t2) {
    let n2 = e19.fillStyle;
    (n2 !== void 0 && typeof n2 != `string` || e19.currentFillStyle != n2) && (this.instructions.push(t2.call(this, e19)), e19.currentFillStyle = n2);
  }
  updateStrokeStyle(e19, t2) {
    let n2 = e19.strokeStyle, r2 = e19.lineCap, i2 = e19.lineDash, a2 = e19.lineDashOffset, o2 = e19.lineJoin, s2 = e19.lineWidth, c2 = e19.miterLimit, l2 = e19.strokeOffset;
    e19.currentStrokeStyle == n2 && e19.currentLineCap == r2 && (i2 == e19.currentLineDash || i2 && e19.currentLineDash && C(e19.currentLineDash, i2)) && e19.currentLineDashOffset == a2 && e19.currentLineJoin == o2 && e19.currentLineWidth == s2 && e19.currentMiterLimit == c2 && e19.currentStrokeOffset == l2 || (t2.call(this, e19), e19.currentStrokeStyle = n2, e19.currentLineCap = r2, e19.currentLineDash = i2, e19.currentLineDashOffset = a2, e19.currentLineJoin = o2, e19.currentLineWidth = s2, e19.currentMiterLimit = c2, e19.currentStrokeOffset = l2);
  }
  endGeometry(e19) {
    this.beginGeometryInstruction1_[2] = this.instructions.length, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length, this.beginGeometryInstruction2_ = null;
    let t2 = [H.END_GEOMETRY, e19];
    this.instructions.push(t2), this.hitDetectionInstructions.push(t2);
  }
  getBufferedMaxExtent() {
    if (!this.bufferedMaxExtent_ && (this.bufferedMaxExtent_ = ge(this.maxExtent), this.maxLineWidth > 0)) {
      let e19 = this.resolution * (this.maxLineWidth + 1) / 2;
      he(this.bufferedMaxExtent_, e19, this.bufferedMaxExtent_);
    }
    return this.bufferedMaxExtent_;
  }
}, $o = class extends Qo {
  constructor(e19, t2, n2, r2) {
    super(e19, t2, n2, r2), this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.anchorX_ = void 0, this.anchorY_ = void 0, this.height_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.scale_ = void 0, this.width_ = void 0, this.declutterMode_ = void 0, this.declutterImageWithText_ = void 0;
  }
  drawPoint(e19, t2, n2) {
    if (!this.image_ || this.maxExtent && !ve(this.maxExtent, e19.getFlatCoordinates()))
      return;
    this.beginGeometry(e19, t2, n2 ?? 0);
    let r2 = e19.getFlatCoordinates(), i2 = e19.getStride(), a2 = this.coordinates.length, o2 = this.appendFlatPointCoordinates(r2, i2), s2 = this.imagePixelRatio_ ?? 1, c2 = this.anchorX_ ?? 0, l2 = this.anchorY_ ?? 0, u2 = this.height_ ?? 0, d2 = this.originX_ ?? 0, f2 = this.originY_ ?? 0, p2 = this.scale_ ?? [1, 1], m2 = this.width_ ?? 0;
    this.instructions.push([H.DRAW_IMAGE, a2, o2, this.image_, c2 * s2, l2 * s2, Math.ceil(u2 * s2), this.opacity_, d2 * s2, f2 * s2, this.rotateWithView_, this.rotation_, [p2[0] * this.pixelRatio / s2, p2[1] * this.pixelRatio / s2], Math.ceil(m2 * s2), this.declutterMode_, this.declutterImageWithText_]), this.hitDetectionInstructions.push([H.DRAW_IMAGE, a2, o2, this.hitDetectionImage_, this.anchorX_, this.anchorY_, this.height_, 1, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_, this.width_, this.declutterMode_, this.declutterImageWithText_]), this.endGeometry(t2);
  }
  drawMultiPoint(e19, t2, n2) {
    if (!this.image_)
      return;
    this.beginGeometry(e19, t2, n2 ?? 0);
    let r2 = e19.getFlatCoordinates(), i2 = [];
    for (let t3 = 0, n3 = r2.length; t3 < n3; t3 += e19.getStride())
      (!this.maxExtent || ve(this.maxExtent, r2.slice(t3, t3 + 2))) && i2.push(r2[t3], r2[t3 + 1]);
    let a2 = this.coordinates.length, o2 = this.appendFlatPointCoordinates(i2, 2), s2 = this.imagePixelRatio_ ?? 1, c2 = this.anchorX_ ?? 0, l2 = this.anchorY_ ?? 0, u2 = this.height_ ?? 0, d2 = this.originX_ ?? 0, f2 = this.originY_ ?? 0, p2 = this.scale_ ?? [1, 1], m2 = this.width_ ?? 0;
    this.instructions.push([H.DRAW_IMAGE, a2, o2, this.image_, c2 * s2, l2 * s2, Math.ceil(u2 * s2), this.opacity_, d2 * s2, f2 * s2, this.rotateWithView_, this.rotation_, [p2[0] * this.pixelRatio / s2, p2[1] * this.pixelRatio / s2], Math.ceil(m2 * s2), this.declutterMode_, this.declutterImageWithText_]), this.hitDetectionInstructions.push([H.DRAW_IMAGE, a2, o2, this.hitDetectionImage_, this.anchorX_, this.anchorY_, this.height_, 1, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_, this.width_, this.declutterMode_, this.declutterImageWithText_]), this.endGeometry(t2);
  }
  finish() {
    return this.reverseHitDetectionInstructions(), this.anchorX_ = void 0, this.anchorY_ = void 0, this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.height_ = void 0, this.scale_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.width_ = void 0, super.finish();
  }
  setImageStyle(e19, t2) {
    let n2 = e19.getAnchor(), r2 = e19.getSize(), i2 = e19.getOrigin();
    n2 && r2 && i2 && (this.imagePixelRatio_ = e19.getPixelRatio(this.pixelRatio), this.anchorX_ = n2[0], this.anchorY_ = n2[1], this.hitDetectionImage_ = e19.getHitDetectionImage(), this.image_ = e19.getImage(this.pixelRatio), this.height_ = r2[1], this.opacity_ = e19.getOpacity(), this.originX_ = i2[0], this.originY_ = i2[1], this.rotateWithView_ = e19.getRotateWithView(), this.rotation_ = e19.getRotation(), this.scale_ = e19.getScaleArray(), this.width_ = r2[0], this.declutterMode_ = e19.getDeclutterMode(), this.declutterImageWithText_ = t2);
  }
}, es = class extends Qo {
  constructor(e19, t2, n2, r2) {
    super(e19, t2, n2, r2);
  }
  drawFlatCoordinates_(e19, t2, n2, r2, i2) {
    let a2 = (i2 ?? 0) * this.pixelRatio, o2 = this.coordinates.length, s2 = this.appendFlatLineCoordinates(e19, t2, n2, r2, false, false);
    return this.instructions.push([H.MOVE_TO_LINE_TO, o2, s2, a2]), this.hitDetectionInstructions.push([H.MOVE_TO_LINE_TO, o2, s2, i2 ?? 0]), n2;
  }
  drawLineString(e19, t2, n2) {
    let r2 = this.state;
    if (!r2)
      return;
    let i2 = r2.strokeStyle, a2 = r2.lineWidth, o2 = r2.strokeOffset;
    if (i2 === void 0 || a2 === void 0)
      return;
    this.updateStrokeStyle(r2, this.applyStroke), this.beginGeometry(e19, t2, n2 ?? 0), this.hitDetectionInstructions.push([H.SET_STROKE_STYLE, ya, r2.lineWidth, r2.lineCap, r2.lineJoin, r2.miterLimit, _a, 0], Xo);
    let s2 = e19.getFlatCoordinates(), c2 = e19.getStride();
    this.drawFlatCoordinates_(s2, 0, s2.length, c2, o2), this.hitDetectionInstructions.push(Yo), this.endGeometry(t2);
  }
  drawMultiLineString(e19, t2, n2) {
    let r2 = this.state;
    if (!r2)
      return;
    let i2 = r2.strokeStyle, a2 = r2.lineWidth, o2 = r2.strokeOffset;
    if (i2 === void 0 || a2 === void 0)
      return;
    this.updateStrokeStyle(r2, this.applyStroke), this.beginGeometry(e19, t2, n2 ?? 0), this.hitDetectionInstructions.push([H.SET_STROKE_STYLE, ya, r2.lineWidth, r2.lineCap, r2.lineJoin, r2.miterLimit, _a, 0], Xo);
    let s2 = e19.getEnds() ?? [], c2 = e19.getFlatCoordinates(), l2 = e19.getStride(), u2 = 0;
    for (let e20 = 0, t3 = s2.length; e20 < t3; ++e20)
      u2 = this.drawFlatCoordinates_(c2, u2, s2[e20], l2, o2);
    this.hitDetectionInstructions.push(Yo), this.endGeometry(t2);
  }
  finish() {
    let e19 = this.state;
    return e19 && e19.lastStroke != null && e19.lastStroke != this.coordinates.length && this.instructions.push(Yo), this.reverseHitDetectionInstructions(), this.state = null, super.finish();
  }
  applyStroke(e19) {
    e19.lastStroke != null && e19.lastStroke != this.coordinates.length && (this.instructions.push(Yo), e19.lastStroke = this.coordinates.length), e19.lastStroke = 0, super.applyStroke(e19), this.instructions.push(Xo);
  }
}, ts = class extends Qo {
  constructor(e19, t2, n2, r2) {
    super(e19, t2, n2, r2);
  }
  drawFlatCoordinatess_(e19, t2, n2, r2, i2) {
    let a2 = this.state, o2 = i2 ?? 0, s2 = a2.fillStyle !== void 0, c2 = a2.strokeStyle !== void 0, l2 = n2.length;
    this.instructions.push(Xo), this.hitDetectionInstructions.push(Xo);
    for (let i3 = 0; i3 < l2; ++i3) {
      let a3 = n2[i3], s3 = this.coordinates.length, l3 = this.appendFlatLineCoordinates(e19, t2, a3, r2, true, !c2);
      this.instructions.push([H.MOVE_TO_LINE_TO, s3, l3, o2 * this.pixelRatio, true]), this.hitDetectionInstructions.push([H.MOVE_TO_LINE_TO, s3, l3, o2, true]), c2 && (this.instructions.push(Zo), this.hitDetectionInstructions.push(Zo)), t2 = a3;
    }
    return s2 && (this.instructions.push(Jo), this.hitDetectionInstructions.push(Jo)), c2 && (this.instructions.push(Yo), this.hitDetectionInstructions.push(Yo)), t2;
  }
  drawCircle(e19, t2, n2) {
    let r2 = this.state;
    if (!r2)
      return;
    let i2 = r2.fillStyle, a2 = r2.strokeStyle, o2 = r2.strokeOffset;
    if (i2 === void 0 && a2 === void 0 || this.handleStrokeOffset_(() => this.drawCircle(e19, t2, n2)))
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(e19, t2, n2 ?? 0), r2.fillStyle !== void 0 && this.hitDetectionInstructions.push([H.SET_FILL_STYLE, ha]), r2.strokeStyle !== void 0 && this.hitDetectionInstructions.push([H.SET_STROKE_STYLE, ya, r2.lineWidth, r2.lineCap, r2.lineJoin, r2.miterLimit, _a, 0]);
    let s2 = e19.getFlatCoordinates(), c2 = e19.getStride(), l2 = this.coordinates.length;
    this.appendFlatLineCoordinates(s2, 0, s2.length, c2, false, false);
    let u2 = [H.CIRCLE, l2, o2];
    this.instructions.push(Xo, u2), this.hitDetectionInstructions.push(Xo, u2), r2.fillStyle !== void 0 && (this.instructions.push(Jo), this.hitDetectionInstructions.push(Jo)), r2.strokeStyle !== void 0 && (this.instructions.push(Yo), this.hitDetectionInstructions.push(Yo)), this.endGeometry(t2);
  }
  drawPolygon(e19, t2, n2) {
    let r2 = this.state;
    if (!r2)
      return;
    let i2 = r2.fillStyle, a2 = r2.strokeStyle, o2 = r2.strokeOffset;
    if (i2 === void 0 && a2 === void 0 || this.handleStrokeOffset_(() => this.drawPolygon(e19, t2, n2)))
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(e19, t2, n2 ?? 0), r2.fillStyle !== void 0 && this.hitDetectionInstructions.push([H.SET_FILL_STYLE, ha]), r2.strokeStyle !== void 0 && this.hitDetectionInstructions.push([H.SET_STROKE_STYLE, ya, r2.lineWidth, r2.lineCap, r2.lineJoin, r2.miterLimit, _a, 0]);
    let s2 = e19.getEnds(), c2 = e19.getOrientedFlatCoordinates(), l2 = e19.getStride();
    this.drawFlatCoordinatess_(c2, 0, s2, l2, o2), this.endGeometry(t2);
  }
  drawMultiPolygon(e19, t2, n2) {
    let r2 = this.state;
    if (!r2)
      return;
    let i2 = r2.fillStyle, a2 = r2.strokeStyle, o2 = r2.strokeOffset;
    if (i2 === void 0 && a2 === void 0 || this.handleStrokeOffset_(() => this.drawMultiPolygon(e19, t2, n2)))
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(e19, t2, n2 ?? 0), r2.fillStyle !== void 0 && this.hitDetectionInstructions.push([H.SET_FILL_STYLE, ha]), r2.strokeStyle !== void 0 && this.hitDetectionInstructions.push([H.SET_STROKE_STYLE, ya, r2.lineWidth, r2.lineCap, r2.lineJoin, r2.miterLimit, _a, 0]);
    let s2 = e19.getEndss(), c2 = e19.getOrientedFlatCoordinates(), l2 = e19.getStride(), u2 = 0;
    for (let e20 = 0, t3 = s2.length; e20 < t3; ++e20)
      u2 = this.drawFlatCoordinatess_(c2, u2, s2[e20], l2, o2);
    this.endGeometry(t2);
  }
  finish() {
    this.reverseHitDetectionInstructions(), this.state = null;
    let e19 = this.tolerance;
    if (e19 !== 0) {
      let t2 = this.coordinates;
      for (let n2 = 0, r2 = t2.length; n2 < r2; ++n2)
        t2[n2] = Ir(t2[n2], e19);
    }
    return super.finish();
  }
  setFillStrokeStyles_() {
    let e19 = this.state;
    e19 && (this.updateFillStyle(e19, this.createFill), this.updateStrokeStyle(e19, this.applyStroke));
  }
  handleStrokeOffset_(e19) {
    let t2 = this.state, n2 = t2.fillStyle, r2 = t2.strokeStyle, i2 = t2.strokeOffset ?? 0;
    return Math.abs(i2) > 0 && n2 !== void 0 && r2 !== void 0 && (t2.strokeStyle = void 0, t2.strokeOffset = 0, e19(), t2.fillStyle = void 0, t2.strokeStyle = r2, t2.strokeOffset = i2, e19(), t2.fillStyle = n2, true);
  }
}, ns = 0, rs = 1;
function is(e19, t2, n2, r2, i2, a2, o2, s2) {
  let c2 = o2 - i2, l2 = s2 - a2, u2 = 0, d2 = 1;
  if (c2 === 0) {
    if (i2 < e19 || i2 > n2)
      return false;
  } else {
    let t3 = (e19 - i2) / c2, r3 = (n2 - i2) / c2;
    if (t3 > r3) {
      let e20 = t3;
      t3 = r3, r3 = e20;
    }
    if (t3 > u2 && (u2 = t3), r3 < d2 && (d2 = r3), u2 > d2)
      return false;
  }
  if (l2 === 0) {
    if (a2 < t2 || a2 > r2)
      return false;
  } else {
    let e20 = (t2 - a2) / l2, n3 = (r2 - a2) / l2;
    if (e20 > n3) {
      let t3 = e20;
      e20 = n3, n3 = t3;
    }
    if (e20 > u2 && (u2 = e20), n3 < d2 && (d2 = n3), u2 > d2)
      return false;
  }
  return ns = u2, rs = d2, true;
}
function as(e19, t2, n2, r2) {
  let i2 = r2[0], a2 = r2[1], o2 = r2[2], s2 = r2[3], c2 = [], l2 = [], u2 = false, d2, f2, p2 = 0;
  for (let r3 = 0, m2 = t2.length; r3 < m2; ++r3) {
    let m3 = t2[r3], h2 = e19[p2], g2 = e19[p2 + 1], _2 = false;
    for (let t3 = p2 + n2; t3 < m3; t3 += n2) {
      let n3 = e19[t3], r4 = e19[t3 + 1];
      if (is(i2, a2, o2, s2, h2, g2, n3, r4)) {
        let e20 = n3 - h2, t4 = r4 - g2, i3 = h2 + ns * e20, a3 = g2 + ns * t4, o3 = h2 + rs * e20, s3 = g2 + rs * t4;
        u2 && _2 && i3 === d2 && a3 === f2 ? c2.push(o3, s3) : (u2 && l2.push(c2.length), c2.push(i3, a3, o3, s3), u2 = true), d2 = o3, f2 = s3, _2 = true;
      }
      h2 = n3, g2 = r4;
    }
    p2 = m3;
  }
  return u2 && l2.push(c2.length), {flatCoordinates: c2, ends: l2};
}
function os(e19, t2, n2, r2, i2) {
  let a2 = [], o2 = n2, s2 = 0, c2 = t2.slice(n2, 2);
  for (; s2 < e19 && o2 + i2 < r2; ) {
    let [n3, r3] = c2.slice(-2), l2 = t2[o2 + i2], u2 = t2[o2 + i2 + 1], d2 = Math.sqrt((l2 - n3) * (l2 - n3) + (u2 - r3) * (u2 - r3));
    if (s2 += d2, s2 >= e19) {
      let t3 = (e19 - s2 + d2) / d2, f2 = nt(n3, l2, t3), p2 = nt(r3, u2, t3);
      c2.push(f2, p2), a2.push(c2), c2 = [f2, p2], s2 == e19 && (o2 += i2), s2 = 0;
    } else if (s2 < e19)
      c2.push(t2[o2 + i2], t2[o2 + i2 + 1]), o2 += i2;
    else {
      let e20 = d2 - s2, t3 = nt(n3, l2, e20 / d2), f2 = nt(r3, u2, e20 / d2);
      c2.push(t3, f2), a2.push(c2), c2 = [t3, f2], s2 = 0, o2 += i2;
    }
  }
  return s2 > 0 && a2.push(c2), a2;
}
function ss(e19, t2, n2, r2, i2) {
  let a2 = n2, o2 = n2, s2 = 0, c2 = 0, l2 = n2, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2;
  for (d2 = n2; d2 < r2; d2 += i2) {
    let n3 = t2[d2], r3 = t2[d2 + 1];
    m2 !== void 0 && h2 !== void 0 && (v2 = n3 - m2, y2 = r3 - h2, p2 = Math.sqrt(v2 * v2 + y2 * y2), g2 !== void 0 && _2 !== void 0 && f2 !== void 0 && (c2 += f2, u2 = Math.acos((g2 * v2 + _2 * y2) / (f2 * p2)), u2 > e19 && (c2 > s2 && (s2 = c2, a2 = l2, o2 = d2), c2 = 0, l2 = d2 - i2)), f2 = p2, g2 = v2, _2 = y2), m2 = n3, h2 = r3;
  }
  return c2 += p2 || 0, c2 > s2 ? [l2, d2] : [a2, o2];
}
var cs = {left: 0, center: 0.5, right: 1, top: 0, middle: 0.5, hanging: 0.2, alphabetic: 0.8, ideographic: 0.8, bottom: 1}, ls = {Circle: ts, Default: Qo, Image: $o, LineString: es, Polygon: ts, Text: class extends Qo {
  constructor(e19, t2, n2, r2) {
    super(e19, t2, n2, r2), this.labels_ = null, this.text_ = ``, this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = void 0, this.textKeepUpright_ = void 0, this.textRotation_ = 0, this.textFillState_ = null, this.fillStates = {}, this.fillStates[ha] = {fillStyle: ha}, this.textStrokeState_ = null, this.strokeStates = {}, this.textState_ = {}, this.textStates = {}, this.textKey_ = ``, this.fillKey_ = ``, this.strokeKey_ = ``, this.declutterMode_ = void 0, this.declutterImageWithText_ = void 0;
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
      let r3 = e19.getExtent();
      if (!Ue(this.maxExtent, r3))
        return;
      let i3 = [];
      if (l2 = e19.getFlatCoordinates(), c2 == `LineString`)
        i3 = [l2.length];
      else if (c2 == `MultiLineString`)
        i3 = e19.getEnds();
      else if (c2 == `Polygon`)
        i3 = e19.getEnds().slice(0, 1);
      else if (c2 == `MultiPolygon`) {
        let t3 = e19.getEndss();
        i3 = [];
        for (let e20 = 0, n3 = t3.length; e20 < n3; ++e20)
          i3.push(t3[e20][0]);
      }
      if (a2.textAlign === void 0 && (c2 == `LineString` || c2 == `MultiLineString`) && !ye(this.getBufferedMaxExtent(), r3)) {
        let e20 = as(l2, i3, u2, this.getBufferedMaxExtent());
        if (l2 = e20.flatCoordinates, i3 = e20.ends, u2 = 2, i3.length === 0)
          return;
      }
      this.beginGeometry(e19, t2, n2 ?? 0);
      let d2 = a2.repeat, f2 = d2 ? void 0 : a2.textAlign, p2 = 0;
      for (let e20 = 0, t3 = i3.length; e20 < t3; ++e20) {
        let t4;
        t4 = d2 ? os(d2 * this.resolution, l2, p2, i3[e20], u2) : [l2.slice(p2, i3[e20])];
        for (let n3 = 0, r4 = t4.length; n3 < r4; ++n3) {
          let r5 = t4[n3], c3 = 0, l3 = r5.length;
          if (f2 == null) {
            let e21 = ss(a2.maxAngle ?? Math.PI / 4, r5, 0, r5.length, 2);
            c3 = e21[0], l3 = e21[1];
          }
          for (let e21 = c3; e21 < l3; e21 += u2)
            o2.push(r5[e21], r5[e21 + 1]);
          let d3 = o2.length;
          p2 = i3[e20], this.drawChars_(s2, d3), s2 = d3;
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
          l2 = e19.getFlatInteriorPoint(), !a2.overflow && r3 && r3.push(l2[2] / this.resolution), u2 = 3;
          break;
        case `MultiPolygon`:
          let t3 = e19.getFlatInteriorPoints();
          l2 = [];
          for (let e20 = 0, n3 = t3.length; e20 < n3; e20 += 3)
            !a2.overflow && r3 && r3.push(t3[e20 + 2] / this.resolution), l2.push(t3[e20], t3[e20 + 1]);
          if (l2.length === 0)
            return;
          u2 = 2;
          break;
        default:
          return;
      }
      if (!l2)
        return;
      let i3 = this.appendFlatPointCoordinates(l2, u2);
      if (i3 === s2)
        return;
      if (r3 && (i3 - s2) / 2 !== l2.length / u2) {
        let e20 = l2, t3 = s2 / 2;
        r3 = r3.filter((n3, r4) => {
          let i4 = o2[(t3 + r4) * 2] === e20[r4 * u2] && o2[(t3 + r4) * 2 + 1] === e20[r4 * u2 + 1];
          return i4 || --t3, i4;
        });
      }
      this.saveTextStates_();
      let d2 = a2.backgroundFill ? this.createFill(this.fillStyleToState(a2.backgroundFill)) : null, f2 = a2.backgroundStroke ? this.createStroke(this.strokeStyleToState(a2.backgroundStroke)) : null;
      this.beginGeometry(e19, t2, n2 ?? 0);
      let p2 = a2.scale ?? [1, 1], m2 = a2.padding ?? Sa;
      if (m2 != Sa && (p2[0] < 0 || p2[1] < 0)) {
        let e20 = m2[0], t3 = m2[1], n3 = m2[2], r4 = m2[3];
        p2[0] < 0 && (t3 = -t3, r4 = -r4), p2[1] < 0 && (e20 = -e20, n3 = -n3), m2 = [e20, t3, n3, r4];
      }
      let h2 = this.pixelRatio;
      this.instructions.push([H.DRAW_IMAGE, s2, i3, null, NaN, NaN, NaN, 1, 0, 0, this.textRotateWithView_, this.textRotation_, [1, 1], NaN, this.declutterMode_, this.declutterImageWithText_, m2 == Sa ? Sa : m2.map(function(e20) {
        return e20 * h2;
      }), d2, f2, this.text_, this.textKey_, this.strokeKey_, this.fillKey_, this.textOffsetX_, this.textOffsetY_, r3]);
      let g2 = 1 / h2, _2 = d2 ? d2.slice(0) : null;
      _2 && (_2[1] = ha), this.hitDetectionInstructions.push([H.DRAW_IMAGE, s2, i3, null, NaN, NaN, NaN, 1, 0, 0, this.textRotateWithView_, this.textRotation_, [g2, g2], NaN, this.declutterMode_, this.declutterImageWithText_, m2, _2, f2, this.text_, this.textKey_, this.strokeKey_, this.fillKey_ ? ha : this.fillKey_, this.textOffsetX_, this.textOffsetY_, r3]), this.endGeometry(t2);
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
    let s2 = this.pixelRatio, c2 = cs[r2.textBaseline || `middle`], l2 = this.textOffsetX_ * s2, u2 = this.textOffsetY_ * s2, d2 = this.text_, f2 = r2.scale ?? [1, 1], p2 = n2 ? n2.lineWidth * Math.abs(f2[0]) / 2 : 0;
    this.instructions.push([H.DRAW_CHARS, e19, t2, c2, r2.overflow, o2, r2.maxAngle, s2, u2, i2, p2 * s2, d2, a2, 1, this.declutterMode_, this.textKeepUpright_, l2]), this.hitDetectionInstructions.push([H.DRAW_CHARS, e19, t2, c2, r2.overflow, o2 && ha, r2.maxAngle, s2, u2, i2, p2 * s2, d2, a2, 1 / s2, this.declutterMode_, this.textKeepUpright_, l2]);
  }
  setTextStyle(e19, t2) {
    let n2, r2, i2;
    if (!e19)
      this.text_ = ``;
    else {
      let t3 = e19.getFill();
      t3 ? (r2 = this.textFillState_, r2 || (r2 = {}, this.textFillState_ = r2), r2.fillStyle = ea(t3.getColor() || `#000`) || `#000`) : (r2 = null, this.textFillState_ = r2);
      let a2 = e19.getStroke();
      if (!a2)
        i2 = null, this.textStrokeState_ = i2;
      else {
        i2 = this.textStrokeState_, i2 || (i2 = {}, this.textStrokeState_ = i2);
        let e20 = a2.getLineDash(), t4 = a2.getLineDashOffset(), n3 = a2.getWidth(), r3 = a2.getMiterLimit();
        i2.lineCap = a2.getLineCap() || `round`, i2.lineDash = e20 ? e20.slice() : _a, i2.lineDashOffset = t4 === void 0 ? 0 : t4, i2.lineJoin = a2.getLineJoin() || `round`, i2.lineWidth = n3 === void 0 ? 1 : n3, i2.miterLimit = r3 === void 0 ? 10 : r3, i2.strokeStyle = ea(a2.getColor() || `#000`) || `#000`;
      }
      n2 = this.textState_;
      let o2 = e19.getFont() || `10px sans-serif`;
      ka(o2);
      let s2 = e19.getScaleArray();
      n2.overflow = e19.getOverflow(), n2.font = o2, n2.maxAngle = e19.getMaxAngle(), n2.placement = e19.getPlacement(), n2.textAlign = e19.getTextAlign(), n2.repeat = e19.getRepeat(), n2.justify = e19.getJustify(), n2.textBaseline = e19.getTextBaseline() || `middle`, n2.backgroundFill = e19.getBackgroundFill() ?? void 0, n2.backgroundStroke = e19.getBackgroundStroke() ?? void 0, n2.padding = e19.getPadding() || Sa, n2.scale = s2 === void 0 ? [1, 1] : s2;
      let c2 = e19.getOffsetX(), l2 = e19.getOffsetY(), u2 = e19.getRotateWithView(), d2 = e19.getKeepUpright(), f2 = e19.getRotation();
      this.text_ = e19.getText() || ``, this.textOffsetX_ = c2 === void 0 ? 0 : c2, this.textOffsetY_ = l2 === void 0 ? 0 : l2, this.textRotateWithView_ = u2 !== void 0 && u2, this.textKeepUpright_ = d2 === void 0 || d2, this.textRotation_ = f2 === void 0 ? 0 : f2, this.strokeKey_ = i2 ? (typeof i2.strokeStyle == `string` ? i2.strokeStyle : D(i2.strokeStyle)) + i2.lineCap + i2.lineDashOffset + `|` + i2.lineWidth + i2.lineJoin + i2.miterLimit + `[` + i2.lineDash.join() + `]` : ``, this.textKey_ = n2.font + n2.scale + (n2.textAlign || `?`) + (n2.repeat || `?`) + (n2.justify || `?`) + (n2.textBaseline || `?`), this.fillKey_ = r2 && r2.fillStyle ? typeof r2.fillStyle == `string` ? r2.fillStyle : `|` + D(r2.fillStyle) : ``;
    }
    this.declutterMode_ = e19 ? e19.getDeclutterMode() : void 0, this.declutterImageWithText_ = t2;
  }
}}, us = class {
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
      let e20 = ls[t2];
      i2 = new e20(this.tolerance_, this.maxExtent_, this.resolution_, this.pixelRatio_), r2[t2] = i2;
    }
    return i2;
  }
}, ds, fs = RegExp(`[\u0591-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFC\u0800-\u0FFF\uE800-\uEFFF]`);
function ps() {
  return ds || (ds = new Intl.Segmenter(void 0, {granularity: `grapheme`})), ds;
}
function ms(e19, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2 = true) {
  let p2 = e19[t2], m2 = e19[t2 + 1], h2 = 0, g2 = 0, _2 = 0, v2 = 0;
  function y2() {
    h2 = p2, g2 = m2, t2 += r2, p2 = e19[t2], m2 = e19[t2 + 1], v2 += _2, _2 = Math.sqrt((p2 - h2) * (p2 - h2) + (m2 - g2) * (m2 - g2));
  }
  do
    y2();
  while (t2 < n2 - r2 && v2 + _2 < a2);
  let b2 = _2 === 0 ? 0 : (a2 - v2) / _2, x2 = nt(h2, p2, b2), S2 = nt(g2, m2, b2), C2 = t2 - r2, w2 = v2, T2 = a2 + s2 * c2(l2, i2, u2);
  for (; t2 < n2 - r2 && v2 + _2 < T2; )
    y2();
  b2 = _2 === 0 ? 0 : (T2 - v2) / _2;
  let E2 = nt(h2, p2, b2), D2 = nt(g2, m2, b2), O2 = false;
  if (f2) {
    if (d2) {
      let e20 = [x2, S2, E2, D2];
      ir(e20, 0, 4, 2, d2, e20, e20), O2 = e20[0] > e20[2];
    } else
      O2 = x2 > E2;
  }
  let k2 = Math.PI, A2 = [], ee2 = C2 + r2 === t2;
  t2 = C2, _2 = 0, v2 = w2, p2 = e19[t2], m2 = e19[t2 + 1];
  let te2;
  if (ee2)
    return y2(), te2 = Math.atan2(m2 - g2, p2 - h2), O2 && (te2 += te2 > 0 ? -k2 : k2), A2[0] = [(E2 + x2) / 2, (D2 + S2) / 2, (T2 - a2) / 2, te2, i2], A2;
  i2 = i2.replace(/\n/g, ` `);
  let ne2 = Array.from(ps().segment(i2), (e20) => e20.segment), re2 = O2 !== fs.test(i2);
  for (let e20 = 0, i3 = ne2.length; e20 < i3; ) {
    y2();
    let d3 = Math.atan2(m2 - g2, p2 - h2);
    if (O2 && (d3 += d3 > 0 ? -k2 : k2), te2 !== void 0) {
      let e21 = d3 - te2;
      if (e21 += e21 > k2 ? -2 * k2 : e21 < -k2 ? 2 * k2 : 0, Math.abs(e21) > o2)
        return null;
    }
    te2 = d3;
    let f3 = e20, x3 = 0;
    for (; e20 < i3; ++e20) {
      let o3 = s2 * c2(l2, ne2[re2 ? i3 - e20 - 1 : e20], u2);
      if (t2 + r2 < n2 && v2 + _2 < a2 + x3 + o3 / 2)
        break;
      x3 += o3;
    }
    if (e20 === f3)
      continue;
    let S3 = (re2 ? ne2.slice(i3 - e20, i3 - f3) : ne2.slice(f3, e20)).join(``);
    b2 = _2 === 0 ? 0 : (a2 + x3 / 2 - v2) / _2;
    let C3 = nt(h2, p2, b2), w3 = nt(g2, m2, b2);
    A2.push([C3, w3, x3 / 2, d3, S3]), a2 += x3;
  }
  return A2;
}
var hs = class {
  constructor() {
    this.instructions_ = [], this.zIndex = 0, this.offset_ = 0, this.pendingMethod_, this.context_ = new Proxy(fi(), {get: (e19, t2) => {
      if (typeof e19[t2] == `function`)
        return this.pendingMethod_ = t2, this.pushMethodArgs_;
    }, set: (e19, t2, n2) => (this.push_(t2, n2), true)});
  }
  push_(...e19) {
    let t2 = this.instructions_, n2 = this.zIndex + this.offset_;
    t2[n2] || (t2[n2] = []), t2[n2].push(...e19);
  }
  pushMethodArgs_ = (...e19) => {
    this.push_(this.pendingMethod_, e19);
  };
  pushFunction(e19) {
    this.push_(e19);
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
        typeof e19[r3] == `function` ? e19[r3](...i2) : e19[r3] = typeof i2 == `function` ? i2(e19) : i2;
      }
    });
  }
  clear() {
    this.instructions_.length = 0, this.zIndex = 0, this.offset_ = 0;
  }
  offset() {
    this.offset_ = this.instructions_.length, this.zIndex = 0;
  }
}, gs = N(), _s = [], vs = [], ys = [], bs = [];
function xs(e19) {
  return e19[3].declutterBox;
}
function Ss(e19, t2) {
  return t2 === `start` ? t2 = fs.test(e19) ? `right` : `left` : t2 === `end` && (t2 = fs.test(e19) ? `left` : `right`), cs[t2];
}
function Cs(e19, t2, n2) {
  return n2 > 0 && e19.push(`
`, ``), e19.push(t2, ``), e19;
}
function ws(e19, t2, n2) {
  return n2 % 2 == 0 && (e19 += t2), e19;
}
var Ts = class {
  constructor(e19, t2, n2, r2, i2) {
    this.overlaps = n2, this.pixelRatio = t2, this.resolution = e19, this.alignAndScaleFill_, this.instructions = r2.instructions, this.coordinates = r2.coordinates, this.coordinateCache_ = {}, this.renderedTransform_ = Jn(), this.hitDetectionInstructions = r2.hitDetectionInstructions, this.pixelCoordinates_ = null, this.viewRotation_ = 0, this.fillStates = r2.fillStates || {}, this.strokeStates = r2.strokeStates || {}, this.textStates = r2.textStates || {}, this.widths_ = {}, this.labels_ = {}, this.zIndexContext_ = i2 ? new hs() : null;
  }
  getZIndexContext() {
    return this.zIndexContext_;
  }
  createLabel(e19, t2, n2, r2) {
    let i2 = e19 + t2 + n2 + r2;
    if (this.labels_[i2])
      return this.labels_[i2];
    let a2 = r2 ? this.strokeStates[r2] : null, o2 = n2 ? this.fillStates[n2] : null, s2 = this.textStates[t2], c2 = this.pixelRatio, l2 = [s2.scale[0] * c2, s2.scale[1] * c2], u2 = s2.justify ? cs[s2.justify] : Ss(Array.isArray(e19) ? e19[0] : e19, s2.textAlign || `center`), d2 = r2 && a2.lineWidth ? a2.lineWidth : 0, f2 = Array.isArray(e19) ? e19 : String(e19).split(`
`).reduce(Cs, []), {width: p2, height: m2, widths: h2, heights: g2, lineWidths: _2} = Pa(s2, f2), v2 = p2 + d2, y2 = [], b2 = (v2 + 2) * l2[0], x2 = (m2 + d2) * l2[1], S2 = {width: b2 < 0 ? Math.floor(b2) : Math.ceil(b2), height: x2 < 0 ? Math.floor(x2) : Math.ceil(x2), contextInstructions: y2};
    (l2[0] != 1 || l2[1] != 1) && y2.push(`scale`, l2), r2 && a2 && (y2.push(`strokeStyle`, a2.strokeStyle), y2.push(`lineWidth`, d2), y2.push(`lineCap`, a2.lineCap), y2.push(`lineJoin`, a2.lineJoin), y2.push(`miterLimit`, a2.miterLimit), y2.push(`setLineDash`, [a2.lineDash]), y2.push(`lineDashOffset`, a2.lineDashOffset)), n2 && o2 && y2.push(`fillStyle`, o2.fillStyle), y2.push(`textBaseline`, `middle`), y2.push(`textAlign`, `center`);
    let C2 = 0.5 - u2, w2 = u2 * v2 + C2 * d2, T2 = [], E2 = [], D2 = 0, O2 = 0, k2 = 0, A2 = 0, ee2;
    for (let e20 = 0, t3 = f2.length; e20 < t3; e20 += 2) {
      let t4 = f2[e20];
      if (t4 === `
`) {
        O2 += D2, D2 = 0, w2 = u2 * v2 + C2 * d2, ++A2;
        continue;
      }
      let i3 = f2[e20 + 1] || s2.font;
      i3 !== ee2 && (r2 && T2.push(`font`, i3), n2 && E2.push(`font`, i3), ee2 = i3), D2 = Math.max(D2, g2[k2]);
      let a3 = [t4, w2 + C2 * h2[k2] + u2 * (h2[k2] - _2[A2]), 0.5 * (d2 + D2) + O2];
      w2 += h2[k2], r2 && T2.push(`strokeText`, a3), n2 && E2.push(`fillText`, a3), ++k2;
    }
    return Array.prototype.push.apply(y2, T2), Array.prototype.push.apply(y2, E2), this.labels_[i2] = S2, S2;
  }
  replayTextBackground_(e19, t2, n2, r2, i2, a2, o2) {
    e19.beginPath(), e19.moveTo.apply(e19, t2), e19.lineTo.apply(e19, n2), e19.lineTo.apply(e19, r2), e19.lineTo.apply(e19, i2), e19.lineTo.apply(e19, t2), a2 && (this.alignAndScaleFill_ = a2[2], e19.fillStyle = a2[1], this.fill_(e19)), o2 && (this.setStrokeStyle_(e19, o2), e19.stroke());
  }
  calculateImageOrLabelDimensions_(e19, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2) {
    o2 *= d2[0], s2 *= d2[1];
    let g2 = n2 - o2, _2 = r2 - s2, v2 = i2 + c2 > e19 ? e19 - c2 : i2, y2 = a2 + l2 > t2 ? t2 - l2 : a2, b2 = p2[3] + v2 * d2[0] + p2[1], x2 = p2[0] + y2 * d2[1] + p2[2], S2 = g2 - p2[3], C2 = _2 - p2[0];
    (m2 || u2 !== 0) && (_s[0] = S2, bs[0] = S2, _s[1] = C2, vs[1] = C2, vs[0] = S2 + b2, ys[0] = vs[0], ys[1] = C2 + x2, bs[1] = ys[1]);
    let w2;
    return u2 === 0 ? Se(Math.min(S2, S2 + b2), Math.min(C2, C2 + x2), Math.max(S2, S2 + b2), Math.max(C2, C2 + x2), gs) : (w2 = Xn(Jn(), n2, r2, 1, 1, u2, -n2, -r2), L(w2, _s), L(w2, vs), L(w2, ys), L(w2, bs), Se(Math.min(_s[0], vs[0], ys[0], bs[0]), Math.min(_s[1], vs[1], ys[1], bs[1]), Math.max(_s[0], vs[0], ys[0], bs[0]), Math.max(_s[1], vs[1], ys[1], bs[1]), gs)), f2 && (g2 = Math.round(g2), _2 = Math.round(_2)), {drawImageX: g2, drawImageY: _2, drawImageW: v2, drawImageH: y2, originX: c2, originY: l2, declutterBox: {minX: gs[0], minY: gs[1], maxX: gs[2], maxY: gs[3], value: h2}, canvasTransform: w2, scale: d2};
  }
  replayImageOrLabelArgs_(e19) {
    return this.replayImageOrLabel_(e19[0], e19[1], e19[2], e19[3], e19[4], e19[5], e19[6]);
  }
  replayImageOrLabel_(e19, t2, n2, r2, i2, a2, o2) {
    let s2 = !!(a2 || o2), c2 = r2.declutterBox, l2 = o2 ? o2[2] * r2.scale[0] / 2 : 0;
    return c2.minX - l2 <= t2[0] && c2.maxX + l2 >= 0 && c2.minY - l2 <= t2[1] && c2.maxY + l2 >= 0 && (s2 && this.replayTextBackground_(e19, _s, vs, ys, bs, a2, o2), Fa(e19, r2.canvasTransform, i2, n2, r2.originX, r2.originY, r2.drawImageW, r2.drawImageH, r2.drawImageX, r2.drawImageY, r2.scale)), true;
  }
  fill_(e19) {
    let t2 = this.alignAndScaleFill_;
    if (t2) {
      let n2 = L(this.renderedTransform_, [0, 0]), r2 = 512 * this.pixelRatio;
      e19.save(), e19.translate(n2[0] % r2, n2[1] % r2), t2 !== 1 && e19.scale(t2, t2);
    }
    e19.fill(), t2 && e19.restore();
  }
  setStrokeStyle_(e19, t2) {
    e19.strokeStyle = t2[1], t2[1] && (e19.lineWidth = t2[2], e19.lineCap = t2[3], e19.lineJoin = t2[4], e19.miterLimit = t2[5], e19.lineDashOffset = t2[7], e19.setLineDash(t2[6]));
  }
  drawLabelWithPointPlacement_(e19, t2, n2, r2) {
    let i2 = this.textStates[t2], a2 = this.createLabel(e19, t2, r2, n2), o2 = this.strokeStates[n2], s2 = this.pixelRatio, c2 = Ss(Array.isArray(e19) ? e19[0] : e19, i2.textAlign || `center`), l2 = cs[i2.textBaseline || `middle`], u2 = o2 && o2.lineWidth ? o2.lineWidth : 0;
    return {label: a2, anchorX: c2 * (a2.width / s2 - 2 * i2.scale[0]) + 2 * (0.5 - c2) * u2, anchorY: l2 * a2.height / s2 + 2 * (0.5 - l2) * u2};
  }
  execute_(e19, t2, n2, r2, i2, a2, o2, s2) {
    let c2 = this.zIndexContext_, l2;
    this.pixelCoordinates_ && C(n2, this.renderedTransform_) ? l2 = this.pixelCoordinates_ : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []), l2 = rr(this.coordinates, 0, this.coordinates.length, 2, n2, this.pixelCoordinates_), Yn(this.renderedTransform_, n2));
    let u2 = 0, d2 = r2.length, f2 = 0, p2, m2 = [], h2, g2, _2, v2, y2, b2, x2, S2, w2, T2, E2, D2, O2, k2 = 0, A2 = 0, ee2 = this.coordinateCache_, te2 = this.viewRotation_, ne2 = Math.round(Math.atan2(-n2[1], n2[0]) * 1e12) / 1e12, re2 = {context: e19, pixelRatio: this.pixelRatio, resolution: this.resolution, rotation: te2}, ie2 = this.instructions != r2 || this.overlaps ? 0 : 200, ae2, oe2, se2, ce2;
    for (; u2 < d2; ) {
      let n3 = r2[u2];
      switch (n3[0]) {
        case H.BEGIN_GEOMETRY:
          ae2 = n3[1], ce2 = n3[3], ae2.getGeometry() ? o2 !== void 0 && !Ue(o2, ce2.getExtent()) ? u2 = n3[2] + 1 : ++u2 : u2 = n3[2], c2 && (c2.zIndex = n3[4]);
          break;
        case H.BEGIN_PATH:
          k2 > ie2 && (this.fill_(e19), k2 = 0), A2 > ie2 && (e19.stroke(), A2 = 0), !k2 && !A2 && (e19.beginPath(), y2 = NaN, b2 = NaN), ++u2;
          break;
        case H.CIRCLE:
          f2 = n3[1], _2 = n3[2] ?? 0;
          let r3 = l2[f2], d3 = l2[f2 + 1], C2 = l2[f2 + 2] - _2, le2 = l2[f2 + 3] - _2, ue2 = C2 - r3, de2 = le2 - d3, j2 = Math.sqrt(ue2 * ue2 + de2 * de2);
          e19.moveTo(r3 + j2, d3), e19.arc(r3, d3, j2, 0, 2 * Math.PI, true), ++u2;
          break;
        case H.CLOSE_PATH:
          e19.closePath(), ++u2;
          break;
        case H.CUSTOM:
          f2 = n3[1], p2 = n3[2];
          let fe2 = n3[3], pe2 = n3[4], M2 = n3[5];
          re2.geometry = fe2, re2.feature = ae2, u2 in ee2 || (ee2[u2] = []);
          let me2 = ee2[u2];
          M2 ? M2(l2, f2, p2, 2, me2) : (me2[0] = l2[f2], me2[1] = l2[f2 + 1], me2.length = 2), c2 && (c2.zIndex = n3[6]), pe2(me2, re2), ++u2;
          break;
        case H.DRAW_IMAGE:
          f2 = n3[1], p2 = n3[2], w2 = n3[3], h2 = n3[4], g2 = n3[5];
          let he2 = n3[6], ge2 = n3[7], _e2 = n3[8], ve2 = n3[9], ye2 = n3[10], be2 = n3[11], xe2 = n3[12], N2 = n3[13];
          v2 = n3[14] || `declutter`;
          let Se2 = n3[15];
          if (!w2 && n3.length >= 20) {
            T2 = n3[19], E2 = n3[20], D2 = n3[21], O2 = n3[22];
            let e20 = this.drawLabelWithPointPlacement_(T2, E2, D2, O2);
            w2 = e20.label, n3[3] = w2;
            let t3 = n3[23];
            h2 = (e20.anchorX - t3) * this.pixelRatio, n3[4] = h2;
            let r4 = n3[24];
            g2 = (e20.anchorY - r4) * this.pixelRatio, n3[5] = g2, he2 = w2.height, n3[6] = he2, N2 = w2.width, n3[13] = N2;
          }
          let Ce2;
          n3.length > 25 && (Ce2 = n3[25]);
          let we2, Te2, Ee2;
          n3.length > 17 ? (we2 = n3[16], Te2 = n3[17], Ee2 = n3[18]) : (we2 = Sa, Te2 = null, Ee2 = null), ye2 && ne2 ? be2 += te2 : !ye2 && !ne2 && (be2 -= te2);
          let De2 = 0;
          for (; f2 < p2; f2 += 2) {
            if (Ce2 && Ce2[De2++] < N2 / this.pixelRatio)
              continue;
            let n4 = this.calculateImageOrLabelDimensions_(w2.width, w2.height, l2[f2], l2[f2 + 1], N2, he2, h2, g2, _e2, ve2, be2, xe2, i2, we2, !!Te2 || !!Ee2, ae2), r4 = [e19, t2, w2, n4, ge2, Te2, Ee2];
            if (s2) {
              let e20, t3, i3;
              if (Se2) {
                let n5 = p2 - f2;
                if (!Se2[n5]) {
                  Se2[n5] = {args: r4, declutterMode: v2};
                  continue;
                }
                let a4 = Se2[n5];
                e20 = a4.args, t3 = a4.declutterMode, delete Se2[n5], i3 = xs(e20);
              }
              let a3, o3;
              if (e20 && (t3 !== `declutter` || !s2.collides(i3)) && (a3 = true), v2 === `declutter` && s2.collides(n4.declutterBox) || (o3 = true), t3 === `declutter` && v2 === `declutter`) {
                let e21 = a3 && o3;
                a3 = e21, o3 = e21;
              }
              a3 && (t3 !== `none` && s2.insert(i3), this.replayImageOrLabelArgs_(e20)), o3 && (v2 !== `none` && s2.insert(n4.declutterBox), this.replayImageOrLabelArgs_(r4));
            } else
              this.replayImageOrLabelArgs_(r4);
          }
          ++u2;
          break;
        case H.DRAW_CHARS:
          let Oe2 = n3[1], ke2 = n3[2], Ae2 = n3[3], je2 = n3[4];
          O2 = n3[5];
          let Me2 = n3[6], Ne2 = n3[7], Pe2 = n3[8];
          D2 = n3[9];
          let Fe2 = n3[10];
          T2 = n3[11], Array.isArray(T2) && (T2 = T2.reduce(ws, ``)), E2 = n3[12];
          let Ie2 = [n3[13], n3[13]];
          v2 = n3[14] || `declutter`;
          let Le2 = n3[15], Re2 = n3[16], P2 = this.textStates[E2], ze2 = P2.font, Be2 = [P2.scale[0] * Ne2, P2.scale[1] * Ne2], Ve2;
          ze2 in this.widths_ ? Ve2 = this.widths_[ze2] : (Ve2 = {}, this.widths_[ze2] = Ve2);
          let He2 = Ci(l2, Oe2, ke2, 2), F2 = Math.abs(Be2[0]) * Na(ze2, T2, Ve2);
          if (je2 || F2 <= He2) {
            let n4 = this.textStates[E2].textAlign, r4 = (He2 - F2) * Ss(T2, n4), i3 = ms(l2, Oe2, ke2, 2, T2, r4, Me2, Math.abs(Be2[0]), Na, ze2, Ve2, ne2 ? 0 : this.viewRotation_, Le2);
            drawChars:
              if (i3) {
                let n5 = [], r5, a3, o3, c3, l3;
                if (D2)
                  for (r5 = 0, a3 = i3.length; r5 < a3; ++r5) {
                    l3 = i3[r5], o3 = l3[4], c3 = this.createLabel(o3, E2, ``, D2), h2 = l3[2] + (Be2[0] < 0 ? -Fe2 : Fe2) - Re2, g2 = Ae2 * c3.height + (0.5 - Ae2) * 2 * Fe2 * Be2[1] / Be2[0] - Pe2;
                    let a4 = this.calculateImageOrLabelDimensions_(c3.width, c3.height, l3[0], l3[1], c3.width, c3.height, h2, g2, 0, 0, l3[3], Ie2, false, Sa, false, ae2);
                    if (s2 && v2 === `declutter` && s2.collides(a4.declutterBox))
                      break drawChars;
                    n5.push([e19, t2, c3, a4, 1, null, null]);
                  }
                if (O2)
                  for (r5 = 0, a3 = i3.length; r5 < a3; ++r5) {
                    l3 = i3[r5], o3 = l3[4], c3 = this.createLabel(o3, E2, O2, ``), h2 = l3[2] - Re2, g2 = Ae2 * c3.height - Pe2;
                    let a4 = this.calculateImageOrLabelDimensions_(c3.width, c3.height, l3[0], l3[1], c3.width, c3.height, h2, g2, 0, 0, l3[3], Ie2, false, Sa, false, ae2);
                    if (s2 && v2 === `declutter` && s2.collides(a4.declutterBox))
                      break drawChars;
                    n5.push([e19, t2, c3, a4, 1, null, null]);
                  }
                s2 && v2 !== `none` && s2.load(n5.map(xs));
                for (let e20 = 0, t3 = n5.length; e20 < t3; ++e20)
                  this.replayImageOrLabelArgs_(n5[e20]);
              }
          }
          ++u2;
          break;
        case H.END_GEOMETRY:
          if (a2 !== void 0) {
            ae2 = n3[1];
            let e20 = a2(ae2, ce2, v2);
            if (e20)
              return e20;
          }
          ++u2;
          break;
        case H.FILL:
          ie2 ? k2++ : this.fill_(e19), ++u2;
          break;
        case H.MOVE_TO_LINE_TO:
          f2 = n3[1], p2 = n3[2], _2 = n3[3];
          let We2, Ge2, Ke2;
          if (_2) {
            let e20 = (n3[4] ?? false) || Math.abs(l2[f2] - l2[p2 - 2]) < 1e-6 && Math.abs(l2[f2 + 1] - l2[p2 - 1]) < 1e-6;
            na(l2, f2, p2, 2, _2, e20, m2), ia(m2, 2, e20), We2 = m2, Ge2 = 0, Ke2 = We2.length;
          } else
            We2 = l2, Ge2 = f2, Ke2 = p2;
          oe2 = We2[Ge2], se2 = We2[Ge2 + 1], e19.moveTo(oe2, se2), y2 = oe2 + 0.5 | 0, b2 = se2 + 0.5 | 0;
          for (let t3 = Ge2 + 2; t3 < Ke2; t3 += 2)
            oe2 = We2[t3], se2 = We2[t3 + 1], x2 = oe2 + 0.5 | 0, S2 = se2 + 0.5 | 0, (t3 == Ke2 - 2 || x2 !== y2 || S2 !== b2) && (e19.lineTo(oe2, se2), y2 = x2, b2 = S2);
          ++u2;
          break;
        case H.SET_FILL_STYLE:
          this.alignAndScaleFill_ = n3[2], k2 ? (this.fill_(e19), k2 = 0, A2 && (A2 = (e19.stroke(), 0))) : A2 && n3[1] && (e19.stroke(), A2 = 0), e19.fillStyle = n3[1], ++u2;
          break;
        case H.SET_STROKE_STYLE:
          k2 && n3[1] && (this.fill_(e19), k2 = 0), A2 && (A2 = (e19.stroke(), 0)), this.setStrokeStyle_(e19, n3), ++u2;
          break;
        case H.STROKE:
          ie2 ? A2++ : e19.stroke(), ++u2;
          break;
        default:
          ++u2;
      }
    }
    k2 && this.fill_(e19), A2 && e19.stroke();
  }
  execute(e19, t2, n2, r2, i2, a2) {
    this.viewRotation_ = r2, this.execute_(e19, t2, n2, this.instructions, i2, void 0, void 0, a2);
  }
  executeHitDetection(e19, t2, n2, r2, i2) {
    return this.viewRotation_ = n2, this.execute_(e19, [e19.canvas.width, e19.canvas.height], t2, this.hitDetectionInstructions, true, r2, i2);
  }
}, Es = [`Polygon`, `Circle`, `LineString`, `Image`, `Text`, `Default`], Ds = [`Image`, `Text`], Os = Es.filter((e19) => !Ds.includes(e19)), ks = false, As = false;
function js() {
  let e19 = 0, t2 = (t3) => {
    let n2 = B(1, 1, null, {willReadFrequently: t3}), r2 = 0, i2 = performance.now();
    for (; performance.now() - i2 < 50; ++r2)
      n2.fillStyle = `rgba(255,0,${r2 % 256},1)`, n2.fillRect(0, 0, 1, 1), n2.getImageData(0, 0, 1, 1);
    return e19 = r2 > e19 ? r2 : e19, r2;
  };
  ks = {[t2(true)]: true, [t2(false)]: false, [t2(void 0)]: void 0}[e19], As = true;
}
var Ms = class {
  constructor(e19, t2, n2, r2, i2, a2, o2) {
    this.maxExtent_ = e19, this.overlaps_ = r2, this.pixelRatio_ = n2, this.resolution_ = t2, this.renderBuffer_ = a2, this.executorsByZIndex_ = {}, this.hitDetectionContext_ = null, this.hitDetectionTransform_ = Jn(), this.renderedContext_ = null, this.deferredZIndexContexts_ = {}, this.createExecutors_(i2, !!o2);
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
        r2[e20] = new Ts(this.resolution_, this.pixelRatio_, this.overlaps_, n3, t2);
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
    As === false && js(), r2 = Math.round(r2);
    let o2 = r2 * 2 + 1, s2 = Xn(this.hitDetectionTransform_, r2 + 0.5, r2 + 0.5, 1 / t2, -1 / t2, -n2, -e19[0], -e19[1]), c2 = !this.hitDetectionContext_;
    c2 && (this.hitDetectionContext_ = B(o2, o2, null, {willReadFrequently: ks}));
    let l2 = this.hitDetectionContext_;
    l2.canvas.width !== o2 || l2.canvas.height !== o2 ? (l2.canvas.width = o2, l2.canvas.height = o2) : c2 || l2.clearRect(0, 0, o2, o2);
    let u2;
    this.renderBuffer_ !== void 0 && (u2 = N(), Oe(u2, e19), he(u2, t2 * (this.renderBuffer_ + r2), u2));
    let d2 = Ps(r2), f2, p2 = l2;
    function m2(e20, t3, n3) {
      let s3 = p2.getImageData(0, 0, o2, o2).data;
      for (let c3 = 0, l3 = d2.length; c3 < l3; c3++)
        if (s3[d2[c3]] > 0) {
          if (!a2 || n3 === `none` || f2 !== `Image` && f2 !== `Text` || a2.includes(e20)) {
            let n4 = (d2[c3] - 3) / 4, a3 = r2 - n4 % o2, s4 = r2 - (n4 / o2 | 0), l4 = i2(e20, t3, a3 * a3 + s4 * s4);
            if (l4)
              return l4;
          }
          p2.clearRect(0, 0, o2, o2);
          break;
        }
    }
    let h2 = Object.keys(this.executorsByZIndex_).map(Number);
    h2.sort(v);
    let g2, _2, y2, b2, x2;
    for (g2 = h2.length - 1; g2 >= 0; --g2) {
      let e20 = h2[g2].toString();
      for (y2 = this.executorsByZIndex_[e20], _2 = Es.length - 1; _2 >= 0; --_2)
        if (f2 = Es[_2], b2 = y2[f2], b2 !== void 0 && (x2 = b2.executeHitDetection(l2, s2, n2, m2, u2), x2))
          return x2;
    }
  }
  getClipCoords(e19) {
    let t2 = this.maxExtent_;
    if (!t2)
      return null;
    let n2 = t2[0], r2 = t2[1], i2 = t2[2], a2 = t2[3], o2 = [n2, r2, n2, a2, i2, a2, i2, r2];
    return rr(o2, 0, 8, 2, e19, o2), o2;
  }
  isEmpty() {
    return d(this.executorsByZIndex_);
  }
  execute(e19, t2, n2, r2, i2, a2, o2) {
    let s2 = Object.keys(this.executorsByZIndex_).map(Number);
    s2.sort(o2 ? y : v), a2 || (a2 = Es);
    let c2 = Es.length;
    for (let l2 = 0, u2 = s2.length; l2 < u2; ++l2) {
      let u3 = s2[l2].toString(), d2 = this.executorsByZIndex_[u3];
      for (let u4 = 0, f2 = a2.length; u4 < f2; ++u4) {
        let f3 = a2[u4], p2 = d2[f3];
        if (p2 !== void 0) {
          let a3 = o2 === null ? void 0 : p2.getZIndexContext(), u5 = a3 ? a3.getContext() : e19, d3 = this.maxExtent_ && f3 !== `Image` && f3 !== `Text`;
          if (d3 && (u5.save(), this.clip(u5, n2)), !a3 || f3 === `Text` || f3 === `Image` ? p2.execute(u5, t2, n2, r2, i2, o2) : a3.pushFunction((e20) => p2.execute(e20, t2, n2, r2, i2, o2)), d3 && u5.restore(), a3) {
            a3.offset();
            let e20 = s2[l2] * c2 + Es.indexOf(f3);
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
    let e19 = this.deferredZIndexContexts_, t2 = Object.keys(e19).map(Number).sort(v);
    for (let n2 = 0, r2 = t2.length; n2 < r2; ++n2)
      e19[t2[n2]].forEach((e20) => {
        e20.draw(this.renderedContext_), e20.clear();
      }), e19[t2[n2]].length = 0;
  }
}, Ns = {};
function Ps(e19) {
  if (Ns[e19] !== void 0)
    return Ns[e19];
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
  return Ns[e19] = i2, i2;
}
function Fs(e19, t2, n2, r2) {
  return n2 !== void 0 && r2 !== void 0 ? [n2 / e19, r2 / t2] : n2 === void 0 ? r2 === void 0 ? 1 : r2 / t2 : n2 / e19;
}
var Is = class e14 extends Ro {
  constructor(e19) {
    e19 || (e19 = {});
    let t2 = e19.opacity === void 0 ? 1 : e19.opacity, n2 = e19.rotation === void 0 ? 0 : e19.rotation, r2 = e19.scale === void 0 ? 1 : e19.scale, i2 = e19.rotateWithView !== void 0 && e19.rotateWithView;
    super({opacity: t2, rotation: n2, scale: r2, displacement: e19.displacement === void 0 ? [0, 0] : e19.displacement, rotateWithView: i2, declutterMode: e19.declutterMode}), this.anchor_ = e19.anchor === void 0 ? [0.5, 0.5] : e19.anchor, this.normalizedAnchor_ = null, this.anchorOrigin_ = e19.anchorOrigin === void 0 ? `top-left` : e19.anchorOrigin, this.anchorXUnits_ = e19.anchorXUnits === void 0 ? `fraction` : e19.anchorXUnits, this.anchorYUnits_ = e19.anchorYUnits === void 0 ? `fraction` : e19.anchorYUnits, this.crossOrigin_ = e19.crossOrigin === void 0 ? null : e19.crossOrigin, this.referrerPolicy_ = e19.referrerPolicy;
    let a2 = e19.img === void 0 ? null : e19.img, o2 = e19.src;
    j(!(o2 !== void 0 && a2), "`image` and `src` cannot be provided at the same time"), (o2 === void 0 || o2.length === 0) && a2 && (o2 = a2.src || D(a2)), j(o2 !== void 0 && o2.length > 0, "A defined and non-empty `src` or `image` must be provided"), j(e19.width === void 0 && e19.height === void 0 || e19.scale === void 0, "`width` or `height` cannot be provided together with `scale`");
    let s2;
    if (e19.src === void 0 ? a2 !== void 0 && (s2 = `complete` in a2 ? a2.complete ? a2.src ? R.LOADED : R.IDLE : R.LOADING : R.LOADED) : s2 = R.IDLE, this.color_ = e19.color === void 0 ? null : Ki(e19.color), this.iconImage_ = $i(a2, o2, {crossOrigin: this.crossOrigin_, referrerPolicy: this.referrerPolicy_}, s2, this.color_), this.offset_ = e19.offset === void 0 ? [0, 0] : e19.offset, this.offsetOrigin_ = e19.offsetOrigin === void 0 ? `top-left` : e19.offsetOrigin, this.origin_ = null, this.size_ = e19.size === void 0 ? null : e19.size, this.initialOptions_, e19.width !== void 0 || e19.height !== void 0) {
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
            n4 && this.setScale(Fs(n4[0], n4[1], e19.width, e19.height));
          };
          this.listenImageChange(t4);
          return;
        }
      }
      t3 !== void 0 && this.setScale(Fs(t3, n3, e19.width, e19.height));
    }
  }
  clone() {
    let t2, n2, r2;
    return this.initialOptions_ ? (n2 = this.initialOptions_.width, r2 = this.initialOptions_.height) : (t2 = this.getScale(), t2 = Array.isArray(t2) ? t2.slice() : t2), new e14({anchor: this.anchor_.slice(), anchorOrigin: this.anchorOrigin_, anchorXUnits: this.anchorXUnits_, anchorYUnits: this.anchorYUnits_, color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || void 0, crossOrigin: this.crossOrigin_, referrerPolicy: this.referrerPolicy_, offset: this.offset_.slice(), offsetOrigin: this.offsetOrigin_, opacity: this.getOpacity(), rotateWithView: this.getRotateWithView(), rotation: this.getRotation(), scale: t2, width: n2, height: r2, size: this.size_ === null ? void 0 : this.size_.slice(), src: this.getSrc(), displacement: this.getDisplacement().slice(), declutterMode: this.getDeclutterMode()});
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
  setColor(e19) {
    let t2 = e19 ? Ki(e19) : null;
    if (this.color_ === t2 || this.color_ && t2 && this.color_.length === t2.length && this.color_.every((e20, n3) => e20 === t2[n3]))
      return;
    this.color_ = t2;
    let n2 = this.getSrc(), r2 = n2 === void 0 ? this.getHitDetectionImage() : null, i2 = n2 === void 0 ? this.iconImage_.getImageState() : R.IDLE;
    this.iconImage_ = $i(r2, n2, {crossOrigin: this.crossOrigin_, referrerPolicy: this.referrerPolicy_}, i2, this.color_);
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
  setSrc(e19) {
    this.iconImage_ = $i(null, e19, {crossOrigin: this.crossOrigin_, referrerPolicy: this.referrerPolicy_}, R.IDLE, this.color_);
  }
  getSize() {
    return this.size_ ? this.size_ : this.iconImage_.getSize();
  }
  getWidth() {
    let e19 = this.getScaleArray();
    if (this.size_)
      return this.size_[0] * e19[0];
    if (this.iconImage_.getImageState() == R.LOADED) {
      let t2 = this.iconImage_.getSize();
      if (t2)
        return t2[0] * e19[0];
    }
  }
  getHeight() {
    let e19 = this.getScaleArray();
    if (this.size_)
      return this.size_[1] * e19[1];
    if (this.iconImage_.getImageState() == R.LOADED) {
      let t2 = this.iconImage_.getSize();
      if (t2)
        return t2[1] * e19[1];
    }
  }
  setScale(e19) {
    delete this.initialOptions_, super.setScale(e19);
  }
  listenImageChange(e19) {
    this.iconImage_.addEventListener(h.CHANGE, e19);
  }
  load() {
    this.iconImage_.load();
  }
  unlistenImageChange(e19) {
    this.iconImage_.removeEventListener(h.CHANGE, e19);
  }
  ready() {
    return this.iconImage_.ready();
  }
}, Ls = 0.5;
function Rs(e19, t2, n2, r2, i2, a2, o2, s2, c2) {
  let l2 = c2 ? Un(i2, c2) : i2, u2 = B(e19[0] * Ls, e19[1] * Ls);
  u2.imageSmoothingEnabled = false;
  let d2 = u2.canvas, f2 = new La(u2, Ls, i2, [1, 0, 0, 1, 0, 0], o2, s2 ?? 0, c2 ? Fn(Bn(), c2) ?? void 0 : void 0), p2 = n2.length, m2 = Math.floor(16777215 / p2), h2 = {};
  for (let e20 = 1; e20 <= p2; ++e20) {
    let t3 = n2[e20 - 1], i3 = t3.getStyleFunction() || r2;
    if (!i3)
      continue;
    let o3 = i3(t3, a2);
    if (!o3)
      continue;
    Array.isArray(o3) || (o3 = [o3]);
    let s3 = (e20 * m2).toString(16).padStart(7, `#00000`);
    for (let e21 = 0, n3 = o3.length; e21 < n3; ++e21) {
      let n4 = o3[e21], r3 = n4.getGeometryFunction()(t3);
      if (!r3 || !Ue(l2, r3.getExtent()))
        continue;
      let i4 = n4.clone(), a3 = i4.getFill();
      a3 && a3.setColor(s3);
      let c3 = i4.getStroke();
      c3 && (c3.setColor(s3), c3.setLineDash(null)), i4.setText(null);
      let u3 = n4.getImage();
      if (u3) {
        let e22 = u3.getImageSize();
        if (!e22)
          continue;
        let t4 = B(e22[0], e22[1], void 0, {alpha: false}), n5 = t4.canvas;
        t4.fillStyle = s3, t4.fillRect(0, 0, n5.width, n5.height), i4.setImage(new Is({img: n5, anchor: u3.getAnchor() ?? void 0, anchorXUnits: `pixels`, anchorYUnits: `pixels`, offset: u3.getOrigin() ?? void 0, opacity: 1, size: u3.getSize() ?? void 0, scale: u3.getScale(), rotation: u3.getRotation(), rotateWithView: u3.getRotateWithView()}));
      }
      let d3 = i4.getZIndex() || 0, f3 = h2[d3];
      f3 || (f3 = {}, h2[d3] = f3, f3.Polygon = [], f3.Circle = [], f3.LineString = [], f3.Point = []);
      let p3 = r3.getType();
      if (p3 === `GeometryCollection`) {
        let e22 = r3.getGeometriesArrayRecursive();
        for (let t4 = 0, n5 = e22.length; t4 < n5; ++t4) {
          let n6 = e22[t4];
          f3[n6.getType().replace(`Multi`, ``)].push(n6, i4);
        }
      } else
        f3[p3.replace(`Multi`, ``)].push(r3, i4);
    }
  }
  let g2 = Object.keys(h2).map(Number).sort(v);
  for (let e20 = 0, n3 = g2.length; e20 < n3; ++e20) {
    let n4 = h2[g2[e20]];
    for (let e21 in n4) {
      let r3 = n4[e21];
      for (let e22 = 0, n5 = r3.length; e22 < n5; e22 += 2) {
        f2.setStyle(r3[e22 + 1]);
        for (let n6 = 0, i3 = t2.length; n6 < i3; ++n6)
          f2.setTransform(t2[n6]), f2.drawGeometry(r3[e22]);
      }
    }
  }
  return u2.getImageData(0, 0, d2.width, d2.height);
}
function zs(e19, t2, n2) {
  let r2 = [];
  if (n2) {
    let i2 = Math.floor(Math.round(e19[0]) * Ls), a2 = Math.floor(Math.round(e19[1]) * Ls), o2 = (I(i2, 0, n2.width - 1) + I(a2, 0, n2.height - 1) * n2.width) * 4, s2 = n2.data[o2], c2 = n2.data[o2 + 1], l2 = n2.data[o2 + 2] + 256 * (c2 + 256 * s2), u2 = Math.floor(16777215 / t2.length);
    l2 && l2 % u2 === 0 && r2.push(t2[l2 / u2 - 1]);
  }
  return r2;
}
var Bs = class extends re {
  constructor(e19, t2, n2, r2) {
    super(e19), this.inversePixelTransform = t2, this.frameState = n2, this.context = r2 ?? void 0;
  }
}, Vs = 5, Hs = class extends ae {
  constructor(e19) {
    super(), this.ready = true, this.boundHandleImageChange_ = this.handleImageChange_.bind(this), this.layer_ = e19, this.staleKeys_ = [], this.maxStaleKeys = Vs, this.renderedSourceKey_;
  }
  getStaleKeys() {
    return this.staleKeys_;
  }
  prependStaleKey(e19) {
    this.staleKeys_.unshift(e19), this.staleKeys_.length > this.maxStaleKeys && (this.staleKeys_.length = this.maxStaleKeys);
  }
  updateStaleKeys(e19) {
    this.renderedSourceKey_ ? this.renderedSourceKey_ !== e19 && (this.prependStaleKey(this.renderedSourceKey_), this.renderedSourceKey_ = e19) : this.renderedSourceKey_ = e19;
  }
  getFeatures(e19) {
    return T();
  }
  getData(e19) {
    return null;
  }
  prepareFrame(e19) {
    return T();
  }
  renderFrame(e19, t2) {
    return T();
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
    (t2.getState() === R.LOADED || t2.getState() === R.ERROR) && this.renderIfReadyAndVisible();
  }
  loadImage(e19) {
    let t2 = e19.getState();
    return t2 != R.LOADED && t2 != R.ERROR && e19.addEventListener(h.CHANGE, this.boundHandleImageChange_), t2 == R.IDLE && (e19.load(), t2 = e19.getState()), t2 == R.LOADED;
  }
  renderIfReadyAndVisible() {
    let e19 = this.getLayer();
    e19 && e19.getVisible() && e19.getSourceState() === `ready` && e19.changed();
  }
  renderDeferred(e19) {
  }
  disposeInternal() {
    this.layer_ = void 0, super.disposeInternal();
  }
}, Us = [], Ws = null;
function Gs() {
  Ws = B(1, 1, void 0, {willReadFrequently: true});
}
var Ks = class extends Hs {
  constructor(e19) {
    super(e19), this.wantRotation = false, this.container = null, this.renderedResolution, this.tempTransform = Jn(), this.pixelTransform = Jn(), this.inversePixelTransform = Jn(), this.context = null, this.deferredContext_ = null, this.containerReused = false, this.frameState = null;
  }
  getImageData(e19, t2, n2) {
    Ws || Gs();
    let r2 = Ws;
    if (!r2)
      return null;
    r2.clearRect(0, 0, 1, 1);
    let i2;
    try {
      r2.drawImage(e19, t2, n2, 1, 1, 0, 0, 1, 1), i2 = r2.getImageData(0, 0, 1, 1).data;
    } catch {
      return Ws = null, null;
    }
    return i2;
  }
  getBackground(e19) {
    let t2 = this.getLayer().getBackground();
    return typeof t2 == `function` && (t2 = t2(e19.viewState.resolution)), t2 || void 0;
  }
  useContainer(e19, t2, n2, r2, i2) {
    if (vi(e19) && this.pixelTransform[1] === 0 && this.pixelTransform[2] === 0 && this.pixelTransform[4] === 0 && this.pixelTransform[5] === 0 && e19.width === r2 && e19.height === i2) {
      let t3 = e19, r3 = t3.getContext(`2d`);
      if (r3) {
        this.container = e19, this.context = r3, this.containerReused = true, n2 && (r3.fillStyle = n2, r3.fillRect(0, 0, t3.width, t3.height));
        return;
      }
    }
    let a2 = this.getLayer().getClassName(), o2, s2;
    if (e19 && e19.className === a2 && (!n2 || e19 && e19.style.backgroundColor && C(Ki(e19.style.backgroundColor), Ki(n2)))) {
      let t3 = e19.firstElementChild;
      vi(t3) && (s2 = t3.getContext(`2d`));
    }
    if (s2 && nr(s2.canvas.style.transform, t2) ? (this.container = e19, this.context = s2, this.containerReused = true) : this.containerReused ? (this.container = null, this.context = null, this.containerReused = false) : this.container && (this.container.style.backgroundColor = null), !this.container) {
      o2 = ei ? _i() : document.createElement(`div`), o2.className = a2;
      let e20 = o2.style;
      e20.position = `absolute`, e20.width = `100%`, e20.height = `100%`, s2 = B();
      let t3 = s2.canvas;
      o2.appendChild(t3), e20 = t3.style, e20.position = `absolute`, e20.left = `0`, e20.transformOrigin = `top left`, this.container = o2, this.context = s2;
    }
    !this.containerReused && n2 && !this.container.style.backgroundColor && (this.container.style.backgroundColor = n2);
  }
  clipUnrotated(e19, t2, n2) {
    let r2 = Ve(n2), i2 = He(n2), a2 = Pe(n2), o2 = Ne(n2);
    L(t2.coordinateToPixelTransform, r2), L(t2.coordinateToPixelTransform, i2), L(t2.coordinateToPixelTransform, a2), L(t2.coordinateToPixelTransform, o2);
    let s2 = this.inversePixelTransform;
    L(s2, r2), L(s2, i2), L(s2, a2), L(s2, o2), e19.save(), e19.beginPath(), e19.moveTo(Math.round(r2[0]), Math.round(r2[1])), e19.lineTo(Math.round(i2[0]), Math.round(i2[1])), e19.lineTo(Math.round(a2[0]), Math.round(a2[1])), e19.lineTo(Math.round(o2[0]), Math.round(o2[1])), e19.clip();
  }
  prepareContainer(e19, t2) {
    let n2 = e19.extent, r2 = e19.viewState.resolution, i2 = this.sourceRotates(), a2 = i2 ? 0 : e19.viewState.rotation, o2 = e19.pixelRatio, s2 = Math.round(i2 ? e19.size[0] * o2 : F(n2) / r2 * o2), c2 = Math.round(i2 ? e19.size[1] * o2 : P(n2) / r2 * o2);
    Xn(this.pixelTransform, e19.size[0] / 2, e19.size[1] / 2, 1 / o2, 1 / o2, a2, -s2 / 2, -c2 / 2), Zn(this.inversePixelTransform, this.pixelTransform);
    let l2 = er(this.pixelTransform), u2 = this.getBackground(e19);
    if (this.useContainer(t2, l2, u2, s2, c2), !this.containerReused) {
      let e20 = this.context.canvas;
      e20.width != s2 || e20.height != c2 ? (e20.width = s2, e20.height = c2) : this.context.clearRect(0, 0, s2, c2), l2 !== e20.style.transform && (e20.style.transform = l2);
    }
  }
  dispatchRenderEvent_(e19, t2, n2) {
    let r2 = this.getLayer();
    if (r2.hasListener(e19)) {
      let i2 = new Bs(e19, this.inversePixelTransform, n2, t2);
      r2.dispatchEvent(i2);
    }
  }
  preRender(e19, t2) {
    this.frameState = t2, t2.declutter || this.dispatchRenderEvent_(eo.PRERENDER, e19, t2);
  }
  postRender(e19, t2) {
    t2.declutter || this.dispatchRenderEvent_(eo.POSTRENDER, e19, t2);
  }
  renderDeferredInternal(e19) {
  }
  getRenderContext(e19) {
    return e19.declutter && !this.deferredContext_ && (this.deferredContext_ = new hs()), e19.declutter ? this.deferredContext_.getContext() : this.context;
  }
  getCanvasContext() {
    let e19 = this.context;
    if (!e19)
      throw Error(`Canvas context not initialized`);
    return e19;
  }
  getContainerElement() {
    let e19 = this.container;
    if (!e19)
      throw Error(`Canvas container not initialized`);
    return e19;
  }
  renderDeferred(e19) {
    e19.declutter && (this.dispatchRenderEvent_(eo.PRERENDER, this.context, e19), e19.declutter && this.deferredContext_ && (this.deferredContext_.draw(this.context), this.deferredContext_.clear()), this.renderDeferredInternal(e19), this.dispatchRenderEvent_(eo.POSTRENDER, this.context, e19));
  }
  getRenderTransform(e19, t2, n2, r2, i2, a2, o2) {
    let s2 = i2 / 2, c2 = a2 / 2, l2 = r2 / t2, u2 = -l2, d2 = -e19[0] + o2, f2 = -e19[1];
    return Xn(this.tempTransform, s2, c2, l2, u2, -n2, d2, f2);
  }
  sourceRotates() {
    return this.wantRotation && !!this.getLayer().getSource()?.canRotate;
  }
  disposeInternal() {
    delete this.frameState, super.disposeInternal();
  }
}, qs = class extends Ks {
  constructor(e19, t2) {
    super(e19), this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this), this.animatingOrInteracting_, this.hitDetectionImageData_ = null, this.clipExtent_ = null, this.extendX_ = false, this.renderedFeatures_ = null, this.renderedRevision_ = -1, this.renderedResolution_ = NaN, this.renderedExtent_ = N(), this.wrappedRenderedExtent_ = N(), this.renderedRotation_, this.renderedCenter_ = null, this.renderedProjection_ = null, this.renderedPixelRatio_ = 1, this.renderedRenderOrder_ = null, this.renderedFrameDeclutter_, this.replayGroup_ = null, this.replayGroupChanged = true, this.clipping = true, this.targetContext_ = null, this.opacity_ = 1, t2?.wantRotation !== void 0 && (this.wantRotation = t2.wantRotation);
  }
  renderWorlds(e19, t2, n2) {
    let r2 = t2.extent, i2 = t2.viewState, a2 = i2.center, o2 = i2.resolution, s2 = i2.projection, c2 = i2.rotation, l2 = s2.getExtent(), u2 = this.getLayer().getSource(), d2 = this.getLayer().getDeclutter(), f2 = t2.pixelRatio, p2 = t2.viewHints, m2 = !(p2[V.ANIMATING] || p2[V.INTERACTING]), h2 = this.context, g2 = h2.canvas.width, _2 = h2.canvas.height, v2 = u2.getWrapX() && s2.canWrapX(), y2 = v2 ? F(l2) : null, b2 = r2, x2 = v2 ? Math.ceil((b2[2] - l2[2]) / y2) + (this.extendX_ ? 2 : 1) : 1, S2 = v2 ? Math.floor((b2[0] - l2[0]) / y2) - +!!this.extendX_ : 0;
    do {
      let r3 = this.getRenderTransform(a2, o2, this.sourceRotates() ? c2 : 0, f2, g2, _2, S2 * y2);
      t2.declutter && (r3 = r3.slice(0)), e19.execute(h2, [h2.canvas.width, h2.canvas.height], r3, c2, m2, n2 === void 0 ? Es : n2 ? Ds : Os, n2 ? d2 && t2.declutter[d2] : void 0);
    } while (++S2 < x2);
  }
  setDrawContext_() {
    this.opacity_ !== 1 && (this.targetContext_ = this.context, this.context = B(this.context.canvas.width, this.context.canvas.height, Us));
  }
  resetDrawContext_() {
    if (this.opacity_ !== 1 && this.targetContext_) {
      let e19 = this.targetContext_.globalAlpha;
      this.targetContext_.globalAlpha = this.opacity_, this.targetContext_.drawImage(this.context.canvas, 0, 0), this.targetContext_.globalAlpha = e19, pi(this.context), Us.push(this.context.canvas), this.context = this.targetContext_, this.targetContext_ = null;
    }
  }
  renderDeclutter(e19) {
    this.replayGroup_ && this.getLayer().getDeclutter() && this.renderWorlds(this.replayGroup_, e19, true);
  }
  renderDeferredInternal(e19) {
    this.replayGroup_ && (this.clipExtent_ && this.clipUnrotated(this.context, e19, this.clipExtent_), this.replayGroup_.renderDeferred(), this.clipExtent_ && (this.clipExtent_ = (this.context.restore(), null)), this.resetDrawContext_());
  }
  renderFrame(e19, t2) {
    let n2 = e19.layerStatesArray[e19.layerIndex];
    this.opacity_ = n2.opacity;
    let r2 = e19.viewState;
    this.prepareContainer(e19, t2);
    let i2 = this.context, a2 = this.replayGroup_, o2 = a2 && !a2.isEmpty();
    if (!o2 && !(this.getLayer().hasListener(eo.PRERENDER) || this.getLayer().hasListener(eo.POSTRENDER)))
      return this.container;
    this.setDrawContext_(), this.preRender(i2, e19);
    let s2 = r2.projection;
    this.clipExtent_ = null;
    let c2 = false;
    if (o2 && n2.extent && this.clipping) {
      let t3 = Wn(n2.extent, s2);
      o2 = Ue(t3, e19.extent), o2 && !ye(t3, e19.extent) && (e19.declutter ? this.clipExtent_ = t3 : (this.clipUnrotated(i2, e19, t3), c2 = true));
    }
    return o2 && this.renderWorlds(a2, e19, !this.getLayer().getDeclutter() && void 0), c2 && i2.restore(), this.postRender(i2, e19), this.renderedRotation_ !== r2.rotation && (this.renderedRotation_ = r2.rotation, this.hitDetectionImageData_ = null), e19.declutter || this.resetDrawContext_(), this.container;
  }
  getFeatures(e19) {
    return new Promise((t2) => {
      if (this.frameState && !this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
        let e20 = this.frameState.size.slice(), t3 = this.renderedCenter_, n2 = this.renderedResolution_, r2 = this.renderedRotation_, i2 = this.renderedProjection_, a2 = this.wrappedRenderedExtent_, o2 = this.getLayer(), s2 = [], c2 = e20[0] * Ls, l2 = e20[1] * Ls;
        s2.push(this.getRenderTransform(t3, n2, r2, Ls, c2, l2, 0).slice());
        let u2 = o2.getSource(), d2 = i2.getExtent();
        if (u2.getWrapX() && i2.canWrapX() && !ye(d2, a2)) {
          let e21 = a2[0], i3 = F(d2), o3 = 0, u3;
          for (; e21 < d2[0]; )
            --o3, u3 = i3 * o3, s2.push(this.getRenderTransform(t3, n2, r2, Ls, c2, l2, u3).slice()), e21 += i3;
          for (o3 = 0, e21 = a2[2]; e21 > d2[2]; )
            ++o3, u3 = i3 * o3, s2.push(this.getRenderTransform(t3, n2, r2, Ls, c2, l2, u3).slice()), e21 -= i3;
        }
        let f2 = Bn();
        this.hitDetectionImageData_ = Rs(e20, s2, this.renderedFeatures_, o2.getStyleFunction(), a2, n2, r2, Va(n2, this.renderedPixelRatio_), f2 ? i2 : null);
      }
      t2(zs(e19, this.renderedFeatures_, this.hitDetectionImageData_));
    });
  }
  forEachFeatureAtCoordinate(e19, t2, n2, r2, i2) {
    if (!this.replayGroup_)
      return;
    let a2 = t2.viewState.resolution, o2 = t2.viewState.rotation, s2 = this.getLayer(), c2 = {}, l2 = function(e20, t3, n3) {
      let a3 = D(e20), o3 = c2[a3];
      if (!o3) {
        if (n3 === 0)
          return c2[a3] = true, r2(e20, s2, t3);
        i2.push(c2[a3] = {feature: e20, layer: s2, geometry: t3, distanceSq: n3, callback: r2});
      } else if (o3 !== true && n3 < o3.distanceSq) {
        if (n3 === 0)
          return c2[a3] = true, i2.splice(i2.lastIndexOf(o3), 1), r2(e20, s2, t3);
        o3.geometry = t3, o3.distanceSq = n3;
      }
    }, u2 = this.getLayer().getDeclutter();
    return this.replayGroup_.forEachFeatureAtCoordinate(e19, a2, o2, n2, l2, u2 ? t2.declutter?.[u2]?.all().map((e20) => e20.value) : null);
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
    let r2 = e19.viewHints[V.ANIMATING], i2 = e19.viewHints[V.INTERACTING], a2 = t2.getUpdateWhileAnimating(), o2 = t2.getUpdateWhileInteracting();
    if (this.ready && !a2 && r2 || !o2 && i2)
      return this.animatingOrInteracting_ = true, true;
    this.animatingOrInteracting_ = false;
    let s2 = e19.extent, c2 = e19.viewState, l2 = c2.projection, u2 = c2.resolution, d2 = e19.pixelRatio, f2 = t2.getRevision(), p2 = t2.getRenderBuffer(), m2 = t2.getRenderOrder();
    m2 === void 0 && (m2 = Ba);
    let h2 = c2.center.slice(), g2 = he(s2, p2 * u2), _2 = g2.slice(), v2 = [g2.slice()], y2 = l2.getExtent(), b2 = n2.getWrapX() && l2.canWrapX();
    if (this.extendX_ = false, b2) {
      let e20 = n2.getExtent();
      e20 && !We(e20) && (this.extendX_ = e20[0] < y2[0] || e20[2] > y2[2]);
    }
    if (b2 && (!ye(y2, e19.extent) || this.extendX_)) {
      let e20 = F(y2), t3 = Math.max(F(g2) / 2, e20), n3 = y2[0], r3 = y2[2];
      this.extendX_ && (n3 -= e20, r3 += e20), g2[0] = n3 - t3, g2[2] = r3 + t3, ht(h2, l2);
      let i3 = qe(v2[0], l2);
      i3[0] < y2[0] && i3[2] < y2[2] ? v2.push([i3[0] + e20, i3[1], i3[2] + e20, i3[3]]) : i3[0] > y2[0] && i3[2] > y2[2] && v2.push([i3[0] - e20, i3[1], i3[2] - e20, i3[3]]);
    }
    if (this.ready && this.renderedResolution_ == u2 && this.renderedPixelRatio_ === d2 && this.renderedRevision_ == f2 && this.renderedRenderOrder_ == m2 && this.renderedFrameDeclutter_ === !!e19.declutter && ye(this.wrappedRenderedExtent_, g2))
      return C(this.renderedExtent_, _2) || (this.hitDetectionImageData_ = null, this.renderedExtent_ = _2), this.renderedCenter_ = h2, this.replayGroupChanged = false, true;
    this.replayGroup_ = null;
    let x2 = new us(Ha(u2, d2), g2, u2, d2), S2 = Bn(), w2;
    if (S2) {
      for (let e20 = 0, t3 = v2.length; e20 < t3; ++e20) {
        let t4 = v2[e20], r3 = Un(t4, l2);
        n2.loadFeatures(r3, Gn(u2, l2), S2);
      }
      w2 = Fn(S2, l2);
    } else
      for (let e20 = 0, t3 = v2.length; e20 < t3; ++e20)
        n2.loadFeatures(v2[e20], u2, l2);
    let T2 = Va(u2, d2), E2 = true, D2 = (e20, n3) => {
      let r3, i3 = e20.getStyleFunction() || t2.getStyleFunction();
      if (i3 && (r3 = i3(e20, u2)), r3) {
        let t3 = this.renderFeature(e20, T2, r3, x2, w2, this.getLayer().getDeclutter(), n3);
        E2 && (E2 = !t3);
      }
    }, O2 = Un(g2, l2), k2 = n2.getFeaturesInExtent(O2);
    m2 && k2.sort(m2);
    for (let e20 = 0, t3 = k2.length; e20 < t3; ++e20)
      D2(k2[e20], e20);
    this.renderedFeatures_ = k2, this.ready = E2;
    let A2 = x2.finish(), ee2 = new Ms(g2, u2, d2, n2.getOverlaps(), A2, t2.getRenderBuffer(), !!e19.declutter);
    return this.renderedResolution_ = u2, this.renderedRevision_ = f2, this.renderedRenderOrder_ = m2, this.renderedFrameDeclutter_ = !!e19.declutter, this.renderedExtent_ = _2, this.wrappedRenderedExtent_ = g2, this.renderedCenter_ = h2, this.renderedProjection_ = l2, this.renderedPixelRatio_ = d2, this.replayGroup_ = ee2, this.hitDetectionImageData_ = null, this.replayGroupChanged = true, true;
  }
  renderFeature(e19, t2, n2, r2, i2, a2, o2) {
    if (!n2)
      return false;
    let s2 = false;
    if (Array.isArray(n2))
      for (let c2 = 0, l2 = n2.length; c2 < l2; ++c2)
        s2 = Wa(r2, e19, n2[c2], t2, this.boundHandleStyleImageChange_, i2, a2, o2) || s2;
    else
      s2 = Wa(r2, e19, n2, t2, this.boundHandleStyleImageChange_, i2, a2, o2);
    return s2;
  }
}, Js = 0, Ys = 1 << Js++, U = 1 << Js++, Xs = 1 << Js++, Zs = 1 << Js++, Qs = 1 << Js++, $s = 1 << Js++, ec = 2 ** Js - 1, tc = {[Ys]: `boolean`, [U]: `number`, [Xs]: `string`, [Zs]: `color`, [Qs]: `number[]`, [$s]: `size`}, nc = Object.keys(tc).map(Number).sort(v);
function rc(e19) {
  return e19 in tc;
}
function ic(e19) {
  let t2 = [];
  for (let n2 of nc)
    ac(e19, n2) && t2.push(tc[n2]);
  return t2.length === 0 ? `untyped` : t2.length < 3 ? t2.join(` or `) : t2.slice(0, -1).join(`, `) + `, or ` + t2[t2.length - 1];
}
function ac(e19, t2) {
  return (e19 & t2) === t2;
}
function oc(e19, t2) {
  return !!(e19 & t2);
}
function sc(e19, t2) {
  return e19 === t2;
}
function cc(e19) {
  return e19 instanceof Error ? e19.message : String(e19);
}
var W = class {
  constructor(e19, t2) {
    if (!rc(e19))
      throw Error(`literal expressions must have a specific type, got ${ic(e19)}`);
    this.type = e19, this.value = t2;
  }
}, lc = class {
  constructor(e19, t2, ...n2) {
    this.type = e19, this.operator = t2, this.args = n2;
  }
};
function uc(e19) {
  return {variables: new Map(), properties: new Map(), featureId: false, geometryType: false, mCoordinate: false, mapState: false, inputVariables: e19};
}
function G(e19, t2, n2) {
  switch (typeof e19) {
    case `boolean`:
      if (sc(t2, Xs))
        return new W(Xs, e19 ? `true` : `false`);
      if (!ac(t2, Ys))
        throw Error(`got a boolean, but expected ${ic(t2)}`);
      return new W(Ys, e19);
    case `number`:
      if (sc(t2, $s))
        return new W($s, Lo(e19));
      if (sc(t2, Ys))
        return new W(Ys, !!e19);
      if (sc(t2, Xs))
        return new W(Xs, e19.toString());
      if (!ac(t2, U))
        throw Error(`got a number, but expected ${ic(t2)}`);
      return new W(U, e19);
    case `string`:
      if (sc(t2, Zs))
        return new W(Zs, Gi(e19));
      if (sc(t2, Ys))
        return new W(Ys, !!e19);
      if (!ac(t2, Xs))
        throw Error(`got a string, but expected ${ic(t2)}`);
      return new W(Xs, e19);
  }
  if (!Array.isArray(e19))
    throw Error(`expression must be an array or a primitive value`);
  if (e19.length === 0)
    throw Error(`empty expression`);
  if (typeof e19[0] == `string`)
    return kc(e19, t2, n2);
  for (let t3 of e19)
    if (typeof t3 != `number`)
      throw Error(`expected an array of numbers`);
  if (sc(t2, $s)) {
    if (e19.length !== 2)
      throw Error(`expected an array of two values for a size, got ${e19.length}`);
    return new W($s, e19);
  }
  if (sc(t2, Zs)) {
    if (e19.length === 3)
      return new W(Zs, [...e19, 1]);
    if (e19.length === 4)
      return new W(Zs, e19);
    throw Error(`expected an array of 3 or 4 values for a color, got ${e19.length}`);
  }
  if (!ac(t2, Qs))
    throw Error(`got an array of numbers, but expected ${ic(t2)}`);
  return new W(Qs, e19);
}
var K = {Get: `get`, Var: `var`, Concat: `concat`, GeometryType: `geometry-type`, LineMetric: `line-metric`, Any: `any`, All: `all`, Not: `!`, Resolution: `resolution`, Zoom: `zoom`, Time: `time`, Equal: `==`, NotEqual: `!=`, GreaterThan: `>`, GreaterThanOrEqualTo: `>=`, LessThan: `<`, LessThanOrEqualTo: `<=`, Multiply: `*`, Divide: `/`, Add: `+`, Subtract: `-`, Clamp: `clamp`, Mod: `%`, Pow: `^`, Abs: `abs`, Floor: `floor`, Ceil: `ceil`, Round: `round`, Sin: `sin`, Cos: `cos`, Atan: `atan`, Sqrt: `sqrt`, Match: `match`, Between: `between`, Interpolate: `interpolate`, InterpolateHcl: `interpolate-hcl`, Coalesce: `coalesce`, Case: `case`, In: `in`, Number: `number`, String: `string`, Array: `array`, Color: `color`, Id: `id`, Band: `band`, Palette: `palette`, ToString: `to-string`, Has: `has`}, dc = {[K.Get]: Y(q(1, 1 / 0), fc), [K.Var]: pc(), [K.Has]: Y(q(1, 1 / 0), fc), [K.Id]: Y(mc, vc), [K.Concat]: Y(q(2, 1 / 0), J(Xs)), [K.GeometryType]: Y(hc, vc), [K.LineMetric]: Y(gc, vc), [K.Resolution]: Y(_c, vc), [K.Zoom]: Y(_c, vc), [K.Time]: Y(_c, vc), [K.Any]: Y(q(2, 1 / 0), J(Ys)), [K.All]: Y(q(2, 1 / 0), J(Ys)), [K.Not]: Y(q(1, 1), J(Ys)), [K.Equal]: Y(q(2, 2), bc()), [K.NotEqual]: Y(q(2, 2), bc()), [K.GreaterThan]: Y(q(2, 2), J(U)), [K.GreaterThanOrEqualTo]: Y(q(2, 2), J(U)), [K.LessThan]: Y(q(2, 2), J(U)), [K.LessThanOrEqualTo]: Y(q(2, 2), J(U)), [K.Multiply]: Y(q(2, 1 / 0), yc), [K.Coalesce]: Y(q(2, 1 / 0), yc), [K.Divide]: Y(q(2, 2), J(U)), [K.Add]: Y(q(2, 1 / 0), J(U)), [K.Subtract]: Y(q(2, 2), J(U)), [K.Clamp]: Y(q(3, 3), J(U)), [K.Mod]: Y(q(2, 2), J(U)), [K.Pow]: Y(q(2, 2), J(U)), [K.Abs]: Y(q(1, 1), J(U)), [K.Floor]: Y(q(1, 1), J(U)), [K.Ceil]: Y(q(1, 1), J(U)), [K.Round]: Y(q(1, 1), J(U)), [K.Sin]: Y(q(1, 1), J(U)), [K.Cos]: Y(q(1, 1), J(U)), [K.Atan]: Y(q(1, 2), J(U)), [K.Sqrt]: Y(q(1, 1), J(U)), [K.Match]: Y(q(4, 1 / 0), Sc, Cc), [K.Between]: Y(q(3, 3), J(U)), [K.Interpolate]: Y(q(6, 1 / 0), Sc, Tc), [K.InterpolateHcl]: Y(q(6, 1 / 0), Sc, wc, Tc), [K.Case]: Y(q(3, 1 / 0), xc, Ec), [K.In]: Y(q(2, 2), Dc), [K.Number]: Y(q(1, 1 / 0), J(ec)), [K.String]: Y(q(1, 1 / 0), J(ec)), [K.Array]: Y(q(1, 1 / 0), J(U)), [K.Color]: Y(q(1, 4), J(U)), [K.Band]: Y(q(1, 3), J(U)), [K.Palette]: Y(q(2, 2), Oc), [K.ToString]: Y(q(1, 1), J(Ys | U | Xs | Zs))};
function fc(e19, t2, n2) {
  let r2 = e19.length - 1, i2 = Array(r2);
  for (let a2 = 0; a2 < r2; ++a2) {
    let r3 = e19[a2 + 1];
    switch (typeof r3) {
      case `number`:
        i2[a2] = new W(U, r3);
        break;
      case `string`:
        i2[a2] = new W(Xs, r3);
        break;
      default:
        throw Error(`expected a string key or numeric array index for a get operation, got ${r3}`);
    }
    a2 === 0 && n2.properties.set(String(r3), t2);
  }
  return i2;
}
function pc() {
  return function(e19, t2, n2) {
    let r2 = e19[1];
    if (typeof r2 != `string`)
      throw Error(`expected a string argument for var operation`);
    let i2 = t2, a2 = n2.inputVariables?.[r2];
    if (a2 !== void 0) {
      let e20 = G(a2, ec, n2);
      if (!(e20 instanceof W))
        throw Error(`style variables should only be literal values (no expressions!), variable name: ${r2}`);
      let o2 = e20.type;
      if (typeof a2 == `string` && oc(i2, Zs) && !oc(i2, Xs) ? o2 = Zs : Array.isArray(a2) && a2.length === 2 && oc(i2, $s) && !oc(i2, Qs) && (o2 = $s), i2 &= o2, i2 === 0)
        throw Error(`the type expected from the var operator (${ic(t2)}) did not have any overlap with the type of the corresponding style variables (${ic(o2)}), variable name: ${r2}`);
    }
    if (n2.variables.has(r2)) {
      let e20 = n2.variables.get(r2);
      if (i2 &= e20, i2 === 0)
        throw Error(`a new type expected from the var operator (${ic(t2)}) did not have any overlap with the previous type expected for it (${ic(e20)}), variable name: ${r2}`);
    }
    return n2.variables.set(r2, i2), new lc(i2, `var`, new W(Xs, r2));
  };
}
function mc(e19, t2, n2) {
  n2.featureId = true;
}
function hc(e19, t2, n2) {
  n2.geometryType = true;
}
function gc(e19, t2, n2) {
  n2.mCoordinate = true;
}
function _c(e19, t2, n2) {
  n2.mapState = true;
}
function vc(e19, t2, n2) {
  let r2 = e19[0];
  if (e19.length !== 1)
    throw Error(`expected no arguments for ${r2} operation`);
  return [];
}
function q(e19, t2) {
  return function(n2, r2, i2) {
    let a2 = n2[0], o2 = n2.length - 1;
    if (e19 === t2) {
      if (o2 !== e19)
        throw Error(`expected ${e19} argument${e19 === 1 ? `` : `s`} for ${a2}, got ${o2}`);
    } else if (o2 < e19 || o2 > t2) {
      let n3 = t2 === 1 / 0 ? `${e19} or more` : `${e19} to ${t2}`;
      throw Error(`expected ${n3} arguments for ${a2}, got ${o2}`);
    }
  };
}
function yc(e19, t2, n2) {
  let r2 = e19.length - 1, i2 = Array(r2);
  for (let a2 = 0; a2 < r2; ++a2) {
    let r3 = G(e19[a2 + 1], t2, n2);
    i2[a2] = r3;
  }
  return i2;
}
function J(e19) {
  return function(t2, n2, r2) {
    let i2 = t2.length - 1, a2 = Array(i2);
    for (let n3 = 0; n3 < i2; ++n3) {
      let i3 = G(t2[n3 + 1], e19, r2);
      a2[n3] = i3;
    }
    return a2;
  };
}
function bc() {
  return function(e19, t2, n2) {
    let r2 = e19[0], i2 = e19.length - 1, a2 = Array(i2), o2 = ec;
    for (let t3 = 0; t3 < i2; ++t3) {
      let r3 = G(e19[t3 + 1], o2, n2);
      o2 &= r3.type;
    }
    if (o2 === 0)
      throw Error(`no common type was found among the arguments of ${r2}`);
    for (let t3 = 0; t3 < i2; ++t3) {
      let r3 = G(e19[t3 + 1], o2, n2);
      a2[t3] = r3;
    }
    return a2;
  };
}
function xc(e19, t2, n2) {
  let r2 = e19[0], i2 = e19.length - 1;
  if (i2 % 2 == 0)
    throw Error(`expected an odd number of arguments for ${r2}, got ${i2} instead`);
}
function Sc(e19, t2, n2) {
  let r2 = e19[0], i2 = e19.length - 1;
  if (i2 % 2 == 1)
    throw Error(`expected an even number of arguments for operation ${r2}, got ${i2} instead`);
}
function Cc(e19, t2, n2) {
  let r2 = e19.length - 1, i2 = G(e19[e19.length - 1], t2, n2), a2 = Xs | U | Ys, o2 = Array(r2 - 2);
  for (let t3 = 0; t3 < r2 - 2; t3 += 2) {
    try {
      let r3 = G(e19[t3 + 2], a2, n2);
      a2 &= r3.type;
    } catch (e20) {
      let n3 = cc(e20);
      throw Error(`failed to parse argument ${t3 + 1} of match expression: ${n3}`);
    }
    if (a2 === 0)
      throw Error(`no common type was found among the arguments of match expression`);
  }
  for (let t3 = 0; t3 < r2 - 2; t3 += 2) {
    try {
      let r3 = G(e19[t3 + 2], a2, n2);
      o2[t3] = r3;
    } catch (e20) {
      let n3 = cc(e20);
      throw Error(`failed to parse argument ${t3 + 1} of match expression: ${n3}`);
    }
    try {
      let r3 = G(e19[t3 + 3], i2.type, n2);
      o2[t3 + 1] = r3;
    } catch (e20) {
      throw Error(`failed to parse argument ${t3 + 2} of match expression: ${cc(e20)}`);
    }
  }
  return [G(e19[1], a2, n2), ...o2, i2];
}
function wc(e19, t2, n2) {
  if (!ac(t2, Zs))
    throw Error(`the ${e19[0]} operator can only return a color, got ${ic(t2)}`);
}
function Tc(e19, t2, n2) {
  let r2 = e19[1], i2;
  switch (r2[0]) {
    case `linear`:
      i2 = 1;
      break;
    case `exponential`:
      let e20 = r2[1];
      if (typeof e20 != `number` || e20 <= 0)
        throw Error(`expected a number base for exponential interpolation, got ${JSON.stringify(e20)} instead`);
      i2 = e20;
      break;
    default:
      throw Error(`invalid interpolation type: ${JSON.stringify(r2)}`);
  }
  let a2 = new W(U, i2), o2;
  try {
    o2 = G(e19[2], U, n2);
  } catch (e20) {
    throw Error(`failed to parse argument 1 in interpolate expression: ${cc(e20)}`);
  }
  let s2 = Array(e19.length - 3);
  for (let r3 = 0; r3 < s2.length; r3 += 2) {
    try {
      let t3 = G(e19[r3 + 3], U, n2);
      s2[r3] = t3;
    } catch (e20) {
      throw Error(`failed to parse argument ${r3 + 2} for interpolate expression: ${cc(e20)}`);
    }
    try {
      let i3 = G(e19[r3 + 4], t2, n2);
      s2[r3 + 1] = i3;
    } catch (e20) {
      throw Error(`failed to parse argument ${r3 + 3} for interpolate expression: ${cc(e20)}`);
    }
  }
  return [a2, o2, ...s2];
}
function Ec(e19, t2, n2) {
  let r2 = G(e19[e19.length - 1], t2, n2), i2 = Array(e19.length - 1);
  for (let t3 = 0; t3 < i2.length - 1; t3 += 2) {
    try {
      let r3 = G(e19[t3 + 1], Ys, n2);
      i2[t3] = r3;
    } catch (e20) {
      throw Error(`failed to parse argument ${t3} of case expression: ${cc(e20)}`);
    }
    try {
      let a2 = G(e19[t3 + 2], r2.type, n2);
      i2[t3 + 1] = a2;
    } catch (e20) {
      throw Error(`failed to parse argument ${t3 + 1} of case expression: ${cc(e20)}`);
    }
  }
  return i2[i2.length - 1] = r2, i2;
}
function Dc(e19, t2, n2) {
  let r2 = e19[2];
  if (!Array.isArray(r2))
    throw Error(`the second argument for the "in" operator must be an array`);
  let i2;
  if (r2[0] === `literal`) {
    if (r2 = r2[1], !Array.isArray(r2))
      throw Error(`failed to parse "in" expression: the literal operator must be followed by an array`);
  } else if (typeof r2[0] == `string`)
    throw Error(`for the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions`);
  i2 = typeof r2[0] == `string` ? Xs : U;
  let a2 = Array(r2.length);
  for (let e20 = 0; e20 < a2.length; e20++)
    try {
      let t3 = G(r2[e20], i2, n2);
      a2[e20] = t3;
    } catch (t3) {
      throw Error(`failed to parse haystack item ${e20} for "in" expression: ${cc(t3)}`);
    }
  return [G(e19[1], i2, n2), ...a2];
}
function Oc(e19, t2, n2) {
  let r2;
  try {
    r2 = G(e19[1], U, n2);
  } catch (e20) {
    throw Error(`failed to parse first argument in palette expression: ${cc(e20)}`);
  }
  let i2 = e19[2];
  if (!Array.isArray(i2))
    throw Error(`the second argument of palette must be an array`);
  let a2 = Array(i2.length);
  for (let e20 = 0; e20 < a2.length; e20++) {
    let t3;
    try {
      t3 = G(i2[e20], Zs, n2);
    } catch (t4) {
      throw Error(`failed to parse color at index ${e20} in palette expression: ${cc(t4)}`);
    }
    if (!(t3 instanceof W))
      throw Error(`the palette color at index ${e20} must be a literal value`);
    a2[e20] = t3;
  }
  return [r2, ...a2];
}
function Y(...e19) {
  return function(t2, n2, r2) {
    let i2 = t2[0], a2 = [];
    for (let i3 = 0; i3 < e19.length; i3++) {
      let o2 = e19[i3](t2, n2, r2);
      if (i3 == e19.length - 1) {
        if (!o2)
          throw Error(`expected last argument validator to return the parsed args`);
        a2 = o2;
      }
    }
    return new lc(n2, i2, ...a2);
  };
}
function kc(e19, t2, n2) {
  let r2 = e19[0], i2 = dc[r2];
  if (!i2)
    throw Error(`unknown operator: ${r2}`);
  return i2(e19, t2, n2);
}
function Ac(e19) {
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
      return Ac(e19.getGeometries()[0]);
    default:
      return ``;
  }
}
function jc() {
  return {variables: {}, properties: {}, resolution: NaN, featureId: null, geometryType: ``};
}
function Mc(e19, t2, n2) {
  return Nc(G(e19, t2, n2), n2);
}
function Nc(e19, t2) {
  if (e19 instanceof W) {
    if (e19.type === Zs && typeof e19.value == `string`) {
      let t3 = Gi(e19.value);
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
    case K.Number:
    case K.String:
    case K.Coalesce:
      return Ic(e19, t2);
    case K.Get:
    case K.Var:
    case K.Has:
      return Lc(e19, t2);
    case K.Id:
      return (e20) => e20.featureId ?? ``;
    case K.GeometryType:
      return (e20) => e20.geometryType;
    case K.Concat: {
      let n3 = e19.args.map((e20) => Nc(e20, t2));
      return (e20) => ``.concat(...n3.map((t3) => (t3(e20) ?? ``).toString()));
    }
    case K.Resolution:
      return (e20) => e20.resolution;
    case K.Any:
    case K.All:
    case K.Between:
    case K.In:
    case K.Not:
      return zc(e19, t2);
    case K.Equal:
    case K.NotEqual:
    case K.LessThan:
    case K.LessThanOrEqualTo:
    case K.GreaterThan:
    case K.GreaterThanOrEqualTo:
      return Rc(e19, t2);
    case K.Multiply:
    case K.Divide:
    case K.Add:
    case K.Subtract:
    case K.Clamp:
    case K.Mod:
    case K.Pow:
    case K.Abs:
    case K.Floor:
    case K.Ceil:
    case K.Round:
    case K.Sin:
    case K.Cos:
    case K.Atan:
    case K.Sqrt:
      return Bc(e19, t2);
    case K.Case:
      return Vc(e19, t2);
    case K.Match:
      return Hc(e19, t2);
    case K.Interpolate:
    case K.InterpolateHcl:
      return Uc(e19, t2);
    case K.ToString:
      return Wc(e19, t2);
    case K.Array:
      return Pc(e19, t2);
    case K.Color:
      return Fc(e19, t2);
    default:
      throw Error(`Unsupported operator ${n2}`);
  }
}
function Pc(e19, t2) {
  let n2 = e19.args.length, r2 = Array(n2);
  for (let i2 = 0; i2 < n2; ++i2)
    r2[i2] = Nc(e19.args[i2], t2);
  if (e19.type === Zs && (n2 === 3 || n2 === 4)) {
    let e20 = n2 === 4 ? r2[3] : null;
    return (t3) => [r2[0](t3) * 255, r2[1](t3) * 255, r2[2](t3) * 255, e20 ? e20(t3) : 1];
  }
  return (e20) => {
    let t3 = Array(n2);
    for (let i2 = 0; i2 < n2; ++i2)
      t3[i2] = r2[i2](e20);
    return t3;
  };
}
function Fc(e19, t2) {
  let n2 = e19.args.length, r2 = Array(n2);
  for (let i3 = 0; i3 < n2; ++i3)
    r2[i3] = Nc(e19.args[i3], t2);
  if (n2 < 3) {
    let e20 = n2 === 2 ? r2[1] : null;
    return (t3) => {
      let n3 = r2[0](t3);
      return [n3, n3, n3, e20 ? e20(t3) : 1];
    };
  }
  let i2 = n2 === 4 ? r2[3] : null;
  return (e20) => [r2[0](e20), r2[1](e20), r2[2](e20), i2 ? i2(e20) : 1];
}
function Ic(e19, t2) {
  let n2 = e19.operator, r2 = e19.args.length, i2 = Array(r2);
  for (let n3 = 0; n3 < r2; ++n3)
    i2[n3] = Nc(e19.args[n3], t2);
  switch (n2) {
    case K.Coalesce:
      return (e20) => {
        for (let t3 = 0; t3 < r2; ++t3) {
          let n3 = i2[t3](e20);
          if (n3 != null)
            return n3;
        }
        throw Error(`Expected one of the values to be non-null`);
      };
    case K.Number:
    case K.String:
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
function Lc(e19, t2) {
  let n2 = e19.args[0].value;
  switch (e19.operator) {
    case K.Get:
      return (t3) => {
        let r2 = e19.args, i2 = t3.properties[n2];
        for (let e20 = 1, t4 = r2.length; e20 < t4; ++e20) {
          let t5 = r2[e20].value;
          i2 = i2[t5];
        }
        return i2;
      };
    case K.Var:
      return (e20) => e20.variables[n2];
    case K.Has:
      return (t3) => {
        let r2 = e19.args;
        if (!(n2 in t3.properties))
          return false;
        let i2 = t3.properties[n2];
        for (let e20 = 1, t4 = r2.length; e20 < t4; ++e20) {
          let t5 = r2[e20].value;
          if (!i2 || !Object.hasOwn(i2, t5))
            return false;
          i2 = i2[t5];
        }
        return true;
      };
    default:
      throw Error(`Unsupported accessor operator ${e19.operator}`);
  }
}
function Rc(e19, t2) {
  let n2 = e19.operator, r2 = Nc(e19.args[0], t2), i2 = Nc(e19.args[1], t2);
  switch (n2) {
    case K.Equal:
      return (e20) => r2(e20) === i2(e20);
    case K.NotEqual:
      return (e20) => r2(e20) !== i2(e20);
    case K.LessThan:
      return (e20) => r2(e20) < i2(e20);
    case K.LessThanOrEqualTo:
      return (e20) => r2(e20) <= i2(e20);
    case K.GreaterThan:
      return (e20) => r2(e20) > i2(e20);
    case K.GreaterThanOrEqualTo:
      return (e20) => r2(e20) >= i2(e20);
    default:
      throw Error(`Unsupported comparison operator ${n2}`);
  }
}
function zc(e19, t2) {
  let n2 = e19.operator, r2 = e19.args.length, i2 = Array(r2);
  for (let n3 = 0; n3 < r2; ++n3)
    i2[n3] = Nc(e19.args[n3], t2);
  switch (n2) {
    case K.Any:
      return (e20) => {
        for (let t3 = 0; t3 < r2; ++t3)
          if (i2[t3](e20))
            return true;
        return false;
      };
    case K.All:
      return (e20) => {
        for (let t3 = 0; t3 < r2; ++t3)
          if (!i2[t3](e20))
            return false;
        return true;
      };
    case K.Between:
      return (e20) => {
        let t3 = i2[0](e20), n3 = i2[1](e20), r3 = i2[2](e20);
        return t3 >= n3 && t3 <= r3;
      };
    case K.In:
      return (e20) => {
        let t3 = i2[0](e20);
        for (let n3 = 1; n3 < r2; ++n3)
          if (t3 === i2[n3](e20))
            return true;
        return false;
      };
    case K.Not:
      return (e20) => !i2[0](e20);
    default:
      throw Error(`Unsupported logical operator ${n2}`);
  }
}
function Bc(e19, t2) {
  let n2 = e19.operator, r2 = e19.args.length, i2 = Array(r2);
  for (let n3 = 0; n3 < r2; ++n3)
    i2[n3] = Nc(e19.args[n3], t2);
  switch (n2) {
    case K.Multiply:
      return (e20) => {
        let t3 = 1;
        for (let n3 = 0; n3 < r2; ++n3)
          t3 *= i2[n3](e20);
        return t3;
      };
    case K.Divide:
      return (e20) => i2[0](e20) / i2[1](e20);
    case K.Add:
      return (e20) => {
        let t3 = 0;
        for (let n3 = 0; n3 < r2; ++n3)
          t3 += i2[n3](e20);
        return t3;
      };
    case K.Subtract:
      return (e20) => i2[0](e20) - i2[1](e20);
    case K.Clamp:
      return (e20) => {
        let t3 = i2[0](e20), n3 = i2[1](e20);
        if (t3 < n3)
          return n3;
        let r3 = i2[2](e20);
        return t3 > r3 ? r3 : t3;
      };
    case K.Mod:
      return (e20) => i2[0](e20) % i2[1](e20);
    case K.Pow:
      return (e20) => i2[0](e20) ** +i2[1](e20);
    case K.Abs:
      return (e20) => Math.abs(i2[0](e20));
    case K.Floor:
      return (e20) => Math.floor(i2[0](e20));
    case K.Ceil:
      return (e20) => Math.ceil(i2[0](e20));
    case K.Round:
      return (e20) => Math.round(i2[0](e20));
    case K.Sin:
      return (e20) => Math.sin(i2[0](e20));
    case K.Cos:
      return (e20) => Math.cos(i2[0](e20));
    case K.Atan:
      return r2 === 2 ? (e20) => Math.atan2(i2[0](e20), i2[1](e20)) : (e20) => Math.atan(i2[0](e20));
    case K.Sqrt:
      return (e20) => Math.sqrt(i2[0](e20));
    default:
      throw Error(`Unsupported numeric operator ${n2}`);
  }
}
function Vc(e19, t2) {
  let n2 = e19.args.length, r2 = Array(n2);
  for (let i2 = 0; i2 < n2; ++i2)
    r2[i2] = Nc(e19.args[i2], t2);
  return (e20) => {
    for (let t3 = 0; t3 < n2 - 1; t3 += 2)
      if (r2[t3](e20))
        return r2[t3 + 1](e20);
    return r2[n2 - 1](e20);
  };
}
function Hc(e19, t2) {
  let n2 = e19.args.length, r2 = Array(n2);
  for (let i2 = 0; i2 < n2; ++i2)
    r2[i2] = Nc(e19.args[i2], t2);
  return (e20) => {
    let t3 = r2[0](e20);
    for (let i2 = 1; i2 < n2 - 1; i2 += 2)
      if (t3 === r2[i2](e20))
        return r2[i2 + 1](e20);
    return r2[n2 - 1](e20);
  };
}
function Uc(e19, t2) {
  let n2 = e19.args.length, r2 = Array(n2);
  for (let i3 = 0; i3 < n2; ++i3)
    r2[i3] = Nc(e19.args[i3], t2);
  let i2 = e19.operator === K.InterpolateHcl ? qc : Kc;
  return (e20) => {
    let t3 = r2[0](e20), a2 = r2[1](e20), o2, s2;
    for (let c2 = 2; c2 < n2; c2 += 2) {
      let n3 = r2[c2](e20), l2 = r2[c2 + 1](e20), u2 = Array.isArray(l2);
      if (u2 && (l2 = Ri(l2)), n3 >= a2)
        return c2 === 2 ? l2 : u2 ? i2(t3, a2, o2, s2, n3, l2) : Gc(t3, a2, o2, s2, n3, l2);
      o2 = n3, s2 = l2;
    }
    return s2;
  };
}
function Wc(e19, t2) {
  let n2 = e19.operator, r2 = e19.args.length, i2 = Array(r2);
  for (let n3 = 0; n3 < r2; ++n3)
    i2[n3] = Nc(e19.args[n3], t2);
  switch (n2) {
    case K.ToString:
      return (t3) => {
        let n3 = i2[0](t3);
        return e19.args[0].type === Zs ? qi(n3) : n3.toString();
      };
    default:
      throw Error(`Unsupported convert operator ${n2}`);
  }
}
function Gc(e19, t2, n2, r2, i2, a2) {
  let o2 = i2 - n2;
  if (o2 === 0)
    return r2;
  let s2 = t2 - n2;
  return r2 + (e19 === 1 ? s2 / o2 : (e19 ** +s2 - 1) / (e19 ** +o2 - 1)) * (a2 - r2);
}
function Kc(e19, t2, n2, r2, i2, a2) {
  return i2 - n2 === 0 ? r2 : [Gc(e19, t2, n2, r2[0], i2, a2[0]), Gc(e19, t2, n2, r2[1], i2, a2[1]), Gc(e19, t2, n2, r2[2], i2, a2[2]), Gc(e19, t2, n2, r2[3], i2, a2[3])];
}
function qc(e19, t2, n2, r2, i2, a2) {
  if (i2 - n2 === 0)
    return r2;
  let o2 = Ui(r2), s2 = Ui(a2), c2 = s2[2] - o2[2];
  return c2 > 180 ? c2 -= 360 : c2 < -180 && (c2 += 360), Wi([Gc(e19, t2, n2, o2[0], i2, s2[0]), Gc(e19, t2, n2, o2[1], i2, s2[1]), o2[2] + Gc(e19, t2, n2, 0, i2, c2), Gc(e19, t2, n2, r2[3], i2, a2[3])]);
}
function Jc(e19) {
  return true;
}
function Yc(e19, t2) {
  t2 ?? (t2 = uc());
  let n2 = Qc(e19, t2), r2 = jc();
  return function(e20, i2) {
    if (r2.properties = e20.getPropertiesInternal() ?? {}, r2.resolution = i2, t2.featureId) {
      let t3 = e20.getId();
      t3 === void 0 ? r2.featureId = null : r2.featureId = t3;
    }
    if (t2.geometryType) {
      let t3 = e20.getGeometry();
      t3 && (r2.geometryType = Ac(t3));
    }
    return n2(r2);
  };
}
function Xc(e19, t2) {
  t2 ?? (t2 = uc());
  let n2 = e19.length, r2 = Array(n2);
  for (let i3 = 0; i3 < n2; ++i3)
    r2[i3] = $c(e19[i3], t2);
  let i2 = jc(), a2 = Array(n2);
  return function(e20, o2) {
    if (i2.properties = e20.getPropertiesInternal() ?? {}, i2.resolution = o2, t2.featureId) {
      let t3 = e20.getId();
      t3 === void 0 ? i2.featureId = null : i2.featureId = t3;
    }
    if (t2.geometryType) {
      let t3 = e20.getGeometry();
      t3 && (i2.geometryType = Ac(t3));
    }
    let s2 = 0;
    for (let e21 = 0; e21 < n2; ++e21) {
      let t3 = r2[e21](i2);
      t3 && (a2[s2] = t3, s2 += 1);
    }
    return a2.length = s2, a2;
  };
}
function Zc(e19, t2) {
  if (t2 ?? (t2 = uc()), !Array.isArray(e19))
    return Xc([e19], t2);
  let n2 = e19.length;
  if (`style` in e19[0]) {
    let r2 = Array(n2);
    for (let t3 = 0; t3 < n2; ++t3) {
      let n3 = e19[t3];
      if (!(`style` in n3))
        throw Error(`Expected a list of rules with a style property`);
      r2[t3] = n3;
    }
    return Yc(r2, t2);
  }
  return Xc(e19, t2);
}
function Qc(e19, t2) {
  let n2 = e19.length, r2 = Array(n2);
  for (let i2 = 0; i2 < n2; ++i2) {
    let n3 = e19[i2], a2 = `filter` in n3 && n3.filter !== void 0 ? Mc(n3.filter, Ys, t2) : Jc, o2;
    if (Array.isArray(n3.style)) {
      let e20 = n3.style.length;
      o2 = Array(e20);
      for (let r3 = 0; r3 < e20; ++r3)
        o2[r3] = $c(n3.style[r3], t2);
    } else
      o2 = [$c(n3.style, t2)];
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
function $c(e19, t2) {
  let n2 = el(e19, ``, t2), r2 = tl(e19, ``, t2), i2 = nl(e19, t2), a2 = rl(e19, t2), o2 = Z(e19, `z-index`, t2);
  if (!n2 && !r2 && !i2 && !a2 && !d(e19))
    throw Error(`No fill, stroke, point, or text symbolizer properties in style: ` + JSON.stringify(e19));
  let s2 = new Vo();
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
function el(e19, t2, n2) {
  let r2;
  if (t2 + `fill-pattern-src` in e19)
    r2 = cl(e19, t2 + `fill-`, n2);
  else {
    if (X(e19, t2 + `fill-color`) === `none`)
      return (e20) => null;
    r2 = ul(e19, t2 + `fill-color`, n2);
  }
  if (!r2)
    return null;
  let i2 = new No();
  return function(e20) {
    let t3 = r2(e20);
    return t3 === wi ? null : (i2.setColor(t3), i2);
  };
}
function tl(e19, t2, n2) {
  let r2 = Z(e19, t2 + `stroke-width`, n2), i2 = ul(e19, t2 + `stroke-color`, n2);
  if (!r2 && !i2)
    return null;
  let a2 = sl(e19, t2 + `stroke-line-cap`, n2), o2 = sl(e19, t2 + `stroke-line-join`, n2), s2 = dl(e19, t2 + `stroke-line-dash`, n2), c2 = Z(e19, t2 + `stroke-line-dash-offset`, n2), l2 = Z(e19, t2 + `stroke-miter-limit`, n2), u2 = Z(e19, t2 + `stroke-offset`, n2), d2 = new Po();
  return function(e20) {
    if (i2) {
      let t3 = i2(e20);
      if (t3 === wi)
        return null;
      d2.setColor(t3);
    }
    if (r2 && d2.setWidth(r2(e20)), a2) {
      let t3 = a2(e20);
      if (t3 !== `butt` && t3 !== `round` && t3 !== `square`)
        throw Error(`Expected butt, round, or square line cap`);
      d2.setLineCap(t3);
    }
    if (o2) {
      let t3 = o2(e20);
      if (t3 !== `bevel` && t3 !== `round` && t3 !== `miter`)
        throw Error(`Expected bevel, round, or miter line join`);
      d2.setLineJoin(t3);
    }
    return s2 && d2.setLineDash(s2(e20)), c2 && d2.setLineDashOffset(c2(e20)), l2 && d2.setMiterLimit(l2(e20)), u2 && d2.setOffset(u2(e20)), d2;
  };
}
function nl(e19, t2) {
  let n2 = `text-`, r2 = sl(e19, `text-value`, t2);
  if (!r2)
    return null;
  let i2 = el(e19, n2, t2), a2 = el(e19, `text-background-`, t2), o2 = tl(e19, n2, t2), s2 = tl(e19, `text-background-`, t2), c2 = sl(e19, `text-font`, t2), l2 = Z(e19, `text-max-angle`, t2), u2 = Z(e19, `text-offset-x`, t2), d2 = Z(e19, `text-offset-y`, t2), f2 = ll(e19, `text-overflow`, t2), p2 = sl(e19, `text-placement`, t2), m2 = Z(e19, `text-repeat`, t2), h2 = ml(e19, `text-scale`, t2), g2 = ll(e19, `text-rotate-with-view`, t2), _2 = Z(e19, `text-rotation`, t2), v2 = sl(e19, `text-align`, t2), y2 = sl(e19, `text-justify`, t2), b2 = sl(e19, `text-baseline`, t2), x2 = ll(e19, `text-keep-upright`, t2), S2 = dl(e19, `text-padding`, t2), C2 = new qo({declutterMode: xl(e19, `text-declutter-mode`)});
  return function(e20) {
    if (C2.setText(r2(e20)), i2 && C2.setFill(i2(e20)), a2 && C2.setBackgroundFill(a2(e20)), o2 && C2.setStroke(o2(e20)), s2 && C2.setBackgroundStroke(s2(e20)), c2 && C2.setFont(c2(e20)), l2 && C2.setMaxAngle(l2(e20)), u2 && C2.setOffsetX(u2(e20)), d2 && C2.setOffsetY(d2(e20)), f2 && C2.setOverflow(f2(e20)), p2) {
      let t3 = p2(e20);
      if (t3 !== `point` && t3 !== `line`)
        throw Error(`Expected point or line for text-placement`);
      C2.setPlacement(t3);
    }
    if (m2 && C2.setRepeat(m2(e20)), h2 && C2.setScale(h2(e20)), g2 && C2.setRotateWithView(g2(e20)), _2 && C2.setRotation(_2(e20)), v2) {
      let t3 = v2(e20);
      if (t3 !== `left` && t3 !== `center` && t3 !== `right` && t3 !== `end` && t3 !== `start`)
        throw Error(`Expected left, right, center, start, or end for text-align`);
      C2.setTextAlign(t3);
    }
    if (y2) {
      let t3 = y2(e20);
      if (t3 !== `left` && t3 !== `right` && t3 !== `center`)
        throw Error(`Expected left, right, or center for text-justify`);
      C2.setJustify(t3);
    }
    if (b2) {
      let t3 = b2(e20);
      if (t3 !== `bottom` && t3 !== `top` && t3 !== `middle` && t3 !== `alphabetic` && t3 !== `hanging`)
        throw Error(`Expected bottom, top, middle, alphabetic, or hanging for text-baseline`);
      C2.setTextBaseline(t3);
    }
    return S2 && C2.setPadding(S2(e20)), x2 && C2.setKeepUpright(x2(e20)), C2;
  };
}
function rl(e19, t2) {
  return `icon-src` in e19 ? il(e19, t2) : `shape-points` in e19 ? al(e19, t2) : `circle-radius` in e19 ? ol(e19, t2) : null;
}
function il(e19, t2) {
  let n2 = `icon-src`, r2 = Cl(X(e19, n2), n2), i2 = fl(e19, `icon-anchor`, t2), a2 = ml(e19, `icon-scale`, t2), o2 = Z(e19, `icon-opacity`, t2), s2 = fl(e19, `icon-displacement`, t2), c2 = Z(e19, `icon-rotation`, t2), l2 = ll(e19, `icon-rotate-with-view`, t2), u2 = vl(e19, `icon-anchor-origin`), d2 = yl(e19, `icon-anchor-x-units`), f2 = yl(e19, `icon-anchor-y-units`), p2 = X(e19, `icon-color`), m2, h2 = null;
  p2 !== void 0 && (Array.isArray(p2) && p2.length > 0 && typeof p2[0] == `string` ? h2 = ul(e19, `icon-color`, t2) : m2 = Tl(p2, `icon-color`));
  let g2 = _l(e19, `icon-cross-origin`), _2 = bl(e19, `icon-offset`), v2 = vl(e19, `icon-offset-origin`), y2 = hl(e19, `icon-width`), b2 = {src: r2, anchorOrigin: u2, anchorXUnits: d2, anchorYUnits: f2, crossOrigin: g2, offset: _2, offsetOrigin: v2, height: hl(e19, `icon-height`), width: y2, size: gl(e19, `icon-size`), declutterMode: xl(e19, `icon-declutter-mode`)}, x2 = null;
  return function(e20) {
    if (x2)
      h2 && x2.setColor(h2(e20));
    else {
      let t3 = h2 ? h2(e20) : m2;
      x2 = new Is(t3 === void 0 ? Object.assign({}, b2) : Object.assign({}, b2, {color: t3}));
    }
    return o2 && x2.setOpacity(o2(e20)), s2 && x2.setDisplacement(s2(e20)), c2 && x2.setRotation(c2(e20)), l2 && x2.setRotateWithView(l2(e20)), a2 && x2.setScale(a2(e20)), i2 && x2.setAnchor(i2(e20)), x2;
  };
}
function al(e19, t2) {
  let n2 = `shape-`, r2 = `shape-points`, i2 = `shape-radius`, a2 = wl(X(e19, r2), r2);
  if (!(i2 in e19))
    throw Error(`Expected a number for ${i2}`);
  let o2 = Z(e19, i2, t2), s2 = X(e19, i2), c2 = typeof s2 == `number` ? s2 : 5, l2 = `shape-radius2`, u2 = Z(e19, l2, t2), d2 = X(e19, l2), f2 = typeof d2 == `number` ? d2 : void 0, p2 = el(e19, n2, t2), m2 = tl(e19, n2, t2), h2 = ml(e19, `shape-scale`, t2), g2 = fl(e19, `shape-displacement`, t2), _2 = Z(e19, `shape-rotation`, t2), v2 = ll(e19, `shape-rotate-with-view`, t2), y2 = new zo({points: a2, radius: c2, radius2: f2, angle: hl(e19, `shape-angle`), declutterMode: xl(e19, `shape-declutter-mode`)});
  return function(e20) {
    return o2 && y2.setRadius(o2(e20)), u2 && y2.setRadius2(u2(e20)), p2 && y2.setFill(p2(e20)), m2 && y2.setStroke(m2(e20)), g2 && y2.setDisplacement(g2(e20)), _2 && y2.setRotation(_2(e20)), v2 && y2.setRotateWithView(v2(e20)), h2 && y2.setScale(h2(e20)), y2;
  };
}
function ol(e19, t2) {
  let n2 = `circle-`, r2 = el(e19, n2, t2), i2 = tl(e19, n2, t2), a2 = Z(e19, `circle-radius`, t2), o2 = ml(e19, `circle-scale`, t2), s2 = fl(e19, `circle-displacement`, t2), c2 = Z(e19, `circle-rotation`, t2), l2 = ll(e19, `circle-rotate-with-view`, t2), u2 = new Bo({radius: 5, declutterMode: xl(e19, `circle-declutter-mode`)});
  return function(e20) {
    return a2 && u2.setRadius(a2(e20)), r2 && u2.setFill(r2(e20)), i2 && u2.setStroke(i2(e20)), s2 && u2.setDisplacement(s2(e20)), c2 && u2.setRotation(c2(e20)), l2 && u2.setRotateWithView(l2(e20)), o2 && u2.setScale(o2(e20)), u2;
  };
}
function X(e19, t2) {
  if (!(t2 in e19))
    return;
  let n2 = e19[t2];
  return n2 === void 0 ? void 0 : n2;
}
function Z(e19, t2, n2) {
  let r2 = X(e19, t2);
  if (r2 === void 0)
    return;
  let i2 = Mc(r2, U, n2);
  return function(e20) {
    return wl(i2(e20), t2);
  };
}
function sl(e19, t2, n2) {
  let r2 = X(e19, t2);
  if (r2 === void 0)
    return null;
  let i2 = Mc(r2, Xs, n2);
  return function(e20) {
    return Cl(i2(e20), t2);
  };
}
function cl(e19, t2, n2) {
  let r2 = sl(e19, t2 + `pattern-src`, n2), i2 = pl(e19, t2 + `pattern-offset`, n2), a2 = pl(e19, t2 + `pattern-size`, n2), o2 = ul(e19, t2 + `color`, n2);
  return function(e20) {
    return r2 ? {src: r2(e20), offset: i2 ? i2(e20) : null, size: a2 ? a2(e20) : null, color: o2 ? o2(e20) : null} : null;
  };
}
function ll(e19, t2, n2) {
  let r2 = X(e19, t2);
  if (r2 === void 0)
    return null;
  let i2 = Mc(r2, Ys, n2);
  return function(e20) {
    let n3 = i2(e20);
    if (typeof n3 != `boolean`)
      throw Error(`Expected a boolean for ${t2}`);
    return n3;
  };
}
function ul(e19, t2, n2) {
  let r2 = X(e19, t2);
  if (r2 === void 0)
    return null;
  let i2 = Mc(r2, Zs, n2);
  return function(e20) {
    return Tl(i2(e20), t2);
  };
}
function dl(e19, t2, n2) {
  let r2 = X(e19, t2);
  if (r2 === void 0)
    return null;
  if (Array.isArray(r2) && (r2.length === 0 || typeof r2[0] != `string`)) {
    let e20 = r2.map((e21, r3) => {
      if (typeof e21 == `number`)
        return () => e21;
      let i3 = Mc(e21, U, n2);
      return function(e22) {
        return wl(i3(e22), `${t2}[${r3}]`);
      };
    });
    return function(t3) {
      let n3 = Array(e20.length);
      for (let r3 = 0; r3 < e20.length; ++r3)
        n3[r3] = e20[r3](t3);
      return n3;
    };
  }
  let i2 = Mc(r2, Qs, n2);
  return function(e20) {
    return Sl(i2(e20), t2);
  };
}
function fl(e19, t2, n2) {
  let r2 = X(e19, t2);
  if (r2 === void 0)
    return null;
  let i2 = Mc(r2, Qs, n2);
  return function(e20) {
    let n3 = Sl(i2(e20), t2);
    if (n3.length !== 2)
      throw Error(`Expected two numbers for ${t2}`);
    return n3;
  };
}
function pl(e19, t2, n2) {
  let r2 = X(e19, t2);
  if (r2 === void 0)
    return null;
  let i2 = Mc(r2, Qs, n2);
  return function(e20) {
    return El(i2(e20), t2);
  };
}
function ml(e19, t2, n2) {
  let r2 = X(e19, t2);
  if (r2 === void 0)
    return null;
  let i2 = Mc(r2, Qs | U, n2);
  return function(e20) {
    return Dl(i2(e20), t2);
  };
}
function hl(e19, t2) {
  let n2 = X(e19, t2);
  if (n2 !== void 0) {
    if (typeof n2 != `number`)
      throw Error(`Expected a number for ${t2}`);
    return n2;
  }
}
function gl(e19, t2) {
  let n2 = X(e19, t2);
  if (n2 !== void 0) {
    if (typeof n2 == `number`)
      return Lo(n2);
    if (!Array.isArray(n2) || n2.length !== 2 || typeof n2[0] != `number` || typeof n2[1] != `number`)
      throw Error(`Expected a number or size array for ${t2}`);
    return n2;
  }
}
function _l(e19, t2) {
  let n2 = X(e19, t2);
  if (n2 !== void 0) {
    if (typeof n2 != `string`)
      throw Error(`Expected a string for ${t2}`);
    return n2;
  }
}
function vl(e19, t2) {
  let n2 = X(e19, t2);
  if (n2 !== void 0) {
    if (n2 !== `bottom-left` && n2 !== `bottom-right` && n2 !== `top-left` && n2 !== `top-right`)
      throw Error(`Expected bottom-left, bottom-right, top-left, or top-right for ${t2}`);
    return n2;
  }
}
function yl(e19, t2) {
  let n2 = X(e19, t2);
  if (n2 !== void 0) {
    if (n2 !== `pixels` && n2 !== `fraction`)
      throw Error(`Expected pixels or fraction for ${t2}`);
    return n2;
  }
}
function bl(e19, t2) {
  let n2 = X(e19, t2);
  if (n2 !== void 0)
    return Sl(n2, t2);
}
function xl(e19, t2) {
  let n2 = X(e19, t2);
  if (n2 !== void 0) {
    if (typeof n2 != `string`)
      throw Error(`Expected a string for ${t2}`);
    if (n2 !== `declutter` && n2 !== `obstacle` && n2 !== `none`)
      throw Error(`Expected declutter, obstacle, or none for ${t2}`);
    return n2;
  }
}
function Sl(e19, t2) {
  if (!Array.isArray(e19))
    throw Error(`Expected an array for ${t2}`);
  let n2 = e19.length;
  for (let r2 = 0; r2 < n2; ++r2)
    if (typeof e19[r2] != `number`)
      throw Error(`Expected an array of numbers for ${t2}`);
  return e19;
}
function Cl(e19, t2) {
  if (typeof e19 != `string`)
    throw Error(`Expected a string for ${t2}`);
  return e19;
}
function wl(e19, t2) {
  if (typeof e19 != `number`)
    throw Error(`Expected a number for ${t2}`);
  return e19;
}
function Tl(e19, t2) {
  if (typeof e19 == `string`)
    return e19;
  let n2 = Sl(e19, t2), r2 = n2.length;
  if (r2 < 3 || r2 > 4)
    throw Error(`Expected a color with 3 or 4 values for ${t2}`);
  return n2;
}
function El(e19, t2) {
  let n2 = Sl(e19, t2);
  if (n2.length !== 2)
    throw Error(`Expected an array of two numbers for ${t2}`);
  return n2;
}
function Dl(e19, t2) {
  return typeof e19 == `number` ? e19 : El(e19, t2);
}
var Ol = {CENTER: `center`, RESOLUTION: `resolution`, ROTATION: `rotation`};
function kl(e19, t2, n2) {
  return function(r2, i2, a2, o2, s2) {
    if (!r2)
      return;
    if (!i2 && !t2)
      return r2;
    let c2 = t2 ? 0 : a2[0] * (i2 ?? 0), l2 = t2 ? 0 : a2[1] * (i2 ?? 0), u2 = s2 ? s2[0] : 0, d2 = s2 ? s2[1] : 0, f2 = e19[0] + c2 / 2 + u2, p2 = e19[2] - c2 / 2 + u2, m2 = e19[1] + l2 / 2 + d2, h2 = e19[3] - l2 / 2 + d2;
    f2 > p2 && (f2 = (p2 + f2) / 2, p2 = f2), m2 > h2 && (m2 = (h2 + m2) / 2, h2 = m2);
    let g2 = I(r2[0], f2, p2), _2 = I(r2[1], m2, h2);
    if (o2 && n2 && i2) {
      let e20 = 30 * i2;
      g2 += -e20 * Math.log(1 + Math.max(0, f2 - r2[0]) / e20) + e20 * Math.log(1 + Math.max(0, r2[0] - p2) / e20), _2 += -e20 * Math.log(1 + Math.max(0, m2 - r2[1]) / e20) + e20 * Math.log(1 + Math.max(0, r2[1] - h2) / e20);
    }
    return [g2, _2];
  };
}
function Al(e19) {
  return e19;
}
function jl(e19, t2, n2, r2) {
  let i2 = F(t2) / n2[0], a2 = P(t2) / n2[1];
  return r2 ? Math.min(e19, Math.max(i2, a2)) : Math.min(e19, Math.min(i2, a2));
}
function Ml(e19, t2, n2) {
  let r2 = Math.min(e19, t2);
  return r2 *= Math.log(1 + 50 * Math.max(0, e19 / t2 - 1)) / 50 + 1, n2 && (r2 = Math.max(r2, n2), r2 /= Math.log(1 + 50 * Math.max(0, n2 / e19 - 1)) / 50 + 1), I(r2, n2 / 2, t2 * 2);
}
function Nl(e19, t2, n2, r2) {
  return t2 = t2 === void 0 || t2, function(i2, a2, o2, s2) {
    if (i2 !== void 0) {
      let c2 = e19[0], l2 = e19[e19.length - 1], u2 = n2 ? jl(c2, n2, o2, !!r2) : c2;
      if (s2)
        return t2 ? Ml(i2, u2, l2) : I(i2, l2, u2);
      let d2 = Math.floor(b(e19, Math.min(u2, i2), a2));
      return e19[d2] > u2 && d2 < e19.length - 1 ? e19[d2 + 1] : e19[d2];
    }
  };
}
function Pl(e19, t2, n2, r2, i2, a2) {
  return r2 = r2 === void 0 || r2, n2 = n2 === void 0 ? 0 : n2, function(o2, s2, c2, l2) {
    if (o2 !== void 0) {
      let u2 = i2 ? jl(t2, i2, c2, !!a2) : t2;
      if (l2)
        return r2 ? Ml(o2, u2, n2) : I(o2, n2, u2);
      let d2 = Math.ceil(Math.log(t2 / u2) / Math.log(e19) - 1e-9), f2 = -s2 * 0.499999999 + 0.5, p2 = Math.floor(Math.log(t2 / Math.min(u2, o2)) / Math.log(e19) + f2);
      return I(t2 / e19 ** +Math.max(d2, p2), n2, u2);
    }
  };
}
function Fl(e19, t2, n2, r2, i2) {
  return n2 = n2 === void 0 || n2, function(a2, o2, s2, c2) {
    if (a2 !== void 0) {
      let o3 = r2 ? jl(e19, r2, s2, !!i2) : e19;
      return !n2 || !c2 ? I(a2, t2, o3) : Ml(a2, o3, t2);
    }
  };
}
function Il(e19) {
  if (e19 !== void 0)
    return 0;
}
function Ll(e19) {
  if (e19 !== void 0)
    return e19;
}
function Rl(e19) {
  let t2 = 2 * Math.PI / e19;
  return function(e20, n2) {
    if (n2)
      return e20;
    if (e20 !== void 0)
      return e20 = Math.floor(e20 / t2 + 0.5) * t2, e20;
  };
}
function zl(e19) {
  let t2 = e19 === void 0 ? et(5) : e19;
  return function(e20, n2) {
    return n2 || e20 === void 0 ? e20 : Math.abs(e20) <= t2 ? 0 : e20;
  };
}
var Bl = 0, Vl = class extends ce {
  constructor(e19) {
    super(), this.on, this.once, this.un, e19 = Object.assign({}, e19), this.hints_ = [0, 0], this.animations_ = [], this.updateAnimationKey_, this.projection_ = jn(e19.projection, `EPSG:3857`), this.viewportSize_ = [100, 100], this.targetCenter_ = null, this.targetResolution_, this.targetRotation_, this.nextCenter_ = null, this.nextResolution_, this.nextRotation_, this.cancelAnchor_ = void 0, e19.projection && Cn(), e19.center && (e19.center = Hn(e19.center, this.projection_)), e19.extent && (e19.extent = Wn(e19.extent, this.projection_)), this.applyOptions_(e19);
  }
  applyOptions_(e19) {
    let t2 = Object.assign({}, e19);
    for (let e20 in Ol)
      delete t2[e20];
    this.setProperties(t2, true);
    let n2 = Wl(e19);
    this.maxResolution_ = n2.maxResolution, this.minResolution_ = n2.minResolution, this.zoomFactor_ = n2.zoomFactor, this.resolutions_ = e19.resolutions, this.padding_ = e19.padding, this.minZoom_ = n2.minZoom;
    let r2 = Ul(e19), i2 = n2.constraint, a2 = Gl(e19);
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
      n2.center && (n2 = Object.assign({}, n2), n2.center = Hn(n2.center, this.getProjection())), n2.anchor && (n2 = Object.assign({}, n2), n2.anchor = Hn(n2.anchor, this.getProjection())), t2[e20] = n2;
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
      n2 && Hl(n2, true);
      return;
    }
    let i2 = Date.now(), a2 = this.targetCenter_.slice(), o2 = this.targetResolution_, s2 = this.targetRotation_, c2 = [];
    for (; r2 < t2; ++r2) {
      let e20 = arguments[r2], t3 = {start: i2, complete: false, anchor: e20.anchor, duration: e20.duration === void 0 ? 1e3 : e20.duration, easing: e20.easing || ci, callback: n2};
      if (e20.center && (t3.sourceCenter = a2, t3.targetCenter = e20.center.slice(), a2 = t3.targetCenter), e20.zoom === void 0 ? e20.resolution && (t3.sourceResolution = o2, t3.targetResolution = e20.resolution, o2 = t3.targetResolution) : (t3.sourceResolution = o2, t3.targetResolution = this.getResolutionForZoom(e20.zoom), o2 = t3.targetResolution), e20.rotation !== void 0) {
        t3.sourceRotation = s2;
        let n3 = tt(e20.rotation - s2 + Math.PI, 2 * Math.PI) - Math.PI;
        t3.targetRotation = s2 + n3, s2 = t3.targetRotation;
      }
      Kl(t3) ? t3.complete = true : i2 += t3.duration, c2.push(t3);
    }
    this.animations_.push(c2), this.setHint(V.ANIMATING, 1), this.updateAnimations_();
  }
  getAnimating() {
    return this.hints_[V.ANIMATING] > 0;
  }
  getInteracting() {
    return this.hints_[V.INTERACTING] > 0;
  }
  cancelAnimations() {
    this.setHint(V.ANIMATING, -this.hints_[V.ANIMATING]);
    let e19;
    for (let t2 = 0, n2 = this.animations_.length; t2 < n2; ++t2) {
      let n3 = this.animations_[t2];
      if (n3[0].callback && Hl(n3[0].callback, false), !e19)
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
          let e20 = c2 === 1 ? tt(a3.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : a3.sourceRotation + c2 * (a3.targetRotation - a3.sourceRotation);
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
        this.animations_[n2] = null, this.setHint(V.ANIMATING, -1), this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
        let e20 = r2[0].callback;
        e20 && Hl(e20, true);
      }
    }
    this.animations_ = this.animations_.filter(Boolean), t2 && this.updateAnimationKey_ === void 0 && (this.updateAnimationKey_ = requestAnimationFrame(this.updateAnimations_.bind(this)));
  }
  calculateCenterRotate(e19, t2) {
    let n2, r2 = this.getCenterInternal();
    return r2 !== void 0 && (n2 = [r2[0] - t2[0], r2[1] - t2[1]], pt(n2, e19 - this.getRotation()), dt(n2, t2)), n2;
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
    return e19 && Vn(e19, this.getProjection());
  }
  getCenterInternal() {
    return this.get(Ol.CENTER);
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
    return Un(this.calculateExtentInternal(e19), this.getProjection());
  }
  calculateExtentInternal(e19) {
    e19 || (e19 = this.getViewportSizeMinusPadding_());
    let t2 = this.getCenterInternal();
    j(t2, `The view center is not defined`);
    let n2 = this.getResolution();
    j(n2 !== void 0, `The view resolution is not defined`);
    let r2 = this.getRotation();
    return j(r2 !== void 0, `The view rotation is not defined`), Le(t2, n2, r2, e19);
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
    return this.get(Ol.RESOLUTION);
  }
  getResolutions() {
    return this.resolutions_;
  }
  getResolutionForExtent(e19, t2) {
    return this.getResolutionForExtentInternal(Wn(e19, this.getProjection()), t2);
  }
  getResolutionForExtentInternal(e19, t2) {
    t2 || (t2 = this.getViewportSizeMinusPadding_());
    let n2 = F(e19) / t2[0], r2 = P(e19) / t2[1];
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
    return this.get(Ol.ROTATION);
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
      r2 = ql(r2, this.getViewportSize_(), [e20[0] / 2 + i2[3], e20[1] / 2 + i2[0]], t2, n2);
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
      let i2 = b(this.resolutions_, e19, 1);
      t2 = i2, n2 = this.resolutions_[i2], r2 = i2 == this.resolutions_.length - 1 ? 2 : n2 / this.resolutions_[i2 + 1];
    } else
      n2 = this.maxResolution_, r2 = this.zoomFactor_;
    return t2 + Math.log(n2 / e19) / Math.log(r2);
  }
  getResolutionForZoom(e19) {
    if (this.resolutions_?.length) {
      if (this.resolutions_.length === 1)
        return this.resolutions_[0];
      let t2 = I(Math.floor(e19), 0, this.resolutions_.length - 2), n2 = this.resolutions_[t2] / this.resolutions_[t2 + 1];
      return this.resolutions_[t2] / n2 ** +I(e19 - t2, 0, 1);
    }
    return this.maxResolution_ / this.zoomFactor_ ** +(e19 - this.minZoom_);
  }
  fit(e19, t2) {
    let n2;
    if (j(Array.isArray(e19) || typeof e19.getSimplifiedGeometry == `function`, "Invalid extent or geometry provided as `geometry`"), Array.isArray(e19))
      j(!We(e19), "Cannot fit empty extent provided as `geometry`"), n2 = Yr(Wn(e19, this.getProjection()));
    else if (e19.getType() === `Circle`) {
      let t3 = Wn(e19.getExtent(), this.getProjection());
      n2 = Yr(t3), n2.rotate(this.getRotation(), Fe(t3));
    } else {
      let t3 = Bn();
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
    let c2 = this.getRotation(), l2 = Math.sin(c2), u2 = Math.cos(c2), d2 = Fe(o2);
    d2[0] += (r2[1] - r2[3]) / 2 * s2, d2[1] += (r2[0] - r2[2]) / 2 * s2;
    let f2 = d2[0] * u2 - d2[1] * l2, p2 = d2[1] * u2 + d2[0] * l2, m2 = this.getConstrainedCenter([f2, p2], s2), h2 = t2.callback ? t2.callback : ee;
    t2.duration === void 0 ? (this.targetResolution_ = s2, this.targetCenter_ = m2, this.applyTargetState_(false, true), Hl(h2, true)) : this.animateInternal({resolution: s2, center: m2, duration: t2.duration, easing: t2.easing}, h2);
  }
  centerOn(e19, t2, n2) {
    this.centerOnInternal(Hn(e19, this.getProjection()), t2, n2);
  }
  centerOnInternal(e19, t2, n2) {
    this.setCenterInternal(ql(e19, t2, n2, this.getResolution(), this.getRotation()));
  }
  calculateCenterShift(e19, t2, n2, r2) {
    let i2, a2 = this.padding_;
    if (a2 && e19) {
      let o2 = this.getViewportSizeMinusPadding_(-n2), s2 = ql(e19, r2, [o2[0] / 2 + a2[3], o2[1] / 2 + a2[0]], t2, n2);
      i2 = [e19[0] - s2[0], e19[1] - s2[1]];
    }
    return i2;
  }
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0;
  }
  adjustCenter(e19) {
    let t2 = Vn(this.targetCenter_, this.getProjection());
    this.setCenter([t2[0] + e19[0], t2[1] + e19[1]]);
  }
  adjustCenterInternal(e19) {
    let t2 = this.targetCenter_;
    this.setCenterInternal([t2[0] + e19[0], t2[1] + e19[1]]);
  }
  adjustResolution(e19, t2) {
    t2 && (t2 = Hn(t2, this.getProjection())), this.adjustResolutionInternal(e19, t2);
  }
  adjustResolutionInternal(e19, t2) {
    let n2 = this.getAnimating() || this.getInteracting(), r2 = this.getViewportSize_(this.getRotation()), i2 = this.constraints_.resolution(this.targetResolution_ * e19, 0, r2, n2);
    t2 && (this.targetCenter_ = this.calculateCenterZoom(i2, t2)), this.targetResolution_ *= e19, this.applyTargetState_();
  }
  adjustZoom(e19, t2) {
    this.adjustResolution(this.zoomFactor_ ** +-e19, t2);
  }
  adjustRotation(e19, t2) {
    t2 && (t2 = Hn(t2, this.getProjection())), this.adjustRotationInternal(e19, t2);
  }
  adjustRotationInternal(e19, t2) {
    let n2 = this.getAnimating() || this.getInteracting(), r2 = this.constraints_.rotation(this.targetRotation_ + e19, n2);
    t2 && (this.targetCenter_ = this.calculateCenterRotate(r2, t2)), this.targetRotation_ += e19, this.applyTargetState_();
  }
  setCenter(e19) {
    this.setCenterInternal(e19 && Hn(e19, this.getProjection()));
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
    this.get(Ol.ROTATION) !== r2 && this.set(Ol.ROTATION, r2), this.get(Ol.RESOLUTION) !== a2 && (this.set(Ol.RESOLUTION, a2), this.set(`zoom`, this.getZoom(), true)), o2 && this.get(Ol.CENTER) && ft(this.get(Ol.CENTER), o2) || this.set(Ol.CENTER, o2), this.getAnimating() && !e19 && this.cancelAnimations(), this.cancelAnchor_ = void 0;
  }
  resolveConstraints(e19, t2, n2) {
    e19 = e19 === void 0 ? 200 : e19;
    let r2 = t2 || 0, i2 = this.constraints_.rotation(this.targetRotation_), a2 = this.getViewportSize_(i2), o2 = this.constraints_.resolution(this.targetResolution_, r2, a2), s2 = this.constraints_.center(this.targetCenter_, o2, a2, false, this.calculateCenterShift(this.targetCenter_, o2, i2, a2));
    e19 === 0 && !this.cancelAnchor_ ? (this.targetResolution_ = o2, this.targetRotation_ = i2, this.targetCenter_ = s2, this.applyTargetState_()) : (n2 || (n2 = e19 === 0 ? this.cancelAnchor_ : void 0), this.cancelAnchor_ = void 0, this.getResolution() === o2 && this.getRotation() === i2 && this.getCenterInternal() && ft(this.getCenterInternal(), s2) || (this.getAnimating() && this.cancelAnimations(), this.animateInternal({rotation: i2, center: s2, resolution: o2, duration: e19, easing: si, anchor: n2})));
  }
  beginInteraction() {
    this.resolveConstraints(0), this.setHint(V.INTERACTING, 1);
  }
  endInteraction(e19, t2, n2) {
    n2 && (n2 = Hn(n2, this.getProjection())), this.endInteractionInternal(e19, t2, n2);
  }
  endInteractionInternal(e19, t2, n2) {
    this.getInteracting() && (this.setHint(V.INTERACTING, -1), this.resolveConstraints(e19, t2, n2));
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
function Hl(e19, t2) {
  setTimeout(function() {
    e19(t2);
  }, 0);
}
function Ul(e19) {
  if (e19.extent !== void 0) {
    let t3 = e19.smoothExtentConstraint === void 0 || e19.smoothExtentConstraint;
    return kl(e19.extent, e19.constrainOnlyCenter, t3);
  }
  let t2 = jn(e19.projection, `EPSG:3857`);
  if (e19.multiWorld !== true && t2.isGlobal()) {
    let e20 = t2.getExtent().slice();
    return e20[0] = -1 / 0, e20[2] = 1 / 0, kl(e20, false, false);
  }
  return Al;
}
function Wl(e19) {
  let t2, n2, r2, i2 = e19.minZoom === void 0 ? Bl : e19.minZoom, a2 = e19.maxZoom === void 0 ? 28 : e19.maxZoom, o2 = e19.zoomFactor === void 0 ? 2 : e19.zoomFactor, s2 = e19.multiWorld !== void 0 && e19.multiWorld, c2 = e19.smoothResolutionConstraint === void 0 || e19.smoothResolutionConstraint, l2 = e19.showFullExtent !== void 0 && e19.showFullExtent, u2 = jn(e19.projection, `EPSG:3857`), d2 = u2.getExtent(), f2 = e19.constrainOnlyCenter, p2 = e19.extent;
  if (!s2 && !p2 && u2.isGlobal() && (f2 = false, p2 = d2), e19.resolutions !== void 0) {
    let o3 = e19.resolutions;
    n2 = o3[i2], r2 = o3[a2] === void 0 ? o3[o3.length - 1] : o3[a2], t2 = e19.constrainResolution ? Nl(o3, c2, !f2 && p2, l2) : Fl(n2, r2, c2, !f2 && p2, l2);
  } else {
    let s3 = (d2 ? Math.max(F(d2), P(d2)) : 360 * yt.degrees / u2.getMetersPerUnit()) / 256 / 2 ** Bl, m2 = s3 / 2 ** 28;
    n2 = e19.maxResolution, n2 === void 0 ? n2 = s3 / o2 ** +i2 : i2 = 0, r2 = e19.minResolution, r2 === void 0 && (r2 = e19.maxZoom === void 0 ? m2 : e19.maxResolution === void 0 ? s3 / o2 ** +a2 : n2 / o2 ** +a2), a2 = i2 + Math.floor(Math.log(n2 / r2) / Math.log(o2)), r2 = n2 / o2 ** +(a2 - i2), t2 = e19.constrainResolution ? Pl(o2, n2, r2, c2, !f2 && p2, l2) : Fl(n2, r2, c2, !f2 && p2, l2);
  }
  return {constraint: t2, maxResolution: n2, minResolution: r2, minZoom: i2, zoomFactor: o2};
}
function Gl(e19) {
  if (e19.enableRotation === void 0 || e19.enableRotation) {
    let t2 = e19.constrainRotation;
    return t2 === void 0 || t2 === true ? zl() : t2 === false ? Ll : typeof t2 == `number` ? Rl(t2) : Ll;
  }
  return Il;
}
function Kl(e19) {
  return !(e19.sourceCenter && e19.targetCenter && !ft(e19.sourceCenter, e19.targetCenter) || e19.sourceResolution !== e19.targetResolution || e19.sourceRotation !== e19.targetRotation);
}
function ql(e19, t2, n2, r2, i2) {
  let a2 = Math.cos(-i2), o2 = Math.sin(-i2), s2 = e19[0] * a2 - e19[1] * o2, c2 = e19[1] * a2 + e19[0] * o2;
  return s2 += (t2[0] / 2 - n2[0]) * r2, c2 += (n2[1] - t2[1] / 2) * r2, o2 = -o2, [s2 * a2 - c2 * o2, c2 * a2 + s2 * o2];
}
var Q = {OPACITY: `opacity`, VISIBLE: `visible`, EXTENT: `extent`, Z_INDEX: `zIndex`, MAX_RESOLUTION: `maxResolution`, MIN_RESOLUTION: `minResolution`, MAX_ZOOM: `maxZoom`, MIN_ZOOM: `minZoom`, SOURCE: `source`, MAP: `map`}, Jl = class extends ce {
  constructor(e19) {
    super(), this.on, this.once, this.un, this.background_ = e19.background;
    let t2 = Object.assign({}, e19);
    typeof e19.properties == `object` && (delete t2.properties, Object.assign(t2, e19.properties)), t2[Q.OPACITY] = e19.opacity === void 0 ? 1 : e19.opacity, j(typeof t2[Q.OPACITY] == `number`, `Layer opacity must be a number`), t2[Q.VISIBLE] = e19.visible === void 0 || e19.visible, t2[Q.Z_INDEX] = e19.zIndex, t2[Q.MAX_RESOLUTION] = e19.maxResolution === void 0 ? 1 / 0 : e19.maxResolution, t2[Q.MIN_RESOLUTION] = e19.minResolution === void 0 ? 0 : e19.minResolution, t2[Q.MIN_ZOOM] = e19.minZoom === void 0 ? -1 / 0 : e19.minZoom, t2[Q.MAX_ZOOM] = e19.maxZoom === void 0 ? 1 / 0 : e19.maxZoom, this.className_ = t2.className === void 0 ? `ol-layer` : t2.className, delete t2.className, this.setProperties(t2), this.state_ = null;
  }
  getBackground() {
    return this.background_;
  }
  getClassName() {
    return this.className_;
  }
  getLayerState(e19) {
    let t2 = this.state_ || {layer: this, managed: e19 === void 0 || e19}, n2 = this.getZIndex();
    return t2.opacity = I(Math.round(this.getOpacity() * 100) / 100, 0, 1), t2.visible = this.getVisible(), t2.extent = this.getExtent(), t2.zIndex = n2 === void 0 && !t2.managed ? 1 / 0 : n2, t2.maxResolution = this.getMaxResolution(), t2.minResolution = Math.max(this.getMinResolution(), 0), t2.minZoom = this.getMinZoom(), t2.maxZoom = this.getMaxZoom(), this.state_ = t2, t2;
  }
  getLayersArray(e19) {
    return T();
  }
  getLayerStatesArray(e19) {
    return T();
  }
  getExtent() {
    return this.get(Q.EXTENT);
  }
  getMaxResolution() {
    return this.get(Q.MAX_RESOLUTION);
  }
  getMinResolution() {
    return this.get(Q.MIN_RESOLUTION);
  }
  getMinZoom() {
    return this.get(Q.MIN_ZOOM);
  }
  getMaxZoom() {
    return this.get(Q.MAX_ZOOM);
  }
  getOpacity() {
    return this.get(Q.OPACITY);
  }
  getSourceState() {
    return T();
  }
  getVisible() {
    return this.get(Q.VISIBLE);
  }
  getZIndex() {
    return this.get(Q.Z_INDEX);
  }
  setBackground(e19) {
    this.background_ = e19, this.changed();
  }
  setExtent(e19) {
    this.set(Q.EXTENT, e19);
  }
  setMaxResolution(e19) {
    this.set(Q.MAX_RESOLUTION, e19);
  }
  setMinResolution(e19) {
    this.set(Q.MIN_RESOLUTION, e19);
  }
  setMaxZoom(e19) {
    this.set(Q.MAX_ZOOM, e19);
  }
  setMinZoom(e19) {
    this.set(Q.MIN_ZOOM, e19);
  }
  setOpacity(e19) {
    j(typeof e19 == `number`, `Layer opacity must be a number`), this.set(Q.OPACITY, e19);
  }
  setVisible(e19) {
    this.set(Q.VISIBLE, e19);
  }
  setZIndex(e19) {
    this.set(Q.Z_INDEX, e19);
  }
  disposeInternal() {
    this.state_ && (this.state_ = (this.state_.layer = null, null)), super.disposeInternal();
  }
}, Yl = class extends Jl {
  constructor(e19) {
    let t2 = Object.assign({}, e19);
    delete t2.source, super(t2), this.on, this.once, this.un, this.mapPrecomposeKey_ = null, this.mapRenderKey_ = null, this.sourceChangeKey_ = null, this.renderer_ = null, this.sourceReady_ = false, this.rendered = false, e19.render && (this.render = e19.render), e19.map && this.setMap(e19.map), this.addChangeListener(Q.SOURCE, this.handleSourcePropertyChange_);
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
    return this.get(Q.SOURCE) || null;
  }
  getRenderSource() {
    return this.getSource();
  }
  getSourceState() {
    let e19 = this.getSource();
    return e19 ? e19.getState() : `undefined`;
  }
  handleSourceChange_() {
    this.changed();
    let e19 = this.getSource();
    e19 && !this.sourceReady_ && e19.getState() === `ready` && (this.sourceReady_ = true, this.dispatchEvent(`sourceready`));
  }
  handleSourcePropertyChange_() {
    this.sourceChangeKey_ && (this.sourceChangeKey_ = (m(this.sourceChangeKey_), null)), this.sourceReady_ = false;
    let e19 = this.getSource();
    e19 && (this.sourceChangeKey_ = f(e19, h.CHANGE, this.handleSourceChange_, this), e19.getState() === `ready` && (this.sourceReady_ = true, setTimeout(() => {
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
    !e19 && n2 && (e19 = n2.getView()), t2 = e19 instanceof Vl ? {viewState: e19.getState(), extent: e19.calculateExtent()} : e19;
    let r2 = t2;
    !r2.layerStatesArray && n2 && (r2.layerStatesArray = n2.getLayerGroup().getLayerStatesArray());
    let i2;
    if (r2.layerStatesArray) {
      if (i2 = r2.layerStatesArray.find((e20) => e20.layer === this), !i2)
        return false;
    } else
      i2 = this.getLayerState();
    let a2 = this.getExtent();
    return Xl(i2, r2.viewState) && (!a2 || Ue(a2, r2.extent));
  }
  getAttributions(e19) {
    if (!this.isVisible(e19))
      return [];
    let t2 = this.getSource()?.getAttributions();
    if (!t2)
      return [];
    let n2 = t2(e19 instanceof Vl ? e19.getViewStateAndExtent() : e19);
    return Array.isArray(n2) || (n2 = [n2]), n2;
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
    e19 || this.unrender(), this.set(Q.MAP, e19);
  }
  getMapInternal() {
    return this.get(Q.MAP);
  }
  setMap(e19) {
    this.mapPrecomposeKey_ && (this.mapPrecomposeKey_ = (m(this.mapPrecomposeKey_), null)), e19 || this.changed(), this.mapRenderKey_ && (this.mapRenderKey_ = (m(this.mapRenderKey_), null)), e19 && (this.mapPrecomposeKey_ = f(e19, eo.PRECOMPOSE, this.handlePrecompose_, this), this.mapRenderKey_ = f(this, h.CHANGE, e19.render, e19), this.changed());
  }
  handlePrecompose_(e19) {
    let t2 = e19.frameState?.layerStatesArray;
    if (!t2)
      return;
    let n2 = this.getLayerState(false);
    j(!t2.some((e20) => e20.layer === n2.layer), "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."), t2.push(n2);
  }
  setSource(e19) {
    this.set(Q.SOURCE, e19);
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
  clearRenderer() {
    this.renderer_ && (this.renderer_.dispose(), delete this.renderer_);
  }
  disposeInternal() {
    this.clearRenderer(), this.setSource(null), super.disposeInternal();
  }
};
function Xl(e19, t2) {
  if (!e19.visible)
    return false;
  let n2 = t2.resolution;
  if (n2 < e19.minResolution || n2 >= e19.maxResolution)
    return false;
  let r2 = t2.zoom;
  return r2 > e19.minZoom && r2 <= e19.maxZoom;
}
var Zl = {RENDER_ORDER: `renderOrder`}, Ql = class extends Yl {
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
    return this.get(Zl.RENDER_ORDER);
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
    if (!n2)
      return;
    e19.declutter || (e19.declutter = {}), n2 in e19.declutter || (e19.declutter[n2] = new fo(9));
    let r2 = this.getRenderer();
    r2 && r2.renderDeclutter(e19, t2);
  }
  setRenderOrder(e19) {
    this.set(Zl.RENDER_ORDER, e19);
  }
  setStyle(e19) {
    this.style_ = e19 === void 0 ? Wo : e19 ?? null;
    let t2 = $l(e19);
    this.styleFunction_ = e19 === null || t2 === null ? void 0 : Ho(t2), this.changed();
  }
  setDeclutter(e19) {
    this.declutter_ = e19 ? String(e19) : void 0, this.changed();
  }
};
function $l(e19) {
  if (e19 === void 0)
    return Wo;
  if (!e19)
    return null;
  if (typeof e19 == `function` || e19 instanceof Vo)
    return e19;
  if (Array.isArray(e19) && e19.length === 0)
    return [];
  if (Array.isArray(e19) && e19[0] instanceof Vo) {
    let t2 = e19.length, n2 = Array(t2);
    for (let r2 = 0; r2 < t2; ++r2) {
      let t3 = e19[r2];
      if (!(t3 instanceof Vo))
        throw Error(`Expected a list of style instances`);
      n2[r2] = t3;
    }
    return n2;
  }
  return Zc(e19);
}
var eu = class extends Ql {
  constructor(e19) {
    super(e19);
  }
  createRenderer() {
    return new qs(this);
  }
}, tu = class extends re {
  constructor(e19, t2, n2) {
    super(e19), this.map = t2, this.frameState = n2 === void 0 ? null : n2;
  }
}, nu = class extends tu {
  constructor(e19, t2, n2, r2, i2, a2) {
    super(e19, t2, i2), this.originalEvent = n2, this.pixel_ = null, this.coordinate_ = null, this.dragging = r2 !== void 0 && r2, this.activePointers = a2, this.ctrlKey = false;
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
}, $ = {SINGLECLICK: `singleclick`, CLICK: h.CLICK, DBLCLICK: h.DBLCLICK, POINTERDRAG: `pointerdrag`, POINTERMOVE: `pointermove`, POINTERDOWN: `pointerdown`, POINTERUP: `pointerup`, POINTEROVER: `pointerover`, POINTEROUT: `pointerout`, POINTERENTER: `pointerenter`, POINTERLEAVE: `pointerleave`, POINTERCANCEL: `pointercancel`}, ru = {POINTERMOVE: `pointermove`, POINTERDOWN: `pointerdown`, POINTERUP: `pointerup`, POINTEROVER: `pointerover`, POINTEROUT: `pointerout`, POINTERENTER: `pointerenter`, POINTERLEAVE: `pointerleave`, POINTERCANCEL: `pointercancel`}, iu = class extends ie {
  constructor(e19, t2) {
    super(e19), this.map_ = e19, this.clickTimeoutId_, this.emulateClicks_ = false, this.dragging_ = false, this.dragListenerKeys_ = [], this.moveTolerance_ = t2 === void 0 ? 1 : t2, this.down_ = null;
    let n2 = this.map_.getViewport();
    if (!n2)
      throw Error(`Map viewport is required`);
    this.activePointers_ = [], this.trackedTouches_ = {}, this.element_ = n2, this.pointerdownListenerKey_ = f(n2, ru.POINTERDOWN, this.handlePointerDown_, this), this.originalPointerMoveEvent_, this.relayedListenerKey_ = f(n2, ru.POINTERMOVE, this.relayMoveEvent_, this), this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this), this.element_.addEventListener(h.TOUCHMOVE, this.boundHandleTouchMove_, ni ? {passive: false} : false);
  }
  emulateClick_(e19) {
    let t2 = new nu($.CLICK, this.map_, e19);
    this.dispatchEvent(t2), this.clickTimeoutId_ === void 0 ? this.clickTimeoutId_ = setTimeout(() => {
      this.clickTimeoutId_ = void 0;
      let t3 = new nu($.SINGLECLICK, this.map_, e19);
      this.dispatchEvent(t3);
    }, 250) : (clearTimeout(this.clickTimeoutId_), this.clickTimeoutId_ = void 0, t2 = new nu($.DBLCLICK, this.map_, e19), this.dispatchEvent(t2));
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
    let t2 = new nu($.POINTERUP, this.map_, e19, void 0, void 0, this.activePointers_);
    this.dispatchEvent(t2), this.emulateClicks_ && !t2.defaultPrevented && !this.dragging_ && this.isMouseActionButton_(e19) && this.down_ && this.emulateClick_(this.down_), this.activePointers_.length === 0 && (this.dragListenerKeys_.forEach(m), this.dragListenerKeys_.length = 0, this.dragging_ = false, this.down_ = null);
  }
  isMouseActionButton_(e19) {
    return e19.button === 0;
  }
  handlePointerDown_(e19) {
    this.emulateClicks_ = this.activePointers_.length === 0, this.updateActivePointers_(e19);
    let t2 = new nu($.POINTERDOWN, this.map_, e19, void 0, void 0, this.activePointers_);
    if (this.dispatchEvent(t2), this.down_ = new PointerEvent(e19.type, e19), Object.defineProperty(this.down_, "target", {writable: false, value: e19.target}), this.dragListenerKeys_.length === 0) {
      let e20 = this.map_.getOwnerDocument(), t3 = this.element_;
      if (!t3)
        return;
      if (this.dragListenerKeys_.push(f(e20, $.POINTERMOVE, this.handlePointerMove_, this), f(e20, $.POINTERUP, this.handlePointerUp_, this), f(t3, $.POINTERCANCEL, this.handlePointerUp_, this)), t3.getRootNode && t3.getRootNode() !== e20) {
        let e21 = t3.getRootNode();
        this.dragListenerKeys_.push(f(e21, $.POINTERUP, this.handlePointerUp_, this));
      }
    }
  }
  handlePointerMove_(e19) {
    if (this.isMoving_(e19)) {
      this.updateActivePointers_(e19), this.dragging_ = true;
      let t2 = new nu($.POINTERDRAG, this.map_, e19, this.dragging_, void 0, this.activePointers_);
      this.dispatchEvent(t2);
    }
  }
  relayMoveEvent_(e19) {
    this.originalPointerMoveEvent_ = e19;
    let t2 = !!(this.down_ && this.isMoving_(e19));
    this.dispatchEvent(new nu($.POINTERMOVE, this.map_, e19, t2));
  }
  handleTouchMove_(e19) {
    let t2 = this.originalPointerMoveEvent_;
    t2 && !t2.defaultPrevented || typeof e19.cancelable == `boolean` && e19.cancelable !== true || e19.preventDefault();
  }
  isMoving_(e19) {
    let t2 = this.down_;
    return this.dragging_ || t2 !== null && (Math.abs(e19.clientX - t2.clientX) > this.moveTolerance_ || Math.abs(e19.clientY - t2.clientY) > this.moveTolerance_);
  }
  disposeInternal() {
    let e19 = this.element_;
    this.relayedListenerKey_ && (this.relayedListenerKey_ = (m(this.relayedListenerKey_), void 0)), e19 && e19.removeEventListener(h.TOUCHMOVE, this.boundHandleTouchMove_), this.pointerdownListenerKey_ && (this.pointerdownListenerKey_ = (m(this.pointerdownListenerKey_), void 0)), this.dragListenerKeys_.forEach(m), this.dragListenerKeys_.length = 0, this.element_ = void 0, super.disposeInternal();
  }
}, au = {POSTRENDER: `postrender`, MOVESTART: `movestart`, MOVEEND: `moveend`, LOADSTART: `loadstart`, LOADEND: `loadend`}, ou = {LAYERGROUP: `layergroup`, SIZE: `size`, TARGET: `target`, VIEW: `view`}, su = 1 / 0, cu = class {
  constructor(e19, t2) {
    this.priorityFunction_ = e19, this.keyFunction_ = t2, this.elements_ = [], this.priorities_ = [], this.queuedElements_ = {};
  }
  clear() {
    this.elements_.length = 0, this.priorities_.length = 0, u(this.queuedElements_);
  }
  dequeue() {
    let e19 = this.elements_, t2 = this.priorities_, n2 = e19[0];
    e19.length == 1 ? (e19.length = 0, t2.length = 0) : (e19[0] = e19.pop(), t2[0] = t2.pop(), this.siftUp_(0));
    let r2 = this.keyFunction_(n2);
    return delete this.queuedElements_[r2], n2;
  }
  enqueue(e19) {
    j(!(this.keyFunction_(e19) in this.queuedElements_), "Tried to enqueue an `element` that was already added to the queue");
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
}, lu = class extends cu {
  constructor(e19, t2) {
    super((t3) => e19.apply(null, t3), (e20) => e20[0].getKey()), this.boundHandleTileChange_ = this.handleTileChange.bind(this), this.tileChangeCallback_ = t2, this.tilesLoading_ = 0, this.tilesLoadingKeys_ = {};
  }
  enqueue(e19) {
    let t2 = super.enqueue(e19);
    return t2 && e19[0].addEventListener(h.CHANGE, this.boundHandleTileChange_), t2;
  }
  getTilesLoading() {
    return this.tilesLoading_;
  }
  handleTileChange(e19) {
    let t2 = e19.target, n2 = t2.getState();
    if (n2 === z.LOADED || n2 === z.ERROR || n2 === z.EMPTY) {
      n2 !== z.ERROR && t2.removeEventListener(h.CHANGE, this.boundHandleTileChange_);
      let e20 = t2.getKey();
      e20 in this.tilesLoadingKeys_ && (delete this.tilesLoadingKeys_[e20], --this.tilesLoading_), this.tileChangeCallback_();
    }
  }
  loadMoreTiles(e19, t2) {
    let n2 = 0;
    for (; this.tilesLoading_ < e19 && n2 < t2 && this.getCount() > 0; ) {
      let e20 = this.dequeue()[0], t3 = e20.getKey();
      e20.getState() === z.IDLE && !(t3 in this.tilesLoadingKeys_) && (this.tilesLoadingKeys_[t3] = true, ++this.tilesLoading_, ++n2, e20.load());
    }
  }
};
function uu(e19, t2, n2, r2, i2) {
  if (!e19 || !(n2 in e19.wantedTiles) || !e19.wantedTiles[n2][t2.getKey()])
    return su;
  let a2 = e19.viewState.center, o2 = r2[0] - a2[0], s2 = r2[1] - a2[1];
  return 65536 * Math.log(i2) + Math.sqrt(o2 * o2 + s2 * s2) / i2;
}
var du = class extends ce {
  constructor(e19) {
    super();
    let t2 = e19.element;
    t2 && !e19.target && !t2.style.pointerEvents && (t2.style.pointerEvents = `auto`), this.element = t2 || null, this.target_ = null, this.map_ = null, this.listenerKeys = [], e19.render && (this.render = e19.render), e19.target && this.setTarget(e19.target);
  }
  disposeInternal() {
    this.element?.remove(), super.disposeInternal();
  }
  getMap() {
    return this.map_;
  }
  setMap(e19) {
    this.map_ && this.element?.remove();
    for (let e20 = 0, t2 = this.listenerKeys.length; e20 < t2; ++e20)
      m(this.listenerKeys[e20]);
    if (this.listenerKeys.length = 0, this.map_ = e19, e19) {
      let t2 = this.target_ ?? e19.getOverlayContainerStopEvent();
      this.element && t2 && t2.appendChild(this.element), this.render !== ee && this.listenerKeys.push(f(e19, au.POSTRENDER, this.render, this)), e19.render();
    }
  }
  render(e19) {
  }
  setTarget(e19) {
    this.target_ = typeof e19 == `string` ? document.getElementById(e19) : e19;
  }
}, fu = class extends du {
  constructor(e19) {
    e19 || (e19 = {}), super({element: document.createElement(`div`), render: e19.render, target: e19.target}), this.ulElement_ = document.createElement(`ul`), this.collapsed_ = e19.collapsed === void 0 || e19.collapsed, this.userCollapsed_ = this.collapsed_, this.overrideCollapsible_ = e19.collapsible !== void 0, this.collapsible_ = e19.collapsible === void 0 || e19.collapsible, this.collapsible_ || (this.collapsed_ = false), this.attributions_ = e19.attributions;
    let t2 = e19.className === void 0 ? `ol-attribution` : e19.className, n2 = e19.tipLabel === void 0 ? `Attributions` : e19.tipLabel, r2 = e19.expandClassName === void 0 ? t2 + `-expand` : e19.expandClassName, i2 = e19.collapseLabel === void 0 ? `\u203A` : e19.collapseLabel, a2 = e19.collapseClassName === void 0 ? t2 + `-collapse` : e19.collapseClassName;
    typeof i2 == `string` ? (this.collapseLabel_ = document.createElement(`span`), this.collapseLabel_.textContent = i2, this.collapseLabel_.className = a2) : this.collapseLabel_ = i2;
    let o2 = e19.label === void 0 ? `i` : e19.label;
    typeof o2 == `string` ? (this.label_ = document.createElement(`span`), this.label_.textContent = o2, this.label_.className = r2) : this.label_ = o2;
    let s2 = this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
    this.toggleButton_ = document.createElement(`button`), this.toggleButton_.setAttribute(`type`, `button`), this.toggleButton_.setAttribute(`aria-expanded`, String(!this.collapsed_)), this.toggleButton_.title = n2, this.toggleButton_.appendChild(s2), this.toggleButton_.addEventListener(h.CLICK, this.handleClick_.bind(this), false);
    let c2 = t2 + ` ` + sa + ` ` + ca + (this.collapsed_ && this.collapsible_ ? ` ` + la : ``) + (this.collapsible_ ? `` : ` ol-uncollapsible`), l2 = this.element;
    l2.className = c2, l2.appendChild(this.toggleButton_), l2.appendChild(this.ulElement_), this.renderedAttributions_ = [], this.renderedVisible_ = true;
  }
  collectSourceAttributions_(e19) {
    let t2 = this.getMap();
    if (!t2)
      return [];
    let n2 = t2.getAllLayers(), r2 = new Set(n2.flatMap((t3) => t3.getAttributions(e19)));
    if (this.attributions_ !== void 0 && (Array.isArray(this.attributions_) ? this.attributions_.forEach((e20) => r2.add(e20)) : r2.add(this.attributions_)), !this.overrideCollapsible_) {
      let e20 = !n2.some((e21) => e21.getSource()?.getAttributionsCollapsible() === false);
      this.setCollapsible(e20);
    }
    return Array.from(r2);
  }
  async updateElement_(e19) {
    let t2 = this.element;
    if (!t2)
      return;
    if (!e19) {
      this.renderedVisible_ && (this.renderedVisible_ = (t2.style.display = `none`, false));
      return;
    }
    let n2 = await Promise.all(this.collectSourceAttributions_(e19).map((e20) => ne(() => e20))), r2 = n2.length > 0;
    if (this.renderedVisible_ != r2 && (t2.style.display = r2 ? `` : `none`, this.renderedVisible_ = r2), !C(n2, this.renderedAttributions_)) {
      hi(this.ulElement_);
      for (let e20 = 0, t3 = n2.length; e20 < t3; ++e20) {
        let t4 = document.createElement(`li`);
        t4.innerHTML = n2[e20], this.ulElement_.appendChild(t4);
      }
      this.renderedAttributions_ = n2;
    }
  }
  handleClick_(e19) {
    e19.preventDefault(), this.handleToggle_(), this.userCollapsed_ = this.collapsed_;
  }
  handleToggle_() {
    let e19 = this.element;
    e19 && (e19.classList.toggle(la), this.collapsed_ ? mi(this.collapseLabel_, this.label_) : mi(this.label_, this.collapseLabel_), this.collapsed_ = !this.collapsed_, this.toggleButton_.setAttribute(`aria-expanded`, String(!this.collapsed_)));
  }
  getCollapsible() {
    return this.collapsible_;
  }
  setCollapsible(e19) {
    if (this.collapsible_ === e19)
      return;
    this.collapsible_ = e19;
    let t2 = this.element;
    t2 && (t2.classList.toggle(`ol-uncollapsible`), this.userCollapsed_ && this.handleToggle_());
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
}, pu = class extends du {
  constructor(e19) {
    e19 || (e19 = {}), super({element: document.createElement(`div`), render: e19.render, target: e19.target});
    let t2 = e19.className === void 0 ? `ol-rotate` : e19.className, n2 = e19.label === void 0 ? `\u21E7` : e19.label, r2 = e19.compassClassName === void 0 ? `ol-compass` : e19.compassClassName;
    this.label_, typeof n2 == `string` ? (this.label_ = document.createElement(`span`), this.label_.className = r2, this.label_.textContent = n2) : (this.label_ = n2, this.label_.classList.add(r2));
    let i2 = e19.tipLabel ? e19.tipLabel : `Reset rotation`, a2 = document.createElement(`button`);
    a2.className = t2 + `-reset`, a2.setAttribute(`type`, `button`), a2.title = i2, a2.appendChild(this.label_), a2.addEventListener(h.CLICK, this.handleClick_.bind(this), false);
    let o2 = t2 + ` ` + sa + ` ` + ca, s2 = this.element;
    s2.className = o2, s2.appendChild(a2), this.callResetNorth_ = e19.resetNorth ? e19.resetNorth : void 0, this.duration_ = e19.duration === void 0 ? 250 : e19.duration, this.autoHide_ = e19.autoHide === void 0 || e19.autoHide, this.rotation_ = void 0, this.autoHide_ && this.element.classList.add(oa);
  }
  handleClick_(e19) {
    e19.preventDefault(), this.callResetNorth_ === void 0 ? this.resetNorth_() : this.callResetNorth_();
  }
  resetNorth_() {
    let e19 = this.getMap();
    if (!e19)
      return;
    let t2 = e19.getView();
    if (!t2)
      return;
    let n2 = t2.getRotation();
    n2 !== void 0 && (this.duration_ > 0 && n2 % (2 * Math.PI) != 0 ? t2.animate({rotation: 0, duration: this.duration_, easing: si}) : t2.setRotation(0));
  }
  render(e19) {
    let t2 = e19.frameState;
    if (!t2)
      return;
    let n2 = t2.viewState.rotation;
    if (n2 != this.rotation_) {
      let e20 = `rotate(` + n2 + `rad)`, t3 = this.element;
      if (this.autoHide_ && t3) {
        let e21 = t3.classList.contains(oa);
        !e21 && n2 === 0 ? t3.classList.add(oa) : e21 && n2 !== 0 && t3.classList.remove(oa);
      }
      this.label_.style.transform = e20;
    }
    this.rotation_ = n2;
  }
}, mu = class extends du {
  constructor(e19) {
    e19 || (e19 = {}), super({element: document.createElement(`div`), target: e19.target});
    let t2 = e19.className === void 0 ? `ol-zoom` : e19.className, n2 = e19.delta === void 0 ? 1 : e19.delta, r2 = e19.zoomInClassName === void 0 ? t2 + `-in` : e19.zoomInClassName, i2 = e19.zoomOutClassName === void 0 ? t2 + `-out` : e19.zoomOutClassName, a2 = e19.zoomInLabel === void 0 ? `+` : e19.zoomInLabel, o2 = e19.zoomOutLabel === void 0 ? `\u2013` : e19.zoomOutLabel, s2 = e19.zoomInTipLabel === void 0 ? `Zoom in` : e19.zoomInTipLabel, c2 = e19.zoomOutTipLabel === void 0 ? `Zoom out` : e19.zoomOutTipLabel, l2 = document.createElement(`button`);
    l2.className = r2, l2.setAttribute(`type`, `button`), l2.title = s2, l2.appendChild(typeof a2 == `string` ? document.createTextNode(a2) : a2), l2.addEventListener(h.CLICK, this.handleClick_.bind(this, n2), false);
    let u2 = document.createElement(`button`);
    u2.className = i2, u2.setAttribute(`type`, `button`), u2.title = c2, u2.appendChild(typeof o2 == `string` ? document.createTextNode(o2) : o2), u2.addEventListener(h.CLICK, this.handleClick_.bind(this, -n2), false);
    let d2 = t2 + ` ` + sa + ` ` + ca, f2 = this.element;
    f2.className = d2, f2.appendChild(l2), f2.appendChild(u2), this.duration_ = e19.duration === void 0 ? 250 : e19.duration;
  }
  handleClick_(e19, t2) {
    t2.preventDefault(), this.zoomByDelta_(e19);
  }
  zoomByDelta_(e19) {
    let t2 = this.getMap();
    if (!t2)
      return;
    let n2 = t2.getView();
    if (!n2)
      return;
    let r2 = n2.getZoom();
    if (r2 !== void 0) {
      let t3 = n2.getConstrainedZoom(r2 + e19);
      if (t3 === void 0)
        return;
      this.duration_ > 0 ? (n2.getAnimating() && n2.cancelAnimations(), n2.animate({zoom: t3, duration: this.duration_, easing: si})) : n2.setZoom(t3);
    }
  }
};
function hu(e19) {
  e19 || (e19 = {});
  let t2 = new de();
  return (e19.zoom === void 0 || e19.zoom) && t2.push(new mu(e19.zoomOptions)), (e19.rotate === void 0 || e19.rotate) && t2.push(new pu(e19.rotateOptions)), (e19.attribution === void 0 || e19.attribution) && t2.push(new fu(e19.attributionOptions)), t2;
}
var gu = {ACTIVE: `active`}, _u = class extends ce {
  constructor(e19) {
    super(), this.on, this.once, this.un, e19 && e19.handleEvent && (this.handleEvent = e19.handleEvent), this.map_ = null, this.setActive(true);
  }
  getActive() {
    return this.get(gu.ACTIVE);
  }
  getMap() {
    return this.map_;
  }
  handleEvent(e19) {
    return true;
  }
  setActive(e19) {
    this.set(gu.ACTIVE, e19);
  }
  setMap(e19) {
    this.map_ = e19;
  }
};
function vu(e19, t2, n2) {
  let r2 = e19.getCenterInternal();
  if (r2) {
    let i2 = [r2[0] + t2[0], r2[1] + t2[1]];
    e19.animateInternal({duration: n2 === void 0 ? 250 : n2, easing: li, center: e19.getConstrainedCenter(i2)});
  }
}
function yu(e19, t2, n2, r2) {
  let i2 = e19.getZoom();
  if (i2 === void 0)
    return;
  let a2 = e19.getConstrainedZoom(i2 + t2);
  if (a2 === void 0)
    return;
  let o2 = e19.getResolutionForZoom(a2);
  o2 !== void 0 && (e19.getAnimating() && e19.cancelAnimations(), e19.animate({resolution: o2, anchor: n2, duration: r2 === void 0 ? 250 : r2, easing: si}));
}
var bu = class extends _u {
  constructor(e19) {
    super(), e19 || (e19 = {}), this.delta_ = e19.delta ? e19.delta : 1, this.duration_ = e19.duration === void 0 ? 250 : e19.duration;
  }
  handleEvent(e19) {
    let t2 = false;
    if (e19.type == $.DBLCLICK) {
      let n2 = e19.originalEvent, r2 = e19.map, i2 = e19.coordinate, a2 = n2.shiftKey ? -this.delta_ : this.delta_;
      yu(r2.getView(), a2, i2, this.duration_), n2.preventDefault(), t2 = true;
    }
    return !t2;
  }
};
function xu(e19) {
  let t2 = arguments;
  return function(e20) {
    let n2 = true;
    for (let r2 = 0, i2 = t2.length; r2 < i2 && (n2 && (n2 = t2[r2](e20)), n2); ++r2)
      ;
    return n2;
  };
}
var Su = function(e19) {
  let t2 = e19.originalEvent;
  return t2.altKey && !(t2.metaKey || t2.ctrlKey) && t2.shiftKey;
}, Cu = function(e19) {
  let t2 = e19.map.getTargetElement();
  if (!t2)
    return false;
  let n2 = t2.getRootNode(), r2 = e19.map.getOwnerDocument().activeElement;
  return n2 instanceof ShadowRoot ? n2.host.contains(r2) : t2.contains(r2);
}, wu = function(e19) {
  let t2 = e19.map.getTargetElement();
  if (!t2)
    return true;
  let n2 = t2.getRootNode();
  return !(n2 instanceof ShadowRoot ? n2.host : t2).hasAttribute(`tabindex`) || Cu(e19);
}, Tu = k, Eu = function(e19) {
  let t2 = e19.originalEvent;
  return `pointerId` in t2 && t2.button == 0 && !(Zr && Qr && t2.ctrlKey);
}, Du = function(e19) {
  let t2 = e19.originalEvent;
  return !t2.altKey && !(t2.metaKey || t2.ctrlKey) && !t2.shiftKey;
}, Ou = function(e19) {
  let t2 = e19.originalEvent;
  return Qr ? t2.metaKey : t2.ctrlKey;
}, ku = function(e19) {
  let t2 = e19.originalEvent;
  return !t2.altKey && !(t2.metaKey || t2.ctrlKey) && t2.shiftKey;
}, Au = function(e19) {
  let t2 = e19.originalEvent, n2 = t2.target.tagName;
  return n2 !== `INPUT` && n2 !== `SELECT` && n2 !== `TEXTAREA` && !t2.target.isContentEditable;
}, ju = function(e19) {
  let t2 = e19.originalEvent;
  return `pointerId` in t2 && t2.pointerType == `mouse`;
}, Mu = function(e19) {
  let t2 = e19.originalEvent;
  return `pointerId` in t2 && t2.isPrimary && t2.button === 0;
}, Nu = class extends _u {
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
function Pu(e19) {
  let t2 = e19.length, n2 = 0, r2 = 0;
  for (let i2 = 0; i2 < t2; i2++)
    n2 += e19[i2].clientX, r2 += e19[i2].clientY;
  return {clientX: n2 / t2, clientY: r2 / t2};
}
var Fu = class extends Nu {
  constructor(e19) {
    super({stopDown: A}), e19 || (e19 = {}), this.kinetic_ = e19.kinetic, this.lastCentroid = null, this.lastPointersCount_, this.panning_ = false;
    let t2 = e19.condition ? e19.condition : xu(Du, Mu);
    this.condition_ = e19.onFocusOnly ? xu(wu, t2) : t2, this.noKinetic_ = false;
  }
  handleDragEvent(e19) {
    let t2 = e19.map;
    this.panning_ || (this.panning_ = true, t2.getView().beginInteraction());
    let n2 = this.targetPointers, r2 = t2.getEventPixel(Pu(n2));
    if (n2.length == this.lastPointersCount_) {
      if (this.kinetic_ && this.kinetic_.update(r2[0], r2[1]), this.lastCentroid) {
        let t3 = [this.lastCentroid[0] - r2[0], r2[1] - this.lastCentroid[1]], n3 = e19.map.getView(), i2 = n3.getResolution();
        i2 !== void 0 && (mt(t3, i2), pt(t3, n3.getRotation()), n3.adjustCenterInternal(t3));
      }
    } else
      this.kinetic_ && this.kinetic_.begin();
    this.lastCentroid = r2, this.lastPointersCount_ = n2.length, e19.originalEvent.preventDefault();
  }
  handleUpEvent(e19) {
    let t2 = e19.map, n2 = t2.getView();
    if (this.targetPointers.length === 0) {
      if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
        let e20 = this.kinetic_.getDistance(), r2 = this.kinetic_.getAngle(), i2 = n2.getCenterInternal();
        if (i2) {
          let a2 = t2.getPixelFromCoordinateInternal(i2), o2 = t2.getCoordinateFromPixelInternal([a2[0] - e20 * Math.cos(r2), a2[1] - e20 * Math.sin(r2)]);
          n2.animateInternal({center: n2.getConstrainedCenter(o2), duration: 500, easing: si});
        }
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
}, Iu = class extends Nu {
  constructor(e19) {
    e19 || (e19 = {}), super({stopDown: A}), this.condition_ = e19.condition ? e19.condition : Su, this.lastAngle_ = void 0, this.duration_ = e19.duration === void 0 ? 250 : e19.duration;
  }
  handleDragEvent(e19) {
    if (!ju(e19))
      return;
    let t2 = e19.map, n2 = t2.getView();
    if (n2.getConstraints().rotation === Il)
      return;
    let r2 = t2.getSize();
    if (!r2)
      return;
    let i2 = e19.pixel, a2 = Math.atan2(r2[1] / 2 - i2[1], i2[0] - r2[0] / 2);
    if (this.lastAngle_ !== void 0) {
      let e20 = a2 - this.lastAngle_;
      n2.adjustRotationInternal(-e20);
    }
    this.lastAngle_ = a2;
  }
  handleUpEvent(e19) {
    return !ju(e19) || (e19.map.getView().endInteraction(this.duration_), false);
  }
  handleDownEvent(e19) {
    return ju(e19) && Eu(e19) && this.condition_(e19) ? (e19.map.getView().beginInteraction(), this.lastAngle_ = void 0, true) : false;
  }
}, Lu = class extends g {
  constructor(e19) {
    super(), this.geometry_ = null, this.element_ = document.createElement(`div`), this.element_.style.position = `absolute`, this.element_.style.pointerEvents = `auto`, this.element_.className = `ol-box ` + e19, this.map_ = null, this.startPixel_ = null, this.endPixel_ = null;
  }
  disposeInternal() {
    this.setMap(null);
  }
  render_() {
    let e19 = this.startPixel_, t2 = this.endPixel_;
    if (!e19 || !t2)
      return;
    let n2 = this.element_.style;
    n2.left = Math.min(e19[0], t2[0]) + `px`, n2.top = Math.min(e19[1], t2[1]) + `px`, n2.width = Math.abs(t2[0] - e19[0]) + `px`, n2.height = Math.abs(t2[1] - e19[1]) + `px`;
  }
  setMap(e19) {
    if (this.map_) {
      let e20 = this.map_.getOverlayContainer();
      e20 && e20.removeChild(this.element_);
      let t2 = this.element_.style;
      t2.left = `inherit`, t2.top = `inherit`, t2.width = `inherit`, t2.height = `inherit`;
    }
    if (this.map_ = e19, this.map_) {
      let e20 = this.map_.getOverlayContainer();
      e20 && e20.appendChild(this.element_);
    }
  }
  setPixels(e19, t2) {
    this.startPixel_ = e19, this.endPixel_ = t2, this.createOrUpdateGeometry(), this.render_();
  }
  createOrUpdateGeometry() {
    if (!this.map_)
      return;
    let e19 = this.startPixel_, t2 = this.endPixel_;
    if (!e19 || !t2)
      return;
    let n2 = [e19, [e19[0], t2[1]], t2, [t2[0], e19[1]]], r2 = this.map_, i2 = n2.map((e20) => r2.getCoordinateFromPixelInternal(e20)), a2 = i2[0];
    if (!a2)
      return;
    i2[4] = a2.slice();
    let o2 = i2;
    this.geometry_ ? this.geometry_.setCoordinates([o2]) : this.geometry_ = new Jr([o2]);
  }
  getGeometry() {
    return this.geometry_;
  }
}, Ru = {BOXSTART: `boxstart`, BOXDRAG: `boxdrag`, BOXEND: `boxend`, BOXCANCEL: `boxcancel`}, zu = class extends re {
  constructor(e19, t2, n2) {
    super(e19), this.coordinate = t2, this.mapBrowserEvent = n2;
  }
}, Bu = class extends Nu {
  constructor(e19) {
    super(), this.on, this.once, this.un, e19 ?? (e19 = {}), this.box_ = new Lu(e19.className || `ol-dragbox`), this.minArea_ = e19.minArea ?? 64, e19.onBoxEnd && (this.onBoxEnd = e19.onBoxEnd), this.startPixel_ = null, this.condition_ = e19.condition ?? Eu, this.boxEndCondition_ = e19.boxEndCondition ?? this.defaultBoxEndCondition;
  }
  defaultBoxEndCondition(e19, t2, n2) {
    let r2 = n2[0] - t2[0], i2 = n2[1] - t2[1];
    return r2 * r2 + i2 * i2 >= this.minArea_;
  }
  getGeometry() {
    return this.box_.getGeometry();
  }
  handleDragEvent(e19) {
    this.startPixel_ && (this.box_.setPixels(this.startPixel_, e19.pixel), this.dispatchEvent(new zu(Ru.BOXDRAG, e19.coordinate, e19)));
  }
  handleUpEvent(e19) {
    if (!this.startPixel_)
      return false;
    let t2 = this.boxEndCondition_(e19, this.startPixel_, e19.pixel);
    return t2 && this.onBoxEnd(e19), this.dispatchEvent(new zu(t2 ? Ru.BOXEND : Ru.BOXCANCEL, e19.coordinate, e19)), this.box_.setMap(null), this.startPixel_ = null, false;
  }
  handleDownEvent(e19) {
    return this.condition_(e19) ? (this.startPixel_ = e19.pixel, this.box_.setMap(e19.map), this.box_.setPixels(this.startPixel_, this.startPixel_), this.dispatchEvent(new zu(Ru.BOXSTART, e19.coordinate, e19)), true) : false;
  }
  onBoxEnd(e19) {
  }
  setActive(e19) {
    e19 || (this.box_.setMap(null), this.startPixel_ && (this.startPixel_ = (this.dispatchEvent(new zu(Ru.BOXCANCEL, this.startPixel_, null)), null))), super.setActive(e19);
  }
  setMap(e19) {
    this.getMap() && (this.box_.setMap(null), this.startPixel_ && (this.startPixel_ = (this.dispatchEvent(new zu(Ru.BOXCANCEL, this.startPixel_, null)), null))), super.setMap(e19);
  }
}, Vu = class extends Bu {
  constructor(e19) {
    e19 || (e19 = {});
    let t2 = e19.condition ? e19.condition : ku;
    super({condition: t2, className: e19.className || `ol-dragzoom`, minArea: e19.minArea}), this.duration_ = e19.duration === void 0 ? 200 : e19.duration, this.out_ = e19.out !== void 0 && e19.out;
  }
  onBoxEnd(e19) {
    let t2 = this.getMap();
    if (!t2)
      return;
    let n2 = t2.getView(), r2 = this.getGeometry();
    if (this.out_) {
      let e20 = n2.rotatedExtentForGeometry(r2), t3 = n2.getResolutionForExtentInternal(e20), i2 = n2.getResolution();
      if (t3 === void 0 || i2 === void 0)
        return;
      let a2 = i2 / t3;
      r2 = r2.clone(), r2.scale(a2 * a2);
    }
    n2.fitInternal(r2, {duration: this.duration_, easing: si});
  }
}, Hu = {LEFT: `ArrowLeft`, UP: `ArrowUp`, RIGHT: `ArrowRight`, DOWN: `ArrowDown`}, Uu = class extends _u {
  constructor(e19) {
    super(), e19 || (e19 = {}), this.defaultCondition_ = function(e20) {
      return Du(e20) && Au(e20);
    }, this.condition_ = e19.condition === void 0 ? this.defaultCondition_ : e19.condition, this.duration_ = e19.duration === void 0 ? 100 : e19.duration, this.pixelDelta_ = e19.pixelDelta === void 0 ? 128 : e19.pixelDelta;
  }
  handleEvent(e19) {
    let t2 = false;
    if (e19.type == h.KEYDOWN) {
      let n2 = e19.originalEvent, r2 = n2.key;
      if (this.condition_(e19) && (r2 == Hu.DOWN || r2 == Hu.LEFT || r2 == Hu.RIGHT || r2 == Hu.UP)) {
        let i2 = e19.map.getView(), a2 = i2.getResolution();
        if (a2 === void 0)
          return true;
        let o2 = a2 * this.pixelDelta_, s2 = 0, c2 = 0;
        r2 == Hu.DOWN ? c2 = -o2 : r2 == Hu.LEFT ? s2 = -o2 : r2 == Hu.RIGHT ? s2 = o2 : c2 = o2;
        let l2 = [s2, c2];
        pt(l2, i2.getRotation()), vu(i2, l2, this.duration_), n2.preventDefault(), t2 = true;
      }
    }
    return !t2;
  }
}, Wu = class extends _u {
  constructor(e19) {
    super(), e19 || (e19 = {}), this.condition_ = e19.condition ? e19.condition : function(e20) {
      return !Ou(e20) && Au(e20);
    }, this.delta_ = e19.delta ? e19.delta : 1, this.duration_ = e19.duration === void 0 ? 100 : e19.duration;
  }
  handleEvent(e19) {
    let t2 = false;
    if (e19.type == h.KEYDOWN || e19.type == h.KEYPRESS) {
      let n2 = e19.originalEvent, r2 = n2.key;
      if (this.condition_(e19) && (r2 === `+` || r2 === `-`)) {
        let i2 = e19.map, a2 = r2 === `+` ? this.delta_ : -this.delta_;
        yu(i2.getView(), a2, void 0, this.duration_), n2.preventDefault(), t2 = true;
      }
    }
    return !t2;
  }
}, Gu = 40, Ku = 300, qu = 3, Ju = class extends _u {
  constructor(e19) {
    e19 || (e19 = {}), super(e19), this.totalDelta_ = 0, this.lastDelta_ = 0, this.maxDelta_ = e19.maxDelta === void 0 ? 1 : e19.maxDelta, this.duration_ = e19.duration === void 0 ? 250 : e19.duration, this.timeout_ = e19.timeout === void 0 ? 80 : e19.timeout, this.useAnchor_ = e19.useAnchor === void 0 || e19.useAnchor, this.constrainResolution_ = e19.constrainResolution !== void 0 && e19.constrainResolution;
    let t2 = e19.condition ? e19.condition : Tu;
    this.condition_ = e19.onFocusOnly ? xu(wu, t2) : t2, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_, this.mode_ = void 0, this.trackpadEventGap_ = 400, this.trackpadTimeoutId_, this.deltaPerZoom_ = 300;
  }
  endInteraction_() {
    this.trackpadTimeoutId_ = void 0;
    let e19 = this.getMap();
    if (!e19)
      return;
    let t2 = e19.getView(), n2 = this.lastDelta_ ? this.lastDelta_ > 0 ? 1 : -1 : 0;
    t2.endInteraction(this.constrainResolution_ || t2.getConstrainResolution() ? 100 : void 0, n2, this.lastAnchor_ ? e19.getCoordinateFromPixel(this.lastAnchor_) : void 0);
  }
  handleEvent(e19) {
    if (!this.condition_(e19) || e19.type !== h.WHEEL)
      return true;
    let t2 = e19.map, n2 = e19.originalEvent;
    n2.preventDefault();
    let r2 = n2.ctrlKey && !e19.ctrlKey;
    this.useAnchor_ && (this.lastAnchor_ = e19.pixel);
    let i2 = n2.deltaY;
    switch (n2.deltaMode) {
      case WheelEvent.DOM_DELTA_LINE:
        i2 *= Gu;
        break;
      case WheelEvent.DOM_DELTA_PAGE:
        i2 *= Ku;
    }
    if (i2 === 0)
      return false;
    this.lastDelta_ = i2;
    let a2 = Date.now();
    this.startTime_ === void 0 && (this.startTime_ = a2), (!this.mode_ || a2 - this.startTime_ > this.trackpadEventGap_) && (this.mode_ = Math.abs(i2) < 4 ? `trackpad` : `wheel`);
    let o2 = t2.getView();
    if (this.mode_ === `trackpad`)
      return this.trackpadTimeoutId_ ? clearTimeout(this.trackpadTimeoutId_) : (o2.getAnimating() && o2.cancelAnimations(), o2.beginInteraction()), this.trackpadTimeoutId_ = setTimeout(this.endInteraction_.bind(this), this.timeout_), r2 && (i2 *= qu), o2.adjustZoom(-i2 / this.deltaPerZoom_, this.lastAnchor_ ? t2.getCoordinateFromPixel(this.lastAnchor_) : void 0), this.startTime_ = a2, false;
    this.totalDelta_ += i2;
    let s2 = Math.max(this.timeout_ - (a2 - this.startTime_), 0);
    return clearTimeout(this.timeoutId_), this.timeoutId_ = setTimeout(this.handleWheelZoom_.bind(this, t2), s2), false;
  }
  handleWheelZoom_(e19) {
    let t2 = e19.getView();
    t2.getAnimating() && t2.cancelAnimations();
    let n2 = -I(this.totalDelta_, -this.maxDelta_ * this.deltaPerZoom_, this.maxDelta_ * this.deltaPerZoom_) / this.deltaPerZoom_;
    (t2.getConstrainResolution() || this.constrainResolution_) && (n2 = n2 ? n2 > 0 ? 1 : -1 : 0), yu(t2, n2, this.lastAnchor_ ? e19.getCoordinateFromPixel(this.lastAnchor_) : void 0, this.duration_), this.mode_ = void 0, this.totalDelta_ = 0, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_ = void 0;
  }
  setMouseAnchor(e19) {
    this.useAnchor_ = e19, e19 || (this.lastAnchor_ = null);
  }
}, Yu = class extends Nu {
  constructor(e19) {
    e19 || (e19 = {});
    let t2 = e19;
    t2.stopDown || (t2.stopDown = A), super(t2), this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = false, this.rotationDelta_ = 0, this.threshold_ = e19.threshold === void 0 ? 0.3 : e19.threshold, this.duration_ = e19.duration === void 0 ? 250 : e19.duration;
  }
  handleDragEvent(e19) {
    let t2 = 0, n2 = this.targetPointers[0], r2 = this.targetPointers[1], i2 = Math.atan2(r2.clientY - n2.clientY, r2.clientX - n2.clientX);
    if (this.lastAngle_ !== void 0) {
      let e20 = i2 - this.lastAngle_;
      this.rotationDelta_ += e20, !this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_ && (this.rotating_ = true), t2 = e20;
    }
    this.lastAngle_ = i2;
    let a2 = e19.map, o2 = a2.getView();
    o2.getConstraints().rotation !== Il && (this.anchor_ = a2.getCoordinateFromPixelInternal(a2.getEventPixel(Pu(this.targetPointers))) ?? null, this.rotating_ && (a2.render(), o2.adjustRotationInternal(t2, this.anchor_ ?? void 0)));
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
}, Xu = class extends Nu {
  constructor(e19) {
    e19 || (e19 = {});
    let t2 = e19;
    t2.stopDown || (t2.stopDown = A), super(t2), this.anchor_ = null, this.duration_ = e19.duration === void 0 ? 400 : e19.duration, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1;
  }
  handleDragEvent(e19) {
    let t2 = 1, n2 = this.targetPointers[0], r2 = this.targetPointers[1], i2 = n2.clientX - r2.clientX, a2 = n2.clientY - r2.clientY, o2 = Math.sqrt(i2 * i2 + a2 * a2);
    this.lastDistance_ !== void 0 && (t2 = this.lastDistance_ / o2), this.lastDistance_ = o2;
    let s2 = e19.map, c2 = s2.getView();
    t2 != 1 && (this.lastScaleDelta_ = t2), this.anchor_ = s2.getCoordinateFromPixelInternal(s2.getEventPixel(Pu(this.targetPointers))) ?? null, s2.render(), c2.adjustResolutionInternal(t2, this.anchor_ ?? void 0);
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
function Zu(e19) {
  e19 || (e19 = {});
  let t2 = new de(), n2 = new xi(-5e-3, 0.05, 100);
  return (e19.altShiftDragRotate === void 0 || e19.altShiftDragRotate) && t2.push(new Iu()), (e19.doubleClickZoom === void 0 || e19.doubleClickZoom) && t2.push(new bu({delta: e19.zoomDelta, duration: e19.zoomDuration})), (e19.dragPan === void 0 || e19.dragPan) && t2.push(new Fu({onFocusOnly: e19.onFocusOnly, kinetic: n2})), (e19.pinchRotate === void 0 || e19.pinchRotate) && t2.push(new Yu()), (e19.pinchZoom === void 0 || e19.pinchZoom) && t2.push(new Xu({duration: e19.zoomDuration})), (e19.keyboard === void 0 || e19.keyboard) && (t2.push(new Uu()), t2.push(new Wu({delta: e19.zoomDelta, duration: e19.zoomDuration}))), (e19.mouseWheelZoom === void 0 || e19.mouseWheelZoom) && t2.push(new Ju({onFocusOnly: e19.onFocusOnly, duration: e19.zoomDuration})), (e19.shiftDragZoom === void 0 || e19.shiftDragZoom) && t2.push(new Vu({duration: e19.zoomDuration})), t2;
}
var Qu = {ADDLAYER: `addlayer`, REMOVELAYER: `removelayer`}, $u = class extends re {
  constructor(e19, t2) {
    super(e19), this.layer = t2;
  }
}, ed = {LAYERS: `layers`}, td = class e15 extends Jl {
  constructor(e19) {
    e19 || (e19 = {});
    let t2 = Object.assign({}, e19);
    delete t2.layers;
    let n2 = e19.layers;
    super(t2), this.on, this.once, this.un, this.layersListenerKeys_ = [], this.listenerKeys_ = {}, this.addChangeListener(ed.LAYERS, this.handleLayersChanged_), n2 ? Array.isArray(n2) ? n2 = new de(n2.slice(), {unique: true}) : j(typeof n2.getArray == `function`, "Expected `layers` to be an array or a `Collection`") : n2 = new de(void 0, {unique: true}), this.setLayers(n2);
  }
  handleLayerChange_() {
    this.changed();
  }
  handleLayersChanged_() {
    this.layersListenerKeys_.forEach(m), this.layersListenerKeys_.length = 0;
    let e19 = this.getLayers();
    this.layersListenerKeys_.push(f(e19, c.ADD, this.handleLayersAdd_, this), f(e19, c.REMOVE, this.handleLayersRemove_, this));
    for (let e20 in this.listenerKeys_)
      this.listenerKeys_[e20].forEach(m);
    u(this.listenerKeys_);
    let t2 = e19.getArray();
    for (let e20 = 0, n2 = t2.length; e20 < n2; e20++) {
      let n3 = t2[e20];
      this.registerLayerListeners_(n3), this.dispatchEvent(new $u(Qu.ADDLAYER, n3));
    }
    this.changed();
  }
  registerLayerListeners_(t2) {
    let n2 = [f(t2, l.PROPERTYCHANGE, this.handleLayerChange_, this), f(t2, h.CHANGE, this.handleLayerChange_, this)];
    t2 instanceof e15 && n2.push(f(t2, Qu.ADDLAYER, this.handleLayerGroupAdd_, this), f(t2, Qu.REMOVELAYER, this.handleLayerGroupRemove_, this)), this.listenerKeys_[D(t2)] = n2;
  }
  handleLayerGroupAdd_(e19) {
    this.dispatchEvent(new $u(Qu.ADDLAYER, e19.layer));
  }
  handleLayerGroupRemove_(e19) {
    this.dispatchEvent(new $u(Qu.REMOVELAYER, e19.layer));
  }
  handleLayersAdd_(e19) {
    let t2 = e19.element;
    this.registerLayerListeners_(t2), this.dispatchEvent(new $u(Qu.ADDLAYER, t2)), this.changed();
  }
  handleLayersRemove_(e19) {
    let t2 = e19.element, n2 = D(t2);
    this.listenerKeys_[n2].forEach(m), delete this.listenerKeys_[n2], this.dispatchEvent(new $u(Qu.REMOVELAYER, t2)), this.changed();
  }
  getLayers() {
    return this.get(ed.LAYERS);
  }
  setLayers(e19) {
    let t2 = this.getLayers();
    if (t2) {
      let e20 = t2.getArray();
      for (let t3 = 0, n2 = e20.length; t3 < n2; ++t3)
        this.dispatchEvent(new $u(Qu.REMOVELAYER, e20[t3]));
    }
    this.set(ed.LAYERS, e19);
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
      n3.opacity *= r2.opacity, n3.visible = n3.visible && r2.visible, n3.maxResolution = Math.min(n3.maxResolution, r2.maxResolution), n3.minResolution = Math.max(n3.minResolution, r2.minResolution), n3.minZoom = Math.max(n3.minZoom, r2.minZoom), n3.maxZoom = Math.min(n3.maxZoom, r2.maxZoom), r2.extent !== void 0 && (n3.extent = n3.extent === void 0 ? r2.extent : ze(n3.extent, r2.extent)), n3.zIndex === void 0 && (n3.zIndex = i2);
    }
    return t2;
  }
  getSourceState() {
    return `ready`;
  }
}, nd = class extends g {
  constructor(e19) {
    super(), this.map_ = e19;
  }
  dispatchRenderEvent(e19, t2) {
    T();
  }
  calculateMatrices2D(e19) {
    let t2 = e19.viewState, n2 = e19.coordinateToPixelTransform, r2 = e19.pixelToCoordinateTransform;
    Xn(n2, e19.size[0] / 2, e19.size[1] / 2, 1 / t2.resolution, -1 / t2.resolution, -t2.rotation, -t2.center[0], -t2.center[1]), Zn(r2, n2);
  }
  forEachFeatureAtCoordinate(e19, t2, n2, r2, i2, a2, o2, s2) {
    let c2, l2 = t2.viewState;
    function u2(e20, t3, n3, r3) {
      return i2.call(a2, t3, e20 ? n3 : null, r3);
    }
    let d2 = l2.projection, f2 = ht(e19.slice(), d2), p2 = [[0, 0]];
    if (d2.canWrapX() && r2) {
      let e20 = F(d2.getExtent());
      p2.push([-e20, 0], [e20, 0]);
    }
    let m2 = t2.layerStatesArray, h2 = m2.length, g2 = [], _2 = [];
    for (let r3 = 0; r3 < p2.length; r3++)
      for (let i3 = h2 - 1; i3 >= 0; --i3) {
        let a3 = m2[i3], d3 = a3.layer;
        if (d3.hasRenderer() && Xl(a3, l2) && o2.call(s2, d3)) {
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
    return this.forEachFeatureAtCoordinate(e19, t2, n2, r2, k, this, i2, a2) !== void 0;
  }
  getMap() {
    return this.map_;
  }
  renderFrame(e19) {
    T();
  }
  scheduleExpireIconCache(e19) {
    Xi.canExpireCache() && e19.postRenderFunctions.push(rd);
  }
};
function rd(e19, t2) {
  Xi.expire();
}
var id = class extends nd {
  constructor(e19) {
    super(e19), this.fontChangeListenerKey_ = f(Ca, l.PROPERTYCHANGE, e19.redrawText, e19), this.element_ = ei ? _i() : document.createElement(`div`);
    let t2 = this.element_.style;
    t2.position = `absolute`, t2.width = `100%`, t2.height = `100%`, t2.zIndex = `0`, this.element_.className = sa + ` ol-layers`;
    let n2 = e19.getViewport();
    n2 && n2.insertBefore(this.element_, n2.firstChild || null), this.children_ = [], this.renderedVisible_ = true;
  }
  dispatchRenderEvent(e19, t2) {
    let n2 = this.getMap();
    if (n2.hasListener(e19)) {
      let r2 = new Bs(e19, void 0, t2);
      n2.dispatchEvent(r2);
    }
  }
  disposeInternal() {
    m(this.fontChangeListenerKey_), this.element_.remove(), super.disposeInternal();
  }
  renderFrame(e19) {
    if (!e19) {
      this.renderedVisible_ && (this.renderedVisible_ = (this.element_.style.display = `none`, false));
      return;
    }
    this.calculateMatrices2D(e19), this.dispatchRenderEvent(eo.PRECOMPOSE, e19);
    let t2 = e19.layerStatesArray.sort((e20, t3) => e20.zIndex - t3.zIndex);
    t2.some((e20) => e20.layer instanceof Ql && e20.layer.getDeclutter()) && (e19.declutter = {});
    let n2 = e19.viewState;
    this.children_.length = 0;
    let r2 = this.getMap().getTargetElement(), i2;
    vi(r2) && (i2 = r2.getContext(`2d`), i2.setTransform(1, 0, 0, 1, 0, 0), i2.clearRect(0, 0, r2.width, r2.height));
    let a2 = [], o2 = i2 ? r2 : null;
    for (let r3 = 0, i3 = t2.length; r3 < i3; ++r3) {
      let i4 = t2[r3];
      e19.layerIndex = r3;
      let s2 = i4.layer, c2 = s2.getSourceState();
      if (!Xl(i4, n2) || c2 != `ready` && c2 != `undefined`) {
        s2.unrender();
        continue;
      }
      let l2 = s2.render(e19, o2);
      l2 && (l2 !== o2 && (this.children_.push(l2), o2 = l2), a2.push(i4));
    }
    if (this.declutter(e19, a2), gi(this.element_, this.children_), i2)
      for (let e20 of this.children_) {
        let t3 = e20.firstElementChild || e20, n3 = e20.style.backgroundColor;
        if (n3 && (!vi(t3) || t3.width > 0) && (i2.fillStyle = n3, i2.fillRect(0, 0, i2.canvas.width, i2.canvas.height)), !vi(t3) || t3.width === 0)
          continue;
        i2.save();
        let r3 = e20.style.opacity || t3.style.opacity;
        i2.globalAlpha = r3 === `` ? 1 : Number(r3);
        let a3 = t3.style.transform;
        if (a3)
          i2.transform(...tr(a3));
        else {
          let e21 = parseFloat(t3.style.width) / t3.width, n4 = parseFloat(t3.style.height) / t3.height;
          i2.transform(e21, 0, 0, n4, 0, 0);
        }
        i2.drawImage(t3, 0, 0), i2.restore();
      }
    this.dispatchRenderEvent(eo.POSTCOMPOSE, e19), this.renderedVisible_ || (this.renderedVisible_ = (this.element_.style.display = ``, true)), this.scheduleExpireIconCache(e19);
  }
  declutter(e19, t2) {
    if (e19.declutter) {
      for (let n2 = t2.length - 1; n2 >= 0; --n2) {
        let r2 = t2[n2], i2 = r2.layer;
        i2.getDeclutter() && i2.renderDeclutter(e19, r2);
      }
      t2.forEach((t3) => t3.layer?.renderDeferred(e19));
    }
  }
};
function ad(e19) {
  e19 instanceof Yl ? e19.setMapInternal(null) : e19 instanceof td && e19.getLayers().forEach(ad);
}
function od(e19, t2) {
  if (e19 instanceof Yl)
    e19.setMapInternal(t2);
  else if (e19 instanceof td) {
    let n2 = e19.getLayers().getArray();
    for (let e20 = 0, r2 = n2.length; e20 < r2; ++e20)
      od(n2[e20], t2);
  }
}
var sd = class extends ce {
  constructor(e19) {
    super(), e19 || (e19 = {}), this.on, this.once, this.un;
    let t2 = cd(e19);
    this.renderComplete_ = false, this.loaded_ = true, this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this), this.ctrlKey_ = false, this.boundHandleCtrlKey_ = this.handleCtrlKey_.bind(this), this.maxTilesLoading_ = e19.maxTilesLoading === void 0 ? 16 : e19.maxTilesLoading, this.pixelRatio_ = e19.pixelRatio === void 0 ? $r : e19.pixelRatio, this.postRenderTimeoutHandle_, this.animationDelayKey_, this.animationDelay_ = this.animationDelay_.bind(this), this.coordinateToPixelTransform_ = Jn(), this.pixelToCoordinateTransform_ = Jn(), this.frameIndex_ = 0, this.frameState_ = null, this.previousExtent_ = null, this.viewPropertyListenerKey_ = null, this.viewChangeListenerKey_ = null, this.layerGroupPropertyListenerKeys_ = null, this.viewport_, this.overlayContainer_, this.overlayContainerStopEvent_, ei || (this.viewport_ = document.createElement(`div`), this.viewport_.className = `ol-viewport` + (`ontouchstart` in window ? ` ol-touch` : ``), this.viewport_.style.position = `relative`, this.viewport_.style.overflow = `hidden`, this.viewport_.style.width = `100%`, this.viewport_.style.height = `100%`, this.overlayContainer_ = document.createElement(`div`), this.overlayContainer_.style.position = `absolute`, this.overlayContainer_.style.zIndex = `0`, this.overlayContainer_.style.width = `100%`, this.overlayContainer_.style.height = `100%`, this.overlayContainer_.style.pointerEvents = `none`, this.overlayContainer_.className = `ol-overlaycontainer`, this.viewport_.appendChild(this.overlayContainer_), this.overlayContainerStopEvent_ = document.createElement(`div`), this.overlayContainerStopEvent_.style.position = `absolute`, this.overlayContainerStopEvent_.style.zIndex = `0`, this.overlayContainerStopEvent_.style.width = `100%`, this.overlayContainerStopEvent_.style.height = `100%`, this.overlayContainerStopEvent_.style.pointerEvents = `none`, this.overlayContainerStopEvent_.className = `ol-overlaycontainer-stopevent`, this.viewport_.appendChild(this.overlayContainerStopEvent_)), this.mapBrowserEventHandler_ = null, this.moveTolerance_ = e19.moveTolerance, this.keyboardEventTarget_ = t2.keyboardEventTarget, this.targetChangeHandlerKeys_ = null, this.targetElement_ = null, ei || (this.resizeObserver_ = new ResizeObserver(() => this.updateSize())), this.controls = t2.controls || (ei ? new de() : hu()), this.interactions = t2.interactions || (ei ? new de() : Zu({onFocusOnly: true})), this.overlays_ = t2.overlays, this.overlayIdIndex_ = {}, this.renderer_ = null, this.postRenderFunctions_ = [], this.tileQueue_ = new lu(this.getTilePriority.bind(this), this.handleTileChange_.bind(this)), this.addChangeListener(ou.LAYERGROUP, this.handleLayerGroupChanged_), this.addChangeListener(ou.VIEW, this.handleViewChanged_), this.addChangeListener(ou.SIZE, this.handleSizeChanged_), this.addChangeListener(ou.TARGET, this.handleTargetChanged_), this.setProperties(t2.values);
    let n2 = this;
    e19.view && !(e19.view instanceof Vl) && e19.view.then(function(e20) {
      n2.setView(new Vl(e20));
    }), this.controls.addEventListener(c.ADD, (e20) => {
      e20.element.setMap(this);
    }), this.controls.addEventListener(c.REMOVE, (e20) => {
      e20.element.setMap(null);
    }), this.interactions.addEventListener(c.ADD, (e20) => {
      e20.element.setMap(this);
    }), this.interactions.addEventListener(c.REMOVE, (e20) => {
      e20.element.setMap(null);
    }), this.overlays_.addEventListener(c.ADD, (e20) => {
      this.addOverlayInternal_(e20.element);
    }), this.overlays_.addEventListener(c.REMOVE, (e20) => {
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
    od(e19.layer, this);
  }
  addOverlay(e19) {
    this.getOverlays().push(e19);
  }
  addOverlayInternal_(e19) {
    let t2 = e19.getId();
    t2 !== void 0 && (this.overlayIdIndex_[t2.toString()] = e19), e19.setMap(this);
  }
  disposeInternal() {
    this.controls.clear(), this.interactions.clear(), this.overlays_.clear(), this.resizeObserver_?.disconnect(), this.setTarget(null), super.disposeInternal();
  }
  forEachFeatureAtPixel(e19, t2, n2) {
    if (!this.frameState_ || !this.renderer_)
      return;
    let r2 = this.getCoordinateFromPixelInternal(e19);
    n2 = n2 === void 0 ? {} : n2;
    let i2 = n2.hitTolerance === void 0 ? 0 : n2.hitTolerance, a2 = n2.layerFilter === void 0 ? k : n2.layerFilter, o2 = n2.checkWrapped !== false;
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
        n3 instanceof td ? t2(n3.getLayers()) : e19.push(n3);
      });
    }
    return t2(this.getLayers()), e19;
  }
  hasFeatureAtPixel(e19, t2) {
    if (!this.frameState_ || !this.renderer_)
      return false;
    let n2 = this.getCoordinateFromPixelInternal(e19);
    t2 = t2 === void 0 ? {} : t2;
    let r2 = t2.layerFilter === void 0 ? k : t2.layerFilter, i2 = t2.hitTolerance === void 0 ? 0 : t2.hitTolerance, a2 = t2.checkWrapped !== false;
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
    return this.get(ou.TARGET);
  }
  getTargetElement() {
    return this.targetElement_;
  }
  getCoordinateFromPixel(e19, t2) {
    let n2 = Vn(this.getCoordinateFromPixelInternal(e19), this.getView().getProjection());
    return t2?.wrapX && n2 && ht(n2, Bn() || this.getView().getProjection()), n2;
  }
  getCoordinateFromPixelInternal(e19) {
    let t2 = this.frameState_;
    return t2 ? L(t2.pixelToCoordinateTransform, e19.slice()) : null;
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
    return this.get(ou.LAYERGROUP);
  }
  setLayers(e19) {
    let t2 = this.getLayerGroup();
    if (e19 instanceof de) {
      t2.setLayers(e19);
      return;
    }
    let n2 = t2.getLayers();
    n2.clear(), n2.extend(e19);
  }
  getLayers() {
    return this.getLayerGroup().getLayers();
  }
  updateRenderComplete_() {
    this.renderComplete_ = (this.hasListener(au.LOADSTART) || this.hasListener(au.LOADEND) || this.hasListener(eo.RENDERCOMPLETE)) && !this.tileQueue_.getTilesLoading() && !this.tileQueue_.getCount() && !this.getLoadingOrNotReady();
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
  getPixelFromCoordinate(e19, t2) {
    let n2 = this.getView().getProjection(), r2 = Hn(e19, n2);
    return t2?.wrapX && this.frameState_ && (r2 = gt(r2.slice(), n2, this.frameState_.viewState.center[0])), this.getPixelFromCoordinateInternal(r2);
  }
  getPixelFromCoordinateInternal(e19) {
    let t2 = this.frameState_;
    return t2 ? L(t2.coordinateToPixelTransform, e19.slice(0, 2)) : null;
  }
  getPixelRatio() {
    return this.pixelRatio_;
  }
  setPixelRatio(e19) {
    this.pixelRatio_ !== e19 && (this.pixelRatio_ = e19, this.render());
  }
  getRenderer() {
    return this.renderer_;
  }
  getSize() {
    return this.get(ou.SIZE);
  }
  getView() {
    return this.get(ou.VIEW);
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
    return uu(this.frameState_, e19, t2, n2, r2);
  }
  handleBrowserEvent(e19, t2) {
    t2 || (t2 = e19.type);
    let n2 = new nu(t2, this, e19);
    this.handleMapBrowserEvent(n2);
  }
  handleCtrlKey_(e19) {
    let t2 = e19;
    this.ctrlKey_ = t2.key === `Control` ? t2.type === h.KEYDOWN : t2.ctrlKey;
  }
  handleMapBrowserEvent(e19) {
    if (e19.originalEvent.ctrlKey === false && (this.ctrlKey_ = false), e19.ctrlKey = this.ctrlKey_, !this.frameState_)
      return;
    let t2 = e19.originalEvent, n2 = t2.type;
    if (n2 === ru.POINTERDOWN || n2 === h.WHEEL || n2 === h.KEYDOWN) {
      let e20 = this.getOwnerDocument(), n3 = this.viewport_.getRootNode ? this.viewport_.getRootNode() : e20, r2 = t2.target, i2 = n3 instanceof ShadowRoot ? n3.host === r2 ? n3.host.ownerDocument : n3 : n3 === e20 ? e20.documentElement : n3;
      if (this.overlayContainerStopEvent_.contains(r2) || !i2.contains(r2))
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
      let n3 = this.maxTilesLoading_, r2 = n3, i2 = e19 ? e19.viewHints : void 0;
      if (i2 && (i2[V.ANIMATING] || i2[V.INTERACTING])) {
        let t3 = Date.now() - e19.time > 8;
        n3 = t3 ? 0 : 8, r2 = t3 ? 0 : 2;
      }
      if (t2.getTilesLoading() < n3) {
        let e20 = t2.getCount();
        t2.reprioritize(), t2.getCount() < e20 && this.updateRenderComplete_(), t2.loadMoreTiles(n3, r2);
      }
    }
    e19 && this.renderer_ && !e19.animate && (this.renderComplete_ ? (this.hasListener(eo.RENDERCOMPLETE) && this.renderer_.dispatchRenderEvent(eo.RENDERCOMPLETE, e19), this.loaded_ === false && (this.loaded_ = true, this.dispatchEvent(new tu(au.LOADEND, this, e19)))) : this.loaded_ === true && (this.loaded_ = false, this.dispatchEvent(new tu(au.LOADSTART, this, e19))));
    let n2 = this.postRenderFunctions_;
    if (e19)
      for (let t3 = 0, r2 = n2.length; t3 < r2; ++t3)
        n2[t3](this, e19);
    n2.length = 0;
  }
  handleSizeChanged_() {
    this.getView() && !this.getView().getAnimating() && this.getView().resolveConstraints(0), this.render();
  }
  handleTargetChanged_() {
    if (this.mapBrowserEventHandler_) {
      let e20 = this.targetChangeHandlerKeys_;
      for (let t4 = 0, n2 = e20.length; t4 < n2; ++t4)
        m(e20[t4]);
      this.targetChangeHandlerKeys_ = null;
      let t3 = this.getOwnerDocument();
      t3.removeEventListener(h.KEYDOWN, this.boundHandleCtrlKey_, true), t3.removeEventListener(h.KEYUP, this.boundHandleCtrlKey_, true), this.ctrlKey_ = false, this.viewport_.removeEventListener(h.CONTEXTMENU, this.boundHandleBrowserEvent_), this.viewport_.removeEventListener(h.WHEEL, this.boundHandleBrowserEvent_), this.mapBrowserEventHandler_.dispose(), this.mapBrowserEventHandler_ = null, this.viewport_.remove();
    }
    if (this.targetElement_ && !vi(this.targetElement_)) {
      this.resizeObserver_?.unobserve(this.targetElement_);
      let e20 = this.targetElement_.getRootNode();
      e20 instanceof ShadowRoot && this.resizeObserver_.unobserve(e20.host), this.setSize(void 0);
    }
    let e19 = this.getTarget(), t2 = typeof e19 == `string` ? document.getElementById(e19) : e19;
    if (this.targetElement_ = t2, !t2)
      this.renderer_ && (this.renderer_ = (clearTimeout(this.postRenderTimeoutHandle_), this.postRenderTimeoutHandle_ = void 0, this.postRenderFunctions_.length = 0, this.renderer_.dispose(), null)), this.animationDelayKey_ && (this.animationDelayKey_ = (cancelAnimationFrame(this.animationDelayKey_), void 0));
    else {
      if (vi(t2) || t2.appendChild(this.viewport_), this.renderer_ || (this.renderer_ = new id(this)), !vi(t2)) {
        this.mapBrowserEventHandler_ = new iu(this, this.moveTolerance_);
        for (let e21 in $)
          this.mapBrowserEventHandler_.addEventListener($[e21], this.handleMapBrowserEvent.bind(this));
        this.viewport_.addEventListener(h.CONTEXTMENU, this.boundHandleBrowserEvent_, false), this.viewport_.addEventListener(h.WHEEL, this.boundHandleBrowserEvent_, ni ? {passive: false} : false);
        let e20 = this.getOwnerDocument();
        e20.addEventListener(h.KEYDOWN, this.boundHandleCtrlKey_, true), e20.addEventListener(h.KEYUP, this.boundHandleCtrlKey_, true);
        let n2;
        if (this.keyboardEventTarget_)
          n2 = this.keyboardEventTarget_;
        else {
          let e21 = t2.getRootNode();
          n2 = e21 instanceof ShadowRoot ? e21.host : t2;
        }
        if (this.targetChangeHandlerKeys_ = [f(n2, h.KEYDOWN, this.handleBrowserEvent, this), f(n2, h.KEYPRESS, this.handleBrowserEvent, this)], !vi(t2)) {
          let e21 = t2.getRootNode();
          e21 instanceof ShadowRoot && this.resizeObserver_.observe(e21.host), this.resizeObserver_?.observe(t2);
        }
      }
      this.updateSize();
    }
  }
  handleTileChange_() {
    this.render();
  }
  handleViewPropertyChanged_() {
    this.render();
  }
  handleViewChanged_() {
    this.viewPropertyListenerKey_ && (this.viewPropertyListenerKey_ = (m(this.viewPropertyListenerKey_), null)), this.viewChangeListenerKey_ && (this.viewChangeListenerKey_ = (m(this.viewChangeListenerKey_), null));
    let e19 = this.getView();
    e19 && (this.updateViewportSize_(this.getSize()), this.viewPropertyListenerKey_ = f(e19, l.PROPERTYCHANGE, this.handleViewPropertyChanged_, this), this.viewChangeListenerKey_ = f(e19, h.CHANGE, this.handleViewPropertyChanged_, this), e19.resolveConstraints(0)), this.render();
  }
  handleLayerGroupChanged_() {
    this.layerGroupPropertyListenerKeys_ && (this.layerGroupPropertyListenerKeys_ = (this.layerGroupPropertyListenerKeys_.forEach(m), null));
    let e19 = this.getLayerGroup();
    e19 && (this.handleLayerAdd_(new $u(`addlayer`, e19)), this.layerGroupPropertyListenerKeys_ = [f(e19, l.PROPERTYCHANGE, this.render, this), f(e19, h.CHANGE, this.render, this), f(e19, `addlayer`, this.handleLayerAdd_, this), f(e19, `removelayer`, this.handleLayerRemove_, this)]), this.render();
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
    if (!this.frameState_)
      return;
    let e19 = this.frameState_.layerStatesArray;
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
    ad(e19.layer);
  }
  removeOverlay(e19) {
    return this.getOverlays().remove(e19);
  }
  renderFrame_(e19) {
    let t2 = this.getSize(), n2 = this.getView(), r2 = this.frameState_, i2 = null;
    if (t2 !== void 0 && Fo(t2) && n2 && n2.isDef()) {
      let r3 = n2.getHints(this.frameState_ ? this.frameState_.viewHints : void 0), a2 = n2.getState();
      if (i2 = {animate: false, coordinateToPixelTransform: this.coordinateToPixelTransform_, declutter: null, extent: Le(a2.center, a2.resolution, a2.rotation, t2), index: this.frameIndex_++, layerIndex: 0, layerStatesArray: this.getLayerGroup().getLayerStatesArray(), pixelRatio: this.pixelRatio_, pixelToCoordinateTransform: this.pixelToCoordinateTransform_, postRenderFunctions: [], size: t2, tileQueue: this.tileQueue_, time: e19, usedTiles: {}, viewState: a2, viewHints: r3, wantedTiles: {}, mapId: D(this), renderTargets: {}}, a2.nextCenter && a2.nextResolution) {
        let e20 = isNaN(a2.nextRotation) ? a2.rotation : a2.nextRotation;
        i2.nextExtent = Le(a2.nextCenter, a2.nextResolution, e20, t2);
      }
    }
    this.frameState_ = i2, this.renderer_.renderFrame(i2), i2 && (i2.animate && this.render(), Array.prototype.push.apply(this.postRenderFunctions_, i2.postRenderFunctions), r2 && (this.previousExtent_ && (We(this.previousExtent_) || Ee(i2.extent, this.previousExtent_)) || (this.dispatchEvent(new tu(au.MOVESTART, this, r2)), this.previousExtent_ = Ce(this.previousExtent_))), this.previousExtent_ && !i2.viewHints[V.ANIMATING] && !i2.viewHints[V.INTERACTING] && !Ee(i2.extent, this.previousExtent_) && (this.dispatchEvent(new tu(au.MOVEEND, this, i2)), ge(i2.extent, this.previousExtent_))), this.dispatchEvent(new tu(au.POSTRENDER, this, i2)), this.updateRenderComplete_(), this.postRenderTimeoutHandle_ || (this.postRenderTimeoutHandle_ = setTimeout(() => {
      this.postRenderTimeoutHandle_ = void 0, this.handlePostRender();
    }, 0));
  }
  setLayerGroup(e19) {
    let t2 = this.getLayerGroup();
    t2 && this.handleLayerRemove_(new $u(`removelayer`, t2)), this.set(ou.LAYERGROUP, e19);
  }
  setSize(e19) {
    this.set(ou.SIZE, e19);
  }
  setTarget(e19) {
    this.set(ou.TARGET, e19);
  }
  setView(e19) {
    if (!e19 || e19 instanceof Vl) {
      this.set(ou.VIEW, e19);
      return;
    }
    this.set(ou.VIEW, new Vl());
    let t2 = this;
    e19.then(function(e20) {
      t2.setView(new Vl(e20));
    });
  }
  updateSize() {
    let e19 = this.getTargetElement(), t2;
    if (e19) {
      let n3, r2;
      if (vi(e19)) {
        let t3 = e19.getContext(`2d`).getTransform();
        n3 = e19.width / t3.a, r2 = e19.height / t3.d;
      } else {
        let t3 = getComputedStyle(e19);
        n3 = e19.offsetWidth - parseFloat(t3.borderLeftWidth) - parseFloat(t3.paddingLeft) - parseFloat(t3.paddingRight) - parseFloat(t3.borderRightWidth), r2 = e19.offsetHeight - parseFloat(t3.borderTopWidth) - parseFloat(t3.paddingTop) - parseFloat(t3.paddingBottom) - parseFloat(t3.borderBottomWidth);
      }
      !isNaN(n3) && !isNaN(r2) && (t2 = [Math.max(0, n3), Math.max(0, r2)], !Fo(t2) && (e19.offsetWidth || e19.offsetHeight || e19.getClientRects().length) && ut(`No map visible because the map container's width or height are 0.`));
    }
    let n2 = this.getSize();
    !t2 || n2 && C(t2, n2) || (this.updateViewportSize_(t2), this.setSize(t2));
  }
  updateViewportSize_(e19) {
    let t2 = this.getView();
    t2 && t2.setViewportSize(e19);
  }
};
function cd(e19) {
  let t2 = null;
  e19.keyboardEventTarget !== void 0 && (t2 = typeof e19.keyboardEventTarget == `string` ? document.getElementById(e19.keyboardEventTarget) : e19.keyboardEventTarget);
  let n2 = {}, r2 = e19.layers && typeof e19.layers.getLayers == `function` ? e19.layers : new td({layers: e19.layers});
  n2[ou.LAYERGROUP] = r2, n2[ou.TARGET] = e19.target, n2[ou.VIEW] = e19.view instanceof Vl ? e19.view : new Vl();
  let i2;
  e19.controls !== void 0 && (Array.isArray(e19.controls) ? i2 = new de(e19.controls.slice()) : (j(typeof e19.controls.getArray == `function`, "Expected `controls` to be an array or an `ol/Collection.js`"), i2 = e19.controls));
  let a2;
  e19.interactions !== void 0 && (Array.isArray(e19.interactions) ? a2 = new de(e19.interactions.slice()) : (j(typeof e19.interactions.getArray == `function`, "Expected `interactions` to be an array or an `ol/Collection.js`"), a2 = e19.interactions));
  let o2;
  return e19.overlays === void 0 ? o2 = new de() : Array.isArray(e19.overlays) ? o2 = new de(e19.overlays.slice()) : (j(typeof e19.overlays.getArray == `function`, "Expected `overlays` to be an array or an `ol/Collection.js`"), o2 = e19.overlays), {controls: i2, interactions: a2, keyboardEventTarget: t2, overlays: o2, values: n2};
}
var ld = class {
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
function ud(e19, t2, n2, r2, i2) {
  return i2 === void 0 ? new ld(e19, t2, n2, r2) : (i2.minX = e19, i2.maxX = t2, i2.minY = n2, i2.maxY = r2, i2);
}
function dd(e19) {
  return e19 instanceof Image || e19 instanceof HTMLCanvasElement || e19 instanceof HTMLVideoElement || e19 instanceof ImageBitmap ? e19 : null;
}
function fd(e19) {
  return e19 instanceof Uint8Array || e19 instanceof Uint8ClampedArray || e19 instanceof Float32Array || e19 instanceof DataView ? e19 : null;
}
var pd = Error(`disposed`), md = [256, 256], hd = class extends ui {
  constructor(e19) {
    let t2 = z.IDLE;
    super(e19.tileCoord, t2, {transition: e19.transition, interpolate: e19.interpolate}), this.loader_ = e19.loader, this.data_ = null, this.error_ = null, this.size_ = e19.size || null, this.controller_ = e19.controller || null;
  }
  getSize() {
    if (this.size_)
      return this.size_;
    let e19 = dd(this.data_);
    return e19 ? [e19.width, e19.height] : md;
  }
  getData() {
    return this.data_;
  }
  getError() {
    return this.error_;
  }
  load() {
    if (this.state !== z.IDLE && this.state !== z.ERROR)
      return;
    this.state = z.LOADING, this.changed();
    let e19 = this;
    this.loader_().then(function(t2) {
      e19.data_ = t2, e19.state = z.LOADED, e19.changed();
    }).catch(function(t2) {
      e19.error_ = t2, e19.state = z.ERROR, e19.changed();
    });
  }
  disposeInternal() {
    this.controller_ && (this.controller_ = (this.controller_.abort(pd), null)), super.disposeInternal();
  }
}, gd, _d = [];
function vd(e19, t2, n2, r2, i2) {
  e19.beginPath(), e19.moveTo(0, 0), e19.lineTo(t2, n2), e19.lineTo(r2, i2), e19.closePath(), e19.save(), e19.clip(), e19.fillRect(0, 0, Math.max(t2, r2) + 1, Math.max(n2, i2)), e19.restore();
}
function yd(e19, t2) {
  return Math.abs(e19[t2 * 4] - 210) > 2 || Math.abs(e19[t2 * 4 + 3] - 191.25) > 2;
}
function bd() {
  if (gd === void 0) {
    let e19 = B(6, 6, _d);
    e19.globalCompositeOperation = `lighter`, e19.fillStyle = `rgba(210, 0, 0, 0.75)`, vd(e19, 4, 5, 4, 0), vd(e19, 4, 5, 0, 5);
    let t2 = e19.getImageData(0, 0, 3, 3).data;
    gd = yd(t2, 0) || yd(t2, 4) || yd(t2, 8), pi(e19), _d.push(e19.canvas);
  }
  return gd;
}
function xd(e19, t2, n2, r2) {
  let i2 = Rn(n2, t2, e19), a2 = On(t2, r2, n2), o2 = t2.getMetersPerUnit();
  o2 !== void 0 && (a2 *= o2);
  let s2 = e19.getMetersPerUnit();
  s2 !== void 0 && (a2 /= s2);
  let c2 = e19.getExtent();
  if (!c2 || ve(c2, i2)) {
    let t3 = On(e19, a2, i2) / a2;
    isFinite(t3) && t3 > 0 && (a2 /= t3);
  }
  return a2;
}
function Sd(e19, t2, n2, r2) {
  let i2 = xd(e19, t2, Fe(n2), r2);
  return (!isFinite(i2) || i2 <= 0) && je(n2, function(n3) {
    return i2 = xd(e19, t2, n3, r2), isFinite(i2) && i2 > 0;
  }), i2;
}
function Cd(e19, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2) {
  let m2 = B(Math.round(n2 * e19), Math.round(n2 * t2), _d);
  if (d2 || (m2.imageSmoothingEnabled = false), c2.length === 0)
    return m2.canvas;
  m2.scale(n2, n2);
  function h2(e20) {
    return Math.round(e20 * n2) / n2;
  }
  m2.globalCompositeOperation = `lighter`;
  let g2 = N();
  c2.forEach(function(e20, t3, n3) {
    De(g2, e20.extent);
  });
  let _2, v2 = n2 / r2, y2 = (d2 ? 1 : 1 + 2 ** -24) / v2;
  if (!f2 || c2.length !== 1 || l2 !== 0) {
    let e20 = B(Math.round(F(g2) * v2), Math.round(P(g2) * v2), _d);
    if (_2 = e20, d2 || (e20.imageSmoothingEnabled = false), i2 && p2) {
      let t3 = (i2[0] - g2[0]) * v2, n3 = -(i2[3] - g2[3]) * v2, r3 = F(i2) * v2, a3 = P(i2) * v2;
      e20.rect(t3, n3, r3, a3), e20.clip();
    }
    c2.forEach(function(t3, n3, r3) {
      if (t3.image.width > 0 && t3.image.height > 0) {
        if (t3.clipExtent) {
          e20.save();
          let n5 = (t3.clipExtent[0] - g2[0]) * v2, r5 = -(t3.clipExtent[3] - g2[3]) * v2, i4 = F(t3.clipExtent) * v2, a4 = P(t3.clipExtent) * v2;
          e20.rect(d2 ? n5 : Math.round(n5), d2 ? r5 : Math.round(r5), d2 ? i4 : Math.round(n5 + i4) - Math.round(n5), d2 ? a4 : Math.round(r5 + a4) - Math.round(r5)), e20.clip();
        }
        let n4 = (t3.extent[0] - g2[0]) * v2, r4 = -(t3.extent[3] - g2[3]) * v2, i3 = F(t3.extent) * v2, a3 = P(t3.extent) * v2;
        e20.drawImage(t3.image, l2, l2, t3.image.width - 2 * l2, t3.image.height - 2 * l2, d2 ? n4 : Math.round(n4), d2 ? r4 : Math.round(r4), d2 ? i3 : Math.round(n4 + i3) - Math.round(n4), d2 ? a3 : Math.round(r4 + a3) - Math.round(r4)), t3.clipExtent && e20.restore();
      }
    });
  }
  let b2 = Ve(o2);
  return s2.getTriangles().forEach(function(e20, t3, n3) {
    let r3 = e20.source, i3 = e20.target, o3 = r3[0][0], s3 = r3[0][1], l3 = r3[1][0], u3 = r3[1][1], f3 = r3[2][0], p3 = r3[2][1], v3 = h2((i3[0][0] - b2[0]) / a2), x2 = h2(-(i3[0][1] - b2[1]) / a2), S2 = h2((i3[1][0] - b2[0]) / a2), C2 = h2(-(i3[1][1] - b2[1]) / a2), w2 = h2((i3[2][0] - b2[0]) / a2), T2 = h2(-(i3[2][1] - b2[1]) / a2), E2 = o3, D2 = s3;
    o3 = 0, s3 = 0, l3 -= E2, u3 -= D2, f3 -= E2, p3 -= D2;
    let O2 = Qe([[l3, u3, 0, 0, S2 - v3], [f3, p3, 0, 0, w2 - v3], [0, 0, l3, u3, C2 - x2], [0, 0, f3, p3, T2 - x2]]);
    if (!O2)
      return;
    if (m2.save(), m2.beginPath(), bd() || !d2) {
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
      k2 = e21.image, m2.scale(F(t4) / k2.width, -P(t4) / k2.height);
    }
    m2.drawImage(k2, 0, 0), m2.restore();
  }), _2 && (pi(_2), _d.push(_2.canvas)), u2 && (m2.save(), m2.globalCompositeOperation = `source-over`, m2.strokeStyle = `black`, m2.lineWidth = 1, s2.getTriangles().forEach(function(e20, t3, n3) {
    let r3 = e20.target, i3 = (r3[0][0] - b2[0]) / a2, o3 = -(r3[0][1] - b2[1]) / a2, s3 = (r3[1][0] - b2[0]) / a2, c3 = -(r3[1][1] - b2[1]) / a2, l3 = (r3[2][0] - b2[0]) / a2, u3 = -(r3[2][1] - b2[1]) / a2;
    m2.beginPath(), m2.moveTo(s3, c3), m2.lineTo(i3, o3), m2.lineTo(l3, u3), m2.closePath(), m2.stroke();
  }), m2.restore()), m2.canvas;
}
var wd = 10, Td = 0.25, Ed = class {
  constructor(e19, t2, n2, r2, i2, a2, o2) {
    this.sourceProj_ = e19, this.targetProj_ = t2;
    let s2 = {}, c2 = o2 ? Mn((e20) => L(o2, Rn(e20, this.targetProj_, this.sourceProj_))) : Ln(this.targetProj_, this.sourceProj_);
    this.transformInv_ = function(e20) {
      let t3 = e20[0] + `/` + e20[1];
      return s2[t3] || (s2[t3] = c2(e20)), s2[t3];
    }, this.maxSourceExtent_ = r2, this.errorThresholdSquared_ = i2 * i2, this.triangles_ = [], this.wrapsXInSource_ = false, this.canWrapXInSource_ = this.sourceProj_.canWrapX() && !!r2 && !!this.sourceProj_.getExtent() && F(r2) >= F(this.sourceProj_.getExtent()), this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? F(this.sourceProj_.getExtent()) : void 0, this.targetWorldWidth_ = this.targetProj_.getExtent() ? F(this.targetProj_.getExtent()) : void 0;
    let l2 = Ve(n2), u2 = He(n2), d2 = Pe(n2), f2 = Ne(n2), p2 = this.transformInv_(l2), m2 = this.transformInv_(u2), h2 = this.transformInv_(d2), g2 = this.transformInv_(f2), _2 = wd + (a2 ? Math.max(0, Math.ceil(Math.log2(Me(n2) / (a2 * a2 * 256 * 256)))) : 0);
    if (this.addQuad_(l2, u2, d2, f2, p2, m2, h2, g2, _2), this.wrapsXInSource_) {
      let e20 = this.sourceWorldWidth_;
      if (!e20)
        return;
      let t3 = 1 / 0;
      this.triangles_.forEach(function(e21, n3, r3) {
        t3 = Math.min(t3, e21.source[0][0], e21.source[1][0], e21.source[2][0]);
      }), this.triangles_.forEach((n3) => {
        if (Math.max(n3.source[0][0], n3.source[1][0], n3.source[2][0]) - t3 > e20 / 2) {
          let r3 = [[n3.source[0][0], n3.source[0][1]], [n3.source[1][0], n3.source[1][1]], [n3.source[2][0], n3.source[2][1]]];
          r3[0][0] - t3 > e20 / 2 && (r3[0][0] -= e20), r3[1][0] - t3 > e20 / 2 && (r3[1][0] -= e20), r3[2][0] - t3 > e20 / 2 && (r3[2][0] -= e20);
          let i3 = Math.min(r3[0][0], r3[1][0], r3[2][0]);
          Math.max(r3[0][0], r3[1][0], r3[2][0]) - i3 < e20 / 2 && (n3.source = r3);
        }
      });
    }
    s2 = {};
  }
  addTriangle_(e19, t2, n2, r2, i2, a2) {
    this.triangles_.push({source: [r2, i2, a2], target: [e19, t2, n2]});
  }
  addQuad_(e19, t2, n2, r2, i2, a2, o2, s2, c2) {
    let l2 = me([i2, a2, o2, s2]), u2 = this.sourceWorldWidth_, d2 = u2 ? F(l2) / u2 : void 0, f2 = this.sourceProj_.canWrapX() && d2 !== void 0 && d2 > 0.5 && d2 < 1, p2 = false;
    if (c2 > 0 && (this.targetProj_.isGlobal() && this.targetWorldWidth_ && (p2 = F(me([e19, t2, n2, r2])) / this.targetWorldWidth_ > Td || p2), !f2 && this.sourceProj_.isGlobal() && d2 && (p2 = d2 > Td || p2)), !p2 && this.maxSourceExtent_ && isFinite(l2[0]) && isFinite(l2[1]) && isFinite(l2[2]) && isFinite(l2[3]) && !Ue(l2, this.maxSourceExtent_))
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
        if (f2) {
          let e20 = u2;
          a3 = (tt(i2[0], e20) + tt(o2[0], e20)) / 2 - tt(r3[0], e20);
        } else
          a3 = (i2[0] + o2[0]) / 2 - r3[0];
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
    let e19 = N();
    return this.triangles_.forEach(function(t2, n2, r2) {
      let i2 = t2.source;
      Oe(e19, i2[0]), Oe(e19, i2[1]), Oe(e19, i2[2]);
    }), e19;
  }
  getTriangles() {
    return this.triangles_;
  }
}, Dd = 0.5, Od = class extends ui {
  constructor(e19, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2) {
    super(i2, z.IDLE, d2), this.renderEdges_ = u2 !== void 0 && u2, this.pixelRatio_ = o2, this.gutter_ = s2, this.canvas_ = null, this.sourceTileGrid_ = t2, this.targetTileGrid_ = r2, this.wrappedTileCoord_ = a2 || i2, this.sourceTiles_ = [], this.sourcesListenerKeys_ = null, this.sourceZ_ = 0, this.clipExtent_ = e19.canWrapX() && e19.getExtent() || void 0;
    let f2 = r2.getTileCoordExtent(this.wrappedTileCoord_), p2 = this.targetTileGrid_.getExtent(), m2 = this.sourceTileGrid_.getExtent(), h2 = p2 ? ze(f2, p2) : f2;
    if (Me(h2) === 0) {
      this.state = z.EMPTY;
      return;
    }
    let g2 = e19.getExtent();
    g2 && (m2 = m2 ? ze(m2, g2) : g2);
    let _2 = r2.getResolution(this.wrappedTileCoord_[0]), v2 = Sd(e19, n2, h2, _2);
    if (!isFinite(v2) || v2 <= 0) {
      this.state = z.EMPTY;
      return;
    }
    let y2 = l2 === void 0 ? Dd : l2;
    if (this.triangulation_ = new Ed(e19, n2, h2, m2 || void 0, v2 * y2, _2), this.triangulation_.getTriangles().length === 0) {
      this.state = z.EMPTY;
      return;
    }
    this.sourceZ_ = t2.getZForResolution(v2);
    let b2 = this.triangulation_.calculateSourceExtent();
    if (m2 && (e19.canWrapX() ? (b2[1] = I(b2[1], m2[1], m2[3]), b2[3] = I(b2[3], m2[1], m2[3])) : b2 = ze(b2, m2)), !Me(b2))
      this.state = z.EMPTY;
    else {
      let n3 = 0, r3 = 0;
      e19.canWrapX() && (n3 = F(g2), r3 = Math.floor((b2[0] - g2[0]) / n3)), Je(b2.slice(), e19, true).forEach((e20) => {
        let i3 = t2.getTileRangeForExtentAndZ(e20, this.sourceZ_);
        for (let e21 = i3.minX; e21 <= i3.maxX; e21++)
          for (let t3 = i3.minY; t3 <= i3.maxY; t3++) {
            let i4 = r3 * n3;
            this.sourceTiles_.push({getTile: () => c2(this.sourceZ_, e21, t3, o2), offset: i4});
          }
        ++r3;
      }), this.sourceTiles_.length === 0 && (this.state = z.EMPTY);
    }
  }
  getImage() {
    return this.canvas_;
  }
  reproject_() {
    let e19 = [];
    if (this.sourceTiles_.forEach((t2) => {
      let n2 = t2.tile;
      if (n2 && n2.getState() == z.LOADED) {
        let r2 = this.sourceTileGrid_.getTileCoordExtent(n2.tileCoord);
        r2[0] += t2.offset, r2[2] += t2.offset;
        let i2 = this.clipExtent_?.slice();
        i2 && (i2[0] += t2.offset, i2[2] += t2.offset);
        let a2 = n2.getImage();
        if (!a2)
          return;
        e19.push({extent: r2, clipExtent: i2, image: a2});
      }
    }), this.sourceTiles_.length = 0, e19.length === 0)
      this.state = z.ERROR;
    else {
      let t2 = this.wrappedTileCoord_[0], n2 = this.targetTileGrid_.getTileSize(t2), r2 = typeof n2 == `number` ? n2 : n2[0], i2 = typeof n2 == `number` ? n2 : n2[1], a2 = this.targetTileGrid_.getResolution(t2), o2 = this.sourceTileGrid_.getResolution(this.sourceZ_), s2 = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);
      this.canvas_ = Cd(r2, i2, this.pixelRatio_, o2, this.sourceTileGrid_.getExtent() ?? s2, a2, s2, this.triangulation_, e19, this.gutter_, this.renderEdges_, this.interpolate), this.state = z.LOADED;
    }
    this.changed();
  }
  load() {
    for (let e19 of this.sourceTiles_)
      e19.tile = e19.getTile();
    if (this.state == z.IDLE) {
      this.state = z.LOADING, this.changed();
      let e19 = 0;
      this.sourcesListenerKeys_ = [], this.sourceTiles_.forEach((t2) => {
        let n2 = t2.tile;
        if (!n2)
          return;
        let r2 = n2.getState();
        if (r2 == z.IDLE || r2 == z.LOADING) {
          e19++;
          let t3 = f(n2, h.CHANGE, () => {
            let r3 = n2.getState();
            (r3 == z.LOADED || r3 == z.ERROR || r3 == z.EMPTY) && (m(t3), e19--, e19 === 0 && (this.unlistenSources_(), this.reproject_()));
          });
          this.sourcesListenerKeys_.push(t3);
        }
      }), e19 === 0 ? setTimeout(this.reproject_.bind(this), 0) : this.sourceTiles_.forEach(function(e20) {
        let t2 = e20.tile;
        t2 && t2.getState() == z.IDLE && t2.load();
      });
    }
  }
  unlistenSources_() {
    this.sourcesListenerKeys_ && (this.sourcesListenerKeys_ = (this.sourcesListenerKeys_.forEach(m), null));
  }
  release() {
    this.canvas_ && (this.canvas_ = (pi(this.canvas_.getContext(`2d`)), _d.push(this.canvas_), null)), this.sourceTiles_.length = 0, super.release();
  }
}, kd = class {
  constructor(e19) {
    this.highWaterMark = e19 === void 0 ? 2048 : e19, this.count_ = 0, this.entries_ = {}, this.oldest_ = null, this.newest_ = null;
  }
  deleteOldest() {
    let e19 = this.pop();
    e19 instanceof g && e19.dispose();
  }
  canExpireCache() {
    return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
  }
  expireCache(e19) {
    for (; this.canExpireCache(); )
      this.deleteOldest();
  }
  clear() {
    for (; this.oldest_; )
      this.deleteOldest();
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
    return j(n2 !== void 0, `Tried to get a value for a key that does not exist in the cache`), n2 === this.newest_ || (n2 === this.oldest_ ? (this.oldest_ = this.oldest_.newer, this.oldest_.older = null) : (n2.newer.older = n2.older, n2.older.newer = n2.newer), n2.newer = null, n2.older = this.newest_, this.newest_.newer = n2, this.newest_ = n2), n2.value_;
  }
  remove(e19) {
    let t2 = this.entries_[e19];
    return j(t2 !== void 0, `Tried to get a value for a key that does not exist in the cache`), t2 === this.newest_ ? (this.newest_ = t2.older, this.newest_ && (this.newest_.newer = null)) : t2 === this.oldest_ ? (this.oldest_ = t2.newer, this.oldest_ && (this.oldest_.older = null)) : (t2.newer.older = t2.older, t2.older.newer = t2.newer), delete this.entries_[e19], --this.count_, t2.value_;
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
    j(!(e19 in this.entries_), `Tried to set a value for a key that is used already`);
    let n2 = {key_: e19, newer: null, older: this.newest_, value_: t2};
    this.newest_ ? this.newest_.newer = n2 : this.oldest_ = n2, this.newest_ = n2, this.entries_[e19] = n2, ++this.count_;
  }
  setSize(e19) {
    this.highWaterMark = e19;
  }
};
function Ad(e19, t2, n2, r2) {
  return r2 === void 0 ? [e19, t2, n2] : (r2[0] = e19, r2[1] = t2, r2[2] = n2, r2);
}
function jd(e19, t2, n2) {
  return e19 + `/` + t2 + `/` + n2;
}
function Md(e19, t2, n2, r2, i2) {
  return `${D(e19)},${t2},${jd(n2, r2, i2)}`;
}
function Nd(e19) {
  return Pd(e19[0], e19[1], e19[2]);
}
function Pd(e19, t2, n2) {
  return (t2 << e19) + n2;
}
function Fd(e19, t2) {
  let n2 = e19[0], r2 = e19[1], i2 = e19[2];
  if (t2.getMinZoom() > n2 || n2 > t2.getMaxZoom())
    return false;
  let a2 = t2.getFullTileRange(n2);
  return !a2 || a2.containsXY(r2, i2);
}
function Id(e19, t2, n2) {
  if (!(n2 in e19))
    return e19[n2] = new Set([t2]), true;
  let r2 = e19[n2], i2 = r2.has(t2);
  return i2 || r2.add(t2), !i2;
}
function Ld(e19, t2, n2) {
  let r2 = e19[n2];
  return r2 ? r2.delete(t2) : false;
}
function Rd(e19, t2) {
  let n2 = e19.layerStatesArray[e19.layerIndex];
  if (n2.extent && (t2 = ze(t2, Wn(n2.extent, e19.viewState.projection))), !n2.layer)
    return t2;
  let r2 = n2.layer.getRenderSource();
  if (!r2.getWrapX()) {
    let n3 = r2.getTileGridForProjection(e19.viewState.projection).getExtent();
    n3 && (t2 = ze(t2, n3));
  }
  return t2;
}
var zd = class extends Ks {
  constructor(e19, t2) {
    super(e19), t2 || (t2 = {}), this.extentChanged = true, this.renderComplete = false, this.renderedExtent_ = null, this.renderedPixelRatio, this.renderedProjection = null, this.renderedTiles = [], this.renderedSourceRevision_, this.tempExtent = N(), this.tempTileRange_ = new ld(0, 0, 0, 0), this.tempTileCoord_ = Ad(0, 0, 0);
    let n2 = t2.cacheSize === void 0 ? 512 : t2.cacheSize;
    this.tileCache_ = new kd(n2), this.sourceTileCache_ = null, this.layerExtent = null, this.maxStaleKeys = n2 * 0.5;
  }
  getTileCache() {
    return this.tileCache_;
  }
  getSourceTileCache() {
    return this.sourceTileCache_ || (this.sourceTileCache_ = new kd(512)), this.sourceTileCache_;
  }
  getOrCreateTile(e19, t2, n2, r2) {
    let i2 = this.tileCache_, a2 = this.getLayer().getSource();
    if (!a2)
      return null;
    let o2 = Md(a2, a2.getKey(), e19, t2, n2), s2;
    if (i2.containsKey(o2)) {
      if (s2 = i2.get(o2), !s2)
        return null;
    } else {
      let c2 = r2.viewState.projection, l2 = a2.getProjection();
      if (s2 = a2.getTile(e19, t2, n2, r2.pixelRatio, c2, !l2 || Pn(l2, c2) ? void 0 : this.getSourceTileCache()), !s2)
        return null;
      i2.set(o2, s2);
    }
    return s2;
  }
  getTile(e19, t2, n2, r2) {
    return this.getOrCreateTile(e19, t2, n2, r2) || null;
  }
  getData(e19) {
    let t2 = this.frameState;
    if (!t2)
      return null;
    let n2 = this.getLayer(), r2 = L(t2.pixelToCoordinateTransform, e19.slice()), i2 = n2.getExtent();
    if (i2 && !ve(i2, r2))
      return null;
    let a2 = t2.viewState, o2 = n2.getRenderSource();
    if (!o2)
      return null;
    let s2 = o2.getTileGridForProjection(a2.projection), c2 = o2.getTilePixelRatio(t2.pixelRatio);
    for (let e20 = s2.getZForResolution(a2.resolution); e20 >= s2.getMinZoom(); --e20) {
      let n3 = s2.getTileCoordForCoordAndZ(r2, e20), i3 = this.getTile(e20, n3[1], n3[2], t2);
      if (!i3 || i3.getState() !== z.LOADED)
        continue;
      let l2 = s2.getOrigin(e20), u2 = Lo(s2.getTileSize(e20)), d2 = s2.getResolution(e20), f2 = null;
      if (i3 instanceof yi || i3 instanceof Od)
        f2 = i3.getImage();
      else if (i3 instanceof hd) {
        let e21 = i3.getData();
        e21 && (f2 = dd(e21));
      }
      if (!f2)
        continue;
      let p2 = Math.floor(c2 * ((r2[0] - l2[0]) / d2 - n3[1] * u2[0])), m2 = Math.floor(c2 * ((l2[1] - r2[1]) / d2 - n3[2] * u2[1])), h2 = Math.round(c2 * o2.getGutterForProjection(a2.projection));
      return this.getImageData(f2, p2 + h2, m2 + h2);
    }
    return null;
  }
  readData(e19) {
    let t2 = this.getLayer().getRenderSource();
    if (!t2)
      return null;
    let n2 = e19.viewState, r2 = n2.projection;
    if (t2.getGutterForProjection(r2))
      throw Error(`readData() does not support sources with a gutter`);
    let i2 = t2.getTileGridForProjection(r2), a2 = n2.resolution, o2 = e19.extent, s2 = i2.getZForResolution(a2), c2 = {};
    this.enqueueTiles(e19, o2, s2, c2, 0);
    let l2 = c2[s2];
    if (!l2)
      return null;
    let u2 = [], d2 = true;
    if (l2.forEach((e20) => {
      let t3 = e20, n3 = t3.getState();
      n3 === z.LOADED ? u2.push(t3) : n3 !== z.ERROR && n3 !== z.EMPTY && (d2 = false);
    }), !d2 || u2.length === 0)
      return null;
    let f2 = e19.size[0], p2 = e19.size[1], m2 = u2[0], h2 = fd(m2.getData());
    if (!h2 || h2 instanceof DataView)
      throw Error(`ol/renderer/canvas/TileLayer#readData only supports typed array tile data`);
    let g2 = m2.getSize(), _2 = Math.round(h2.length / (g2[0] * g2[1])), v2 = h2.constructor, y2 = new v2(f2 * p2 * _2);
    for (let e20 of u2) {
      let t3 = i2.getTileCoordExtent(e20.tileCoord, this.tempExtent), n3 = e20.getSize(), r3 = fd(e20.getData()), s3 = (t3[0] - o2[0]) / a2 - 0.5, c3 = (o2[3] - t3[3]) / a2 - 0.5, l3 = F(t3) / a2, u3 = P(t3) / a2, d3 = n3[0] / l3, m3 = n3[1] / u3, h3 = Math.max(0, Math.ceil(s3)), g3 = Math.min(f2, Math.ceil(s3 + l3)), v3 = Math.max(0, Math.ceil(c3)), b2 = Math.min(p2, Math.ceil(c3 + u3));
      for (let e21 = v3; e21 < b2; ++e21) {
        let t4 = Math.min(Math.floor((e21 - c3) * m3), n3[1] - 1);
        for (let i3 = h3; i3 < g3; ++i3) {
          let a3 = Math.min(Math.floor((i3 - s3) * d3), n3[0] - 1), o3 = (t4 * n3[0] + a3) * _2, c4 = (e21 * f2 + i3) * _2;
          for (let e22 = 0; e22 < _2; ++e22)
            y2[c4 + e22] = r3[o3 + e22];
        }
      }
    }
    return this.updateCacheSize(l2.size), this.tileCache_.expireCache(), this.sourceTileCache_?.expireCache(), {data: y2, width: f2, height: p2, bandCount: _2};
  }
  prepareFrame(e19) {
    this.renderedProjection ? e19.viewState.projection !== this.renderedProjection && (this.tileCache_.clear(), this.renderedProjection = e19.viewState.projection) : this.renderedProjection = e19.viewState.projection;
    let t2 = this.getLayer().getSource();
    if (!t2)
      return false;
    let n2 = t2.getRevision();
    return this.renderedSourceRevision_ ? this.renderedSourceRevision_ !== n2 && (this.renderedSourceRevision_ = n2, this.renderedSourceKey_ === t2.getKey() && (this.tileCache_.clear(), this.sourceTileCache_?.clear())) : this.renderedSourceRevision_ = n2, true;
  }
  enqueueTilesForNextExtent() {
    return true;
  }
  enqueueTiles(e19, t2, n2, r2, i2) {
    let a2 = e19.viewState, o2 = this.getLayer(), s2 = o2.getRenderSource();
    if (!s2)
      return;
    let c2 = s2.getTileGridForProjection(a2.projection), l2 = D(s2);
    l2 in e19.wantedTiles || (e19.wantedTiles[l2] = {});
    let u2 = e19.wantedTiles[l2], d2 = o2.getMapInternal(), f2 = Math.max(n2 - i2, c2.getMinZoom(), c2.getZForResolution(Math.min(o2.getMaxResolution(), d2 ? d2.getView().getResolutionForZoom(Math.max(o2.getMinZoom(), 0)) : c2.getResolution(0)), s2.zDirection)), p2 = a2.rotation, m2 = p2 ? Re(a2.center, a2.resolution, p2, e19.size) : void 0;
    for (let i3 = n2; i3 >= f2; --i3) {
      let n3 = c2.getTileRangeForExtentAndZ(t2, i3, this.tempTileRange_), a3 = c2.getResolution(i3);
      for (let t3 = n3.minX; t3 <= n3.maxX; ++t3)
        for (let o3 = n3.minY; o3 <= n3.maxY; ++o3) {
          if (p2 && m2 && !c2.tileCoordIntersectsViewport([i3, t3, o3], m2))
            continue;
          let n4 = this.getTile(i3, t3, o3, e19);
          if (!n4 || !Id(r2, n4, i3))
            continue;
          let s3 = n4.getKey();
          if (u2[s3] = true, n4.getState() === z.IDLE && !e19.tileQueue.isKeyQueued(s3)) {
            let r3 = Ad(i3, t3, o3, this.tempTileCoord_);
            e19.tileQueue.enqueue([n4, l2, c2.getTileCoordCenter(r3), a3]);
          }
        }
    }
  }
  findStaleTile_(e19, t2) {
    let n2 = this.tileCache_, r2 = e19[0], i2 = e19[1], a2 = e19[2], o2 = this.getStaleKeys(), s2 = this.getLayer().getSource();
    if (!s2)
      return false;
    for (let e20 = 0; e20 < o2.length; ++e20) {
      let c2 = Md(s2, o2[e20], r2, i2, a2);
      if (n2.containsKey(c2)) {
        let e21 = n2.peek(c2);
        if (e21 && e21.getState() === z.LOADED)
          return e21.endTransition(D(this)), Id(t2, e21, r2), true;
      }
    }
    return false;
  }
  findAltTiles_(e19, t2, n2, r2) {
    let i2 = e19.getTileRangeForTileCoordAndZ(t2, n2, this.tempTileRange_);
    if (!i2)
      return false;
    let a2 = true, o2 = this.tileCache_, s2 = this.getLayer().getRenderSource();
    if (!s2)
      return false;
    let c2 = s2.getKey();
    for (let e20 = i2.minX; e20 <= i2.maxX; ++e20)
      for (let t3 = i2.minY; t3 <= i2.maxY; ++t3) {
        let i3 = Md(s2, c2, n2, e20, t3), l2 = false;
        if (o2.containsKey(i3)) {
          let e21 = o2.peek(i3);
          e21 && e21.getState() === z.LOADED && (Id(r2, e21, n2), l2 = true);
        }
        l2 || (a2 = false);
      }
    return a2;
  }
  renderFrame(e19, t2) {
    this.renderComplete = true;
    let n2 = e19.layerStatesArray[e19.layerIndex], r2 = e19.viewState, i2 = r2.projection, a2 = r2.resolution, o2 = r2.center, s2 = e19.pixelRatio, c2 = this.getLayer(), l2 = c2.getSource();
    if (!l2)
      return this.getContainerElement();
    let u2 = l2.getTileGridForProjection(i2), d2 = u2.getZForResolution(a2, l2.zDirection), f2 = u2.getResolution(d2);
    this.updateStaleKeys(l2.getKey());
    let p2 = e19.extent, m2 = l2.getTilePixelRatio(s2);
    this.prepareContainer(e19, t2);
    let h2 = this.getCanvasContext().canvas.width, g2 = this.getCanvasContext().canvas.height;
    this.layerExtent = n2.extent ? Wn(n2.extent, i2) : null, this.layerExtent && (p2 = ze(p2, this.layerExtent));
    let _2 = f2 * h2 / 2 / m2, y2 = f2 * g2 / 2 / m2, b2 = [o2[0] - _2, o2[1] - y2, o2[0] + _2, o2[1] + y2], x2 = {};
    this.renderedTiles.length = 0;
    let S2 = c2.getPreload();
    if (e19.nextExtent && this.enqueueTilesForNextExtent()) {
      let t3 = u2.getZForResolution(r2.nextResolution ?? a2, l2.zDirection), n3 = Rd(e19, e19.nextExtent);
      this.enqueueTiles(e19, n3, t3, x2, S2);
    }
    let C2 = Rd(e19, p2);
    if (this.enqueueTiles(e19, C2, d2, x2, 0), S2 > 0 && setTimeout(() => {
      this.enqueueTiles(e19, C2, d2 - 1, x2, S2 - 1);
    }, 0), !(d2 in x2))
      return this.getContainerElement();
    let w2 = D(this), T2 = e19.time;
    for (let t3 of x2[d2]) {
      let n3 = t3.getState();
      if (n3 === z.EMPTY)
        continue;
      let r3 = t3.tileCoord;
      if (n3 === z.LOADED && t3.getAlpha(w2, T2) === 1) {
        t3.endTransition(w2);
        continue;
      }
      if (n3 !== z.ERROR && (this.renderComplete = false), this.findStaleTile_(r3, x2)) {
        Ld(x2, t3, d2), e19.animate = true;
        continue;
      }
      if (this.findAltTiles_(u2, r3, d2 + 1, x2))
        continue;
      let i3 = u2.getMinZoom();
      for (let e20 = d2 - 1; e20 >= i3 && !this.findAltTiles_(u2, r3, e20, x2); --e20)
        ;
    }
    let E2 = f2 / a2 * s2 / m2, O2 = this.getRenderContext(e19);
    Xn(this.tempTransform, h2 / 2, g2 / 2, E2, E2, 0, -h2 / 2, -g2 / 2), this.layerExtent && this.clipUnrotated(O2, e19, this.layerExtent), l2.getInterpolate() || (O2.imageSmoothingEnabled = false), this.preRender(O2, e19);
    let k2 = Object.keys(x2).map(Number);
    k2.sort(v);
    let A2 = [], ee2 = [], te2 = [];
    for (let t3 = k2.length - 1; t3 >= 0; --t3) {
      let n3 = k2[t3], r3 = l2.getTilePixelSize(n3, s2, i2), a3 = u2.getResolution(n3) / f2, o3 = r3[0] * a3 * E2, c3 = r3[1] * a3 * E2, p3 = u2.getTileCoordForCoordAndZ(Ve(b2), n3), h3 = u2.getTileCoordExtent(p3), g3 = L(this.tempTransform, [m2 * (h3[0] - b2[0]) / f2, m2 * (b2[3] - h3[3]) / f2]), _3 = m2 * l2.getGutterForProjection(i2);
      for (let t4 of x2[n3]) {
        if (t4.getState() !== z.LOADED)
          continue;
        let r4 = t4.tileCoord, i3 = p3[1] - r4[1], a4 = Math.round(g3[0] - (i3 - 1) * o3), s3 = p3[2] - r4[2], u3 = Math.round(g3[1] - (s3 - 1) * c3), f3 = Math.round(g3[0] - i3 * o3), m3 = Math.round(g3[1] - s3 * c3), h4 = a4 - f3, v2 = u3 - m3, y3 = n3 === d2;
        if (y3 && t4.inTransition(w2)) {
          te2.push({tile: t4, x: f3, y: m3, w: h4, h: v2, gutter: _3}), this.renderedTiles.unshift(t4), this.updateUsedTiles(e19.usedTiles, l2, t4);
          continue;
        }
        let b3 = [f3, m3, f3 + h4, m3 + v2], x3 = [];
        for (let e20 = 0, t5 = A2.length; e20 < t5; ++e20)
          n3 < ee2[e20] && Ue(b3, A2[e20]) && x3.push(A2[e20]);
        let S3;
        x3.length > 0 && (S3 = Ye(b3, x3)), A2.push(b3), ee2.push(n3), this.drawTile(t4, e19, f3, m3, h4, v2, _3, y3, S3), this.renderedTiles.unshift(t4), this.updateUsedTiles(e19.usedTiles, l2, t4);
      }
    }
    for (let t3 = 0, n3 = te2.length; t3 < n3; ++t3) {
      let {tile: n4, x: r3, y: i3, w: a3, h: o3, gutter: s3} = te2[t3];
      this.drawTile(n4, e19, r3, i3, a3, o3, s3, true, void 0);
    }
    return this.renderedResolution = f2, this.extentChanged = !this.renderedExtent_ || !Ee(this.renderedExtent_, b2), this.renderedExtent_ = b2, this.renderedPixelRatio = s2, this.postRender(this.getCanvasContext(), e19), this.layerExtent && O2.restore(), O2.imageSmoothingEnabled = true, this.renderComplete && e19.postRenderFunctions.push((e20, t3) => {
      let n3 = D(l2), r3 = t3.wantedTiles[n3], i3 = r3 ? Object.keys(r3).length : 0;
      this.updateCacheSize(i3), this.tileCache_.expireCache(), this.sourceTileCache_?.expireCache();
    }), this.getContainerElement();
  }
  updateCacheSize(e19) {
    this.tileCache_.highWaterMark = Math.max(this.tileCache_.highWaterMark, e19 * 2);
  }
  drawTile(e19, t2, n2, r2, i2, a2, o2, s2, c2) {
    let l2;
    if (e19 instanceof hd) {
      let t3 = e19.getData();
      if (!t3)
        return;
      if (l2 = dd(t3), !l2)
        throw Error(`Rendering array data is not yet supported`);
    } else
      l2 = this.getTileImage(e19);
    if (!l2)
      return;
    let u2 = this.getRenderContext(t2), d2 = D(this), f2 = t2.layerStatesArray[t2.layerIndex], p2 = f2.opacity * (s2 ? e19.getAlpha(d2, t2.time) : 1), m2 = p2 !== u2.globalAlpha;
    m2 && (u2.save(), u2.globalAlpha = p2);
    let h2 = l2.width - 2 * o2, g2 = l2.height - 2 * o2;
    if (c2) {
      let e20 = h2 / i2, t3 = g2 / a2;
      for (let i3 = 0, a3 = c2.length; i3 < a3; ++i3) {
        let a4 = c2[i3], s3 = a4[0], d3 = a4[1], f3 = a4[2] - a4[0], p3 = a4[3] - a4[1];
        u2.drawImage(l2, o2 + (s3 - n2) * e20, o2 + (d3 - r2) * t3, f3 * e20, p3 * t3, s3, d3, f3, p3);
      }
    } else
      u2.drawImage(l2, o2, o2, h2, g2, n2, r2, i2, a2);
    m2 && u2.restore(), p2 === f2.opacity ? s2 && e19.endTransition(d2) : t2.animate = true;
  }
  getImage() {
    let e19 = this.getCanvasContext();
    return e19 ? e19.canvas : null;
  }
  getTileImage(e19) {
    return e19.getImage() ?? null;
  }
  updateUsedTiles(e19, t2, n2) {
    let r2 = D(t2);
    r2 in e19 || (e19[r2] = {}), e19[r2][n2.getKey()] = true;
  }
}, Bd = {PRELOAD: `preload`, USE_INTERIM_TILES_ON_ERROR: `useInterimTilesOnError`}, Vd = class extends Yl {
  constructor(e19) {
    e19 || (e19 = {});
    let t2 = Object.assign({}, e19), n2 = e19.cacheSize;
    delete e19.cacheSize, delete t2.preload, delete t2.useInterimTilesOnError, super(t2), this.on, this.once, this.un, this.cacheSize_ = n2, this.setPreload(e19.preload === void 0 ? 0 : e19.preload), this.setUseInterimTilesOnError(e19.useInterimTilesOnError === void 0 || e19.useInterimTilesOnError);
  }
  getCacheSize() {
    return this.cacheSize_;
  }
  getPreload() {
    return this.get(Bd.PRELOAD);
  }
  setPreload(e19) {
    this.set(Bd.PRELOAD, e19);
  }
  getUseInterimTilesOnError() {
    return this.get(Bd.USE_INTERIM_TILES_ON_ERROR);
  }
  setUseInterimTilesOnError(e19) {
    this.set(Bd.USE_INTERIM_TILES_ON_ERROR, e19);
  }
  getData(e19) {
    return super.getData(e19);
  }
}, Hd = class extends Vd {
  constructor(e19) {
    super(e19);
  }
  createRenderer() {
    return new zd(this, {cacheSize: this.getCacheSize()});
  }
}, Ud = /\{z\}/g, Wd = /\{x\}/g, Gd = /\{y\}/g, Kd = /\{-y\}/g;
function qd(e19, t2, n2, r2, i2) {
  return e19.replace(Ud, t2.toString()).replace(Wd, n2.toString()).replace(Gd, r2.toString()).replace(Kd, function() {
    if (i2 === void 0)
      throw Error(`If the URL template has a {-y} placeholder, the grid extent must be known`);
    return (i2 - r2).toString();
  });
}
function Jd(e19) {
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
var Yd = [0, 0, 0], Xd = 5, Zd = class {
  constructor(e19) {
    let t2 = e19.minZoom, n2 = e19.resolutions;
    t2 === void 0 && n2 && (t2 = n2.findIndex((e20) => e20 !== void 0)), this.minZoom = t2 === void 0 ? 0 : t2, this.resolutions_ = n2, j(w(this.resolutions_, (e20, t3) => t3 - e20, true), "`resolutions` must be sorted in descending order");
    let r2;
    if (!e19.origins) {
      for (let e20 = 0, t3 = this.resolutions_.length - 1; e20 < t3; ++e20)
        if (!r2)
          r2 = this.resolutions_[e20] / this.resolutions_[e20 + 1];
        else if (this.resolutions_[e20] / this.resolutions_[e20 + 1] !== r2) {
          r2 = void 0;
          break;
        }
    }
    this.zoomFactor_ = r2, this.maxZoom = this.resolutions_.length - 1, this.origin_ = e19.origin === void 0 ? null : e19.origin, this.origins_ = null, e19.origins !== void 0 && (this.origins_ = e19.origins, j(this.origins_.length == this.resolutions_.length, "Number of `origins` and `resolutions` must be equal"));
    let i2 = e19.extent;
    i2 !== void 0 && !this.origin_ && !this.origins_ && (this.origin_ = Ve(i2)), j(!this.origin_ && this.origins_ || this.origin_ && !this.origins_, "Either `origin` or `origins` must be configured, never both"), this.tileSizes_ = null, e19.tileSizes !== void 0 && (this.tileSizes_ = e19.tileSizes, j(this.tileSizes_.length == this.resolutions_.length, "Number of `tileSizes` and `resolutions` must be equal")), this.tileSize_ = e19.tileSize === void 0 ? this.tileSizes_ ? null : 256 : e19.tileSize, j(!this.tileSize_ && this.tileSizes_ || this.tileSize_ && !this.tileSizes_, "Either `tileSize` or `tileSizes` must be configured, never both"), this.extent_ = i2 === void 0 ? null : i2, this.fullTileRanges_ = null, this.tmpSize_ = [0, 0], this.tmpExtent_ = [0, 0, 0, 0], e19.tileRanges === void 0 ? e19.sizes === void 0 ? i2 && this.calculateTileRanges_(i2) : this.fullTileRanges_ = e19.sizes.map((e20, t3) => {
      let n3 = new ld(Math.min(0, e20[0]), Math.max(e20[0] - 1, -1), Math.min(0, e20[1]), Math.max(e20[1] - 1, -1));
      if (i2) {
        let e21 = this.getTileRangeForExtentAndZ(i2, t3);
        n3.minX = Math.max(e21.minX, n3.minX), n3.maxX = Math.min(e21.maxX, n3.maxX), n3.minY = Math.max(e21.minY, n3.minY), n3.maxY = Math.min(e21.maxY, n3.maxY);
      }
      return n3;
    }) : this.fullTileRanges_ = e19.tileRanges;
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
      if (a2 !== void 0 && o2 !== void 0 ? (a2 = Math.floor(a2 / 2), o2 = Math.floor(o2 / 2), i2 = ud(a2, a2, o2, o2, n2)) : i2 = this.getTileRangeForExtentAndZ(s2, c2, n2), t2(c2, i2))
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
    return this.origin_ ? this.origin_ : this.origins_ ? this.origins_[e19] : [0, 0];
  }
  getOrigins() {
    return this.origins_;
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
        return ud(n3, n3 + 1, r3, r3 + 1, t2);
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
      return ud(i2, i2, a2, a2, n2);
    if (this.zoomFactor_) {
      let e20 = this.zoomFactor_ ** +(t2 - r2), o3 = Math.floor(i2 * e20), s2 = Math.floor(a2 * e20);
      return t2 < r2 ? ud(o3, o3, s2, s2, n2) : ud(o3, Math.floor(e20 * (i2 + 1)) - 1, s2, Math.floor(e20 * (a2 + 1)) - 1, n2);
    }
    let o2 = this.getTileCoordExtent(e19, this.tmpExtent_);
    return this.getTileRangeForExtentAndZ(o2, t2, n2);
  }
  getTileRangeForExtentAndZ(e19, t2, n2) {
    this.getTileCoordForXYAndZ_(e19[0], e19[3], t2, false, Yd);
    let r2 = Yd[1], i2 = Yd[2];
    this.getTileCoordForXYAndZ_(e19[2], e19[1], t2, true, Yd);
    let a2 = Yd[1], o2 = Yd[2];
    return ud(r2, a2, i2, o2, n2);
  }
  getTileCoordCenter(e19) {
    let t2 = this.getOrigin(e19[0]), n2 = this.getResolution(e19[0]), r2 = Lo(this.getTileSize(e19[0]), this.tmpSize_);
    return [t2[0] + (e19[1] + 0.5) * r2[0] * n2, t2[1] - (e19[2] + 0.5) * r2[1] * n2];
  }
  getTileCoordExtent(e19, t2) {
    let n2 = this.getOrigin(e19[0]), r2 = this.getResolution(e19[0]), i2 = Lo(this.getTileSize(e19[0]), this.tmpSize_), a2 = n2[0] + e19[1] * i2[0] * r2, o2 = n2[1] - (e19[2] + 1) * i2[1] * r2;
    return Se(a2, o2, a2 + i2[0] * r2, o2 + i2[1] * r2, t2);
  }
  getTileCoordForCoordAndResolution(e19, t2, n2) {
    return this.getTileCoordForXYAndResolution_(e19[0], e19[1], t2, false, n2);
  }
  getTileCoordForXYAndResolution_(e19, t2, n2, r2, i2) {
    let a2 = this.getZForResolution(n2), o2 = n2 / this.getResolution(a2), s2 = this.getOrigin(a2), c2 = Lo(this.getTileSize(a2), this.tmpSize_), l2 = o2 * (e19 - s2[0]) / n2 / c2[0], u2 = o2 * (s2[1] - t2) / n2 / c2[1];
    return r2 ? (l2 = at(l2, Xd) - 1, u2 = at(u2, Xd) - 1) : (l2 = it(l2, Xd), u2 = it(u2, Xd)), Ad(a2, l2, u2, i2);
  }
  getTileCoordForXYAndZ_(e19, t2, n2, r2, i2) {
    let a2 = this.getOrigin(n2), o2 = this.getResolution(n2), s2 = Lo(this.getTileSize(n2), this.tmpSize_), c2 = (e19 - a2[0]) / o2 / s2[0], l2 = (a2[1] - t2) / o2 / s2[1];
    return r2 ? (c2 = at(c2, Xd) - 1, l2 = at(l2, Xd) - 1) : (c2 = it(c2, Xd), l2 = it(l2, Xd)), Ad(n2, c2, l2, i2);
  }
  getTileCoordForCoordAndZ(e19, t2, n2) {
    return this.getTileCoordForXYAndZ_(e19[0], e19[1], t2, false, n2);
  }
  getTileCoordResolution(e19) {
    return this.resolutions_[e19[0]];
  }
  getTileSize(e19) {
    return this.tileSize_ ? this.tileSize_ : this.tileSizes_ ? this.tileSizes_[e19] : 256;
  }
  getFullTileRange(e19) {
    return this.fullTileRanges_ ? this.fullTileRanges_[e19] : this.extent_ ? this.getTileRangeForExtentAndZ(this.extent_, e19) : null;
  }
  getZForResolution(e19, t2) {
    return I(b(this.resolutions_, e19, t2 || 0), this.minZoom, this.maxZoom);
  }
  tileCoordIntersectsViewport(e19, t2) {
    return Mr(t2, 0, t2.length, 2, this.getTileCoordExtent(e19));
  }
  calculateTileRanges_(e19) {
    let t2 = this.resolutions_.length, n2 = Array(t2);
    for (let r2 = this.minZoom; r2 < t2; ++r2)
      n2[r2] = this.getTileRangeForExtentAndZ(e19, r2);
    this.fullTileRanges_ = n2;
  }
};
function Qd(e19) {
  let t2 = e19.getDefaultTileGrid();
  return t2 || (t2 = rf(e19), e19.setDefaultTileGrid(t2)), t2;
}
function $d(e19, t2, n2) {
  let r2 = t2[0], i2 = e19.getTileCoordCenter(t2), a2 = af(n2);
  if (!ve(a2, i2)) {
    let t3 = F(a2), n3 = Math.ceil((a2[0] - i2[0]) / t3);
    return i2[0] += t3 * n3, e19.getTileCoordForCoordAndZ(i2, r2);
  }
  return t2;
}
function ef(e19, t2, n2, r2) {
  r2 = r2 === void 0 ? `top-left` : r2;
  let i2 = nf(e19, t2, n2);
  return new Zd({extent: e19, origin: Ie(e19, r2), resolutions: i2, tileSize: n2});
}
function tf(e19) {
  let t2 = e19 || {}, n2 = t2.extent || Dn(`EPSG:3857`)?.getExtent();
  if (!n2)
    throw Error(`Unable to determine extent for XYZ tile grid`);
  return new Zd({extent: n2, minZoom: t2.minZoom, tileSize: t2.tileSize, resolutions: nf(n2, t2.maxZoom, t2.tileSize, t2.maxResolution)});
}
function nf(e19, t2, n2, r2) {
  t2 = t2 === void 0 ? 42 : t2, n2 = Lo(n2 === void 0 ? 256 : n2);
  let i2 = P(e19), a2 = F(e19);
  r2 = r2 !== void 0 && r2 > 0 ? r2 : Math.max(a2 / n2[0], i2 / n2[1]);
  let o2 = t2 + 1, s2 = Array(o2);
  for (let e20 = 0; e20 < o2; ++e20)
    s2[e20] = r2 / 2 ** e20;
  return s2;
}
function rf(e19, t2, n2, r2) {
  return ef(af(e19), t2, n2, r2);
}
function af(e19) {
  let t2 = Dn(e19);
  if (!t2)
    throw Error(`Unable to determine extent from unknown projection`);
  let n2 = t2.getExtent();
  if (!n2) {
    let e20 = t2.getMetersPerUnit();
    if (e20 === void 0)
      throw Error(`Unable to determine extent from projection without units`);
    let r2 = 180 * yt.degrees / e20;
    n2 = Se(-r2, -r2, r2, r2);
  }
  return n2;
}
function of(e19, t2) {
  return function(n2, r2, i2) {
    if (!n2)
      return;
    let a2, o2 = n2[0];
    if (t2) {
      let e20 = t2.getFullTileRange(o2);
      e20 && (a2 = e20.getHeight() - 1);
    }
    return qd(e19, o2, n2[1], n2[2], a2);
  };
}
function sf(e19, t2) {
  let n2 = e19.length, r2 = Array(n2);
  for (let i2 = 0; i2 < n2; ++i2)
    r2[i2] = of(e19[i2], t2);
  return cf(r2);
}
function cf(e19) {
  return e19.length === 1 ? e19[0] : function(t2, n2, r2) {
    return t2 ? e19[tt(Nd(t2), e19.length)](t2, n2, r2) : void 0;
  };
}
var lf = class extends Oo {
  constructor(e19) {
    super({attributions: e19.attributions, attributionsCollapsible: e19.attributionsCollapsible, projection: e19.projection, state: e19.state, wrapX: e19.wrapX, interpolate: e19.interpolate}), this.on, this.once, this.un, this.tilePixelRatio_ = e19.tilePixelRatio === void 0 ? 1 : e19.tilePixelRatio, this.tileGrid = e19.tileGrid === void 0 ? null : e19.tileGrid, this.tileGrid && Lo(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), [256, 256]), this.tmpSize = [0, 0], this.key_ = e19.key || D(this), this.tileOptions = {transition: e19.transition, interpolate: e19.interpolate}, this.zDirection = e19.zDirection ? e19.zDirection : 0;
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
  getResolutions(e19) {
    let t2 = e19 ? this.getTileGridForProjection(e19) : this.tileGrid;
    return t2 ? t2.getResolutions() : null;
  }
  getTile(e19, t2, n2, r2, i2, a2) {
    return T();
  }
  getTileGrid() {
    return this.tileGrid;
  }
  getTileGridForProjection(e19) {
    return this.tileGrid ? this.tileGrid : Qd(e19);
  }
  getTilePixelRatio(e19) {
    return this.tilePixelRatio_;
  }
  getTilePixelSize(e19, t2, n2) {
    let r2 = this.getTileGridForProjection(n2), i2 = this.getTilePixelRatio(t2), a2 = Lo(r2.getTileSize(e19), this.tmpSize);
    return i2 == 1 ? a2 : Io(a2, i2, this.tmpSize);
  }
  getTileCoordForTileUrlFunction(e19, t2) {
    let n2 = t2 === void 0 ? this.getProjection() : t2, r2 = t2 === void 0 && this.tileGrid || this.getTileGridForProjection(n2);
    return this.getWrapX() && n2.isGlobal() && (e19 = $d(r2, e19, n2)), Fd(e19, r2) ? e19 : null;
  }
  clear() {
  }
  refresh() {
    this.clear(), super.refresh();
  }
}, uf = class extends re {
  constructor(e19, t2) {
    super(e19), this.tile = t2;
  }
}, df = {TILELOADSTART: `tileloadstart`, TILELOADEND: `tileloadend`, TILELOADERROR: `tileloaderror`}, ff = class e16 extends lf {
  constructor(t2) {
    super({attributions: t2.attributions, cacheSize: t2.cacheSize, projection: t2.projection, state: t2.state, tileGrid: t2.tileGrid, tilePixelRatio: t2.tilePixelRatio, wrapX: t2.wrapX, transition: t2.transition, interpolate: t2.interpolate, key: t2.key, attributionsCollapsible: t2.attributionsCollapsible, zDirection: t2.zDirection}), this.generateTileUrlFunction_ = this.tileUrlFunction === e16.prototype.tileUrlFunction, this.tileLoadFunction = t2.tileLoadFunction, t2.tileUrlFunction && (this.tileUrlFunction = t2.tileUrlFunction), this.urls = null, t2.urls ? this.setUrls(t2.urls) : t2.url && this.setUrl(t2.url), this.tileLoadingKeys_ = {};
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
    let t2 = e19.target, n2 = D(t2), r2 = t2.getState(), i2;
    r2 == z.LOADING ? (this.tileLoadingKeys_[n2] = true, i2 = df.TILELOADSTART) : n2 in this.tileLoadingKeys_ && (delete this.tileLoadingKeys_[n2], i2 = r2 == z.ERROR ? df.TILELOADERROR : r2 == z.LOADED ? df.TILELOADEND : void 0), i2 != null && this.dispatchEvent(new uf(i2, t2));
  }
  setTileLoadFunction(e19) {
    this.tileLoadFunction = e19, this.changed();
  }
  setTileUrlFunction(e19, t2) {
    this.tileUrlFunction = e19, t2 === void 0 ? this.changed() : this.setKey(t2);
  }
  setUrl(e19) {
    let t2 = Jd(e19);
    this.urls = t2, this.setUrls(t2);
  }
  setUrls(e19) {
    this.urls = e19;
    let t2 = e19.join(`
`);
    this.generateTileUrlFunction_ ? this.setTileUrlFunction(sf(e19, this.tileGrid), t2) : this.setKey(t2);
  }
  tileUrlFunction(e19, t2, n2) {
  }
}, pf = class extends ff {
  constructor(e19) {
    super({attributions: e19.attributions, cacheSize: e19.cacheSize, projection: e19.projection, state: e19.state, tileGrid: e19.tileGrid, tileLoadFunction: e19.tileLoadFunction ? e19.tileLoadFunction : mf, tilePixelRatio: e19.tilePixelRatio, tileUrlFunction: e19.tileUrlFunction, url: e19.url, urls: e19.urls, wrapX: e19.wrapX, transition: e19.transition, interpolate: e19.interpolate === void 0 || e19.interpolate, key: e19.key, attributionsCollapsible: e19.attributionsCollapsible, zDirection: e19.zDirection}), this.crossOrigin = e19.crossOrigin === void 0 ? null : e19.crossOrigin, this.referrerPolicy = e19.referrerPolicy, this.tileClass = e19.tileClass === void 0 ? yi : e19.tileClass, this.tileGridForProjection = {}, this.reprojectionErrorThreshold_ = e19.reprojectionErrorThreshold, this.renderReprojectionEdges_ = false;
  }
  getGutterForProjection(e19) {
    let t2 = this.getProjection();
    return t2 && e19 && !Pn(t2, e19) ? 0 : this.getGutter();
  }
  getGutter() {
    return 0;
  }
  getKey() {
    let e19 = super.getKey();
    return this.getInterpolate() || (e19 += `:disable-interpolation`), e19;
  }
  getTileGridForProjection(e19) {
    let t2 = this.getProjection();
    if (this.tileGrid && (!t2 || Pn(t2, e19)))
      return this.tileGrid;
    let n2 = D(e19);
    return n2 in this.tileGridForProjection || (this.tileGridForProjection[n2] = Qd(e19)), this.tileGridForProjection[n2];
  }
  createTile_(e19, t2, n2, r2, i2, a2) {
    let o2 = [e19, t2, n2], s2 = this.getTileCoordForTileUrlFunction(o2, i2), c2 = s2 ? this.tileUrlFunction(s2, r2, i2) : void 0, l2 = new this.tileClass(o2, c2 === void 0 ? z.EMPTY : z.IDLE, c2 === void 0 ? `` : c2, {crossOrigin: this.crossOrigin, referrerPolicy: this.referrerPolicy}, this.tileLoadFunction, this.tileOptions);
    return l2.key = a2, l2.addEventListener(h.CHANGE, this.handleTileChange.bind(this)), l2;
  }
  getTile(e19, t2, n2, r2, i2, a2) {
    let o2 = this.getProjection();
    if (!o2 || !i2 || Pn(o2, i2))
      return this.getTileInternal(e19, t2, n2, r2, o2 || i2);
    let s2 = [e19, t2, n2], c2 = this.getKey(), l2 = new Od(o2, this.getTileGridForProjection(o2), i2, this.getTileGridForProjection(i2), s2, this.getTileCoordForTileUrlFunction(s2, i2) || s2, this.getTilePixelRatio(r2), this.getGutter(), (e20, t3, n3, r3) => this.getTileInternal(e20, t3, n3, r3, o2, a2), this.reprojectionErrorThreshold_, this.renderReprojectionEdges_, this.tileOptions);
    return l2.key = c2, l2;
  }
  getTileInternal(e19, t2, n2, r2, i2, a2) {
    let o2 = this.getKey(), s2 = Md(this, o2, e19, t2, n2);
    if (a2 && a2.containsKey(s2))
      return a2.get(s2);
    let c2 = this.createTile_(e19, t2, n2, r2, i2, o2);
    return a2?.set(s2, c2), c2;
  }
  setRenderReprojectionEdges(e19) {
    this.renderReprojectionEdges_ != e19 && (this.renderReprojectionEdges_ = e19, this.changed());
  }
  setTileGridForProjection(e19, t2) {
    let n2 = Dn(e19);
    if (n2) {
      let e20 = D(n2);
      e20 in this.tileGridForProjection || (this.tileGridForProjection[e20] = t2);
    }
  }
};
function mf(e19, t2) {
  if (ei) {
    let n2 = e19.getCrossOrigin(), r2 = `same-origin`, i2 = `same-origin`;
    n2 === `anonymous` || n2 === `` ? (r2 = `cors`, i2 = `omit`) : n2 === `use-credentials` && (r2 = `cors`, i2 = `include`);
    let a2 = {mode: r2, credentials: i2, referrerPolicy: e19.getReferrerPolicy()};
    fetch(t2, a2).then((e20) => {
      if (!e20.ok)
        throw Error(`HTTP ${e20.status}`);
      return e20.blob();
    }).then((e20) => createImageBitmap(e20)).then((t3) => {
      let n3 = e19.getImage();
      if (!n3)
        return;
      n3.width = t3.width, n3.height = t3.height;
      let r3 = n3.getContext(`2d`);
      r3 && (r3.drawImage(t3, 0, 0), t3.close?.(), n3.dispatchEvent(new Event(`load`)));
    }).catch(() => {
      e19.getImage()?.dispatchEvent(new Event(`error`));
    });
  } else
    e19.getImage().src = t2;
}
var hf = class extends pf {
  constructor(e19) {
    e19 || (e19 = {});
    let t2 = e19.projection === void 0 ? `EPSG:3857` : e19.projection, n2 = e19.tileGrid === void 0 ? tf({extent: af(t2), maxResolution: e19.maxResolution, maxZoom: e19.maxZoom, minZoom: e19.minZoom, tileSize: e19.tileSize}) : e19.tileGrid;
    super({attributions: e19.attributions, cacheSize: e19.cacheSize, crossOrigin: e19.crossOrigin, referrerPolicy: e19.referrerPolicy, interpolate: e19.interpolate, projection: t2, reprojectionErrorThreshold: e19.reprojectionErrorThreshold, tileGrid: n2, tileLoadFunction: e19.tileLoadFunction, tilePixelRatio: e19.tilePixelRatio, tileUrlFunction: e19.tileUrlFunction, url: e19.url, urls: e19.urls, wrapX: e19.wrapX === void 0 || e19.wrapX, transition: e19.transition, attributionsCollapsible: e19.attributionsCollapsible, zDirection: e19.zDirection}), this.gutter_ = e19.gutter === void 0 ? 0 : e19.gutter;
  }
  getGutter() {
    return this.gutter_;
  }
}, gf = `&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.`, _f = class extends hf {
  constructor(e19) {
    e19 || (e19 = {});
    let t2;
    t2 = e19.attributions === void 0 ? [gf] : e19.attributions;
    let n2 = e19.url === void 0 ? `https://tile.openstreetmap.org/{z}/{x}/{y}.png` : e19.url;
    super({attributions: t2, attributionsCollapsible: false, cacheSize: e19.cacheSize, crossOrigin: e19.crossOrigin === void 0 ? `anonymous` : e19.crossOrigin, referrerPolicy: e19.referrerPolicy || `origin-when-cross-origin`, interpolate: e19.interpolate, maxZoom: e19.maxZoom === void 0 ? 19 : e19.maxZoom, reprojectionErrorThreshold: e19.reprojectionErrorThreshold, tileLoadFunction: e19.tileLoadFunction, transition: e19.transition, url: n2, wrapX: e19.wrapX, zDirection: e19.zDirection});
  }
};
window.i18nTranslations || (window.i18nTranslations = {}), window.sysLang || (window.sysLang = `en`);
var vf = class e17 {
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
window.i18nShow = vf.i18nShow, window.i18nDisableWarning = vf.disableWarning;
var yf = `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%2300F%22%20d%3D%22M360-440h80v-110h80v110h80v-190l-120-80-120%2080v190Zm120%20254q122-112%20181-203.5T720-552q0-109-69.5-178.5T480-800q-101%200-170.5%2069.5T240-552q0%2071%2059%20162.5T480-186Zm0%20106Q319-217%20239.5-334.5T160-552q0-150%2096.5-239T480-880q127%200%20223.5%2089T800-552q0%20100-79.5%20217.5T480-80Zm0-480Z%22%2F%3E%0A%3C%2Fsvg%3E`, bf = 19, xf = `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2248%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2248%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23080%22%20d%3D%22M480-120q-75.53%200-128.765-53.235Q298-226.47%20298-302q0-49.099%2024-91.55Q346-436%20388-462v-286q0-38.333%2026.765-65.167%2026.764-26.833%2065-26.833Q518-840%20545-813.167q27%2026.834%2027%2065.167v286q42%2026%2066%2068.45%2024%2042.451%2024%2091.55%200%2075.53-53.235%20128.765Q555.53-120%20480-120Zm.118-59Q531-179%20566.5-214.875%20602-250.75%20602-302q0-37.81-18-70.405T532-420l-20-9v-319q0-13.6-9.2-22.8-9.2-9.2-22.8-9.2-13.6%200-22.8%209.2-9.2%209.2-9.2%2022.8v319l-20%209q-34%2015-52%2047.595T358-302q0%2051.25%2035.618%2087.125Q429.235-179%20480.118-179ZM480-302Z%22%2F%3E%0A%3C%2Fsvg%3E`, Sf = class extends r {
  constructor(e19) {
    super(e19), this.state = {longitude: 0, latitude: 0, things: [...this.props.things], mapHeight: 0, mapWidth: 0}, this.refMap = i();
  }
  calculateZoomLevel(e19) {
    let t2 = Nn([parseFloat(this.state.longitude || 0), parseFloat(this.state.latitude || 0)]);
    if (!this.state.things?.length)
      return 17;
    let n2;
    if (!this.props.hideHome)
      n2 = Se(t2[0], t2[1], t2[0], t2[1]);
    else {
      let e20 = Nn([this.state.things[0].longitude, this.state.things[0].latitude]);
      n2 = Se(e20[0], e20[1], e20[0], e20[1]);
    }
    return this.state.things.forEach((e20, t3) => {
      if (!t3 && this.props.hideHome)
        return;
      let r2 = Nn([e20.longitude, e20.latitude]);
      De(n2, [r2[0], r2[1], r2[0], r2[1]]);
    }), e19.getView().fit(n2, e19.getSize()), e19.getView().getZoom() - 1;
  }
  getZoomLevel() {
    return Math.min(bf, Math.max(0, Math.round(Number(this.props.zoomLevel) || 0)));
  }
  updateView() {
    let e19 = this.getZoomLevel() || this.calculateZoomLevel(this.OSM.oMap);
    this.OSM.oMap.setView(new Vl({center: this.calculateCenter(), zoom: e19}));
  }
  calculateCenter() {
    let e19 = +!this.props.hideHome, t2 = this.props.hideHome ? 0 : parseFloat(this.state.longitude || 0), n2 = this.props.hideHome ? 0 : parseFloat(this.state.latitude || 0);
    return this.state.things.forEach((r2) => {
      t2 += r2.longitude, n2 += r2.latitude, e19++;
    }), Nn([t2 / e19, n2 / e19]);
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
    let e19 = Nn([parseFloat(this.state.longitude || 0), parseFloat(this.state.latitude || 0)]);
    if (!this.OSM) {
      this.OSM = {}, this.props.hideHome || (this.OSM.markerSource = new Mo()), this.OSM.pointsSource = new Mo(), this.OSM.markerStyle = new Vo({image: new Is({anchor: [0.5, 49], anchorXUnits: `fraction`, anchorYUnits: `pixels`, opacity: 0.75, src: yf})}), this.OSM.tempStyle = new Vo({image: new Is({anchor: [0.5, 49], anchorXUnits: `fraction`, anchorYUnits: `pixels`, opacity: 0.75, src: xf})}), this.OSM.pointsLayer = new eu({source: this.OSM.pointsSource, style: this.OSM.tempStyle});
      let t2 = [new Hd({source: new _f()}), this.OSM.pointsLayer];
      this.props.hideHome || t2.push(new eu({source: this.OSM.markerSource, style: this.OSM.markerStyle})), this.OSM.oMap = new sd({target: this.props.id || `map`, layers: t2, view: new Vl({center: e19, zoom: 17})}), this.props.hideHome || (this.OSM.marker = new fe({geometry: new Br(e19), name: vf.t(`Your home`)}), this.OSM.markerSource.addFeature(this.OSM.marker)), this.OSM.oMap.on(`pointermove`, (e20) => {
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
      let t2 = this.state.things[e20], n2 = new fe({geometry: new Br(Nn([t2.longitude, t2.latitude])), name: t2.name}), r2 = [];
      t2.dataStreams.forEach((e21) => {
        console.log(e21), e21.value !== void 0 && e21.value !== null && r2.push((Math.round(e21.value * 10) / 10).toString() + (e21.unit || ``));
      });
      let i2 = new Vo({image: new Is({anchor: [0.5, 49], anchorXUnits: `fraction`, anchorYUnits: `pixels`, opacity: 0.75, src: xf}), text: new qo({text: r2.join(`
`), scale: 1.2, fill: new No({color: `#004f00`})})});
      n2.setStyle(i2), this.OSM.pointsSource.addFeature(n2);
    }
    this.props.hideHome || this.OSM.marker.setGeometry(new Br(e19)), this.updateView();
  }
  componentDidMount() {
    this.props.socket.getSystemConfig().then((e19) => this.setState({longitude: e19.common.longitude, latitude: e19.common.latitude}, () => this.refMap.current?.clientHeight && this.updateMap()));
  }
  componentDidUpdate(e19) {
    this.OSM && e19.zoomLevel !== this.props.zoomLevel && this.updateView(), this.refMap.current && this.refMap.current.clientWidth !== this.state.mapWidth && this.refMap.current.clientHeight !== this.state.mapHeight && (this.OSM ? this.setState({mapWidth: this.refMap.current.clientWidth, mapHeight: this.refMap.current.clientHeight}, () => this.OSM.oMap.updateSize()) : this.setState({mapWidth: this.refMap.current.clientWidth, mapHeight: this.refMap.current.clientHeight}, () => setTimeout(() => this.updateMap(), 10)));
  }
  renderTooltip() {
    return this.state.tooltip ? n(`div`, {style: {position: `absolute`, top: this.state.tooltip.top, left: this.state.tooltip.left, color: `#000`, padding: `3px 5px`, backgroundColor: `#fff`, borderRadius: 5}, children: this.state.tooltip.text}, `tooltip`) : null;
  }
  render() {
    return JSON.stringify(this.props.things) !== JSON.stringify(this.state.things) && this.OSM && setTimeout(() => this.setState({things: [...this.props.things]}, () => this.refMap.current?.clientWidth && this.updateMap()), 100), [n(`div`, {ref: this.refMap, id: this.props.id || `map`, style: {height: `100%`, width: `100%`, overflow: `hidden`}}, `map`), this.renderTooltip()];
  }
};
Sf.propTypes = {id: s.default.string, socket: s.default.object, things: s.default.array, onSelect: s.default.func, hideHome: s.default.bool, zoomLevel: s.default.oneOfType([s.default.number, s.default.string])};
var Cf = class e18 extends window.visRxWidget {
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
    let t2 = n(Sf, {socket: this.props.context.socket, id: `map_${this.props.id}`, things: this.state.points || [], hideHome: this.state.rxData.hideHome, zoomLevel: this.state.rxData.zoomLevel}, this.state._key);
    return this.state.rxData.noCard ? t2 : this.wrapContent(t2);
  }
};
Cf.propTypes = {context: s.default.object, themeType: s.default.string, style: s.default.object, data: s.default.object};
export {
  Cf as default
};
