import {C as e, w as t} from "./_virtual_mf___mfe_internal__opensmartcity__mf_owner__135060680301585__loadShare__shared-DG-3THKX.js";
function n(e2) {
  if (e2.sheet)
    return e2.sheet;
  for (var t2 = 0; t2 < document.styleSheets.length; t2++)
    if (document.styleSheets[t2].ownerNode === e2)
      return document.styleSheets[t2];
}
function r(e2) {
  var t2 = document.createElement(`style`);
  return t2.setAttribute(`data-emotion`, e2.key), e2.nonce !== void 0 && t2.setAttribute(`nonce`, e2.nonce), t2.appendChild(document.createTextNode(``)), t2.setAttribute(`data-s`, ``), t2;
}
var i = function() {
  function e2(e3) {
    var t3 = this;
    this._insertTag = function(e4) {
      var n2 = t3.tags.length === 0 ? t3.insertionPoint ? t3.insertionPoint.nextSibling : t3.prepend ? t3.container.firstChild : t3.before : t3.tags[t3.tags.length - 1].nextSibling;
      t3.container.insertBefore(e4, n2), t3.tags.push(e4);
    }, this.isSpeedy = e3.speedy === void 0 || e3.speedy, this.tags = [], this.ctr = 0, this.nonce = e3.nonce, this.key = e3.key, this.container = e3.container, this.prepend = e3.prepend, this.insertionPoint = e3.insertionPoint, this.before = null;
  }
  var t2 = e2.prototype;
  return t2.hydrate = function(e3) {
    e3.forEach(this._insertTag);
  }, t2.insert = function(e3) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(r(this));
    var t3 = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i2 = n(t3);
      try {
        i2.insertRule(e3, i2.cssRules.length);
      } catch {
      }
    } else
      t3.appendChild(document.createTextNode(e3));
    this.ctr++;
  }, t2.flush = function() {
    this.tags.forEach(function(e3) {
      return e3.parentNode?.removeChild(e3);
    }), this.tags = [], this.ctr = 0;
  }, e2;
}(), a = `-ms-`, o = `-moz-`, s = `-webkit-`, c = `comm`, l = `rule`, u = `decl`, d = `@import`, f = `@keyframes`, p = `@layer`, m = Math.abs, h = String.fromCharCode, g = Object.assign;
function _(e2, t2) {
  return S(e2, 0) ^ 45 ? (((t2 << 2 ^ S(e2, 0)) << 2 ^ S(e2, 1)) << 2 ^ S(e2, 2)) << 2 ^ S(e2, 3) : 0;
}
function v(e2) {
  return e2.trim();
}
function y(e2, t2) {
  return (e2 = t2.exec(e2)) ? e2[0] : e2;
}
function b(e2, t2, n2) {
  return e2.replace(t2, n2);
}
function x(e2, t2) {
  return e2.indexOf(t2);
}
function S(e2, t2) {
  return e2.charCodeAt(t2) | 0;
}
function C(e2, t2, n2) {
  return e2.slice(t2, n2);
}
function w(e2) {
  return e2.length;
}
function T(e2) {
  return e2.length;
}
function E(e2, t2) {
  return t2.push(e2), e2;
}
function D(e2, t2) {
  return e2.map(t2).join(``);
}
var O = 1, k = 1, ee = 0, A = 0, j = 0, M = ``;
function N(e2, t2, n2, r2, i2, a2, o2) {
  return {value: e2, root: t2, parent: n2, type: r2, props: i2, children: a2, line: O, column: k, length: o2, return: ``};
}
function P(e2, t2) {
  return g(N(``, null, null, ``, null, null, 0), e2, {length: -e2.length}, t2);
}
function te() {
  return j;
}
function ne() {
  return j = A > 0 ? S(M, --A) : 0, k--, j === 10 && (k = 1, O--), j;
}
function F() {
  return j = A < ee ? S(M, A++) : 0, k++, j === 10 && (k = 1, O++), j;
}
function I() {
  return S(M, A);
}
function L() {
  return A;
}
function R(e2, t2) {
  return C(M, e2, t2);
}
function z(e2) {
  switch (e2) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function B(e2) {
  return O = k = 1, ee = w(M = e2), A = 0, [];
}
function re(e2) {
  return M = ``, e2;
}
function V(e2) {
  return v(R(A - 1, H(e2 === 91 ? e2 + 2 : e2 === 40 ? e2 + 1 : e2)));
}
function ie(e2) {
  for (; (j = I()) && j < 33; )
    F();
  return z(e2) > 2 || z(j) > 3 ? `` : ` `;
}
function ae(e2, t2) {
  for (; --t2 && F() && !(j < 48 || j > 102 || j > 57 && j < 65 || j > 70 && j < 97); )
    ;
  return R(e2, L() + (t2 < 6 && I() == 32 && F() == 32));
}
function H(e2) {
  for (; F(); )
    switch (j) {
      case e2:
        return A;
      case 34:
      case 39:
        e2 !== 34 && e2 !== 39 && H(j);
        break;
      case 40:
        e2 === 41 && H(e2);
        break;
      case 92:
        F();
    }
  return A;
}
function oe(e2, t2) {
  for (; F() && e2 + j !== 57 && (e2 + j !== 84 || I() !== 47); )
    ;
  return `/*` + R(t2, A - 1) + `*` + h(e2 === 47 ? e2 : F());
}
function se(e2) {
  for (; !z(I()); )
    F();
  return R(e2, A);
}
function ce(e2) {
  return re(U(``, null, null, null, [``], e2 = B(e2), 0, [0], e2));
}
function U(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  for (var l2 = 0, u2 = 0, d2 = o2, f2 = 0, p2 = 0, m2 = 0, g2 = 1, _2 = 1, v2 = 1, y2 = 0, C2 = ``, T2 = i2, D2 = a2, O2 = r2, k2 = C2; _2; )
    switch (m2 = y2, y2 = F()) {
      case 40:
        if (m2 != 108 && S(k2, d2 - 1) == 58) {
          x(k2 += b(V(y2), `&`, `&\f`), `&\f`) != -1 && (v2 = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k2 += V(y2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k2 += ie(m2);
        break;
      case 92:
        k2 += ae(L() - 1, 7);
        continue;
      case 47:
        switch (I()) {
          case 42:
          case 47:
            E(le(oe(F(), L()), t2, n2), c2);
            break;
          default:
            k2 += `/`;
        }
        break;
      case 123 * g2:
        s2[l2++] = w(k2) * v2;
      case 125 * g2:
      case 59:
      case 0:
        switch (y2) {
          case 0:
          case 125:
            _2 = 0;
          case 59 + u2:
            v2 == -1 && (k2 = b(k2, /\f/g, ``)), p2 > 0 && w(k2) - d2 && E(p2 > 32 ? G(k2 + `;`, r2, n2, d2 - 1) : G(b(k2, ` `, ``) + `;`, r2, n2, d2 - 2), c2);
            break;
          case 59:
            k2 += `;`;
          default:
            if (E(O2 = W(k2, t2, n2, l2, u2, i2, s2, C2, T2 = [], D2 = [], d2), a2), y2 === 123) {
              if (u2 === 0)
                U(k2, t2, O2, O2, T2, a2, d2, s2, D2);
              else
                switch (f2 === 99 && S(k2, 3) === 110 ? 100 : f2) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    U(e2, O2, O2, r2 && E(W(e2, O2, O2, 0, 0, i2, s2, C2, i2, T2 = [], d2), D2), i2, D2, d2, s2, r2 ? T2 : D2);
                    break;
                  default:
                    U(k2, O2, O2, O2, [``], D2, 0, s2, D2);
                }
            }
        }
        l2 = u2 = p2 = 0, g2 = v2 = 1, C2 = k2 = ``, d2 = o2;
        break;
      case 58:
        d2 = 1 + w(k2), p2 = m2;
      default:
        if (g2 < 1) {
          if (y2 == 123)
            --g2;
          else if (y2 == 125 && g2++ == 0 && ne() == 125)
            continue;
        }
        switch (k2 += h(y2), y2 * g2) {
          case 38:
            v2 = u2 > 0 ? 1 : (k2 += `\f`, -1);
            break;
          case 44:
            s2[l2++] = (w(k2) - 1) * v2, v2 = 1;
            break;
          case 64:
            I() === 45 && (k2 += V(F())), f2 = I(), u2 = d2 = w(C2 = k2 += se(L())), y2++;
            break;
          case 45:
            m2 === 45 && w(k2) == 2 && (g2 = 0);
        }
    }
  return a2;
}
function W(e2, t2, n2, r2, i2, a2, o2, s2, c2, u2, d2) {
  for (var f2 = i2 - 1, p2 = i2 === 0 ? a2 : [``], h2 = T(p2), g2 = 0, _2 = 0, y2 = 0; g2 < r2; ++g2)
    for (var x2 = 0, S2 = C(e2, f2 + 1, f2 = m(_2 = o2[g2])), w2 = e2; x2 < h2; ++x2)
      (w2 = v(_2 > 0 ? p2[x2] + ` ` + S2 : b(S2, /&\f/g, p2[x2]))) && (c2[y2++] = w2);
  return N(e2, t2, n2, i2 === 0 ? l : s2, c2, u2, d2);
}
function le(e2, t2, n2) {
  return N(e2, t2, n2, c, h(te()), C(e2, 2, -2), 0);
}
function G(e2, t2, n2, r2) {
  return N(e2, t2, n2, u, C(e2, 0, r2), C(e2, r2 + 1, -1), r2);
}
function K(e2, t2) {
  for (var n2 = ``, r2 = T(e2), i2 = 0; i2 < r2; i2++)
    n2 += t2(e2[i2], i2, e2, t2) || ``;
  return n2;
}
function ue(e2, t2, n2, r2) {
  switch (e2.type) {
    case p:
      if (e2.children.length)
        break;
    case d:
    case u:
      return e2.return = e2.return || e2.value;
    case c:
      return ``;
    case f:
      return e2.return = e2.value + `{` + K(e2.children, r2) + `}`;
    case l:
      e2.value = e2.props.join(`,`);
  }
  return w(n2 = K(e2.children, r2)) ? e2.return = e2.value + `{` + n2 + `}` : ``;
}
function de(e2) {
  var t2 = T(e2);
  return function(n2, r2, i2, a2) {
    for (var o2 = ``, s2 = 0; s2 < t2; s2++)
      o2 += e2[s2](n2, r2, i2, a2) || ``;
    return o2;
  };
}
function fe(e2) {
  return function(t2) {
    t2.root || (t2 = t2.return) && e2(t2);
  };
}
function q(e2) {
  var t2 = Object.create(null);
  return function(n2) {
    return t2[n2] === void 0 && (t2[n2] = e2(n2)), t2[n2];
  };
}
var pe = function(e2, t2, n2) {
  for (var r2 = 0, i2 = 0; r2 = i2, i2 = I(), r2 === 38 && i2 === 12 && (t2[n2] = 1), !z(i2); )
    F();
  return R(e2, A);
}, me = function(e2, t2) {
  var n2 = -1, r2 = 44;
  do
    switch (z(r2)) {
      case 0:
        r2 === 38 && I() === 12 && (t2[n2] = 1), e2[n2] += pe(A - 1, t2, n2);
        break;
      case 2:
        e2[n2] += V(r2);
        break;
      case 4:
        if (r2 === 44) {
          e2[++n2] = I() === 58 ? `&\f` : ``, t2[n2] = e2[n2].length;
          break;
        }
      default:
        e2[n2] += h(r2);
    }
  while (r2 = F());
  return e2;
}, he = function(e2, t2) {
  return re(me(B(e2), t2));
}, ge = new WeakMap(), _e = function(e2) {
  if (!(e2.type !== `rule` || !e2.parent || e2.length < 1)) {
    for (var t2 = e2.value, n2 = e2.parent, r2 = e2.column === n2.column && e2.line === n2.line; n2.type !== `rule`; )
      if (n2 = n2.parent, !n2)
        return;
    if ((e2.props.length !== 1 || t2.charCodeAt(0) === 58 || ge.get(n2)) && !r2) {
      ge.set(e2, true);
      for (var i2 = [], a2 = he(t2, i2), o2 = n2.props, s2 = 0, c2 = 0; s2 < a2.length; s2++)
        for (var l2 = 0; l2 < o2.length; l2++, c2++)
          e2.props[c2] = i2[s2] ? a2[s2].replace(/&\f/g, o2[l2]) : o2[l2] + ` ` + a2[s2];
    }
  }
}, ve = function(e2) {
  if (e2.type === `decl`) {
    var t2 = e2.value;
    t2.charCodeAt(0) === 108 && t2.charCodeAt(2) === 98 && (e2.return = ``, e2.value = ``);
  }
};
function ye(e2, t2) {
  switch (_(e2, t2)) {
    case 5103:
      return s + `print-` + e2 + e2;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return s + e2 + e2;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return s + e2 + o + e2 + a + e2 + e2;
    case 6828:
    case 4268:
      return s + e2 + a + e2 + e2;
    case 6165:
      return s + e2 + a + `flex-` + e2 + e2;
    case 5187:
      return s + e2 + b(e2, /(\w+).+(:[^]+)/, s + `box-$1$2` + a + `flex-$1$2`) + e2;
    case 5443:
      return s + e2 + a + `flex-item-` + b(e2, /flex-|-self/, ``) + e2;
    case 4675:
      return s + e2 + a + `flex-line-pack` + b(e2, /align-content|flex-|-self/, ``) + e2;
    case 5548:
      return s + e2 + a + b(e2, `shrink`, `negative`) + e2;
    case 5292:
      return s + e2 + a + b(e2, `basis`, `preferred-size`) + e2;
    case 6060:
      return s + `box-` + b(e2, `-grow`, ``) + s + e2 + a + b(e2, `grow`, `positive`) + e2;
    case 4554:
      return s + b(e2, /([^-])(transform)/g, `$1` + s + `$2`) + e2;
    case 6187:
      return b(b(b(e2, /(zoom-|grab)/, s + `$1`), /(image-set)/, s + `$1`), e2, ``) + e2;
    case 5495:
    case 3959:
      return b(e2, /(image-set\([^]*)/, s + "$1$`$1");
    case 4968:
      return b(b(e2, /(.+:)(flex-)?(.*)/, s + `box-pack:$3` + a + `flex-pack:$3`), /s.+-b[^;]+/, `justify`) + s + e2 + e2;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return b(e2, /(.+)-inline(.+)/, s + `$1$2`) + e2;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (w(e2) - 1 - t2 > 6)
        switch (S(e2, t2 + 1)) {
          case 109:
            if (S(e2, t2 + 4) !== 45)
              break;
          case 102:
            return b(e2, /(.+:)(.+)-([^]+)/, `$1` + s + `$2-$3$1` + o + (S(e2, t2 + 3) == 108 ? `$3` : `$2-$3`)) + e2;
          case 115:
            return ~x(e2, `stretch`) ? ye(b(e2, `stretch`, `fill-available`), t2) + e2 : e2;
        }
      break;
    case 4949:
      if (S(e2, t2 + 1) !== 115)
        break;
    case 6444:
      switch (S(e2, w(e2) - 3 - (~x(e2, `!important`) && 10))) {
        case 107:
          return b(e2, `:`, `:` + s) + e2;
        case 101:
          return b(e2, /(.+:)([^;!]+)(;|!.+)?/, `$1` + s + (S(e2, 14) === 45 ? `inline-` : ``) + `box$3$1` + s + `$2$3$1` + a + `$2box$3`) + e2;
      }
      break;
    case 5936:
      switch (S(e2, t2 + 11)) {
        case 114:
          return s + e2 + a + b(e2, /[svh]\w+-[tblr]{2}/, `tb`) + e2;
        case 108:
          return s + e2 + a + b(e2, /[svh]\w+-[tblr]{2}/, `tb-rl`) + e2;
        case 45:
          return s + e2 + a + b(e2, /[svh]\w+-[tblr]{2}/, `lr`) + e2;
      }
      return s + e2 + a + e2 + e2;
  }
  return e2;
}
var be = [function(e2, t2, n2, r2) {
  if (e2.length > -1 && !e2.return)
    switch (e2.type) {
      case u:
        e2.return = ye(e2.value, e2.length);
        break;
      case f:
        return K([P(e2, {value: b(e2.value, `@`, `@` + s)})], r2);
      case l:
        if (e2.length)
          return D(e2.props, function(t3) {
            switch (y(t3, /(::plac\w+|:read-\w+)/)) {
              case `:read-only`:
              case `:read-write`:
                return K([P(e2, {props: [b(t3, /:(read-\w+)/, `:` + o + `$1`)]})], r2);
              case `::placeholder`:
                return K([P(e2, {props: [b(t3, /:(plac\w+)/, `:` + s + `input-$1`)]}), P(e2, {props: [b(t3, /:(plac\w+)/, `:` + o + `$1`)]}), P(e2, {props: [b(t3, /:(plac\w+)/, a + `input-$1`)]})], r2);
            }
            return ``;
          });
    }
}], xe = function(e2) {
  var t2 = e2.key;
  if (t2 === `css`) {
    var n2 = document.querySelectorAll(`style[data-emotion]:not([data-s])`);
    Array.prototype.forEach.call(n2, function(e3) {
      e3.getAttribute(`data-emotion`).indexOf(` `) !== -1 && (document.head.appendChild(e3), e3.setAttribute(`data-s`, ``));
    });
  }
  var r2 = e2.stylisPlugins || be, a2 = {}, o2, s2 = [];
  o2 = e2.container || document.head, Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="` + t2 + ` "]`), function(e3) {
    for (var t3 = e3.getAttribute(`data-emotion`).split(` `), n3 = 1; n3 < t3.length; n3++)
      a2[t3[n3]] = true;
    s2.push(e3);
  });
  var c2, l2 = [_e, ve], u2, d2 = [ue, fe(function(e3) {
    u2.insert(e3);
  })], f2 = de(l2.concat(r2, d2)), p2 = function(e3) {
    return K(ce(e3), f2);
  };
  c2 = function(e3, t3, n3, r3) {
    u2 = n3, p2(e3 ? e3 + `{` + t3.styles + `}` : t3.styles), r3 && (m2.inserted[t3.name] = true);
  };
  var m2 = {key: t2, sheet: new i({key: t2, container: o2, nonce: e2.nonce, speedy: e2.speedy, prepend: e2.prepend, insertionPoint: e2.insertionPoint}), nonce: e2.nonce, inserted: a2, registered: {}, insert: c2};
  return m2.sheet.hydrate(s2), m2;
};
function J() {
  return J = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        ({}).hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, J.apply(null, arguments);
}
function Se(e2, t2, n2) {
  var r2 = ``;
  return n2.split(` `).forEach(function(n3) {
    e2[n3] === void 0 ? n3 && (r2 += n3 + ` `) : t2.push(e2[n3] + `;`);
  }), r2;
}
var Ce = function(e2, t2, n2) {
  var r2 = e2.key + `-` + t2.name;
  n2 === false && e2.registered[r2] === void 0 && (e2.registered[r2] = t2.styles);
}, we = function(e2, t2, n2) {
  Ce(e2, t2, n2);
  var r2 = e2.key + `-` + t2.name;
  if (e2.inserted[t2.name] === void 0) {
    var i2 = t2;
    do
      e2.insert(t2 === i2 ? `.` + r2 : ``, i2, e2.sheet, true), i2 = i2.next;
    while (i2 !== void 0);
  }
};
function Te(e2) {
  for (var t2 = 0, n2, r2 = 0, i2 = e2.length; i2 >= 4; ++r2, i2 -= 4)
    n2 = e2.charCodeAt(r2) & 255 | (e2.charCodeAt(++r2) & 255) << 8 | (e2.charCodeAt(++r2) & 255) << 16 | (e2.charCodeAt(++r2) & 255) << 24, n2 = (n2 & 65535) * 1540483477 + ((n2 >>> 16) * 59797 << 16), n2 ^= n2 >>> 24, t2 = (n2 & 65535) * 1540483477 + ((n2 >>> 16) * 59797 << 16) ^ (t2 & 65535) * 1540483477 + ((t2 >>> 16) * 59797 << 16);
  switch (i2) {
    case 3:
      t2 ^= (e2.charCodeAt(r2 + 2) & 255) << 16;
    case 2:
      t2 ^= (e2.charCodeAt(r2 + 1) & 255) << 8;
    case 1:
      t2 ^= e2.charCodeAt(r2) & 255, t2 = (t2 & 65535) * 1540483477 + ((t2 >>> 16) * 59797 << 16);
  }
  return t2 ^= t2 >>> 13, t2 = (t2 & 65535) * 1540483477 + ((t2 >>> 16) * 59797 << 16), ((t2 ^ t2 >>> 15) >>> 0).toString(36);
}
var Ee = {animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1}, De = /[A-Z]|^ms/g, Oe = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ke = function(e2) {
  return e2.charCodeAt(1) === 45;
}, Ae = function(e2) {
  return e2 != null && typeof e2 != `boolean`;
}, Y = q(function(e2) {
  return ke(e2) ? e2 : e2.replace(De, `-$&`).toLowerCase();
}), X = function(e2, t2) {
  switch (e2) {
    case `animation`:
    case `animationName`:
      if (typeof t2 == `string`)
        return t2.replace(Oe, function(e3, t3, n2) {
          return Q = {name: t3, styles: n2, next: Q}, t3;
        });
  }
  return Ee[e2] !== 1 && !ke(e2) && typeof t2 == `number` && t2 !== 0 ? t2 + `px` : t2;
};
function Z(e2, t2, n2) {
  if (n2 == null)
    return ``;
  var r2 = n2;
  if (r2.__emotion_styles !== void 0)
    return r2;
  switch (typeof n2) {
    case `boolean`:
      return ``;
    case `object`:
      var i2 = n2;
      if (i2.anim === 1)
        return Q = {name: i2.name, styles: i2.styles, next: Q}, i2.name;
      var a2 = n2;
      if (a2.styles !== void 0) {
        var o2 = a2.next;
        if (o2 !== void 0)
          for (; o2 !== void 0; )
            Q = {name: o2.name, styles: o2.styles, next: Q}, o2 = o2.next;
        return a2.styles + `;`;
      }
      return je(e2, t2, n2);
    case `function`:
      if (e2 !== void 0) {
        var s2 = Q, c2 = n2(e2);
        return Q = s2, Z(e2, t2, c2);
      }
  }
  var l2 = n2;
  if (t2 == null)
    return l2;
  var u2 = t2[l2];
  return u2 === void 0 ? l2 : u2;
}
function je(e2, t2, n2) {
  var r2 = ``;
  if (Array.isArray(n2))
    for (var i2 = 0; i2 < n2.length; i2++)
      r2 += Z(e2, t2, n2[i2]) + `;`;
  else
    for (var a2 in n2) {
      var o2 = n2[a2];
      if (typeof o2 != `object`) {
        var s2 = o2;
        t2 != null && t2[s2] !== void 0 ? r2 += a2 + `{` + t2[s2] + `}` : Ae(s2) && (r2 += Y(a2) + `:` + X(a2, s2) + `;`);
      } else if (Array.isArray(o2) && typeof o2[0] == `string` && (t2 == null || t2[o2[0]] === void 0))
        for (var c2 = 0; c2 < o2.length; c2++)
          Ae(o2[c2]) && (r2 += Y(a2) + `:` + X(a2, o2[c2]) + `;`);
      else {
        var l2 = Z(e2, t2, o2);
        switch (a2) {
          case `animation`:
          case `animationName`:
            r2 += Y(a2) + `:` + l2 + `;`;
            break;
          default:
            r2 += a2 + `{` + l2 + `}`;
        }
      }
    }
  return r2;
}
var Me = /label:\s*([^\s;{]+)\s*(;|$)/g, Q;
function Ne(e2, t2, n2) {
  if (e2.length === 1 && typeof e2[0] == `object` && e2[0] !== null && e2[0].styles !== void 0)
    return e2[0];
  var r2 = true, i2 = ``;
  Q = void 0;
  var a2 = e2[0];
  a2 == null || a2.raw === void 0 ? (r2 = false, i2 += Z(n2, t2, a2)) : i2 += a2[0];
  for (var o2 = 1; o2 < e2.length; o2++)
    i2 += Z(n2, t2, e2[o2]), r2 && (i2 += a2[o2]);
  Me.lastIndex = 0;
  for (var s2 = ``, c2; (c2 = Me.exec(i2)) !== null; )
    s2 += `-` + c2[1];
  return {name: Te(i2) + s2, styles: i2, next: Q};
}
var Pe = function(e2) {
  return e2();
}, $ = e || false, Fe = $ || Pe, Ie = $ || t;
export {
  we as a,
  xe as c,
  Se as i,
  q as l,
  Ie as n,
  Ce as o,
  Ne as r,
  J as s,
  Fe as t,
  i as u
};
