'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [196],
  {
    82196: function (_e, Te, a) {
      a.d(Te, {
        Z: function () {
          return Lt;
        },
      });
      var i = a(1413),
        W = a(97685),
        B = a(91),
        u = a(85893),
        ge = a(51804),
        xe = a(22270),
        We = a(81736),
        je = a(51812),
        $e = a(80442),
        we = a(97435),
        o = a(67294),
        fe = a(74165),
        D = a(15861),
        U = a(48171),
        Se = a(73177),
        Q = a(58720),
        oe = a(85265),
        ue = a(72378),
        le = a.n(ue),
        ae = a(60869),
        ye = a(45520),
        ze = a(73935),
        ve = a(89671),
        me = [
          'children',
          'trigger',
          'onVisibleChange',
          'drawerProps',
          'onFinish',
          'submitTimeout',
          'title',
          'width',
          'onOpenChange',
          'visible',
          'open',
        ];
      function H(t) {
        var e,
          n,
          r,
          l,
          s = t.children,
          v = t.trigger,
          g = t.onVisibleChange,
          m = t.drawerProps,
          c = t.onFinish,
          C = t.submitTimeout,
          $ = t.title,
          w = t.width,
          b = t.onOpenChange,
          f = t.visible,
          S = t.open,
          Z = (0, B.Z)(t, me);
        (0, ye.ET)(
          !Z.footer || !(m != null && m.footer),
          'DrawerForm \u662F\u4E00\u4E2A ProForm \u7684\u7279\u6B8A\u5E03\u5C40\uFF0C\u5982\u679C\u60F3\u81EA\u5B9A\u4E49\u6309\u94AE\uFF0C\u8BF7\u4F7F\u7528 submit.render \u81EA\u5B9A\u4E49\u3002',
        );
        var z = (0, o.useContext)(Q.ZP.ConfigContext),
          L = (0, o.useState)([]),
          K = (0, W.Z)(L, 2),
          T = K[1],
          X = (0, o.useState)(!1),
          x = (0, W.Z)(X, 2),
          P = x[0],
          I = x[1],
          F = (0, ae.Z)(!!f, { value: S || f, onChange: b || g }),
          E = (0, W.Z)(F, 2),
          G = E[0],
          k = E[1],
          J = (0, o.useRef)(null),
          j = (0, o.useCallback)(function (M) {
            J.current === null && M && T([]), (J.current = M);
          }, []),
          d = (0, o.useRef)(),
          p = (0, o.useCallback)(
            function () {
              var M,
                O,
                V,
                ee =
                  (M =
                    (O =
                      (V = Z.formRef) === null || V === void 0
                        ? void 0
                        : V.current) !== null && O !== void 0
                      ? O
                      : Z.form) !== null && M !== void 0
                    ? M
                    : d.current;
              ee && m != null && m.destroyOnClose && ee.resetFields();
            },
            [m == null ? void 0 : m.destroyOnClose, Z.form, Z.formRef],
          );
        (0, o.useEffect)(
          function () {
            G && (S || f) && (b == null || b(!0), g == null || g(!0));
          },
          [f, G],
        );
        var y = (0, o.useMemo)(
            function () {
              return v
                ? o.cloneElement(
                    v,
                    (0, i.Z)(
                      (0, i.Z)({ key: 'trigger' }, v.props),
                      {},
                      {
                        onClick: (function () {
                          var M = (0, D.Z)(
                            (0, fe.Z)().mark(function V(ee) {
                              var q, se;
                              return (0, fe.Z)().wrap(function (re) {
                                for (;;)
                                  switch ((re.prev = re.next)) {
                                    case 0:
                                      k(!G),
                                        (q = v.props) === null ||
                                          q === void 0 ||
                                          (se = q.onClick) === null ||
                                          se === void 0 ||
                                          se.call(q, ee);
                                    case 2:
                                    case 'end':
                                      return re.stop();
                                  }
                              }, V);
                            }),
                          );
                          function O(V) {
                            return M.apply(this, arguments);
                          }
                          return O;
                        })(),
                      },
                    ),
                  )
                : null;
            },
            [k, v, G],
          ),
          h = (0, o.useMemo)(
            function () {
              var M, O, V, ee, q, se;
              return Z.submitter === !1
                ? !1
                : le()(
                    {
                      searchConfig: {
                        submitText:
                          (M =
                            (O = z.locale) === null ||
                            O === void 0 ||
                            (V = O.Modal) === null ||
                            V === void 0
                              ? void 0
                              : V.okText) !== null && M !== void 0
                            ? M
                            : '\u786E\u8BA4',
                        resetText:
                          (ee =
                            (q = z.locale) === null ||
                            q === void 0 ||
                            (se = q.Modal) === null ||
                            se === void 0
                              ? void 0
                              : se.cancelText) !== null && ee !== void 0
                            ? ee
                            : '\u53D6\u6D88',
                      },
                      resetButtonProps: {
                        preventDefault: !0,
                        disabled: C ? P : void 0,
                        onClick: function (re) {
                          var Oe;
                          k(!1),
                            m == null ||
                              (Oe = m.onClose) === null ||
                              Oe === void 0 ||
                              Oe.call(m, re);
                        },
                      },
                    },
                    Z.submitter,
                  );
            },
            [
              Z.submitter,
              (e = z.locale) === null ||
              e === void 0 ||
              (n = e.Modal) === null ||
              n === void 0
                ? void 0
                : n.okText,
              (r = z.locale) === null ||
              r === void 0 ||
              (l = r.Modal) === null ||
              l === void 0
                ? void 0
                : l.cancelText,
              C,
              P,
              k,
              m,
            ],
          ),
          Y = (0, o.useCallback)(function (M, O) {
            return (0,
            u.jsxs)(u.Fragment, { children: [M, J.current && O ? (0, u.jsx)(o.Fragment, { children: (0, ze.createPortal)(O, J.current) }, 'submitter') : O] });
          }, []),
          _ = (0, U.J)(
            (function () {
              var M = (0, D.Z)(
                (0, fe.Z)().mark(function O(V) {
                  var ee, q, se;
                  return (0, fe.Z)().wrap(function (re) {
                    for (;;)
                      switch ((re.prev = re.next)) {
                        case 0:
                          return (
                            (ee = c == null ? void 0 : c(V)),
                            C &&
                              ee instanceof Promise &&
                              (I(!0),
                              (q = setTimeout(function () {
                                return I(!1);
                              }, C)),
                              ee.finally(function () {
                                clearTimeout(q), I(!1);
                              })),
                            (re.next = 4),
                            ee
                          );
                        case 4:
                          return (
                            (se = re.sent), se && k(!1), re.abrupt('return', se)
                          );
                        case 7:
                        case 'end':
                          return re.stop();
                      }
                  }, O);
                }),
              );
              return function (O) {
                return M.apply(this, arguments);
              };
            })(),
          ),
          ce = (0, Se.X)(G, g);
        return (0, u.jsxs)(u.Fragment, {
          children: [
            (0, u.jsx)(
              oe.Z,
              (0, i.Z)(
                (0, i.Z)((0, i.Z)({ title: $, width: w || 800 }, m), ce),
                {},
                {
                  afterOpenChange: function (O) {
                    var V;
                    O || p(),
                      m == null ||
                        (V = m.afterOpenChange) === null ||
                        V === void 0 ||
                        V.call(m, O);
                  },
                  onClose: function (O) {
                    var V;
                    (C && P) ||
                      (k(!1),
                      m == null ||
                        (V = m.onClose) === null ||
                        V === void 0 ||
                        V.call(m, O));
                  },
                  footer:
                    Z.submitter !== !1 &&
                    (0, u.jsx)('div', {
                      ref: j,
                      style: { display: 'flex', justifyContent: 'flex-end' },
                    }),
                  children: (0, u.jsx)(u.Fragment, {
                    children: (0, u.jsx)(
                      ve.I,
                      (0, i.Z)(
                        (0, i.Z)(
                          {
                            formComponentType: 'DrawerForm',
                            layout: 'vertical',
                            formRef: d,
                          },
                          Z,
                        ),
                        {},
                        {
                          submitter: h,
                          onFinish: (function () {
                            var M = (0, D.Z)(
                              (0, fe.Z)().mark(function V(ee) {
                                var q;
                                return (0, fe.Z)().wrap(function (te) {
                                  for (;;)
                                    switch ((te.prev = te.next)) {
                                      case 0:
                                        return (te.next = 2), _(ee);
                                      case 2:
                                        return (
                                          (q = te.sent), te.abrupt('return', q)
                                        );
                                      case 4:
                                      case 'end':
                                        return te.stop();
                                    }
                                }, V);
                              }),
                            );
                            function O(V) {
                              return M.apply(this, arguments);
                            }
                            return O;
                          })(),
                          contentRender: Y,
                          children: s,
                        },
                      ),
                    ),
                  }),
                },
              ),
            ),
            y,
          ],
        });
      }
      var R = a(4942),
        be = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z',
                },
              },
            ],
          },
          name: 'filter',
          theme: 'outlined',
        },
        ne = be,
        Ce = a(84089),
        Re = function (e, n) {
          return o.createElement(
            Ce.Z,
            (0, i.Z)((0, i.Z)({}, e), {}, { ref: n, icon: ne }),
          );
        };
      Re.displayName = 'FilterOutlined';
      var Me = o.forwardRef(Re),
        pe = a(71060),
        Xe = a(2122),
        et = a(1336),
        Ge = a(94184),
        Ze = a.n(Ge),
        He = a(14855),
        tt = function (e) {
          return (0, R.Z)({}, e.componentCls, {
            lineHeight: '30px',
            '&::before': {
              display: 'block',
              height: 0,
              visibility: 'hidden',
              content: "'.'",
            },
            '&-small': { lineHeight: e.lineHeight },
            '&-container': { display: 'flex', flexWrap: 'wrap', gap: 8 },
            '&-item': (0, R.Z)(
              { whiteSpace: 'nowrap' },
              ''.concat(e.antCls, '-form-item'),
              { marginBlock: 0 },
            ),
            '&-line': { minWidth: '198px' },
            '&-line:not(:first-child)': {
              marginBlockStart: '16px',
              marginBlockEnd: 8,
            },
            '&-collapse-icon': {
              width: e.controlHeight,
              height: e.controlHeight,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            '&-effective': (0, R.Z)(
              {},
              ''.concat(e.componentCls, '-collapse-icon'),
              { backgroundColor: e.colorBgTextHover },
            ),
          });
        };
      function nt(t) {
        return (0, He.Xj)('LightFilter', function (e) {
          var n = (0, i.Z)(
            (0, i.Z)({}, e),
            {},
            { componentCls: '.'.concat(t) },
          );
          return [tt(n)];
        });
      }
      var rt = [
          'size',
          'collapse',
          'collapseLabel',
          'initialValues',
          'onValuesChange',
          'form',
          'placement',
          'formRef',
          'bordered',
          'ignoreRules',
          'footerRender',
        ],
        ot = function (e) {
          var n = e.items,
            r = e.prefixCls,
            l = e.size,
            s = l === void 0 ? 'middle' : l,
            v = e.collapse,
            g = e.collapseLabel,
            m = e.onValuesChange,
            c = e.bordered,
            C = e.values,
            $ = e.footerRender,
            w = e.placement,
            b = (0, pe.YB)(),
            f = ''.concat(r, '-light-filter'),
            S = nt(f),
            Z = S.wrapSSR,
            z = S.hashId,
            L = (0, o.useState)(!1),
            K = (0, W.Z)(L, 2),
            T = K[0],
            X = K[1],
            x = (0, o.useState)(function () {
              return (0, i.Z)({}, C);
            }),
            P = (0, W.Z)(x, 2),
            I = P[0],
            F = P[1];
          (0, o.useEffect)(
            function () {
              F((0, i.Z)({}, C));
            },
            [C],
          );
          var E = (0, o.useMemo)(
              function () {
                var j = [],
                  d = [];
                return (
                  n.forEach(function (p) {
                    var y = p.props || {},
                      h = y.secondary;
                    h || v ? j.push(p) : d.push(p);
                  }),
                  { collapseItems: j, outsideItems: d }
                );
              },
              [e.items],
            ),
            G = E.collapseItems,
            k = E.outsideItems,
            J = function () {
              return (
                g ||
                (v
                  ? (0, u.jsx)(Me, {
                      className: ''.concat(f, '-collapse-icon ').concat(z),
                    })
                  : (0, u.jsx)(Xe.Q, {
                      size: s,
                      label: b.getMessage(
                        'form.lightFilter.more',
                        '\u66F4\u591A\u7B5B\u9009',
                      ),
                      expanded: T,
                    }))
              );
            };
          return Z(
            (0, u.jsx)('div', {
              className: Ze()(
                f,
                z,
                ''.concat(f, '-').concat(s),
                (0, R.Z)(
                  {},
                  ''.concat(f, '-effective'),
                  Object.keys(C).some(function (j) {
                    return C[j];
                  }),
                ),
              ),
              children: (0, u.jsxs)('div', {
                className: ''.concat(f, '-container ').concat(z),
                children: [
                  k.map(function (j, d) {
                    var p = j.key,
                      y = j.props.fieldProps,
                      h =
                        y != null && y.placement
                          ? y == null
                            ? void 0
                            : y.placement
                          : w;
                    return (0,
                    u.jsx)('div', { className: ''.concat(f, '-item ').concat(z), children: o.cloneElement(j, { fieldProps: (0, i.Z)((0, i.Z)({}, j.props.fieldProps), {}, { placement: h }), proFieldProps: { light: !0, label: j.props.label, bordered: c }, bordered: c }) }, p || d);
                  }),
                  G.length
                    ? (0, u.jsx)(
                        'div',
                        {
                          className: ''.concat(f, '-item ').concat(z),
                          children: (0, u.jsx)(et.M, {
                            padding: 24,
                            open: T,
                            onOpenChange: X,
                            placement: w,
                            label: J(),
                            footerRender: $,
                            footer: {
                              onConfirm: function () {
                                m((0, i.Z)({}, I)), X(!1);
                              },
                              onClear: function () {
                                var d = {};
                                G.forEach(function (p) {
                                  var y = p.props.name;
                                  d[y] = void 0;
                                }),
                                  m(d);
                              },
                            },
                            children: G.map(function (j) {
                              var d = j.key,
                                p = j.props,
                                y = p.name,
                                h = p.fieldProps,
                                Y = (0, i.Z)(
                                  (0, i.Z)({}, h),
                                  {},
                                  {
                                    onChange: function (M) {
                                      return (
                                        F(
                                          (0, i.Z)(
                                            (0, i.Z)({}, I),
                                            {},
                                            (0, R.Z)(
                                              {},
                                              y,
                                              M != null && M.target
                                                ? M.target.value
                                                : M,
                                            ),
                                          ),
                                        ),
                                        !1
                                      );
                                    },
                                  },
                                );
                              I.hasOwnProperty(y) &&
                                (Y[j.props.valuePropName || 'value'] = I[y]);
                              var _ =
                                h != null && h.placement
                                  ? h == null
                                    ? void 0
                                    : h.placement
                                  : w;
                              return (0,
                              u.jsx)('div', { className: ''.concat(f, '-line ').concat(z), children: o.cloneElement(j, { fieldProps: (0, i.Z)((0, i.Z)({}, Y), {}, { placement: _ }) }) }, d);
                            }),
                          }),
                        },
                        'more',
                      )
                    : null,
                ],
              }),
            }),
          );
        };
      function yt(t) {
        var e = t.size,
          n = t.collapse,
          r = t.collapseLabel,
          l = t.initialValues,
          s = t.onValuesChange,
          v = t.form,
          g = t.placement,
          m = t.formRef,
          c = t.bordered,
          C = t.ignoreRules,
          $ = t.footerRender,
          w = (0, B.Z)(t, rt),
          b = (0, o.useContext)(Q.ZP.ConfigContext),
          f = b.getPrefixCls,
          S = f('pro-form'),
          Z = (0, o.useState)(function () {
            return (0, i.Z)({}, l);
          }),
          z = (0, W.Z)(Z, 2),
          L = z[0],
          K = z[1],
          T = (0, o.useRef)();
        return (
          (0, o.useImperativeHandle)(m, function () {
            return T.current;
          }),
          (0, u.jsx)(
            ve.I,
            (0, i.Z)(
              (0, i.Z)(
                {
                  size: e,
                  initialValues: l,
                  form: v,
                  contentRender: function (x) {
                    return (0, u.jsx)(ot, {
                      prefixCls: S,
                      items: x.flatMap(function (P) {
                        return (P == null ? void 0 : P.type.displayName) ===
                          'ProForm-Group'
                          ? P.props.children
                          : P;
                      }),
                      size: e,
                      bordered: c,
                      collapse: n,
                      collapseLabel: r,
                      placement: g,
                      values: L || {},
                      footerRender: $,
                      onValuesChange: function (I) {
                        var F,
                          E,
                          G = (0, i.Z)((0, i.Z)({}, L), I);
                        K(G),
                          (F = T.current) === null ||
                            F === void 0 ||
                            F.setFieldsValue(G),
                          (E = T.current) === null ||
                            E === void 0 ||
                            E.submit(),
                          s && s(I, G);
                      },
                    });
                  },
                  formRef: T,
                  formItemProps: { colon: !1, labelAlign: 'left' },
                  fieldProps: { style: { width: void 0 } },
                },
                (0, we.Z)(w, ['labelWidth']),
              ),
              {},
              {
                onValuesChange: function (x, P) {
                  var I;
                  K(P),
                    s == null || s(x, P),
                    (I = T.current) === null || I === void 0 || I.submit();
                },
              },
            ),
          )
        );
      }
      var it = a(99351),
        Ie = a(97269),
        Ke = a(12044),
        Pe = a(15746),
        Be = a(71230),
        lt = a(48555),
        Ve = a(80882),
        Ct = a(28700),
        Ye = a(26713),
        xt = function (e, n, r, l) {
          return e
            ? (0, u.jsxs)(u.Fragment, {
                children: [
                  r.getMessage('tableForm.collapsed', '\u5C55\u5F00'),
                  l && '('.concat(l, ')'),
                  (0, u.jsx)(Ve.Z, {
                    style: {
                      marginInlineStart: '0.5em',
                      transition: '0.3s all',
                      transform: 'rotate('.concat(e ? 0 : 0.5, 'turn)'),
                    },
                  }),
                ],
              })
            : (0, u.jsxs)(u.Fragment, {
                children: [
                  r.getMessage('tableForm.expand', '\u6536\u8D77'),
                  (0, u.jsx)(Ve.Z, {
                    style: {
                      marginInlineStart: '0.5em',
                      transition: '0.3s all',
                      transform: 'rotate('.concat(e ? 0 : 0.5, 'turn)'),
                    },
                  }),
                ],
              });
        },
        at = function (e) {
          var n = e.setCollapsed,
            r = e.collapsed,
            l = r === void 0 ? !1 : r,
            s = e.submitter,
            v = e.style,
            g = e.hiddenNum,
            m = (0, o.useContext)(Q.ZP.ConfigContext),
            c = m.getPrefixCls,
            C = (0, pe.YB)(),
            $ = (0, o.useContext)(pe.L_),
            w = $.hashId,
            b = (0, Ct.v)(e.collapseRender) || xt;
          return (0, u.jsxs)(Ye.Z, {
            style: v,
            size: 16,
            children: [
              s,
              e.collapseRender !== !1 &&
                (0, u.jsx)('a', {
                  className: ''
                    .concat(c('pro-query-filter-collapse-button'), ' ')
                    .concat(w),
                  onClick: function () {
                    return n(!l);
                  },
                  children: b == null ? void 0 : b(l, e, C, g),
                }),
            ],
          });
        },
        $t = at,
        st = function (e) {
          var n;
          return (0, R.Z)(
            {},
            e.proComponentsCls,
            (0, R.Z)(
              {},
              e.componentCls,
              ((n = { padding: 24 }),
              (0, R.Z)(n, ''.concat(e.antCls, '-form-item'), {
                marginBlock: 0,
              }),
              (0, R.Z)(n, ''.concat(e.proComponentsCls, '-form-group-title'), {
                marginBlock: 0,
              }),
              (0, R.Z)(n, '&-row', {
                rowGap: 24,
                '&-split-line': {
                  '&:after': {
                    position: 'absolute',
                    width: '100%',
                    content: '""',
                    height: 1,
                    insetBlockEnd: -12,
                    borderBlockEnd: '1px dashed ' + e.colorSplit,
                  },
                },
              }),
              (0, R.Z)(n, '&-collapse-button', {
                display: 'flex',
                alignItems: 'center',
              }),
              n),
            ),
          );
        };
      function Ee(t) {
        return (0, He.Xj)('QueryFilter', function (e) {
          var n = (0, i.Z)(
            (0, i.Z)({}, e),
            {},
            { componentCls: '.'.concat(t) },
          );
          return [st(n)];
        });
      }
      var ct = [
          'collapsed',
          'layout',
          'defaultCollapsed',
          'defaultColsNumber',
          'span',
          'searchGutter',
          'searchText',
          'resetText',
          'optionRender',
          'collapseRender',
          'onReset',
          'onCollapse',
          'labelWidth',
          'style',
          'split',
          'preserve',
          'ignoreRules',
          'showHiddenNum',
        ],
        Ue,
        De,
        dt = { xs: 513, sm: 513, md: 785, lg: 992, xl: 1057, xxl: 1 / 0 },
        Qe = {
          vertical: [
            [513, 1, 'vertical'],
            [785, 2, 'vertical'],
            [1057, 3, 'vertical'],
            [1 / 0, 4, 'vertical'],
          ],
          default: [
            [513, 1, 'vertical'],
            [701, 2, 'vertical'],
            [1062, 3, 'horizontal'],
            [1352, 3, 'horizontal'],
            [1 / 0, 4, 'horizontal'],
          ],
        },
        ut = function (e, n, r) {
          if (r && typeof r == 'number') return { span: r, layout: e };
          var l = r
              ? ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].map(function (v) {
                  return [dt[v], 24 / r[v], 'horizontal'];
                })
              : Qe[e || 'default'],
            s = (l || Qe.default).find(function (v) {
              return n < v[0] + 16;
            });
          return { span: 24 / s[1], layout: s[2] };
        },
        vt = function (e, n) {
          return e.flatMap(function (r) {
            var l;
            if (
              (r == null ? void 0 : r.type.displayName) === 'ProForm-Group' &&
              !(!((l = r.props) === null || l === void 0) && l.title)
            )
              return r.props.children;
            if (n && o.isValidElement(r)) {
              var s;
              return o.cloneElement(
                r,
                (0, i.Z)(
                  (0, i.Z)({}, r.props),
                  {},
                  {
                    formItemProps: (0, i.Z)(
                      (0, i.Z)(
                        {},
                        (s = r.props) === null || s === void 0
                          ? void 0
                          : s.formItemProps,
                      ),
                      {},
                      { rules: [] },
                    ),
                  },
                ),
              );
            }
            return r;
          });
        },
        bt = function (e) {
          var n = (0, pe.YB)(),
            r = (0, o.useContext)(pe.L_),
            l = r.hashId,
            s = e.resetText || n.getMessage('tableForm.reset', '\u91CD\u7F6E'),
            v =
              e.searchText || n.getMessage('tableForm.search', '\u641C\u7D22'),
            g = (0, ae.Z)(
              function () {
                return e.defaultCollapsed && !!e.submitter;
              },
              { value: e.collapsed, onChange: e.onCollapse },
            ),
            m = (0, W.Z)(g, 2),
            c = m[0],
            C = m[1],
            $ = e.optionRender,
            w = e.collapseRender,
            b = e.split,
            f = e.items,
            S = e.spanSize,
            Z = e.showLength,
            z = e.searchGutter,
            L = e.showHiddenNum,
            K = (0, o.useMemo)(
              function () {
                return !e.submitter || $ === !1
                  ? null
                  : o.cloneElement(
                      e.submitter,
                      (0, i.Z)(
                        {
                          searchConfig: { resetText: s, submitText: v },
                          render:
                            $ &&
                            function (p, y) {
                              return $(
                                (0, i.Z)(
                                  (0, i.Z)({}, e),
                                  {},
                                  { resetText: s, searchText: v },
                                ),
                                e,
                                y,
                              );
                            },
                        },
                        e.submitter.props,
                      ),
                    );
              },
              [e, s, v, $],
            ),
            T = 0,
            X = 0,
            x = !1,
            P = 0,
            I = 0,
            F = vt(f, e.ignoreRules).map(function (p, y) {
              var h,
                Y,
                _,
                ce,
                M =
                  o.isValidElement(p) &&
                  (h =
                    p == null || (Y = p.props) === null || Y === void 0
                      ? void 0
                      : Y.colSize) !== null &&
                  h !== void 0
                    ? h
                    : 1,
                O = Math.min(S.span * (M || 1), 24);
              if (((T += O), (P += M), y === 0)) {
                var V;
                x =
                  O === 24 &&
                  !(
                    !(p == null || (V = p.props) === null || V === void 0) &&
                    V.hidden
                  );
              }
              var ee =
                (p == null || (_ = p.props) === null || _ === void 0
                  ? void 0
                  : _.hidden) ||
                (c && (x || P > Z - 1) && !!y && T >= 24);
              X += 1;
              var q =
                (o.isValidElement(p) &&
                  (p.key ||
                    ''.concat(
                      (ce = p.props) === null || ce === void 0
                        ? void 0
                        : ce.name,
                    ))) ||
                y;
              return o.isValidElement(p) && ee
                ? e.preserve
                  ? {
                      itemDom: o.cloneElement(p, { hidden: !0, key: q || y }),
                      hidden: !0,
                      colSpan: O,
                    }
                  : { itemDom: null, colSpan: 0, hidden: !0 }
                : { itemDom: p, colSpan: O, hidden: !1 };
            }),
            E = F.map(function (p, y) {
              var h,
                Y,
                _ = p.itemDom,
                ce = p.colSpan,
                M =
                  _ == null || (h = _.props) === null || h === void 0
                    ? void 0
                    : h.hidden;
              if (M) return _;
              var O =
                (o.isValidElement(_) &&
                  (_.key ||
                    ''.concat(
                      (Y = _.props) === null || Y === void 0 ? void 0 : Y.name,
                    ))) ||
                y;
              return (
                24 - (I % 24) < ce &&
                  ((T += 24 - (I % 24)), (I += 24 - (I % 24))),
                (I += ce),
                b && I % 24 === 0 && y < X - 1
                  ? (0, u.jsx)(
                      Pe.Z,
                      {
                        span: ce,
                        className: ''
                          .concat(e.baseClassName, '-row-split-line ')
                          .concat(l),
                        children: _,
                      },
                      O,
                    )
                  : (0, u.jsx)(Pe.Z, { span: ce, children: _ }, O)
              );
            }),
            G =
              L &&
              F.filter(function (p) {
                return p.hidden;
              }).length,
            k = (0, o.useMemo)(
              function () {
                return !(T < 24 || P <= Z);
              },
              [P, Z, T],
            ),
            J = (0, o.useMemo)(
              function () {
                var p = (I % 24) + S.span;
                return 24 - p;
              },
              [I, S.span],
            ),
            j = (0, o.useContext)(Q.ZP.ConfigContext),
            d = j.getPrefixCls('pro-query-filter');
          return (0, u.jsxs)(
            Be.Z,
            {
              gutter: z,
              className: ''.concat(d, '-row ').concat(l),
              justify: 'start',
              children: [
                E,
                K &&
                  (0, u.jsx)(
                    Pe.Z,
                    {
                      span: S.span,
                      offset: J,
                      style: { textAlign: 'end' },
                      children: (0, u.jsx)($e.Z.Item, {
                        label: ' ',
                        colon: !1,
                        className: ''.concat(d, '-actions ').concat(l),
                        children: (0, u.jsx)(
                          $t,
                          {
                            hiddenNum: G,
                            collapsed: c,
                            collapseRender: k ? w : !1,
                            submitter: K,
                            setCollapsed: C,
                          },
                          'pro-form-query-filter-actions',
                        ),
                      }),
                    },
                    'submitter',
                  ),
              ],
            },
            'resize-observer-row',
          );
        },
        mt = (0, Ke.j)()
          ? (Ue = document) === null ||
            Ue === void 0 ||
            (De = Ue.body) === null ||
            De === void 0
            ? void 0
            : De.clientWidth
          : 1024;
      function Zt(t) {
        var e = t.collapsed,
          n = t.layout,
          r = t.defaultCollapsed,
          l = r === void 0 ? !0 : r,
          s = t.defaultColsNumber,
          v = t.span,
          g = t.searchGutter,
          m = g === void 0 ? 24 : g,
          c = t.searchText,
          C = t.resetText,
          $ = t.optionRender,
          w = t.collapseRender,
          b = t.onReset,
          f = t.onCollapse,
          S = t.labelWidth,
          Z = S === void 0 ? '80' : S,
          z = t.style,
          L = t.split,
          K = t.preserve,
          T = K === void 0 ? !0 : K,
          X = t.ignoreRules,
          x = t.showHiddenNum,
          P = x === void 0 ? !1 : x,
          I = (0, B.Z)(t, ct),
          F = (0, o.useContext)(Q.ZP.ConfigContext),
          E = F.getPrefixCls('pro-query-filter'),
          G = Ee(E),
          k = G.wrapSSR,
          J = G.hashId,
          j = (0, ae.Z)(function () {
            return typeof (z == null ? void 0 : z.width) == 'number'
              ? z == null
                ? void 0
                : z.width
              : mt;
          }),
          d = (0, W.Z)(j, 2),
          p = d[0],
          y = d[1],
          h = (0, o.useMemo)(
            function () {
              return ut(n, p + 16, v);
            },
            [n, p, v],
          ),
          Y = (0, o.useMemo)(
            function () {
              return s !== void 0 ? s - 1 : Math.max(1, 24 / h.span - 1);
            },
            [s, h.span],
          ),
          _ = (0, o.useMemo)(
            function () {
              if (Z && h.layout !== 'vertical' && Z !== 'auto')
                return {
                  labelCol: { flex: '0 0 '.concat(Z, 'px') },
                  wrapperCol: {
                    style: { maxWidth: 'calc(100% - '.concat(Z, 'px)') },
                  },
                  style: { flexWrap: 'nowrap' },
                };
            },
            [h.layout, Z],
          );
        return k(
          (0, u.jsx)(
            lt.Z,
            {
              onResize: function (M) {
                p !== M.width && M.width > 17 && y(M.width);
              },
              children: (0, u.jsx)(
                ve.I,
                (0, i.Z)(
                  (0, i.Z)({ isKeyPressSubmit: !0, preserve: T }, I),
                  {},
                  {
                    className: Ze()(E, J, I.className),
                    onReset: b,
                    style: z,
                    layout: h.layout,
                    fieldProps: { style: { width: '100%' } },
                    formItemProps: _,
                    groupProps: {
                      titleStyle: {
                        display: 'inline-block',
                        marginInlineEnd: 16,
                      },
                    },
                    contentRender: function (M, O, V) {
                      return (0, u.jsx)(bt, {
                        spanSize: h,
                        collapsed: e,
                        form: V,
                        collapseRender: w,
                        defaultCollapsed: l,
                        onCollapse: f,
                        optionRender: $,
                        submitter: O,
                        items: M,
                        split: L,
                        baseClassName: E,
                        resetText: t.resetText,
                        searchText: t.searchText,
                        searchGutter: m,
                        preserve: T,
                        ignoreRules: X,
                        showLength: Y,
                        showHiddenNum: P,
                      });
                    },
                  },
                ),
              ),
            },
            'resize-observer',
          ),
        );
      }
      var Je = a(74902),
        Ne = a(92210),
        Le = a(1977),
        Fe = a(67159),
        It = a(63606),
        qe = a(97937),
        pt = a(87462),
        At = [
          'className',
          'prefixCls',
          'style',
          'active',
          'status',
          'iconPrefix',
          'icon',
          'wrapperStyle',
          'stepNumber',
          'disabled',
          'description',
          'title',
          'subTitle',
          'progressDot',
          'stepIcon',
          'tailContent',
          'icons',
          'stepIndex',
          'onStepClick',
          'onClick',
          'render',
        ];
      function Rt(t) {
        return typeof t == 'string';
      }
      function Xt(t) {
        var e,
          n = t.className,
          r = t.prefixCls,
          l = t.style,
          s = t.active,
          v = t.status,
          g = t.iconPrefix,
          m = t.icon,
          c = t.wrapperStyle,
          C = t.stepNumber,
          $ = t.disabled,
          w = t.description,
          b = t.title,
          f = t.subTitle,
          S = t.progressDot,
          Z = t.stepIcon,
          z = t.tailContent,
          L = t.icons,
          K = t.stepIndex,
          T = t.onStepClick,
          X = t.onClick,
          x = t.render,
          P = (0, B.Z)(t, At),
          I = function () {
            X && X.apply(void 0, arguments), T(K);
          },
          F = function () {
            var p,
              y,
              h = Ze()(
                ''.concat(r, '-icon'),
                ''.concat(g, 'icon'),
                ((p = {}),
                (0, R.Z)(p, ''.concat(g, 'icon-').concat(m), m && Rt(m)),
                (0, R.Z)(
                  p,
                  ''.concat(g, 'icon-check'),
                  !m && v === 'finish' && ((L && !L.finish) || !L),
                ),
                (0, R.Z)(
                  p,
                  ''.concat(g, 'icon-cross'),
                  !m && v === 'error' && ((L && !L.error) || !L),
                ),
                p),
              ),
              Y = o.createElement('span', {
                className: ''.concat(r, '-icon-dot'),
              });
            return (
              S
                ? typeof S == 'function'
                  ? (y = o.createElement(
                      'span',
                      { className: ''.concat(r, '-icon') },
                      S(Y, {
                        index: C - 1,
                        status: v,
                        title: b,
                        description: w,
                      }),
                    ))
                  : (y = o.createElement(
                      'span',
                      { className: ''.concat(r, '-icon') },
                      Y,
                    ))
                : m && !Rt(m)
                ? (y = o.createElement(
                    'span',
                    { className: ''.concat(r, '-icon') },
                    m,
                  ))
                : L && L.finish && v === 'finish'
                ? (y = o.createElement(
                    'span',
                    { className: ''.concat(r, '-icon') },
                    L.finish,
                  ))
                : L && L.error && v === 'error'
                ? (y = o.createElement(
                    'span',
                    { className: ''.concat(r, '-icon') },
                    L.error,
                  ))
                : m || v === 'finish' || v === 'error'
                ? (y = o.createElement('span', { className: h }))
                : (y = o.createElement(
                    'span',
                    { className: ''.concat(r, '-icon') },
                    C,
                  )),
              Z &&
                (y = Z({
                  index: C - 1,
                  status: v,
                  title: b,
                  description: w,
                  node: y,
                })),
              y
            );
          },
          E = v || 'wait',
          G = Ze()(
            ''.concat(r, '-item'),
            ''.concat(r, '-item-').concat(E),
            n,
            ((e = {}),
            (0, R.Z)(e, ''.concat(r, '-item-custom'), m),
            (0, R.Z)(e, ''.concat(r, '-item-active'), s),
            (0, R.Z)(e, ''.concat(r, '-item-disabled'), $ === !0),
            e),
          ),
          k = (0, i.Z)({}, l),
          J = {};
        T && !$ && ((J.role = 'button'), (J.tabIndex = 0), (J.onClick = I));
        var j = o.createElement(
          'div',
          (0, pt.Z)({}, P, { className: G, style: k }),
          o.createElement(
            'div',
            (0, pt.Z)({ onClick: X }, J, {
              className: ''.concat(r, '-item-container'),
            }),
            o.createElement(
              'div',
              { className: ''.concat(r, '-item-tail') },
              z,
            ),
            o.createElement(
              'div',
              { className: ''.concat(r, '-item-icon') },
              F(),
            ),
            o.createElement(
              'div',
              { className: ''.concat(r, '-item-content') },
              o.createElement(
                'div',
                { className: ''.concat(r, '-item-title') },
                b,
                f &&
                  o.createElement(
                    'div',
                    {
                      title: typeof f == 'string' ? f : void 0,
                      className: ''.concat(r, '-item-subtitle'),
                    },
                    f,
                  ),
              ),
              w &&
                o.createElement(
                  'div',
                  { className: ''.concat(r, '-item-description') },
                  w,
                ),
            ),
          ),
        );
        return x && (j = x(j) || null), j;
      }
      var Tt = Xt,
        Gt = [
          'prefixCls',
          'style',
          'className',
          'children',
          'direction',
          'type',
          'labelPlacement',
          'iconPrefix',
          'status',
          'size',
          'current',
          'progressDot',
          'stepIcon',
          'initial',
          'icons',
          'onChange',
          'itemRender',
          'items',
        ];
      function jt(t) {
        var e,
          n = t.prefixCls,
          r = n === void 0 ? 'rc-steps' : n,
          l = t.style,
          s = l === void 0 ? {} : l,
          v = t.className,
          g = t.children,
          m = t.direction,
          c = m === void 0 ? 'horizontal' : m,
          C = t.type,
          $ = C === void 0 ? 'default' : C,
          w = t.labelPlacement,
          b = w === void 0 ? 'horizontal' : w,
          f = t.iconPrefix,
          S = f === void 0 ? 'rc' : f,
          Z = t.status,
          z = Z === void 0 ? 'process' : Z,
          L = t.size,
          K = t.current,
          T = K === void 0 ? 0 : K,
          X = t.progressDot,
          x = X === void 0 ? !1 : X,
          P = t.stepIcon,
          I = t.initial,
          F = I === void 0 ? 0 : I,
          E = t.icons,
          G = t.onChange,
          k = t.itemRender,
          J = t.items,
          j = J === void 0 ? [] : J,
          d = (0, B.Z)(t, Gt),
          p = $ === 'navigation',
          y = $ === 'inline',
          h = y || x,
          Y = y ? 'horizontal' : c,
          _ = y ? void 0 : L,
          ce = h ? 'vertical' : b,
          M = Ze()(
            r,
            ''.concat(r, '-').concat(Y),
            v,
            ((e = {}),
            (0, R.Z)(e, ''.concat(r, '-').concat(_), _),
            (0, R.Z)(e, ''.concat(r, '-label-').concat(ce), Y === 'horizontal'),
            (0, R.Z)(e, ''.concat(r, '-dot'), !!h),
            (0, R.Z)(e, ''.concat(r, '-navigation'), p),
            (0, R.Z)(e, ''.concat(r, '-inline'), y),
            e),
          ),
          O = function (q) {
            G && T !== q && G(q);
          },
          V = function (q, se) {
            var te = (0, i.Z)({}, q),
              re = F + se;
            return (
              z === 'error' &&
                se === T - 1 &&
                (te.className = ''.concat(r, '-next-error')),
              te.status ||
                (re === T
                  ? (te.status = z)
                  : re < T
                  ? (te.status = 'finish')
                  : (te.status = 'wait')),
              y && ((te.icon = void 0), (te.subTitle = void 0)),
              !te.render &&
                k &&
                (te.render = function (Oe) {
                  return k(te, Oe);
                }),
              o.createElement(
                Tt,
                (0, pt.Z)({}, te, {
                  active: re === T,
                  stepNumber: re + 1,
                  stepIndex: re,
                  key: re,
                  prefixCls: r,
                  iconPrefix: S,
                  wrapperStyle: s,
                  progressDot: h,
                  stepIcon: P,
                  icons: E,
                  onStepClick: G && O,
                }),
              )
            );
          };
        return o.createElement(
          'div',
          (0, pt.Z)({ className: M, style: s }, d),
          j
            .filter(function (ee) {
              return ee;
            })
            .map(V),
        );
      }
      jt.Step = Tt;
      var Kt = jt,
        wt = Kt,
        Yt = a(83062),
        Ut = a(53124),
        Qt = a(25378),
        Jt = a(69814),
        qt = a(50344);
      function kt(t) {
        return t.filter((e) => e);
      }
      function _t(t, e) {
        if (t) return t;
        const n = (0, qt.Z)(e).map((r) => {
          if (o.isValidElement(r)) {
            const { props: l } = r;
            return Object.assign({}, l);
          }
          return null;
        });
        return kt(n);
      }
      var en = a(67968),
        tn = a(45503),
        nn = (t) => {
          const {
            componentCls: e,
            stepsIconCustomTop: n,
            stepsIconCustomSize: r,
            stepsIconCustomFontSize: l,
          } = t;
          return {
            [`${e}-item-custom`]: {
              [`> ${e}-item-container > ${e}-item-icon`]: {
                height: 'auto',
                background: 'none',
                border: 0,
                [`> ${e}-icon`]: {
                  top: n,
                  width: r,
                  height: r,
                  fontSize: l,
                  lineHeight: `${r}px`,
                },
              },
            },
            [`&:not(${e}-vertical)`]: {
              [`${e}-item-custom`]: {
                [`${e}-item-icon`]: { width: 'auto', background: 'none' },
              },
            },
          };
        },
        rn = (t) => {
          const {
            componentCls: e,
            stepsIconSize: n,
            lineHeight: r,
            stepsSmallIconSize: l,
          } = t;
          return {
            [`&${e}-label-vertical`]: {
              [`${e}-item`]: {
                overflow: 'visible',
                '&-tail': {
                  marginInlineStart: n / 2 + t.controlHeightLG,
                  padding: `${t.paddingXXS}px ${t.paddingLG}px`,
                },
                '&-content': {
                  display: 'block',
                  width: (n / 2 + t.controlHeightLG) * 2,
                  marginTop: t.marginSM,
                  textAlign: 'center',
                },
                '&-icon': {
                  display: 'inline-block',
                  marginInlineStart: t.controlHeightLG,
                },
                '&-title': {
                  paddingInlineEnd: 0,
                  paddingInlineStart: 0,
                  '&::after': { display: 'none' },
                },
                '&-subtitle': {
                  display: 'block',
                  marginBottom: t.marginXXS,
                  marginInlineStart: 0,
                  lineHeight: r,
                },
              },
              [`&${e}-small:not(${e}-dot)`]: {
                [`${e}-item`]: {
                  '&-icon': {
                    marginInlineStart: t.controlHeightLG + (n - l) / 2,
                  },
                },
              },
            },
          };
        },
        zt = a(14747),
        on = (t) => {
          const {
            componentCls: e,
            stepsNavContentMaxWidth: n,
            stepsNavArrowColor: r,
            stepsNavActiveColor: l,
            motionDurationSlow: s,
          } = t;
          return {
            [`&${e}-navigation`]: {
              paddingTop: t.paddingSM,
              [`&${e}-small`]: {
                [`${e}-item`]: {
                  '&-container': { marginInlineStart: -t.marginSM },
                },
              },
              [`${e}-item`]: {
                overflow: 'visible',
                textAlign: 'center',
                '&-container': {
                  display: 'inline-block',
                  height: '100%',
                  marginInlineStart: -t.margin,
                  paddingBottom: t.paddingSM,
                  textAlign: 'start',
                  transition: `opacity ${s}`,
                  [`${e}-item-content`]: { maxWidth: n },
                  [`${e}-item-title`]: Object.assign(
                    Object.assign(
                      { maxWidth: '100%', paddingInlineEnd: 0 },
                      zt.vS,
                    ),
                    { '&::after': { display: 'none' } },
                  ),
                },
                [`&:not(${e}-item-active)`]: {
                  [`${e}-item-container[role='button']`]: {
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.85 },
                  },
                },
                '&:last-child': { flex: 1, '&::after': { display: 'none' } },
                '&::after': {
                  position: 'absolute',
                  top: `calc(50% - ${t.paddingSM / 2}px)`,
                  insetInlineStart: '100%',
                  display: 'inline-block',
                  width: t.fontSizeIcon,
                  height: t.fontSizeIcon,
                  borderTop: `${t.lineWidth}px ${t.lineType} ${r}`,
                  borderBottom: 'none',
                  borderInlineStart: 'none',
                  borderInlineEnd: `${t.lineWidth}px ${t.lineType} ${r}`,
                  transform: 'translateY(-50%) translateX(-50%) rotate(45deg)',
                  content: '""',
                },
                '&::before': {
                  position: 'absolute',
                  bottom: 0,
                  insetInlineStart: '50%',
                  display: 'inline-block',
                  width: 0,
                  height: t.lineWidthBold,
                  backgroundColor: l,
                  transition: `width ${s}, inset-inline-start ${s}`,
                  transitionTimingFunction: 'ease-out',
                  content: '""',
                },
              },
              [`${e}-item${e}-item-active::before`]: {
                insetInlineStart: 0,
                width: '100%',
              },
            },
            [`&${e}-navigation${e}-vertical`]: {
              [`> ${e}-item`]: {
                marginInlineEnd: 0,
                '&::before': { display: 'none' },
                [`&${e}-item-active::before`]: {
                  top: 0,
                  insetInlineEnd: 0,
                  insetInlineStart: 'unset',
                  display: 'block',
                  width: t.lineWidth * 3,
                  height: `calc(100% - ${t.marginLG}px)`,
                },
                '&::after': {
                  position: 'relative',
                  insetInlineStart: '50%',
                  display: 'block',
                  width: t.controlHeight * 0.25,
                  height: t.controlHeight * 0.25,
                  marginBottom: t.marginXS,
                  textAlign: 'center',
                  transform: 'translateY(-50%) translateX(-50%) rotate(135deg)',
                },
                [`> ${e}-item-container > ${e}-item-tail`]: {
                  visibility: 'hidden',
                },
              },
            },
            [`&${e}-navigation${e}-horizontal`]: {
              [`> ${e}-item > ${e}-item-container > ${e}-item-tail`]: {
                visibility: 'hidden',
              },
            },
          };
        },
        ln = (t) => {
          const { antCls: e, componentCls: n } = t;
          return {
            [`&${n}-with-progress`]: {
              [`${n}-item`]: {
                paddingTop: t.paddingXXS,
                [`&-process ${n}-item-container ${n}-item-icon ${n}-icon`]: {
                  color: t.processIconColor,
                },
              },
              [`&${n}-vertical > ${n}-item `]: {
                paddingInlineStart: t.paddingXXS,
                [`> ${n}-item-container > ${n}-item-tail`]: {
                  top: t.marginXXS,
                  insetInlineStart:
                    t.stepsIconSize / 2 - t.lineWidth + t.paddingXXS,
                },
              },
              [`&, &${n}-small`]: {
                [`&${n}-horizontal ${n}-item:first-child`]: {
                  paddingBottom: t.paddingXXS,
                  paddingInlineStart: t.paddingXXS,
                },
              },
              [`&${n}-small${n}-vertical > ${n}-item > ${n}-item-container > ${n}-item-tail`]:
                {
                  insetInlineStart:
                    t.stepsSmallIconSize / 2 - t.lineWidth + t.paddingXXS,
                },
              [`&${n}-label-vertical`]: {
                [`${n}-item ${n}-item-tail`]: {
                  top: t.margin - 2 * t.lineWidth,
                },
              },
              [`${n}-item-icon`]: {
                position: 'relative',
                [`${e}-progress`]: {
                  position: 'absolute',
                  insetBlockStart:
                    (t.stepsIconSize - t.stepsProgressSize - t.lineWidth * 2) /
                    2,
                  insetInlineStart:
                    (t.stepsIconSize - t.stepsProgressSize - t.lineWidth * 2) /
                    2,
                },
              },
            },
          };
        },
        an = (t) => {
          const {
            componentCls: e,
            descriptionWidth: n,
            lineHeight: r,
            stepsCurrentDotSize: l,
            stepsDotSize: s,
            motionDurationSlow: v,
          } = t;
          return {
            [`&${e}-dot, &${e}-dot${e}-small`]: {
              [`${e}-item`]: {
                '&-title': { lineHeight: r },
                '&-tail': {
                  top: Math.floor((t.stepsDotSize - t.lineWidth * 3) / 2),
                  width: '100%',
                  marginTop: 0,
                  marginBottom: 0,
                  marginInline: `${n / 2}px 0`,
                  padding: 0,
                  '&::after': {
                    width: `calc(100% - ${t.marginSM * 2}px)`,
                    height: t.lineWidth * 3,
                    marginInlineStart: t.marginSM,
                  },
                },
                '&-icon': {
                  width: s,
                  height: s,
                  marginInlineStart: (t.descriptionWidth - s) / 2,
                  paddingInlineEnd: 0,
                  lineHeight: `${s}px`,
                  background: 'transparent',
                  border: 0,
                  [`${e}-icon-dot`]: {
                    position: 'relative',
                    float: 'left',
                    width: '100%',
                    height: '100%',
                    borderRadius: 100,
                    transition: `all ${v}`,
                    '&::after': {
                      position: 'absolute',
                      top: -t.marginSM,
                      insetInlineStart: (s - t.controlHeightLG * 1.5) / 2,
                      width: t.controlHeightLG * 1.5,
                      height: t.controlHeight,
                      background: 'transparent',
                      content: '""',
                    },
                  },
                },
                '&-content': { width: n },
                [`&-process ${e}-item-icon`]: {
                  position: 'relative',
                  top: (s - l) / 2,
                  width: l,
                  height: l,
                  lineHeight: `${l}px`,
                  background: 'none',
                  marginInlineStart: (t.descriptionWidth - l) / 2,
                },
                [`&-process ${e}-icon`]: {
                  [`&:first-child ${e}-icon-dot`]: { insetInlineStart: 0 },
                },
              },
            },
            [`&${e}-vertical${e}-dot`]: {
              [`${e}-item-icon`]: {
                marginTop: (t.controlHeight - s) / 2,
                marginInlineStart: 0,
                background: 'none',
              },
              [`${e}-item-process ${e}-item-icon`]: {
                marginTop: (t.controlHeight - l) / 2,
                top: 0,
                insetInlineStart: (s - l) / 2,
                marginInlineStart: 0,
              },
              [`${e}-item > ${e}-item-container > ${e}-item-tail`]: {
                top: (t.controlHeight - s) / 2,
                insetInlineStart: 0,
                margin: 0,
                padding: `${s + t.paddingXS}px 0 ${t.paddingXS}px`,
                '&::after': { marginInlineStart: (s - t.lineWidth) / 2 },
              },
              [`&${e}-small`]: {
                [`${e}-item-icon`]: { marginTop: (t.controlHeightSM - s) / 2 },
                [`${e}-item-process ${e}-item-icon`]: {
                  marginTop: (t.controlHeightSM - l) / 2,
                },
                [`${e}-item > ${e}-item-container > ${e}-item-tail`]: {
                  top: (t.controlHeightSM - s) / 2,
                },
              },
              [`${e}-item:first-child ${e}-icon-dot`]: { insetInlineStart: 0 },
              [`${e}-item-content`]: { width: 'inherit' },
            },
          };
        },
        sn = (t) => {
          const { componentCls: e } = t;
          return {
            [`&${e}-rtl`]: {
              direction: 'rtl',
              [`${e}-item`]: { '&-subtitle': { float: 'left' } },
              [`&${e}-navigation`]: {
                [`${e}-item::after`]: { transform: 'rotate(-45deg)' },
              },
              [`&${e}-vertical`]: {
                [`> ${e}-item`]: {
                  '&::after': { transform: 'rotate(225deg)' },
                  [`${e}-item-icon`]: { float: 'right' },
                },
              },
              [`&${e}-dot`]: {
                [`${e}-item-icon ${e}-icon-dot, &${e}-small ${e}-item-icon ${e}-icon-dot`]:
                  { float: 'right' },
              },
            },
          };
        },
        cn = (t) => {
          const {
            componentCls: e,
            stepsSmallIconSize: n,
            fontSizeSM: r,
            fontSize: l,
            colorTextDescription: s,
          } = t;
          return {
            [`&${e}-small`]: {
              [`&${e}-horizontal:not(${e}-label-vertical) ${e}-item`]: {
                paddingInlineStart: t.paddingSM,
                '&:first-child': { paddingInlineStart: 0 },
              },
              [`${e}-item-icon`]: {
                width: n,
                height: n,
                marginTop: 0,
                marginBottom: 0,
                marginInline: `0 ${t.marginXS}px`,
                fontSize: r,
                lineHeight: `${n}px`,
                textAlign: 'center',
                borderRadius: n,
              },
              [`${e}-item-title`]: {
                paddingInlineEnd: t.paddingSM,
                fontSize: l,
                lineHeight: `${n}px`,
                '&::after': { top: n / 2 },
              },
              [`${e}-item-description`]: { color: s, fontSize: l },
              [`${e}-item-tail`]: { top: n / 2 - t.paddingXXS },
              [`${e}-item-custom ${e}-item-icon`]: {
                width: 'inherit',
                height: 'inherit',
                lineHeight: 'inherit',
                background: 'none',
                border: 0,
                borderRadius: 0,
                [`> ${e}-icon`]: {
                  fontSize: n,
                  lineHeight: `${n}px`,
                  transform: 'none',
                },
              },
            },
          };
        },
        dn = (t) => {
          const {
            componentCls: e,
            stepsSmallIconSize: n,
            stepsIconSize: r,
          } = t;
          return {
            [`&${e}-vertical`]: {
              display: 'flex',
              flexDirection: 'column',
              [`> ${e}-item`]: {
                display: 'block',
                flex: '1 0 auto',
                paddingInlineStart: 0,
                overflow: 'visible',
                [`${e}-item-icon`]: {
                  float: 'left',
                  marginInlineEnd: t.margin,
                },
                [`${e}-item-content`]: {
                  display: 'block',
                  minHeight: t.controlHeight * 1.5,
                  overflow: 'hidden',
                },
                [`${e}-item-title`]: { lineHeight: `${r}px` },
                [`${e}-item-description`]: { paddingBottom: t.paddingSM },
              },
              [`> ${e}-item > ${e}-item-container > ${e}-item-tail`]: {
                position: 'absolute',
                top: 0,
                insetInlineStart: t.stepsIconSize / 2 - t.lineWidth,
                width: t.lineWidth,
                height: '100%',
                padding: `${r + t.marginXXS * 1.5}px 0 ${t.marginXXS * 1.5}px`,
                '&::after': { width: t.lineWidth, height: '100%' },
              },
              [`> ${e}-item:not(:last-child) > ${e}-item-container > ${e}-item-tail`]:
                { display: 'block' },
              [` > ${e}-item > ${e}-item-container > ${e}-item-content > ${e}-item-title`]:
                { '&::after': { display: 'none' } },
              [`&${e}-small ${e}-item-container`]: {
                [`${e}-item-tail`]: {
                  position: 'absolute',
                  top: 0,
                  insetInlineStart: t.stepsSmallIconSize / 2 - t.lineWidth,
                  padding: `${n + t.marginXXS * 1.5}px 0 ${
                    t.marginXXS * 1.5
                  }px`,
                },
                [`${e}-item-title`]: { lineHeight: `${n}px` },
              },
            },
          };
        },
        un = (t) => {
          const {
              componentCls: e,
              inlineDotSize: n,
              inlineTitleColor: r,
              inlineTailColor: l,
            } = t,
            s = t.paddingXS + t.lineWidth,
            v = {
              [`${e}-item-container ${e}-item-content ${e}-item-title`]: {
                color: r,
              },
            };
          return {
            [`&${e}-inline`]: {
              width: 'auto',
              display: 'inline-flex',
              [`${e}-item`]: {
                flex: 'none',
                '&-container': {
                  padding: `${s}px ${t.paddingXXS}px 0`,
                  margin: `0 ${t.marginXXS / 2}px`,
                  borderRadius: t.borderRadiusSM,
                  cursor: 'pointer',
                  transition: `background-color ${t.motionDurationMid}`,
                  '&:hover': { background: t.controlItemBgHover },
                  ["&[role='button']:hover"]: { opacity: 1 },
                },
                '&-icon': {
                  width: n,
                  height: n,
                  marginInlineStart: `calc(50% - ${n / 2}px)`,
                  [`> ${e}-icon`]: { top: 0 },
                  [`${e}-icon-dot`]: { borderRadius: t.fontSizeSM / 4 },
                },
                '&-content': {
                  width: 'auto',
                  marginTop: t.marginXS - t.lineWidth,
                },
                '&-title': {
                  color: r,
                  fontSize: t.fontSizeSM,
                  lineHeight: t.lineHeightSM,
                  fontWeight: 'normal',
                  marginBottom: t.marginXXS / 2,
                },
                '&-description': { display: 'none' },
                '&-tail': {
                  marginInlineStart: 0,
                  top: s + n / 2,
                  transform: 'translateY(-50%)',
                  '&:after': {
                    width: '100%',
                    height: t.lineWidth,
                    borderRadius: 0,
                    marginInlineStart: 0,
                    background: l,
                  },
                },
                [`&:first-child ${e}-item-tail`]: {
                  width: '50%',
                  marginInlineStart: '50%',
                },
                [`&:last-child ${e}-item-tail`]: {
                  display: 'block',
                  width: '50%',
                },
                '&-wait': Object.assign(
                  {
                    [`${e}-item-icon ${e}-icon ${e}-icon-dot`]: {
                      backgroundColor: t.colorBorderBg,
                      border: `${t.lineWidth}px ${t.lineType} ${l}`,
                    },
                  },
                  v,
                ),
                '&-finish': Object.assign(
                  {
                    [`${e}-item-tail::after`]: { backgroundColor: l },
                    [`${e}-item-icon ${e}-icon ${e}-icon-dot`]: {
                      backgroundColor: l,
                      border: `${t.lineWidth}px ${t.lineType} ${l}`,
                    },
                  },
                  v,
                ),
                '&-error': v,
                '&-active, &-process': Object.assign(
                  {
                    [`${e}-item-icon`]: {
                      width: n,
                      height: n,
                      marginInlineStart: `calc(50% - ${n / 2}px)`,
                      top: 0,
                    },
                  },
                  v,
                ),
                [`&:not(${e}-item-active) > ${e}-item-container[role='button']:hover`]:
                  { [`${e}-item-title`]: { color: r } },
              },
            },
          };
        },
        Ae;
      (function (t) {
        (t.wait = 'wait'),
          (t.process = 'process'),
          (t.finish = 'finish'),
          (t.error = 'error');
      })(Ae || (Ae = {}));
      const ft = (t, e) => {
          const n = `${e.componentCls}-item`,
            r = `${t}IconColor`,
            l = `${t}TitleColor`,
            s = `${t}DescriptionColor`,
            v = `${t}TailColor`,
            g = `${t}IconBgColor`,
            m = `${t}IconBorderColor`,
            c = `${t}DotColor`;
          return {
            [`${n}-${t} ${n}-icon`]: {
              backgroundColor: e[g],
              borderColor: e[m],
              [`> ${e.componentCls}-icon`]: {
                color: e[r],
                [`${e.componentCls}-icon-dot`]: { background: e[c] },
              },
            },
            [`${n}-${t}${n}-custom ${n}-icon`]: {
              [`> ${e.componentCls}-icon`]: { color: e[c] },
            },
            [`${n}-${t} > ${n}-container > ${n}-content > ${n}-title`]: {
              color: e[l],
              '&::after': { backgroundColor: e[v] },
            },
            [`${n}-${t} > ${n}-container > ${n}-content > ${n}-description`]: {
              color: e[s],
            },
            [`${n}-${t} > ${n}-container > ${n}-tail::after`]: {
              backgroundColor: e[v],
            },
          };
        },
        vn = (t) => {
          const { componentCls: e, motionDurationSlow: n } = t,
            r = `${e}-item`;
          return Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      {
                        [r]: {
                          position: 'relative',
                          display: 'inline-block',
                          flex: 1,
                          overflow: 'hidden',
                          verticalAlign: 'top',
                          '&:last-child': {
                            flex: 'none',
                            [`> ${r}-container > ${r}-tail, > ${r}-container >  ${r}-content > ${r}-title::after`]:
                              { display: 'none' },
                          },
                        },
                        [`${r}-container`]: { outline: 'none' },
                        [`${r}-icon, ${r}-content`]: {
                          display: 'inline-block',
                          verticalAlign: 'top',
                        },
                        [`${r}-icon`]: {
                          width: t.stepsIconSize,
                          height: t.stepsIconSize,
                          marginTop: 0,
                          marginBottom: 0,
                          marginInlineStart: 0,
                          marginInlineEnd: t.marginXS,
                          fontSize: t.stepsIconFontSize,
                          fontFamily: t.fontFamily,
                          lineHeight: `${t.stepsIconSize}px`,
                          textAlign: 'center',
                          borderRadius: t.stepsIconSize,
                          border: `${t.lineWidth}px ${t.lineType} transparent`,
                          transition: `background-color ${n}, border-color ${n}`,
                          [`${e}-icon`]: {
                            position: 'relative',
                            top: t.stepsIconTop,
                            color: t.colorPrimary,
                            lineHeight: 1,
                          },
                        },
                        [`${r}-tail`]: {
                          position: 'absolute',
                          top: t.stepsIconSize / 2 - t.paddingXXS,
                          insetInlineStart: 0,
                          width: '100%',
                          '&::after': {
                            display: 'inline-block',
                            width: '100%',
                            height: t.lineWidth,
                            background: t.colorSplit,
                            borderRadius: t.lineWidth,
                            transition: `background ${n}`,
                            content: '""',
                          },
                        },
                        [`${r}-title`]: {
                          position: 'relative',
                          display: 'inline-block',
                          paddingInlineEnd: t.padding,
                          color: t.colorText,
                          fontSize: t.fontSizeLG,
                          lineHeight: `${t.stepsTitleLineHeight}px`,
                          '&::after': {
                            position: 'absolute',
                            top: t.stepsTitleLineHeight / 2,
                            insetInlineStart: '100%',
                            display: 'block',
                            width: 9999,
                            height: t.lineWidth,
                            background: t.processTailColor,
                            content: '""',
                          },
                        },
                        [`${r}-subtitle`]: {
                          display: 'inline',
                          marginInlineStart: t.marginXS,
                          color: t.colorTextDescription,
                          fontWeight: 'normal',
                          fontSize: t.fontSize,
                        },
                        [`${r}-description`]: {
                          color: t.colorTextDescription,
                          fontSize: t.fontSize,
                        },
                      },
                      ft(Ae.wait, t),
                    ),
                    ft(Ae.process, t),
                  ),
                  {
                    [`${r}-process > ${r}-container > ${r}-title`]: {
                      fontWeight: t.fontWeightStrong,
                    },
                  },
                ),
                ft(Ae.finish, t),
              ),
              ft(Ae.error, t),
            ),
            {
              [`${r}${e}-next-error > ${e}-item-title::after`]: {
                background: t.colorError,
              },
              [`${r}-disabled`]: { cursor: 'not-allowed' },
            },
          );
        },
        mn = (t) => {
          const { componentCls: e, motionDurationSlow: n } = t;
          return {
            [`& ${e}-item`]: {
              [`&:not(${e}-item-active)`]: {
                [`& > ${e}-item-container[role='button']`]: {
                  cursor: 'pointer',
                  [`${e}-item`]: {
                    [`&-title, &-subtitle, &-description, &-icon ${e}-icon`]: {
                      transition: `color ${n}`,
                    },
                  },
                  '&:hover': {
                    [`${e}-item`]: {
                      ['&-title, &-subtitle, &-description']: {
                        color: t.colorPrimary,
                      },
                    },
                  },
                },
                [`&:not(${e}-item-process)`]: {
                  [`& > ${e}-item-container[role='button']:hover`]: {
                    [`${e}-item`]: {
                      '&-icon': {
                        borderColor: t.colorPrimary,
                        [`${e}-icon`]: { color: t.colorPrimary },
                      },
                    },
                  },
                },
              },
            },
            [`&${e}-horizontal:not(${e}-label-vertical)`]: {
              [`${e}-item`]: {
                paddingInlineStart: t.padding,
                whiteSpace: 'nowrap',
                '&:first-child': { paddingInlineStart: 0 },
                [`&:last-child ${e}-item-title`]: { paddingInlineEnd: 0 },
                '&-tail': { display: 'none' },
                '&-description': {
                  maxWidth: t.descriptionWidth,
                  whiteSpace: 'normal',
                },
              },
            },
          };
        },
        pn = (t) => {
          const { componentCls: e } = t;
          return {
            [e]: Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              Object.assign(
                                Object.assign(
                                  Object.assign(
                                    Object.assign({}, (0, zt.Wf)(t)),
                                    {
                                      display: 'flex',
                                      width: '100%',
                                      fontSize: 0,
                                      textAlign: 'initial',
                                    },
                                  ),
                                  vn(t),
                                ),
                                mn(t),
                              ),
                              nn(t),
                            ),
                            cn(t),
                          ),
                          dn(t),
                        ),
                        rn(t),
                      ),
                      an(t),
                    ),
                    on(t),
                  ),
                  sn(t),
                ),
                ln(t),
              ),
              un(t),
            ),
          };
        };
      var fn = (0, en.Z)(
          'Steps',
          (t) => {
            const {
                wireframe: e,
                colorTextDisabled: n,
                fontSizeHeading3: r,
                fontSize: l,
                controlHeight: s,
                controlHeightLG: v,
                colorTextLightSolid: g,
                colorText: m,
                colorPrimary: c,
                colorTextLabel: C,
                colorTextDescription: $,
                colorTextQuaternary: w,
                colorFillContent: b,
                controlItemBgActive: f,
                colorError: S,
                colorBgContainer: Z,
                colorBorderSecondary: z,
              } = t,
              L = t.controlHeight,
              K = t.colorSplit,
              T = (0, tn.TS)(t, {
                processTailColor: K,
                stepsNavArrowColor: n,
                stepsIconSize: L,
                stepsIconCustomSize: L,
                stepsIconCustomTop: 0,
                stepsIconCustomFontSize: v / 2,
                stepsIconTop: -0.5,
                stepsIconFontSize: l,
                stepsTitleLineHeight: s,
                stepsSmallIconSize: r,
                stepsDotSize: s / 4,
                stepsCurrentDotSize: v / 4,
                stepsNavContentMaxWidth: 'auto',
                processIconColor: g,
                processTitleColor: m,
                processDescriptionColor: m,
                processIconBgColor: c,
                processIconBorderColor: c,
                processDotColor: c,
                waitIconColor: e ? n : C,
                waitTitleColor: $,
                waitDescriptionColor: $,
                waitTailColor: K,
                waitIconBgColor: e ? Z : b,
                waitIconBorderColor: e ? n : 'transparent',
                waitDotColor: n,
                finishIconColor: c,
                finishTitleColor: m,
                finishDescriptionColor: $,
                finishTailColor: c,
                finishIconBgColor: e ? Z : f,
                finishIconBorderColor: e ? c : f,
                finishDotColor: c,
                errorIconColor: g,
                errorTitleColor: S,
                errorDescriptionColor: S,
                errorTailColor: K,
                errorIconBgColor: S,
                errorIconBorderColor: S,
                errorDotColor: S,
                stepsNavActiveColor: c,
                stepsProgressSize: v,
                inlineDotSize: 6,
                inlineTitleColor: w,
                inlineTailColor: z,
              });
            return [pn(T)];
          },
          { descriptionWidth: 140 },
        ),
        hn = function (t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              e.indexOf(r) < 0 &&
              (n[r] = t[r]);
          if (t != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var l = 0, r = Object.getOwnPropertySymbols(t);
              l < r.length;
              l++
            )
              e.indexOf(r[l]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[l]) &&
                (n[r[l]] = t[r[l]]);
          return n;
        };
      const Mt = (t) => {
        const {
            percent: e,
            size: n,
            className: r,
            direction: l,
            items: s,
            responsive: v = !0,
            current: g = 0,
            children: m,
          } = t,
          c = hn(t, [
            'percent',
            'size',
            'className',
            'direction',
            'items',
            'responsive',
            'current',
            'children',
          ]),
          { xs: C } = (0, Qt.Z)(v),
          { getPrefixCls: $, direction: w } = o.useContext(Ut.E_),
          b = o.useMemo(() => (v && C ? 'vertical' : l), [C, l]),
          f = $('steps', t.prefixCls),
          [S, Z] = fn(f),
          z = t.type === 'inline',
          L = $('', t.iconPrefix),
          K = _t(s, m),
          T = z ? void 0 : e,
          X = Ze()(
            { [`${f}-rtl`]: w === 'rtl', [`${f}-with-progress`]: T !== void 0 },
            r,
            Z,
          ),
          x = {
            finish: o.createElement(It.Z, { className: `${f}-finish-icon` }),
            error: o.createElement(qe.Z, { className: `${f}-error-icon` }),
          },
          P = (F) => {
            let { node: E, status: G } = F;
            if (G === 'process' && T !== void 0) {
              const k = n === 'small' ? 32 : 40;
              return o.createElement(
                'div',
                { className: `${f}-progress-icon` },
                o.createElement(Jt.Z, {
                  type: 'circle',
                  percent: T,
                  width: k,
                  strokeWidth: 4,
                  format: () => null,
                }),
                E,
              );
            }
            return E;
          },
          I = (F, E) =>
            F.description
              ? o.createElement(Yt.Z, { title: F.description }, E)
              : E;
        return S(
          o.createElement(
            wt,
            Object.assign({ icons: x }, c, {
              current: g,
              size: n,
              items: K,
              itemRender: z ? I : void 0,
              stepIcon: P,
              direction: b,
              prefixCls: f,
              iconPrefix: L,
              className: X,
            }),
          ),
        );
      };
      Mt.Step = wt.Step;
      var Nt = Mt,
        Pt = a(71577),
        Et = a(45598),
        gn = ['onFinish', 'step', 'formRef', 'title', 'stepProps'];
      function Sn(t) {
        var e = (0, o.useRef)(),
          n = (0, o.useContext)(Dt),
          r = t.onFinish,
          l = t.step,
          s = t.formRef,
          v = t.title,
          g = t.stepProps,
          m = (0, B.Z)(t, gn);
        return (
          (0, ye.ET)(
            !m.submitter,
            'StepForm \u4E0D\u5305\u542B\u63D0\u4EA4\u6309\u94AE\uFF0C\u8BF7\u5728 StepsForm \u4E0A',
          ),
          (0, o.useImperativeHandle)(s, function () {
            return e.current;
          }),
          (0, o.useEffect)(function () {
            if (t.name || t.step) {
              var c = (t.name || t.step).toString();
              return (
                n == null || n.regForm(c, t),
                function () {
                  n == null || n.unRegForm(c);
                }
              );
            }
          }, []),
          n &&
            n != null &&
            n.formArrayRef &&
            (n.formArrayRef.current[l || 0] = e),
          (0, u.jsx)(
            ve.I,
            (0, i.Z)(
              {
                formRef: e,
                onFinish: (function () {
                  var c = (0, D.Z)(
                    (0, fe.Z)().mark(function $(w) {
                      var b;
                      return (0, fe.Z)().wrap(function (S) {
                        for (;;)
                          switch ((S.prev = S.next)) {
                            case 0:
                              if (
                                (m.name &&
                                  (n == null || n.onFormFinish(m.name, w)),
                                !r)
                              ) {
                                S.next = 9;
                                break;
                              }
                              return (
                                n == null || n.setLoading(!0),
                                (S.next = 5),
                                r == null ? void 0 : r(w)
                              );
                            case 5:
                              return (
                                (b = S.sent),
                                b && (n == null || n.next()),
                                n == null || n.setLoading(!1),
                                S.abrupt('return')
                              );
                            case 9:
                              (n != null && n.lastStep) ||
                                n == null ||
                                n.next();
                            case 10:
                            case 'end':
                              return S.stop();
                          }
                      }, $);
                    }),
                  );
                  function C($) {
                    return c.apply(this, arguments);
                  }
                  return C;
                })(),
                layout: 'vertical',
              },
              m,
            ),
          )
        );
      }
      var yn = Sn,
        Cn = function (e) {
          return (0, R.Z)({}, e.componentCls, {
            '&-container': {
              width: 'max-content',
              minWidth: '520px',
              maxWidth: '100%',
              margin: 'auto',
            },
            '&-steps-container': (0, R.Z)(
              { maxWidth: '1160px', margin: 'auto' },
              ''.concat(e.antCls, '-steps-vertical'),
              { height: '100%' },
            ),
            '&-step': {
              display: 'none',
              marginBlockStart: '32px',
              '&-active': { display: 'block' },
              '> form': { maxWidth: '100%' },
            },
          });
        };
      function xn(t) {
        return (0, He.Xj)('StepsForm', function (e) {
          var n = (0, i.Z)(
            (0, i.Z)({}, e),
            {},
            { componentCls: '.'.concat(t) },
          );
          return [Cn(n)];
        });
      }
      var $n = [
          'current',
          'onCurrentChange',
          'submitter',
          'stepsFormRender',
          'stepsRender',
          'stepFormRender',
          'stepsProps',
          'onFinish',
          'formProps',
          'containerStyle',
          'formRef',
          'formMapRef',
        ],
        Dt = o.createContext(void 0),
        bn = {
          horizontal: function (e) {
            var n = e.stepsDom,
              r = e.formDom;
            return (0, u.jsxs)(u.Fragment, {
              children: [
                (0, u.jsx)(Be.Z, {
                  gutter: { xs: 8, sm: 16, md: 24 },
                  children: (0, u.jsx)(Pe.Z, { span: 24, children: n }),
                }),
                (0, u.jsx)(Be.Z, {
                  gutter: { xs: 8, sm: 16, md: 24 },
                  children: (0, u.jsx)(Pe.Z, { span: 24, children: r }),
                }),
              ],
            });
          },
          vertical: function (e) {
            var n = e.stepsDom,
              r = e.formDom;
            return (0, u.jsxs)(Be.Z, {
              align: 'stretch',
              wrap: !0,
              gutter: { xs: 8, sm: 16, md: 24 },
              children: [
                (0, u.jsx)(Pe.Z, {
                  xxl: 4,
                  xl: 6,
                  lg: 7,
                  md: 8,
                  sm: 10,
                  xs: 12,
                  children: o.cloneElement(n, { style: { height: '100%' } }),
                }),
                (0, u.jsx)(Pe.Z, {
                  children: (0, u.jsx)('div', {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      height: '100%',
                    },
                    children: r,
                  }),
                }),
              ],
            });
          },
        };
      function Zn(t) {
        var e = (0, o.useContext)(Q.ZP.ConfigContext),
          n = e.getPrefixCls,
          r = n('pro-steps-form'),
          l = xn(r),
          s = l.wrapSSR,
          v = l.hashId,
          g = t.current,
          m = t.onCurrentChange,
          c = t.submitter,
          C = t.stepsFormRender,
          $ = t.stepsRender,
          w = t.stepFormRender,
          b = t.stepsProps,
          f = t.onFinish,
          S = t.formProps,
          Z = t.containerStyle,
          z = t.formRef,
          L = t.formMapRef,
          K = (0, B.Z)(t, $n),
          T = (0, o.useRef)(new Map()),
          X = (0, o.useRef)(new Map()),
          x = (0, o.useRef)([]),
          P = (0, o.useState)([]),
          I = (0, W.Z)(P, 2),
          F = I[0],
          E = I[1],
          G = (0, o.useState)(!1),
          k = (0, W.Z)(G, 2),
          J = k[0],
          j = k[1],
          d = (0, pe.YB)(),
          p = (0, ae.Z)(0, { value: t.current, onChange: t.onCurrentChange }),
          y = (0, W.Z)(p, 2),
          h = y[0],
          Y = y[1],
          _ = (0, o.useMemo)(
            function () {
              return bn[(b == null ? void 0 : b.direction) || 'horizontal'];
            },
            [b == null ? void 0 : b.direction],
          ),
          ce = (0, o.useMemo)(
            function () {
              return h === F.length - 1;
            },
            [F.length, h],
          ),
          M = (0, o.useCallback)(function (N, A) {
            X.current.has(N) ||
              E(function (de) {
                return [].concat((0, Je.Z)(de), [N]);
              }),
              X.current.set(N, A);
          }, []),
          O = (0, o.useCallback)(function (N) {
            E(function (A) {
              return A.filter(function (de) {
                return de !== N;
              });
            }),
              X.current.delete(N),
              T.current.delete(N);
          }, []);
        (0, o.useImperativeHandle)(L, function () {
          return x.current;
        }),
          (0, o.useImperativeHandle)(
            z,
            function () {
              var N;
              return (N = x.current[h || 0]) === null || N === void 0
                ? void 0
                : N.current;
            },
            [h],
          );
        var V = (0, o.useCallback)(
            (function () {
              var N = (0, D.Z)(
                (0, fe.Z)().mark(function A(de, ie) {
                  var ke, St;
                  return (0, fe.Z)().wrap(
                    function (he) {
                      for (;;)
                        switch ((he.prev = he.next)) {
                          case 0:
                            if ((T.current.set(de, ie), !(!ce || !f))) {
                              he.next = 3;
                              break;
                            }
                            return he.abrupt('return');
                          case 3:
                            return (
                              j(!0),
                              (ke = Ne.T.apply(
                                void 0,
                                [{}].concat(
                                  (0, Je.Z)(Array.from(T.current.values())),
                                ),
                              )),
                              (he.prev = 5),
                              (he.next = 8),
                              f(ke)
                            );
                          case 8:
                            (St = he.sent),
                              St &&
                                (Y(0),
                                x.current.forEach(function (or) {
                                  var Ft;
                                  return (Ft = or.current) === null ||
                                    Ft === void 0
                                    ? void 0
                                    : Ft.resetFields();
                                })),
                              (he.next = 15);
                            break;
                          case 12:
                            (he.prev = 12),
                              (he.t0 = he.catch(5)),
                              console.log(he.t0);
                          case 15:
                            return (he.prev = 15), j(!1), he.finish(15);
                          case 18:
                          case 'end':
                            return he.stop();
                        }
                    },
                    A,
                    null,
                    [[5, 12, 15, 18]],
                  );
                }),
              );
              return function (A, de) {
                return N.apply(this, arguments);
              };
            })(),
            [ce, f, j, Y],
          ),
          ee = (0, o.useMemo)(
            function () {
              var N = (0, Le.n)(Fe.Z, '4.24.0') > -1,
                A = N
                  ? {
                      items: F.map(function (de) {
                        var ie = X.current.get(de);
                        return (0,
                        i.Z)({ key: de, title: ie == null ? void 0 : ie.title }, ie == null ? void 0 : ie.stepProps);
                      }),
                    }
                  : {};
              return (0, u.jsx)('div', {
                className: ''.concat(r, '-steps-container ').concat(v),
                style: { maxWidth: Math.min(F.length * 320, 1160) },
                children: (0, u.jsx)(
                  Nt,
                  (0, i.Z)(
                    (0, i.Z)((0, i.Z)({}, b), A),
                    {},
                    {
                      current: h,
                      onChange: void 0,
                      children:
                        !N &&
                        F.map(function (de) {
                          var ie = X.current.get(de);
                          return (0,
                          u.jsx)(Nt.Step, (0, i.Z)({ title: ie == null ? void 0 : ie.title }, ie == null ? void 0 : ie.stepProps), de);
                        }),
                    },
                  ),
                ),
              });
            },
            [F, v, r, h, b],
          ),
          q = (0, U.J)(function () {
            var N,
              A = x.current[h];
            (N = A.current) === null || N === void 0 || N.submit();
          }),
          se = (0, U.J)(function () {
            h < 1 || Y(h - 1);
          }),
          te = (0, o.useMemo)(
            function () {
              return (
                c !== !1 &&
                (0, u.jsx)(
                  Pt.Z,
                  (0, i.Z)(
                    (0, i.Z)(
                      { type: 'primary', loading: J },
                      c == null ? void 0 : c.submitButtonProps,
                    ),
                    {},
                    {
                      onClick: function () {
                        var A;
                        c == null ||
                          (A = c.onSubmit) === null ||
                          A === void 0 ||
                          A.call(c),
                          q();
                      },
                      children: d.getMessage(
                        'stepsForm.next',
                        '\u4E0B\u4E00\u6B65',
                      ),
                    },
                  ),
                  'next',
                )
              );
            },
            [d, J, q, c],
          ),
          re = (0, o.useMemo)(
            function () {
              return (
                c !== !1 &&
                (0, u.jsx)(
                  Pt.Z,
                  (0, i.Z)(
                    (0, i.Z)({}, c == null ? void 0 : c.resetButtonProps),
                    {},
                    {
                      onClick: function () {
                        var A;
                        se(),
                          c == null ||
                            (A = c.onReset) === null ||
                            A === void 0 ||
                            A.call(c);
                      },
                      children: d.getMessage(
                        'stepsForm.prev',
                        '\u4E0A\u4E00\u6B65',
                      ),
                    },
                  ),
                  'pre',
                )
              );
            },
            [d, se, c],
          ),
          Oe = (0, o.useMemo)(
            function () {
              return (
                c !== !1 &&
                (0, u.jsx)(
                  Pt.Z,
                  (0, i.Z)(
                    (0, i.Z)(
                      { type: 'primary', loading: J },
                      c == null ? void 0 : c.submitButtonProps,
                    ),
                    {},
                    {
                      onClick: function () {
                        var A;
                        c == null ||
                          (A = c.onSubmit) === null ||
                          A === void 0 ||
                          A.call(c),
                          q();
                      },
                      children: d.getMessage(
                        'stepsForm.submit',
                        '\u63D0\u4EA4',
                      ),
                    },
                  ),
                  'submit',
                )
              );
            },
            [d, J, q, c],
          ),
          nr = (0, U.J)(function () {
            h > F.length - 2 || Y(h + 1);
          }),
          gt = (0, o.useMemo)(
            function () {
              var N = [],
                A = h || 0;
              if (
                (A < 1
                  ? N.push(te)
                  : A + 1 === F.length
                  ? N.push(re, Oe)
                  : N.push(re, te),
                (N = N.filter(o.isValidElement)),
                c && c.render)
              ) {
                var de,
                  ie = {
                    form:
                      (de = x.current[h]) === null || de === void 0
                        ? void 0
                        : de.current,
                    onSubmit: q,
                    step: h,
                    onPre: se,
                  };
                return c.render(ie, N);
              }
              return c && (c == null ? void 0 : c.render) === !1 ? null : N;
            },
            [F.length, te, q, re, se, h, Oe, c],
          ),
          Ht = (0, o.useMemo)(
            function () {
              return (0, Et.Z)(t.children).map(function (N, A) {
                var de = N.props,
                  ie = de.name || ''.concat(A),
                  ke = h === A,
                  St = ke ? { contentRender: w, submitter: !1 } : {};
                return (0,
                u.jsx)('div', { className: Ze()(''.concat(r, '-step'), v, (0, R.Z)({}, ''.concat(r, '-step-active'), ke)), children: o.cloneElement(N, (0, i.Z)((0, i.Z)((0, i.Z)((0, i.Z)({}, St), S), de), {}, { name: ie, step: A, key: ie })) }, ie);
              });
            },
            [S, v, r, t.children, h, w],
          ),
          Bt = (0, o.useMemo)(
            function () {
              return $
                ? $(
                    F.map(function (N) {
                      var A;
                      return {
                        key: N,
                        title:
                          (A = X.current.get(N)) === null || A === void 0
                            ? void 0
                            : A.title,
                      };
                    }),
                    ee,
                  )
                : ee;
            },
            [F, ee, $],
          ),
          Vt = (0, o.useMemo)(
            function () {
              return (0, u.jsxs)('div', {
                className: ''.concat(r, '-container ').concat(v),
                style: Z,
                children: [Ht, C ? null : (0, u.jsx)(Ye.Z, { children: gt })],
              });
            },
            [Z, Ht, v, r, C, gt],
          ),
          rr = (0, o.useMemo)(
            function () {
              var N = { stepsDom: Bt, formDom: Vt };
              return C ? C(_(N), gt) : _(N);
            },
            [Bt, Vt, _, C, gt],
          );
        return s(
          (0, u.jsx)('div', {
            className: Ze()(r, v),
            children: (0, u.jsx)(
              $e.Z.Provider,
              (0, i.Z)(
                (0, i.Z)({}, K),
                {},
                {
                  children: (0, u.jsx)(Dt.Provider, {
                    value: {
                      loading: J,
                      setLoading: j,
                      regForm: M,
                      keyArray: F,
                      next: nr,
                      formArrayRef: x,
                      formMapRef: X,
                      lastStep: ce,
                      unRegForm: O,
                      onFormFinish: V,
                    },
                    children: rr,
                  }),
                },
              ),
            ),
          }),
        );
      }
      function ht(t) {
        return (0, u.jsx)(pe._Y, {
          needDeps: !0,
          children: (0, u.jsx)(Zn, (0, i.Z)({}, t)),
        });
      }
      (ht.StepForm = yn), (ht.useForm = $e.Z.useForm);
      var In = ['steps', 'columns', 'forceUpdate', 'grid'],
        Pn = function (e) {
          var n = e.steps,
            r = e.columns,
            l = e.forceUpdate,
            s = e.grid,
            v = (0, B.Z)(e, In),
            g = (0, ge.d)(v),
            m = (0, o.useCallback)(
              function (C) {
                var $, w;
                ($ = (w = g.current).onCurrentChange) === null ||
                  $ === void 0 ||
                  $.call(w, C),
                  l([]);
              },
              [l, g],
            ),
            c = (0, o.useMemo)(
              function () {
                return n == null
                  ? void 0
                  : n.map(function (C, $) {
                      return (0,
                      o.createElement)(Lt, (0, i.Z)((0, i.Z)({ grid: s }, C), {}, { key: $, layoutType: 'StepForm', columns: r[$] }));
                    });
              },
              [r, s, n],
            );
          return (0, u.jsx)(
            ht,
            (0, i.Z)((0, i.Z)({}, v), {}, { onCurrentChange: m, children: c }),
          );
        },
        Fn = Pn,
        Rn = function (e) {
          var n = e.children;
          return (0, u.jsx)(u.Fragment, { children: n });
        },
        Tn = Rn,
        jn = a(97462),
        wn = function (e, n) {
          var r = n.genItems;
          if (e.valueType === 'dependency') {
            var l,
              s,
              v,
              g =
                (l = e.getFieldProps) === null || l === void 0
                  ? void 0
                  : l.call(e);
            return (
              (0, ye.ET)(
                Array.isArray(
                  (s = e.name) !== null && s !== void 0
                    ? s
                    : g == null
                    ? void 0
                    : g.name,
                ),
                'SchemaForm: fieldProps.name should be NamePath[] when valueType is "dependency"',
              ),
              (0, ye.ET)(
                typeof e.columns == 'function',
                'SchemaForm: columns should be a function when valueType is "dependency"',
              ),
              Array.isArray(
                (v = e.name) !== null && v !== void 0
                  ? v
                  : g == null
                  ? void 0
                  : g.name,
              )
                ? (0, o.createElement)(
                    jn.Z,
                    (0, i.Z)((0, i.Z)({ name: e.name }, g), {}, { key: e.key }),
                    function (m) {
                      return !e.columns || typeof e.columns != 'function'
                        ? null
                        : r(e.columns(m));
                    },
                  )
                : null
            );
          }
          return !0;
        },
        zn = a(96074),
        Mn = function (e) {
          if (e.valueType === 'divider') {
            var n;
            return (0, o.createElement)(
              zn.Z,
              (0, i.Z)(
                (0, i.Z)(
                  {},
                  (n = e.getFieldProps) === null || n === void 0
                    ? void 0
                    : n.call(e),
                ),
                {},
                { key: e.key },
              ),
            );
          }
          return !0;
        },
        Ot = a(63464),
        Nn = function (e, n) {
          var r = n.action,
            l = n.formRef,
            s = n.type,
            v = n.originItem,
            g = (0, i.Z)(
              (0, i.Z)(
                {},
                (0, we.Z)(e, [
                  'dataIndex',
                  'width',
                  'render',
                  'renderFormItem',
                  'renderText',
                  'title',
                ]),
              ),
              {},
              {
                name: e.dataIndex,
                width: e.width,
                render:
                  e != null && e.render
                    ? function ($, w, b) {
                        var f, S, Z;
                        return e == null ||
                          (f = e.render) === null ||
                          f === void 0
                          ? void 0
                          : f.call(
                              e,
                              $,
                              w,
                              b,
                              r == null ? void 0 : r.current,
                              (0, i.Z)(
                                (0, i.Z)({ type: s }, e),
                                {},
                                {
                                  formItemProps:
                                    (S = e.getFormItemProps) === null ||
                                    S === void 0
                                      ? void 0
                                      : S.call(e),
                                  fieldProps:
                                    (Z = e.getFieldProps) === null ||
                                    Z === void 0
                                      ? void 0
                                      : Z.call(e),
                                },
                              ),
                            );
                      }
                    : void 0,
              },
            ),
            m = function () {
              return (0, u.jsx)(
                Ot.Z,
                (0, i.Z)((0, i.Z)({}, g), {}, { ignoreFormItem: !0 }),
              );
            },
            c =
              e != null && e.renderFormItem
                ? function ($, w) {
                    var b,
                      f,
                      S,
                      Z = (0, je.Y)(
                        (0, i.Z)((0, i.Z)({}, w), {}, { onChange: void 0 }),
                      );
                    return e == null ||
                      (b = e.renderFormItem) === null ||
                      b === void 0
                      ? void 0
                      : b.call(
                          e,
                          (0, i.Z)(
                            (0, i.Z)({ type: s }, e),
                            {},
                            {
                              formItemProps:
                                (f = e.getFormItemProps) === null ||
                                f === void 0
                                  ? void 0
                                  : f.call(e),
                              fieldProps:
                                (S = e.getFieldProps) === null || S === void 0
                                  ? void 0
                                  : S.call(e),
                              originProps: v,
                            },
                          ),
                          (0, i.Z)(
                            (0, i.Z)({}, Z),
                            {},
                            { defaultRender: m, type: s },
                          ),
                          l.current,
                        );
                  }
                : void 0;
          if (e != null && e.renderFormItem) {
            var C = c == null ? void 0 : c(null, {});
            if (!C || e.ignoreFormItem) return C;
          }
          return (0, o.createElement)(
            Ot.Z,
            (0, i.Z)(
              (0, i.Z)({}, g),
              {},
              { key: [e.key, e.index || 0].join('-'), renderFormItem: c },
            ),
          );
        },
        En = a(27645),
        Dn = function (e, n) {
          var r = n.genItems;
          if (e.valueType === 'formList' && e.dataIndex) {
            var l, s;
            return !e.columns || !Array.isArray(e.columns)
              ? null
              : (0, o.createElement)(
                  En.u,
                  (0, i.Z)(
                    (0, i.Z)(
                      {},
                      (l = e.getFormItemProps) === null || l === void 0
                        ? void 0
                        : l.call(e),
                    ),
                    {},
                    {
                      key: e.key,
                      name: e.dataIndex,
                      label: e.label,
                      initialValue: e.initialValue,
                      colProps: e.colProps,
                      rowProps: e.rowProps,
                    },
                    (s = e.getFieldProps) === null || s === void 0
                      ? void 0
                      : s.call(e),
                  ),
                  r(e.columns),
                );
          }
          return !0;
        },
        On = a(69677),
        Wn = a(90789),
        Ln = a(2514),
        Hn = [
          'children',
          'value',
          'valuePropName',
          'onChange',
          'fieldProps',
          'space',
          'type',
          'transform',
          'convertValue',
        ],
        Bn = ['children', 'space', 'valuePropName'],
        Vn = { space: Ye.Z, group: On.Z.Group };
      function An(t) {
        var e = arguments.length <= 1 ? void 0 : arguments[1];
        return e && e.target && t in e.target ? e.target[t] : e;
      }
      var Xn = function (e) {
          var n = e.children,
            r = e.value,
            l = r === void 0 ? [] : r,
            s = e.valuePropName,
            v = e.onChange,
            g = e.fieldProps,
            m = e.space,
            c = e.type,
            C = c === void 0 ? 'space' : c,
            $ = e.transform,
            w = e.convertValue,
            b = (0, B.Z)(e, Hn),
            f = (0, U.J)(function (x, P) {
              var I,
                F = (0, Je.Z)(l);
              (F[P] = An(s || 'value', x)),
                v == null || v(F),
                g == null ||
                  (I = g.onChange) === null ||
                  I === void 0 ||
                  I.call(g, F);
            }),
            S = -1,
            Z = (0, Et.Z)(n).map(function (x) {
              if (o.isValidElement(x)) {
                var P, I, F;
                S += 1;
                var E = S,
                  G =
                    (x == null || (P = x.type) === null || P === void 0
                      ? void 0
                      : P.displayName) === 'ProFormComponent' ||
                    (x == null || (I = x.props) === null || I === void 0
                      ? void 0
                      : I.readonly),
                  k = G
                    ? (0, i.Z)(
                        (0, i.Z)({ key: E, ignoreFormItem: !0 }, x.props || {}),
                        {},
                        {
                          fieldProps: (0, i.Z)(
                            (0, i.Z)(
                              {},
                              x == null ||
                                (F = x.props) === null ||
                                F === void 0
                                ? void 0
                                : F.fieldProps,
                            ),
                            {},
                            {
                              onChange: function () {
                                f(
                                  arguments.length <= 0 ? void 0 : arguments[0],
                                  E,
                                );
                              },
                            },
                          ),
                          value: l == null ? void 0 : l[E],
                          onChange: void 0,
                        },
                      )
                    : (0, i.Z)(
                        (0, i.Z)({ key: E }, x.props || {}),
                        {},
                        {
                          value: l == null ? void 0 : l[E],
                          onChange: function (j) {
                            var d, p;
                            f(j, E),
                              (d = (p = x.props).onChange) === null ||
                                d === void 0 ||
                                d.call(p, j);
                          },
                        },
                      );
                return o.cloneElement(x, k);
              }
              return x;
            }),
            z = Vn[C],
            L = (0, Ln.zx)(b),
            K = L.RowWrapper,
            T = (0, o.useMemo)(
              function () {
                return (0, i.Z)({}, C === 'group' ? { compact: !0 } : {});
              },
              [C],
            ),
            X = (0, o.useCallback)(
              function (x) {
                var P = x.children;
                return (0, u.jsx)(
                  z,
                  (0, i.Z)(
                    (0, i.Z)((0, i.Z)({}, T), m),
                    {},
                    { align: 'start', children: P },
                  ),
                );
              },
              [z, m, T],
            );
          return (0, u.jsx)(K, { Wrapper: X, children: Z });
        },
        Gn = o.forwardRef(function (t, e) {
          var n = t.children,
            r = t.space,
            l = t.valuePropName,
            s = (0, B.Z)(t, Bn);
          return (
            (0, o.useImperativeHandle)(e, function () {
              return {};
            }),
            (0, u.jsx)(
              Xn,
              (0, i.Z)(
                (0, i.Z)(
                  (0, i.Z)({ space: r, valuePropName: l }, s.fieldProps),
                  {},
                  { onChange: void 0 },
                  s,
                ),
                {},
                { children: n },
              ),
            )
          );
        }),
        Kn = (0, Wn.G)(Gn),
        Yn = Kn,
        Un = function (e, n) {
          var r = n.genItems;
          if (e.valueType === 'formSet' && e.dataIndex) {
            var l, s;
            return !e.columns || !Array.isArray(e.columns)
              ? null
              : (0, o.createElement)(
                  Yn,
                  (0, i.Z)(
                    (0, i.Z)(
                      {},
                      (l = e.getFormItemProps) === null || l === void 0
                        ? void 0
                        : l.call(e),
                    ),
                    {},
                    {
                      key: e.key,
                      initialValue: e.initialValue,
                      name: e.dataIndex,
                      label: e.label,
                      colProps: e.colProps,
                      rowProps: e.rowProps,
                    },
                    (s = e.getFieldProps) === null || s === void 0
                      ? void 0
                      : s.call(e),
                  ),
                  r(e.columns),
                );
          }
          return !0;
        },
        Qn = Ie.A.Group,
        Jn = function (e, n) {
          var r = n.genItems;
          if (e.valueType === 'group') {
            var l;
            return !e.columns || !Array.isArray(e.columns)
              ? null
              : (0, u.jsx)(
                  Qn,
                  (0, i.Z)(
                    (0, i.Z)(
                      {
                        label: e.label,
                        colProps: e.colProps,
                        rowProps: e.rowProps,
                      },
                      (l = e.getFieldProps) === null || l === void 0
                        ? void 0
                        : l.call(e),
                    ),
                    {},
                    { children: r(e.columns) },
                  ),
                  e.key,
                );
          }
          return !0;
        },
        qn = function (e) {
          return e.valueType &&
            typeof e.valueType == 'string' &&
            ['index', 'indexBorder', 'option'].includes(
              e == null ? void 0 : e.valueType,
            )
            ? null
            : !0;
        },
        Wt = [qn, Jn, Dn, Un, Mn, wn],
        kn = function (e, n) {
          for (var r = 0; r < Wt.length; r++) {
            var l = Wt[r],
              s = l(e, n);
            if (s !== !0) return s;
          }
          return Nn(e, n);
        },
        _n = ['columns', 'layoutType', 'type', 'action', 'shouldUpdate'],
        er = {
          DrawerForm: H,
          QueryFilter: Zt,
          LightFilter: yt,
          StepForm: ht.StepForm,
          StepsForm: Fn,
          ModalForm: it.Y,
          Embed: Tn,
        };
      function tr(t) {
        var e = t.columns,
          n = t.layoutType,
          r = n === void 0 ? 'Form' : n,
          l = t.type,
          s = l === void 0 ? 'form' : l,
          v = t.action,
          g = t.shouldUpdate,
          m = g === void 0 ? !0 : g,
          c = (0, B.Z)(t, _n),
          C = er[r] || Ie.A,
          $ = $e.Z.useForm(),
          w = (0, W.Z)($, 1),
          b = w[0],
          f = $e.Z.useFormInstance(),
          S = (0, o.useState)([]),
          Z = (0, W.Z)(S, 2),
          z = Z[1],
          L = (0, o.useState)([]),
          K = (0, W.Z)(L, 2),
          T = K[0],
          X = K[1],
          x = (0, o.useMemo)(
            function () {
              return (0, we.Z)(c, ['formRef']);
            },
            [c],
          ),
          P = (0, o.useRef)(t.form || f || b),
          I = (0, o.useRef)(),
          F = (0, ge.d)(t);
        (0, o.useImperativeHandle)(c.formRef, function () {
          return P.current;
        });
        var E = (0, o.useCallback)(
            function (j) {
              return j
                .filter(function (d) {
                  return !(d.hideInForm && s === 'form');
                })
                .sort(function (d, p) {
                  return p.order || d.order
                    ? (p.order || 0) - (d.order || 0)
                    : (p.index || 0) - (d.index || 0);
                })
                .map(function (d, p) {
                  var y,
                    h = (0, xe.h)(
                      d.title,
                      d,
                      'form',
                      (0, u.jsx)(We.G, {
                        label: d.title,
                        tooltip: d.tooltip || d.tip,
                      }),
                    ),
                    Y = (0, je.Y)({
                      title: h,
                      label: h,
                      name: d.name,
                      valueType: (0, xe.h)(d.valueType, {}),
                      key: d.key,
                      columns: d.columns,
                      valueEnum: d.valueEnum,
                      dataIndex: d.key || d.dataIndex,
                      initialValue: d.initialValue,
                      width: d.width,
                      index: d.index,
                      readonly: d.readonly,
                      colSize: d.colSize,
                      colProps: d.colProps,
                      rowProps: d.rowProps,
                      className: d.className,
                      tooltip: d.tooltip || d.tip,
                      dependencies: d.dependencies,
                      proFieldProps: d.proFieldProps,
                      ignoreFormItem: d.ignoreFormItem,
                      getFieldProps: d.fieldProps
                        ? function () {
                            return (0, xe.h)(d.fieldProps, P.current, d);
                          }
                        : void 0,
                      getFormItemProps: d.formItemProps
                        ? function () {
                            return (0, xe.h)(d.formItemProps, P.current, d);
                          }
                        : void 0,
                      render: d.render,
                      renderFormItem: d.renderFormItem,
                      renderText: d.renderText,
                      request: d.request,
                      params: d.params,
                      transform: d.transform,
                      convertValue: d.convertValue,
                    });
                  return (
                    (Y.key =
                      Y.key ||
                      ((y = Y.dataIndex) === null || y === void 0
                        ? void 0
                        : y.toString()) ||
                      p),
                    kn(Y, {
                      action: v,
                      type: s,
                      originItem: d,
                      formRef: P,
                      genItems: E,
                    })
                  );
                })
                .filter(function (d) {
                  return Boolean(d);
                });
            },
            [v, P, s],
          ),
          G = (0, o.useCallback)(
            function (j, d) {
              var p = F.current.onValuesChange;
              (m === !0 || (typeof m == 'function' && m(d, I.current))) &&
                X([]),
                (I.current = d),
                p == null || p(j, d);
            },
            [F, m],
          ),
          k = (0, o.useMemo)(
            function () {
              if (P.current && !(e.length && Array.isArray(e[0]))) return E(e);
            },
            [e, E, T],
          ),
          J = (0, o.useMemo)(
            function () {
              return r === 'StepsForm' ? { forceUpdate: z, columns: e } : {};
            },
            [e, r],
          );
        return (0, u.jsx)(
          C,
          (0, i.Z)(
            (0, i.Z)((0, i.Z)({}, J), x),
            {},
            { form: t.form || b, formRef: P, onValuesChange: G, children: k },
          ),
        );
      }
      var Lt = tr;
    },
    97269: function (_e, Te, a) {
      a.d(Te, {
        A: function () {
          return ve;
        },
      });
      var i = a(1413),
        W = a(85893),
        B = a(80442),
        u = a(89671),
        ge = a(4942),
        xe = a(97685),
        We = a(18073),
        je = a(60869),
        $e = a(81736),
        we = a(58720),
        o = a(26713),
        fe = a(94184),
        D = a.n(fe),
        U = a(67294),
        Se = a(66758),
        Q = a(2514),
        oe = a(14855),
        ue = function (H) {
          var R;
          return (0, ge.Z)({}, H.componentCls, {
            '&-title': { marginBlockEnd: H.marginXL, fontWeight: 'bold' },
            '&-container': (0, ge.Z)(
              { flexWrap: 'wrap', maxWidth: '100%' },
              '> div'.concat(H.antCls, '-space-item'),
              { maxWidth: '100%' },
            ),
            '&-twoLine':
              ((R = { display: 'block', width: '100%' }),
              (0, ge.Z)(R, ''.concat(H.componentCls, '-title'), {
                width: '100%',
                margin: '8px 0',
              }),
              (0, ge.Z)(R, ''.concat(H.componentCls, '-container'), {
                paddingInlineStart: 16,
              }),
              (0, ge.Z)(
                R,
                ''
                  .concat(H.antCls, '-space-item,')
                  .concat(H.antCls, '-form-item'),
                { width: '100%' },
              ),
              (0, ge.Z)(R, ''.concat(H.antCls, '-form-item'), {
                '&-control': {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  '&-input': {
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    '&-content': { flex: 'none' },
                  },
                },
              }),
              R),
          });
        };
      function le(me) {
        return (0, oe.Xj)('ProFormGroup', function (H) {
          var R = (0, i.Z)(
            (0, i.Z)({}, H),
            {},
            { componentCls: '.'.concat(me) },
          );
          return [ue(R)];
        });
      }
      var ae = U.forwardRef(function (me, H) {
        var R = U.useContext(Se.Z),
          be = R.groupProps,
          ne = (0, i.Z)((0, i.Z)({}, be), me),
          Ce = ne.children,
          Re = ne.collapsible,
          Me = ne.defaultCollapsed,
          pe = ne.style,
          Xe = ne.labelLayout,
          et = ne.title,
          Ge = et === void 0 ? me.label : et,
          Ze = ne.tooltip,
          He = ne.align,
          tt = He === void 0 ? 'start' : He,
          nt = ne.direction,
          rt = ne.size,
          ot = rt === void 0 ? 32 : rt,
          yt = ne.titleStyle,
          it = ne.titleRender,
          Ie = ne.spaceProps,
          Ke = ne.extra,
          Pe = ne.autoFocus,
          Be = (0, je.Z)(
            function () {
              return Me || !1;
            },
            { value: me.collapsed, onChange: me.onCollapse },
          ),
          lt = (0, xe.Z)(Be, 2),
          Ve = lt[0],
          Ct = lt[1],
          Ye = (0, U.useContext)(we.ZP.ConfigContext),
          xt = Ye.getPrefixCls,
          at = (0, Q.zx)(me),
          $t = at.ColWrapper,
          st = at.RowWrapper,
          Ee = xt('pro-form-group'),
          ct = le(Ee),
          Ue = ct.wrapSSR,
          De = ct.hashId,
          dt =
            Re &&
            (0, W.jsx)(We.Z, {
              style: { marginInlineEnd: 8 },
              rotate: Ve ? void 0 : 90,
            }),
          Qe = (0, W.jsx)($e.G, {
            label: dt ? (0, W.jsxs)('div', { children: [dt, Ge] }) : Ge,
            tooltip: Ze,
          }),
          ut = (0, U.useCallback)(
            function (Ne) {
              var Le = Ne.children;
              return (0, W.jsx)(
                o.Z,
                (0, i.Z)(
                  (0, i.Z)({}, Ie),
                  {},
                  {
                    className: D()(
                      ''.concat(Ee, '-container ').concat(De),
                      Ie == null ? void 0 : Ie.className,
                    ),
                    size: ot,
                    align: tt,
                    direction: nt,
                    style: (0, i.Z)(
                      { rowGap: 0 },
                      Ie == null ? void 0 : Ie.style,
                    ),
                    children: Le,
                  },
                ),
              );
            },
            [tt, Ee, nt, De, ot, Ie],
          ),
          vt = it ? it(Qe, me) : Qe,
          bt = (0, U.useMemo)(
            function () {
              var Ne = [],
                Le = U.Children.toArray(Ce).map(function (Fe, It) {
                  var qe;
                  return U.isValidElement(Fe) &&
                    !(
                      Fe == null ||
                      (qe = Fe.props) === null ||
                      qe === void 0
                    ) &&
                    qe.hidden
                    ? (Ne.push(Fe), null)
                    : It === 0 && U.isValidElement(Fe) && Pe
                    ? U.cloneElement(
                        Fe,
                        (0, i.Z)((0, i.Z)({}, Fe.props), {}, { autoFocus: Pe }),
                      )
                    : Fe;
                });
              return [
                (0, W.jsx)(st, { Wrapper: ut, children: Le }, 'children'),
                Ne.length > 0
                  ? (0, W.jsx)('div', {
                      style: { display: 'none' },
                      children: Ne,
                    })
                  : null,
              ];
            },
            [Ce, st, ut, Pe],
          ),
          mt = (0, xe.Z)(bt, 2),
          Zt = mt[0],
          Je = mt[1];
        return Ue(
          (0, W.jsx)($t, {
            children: (0, W.jsxs)('div', {
              className: D()(
                Ee,
                De,
                (0, ge.Z)({}, ''.concat(Ee, '-twoLine'), Xe === 'twoLine'),
              ),
              style: pe,
              ref: H,
              children: [
                Je,
                (Ge || Ze || Ke) &&
                  (0, W.jsx)('div', {
                    className: ''.concat(Ee, '-title ').concat(De),
                    style: yt,
                    onClick: function () {
                      Ct(!Ve);
                    },
                    children: Ke
                      ? (0, W.jsxs)('div', {
                          style: {
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          },
                          children: [
                            vt,
                            (0, W.jsx)('span', {
                              onClick: function (Le) {
                                return Le.stopPropagation();
                              },
                              children: Ke,
                            }),
                          ],
                        })
                      : vt,
                  }),
                (0, W.jsx)('div', {
                  style: { display: Re && Ve ? 'none' : void 0 },
                  children: Zt,
                }),
              ],
            }),
          }),
        );
      });
      ae.displayName = 'ProForm-Group';
      var ye = ae,
        ze = a(62370);
      function ve(me) {
        return (0, W.jsx)(
          u.I,
          (0, i.Z)(
            {
              layout: 'vertical',
              submitter: {
                render: function (R, be) {
                  return be.reverse();
                },
              },
              contentRender: function (R, be) {
                return (0, W.jsxs)(W.Fragment, { children: [R, be] });
              },
            },
            me,
          ),
        );
      }
      (ve.Group = ye),
        (ve.useForm = B.Z.useForm),
        (ve.Item = ze.Z),
        (ve.useWatch = B.Z.useWatch),
        (ve.ErrorList = B.Z.ErrorList),
        (ve.Provider = B.Z.Provider),
        (ve.useFormInstance = B.Z.useFormInstance);
    },
    81736: function (_e, Te, a) {
      a.d(Te, {
        G: function () {
          return oe;
        },
      });
      var i = a(1413),
        W = a(4942),
        B = a(85893),
        u = a(67294),
        ge = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
                },
              },
              {
                tag: 'path',
                attrs: {
                  d: 'M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z',
                },
              },
            ],
          },
          name: 'info-circle',
          theme: 'outlined',
        },
        xe = ge,
        We = a(84089),
        je = function (le, ae) {
          return u.createElement(
            We.Z,
            (0, i.Z)((0, i.Z)({}, le), {}, { ref: ae, icon: xe }),
          );
        };
      je.displayName = 'InfoCircleOutlined';
      var $e = u.forwardRef(je),
        we = a(58720),
        o = a(83062),
        fe = a(94184),
        D = a.n(fe),
        U = a(14855),
        Se = function (le) {
          return (0, W.Z)({}, le.componentCls, {
            display: 'inline-flex',
            alignItems: 'center',
            maxWidth: '100%',
            '&-icon': {
              display: 'block',
              marginInlineStart: '4px',
              cursor: 'pointer',
              '&:hover': { color: le.colorPrimary },
            },
            '&-title': { display: 'inline-flex', flex: '1' },
            '&-subtitle ': {
              marginInlineStart: 8,
              color: le.colorTextSecondary,
              fontWeight: 'normal',
              fontSize: le.fontSize,
              whiteSpace: 'nowrap',
            },
            '&-title-ellipsis': {
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              wordBreak: 'keep-all',
            },
          });
        };
      function Q(ue) {
        return (0, U.Xj)('LabelIconTip', function (le) {
          var ae = (0, i.Z)(
            (0, i.Z)({}, le),
            {},
            { componentCls: '.'.concat(ue) },
          );
          return [Se(ae)];
        });
      }
      var oe = u.memo(function (ue) {
        var le = ue.label,
          ae = ue.tooltip,
          ye = ue.ellipsis,
          ze = ue.subTitle,
          ve = (0, u.useContext)(we.ZP.ConfigContext),
          me = ve.getPrefixCls,
          H = me('pro-core-label-tip'),
          R = Q(H),
          be = R.wrapSSR,
          ne = R.hashId;
        if (!ae && !ze) return (0, B.jsx)(B.Fragment, { children: le });
        var Ce =
            typeof ae == 'string' || u.isValidElement(ae) ? { title: ae } : ae,
          Re = (Ce == null ? void 0 : Ce.icon) || (0, B.jsx)($e, {});
        return be(
          (0, B.jsxs)('div', {
            className: D()(H, ne),
            onMouseDown: function (pe) {
              return pe.stopPropagation();
            },
            onMouseLeave: function (pe) {
              return pe.stopPropagation();
            },
            onMouseMove: function (pe) {
              return pe.stopPropagation();
            },
            children: [
              (0, B.jsx)('div', {
                className: D()(
                  ''.concat(H, '-title'),
                  ne,
                  (0, W.Z)({}, ''.concat(H, '-title-ellipsis'), ye),
                ),
                children: le,
              }),
              ze &&
                (0, B.jsx)('div', {
                  className: ''.concat(H, '-subtitle ').concat(ne),
                  children: ze,
                }),
              ae &&
                (0, B.jsx)(
                  o.Z,
                  (0, i.Z)(
                    (0, i.Z)({}, Ce),
                    {},
                    {
                      children: (0, B.jsx)('span', {
                        className: ''.concat(H, '-icon ').concat(ne),
                        children: Re,
                      }),
                    },
                  ),
                ),
            ],
          }),
        );
      });
    },
    28700: function (_e, Te, a) {
      a.d(Te, {
        v: function () {
          return i;
        },
      });
      var i = function (B) {
        if (B && B !== !0) return B;
      };
    },
    96074: function (_e, Te, a) {
      a.d(Te, {
        Z: function () {
          return fe;
        },
      });
      var i = a(94184),
        W = a.n(i),
        B = a(67294),
        u = a(53124),
        ge = a(67968),
        xe = a(45503),
        We = a(14747);
      const je = (D) => {
        const {
          componentCls: U,
          sizePaddingEdgeHorizontal: Se,
          colorSplit: Q,
          lineWidth: oe,
        } = D;
        return {
          [U]: Object.assign(Object.assign({}, (0, We.Wf)(D)), {
            borderBlockStart: `${oe}px solid ${Q}`,
            '&-vertical': {
              position: 'relative',
              top: '-0.06em',
              display: 'inline-block',
              height: '0.9em',
              margin: `0 ${D.dividerVerticalGutterMargin}px`,
              verticalAlign: 'middle',
              borderTop: 0,
              borderInlineStart: `${oe}px solid ${Q}`,
            },
            '&-horizontal': {
              display: 'flex',
              clear: 'both',
              width: '100%',
              minWidth: '100%',
              margin: `${D.dividerHorizontalGutterMargin}px 0`,
            },
            '&-horizontal&-with-text': {
              display: 'flex',
              alignItems: 'center',
              margin: `${D.dividerHorizontalWithTextGutterMargin}px 0`,
              color: D.colorTextHeading,
              fontWeight: 500,
              fontSize: D.fontSizeLG,
              whiteSpace: 'nowrap',
              textAlign: 'center',
              borderBlockStart: `0 ${Q}`,
              '&::before, &::after': {
                position: 'relative',
                width: '50%',
                borderBlockStart: `${oe}px solid transparent`,
                borderBlockStartColor: 'inherit',
                borderBlockEnd: 0,
                transform: 'translateY(50%)',
                content: "''",
              },
            },
            '&-horizontal&-with-text-left': {
              '&::before': { width: '5%' },
              '&::after': { width: '95%' },
            },
            '&-horizontal&-with-text-right': {
              '&::before': { width: '95%' },
              '&::after': { width: '5%' },
            },
            [`${U}-inner-text`]: { display: 'inline-block', padding: '0 1em' },
            '&-dashed': {
              background: 'none',
              borderColor: Q,
              borderStyle: 'dashed',
              borderWidth: `${oe}px 0 0`,
            },
            '&-horizontal&-with-text&-dashed': {
              '&::before, &::after': { borderStyle: 'dashed none none' },
            },
            '&-vertical&-dashed': {
              borderInlineStart: oe,
              borderInlineEnd: 0,
              borderBlockStart: 0,
              borderBlockEnd: 0,
            },
            '&-plain&-with-text': {
              color: D.colorText,
              fontWeight: 'normal',
              fontSize: D.fontSize,
            },
            '&-horizontal&-with-text-left&-no-default-orientation-margin-left':
              {
                '&::before': { width: 0 },
                '&::after': { width: '100%' },
                [`${U}-inner-text`]: { paddingInlineStart: Se },
              },
            '&-horizontal&-with-text-right&-no-default-orientation-margin-right':
              {
                '&::before': { width: '100%' },
                '&::after': { width: 0 },
                [`${U}-inner-text`]: { paddingInlineEnd: Se },
              },
          }),
        };
      };
      var $e = (0, ge.Z)(
          'Divider',
          (D) => {
            const U = (0, xe.TS)(D, {
              dividerVerticalGutterMargin: D.marginXS,
              dividerHorizontalWithTextGutterMargin: D.margin,
              dividerHorizontalGutterMargin: D.marginLG,
            });
            return [je(U)];
          },
          { sizePaddingEdgeHorizontal: 0 },
        ),
        we = function (D, U) {
          var Se = {};
          for (var Q in D)
            Object.prototype.hasOwnProperty.call(D, Q) &&
              U.indexOf(Q) < 0 &&
              (Se[Q] = D[Q]);
          if (D != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var oe = 0, Q = Object.getOwnPropertySymbols(D);
              oe < Q.length;
              oe++
            )
              U.indexOf(Q[oe]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(D, Q[oe]) &&
                (Se[Q[oe]] = D[Q[oe]]);
          return Se;
        },
        fe = (D) => {
          const { getPrefixCls: U, direction: Se } = B.useContext(u.E_),
            {
              prefixCls: Q,
              type: oe = 'horizontal',
              orientation: ue = 'center',
              orientationMargin: le,
              className: ae,
              children: ye,
              dashed: ze,
              plain: ve,
            } = D,
            me = we(D, [
              'prefixCls',
              'type',
              'orientation',
              'orientationMargin',
              'className',
              'children',
              'dashed',
              'plain',
            ]),
            H = U('divider', Q),
            [R, be] = $e(H),
            ne = ue.length > 0 ? `-${ue}` : ue,
            Ce = !!ye,
            Re = ue === 'left' && le != null,
            Me = ue === 'right' && le != null,
            pe = W()(
              H,
              be,
              `${H}-${oe}`,
              {
                [`${H}-with-text`]: Ce,
                [`${H}-with-text${ne}`]: Ce,
                [`${H}-dashed`]: !!ze,
                [`${H}-plain`]: !!ve,
                [`${H}-rtl`]: Se === 'rtl',
                [`${H}-no-default-orientation-margin-left`]: Re,
                [`${H}-no-default-orientation-margin-right`]: Me,
              },
              ae,
            ),
            Xe = Object.assign(
              Object.assign({}, Re && { marginLeft: le }),
              Me && { marginRight: le },
            );
          return R(
            B.createElement(
              'div',
              Object.assign({ className: pe }, me, { role: 'separator' }),
              ye &&
                oe !== 'vertical' &&
                B.createElement(
                  'span',
                  { className: `${H}-inner-text`, style: Xe },
                  ye,
                ),
            ),
          );
        };
    },
  },
]);

//# sourceMappingURL=196.6d31d114.async.js.map
