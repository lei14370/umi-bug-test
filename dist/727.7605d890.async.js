(self.webpackChunk = self.webpackChunk || []).push([
  [727],
  {
    27727: function (Ve, dt, w) {
      'use strict';
      w.d(dt, {
        f: function () {
          return Io;
        },
      });
      var u = w(4942),
        H = w(74165),
        ge = w(15861),
        E = w(91),
        W = w(97685),
        c = w(1413),
        d = w(85893),
        Oe = w(71060),
        qe = w(60869),
        Z = w(67294),
        nt = w(12044);
      function yt(a, e) {
        var t = typeof a.pageName == 'string' ? a.title : e;
        (0, Z.useEffect)(
          function () {
            (0, nt.j)() && t && (document.title = t);
          },
          [a.title, t],
        );
      }
      var _ = w(21879),
        U = w.n(_),
        B =
          Number.isNaN ||
          function (e) {
            return typeof e == 'number' && e !== e;
          };
      function se(a, e) {
        return !!(a === e || (B(a) && B(e)));
      }
      function ce(a, e) {
        if (a.length !== e.length) return !1;
        for (var t = 0; t < a.length; t++) if (!se(a[t], e[t])) return !1;
        return !0;
      }
      function J(a, e) {
        e === void 0 && (e = ce);
        var t,
          n = [],
          r,
          o = !1;
        function l() {
          for (var i = [], s = 0; s < arguments.length; s++)
            i[s] = arguments[s];
          return (
            (o && t === this && e(i, n)) ||
              ((r = a.apply(this, i)), (o = !0), (t = this), (n = i)),
            r
          );
        }
        return l;
      }
      var Pe = J;
      function Ne(a) {
        for (var e = [], t = 0; t < a.length; ) {
          var n = a[t];
          if (n === '*' || n === '+' || n === '?') {
            e.push({ type: 'MODIFIER', index: t, value: a[t++] });
            continue;
          }
          if (n === '\\') {
            e.push({ type: 'ESCAPED_CHAR', index: t++, value: a[t++] });
            continue;
          }
          if (n === '{') {
            e.push({ type: 'OPEN', index: t, value: a[t++] });
            continue;
          }
          if (n === '}') {
            e.push({ type: 'CLOSE', index: t, value: a[t++] });
            continue;
          }
          if (n === ':') {
            for (var r = '', o = t + 1; o < a.length; ) {
              var l = a.charCodeAt(o);
              if (
                (l >= 48 && l <= 57) ||
                (l >= 65 && l <= 90) ||
                (l >= 97 && l <= 122) ||
                l === 95
              ) {
                r += a[o++];
                continue;
              }
              break;
            }
            if (!r) throw new TypeError('Missing parameter name at ' + t);
            e.push({ type: 'NAME', index: t, value: r }), (t = o);
            continue;
          }
          if (n === '(') {
            var i = 1,
              s = '',
              o = t + 1;
            if (a[o] === '?')
              throw new TypeError('Pattern cannot start with "?" at ' + o);
            for (; o < a.length; ) {
              if (a[o] === '\\') {
                s += a[o++] + a[o++];
                continue;
              }
              if (a[o] === ')') {
                if ((i--, i === 0)) {
                  o++;
                  break;
                }
              } else if (a[o] === '(' && (i++, a[o + 1] !== '?'))
                throw new TypeError('Capturing groups are not allowed at ' + o);
              s += a[o++];
            }
            if (i) throw new TypeError('Unbalanced pattern at ' + t);
            if (!s) throw new TypeError('Missing pattern at ' + t);
            e.push({ type: 'PATTERN', index: t, value: s }), (t = o);
            continue;
          }
          e.push({ type: 'CHAR', index: t, value: a[t++] });
        }
        return e.push({ type: 'END', index: t, value: '' }), e;
      }
      function O(a, e) {
        e === void 0 && (e = {});
        for (
          var t = Ne(a),
            n = e.prefixes,
            r = n === void 0 ? './' : n,
            o = '[^' + ve(e.delimiter || '/#?') + ']+?',
            l = [],
            i = 0,
            s = 0,
            v = '',
            f = function (I) {
              if (s < t.length && t[s].type === I) return t[s++].value;
            },
            h = function (I) {
              var R = f(I);
              if (R !== void 0) return R;
              var P = t[s],
                L = P.type,
                p = P.index;
              throw new TypeError(
                'Unexpected ' + L + ' at ' + p + ', expected ' + I,
              );
            },
            g = function () {
              for (var I = '', R; (R = f('CHAR') || f('ESCAPED_CHAR')); )
                I += R;
              return I;
            };
          s < t.length;

        ) {
          var y = f('CHAR'),
            j = f('NAME'),
            M = f('PATTERN');
          if (j || M) {
            var x = y || '';
            r.indexOf(x) === -1 && ((v += x), (x = '')),
              v && (l.push(v), (v = '')),
              l.push({
                name: j || i++,
                prefix: x,
                suffix: '',
                pattern: M || o,
                modifier: f('MODIFIER') || '',
              });
            continue;
          }
          var m = y || f('ESCAPED_CHAR');
          if (m) {
            v += m;
            continue;
          }
          v && (l.push(v), (v = ''));
          var C = f('OPEN');
          if (C) {
            var x = g(),
              $ = f('NAME') || '',
              S = f('PATTERN') || '',
              b = g();
            h('CLOSE'),
              l.push({
                name: $ || (S ? i++ : ''),
                pattern: $ && !S ? o : S,
                prefix: x,
                suffix: b,
                modifier: f('MODIFIER') || '',
              });
            continue;
          }
          h('END');
        }
        return l;
      }
      function K(a, e) {
        return Ce(O(a, e), e);
      }
      function Ce(a, e) {
        e === void 0 && (e = {});
        var t = at(e),
          n = e.encode,
          r =
            n === void 0
              ? function (s) {
                  return s;
                }
              : n,
          o = e.validate,
          l = o === void 0 ? !0 : o,
          i = a.map(function (s) {
            if (typeof s == 'object')
              return new RegExp('^(?:' + s.pattern + ')$', t);
          });
        return function (s) {
          for (var v = '', f = 0; f < a.length; f++) {
            var h = a[f];
            if (typeof h == 'string') {
              v += h;
              continue;
            }
            var g = s ? s[h.name] : void 0,
              y = h.modifier === '?' || h.modifier === '*',
              j = h.modifier === '*' || h.modifier === '+';
            if (Array.isArray(g)) {
              if (!j)
                throw new TypeError(
                  'Expected "' + h.name + '" to not repeat, but got an array',
                );
              if (g.length === 0) {
                if (y) continue;
                throw new TypeError(
                  'Expected "' + h.name + '" to not be empty',
                );
              }
              for (var M = 0; M < g.length; M++) {
                var x = r(g[M], h);
                if (l && !i[f].test(x))
                  throw new TypeError(
                    'Expected all "' +
                      h.name +
                      '" to match "' +
                      h.pattern +
                      '", but got "' +
                      x +
                      '"',
                  );
                v += h.prefix + x + h.suffix;
              }
              continue;
            }
            if (typeof g == 'string' || typeof g == 'number') {
              var x = r(String(g), h);
              if (l && !i[f].test(x))
                throw new TypeError(
                  'Expected "' +
                    h.name +
                    '" to match "' +
                    h.pattern +
                    '", but got "' +
                    x +
                    '"',
                );
              v += h.prefix + x + h.suffix;
              continue;
            }
            if (!y) {
              var m = j ? 'an array' : 'a string';
              throw new TypeError('Expected "' + h.name + '" to be ' + m);
            }
          }
          return v;
        };
      }
      function Me(a, e) {
        var t = [],
          n = Ee(a, t, e);
        return ae(n, t, e);
      }
      function ae(a, e, t) {
        t === void 0 && (t = {});
        var n = t.decode,
          r =
            n === void 0
              ? function (o) {
                  return o;
                }
              : n;
        return function (o) {
          var l = a.exec(o);
          if (!l) return !1;
          for (
            var i = l[0],
              s = l.index,
              v = Object.create(null),
              f = function (g) {
                if (l[g] === void 0) return 'continue';
                var y = e[g - 1];
                y.modifier === '*' || y.modifier === '+'
                  ? (v[y.name] = l[g]
                      .split(y.prefix + y.suffix)
                      .map(function (j) {
                        return r(j, y);
                      }))
                  : (v[y.name] = r(l[g], y));
              },
              h = 1;
            h < l.length;
            h++
          )
            f(h);
          return { path: i, index: s, params: v };
        };
      }
      function ve(a) {
        return a.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
      }
      function at(a) {
        return a && a.sensitive ? '' : 'i';
      }
      function Rt(a, e) {
        if (!e) return a;
        var t = a.source.match(/\((?!\?)/g);
        if (t)
          for (var n = 0; n < t.length; n++)
            e.push({
              name: n,
              prefix: '',
              suffix: '',
              modifier: '',
              pattern: '',
            });
        return a;
      }
      function jt(a, e, t) {
        var n = a.map(function (r) {
          return Ee(r, e, t).source;
        });
        return new RegExp('(?:' + n.join('|') + ')', at(t));
      }
      function wt(a, e, t) {
        return rt(O(a, t), e, t);
      }
      function rt(a, e, t) {
        t === void 0 && (t = {});
        for (
          var n = t.strict,
            r = n === void 0 ? !1 : n,
            o = t.start,
            l = o === void 0 ? !0 : o,
            i = t.end,
            s = i === void 0 ? !0 : i,
            v = t.encode,
            f =
              v === void 0
                ? function (I) {
                    return I;
                  }
                : v,
            h = '[' + ve(t.endsWith || '') + ']|$',
            g = '[' + ve(t.delimiter || '/#?') + ']',
            y = l ? '^' : '',
            j = 0,
            M = a;
          j < M.length;
          j++
        ) {
          var x = M[j];
          if (typeof x == 'string') y += ve(f(x));
          else {
            var m = ve(f(x.prefix)),
              C = ve(f(x.suffix));
            if (x.pattern)
              if ((e && e.push(x), m || C))
                if (x.modifier === '+' || x.modifier === '*') {
                  var $ = x.modifier === '*' ? '?' : '';
                  y +=
                    '(?:' +
                    m +
                    '((?:' +
                    x.pattern +
                    ')(?:' +
                    C +
                    m +
                    '(?:' +
                    x.pattern +
                    '))*)' +
                    C +
                    ')' +
                    $;
                } else
                  y += '(?:' + m + '(' + x.pattern + ')' + C + ')' + x.modifier;
              else y += '(' + x.pattern + ')' + x.modifier;
            else y += '(?:' + m + C + ')' + x.modifier;
          }
        }
        if (s) r || (y += g + '?'), (y += t.endsWith ? '(?=' + h + ')' : '$');
        else {
          var S = a[a.length - 1],
            b =
              typeof S == 'string'
                ? g.indexOf(S[S.length - 1]) > -1
                : S === void 0;
          r || (y += '(?:' + g + '(?=' + h + '))?'),
            b || (y += '(?=' + g + '|' + h + ')');
        }
        return new RegExp(y, at(t));
      }
      function Ee(a, e, t) {
        return a instanceof RegExp
          ? Rt(a, e)
          : Array.isArray(a)
          ? jt(a, e, t)
          : wt(a, e, t);
      }
      function Re(a, e) {
        return (e >>> a) | (e << (32 - a));
      }
      function Tt(a, e, t) {
        return (a & e) ^ (~a & t);
      }
      function Pt(a, e, t) {
        return (a & e) ^ (a & t) ^ (e & t);
      }
      function xt(a) {
        return Re(2, a) ^ Re(13, a) ^ Re(22, a);
      }
      function Ct(a) {
        return Re(6, a) ^ Re(11, a) ^ Re(25, a);
      }
      function An(a) {
        return Re(7, a) ^ Re(18, a) ^ (a >>> 3);
      }
      function On(a) {
        return Re(17, a) ^ Re(19, a) ^ (a >>> 10);
      }
      function En(a, e) {
        return (a[e & 15] +=
          On(a[(e + 14) & 15]) + a[(e + 9) & 15] + An(a[(e + 1) & 15]));
      }
      var Dn = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ],
        z,
        fe,
        ie,
        zn = '0123456789abcdef';
      function Vt(a, e) {
        var t = (a & 65535) + (e & 65535),
          n = (a >> 16) + (e >> 16) + (t >> 16);
        return (n << 16) | (t & 65535);
      }
      function Fn() {
        (z = new Array(8)),
          (fe = new Array(2)),
          (ie = new Array(64)),
          (fe[0] = fe[1] = 0),
          (z[0] = 1779033703),
          (z[1] = 3144134277),
          (z[2] = 1013904242),
          (z[3] = 2773480762),
          (z[4] = 1359893119),
          (z[5] = 2600822924),
          (z[6] = 528734635),
          (z[7] = 1541459225);
      }
      function Nt() {
        var a,
          e,
          t,
          n,
          r,
          o,
          l,
          i,
          s,
          v,
          f = new Array(16);
        (a = z[0]),
          (e = z[1]),
          (t = z[2]),
          (n = z[3]),
          (r = z[4]),
          (o = z[5]),
          (l = z[6]),
          (i = z[7]);
        for (var h = 0; h < 16; h++)
          f[h] =
            ie[(h << 2) + 3] |
            (ie[(h << 2) + 2] << 8) |
            (ie[(h << 2) + 1] << 16) |
            (ie[h << 2] << 24);
        for (var g = 0; g < 64; g++)
          (s = i + Ct(r) + Tt(r, o, l) + Dn[g]),
            g < 16 ? (s += f[g]) : (s += En(f, g)),
            (v = xt(a) + Pt(a, e, t)),
            (i = l),
            (l = o),
            (o = r),
            (r = Vt(n, s)),
            (n = t),
            (t = e),
            (e = a),
            (a = Vt(s, v));
        (z[0] += a),
          (z[1] += e),
          (z[2] += t),
          (z[3] += n),
          (z[4] += r),
          (z[5] += o),
          (z[6] += l),
          (z[7] += i);
      }
      function Wn(a, e) {
        var t,
          n,
          r = 0;
        n = (fe[0] >> 3) & 63;
        var o = e & 63;
        for (
          (fe[0] += e << 3) < e << 3 && fe[1]++, fe[1] += e >> 29, t = 0;
          t + 63 < e;
          t += 64
        ) {
          for (var l = n; l < 64; l++) ie[l] = a.charCodeAt(r++);
          Nt(), (n = 0);
        }
        for (var i = 0; i < o; i++) ie[i] = a.charCodeAt(r++);
      }
      function Kn() {
        var a = (fe[0] >> 3) & 63;
        if (((ie[a++] = 128), a <= 56)) for (var e = a; e < 56; e++) ie[e] = 0;
        else {
          for (var t = a; t < 64; t++) ie[t] = 0;
          Nt();
          for (var n = 0; n < 56; n++) ie[n] = 0;
        }
        (ie[56] = (fe[1] >>> 24) & 255),
          (ie[57] = (fe[1] >>> 16) & 255),
          (ie[58] = (fe[1] >>> 8) & 255),
          (ie[59] = fe[1] & 255),
          (ie[60] = (fe[0] >>> 24) & 255),
          (ie[61] = (fe[0] >>> 16) & 255),
          (ie[62] = (fe[0] >>> 8) & 255),
          (ie[63] = fe[0] & 255),
          Nt();
      }
      function Ho() {
        for (var a = 0, e = new Array(32), t = 0; t < 8; t++)
          (e[a++] = (z[t] >>> 24) & 255),
            (e[a++] = (z[t] >>> 16) & 255),
            (e[a++] = (z[t] >>> 8) & 255),
            (e[a++] = z[t] & 255);
        return e;
      }
      function Gn() {
        for (var a = new String(), e = 0; e < 8; e++)
          for (var t = 28; t >= 0; t -= 4) a += zn.charAt((z[e] >>> t) & 15);
        return a;
      }
      function Un(a) {
        return Fn(), Wn(a, a.length), Kn(), Gn();
      }
      var Vn = Un;
      function _t(a) {
        return (
          (_t =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    typeof Symbol == 'function' &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          _t(a)
        );
      }
      var Xn = [
        'pro_layout_parentKeys',
        'children',
        'icon',
        'flatMenu',
        'indexRoute',
        'routes',
      ];
      function Yn(a, e) {
        return kn(a) || Jn(a, e) || Bt(a, e) || Qn();
      }
      function Qn() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Jn(a, e) {
        var t =
          a == null
            ? null
            : (typeof Symbol != 'undefined' && a[Symbol.iterator]) ||
              a['@@iterator'];
        if (t != null) {
          var n = [],
            r = !0,
            o = !1,
            l,
            i;
          try {
            for (
              t = t.call(a);
              !(r = (l = t.next()).done) &&
              (n.push(l.value), !(e && n.length === e));
              r = !0
            );
          } catch (s) {
            (o = !0), (i = s);
          } finally {
            try {
              !r && t.return != null && t.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        }
      }
      function kn(a) {
        if (Array.isArray(a)) return a;
      }
      function qn(a, e) {
        var t =
          (typeof Symbol != 'undefined' && a[Symbol.iterator]) ||
          a['@@iterator'];
        if (!t) {
          if (
            Array.isArray(a) ||
            (t = Bt(a)) ||
            (e && a && typeof a.length == 'number')
          ) {
            t && (a = t);
            var n = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return n >= a.length
                  ? { done: !0 }
                  : { done: !1, value: a[n++] };
              },
              e: function (v) {
                throw v;
              },
              f: r,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var o = !0,
          l = !1,
          i;
        return {
          s: function () {
            t = t.call(a);
          },
          n: function () {
            var v = t.next();
            return (o = v.done), v;
          },
          e: function (v) {
            (l = !0), (i = v);
          },
          f: function () {
            try {
              !o && t.return != null && t.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      }
      function ea(a, e) {
        if (!(a instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      function Xt(a, e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(a, n.key, n);
        }
      }
      function ta(a, e, t) {
        return (
          e && Xt(a.prototype, e),
          t && Xt(a, t),
          Object.defineProperty(a, 'prototype', { writable: !1 }),
          a
        );
      }
      function na(a, e) {
        if (typeof e != 'function' && e !== null)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (a.prototype = Object.create(e && e.prototype, {
          constructor: { value: a, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(a, 'prototype', { writable: !1 }),
          e && st(a, e);
      }
      function aa(a) {
        var e = Yt();
        return function () {
          var n = ct(a),
            r;
          if (e) {
            var o = ct(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return ra(this, r);
        };
      }
      function ra(a, e) {
        if (e && (_t(e) === 'object' || typeof e == 'function')) return e;
        if (e !== void 0)
          throw new TypeError(
            'Derived constructors may only return object or undefined',
          );
        return oa(a);
      }
      function oa(a) {
        if (a === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return a;
      }
      function Lt(a) {
        var e = typeof Map == 'function' ? new Map() : void 0;
        return (
          (Lt = function (n) {
            if (n === null || !ia(n)) return n;
            if (typeof n != 'function')
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            if (typeof e != 'undefined') {
              if (e.has(n)) return e.get(n);
              e.set(n, r);
            }
            function r() {
              return bt(n, arguments, ct(this).constructor);
            }
            return (
              (r.prototype = Object.create(n.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              st(r, n)
            );
          }),
          Lt(a)
        );
      }
      function bt(a, e, t) {
        return (
          Yt()
            ? (bt = Reflect.construct.bind())
            : (bt = function (r, o, l) {
                var i = [null];
                i.push.apply(i, o);
                var s = Function.bind.apply(r, i),
                  v = new s();
                return l && st(v, l.prototype), v;
              }),
          bt.apply(null, arguments)
        );
      }
      function Yt() {
        if (
          typeof Reflect == 'undefined' ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if (typeof Proxy == 'function') return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (a) {
          return !1;
        }
      }
      function ia(a) {
        return Function.toString.call(a).indexOf('[native code]') !== -1;
      }
      function st(a, e) {
        return (
          (st = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, r) {
                return (n.__proto__ = r), n;
              }),
          st(a, e)
        );
      }
      function ct(a) {
        return (
          (ct = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          ct(a)
        );
      }
      function Qt(a) {
        return da(a) || ua(a) || Bt(a) || la();
      }
      function la() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Bt(a, e) {
        if (a) {
          if (typeof a == 'string') return Ht(a, e);
          var t = Object.prototype.toString.call(a).slice(8, -1);
          if (
            (t === 'Object' && a.constructor && (t = a.constructor.name),
            t === 'Map' || t === 'Set')
          )
            return Array.from(a);
          if (
            t === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          )
            return Ht(a, e);
        }
      }
      function ua(a) {
        if (
          (typeof Symbol != 'undefined' && a[Symbol.iterator] != null) ||
          a['@@iterator'] != null
        )
          return Array.from(a);
      }
      function da(a) {
        if (Array.isArray(a)) return Ht(a);
      }
      function Ht(a, e) {
        (e == null || e > a.length) && (e = a.length);
        for (var t = 0, n = new Array(e); t < e; t++) n[t] = a[t];
        return n;
      }
      function sa(a, e) {
        if (a == null) return {};
        var t = ca(a, e),
          n,
          r;
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(a);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              !(e.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(a, n) &&
                (t[n] = a[n]);
        }
        return t;
      }
      function ca(a, e) {
        if (a == null) return {};
        var t = {},
          n = Object.keys(a),
          r,
          o;
        for (o = 0; o < n.length; o++)
          (r = n[o]), !(e.indexOf(r) >= 0) && (t[r] = a[r]);
        return t;
      }
      function Jt(a, e) {
        var t = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(a);
          e &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(a, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function re(a) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e] != null ? arguments[e] : {};
          e % 2
            ? Jt(Object(t), !0).forEach(function (n) {
                vt(a, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
            : Jt(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  a,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              });
        }
        return a;
      }
      function vt(a, e, t) {
        return (
          e in a
            ? Object.defineProperty(a, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[e] = t),
          a
        );
      }
      var me = 'routes';
      function ft(a) {
        return a.split('?')[0].split('#')[0];
      }
      var At = function (e) {
          if (!e.startsWith('http')) return !1;
          try {
            var t = new URL(e);
            return !!t;
          } catch (n) {
            return !1;
          }
        },
        va = function (e) {
          var t = e.path;
          if (!t || t === '/')
            try {
              return '/'.concat(Vn(JSON.stringify(e)));
            } catch (n) {}
          return t && ft(t);
        },
        fa = function (e, t) {
          var n = e.name,
            r = e.locale;
          return ('locale' in e && r === !1) || !n
            ? !1
            : e.locale || ''.concat(t, '.').concat(n);
        },
        kt = function () {
          var e =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : '',
            t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : '/';
          return e.endsWith('/*')
            ? e.replace('/*', '/')
            : (e || t).startsWith('/') || At(e)
            ? e
            : '/'
                .concat(t, '/')
                .concat(e)
                .replace(/\/\//g, '/')
                .replace(/\/\//g, '/');
        },
        pa = function (e, t) {
          var n = e.menu,
            r = n === void 0 ? {} : n,
            o = e.indexRoute,
            l = e.path,
            i = l === void 0 ? '' : l,
            s = e.children || e[me],
            v = r.name,
            f = v === void 0 ? e.name : v,
            h = r.icon,
            g = h === void 0 ? e.icon : h,
            y = r.hideChildren,
            j = y === void 0 ? e.hideChildren : y,
            M = r.flatMenu,
            x = M === void 0 ? e.flatMenu : M,
            m =
              o && Object.keys(o).join(',') !== 'redirect'
                ? [re({ path: i, menu: r }, o)].concat(s || [])
                : s,
            C = re({}, e);
          if ((f && (C.name = f), g && (C.icon = g), m && m.length)) {
            if (j) return delete C[me], delete C.children, C;
            var $ = Ot(re(re({}, t), {}, { data: m }), e);
            if (x) return $;
            C[me] = $;
          }
          return C;
        },
        Ke = function (e) {
          return Array.isArray(e) && e.length > 0;
        };
      function Ot(a) {
        var e =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : { path: '/' },
          t = a.data,
          n = a.formatMessage,
          r = a.parentName,
          o = a.locale;
        return !t || !Array.isArray(t)
          ? []
          : t
              .filter(function (l) {
                return l
                  ? Ke(l[me]) ||
                    Ke(l.children) ||
                    l.path ||
                    l.originPath ||
                    l.layout
                    ? !0
                    : (l.redirect || l.unaccessible, !1)
                  : !1;
              })
              .filter(function (l) {
                var i, s;
                return (!(l == null || (i = l.menu) === null || i === void 0) &&
                  i.name) ||
                  (l != null && l.flatMenu) ||
                  (!(l == null || (s = l.menu) === null || s === void 0) &&
                    s.flatMenu)
                  ? !0
                  : l.menu !== !1;
              })
              .map(function (l) {
                var i = re({}, l);
                return (
                  i.unaccessible && delete i.name,
                  i.path === '*' && (i.path = '.'),
                  i.path === '/*' && (i.path = '.'),
                  !i.path && i.originPath && (i.path = i.originPath),
                  i
                );
              })
              .map(function () {
                var l =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : { path: '/' },
                  i = l.children || l[me],
                  s = kt(l.path, e ? e.path : '/'),
                  v = l.name,
                  f = fa(l, r || 'menu'),
                  h =
                    f !== !1 && o !== !1 && n && f
                      ? n({ id: f, defaultMessage: v })
                      : v,
                  g = e.pro_layout_parentKeys,
                  y = g === void 0 ? [] : g,
                  j = e.children,
                  M = e.icon,
                  x = e.flatMenu,
                  m = e.indexRoute,
                  C = e.routes,
                  $ = sa(e, Xn),
                  S = new Set([].concat(Qt(y), Qt(l.parentKeys || [])));
                e.key && S.add(e.key);
                var b = re(
                  re(re({}, $), {}, { menu: void 0 }, l),
                  {},
                  {
                    path: s,
                    locale: f,
                    key: l.key || va(re(re({}, l), {}, { path: s })),
                    pro_layout_parentKeys: Array.from(S).filter(function (R) {
                      return R && R !== '/';
                    }),
                  },
                );
                if (
                  (h ? (b.name = h) : delete b.name,
                  b.menu === void 0 && delete b.menu,
                  Ke(i))
                ) {
                  var I = Ot(
                    re(re({}, a), {}, { data: i, parentName: f || '' }),
                    b,
                  );
                  Ke(I) && ((b[me] = I), (b.children = I));
                }
                return pa(b, a);
              })
              .flat(1);
      }
      var ha = Pe(Ot, U()),
        ga = function a() {
          var e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          return e
            .filter(function (t) {
              return (
                t &&
                (t.name || Ke(t[me]) || Ke(t.children)) &&
                !t.hideInMenu &&
                !t.redirect
              );
            })
            .map(function (t) {
              var n = re({}, t),
                r = n.children || n[me];
              if (
                Ke(r) &&
                !n.hideChildrenInMenu &&
                r.some(function (i) {
                  return i && !!i.name;
                })
              ) {
                var o,
                  l = a(r);
                if (l.length)
                  return re(
                    re({}, n),
                    {},
                    ((o = {}), vt(o, me, l), vt(o, 'children', l), o),
                  );
              }
              return re(re({}, t), {}, vt({}, me, void 0));
            })
            .filter(function (t) {
              return t;
            });
        },
        ma = (function (a) {
          na(t, a);
          var e = aa(t);
          function t() {
            return ea(this, t), e.apply(this, arguments);
          }
          return (
            ta(t, [
              {
                key: 'get',
                value: function (r) {
                  var o;
                  try {
                    var l = qn(this.entries()),
                      i;
                    try {
                      for (l.s(); !(i = l.n()).done; ) {
                        var s = Yn(i.value, 2),
                          v = s[0],
                          f = s[1],
                          h = ft(v);
                        if (!At(v) && Ee(h, []).test(r)) {
                          o = f;
                          break;
                        }
                      }
                    } catch (g) {
                      l.e(g);
                    } finally {
                      l.f();
                    }
                  } catch (g) {
                    o = void 0;
                  }
                  return o;
                },
              },
            ]),
            t
          );
        })(Lt(Map)),
        ya = function (e) {
          var t = new ma(),
            n = function r(o, l) {
              o.forEach(function (i) {
                var s = i.children || i[me];
                Ke(s) && r(s, i);
                var v = kt(i.path, l ? l.path : '/');
                t.set(ft(v), i);
              });
            };
          return n(e), t;
        },
        xa = Pe(ya, U()),
        Ca = function a() {
          var e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          return e
            .map(function (t) {
              var n = t.children || t[me];
              if (Ke(n)) {
                var r = a(n);
                if (r.length) return re(re({}, t), {}, vt({}, me, r));
              }
              var o = re({}, t);
              return delete o[me], delete o.children, o;
            })
            .filter(function (t) {
              return t;
            });
        },
        ba = function (e, t, n, r) {
          var o = ha({ data: e, formatMessage: n, locale: t }),
            l = r ? Ca(o) : ga(o),
            i = xa(o);
          return { breadcrumb: i, menuData: l };
        },
        Sa = ba;
      function qt(a, e) {
        var t = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(a);
          e &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(a, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function St(a) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e] != null ? arguments[e] : {};
          e % 2
            ? qt(Object(t), !0).forEach(function (n) {
                Za(a, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
            : qt(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  a,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              });
        }
        return a;
      }
      function Za(a, e, t) {
        return (
          e in a
            ? Object.defineProperty(a, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[e] = t),
          a
        );
      }
      var Ma = function a() {
          var e =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : [],
            t = {};
          return (
            e.forEach(function (n) {
              if (!(!n || !n.key)) {
                var r = n.children || n[me];
                (t[ft(n.path || n.key || '/')] = St({}, n)),
                  (t[n.key || n.path || '/'] = St({}, n)),
                  r && (t = St(St({}, t), a(r)));
              }
            }),
            t
          );
        },
        $a = Ma,
        Ia = function () {
          var e =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
          return e
            .filter(function (r) {
              if (r === '/' && t === '/') return !0;
              if (r !== '/' && r !== '/*' && r && !At(r)) {
                var o = ft(r);
                try {
                  if (
                    (n && Ee(''.concat(o)).test(t)) ||
                    Ee(''.concat(o), []).test(t) ||
                    Ee(''.concat(o, '/(.*)')).test(t)
                  )
                    return !0;
                } catch (l) {}
              }
              return !1;
            })
            .sort(function (r, o) {
              return r === t
                ? 10
                : o === t
                ? -10
                : r.substr(1).split('/').length - o.substr(1).split('/').length;
            });
        },
        Ra = function (e, t, n, r) {
          var o = $a(t),
            l = Object.keys(o),
            i = Ia(l, e || '/', r);
          return !i || i.length < 1
            ? []
            : (n || (i = [i[i.length - 1]]),
              i
                .map(function (s) {
                  var v = o[s] || { pro_layout_parentKeys: '', key: '' },
                    f = new Map(),
                    h = (v.pro_layout_parentKeys || [])
                      .map(function (g) {
                        return f.has(g) ? null : (f.set(g, !0), o[g]);
                      })
                      .filter(function (g) {
                        return g;
                      });
                  return v.key && h.push(v), h;
                })
                .flat(1));
        },
        ja = Ra,
        De = w(58720),
        Zt = w(84321),
        wa = w(7293);
      const pt = Zt.ZP;
      (pt.Header = Zt.h4),
        (pt.Footer = Zt.$_),
        (pt.Content = Zt.VY),
        (pt.Sider = wa.Z);
      var ot = pt,
        Ta = w(94184),
        D = w.n(Ta),
        en = w(97435),
        Pa = w(45520),
        tn = w(59734),
        Na = w(59209),
        _a = function () {
          return (0, d.jsxs)('svg', {
            width: '1em',
            height: '1em',
            viewBox: '0 0 200 200',
            children: [
              (0, d.jsxs)('defs', {
                children: [
                  (0, d.jsxs)('linearGradient', {
                    x1: '62.1023273%',
                    y1: '0%',
                    x2: '108.19718%',
                    y2: '37.8635764%',
                    id: 'linearGradient-1',
                    children: [
                      (0, d.jsx)('stop', {
                        stopColor: '#4285EB',
                        offset: '0%',
                      }),
                      (0, d.jsx)('stop', {
                        stopColor: '#2EC7FF',
                        offset: '100%',
                      }),
                    ],
                  }),
                  (0, d.jsxs)('linearGradient', {
                    x1: '69.644116%',
                    y1: '0%',
                    x2: '54.0428975%',
                    y2: '108.456714%',
                    id: 'linearGradient-2',
                    children: [
                      (0, d.jsx)('stop', {
                        stopColor: '#29CDFF',
                        offset: '0%',
                      }),
                      (0, d.jsx)('stop', {
                        stopColor: '#148EFF',
                        offset: '37.8600687%',
                      }),
                      (0, d.jsx)('stop', {
                        stopColor: '#0A60FF',
                        offset: '100%',
                      }),
                    ],
                  }),
                  (0, d.jsxs)('linearGradient', {
                    x1: '69.6908165%',
                    y1: '-12.9743587%',
                    x2: '16.7228981%',
                    y2: '117.391248%',
                    id: 'linearGradient-3',
                    children: [
                      (0, d.jsx)('stop', {
                        stopColor: '#FA816E',
                        offset: '0%',
                      }),
                      (0, d.jsx)('stop', {
                        stopColor: '#F74A5C',
                        offset: '41.472606%',
                      }),
                      (0, d.jsx)('stop', {
                        stopColor: '#F51D2C',
                        offset: '100%',
                      }),
                    ],
                  }),
                  (0, d.jsxs)('linearGradient', {
                    x1: '68.1279872%',
                    y1: '-35.6905737%',
                    x2: '30.4400914%',
                    y2: '114.942679%',
                    id: 'linearGradient-4',
                    children: [
                      (0, d.jsx)('stop', {
                        stopColor: '#FA8E7D',
                        offset: '0%',
                      }),
                      (0, d.jsx)('stop', {
                        stopColor: '#F74A5C',
                        offset: '51.2635191%',
                      }),
                      (0, d.jsx)('stop', {
                        stopColor: '#F51D2C',
                        offset: '100%',
                      }),
                    ],
                  }),
                ],
              }),
              (0, d.jsx)('g', {
                stroke: 'none',
                strokeWidth: 1,
                fill: 'none',
                fillRule: 'evenodd',
                children: (0, d.jsx)('g', {
                  transform: 'translate(-20.000000, -20.000000)',
                  children: (0, d.jsx)('g', {
                    transform: 'translate(20.000000, 20.000000)',
                    children: (0, d.jsxs)('g', {
                      children: [
                        (0, d.jsxs)('g', {
                          fillRule: 'nonzero',
                          children: [
                            (0, d.jsxs)('g', {
                              children: [
                                (0, d.jsx)('path', {
                                  d: 'M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C99.2571609,26.9692191 101.032305,26.9692191 102.20193,28.1378823 L129.985225,55.8983314 C134.193707,60.1033528 141.017005,60.1033528 145.225487,55.8983314 C149.433969,51.69331 149.433969,44.8756232 145.225487,40.6706018 L108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z',
                                  fill: 'url(#linearGradient-1)',
                                }),
                                (0, d.jsx)('path', {
                                  d: 'M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C100.999864,25.6271836 105.751642,20.541824 112.729652,19.3524487 C117.915585,18.4685261 123.585219,20.4140239 129.738554,25.1889424 C125.624663,21.0784292 118.571995,14.0340304 108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z',
                                  fill: 'url(#linearGradient-2)',
                                }),
                              ],
                            }),
                            (0, d.jsx)('path', {
                              d: 'M153.685633,135.854579 C157.894115,140.0596 164.717412,140.0596 168.925894,135.854579 L195.959977,108.842726 C200.659183,104.147384 200.659183,96.5636133 195.960527,91.8688194 L168.690777,64.7181159 C164.472332,60.5180858 157.646868,60.5241425 153.435895,64.7316526 C149.227413,68.936674 149.227413,75.7543607 153.435895,79.9593821 L171.854035,98.3623765 C173.02366,99.5310396 173.02366,101.304724 171.854035,102.473387 L153.685633,120.626849 C149.47715,124.83187 149.47715,131.649557 153.685633,135.854579 Z',
                              fill: 'url(#linearGradient-3)',
                            }),
                          ],
                        }),
                        (0, d.jsx)('ellipse', {
                          fill: 'url(#linearGradient-4)',
                          cx: '100.519339',
                          cy: '100.436681',
                          rx: '23.6001926',
                          ry: '23.580786',
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        La = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z',
                },
              },
            ],
          },
          name: 'copyright',
          theme: 'outlined',
        },
        Ba = La,
        nn = w(84089),
        an = function (e, t) {
          return Z.createElement(
            nn.Z,
            (0, c.Z)((0, c.Z)({}, e), {}, { ref: t, icon: Ba }),
          );
        };
      an.displayName = 'CopyrightOutlined';
      var Ha = Z.forwardRef(an),
        ye = w(14855),
        Aa = function (e) {
          return (0, u.Z)({}, e.componentCls, {
            marginBlock: 0,
            marginBlockStart: 48,
            marginBlockEnd: 24,
            marginInline: 0,
            paddingBlock: 0,
            paddingInline: 16,
            textAlign: 'center',
            '&-list': {
              marginBlockEnd: 8,
              color: e.colorTextSecondary,
              '&-link': {
                color: e.colorTextSecondary,
                textDecoration: e.linkDecoration,
              },
              '*:not(:last-child)': {
                marginInlineEnd: 8,
                '&:hover': { color: e.colorText },
              },
            },
            '&-copyright': { fontSize: '14px', color: e.colorText },
          });
        };
      function Oa(a) {
        return (0, ye.Xj)('ProLayoutFooter', function (e) {
          var t = (0, c.Z)(
            (0, c.Z)({}, e),
            {},
            { componentCls: '.'.concat(a) },
          );
          return [Aa(t)];
        });
      }
      var Ea = function (e) {
          var t = e.className,
            n = e.prefixCls,
            r = e.links,
            o = e.copyright,
            l = e.style,
            i = (0, Z.useContext)(De.ZP.ConfigContext),
            s = i.getPrefixCls(n || 'pro-global-footer'),
            v = Oa(s),
            f = v.wrapSSR,
            h = v.hashId;
          return (r == null ||
            r === !1 ||
            (Array.isArray(r) && r.length === 0)) &&
            (o == null || o === !1)
            ? null
            : f(
                (0, d.jsxs)('div', {
                  className: D()(s, h, t),
                  style: l,
                  children: [
                    r &&
                      (0, d.jsx)('div', {
                        className: ''.concat(s, '-list ').concat(h),
                        children: r.map(function (g) {
                          return (0,
                          d.jsx)('a', { className: ''.concat(s, '-list-link ').concat(h), title: g.key, target: g.blankTarget ? '_blank' : '_self', href: g.href, rel: 'noreferrer', children: g.title }, g.key);
                        }),
                      }),
                    o &&
                      (0, d.jsx)('div', {
                        className: ''.concat(s, '-copyright ').concat(h),
                        children: o,
                      }),
                  ],
                }),
              );
        },
        Da = ot.Footer,
        za = function (e) {
          var t = e.links,
            n = e.copyright,
            r = e.style,
            o = e.className,
            l = e.prefixCls;
          return (0, d.jsx)(Da, {
            className: o,
            style: (0, c.Z)({ padding: 0 }, r),
            children: (0, d.jsx)(Ea, {
              links: t,
              prefixCls: l,
              copyright:
                n === !1
                  ? null
                  : (0, d.jsxs)(Z.Fragment, {
                      children: [(0, d.jsx)(Ha, {}), ' ', n],
                    }),
            }),
          });
        },
        Fa = function (e) {
          var t, n, r, o, l, i;
          return (0, u.Z)(
            {},
            ''.concat(e.proComponentsCls, '-layout'),
            (0, u.Z)(
              {},
              ''.concat(e.antCls, '-layout-header').concat(e.componentCls),
              {
                height:
                  (e == null ||
                  (t = e.layout) === null ||
                  t === void 0 ||
                  (n = t.header) === null ||
                  n === void 0
                    ? void 0
                    : n.heightLayoutHeader) || 56,
                lineHeight: ''.concat(
                  (e == null ||
                  (r = e.layout) === null ||
                  r === void 0 ||
                  (o = r.header) === null ||
                  o === void 0
                    ? void 0
                    : o.heightLayoutHeader) || 56,
                  'px',
                ),
                zIndex: 19,
                width: '100%',
                paddingBlock: 0,
                paddingInline: 8,
                borderBlockEnd: '1px solid '.concat(e.colorSplit),
                backgroundColor:
                  (e == null ||
                  (l = e.layout) === null ||
                  l === void 0 ||
                  (i = l.header) === null ||
                  i === void 0
                    ? void 0
                    : i.colorBgHeader) || 'rgba(255, 255, 255, 0.4)',
                WebkitBackdropFilter: 'blur(8px)',
                backdropFilter: 'blur(8px)',
                '&-fixed-header': {
                  position: 'fixed',
                  insetBlockStart: 0,
                  width: '100%',
                  zIndex: 100,
                  insetInlineEnd: 0,
                },
                '&-header-actions': {
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '16',
                  cursor: 'pointer',
                  '& &-item': {
                    paddingBlock: 0,
                    paddingInline: 8,
                    '&:hover': { color: e.colorText },
                  },
                },
                '&-header-realDark': {
                  boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 65%)',
                },
                '&-header-actions-header-action': {
                  transition: 'width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
                },
              },
            ),
          );
        };
      function Wa(a) {
        return (0, ye.Xj)('ProLayoutHeader', function (e) {
          var t = (0, c.Z)(
            (0, c.Z)({}, e),
            {},
            { componentCls: '.'.concat(a) },
          );
          return [Fa(t)];
        });
      }
      var rn = function a(e) {
          return (e || []).reduce(function (t, n) {
            if ((n.key && t.push(n.key), n.routes)) {
              var r = t.concat(a(n.routes) || []);
              return r;
            }
            return t;
          }, []);
        },
        on = {
          techBlue: '#1677FF',
          daybreak: '#1890ff',
          dust: '#F5222D',
          volcano: '#FA541C',
          sunset: '#FAAD14',
          cyan: '#13C2C2',
          green: '#52C41A',
          geekblue: '#2F54EB',
          purple: '#722ED1',
        };
      function Ao(a) {
        return a && on[a] ? on[a] : a;
      }
      function Mt(a) {
        return a
          .map(function (e) {
            var t = e.children || [],
              n = (0, c.Z)({}, e);
            if (
              (!n.children && n.routes && (n.children = n.routes),
              !n.name || n.hideInMenu)
            )
              return null;
            if (n && n != null && n.children) {
              if (
                !n.hideChildrenInMenu &&
                t.some(function (r) {
                  return r && r.name && !r.hideInMenu;
                })
              )
                return (0, c.Z)((0, c.Z)({}, e), {}, { children: Mt(t) });
              delete n.children;
            }
            return delete n.routes, n;
          })
          .filter(function (e) {
            return e;
          });
      }
      var Ka = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z',
                },
              },
            ],
          },
          name: 'menu',
          theme: 'outlined',
        },
        Ga = Ka,
        ln = function (e, t) {
          return Z.createElement(
            nn.Z,
            (0, c.Z)((0, c.Z)({}, e), {}, { ref: t, icon: Ga }),
          );
        };
      ln.displayName = 'MenuOutlined';
      var Ua = Z.forwardRef(ln),
        un = w(73177),
        Va = w(55241),
        Xa = function () {
          return (0, d.jsx)('svg', {
            width: '1em',
            height: '1em',
            viewBox: '0 0 12 12',
            fill: 'currentColor',
            'aria-hidden': 'true',
            children: (0, d.jsx)('path', {
              d: 'M0 0h3v3H0V0zm4.5 0h3v3h-3V0zM9 0h3v3H9V0zM0 4.5h3v3H0v-3zm4.503 0h3v3h-3v-3zM9 4.5h3v3H9v-3zM0 9h3v3H0V9zm4.503 0h3v3h-3V9zM9 9h3v3H9V9z',
            }),
          });
        },
        Ya = function a(e) {
          var t = e.appList,
            n = e.baseClassName,
            r = e.hashId;
          return (0, d.jsx)('div', {
            className: ''.concat(n, '-content ').concat(r),
            children: (0, d.jsx)('ul', {
              className: ''.concat(n, '-content-list ').concat(r),
              children:
                t == null
                  ? void 0
                  : t.map(function (o, l) {
                      var i;
                      return !(
                        o == null ||
                        (i = o.children) === null ||
                        i === void 0
                      ) && i.length
                        ? (0, d.jsxs)('div', {
                            className: ''
                              .concat(n, '-content-list-item-group ')
                              .concat(r),
                            children: [
                              (0, d.jsx)('div', {
                                className: ''
                                  .concat(n, '-content-list-item-group-title ')
                                  .concat(r),
                                children: o.title,
                              }),
                              (0, d.jsx)(a, {
                                hashId: r,
                                appList: o == null ? void 0 : o.children,
                                baseClassName: n,
                              }),
                            ],
                          })
                        : (0, d.jsx)(
                            'li',
                            {
                              className: ''
                                .concat(n, '-content-list-item ')
                                .concat(r),
                              children: (0, d.jsxs)('a', {
                                href: o.url,
                                target: o.target,
                                rel: 'noreferrer',
                                children: [
                                  Dt(o.icon),
                                  (0, d.jsxs)('div', {
                                    children: [
                                      (0, d.jsx)('div', { children: o.title }),
                                      o.desc
                                        ? (0, d.jsx)('span', {
                                            children: o.desc,
                                          })
                                        : null,
                                    ],
                                  }),
                                ],
                              }),
                            },
                            l,
                          );
                    }),
            }),
          });
        },
        Et = function (e) {
          if (!e || !e.startsWith('http')) return !1;
          try {
            var t = new URL(e);
            return !!t;
          } catch (n) {
            return !1;
          }
        },
        Qa = function (e, t) {
          if (e && typeof e == 'string' && Et(e))
            return (0, d.jsx)('img', { src: e, alt: 'logo' });
          if (typeof e == 'function') return e();
          if (e && typeof e == 'string')
            return (0, d.jsx)('div', { id: 'avatarLogo', children: e });
          if (!e && t && typeof t == 'string') {
            var n = t.substring(0, 1);
            return (0, d.jsx)('div', { id: 'avatarLogo', children: n });
          }
          return e;
        },
        Ja = function a(e) {
          var t = e.appList,
            n = e.baseClassName,
            r = e.hashId;
          return (0, d.jsx)('div', {
            className: ''.concat(n, '-content ').concat(r),
            children: (0, d.jsx)('ul', {
              className: ''.concat(n, '-content-list ').concat(r),
              children:
                t == null
                  ? void 0
                  : t.map(function (o, l) {
                      var i;
                      return !(
                        o == null ||
                        (i = o.children) === null ||
                        i === void 0
                      ) && i.length
                        ? (0, d.jsxs)('div', {
                            className: ''
                              .concat(n, '-content-list-item-group ')
                              .concat(r),
                            children: [
                              (0, d.jsx)('div', {
                                className: ''
                                  .concat(n, '-content-list-item-group-title ')
                                  .concat(r),
                                children: o.title,
                              }),
                              (0, d.jsx)(a, {
                                hashId: r,
                                appList: o == null ? void 0 : o.children,
                                baseClassName: n,
                              }),
                            ],
                          })
                        : (0, d.jsx)(
                            'li',
                            {
                              className: ''
                                .concat(n, '-content-list-item ')
                                .concat(r),
                              children: (0, d.jsxs)('a', {
                                href: o.url,
                                target: o.target,
                                rel: 'noreferrer',
                                children: [
                                  Qa(o.icon, o.title),
                                  (0, d.jsx)('div', {
                                    children: (0, d.jsx)('div', {
                                      children: o.title,
                                    }),
                                  }),
                                ],
                              }),
                            },
                            l,
                          );
                    }),
            }),
          });
        },
        ka = function (e) {
          return {
            '&-content': {
              maxHeight: 'calc(100vh - 48px)',
              overflow: 'auto',
              '&-list': {
                boxSizing: 'content-box',
                maxWidth: 656,
                marginBlock: 0,
                marginInline: 0,
                paddingBlock: 0,
                paddingInline: 0,
                listStyle: 'none',
                '> *': { boxSizing: 'border-box', fontFamily: e.fontFamily },
                '&-item': {
                  position: 'relative',
                  display: 'inline-block',
                  width: 328,
                  height: 72,
                  paddingInline: 16,
                  paddingBlock: 16,
                  verticalAlign: 'top',
                  listStyleType: 'none',
                  transition: 'transform 0.2s cubic-bezier(0.333, 0, 0, 1)',
                  borderRadius: e.borderRadius,
                  '&-group': {
                    marginBottom: 16,
                    '&-title': {
                      margin: '16px 0 8px 12px',
                      fontWeight: 600,
                      color: 'rgba(0, 0, 0, 0.88)',
                      fontSize: 16,
                      opacity: 0.85,
                      lineHeight: 1.5,
                      '&:first-child': { marginTop: 12 },
                    },
                  },
                  '&:hover': { backgroundColor: e.colorBgTextHover },
                  '*': { boxSizing: 'border-box', fontFamily: e.fontFamily },
                  '* div':
                    ye.Wf === null || ye.Wf === void 0 ? void 0 : (0, ye.Wf)(e),
                  a: {
                    display: 'flex',
                    height: '100%',
                    fontSize: 12,
                    textDecoration: 'none',
                    '& > img': { width: 40, height: 40 },
                    '& > div': {
                      marginInlineStart: 14,
                      color: e.colorTextHeading,
                      fontSize: 14,
                      lineHeight: '22px',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                    },
                    '& > div > span': {
                      color: e.colorTextSecondary,
                      fontSize: 12,
                      lineHeight: '20px',
                    },
                  },
                },
              },
            },
          };
        },
        qa = function (e) {
          return {
            '&-content': {
              maxHeight: 'calc(100vh - 48px)',
              overflow: 'auto',
              '&-list': {
                boxSizing: 'border-box',
                maxWidth: 376,
                marginBlock: 0,
                marginInline: 0,
                paddingBlock: 0,
                paddingInline: 0,
                listStyle: 'none',
                '*': { boxSizing: 'border-box', fontFamily: e.fontFamily },
                '&-item': {
                  position: 'relative',
                  display: 'inline-block',
                  width: 104,
                  height: 104,
                  marginBlock: 8,
                  marginInline: 8,
                  paddingInline: 24,
                  paddingBlock: 24,
                  verticalAlign: 'top',
                  listStyleType: 'none',
                  transition: 'transform 0.2s cubic-bezier(0.333, 0, 0, 1)',
                  borderRadius: e.borderRadius,
                  '&-group': {
                    marginBottom: 16,
                    '&-title': {
                      margin: '16px 0 8px 12px',
                      fontWeight: 600,
                      color: 'rgba(0, 0, 0, 0.88)',
                      fontSize: 16,
                      opacity: 0.85,
                      lineHeight: 1.5,
                      '&:first-child': { marginTop: 12 },
                    },
                  },
                  '&:hover': { backgroundColor: e.colorBgTextHover },
                  a: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100%',
                    fontSize: 12,
                    textDecoration: 'none',
                    '& > #avatarLogo': {
                      width: 40,
                      height: 40,
                      margin: '0 auto',
                      color: e.colorPrimary,
                      fontSize: 22,
                      lineHeight: '40px',
                      textAlign: 'center',
                      backgroundImage:
                        'linear-gradient(180deg, #E8F0FB 0%, #F6F8FC 100%)',
                      borderRadius: e.borderRadius,
                    },
                    '& > img': { width: 40, height: 40 },
                    '& > div': {
                      marginBlockStart: 5,
                      marginInlineStart: 0,
                      color: e.colorTextHeading,
                      fontSize: 14,
                      lineHeight: '22px',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                    },
                    '& > div > span': {
                      color: e.colorTextSecondary,
                      fontSize: 12,
                      lineHeight: '20px',
                    },
                  },
                },
              },
            },
          };
        },
        er = function (e) {
          var t, n, r, o, l, i;
          return (0, u.Z)({}, e.componentCls, {
            '&-icon': {
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingInline: 4,
              paddingBlock: 0,
              fontSize: 14,
              lineHeight: '14px',
              height: 28,
              width: 28,
              cursor: 'pointer',
              color:
                e == null || (t = e.layout) === null || t === void 0
                  ? void 0
                  : t.colorTextAppListIcon,
              '&:hover': {
                color:
                  e == null || (n = e.layout) === null || n === void 0
                    ? void 0
                    : n.colorTextAppListIconHover,
                backgroundColor:
                  e == null || (r = e.layout) === null || r === void 0
                    ? void 0
                    : r.colorBgAppListIconHover,
              },
              '&-active': {
                color:
                  e == null || (o = e.layout) === null || o === void 0
                    ? void 0
                    : o.colorTextAppListIconHover,
                backgroundColor:
                  e == null || (l = e.layout) === null || l === void 0
                    ? void 0
                    : l.colorBgAppListIconHover,
              },
            },
            '&-item-title': {
              marginInline: '16px 0 8px 12px',
              fontWeight: 600,
              color: 'rgba(0, 0, 0, 0.88)',
              fontSize: 16,
              opacity: 0.85,
              lineHeight: 1.5,
              '&:first-child': { marginTop: 12 },
            },
            '&-popover':
              ((i = {}),
              (0, u.Z)(i, ''.concat(e.antCls, '-popover-arrow'), {
                display: 'none',
              }),
              (0, u.Z)(i, '*', {
                boxSizing: 'border-box',
                fontFamily: e.fontFamily,
              }),
              i),
            '&-simple': qa(e),
            '&-default': ka(e),
          });
        };
      function tr(a) {
        return (0, ye.Xj)('AppsLogoComponents', function (e) {
          var t = (0, c.Z)(
            (0, c.Z)({}, e),
            {},
            { componentCls: '.'.concat(a) },
          );
          return [er(t)];
        });
      }
      var Dt = function (e) {
          return typeof e == 'string'
            ? (0, d.jsx)('img', {
                width: 'auto',
                height: 22,
                src: e,
                alt: 'logo',
              })
            : typeof e == 'function'
            ? e()
            : e;
        },
        zt = function (e) {
          var t,
            n = e.appList,
            r = e.prefixCls,
            o = r === void 0 ? 'ant-pro' : r,
            l = Z.useRef(null),
            i = ''.concat(o, '-layout-apps'),
            s = tr(i),
            v = s.wrapSSR,
            f = s.hashId,
            h = (0, Z.useState)(!1),
            g = (0, W.Z)(h, 2),
            y = g[0],
            j = g[1],
            M = (0, Z.useCallback)(
              function (C) {
                var $ =
                  C == null
                    ? void 0
                    : C.some(function (S) {
                        return !(S != null && S.desc);
                      });
                return $
                  ? (0, d.jsx)(Ja, {
                      hashId: f,
                      appList: C,
                      baseClassName: ''.concat(i, '-simple'),
                    })
                  : (0, d.jsx)(Ya, {
                      hashId: f,
                      appList: C,
                      baseClassName: ''.concat(i, '-default'),
                    });
              },
              [f, i],
            ),
            x = (0, Z.useMemo)(
              function () {
                return n == null
                  ? void 0
                  : n.map(function (C) {
                      var $;
                      return !(
                        C == null ||
                        ($ = C.children) === null ||
                        $ === void 0
                      ) && $.length
                        ? (0, d.jsxs)(d.Fragment, {
                            children: [
                              (0, d.jsx)('div', {
                                className: ''
                                  .concat(i, '-item-title ')
                                  .concat(f),
                                children: C.title,
                              }),
                              M(C == null ? void 0 : C.children),
                            ],
                          })
                        : M([C]);
                    });
              },
              [n, i, f],
            );
          if (
            !(
              !(e == null || (t = e.appList) === null || t === void 0) &&
              t.length
            )
          )
            return null;
          var m = (0, un.X)(void 0, function (C) {
            return j(C);
          });
          return v(
            (0, d.jsxs)(d.Fragment, {
              children: [
                (0, d.jsx)('div', {
                  ref: l,
                  onClick: function ($) {
                    $.stopPropagation(), $.preventDefault();
                  },
                }),
                (0, d.jsx)(
                  Va.Z,
                  (0, c.Z)(
                    (0, c.Z)(
                      {
                        placement: 'bottomRight',
                        trigger: ['click'],
                        zIndex: 9999,
                        arrowPointAtCenter: !0,
                      },
                      m,
                    ),
                    {},
                    {
                      overlayClassName: ''.concat(i, '-popover ').concat(f),
                      content: x,
                      getPopupContainer: function () {
                        return l.current || document.body;
                      },
                      children: (0, d.jsx)('span', {
                        onClick: function ($) {
                          $.stopPropagation();
                        },
                        className: D()(
                          ''.concat(i, '-icon'),
                          f,
                          (0, u.Z)({}, ''.concat(i, '-icon-active'), y),
                        ),
                        children: (0, d.jsx)(Xa, {}),
                      }),
                    },
                  ),
                ),
              ],
            }),
          );
        },
        dn = w(26713),
        sn = w(98293),
        cn = w(68508);
      function nr() {
        return (0, d.jsx)('svg', {
          width: '1em',
          height: '1em',
          viewBox: '0 0 12 12',
          fill: 'currentColor',
          'aria-hidden': 'true',
          children: (0, d.jsx)('path', {
            d: 'M6.432 7.967a.448.448 0 01-.318.133h-.228a.46.46 0 01-.318-.133L2.488 4.85a.305.305 0 010-.43l.427-.43a.293.293 0 01.42 0L6 6.687l2.665-2.699a.299.299 0 01.426 0l.42.431a.305.305 0 010 .43L6.432 7.967z',
          }),
        });
      }
      var ar = function (e) {
        var t, n, r, o, l, i;
        return (0, u.Z)({}, e.componentCls, {
          position: 'absolute',
          insetBlockStart: '18px',
          zIndex: '101',
          width: '24px',
          height: '24px',
          fontSize: ['14px', '16px'],
          textAlign: 'center',
          borderRadius: '40px',
          insetInlineEnd: '-13px',
          transition: 'transform 0.3s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color:
            e == null ||
            (t = e.layout) === null ||
            t === void 0 ||
            (n = t.sider) === null ||
            n === void 0
              ? void 0
              : n.colorTextCollapsedButton,
          backgroundColor:
            e == null ||
            (r = e.layout) === null ||
            r === void 0 ||
            (o = r.sider) === null ||
            o === void 0
              ? void 0
              : o.colorBgCollapsedButton,
          boxShadow:
            '0 2px 8px -2px rgba(0,0,0,0.05), 0 1px 4px -1px rgba(25,15,15,0.07), 0 0 1px 0 rgba(0,0,0,0.08)',
          '&:hover': {
            color:
              e == null ||
              (l = e.layout) === null ||
              l === void 0 ||
              (i = l.sider) === null ||
              i === void 0
                ? void 0
                : i.colorTextCollapsedButtonHover,
            boxShadow:
              '0 4px 16px -4px rgba(0,0,0,0.05), 0 2px 8px -2px rgba(25,15,15,0.07), 0 1px 2px 0 rgba(0,0,0,0.08)',
          },
          '.anticon': { fontSize: '14px' },
          '& > svg': {
            transition: 'transform  0.3s',
            transform: 'rotate(90deg)',
          },
          '&-collapsed': { '& > svg': { transform: 'rotate(-90deg)' } },
        });
      };
      function rr(a) {
        return (0, ye.Xj)('SiderMenuCollapsedIcon', function (e) {
          var t = (0, c.Z)(
            (0, c.Z)({}, e),
            {},
            { componentCls: '.'.concat(a) },
          );
          return [ar(t)];
        });
      }
      var or = ['isMobile', 'collapsed'],
        ir = function (e) {
          var t,
            n = e.isMobile,
            r = e.collapsed,
            o = (0, E.Z)(e, or),
            l = rr(e.className),
            i = l.wrapSSR,
            s = l.hashId;
          return n && r
            ? null
            : i(
                (0, d.jsx)(
                  'div',
                  (0, c.Z)(
                    (0, c.Z)({}, o),
                    {},
                    {
                      className: D()(
                        e.className,
                        s,
                        ((t = {}),
                        (0, u.Z)(t, ''.concat(e.className, '-collapsed'), r),
                        (0, u.Z)(t, ''.concat(e.className, '-is-mobile'), n),
                        t),
                      ),
                      children: (0, d.jsx)(nr, {}),
                    },
                  ),
                ),
              );
        },
        $t = w(74902),
        lr = w(43144),
        ur = w(15671),
        vn = w(36683);
      function dr(a) {
        return /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(a);
      }
      var sr = w(21687),
        fn = {
          navTheme: 'light',
          layout: 'side',
          contentWidth: 'Fluid',
          fixedHeader: !1,
          fixSiderbar: !0,
          iconfontUrl: '',
          colorPrimary: '#1677FF',
          splitMenus: !1,
        },
        cr = function (e) {
          var t, n, r, o, l, i, s;
          return (0, u.Z)(
            {},
            ''.concat(e.componentCls),
            ((s = { background: 'transparent', border: 'none' }),
            (0, u.Z)(s, ''.concat(e.componentCls, '-menu-item'), {
              transition: 'none !important',
            }),
            (0, u.Z)(
              s,
              ''.concat(e.componentCls, '-submenu-has-icon'),
              (0, u.Z)({}, '> '.concat(e.antCls, '-menu-sub'), {
                paddingInlineStart: 10,
              }),
            ),
            (0, u.Z)(
              s,
              '&&-collapsed',
              ((r = {}),
              (0, u.Z)(
                r,
                ''
                  .concat(
                    e.antCls,
                    `-menu-item, 
        `,
                  )
                  .concat(e.antCls, '-menu-item-group > ')
                  .concat(e.antCls, '-menu-item-group-list > ')
                  .concat(
                    e.antCls,
                    `-menu-item, 
        `,
                  )
                  .concat(e.antCls, '-menu-item-group > ')
                  .concat(e.antCls, '-menu-item-group-list > ')
                  .concat(e.antCls, '-menu-submenu > ')
                  .concat(
                    e.antCls,
                    `-menu-submenu-title, 
        `,
                  )
                  .concat(e.antCls, '-menu-submenu > ')
                  .concat(e.antCls, '-menu-submenu-title'),
                {
                  paddingInline: '0 !important',
                  marginBlock: '8px !important',
                },
              ),
              (0, u.Z)(
                r,
                ''
                  .concat(e.antCls, '-menu-item-group > ')
                  .concat(e.antCls, '-menu-item-group-list > ')
                  .concat(e.antCls, '-menu-submenu-selected > ')
                  .concat(
                    e.antCls,
                    `-menu-submenu-title, 
        `,
                  )
                  .concat(e.antCls, '-menu-submenu-selected > ')
                  .concat(e.antCls, '-menu-submenu-title'),
                {
                  backgroundColor:
                    (t = e.layout) === null ||
                    t === void 0 ||
                    (n = t.sider) === null ||
                    n === void 0
                      ? void 0
                      : n.colorBgMenuItemSelected,
                  borderRadius: e.borderRadius,
                },
              ),
              (0, u.Z)(
                r,
                ''.concat(e.componentCls, '-group'),
                (0, u.Z)({}, ''.concat(e.antCls, '-menu-item-group-title'), {
                  paddingInline: 0,
                }),
              ),
              r),
            ),
            (0, u.Z)(s, ''.concat(e.componentCls, '-item-icon'), {
              height: '14px',
              width: '14px',
              opacity: '0.85',
              '.anticon': { lineHeight: '14px', height: '14px' },
            }),
            (0, u.Z)(
              s,
              '& &-item-title',
              ((i = {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                '&-collapsed':
                  ((o = { flexDirection: 'column', justifyContent: 'center' }),
                  (0, u.Z)(o, ''.concat(e.componentCls, '-item-text'), {
                    maxWidth: '100%',
                  }),
                  (0, u.Z)(
                    o,
                    ''.concat(e.componentCls, '-item-text-has-icon'),
                    { display: 'none !important' },
                  ),
                  o),
              }),
              (0, u.Z)(i, '&'.concat(e.componentCls, '-group-item-title'), {
                gap: 4,
                height: 18,
                overflow: 'hidden',
              }),
              (0, u.Z)(
                i,
                '&'.concat(e.componentCls, '-item-collapsed-show-title'),
                (0, u.Z)(
                  { lineHeight: '16px', height: '48px' },
                  '&'.concat(e.componentCls, '-item-title-collapsed'),
                  ((l = { display: 'flex' }),
                  (0, u.Z)(l, ''.concat(e.componentCls, '-item-icon'), {
                    height: '16px',
                    lineHeight: '16px !important',
                    '.anticon': { lineHeight: '16px', height: '16px' },
                  }),
                  (0, u.Z)(l, ''.concat(e.componentCls, '-item-text'), {
                    opacity: '1 !important',
                    display: 'inline !important',
                    textAlign: 'center',
                    fontSize: 12,
                    height: 12,
                    lineHeight: '12px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    width: '100%',
                    margin: 0,
                    padding: 0,
                    marginBlockStart: 4,
                  }),
                  l),
                ),
              ),
              i),
            ),
            (0, u.Z)(
              s,
              '&-group',
              (0, u.Z)({}, ''.concat(e.antCls, '-menu-item-group-title'), {
                fontSize: 12,
                color: e.colorTextLabel,
                '.anticon': { marginInlineEnd: 8 },
              }),
            ),
            (0, u.Z)(s, '&-group-divider', {
              color: e.colorTextSecondary,
              fontSize: 12,
              lineHeight: 20,
            }),
            s),
          );
        };
      function vr(a) {
        return (0, ye.Xj)('ProLayoutBaseMenu', function (e) {
          var t = (0, c.Z)(
            (0, c.Z)({}, e),
            {},
            { componentCls: '.'.concat(a) },
          );
          return [cr(t)];
        });
      }
      var pn = (0, vn.Z)({ scriptUrl: fn.iconfontUrl }),
        hn = function (e) {
          var t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 'icon-',
            n = arguments.length > 2 ? arguments[2] : void 0;
          if (typeof e == 'string' && e !== '') {
            if (Et(e) || dr(e))
              return (0, d.jsx)(
                'img',
                { width: 16, src: e, alt: 'icon', className: n },
                e,
              );
            if (e.startsWith(t)) return (0, d.jsx)(pn, { type: e });
          }
          return e;
        },
        gn = function (e) {
          if (e && typeof e == 'string') {
            var t = e.substring(0, 1).toUpperCase();
            return t;
          }
          return null;
        },
        fr = (0, lr.Z)(function a(e) {
          var t = this;
          (0, ur.Z)(this, a),
            (this.props = void 0),
            (this.getNavMenuItems = function () {
              var n =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : [],
                r = arguments.length > 1 ? arguments[1] : void 0;
              return n
                .map(function (o) {
                  return t.getSubMenuOrItem(o, r);
                })
                .filter(function (o) {
                  return o;
                })
                .flat(1);
            }),
            (this.getSubMenuOrItem = function (n, r) {
              var o = t.props,
                l = o.subMenuItemRender,
                i = o.baseClassName,
                s = o.prefixCls,
                v = o.collapsed,
                f = o.menu,
                h = o.iconPrefixes,
                g = o.layout,
                y = (f == null ? void 0 : f.type) === 'group' && g !== 'top',
                j = t.props.token,
                M = t.getIntlName(n),
                x =
                  (n == null ? void 0 : n.children) ||
                  (n == null ? void 0 : n.routes),
                m = y && r === 0 ? 'group' : void 0;
              if (Array.isArray(x) && x.length > 0) {
                var C,
                  $,
                  S,
                  b,
                  I,
                  R,
                  P,
                  L,
                  p = r === 0 || (y && r === 1),
                  T = hn(
                    n.icon,
                    h,
                    'action '
                      .concat(i, '-icon ')
                      .concat(
                        (C = t.props) === null || C === void 0
                          ? void 0
                          : C.hashId,
                      ),
                  ),
                  Q = v && p ? gn(M) : null,
                  G = (0, d.jsxs)('div', {
                    title: M,
                    className: D()(
                      ''.concat(i, '-item-title'),
                      ($ = t.props) === null || $ === void 0
                        ? void 0
                        : $.hashId,
                      ((S = {}),
                      (0, u.Z)(S, ''.concat(i, '-item-title-collapsed'), v),
                      (0, u.Z)(
                        S,
                        ''.concat(i, '-group-item-title'),
                        m === 'group',
                      ),
                      (0, u.Z)(
                        S,
                        ''.concat(i, '-item-collapsed-show-title'),
                        (f == null ? void 0 : f.collapsedShowTitle) && v,
                      ),
                      S),
                    ),
                    children: [
                      m === 'group' && v
                        ? null
                        : p && T
                        ? (0, d.jsx)('span', {
                            className: 'anticon '
                              .concat(i, '-item-icon ')
                              .concat(
                                (b = t.props) === null || b === void 0
                                  ? void 0
                                  : b.hashId,
                              ),
                            children: T,
                          })
                        : Q,
                      (0, d.jsx)('span', {
                        className: D()(
                          ''.concat(i, '-item-text'),
                          (I = t.props) === null || I === void 0
                            ? void 0
                            : I.hashId,
                          (0, u.Z)(
                            {},
                            ''.concat(i, '-item-text-has-icon'),
                            m !== 'group' && p && (T || Q),
                          ),
                        ),
                        children: M,
                      }),
                    ],
                  }),
                  A = l
                    ? l(
                        (0, c.Z)((0, c.Z)({}, n), {}, { isUrl: !1 }),
                        G,
                        t.props,
                      )
                    : G,
                  V = t.getNavMenuItems(x, r + 1);
                return y &&
                  r === 0 &&
                  t.props.collapsed &&
                  !f.collapsedShowGroupTitle
                  ? V
                  : [
                      {
                        type: m,
                        key: n.key || n.path,
                        title: n.tooltip || A,
                        label: A,
                        onClick: y ? void 0 : n.onTitleClick,
                        children: V,
                        className: D()(
                          ((R = {}),
                          (0, u.Z)(R, ''.concat(i, '-group'), m === 'group'),
                          (0, u.Z)(R, ''.concat(i, '-submenu'), m !== 'group'),
                          (0, u.Z)(
                            R,
                            ''.concat(i, '-submenu-has-icon'),
                            m !== 'group' && p && T,
                          ),
                          R),
                        ),
                      },
                      y && r === 0
                        ? {
                            type: 'divider',
                            prefixCls: s,
                            className: ''.concat(i, '-divider'),
                            key: (n.key || n.path) + '-group-divider',
                            style: {
                              padding: 0,
                              borderBlockEnd: 0,
                              margin: t.props.collapsed ? '4px' : '6px 16px',
                              marginBlockStart: t.props.collapsed ? 4 : 8,
                              borderColor:
                                j == null ||
                                (P = j.layout) === null ||
                                P === void 0 ||
                                (L = P.sider) === null ||
                                L === void 0
                                  ? void 0
                                  : L.colorMenuItemDivider,
                            },
                          }
                        : void 0,
                    ].filter(Boolean);
              }
              return {
                className: ''.concat(i, '-menu-item'),
                title: n.tooltip || M,
                disabled: n.disabled,
                key: n.key || n.path,
                onClick: n.onTitleClick,
                label: t.getMenuItemPath(n, r),
              };
            }),
            (this.getIntlName = function (n) {
              var r = n.name,
                o = n.locale,
                l = t.props,
                i = l.menu,
                s = l.formatMessage;
              return o && (i == null ? void 0 : i.locale) !== !1
                ? s == null
                  ? void 0
                  : s({ id: o, defaultMessage: r })
                : r;
            }),
            (this.getMenuItemPath = function (n, r) {
              var o,
                l,
                i,
                s,
                v,
                f = t.conversionPath(n.path || '/'),
                h = t.props,
                g = h.location,
                y = g === void 0 ? { pathname: '/' } : g,
                j = h.isMobile,
                M = h.onCollapse,
                x = h.menuItemRender,
                m = h.iconPrefixes,
                C = t.getIntlName(n),
                $ = t.props,
                S = $.baseClassName,
                b = $.menu,
                I = $.collapsed,
                R = (b == null ? void 0 : b.type) === 'group',
                P = r === 0 || (R && r === 1),
                L = P
                  ? hn(
                      n.icon,
                      m,
                      ''
                        .concat(S, '-icon ')
                        .concat(
                          (o = t.props) === null || o === void 0
                            ? void 0
                            : o.hashId,
                        ),
                    )
                  : null,
                p = I && P ? gn(C) : null,
                T = (0, d.jsxs)(
                  'div',
                  {
                    className: D()(
                      ''.concat(S, '-item-title'),
                      (l = t.props) === null || l === void 0
                        ? void 0
                        : l.hashId,
                      ((i = {}),
                      (0, u.Z)(i, ''.concat(S, '-item-title-collapsed'), I),
                      (0, u.Z)(
                        i,
                        ''.concat(S, '-item-collapsed-show-title'),
                        (b == null ? void 0 : b.collapsedShowTitle) && I,
                      ),
                      i),
                    ),
                    children: [
                      L
                        ? (0, d.jsx)('span', {
                            className: 'anticon '
                              .concat(S, '-item-icon ')
                              .concat(
                                (s = t.props) === null || s === void 0
                                  ? void 0
                                  : s.hashId,
                              ),
                            children: L,
                          })
                        : p,
                      (0, d.jsx)('span', {
                        className: D()(
                          ''.concat(S, '-item-text'),
                          (v = t.props) === null || v === void 0
                            ? void 0
                            : v.hashId,
                          (0, u.Z)(
                            {},
                            ''.concat(S, '-item-text-has-icon'),
                            P && (L || p),
                          ),
                        ),
                        children: C,
                      }),
                    ],
                  },
                  f,
                ),
                Q = Et(f);
              if (Q) {
                var G, A, V, pe;
                T = (0, d.jsxs)(
                  'span',
                  {
                    title: C,
                    onClick: function () {
                      var k, q;
                      (k = window) === null ||
                        k === void 0 ||
                        (q = k.open) === null ||
                        q === void 0 ||
                        q.call(k, f, '_blank');
                    },
                    className: D()(
                      ''.concat(S, '-item-title'),
                      (G = t.props) === null || G === void 0
                        ? void 0
                        : G.hashId,
                      ((A = {}),
                      (0, u.Z)(A, ''.concat(S, '-item-title-collapsed'), I),
                      (0, u.Z)(A, ''.concat(S, '-item-link'), !0),
                      (0, u.Z)(
                        A,
                        ''.concat(S, '-item-collapsed-show-title'),
                        (b == null ? void 0 : b.collapsedShowTitle) && I,
                      ),
                      A),
                    ),
                    children: [
                      L
                        ? (0, d.jsx)('span', {
                            className: 'anticon '
                              .concat(S, '-item-icon ')
                              .concat(
                                (V = t.props) === null || V === void 0
                                  ? void 0
                                  : V.hashId,
                              ),
                            children: L,
                          })
                        : p,
                      (0, d.jsx)('span', {
                        className: D()(
                          ''.concat(S, '-item-text'),
                          (pe = t.props) === null || pe === void 0
                            ? void 0
                            : pe.hashId,
                          (0, u.Z)(
                            {},
                            ''.concat(S, '-item-text-has-icon'),
                            P && (L || p),
                          ),
                        ),
                        children: C,
                      }),
                    ],
                  },
                  f,
                );
              }
              if (x) {
                var oe = (0, c.Z)(
                  (0, c.Z)({}, n),
                  {},
                  {
                    isUrl: Q,
                    itemPath: f,
                    isMobile: j,
                    replace: f === y.pathname,
                    onClick: function () {
                      return M && M(!0);
                    },
                    children: void 0,
                  },
                );
                return x(oe, T, t.props);
              }
              return T;
            }),
            (this.conversionPath = function (n) {
              return n && n.indexOf('http') === 0
                ? n
                : '/'.concat(n || '').replace(/\/+/g, '/');
            }),
            (this.props = e);
        }),
        pr = function (e, t) {
          var n = t.layout,
            r = t.collapsed,
            o = {};
          return (
            e &&
              !r &&
              ['side', 'mix'].includes(n || 'mix') &&
              (o = { openKeys: e }),
            o
          );
        },
        mn = function (e) {
          var t,
            n = e.mode,
            r = e.className,
            o = e.handleOpenChange,
            l = e.style,
            i = e.menuData,
            s = e.prefixCls,
            v = e.menu,
            f = e.matchMenuKeys,
            h = e.iconfontUrl,
            g = e.selectedKeys,
            y = e.onSelect,
            j = e.menuRenderType,
            M = e.openKeys,
            x = (0, Z.useContext)(Oe.L_),
            m = x.token,
            C = ''.concat(s, '-base-menu'),
            $ = (0, Z.useRef)([]),
            S = (0, qe.Z)(v == null ? void 0 : v.defaultOpenAll),
            b = (0, W.Z)(S, 2),
            I = b[0],
            R = b[1],
            P = (0, qe.Z)(
              function () {
                return v != null && v.defaultOpenAll
                  ? rn(i) || []
                  : M === !1
                  ? !1
                  : [];
              },
              { value: M === !1 ? void 0 : M, onChange: o },
            ),
            L = (0, W.Z)(P, 2),
            p = L[0],
            T = L[1],
            Q = (0, qe.Z)([], {
              value: g,
              onChange: y
                ? function (ne) {
                    y && ne && y(ne);
                  }
                : void 0,
            }),
            G = (0, W.Z)(Q, 2),
            A = G[0],
            V = G[1];
          (0, Z.useEffect)(
            function () {
              (v != null && v.defaultOpenAll) ||
                M === !1 ||
                (f && (T(f), V(f)));
            },
            [f.join('-')],
          ),
            (0, Z.useEffect)(
              function () {
                h && (pn = (0, vn.Z)({ scriptUrl: h }));
              },
              [h],
            ),
            (0, Z.useEffect)(
              function () {
                if (
                  (f.join('-') !== (A || []).join('-') && V(f),
                  !I && M !== !1 && f.join('-') !== (p || []).join('-'))
                ) {
                  var ne = f;
                  (v == null ? void 0 : v.autoClose) === !1 &&
                    (ne = Array.from(
                      new Set([].concat((0, $t.Z)(f), (0, $t.Z)(p || []))),
                    )),
                    T(ne);
                } else v != null && v.ignoreFlatMenu && I ? T(rn(i)) : R(!1);
              },
              [f.join('-')],
            );
          var pe = (0, Z.useMemo)(
              function () {
                return pr(p, e);
              },
              [p && p.join(','), e.layout, e.collapsed],
            ),
            oe = vr(C),
            le = oe.wrapSSR,
            k = oe.hashId,
            q = (0, Z.useMemo)(
              function () {
                return new fr(
                  (0, c.Z)(
                    (0, c.Z)({}, e),
                    {},
                    {
                      token: m,
                      menuRenderType: j,
                      baseClassName: C,
                      hashId: k,
                    },
                  ),
                );
              },
              [e, m, j, C, k],
            );
          if (v != null && v.loading)
            return (0, d.jsx)('div', {
              style:
                n != null && n.includes('inline')
                  ? { padding: 24 }
                  : { marginBlockStart: 16 },
              children: (0, d.jsx)(sr.Z, {
                active: !0,
                title: !1,
                paragraph: { rows: n != null && n.includes('inline') ? 6 : 1 },
              }),
            });
          e.openKeys === !1 && !e.handleOpenChange && ($.current = f);
          var te = e.postMenuData ? e.postMenuData(i) : i;
          return te && (te == null ? void 0 : te.length) < 1
            ? null
            : le(
                (0, Z.createElement)(
                  cn.Z,
                  (0, c.Z)(
                    (0, c.Z)({}, pe),
                    {},
                    {
                      key: 'Menu',
                      mode: n,
                      inlineIndent: 16,
                      defaultOpenKeys: $.current,
                      theme: 'light',
                      selectedKeys: A,
                      style: (0, c.Z)(
                        { backgroundColor: 'transparent', border: 'none' },
                        l,
                      ),
                      className: D()(
                        r,
                        k,
                        C,
                        ((t = {}),
                        (0, u.Z)(
                          t,
                          ''.concat(C, '-horizontal'),
                          n === 'horizontal',
                        ),
                        (0, u.Z)(t, ''.concat(C, '-collapsed'), e.collapsed),
                        t),
                      ),
                      items: q.getNavMenuItems(te, 0),
                      onOpenChange: T,
                    },
                    e.menuProps,
                  ),
                ),
              );
        };
      function hr(a, e) {
        var t = e.stylish,
          n = e.proLayoutCollapsedWidth;
        return (0, ye.Xj)('ProLayoutSiderMenuStylish', function (r) {
          var o = (0, c.Z)(
            (0, c.Z)({}, r),
            {},
            { componentCls: '.'.concat(a), proLayoutCollapsedWidth: n },
          );
          return t
            ? [
                (0, u.Z)(
                  {},
                  r.proComponentsCls,
                  (0, u.Z)(
                    {},
                    ''.concat(r.proComponentsCls, '-layout'),
                    (0, u.Z)(
                      {},
                      ''.concat(o.componentCls),
                      t == null ? void 0 : t(o),
                    ),
                  ),
                ),
              ]
            : [];
        });
      }
      var gr = ot.Sider,
        Ft = function (e) {
          var t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 'menuHeaderRender',
            n = e.logo,
            r = e.title,
            o = e.layout,
            l = e[t || ''];
          if (l === !1) return null;
          var i = Dt(n),
            s = (0, d.jsx)('h1', {
              children: r != null ? r : 'Ant Design Pro',
            });
          return l
            ? l(i, e.collapsed ? null : s, e)
            : e.isMobile
            ? null
            : o === 'mix' && t === 'menuHeaderRender'
            ? !1
            : e.collapsed
            ? (0, d.jsx)('a', { children: i }, 'title')
            : (0, d.jsxs)('a', { children: [i, s] }, 'title');
        },
        yn = function (e) {
          var t,
            n,
            r,
            o,
            l,
            i,
            s,
            v,
            f,
            h,
            g,
            y,
            j,
            M,
            x,
            m = e.collapsed,
            C = e.originCollapsed,
            $ = e.fixSiderbar,
            S = e.menuFooterRender,
            b = e.onCollapse,
            I = e.theme,
            R = e.siderWidth,
            P = e.isMobile,
            L = e.onMenuHeaderClick,
            p = e.breakpoint,
            T = p === void 0 ? 'lg' : p,
            Q = e.style,
            G = e.layout,
            A = e.menuExtraRender,
            V = A === void 0 ? !1 : A,
            pe = e.links,
            oe = e.menuContentRender,
            le = e.collapsedButtonRender,
            k = e.prefixCls,
            q = e.avatarProps,
            te = e.rightContentRender,
            ne = e.actionsRender,
            je = e.onOpenChange,
            $e = e.stylish,
            _e = e.logoStyle,
            Ie = (0, Z.useContext)(Oe.L_),
            F = Ie.hashId,
            X = (0, Z.useMemo)(
              function () {
                return !(P || G === 'mix');
              },
              [P, G],
            ),
            N = ''.concat(k, '-sider'),
            we = hr(''.concat(N, '.').concat(N, '-stylish'), {
              stylish: $e,
              proLayoutCollapsedWidth: 64,
            }),
            xe = D()(
              ''.concat(N),
              F,
              ((t = {}),
              (0, u.Z)(t, ''.concat(N, '-fixed'), $),
              (0, u.Z)(t, ''.concat(N, '-collapsed'), e.collapsed),
              (0, u.Z)(t, ''.concat(N, '-layout-').concat(G), G && !P),
              (0, u.Z)(t, ''.concat(N, '-light'), I !== 'dark'),
              (0, u.Z)(t, ''.concat(N, '-mix'), G === 'mix' && !P),
              (0, u.Z)(t, ''.concat(N, '-stylish'), !!$e),
              t),
            ),
            ue = Ft(e),
            be = V && V(e),
            Se = (0, Z.useMemo)(
              function () {
                return (
                  oe !== !1 &&
                  (0, Z.createElement)(
                    mn,
                    (0, c.Z)(
                      (0, c.Z)({}, e),
                      {},
                      {
                        key: 'base-menu',
                        mode: 'inline',
                        handleOpenChange: je,
                        style: { width: '100%' },
                        className: ''.concat(N, '-menu ').concat(F),
                      },
                    ),
                  )
                );
              },
              [N, F, oe, je, e],
            ),
            Le = (pe || []).map(function (ee, Ze) {
              return { className: ''.concat(N, '-link'), label: ee, key: Ze };
            }),
            ze = (0, Z.useMemo)(
              function () {
                return oe ? oe(e, Se) : Se;
              },
              [oe, Se, e],
            ),
            Ge = (0, Z.useMemo)(
              function () {
                return (
                  q &&
                  (0, d.jsxs)(dn.Z, {
                    align: 'center',
                    className: ''.concat(N, '-actions-avatar'),
                    children: [
                      (0, d.jsx)(sn.C, (0, c.Z)({ size: 28 }, q)),
                      q.title &&
                        !m &&
                        (0, d.jsx)('span', { children: q.title }),
                    ],
                  })
                );
              },
              [q, N, m],
            ),
            Xe = (0, Z.useMemo)(
              function () {
                return ne
                  ? (0, d.jsx)(dn.Z, {
                      align: 'center',
                      size: 4,
                      direction: m ? 'vertical' : 'horizontal',
                      className: D()([
                        ''.concat(N, '-actions-list'),
                        m && ''.concat(N, '-actions-list-collapsed'),
                        F,
                      ]),
                      children:
                        ne == null
                          ? void 0
                          : ne(e).map(function (ee, Ze) {
                              return (0,
                              d.jsx)('div', { className: ''.concat(N, '-actions-list-item ').concat(F), children: ee }, Ze);
                            }),
                    })
                  : null;
              },
              [ne, N, m],
            ),
            Be = (0, Z.useMemo)(
              function () {
                return (0, d.jsx)(zt, {
                  appList: e.appList,
                  prefixCls: e.prefixCls,
                });
              },
              [e.appList, e.prefixCls],
            ),
            et = (0, Z.useMemo)(
              function () {
                if (le === !1) return null;
                var ee = (0, d.jsx)(ir, {
                  isMobile: P,
                  collapsed: C,
                  className: ''.concat(N, '-collapsed-button'),
                  onClick: function () {
                    b == null || b(!C);
                  },
                });
                return le ? le(m, ee) : ee;
              },
              [le, P, C, N, m, b],
            ),
            Te = (0, Z.useMemo)(
              function () {
                return !Ge && !Xe
                  ? null
                  : (0, d.jsxs)('div', {
                      className: D()(
                        ''.concat(N, '-actions'),
                        F,
                        m && ''.concat(N, '-actions-collapsed'),
                      ),
                      children: [Ge, Xe],
                    });
              },
              [Xe, Ge, N, m, F],
            ),
            de = 60,
            He = (0, Z.useMemo)(
              function () {
                var ee;
                return !(
                  e == null ||
                  (ee = e.menu) === null ||
                  ee === void 0
                ) &&
                  ee.hideMenuWhenCollapsed &&
                  m
                  ? ''.concat(N, '-hide-menu-collapsed')
                  : null;
              },
              [
                N,
                m,
                e == null || (n = e.menu) === null || n === void 0
                  ? void 0
                  : n.hideMenuWhenCollapsed,
              ],
            ),
            Ye = S && (S == null ? void 0 : S(e)),
            Ue = (0, d.jsxs)(d.Fragment, {
              children: [
                ue &&
                  (0, d.jsxs)('div', {
                    className: D()([
                      D()(
                        ''.concat(N, '-logo'),
                        F,
                        (0, u.Z)({}, ''.concat(N, '-logo-collapsed'), m),
                      ),
                    ]),
                    onClick: X ? L : void 0,
                    id: 'logo',
                    style: _e,
                    children: [ue, Be],
                  }),
                be &&
                  (0, d.jsx)('div', {
                    className: D()([
                      ''.concat(N, '-extra'),
                      !ue && ''.concat(N, '-extra-no-logo'),
                      F,
                    ]),
                    children: be,
                  }),
                (0, d.jsx)('div', {
                  style: { flex: 1, overflowY: 'auto', overflowX: 'hidden' },
                  children: ze,
                }),
                pe
                  ? (0, d.jsx)('div', {
                      className: ''.concat(N, '-links ').concat(F),
                      children: (0, d.jsx)(cn.Z, {
                        inlineIndent: 16,
                        className: ''.concat(N, '-link-menu ').concat(F),
                        selectedKeys: [],
                        openKeys: [],
                        theme: 'light',
                        mode: 'inline',
                        items: Le,
                      }),
                    })
                  : null,
                X &&
                  (0, d.jsxs)(d.Fragment, {
                    children: [
                      Te,
                      te
                        ? (0, d.jsx)('div', {
                            className: D()(
                              ''.concat(N, '-actions'),
                              F,
                              (0, u.Z)(
                                {},
                                ''.concat(N, '-actions-collapsed'),
                                m,
                              ),
                            ),
                            children: te == null ? void 0 : te(e),
                          })
                        : null,
                    ],
                  }),
                Ye &&
                  (0, d.jsx)('div', {
                    className: D()([
                      ''.concat(N, '-footer'),
                      F,
                      (0, u.Z)({}, ''.concat(N, '-footer-collapsed'), m),
                    ]),
                    children: Ye,
                  }),
              ],
            }),
            Ae = (0, Z.useContext)(Oe.L_),
            Y = Ae.token;
          return we.wrapSSR(
            (0, d.jsxs)(d.Fragment, {
              children: [
                $ &&
                  !P &&
                  !He &&
                  (0, d.jsx)('div', {
                    style: (0, c.Z)(
                      {
                        width: m ? de : R,
                        overflow: 'hidden',
                        flex: '0 0 '.concat(m ? de : R, 'px'),
                        maxWidth: m ? de : R,
                        minWidth: m ? de : R,
                        transition: 'all 0.2s ease 0s',
                      },
                      Q,
                    ),
                  }),
                (0, d.jsxs)(gr, {
                  collapsible: !0,
                  trigger: null,
                  collapsed: m,
                  breakpoint: T === !1 ? void 0 : T,
                  onCollapse: function (Ze) {
                    P || b == null || b(Ze);
                  },
                  collapsedWidth: de,
                  style: Q,
                  theme: 'light',
                  width: R,
                  className: D()(xe, F, He),
                  children: [
                    (0, d.jsx)(De.ZP, {
                      theme: {
                        hashed:
                          ((r = 'production') === null || r === void 0
                            ? void 0
                            : r.toLowerCase()) !== 'test',
                        components: {
                          Menu: {
                            radiusItem: 4,
                            colorItemBgSelected:
                              (Y == null ||
                              (o = Y.layout) === null ||
                              o === void 0 ||
                              (l = o.sider) === null ||
                              l === void 0
                                ? void 0
                                : l.colorBgMenuItemSelected) ||
                              'rgba(0, 0, 0, 0.04)',
                            colorItemBgActive:
                              (Y == null ||
                              (i = Y.layout) === null ||
                              i === void 0 ||
                              (s = i.sider) === null ||
                              s === void 0
                                ? void 0
                                : s.colorBgMenuItemHover) ||
                              'rgba(0, 0, 0, 0.04)',
                            colorActiveBarWidth: 0,
                            colorActiveBarHeight: 0,
                            colorActiveBarBorderSize: 0,
                            colorItemText:
                              (Y == null ||
                              (v = Y.layout) === null ||
                              v === void 0 ||
                              (f = v.sider) === null ||
                              f === void 0
                                ? void 0
                                : f.colorTextMenu) || 'rgba(0, 0, 0, 0.65)',
                            colorItemTextHover:
                              (Y == null ||
                              (h = Y.layout) === null ||
                              h === void 0 ||
                              (g = h.sider) === null ||
                              g === void 0
                                ? void 0
                                : g.colorTextMenuActive) ||
                              'rgba(0, 0, 0, 0.85)',
                            colorItemTextSelected:
                              (Y == null ||
                              (y = Y.layout) === null ||
                              y === void 0 ||
                              (j = y.sider) === null ||
                              j === void 0
                                ? void 0
                                : j.colorTextMenuSelected) ||
                              'rgba(0, 0, 0, 1)',
                            colorItemBg: 'transparent',
                            colorSubItemBg: 'transparent',
                            colorBgElevated:
                              (Y == null ||
                              (M = Y.layout) === null ||
                              M === void 0 ||
                              (x = M.sider) === null ||
                              x === void 0
                                ? void 0
                                : x.colorBgMenuItemCollapsedElevated) || '#fff',
                          },
                        },
                      },
                      children: He
                        ? (0, d.jsx)('div', {
                            className: ''
                              .concat(N, '-hide-when-collapsed ')
                              .concat(F),
                            style: {
                              height: '100%',
                              width: '100%',
                              opacity: He ? 0 : 1,
                            },
                            children: Ue,
                          })
                        : Ue,
                    }),
                    et,
                  ],
                }),
              ],
            }),
          );
        },
        mr = w(10178),
        yr = w(48555),
        xr = function (e) {
          var t, n, r, o, l, i;
          return (0, u.Z)({}, e.componentCls, {
            '&-header-actions': {
              display: 'flex',
              height: '100%',
              '&-item': {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBlock: 0,
                paddingInline: 2,
                color:
                  e == null ||
                  (t = e.layout) === null ||
                  t === void 0 ||
                  (n = t.header) === null ||
                  n === void 0
                    ? void 0
                    : n.colorTextRightActionsItem,
                fontSize: '16px',
                cursor: 'pointer',
                borderRadius: e.borderRadius,
                '> *': {
                  paddingInline: 6,
                  paddingBlock: 6,
                  borderRadius: e.borderRadius,
                  '&:hover': {
                    backgroundColor:
                      e == null ||
                      (r = e.layout) === null ||
                      r === void 0 ||
                      (o = r.header) === null ||
                      o === void 0
                        ? void 0
                        : o.colorBgRightActionsItemHover,
                  },
                },
              },
              '&-avatar': {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingInlineStart: e.padding,
                paddingInlineEnd: e.padding,
                cursor: 'pointer',
                color: e.colorTextSecondary,
                '> div': {
                  height: '44px',
                  color: e.colorTextSecondary,
                  paddingInline: 8,
                  paddingBlock: 8,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  lineHeight: '44px',
                  borderRadius: e.borderRadius,
                  '&:hover': {
                    backgroundColor:
                      e == null ||
                      (l = e.layout) === null ||
                      l === void 0 ||
                      (i = l.header) === null ||
                      i === void 0
                        ? void 0
                        : i.colorBgRightActionsItemHover,
                  },
                },
              },
            },
          });
        };
      function Cr(a) {
        return (0, ye.Xj)('ProLayoutRightContent', function (e) {
          var t = (0, c.Z)(
            (0, c.Z)({}, e),
            {},
            { componentCls: '.'.concat(a) },
          );
          return [xr(t)];
        });
      }
      var br = [
          'rightContentRender',
          'avatarProps',
          'actionsRender',
          'headerContentRender',
        ],
        Sr = ['title'],
        xn = function (e) {
          var t = e.rightContentRender,
            n = e.avatarProps,
            r = e.actionsRender,
            o = e.headerContentRender,
            l = (0, E.Z)(e, br),
            i = (0, Z.useContext)(De.ZP.ConfigContext),
            s = i.getPrefixCls,
            v = ''.concat(s(), '-pro-global-header'),
            f = Cr(v),
            h = f.wrapSSR,
            g = f.hashId,
            y = (0, Z.useState)('auto'),
            j = (0, W.Z)(y, 2),
            M = j[0],
            x = j[1],
            m = (0, Z.useMemo)(
              function () {
                if (!n) return null;
                var S = n.title,
                  b = (0, E.Z)(n, Sr);
                return [
                  (0, Z.createElement)(
                    sn.C,
                    (0, c.Z)((0, c.Z)({}, b), {}, { size: 28, key: 'avatar' }),
                  ),
                  S
                    ? (0, d.jsx)(
                        'span',
                        { style: { marginInlineStart: 8 }, children: S },
                        'name',
                      )
                    : void 0,
                ];
              },
              [n],
            ),
            C = function (b) {
              var I = r && (r == null ? void 0 : r(b));
              return !I && !m
                ? null
                : (Array.isArray(I) || (I = [I]),
                  h(
                    (0, d.jsxs)('div', {
                      className: ''.concat(v, '-header-actions ').concat(g),
                      children: [
                        I.filter(Boolean).map(function (R, P) {
                          var L = !1;
                          if (Z.isValidElement(R)) {
                            var p;
                            L = !!(
                              !(
                                R == null ||
                                (p = R.props) === null ||
                                p === void 0
                              ) && p['aria-hidden']
                            );
                          }
                          return (0,
                          d.jsx)('div', { className: D()(''.concat(v, '-header-actions-item ').concat(g), (0, u.Z)({}, ''.concat(v, '-header-actions-hover'), !L)), children: R }, P);
                        }),
                        m &&
                          (0, d.jsx)('span', {
                            className: ''
                              .concat(v, '-header-actions-avatar ')
                              .concat(g),
                            children: (0, d.jsx)('div', { children: m }),
                          }),
                      ],
                    }),
                  ));
            },
            $ = (0, mr.D)(
              (function () {
                var S = (0, ge.Z)(
                  (0, H.Z)().mark(function b(I) {
                    return (0, H.Z)().wrap(function (P) {
                      for (;;)
                        switch ((P.prev = P.next)) {
                          case 0:
                            x(I);
                          case 1:
                          case 'end':
                            return P.stop();
                        }
                    }, b);
                  }),
                );
                return function (b) {
                  return S.apply(this, arguments);
                };
              })(),
              160,
            );
          return (0, d.jsx)('div', {
            className: ''.concat(v, '-right-content ').concat(g),
            style: { minWidth: M, height: '100%' },
            children: (0, d.jsx)('div', {
              style: { height: '100%' },
              children: (0, d.jsx)(yr.Z, {
                onResize: function (b) {
                  var I = b.width;
                  $.run(I);
                },
                children:
                  (t || C) &&
                  (0, d.jsx)('div', {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      height: '100%',
                      justifyContent: 'flex-end',
                    },
                    children: (t || C)(
                      (0, c.Z)((0, c.Z)({}, l), {}, { rightContentSize: M }),
                    ),
                  }),
              }),
            }),
          });
        },
        Zr = function (e) {
          var t, n, r, o;
          return (0, u.Z)({}, e.componentCls, {
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            '.anticon': { color: 'inherit' },
            '&-main': {
              display: 'flex',
              height: '100%',
              paddingInlineStart: '16px',
              '&-left': (0, u.Z)(
                { display: 'flex', alignItems: 'center' },
                ''.concat(e.proComponentsCls, '-layout-apps-icon'),
                { marginInlineEnd: 16, marginInlineStart: -8 },
              ),
            },
            '&-wide': { maxWidth: 1152, margin: '0 auto' },
            '&-logo': {
              position: 'relative',
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              overflow: 'hidden',
              '> *:first-child': {
                display: 'flex',
                alignItems: 'center',
                minHeight: '22px',
                fontSize: '22px',
              },
              '> *:first-child > img': {
                display: 'inline-block',
                height: '32px',
                verticalAlign: 'middle',
              },
              '> *:first-child > h1': {
                display: 'inline-block',
                marginBlock: 0,
                marginInline: 0,
                lineHeight: '24px',
                marginInlineStart: 6,
                fontWeight: '600',
                fontSize: '16px',
                color:
                  e == null ||
                  (t = e.layout) === null ||
                  t === void 0 ||
                  (n = t.header) === null ||
                  n === void 0
                    ? void 0
                    : n.colorHeaderTitle,
                verticalAlign: 'top',
              },
            },
            '&-menu': {
              minWidth: 0,
              display: 'flex',
              alignItems: 'center',
              paddingInline: 6,
              paddingBlock: 6,
              lineHeight: ''.concat(
                ((e == null ||
                (r = e.layout) === null ||
                r === void 0 ||
                (o = r.header) === null ||
                o === void 0
                  ? void 0
                  : o.heightLayoutHeader) || 56) - 12,
                'px',
              ),
            },
          });
        };
      function Mr(a) {
        return (0, ye.Xj)('ProLayoutTopNavHeader', function (e) {
          var t = (0, c.Z)(
            (0, c.Z)({}, e),
            {},
            { componentCls: '.'.concat(a) },
          );
          return [Zr(t)];
        });
      }
      var Cn = function (e) {
          var t,
            n,
            r,
            o,
            l,
            i,
            s,
            v,
            f,
            h,
            g,
            y,
            j = (0, Z.useRef)(null),
            M = e.onMenuHeaderClick,
            x = e.contentWidth,
            m = e.rightContentRender,
            C = e.className,
            $ = e.style,
            S = e.headerContentRender,
            b = e.layout,
            I = e.actionsRender,
            R = (0, Z.useContext)(De.ZP.ConfigContext),
            P = R.getPrefixCls,
            L = (0, Z.useContext)(Oe.L_),
            p = L.token,
            T = ''.concat(e.prefixCls || P('pro'), '-top-nav-header'),
            Q = Mr(T),
            G = Q.wrapSSR,
            A = Q.hashId,
            V = Ft(
              (0, c.Z)((0, c.Z)({}, e), {}, { collapsed: !1 }),
              b === 'mix' ? 'headerTitleRender' : void 0,
            ),
            pe = (0, Z.useMemo)(
              function () {
                var oe,
                  le,
                  k,
                  q,
                  te,
                  ne,
                  je,
                  $e,
                  _e,
                  Ie,
                  F,
                  X,
                  N,
                  we,
                  xe,
                  ue,
                  be,
                  Se,
                  Le = (0, d.jsx)(De.ZP, {
                    theme: {
                      hashed:
                        ((oe = 'production') === null || oe === void 0
                          ? void 0
                          : oe.toLowerCase()) !== 'test',
                      components: {
                        Menu: {
                          colorItemBg:
                            (p == null ||
                            (le = p.layout) === null ||
                            le === void 0 ||
                            (k = le.header) === null ||
                            k === void 0
                              ? void 0
                              : k.colorBgHeader) || 'transparent',
                          colorSubItemBg:
                            (p == null ||
                            (q = p.layout) === null ||
                            q === void 0 ||
                            (te = q.header) === null ||
                            te === void 0
                              ? void 0
                              : te.colorBgHeader) || 'transparent',
                          radiusItem: 4,
                          colorItemBgSelected:
                            (p == null ||
                            (ne = p.layout) === null ||
                            ne === void 0 ||
                            (je = ne.header) === null ||
                            je === void 0
                              ? void 0
                              : je.colorBgMenuItemSelected) ||
                            (p == null ? void 0 : p.colorBgTextHover),
                          colorItemBgActive:
                            (p == null ||
                            ($e = p.layout) === null ||
                            $e === void 0 ||
                            (_e = $e.header) === null ||
                            _e === void 0
                              ? void 0
                              : _e.colorBgMenuItemHover) ||
                            (p == null ? void 0 : p.colorBgTextHover),
                          colorItemBgSelectedHorizontal:
                            (p == null ||
                            (Ie = p.layout) === null ||
                            Ie === void 0 ||
                            (F = Ie.header) === null ||
                            F === void 0
                              ? void 0
                              : F.colorBgMenuItemSelected) ||
                            (p == null ? void 0 : p.colorBgTextHover),
                          colorActiveBarWidth: 0,
                          colorActiveBarHeight: 0,
                          colorActiveBarBorderSize: 0,
                          colorItemText:
                            (p == null ||
                            (X = p.layout) === null ||
                            X === void 0 ||
                            (N = X.header) === null ||
                            N === void 0
                              ? void 0
                              : N.colorTextMenu) ||
                            (p == null ? void 0 : p.colorTextSecondary),
                          colorItemTextHover:
                            (p == null ||
                            (we = p.layout) === null ||
                            we === void 0 ||
                            (xe = we.header) === null ||
                            xe === void 0
                              ? void 0
                              : xe.colorTextMenuActive) ||
                            (p == null ? void 0 : p.colorText),
                          colorItemTextSelected:
                            (p == null ||
                            (ue = p.layout) === null ||
                            ue === void 0 ||
                            (be = ue.header) === null ||
                            be === void 0
                              ? void 0
                              : be.colorTextMenuSelected) ||
                            (p == null ? void 0 : p.colorTextBase),
                        },
                      },
                    },
                    children: (0, d.jsx)(
                      mn,
                      (0, c.Z)(
                        (0, c.Z)(
                          (0, c.Z)({ theme: 'light' }, e),
                          {},
                          { className: ''.concat(T, '-base-menu ').concat(A) },
                          e.menuProps,
                        ),
                        {},
                        {
                          style: (0, c.Z)(
                            { width: '100%' },
                            (Se = e.menuProps) === null || Se === void 0
                              ? void 0
                              : Se.style,
                          ),
                          collapsed: !1,
                          menuRenderType: 'header',
                          mode: 'horizontal',
                        },
                      ),
                    ),
                  });
                return S ? S(e, Le) : Le;
              },
              [
                p == null ||
                (t = p.layout) === null ||
                t === void 0 ||
                (n = t.header) === null ||
                n === void 0
                  ? void 0
                  : n.colorBgHeader,
                p == null ||
                (r = p.layout) === null ||
                r === void 0 ||
                (o = r.header) === null ||
                o === void 0
                  ? void 0
                  : o.colorBgMenuItemSelected,
                p == null ||
                (l = p.layout) === null ||
                l === void 0 ||
                (i = l.header) === null ||
                i === void 0
                  ? void 0
                  : i.colorBgMenuItemHover,
                p == null ||
                (s = p.layout) === null ||
                s === void 0 ||
                (v = s.header) === null ||
                v === void 0
                  ? void 0
                  : v.colorTextMenu,
                p == null ||
                (f = p.layout) === null ||
                f === void 0 ||
                (h = f.header) === null ||
                h === void 0
                  ? void 0
                  : h.colorTextMenuActive,
                p == null ||
                (g = p.layout) === null ||
                g === void 0 ||
                (y = g.header) === null ||
                y === void 0
                  ? void 0
                  : y.colorTextMenuSelected,
                p == null ? void 0 : p.colorBgTextHover,
                p == null ? void 0 : p.colorTextSecondary,
                p == null ? void 0 : p.colorText,
                p == null ? void 0 : p.colorTextBase,
                e,
                T,
                A,
                S,
              ],
            );
          return G(
            (0, d.jsx)('div', {
              className: D()(T, A, C, (0, u.Z)({}, ''.concat(T, '-light'), !0)),
              style: $,
              children: (0, d.jsxs)('div', {
                ref: j,
                className: D()(
                  ''.concat(T, '-main'),
                  A,
                  (0, u.Z)({}, ''.concat(T, '-wide'), x === 'Fixed'),
                ),
                children: [
                  V &&
                    (0, d.jsxs)('div', {
                      className: D()(''.concat(T, '-main-left ').concat(A)),
                      onClick: M,
                      children: [
                        (0, d.jsx)(zt, (0, c.Z)({}, e)),
                        (0, d.jsx)(
                          'div',
                          {
                            className: ''.concat(T, '-logo ').concat(A),
                            id: 'logo',
                            children: V,
                          },
                          'logo',
                        ),
                      ],
                    }),
                  (0, d.jsx)('div', {
                    style: { flex: 1 },
                    className: ''.concat(T, '-menu ').concat(A),
                    children: pe,
                  }),
                  (m || I || e.avatarProps) &&
                    (0, d.jsx)(
                      xn,
                      (0, c.Z)(
                        (0, c.Z)({ rightContentRender: m }, e),
                        {},
                        { prefixCls: T },
                      ),
                    ),
                ],
              }),
            }),
          );
        },
        $r = function (e) {
          var t, n, r, o, l, i, s;
          return (0, u.Z)(
            {},
            e.componentCls,
            ((s = {
              position: 'relative',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              marginBlock: 0,
              marginInline: 16,
              height:
                ((t = e.layout) === null ||
                t === void 0 ||
                (n = t.header) === null ||
                n === void 0
                  ? void 0
                  : n.heightLayoutHeader) || 56,
              boxSizing: 'border-box',
              '> a': { height: '100%' },
            }),
            (0, u.Z)(s, ''.concat(e.proComponentsCls, '-layout-apps-icon'), {
              marginInlineEnd: 16,
            }),
            (0, u.Z)(s, '&-collapsed-button', {
              minHeight: '22px',
              color:
                e == null ||
                (r = e.layout) === null ||
                r === void 0 ||
                (o = r.header) === null ||
                o === void 0
                  ? void 0
                  : o.colorHeaderTitle,
              fontSize: '18px',
              marginInlineEnd: '16px',
            }),
            (0, u.Z)(s, '&-logo', {
              position: 'relative',
              marginInlineEnd: '16px',
              a: {
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                minHeight: '22px',
                fontSize: '20px',
              },
              img: { height: '28px' },
              h1: {
                height: '32px',
                marginBlock: 0,
                marginInline: 0,
                marginInlineStart: 8,
                fontWeight: '600',
                color:
                  ((l = e.layout) === null ||
                  l === void 0 ||
                  (i = l.header) === null ||
                  i === void 0
                    ? void 0
                    : i.colorHeaderTitle) || e.colorTextHeading,
                fontSize: '18px',
                lineHeight: '32px',
              },
              '&-mix': { display: 'flex', alignItems: 'center' },
            }),
            (0, u.Z)(s, '&-logo-mobile', {
              minWidth: '24px',
              marginInlineEnd: 0,
            }),
            s),
          );
        };
      function Ir(a) {
        return (0, ye.Xj)('ProLayoutGlobalHeader', function (e) {
          var t = (0, c.Z)(
            (0, c.Z)({}, e),
            {},
            { componentCls: '.'.concat(a) },
          );
          return [$r(t)];
        });
      }
      var Rr = function (e, t) {
          return e === !1 ? null : e ? e(t, null) : t;
        },
        jr = function (e) {
          var t,
            n = e.isMobile,
            r = e.logo,
            o = e.collapsed,
            l = e.onCollapse,
            i = e.rightContentRender,
            s = e.menuHeaderRender,
            v = e.onMenuHeaderClick,
            f = e.className,
            h = e.style,
            g = e.layout,
            y = e.children,
            j = e.splitMenus,
            M = e.menuData,
            x = e.prefixCls,
            m = (0, Z.useContext)(De.ZP.ConfigContext),
            C = m.direction,
            $ = (0, Z.useContext)(De.ZP.ConfigContext),
            S = $.getPrefixCls,
            b = ''.concat(x || S('pro'), '-global-header'),
            I = Ir(b),
            R = I.wrapSSR,
            P = I.hashId,
            L = D()(f, b, P);
          if (g === 'mix' && !n && j) {
            var p = (M || []).map(function (A) {
                return (0,
                c.Z)((0, c.Z)({}, A), {}, { children: void 0, routes: void 0 });
              }),
              T = Mt(p);
            return (0, d.jsx)(
              Cn,
              (0, c.Z)(
                (0, c.Z)({ mode: 'horizontal' }, e),
                {},
                { splitMenus: !1, menuData: T },
              ),
            );
          }
          var Q = D()(
              ''.concat(b, '-logo'),
              P,
              ((t = {}),
              (0, u.Z)(t, ''.concat(b, '-logo-rtl'), C === 'rtl'),
              (0, u.Z)(t, ''.concat(b, '-logo-mix'), g === 'mix'),
              (0, u.Z)(t, ''.concat(b, '-logo-mobile'), n),
              t),
            ),
            G = (0, d.jsx)(
              'span',
              { className: Q, children: (0, d.jsx)('a', { children: Dt(r) }) },
              'logo',
            );
          return R(
            (0, d.jsxs)('div', {
              className: L,
              style: (0, c.Z)({}, h),
              children: [
                n &&
                  (0, d.jsx)('span', {
                    className: ''.concat(b, '-collapsed-button ').concat(P),
                    onClick: function () {
                      l == null || l(!o);
                    },
                    children: (0, d.jsx)(Ua, {}),
                  }),
                n && Rr(s, G),
                g === 'mix' &&
                  !n &&
                  (0, d.jsxs)(d.Fragment, {
                    children: [
                      (0, d.jsx)(zt, (0, c.Z)({}, e)),
                      (0, d.jsx)('div', {
                        className: Q,
                        onClick: v,
                        children: Ft(
                          (0, c.Z)((0, c.Z)({}, e), {}, { collapsed: !1 }),
                          'headerTitleRender',
                        ),
                      }),
                    ],
                  }),
                (0, d.jsx)('div', { style: { flex: 1 }, children: y }),
                (i || e.actionsRender || e.avatarProps) &&
                  (0, d.jsx)(xn, (0, c.Z)({ rightContentRender: i }, e)),
              ],
            }),
          );
        };
      function wr(a, e) {
        var t = e.stylish,
          n = e.proLayoutCollapsedWidth;
        return (0, ye.Xj)('ProLayoutHeaderStylish', function (r) {
          var o = (0, c.Z)(
            (0, c.Z)({}, r),
            {},
            { componentCls: '.'.concat(a), proLayoutCollapsedWidth: n },
          );
          return t
            ? [
                (0, u.Z)(
                  {},
                  r.proComponentsCls,
                  (0, u.Z)(
                    {},
                    ''.concat(r.proComponentsCls, '-layout'),
                    (0, u.Z)(
                      {},
                      ''.concat(o.componentCls),
                      t == null ? void 0 : t(o),
                    ),
                  ),
                ),
              ]
            : [];
        });
      }
      var bn = ot.Header,
        Tr = function (e) {
          var t,
            n,
            r,
            o,
            l,
            i,
            s = e.isMobile,
            v = e.fixedHeader,
            f = e.className,
            h = e.style,
            g = e.collapsed,
            y = e.prefixCls,
            j = e.onCollapse,
            M = e.layout,
            x = e.headerRender,
            m = e.headerContentRender,
            C = (0, Z.useContext)(Oe.L_),
            $ = C.token,
            S = (0, Z.useCallback)(
              function () {
                var G = M === 'top',
                  A = Mt(e.menuData || []),
                  V = (0, d.jsx)(
                    jr,
                    (0, c.Z)(
                      (0, c.Z)({ onCollapse: j }, e),
                      {},
                      { menuData: A, children: m && m(e, null) },
                    ),
                  );
                return (
                  G &&
                    !s &&
                    (V = (0, d.jsx)(
                      Cn,
                      (0, c.Z)(
                        (0, c.Z)({ mode: 'horizontal', onCollapse: j }, e),
                        {},
                        { menuData: A },
                      ),
                    )),
                  x && typeof x == 'function' ? x(e, V) : V
                );
              },
              [m, x, s, M, j, e],
            ),
            b = v || M === 'mix',
            I = M === 'top',
            R = ''.concat(y, '-layout-header'),
            P = Wa(R),
            L = P.wrapSSR,
            p = P.hashId,
            T = wr(''.concat(R, '.').concat(R, '-stylish'), {
              proLayoutCollapsedWidth: 64,
              stylish: e.stylish,
            }),
            Q = D()(
              f,
              p,
              R,
              ((t = {}),
              (0, u.Z)(t, ''.concat(R, '-fixed-header'), b),
              (0, u.Z)(t, ''.concat(R, '-mix'), M === 'mix'),
              (0, u.Z)(t, ''.concat(R, '-fixed-header-action'), !g),
              (0, u.Z)(t, ''.concat(R, '-top-menu'), I),
              (0, u.Z)(t, ''.concat(R, '-header'), !0),
              (0, u.Z)(t, ''.concat(R, '-stylish'), !!e.stylish),
              t),
            );
          return M === 'side' && !s
            ? null
            : T.wrapSSR(
                L(
                  (0, d.jsx)(d.Fragment, {
                    children: (0, d.jsxs)(De.ZP, {
                      theme: {
                        hashed:
                          ((n = 'production') === null || n === void 0
                            ? void 0
                            : n.toLowerCase()) !== 'test',
                        components: {
                          Layout: {
                            colorBgHeader: 'transparent',
                            colorBgBody: 'transparent',
                          },
                        },
                      },
                      children: [
                        b &&
                          (0, d.jsx)(bn, {
                            style: (0, c.Z)(
                              {
                                height:
                                  ($ == null ||
                                  (r = $.layout) === null ||
                                  r === void 0 ||
                                  (o = r.header) === null ||
                                  o === void 0
                                    ? void 0
                                    : o.heightLayoutHeader) || 56,
                                lineHeight: ''.concat(
                                  ($ == null ||
                                  (l = $.layout) === null ||
                                  l === void 0 ||
                                  (i = l.header) === null ||
                                  i === void 0
                                    ? void 0
                                    : i.heightLayoutHeader) || 56,
                                  'px',
                                ),
                                backgroundColor: 'transparent',
                                zIndex: 19,
                              },
                              h,
                            ),
                          }),
                        (0, d.jsx)(bn, {
                          className: Q,
                          style: h,
                          children: S(),
                        }),
                      ],
                    }),
                  }),
                ),
              );
        },
        Pr = w(75081),
        Nr = ['isLoading', 'pastDelay', 'timedOut', 'error', 'retry'],
        _r = function (e) {
          var t = e.isLoading,
            n = e.pastDelay,
            r = e.timedOut,
            o = e.error,
            l = e.retry,
            i = (0, E.Z)(e, Nr);
          return (0, d.jsx)('div', {
            style: { paddingBlockStart: 100, textAlign: 'center' },
            children: (0, d.jsx)(Pr.Z, (0, c.Z)({ size: 'large' }, i)),
          });
        },
        Lr = w(85265),
        Br = w(76906),
        Hr = new Br.E4('antBadgeLoadingCircle', {
          '0%': { display: 'none', opacity: 0 },
          '80%': { display: 'none', opacity: 0 },
          '100%': { display: 'unset', opacity: 1 },
        }),
        Ar = function (e) {
          var t,
            n,
            r,
            o,
            l,
            i,
            s,
            v,
            f,
            h,
            g,
            y,
            j,
            M,
            x,
            m,
            C,
            $,
            S,
            b,
            I,
            R,
            P,
            L,
            p,
            T;
          return (0, u.Z)(
            {},
            e.proComponentsCls,
            (0, u.Z)(
              {},
              ''.concat(e.proComponentsCls, '-layout'),
              (0, u.Z)(
                {},
                e.componentCls,
                ((T = {
                  position: 'relative',
                  background:
                    ((t = e.layout) === null ||
                    t === void 0 ||
                    (n = t.sider) === null ||
                    n === void 0
                      ? void 0
                      : n.colorMenuBackground) || 'transparent',
                  boxSizing: 'border-box',
                  '&-menu': {
                    position: 'relative',
                    zIndex: 10,
                    minHeight: '100%',
                  },
                  '&-fixed': {
                    position: 'fixed',
                    insetBlockStart: 0,
                    insetInlineStart: 0,
                    zIndex: '100',
                    height: '100%',
                  },
                }),
                (0, u.Z)(T, ''.concat(e.antCls, '-layout-sider-children'), {
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  paddingInline:
                    (r = e.layout) === null ||
                    r === void 0 ||
                    (o = r.sider) === null ||
                    o === void 0
                      ? void 0
                      : o.paddingInlineLayoutMenu,
                  paddingBlock:
                    (l = e.layout) === null ||
                    l === void 0 ||
                    (i = l.sider) === null ||
                    i === void 0
                      ? void 0
                      : i.paddingBlockLayoutMenu,
                  borderInlineEnd: '1px solid '.concat(e.colorSplit),
                }),
                (0, u.Z)(
                  T,
                  ''.concat(e.antCls, '-menu'),
                  ((f = {}),
                  (0, u.Z)(f, ''.concat(e.antCls, '-menu-item-group-title'), {
                    fontSize: e.fontSizeSM,
                    paddingBottom: 4,
                  }),
                  (0, u.Z)(f, ''.concat(e.antCls, '-menu-item:hover'), {
                    color:
                      e == null ||
                      (s = e.layout) === null ||
                      s === void 0 ||
                      (v = s.sider) === null ||
                      v === void 0
                        ? void 0
                        : v.colorTextMenuItemHover,
                  }),
                  f),
                ),
                (0, u.Z)(T, '&-logo', {
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingInline: 12,
                  paddingBlock: 16,
                  color:
                    (h = e.layout) === null ||
                    h === void 0 ||
                    (g = h.sider) === null ||
                    g === void 0
                      ? void 0
                      : g.colorTextMenu,
                  cursor: 'pointer',
                  borderBlockEnd: '1px solid '.concat(
                    (y = e.layout) === null ||
                      y === void 0 ||
                      (j = y.sider) === null ||
                      j === void 0
                      ? void 0
                      : j.colorMenuItemDivider,
                  ),
                  '> a': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 22,
                    fontSize: 22,
                    '> img': {
                      display: 'inline-block',
                      height: 22,
                      verticalAlign: 'middle',
                    },
                    '> h1': {
                      display: 'inline-block',
                      height: 22,
                      marginBlock: 0,
                      marginInlineEnd: 0,
                      marginInlineStart: 6,
                      color:
                        (M = e.layout) === null ||
                        M === void 0 ||
                        (x = M.sider) === null ||
                        x === void 0
                          ? void 0
                          : x.colorTextMenuTitle,
                      fontWeight: 600,
                      fontSize: 16,
                      lineHeight: '22px',
                      verticalAlign: 'middle',
                    },
                  },
                  '&-collapsed': (0, u.Z)(
                    { flexDirection: 'column-reverse', margin: 0, padding: 12 },
                    ''.concat(e.proComponentsCls, '-layout-apps-icon'),
                    {
                      marginBlockEnd: 8,
                      fontSize: 16,
                      transition:
                        'font-size 0.2s ease-in-out,color 0.2s ease-in-out',
                    },
                  ),
                }),
                (0, u.Z)(T, '&-actions', {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBlock: 4,
                  marginInline: 0,
                  color:
                    (m = e.layout) === null ||
                    m === void 0 ||
                    (C = m.sider) === null ||
                    C === void 0
                      ? void 0
                      : C.colorTextMenu,
                  '&-collapsed': {
                    flexDirection: 'column-reverse',
                    paddingBlock: 0,
                    paddingInline: 8,
                    fontSize: 16,
                    transition: 'font-size 0.3s ease-in-out',
                  },
                  '&-list': {
                    color:
                      ($ = e.layout) === null ||
                      $ === void 0 ||
                      (S = $.sider) === null ||
                      S === void 0
                        ? void 0
                        : S.colorTextMenuSecondary,
                    '&-collapsed': { marginBlockEnd: 8, animationName: 'none' },
                    '&-item': {
                      paddingInline: 6,
                      paddingBlock: 6,
                      lineHeight: '16px',
                      fontSize: 16,
                      cursor: 'pointer',
                      borderRadius: e.borderRadius,
                      '&:hover': { background: e.colorBgTextHover },
                    },
                  },
                  '&-avatar': {
                    fontSize: 14,
                    paddingInline: 8,
                    paddingBlock: 8,
                    borderRadius: e.borderRadius,
                    '& *': { cursor: 'pointer' },
                    '&:hover': { background: e.colorBgTextHover },
                  },
                }),
                (0, u.Z)(T, '&-hide-menu-collapsed', {
                  insetInlineStart: '-'.concat(
                    e.proLayoutCollapsedWidth - 12,
                    'px',
                  ),
                  position: 'absolute',
                }),
                (0, u.Z)(T, '&-mix', {
                  height: 'calc(100% - '.concat(
                    (e == null ||
                    (b = e.layout) === null ||
                    b === void 0 ||
                    (I = b.header) === null ||
                    I === void 0
                      ? void 0
                      : I.heightLayoutHeader) || 56,
                    'px)',
                  ),
                  insetBlockStart: ''.concat(
                    (e == null ||
                    (R = e.layout) === null ||
                    R === void 0 ||
                    (P = R.header) === null ||
                    P === void 0
                      ? void 0
                      : P.heightLayoutHeader) || 56,
                    'px',
                  ),
                }),
                (0, u.Z)(T, '&-extra', {
                  marginBlockEnd: 16,
                  marginBlock: 0,
                  marginInline: 16,
                  '&-no-logo': { marginBlockStart: 16 },
                }),
                (0, u.Z)(T, '&-links', {
                  width: '100%',
                  ul: { height: 'auto' },
                }),
                (0, u.Z)(T, '&-link-menu', {
                  border: 'none',
                  boxShadow: 'none',
                  background: 'transparent',
                }),
                (0, u.Z)(T, '&-footer', {
                  color:
                    (L = e.layout) === null ||
                    L === void 0 ||
                    (p = L.sider) === null ||
                    p === void 0
                      ? void 0
                      : p.colorTextMenuSecondary,
                  paddingBlockEnd: 16,
                  fontSize: e.fontSize,
                  animationName: Hr,
                  animationDuration: '.3s',
                  animationTimingFunction: 'ease',
                }),
                T),
              ),
            ),
          );
        };
      function Or(a, e) {
        var t = e.proLayoutCollapsedWidth;
        return (0, ye.Xj)('ProLayoutSiderMenu', function (n) {
          var r = (0, c.Z)(
            (0, c.Z)({}, n),
            {},
            { componentCls: '.'.concat(a), proLayoutCollapsedWidth: t },
          );
          return [Ar(r)];
        });
      }
      var Sn = function (e) {
          var t = e.isMobile,
            n = e.siderWidth,
            r = e.collapsed,
            o = e.onCollapse,
            l = e.style,
            i = e.className,
            s = e.hide,
            v = e.getContainer,
            f = e.prefixCls;
          (0, Z.useEffect)(
            function () {
              t === !0 && (o == null || o(!0));
            },
            [t],
          );
          var h = (0, en.Z)(e, ['className', 'style']),
            g = Or(''.concat(f, '-sider'), { proLayoutCollapsedWidth: 64 }),
            y = g.wrapSSR,
            j = g.hashId,
            M = D()(''.concat(f, '-sider'), i, j);
          if (s) return null;
          var x = (0, un.X)(!r, function () {
            return o == null ? void 0 : o(!0);
          });
          return y(
            t
              ? (0, d.jsx)(
                  Lr.Z,
                  (0, c.Z)(
                    (0, c.Z)(
                      {
                        placement: 'left',
                        className: D()(''.concat(f, '-drawer-sider'), i),
                      },
                      x,
                    ),
                    {},
                    {
                      style: (0, c.Z)({ padding: 0, height: '100vh' }, l),
                      closable: !1,
                      getContainer: v,
                      width: n,
                      bodyStyle: {
                        height: '100vh',
                        padding: 0,
                        display: 'flex',
                        flexDirection: 'row',
                      },
                      children: (0, d.jsx)(
                        yn,
                        (0, c.Z)(
                          (0, c.Z)({}, h),
                          {},
                          {
                            isMobile: !0,
                            className: M,
                            collapsed: t ? !1 : r,
                            splitMenus: !1,
                            originCollapsed: r,
                          },
                        ),
                      ),
                    },
                  ),
                )
              : (0, d.jsx)(
                  yn,
                  (0, c.Z)(
                    (0, c.Z)({ className: M, originCollapsed: r }, h),
                    {},
                    { style: l },
                  ),
                ),
          );
        },
        Zn = (0, Z.createContext)({}),
        Er = w(14779),
        Wt = w.n(Er),
        Dr = function (e, t, n) {
          if (n) {
            var r = (0, $t.Z)(n.keys()).find(function (l) {
              return Wt()(l).test(e);
            });
            if (r) return n.get(r);
          }
          if (t) {
            var o = Object.keys(t).find(function (l) {
              return Wt()(l).test(e);
            });
            if (o) return t[o];
          }
          return { path: '' };
        },
        Mn = function (e, t) {
          var n = e.pathname,
            r = n === void 0 ? '/' : n,
            o = e.breadcrumb,
            l = e.breadcrumbMap,
            i = e.formatMessage,
            s = e.title,
            v = e.menu,
            f = v === void 0 ? { locale: !1 } : v,
            h = t ? '' : s || '',
            g = Dr(r, o, l);
          if (!g) return { title: h, id: '', pageName: h };
          var y = g.name;
          return (
            f.locale !== !1 &&
              g.locale &&
              i &&
              (y = i({ id: g.locale || '', defaultMessage: g.name })),
            y
              ? t || !s
                ? { title: y, id: g.locale || '', pageName: y }
                : {
                    title: ''.concat(y, ' - ').concat(s),
                    id: g.locale || '',
                    pageName: y,
                  }
              : { title: h, id: g.locale || '', pageName: h }
          );
        },
        Oo = function (e, t) {
          return Mn(e, t).title;
        },
        zr = {
          'app.setting.pagestyle': 'Page style setting',
          'app.setting.pagestyle.dark': 'Dark Menu style',
          'app.setting.pagestyle.light': 'Light Menu style',
          'app.setting.pagestyle.realdark': 'Dark style (Beta)',
          'app.setting.content-width': 'Content Width',
          'app.setting.content-width.fixed': 'Fixed',
          'app.setting.content-width.fluid': 'Fluid',
          'app.setting.themecolor': 'Theme Color',
          'app.setting.themecolor.dust': 'Dust Red',
          'app.setting.themecolor.volcano': 'Volcano',
          'app.setting.themecolor.sunset': 'Sunset Orange',
          'app.setting.themecolor.cyan': 'Cyan',
          'app.setting.themecolor.green': 'Polar Green',
          'app.setting.themecolor.techBlue': 'Tech Blue (default)',
          'app.setting.themecolor.daybreak': 'Daybreak Blue',
          'app.setting.themecolor.geekblue': 'Geek Blue',
          'app.setting.themecolor.purple': 'Golden Purple',
          'app.setting.sidermenutype': 'SideMenu Type',
          'app.setting.sidermenutype-sub': 'Classic',
          'app.setting.sidermenutype-group': 'Grouping',
          'app.setting.navigationmode': 'Navigation Mode',
          'app.setting.regionalsettings': 'Regional Settings',
          'app.setting.regionalsettings.header': 'Header',
          'app.setting.regionalsettings.menu': 'Menu',
          'app.setting.regionalsettings.footer': 'Footer',
          'app.setting.regionalsettings.menuHeader': 'Menu Header',
          'app.setting.sidemenu': 'Side Menu Layout',
          'app.setting.topmenu': 'Top Menu Layout',
          'app.setting.mixmenu': 'Mix Menu Layout',
          'app.setting.splitMenus': 'Split Menus',
          'app.setting.fixedheader': 'Fixed Header',
          'app.setting.fixedsidebar': 'Fixed Sidebar',
          'app.setting.fixedsidebar.hint': 'Works on Side Menu Layout',
          'app.setting.hideheader': 'Hidden Header when scrolling',
          'app.setting.hideheader.hint': 'Works when Hidden Header is enabled',
          'app.setting.othersettings': 'Other Settings',
          'app.setting.weakmode': 'Weak Mode',
          'app.setting.copy': 'Copy Setting',
          'app.setting.loading': 'Loading theme',
          'app.setting.copyinfo':
            'copy success\uFF0Cplease replace defaultSettings in src/models/setting.js',
          'app.setting.production.hint':
            'Setting panel shows in development environment only, please manually modify',
        },
        Fr = (0, c.Z)({}, zr),
        Wr = {
          'app.setting.pagestyle': 'Impostazioni di stile',
          'app.setting.pagestyle.dark': 'Tema scuro',
          'app.setting.pagestyle.light': 'Tema chiaro',
          'app.setting.content-width': 'Largezza contenuto',
          'app.setting.content-width.fixed': 'Fissa',
          'app.setting.content-width.fluid': 'Fluida',
          'app.setting.themecolor': 'Colore del tema',
          'app.setting.themecolor.dust': 'Rosso polvere',
          'app.setting.themecolor.volcano': 'Vulcano',
          'app.setting.themecolor.sunset': 'Arancione tramonto',
          'app.setting.themecolor.cyan': 'Ciano',
          'app.setting.themecolor.green': 'Verde polare',
          'app.setting.themecolor.techBlue': 'Tech Blu (default)',
          'app.setting.themecolor.daybreak': 'Blu cielo mattutino',
          'app.setting.themecolor.geekblue': 'Blu geek',
          'app.setting.themecolor.purple': 'Viola dorato',
          'app.setting.navigationmode': 'Modalit\xE0 di navigazione',
          'app.setting.sidemenu': 'Menu laterale',
          'app.setting.topmenu': 'Menu in testata',
          'app.setting.mixmenu': 'Menu misto',
          'app.setting.splitMenus': 'Menu divisi',
          'app.setting.fixedheader': 'Testata fissa',
          'app.setting.fixedsidebar': 'Menu laterale fisso',
          'app.setting.fixedsidebar.hint': 'Solo se selezionato Menu laterale',
          'app.setting.hideheader': 'Nascondi testata durante lo scorrimento',
          'app.setting.hideheader.hint':
            'Solo se abilitato Nascondi testata durante lo scorrimento',
          'app.setting.othersettings': 'Altre impostazioni',
          'app.setting.weakmode': 'Inverti colori',
          'app.setting.copy': 'Copia impostazioni',
          'app.setting.loading': 'Carico tema...',
          'app.setting.copyinfo':
            'Impostazioni copiate con successo! Incolla il contenuto in config/defaultSettings.js',
          'app.setting.production.hint':
            'Questo pannello \xE8 visibile solo durante lo sviluppo. Le impostazioni devono poi essere modificate manulamente',
        },
        Kr = (0, c.Z)({}, Wr),
        Gr = {
          'app.setting.pagestyle': '\uC2A4\uD0C0\uC77C \uC124\uC815',
          'app.setting.pagestyle.dark': '\uB2E4\uD06C \uBAA8\uB4DC',
          'app.setting.pagestyle.light': '\uB77C\uC774\uD2B8 \uBAA8\uB4DC',
          'app.setting.content-width': '\uCEE8\uD150\uCE20 \uB108\uBE44',
          'app.setting.content-width.fixed': '\uACE0\uC815',
          'app.setting.content-width.fluid': '\uD750\uB984',
          'app.setting.themecolor': '\uD14C\uB9C8 \uC0C9\uC0C1',
          'app.setting.themecolor.dust': 'Dust Red',
          'app.setting.themecolor.volcano': 'Volcano',
          'app.setting.themecolor.sunset': 'Sunset Orange',
          'app.setting.themecolor.cyan': 'Cyan',
          'app.setting.themecolor.green': 'Polar Green',
          'app.setting.themecolor.techBlue': 'Tech Blu (default)',
          'app.setting.themecolor.daybreak': 'Daybreak Blue',
          'app.setting.themecolor.geekblue': 'Geek Blue',
          'app.setting.themecolor.purple': 'Golden Purple',
          'app.setting.navigationmode':
            '\uB124\uBE44\uAC8C\uC774\uC158 \uBAA8\uB4DC',
          'app.setting.regionalsettings': '\uC601\uC5ED\uBCC4 \uC124\uC815',
          'app.setting.regionalsettings.header': '\uD5E4\uB354',
          'app.setting.regionalsettings.menu': '\uBA54\uB274',
          'app.setting.regionalsettings.footer': '\uBC14\uB2E5\uAE00',
          'app.setting.regionalsettings.menuHeader':
            '\uBA54\uB274 \uD5E4\uB354',
          'app.setting.sidemenu':
            '\uBA54\uB274 \uC0AC\uC774\uB4DC \uBC30\uCE58',
          'app.setting.topmenu': '\uBA54\uB274 \uC0C1\uB2E8 \uBC30\uCE58',
          'app.setting.mixmenu': '\uD63C\uD569\uD615 \uBC30\uCE58',
          'app.setting.splitMenus': '\uBA54\uB274 \uBD84\uB9AC',
          'app.setting.fixedheader': '\uD5E4\uB354 \uACE0\uC815',
          'app.setting.fixedsidebar': '\uC0AC\uC774\uB4DC\uBC14 \uACE0\uC815',
          'app.setting.fixedsidebar.hint':
            "'\uBA54\uB274 \uC0AC\uC774\uB4DC \uBC30\uCE58'\uB97C \uC120\uD0DD\uD588\uC744 \uB54C \uB3D9\uC791\uD568",
          'app.setting.hideheader':
            '\uC2A4\uD06C\uB864 \uC911 \uD5E4\uB354 \uAC10\uCD94\uAE30',
          'app.setting.hideheader.hint':
            "'\uD5E4\uB354 \uAC10\uCD94\uAE30 \uC635\uC158'\uC744 \uC120\uD0DD\uD588\uC744 \uB54C \uB3D9\uC791\uD568",
          'app.setting.othersettings': '\uB2E4\uB978 \uC124\uC815',
          'app.setting.weakmode': '\uACE0\uB300\uBE44 \uBAA8\uB4DC',
          'app.setting.copy': '\uC124\uC815\uAC12 \uBCF5\uC0AC',
          'app.setting.loading': '\uD14C\uB9C8 \uB85C\uB529 \uC911',
          'app.setting.copyinfo':
            '\uBCF5\uC0AC \uC131\uACF5. src/models/settings.js\uC5D0 \uC788\uB294 defaultSettings\uB97C \uAD50\uCCB4\uD574 \uC8FC\uC138\uC694.',
          'app.setting.production.hint':
            '\uC124\uC815 \uD310\uB12C\uC740 \uAC1C\uBC1C \uD658\uACBD\uC5D0\uC11C\uB9CC \uBCF4\uC5EC\uC9D1\uB2C8\uB2E4. \uC9C1\uC811 \uC218\uB3D9\uC73C\uB85C \uBCC0\uACBD\uBC14\uB78D\uB2C8\uB2E4.',
        },
        Ur = (0, c.Z)({}, Gr),
        Vr = {
          'app.setting.pagestyle': '\u6574\u4F53\u98CE\u683C\u8BBE\u7F6E',
          'app.setting.pagestyle.dark': '\u6697\u8272\u83DC\u5355\u98CE\u683C',
          'app.setting.pagestyle.light': '\u4EAE\u8272\u83DC\u5355\u98CE\u683C',
          'app.setting.pagestyle.realdark':
            '\u6697\u8272\u98CE\u683C(\u5B9E\u9A8C\u529F\u80FD)',
          'app.setting.content-width': '\u5185\u5BB9\u533A\u57DF\u5BBD\u5EA6',
          'app.setting.content-width.fixed': '\u5B9A\u5BBD',
          'app.setting.content-width.fluid': '\u6D41\u5F0F',
          'app.setting.themecolor': '\u4E3B\u9898\u8272',
          'app.setting.themecolor.dust': '\u8584\u66AE',
          'app.setting.themecolor.volcano': '\u706B\u5C71',
          'app.setting.themecolor.sunset': '\u65E5\u66AE',
          'app.setting.themecolor.cyan': '\u660E\u9752',
          'app.setting.themecolor.green': '\u6781\u5149\u7EFF',
          'app.setting.themecolor.techBlue':
            '\u79D1\u6280\u84DD\uFF08\u9ED8\u8BA4\uFF09',
          'app.setting.themecolor.daybreak': '\u62C2\u6653',
          'app.setting.themecolor.geekblue': '\u6781\u5BA2\u84DD',
          'app.setting.themecolor.purple': '\u9171\u7D2B',
          'app.setting.navigationmode': '\u5BFC\u822A\u6A21\u5F0F',
          'app.setting.sidermenutype': '\u4FA7\u8FB9\u83DC\u5355\u7C7B\u578B',
          'app.setting.sidermenutype-sub': '\u7ECF\u5178\u6A21\u5F0F',
          'app.setting.sidermenutype-group': '\u5206\u7EC4\u6A21\u5F0F',
          'app.setting.regionalsettings': '\u5185\u5BB9\u533A\u57DF',
          'app.setting.regionalsettings.header': '\u9876\u680F',
          'app.setting.regionalsettings.menu': '\u83DC\u5355',
          'app.setting.regionalsettings.footer': '\u9875\u811A',
          'app.setting.regionalsettings.menuHeader': '\u83DC\u5355\u5934',
          'app.setting.sidemenu': '\u4FA7\u8FB9\u83DC\u5355\u5E03\u5C40',
          'app.setting.topmenu': '\u9876\u90E8\u83DC\u5355\u5E03\u5C40',
          'app.setting.mixmenu': '\u6DF7\u5408\u83DC\u5355\u5E03\u5C40',
          'app.setting.splitMenus': '\u81EA\u52A8\u5206\u5272\u83DC\u5355',
          'app.setting.fixedheader': '\u56FA\u5B9A Header',
          'app.setting.fixedsidebar': '\u56FA\u5B9A\u4FA7\u8FB9\u83DC\u5355',
          'app.setting.fixedsidebar.hint':
            '\u4FA7\u8FB9\u83DC\u5355\u5E03\u5C40\u65F6\u53EF\u914D\u7F6E',
          'app.setting.hideheader': '\u4E0B\u6ED1\u65F6\u9690\u85CF Header',
          'app.setting.hideheader.hint':
            '\u56FA\u5B9A Header \u65F6\u53EF\u914D\u7F6E',
          'app.setting.othersettings': '\u5176\u4ED6\u8BBE\u7F6E',
          'app.setting.weakmode': '\u8272\u5F31\u6A21\u5F0F',
          'app.setting.copy': '\u62F7\u8D1D\u8BBE\u7F6E',
          'app.setting.loading': '\u6B63\u5728\u52A0\u8F7D\u4E3B\u9898',
          'app.setting.copyinfo':
            '\u62F7\u8D1D\u6210\u529F\uFF0C\u8BF7\u5230 src/defaultSettings.js \u4E2D\u66FF\u6362\u9ED8\u8BA4\u914D\u7F6E',
          'app.setting.production.hint':
            '\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6',
        },
        Xr = (0, c.Z)({}, Vr),
        Yr = {
          'app.setting.pagestyle': '\u6574\u9AD4\u98A8\u683C\u8A2D\u7F6E',
          'app.setting.pagestyle.dark': '\u6697\u8272\u83DC\u55AE\u98A8\u683C',
          'app.setting.pagestyle.realdark':
            '\u6697\u8272\u98A8\u683C(\u5B9E\u9A8C\u529F\u80FD)',
          'app.setting.pagestyle.light': '\u4EAE\u8272\u83DC\u55AE\u98A8\u683C',
          'app.setting.content-width': '\u5167\u5BB9\u5340\u57DF\u5BEC\u5EA6',
          'app.setting.content-width.fixed': '\u5B9A\u5BEC',
          'app.setting.content-width.fluid': '\u6D41\u5F0F',
          'app.setting.themecolor': '\u4E3B\u984C\u8272',
          'app.setting.themecolor.dust': '\u8584\u66AE',
          'app.setting.themecolor.volcano': '\u706B\u5C71',
          'app.setting.themecolor.sunset': '\u65E5\u66AE',
          'app.setting.themecolor.cyan': '\u660E\u9752',
          'app.setting.themecolor.green': '\u6975\u5149\u7DA0',
          'app.setting.themecolor.techBlue':
            '\u79D1\u6280\u84DD\uFF08\u9ED8\u8A8D\uFF09',
          'app.setting.themecolor.daybreak': '\u62C2\u66C9\u85CD',
          'app.setting.themecolor.geekblue': '\u6975\u5BA2\u85CD',
          'app.setting.themecolor.purple': '\u91AC\u7D2B',
          'app.setting.navigationmode': '\u5C0E\u822A\u6A21\u5F0F',
          'app.setting.sidemenu': '\u5074\u908A\u83DC\u55AE\u5E03\u5C40',
          'app.setting.topmenu': '\u9802\u90E8\u83DC\u55AE\u5E03\u5C40',
          'app.setting.mixmenu': '\u6DF7\u5408\u83DC\u55AE\u5E03\u5C40',
          'app.setting.splitMenus': '\u81EA\u52A8\u5206\u5272\u83DC\u5355',
          'app.setting.fixedheader': '\u56FA\u5B9A Header',
          'app.setting.fixedsidebar': '\u56FA\u5B9A\u5074\u908A\u83DC\u55AE',
          'app.setting.fixedsidebar.hint':
            '\u5074\u908A\u83DC\u55AE\u5E03\u5C40\u6642\u53EF\u914D\u7F6E',
          'app.setting.hideheader': '\u4E0B\u6ED1\u6642\u96B1\u85CF Header',
          'app.setting.hideheader.hint':
            '\u56FA\u5B9A Header \u6642\u53EF\u914D\u7F6E',
          'app.setting.othersettings': '\u5176\u4ED6\u8A2D\u7F6E',
          'app.setting.weakmode': '\u8272\u5F31\u6A21\u5F0F',
          'app.setting.copy': '\u62F7\u8C9D\u8A2D\u7F6E',
          'app.setting.loading': '\u6B63\u5728\u52A0\u8F09\u4E3B\u984C',
          'app.setting.copyinfo':
            '\u62F7\u8C9D\u6210\u529F\uFF0C\u8ACB\u5230 src/defaultSettings.js \u4E2D\u66FF\u63DB\u9ED8\u8A8D\u914D\u7F6E',
          'app.setting.production.hint':
            '\u914D\u7F6E\u6B04\u53EA\u5728\u958B\u767C\u74B0\u5883\u7528\u65BC\u9810\u89BD\uFF0C\u751F\u7522\u74B0\u5883\u4E0D\u6703\u5C55\u73FE\uFF0C\u8ACB\u62F7\u8C9D\u5F8C\u624B\u52D5\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6',
        },
        Qr = (0, c.Z)({}, Yr),
        $n = {
          'zh-CN': Xr,
          'zh-TW': Qr,
          'en-US': Fr,
          'it-IT': Kr,
          'ko-KR': Ur,
        },
        Jr = function () {
          if (!(0, nt.j)()) return 'zh-CN';
          var e = window.localStorage.getItem('umi_locale');
          return e || window.g_locale || navigator.language;
        },
        kr = function () {
          var e = Jr();
          return $n[e] || $n['zh-CN'];
        },
        In = w(67159),
        Kt = w(34155),
        qr = function () {
          var e, t;
          return typeof Kt == 'undefined'
            ? In.Z
            : ((e = Kt) === null ||
              Kt === void 0 ||
              (t = { NODE_ENV: 'production', PUBLIC_PATH: '/' }) === null ||
              t === void 0
                ? void 0
                : t.ANTD_VERSION) || In.Z;
        },
        eo = function (e) {
          var t,
            n,
            r,
            o,
            l,
            i,
            s,
            v,
            f,
            h,
            g,
            y,
            j,
            M,
            x,
            m,
            C,
            $,
            S,
            b,
            I,
            R,
            P,
            L,
            p,
            T,
            Q,
            G,
            A,
            V,
            pe,
            oe,
            le,
            k,
            q,
            te,
            ne,
            je,
            $e,
            _e,
            Ie,
            F,
            X,
            N,
            we,
            xe,
            ue,
            be,
            Se,
            Le,
            ze,
            Ge,
            Xe,
            Be,
            et,
            Te,
            de,
            He,
            Ye,
            Ue,
            Ae,
            Y,
            ee,
            Ze,
            ht,
            Qe,
            tt,
            it,
            lt,
            Je,
            Fe;
          return !((t = qr()) === null || t === void 0) && t.startsWith('5')
            ? {}
            : ((Fe = {}),
              (0, u.Z)(Fe, e.proComponentsCls, {
                width: '100%',
                height: '100%',
              }),
              (0, u.Z)(
                Fe,
                e.componentCls,
                ((He = { width: '100%', height: '100%' }),
                (0, u.Z)(
                  He,
                  ''.concat(e.proComponentsCls, '-base-menu'),
                  ((X = {
                    color:
                      e == null ||
                      (n = e.layout) === null ||
                      n === void 0 ||
                      (r = n.sider) === null ||
                      r === void 0
                        ? void 0
                        : r.colorTextMenu,
                  }),
                  (0, u.Z)(X, ''.concat(e.antCls, '-menu-sub'), {
                    backgroundColor: 'transparent!important',
                    color:
                      e == null ||
                      (o = e.layout) === null ||
                      o === void 0 ||
                      (l = o.sider) === null ||
                      l === void 0
                        ? void 0
                        : l.colorTextMenu,
                  }),
                  (0, u.Z)(X, '& '.concat(e.antCls, '-layout'), {
                    backgroundColor: 'transparent',
                    width: '100%',
                  }),
                  (0, u.Z)(
                    X,
                    ''
                      .concat(e.antCls, '-menu-submenu-expand-icon, ')
                      .concat(e.antCls, '-menu-submenu-arrow'),
                    { color: 'inherit' },
                  ),
                  (0, u.Z)(
                    X,
                    '&'.concat(e.antCls, '-menu'),
                    ((v = {
                      color:
                        e == null ||
                        (i = e.layout) === null ||
                        i === void 0 ||
                        (s = i.sider) === null ||
                        s === void 0
                          ? void 0
                          : s.colorTextMenu,
                    }),
                    (0, u.Z)(v, ''.concat(e.antCls, '-menu-item'), {
                      '*': { transition: 'none !important' },
                    }),
                    (0, u.Z)(v, ''.concat(e.antCls, '-menu-item a'), {
                      color: 'inherit',
                    }),
                    v),
                  ),
                  (0, u.Z)(
                    X,
                    '&'.concat(e.antCls, '-menu-inline'),
                    (0, u.Z)(
                      {},
                      ''
                        .concat(e.antCls, '-menu-selected::after,')
                        .concat(e.antCls, '-menu-item-selected::after'),
                      { display: 'none' },
                    ),
                  ),
                  (0, u.Z)(
                    X,
                    ''
                      .concat(e.antCls, '-menu-sub ')
                      .concat(e.antCls, '-menu-inline'),
                    { backgroundColor: 'transparent!important' },
                  ),
                  (0, u.Z)(
                    X,
                    ''
                      .concat(
                        e.antCls,
                        `-menu-item:active, 
        `,
                      )
                      .concat(e.antCls, '-menu-submenu-title:active'),
                    { backgroundColor: 'transparent!important' },
                  ),
                  (0, u.Z)(
                    X,
                    '&'.concat(e.antCls, '-menu-light'),
                    (0, u.Z)(
                      {},
                      ''
                        .concat(
                          e.antCls,
                          `-menu-item:hover, 
            `,
                        )
                        .concat(
                          e.antCls,
                          `-menu-item-active,
            `,
                        )
                        .concat(
                          e.antCls,
                          `-menu-submenu-active, 
            `,
                        )
                        .concat(e.antCls, '-menu-submenu-title:hover'),
                      (0, u.Z)(
                        {
                          color:
                            e == null ||
                            (f = e.layout) === null ||
                            f === void 0 ||
                            (h = f.sider) === null ||
                            h === void 0
                              ? void 0
                              : h.colorTextMenuActive,
                          borderRadius: e.borderRadius,
                        },
                        ''.concat(e.antCls, '-menu-submenu-arrow'),
                        {
                          color:
                            e == null ||
                            (g = e.layout) === null ||
                            g === void 0 ||
                            (y = g.sider) === null ||
                            y === void 0
                              ? void 0
                              : y.colorTextMenuActive,
                        },
                      ),
                    ),
                  ),
                  (0, u.Z)(
                    X,
                    '&'
                      .concat(e.antCls, '-menu:not(')
                      .concat(e.antCls, '-menu-horizontal)'),
                    ((I = {}),
                    (0, u.Z)(I, ''.concat(e.antCls, '-menu-item-selected'), {
                      backgroundColor:
                        e == null ||
                        (j = e.layout) === null ||
                        j === void 0 ||
                        (M = j.sider) === null ||
                        M === void 0
                          ? void 0
                          : M.colorBgMenuItemSelected,
                      borderRadius: e.borderRadius,
                    }),
                    (0, u.Z)(
                      I,
                      ''
                        .concat(
                          e.antCls,
                          `-menu-item:hover, 
            `,
                        )
                        .concat(
                          e.antCls,
                          `-menu-item-active,
            `,
                        )
                        .concat(e.antCls, '-menu-submenu-title:hover'),
                      (0, u.Z)(
                        {
                          color:
                            e == null ||
                            (x = e.layout) === null ||
                            x === void 0 ||
                            (m = x.sider) === null ||
                            m === void 0
                              ? void 0
                              : m.colorTextMenuActive,
                          borderRadius: e.borderRadius,
                          backgroundColor:
                            e == null ||
                            (C = e.layout) === null ||
                            C === void 0 ||
                            ($ = C.sider) === null ||
                            $ === void 0
                              ? void 0
                              : $.colorBgMenuItemHover,
                        },
                        ''.concat(e.antCls, '-menu-submenu-arrow'),
                        {
                          color:
                            e == null ||
                            (S = e.layout) === null ||
                            S === void 0 ||
                            (b = S.sider) === null ||
                            b === void 0
                              ? void 0
                              : b.colorTextMenuActive,
                        },
                      ),
                    ),
                    I),
                  ),
                  (0, u.Z)(X, ''.concat(e.antCls, '-menu-item-selected'), {
                    color:
                      e == null ||
                      (R = e.layout) === null ||
                      R === void 0 ||
                      (P = R.sider) === null ||
                      P === void 0
                        ? void 0
                        : P.colorTextMenuSelected,
                  }),
                  (0, u.Z)(X, ''.concat(e.antCls, '-menu-submenu-selected'), {
                    color:
                      e == null ||
                      (L = e.layout) === null ||
                      L === void 0 ||
                      (p = L.sider) === null ||
                      p === void 0
                        ? void 0
                        : p.colorTextMenuSelected,
                  }),
                  (0, u.Z)(
                    X,
                    '&'
                      .concat(e.antCls, '-menu:not(')
                      .concat(e.antCls, '-menu-inline) ')
                      .concat(e.antCls, '-menu-submenu-open'),
                    {
                      color:
                        e == null ||
                        (T = e.layout) === null ||
                        T === void 0 ||
                        (Q = T.sider) === null ||
                        Q === void 0
                          ? void 0
                          : Q.colorTextMenuSelected,
                    },
                  ),
                  (0, u.Z)(
                    X,
                    '&'.concat(e.antCls, '-menu-vertical'),
                    (0, u.Z)(
                      {},
                      ''.concat(e.antCls, '-menu-submenu-selected'),
                      {
                        borderRadius: e.borderRadius,
                        color:
                          e == null ||
                          (G = e.layout) === null ||
                          G === void 0 ||
                          (A = G.sider) === null ||
                          A === void 0
                            ? void 0
                            : A.colorTextMenuSelected,
                      },
                    ),
                  ),
                  (0, u.Z)(
                    X,
                    ''
                      .concat(e.antCls, '-menu-submenu:hover > ')
                      .concat(e.antCls, '-menu-submenu-title > ')
                      .concat(e.antCls, '-menu-submenu-arrow'),
                    {
                      color:
                        e == null ||
                        (V = e.layout) === null ||
                        V === void 0 ||
                        (pe = V.sider) === null ||
                        pe === void 0
                          ? void 0
                          : pe.colorTextMenuActive,
                    },
                  ),
                  (0, u.Z)(
                    X,
                    '&'.concat(e.antCls, '-menu-horizontal'),
                    ((F = {}),
                    (0, u.Z)(
                      F,
                      ''
                        .concat(
                          e.antCls,
                          `-menu-item:hover,
          `,
                        )
                        .concat(
                          e.antCls,
                          `-menu-submenu:hover,
          `,
                        )
                        .concat(
                          e.antCls,
                          `-menu-item-active,
          `,
                        )
                        .concat(e.antCls, '-menu-submenu-active'),
                      {
                        borderRadius: 4,
                        transition: 'none',
                        color:
                          e == null ||
                          (oe = e.layout) === null ||
                          oe === void 0 ||
                          (le = oe.header) === null ||
                          le === void 0
                            ? void 0
                            : le.colorTextMenuActive,
                        backgroundColor:
                          e == null ||
                          (k = e.layout) === null ||
                          k === void 0 ||
                          (q = k.header) === null ||
                          q === void 0
                            ? void 0
                            : q.colorBgMenuItemHover,
                      },
                    ),
                    (0, u.Z)(
                      F,
                      ''
                        .concat(
                          e.antCls,
                          `-menu-item-open,
          `,
                        )
                        .concat(
                          e.antCls,
                          `-menu-submenu-open,
          `,
                        )
                        .concat(
                          e.antCls,
                          `-menu-item-selected,
          `,
                        )
                        .concat(e.antCls, '-menu-submenu-selected'),
                      (0, u.Z)(
                        {
                          backgroundColor:
                            e == null ||
                            (te = e.layout) === null ||
                            te === void 0 ||
                            (ne = te.header) === null ||
                            ne === void 0
                              ? void 0
                              : ne.colorBgMenuItemSelected,
                          borderRadius: e.borderRadius,
                          transition: 'none',
                          color:
                            e == null ||
                            (je = e.layout) === null ||
                            je === void 0 ||
                            ($e = je.header) === null ||
                            $e === void 0
                              ? void 0
                              : $e.colorTextMenuSelected,
                        },
                        ''.concat(e.antCls, '-menu-submenu-arrow'),
                        {
                          color:
                            e == null ||
                            (_e = e.layout) === null ||
                            _e === void 0 ||
                            (Ie = _e.header) === null ||
                            Ie === void 0
                              ? void 0
                              : Ie.colorTextMenuSelected,
                        },
                      ),
                    ),
                    (0, u.Z)(
                      F,
                      '> '
                        .concat(e.antCls, '-menu-item, > ')
                        .concat(e.antCls, '-menu-submenu'),
                      { paddingInline: 16, marginInline: 4 },
                    ),
                    (0, u.Z)(
                      F,
                      '> '
                        .concat(e.antCls, '-menu-item::after, > ')
                        .concat(e.antCls, '-menu-submenu::after'),
                      { display: 'none' },
                    ),
                    F),
                  ),
                  X),
                ),
                (0, u.Z)(
                  He,
                  ''.concat(e.proComponentsCls, '-top-nav-header-base-menu'),
                  ((de = {}),
                  (0, u.Z)(
                    de,
                    '&'.concat(e.antCls, '-menu'),
                    (0, u.Z)(
                      {
                        color:
                          e == null ||
                          (N = e.layout) === null ||
                          N === void 0 ||
                          (we = N.header) === null ||
                          we === void 0
                            ? void 0
                            : we.colorTextMenu,
                      },
                      ''.concat(e.antCls, '-menu-item a'),
                      { color: 'inherit' },
                    ),
                  ),
                  (0, u.Z)(
                    de,
                    '&'.concat(e.antCls, '-menu-light'),
                    ((Te = {}),
                    (0, u.Z)(
                      Te,
                      ''
                        .concat(
                          e.antCls,
                          `-menu-item:hover, 
            `,
                        )
                        .concat(
                          e.antCls,
                          `-menu-item-active,
            `,
                        )
                        .concat(
                          e.antCls,
                          `-menu-submenu-active, 
            `,
                        )
                        .concat(e.antCls, '-menu-submenu-title:hover'),
                      (0, u.Z)(
                        {
                          color:
                            e == null ||
                            (xe = e.layout) === null ||
                            xe === void 0 ||
                            (ue = xe.header) === null ||
                            ue === void 0
                              ? void 0
                              : ue.colorTextMenuActive,
                          borderRadius: e.borderRadius,
                          transition: 'none',
                          backgroundColor:
                            e == null ||
                            (be = e.layout) === null ||
                            be === void 0 ||
                            (Se = be.header) === null ||
                            Se === void 0
                              ? void 0
                              : Se.colorBgMenuItemSelected,
                        },
                        ''.concat(e.antCls, '-menu-submenu-arrow'),
                        {
                          color:
                            e == null ||
                            (Le = e.layout) === null ||
                            Le === void 0 ||
                            (ze = Le.header) === null ||
                            ze === void 0
                              ? void 0
                              : ze.colorTextMenuActive,
                        },
                      ),
                    ),
                    (0, u.Z)(Te, ''.concat(e.antCls, '-menu-item-selected'), {
                      color:
                        e == null ||
                        (Ge = e.layout) === null ||
                        Ge === void 0 ||
                        (Xe = Ge.header) === null ||
                        Xe === void 0
                          ? void 0
                          : Xe.colorTextMenuSelected,
                      borderRadius: e.borderRadius,
                      backgroundColor:
                        e == null ||
                        (Be = e.layout) === null ||
                        Be === void 0 ||
                        (et = Be.header) === null ||
                        et === void 0
                          ? void 0
                          : et.colorBgMenuItemSelected,
                    }),
                    Te),
                  ),
                  de),
                ),
                He),
              ),
              (0, u.Z)(
                Fe,
                ''
                  .concat(e.antCls, '-menu-sub')
                  .concat(e.antCls, '-menu-inline'),
                { backgroundColor: 'transparent!important' },
              ),
              (0, u.Z)(
                Fe,
                ''.concat(e.antCls, '-menu-submenu-popup'),
                ((Je = {
                  backgroundColor: 'rgba(255, 255, 255, 0.42)',
                  '-webkit-backdrop-filter': 'blur(8px)',
                  backdropFilter: 'blur(8px)',
                }),
                (0, u.Z)(
                  Je,
                  ''.concat(e.antCls, '-menu'),
                  (0, u.Z)(
                    {
                      background: 'transparent !important',
                      backgroundColor: 'transparent !important',
                    },
                    ''
                      .concat(
                        e.antCls,
                        `-menu-item:active, 
        `,
                      )
                      .concat(e.antCls, '-menu-submenu-title:active'),
                    { backgroundColor: 'transparent!important' },
                  ),
                ),
                (0, u.Z)(Je, ''.concat(e.antCls, '-menu-item-selected'), {
                  color:
                    e == null ||
                    (Ye = e.layout) === null ||
                    Ye === void 0 ||
                    (Ue = Ye.sider) === null ||
                    Ue === void 0
                      ? void 0
                      : Ue.colorTextMenuSelected,
                }),
                (0, u.Z)(Je, ''.concat(e.antCls, '-menu-submenu-selected'), {
                  color:
                    e == null ||
                    (Ae = e.layout) === null ||
                    Ae === void 0 ||
                    (Y = Ae.sider) === null ||
                    Y === void 0
                      ? void 0
                      : Y.colorTextMenuSelected,
                }),
                (0, u.Z)(
                  Je,
                  ''
                    .concat(e.antCls, '-menu:not(')
                    .concat(e.antCls, '-menu-horizontal)'),
                  ((lt = {}),
                  (0, u.Z)(lt, ''.concat(e.antCls, '-menu-item-selected'), {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    borderRadius: e.borderRadius,
                    color:
                      e == null ||
                      (ee = e.layout) === null ||
                      ee === void 0 ||
                      (Ze = ee.sider) === null ||
                      Ze === void 0
                        ? void 0
                        : Ze.colorTextMenuSelected,
                  }),
                  (0, u.Z)(
                    lt,
                    ''
                      .concat(
                        e.antCls,
                        `-menu-item:hover, 
          `,
                      )
                      .concat(
                        e.antCls,
                        `-menu-item-active,
          `,
                      )
                      .concat(e.antCls, '-menu-submenu-title:hover'),
                    (0, u.Z)(
                      {
                        color:
                          e == null ||
                          (ht = e.layout) === null ||
                          ht === void 0 ||
                          (Qe = ht.sider) === null ||
                          Qe === void 0
                            ? void 0
                            : Qe.colorTextMenuActive,
                        borderRadius: e.borderRadius,
                      },
                      ''.concat(e.antCls, '-menu-submenu-arrow'),
                      {
                        color:
                          e == null ||
                          (tt = e.layout) === null ||
                          tt === void 0 ||
                          (it = tt.sider) === null ||
                          it === void 0
                            ? void 0
                            : it.colorTextMenuActive,
                      },
                    ),
                  ),
                  lt),
                ),
                Je),
              ),
              Fe);
        },
        to = function (e) {
          var t, n, r, o, l, i, s, v, f;
          return (0, u.Z)(
            {
              body: {
                paddingBlock: 0,
                paddingInline: 0,
                marginBlock: 0,
                marginInline: 0,
                fontFamily: e.fontFamily,
              },
            },
            e.proComponentsCls,
            ((f = {}),
            (0, u.Z)(f, ''.concat(e.antCls, '-layout'), {
              backgroundColor: 'transparent !important',
            }),
            (0, u.Z)(
              f,
              '& '.concat(e.componentCls),
              ((v = {}),
              (0, u.Z)(v, '& '.concat(e.antCls, '-layout'), {
                display: 'flex',
                backgroundColor: 'transparent',
                width: '100%',
              }),
              (0, u.Z)(v, ''.concat(e.componentCls, '-content'), {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                backgroundColor:
                  (e == null ||
                  (t = e.layout) === null ||
                  t === void 0 ||
                  (n = t.pageContainer) === null ||
                  n === void 0
                    ? void 0
                    : n.colorBgPageContainer) || 'transparent',
                position: 'relative',
                '*': { boxSizing: 'border-box' },
                paddingBlock:
                  e == null ||
                  (r = e.layout) === null ||
                  r === void 0 ||
                  (o = r.pageContainer) === null ||
                  o === void 0
                    ? void 0
                    : o.paddingBlockPageContainerContent,
                paddingInline:
                  e == null ||
                  (l = e.layout) === null ||
                  l === void 0 ||
                  (i = l.pageContainer) === null ||
                  i === void 0
                    ? void 0
                    : i.paddingInlinePageContainerContent,
                '&-has-page-container': { padding: 0 },
              }),
              (0, u.Z)(v, ''.concat(e.componentCls, '-container'), {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
                minHeight: 0,
                backgroundColor: 'transparent',
              }),
              (0, u.Z)(v, ''.concat(e.componentCls, '-bg-list'), {
                pointerEvents: 'none',
                position: 'fixed',
                overflow: 'hidden',
                insetBlockStart: 0,
                insetInlineStart: 0,
                zIndex: 0,
                height: '100%',
                width: '100%',
                background:
                  e == null || (s = e.layout) === null || s === void 0
                    ? void 0
                    : s.bgLayout,
              }),
              v),
            ),
            (0, u.Z)(f, ''.concat(e.antCls, '-menu-submenu-popup'), {
              backgroundColor: 'rgba(255, 255, 255, 0.42)',
              '-webkit-backdrop-filter': 'blur(8px)',
              backdropFilter: 'blur(8px)',
            }),
            f),
          );
        };
      function no(a) {
        return (0, ye.Xj)('ProLayout', function (e) {
          var t = (0, c.Z)(
            (0, c.Z)({}, e),
            {},
            { componentCls: '.'.concat(a) },
          );
          return [to(t), eo(t)];
        });
      }
      function ao(a) {
        if (!a || a === '/') return ['/'];
        var e = a.split('/').filter(function (t) {
          return t;
        });
        return e.map(function (t, n) {
          return '/'.concat(e.slice(0, n + 1).join('/'));
        });
      }
      var ro = function (e, t, n) {
          var r = e.breadcrumbName,
            o = e.path,
            l = n.indexOf(e) === n.length - 1;
          return l
            ? (0, d.jsx)('span', { children: r })
            : (0, d.jsx)('a', { href: o, children: r });
        },
        oo = function (e, t) {
          var n = t.formatMessage,
            r = t.menu;
          return e.locale && n && (r == null ? void 0 : r.locale) !== !1
            ? n({ id: e.locale, defaultMessage: e.name })
            : e.name;
        },
        io = function (e, t) {
          var n = e.get(t);
          if (!n) {
            var r = Array.from(e.keys()) || [],
              o = r.find(function (l) {
                return Wt()(l.replace('?', '')).test(t);
              });
            o && (n = e.get(o));
          }
          return n || { path: '' };
        },
        lo = function (e) {
          var t = e.location,
            n = e.breadcrumbMap;
          return { location: t, breadcrumbMap: n };
        },
        uo = function (e, t, n) {
          var r = ao(e == null ? void 0 : e.pathname),
            o = r
              .map(function (l) {
                var i = io(t, l),
                  s = oo(i, n),
                  v = i.hideInBreadcrumb;
                return s && !v
                  ? { path: l, breadcrumbName: s, component: i.component }
                  : { path: '', breadcrumbName: '' };
              })
              .filter(function (l) {
                return l && l.path;
              });
          return o;
        },
        so = function (e) {
          var t = lo(e),
            n = t.location,
            r = t.breadcrumbMap;
          return n && n.pathname && r ? uo(n, r, e) : [];
        },
        co = function (e, t) {
          var n = e.breadcrumbRender,
            r = e.itemRender,
            o = t.breadcrumbProps || {},
            l = o.minLength,
            i = l === void 0 ? 2 : l,
            s = so(e),
            v = r || ro,
            f = s;
          return (
            n && (f = n(f) || []),
            ((f && f.length < i) || n === !1) && (f = void 0),
            { routes: f, itemRender: v }
          );
        };
      function vo(a) {
        return (0, $t.Z)(a).reduce(function (e, t) {
          var n = (0, W.Z)(t, 2),
            r = n[0],
            o = n[1];
          return (e[r] = o), e;
        }, {});
      }
      var fo = function a(e, t, n, r) {
          var o = Sa(e, (t == null ? void 0 : t.locale) || !1, n, !0),
            l = o.menuData,
            i = o.breadcrumb;
          return r
            ? a(r(l), t, n, void 0)
            : { breadcrumb: vo(i), breadcrumbMap: i, menuData: l };
        },
        po = w(71002),
        ho = w(51812),
        go = function (e) {
          var t = (0, Z.useState)({}),
            n = (0, W.Z)(t, 2),
            r = n[0],
            o = n[1];
          return (
            (0, Z.useEffect)(
              function () {
                o(
                  (0, ho.Y)({
                    layout:
                      (0, po.Z)(e.layout) !== 'object' ? e.layout : void 0,
                    navTheme: e.navTheme,
                    menuRender: e.menuRender,
                    footerRender: e.footerRender,
                    menuHeaderRender: e.menuHeaderRender,
                    headerRender: e.headerRender,
                    fixSiderbar: e.fixSiderbar,
                  }),
                );
              },
              [
                e.layout,
                e.navTheme,
                e.menuRender,
                e.footerRender,
                e.menuHeaderRender,
                e.headerRender,
                e.fixSiderbar,
              ],
            ),
            r
          );
        },
        mo = w(78164),
        yo = function (e) {
          var t,
            n = (0, Z.useContext)(Oe.L_),
            r = n.hashId,
            o = e.style,
            l = e.prefixCls,
            i = e.children,
            s = e.hasPageContainer,
            v = s === void 0 ? 0 : s,
            f = D()(
              ''.concat(l, '-content'),
              r,
              ((t = {}),
              (0, u.Z)(t, ''.concat(l, '-has-header'), e.hasHeader),
              (0, u.Z)(t, ''.concat(l, '-content-has-page-container'), v > 0),
              t),
            ),
            h = e.ErrorBoundary || mo.S;
          return e.ErrorBoundary === !1
            ? (0, d.jsx)(ot.Content, { className: f, style: o, children: i })
            : (0, d.jsx)(h, {
                children: (0, d.jsx)(ot.Content, {
                  className: f,
                  style: o,
                  children: i,
                }),
              });
        },
        xo = ['id', 'defaultMessage'],
        Co = ['fixSiderbar', 'navTheme', 'layout'],
        Rn = 0,
        bo = function (e, t) {
          var n;
          return e.headerRender === !1 || e.pure
            ? null
            : (0, d.jsx)(
                Tr,
                (0, c.Z)(
                  (0, c.Z)({ matchMenuKeys: t }, e),
                  {},
                  {
                    stylish:
                      (n = e.stylish) === null || n === void 0
                        ? void 0
                        : n.header,
                  },
                ),
              );
        },
        So = function (e) {
          return e.footerRender === !1 || e.pure
            ? null
            : e.footerRender
            ? e.footerRender((0, c.Z)({}, e), (0, d.jsx)(za, {}))
            : null;
        },
        Zo = function (e, t) {
          var n,
            r = e.layout,
            o = e.isMobile,
            l = e.selectedKeys,
            i = e.openKeys,
            s = e.splitMenus,
            v = e.menuRender;
          if (e.menuRender === !1 || e.pure) return null;
          var f = e.menuData;
          if (s && (i !== !1 || r === 'mix') && !o) {
            var h = l || t,
              g = (0, W.Z)(h, 1),
              y = g[0];
            if (y) {
              var j, M;
              f =
                ((j = e.menuData) === null ||
                j === void 0 ||
                (M = j.find(function ($) {
                  return $.key === y;
                })) === null ||
                M === void 0
                  ? void 0
                  : M.children) || [];
            } else f = [];
          }
          var x = Mt(f || []);
          if (x && (x == null ? void 0 : x.length) < 1 && s) return null;
          if (r === 'top' && !o) {
            var m;
            return (0, d.jsx)(
              Sn,
              (0, c.Z)(
                (0, c.Z)({ matchMenuKeys: t }, e),
                {},
                {
                  hide: !0,
                  stylish:
                    (m = e.stylish) === null || m === void 0 ? void 0 : m.sider,
                },
              ),
            );
          }
          var C = (0, d.jsx)(
            Sn,
            (0, c.Z)(
              (0, c.Z)({ matchMenuKeys: t }, e),
              {},
              {
                menuData: x,
                stylish:
                  (n = e.stylish) === null || n === void 0 ? void 0 : n.sider,
              },
            ),
          );
          return v ? v(e, C) : C;
        },
        Mo = function (e, t) {
          var n = t.pageTitleRender,
            r = Mn(e);
          if (n === !1) return { title: t.title || '', id: '', pageName: '' };
          if (n) {
            var o = n(e, r.title, r);
            if (typeof o == 'string')
              return (0, c.Z)((0, c.Z)({}, r), {}, { title: o });
            (0, Pa.ZP)(
              typeof o == 'string',
              'pro-layout: renderPageTitle return value should be a string',
            );
          }
          return r;
        },
        $o = function (e, t, n) {
          return e ? (t ? 60 : n) : 0;
        },
        jn = function (e) {
          var t,
            n,
            r,
            o,
            l,
            i = e || {},
            s = i.children,
            v = i.onCollapse,
            f = i.location,
            h = f === void 0 ? { pathname: '/' } : f,
            g = i.contentStyle,
            y = i.route,
            j = i.defaultCollapsed,
            M = i.style,
            x = i.siderWidth,
            m = i.menu,
            C = i.siderMenuType,
            $ = i.isChildrenLayout,
            S = i.menuDataRender,
            b = i.actionRef,
            I = i.bgLayoutImgList,
            R = i.formatMessage,
            P = i.loading,
            L = (0, Z.useMemo)(
              function () {
                return x || (e.layout === 'mix' ? 215 : 256);
              },
              [e.layout, x],
            ),
            p = (0, Z.useContext)(De.ZP.ConfigContext),
            T =
              (t = e.prefixCls) !== null && t !== void 0
                ? t
                : p.getPrefixCls('pro'),
            Q = (0, qe.Z)(!1, {
              value: m == null ? void 0 : m.loading,
              onChange: m == null ? void 0 : m.onLoadingChange,
            }),
            G = (0, W.Z)(Q, 2),
            A = G[0],
            V = G[1],
            pe = (0, Z.useState)(function () {
              return (Rn += 1), 'pro-layout-'.concat(Rn);
            }),
            oe = (0, W.Z)(pe, 1),
            le = oe[0],
            k = (0, Z.useCallback)(
              function (he) {
                var ke = he.id,
                  It = he.defaultMessage,
                  gt = (0, E.Z)(he, xo);
                if (R) return R((0, c.Z)({ id: ke, defaultMessage: It }, gt));
                var mt = kr();
                return mt[ke] ? mt[ke] : It;
              },
              [R],
            ),
            q = (0, tn.ZP)(
              [le, m == null ? void 0 : m.params],
              (function () {
                var he = (0, ge.Z)(
                  (0, H.Z)().mark(function ke(It) {
                    var gt, mt, Bn, Hn;
                    return (0, H.Z)().wrap(function (ut) {
                      for (;;)
                        switch ((ut.prev = ut.next)) {
                          case 0:
                            return (
                              (mt = (0, W.Z)(It, 2)),
                              (Bn = mt[1]),
                              V(!0),
                              (ut.next = 4),
                              m == null ||
                              (gt = m.request) === null ||
                              gt === void 0
                                ? void 0
                                : gt.call(
                                    m,
                                    Bn || {},
                                    (y == null ? void 0 : y.children) ||
                                      (y == null ? void 0 : y.routes) ||
                                      [],
                                  )
                            );
                          case 4:
                            return (
                              (Hn = ut.sent), V(!1), ut.abrupt('return', Hn)
                            );
                          case 7:
                          case 'end':
                            return ut.stop();
                        }
                    }, ke);
                  }),
                );
                return function (ke) {
                  return he.apply(this, arguments);
                };
              })(),
              {
                revalidateOnFocus: !1,
                shouldRetryOnError: !1,
                revalidateOnReconnect: !1,
              },
            ),
            te = q.data,
            ne = q.mutate,
            je = (0, tn.kY)(),
            $e = je.cache;
          (0, Z.useEffect)(function () {
            return function () {
              $e instanceof Map && $e.clear();
            };
          }, []);
          var _e = (0, Z.useMemo)(
              function () {
                return fo(
                  te ||
                    (y == null ? void 0 : y.children) ||
                    (y == null ? void 0 : y.routes) ||
                    [],
                  m,
                  k,
                  S,
                );
              },
              [
                k,
                m,
                S,
                te,
                y == null ? void 0 : y.children,
                y == null ? void 0 : y.routes,
              ],
            ),
            Ie = _e || {},
            F = Ie.breadcrumb,
            X = F === void 0 ? {} : F,
            N = Ie.breadcrumbMap,
            we = Ie.menuData,
            xe = we === void 0 ? [] : we;
          b &&
            m != null &&
            m.request &&
            (b.current = {
              reload: function () {
                ne();
              },
            });
          var ue = (0, Z.useMemo)(
              function () {
                return ja(h.pathname || '/', xe || [], !0);
              },
              [h.pathname, xe],
            ),
            be = (0, Z.useMemo)(
              function () {
                return Array.from(
                  new Set(
                    ue.map(function (he) {
                      return he.key || he.path || '';
                    }),
                  ),
                );
              },
              [ue],
            ),
            Se = ue[ue.length - 1] || {},
            Le = go(Se),
            ze = (0, c.Z)((0, c.Z)({}, e), Le),
            Ge = ze.fixSiderbar,
            Xe = ze.navTheme,
            Be = ze.layout,
            et = (0, E.Z)(ze, Co),
            Te = (0, Na.ZP)(),
            de = (Te === 'sm' || Te === 'xs') && !e.disableMobile,
            He = Be !== 'top' && !de,
            Ye = (0, qe.Z)(
              function () {
                return j !== void 0 ? j : !!(de || Te === 'md');
              },
              { value: e.collapsed, onChange: v },
            ),
            Ue = (0, W.Z)(Ye, 2),
            Ae = Ue[0],
            Y = Ue[1],
            ee = (0, en.Z)(
              (0, c.Z)(
                (0, c.Z)(
                  (0, c.Z)({ prefixCls: T }, e),
                  {},
                  { siderWidth: L },
                  Le,
                ),
                {},
                {
                  formatMessage: k,
                  breadcrumb: X,
                  menu: (0, c.Z)(
                    (0, c.Z)({}, m),
                    {},
                    { type: C || (m == null ? void 0 : m.type), loading: A },
                  ),
                  layout: Be,
                },
              ),
              ['className', 'style', 'breadcrumbRender'],
            ),
            Ze = Mo(
              (0, c.Z)(
                (0, c.Z)({ pathname: h.pathname }, ee),
                {},
                { breadcrumbMap: N },
              ),
              e,
            ),
            ht = co(
              (0, c.Z)(
                (0, c.Z)({}, ee),
                {},
                { breadcrumbRender: e.breadcrumbRender, breadcrumbMap: N },
              ),
              e,
            ),
            Qe = Zo(
              (0, c.Z)(
                (0, c.Z)({}, ee),
                {},
                { menuData: xe, onCollapse: Y, isMobile: de, collapsed: Ae },
              ),
              be,
            ),
            tt = bo(
              (0, c.Z)(
                (0, c.Z)({}, ee),
                {},
                {
                  children: null,
                  hasSiderMenu: !!Qe,
                  menuData: xe,
                  isMobile: de,
                  collapsed: Ae,
                  onCollapse: Y,
                },
              ),
              be,
            ),
            it = So((0, c.Z)({ isMobile: de, collapsed: Ae }, ee)),
            lt = (0, Z.useContext)(Zn),
            Je = lt.isChildrenLayout,
            Fe = $ !== void 0 ? $ : Je,
            We = ''.concat(T, '-layout'),
            wn = no(We),
            Ro = wn.wrapSSR,
            Gt = wn.hashId,
            jo = D()(
              e.className,
              Gt,
              'ant-design-pro',
              We,
              ((n = {}),
              (0, u.Z)(n, 'screen-'.concat(Te), Te),
              (0, u.Z)(n, ''.concat(We, '-top-menu'), Be === 'top'),
              (0, u.Z)(n, ''.concat(We, '-is-children'), Fe),
              (0, u.Z)(n, ''.concat(We, '-fix-siderbar'), Ge),
              (0, u.Z)(n, ''.concat(We, '-').concat(Be), Be),
              n),
            ),
            wo = $o(!!He, Ae, L),
            Tn = { position: 'relative' };
          (Fe || (g && g.minHeight)) && (Tn.minHeight = 0),
            (0, Z.useEffect)(
              function () {
                var he;
                (he = e.onPageChange) === null ||
                  he === void 0 ||
                  he.call(e, e.location);
              },
              [
                h.pathname,
                (r = h.pathname) === null || r === void 0 ? void 0 : r.search,
              ],
            );
          var To = (0, Z.useState)(!1),
            Pn = (0, W.Z)(To, 2),
            Nn = Pn[0],
            Po = Pn[1],
            No = (0, Z.useState)(0),
            _n = (0, W.Z)(No, 2),
            Ln = _n[0],
            _o = _n[1];
          yt(Ze, e.title || !1);
          var Lo = (0, Z.useMemo)(
              function () {
                return I && I.length > 0
                  ? I.map(function (he, ke) {
                      return (0,
                      d.jsx)('img', { src: he.src, style: (0, c.Z)({ position: 'absolute' }, he) }, ke);
                    })
                  : null;
              },
              [I],
            ),
            Bo = (0, Z.useContext)(Oe.L_),
            Ut = Bo.token;
          return Ro(
            (0, d.jsx)(Zn.Provider, {
              value: (0, c.Z)(
                (0, c.Z)({}, ee),
                {},
                {
                  breadcrumb: ht,
                  menuData: xe,
                  isMobile: de,
                  collapsed: Ae,
                  hasPageContainer: Ln,
                  setHasPageContainer: _o,
                  isChildrenLayout: !0,
                  title: Ze.pageName,
                  hasSiderMenu: !!Qe,
                  hasHeader: !!tt,
                  siderWidth: wo,
                  hasFooter: !!it,
                  hasFooterToolbar: Nn,
                  setHasFooterToolbar: Po,
                  pageTitleInfo: Ze,
                  matchMenus: ue,
                  matchMenuKeys: be,
                  currentMenu: Se,
                },
              ),
              children: e.pure
                ? (0, d.jsx)(d.Fragment, { children: s })
                : (0, d.jsxs)('div', {
                    className: jo,
                    children: [
                      (0, d.jsx)('div', {
                        className: ''.concat(We, '-bg-list ').concat(Gt),
                        children: Lo,
                      }),
                      (0, d.jsxs)(ot, {
                        style: (0, c.Z)(
                          {
                            minHeight: '100%',
                            flexDirection: Qe ? 'row' : void 0,
                          },
                          M,
                        ),
                        children: [
                          Qe,
                          (0, d.jsxs)('div', {
                            style: Tn,
                            className: ''.concat(We, '-container ').concat(Gt),
                            children: [
                              tt,
                              (0, d.jsx)(
                                yo,
                                (0, c.Z)(
                                  (0, c.Z)(
                                    {
                                      hasPageContainer: Ln,
                                      isChildrenLayout: Fe,
                                    },
                                    et,
                                  ),
                                  {},
                                  {
                                    hasHeader: !!tt,
                                    prefixCls: We,
                                    style: g,
                                    children: P ? (0, d.jsx)(_r, {}) : s,
                                  },
                                ),
                              ),
                              it,
                              Nn &&
                                (0, d.jsx)('div', {
                                  className: ''.concat(We, '-has-footer'),
                                  style: {
                                    height: 64,
                                    marginBlockStart:
                                      Ut == null ||
                                      (o = Ut.layout) === null ||
                                      o === void 0 ||
                                      (l = o.pageContainer) === null ||
                                      l === void 0
                                        ? void 0
                                        : l.paddingBlockPageContainerContent,
                                  },
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
            }),
          );
        };
      jn.defaultProps = (0, c.Z)(
        (0, c.Z)({ logo: (0, d.jsx)(_a, {}) }, fn),
        {},
        { location: (0, nt.j)() ? window.location : void 0 },
      );
      var Io = function (e) {
        var t = e.colorPrimary,
          n = e.navTheme !== void 0 ? { dark: e.navTheme === 'realDark' } : {};
        return (0, d.jsx)(De.ZP, {
          theme: t ? { token: { colorPrimary: t } } : void 0,
          children: (0, d.jsx)(
            Oe._Y,
            (0, c.Z)(
              (0, c.Z)({ autoClearCache: !0 }, n),
              {},
              { token: e.token, children: (0, d.jsx)(jn, (0, c.Z)({}, e)) },
            ),
          ),
        });
      };
    },
    21879: function (Ve) {
      'use strict';
      var dt = typeof BigInt64Array != 'undefined';
      Ve.exports = function w(u, H) {
        if (u === H) return !0;
        if (u && H && typeof u == 'object' && typeof H == 'object') {
          if (u.constructor !== H.constructor) return !1;
          var ge, E, W;
          if (Array.isArray(u)) {
            if (((ge = u.length), ge != H.length)) return !1;
            for (E = ge; E-- !== 0; ) if (!w(u[E], H[E])) return !1;
            return !0;
          }
          if (u instanceof Map && H instanceof Map) {
            if (u.size !== H.size) return !1;
            for (E of u.entries()) if (!H.has(E[0])) return !1;
            for (E of u.entries()) if (!w(E[1], H.get(E[0]))) return !1;
            return !0;
          }
          if (u instanceof Set && H instanceof Set) {
            if (u.size !== H.size) return !1;
            for (E of u.entries()) if (!H.has(E[0])) return !1;
            return !0;
          }
          if (ArrayBuffer.isView(u) && ArrayBuffer.isView(H)) {
            if (((ge = u.length), ge != H.length)) return !1;
            for (E = ge; E-- !== 0; ) if (u[E] !== H[E]) return !1;
            return !0;
          }
          if (u.constructor === RegExp)
            return u.source === H.source && u.flags === H.flags;
          if (u.valueOf !== Object.prototype.valueOf)
            return u.valueOf() === H.valueOf();
          if (u.toString !== Object.prototype.toString)
            return u.toString() === H.toString();
          if (
            ((W = Object.keys(u)),
            (ge = W.length),
            ge !== Object.keys(H).length)
          )
            return !1;
          for (E = ge; E-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(H, W[E])) return !1;
          for (E = ge; E-- !== 0; ) {
            var c = W[E];
            if (!(c === '_owner' && u.$$typeof) && !w(u[c], H[c])) return !1;
          }
          return !0;
        }
        return u !== u && H !== H;
      };
    },
    14779: function (Ve) {
      (Ve.exports = yt),
        (Ve.exports.parse = H),
        (Ve.exports.compile = ge),
        (Ve.exports.tokensToFunction = E),
        (Ve.exports.tokensToRegExp = nt);
      var dt = '/',
        w = './',
        u = new RegExp(
          [
            '(\\\\.)',
            '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?',
          ].join('|'),
          'g',
        );
      function H(_, U) {
        for (
          var B = [],
            se = 0,
            ce = 0,
            J = '',
            Pe = (U && U.delimiter) || dt,
            Ne = (U && U.delimiters) || w,
            O = !1,
            K;
          (K = u.exec(_)) !== null;

        ) {
          var Ce = K[0],
            Me = K[1],
            ae = K.index;
          if (((J += _.slice(ce, ae)), (ce = ae + Ce.length), Me)) {
            (J += Me[1]), (O = !0);
            continue;
          }
          var ve = '',
            at = _[ce],
            Rt = K[2],
            jt = K[3],
            wt = K[4],
            rt = K[5];
          if (!O && J.length) {
            var Ee = J.length - 1;
            Ne.indexOf(J[Ee]) > -1 && ((ve = J[Ee]), (J = J.slice(0, Ee)));
          }
          J && (B.push(J), (J = ''), (O = !1));
          var Re = ve !== '' && at !== void 0 && at !== ve,
            Tt = rt === '+' || rt === '*',
            Pt = rt === '?' || rt === '*',
            xt = ve || Pe,
            Ct = jt || wt;
          B.push({
            name: Rt || se++,
            prefix: ve,
            delimiter: xt,
            optional: Pt,
            repeat: Tt,
            partial: Re,
            pattern: Ct ? c(Ct) : '[^' + W(xt) + ']+?',
          });
        }
        return (J || ce < _.length) && B.push(J + _.substr(ce)), B;
      }
      function ge(_, U) {
        return E(H(_, U));
      }
      function E(_) {
        for (var U = new Array(_.length), B = 0; B < _.length; B++)
          typeof _[B] == 'object' &&
            (U[B] = new RegExp('^(?:' + _[B].pattern + ')$'));
        return function (se, ce) {
          for (
            var J = '', Pe = (ce && ce.encode) || encodeURIComponent, Ne = 0;
            Ne < _.length;
            Ne++
          ) {
            var O = _[Ne];
            if (typeof O == 'string') {
              J += O;
              continue;
            }
            var K = se ? se[O.name] : void 0,
              Ce;
            if (Array.isArray(K)) {
              if (!O.repeat)
                throw new TypeError(
                  'Expected "' + O.name + '" to not repeat, but got array',
                );
              if (K.length === 0) {
                if (O.optional) continue;
                throw new TypeError(
                  'Expected "' + O.name + '" to not be empty',
                );
              }
              for (var Me = 0; Me < K.length; Me++) {
                if (((Ce = Pe(K[Me], O)), !U[Ne].test(Ce)))
                  throw new TypeError(
                    'Expected all "' +
                      O.name +
                      '" to match "' +
                      O.pattern +
                      '"',
                  );
                J += (Me === 0 ? O.prefix : O.delimiter) + Ce;
              }
              continue;
            }
            if (
              typeof K == 'string' ||
              typeof K == 'number' ||
              typeof K == 'boolean'
            ) {
              if (((Ce = Pe(String(K), O)), !U[Ne].test(Ce)))
                throw new TypeError(
                  'Expected "' +
                    O.name +
                    '" to match "' +
                    O.pattern +
                    '", but got "' +
                    Ce +
                    '"',
                );
              J += O.prefix + Ce;
              continue;
            }
            if (O.optional) {
              O.partial && (J += O.prefix);
              continue;
            }
            throw new TypeError(
              'Expected "' +
                O.name +
                '" to be ' +
                (O.repeat ? 'an array' : 'a string'),
            );
          }
          return J;
        };
      }
      function W(_) {
        return _.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
      }
      function c(_) {
        return _.replace(/([=!:$/()])/g, '\\$1');
      }
      function d(_) {
        return _ && _.sensitive ? '' : 'i';
      }
      function Oe(_, U) {
        if (!U) return _;
        var B = _.source.match(/\((?!\?)/g);
        if (B)
          for (var se = 0; se < B.length; se++)
            U.push({
              name: se,
              prefix: null,
              delimiter: null,
              optional: !1,
              repeat: !1,
              partial: !1,
              pattern: null,
            });
        return _;
      }
      function qe(_, U, B) {
        for (var se = [], ce = 0; ce < _.length; ce++)
          se.push(yt(_[ce], U, B).source);
        return new RegExp('(?:' + se.join('|') + ')', d(B));
      }
      function Z(_, U, B) {
        return nt(H(_, B), U, B);
      }
      function nt(_, U, B) {
        B = B || {};
        for (
          var se = B.strict,
            ce = B.start !== !1,
            J = B.end !== !1,
            Pe = W(B.delimiter || dt),
            Ne = B.delimiters || w,
            O = []
              .concat(B.endsWith || [])
              .map(W)
              .concat('$')
              .join('|'),
            K = ce ? '^' : '',
            Ce = _.length === 0,
            Me = 0;
          Me < _.length;
          Me++
        ) {
          var ae = _[Me];
          if (typeof ae == 'string')
            (K += W(ae)),
              (Ce = Me === _.length - 1 && Ne.indexOf(ae[ae.length - 1]) > -1);
          else {
            var ve = ae.repeat
              ? '(?:' +
                ae.pattern +
                ')(?:' +
                W(ae.delimiter) +
                '(?:' +
                ae.pattern +
                '))*'
              : ae.pattern;
            U && U.push(ae),
              ae.optional
                ? ae.partial
                  ? (K += W(ae.prefix) + '(' + ve + ')?')
                  : (K += '(?:' + W(ae.prefix) + '(' + ve + '))?')
                : (K += W(ae.prefix) + '(' + ve + ')');
          }
        }
        return (
          J
            ? (se || (K += '(?:' + Pe + ')?'),
              (K += O === '$' ? '$' : '(?=' + O + ')'))
            : (se || (K += '(?:' + Pe + '(?=' + O + '))?'),
              Ce || (K += '(?=' + Pe + '|' + O + ')')),
          new RegExp(K, d(B))
        );
      }
      function yt(_, U, B) {
        return _ instanceof RegExp
          ? Oe(_, U)
          : Array.isArray(_)
          ? qe(_, U, B)
          : Z(_, U, B);
      }
    },
  },
]);

//# sourceMappingURL=727.7605d890.async.js.map
