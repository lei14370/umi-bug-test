'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [578],
  {
    58760: function (Z, m, a) {
      a.d(m, {
        Z: function () {
          return c;
        },
      });
      var i = {
          page: 'page___H3pMP',
          title: 'title___j7m6E',
          content: 'content___fl5JM',
        },
        s = a(71577),
        g = a(40742),
        r = a(85893),
        h = function (u) {
          var x = u.title,
            j = u.children,
            v = u.back,
            p = v === void 0 ? !1 : v;
          return (0, r.jsxs)('div', {
            className: i.page,
            children: [
              (0, r.jsxs)('div', {
                className: i.title,
                children: [
                  p
                    ? (0, r.jsx)(s.Z, {
                        style: { marginRight: 10 },
                        onClick: function () {
                          return g.history.back();
                        },
                        children: '\u8FD4\u56DE',
                      })
                    : null,
                  x,
                ],
              }),
              (0, r.jsx)('div', { className: i.content, children: j }),
            ],
          });
        },
        c = h;
    },
    4022: function (Z, m, a) {
      a.r(m),
        a.d(m, {
          default: function () {
            return G;
          },
        });
      var i = a(17061),
        s = a.n(i),
        g = a(42122),
        r = a.n(g),
        h = a(17156),
        c = a.n(h),
        C = a(27424),
        u = a.n(C),
        x = a(82196),
        j = {
          page: 'page___YwyBV',
          btnGroup: 'btnGroup___Z6zF7',
          'upload-img': 'upload-img___tJV3X',
          uploadImg: 'upload-img___tJV3X',
          'upload-img-extra': 'upload-img-extra___pAqgx',
          uploadImgExtra: 'upload-img-extra___pAqgx',
          'addon-icon': 'addon-icon___jzTO5',
          addonIcon: 'addon-icon___jzTO5',
          'input-number': 'input-number___D480C',
          inputNumber: 'input-number___D480C',
          logo: 'logo___w6GZU',
          'upload-box': 'upload-box___K3lp5',
          uploadBox: 'upload-box___K3lp5',
        },
        v = a(80442),
        p = a(27790),
        I = a(71230),
        F = a(15746),
        T = a(26713),
        P = a(40742),
        $ = a(58760),
        b = a(85485),
        y = a(6742),
        t = a(85893),
        D = function () {
          var N = (0, P.useSearchParams)(),
            S = u()(N, 1),
            V = S[0],
            d = V.get('id'),
            A = v.Z.useForm(),
            z = u()(A, 1),
            B = z[0],
            E = (function () {
              var f = c()(
                s()().mark(function n(o) {
                  var l;
                  return s()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((l = r()({}, o)), !d)) {
                            e.next = 7;
                            break;
                          }
                          return (
                            (e.next = 4),
                            (0, y.Vx)(r()(r()({}, l), {}, { id: d }))
                          );
                        case 4:
                          p.ZP.success('\u7F16\u8F91\u6210\u529F'),
                            (e.next = 10);
                          break;
                        case 7:
                          return (e.next = 9), (0, y.IH)(l);
                        case 9:
                          p.ZP.success('\u6DFB\u52A0\u6210\u529F');
                        case 10:
                          P.history.back();
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, n);
                }),
              );
              return function (o) {
                return f.apply(this, arguments);
              };
            })();
          return (0, t.jsx)($.Z, {
            title: d ? '\u7F16\u8F91' : '\u65B0\u589E',
            back: !0,
            children: (0, t.jsx)(x.Z, {
              labelCol: { span: 8 },
              wrapperCol: { span: 10 },
              layout: 'horizontal',
              rowProps: { gutter: [16, 0] },
              initialValues: {},
              submitter: {
                render: function (n) {
                  return (0, t.jsx)(I.Z, {
                    className: j.btnGroup,
                    children: (0, t.jsx)(F.Z, {
                      span: 14,
                      offset: 10,
                      children: (0, t.jsxs)(T.Z, {
                        children: [
                          (0, t.jsx)(b.$m, {
                            onClick: function () {
                              P.history.back();
                            },
                            children: '\u53D6\u6D88',
                          }),
                          (0, t.jsx)(
                            b.$m,
                            r()(
                              r()(
                                {
                                  type: 'primary',
                                  onClick: function () {
                                    n.submit();
                                  },
                                },
                                n.submitButtonProps,
                              ),
                              {},
                              { children: '\u786E\u8BA4' },
                            ),
                          ),
                        ],
                      }),
                    }),
                  });
                },
              },
              onFinish: E,
              params: { id: d },
              request: (function () {
                var f = c()(
                  s()().mark(function n(o) {
                    var l;
                    return s()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!o.id) {
                              e.next = 5;
                              break;
                            }
                            return (e.next = 3), (0, y.C5)({ id: d });
                          case 3:
                            return (l = e.sent), e.abrupt('return', l);
                          case 5:
                            return e.abrupt('return', { status: 1 });
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, n);
                  }),
                );
                return function (n) {
                  return f.apply(this, arguments);
                };
              })(),
              form: B,
              columns: [
                {
                  dataIndex: 'username',
                  title: '\u7528\u6237\u540D',
                  formItemProps: {
                    rules: [
                      {
                        required: !0,
                        message: '\u6B64\u9879\u4E3A\u5FC5\u586B\u9879',
                      },
                    ],
                  },
                },
                {
                  dataIndex: 'name',
                  title: '\u59D3\u540D',
                  formItemProps: {
                    rules: [
                      {
                        required: !0,
                        message: '\u6B64\u9879\u4E3A\u5FC5\u586B\u9879',
                      },
                    ],
                  },
                },
                {
                  dataIndex: 'nickName',
                  title: '\u6635\u79F0',
                  formItemProps: {
                    rules: [
                      {
                        required: !0,
                        message: '\u6B64\u9879\u4E3A\u5FC5\u586B\u9879',
                      },
                    ],
                  },
                },
                {
                  dataIndex: 'phone',
                  title: '\u624B\u673A\u53F7',
                  formItemProps: {
                    rules: [
                      {
                        required: !0,
                        message: '\u6B64\u9879\u4E3A\u5FC5\u586B\u9879',
                      },
                    ],
                  },
                },
                { dataIndex: 'remark', title: '\u5907\u6CE8' },
                {
                  dataIndex: 'status',
                  title: '\u72B6\u6001',
                  valueType: 'select',
                  fieldProps: {
                    options: [
                      { value: 1, label: '\u5DF2\u542F\u7528' },
                      { value: 0, label: '\u5DF2\u505C\u7528' },
                    ],
                  },
                },
              ],
            }),
          });
        },
        G = D;
    },
  },
]);

//# sourceMappingURL=p__user__detail__index.001e13b5.async.js.map
