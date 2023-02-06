'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [557],
  {
    58760: function (R, c, e) {
      e.d(c, {
        Z: function () {
          return o;
        },
      });
      var a = {
          page: 'page___H3pMP',
          title: 'title___j7m6E',
          content: 'content___fl5JM',
        },
        u = e(71577),
        m = e(40742),
        l = e(85893),
        v = function (E) {
          var r = E.title,
            d = E.children,
            h = E.back,
            M = h === void 0 ? !1 : h;
          return (0, l.jsxs)('div', {
            className: a.page,
            children: [
              (0, l.jsxs)('div', {
                className: a.title,
                children: [
                  M
                    ? (0, l.jsx)(u.Z, {
                        style: { marginRight: 10 },
                        onClick: function () {
                          return m.history.back();
                        },
                        children: '\u8FD4\u56DE',
                      })
                    : null,
                  r,
                ],
              }),
              (0, l.jsx)('div', { className: a.content, children: d }),
            ],
          });
        },
        o = v;
    },
    69080: function (R, c, e) {
      e.r(c);
      var a = e(67294),
        u = e(85485),
        m = e(40742),
        l = e(58760),
        v = e(54878),
        o = e(61862),
        P = e(24969),
        E = e(6742),
        r = e(85893),
        d = function () {
          var M = (0, a.useRef)(),
            g = (0, a.useMemo)(function () {
              return [
                { dataIndex: 'username', title: '\u7528\u6237\u540D' },
                { dataIndex: 'name', title: '\u59D3\u540D' },
                {
                  dataIndex: 'nickName',
                  title: '\u6635\u79F0',
                  hideInSearch: !0,
                },
                {
                  dataIndex: 'phone',
                  title: '\u624B\u673A\u53F7',
                  hideInSearch: !0,
                },
                {
                  dataIndex: 'remark',
                  title: '\u5907\u6CE8',
                  hideInSearch: !0,
                },
                {
                  dataIndex: 'status',
                  title: '\u72B6\u6001',
                  valueType: 'select',
                  valueEnum: {
                    1: '\u5DF2\u542F\u7528',
                    0: '\u5DF2\u505C\u7528',
                  },
                },
                {
                  dataIndex: 'createTime',
                  title: '\u521B\u5EFA\u65F6\u95F4',
                  hideInSearch: !0,
                },
                {
                  title: '\u64CD\u4F5C',
                  key: '\u64CD\u4F5C',
                  hideInForm: !0,
                  hideInSearch: !0,
                  render: function (i) {
                    return [
                      (0, r.jsx)(
                        u.$m,
                        {
                          type: 'link',
                          onClick: function () {
                            m.history.push('/user/detail?id=' + i.id);
                          },
                          children: '\u7F16\u8F91',
                        },
                        '3',
                      ),
                    ];
                  },
                },
              ];
            }, []);
          return (0, r.jsx)(l.Z, {
            title: '\u7528\u6237\u7BA1\u7406',
            children: (0, r.jsx)(o.Z, {
              columns: g,
              actionRef: M,
              rowKey: 'id',
              headerTitle: [
                (0, r.jsx)(
                  u.$m,
                  {
                    type: 'primary',
                    icon: (0, r.jsx)(P.Z, {}),
                    onClick: function () {
                      m.history.push('/user/detail');
                    },
                    children: '\u65B0\u589E',
                  },
                  '1',
                ),
              ],
              request: (0, v.wl)(E.xQ),
            }),
          });
        };
      c.default = d;
    },
    54878: function (R, c, e) {
      e.d(c, {
        wl: function () {
          return I;
        },
      });
      var a = e(17061),
        u = e.n(a),
        m = e(17156),
        l = e.n(m),
        v = e(42122),
        o = e.n(v),
        P = e(96486),
        E = e.n(P),
        r = e(30381),
        d = e.n(r),
        h = function (_, n) {
          var t = _;
          return (0, P.isNil)(_)
            ? ''
            : (t &&
                (/\d{4}-\d{2}-\d{2}/.test(t) || t instanceof d()) &&
                (t =
                  n > 0
                    ? d()(t).format('YYYY-MM-DD 23:59:59')
                    : d()(t).format('YYYY-MM-DD 00:00:00')),
              t);
        },
        M = function (_) {
          var n = o()({}, _);
          for (var t in n)
            n.hasOwnProperty(t) && n[t] === ''
              ? delete n[t]
              : n[t] instanceof Array &&
                n[t].length > 0 &&
                (n[t] = n[t]
                  .map(function (C, D) {
                    return h(C, D);
                  })
                  .join(','));
          return n;
        };
      function g(i) {
        if (isEmpty(i.toString())) return '';
        var _ = /(?=(\B)(\d{3})+$)/g;
        return i.toString().replace(_, ',');
      }
      function I(i, _) {
        return (function () {
          var n = l()(
            u()().mark(function t(C) {
              var D, O, T, U, s;
              return u()().wrap(function (f) {
                for (;;)
                  switch ((f.prev = f.next)) {
                    case 0:
                      return (
                        (O = o()({}, C)),
                        (T = O.current),
                        delete O.current,
                        (U = M(O)),
                        (f.next = 6),
                        i(o()(o()({}, _), {}, { page: T, size: O.pageSize }, U))
                      );
                    case 6:
                      return (
                        (s = f.sent),
                        console.log(s),
                        f.abrupt('return', {
                          data: s == null ? void 0 : s.list,
                          total:
                            s == null ||
                            (D = s.pagination) === null ||
                            D === void 0
                              ? void 0
                              : D.total,
                        })
                      );
                    case 9:
                    case 'end':
                      return f.stop();
                  }
              }, t);
            }),
          );
          return function (t) {
            return n.apply(this, arguments);
          };
        })();
      }
    },
  },
]);

//# sourceMappingURL=p__user__index.323610fa.async.js.map
