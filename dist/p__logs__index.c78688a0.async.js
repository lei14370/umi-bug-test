'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [42],
  {
    58760: function (I, m, e) {
      e.d(m, {
        Z: function () {
          return a;
        },
      });
      var s = {
          page: 'page___H3pMP',
          title: 'title___j7m6E',
          content: 'content___fl5JM',
        },
        l = e(71577),
        E = e(40742),
        o = e(85893),
        h = function (P) {
          var _ = P.title,
            u = P.children,
            d = P.back,
            i = d === void 0 ? !1 : d;
          return (0, o.jsxs)('div', {
            className: s.page,
            children: [
              (0, o.jsxs)('div', {
                className: s.title,
                children: [
                  i
                    ? (0, o.jsx)(l.Z, {
                        style: { marginRight: 10 },
                        onClick: function () {
                          return E.history.back();
                        },
                        children: '\u8FD4\u56DE',
                      })
                    : null,
                  _,
                ],
              }),
              (0, o.jsx)('div', { className: s.content, children: u }),
            ],
          });
        },
        a = h;
    },
    22280: function (I, m, e) {
      e.r(m);
      var s = e(67294),
        l = e(85485),
        E = e(40742),
        o = e(58760),
        h = e(54878),
        a = e(61862),
        f = e(24969),
        P = e(68422),
        _ = e(85893),
        u = function () {
          var i = (0, s.useRef)(),
            M = (0, s.useMemo)(function () {
              return [
                {
                  dataIndex: 'createTime',
                  title: '\u521B\u5EFA\u65F6\u95F4',
                  hideInSearch: !0,
                },
                {
                  dataIndex: 'createTime',
                  title: '\u521B\u5EFA\u65F6\u95F4',
                  valueType: 'dateRange',
                  hideInTable: !0,
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
                { dataIndex: 'ip', title: 'ip', hideInSearch: !0 },
                {
                  dataIndex: 'ipAddr',
                  title: 'ip\u5730\u5740',
                  hideInSearch: !0,
                },
                { dataIndex: 'thirdCustomerId', title: '\u7528\u6237Id' },
                { dataIndex: 'cellPhone', title: '\u7528\u6237\u7535\u8BDD' },
                { dataIndex: 'url', title: 'url' },
                {
                  dataIndex: 'userAgent',
                  title: '\u6E38\u89C8\u5668\u4FE1\u606F',
                },
                {
                  title: '\u64CD\u4F5C',
                  key: '\u64CD\u4F5C',
                  hideInForm: !0,
                  hideInSearch: !0,
                  render: function (n) {
                    return [
                      (0, _.jsx)(
                        l.$m,
                        {
                          type: 'link',
                          onClick: function () {
                            E.history.push('/logs/detail?id=' + n.id);
                          },
                          children: '\u8BE6\u60C5',
                        },
                        '3',
                      ),
                    ];
                  },
                },
              ];
            }, []);
          return (0, _.jsx)(o.Z, {
            title: '\u7528\u6237\u7BA1\u7406',
            children: (0, _.jsx)(a.Z, {
              columns: M,
              actionRef: i,
              rowKey: 'id',
              headerTitle: [
                (0, _.jsx)(
                  l.$m,
                  {
                    type: 'primary',
                    icon: (0, _.jsx)(f.Z, {}),
                    onClick: function () {
                      E.history.push('/user/detail');
                    },
                    children: '\u65B0\u589E',
                  },
                  '1',
                ),
              ],
              request: (0, h.wl)(P.x),
            }),
          });
        };
      m.default = u;
    },
    68422: function (I, m, e) {
      e.d(m, {
        t: function () {
          return u;
        },
        x: function () {
          return P;
        },
      });
      var s = e(17061),
        l = e.n(s),
        E = e(42122),
        o = e.n(E),
        h = e(17156),
        a = e.n(h),
        f = e(78158);
      function P(i) {
        return _.apply(this, arguments);
      }
      function _() {
        return (
          (_ = a()(
            l()().mark(function i(M) {
              return l()().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return n.abrupt(
                        'return',
                        (0, f.ZP)('/monitor/application/logs/page', {
                          method: 'GET',
                          params: o()({}, M),
                        }),
                      );
                    case 1:
                    case 'end':
                      return n.stop();
                  }
              }, i);
            }),
          )),
          _.apply(this, arguments)
        );
      }
      function u(i) {
        return d.apply(this, arguments);
      }
      function d() {
        return (
          (d = a()(
            l()().mark(function i(M) {
              return l()().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return n.abrupt(
                        'return',
                        (0, f.ZP)(
                          '/monitor/application/logs/findSourcesContent',
                          { method: 'GET', params: o()({}, M) },
                        ),
                      );
                    case 1:
                    case 'end':
                      return n.stop();
                  }
              }, i);
            }),
          )),
          d.apply(this, arguments)
        );
      }
    },
    54878: function (I, m, e) {
      e.d(m, {
        wl: function () {
          return p;
        },
      });
      var s = e(17061),
        l = e.n(s),
        E = e(17156),
        o = e.n(E),
        h = e(42122),
        a = e.n(h),
        f = e(96486),
        P = e.n(f),
        _ = e(30381),
        u = e.n(_),
        d = function (c, r) {
          var t = c;
          return (0, f.isNil)(c)
            ? ''
            : (t &&
                (/\d{4}-\d{2}-\d{2}/.test(t) || t instanceof u()) &&
                (t =
                  r > 0
                    ? u()(t).format('YYYY-MM-DD 23:59:59')
                    : u()(t).format('YYYY-MM-DD 00:00:00')),
              t);
        },
        i = function (c) {
          var r = a()({}, c);
          for (var t in r)
            r.hasOwnProperty(t) && r[t] === ''
              ? delete r[t]
              : r[t] instanceof Array &&
                r[t].length > 0 &&
                (r[t] = r[t]
                  .map(function (C, g) {
                    return d(C, g);
                  })
                  .join(','));
          return r;
        };
      function M(n) {
        if (isEmpty(n.toString())) return '';
        var c = /(?=(\B)(\d{3})+$)/g;
        return n.toString().replace(c, ',');
      }
      function p(n, c) {
        return (function () {
          var r = o()(
            l()().mark(function t(C) {
              var g, O, T, U, v;
              return l()().wrap(function (D) {
                for (;;)
                  switch ((D.prev = D.next)) {
                    case 0:
                      return (
                        (O = a()({}, C)),
                        (T = O.current),
                        delete O.current,
                        (U = i(O)),
                        (D.next = 6),
                        n(a()(a()({}, c), {}, { page: T, size: O.pageSize }, U))
                      );
                    case 6:
                      return (
                        (v = D.sent),
                        console.log(v),
                        D.abrupt('return', {
                          data: v == null ? void 0 : v.list,
                          total:
                            v == null ||
                            (g = v.pagination) === null ||
                            g === void 0
                              ? void 0
                              : g.total,
                        })
                      );
                    case 9:
                    case 'end':
                      return D.stop();
                  }
              }, t);
            }),
          );
          return function (t) {
            return r.apply(this, arguments);
          };
        })();
      }
    },
  },
]);

//# sourceMappingURL=p__logs__index.c78688a0.async.js.map
