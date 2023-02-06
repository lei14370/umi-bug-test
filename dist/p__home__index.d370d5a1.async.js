'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [512],
  {
    58760: function (c, u, n) {
      n.d(u, {
        Z: function () {
          return a;
        },
      });
      var s = {
          page: 'page___H3pMP',
          title: 'title___j7m6E',
          content: 'content___fl5JM',
        },
        i = n(71577),
        t = n(40742),
        e = n(85893),
        l = function (o) {
          var d = o.title,
            m = o.children,
            r = o.back,
            h = r === void 0 ? !1 : r;
          return (0, e.jsxs)('div', {
            className: s.page,
            children: [
              (0, e.jsxs)('div', {
                className: s.title,
                children: [
                  h
                    ? (0, e.jsx)(i.Z, {
                        style: { marginRight: 10 },
                        onClick: function () {
                          return t.history.back();
                        },
                        children: '\u8FD4\u56DE',
                      })
                    : null,
                  d,
                ],
              }),
              (0, e.jsx)('div', { className: s.content, children: m }),
            ],
          });
        },
        a = l;
    },
    25683: function (c, u, n) {
      n.r(u),
        n.d(u, {
          default: function () {
            return l;
          },
        });
      var s = n(58760),
        i = { content: 'content___w9Tfr' },
        t = n(85893),
        e = function () {
          return (0, t.jsx)(s.Z, {
            title: '\u9996\u9875',
            children: (0, t.jsxs)('div', {
              className: i.content,
              children: [
                (0, t.jsx)('img', { src: n(57431), alt: '' }),
                (0, t.jsx)('span', {
                  children:
                    '\u9875\u9762\u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85\u2026',
                }),
              ],
            }),
          });
        },
        l = e;
    },
    57431: function (c, u, n) {
      c.exports = n.p + 'static/home-icon.02f26e69.png';
    },
  },
]);

//# sourceMappingURL=p__home__index.d370d5a1.async.js.map
