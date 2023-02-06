'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [221],
  {
    58760: function (F, P, a) {
      a.d(P, {
        Z: function () {
          return y;
        },
      });
      var _ = {
          page: 'page___H3pMP',
          title: 'title___j7m6E',
          content: 'content___fl5JM',
        },
        h = a(71577),
        k = a(40742),
        p = a(85893),
        B = function (x) {
          var C = x.title,
            I = x.children,
            v = x.back,
            b = v === void 0 ? !1 : v;
          return (0, p.jsxs)('div', {
            className: _.page,
            children: [
              (0, p.jsxs)('div', {
                className: _.title,
                children: [
                  b
                    ? (0, p.jsx)(h.Z, {
                        style: { marginRight: 10 },
                        onClick: function () {
                          return k.history.back();
                        },
                        children: '\u8FD4\u56DE',
                      })
                    : null,
                  C,
                ],
              }),
              (0, p.jsx)('div', { className: _.content, children: I }),
            ],
          });
        },
        y = B;
    },
    9712: function (F, P, a) {
      a.r(P),
        a.d(P, {
          default: function () {
            return ke;
          },
        });
      var _ = a(17061),
        h = a.n(_),
        k = a(17156),
        p = a.n(k),
        B = a(27424),
        y = a.n(B),
        M = a(54215),
        x = {
          page: 'page___nWiNS',
          btnGroup: 'btnGroup___xK6jH',
          'upload-img': 'upload-img___CN8kg',
          uploadImg: 'upload-img___CN8kg',
          'upload-img-extra': 'upload-img-extra___QeOzi',
          uploadImgExtra: 'upload-img-extra___QeOzi',
          'addon-icon': 'addon-icon___GykrS',
          addonIcon: 'addon-icon___GykrS',
          'input-number': 'input-number___hQ5e_',
          inputNumber: 'input-number___hQ5e_',
          logo: 'logo___Dxgf7',
          'upload-box': 'upload-box___Tftop',
          uploadBox: 'upload-box___Tftop',
        },
        C = a(40742),
        I = a(58760),
        v = a(67294),
        b = {
          background: 'white',
          color: 'black',
          headerColor: '#ce1126',
          primaryPreBackground: 'rgba(206, 17, 38, 0.05)',
          primaryPreColor: 'inherit',
          secondaryPreBackground: 'rgba(251, 245, 180, 0.3)',
          secondaryPreColor: 'inherit',
          footer: '#878e91',
          anchorColor: '#878e91',
          toggleBackground: 'transparent',
          toggleColor: '#878e91',
          closeColor: '#293238',
          navBackground: 'rgba(206, 17, 38, 0.05)',
          navArrow: '#ce1126',
          base01: '#f5f5f5',
          base03: '#6e6e6e',
          base05: '#333333',
          base08: '#881280',
          base0B: '#1155cc',
          base0C: '#994500',
          base0E: '#c80000',
        },
        E = {
          background: '#353535',
          color: 'white',
          headerColor: '#e83b46',
          primaryPreBackground: 'rgba(206, 17, 38, 0.1)',
          primaryPreColor: '#fccfcf',
          secondaryPreBackground: 'rgba(251, 245, 180, 0.1)',
          secondaryPreColor: '#fbf5b4',
          footer: '#878e91',
          anchorColor: '#878e91',
          toggleBackground: 'transparent',
          toggleColor: '#878e91',
          closeColor: '#ffffff',
          navBackground: 'rgba(206, 17, 38, 0.2)',
          navArrow: '#ce1126',
          base01: '#282a2e',
          base03: '#969896',
          base05: '#c5c8c6',
          base08: '#cc6666',
          base0B: '#b5bd68',
          base0C: '#8abeb7',
          base0E: '#b294bb',
        },
        O = {
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          border: 'none',
          'z-index': 2147483647,
        },
        g = function (e) {
          return {
            width: '100%',
            height: '100%',
            'box-sizing': 'border-box',
            'text-align': 'center',
            'background-color': e.background,
          };
        },
        L = 0,
        D = {};
      function U(r) {
        return r.head || r.getElementsByTagName('head')[0];
      }
      function Ie(r, e) {
        var l = U(r),
          n = r.createElement('style');
        return (
          (n.type = 'text/css'),
          n.appendChild(r.createTextNode(e)),
          l.appendChild(n),
          (D[++L] = n),
          L
        );
      }
      function Ne(r, e) {
        if (D[e] != null) {
          var l = U(r);
          l.removeChild(D[e]), delete D[e];
        }
      }
      function Ae(r, e) {
        r.setAttribute('style', '');
        for (var l in e) e.hasOwnProperty(l) && (r.style[l] = e[l]);
      }
      function N() {
        return window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
          ? E
          : b;
      }
      var o = a(85893),
        Q = function (e) {
          return {
            fontSize: '2em',
            fontFamily: 'sans-serif',
            color: e.headerColor,
            whiteSpace: 'pre-wrap',
            margin: '0 2rem 0.75rem 0',
            flex: '0 0 auto',
            maxHeight: '50%',
            overflow: 'auto',
          };
        };
      function J(r) {
        var e = N();
        return (0, o.jsx)('div', { style: Q(e), children: r.headerText });
      }
      var X = J,
        Y = a(42122),
        u = a.n(Y),
        z = {
          position: 'relative',
          display: 'block',
          padding: '0.5em',
          marginTop: '0.5em',
          marginBottom: '0.5em',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap',
          borderRadius: '0.25rem',
        },
        V = { fontFamily: 'Consolas, Menlo, monospace' };
      function q(r) {
        var e = r.main,
          l = r.codeHTML,
          n = N(),
          t = u()(
            u()({}, z),
            {},
            {
              backgroundColor: n.primaryPreBackground,
              color: n.primaryPreColor,
            },
          ),
          s = u()(
            u()({}, z),
            {},
            {
              backgroundColor: n.secondaryPreBackground,
              color: n.secondaryPreColor,
            },
          ),
          c = e ? t : s,
          i = { __html: l };
        return (0, o.jsx)('pre', {
          style: c,
          children: (0, o.jsx)('code', {
            style: V,
            dangerouslySetInnerHTML: i,
          }),
        });
      }
      var ee = q,
        re = a(1458),
        ae = a.n(re),
        ne = a(69111),
        te = function (e) {
          return {
            reset: [e.base05, 'transparent'],
            black: e.base05,
            red: e.base08,
            green: e.base0B,
            yellow: e.base08,
            blue: e.base0C,
            magenta: e.base0C,
            cyan: e.base0E,
            gray: e.base03,
            lightgrey: e.base01,
            darkgrey: e.base03,
          };
        },
        oe = {
          'ansi-bright-black': 'black',
          'ansi-bright-yellow': 'yellow',
          'ansi-yellow': 'yellow',
          'ansi-bright-green': 'green',
          'ansi-green': 'green',
          'ansi-bright-cyan': 'cyan',
          'ansi-cyan': 'cyan',
          'ansi-bright-red': 'red',
          'ansi-red': 'red',
          'ansi-bright-magenta': 'magenta',
          'ansi-magenta': 'magenta',
          'ansi-white': 'darkgrey',
        };
      function le(r, e) {
        for (
          var l = new (ae())().ansiToJson((0, ne.encode)(r), {
              use_classes: !0,
            }),
            n = '',
            t = !1,
            s = 0;
          s < l.length;
          ++s
        )
          for (
            var c = l[s],
              i = c.content,
              d = c.fg,
              S = i.split(`
`),
              f = 0;
            f < S.length;
            ++f
          ) {
            t || ((n += '<span data-ansi-line="true">'), (t = !0));
            var j = S[f].replace('\r', ''),
              m = te(e)[oe[d]];
            m !== null
              ? (n += '<span style="color: ' + m + ';">' + j + '</span>')
              : (d !== null && console.log('Missing color mapping: ', d),
                (n += '<span>' + j + '</span>')),
              f < S.length - 1 && ((n += '</span>'), (t = !1), (n += '<br/>'));
          }
        return t && ((n += '</span>'), (t = !1)), n;
      }
      var ie = le,
        se = a(4704);
      function ce(r) {
        var e = N(),
          l = r.lines,
          n = r.lineNum,
          t = r.columnNum,
          s = r.contextSize,
          c = r.main,
          i = [],
          d = 1 / 0;
        l.forEach(function (R) {
          var T = R.content,
            A = T.match(/^\s*/);
          T !== '' && (A && A[0] ? (d = Math.min(d, A[0].length)) : (d = 0));
        }),
          l.forEach(function (R) {
            var T = R.content,
              A = R.lineNumber;
            isFinite(d) && (T = T.substring(d)), (i[A - 1] = T);
          });
        var S = (0, se.rf)(
            i.join(`
`),
            {
              start: {
                line: n,
                column: t === null ? 0 : t - (isFinite(d) ? d : 0),
              },
            },
            { forceColor: !0, linesAbove: s, linesBelow: s },
          ),
          f = ie(S, e),
          j = document.createElement('code');
        j.innerHTML = f;
        var m = j.childNodes;
        e: for (var w = 0; w < m.length; ++w)
          for (var Be = m[w], Z = Be.childNodes, H = 0; H < Z.length; ++H) {
            var Me = Z[H],
              $ = Me.innerText;
            if ($ !== null && $.indexOf(' ' + n + ' |') !== -1) break e;
          }
        return (0, o.jsx)(ee, { main: c, codeHTML: j.innerHTML });
      }
      var de = ce,
        ue = function () {
          return { fontSize: '0.9em', marginBottom: '0.9em' };
        },
        me = function (e) {
          return {
            textDecoration: 'none',
            color: e.anchorColor,
            cursor: 'pointer',
          };
        },
        ve = function () {
          return { cursor: 'pointer' };
        };
      function ge(r) {
        var e = N(),
          l = r.functionName,
          n = r.url,
          t = r.codeBlockProps;
        return (0, o.jsxs)('div', {
          children: [
            (0, o.jsx)('div', { children: l }),
            (0, o.jsx)('div', {
              style: ue(),
              children: (0, o.jsx)('span', { style: me(e), children: n }),
            }),
            t &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)('span', {
                  style: ve(),
                  children: (0, o.jsx)(de, u()({}, t)),
                }),
              }),
          ],
        });
      }
      var G = ge,
        K = {
          cursor: 'pointer',
          border: 'none',
          display: 'block',
          width: '100%',
          textAlign: 'left',
          fontFamily: 'Consolas, Menlo, monospace',
          fontSize: '1em',
          padding: '0px',
          lineHeight: '1.5',
        },
        fe = function (e) {
          return u()(
            u()({}, K),
            {},
            { color: e.color, background: e.background, marginBottom: '1.5em' },
          );
        },
        W = function (e) {
          return u()(
            u()({}, K),
            {},
            { color: e.color, background: e.background, marginBottom: '0.6em' },
          );
        };
      function he(r) {
        var e = N(),
          l = (0, v.useState)(!0),
          n = y()(l, 2),
          t = n[0],
          s = n[1],
          c = function () {
            s(!t);
          },
          i = r.children.length;
        return (0, o.jsxs)('div', {
          children: [
            (0, o.jsx)('button', {
              onClick: c,
              style: t ? fe(e) : W(e),
              children:
                (t ? '\u25B6' : '\u25BC') +
                ' '.concat(i, ' stack frames were ') +
                (t ? 'collapsed.' : 'expanded.'),
            }),
            (0, o.jsxs)('div', {
              style: { display: t ? 'none' : 'block' },
              children: [
                r.children,
                (0, o.jsx)('button', {
                  onClick: c,
                  style: W(e),
                  children: '\u25B2 '.concat(i, ' stack frames were expanded.'),
                }),
              ],
            }),
          ],
        });
      }
      var pe = he,
        be = a(96486),
        ye = a.n(be),
        _e = {
          fontSize: '1em',
          flex: '0 1 auto',
          minHeight: '0px',
          overflow: 'auto',
        },
        xe = function (e) {
          var l = e.stackFrames;
          return (0, o.jsx)('div', {
            style: _e,
            children: (l || []).map(function (n) {
              return ye().isArray(n)
                ? (0, o.jsx)(pe, {
                    children: n.map(function (t) {
                      return (0,
                      v.createElement)(G, u()(u()({}, t), {}, { key: t.url + t.functionName }));
                    }),
                  })
                : (0, o.jsx)(G, u()({}, n));
            }),
          });
        },
        Ce = xe,
        Se = { display: 'flex', flexDirection: 'column' };
      function je(r) {
        var e = r.errorRecord,
          l = e.headerText,
          n = e.error,
          t = e.contextSize,
          s = e.unhandledRejection,
          c = e.renderedFrames,
          i = s ? 'Unhandled Rejection (' + n.name + ')' : n.name;
        return (0, o.jsxs)('div', {
          style: Se,
          children: [
            (0, o.jsx)(X, { headerText: l }),
            (0, o.jsx)(Ce, { stackFrames: c, errorName: i, contextSize: t }),
          ],
        });
      }
      var Pe = je,
        Ee = a(68422),
        Te = function () {
          var e = (0, C.useSearchParams)(),
            l = y()(e, 1),
            n = l[0],
            t = n.get('id'),
            s = (0, v.useState)({}),
            c = y()(s, 2),
            i = c[0],
            d = c[1];
          return (0, o.jsx)(I.Z, {
            title: t ? '\u7F16\u8F91' : '\u65B0\u589E',
            back: !0,
            children: (0, o.jsxs)('div', {
              className: x.page,
              children: [
                (0, o.jsx)(M.vY, {
                  title: '\u65E5\u5FD7\u4FE1\u606F',
                  column: 2,
                  request: p()(
                    h()().mark(function S() {
                      var f;
                      return h()().wrap(function (m) {
                        for (;;)
                          switch ((m.prev = m.next)) {
                            case 0:
                              return (m.next = 2), (0, Ee.t)({ id: t });
                            case 2:
                              return (
                                (f = m.sent),
                                d(f),
                                m.abrupt('return', { success: !0, data: f })
                              );
                            case 5:
                            case 'end':
                              return m.stop();
                          }
                      }, S);
                    }),
                  ),
                  columns: [
                    {
                      dataIndex: 'createTime',
                      title: '\u521B\u5EFA\u65F6\u95F4',
                    },
                    { dataIndex: 'appId', title: '\u5E94\u7528appId' },
                    { dataIndex: 'version', title: 'version' },
                    {
                      dataIndex: 'type',
                      title: '\u65E5\u5FD7\u7C7B\u578B',
                      valueType: 'select',
                      valueEnum: {
                        0: '\u9519\u8BEF\u65E5\u5FD7',
                        1: '\u884C\u4E3A\u65E5\u5FD7',
                      },
                    },
                    { dataIndex: 'action', title: '\u884C\u4E3A' },
                    { dataIndex: 'ip', title: 'ip' },
                    {
                      dataIndex: 'thirdCustomerId',
                      title: '\u76D1\u63A7\u7528\u6237Id',
                    },
                    {
                      dataIndex: 'cellPhone',
                      title: '\u76D1\u63A7\u7528\u6237\u7535\u8BDD',
                    },
                    { dataIndex: 'ipAddr', title: 'ip\u5730\u5740' },
                    { dataIndex: 'url', title: 'url' },
                    {
                      dataIndex: 'userAgent',
                      title: '\u6E38\u89C8\u5668\u4FE1\u606F',
                    },
                  ],
                }),
                (0, o.jsx)('pre', {
                  id: 'out_pre',
                  style: { whiteSpace: 'pre-line' },
                  children: (0, o.jsx)('code', { children: i.params }),
                }),
                i.sourcesContent
                  ? (0, o.jsx)(Pe, { errorRecord: i.sourcesContent })
                  : null,
              ],
            }),
          });
        },
        ke = Te;
    },
    68422: function (F, P, a) {
      a.d(P, {
        t: function () {
          return I;
        },
        x: function () {
          return x;
        },
      });
      var _ = a(17061),
        h = a.n(_),
        k = a(42122),
        p = a.n(k),
        B = a(17156),
        y = a.n(B),
        M = a(78158);
      function x(b) {
        return C.apply(this, arguments);
      }
      function C() {
        return (
          (C = y()(
            h()().mark(function b(E) {
              return h()().wrap(function (g) {
                for (;;)
                  switch ((g.prev = g.next)) {
                    case 0:
                      return g.abrupt(
                        'return',
                        (0, M.ZP)('/monitor/application/logs/page', {
                          method: 'GET',
                          params: p()({}, E),
                        }),
                      );
                    case 1:
                    case 'end':
                      return g.stop();
                  }
              }, b);
            }),
          )),
          C.apply(this, arguments)
        );
      }
      function I(b) {
        return v.apply(this, arguments);
      }
      function v() {
        return (
          (v = y()(
            h()().mark(function b(E) {
              return h()().wrap(function (g) {
                for (;;)
                  switch ((g.prev = g.next)) {
                    case 0:
                      return g.abrupt(
                        'return',
                        (0, M.ZP)(
                          '/monitor/application/logs/findSourcesContent',
                          { method: 'GET', params: p()({}, E) },
                        ),
                      );
                    case 1:
                    case 'end':
                      return g.stop();
                  }
              }, b);
            }),
          )),
          v.apply(this, arguments)
        );
      }
    },
  },
]);

//# sourceMappingURL=p__logs__detail__index.2f869ce4.async.js.map
