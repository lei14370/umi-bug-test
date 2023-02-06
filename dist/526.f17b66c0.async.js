(self.webpackChunk = self.webpackChunk || []).push([
  [526],
  {
    54215: function (V, A, f) {
      'use strict';
      f.d(A, {
        vY: function () {
          return br;
        },
      });
      var x = f(74902),
        T = f(74165),
        C = f(15861),
        g = f(91),
        h = f(1413),
        d = f(67294),
        u = f(85893),
        w = f(97937),
        r = f(63606),
        a = f(86548),
        o = f(952),
        n = f(63464),
        e = f(21687),
        i = f(94184),
        s = f.n(i),
        c = f(98423),
        m = f(53124),
        S = f(97647),
        y = f(49502),
        j = function (t, l) {
          var p = {};
          for (var v in t)
            Object.prototype.hasOwnProperty.call(t, v) &&
              l.indexOf(v) < 0 &&
              (p[v] = t[v]);
          if (t != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var b = 0, v = Object.getOwnPropertySymbols(t);
              b < v.length;
              b++
            )
              l.indexOf(v[b]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, v[b]) &&
                (p[v[b]] = t[v[b]]);
          return p;
        },
        R = (t) => {
          var { prefixCls: l, className: p, hoverable: v = !0 } = t,
            b = j(t, ['prefixCls', 'className', 'hoverable']);
          const { getPrefixCls: E } = d.useContext(m.E_),
            $ = E('card', l),
            z = s()(`${$}-grid`, p, { [`${$}-grid-hoverable`]: v });
          return d.createElement('div', Object.assign({}, b, { className: z }));
        },
        k = f(67968),
        O = f(45503),
        q = f(14747);
      const B = (t) => {
          const {
            antCls: l,
            componentCls: p,
            cardHeadHeight: v,
            cardPaddingBase: b,
            cardHeadTabsMarginBottom: E,
          } = t;
          return Object.assign(
            Object.assign(
              {
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                minHeight: v,
                marginBottom: -1,
                padding: `0 ${b}px`,
                color: t.colorTextHeading,
                fontWeight: t.fontWeightStrong,
                fontSize: t.fontSizeLG,
                background: 'transparent',
                borderBottom: `${t.lineWidth}px ${t.lineType} ${t.colorBorderSecondary}`,
                borderRadius: `${t.borderRadiusLG}px ${t.borderRadiusLG}px 0 0`,
              },
              (0, q.dF)(),
            ),
            {
              '&-wrapper': {
                width: '100%',
                display: 'flex',
                alignItems: 'center',
              },
              '&-title': Object.assign(
                Object.assign({ display: 'inline-block', flex: 1 }, q.vS),
                {
                  [`
          > ${p}-typography,
          > ${p}-typography-edit-content
        `]: { insetInlineStart: 0, marginTop: 0, marginBottom: 0 },
                },
              ),
              [`${l}-tabs-top`]: {
                clear: 'both',
                marginBottom: E,
                color: t.colorText,
                fontWeight: 'normal',
                fontSize: t.fontSize,
                '&-bar': {
                  borderBottom: `${t.lineWidth}px ${t.lineType} ${t.colorBorderSecondary}`,
                },
              },
            },
          );
        },
        te = (t) => {
          const {
            cardPaddingBase: l,
            colorBorderSecondary: p,
            cardShadow: v,
            lineWidth: b,
          } = t;
          return {
            width: '33.33%',
            padding: l,
            border: 0,
            borderRadius: 0,
            boxShadow: `
      ${b}px 0 0 0 ${p},
      0 ${b}px 0 0 ${p},
      ${b}px ${b}px 0 0 ${p},
      ${b}px 0 0 0 ${p} inset,
      0 ${b}px 0 0 ${p} inset;
    `,
            transition: `all ${t.motionDurationMid}`,
            '&-hoverable:hover': {
              position: 'relative',
              zIndex: 1,
              boxShadow: v,
            },
          };
        },
        N = (t) => {
          const {
            componentCls: l,
            iconCls: p,
            cardActionsLiMargin: v,
            cardActionsIconSize: b,
            colorBorderSecondary: E,
          } = t;
          return Object.assign(
            Object.assign(
              {
                margin: 0,
                padding: 0,
                listStyle: 'none',
                background: t.colorBgContainer,
                borderTop: `${t.lineWidth}px ${t.lineType} ${E}`,
                display: 'flex',
                borderRadius: `0 0 ${t.borderRadiusLG}px ${t.borderRadiusLG}px `,
              },
              (0, q.dF)(),
            ),
            {
              '& > li': {
                margin: v,
                color: t.colorTextDescription,
                textAlign: 'center',
                '> span': {
                  position: 'relative',
                  display: 'block',
                  minWidth: t.cardActionsIconSize * 2,
                  fontSize: t.fontSize,
                  lineHeight: t.lineHeight,
                  cursor: 'pointer',
                  '&:hover': {
                    color: t.colorPrimary,
                    transition: `color ${t.motionDurationMid}`,
                  },
                  [`a:not(${l}-btn), > ${p}`]: {
                    display: 'inline-block',
                    width: '100%',
                    color: t.colorTextDescription,
                    lineHeight: `${t.fontSize * t.lineHeight}px`,
                    transition: `color ${t.motionDurationMid}`,
                    '&:hover': { color: t.colorPrimary },
                  },
                  [`> ${p}`]: {
                    fontSize: b,
                    lineHeight: `${b * t.lineHeight}px`,
                  },
                },
                '&:not(:last-child)': {
                  borderInlineEnd: `${t.lineWidth}px ${t.lineType} ${E}`,
                },
              },
            },
          );
        },
        D = (t) =>
          Object.assign(
            Object.assign(
              { margin: `-${t.marginXXS}px 0`, display: 'flex' },
              (0, q.dF)(),
            ),
            {
              '&-avatar': { paddingInlineEnd: t.padding },
              '&-detail': {
                overflow: 'hidden',
                flex: 1,
                '> div:not(:last-child)': { marginBottom: t.marginXS },
              },
              '&-title': Object.assign(
                {
                  color: t.colorTextHeading,
                  fontWeight: t.fontWeightStrong,
                  fontSize: t.fontSizeLG,
                },
                q.vS,
              ),
              '&-description': { color: t.colorTextDescription },
            },
          ),
        I = (t) => {
          const { componentCls: l, cardPaddingBase: p, colorFillAlter: v } = t;
          return {
            [`${l}-head`]: {
              padding: `0 ${p}px`,
              background: v,
              '&-title': { fontSize: t.fontSize },
            },
            [`${l}-body`]: { padding: `${t.padding}px ${p}px` },
          };
        },
        M = (t) => {
          const { componentCls: l } = t;
          return { overflow: 'hidden', [`${l}-body`]: { userSelect: 'none' } };
        },
        G = (t) => {
          const {
            componentCls: l,
            cardShadow: p,
            cardHeadPadding: v,
            colorBorderSecondary: b,
            boxShadow: E,
            cardPaddingBase: $,
          } = t;
          return {
            [l]: Object.assign(Object.assign({}, (0, q.Wf)(t)), {
              position: 'relative',
              background: t.colorBgContainer,
              borderRadius: t.borderRadiusLG,
              [`&:not(${l}-bordered)`]: { boxShadow: E },
              [`${l}-head`]: B(t),
              [`${l}-extra`]: {
                marginInlineStart: 'auto',
                color: '',
                fontWeight: 'normal',
                fontSize: t.fontSize,
              },
              [`${l}-body`]: Object.assign(
                {
                  padding: $,
                  borderRadius: ` 0 0 ${t.borderRadiusLG}px ${t.borderRadiusLG}px`,
                },
                (0, q.dF)(),
              ),
              [`${l}-grid`]: te(t),
              [`${l}-cover`]: {
                '> *': { display: 'block', width: '100%' },
                img: {
                  borderRadius: `${t.borderRadiusLG}px ${t.borderRadiusLG}px 0 0`,
                },
              },
              [`${l}-actions`]: N(t),
              [`${l}-meta`]: D(t),
            }),
            [`${l}-bordered`]: {
              border: `${t.lineWidth}px ${t.lineType} ${b}`,
              [`${l}-cover`]: {
                marginTop: -1,
                marginInlineStart: -1,
                marginInlineEnd: -1,
              },
            },
            [`${l}-hoverable`]: {
              cursor: 'pointer',
              transition: `box-shadow ${t.motionDurationMid}, border-color ${t.motionDurationMid}`,
              '&:hover': { borderColor: 'transparent', boxShadow: p },
            },
            [`${l}-contain-grid`]: {
              [`${l}-body`]: { display: 'flex', flexWrap: 'wrap' },
              [`&:not(${l}-loading) ${l}-body`]: {
                marginBlockStart: -t.lineWidth,
                marginInlineStart: -t.lineWidth,
                padding: 0,
              },
            },
            [`${l}-contain-tabs`]: {
              [`> ${l}-head`]: {
                [`${l}-head-title, ${l}-extra`]: { paddingTop: v },
              },
            },
            [`${l}-type-inner`]: I(t),
            [`${l}-loading`]: M(t),
            [`${l}-rtl`]: { direction: 'rtl' },
          };
        },
        K = (t) => {
          const { componentCls: l, cardPaddingSM: p, cardHeadHeightSM: v } = t;
          return {
            [`${l}-small`]: {
              [`> ${l}-head`]: {
                minHeight: v,
                padding: `0 ${p}px`,
                fontSize: t.fontSize,
                [`> ${l}-head-wrapper`]: {
                  [`> ${l}-extra`]: { fontSize: t.fontSize },
                },
              },
              [`> ${l}-body`]: { padding: p },
            },
            [`${l}-small${l}-contain-tabs`]: {
              [`> ${l}-head`]: {
                [`${l}-head-title, ${l}-extra`]: {
                  minHeight: v,
                  paddingTop: 0,
                  display: 'flex',
                  alignItems: 'center',
                },
              },
            },
          };
        };
      var ue = (0, k.Z)('Card', (t) => {
          const l = (0, O.TS)(t, {
            cardShadow: t.boxShadowCard,
            cardHeadHeight: t.fontSizeLG * t.lineHeightLG + t.padding * 2,
            cardHeadHeightSM: t.fontSize * t.lineHeight + t.paddingXS * 2,
            cardHeadPadding: t.padding,
            cardPaddingBase: t.paddingLG,
            cardHeadTabsMarginBottom: -t.padding - t.lineWidth,
            cardActionsLiMargin: `${t.paddingSM}px 0`,
            cardActionsIconSize: t.fontSize,
            cardPaddingSM: 12,
          });
          return [G(l), K(l)];
        }),
        fe = function (t, l) {
          var p = {};
          for (var v in t)
            Object.prototype.hasOwnProperty.call(t, v) &&
              l.indexOf(v) < 0 &&
              (p[v] = t[v]);
          if (t != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var b = 0, v = Object.getOwnPropertySymbols(t);
              b < v.length;
              b++
            )
              l.indexOf(v[b]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, v[b]) &&
                (p[v[b]] = t[v[b]]);
          return p;
        };
      function xe(t) {
        return t.map((p, v) =>
          d.createElement(
            'li',
            { style: { width: `${100 / t.length}%` }, key: `action-${v}` },
            d.createElement('span', null, p),
          ),
        );
      }
      var be = d.forwardRef((t, l) => {
          const { getPrefixCls: p, direction: v } = d.useContext(m.E_),
            b = d.useContext(S.Z),
            E = (Ce) => {
              var me;
              (me = t.onTabChange) === null || me === void 0 || me.call(t, Ce);
            },
            $ = () => {
              let Ce;
              return (
                d.Children.forEach(t.children, (me) => {
                  me && me.type && me.type === R && (Ce = !0);
                }),
                Ce
              );
            },
            {
              prefixCls: z,
              className: L,
              extra: F,
              headStyle: W = {},
              bodyStyle: ne = {},
              title: Q,
              loading: ie,
              bordered: ce = !0,
              size: oe,
              type: _,
              cover: H,
              actions: X,
              tabList: re,
              children: Y,
              activeTabKey: U,
              defaultActiveTabKey: J,
              tabBarExtraContent: se,
              hoverable: de,
              tabProps: pe = {},
            } = t,
            Z = fe(t, [
              'prefixCls',
              'className',
              'extra',
              'headStyle',
              'bodyStyle',
              'title',
              'loading',
              'bordered',
              'size',
              'type',
              'cover',
              'actions',
              'tabList',
              'children',
              'activeTabKey',
              'defaultActiveTabKey',
              'tabBarExtraContent',
              'hoverable',
              'tabProps',
            ]),
            ae = p('card', z),
            [ee, le] = ue(ae),
            Pe = d.createElement(
              e.Z,
              { loading: !0, active: !0, paragraph: { rows: 4 }, title: !1 },
              Y,
            ),
            je = U !== void 0,
            Ke = Object.assign(Object.assign({}, pe), {
              [je ? 'activeKey' : 'defaultActiveKey']: je ? U : J,
              tabBarExtraContent: se,
            });
          let Xe;
          const Ye =
            re && re.length
              ? d.createElement(
                  y.Z,
                  Object.assign({ size: 'large' }, Ke, {
                    className: `${ae}-head-tabs`,
                    onChange: E,
                    items: re.map((Ce) => {
                      var me;
                      return {
                        label: Ce.tab,
                        key: Ce.key,
                        disabled:
                          (me = Ce.disabled) !== null && me !== void 0
                            ? me
                            : !1,
                      };
                    }),
                  }),
                )
              : null;
          (Q || F || Ye) &&
            (Xe = d.createElement(
              'div',
              { className: `${ae}-head`, style: W },
              d.createElement(
                'div',
                { className: `${ae}-head-wrapper` },
                Q &&
                  d.createElement('div', { className: `${ae}-head-title` }, Q),
                F && d.createElement('div', { className: `${ae}-extra` }, F),
              ),
              Ye,
            ));
          const fr = H
              ? d.createElement('div', { className: `${ae}-cover` }, H)
              : null,
            Wr = d.createElement(
              'div',
              { className: `${ae}-body`, style: ne },
              ie ? Pe : Y,
            ),
            Kr =
              X && X.length
                ? d.createElement('ul', { className: `${ae}-actions` }, xe(X))
                : null,
            Xr = (0, c.Z)(Z, ['onTabChange']),
            yr = oe || b,
            Yr = s()(
              ae,
              {
                [`${ae}-loading`]: ie,
                [`${ae}-bordered`]: ce,
                [`${ae}-hoverable`]: de,
                [`${ae}-contain-grid`]: $(),
                [`${ae}-contain-tabs`]: re && re.length,
                [`${ae}-${yr}`]: yr,
                [`${ae}-type-${_}`]: !!_,
                [`${ae}-rtl`]: v === 'rtl',
              },
              L,
              le,
            );
          return ee(
            d.createElement(
              'div',
              Object.assign({ ref: l }, Xr, { className: Yr }),
              Xe,
              fr,
              Wr,
              Kr,
            ),
          );
        }),
        Ie = function (t, l) {
          var p = {};
          for (var v in t)
            Object.prototype.hasOwnProperty.call(t, v) &&
              l.indexOf(v) < 0 &&
              (p[v] = t[v]);
          if (t != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var b = 0, v = Object.getOwnPropertySymbols(t);
              b < v.length;
              b++
            )
              l.indexOf(v[b]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, v[b]) &&
                (p[v[b]] = t[v[b]]);
          return p;
        },
        Be = (t) => {
          const {
              prefixCls: l,
              className: p,
              avatar: v,
              title: b,
              description: E,
            } = t,
            $ = Ie(t, [
              'prefixCls',
              'className',
              'avatar',
              'title',
              'description',
            ]),
            { getPrefixCls: z } = d.useContext(m.E_),
            L = z('card', l),
            F = s()(`${L}-meta`, p),
            W = v
              ? d.createElement('div', { className: `${L}-meta-avatar` }, v)
              : null,
            ne = b
              ? d.createElement('div', { className: `${L}-meta-title` }, b)
              : null,
            Q = E
              ? d.createElement(
                  'div',
                  { className: `${L}-meta-description` },
                  E,
                )
              : null,
            ie =
              ne || Q
                ? d.createElement(
                    'div',
                    { className: `${L}-meta-detail` },
                    ne,
                    Q,
                  )
                : null;
          return d.createElement(
            'div',
            Object.assign({}, $, { className: F }),
            W,
            ie,
          );
        };
      const Ae = be;
      (Ae.Grid = R), (Ae.Meta = Be);
      var ge = Ae,
        ve = f(59209),
        Le = f(96074),
        ye = f(26713),
        Oe = function (l) {
          var p = l.padding;
          return (0, u.jsx)('div', {
            style: { padding: p || '0 24px' },
            children: (0, u.jsx)(Le.Z, { style: { margin: 0 } }),
          });
        },
        ke = { xs: 2, sm: 2, md: 4, lg: 4, xl: 6, xxl: 6 },
        $e = function (l) {
          var p = l.size,
            v = l.active,
            b = (0, ve.ZP)(),
            E = p === void 0 ? ke[b] || 6 : p,
            $ = function (L) {
              return L === 0 ? 0 : E > 2 ? 42 : 16;
            };
          return (0, u.jsx)(ge, {
            bordered: !1,
            style: { marginBlockEnd: 16 },
            children: (0, u.jsx)('div', {
              style: {
                width: '100%',
                justifyContent: 'space-between',
                display: 'flex',
              },
              children: new Array(E).fill(null).map(function (z, L) {
                return (0,
                u.jsxs)('div', { style: { borderInlineStart: E > 2 && L === 1 ? '1px solid rgba(0,0,0,0.06)' : void 0, paddingInlineStart: $(L), flex: 1, marginInlineEnd: L === 0 ? 16 : 0 }, children: [(0, u.jsx)(e.Z, { active: v, paragraph: !1, title: { width: 100, style: { marginBlockStart: 0 } } }), (0, u.jsx)(e.Z.Button, { active: v, style: { height: 48 } })] }, L);
              }),
            }),
          });
        },
        Qe = function (l) {
          var p = l.active;
          return (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsx)(ge, {
                bordered: !1,
                style: { borderRadius: 0 },
                bodyStyle: { padding: 24 },
                children: (0, u.jsxs)('div', {
                  style: {
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                  children: [
                    (0, u.jsx)('div', {
                      style: { maxWidth: '100%', flex: 1 },
                      children: (0, u.jsx)(e.Z, {
                        active: p,
                        title: { width: 100, style: { marginBlockStart: 0 } },
                        paragraph: { rows: 1, style: { margin: 0 } },
                      }),
                    }),
                    (0, u.jsx)(e.Z.Button, {
                      active: p,
                      size: 'small',
                      style: { width: 165, marginBlockStart: 12 },
                    }),
                  ],
                }),
              }),
              (0, u.jsx)(Oe, {}),
            ],
          });
        },
        _e = function (l) {
          var p = l.size,
            v = l.active,
            b = v === void 0 ? !0 : v,
            E = l.actionButton;
          return (0, u.jsxs)(ge, {
            bordered: !1,
            bodyStyle: { padding: 0 },
            children: [
              new Array(p).fill(null).map(function ($, z) {
                return (0, u.jsx)(Qe, { active: !!b }, z);
              }),
              E !== !1 &&
                (0, u.jsx)(ge, {
                  bordered: !1,
                  style: { borderStartEndRadius: 0, borderTopLeftRadius: 0 },
                  bodyStyle: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  children: (0, u.jsx)(e.Z.Button, {
                    style: { width: 102 },
                    active: b,
                    size: 'small',
                  }),
                }),
            ],
          });
        },
        Re = function (l) {
          var p = l.active;
          return (0, u.jsxs)('div', {
            style: { marginBlockEnd: 16 },
            children: [
              (0, u.jsx)(e.Z, { paragraph: !1, title: { width: 185 } }),
              (0, u.jsx)(e.Z.Button, { active: p, size: 'small' }),
            ],
          });
        },
        Ze = function (l) {
          var p = l.active;
          return (0, u.jsx)(ge, {
            bordered: !1,
            style: { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 },
            bodyStyle: { paddingBlockEnd: 8 },
            children: (0, u.jsxs)(ye.Z, {
              style: { width: '100%', justifyContent: 'space-between' },
              children: [
                (0, u.jsx)(e.Z.Button, {
                  active: p,
                  style: { width: 200 },
                  size: 'small',
                }),
                (0, u.jsxs)(ye.Z, {
                  children: [
                    (0, u.jsx)(e.Z.Button, {
                      active: p,
                      size: 'small',
                      style: { width: 120 },
                    }),
                    (0, u.jsx)(e.Z.Button, {
                      active: p,
                      size: 'small',
                      style: { width: 80 },
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        er = function (l) {
          var p = l.active,
            v = p === void 0 ? !0 : p,
            b = l.statistic,
            E = l.actionButton,
            $ = l.toolbar,
            z = l.pageHeader,
            L = l.list,
            F = L === void 0 ? 5 : L;
          return (0, u.jsxs)('div', {
            style: { width: '100%' },
            children: [
              z !== !1 && (0, u.jsx)(Re, { active: v }),
              b !== !1 && (0, u.jsx)($e, { size: b, active: v }),
              ($ !== !1 || F !== !1) &&
                (0, u.jsxs)(ge, {
                  bordered: !1,
                  bodyStyle: { padding: 0 },
                  children: [
                    $ !== !1 && (0, u.jsx)(Ze, { active: v }),
                    F !== !1 &&
                      (0, u.jsx)(_e, { size: F, active: v, actionButton: E }),
                  ],
                }),
            ],
          });
        },
        Ne = er,
        we = { xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 4 },
        Me = function (l) {
          var p = l.active;
          return (0, u.jsxs)('div', {
            style: { marginBlockStart: 32 },
            children: [
              (0, u.jsx)(e.Z.Button, {
                active: p,
                size: 'small',
                style: { width: 100, marginBlockEnd: 16 },
              }),
              (0, u.jsxs)('div', {
                style: {
                  width: '100%',
                  justifyContent: 'space-between',
                  display: 'flex',
                },
                children: [
                  (0, u.jsxs)('div', {
                    style: { flex: 1, marginInlineEnd: 24, maxWidth: 300 },
                    children: [
                      (0, u.jsx)(e.Z, {
                        active: p,
                        paragraph: !1,
                        title: { style: { marginBlockStart: 0 } },
                      }),
                      (0, u.jsx)(e.Z, {
                        active: p,
                        paragraph: !1,
                        title: { style: { marginBlockStart: 8 } },
                      }),
                      (0, u.jsx)(e.Z, {
                        active: p,
                        paragraph: !1,
                        title: { style: { marginBlockStart: 8 } },
                      }),
                    ],
                  }),
                  (0, u.jsx)('div', {
                    style: {
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                    children: (0, u.jsxs)('div', {
                      style: { maxWidth: 300, margin: 'auto' },
                      children: [
                        (0, u.jsx)(e.Z, {
                          active: p,
                          paragraph: !1,
                          title: { style: { marginBlockStart: 0 } },
                        }),
                        (0, u.jsx)(e.Z, {
                          active: p,
                          paragraph: !1,
                          title: { style: { marginBlockStart: 8 } },
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        rr = function (l) {
          var p = l.size,
            v = l.active,
            b = (0, ve.ZP)(),
            E = p === void 0 ? we[b] || 3 : p;
          return (0, u.jsx)('div', {
            style: {
              width: '100%',
              justifyContent: 'space-between',
              display: 'flex',
            },
            children: new Array(E).fill(null).map(function ($, z) {
              return (0,
              u.jsxs)('div', { style: { flex: 1, paddingInlineStart: z === 0 ? 0 : 24, paddingInlineEnd: z === E - 1 ? 0 : 24 }, children: [(0, u.jsx)(e.Z, { active: v, paragraph: !1, title: { style: { marginBlockStart: 0 } } }), (0, u.jsx)(e.Z, { active: v, paragraph: !1, title: { style: { marginBlockStart: 8 } } }), (0, u.jsx)(e.Z, { active: v, paragraph: !1, title: { style: { marginBlockStart: 8 } } })] }, z);
            }),
          });
        },
        qe = function (l) {
          var p = l.active,
            v = l.header,
            b = v === void 0 ? !1 : v,
            E = (0, ve.ZP)(),
            $ = we[E] || 3;
          return (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsxs)('div', {
                style: {
                  display: 'flex',
                  background: b ? 'rgba(0,0,0,0.02)' : 'none',
                  padding: '24px 8px',
                },
                children: [
                  new Array($).fill(null).map(function (z, L) {
                    return (0,
                    u.jsx)('div', { style: { flex: 1, paddingInlineStart: b && L === 0 ? 0 : 20, paddingInlineEnd: 32 }, children: (0, u.jsx)(e.Z, { active: p, paragraph: !1, title: { style: { margin: 0, height: 24, width: b ? '75px' : '100%' } } }) }, L);
                  }),
                  (0, u.jsx)('div', {
                    style: { flex: 3, paddingInlineStart: 32 },
                    children: (0, u.jsx)(e.Z, {
                      active: p,
                      paragraph: !1,
                      title: {
                        style: {
                          margin: 0,
                          height: 24,
                          width: b ? '75px' : '100%',
                        },
                      },
                    }),
                  }),
                ],
              }),
              (0, u.jsx)(Oe, { padding: '0px 0px' }),
            ],
          });
        },
        ze = function (l) {
          var p = l.active,
            v = l.size,
            b = v === void 0 ? 4 : v;
          return (0, u.jsxs)(ge, {
            bordered: !1,
            children: [
              (0, u.jsx)(e.Z.Button, {
                active: p,
                size: 'small',
                style: { width: 100, marginBlockEnd: 16 },
              }),
              (0, u.jsx)(qe, { header: !0, active: p }),
              new Array(b).fill(null).map(function (E, $) {
                return (0, u.jsx)(qe, { active: p }, $);
              }),
              (0, u.jsx)('div', {
                style: {
                  display: 'flex',
                  justifyContent: 'flex-end',
                  paddingBlockStart: 16,
                },
                children: (0, u.jsx)(e.Z, {
                  active: p,
                  paragraph: !1,
                  title: {
                    style: {
                      margin: 0,
                      height: 32,
                      float: 'right',
                      maxWidth: '630px',
                    },
                  },
                }),
              }),
            ],
          });
        },
        Fe = function (l) {
          var p = l.active;
          return (0, u.jsxs)(ge, {
            bordered: !1,
            style: { borderStartEndRadius: 0, borderTopLeftRadius: 0 },
            children: [
              (0, u.jsx)(e.Z.Button, {
                active: p,
                size: 'small',
                style: { width: 100, marginBlockEnd: 16 },
              }),
              (0, u.jsx)(rr, { active: p }),
              (0, u.jsx)(Me, { active: p }),
            ],
          });
        },
        He = function (l) {
          var p = l.active,
            v = p === void 0 ? !0 : p,
            b = l.pageHeader,
            E = l.list;
          return (0, u.jsxs)('div', {
            style: { width: '100%' },
            children: [
              b !== !1 && (0, u.jsx)(Re, { active: v }),
              (0, u.jsx)(Fe, { active: v }),
              E !== !1 && (0, u.jsx)(Oe, {}),
              E !== !1 && (0, u.jsx)(ze, { active: v, size: E }),
            ],
          });
        },
        Ue = He,
        ar = function (l) {
          var p = l.active,
            v = p === void 0 ? !0 : p,
            b = l.pageHeader;
          return (0, u.jsxs)('div', {
            style: { width: '100%' },
            children: [
              b !== !1 && (0, u.jsx)(Re, { active: v }),
              (0, u.jsx)(ge, {
                children: (0, u.jsxs)('div', {
                  style: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: 128,
                  },
                  children: [
                    (0, u.jsx)(e.Z.Avatar, {
                      size: 64,
                      style: { marginBlockEnd: 32 },
                    }),
                    (0, u.jsx)(e.Z.Button, {
                      active: v,
                      style: { width: 214, marginBlockEnd: 8 },
                    }),
                    (0, u.jsx)(e.Z.Button, {
                      active: v,
                      style: { width: 328 },
                      size: 'small',
                    }),
                    (0, u.jsxs)(ye.Z, {
                      style: { marginBlockStart: 24 },
                      children: [
                        (0, u.jsx)(e.Z.Button, {
                          active: v,
                          style: { width: 116 },
                        }),
                        (0, u.jsx)(e.Z.Button, {
                          active: v,
                          style: { width: 116 },
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Ge = ar,
        tr = ['type'],
        nr = function (l) {
          var p = l.type,
            v = p === void 0 ? 'list' : p,
            b = (0, g.Z)(l, tr);
          return v === 'result'
            ? (0, u.jsx)(Ge, (0, h.Z)({}, b))
            : v === 'descriptions'
            ? (0, u.jsx)(Ue, (0, h.Z)({}, b))
            : (0, u.jsx)(Ne, (0, h.Z)({}, b));
        },
        Se = nr,
        Ee = f(2026),
        he = f(90081),
        ir = f(99509),
        Te = f(81736),
        lr = f(97685),
        xr = f(71060),
        pr = f(27790),
        or = f(60869),
        Ve = f(51544),
        wr = function (l) {
          return (pr.ZP.warn || pr.ZP.warning)(l);
        };
      function Sr(t) {
        var l = t.data,
          p = t.row;
        return (0, h.Z)((0, h.Z)({}, l), p);
      }
      function Er(t) {
        var l = t.type || 'single',
          p = (0, xr.YB)(),
          v = (0, or.Z)([], {
            value: t.editableKeys,
            onChange: t.onChange
              ? function (H) {
                  var X;
                  t == null ||
                    (X = t.onChange) === null ||
                    X === void 0 ||
                    X.call(t, H, t.dataSource);
                }
              : void 0,
          }),
          b = (0, lr.Z)(v, 2),
          E = b[0],
          $ = b[1],
          z = (0, d.useMemo)(
            function () {
              var H = l === 'single' ? (E == null ? void 0 : E.slice(0, 1)) : E;
              return new Set(H);
            },
            [(E || []).join(','), l],
          ),
          L = (0, d.useCallback)(
            function (H) {
              return !!(E != null && E.includes((0, Ve.sN)(H)));
            },
            [(E || []).join(',')],
          ),
          F = function (X) {
            return z.size > 0 && l === 'single'
              ? (wr(
                  t.onlyOneLineEditorAlertMessage ||
                    p.getMessage(
                      'editableTable.onlyOneLineEditor',
                      '\u53EA\u80FD\u540C\u65F6\u7F16\u8F91\u4E00\u884C',
                    ),
                ),
                !1)
              : (z.add((0, Ve.sN)(X)), $(Array.from(z)), !0);
          },
          W = function (X) {
            return z.delete((0, Ve.sN)(X)), $(Array.from(z)), !0;
          },
          ne = (function () {
            var H = (0, C.Z)(
              (0, T.Z)().mark(function X(re, Y, U, J) {
                var se, de;
                return (0, T.Z)().wrap(function (Z) {
                  for (;;)
                    switch ((Z.prev = Z.next)) {
                      case 0:
                        return (
                          (Z.next = 2),
                          t == null ||
                          (se = t.onCancel) === null ||
                          se === void 0
                            ? void 0
                            : se.call(t, re, Y, U, J)
                        );
                      case 2:
                        if (((de = Z.sent), de !== !1)) {
                          Z.next = 5;
                          break;
                        }
                        return Z.abrupt('return', !1);
                      case 5:
                        return Z.abrupt('return', !0);
                      case 6:
                      case 'end':
                        return Z.stop();
                    }
                }, X);
              }),
            );
            return function (re, Y, U, J) {
              return H.apply(this, arguments);
            };
          })(),
          Q = (function () {
            var H = (0, C.Z)(
              (0, T.Z)().mark(function X(re, Y, U) {
                var J, se, de;
                return (0, T.Z)().wrap(function (Z) {
                  for (;;)
                    switch ((Z.prev = Z.next)) {
                      case 0:
                        return (
                          (Z.next = 2),
                          t == null || (J = t.onSave) === null || J === void 0
                            ? void 0
                            : J.call(t, re, Y, U)
                        );
                      case 2:
                        if (((se = Z.sent), se !== !1)) {
                          Z.next = 5;
                          break;
                        }
                        return Z.abrupt('return', !1);
                      case 5:
                        return (
                          W(re),
                          (de = {
                            data: t.dataSource,
                            row: Y,
                            key: re,
                            childrenColumnName:
                              t.childrenColumnName || 'children',
                          }),
                          t.setDataSource(Sr(de)),
                          Z.abrupt('return', !0)
                        );
                      case 9:
                      case 'end':
                        return Z.stop();
                    }
                }, X);
              }),
            );
            return function (re, Y, U) {
              return H.apply(this, arguments);
            };
          })(),
          ie = p.getMessage('editableTable.action.save', '\u4FDD\u5B58'),
          ce = p.getMessage('editableTable.action.delete', '\u5220\u9664'),
          oe = p.getMessage('editableTable.action.cancel', '\u53D6\u6D88'),
          _ = (0, d.useCallback)(
            function (H, X) {
              var re = (0, h.Z)(
                  {
                    recordKey: H,
                    cancelEditable: W,
                    onCancel: ne,
                    onSave: Q,
                    editableKeys: E,
                    setEditableRowKeys: $,
                    saveText: ie,
                    cancelText: oe,
                    deleteText: ce,
                    deletePopconfirmMessage: ''.concat(
                      p.getMessage(
                        'deleteThisLine',
                        '\u5220\u9664\u6B64\u884C',
                      ),
                      '?',
                    ),
                    editorType: 'Map',
                  },
                  X,
                ),
                Y = (0, Ve.aX)(t.dataSource, re);
              return t.actionRender
                ? t.actionRender(t.dataSource, re, {
                    save: Y.save,
                    delete: Y.delete,
                    cancel: Y.cancel,
                  })
                : [Y.save, Y.delete, Y.cancel];
            },
            [E && E.join(','), t.dataSource],
          );
        return {
          editableKeys: E,
          setEditableRowKeys: $,
          isEditable: L,
          actionRender: _,
          startEditable: F,
          cancelEditable: W,
        };
      }
      var Cr = f(78164),
        qr = f(50344),
        jr = f(96159),
        sr = f(74443),
        Dr = (t) => {
          let { children: l } = t;
          return l;
        };
      function We(t) {
        return t != null;
      }
      var ur = (t) => {
        let {
          itemPrefixCls: l,
          component: p,
          span: v,
          className: b,
          style: E,
          labelStyle: $,
          contentStyle: z,
          bordered: L,
          label: F,
          content: W,
          colon: ne,
        } = t;
        const Q = p;
        return L
          ? d.createElement(
              Q,
              {
                className: s()(
                  { [`${l}-item-label`]: We(F), [`${l}-item-content`]: We(W) },
                  b,
                ),
                style: E,
                colSpan: v,
              },
              We(F) && d.createElement('span', { style: $ }, F),
              We(W) && d.createElement('span', { style: z }, W),
            )
          : d.createElement(
              Q,
              { className: s()(`${l}-item`, b), style: E, colSpan: v },
              d.createElement(
                'div',
                { className: `${l}-item-container` },
                (F || F === 0) &&
                  d.createElement(
                    'span',
                    {
                      className: s()(`${l}-item-label`, {
                        [`${l}-item-no-colon`]: !ne,
                      }),
                      style: $,
                    },
                    F,
                  ),
                (W || W === 0) &&
                  d.createElement(
                    'span',
                    { className: s()(`${l}-item-content`), style: z },
                    W,
                  ),
              ),
            );
      };
      function cr(t, l, p) {
        let { colon: v, prefixCls: b, bordered: E } = l,
          {
            component: $,
            type: z,
            showLabel: L,
            showContent: F,
            labelStyle: W,
            contentStyle: ne,
          } = p;
        return t.map((Q, ie) => {
          let {
            props: {
              label: ce,
              children: oe,
              prefixCls: _ = b,
              className: H,
              style: X,
              labelStyle: re,
              contentStyle: Y,
              span: U = 1,
            },
            key: J,
          } = Q;
          return typeof $ == 'string'
            ? d.createElement(ur, {
                key: `${z}-${J || ie}`,
                className: H,
                style: X,
                labelStyle: Object.assign(Object.assign({}, W), re),
                contentStyle: Object.assign(Object.assign({}, ne), Y),
                span: U,
                colon: v,
                component: $,
                itemPrefixCls: _,
                bordered: E,
                label: L ? ce : null,
                content: F ? oe : null,
              })
            : [
                d.createElement(ur, {
                  key: `label-${J || ie}`,
                  className: H,
                  style: Object.assign(
                    Object.assign(Object.assign({}, W), X),
                    re,
                  ),
                  span: 1,
                  colon: v,
                  component: $[0],
                  itemPrefixCls: _,
                  bordered: E,
                  label: ce,
                }),
                d.createElement(ur, {
                  key: `content-${J || ie}`,
                  className: H,
                  style: Object.assign(
                    Object.assign(Object.assign({}, ne), X),
                    Y,
                  ),
                  span: U * 2 - 1,
                  component: $[1],
                  itemPrefixCls: _,
                  bordered: E,
                  content: oe,
                }),
              ];
        });
      }
      var Tr = (t) => {
        const l = d.useContext(gr),
          { prefixCls: p, vertical: v, row: b, index: E, bordered: $ } = t;
        return v
          ? d.createElement(
              d.Fragment,
              null,
              d.createElement(
                'tr',
                { key: `label-${E}`, className: `${p}-row` },
                cr(
                  b,
                  t,
                  Object.assign(
                    { component: 'th', type: 'label', showLabel: !0 },
                    l,
                  ),
                ),
              ),
              d.createElement(
                'tr',
                { key: `content-${E}`, className: `${p}-row` },
                cr(
                  b,
                  t,
                  Object.assign(
                    { component: 'td', type: 'content', showContent: !0 },
                    l,
                  ),
                ),
              ),
            )
          : d.createElement(
              'tr',
              { key: E, className: `${p}-row` },
              cr(
                b,
                t,
                Object.assign(
                  {
                    component: $ ? ['th', 'td'] : 'td',
                    type: 'item',
                    showLabel: !0,
                    showContent: !0,
                  },
                  l,
                ),
              ),
            );
      };
      const Ar = (t) => {
          const {
            componentCls: l,
            descriptionsSmallPadding: p,
            descriptionsDefaultPadding: v,
            descriptionsMiddlePadding: b,
            descriptionsBg: E,
          } = t;
          return {
            [`&${l}-bordered`]: {
              [`${l}-view`]: {
                border: `${t.lineWidth}px ${t.lineType} ${t.colorSplit}`,
                '> table': { tableLayout: 'auto', borderCollapse: 'collapse' },
              },
              [`${l}-item-label, ${l}-item-content`]: {
                padding: v,
                borderInlineEnd: `${t.lineWidth}px ${t.lineType} ${t.colorSplit}`,
                '&:last-child': { borderInlineEnd: 'none' },
              },
              [`${l}-item-label`]: {
                backgroundColor: E,
                '&::after': { display: 'none' },
              },
              [`${l}-row`]: {
                borderBottom: `${t.lineWidth}px ${t.lineType} ${t.colorSplit}`,
                '&:last-child': { borderBottom: 'none' },
              },
              [`&${l}-middle`]: {
                [`${l}-item-label, ${l}-item-content`]: { padding: b },
              },
              [`&${l}-small`]: {
                [`${l}-item-label, ${l}-item-content`]: { padding: p },
              },
            },
          };
        },
        Lr = (t) => {
          const {
            componentCls: l,
            descriptionsExtraColor: p,
            descriptionItemPaddingBottom: v,
            descriptionsItemLabelColonMarginRight: b,
            descriptionsItemLabelColonMarginLeft: E,
            descriptionsTitleMarginBottom: $,
          } = t;
          return {
            [l]: Object.assign(
              Object.assign(Object.assign({}, (0, q.Wf)(t)), Ar(t)),
              {
                ['&-rtl']: { direction: 'rtl' },
                [`${l}-header`]: {
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: $,
                },
                [`${l}-title`]: Object.assign(Object.assign({}, q.vS), {
                  flex: 'auto',
                  color: t.colorText,
                  fontWeight: t.fontWeightStrong,
                  fontSize: t.fontSizeLG,
                  lineHeight: t.lineHeightLG,
                }),
                [`${l}-extra`]: {
                  marginInlineStart: 'auto',
                  color: p,
                  fontSize: t.fontSize,
                },
                [`${l}-view`]: {
                  width: '100%',
                  borderRadius: t.borderRadiusLG,
                  table: { width: '100%', tableLayout: 'fixed' },
                },
                [`${l}-row`]: {
                  '> th, > td': { paddingBottom: v },
                  '&:last-child': { borderBottom: 'none' },
                },
                [`${l}-item-label`]: {
                  color: t.colorText,
                  fontWeight: 'normal',
                  fontSize: t.fontSize,
                  lineHeight: t.lineHeight,
                  textAlign: 'start',
                  '&::after': {
                    content: '":"',
                    position: 'relative',
                    top: -0.5,
                    marginInline: `${E}px ${b}px`,
                  },
                  [`&${l}-item-no-colon::after`]: { content: '""' },
                },
                [`${l}-item-no-label`]: {
                  '&::after': { margin: 0, content: '""' },
                },
                [`${l}-item-content`]: {
                  display: 'table-cell',
                  flex: 1,
                  color: t.colorText,
                  fontSize: t.fontSize,
                  lineHeight: t.lineHeight,
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                },
                [`${l}-item`]: {
                  paddingBottom: 0,
                  verticalAlign: 'top',
                  '&-container': {
                    display: 'flex',
                    [`${l}-item-label`]: {
                      display: 'inline-flex',
                      alignItems: 'baseline',
                    },
                    [`${l}-item-content`]: {
                      display: 'inline-flex',
                      alignItems: 'baseline',
                    },
                  },
                },
                '&-middle': {
                  [`${l}-row`]: {
                    '> th, > td': { paddingBottom: t.paddingSM },
                  },
                },
                '&-small': {
                  [`${l}-row`]: {
                    '> th, > td': { paddingBottom: t.paddingXS },
                  },
                },
              },
            ),
          };
        };
      var Or = (0, k.Z)('Descriptions', (t) => {
        const l = t.colorFillAlter,
          p = t.fontSizeSM * t.lineHeightSM,
          v = t.colorText,
          b = `${t.paddingXS}px ${t.padding}px`,
          E = `${t.padding}px ${t.paddingLG}px`,
          $ = `${t.paddingSM}px ${t.paddingLG}px`,
          z = t.padding,
          L = t.marginXS,
          F = t.marginXXS / 2,
          W = (0, O.TS)(t, {
            descriptionsBg: l,
            descriptionsTitleMarginBottom: p,
            descriptionsExtraColor: v,
            descriptionItemPaddingBottom: z,
            descriptionsSmallPadding: b,
            descriptionsDefaultPadding: E,
            descriptionsMiddlePadding: $,
            descriptionsItemLabelColonMarginRight: L,
            descriptionsItemLabelColonMarginLeft: F,
          });
        return [Lr(W)];
      });
      const gr = d.createContext({}),
        vr = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 };
      function $r(t, l) {
        if (typeof t == 'number') return t;
        if (typeof t == 'object')
          for (let p = 0; p < sr.c.length; p++) {
            const v = sr.c[p];
            if (l[v] && t[v] !== void 0) return t[v] || vr[v];
          }
        return 3;
      }
      function hr(t, l, p) {
        let v = t;
        return (l === void 0 || l > p) && (v = (0, jr.Tm)(t, { span: p })), v;
      }
      function Rr(t, l) {
        const p = (0, qr.Z)(t).filter(($) => $),
          v = [];
        let b = [],
          E = l;
        return (
          p.forEach(($, z) => {
            var L;
            const F = (L = $.props) === null || L === void 0 ? void 0 : L.span,
              W = F || 1;
            if (z === p.length - 1) {
              b.push(hr($, F, E)), v.push(b);
              return;
            }
            W < E
              ? ((E -= W), b.push($))
              : (b.push(hr($, W, E)), v.push(b), (E = l), (b = []));
          }),
          v
        );
      }
      function mr(t) {
        let {
          prefixCls: l,
          title: p,
          extra: v,
          column: b = vr,
          colon: E = !0,
          bordered: $,
          layout: z,
          children: L,
          className: F,
          style: W,
          size: ne,
          labelStyle: Q,
          contentStyle: ie,
        } = t;
        const { getPrefixCls: ce, direction: oe } = d.useContext(m.E_),
          _ = ce('descriptions', l),
          [H, X] = d.useState({}),
          re = $r(b, H),
          [Y, U] = Or(_),
          J = (0, sr.Z)();
        d.useEffect(() => {
          const pe = J.subscribe((Z) => {
            typeof b == 'object' && X(Z);
          });
          return () => {
            J.unsubscribe(pe);
          };
        }, []);
        const se = Rr(L, re),
          de = d.useMemo(() => ({ labelStyle: Q, contentStyle: ie }), [Q, ie]);
        return Y(
          d.createElement(
            gr.Provider,
            { value: de },
            d.createElement(
              'div',
              {
                className: s()(
                  _,
                  {
                    [`${_}-${ne}`]: ne && ne !== 'default',
                    [`${_}-bordered`]: !!$,
                    [`${_}-rtl`]: oe === 'rtl',
                  },
                  F,
                  U,
                ),
                style: W,
              },
              (p || v) &&
                d.createElement(
                  'div',
                  { className: `${_}-header` },
                  p && d.createElement('div', { className: `${_}-title` }, p),
                  v && d.createElement('div', { className: `${_}-extra` }, v),
                ),
              d.createElement(
                'div',
                { className: `${_}-view` },
                d.createElement(
                  'table',
                  null,
                  d.createElement(
                    'tbody',
                    null,
                    se.map((pe, Z) =>
                      d.createElement(Tr, {
                        key: Z,
                        index: Z,
                        colon: E,
                        prefixCls: _,
                        vertical: z === 'vertical',
                        bordered: $,
                        row: pe,
                      }),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      }
      mr.Item = Dr;
      var dr = mr,
        Pr = f(58720),
        Ir = f(45598),
        Br = f(94787),
        kr = f(30939),
        Zr = function (l, p) {
          var v = p || {},
            b = v.onRequestError,
            E = v.effects,
            $ = v.manual,
            z = v.dataSource,
            L = v.defaultDataSource,
            F = v.onDataSourceChange,
            W = (0, or.Z)(L, { value: z, onChange: F }),
            ne = (0, lr.Z)(W, 2),
            Q = ne[0],
            ie = ne[1],
            ce = (0, or.Z)(p == null ? void 0 : p.loading, {
              value: p == null ? void 0 : p.loading,
              onChange: p == null ? void 0 : p.onLoadingChange,
            }),
            oe = (0, lr.Z)(ce, 2),
            _ = oe[0],
            H = oe[1],
            X = function (U) {
              ie(U), H(!1);
            },
            re = (function () {
              var Y = (0, C.Z)(
                (0, T.Z)().mark(function U() {
                  var J, se, de;
                  return (0, T.Z)().wrap(
                    function (Z) {
                      for (;;)
                        switch ((Z.prev = Z.next)) {
                          case 0:
                            if (!_) {
                              Z.next = 2;
                              break;
                            }
                            return Z.abrupt('return');
                          case 2:
                            return H(!0), (Z.prev = 3), (Z.next = 6), l();
                          case 6:
                            if (((Z.t0 = Z.sent), Z.t0)) {
                              Z.next = 9;
                              break;
                            }
                            Z.t0 = {};
                          case 9:
                            (J = Z.t0),
                              (se = J.data),
                              (de = J.success),
                              de !== !1 && X(se),
                              (Z.next = 23);
                            break;
                          case 15:
                            if (
                              ((Z.prev = 15), (Z.t1 = Z.catch(3)), b !== void 0)
                            ) {
                              Z.next = 21;
                              break;
                            }
                            throw new Error(Z.t1);
                          case 21:
                            b(Z.t1);
                          case 22:
                            H(!1);
                          case 23:
                          case 'end':
                            return Z.stop();
                        }
                    },
                    U,
                    null,
                    [[3, 15]],
                  );
                }),
              );
              return function () {
                return Y.apply(this, arguments);
              };
            })();
          return (
            (0, d.useEffect)(function () {
              $ || re();
            }, [].concat((0, x.Z)(E || []), [$])),
            {
              dataSource: Q,
              setDataSource: ie,
              loading: _,
              reload: function () {
                return re();
              },
            }
          );
        },
        Nr = Zr,
        Mr = [
          'valueEnum',
          'render',
          'renderText',
          'mode',
          'plain',
          'dataIndex',
          'request',
          'params',
          'editable',
        ],
        zr = [
          'request',
          'columns',
          'params',
          'dataSource',
          'onDataSourceChange',
          'formProps',
          'editable',
          'loading',
          'onLoadingChange',
          'actionRef',
          'onRequestError',
        ],
        Fr = function (l, p) {
          var v = l.dataIndex;
          if (v) {
            var b = Array.isArray(v) ? (0, Br.default)(p, v) : p[v];
            if (b !== void 0 || b !== null) return b;
          }
          return l.children;
        },
        Hr = function (l) {
          var p = l.valueEnum,
            v = l.action,
            b = l.index,
            E = l.text,
            $ = l.entity,
            z = l.mode,
            L = l.render,
            F = l.editableUtils,
            W = l.valueType,
            ne = l.plain,
            Q = l.dataIndex,
            ie = l.request,
            ce = l.renderFormItem,
            oe = l.params,
            _ = o.ZP.useFormInstance(),
            H = {
              text: E,
              valueEnum: p,
              mode: z || 'read',
              proFieldProps: {
                render: L
                  ? function () {
                      return L == null
                        ? void 0
                        : L(
                            E,
                            $,
                            b,
                            v,
                            (0, h.Z)(
                              (0, h.Z)({}, l),
                              {},
                              { type: 'descriptions' },
                            ),
                          );
                    }
                  : void 0,
              },
              ignoreFormItem: !0,
              valueType: W,
              request: ie,
              params: oe,
              plain: ne,
            };
          if (z === 'read' || !z || W === 'option') {
            var X = (0, Ee.w)(
              l.fieldProps,
              void 0,
              (0, h.Z)((0, h.Z)({}, l), {}, { rowKey: Q, isEditable: !1 }),
            );
            return (0, u.jsx)(
              n.Z,
              (0, h.Z)((0, h.Z)({ name: Q }, H), {}, { fieldProps: X }),
            );
          }
          var re = function () {
            var U,
              J = (0, Ee.w)(
                l.formItemProps,
                _,
                (0, h.Z)((0, h.Z)({}, l), {}, { rowKey: Q, isEditable: !0 }),
              ),
              se = (0, Ee.w)(
                l.fieldProps,
                _,
                (0, h.Z)((0, h.Z)({}, l), {}, { rowKey: Q, isEditable: !0 }),
              ),
              de = ce
                ? ce == null
                  ? void 0
                  : ce(
                      (0, h.Z)((0, h.Z)({}, l), {}, { type: 'descriptions' }),
                      {
                        isEditable: !0,
                        recordKey: Q,
                        record: _.getFieldValue([Q].flat(1)),
                        defaultRender: function () {
                          return (0, u.jsx)(
                            n.Z,
                            (0, h.Z)((0, h.Z)({}, H), {}, { fieldProps: se }),
                          );
                        },
                        type: 'descriptions',
                      },
                      _,
                    )
                : void 0;
            return (0, u.jsxs)(ye.Z, {
              style: { alignItems: 'baseline' },
              children: [
                (0, u.jsx)(
                  he.U,
                  (0, h.Z)(
                    (0, h.Z)({ name: Q }, J),
                    {},
                    {
                      style: (0, h.Z)(
                        { margin: 0 },
                        (J == null ? void 0 : J.style) || {},
                      ),
                      initialValue: E || (J == null ? void 0 : J.initialValue),
                      children:
                        de ||
                        (0, u.jsx)(
                          n.Z,
                          (0, h.Z)(
                            (0, h.Z)({}, H),
                            {},
                            {
                              proFieldProps: (0, h.Z)({}, H.proFieldProps),
                              fieldProps: se,
                            },
                          ),
                        ),
                    },
                  ),
                ),
                F == null || (U = F.actionRender) === null || U === void 0
                  ? void 0
                  : U.call(F, Q || b, {
                      cancelText: (0, u.jsx)(w.Z, {}),
                      saveText: (0, u.jsx)(r.Z, {}),
                      deleteText: !1,
                    }),
              ],
            });
          };
          return (0, u.jsx)('div', {
            style: {
              marginTop: -5,
              marginBottom: -5,
              marginLeft: 0,
              marginRight: 0,
            },
            children: re(),
          });
        },
        Ur = function (l, p, v, b) {
          var E,
            $ = [],
            z =
              l == null || (E = l.map) === null || E === void 0
                ? void 0
                : E.call(l, function (L, F) {
                    var W, ne;
                    if (d.isValidElement(L)) return L;
                    var Q = L.valueEnum,
                      ie = L.render,
                      ce = L.renderText,
                      oe = L.mode,
                      _ = L.plain,
                      H = L.dataIndex,
                      X = L.request,
                      re = L.params,
                      Y = L.editable,
                      U = (0, g.Z)(L, Mr),
                      J =
                        (W = Fr(L, p)) !== null && W !== void 0
                          ? W
                          : U.children,
                      se = ce ? ce(J, p, F, v) : J,
                      de =
                        typeof U.title == 'function'
                          ? U.title(L, 'descriptions', null)
                          : U.title,
                      pe =
                        typeof U.valueType == 'function'
                          ? U.valueType(p || {}, 'descriptions')
                          : U.valueType,
                      Z = b == null ? void 0 : b.isEditable(H || F),
                      ae = oe || Z ? 'edit' : 'read',
                      ee =
                        b &&
                        ae === 'read' &&
                        Y !== !1 &&
                        (Y == null ? void 0 : Y(se, p, F)) !== !1,
                      le = ee ? ye.Z : d.Fragment,
                      Pe = ae === 'edit' ? se : (0, ir.X)(se, L, se),
                      je = (0, d.createElement)(
                        dr.Item,
                        (0, h.Z)(
                          (0, h.Z)({}, U),
                          {},
                          {
                            key:
                              U.key ||
                              ((ne = U.label) === null || ne === void 0
                                ? void 0
                                : ne.toString()) ||
                              F,
                            label:
                              (de || U.label || U.tooltip || U.tip) &&
                              (0, u.jsx)(Te.G, {
                                label: de || U.label,
                                tooltip: U.tooltip || U.tip,
                                ellipsis: L.ellipsis,
                              }),
                          },
                        ),
                        (0, u.jsxs)(le, {
                          children: [
                            (0, u.jsx)(
                              Hr,
                              (0, h.Z)(
                                (0, h.Z)({}, L),
                                {},
                                {
                                  dataIndex: L.dataIndex || F,
                                  mode: ae,
                                  text: Pe,
                                  valueType: pe,
                                  entity: p,
                                  index: F,
                                  action: v,
                                  editableUtils: b,
                                },
                              ),
                            ),
                            ee &&
                              pe !== 'option' &&
                              (0, u.jsx)(a.Z, {
                                onClick: function () {
                                  b == null || b.startEditable(H || F);
                                },
                              }),
                          ],
                        }),
                      );
                    return pe === 'option' ? ($.push(je), null) : je;
                  }).filter(function (L) {
                    return L;
                  });
          return { options: $ != null && $.length ? $ : null, children: z };
        },
        Gr = function (l) {
          return (0, u.jsx)(
            dr.Item,
            (0, h.Z)((0, h.Z)({}, l), {}, { children: l.children }),
          );
        },
        Vr = function (l) {
          return l.children;
        },
        br = function (l) {
          var p,
            v = l.request,
            b = l.columns,
            E = l.params,
            $ = E === void 0 ? {} : E,
            z = l.dataSource,
            L = l.onDataSourceChange,
            F = l.formProps,
            W = l.editable,
            ne = l.loading,
            Q = l.onLoadingChange,
            ie = l.actionRef,
            ce = l.onRequestError,
            oe = (0, g.Z)(l, zr),
            _ = (0, d.useContext)(Pr.ZP.ConfigContext),
            H = Nr(
              (0, C.Z)(
                (0, T.Z)().mark(function Z() {
                  var ae;
                  return (0, T.Z)().wrap(function (le) {
                    for (;;)
                      switch ((le.prev = le.next)) {
                        case 0:
                          if (!v) {
                            le.next = 6;
                            break;
                          }
                          return (le.next = 3), v($);
                        case 3:
                          (le.t0 = le.sent), (le.next = 7);
                          break;
                        case 6:
                          le.t0 = { data: {} };
                        case 7:
                          return (ae = le.t0), le.abrupt('return', ae);
                        case 9:
                        case 'end':
                          return le.stop();
                      }
                  }, Z);
                }),
              ),
              {
                onRequestError: ce,
                effects: [(0, kr.P)($)],
                manual: !v,
                dataSource: z,
                loading: ne,
                onLoadingChange: Q,
                onDataSourceChange: L,
              },
            ),
            X = Er(
              (0, h.Z)(
                (0, h.Z)({}, l.editable),
                {},
                {
                  childrenColumnName: void 0,
                  dataSource: H.dataSource,
                  setDataSource: H.setDataSource,
                },
              ),
            );
          if (
            ((0, d.useEffect)(
              function () {
                ie && (ie.current = (0, h.Z)({ reload: H.reload }, X));
              },
              [H, ie, X],
            ),
            H.loading || (H.loading === void 0 && v))
          )
            return (0, u.jsx)(Se, {
              type: 'descriptions',
              list: !1,
              pageHeader: !1,
            });
          var re = function () {
              var ae = (0, Ir.Z)(l.children)
                .filter(Boolean)
                .map(function (ee) {
                  if (!d.isValidElement(ee)) return ee;
                  var le = ee == null ? void 0 : ee.props,
                    Pe = le.valueEnum,
                    je = le.valueType,
                    Ke = le.dataIndex,
                    Xe = le.ellipsis,
                    Ye = le.copyable,
                    fr = le.request;
                  return !je && !Pe && !Ke && !fr && !Xe && !Ye
                    ? ee
                    : (0, h.Z)(
                        (0, h.Z)({}, ee == null ? void 0 : ee.props),
                        {},
                        { entity: z },
                      );
                });
              return []
                .concat((0, x.Z)(b || []), (0, x.Z)(ae))
                .filter(function (ee) {
                  return !ee ||
                    (ee != null &&
                      ee.valueType &&
                      ['index', 'indexBorder'].includes(
                        ee == null ? void 0 : ee.valueType,
                      ))
                    ? !1
                    : !(ee != null && ee.hideInDescriptions);
                })
                .sort(function (ee, le) {
                  return le.order || ee.order
                    ? (le.order || 0) - (ee.order || 0)
                    : (le.index || 0) - (ee.index || 0);
                });
            },
            Y = Ur(
              re(),
              H.dataSource || {},
              (ie == null ? void 0 : ie.current) || H,
              W ? X : void 0,
            ),
            U = Y.options,
            J = Y.children,
            se = W ? o.ZP : Vr,
            de = null;
          (oe.title || oe.tooltip || oe.tip) &&
            (de = (0, u.jsx)(Te.G, {
              label: oe.title,
              tooltip: oe.tooltip || oe.tip,
            }));
          var pe = _.getPrefixCls('pro-descriptions');
          return (0, u.jsx)(Cr.S, {
            children: (0, u.jsx)(
              se,
              (0, h.Z)(
                (0, h.Z)(
                  {
                    form:
                      (p = l.editable) === null || p === void 0
                        ? void 0
                        : p.form,
                    component: !1,
                    submitter: !1,
                  },
                  F,
                ),
                {},
                {
                  onFinish: void 0,
                  children: (0, u.jsx)(
                    dr,
                    (0, h.Z)(
                      (0, h.Z)({ className: pe }, oe),
                      {},
                      {
                        extra: oe.extra
                          ? (0, u.jsxs)(ye.Z, { children: [U, oe.extra] })
                          : U,
                        title: de,
                        children: J,
                      },
                    ),
                  ),
                },
              ),
              'form',
            ),
          });
        };
      br.Item = Gr;
      var ea = null;
    },
    97269: function (V, A, f) {
      'use strict';
      f.d(A, {
        A: function () {
          return k;
        },
      });
      var x = f(1413),
        T = f(85893),
        C = f(80442),
        g = f(89671),
        h = f(4942),
        d = f(97685),
        u = f(18073),
        w = f(60869),
        r = f(81736),
        a = f(58720),
        o = f(26713),
        n = f(94184),
        e = f.n(n),
        i = f(67294),
        s = f(66758),
        c = f(2514),
        m = f(14855),
        S = function (q) {
          var B;
          return (0, h.Z)({}, q.componentCls, {
            '&-title': { marginBlockEnd: q.marginXL, fontWeight: 'bold' },
            '&-container': (0, h.Z)(
              { flexWrap: 'wrap', maxWidth: '100%' },
              '> div'.concat(q.antCls, '-space-item'),
              { maxWidth: '100%' },
            ),
            '&-twoLine':
              ((B = { display: 'block', width: '100%' }),
              (0, h.Z)(B, ''.concat(q.componentCls, '-title'), {
                width: '100%',
                margin: '8px 0',
              }),
              (0, h.Z)(B, ''.concat(q.componentCls, '-container'), {
                paddingInlineStart: 16,
              }),
              (0, h.Z)(
                B,
                ''
                  .concat(q.antCls, '-space-item,')
                  .concat(q.antCls, '-form-item'),
                { width: '100%' },
              ),
              (0, h.Z)(B, ''.concat(q.antCls, '-form-item'), {
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
              B),
          });
        };
      function y(O) {
        return (0, m.Xj)('ProFormGroup', function (q) {
          var B = (0, x.Z)(
            (0, x.Z)({}, q),
            {},
            { componentCls: '.'.concat(O) },
          );
          return [S(B)];
        });
      }
      var j = i.forwardRef(function (O, q) {
        var B = i.useContext(s.Z),
          te = B.groupProps,
          N = (0, x.Z)((0, x.Z)({}, te), O),
          D = N.children,
          I = N.collapsible,
          M = N.defaultCollapsed,
          G = N.style,
          K = N.labelLayout,
          ue = N.title,
          fe = ue === void 0 ? O.label : ue,
          xe = N.tooltip,
          De = N.align,
          be = De === void 0 ? 'start' : De,
          Ie = N.direction,
          Je = N.size,
          Be = Je === void 0 ? 32 : Je,
          Ae = N.titleStyle,
          ge = N.titleRender,
          ve = N.spaceProps,
          Le = N.extra,
          ye = N.autoFocus,
          Oe = (0, w.Z)(
            function () {
              return M || !1;
            },
            { value: O.collapsed, onChange: O.onCollapse },
          ),
          ke = (0, d.Z)(Oe, 2),
          $e = ke[0],
          Qe = ke[1],
          _e = (0, i.useContext)(a.ZP.ConfigContext),
          Re = _e.getPrefixCls,
          Ze = (0, c.zx)(O),
          er = Ze.ColWrapper,
          Ne = Ze.RowWrapper,
          we = Re('pro-form-group'),
          Me = y(we),
          rr = Me.wrapSSR,
          qe = Me.hashId,
          ze =
            I &&
            (0, T.jsx)(u.Z, {
              style: { marginInlineEnd: 8 },
              rotate: $e ? void 0 : 90,
            }),
          Fe = (0, T.jsx)(r.G, {
            label: ze ? (0, T.jsxs)('div', { children: [ze, fe] }) : fe,
            tooltip: xe,
          }),
          He = (0, i.useCallback)(
            function (Se) {
              var Ee = Se.children;
              return (0, T.jsx)(
                o.Z,
                (0, x.Z)(
                  (0, x.Z)({}, ve),
                  {},
                  {
                    className: e()(
                      ''.concat(we, '-container ').concat(qe),
                      ve == null ? void 0 : ve.className,
                    ),
                    size: Be,
                    align: be,
                    direction: Ie,
                    style: (0, x.Z)(
                      { rowGap: 0 },
                      ve == null ? void 0 : ve.style,
                    ),
                    children: Ee,
                  },
                ),
              );
            },
            [be, we, Ie, qe, Be, ve],
          ),
          Ue = ge ? ge(Fe, O) : Fe,
          ar = (0, i.useMemo)(
            function () {
              var Se = [],
                Ee = i.Children.toArray(D).map(function (he, ir) {
                  var Te;
                  return i.isValidElement(he) &&
                    !(
                      he == null ||
                      (Te = he.props) === null ||
                      Te === void 0
                    ) &&
                    Te.hidden
                    ? (Se.push(he), null)
                    : ir === 0 && i.isValidElement(he) && ye
                    ? i.cloneElement(
                        he,
                        (0, x.Z)((0, x.Z)({}, he.props), {}, { autoFocus: ye }),
                      )
                    : he;
                });
              return [
                (0, T.jsx)(Ne, { Wrapper: He, children: Ee }, 'children'),
                Se.length > 0
                  ? (0, T.jsx)('div', {
                      style: { display: 'none' },
                      children: Se,
                    })
                  : null,
              ];
            },
            [D, Ne, He, ye],
          ),
          Ge = (0, d.Z)(ar, 2),
          tr = Ge[0],
          nr = Ge[1];
        return rr(
          (0, T.jsx)(er, {
            children: (0, T.jsxs)('div', {
              className: e()(
                we,
                qe,
                (0, h.Z)({}, ''.concat(we, '-twoLine'), K === 'twoLine'),
              ),
              style: G,
              ref: q,
              children: [
                nr,
                (fe || xe || Le) &&
                  (0, T.jsx)('div', {
                    className: ''.concat(we, '-title ').concat(qe),
                    style: Ae,
                    onClick: function () {
                      Qe(!$e);
                    },
                    children: Le
                      ? (0, T.jsxs)('div', {
                          style: {
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          },
                          children: [
                            Ue,
                            (0, T.jsx)('span', {
                              onClick: function (Ee) {
                                return Ee.stopPropagation();
                              },
                              children: Le,
                            }),
                          ],
                        })
                      : Ue,
                  }),
                (0, T.jsx)('div', {
                  style: { display: I && $e ? 'none' : void 0 },
                  children: tr,
                }),
              ],
            }),
          }),
        );
      });
      j.displayName = 'ProForm-Group';
      var P = j,
        R = f(62370);
      function k(O) {
        return (0, T.jsx)(
          g.I,
          (0, x.Z)(
            {
              layout: 'vertical',
              submitter: {
                render: function (B, te) {
                  return te.reverse();
                },
              },
              contentRender: function (B, te) {
                return (0, T.jsxs)(T.Fragment, { children: [B, te] });
              },
            },
            O,
          ),
        );
      }
      (k.Group = P),
        (k.useForm = C.Z.useForm),
        (k.Item = R.Z),
        (k.useWatch = C.Z.useWatch),
        (k.ErrorList = C.Z.ErrorList),
        (k.Provider = C.Z.Provider),
        (k.useFormInstance = C.Z.useFormInstance);
    },
    81736: function (V, A, f) {
      'use strict';
      f.d(A, {
        G: function () {
          return m;
        },
      });
      var x = f(1413),
        T = f(4942),
        C = f(85893),
        g = f(67294),
        h = {
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
        d = h,
        u = f(84089),
        w = function (y, j) {
          return g.createElement(
            u.Z,
            (0, x.Z)((0, x.Z)({}, y), {}, { ref: j, icon: d }),
          );
        };
      w.displayName = 'InfoCircleOutlined';
      var r = g.forwardRef(w),
        a = f(58720),
        o = f(83062),
        n = f(94184),
        e = f.n(n),
        i = f(14855),
        s = function (y) {
          return (0, T.Z)({}, y.componentCls, {
            display: 'inline-flex',
            alignItems: 'center',
            maxWidth: '100%',
            '&-icon': {
              display: 'block',
              marginInlineStart: '4px',
              cursor: 'pointer',
              '&:hover': { color: y.colorPrimary },
            },
            '&-title': { display: 'inline-flex', flex: '1' },
            '&-subtitle ': {
              marginInlineStart: 8,
              color: y.colorTextSecondary,
              fontWeight: 'normal',
              fontSize: y.fontSize,
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
      function c(S) {
        return (0, i.Xj)('LabelIconTip', function (y) {
          var j = (0, x.Z)(
            (0, x.Z)({}, y),
            {},
            { componentCls: '.'.concat(S) },
          );
          return [s(j)];
        });
      }
      var m = g.memo(function (S) {
        var y = S.label,
          j = S.tooltip,
          P = S.ellipsis,
          R = S.subTitle,
          k = (0, g.useContext)(a.ZP.ConfigContext),
          O = k.getPrefixCls,
          q = O('pro-core-label-tip'),
          B = c(q),
          te = B.wrapSSR,
          N = B.hashId;
        if (!j && !R) return (0, C.jsx)(C.Fragment, { children: y });
        var D = typeof j == 'string' || g.isValidElement(j) ? { title: j } : j,
          I = (D == null ? void 0 : D.icon) || (0, C.jsx)(r, {});
        return te(
          (0, C.jsxs)('div', {
            className: e()(q, N),
            onMouseDown: function (G) {
              return G.stopPropagation();
            },
            onMouseLeave: function (G) {
              return G.stopPropagation();
            },
            onMouseMove: function (G) {
              return G.stopPropagation();
            },
            children: [
              (0, C.jsx)('div', {
                className: e()(
                  ''.concat(q, '-title'),
                  N,
                  (0, T.Z)({}, ''.concat(q, '-title-ellipsis'), P),
                ),
                children: y,
              }),
              R &&
                (0, C.jsx)('div', {
                  className: ''.concat(q, '-subtitle ').concat(N),
                  children: R,
                }),
              j &&
                (0, C.jsx)(
                  o.Z,
                  (0, x.Z)(
                    (0, x.Z)({}, D),
                    {},
                    {
                      children: (0, C.jsx)('span', {
                        className: ''.concat(q, '-icon ').concat(N),
                        children: I,
                      }),
                    },
                  ),
                ),
            ],
          }),
        );
      });
    },
    6070: function (V, A, f) {
      var x = f(68248),
        T = {};
      for (var C in x) x.hasOwnProperty(C) && (T[x[C]] = C);
      var g = (V.exports = {
        rgb: { channels: 3, labels: 'rgb' },
        hsl: { channels: 3, labels: 'hsl' },
        hsv: { channels: 3, labels: 'hsv' },
        hwb: { channels: 3, labels: 'hwb' },
        cmyk: { channels: 4, labels: 'cmyk' },
        xyz: { channels: 3, labels: 'xyz' },
        lab: { channels: 3, labels: 'lab' },
        lch: { channels: 3, labels: 'lch' },
        hex: { channels: 1, labels: ['hex'] },
        keyword: { channels: 1, labels: ['keyword'] },
        ansi16: { channels: 1, labels: ['ansi16'] },
        ansi256: { channels: 1, labels: ['ansi256'] },
        hcg: { channels: 3, labels: ['h', 'c', 'g'] },
        apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
        gray: { channels: 1, labels: ['gray'] },
      });
      for (var h in g)
        if (g.hasOwnProperty(h)) {
          if (!('channels' in g[h]))
            throw new Error('missing channels property: ' + h);
          if (!('labels' in g[h]))
            throw new Error('missing channel labels property: ' + h);
          if (g[h].labels.length !== g[h].channels)
            throw new Error('channel and label counts mismatch: ' + h);
          var d = g[h].channels,
            u = g[h].labels;
          delete g[h].channels,
            delete g[h].labels,
            Object.defineProperty(g[h], 'channels', { value: d }),
            Object.defineProperty(g[h], 'labels', { value: u });
        }
      (g.rgb.hsl = function (r) {
        var a = r[0] / 255,
          o = r[1] / 255,
          n = r[2] / 255,
          e = Math.min(a, o, n),
          i = Math.max(a, o, n),
          s = i - e,
          c,
          m,
          S;
        return (
          i === e
            ? (c = 0)
            : a === i
            ? (c = (o - n) / s)
            : o === i
            ? (c = 2 + (n - a) / s)
            : n === i && (c = 4 + (a - o) / s),
          (c = Math.min(c * 60, 360)),
          c < 0 && (c += 360),
          (S = (e + i) / 2),
          i === e
            ? (m = 0)
            : S <= 0.5
            ? (m = s / (i + e))
            : (m = s / (2 - i - e)),
          [c, m * 100, S * 100]
        );
      }),
        (g.rgb.hsv = function (r) {
          var a,
            o,
            n,
            e,
            i,
            s = r[0] / 255,
            c = r[1] / 255,
            m = r[2] / 255,
            S = Math.max(s, c, m),
            y = S - Math.min(s, c, m),
            j = function (P) {
              return (S - P) / 6 / y + 1 / 2;
            };
          return (
            y === 0
              ? (e = i = 0)
              : ((i = y / S),
                (a = j(s)),
                (o = j(c)),
                (n = j(m)),
                s === S
                  ? (e = n - o)
                  : c === S
                  ? (e = 1 / 3 + a - n)
                  : m === S && (e = 2 / 3 + o - a),
                e < 0 ? (e += 1) : e > 1 && (e -= 1)),
            [e * 360, i * 100, S * 100]
          );
        }),
        (g.rgb.hwb = function (r) {
          var a = r[0],
            o = r[1],
            n = r[2],
            e = g.rgb.hsl(r)[0],
            i = (1 / 255) * Math.min(a, Math.min(o, n));
          return (
            (n = 1 - (1 / 255) * Math.max(a, Math.max(o, n))),
            [e, i * 100, n * 100]
          );
        }),
        (g.rgb.cmyk = function (r) {
          var a = r[0] / 255,
            o = r[1] / 255,
            n = r[2] / 255,
            e,
            i,
            s,
            c;
          return (
            (c = Math.min(1 - a, 1 - o, 1 - n)),
            (e = (1 - a - c) / (1 - c) || 0),
            (i = (1 - o - c) / (1 - c) || 0),
            (s = (1 - n - c) / (1 - c) || 0),
            [e * 100, i * 100, s * 100, c * 100]
          );
        });
      function w(r, a) {
        return (
          Math.pow(r[0] - a[0], 2) +
          Math.pow(r[1] - a[1], 2) +
          Math.pow(r[2] - a[2], 2)
        );
      }
      (g.rgb.keyword = function (r) {
        var a = T[r];
        if (a) return a;
        var o = 1 / 0,
          n;
        for (var e in x)
          if (x.hasOwnProperty(e)) {
            var i = x[e],
              s = w(r, i);
            s < o && ((o = s), (n = e));
          }
        return n;
      }),
        (g.keyword.rgb = function (r) {
          return x[r];
        }),
        (g.rgb.xyz = function (r) {
          var a = r[0] / 255,
            o = r[1] / 255,
            n = r[2] / 255;
          (a = a > 0.04045 ? Math.pow((a + 0.055) / 1.055, 2.4) : a / 12.92),
            (o = o > 0.04045 ? Math.pow((o + 0.055) / 1.055, 2.4) : o / 12.92),
            (n = n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92);
          var e = a * 0.4124 + o * 0.3576 + n * 0.1805,
            i = a * 0.2126 + o * 0.7152 + n * 0.0722,
            s = a * 0.0193 + o * 0.1192 + n * 0.9505;
          return [e * 100, i * 100, s * 100];
        }),
        (g.rgb.lab = function (r) {
          var a = g.rgb.xyz(r),
            o = a[0],
            n = a[1],
            e = a[2],
            i,
            s,
            c;
          return (
            (o /= 95.047),
            (n /= 100),
            (e /= 108.883),
            (o = o > 0.008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116),
            (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116),
            (e = e > 0.008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116),
            (i = 116 * n - 16),
            (s = 500 * (o - n)),
            (c = 200 * (n - e)),
            [i, s, c]
          );
        }),
        (g.hsl.rgb = function (r) {
          var a = r[0] / 360,
            o = r[1] / 100,
            n = r[2] / 100,
            e,
            i,
            s,
            c,
            m;
          if (o === 0) return (m = n * 255), [m, m, m];
          n < 0.5 ? (i = n * (1 + o)) : (i = n + o - n * o),
            (e = 2 * n - i),
            (c = [0, 0, 0]);
          for (var S = 0; S < 3; S++)
            (s = a + (1 / 3) * -(S - 1)),
              s < 0 && s++,
              s > 1 && s--,
              6 * s < 1
                ? (m = e + (i - e) * 6 * s)
                : 2 * s < 1
                ? (m = i)
                : 3 * s < 2
                ? (m = e + (i - e) * (2 / 3 - s) * 6)
                : (m = e),
              (c[S] = m * 255);
          return c;
        }),
        (g.hsl.hsv = function (r) {
          var a = r[0],
            o = r[1] / 100,
            n = r[2] / 100,
            e = o,
            i = Math.max(n, 0.01),
            s,
            c;
          return (
            (n *= 2),
            (o *= n <= 1 ? n : 2 - n),
            (e *= i <= 1 ? i : 2 - i),
            (c = (n + o) / 2),
            (s = n === 0 ? (2 * e) / (i + e) : (2 * o) / (n + o)),
            [a, s * 100, c * 100]
          );
        }),
        (g.hsv.rgb = function (r) {
          var a = r[0] / 60,
            o = r[1] / 100,
            n = r[2] / 100,
            e = Math.floor(a) % 6,
            i = a - Math.floor(a),
            s = 255 * n * (1 - o),
            c = 255 * n * (1 - o * i),
            m = 255 * n * (1 - o * (1 - i));
          switch (((n *= 255), e)) {
            case 0:
              return [n, m, s];
            case 1:
              return [c, n, s];
            case 2:
              return [s, n, m];
            case 3:
              return [s, c, n];
            case 4:
              return [m, s, n];
            case 5:
              return [n, s, c];
          }
        }),
        (g.hsv.hsl = function (r) {
          var a = r[0],
            o = r[1] / 100,
            n = r[2] / 100,
            e = Math.max(n, 0.01),
            i,
            s,
            c;
          return (
            (c = (2 - o) * n),
            (i = (2 - o) * e),
            (s = o * e),
            (s /= i <= 1 ? i : 2 - i),
            (s = s || 0),
            (c /= 2),
            [a, s * 100, c * 100]
          );
        }),
        (g.hwb.rgb = function (r) {
          var a = r[0] / 360,
            o = r[1] / 100,
            n = r[2] / 100,
            e = o + n,
            i,
            s,
            c,
            m;
          e > 1 && ((o /= e), (n /= e)),
            (i = Math.floor(6 * a)),
            (s = 1 - n),
            (c = 6 * a - i),
            i & 1 && (c = 1 - c),
            (m = o + c * (s - o));
          var S, y, j;
          switch (i) {
            default:
            case 6:
            case 0:
              (S = s), (y = m), (j = o);
              break;
            case 1:
              (S = m), (y = s), (j = o);
              break;
            case 2:
              (S = o), (y = s), (j = m);
              break;
            case 3:
              (S = o), (y = m), (j = s);
              break;
            case 4:
              (S = m), (y = o), (j = s);
              break;
            case 5:
              (S = s), (y = o), (j = m);
              break;
          }
          return [S * 255, y * 255, j * 255];
        }),
        (g.cmyk.rgb = function (r) {
          var a = r[0] / 100,
            o = r[1] / 100,
            n = r[2] / 100,
            e = r[3] / 100,
            i,
            s,
            c;
          return (
            (i = 1 - Math.min(1, a * (1 - e) + e)),
            (s = 1 - Math.min(1, o * (1 - e) + e)),
            (c = 1 - Math.min(1, n * (1 - e) + e)),
            [i * 255, s * 255, c * 255]
          );
        }),
        (g.xyz.rgb = function (r) {
          var a = r[0] / 100,
            o = r[1] / 100,
            n = r[2] / 100,
            e,
            i,
            s;
          return (
            (e = a * 3.2406 + o * -1.5372 + n * -0.4986),
            (i = a * -0.9689 + o * 1.8758 + n * 0.0415),
            (s = a * 0.0557 + o * -0.204 + n * 1.057),
            (e =
              e > 0.0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055 : e * 12.92),
            (i =
              i > 0.0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055 : i * 12.92),
            (s =
              s > 0.0031308 ? 1.055 * Math.pow(s, 1 / 2.4) - 0.055 : s * 12.92),
            (e = Math.min(Math.max(0, e), 1)),
            (i = Math.min(Math.max(0, i), 1)),
            (s = Math.min(Math.max(0, s), 1)),
            [e * 255, i * 255, s * 255]
          );
        }),
        (g.xyz.lab = function (r) {
          var a = r[0],
            o = r[1],
            n = r[2],
            e,
            i,
            s;
          return (
            (a /= 95.047),
            (o /= 100),
            (n /= 108.883),
            (a = a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116),
            (o = o > 0.008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116),
            (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116),
            (e = 116 * o - 16),
            (i = 500 * (a - o)),
            (s = 200 * (o - n)),
            [e, i, s]
          );
        }),
        (g.lab.xyz = function (r) {
          var a = r[0],
            o = r[1],
            n = r[2],
            e,
            i,
            s;
          (i = (a + 16) / 116), (e = o / 500 + i), (s = i - n / 200);
          var c = Math.pow(i, 3),
            m = Math.pow(e, 3),
            S = Math.pow(s, 3);
          return (
            (i = c > 0.008856 ? c : (i - 16 / 116) / 7.787),
            (e = m > 0.008856 ? m : (e - 16 / 116) / 7.787),
            (s = S > 0.008856 ? S : (s - 16 / 116) / 7.787),
            (e *= 95.047),
            (i *= 100),
            (s *= 108.883),
            [e, i, s]
          );
        }),
        (g.lab.lch = function (r) {
          var a = r[0],
            o = r[1],
            n = r[2],
            e,
            i,
            s;
          return (
            (e = Math.atan2(n, o)),
            (i = (e * 360) / 2 / Math.PI),
            i < 0 && (i += 360),
            (s = Math.sqrt(o * o + n * n)),
            [a, s, i]
          );
        }),
        (g.lch.lab = function (r) {
          var a = r[0],
            o = r[1],
            n = r[2],
            e,
            i,
            s;
          return (
            (s = (n / 360) * 2 * Math.PI),
            (e = o * Math.cos(s)),
            (i = o * Math.sin(s)),
            [a, e, i]
          );
        }),
        (g.rgb.ansi16 = function (r) {
          var a = r[0],
            o = r[1],
            n = r[2],
            e = 1 in arguments ? arguments[1] : g.rgb.hsv(r)[2];
          if (((e = Math.round(e / 50)), e === 0)) return 30;
          var i =
            30 +
            ((Math.round(n / 255) << 2) |
              (Math.round(o / 255) << 1) |
              Math.round(a / 255));
          return e === 2 && (i += 60), i;
        }),
        (g.hsv.ansi16 = function (r) {
          return g.rgb.ansi16(g.hsv.rgb(r), r[2]);
        }),
        (g.rgb.ansi256 = function (r) {
          var a = r[0],
            o = r[1],
            n = r[2];
          if (a === o && o === n)
            return a < 8
              ? 16
              : a > 248
              ? 231
              : Math.round(((a - 8) / 247) * 24) + 232;
          var e =
            16 +
            36 * Math.round((a / 255) * 5) +
            6 * Math.round((o / 255) * 5) +
            Math.round((n / 255) * 5);
          return e;
        }),
        (g.ansi16.rgb = function (r) {
          var a = r % 10;
          if (a === 0 || a === 7)
            return r > 50 && (a += 3.5), (a = (a / 10.5) * 255), [a, a, a];
          var o = (~~(r > 50) + 1) * 0.5,
            n = (a & 1) * o * 255,
            e = ((a >> 1) & 1) * o * 255,
            i = ((a >> 2) & 1) * o * 255;
          return [n, e, i];
        }),
        (g.ansi256.rgb = function (r) {
          if (r >= 232) {
            var a = (r - 232) * 10 + 8;
            return [a, a, a];
          }
          r -= 16;
          var o,
            n = (Math.floor(r / 36) / 5) * 255,
            e = (Math.floor((o = r % 36) / 6) / 5) * 255,
            i = ((o % 6) / 5) * 255;
          return [n, e, i];
        }),
        (g.rgb.hex = function (r) {
          var a =
              ((Math.round(r[0]) & 255) << 16) +
              ((Math.round(r[1]) & 255) << 8) +
              (Math.round(r[2]) & 255),
            o = a.toString(16).toUpperCase();
          return '000000'.substring(o.length) + o;
        }),
        (g.hex.rgb = function (r) {
          var a = r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
          if (!a) return [0, 0, 0];
          var o = a[0];
          a[0].length === 3 &&
            (o = o
              .split('')
              .map(function (c) {
                return c + c;
              })
              .join(''));
          var n = parseInt(o, 16),
            e = (n >> 16) & 255,
            i = (n >> 8) & 255,
            s = n & 255;
          return [e, i, s];
        }),
        (g.rgb.hcg = function (r) {
          var a = r[0] / 255,
            o = r[1] / 255,
            n = r[2] / 255,
            e = Math.max(Math.max(a, o), n),
            i = Math.min(Math.min(a, o), n),
            s = e - i,
            c,
            m;
          return (
            s < 1 ? (c = i / (1 - s)) : (c = 0),
            s <= 0
              ? (m = 0)
              : e === a
              ? (m = ((o - n) / s) % 6)
              : e === o
              ? (m = 2 + (n - a) / s)
              : (m = 4 + (a - o) / s + 4),
            (m /= 6),
            (m %= 1),
            [m * 360, s * 100, c * 100]
          );
        }),
        (g.hsl.hcg = function (r) {
          var a = r[1] / 100,
            o = r[2] / 100,
            n = 1,
            e = 0;
          return (
            o < 0.5 ? (n = 2 * a * o) : (n = 2 * a * (1 - o)),
            n < 1 && (e = (o - 0.5 * n) / (1 - n)),
            [r[0], n * 100, e * 100]
          );
        }),
        (g.hsv.hcg = function (r) {
          var a = r[1] / 100,
            o = r[2] / 100,
            n = a * o,
            e = 0;
          return n < 1 && (e = (o - n) / (1 - n)), [r[0], n * 100, e * 100];
        }),
        (g.hcg.rgb = function (r) {
          var a = r[0] / 360,
            o = r[1] / 100,
            n = r[2] / 100;
          if (o === 0) return [n * 255, n * 255, n * 255];
          var e = [0, 0, 0],
            i = (a % 1) * 6,
            s = i % 1,
            c = 1 - s,
            m = 0;
          switch (Math.floor(i)) {
            case 0:
              (e[0] = 1), (e[1] = s), (e[2] = 0);
              break;
            case 1:
              (e[0] = c), (e[1] = 1), (e[2] = 0);
              break;
            case 2:
              (e[0] = 0), (e[1] = 1), (e[2] = s);
              break;
            case 3:
              (e[0] = 0), (e[1] = c), (e[2] = 1);
              break;
            case 4:
              (e[0] = s), (e[1] = 0), (e[2] = 1);
              break;
            default:
              (e[0] = 1), (e[1] = 0), (e[2] = c);
          }
          return (
            (m = (1 - o) * n),
            [(o * e[0] + m) * 255, (o * e[1] + m) * 255, (o * e[2] + m) * 255]
          );
        }),
        (g.hcg.hsv = function (r) {
          var a = r[1] / 100,
            o = r[2] / 100,
            n = a + o * (1 - a),
            e = 0;
          return n > 0 && (e = a / n), [r[0], e * 100, n * 100];
        }),
        (g.hcg.hsl = function (r) {
          var a = r[1] / 100,
            o = r[2] / 100,
            n = o * (1 - a) + 0.5 * a,
            e = 0;
          return (
            n > 0 && n < 0.5
              ? (e = a / (2 * n))
              : n >= 0.5 && n < 1 && (e = a / (2 * (1 - n))),
            [r[0], e * 100, n * 100]
          );
        }),
        (g.hcg.hwb = function (r) {
          var a = r[1] / 100,
            o = r[2] / 100,
            n = a + o * (1 - a);
          return [r[0], (n - a) * 100, (1 - n) * 100];
        }),
        (g.hwb.hcg = function (r) {
          var a = r[1] / 100,
            o = r[2] / 100,
            n = 1 - o,
            e = n - a,
            i = 0;
          return e < 1 && (i = (n - e) / (1 - e)), [r[0], e * 100, i * 100];
        }),
        (g.apple.rgb = function (r) {
          return [
            (r[0] / 65535) * 255,
            (r[1] / 65535) * 255,
            (r[2] / 65535) * 255,
          ];
        }),
        (g.rgb.apple = function (r) {
          return [
            (r[0] / 255) * 65535,
            (r[1] / 255) * 65535,
            (r[2] / 255) * 65535,
          ];
        }),
        (g.gray.rgb = function (r) {
          return [(r[0] / 100) * 255, (r[0] / 100) * 255, (r[0] / 100) * 255];
        }),
        (g.gray.hsl = g.gray.hsv =
          function (r) {
            return [0, 0, r[0]];
          }),
        (g.gray.hwb = function (r) {
          return [0, 100, r[0]];
        }),
        (g.gray.cmyk = function (r) {
          return [0, 0, 0, r[0]];
        }),
        (g.gray.lab = function (r) {
          return [r[0], 0, 0];
        }),
        (g.gray.hex = function (r) {
          var a = Math.round((r[0] / 100) * 255) & 255,
            o = (a << 16) + (a << 8) + a,
            n = o.toString(16).toUpperCase();
          return '000000'.substring(n.length) + n;
        }),
        (g.rgb.gray = function (r) {
          var a = (r[0] + r[1] + r[2]) / 3;
          return [(a / 255) * 100];
        });
    },
    13347: function (V, A, f) {
      var x = f(6070),
        T = f(44351),
        C = {},
        g = Object.keys(x);
      function h(u) {
        var w = function (r) {
          return r == null
            ? r
            : (arguments.length > 1 &&
                (r = Array.prototype.slice.call(arguments)),
              u(r));
        };
        return 'conversion' in u && (w.conversion = u.conversion), w;
      }
      function d(u) {
        var w = function (r) {
          if (r == null) return r;
          arguments.length > 1 && (r = Array.prototype.slice.call(arguments));
          var a = u(r);
          if (typeof a == 'object')
            for (var o = a.length, n = 0; n < o; n++) a[n] = Math.round(a[n]);
          return a;
        };
        return 'conversion' in u && (w.conversion = u.conversion), w;
      }
      g.forEach(function (u) {
        (C[u] = {}),
          Object.defineProperty(C[u], 'channels', { value: x[u].channels }),
          Object.defineProperty(C[u], 'labels', { value: x[u].labels });
        var w = T(u),
          r = Object.keys(w);
        r.forEach(function (a) {
          var o = w[a];
          (C[u][a] = d(o)), (C[u][a].raw = h(o));
        });
      }),
        (V.exports = C);
    },
    44351: function (V, A, f) {
      var x = f(6070);
      function T() {
        for (var d = {}, u = Object.keys(x), w = u.length, r = 0; r < w; r++)
          d[u[r]] = { distance: -1, parent: null };
        return d;
      }
      function C(d) {
        var u = T(),
          w = [d];
        for (u[d].distance = 0; w.length; )
          for (
            var r = w.pop(), a = Object.keys(x[r]), o = a.length, n = 0;
            n < o;
            n++
          ) {
            var e = a[n],
              i = u[e];
            i.distance === -1 &&
              ((i.distance = u[r].distance + 1), (i.parent = r), w.unshift(e));
          }
        return u;
      }
      function g(d, u) {
        return function (w) {
          return u(d(w));
        };
      }
      function h(d, u) {
        for (
          var w = [u[d].parent, d], r = x[u[d].parent][d], a = u[d].parent;
          u[a].parent;

        )
          w.unshift(u[a].parent),
            (r = g(x[u[a].parent][a], r)),
            (a = u[a].parent);
        return (r.conversion = w), r;
      }
      V.exports = function (d) {
        for (
          var u = C(d), w = {}, r = Object.keys(u), a = r.length, o = 0;
          o < a;
          o++
        ) {
          var n = r[o],
            e = u[n];
          e.parent !== null && (w[n] = h(n, u));
        }
        return w;
      };
    },
    68248: function (V) {
      'use strict';
      V.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
      };
    },
    85557: function (V) {
      'use strict';
      var A = /[|\\{}()[\]^$+*?.]/g;
      V.exports = function (f) {
        if (typeof f != 'string') throw new TypeError('Expected a string');
        return f.replace(A, '\\$&');
      };
    },
    73791: function (V, A, f) {
      'use strict';
      V = f.nmd(V);
      var x = f(18698).default,
        T = f(13347),
        C = function (w, r) {
          return function () {
            var a = w.apply(T, arguments);
            return '\x1B['.concat(a + r, 'm');
          };
        },
        g = function (w, r) {
          return function () {
            var a = w.apply(T, arguments);
            return '\x1B['.concat(38 + r, ';5;').concat(a, 'm');
          };
        },
        h = function (w, r) {
          return function () {
            var a = w.apply(T, arguments);
            return '\x1B['
              .concat(38 + r, ';2;')
              .concat(a[0], ';')
              .concat(a[1], ';')
              .concat(a[2], 'm');
          };
        };
      function d() {
        var u = new Map(),
          w = {
            modifier: {
              reset: [0, 0],
              bold: [1, 22],
              dim: [2, 22],
              italic: [3, 23],
              underline: [4, 24],
              inverse: [7, 27],
              hidden: [8, 28],
              strikethrough: [9, 29],
            },
            color: {
              black: [30, 39],
              red: [31, 39],
              green: [32, 39],
              yellow: [33, 39],
              blue: [34, 39],
              magenta: [35, 39],
              cyan: [36, 39],
              white: [37, 39],
              gray: [90, 39],
              redBright: [91, 39],
              greenBright: [92, 39],
              yellowBright: [93, 39],
              blueBright: [94, 39],
              magentaBright: [95, 39],
              cyanBright: [96, 39],
              whiteBright: [97, 39],
            },
            bgColor: {
              bgBlack: [40, 49],
              bgRed: [41, 49],
              bgGreen: [42, 49],
              bgYellow: [43, 49],
              bgBlue: [44, 49],
              bgMagenta: [45, 49],
              bgCyan: [46, 49],
              bgWhite: [47, 49],
              bgBlackBright: [100, 49],
              bgRedBright: [101, 49],
              bgGreenBright: [102, 49],
              bgYellowBright: [103, 49],
              bgBlueBright: [104, 49],
              bgMagentaBright: [105, 49],
              bgCyanBright: [106, 49],
              bgWhiteBright: [107, 49],
            },
          };
        w.color.grey = w.color.gray;
        for (var r = 0, a = Object.keys(w); r < a.length; r++) {
          for (
            var o = a[r], n = w[o], e = 0, i = Object.keys(n);
            e < i.length;
            e++
          ) {
            var s = i[e],
              c = n[s];
            (w[s] = {
              open: '\x1B['.concat(c[0], 'm'),
              close: '\x1B['.concat(c[1], 'm'),
            }),
              (n[s] = w[s]),
              u.set(c[0], c[1]);
          }
          Object.defineProperty(w, o, { value: n, enumerable: !1 }),
            Object.defineProperty(w, 'codes', { value: u, enumerable: !1 });
        }
        var m = function (O) {
            return O;
          },
          S = function (O, q, B) {
            return [O, q, B];
          };
        (w.color.close = '\x1B[39m'),
          (w.bgColor.close = '\x1B[49m'),
          (w.color.ansi = { ansi: C(m, 0) }),
          (w.color.ansi256 = { ansi256: g(m, 0) }),
          (w.color.ansi16m = { rgb: h(S, 0) }),
          (w.bgColor.ansi = { ansi: C(m, 10) }),
          (w.bgColor.ansi256 = { ansi256: g(m, 10) }),
          (w.bgColor.ansi16m = { rgb: h(S, 10) });
        for (var y = 0, j = Object.keys(T); y < j.length; y++) {
          var P = j[y];
          if (x(T[P]) === 'object') {
            var R = T[P];
            P === 'ansi16' && (P = 'ansi'),
              'ansi16' in R &&
                ((w.color.ansi[P] = C(R.ansi16, 0)),
                (w.bgColor.ansi[P] = C(R.ansi16, 10))),
              'ansi256' in R &&
                ((w.color.ansi256[P] = g(R.ansi256, 0)),
                (w.bgColor.ansi256[P] = g(R.ansi256, 10))),
              'rgb' in R &&
                ((w.color.ansi16m[P] = h(R.rgb, 0)),
                (w.bgColor.ansi16m[P] = h(R.rgb, 10)));
          }
        }
        return w;
      }
      Object.defineProperty(V, 'exports', { enumerable: !0, get: d });
    },
    61765: function (V, A, f) {
      'use strict';
      var x = f(34155),
        T = f(74704).default,
        C = f(85557),
        g = f(73791),
        h = f(90392).stdout,
        d = f(23627),
        u =
          x.platform === 'win32' &&
          !({ NODE_ENV: 'production', PUBLIC_PATH: '/' }.TERM || '')
            .toLowerCase()
            .startsWith('xterm'),
        w = ['ansi', 'ansi', 'ansi256', 'ansi16m'],
        r = new Set(['gray']),
        a = Object.create(null);
      function o(N, D) {
        D = D || {};
        var I = h ? h.level : 0;
        (N.level = D.level === void 0 ? I : D.level),
          (N.enabled = 'enabled' in D ? D.enabled : N.level > 0);
      }
      function n(N) {
        if (!this || !(this instanceof n) || this.template) {
          var D = {};
          return (
            o(D, N),
            (D.template = function () {
              var I = [].slice.call(arguments);
              return te.apply(null, [D.template].concat(I));
            }),
            Object.setPrototypeOf(D, n.prototype),
            Object.setPrototypeOf(D.template, D),
            (D.template.constructor = n),
            D.template
          );
        }
        o(this, N);
      }
      u && (g.blue.open = '\x1B[94m');
      for (
        var e = function () {
            var D = s[i];
            (g[D].closeRe = new RegExp(C(g[D].close), 'g')),
              (a[D] = {
                get: function () {
                  var M = g[D];
                  return q.call(
                    this,
                    this._styles ? this._styles.concat(M) : [M],
                    this._empty,
                    D,
                  );
                },
              });
          },
          i = 0,
          s = Object.keys(g);
        i < s.length;
        i++
      )
        e();
      (a.visible = {
        get: function () {
          return q.call(this, this._styles || [], !0, 'visible');
        },
      }),
        (g.color.closeRe = new RegExp(C(g.color.close), 'g'));
      for (
        var c = function () {
            var D = S[m];
            if (r.has(D)) return 'continue';
            a[D] = {
              get: function () {
                var M = this.level;
                return function () {
                  var G = g.color[w[M]][D].apply(null, arguments),
                    K = {
                      open: G,
                      close: g.color.close,
                      closeRe: g.color.closeRe,
                    };
                  return q.call(
                    this,
                    this._styles ? this._styles.concat(K) : [K],
                    this._empty,
                    D,
                  );
                };
              },
            };
          },
          m = 0,
          S = Object.keys(g.color.ansi);
        m < S.length;
        m++
      )
        var y = c();
      g.bgColor.closeRe = new RegExp(C(g.bgColor.close), 'g');
      for (
        var j = function () {
            var D = R[P];
            if (r.has(D)) return 'continue';
            var I = 'bg' + D[0].toUpperCase() + D.slice(1);
            a[I] = {
              get: function () {
                var G = this.level;
                return function () {
                  var K = g.bgColor[w[G]][D].apply(null, arguments),
                    ue = {
                      open: K,
                      close: g.bgColor.close,
                      closeRe: g.bgColor.closeRe,
                    };
                  return q.call(
                    this,
                    this._styles ? this._styles.concat(ue) : [ue],
                    this._empty,
                    D,
                  );
                };
              },
            };
          },
          P = 0,
          R = Object.keys(g.bgColor.ansi);
        P < R.length;
        P++
      )
        var k = j();
      var O = Object.defineProperties(function () {}, a);
      function q(N, D, I) {
        var M = function K() {
          return B.apply(K, arguments);
        };
        (M._styles = N), (M._empty = D);
        var G = this;
        return (
          Object.defineProperty(M, 'level', {
            enumerable: !0,
            get: function () {
              return G.level;
            },
            set: function (ue) {
              G.level = ue;
            },
          }),
          Object.defineProperty(M, 'enabled', {
            enumerable: !0,
            get: function () {
              return G.enabled;
            },
            set: function (ue) {
              G.enabled = ue;
            },
          }),
          (M.hasGrey = this.hasGrey || I === 'gray' || I === 'grey'),
          (M.__proto__ = O),
          M
        );
      }
      function B() {
        var N = arguments,
          D = N.length,
          I = String(arguments[0]);
        if (D === 0) return '';
        if (D > 1) for (var M = 1; M < D; M++) I += ' ' + N[M];
        if (!this.enabled || this.level <= 0 || !I) return this._empty ? '' : I;
        var G = g.dim.open;
        u && this.hasGrey && (g.dim.open = '');
        var K = T(this._styles.slice().reverse()),
          ue;
        try {
          for (K.s(); !(ue = K.n()).done; ) {
            var fe = ue.value;
            (I = fe.open + I.replace(fe.closeRe, fe.open) + fe.close),
              (I = I.replace(
                /\r?\n/g,
                ''.concat(fe.close, '$&').concat(fe.open),
              ));
          }
        } catch (xe) {
          K.e(xe);
        } finally {
          K.f();
        }
        return (g.dim.open = G), I;
      }
      function te(N, D) {
        if (!Array.isArray(D)) return [].slice.call(arguments, 1).join(' ');
        for (
          var I = [].slice.call(arguments, 2), M = [D.raw[0]], G = 1;
          G < D.length;
          G++
        )
          M.push(String(I[G - 1]).replace(/[{}\\]/g, '\\$&')),
            M.push(String(D.raw[G]));
        return d(N, M.join(''));
      }
      Object.defineProperties(n.prototype, a),
        (V.exports = n()),
        (V.exports.supportsColor = h),
        (V.exports.default = V.exports);
    },
    23627: function (V, A, f) {
      'use strict';
      var x = f(74704).default,
        T =
          /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
        C = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
        g = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
        h = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,
        d = new Map([
          [
            'n',
            `
`,
          ],
          ['r', '\r'],
          ['t', '	'],
          ['b', '\b'],
          ['f', '\f'],
          ['v', '\v'],
          ['0', '\0'],
          ['\\', '\\'],
          ['e', '\x1B'],
          ['a', '\x07'],
        ]);
      function u(o) {
        return (o[0] === 'u' && o.length === 5) ||
          (o[0] === 'x' && o.length === 3)
          ? String.fromCharCode(parseInt(o.slice(1), 16))
          : d.get(o) || o;
      }
      function w(o, n) {
        var e = [],
          i = n.trim().split(/\s*,\s*/g),
          s,
          c = x(i),
          m;
        try {
          for (c.s(); !(m = c.n()).done; ) {
            var S = m.value;
            if (!isNaN(S)) e.push(Number(S));
            else if ((s = S.match(g)))
              e.push(
                s[2].replace(h, function (y, j, P) {
                  return j ? u(j) : P;
                }),
              );
            else
              throw new Error(
                'Invalid Chalk template style argument: '
                  .concat(S, " (in style '")
                  .concat(o, "')"),
              );
          }
        } catch (y) {
          c.e(y);
        } finally {
          c.f();
        }
        return e;
      }
      function r(o) {
        C.lastIndex = 0;
        for (var n = [], e; (e = C.exec(o)) !== null; ) {
          var i = e[1];
          if (e[2]) {
            var s = w(i, e[2]);
            n.push([i].concat(s));
          } else n.push([i]);
        }
        return n;
      }
      function a(o, n) {
        var e = {},
          i = x(n),
          s;
        try {
          for (i.s(); !(s = i.n()).done; ) {
            var c = s.value,
              m = x(c.styles),
              S;
            try {
              for (m.s(); !(S = m.n()).done; ) {
                var y = S.value;
                e[y[0]] = c.inverse ? null : y.slice(1);
              }
            } catch (O) {
              m.e(O);
            } finally {
              m.f();
            }
          }
        } catch (O) {
          i.e(O);
        } finally {
          i.f();
        }
        for (var j = o, P = 0, R = Object.keys(e); P < R.length; P++) {
          var k = R[P];
          if (Array.isArray(e[k])) {
            if (!(k in j)) throw new Error('Unknown Chalk style: '.concat(k));
            e[k].length > 0 ? (j = j[k].apply(j, e[k])) : (j = j[k]);
          }
        }
        return j;
      }
      V.exports = function (o, n) {
        var e = [],
          i = [],
          s = [];
        if (
          (n.replace(T, function (m, S, y, j, P, R) {
            if (S) s.push(u(S));
            else if (j) {
              var k = s.join('');
              (s = []),
                i.push(e.length === 0 ? k : a(o, e)(k)),
                e.push({ inverse: y, styles: r(j) });
            } else if (P) {
              if (e.length === 0)
                throw new Error('Found extraneous } in Chalk template literal');
              i.push(a(o, e)(s.join(''))), (s = []), e.pop();
            } else s.push(R);
          }),
          i.push(s.join('')),
          e.length > 0)
        ) {
          var c = 'Chalk template literal is missing '
            .concat(e.length, ' closing bracket')
            .concat(e.length === 1 ? '' : 's', ' (`}`)');
          throw new Error(c);
        }
        return i.join('');
      };
    },
    90392: function (V) {
      'use strict';
      V.exports = { stdout: !1, stderr: !1 };
    },
    1458: function (V) {
      'use strict';
      var A = (function () {
        function C(g, h) {
          for (var d = 0; d < h.length; d++) {
            var u = h[d];
            (u.enumerable = u.enumerable || !1),
              (u.configurable = !0),
              'value' in u && (u.writable = !0),
              Object.defineProperty(g, u.key, u);
          }
        }
        return function (g, h, d) {
          return h && C(g.prototype, h), d && C(g, d), g;
        };
      })();
      function f(C, g) {
        if (!(C instanceof g))
          throw new TypeError('Cannot call a class as a function');
      }
      var x = [
          [
            { color: '0, 0, 0', class: 'ansi-black' },
            { color: '187, 0, 0', class: 'ansi-red' },
            { color: '0, 187, 0', class: 'ansi-green' },
            { color: '187, 187, 0', class: 'ansi-yellow' },
            { color: '0, 0, 187', class: 'ansi-blue' },
            { color: '187, 0, 187', class: 'ansi-magenta' },
            { color: '0, 187, 187', class: 'ansi-cyan' },
            { color: '255,255,255', class: 'ansi-white' },
          ],
          [
            { color: '85, 85, 85', class: 'ansi-bright-black' },
            { color: '255, 85, 85', class: 'ansi-bright-red' },
            { color: '0, 255, 0', class: 'ansi-bright-green' },
            { color: '255, 255, 85', class: 'ansi-bright-yellow' },
            { color: '85, 85, 255', class: 'ansi-bright-blue' },
            { color: '255, 85, 255', class: 'ansi-bright-magenta' },
            { color: '85, 255, 255', class: 'ansi-bright-cyan' },
            { color: '255, 255, 255', class: 'ansi-bright-white' },
          ],
        ],
        T = (function () {
          A(C, null, [
            {
              key: 'escapeForHtml',
              value: function (h) {
                return new C().escapeForHtml(h);
              },
            },
            {
              key: 'linkify',
              value: function (h) {
                return new C().linkify(h);
              },
            },
            {
              key: 'ansiToHtml',
              value: function (h, d) {
                return new C().ansiToHtml(h, d);
              },
            },
            {
              key: 'ansiToJson',
              value: function (h, d) {
                return new C().ansiToJson(h, d);
              },
            },
            {
              key: 'ansiToText',
              value: function (h) {
                return new C().ansiToText(h);
              },
            },
          ]);
          function C() {
            f(this, C),
              (this.fg =
                this.bg =
                this.fg_truecolor =
                this.bg_truecolor =
                  null),
              (this.bright = 0),
              (this.decorations = []);
          }
          return (
            A(C, [
              {
                key: 'setupPalette',
                value: function () {
                  this.PALETTE_COLORS = [];
                  for (var h = 0; h < 2; ++h)
                    for (var d = 0; d < 8; ++d)
                      this.PALETTE_COLORS.push(x[h][d].color);
                  for (
                    var u = [0, 95, 135, 175, 215, 255],
                      w = function (S, y, j) {
                        return u[S] + ', ' + u[y] + ', ' + u[j];
                      },
                      r = void 0,
                      a = void 0,
                      o = void 0,
                      n = 0;
                    n < 6;
                    ++n
                  )
                    for (var e = 0; e < 6; ++e)
                      for (var i = 0; i < 6; ++i)
                        this.PALETTE_COLORS.push(w(n, e, i));
                  for (var s = 8, c = 0; c < 24; ++c, s += 10)
                    this.PALETTE_COLORS.push(w(s, s, s));
                },
              },
              {
                key: 'escapeForHtml',
                value: function (h) {
                  return h.replace(/[&<>\"]/gm, function (d) {
                    return d == '&'
                      ? '&amp;'
                      : d == '"'
                      ? '&quot;'
                      : d == '<'
                      ? '&lt;'
                      : d == '>'
                      ? '&gt;'
                      : '';
                  });
                },
              },
              {
                key: 'linkify',
                value: function (h) {
                  return h.replace(/(https?:\/\/[^\s]+)/gm, function (d) {
                    return '<a href="' + d + '">' + d + '</a>';
                  });
                },
              },
              {
                key: 'ansiToHtml',
                value: function (h, d) {
                  return this.process(h, d, !0);
                },
              },
              {
                key: 'ansiToJson',
                value: function (h, d) {
                  return (
                    (d = d || {}),
                    (d.json = !0),
                    (d.clearLine = !1),
                    this.process(h, d, !0)
                  );
                },
              },
              {
                key: 'ansiToText',
                value: function (h) {
                  return this.process(h, {}, !1);
                },
              },
              {
                key: 'process',
                value: function (h, d, u) {
                  var w = this,
                    r = this,
                    a = h.split(/\033\[/),
                    o = a.shift();
                  d == null && (d = {}), (d.clearLine = /\r/.test(h));
                  var n = a.map(function (i) {
                    return w.processChunk(i, d, u);
                  });
                  if (d && d.json) {
                    var e = r.processChunkJson('');
                    return (
                      (e.content = o),
                      (e.clearLine = d.clearLine),
                      n.unshift(e),
                      d.remove_empty &&
                        (n = n.filter(function (i) {
                          return !i.isEmpty();
                        })),
                      n
                    );
                  } else n.unshift(o);
                  return n.join('');
                },
              },
              {
                key: 'processChunkJson',
                value: function (h, d, u) {
                  d = typeof d == 'undefined' ? {} : d;
                  var w = (d.use_classes =
                      typeof d.use_classes != 'undefined' && d.use_classes),
                    r = (d.key = w ? 'class' : 'color'),
                    a = {
                      content: h,
                      fg: null,
                      bg: null,
                      fg_truecolor: null,
                      bg_truecolor: null,
                      isInverted: !1,
                      clearLine: d.clearLine,
                      decoration: null,
                      decorations: [],
                      was_processed: !1,
                      isEmpty: function () {
                        return !a.content;
                      },
                    },
                    o = h.match(
                      /^([!\x3c-\x3f]*)([\d;]*)([\x20-\x2c]*[\x40-\x7e])([\s\S]*)/m,
                    );
                  if (!o) return a;
                  var n = (a.content = o[4]),
                    e = o[2].split(';');
                  if (o[1] !== '' || o[3] !== 'm' || !u) return a;
                  for (var i = this; e.length > 0; ) {
                    var s = e.shift(),
                      c = parseInt(s);
                    if (isNaN(c) || c === 0)
                      (i.fg = i.bg = null), (i.decorations = []);
                    else if (c === 1) i.decorations.push('bold');
                    else if (c === 2) i.decorations.push('dim');
                    else if (c === 3) i.decorations.push('italic');
                    else if (c === 4) i.decorations.push('underline');
                    else if (c === 5) i.decorations.push('blink');
                    else if (c === 7) i.decorations.push('reverse');
                    else if (c === 8) i.decorations.push('hidden');
                    else if (c === 9) i.decorations.push('strikethrough');
                    else if (c === 21) i.removeDecoration('bold');
                    else if (c === 22)
                      i.removeDecoration('bold'), i.removeDecoration('dim');
                    else if (c === 23) i.removeDecoration('italic');
                    else if (c === 24) i.removeDecoration('underline');
                    else if (c === 25) i.removeDecoration('blink');
                    else if (c === 27) i.removeDecoration('reverse');
                    else if (c === 28) i.removeDecoration('hidden');
                    else if (c === 29) i.removeDecoration('strikethrough');
                    else if (c === 39) i.fg = null;
                    else if (c === 49) i.bg = null;
                    else if (c >= 30 && c < 38) i.fg = x[0][c % 10][r];
                    else if (c >= 90 && c < 98) i.fg = x[1][c % 10][r];
                    else if (c >= 40 && c < 48) i.bg = x[0][c % 10][r];
                    else if (c >= 100 && c < 108) i.bg = x[1][c % 10][r];
                    else if (c === 38 || c === 48) {
                      var m = c === 38;
                      if (e.length >= 1) {
                        var S = e.shift();
                        if (S === '5' && e.length >= 1) {
                          var y = parseInt(e.shift());
                          if (y >= 0 && y <= 255)
                            if (!w)
                              this.PALETTE_COLORS || i.setupPalette(),
                                m
                                  ? (i.fg = this.PALETTE_COLORS[y])
                                  : (i.bg = this.PALETTE_COLORS[y]);
                            else {
                              var j =
                                y >= 16
                                  ? 'ansi-palette-' + y
                                  : x[y > 7 ? 1 : 0][y % 8].class;
                              m ? (i.fg = j) : (i.bg = j);
                            }
                        } else if (S === '2' && e.length >= 3) {
                          var P = parseInt(e.shift()),
                            R = parseInt(e.shift()),
                            k = parseInt(e.shift());
                          if (
                            P >= 0 &&
                            P <= 255 &&
                            R >= 0 &&
                            R <= 255 &&
                            k >= 0 &&
                            k <= 255
                          ) {
                            var O = P + ', ' + R + ', ' + k;
                            w
                              ? m
                                ? ((i.fg = 'ansi-truecolor'),
                                  (i.fg_truecolor = O))
                                : ((i.bg = 'ansi-truecolor'),
                                  (i.bg_truecolor = O))
                              : m
                              ? (i.fg = O)
                              : (i.bg = O);
                          }
                        }
                      }
                    }
                  }
                  if (
                    i.fg === null &&
                    i.bg === null &&
                    i.decorations.length === 0
                  )
                    return a;
                  var q = [],
                    B = [],
                    te = {};
                  return (
                    (a.fg = i.fg),
                    (a.bg = i.bg),
                    (a.fg_truecolor = i.fg_truecolor),
                    (a.bg_truecolor = i.bg_truecolor),
                    (a.decorations = i.decorations),
                    (a.decoration = i.decorations.slice(-1).pop() || null),
                    (a.was_processed = !0),
                    a
                  );
                },
              },
              {
                key: 'processChunk',
                value: function (h, d, u) {
                  var w = this;
                  d = d || {};
                  var r = this.processChunkJson(h, d, u),
                    a = d.use_classes;
                  if (
                    ((r.decorations = r.decorations.filter(function (c) {
                      if (c === 'reverse') {
                        r.fg || (r.fg = x[0][7][a ? 'class' : 'color']),
                          r.bg || (r.bg = x[0][0][a ? 'class' : 'color']);
                        var m = r.fg;
                        (r.fg = r.bg), (r.bg = m);
                        var S = r.fg_truecolor;
                        return (
                          (r.fg_truecolor = r.bg_truecolor),
                          (r.bg_truecolor = S),
                          (r.isInverted = !0),
                          !1
                        );
                      }
                      return !0;
                    })),
                    d.json)
                  )
                    return r;
                  if (r.isEmpty()) return '';
                  if (!r.was_processed) return r.content;
                  var o = [],
                    n = [],
                    e = [],
                    i = {},
                    s = function (m) {
                      var S = [],
                        y = void 0;
                      for (y in m)
                        m.hasOwnProperty(y) &&
                          S.push(
                            'data-' + y + '="' + w.escapeForHtml(m[y]) + '"',
                          );
                      return S.length > 0 ? ' ' + S.join(' ') : '';
                    };
                  return (
                    r.isInverted && (i['ansi-is-inverted'] = 'true'),
                    r.fg &&
                      (a
                        ? (o.push(r.fg + '-fg'),
                          r.fg_truecolor !== null &&
                            ((i['ansi-truecolor-fg'] = r.fg_truecolor),
                            (r.fg_truecolor = null)))
                        : o.push('color:rgb(' + r.fg + ')')),
                    r.bg &&
                      (a
                        ? (o.push(r.bg + '-bg'),
                          r.bg_truecolor !== null &&
                            ((i['ansi-truecolor-bg'] = r.bg_truecolor),
                            (r.bg_truecolor = null)))
                        : o.push('background-color:rgb(' + r.bg + ')')),
                    r.decorations.forEach(function (c) {
                      if (a) {
                        n.push('ansi-' + c);
                        return;
                      }
                      c === 'bold'
                        ? n.push('font-weight:bold')
                        : c === 'dim'
                        ? n.push('opacity:0.5')
                        : c === 'italic'
                        ? n.push('font-style:italic')
                        : c === 'hidden'
                        ? n.push('visibility:hidden')
                        : c === 'strikethrough'
                        ? e.push('line-through')
                        : e.push(c);
                    }),
                    e.length && n.push('text-decoration:' + e.join(' ')),
                    a
                      ? '<span class="' +
                        o.concat(n).join(' ') +
                        '"' +
                        s(i) +
                        '>' +
                        r.content +
                        '</span>'
                      : '<span style="' +
                        o.concat(n).join(';') +
                        '"' +
                        s(i) +
                        '>' +
                        r.content +
                        '</span>'
                  );
                },
              },
              {
                key: 'removeDecoration',
                value: function (h) {
                  var d = this.decorations.indexOf(h);
                  d >= 0 && this.decorations.splice(d, 1);
                },
              },
            ]),
            C
          );
        })();
      V.exports = T;
    },
    96074: function (V, A, f) {
      'use strict';
      f.d(A, {
        Z: function () {
          return n;
        },
      });
      var x = f(94184),
        T = f.n(x),
        C = f(67294),
        g = f(53124),
        h = f(67968),
        d = f(45503),
        u = f(14747);
      const w = (e) => {
        const {
          componentCls: i,
          sizePaddingEdgeHorizontal: s,
          colorSplit: c,
          lineWidth: m,
        } = e;
        return {
          [i]: Object.assign(Object.assign({}, (0, u.Wf)(e)), {
            borderBlockStart: `${m}px solid ${c}`,
            '&-vertical': {
              position: 'relative',
              top: '-0.06em',
              display: 'inline-block',
              height: '0.9em',
              margin: `0 ${e.dividerVerticalGutterMargin}px`,
              verticalAlign: 'middle',
              borderTop: 0,
              borderInlineStart: `${m}px solid ${c}`,
            },
            '&-horizontal': {
              display: 'flex',
              clear: 'both',
              width: '100%',
              minWidth: '100%',
              margin: `${e.dividerHorizontalGutterMargin}px 0`,
            },
            '&-horizontal&-with-text': {
              display: 'flex',
              alignItems: 'center',
              margin: `${e.dividerHorizontalWithTextGutterMargin}px 0`,
              color: e.colorTextHeading,
              fontWeight: 500,
              fontSize: e.fontSizeLG,
              whiteSpace: 'nowrap',
              textAlign: 'center',
              borderBlockStart: `0 ${c}`,
              '&::before, &::after': {
                position: 'relative',
                width: '50%',
                borderBlockStart: `${m}px solid transparent`,
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
            [`${i}-inner-text`]: { display: 'inline-block', padding: '0 1em' },
            '&-dashed': {
              background: 'none',
              borderColor: c,
              borderStyle: 'dashed',
              borderWidth: `${m}px 0 0`,
            },
            '&-horizontal&-with-text&-dashed': {
              '&::before, &::after': { borderStyle: 'dashed none none' },
            },
            '&-vertical&-dashed': {
              borderInlineStart: m,
              borderInlineEnd: 0,
              borderBlockStart: 0,
              borderBlockEnd: 0,
            },
            '&-plain&-with-text': {
              color: e.colorText,
              fontWeight: 'normal',
              fontSize: e.fontSize,
            },
            '&-horizontal&-with-text-left&-no-default-orientation-margin-left':
              {
                '&::before': { width: 0 },
                '&::after': { width: '100%' },
                [`${i}-inner-text`]: { paddingInlineStart: s },
              },
            '&-horizontal&-with-text-right&-no-default-orientation-margin-right':
              {
                '&::before': { width: '100%' },
                '&::after': { width: 0 },
                [`${i}-inner-text`]: { paddingInlineEnd: s },
              },
          }),
        };
      };
      var r = (0, h.Z)(
          'Divider',
          (e) => {
            const i = (0, d.TS)(e, {
              dividerVerticalGutterMargin: e.marginXS,
              dividerHorizontalWithTextGutterMargin: e.margin,
              dividerHorizontalGutterMargin: e.marginLG,
            });
            return [w(i)];
          },
          { sizePaddingEdgeHorizontal: 0 },
        ),
        a = function (e, i) {
          var s = {};
          for (var c in e)
            Object.prototype.hasOwnProperty.call(e, c) &&
              i.indexOf(c) < 0 &&
              (s[c] = e[c]);
          if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var m = 0, c = Object.getOwnPropertySymbols(e);
              m < c.length;
              m++
            )
              i.indexOf(c[m]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, c[m]) &&
                (s[c[m]] = e[c[m]]);
          return s;
        },
        n = (e) => {
          const { getPrefixCls: i, direction: s } = C.useContext(g.E_),
            {
              prefixCls: c,
              type: m = 'horizontal',
              orientation: S = 'center',
              orientationMargin: y,
              className: j,
              children: P,
              dashed: R,
              plain: k,
            } = e,
            O = a(e, [
              'prefixCls',
              'type',
              'orientation',
              'orientationMargin',
              'className',
              'children',
              'dashed',
              'plain',
            ]),
            q = i('divider', c),
            [B, te] = r(q),
            N = S.length > 0 ? `-${S}` : S,
            D = !!P,
            I = S === 'left' && y != null,
            M = S === 'right' && y != null,
            G = T()(
              q,
              te,
              `${q}-${m}`,
              {
                [`${q}-with-text`]: D,
                [`${q}-with-text${N}`]: D,
                [`${q}-dashed`]: !!R,
                [`${q}-plain`]: !!k,
                [`${q}-rtl`]: s === 'rtl',
                [`${q}-no-default-orientation-margin-left`]: I,
                [`${q}-no-default-orientation-margin-right`]: M,
              },
              j,
            ),
            K = Object.assign(
              Object.assign({}, I && { marginLeft: y }),
              M && { marginRight: y },
            );
          return B(
            C.createElement(
              'div',
              Object.assign({ className: G }, O, { role: 'separator' }),
              P &&
                m !== 'vertical' &&
                C.createElement(
                  'span',
                  { className: `${q}-inner-text`, style: K },
                  P,
                ),
            ),
          );
        };
    },
    69111: function (V, A, f) {
      'use strict';
      var x =
        (this && this.__assign) ||
        function () {
          return (
            (x =
              Object.assign ||
              function (y) {
                for (var j, P = 1, R = arguments.length; P < R; P++) {
                  j = arguments[P];
                  for (var k in j)
                    Object.prototype.hasOwnProperty.call(j, k) && (y[k] = j[k]);
                }
                return y;
              }),
            x.apply(this, arguments)
          );
        };
      Object.defineProperty(A, '__esModule', { value: !0 });
      var T = f(57206),
        C = f(92642),
        g = f(59726),
        h = x(x({}, T.namedReferences), { all: T.namedReferences.html5 }),
        d = {
          specialChars: /[<>'"&]/g,
          nonAscii:
            /(?:[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
          nonAsciiPrintable:
            /(?:[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
          extensive:
            /(?:[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
        },
        u = { mode: 'specialChars', level: 'all', numeric: 'decimal' };
      function w(y, j) {
        var D = j === void 0 ? u : j,
          I = D.mode,
          P = I === void 0 ? 'specialChars' : I,
          R = D.numeric,
          k = R === void 0 ? 'decimal' : R,
          O = D.level,
          q = O === void 0 ? 'all' : O;
        if (!y) return '';
        var B = d[P],
          te = h[q].characters,
          N = k === 'hexadecimal';
        B.lastIndex = 0;
        var D = B.exec(y),
          I;
        if (D) {
          I = '';
          var R = 0;
          do {
            R !== D.index && (I += y.substring(R, D.index));
            var O = D[0],
              M = te[O];
            if (!M) {
              var G = O.length > 1 ? g.getCodePoint(O, 0) : O.charCodeAt(0);
              M = (N ? '&#x' + G.toString(16) : '&#' + G) + ';';
            }
            (I += M), (R = D.index + O.length);
          } while ((D = B.exec(y)));
          R !== y.length && (I += y.substring(R));
        } else I = y;
        return I;
      }
      A.encode = w;
      var r = { scope: 'body', level: 'all' },
        a = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g,
        o = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g,
        n = {
          xml: { strict: a, attribute: o, body: T.bodyRegExps.xml },
          html4: { strict: a, attribute: o, body: T.bodyRegExps.html4 },
          html5: { strict: a, attribute: o, body: T.bodyRegExps.html5 },
        },
        e = x(x({}, n), { all: n.html5 }),
        i = String.fromCharCode,
        s = i(65533),
        c = { level: 'all' };
      function m(y, j) {
        var R = (j === void 0 ? c : j).level,
          P = R === void 0 ? 'all' : R;
        if (!y) return '';
        var R = y,
          k = y[y.length - 1],
          O = h[P].entities[y];
        if (O) R = O;
        else if (y[0] === '&' && y[1] === '#') {
          var q = y[2],
            B =
              q == 'x' || q == 'X'
                ? parseInt(y.substr(3), 16)
                : parseInt(y.substr(2));
          R =
            B >= 1114111
              ? s
              : B > 65535
              ? g.fromCodePoint(B)
              : i(C.numericUnicodeMap[B] || B);
        }
        return R;
      }
      A.decodeEntity = m;
      function S(y, j) {
        var P = j === void 0 ? r : j,
          R = P.level,
          k = R === void 0 ? 'all' : R,
          O = P.scope,
          q = O === void 0 ? (k === 'xml' ? 'strict' : 'body') : O;
        if (!y) return '';
        var B = e[k][q],
          te = h[k].entities,
          N = q === 'attribute',
          D = q === 'strict';
        B.lastIndex = 0;
        var I = B.exec(y),
          M;
        if (I) {
          M = '';
          var G = 0;
          do {
            G !== I.index && (M += y.substring(G, I.index));
            var K = I[0],
              ue = K,
              fe = K[K.length - 1];
            if (N && fe === '=') ue = K;
            else if (D && fe !== ';') ue = K;
            else {
              var xe = te[K];
              if (xe) ue = xe;
              else if (K[0] === '&' && K[1] === '#') {
                var De = K[2],
                  be =
                    De == 'x' || De == 'X'
                      ? parseInt(K.substr(3), 16)
                      : parseInt(K.substr(2));
                ue =
                  be >= 1114111
                    ? s
                    : be > 65535
                    ? g.fromCodePoint(be)
                    : i(C.numericUnicodeMap[be] || be);
              }
            }
            (M += ue), (G = I.index + K.length);
          } while ((I = B.exec(y)));
          G !== y.length && (M += y.substring(G));
        } else M = y;
        return M;
      }
      A.decode = S;
    },
    57206: function (V, A) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.bodyRegExps = {
          xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
          html4:
            /&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
          html5:
            /&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
        }),
        (A.namedReferences = {
          xml: {
            entities: {
              '&lt;': '<',
              '&gt;': '>',
              '&quot;': '"',
              '&apos;': "'",
              '&amp;': '&',
            },
            characters: {
              '<': '&lt;',
              '>': '&gt;',
              '"': '&quot;',
              "'": '&apos;',
              '&': '&amp;',
            },
          },
          html4: {
            entities: {
              '&apos;': "'",
              '&nbsp': '\xA0',
              '&nbsp;': '\xA0',
              '&iexcl': '\xA1',
              '&iexcl;': '\xA1',
              '&cent': '\xA2',
              '&cent;': '\xA2',
              '&pound': '\xA3',
              '&pound;': '\xA3',
              '&curren': '\xA4',
              '&curren;': '\xA4',
              '&yen': '\xA5',
              '&yen;': '\xA5',
              '&brvbar': '\xA6',
              '&brvbar;': '\xA6',
              '&sect': '\xA7',
              '&sect;': '\xA7',
              '&uml': '\xA8',
              '&uml;': '\xA8',
              '&copy': '\xA9',
              '&copy;': '\xA9',
              '&ordf': '\xAA',
              '&ordf;': '\xAA',
              '&laquo': '\xAB',
              '&laquo;': '\xAB',
              '&not': '\xAC',
              '&not;': '\xAC',
              '&shy': '\xAD',
              '&shy;': '\xAD',
              '&reg': '\xAE',
              '&reg;': '\xAE',
              '&macr': '\xAF',
              '&macr;': '\xAF',
              '&deg': '\xB0',
              '&deg;': '\xB0',
              '&plusmn': '\xB1',
              '&plusmn;': '\xB1',
              '&sup2': '\xB2',
              '&sup2;': '\xB2',
              '&sup3': '\xB3',
              '&sup3;': '\xB3',
              '&acute': '\xB4',
              '&acute;': '\xB4',
              '&micro': '\xB5',
              '&micro;': '\xB5',
              '&para': '\xB6',
              '&para;': '\xB6',
              '&middot': '\xB7',
              '&middot;': '\xB7',
              '&cedil': '\xB8',
              '&cedil;': '\xB8',
              '&sup1': '\xB9',
              '&sup1;': '\xB9',
              '&ordm': '\xBA',
              '&ordm;': '\xBA',
              '&raquo': '\xBB',
              '&raquo;': '\xBB',
              '&frac14': '\xBC',
              '&frac14;': '\xBC',
              '&frac12': '\xBD',
              '&frac12;': '\xBD',
              '&frac34': '\xBE',
              '&frac34;': '\xBE',
              '&iquest': '\xBF',
              '&iquest;': '\xBF',
              '&Agrave': '\xC0',
              '&Agrave;': '\xC0',
              '&Aacute': '\xC1',
              '&Aacute;': '\xC1',
              '&Acirc': '\xC2',
              '&Acirc;': '\xC2',
              '&Atilde': '\xC3',
              '&Atilde;': '\xC3',
              '&Auml': '\xC4',
              '&Auml;': '\xC4',
              '&Aring': '\xC5',
              '&Aring;': '\xC5',
              '&AElig': '\xC6',
              '&AElig;': '\xC6',
              '&Ccedil': '\xC7',
              '&Ccedil;': '\xC7',
              '&Egrave': '\xC8',
              '&Egrave;': '\xC8',
              '&Eacute': '\xC9',
              '&Eacute;': '\xC9',
              '&Ecirc': '\xCA',
              '&Ecirc;': '\xCA',
              '&Euml': '\xCB',
              '&Euml;': '\xCB',
              '&Igrave': '\xCC',
              '&Igrave;': '\xCC',
              '&Iacute': '\xCD',
              '&Iacute;': '\xCD',
              '&Icirc': '\xCE',
              '&Icirc;': '\xCE',
              '&Iuml': '\xCF',
              '&Iuml;': '\xCF',
              '&ETH': '\xD0',
              '&ETH;': '\xD0',
              '&Ntilde': '\xD1',
              '&Ntilde;': '\xD1',
              '&Ograve': '\xD2',
              '&Ograve;': '\xD2',
              '&Oacute': '\xD3',
              '&Oacute;': '\xD3',
              '&Ocirc': '\xD4',
              '&Ocirc;': '\xD4',
              '&Otilde': '\xD5',
              '&Otilde;': '\xD5',
              '&Ouml': '\xD6',
              '&Ouml;': '\xD6',
              '&times': '\xD7',
              '&times;': '\xD7',
              '&Oslash': '\xD8',
              '&Oslash;': '\xD8',
              '&Ugrave': '\xD9',
              '&Ugrave;': '\xD9',
              '&Uacute': '\xDA',
              '&Uacute;': '\xDA',
              '&Ucirc': '\xDB',
              '&Ucirc;': '\xDB',
              '&Uuml': '\xDC',
              '&Uuml;': '\xDC',
              '&Yacute': '\xDD',
              '&Yacute;': '\xDD',
              '&THORN': '\xDE',
              '&THORN;': '\xDE',
              '&szlig': '\xDF',
              '&szlig;': '\xDF',
              '&agrave': '\xE0',
              '&agrave;': '\xE0',
              '&aacute': '\xE1',
              '&aacute;': '\xE1',
              '&acirc': '\xE2',
              '&acirc;': '\xE2',
              '&atilde': '\xE3',
              '&atilde;': '\xE3',
              '&auml': '\xE4',
              '&auml;': '\xE4',
              '&aring': '\xE5',
              '&aring;': '\xE5',
              '&aelig': '\xE6',
              '&aelig;': '\xE6',
              '&ccedil': '\xE7',
              '&ccedil;': '\xE7',
              '&egrave': '\xE8',
              '&egrave;': '\xE8',
              '&eacute': '\xE9',
              '&eacute;': '\xE9',
              '&ecirc': '\xEA',
              '&ecirc;': '\xEA',
              '&euml': '\xEB',
              '&euml;': '\xEB',
              '&igrave': '\xEC',
              '&igrave;': '\xEC',
              '&iacute': '\xED',
              '&iacute;': '\xED',
              '&icirc': '\xEE',
              '&icirc;': '\xEE',
              '&iuml': '\xEF',
              '&iuml;': '\xEF',
              '&eth': '\xF0',
              '&eth;': '\xF0',
              '&ntilde': '\xF1',
              '&ntilde;': '\xF1',
              '&ograve': '\xF2',
              '&ograve;': '\xF2',
              '&oacute': '\xF3',
              '&oacute;': '\xF3',
              '&ocirc': '\xF4',
              '&ocirc;': '\xF4',
              '&otilde': '\xF5',
              '&otilde;': '\xF5',
              '&ouml': '\xF6',
              '&ouml;': '\xF6',
              '&divide': '\xF7',
              '&divide;': '\xF7',
              '&oslash': '\xF8',
              '&oslash;': '\xF8',
              '&ugrave': '\xF9',
              '&ugrave;': '\xF9',
              '&uacute': '\xFA',
              '&uacute;': '\xFA',
              '&ucirc': '\xFB',
              '&ucirc;': '\xFB',
              '&uuml': '\xFC',
              '&uuml;': '\xFC',
              '&yacute': '\xFD',
              '&yacute;': '\xFD',
              '&thorn': '\xFE',
              '&thorn;': '\xFE',
              '&yuml': '\xFF',
              '&yuml;': '\xFF',
              '&quot': '"',
              '&quot;': '"',
              '&amp': '&',
              '&amp;': '&',
              '&lt': '<',
              '&lt;': '<',
              '&gt': '>',
              '&gt;': '>',
              '&OElig;': '\u0152',
              '&oelig;': '\u0153',
              '&Scaron;': '\u0160',
              '&scaron;': '\u0161',
              '&Yuml;': '\u0178',
              '&circ;': '\u02C6',
              '&tilde;': '\u02DC',
              '&ensp;': '\u2002',
              '&emsp;': '\u2003',
              '&thinsp;': '\u2009',
              '&zwnj;': '\u200C',
              '&zwj;': '\u200D',
              '&lrm;': '\u200E',
              '&rlm;': '\u200F',
              '&ndash;': '\u2013',
              '&mdash;': '\u2014',
              '&lsquo;': '\u2018',
              '&rsquo;': '\u2019',
              '&sbquo;': '\u201A',
              '&ldquo;': '\u201C',
              '&rdquo;': '\u201D',
              '&bdquo;': '\u201E',
              '&dagger;': '\u2020',
              '&Dagger;': '\u2021',
              '&permil;': '\u2030',
              '&lsaquo;': '\u2039',
              '&rsaquo;': '\u203A',
              '&euro;': '\u20AC',
              '&fnof;': '\u0192',
              '&Alpha;': '\u0391',
              '&Beta;': '\u0392',
              '&Gamma;': '\u0393',
              '&Delta;': '\u0394',
              '&Epsilon;': '\u0395',
              '&Zeta;': '\u0396',
              '&Eta;': '\u0397',
              '&Theta;': '\u0398',
              '&Iota;': '\u0399',
              '&Kappa;': '\u039A',
              '&Lambda;': '\u039B',
              '&Mu;': '\u039C',
              '&Nu;': '\u039D',
              '&Xi;': '\u039E',
              '&Omicron;': '\u039F',
              '&Pi;': '\u03A0',
              '&Rho;': '\u03A1',
              '&Sigma;': '\u03A3',
              '&Tau;': '\u03A4',
              '&Upsilon;': '\u03A5',
              '&Phi;': '\u03A6',
              '&Chi;': '\u03A7',
              '&Psi;': '\u03A8',
              '&Omega;': '\u03A9',
              '&alpha;': '\u03B1',
              '&beta;': '\u03B2',
              '&gamma;': '\u03B3',
              '&delta;': '\u03B4',
              '&epsilon;': '\u03B5',
              '&zeta;': '\u03B6',
              '&eta;': '\u03B7',
              '&theta;': '\u03B8',
              '&iota;': '\u03B9',
              '&kappa;': '\u03BA',
              '&lambda;': '\u03BB',
              '&mu;': '\u03BC',
              '&nu;': '\u03BD',
              '&xi;': '\u03BE',
              '&omicron;': '\u03BF',
              '&pi;': '\u03C0',
              '&rho;': '\u03C1',
              '&sigmaf;': '\u03C2',
              '&sigma;': '\u03C3',
              '&tau;': '\u03C4',
              '&upsilon;': '\u03C5',
              '&phi;': '\u03C6',
              '&chi;': '\u03C7',
              '&psi;': '\u03C8',
              '&omega;': '\u03C9',
              '&thetasym;': '\u03D1',
              '&upsih;': '\u03D2',
              '&piv;': '\u03D6',
              '&bull;': '\u2022',
              '&hellip;': '\u2026',
              '&prime;': '\u2032',
              '&Prime;': '\u2033',
              '&oline;': '\u203E',
              '&frasl;': '\u2044',
              '&weierp;': '\u2118',
              '&image;': '\u2111',
              '&real;': '\u211C',
              '&trade;': '\u2122',
              '&alefsym;': '\u2135',
              '&larr;': '\u2190',
              '&uarr;': '\u2191',
              '&rarr;': '\u2192',
              '&darr;': '\u2193',
              '&harr;': '\u2194',
              '&crarr;': '\u21B5',
              '&lArr;': '\u21D0',
              '&uArr;': '\u21D1',
              '&rArr;': '\u21D2',
              '&dArr;': '\u21D3',
              '&hArr;': '\u21D4',
              '&forall;': '\u2200',
              '&part;': '\u2202',
              '&exist;': '\u2203',
              '&empty;': '\u2205',
              '&nabla;': '\u2207',
              '&isin;': '\u2208',
              '&notin;': '\u2209',
              '&ni;': '\u220B',
              '&prod;': '\u220F',
              '&sum;': '\u2211',
              '&minus;': '\u2212',
              '&lowast;': '\u2217',
              '&radic;': '\u221A',
              '&prop;': '\u221D',
              '&infin;': '\u221E',
              '&ang;': '\u2220',
              '&and;': '\u2227',
              '&or;': '\u2228',
              '&cap;': '\u2229',
              '&cup;': '\u222A',
              '&int;': '\u222B',
              '&there4;': '\u2234',
              '&sim;': '\u223C',
              '&cong;': '\u2245',
              '&asymp;': '\u2248',
              '&ne;': '\u2260',
              '&equiv;': '\u2261',
              '&le;': '\u2264',
              '&ge;': '\u2265',
              '&sub;': '\u2282',
              '&sup;': '\u2283',
              '&nsub;': '\u2284',
              '&sube;': '\u2286',
              '&supe;': '\u2287',
              '&oplus;': '\u2295',
              '&otimes;': '\u2297',
              '&perp;': '\u22A5',
              '&sdot;': '\u22C5',
              '&lceil;': '\u2308',
              '&rceil;': '\u2309',
              '&lfloor;': '\u230A',
              '&rfloor;': '\u230B',
              '&lang;': '\u2329',
              '&rang;': '\u232A',
              '&loz;': '\u25CA',
              '&spades;': '\u2660',
              '&clubs;': '\u2663',
              '&hearts;': '\u2665',
              '&diams;': '\u2666',
            },
            characters: {
              "'": '&apos;',
              '\xA0': '&nbsp;',
              '\xA1': '&iexcl;',
              '\xA2': '&cent;',
              '\xA3': '&pound;',
              '\xA4': '&curren;',
              '\xA5': '&yen;',
              '\xA6': '&brvbar;',
              '\xA7': '&sect;',
              '\xA8': '&uml;',
              '\xA9': '&copy;',
              ª: '&ordf;',
              '\xAB': '&laquo;',
              '\xAC': '&not;',
              '\xAD': '&shy;',
              '\xAE': '&reg;',
              '\xAF': '&macr;',
              '\xB0': '&deg;',
              '\xB1': '&plusmn;',
              '\xB2': '&sup2;',
              '\xB3': '&sup3;',
              '\xB4': '&acute;',
              µ: '&micro;',
              '\xB6': '&para;',
              '\xB7': '&middot;',
              '\xB8': '&cedil;',
              '\xB9': '&sup1;',
              º: '&ordm;',
              '\xBB': '&raquo;',
              '\xBC': '&frac14;',
              '\xBD': '&frac12;',
              '\xBE': '&frac34;',
              '\xBF': '&iquest;',
              À: '&Agrave;',
              Á: '&Aacute;',
              Â: '&Acirc;',
              Ã: '&Atilde;',
              Ä: '&Auml;',
              Å: '&Aring;',
              Æ: '&AElig;',
              Ç: '&Ccedil;',
              È: '&Egrave;',
              É: '&Eacute;',
              Ê: '&Ecirc;',
              Ë: '&Euml;',
              Ì: '&Igrave;',
              Í: '&Iacute;',
              Î: '&Icirc;',
              Ï: '&Iuml;',
              Ð: '&ETH;',
              Ñ: '&Ntilde;',
              Ò: '&Ograve;',
              Ó: '&Oacute;',
              Ô: '&Ocirc;',
              Õ: '&Otilde;',
              Ö: '&Ouml;',
              '\xD7': '&times;',
              Ø: '&Oslash;',
              Ù: '&Ugrave;',
              Ú: '&Uacute;',
              Û: '&Ucirc;',
              Ü: '&Uuml;',
              Ý: '&Yacute;',
              Þ: '&THORN;',
              ß: '&szlig;',
              à: '&agrave;',
              á: '&aacute;',
              â: '&acirc;',
              ã: '&atilde;',
              ä: '&auml;',
              å: '&aring;',
              æ: '&aelig;',
              ç: '&ccedil;',
              è: '&egrave;',
              é: '&eacute;',
              ê: '&ecirc;',
              ë: '&euml;',
              ì: '&igrave;',
              í: '&iacute;',
              î: '&icirc;',
              ï: '&iuml;',
              ð: '&eth;',
              ñ: '&ntilde;',
              ò: '&ograve;',
              ó: '&oacute;',
              ô: '&ocirc;',
              õ: '&otilde;',
              ö: '&ouml;',
              '\xF7': '&divide;',
              ø: '&oslash;',
              ù: '&ugrave;',
              ú: '&uacute;',
              û: '&ucirc;',
              ü: '&uuml;',
              ý: '&yacute;',
              þ: '&thorn;',
              ÿ: '&yuml;',
              '"': '&quot;',
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              Œ: '&OElig;',
              œ: '&oelig;',
              Š: '&Scaron;',
              š: '&scaron;',
              Ÿ: '&Yuml;',
              '\u02C6': '&circ;',
              '\u02DC': '&tilde;',
              '\u2002': '&ensp;',
              '\u2003': '&emsp;',
              '\u2009': '&thinsp;',
              '\u200C': '&zwnj;',
              '\u200D': '&zwj;',
              '\u200E': '&lrm;',
              '\u200F': '&rlm;',
              '\u2013': '&ndash;',
              '\u2014': '&mdash;',
              '\u2018': '&lsquo;',
              '\u2019': '&rsquo;',
              '\u201A': '&sbquo;',
              '\u201C': '&ldquo;',
              '\u201D': '&rdquo;',
              '\u201E': '&bdquo;',
              '\u2020': '&dagger;',
              '\u2021': '&Dagger;',
              '\u2030': '&permil;',
              '\u2039': '&lsaquo;',
              '\u203A': '&rsaquo;',
              '\u20AC': '&euro;',
              ƒ: '&fnof;',
              Α: '&Alpha;',
              Β: '&Beta;',
              Γ: '&Gamma;',
              Δ: '&Delta;',
              Ε: '&Epsilon;',
              Ζ: '&Zeta;',
              Η: '&Eta;',
              Θ: '&Theta;',
              Ι: '&Iota;',
              Κ: '&Kappa;',
              Λ: '&Lambda;',
              Μ: '&Mu;',
              Ν: '&Nu;',
              Ξ: '&Xi;',
              Ο: '&Omicron;',
              Π: '&Pi;',
              Ρ: '&Rho;',
              Σ: '&Sigma;',
              Τ: '&Tau;',
              Υ: '&Upsilon;',
              Φ: '&Phi;',
              Χ: '&Chi;',
              Ψ: '&Psi;',
              Ω: '&Omega;',
              α: '&alpha;',
              β: '&beta;',
              γ: '&gamma;',
              δ: '&delta;',
              ε: '&epsilon;',
              ζ: '&zeta;',
              η: '&eta;',
              θ: '&theta;',
              ι: '&iota;',
              κ: '&kappa;',
              λ: '&lambda;',
              μ: '&mu;',
              ν: '&nu;',
              ξ: '&xi;',
              ο: '&omicron;',
              π: '&pi;',
              ρ: '&rho;',
              ς: '&sigmaf;',
              σ: '&sigma;',
              τ: '&tau;',
              υ: '&upsilon;',
              φ: '&phi;',
              χ: '&chi;',
              ψ: '&psi;',
              ω: '&omega;',
              ϑ: '&thetasym;',
              ϒ: '&upsih;',
              ϖ: '&piv;',
              '\u2022': '&bull;',
              '\u2026': '&hellip;',
              '\u2032': '&prime;',
              '\u2033': '&Prime;',
              '\u203E': '&oline;',
              '\u2044': '&frasl;',
              '\u2118': '&weierp;',
              ℑ: '&image;',
              ℜ: '&real;',
              '\u2122': '&trade;',
              ℵ: '&alefsym;',
              '\u2190': '&larr;',
              '\u2191': '&uarr;',
              '\u2192': '&rarr;',
              '\u2193': '&darr;',
              '\u2194': '&harr;',
              '\u21B5': '&crarr;',
              '\u21D0': '&lArr;',
              '\u21D1': '&uArr;',
              '\u21D2': '&rArr;',
              '\u21D3': '&dArr;',
              '\u21D4': '&hArr;',
              '\u2200': '&forall;',
              '\u2202': '&part;',
              '\u2203': '&exist;',
              '\u2205': '&empty;',
              '\u2207': '&nabla;',
              '\u2208': '&isin;',
              '\u2209': '&notin;',
              '\u220B': '&ni;',
              '\u220F': '&prod;',
              '\u2211': '&sum;',
              '\u2212': '&minus;',
              '\u2217': '&lowast;',
              '\u221A': '&radic;',
              '\u221D': '&prop;',
              '\u221E': '&infin;',
              '\u2220': '&ang;',
              '\u2227': '&and;',
              '\u2228': '&or;',
              '\u2229': '&cap;',
              '\u222A': '&cup;',
              '\u222B': '&int;',
              '\u2234': '&there4;',
              '\u223C': '&sim;',
              '\u2245': '&cong;',
              '\u2248': '&asymp;',
              '\u2260': '&ne;',
              '\u2261': '&equiv;',
              '\u2264': '&le;',
              '\u2265': '&ge;',
              '\u2282': '&sub;',
              '\u2283': '&sup;',
              '\u2284': '&nsub;',
              '\u2286': '&sube;',
              '\u2287': '&supe;',
              '\u2295': '&oplus;',
              '\u2297': '&otimes;',
              '\u22A5': '&perp;',
              '\u22C5': '&sdot;',
              '\u2308': '&lceil;',
              '\u2309': '&rceil;',
              '\u230A': '&lfloor;',
              '\u230B': '&rfloor;',
              '\u2329': '&lang;',
              '\u232A': '&rang;',
              '\u25CA': '&loz;',
              '\u2660': '&spades;',
              '\u2663': '&clubs;',
              '\u2665': '&hearts;',
              '\u2666': '&diams;',
            },
          },
          html5: {
            entities: {
              '&AElig': '\xC6',
              '&AElig;': '\xC6',
              '&AMP': '&',
              '&AMP;': '&',
              '&Aacute': '\xC1',
              '&Aacute;': '\xC1',
              '&Abreve;': '\u0102',
              '&Acirc': '\xC2',
              '&Acirc;': '\xC2',
              '&Acy;': '\u0410',
              '&Afr;': '\u{1D504}',
              '&Agrave': '\xC0',
              '&Agrave;': '\xC0',
              '&Alpha;': '\u0391',
              '&Amacr;': '\u0100',
              '&And;': '\u2A53',
              '&Aogon;': '\u0104',
              '&Aopf;': '\u{1D538}',
              '&ApplyFunction;': '\u2061',
              '&Aring': '\xC5',
              '&Aring;': '\xC5',
              '&Ascr;': '\u{1D49C}',
              '&Assign;': '\u2254',
              '&Atilde': '\xC3',
              '&Atilde;': '\xC3',
              '&Auml': '\xC4',
              '&Auml;': '\xC4',
              '&Backslash;': '\u2216',
              '&Barv;': '\u2AE7',
              '&Barwed;': '\u2306',
              '&Bcy;': '\u0411',
              '&Because;': '\u2235',
              '&Bernoullis;': '\u212C',
              '&Beta;': '\u0392',
              '&Bfr;': '\u{1D505}',
              '&Bopf;': '\u{1D539}',
              '&Breve;': '\u02D8',
              '&Bscr;': '\u212C',
              '&Bumpeq;': '\u224E',
              '&CHcy;': '\u0427',
              '&COPY': '\xA9',
              '&COPY;': '\xA9',
              '&Cacute;': '\u0106',
              '&Cap;': '\u22D2',
              '&CapitalDifferentialD;': '\u2145',
              '&Cayleys;': '\u212D',
              '&Ccaron;': '\u010C',
              '&Ccedil': '\xC7',
              '&Ccedil;': '\xC7',
              '&Ccirc;': '\u0108',
              '&Cconint;': '\u2230',
              '&Cdot;': '\u010A',
              '&Cedilla;': '\xB8',
              '&CenterDot;': '\xB7',
              '&Cfr;': '\u212D',
              '&Chi;': '\u03A7',
              '&CircleDot;': '\u2299',
              '&CircleMinus;': '\u2296',
              '&CirclePlus;': '\u2295',
              '&CircleTimes;': '\u2297',
              '&ClockwiseContourIntegral;': '\u2232',
              '&CloseCurlyDoubleQuote;': '\u201D',
              '&CloseCurlyQuote;': '\u2019',
              '&Colon;': '\u2237',
              '&Colone;': '\u2A74',
              '&Congruent;': '\u2261',
              '&Conint;': '\u222F',
              '&ContourIntegral;': '\u222E',
              '&Copf;': '\u2102',
              '&Coproduct;': '\u2210',
              '&CounterClockwiseContourIntegral;': '\u2233',
              '&Cross;': '\u2A2F',
              '&Cscr;': '\u{1D49E}',
              '&Cup;': '\u22D3',
              '&CupCap;': '\u224D',
              '&DD;': '\u2145',
              '&DDotrahd;': '\u2911',
              '&DJcy;': '\u0402',
              '&DScy;': '\u0405',
              '&DZcy;': '\u040F',
              '&Dagger;': '\u2021',
              '&Darr;': '\u21A1',
              '&Dashv;': '\u2AE4',
              '&Dcaron;': '\u010E',
              '&Dcy;': '\u0414',
              '&Del;': '\u2207',
              '&Delta;': '\u0394',
              '&Dfr;': '\u{1D507}',
              '&DiacriticalAcute;': '\xB4',
              '&DiacriticalDot;': '\u02D9',
              '&DiacriticalDoubleAcute;': '\u02DD',
              '&DiacriticalGrave;': '`',
              '&DiacriticalTilde;': '\u02DC',
              '&Diamond;': '\u22C4',
              '&DifferentialD;': '\u2146',
              '&Dopf;': '\u{1D53B}',
              '&Dot;': '\xA8',
              '&DotDot;': '\u20DC',
              '&DotEqual;': '\u2250',
              '&DoubleContourIntegral;': '\u222F',
              '&DoubleDot;': '\xA8',
              '&DoubleDownArrow;': '\u21D3',
              '&DoubleLeftArrow;': '\u21D0',
              '&DoubleLeftRightArrow;': '\u21D4',
              '&DoubleLeftTee;': '\u2AE4',
              '&DoubleLongLeftArrow;': '\u27F8',
              '&DoubleLongLeftRightArrow;': '\u27FA',
              '&DoubleLongRightArrow;': '\u27F9',
              '&DoubleRightArrow;': '\u21D2',
              '&DoubleRightTee;': '\u22A8',
              '&DoubleUpArrow;': '\u21D1',
              '&DoubleUpDownArrow;': '\u21D5',
              '&DoubleVerticalBar;': '\u2225',
              '&DownArrow;': '\u2193',
              '&DownArrowBar;': '\u2913',
              '&DownArrowUpArrow;': '\u21F5',
              '&DownBreve;': '\u0311',
              '&DownLeftRightVector;': '\u2950',
              '&DownLeftTeeVector;': '\u295E',
              '&DownLeftVector;': '\u21BD',
              '&DownLeftVectorBar;': '\u2956',
              '&DownRightTeeVector;': '\u295F',
              '&DownRightVector;': '\u21C1',
              '&DownRightVectorBar;': '\u2957',
              '&DownTee;': '\u22A4',
              '&DownTeeArrow;': '\u21A7',
              '&Downarrow;': '\u21D3',
              '&Dscr;': '\u{1D49F}',
              '&Dstrok;': '\u0110',
              '&ENG;': '\u014A',
              '&ETH': '\xD0',
              '&ETH;': '\xD0',
              '&Eacute': '\xC9',
              '&Eacute;': '\xC9',
              '&Ecaron;': '\u011A',
              '&Ecirc': '\xCA',
              '&Ecirc;': '\xCA',
              '&Ecy;': '\u042D',
              '&Edot;': '\u0116',
              '&Efr;': '\u{1D508}',
              '&Egrave': '\xC8',
              '&Egrave;': '\xC8',
              '&Element;': '\u2208',
              '&Emacr;': '\u0112',
              '&EmptySmallSquare;': '\u25FB',
              '&EmptyVerySmallSquare;': '\u25AB',
              '&Eogon;': '\u0118',
              '&Eopf;': '\u{1D53C}',
              '&Epsilon;': '\u0395',
              '&Equal;': '\u2A75',
              '&EqualTilde;': '\u2242',
              '&Equilibrium;': '\u21CC',
              '&Escr;': '\u2130',
              '&Esim;': '\u2A73',
              '&Eta;': '\u0397',
              '&Euml': '\xCB',
              '&Euml;': '\xCB',
              '&Exists;': '\u2203',
              '&ExponentialE;': '\u2147',
              '&Fcy;': '\u0424',
              '&Ffr;': '\u{1D509}',
              '&FilledSmallSquare;': '\u25FC',
              '&FilledVerySmallSquare;': '\u25AA',
              '&Fopf;': '\u{1D53D}',
              '&ForAll;': '\u2200',
              '&Fouriertrf;': '\u2131',
              '&Fscr;': '\u2131',
              '&GJcy;': '\u0403',
              '&GT': '>',
              '&GT;': '>',
              '&Gamma;': '\u0393',
              '&Gammad;': '\u03DC',
              '&Gbreve;': '\u011E',
              '&Gcedil;': '\u0122',
              '&Gcirc;': '\u011C',
              '&Gcy;': '\u0413',
              '&Gdot;': '\u0120',
              '&Gfr;': '\u{1D50A}',
              '&Gg;': '\u22D9',
              '&Gopf;': '\u{1D53E}',
              '&GreaterEqual;': '\u2265',
              '&GreaterEqualLess;': '\u22DB',
              '&GreaterFullEqual;': '\u2267',
              '&GreaterGreater;': '\u2AA2',
              '&GreaterLess;': '\u2277',
              '&GreaterSlantEqual;': '\u2A7E',
              '&GreaterTilde;': '\u2273',
              '&Gscr;': '\u{1D4A2}',
              '&Gt;': '\u226B',
              '&HARDcy;': '\u042A',
              '&Hacek;': '\u02C7',
              '&Hat;': '^',
              '&Hcirc;': '\u0124',
              '&Hfr;': '\u210C',
              '&HilbertSpace;': '\u210B',
              '&Hopf;': '\u210D',
              '&HorizontalLine;': '\u2500',
              '&Hscr;': '\u210B',
              '&Hstrok;': '\u0126',
              '&HumpDownHump;': '\u224E',
              '&HumpEqual;': '\u224F',
              '&IEcy;': '\u0415',
              '&IJlig;': '\u0132',
              '&IOcy;': '\u0401',
              '&Iacute': '\xCD',
              '&Iacute;': '\xCD',
              '&Icirc': '\xCE',
              '&Icirc;': '\xCE',
              '&Icy;': '\u0418',
              '&Idot;': '\u0130',
              '&Ifr;': '\u2111',
              '&Igrave': '\xCC',
              '&Igrave;': '\xCC',
              '&Im;': '\u2111',
              '&Imacr;': '\u012A',
              '&ImaginaryI;': '\u2148',
              '&Implies;': '\u21D2',
              '&Int;': '\u222C',
              '&Integral;': '\u222B',
              '&Intersection;': '\u22C2',
              '&InvisibleComma;': '\u2063',
              '&InvisibleTimes;': '\u2062',
              '&Iogon;': '\u012E',
              '&Iopf;': '\u{1D540}',
              '&Iota;': '\u0399',
              '&Iscr;': '\u2110',
              '&Itilde;': '\u0128',
              '&Iukcy;': '\u0406',
              '&Iuml': '\xCF',
              '&Iuml;': '\xCF',
              '&Jcirc;': '\u0134',
              '&Jcy;': '\u0419',
              '&Jfr;': '\u{1D50D}',
              '&Jopf;': '\u{1D541}',
              '&Jscr;': '\u{1D4A5}',
              '&Jsercy;': '\u0408',
              '&Jukcy;': '\u0404',
              '&KHcy;': '\u0425',
              '&KJcy;': '\u040C',
              '&Kappa;': '\u039A',
              '&Kcedil;': '\u0136',
              '&Kcy;': '\u041A',
              '&Kfr;': '\u{1D50E}',
              '&Kopf;': '\u{1D542}',
              '&Kscr;': '\u{1D4A6}',
              '&LJcy;': '\u0409',
              '&LT': '<',
              '&LT;': '<',
              '&Lacute;': '\u0139',
              '&Lambda;': '\u039B',
              '&Lang;': '\u27EA',
              '&Laplacetrf;': '\u2112',
              '&Larr;': '\u219E',
              '&Lcaron;': '\u013D',
              '&Lcedil;': '\u013B',
              '&Lcy;': '\u041B',
              '&LeftAngleBracket;': '\u27E8',
              '&LeftArrow;': '\u2190',
              '&LeftArrowBar;': '\u21E4',
              '&LeftArrowRightArrow;': '\u21C6',
              '&LeftCeiling;': '\u2308',
              '&LeftDoubleBracket;': '\u27E6',
              '&LeftDownTeeVector;': '\u2961',
              '&LeftDownVector;': '\u21C3',
              '&LeftDownVectorBar;': '\u2959',
              '&LeftFloor;': '\u230A',
              '&LeftRightArrow;': '\u2194',
              '&LeftRightVector;': '\u294E',
              '&LeftTee;': '\u22A3',
              '&LeftTeeArrow;': '\u21A4',
              '&LeftTeeVector;': '\u295A',
              '&LeftTriangle;': '\u22B2',
              '&LeftTriangleBar;': '\u29CF',
              '&LeftTriangleEqual;': '\u22B4',
              '&LeftUpDownVector;': '\u2951',
              '&LeftUpTeeVector;': '\u2960',
              '&LeftUpVector;': '\u21BF',
              '&LeftUpVectorBar;': '\u2958',
              '&LeftVector;': '\u21BC',
              '&LeftVectorBar;': '\u2952',
              '&Leftarrow;': '\u21D0',
              '&Leftrightarrow;': '\u21D4',
              '&LessEqualGreater;': '\u22DA',
              '&LessFullEqual;': '\u2266',
              '&LessGreater;': '\u2276',
              '&LessLess;': '\u2AA1',
              '&LessSlantEqual;': '\u2A7D',
              '&LessTilde;': '\u2272',
              '&Lfr;': '\u{1D50F}',
              '&Ll;': '\u22D8',
              '&Lleftarrow;': '\u21DA',
              '&Lmidot;': '\u013F',
              '&LongLeftArrow;': '\u27F5',
              '&LongLeftRightArrow;': '\u27F7',
              '&LongRightArrow;': '\u27F6',
              '&Longleftarrow;': '\u27F8',
              '&Longleftrightarrow;': '\u27FA',
              '&Longrightarrow;': '\u27F9',
              '&Lopf;': '\u{1D543}',
              '&LowerLeftArrow;': '\u2199',
              '&LowerRightArrow;': '\u2198',
              '&Lscr;': '\u2112',
              '&Lsh;': '\u21B0',
              '&Lstrok;': '\u0141',
              '&Lt;': '\u226A',
              '&Map;': '\u2905',
              '&Mcy;': '\u041C',
              '&MediumSpace;': '\u205F',
              '&Mellintrf;': '\u2133',
              '&Mfr;': '\u{1D510}',
              '&MinusPlus;': '\u2213',
              '&Mopf;': '\u{1D544}',
              '&Mscr;': '\u2133',
              '&Mu;': '\u039C',
              '&NJcy;': '\u040A',
              '&Nacute;': '\u0143',
              '&Ncaron;': '\u0147',
              '&Ncedil;': '\u0145',
              '&Ncy;': '\u041D',
              '&NegativeMediumSpace;': '\u200B',
              '&NegativeThickSpace;': '\u200B',
              '&NegativeThinSpace;': '\u200B',
              '&NegativeVeryThinSpace;': '\u200B',
              '&NestedGreaterGreater;': '\u226B',
              '&NestedLessLess;': '\u226A',
              '&NewLine;': `
`,
              '&Nfr;': '\u{1D511}',
              '&NoBreak;': '\u2060',
              '&NonBreakingSpace;': '\xA0',
              '&Nopf;': '\u2115',
              '&Not;': '\u2AEC',
              '&NotCongruent;': '\u2262',
              '&NotCupCap;': '\u226D',
              '&NotDoubleVerticalBar;': '\u2226',
              '&NotElement;': '\u2209',
              '&NotEqual;': '\u2260',
              '&NotEqualTilde;': '\u2242\u0338',
              '&NotExists;': '\u2204',
              '&NotGreater;': '\u226F',
              '&NotGreaterEqual;': '\u2271',
              '&NotGreaterFullEqual;': '\u2267\u0338',
              '&NotGreaterGreater;': '\u226B\u0338',
              '&NotGreaterLess;': '\u2279',
              '&NotGreaterSlantEqual;': '\u2A7E\u0338',
              '&NotGreaterTilde;': '\u2275',
              '&NotHumpDownHump;': '\u224E\u0338',
              '&NotHumpEqual;': '\u224F\u0338',
              '&NotLeftTriangle;': '\u22EA',
              '&NotLeftTriangleBar;': '\u29CF\u0338',
              '&NotLeftTriangleEqual;': '\u22EC',
              '&NotLess;': '\u226E',
              '&NotLessEqual;': '\u2270',
              '&NotLessGreater;': '\u2278',
              '&NotLessLess;': '\u226A\u0338',
              '&NotLessSlantEqual;': '\u2A7D\u0338',
              '&NotLessTilde;': '\u2274',
              '&NotNestedGreaterGreater;': '\u2AA2\u0338',
              '&NotNestedLessLess;': '\u2AA1\u0338',
              '&NotPrecedes;': '\u2280',
              '&NotPrecedesEqual;': '\u2AAF\u0338',
              '&NotPrecedesSlantEqual;': '\u22E0',
              '&NotReverseElement;': '\u220C',
              '&NotRightTriangle;': '\u22EB',
              '&NotRightTriangleBar;': '\u29D0\u0338',
              '&NotRightTriangleEqual;': '\u22ED',
              '&NotSquareSubset;': '\u228F\u0338',
              '&NotSquareSubsetEqual;': '\u22E2',
              '&NotSquareSuperset;': '\u2290\u0338',
              '&NotSquareSupersetEqual;': '\u22E3',
              '&NotSubset;': '\u2282\u20D2',
              '&NotSubsetEqual;': '\u2288',
              '&NotSucceeds;': '\u2281',
              '&NotSucceedsEqual;': '\u2AB0\u0338',
              '&NotSucceedsSlantEqual;': '\u22E1',
              '&NotSucceedsTilde;': '\u227F\u0338',
              '&NotSuperset;': '\u2283\u20D2',
              '&NotSupersetEqual;': '\u2289',
              '&NotTilde;': '\u2241',
              '&NotTildeEqual;': '\u2244',
              '&NotTildeFullEqual;': '\u2247',
              '&NotTildeTilde;': '\u2249',
              '&NotVerticalBar;': '\u2224',
              '&Nscr;': '\u{1D4A9}',
              '&Ntilde': '\xD1',
              '&Ntilde;': '\xD1',
              '&Nu;': '\u039D',
              '&OElig;': '\u0152',
              '&Oacute': '\xD3',
              '&Oacute;': '\xD3',
              '&Ocirc': '\xD4',
              '&Ocirc;': '\xD4',
              '&Ocy;': '\u041E',
              '&Odblac;': '\u0150',
              '&Ofr;': '\u{1D512}',
              '&Ograve': '\xD2',
              '&Ograve;': '\xD2',
              '&Omacr;': '\u014C',
              '&Omega;': '\u03A9',
              '&Omicron;': '\u039F',
              '&Oopf;': '\u{1D546}',
              '&OpenCurlyDoubleQuote;': '\u201C',
              '&OpenCurlyQuote;': '\u2018',
              '&Or;': '\u2A54',
              '&Oscr;': '\u{1D4AA}',
              '&Oslash': '\xD8',
              '&Oslash;': '\xD8',
              '&Otilde': '\xD5',
              '&Otilde;': '\xD5',
              '&Otimes;': '\u2A37',
              '&Ouml': '\xD6',
              '&Ouml;': '\xD6',
              '&OverBar;': '\u203E',
              '&OverBrace;': '\u23DE',
              '&OverBracket;': '\u23B4',
              '&OverParenthesis;': '\u23DC',
              '&PartialD;': '\u2202',
              '&Pcy;': '\u041F',
              '&Pfr;': '\u{1D513}',
              '&Phi;': '\u03A6',
              '&Pi;': '\u03A0',
              '&PlusMinus;': '\xB1',
              '&Poincareplane;': '\u210C',
              '&Popf;': '\u2119',
              '&Pr;': '\u2ABB',
              '&Precedes;': '\u227A',
              '&PrecedesEqual;': '\u2AAF',
              '&PrecedesSlantEqual;': '\u227C',
              '&PrecedesTilde;': '\u227E',
              '&Prime;': '\u2033',
              '&Product;': '\u220F',
              '&Proportion;': '\u2237',
              '&Proportional;': '\u221D',
              '&Pscr;': '\u{1D4AB}',
              '&Psi;': '\u03A8',
              '&QUOT': '"',
              '&QUOT;': '"',
              '&Qfr;': '\u{1D514}',
              '&Qopf;': '\u211A',
              '&Qscr;': '\u{1D4AC}',
              '&RBarr;': '\u2910',
              '&REG': '\xAE',
              '&REG;': '\xAE',
              '&Racute;': '\u0154',
              '&Rang;': '\u27EB',
              '&Rarr;': '\u21A0',
              '&Rarrtl;': '\u2916',
              '&Rcaron;': '\u0158',
              '&Rcedil;': '\u0156',
              '&Rcy;': '\u0420',
              '&Re;': '\u211C',
              '&ReverseElement;': '\u220B',
              '&ReverseEquilibrium;': '\u21CB',
              '&ReverseUpEquilibrium;': '\u296F',
              '&Rfr;': '\u211C',
              '&Rho;': '\u03A1',
              '&RightAngleBracket;': '\u27E9',
              '&RightArrow;': '\u2192',
              '&RightArrowBar;': '\u21E5',
              '&RightArrowLeftArrow;': '\u21C4',
              '&RightCeiling;': '\u2309',
              '&RightDoubleBracket;': '\u27E7',
              '&RightDownTeeVector;': '\u295D',
              '&RightDownVector;': '\u21C2',
              '&RightDownVectorBar;': '\u2955',
              '&RightFloor;': '\u230B',
              '&RightTee;': '\u22A2',
              '&RightTeeArrow;': '\u21A6',
              '&RightTeeVector;': '\u295B',
              '&RightTriangle;': '\u22B3',
              '&RightTriangleBar;': '\u29D0',
              '&RightTriangleEqual;': '\u22B5',
              '&RightUpDownVector;': '\u294F',
              '&RightUpTeeVector;': '\u295C',
              '&RightUpVector;': '\u21BE',
              '&RightUpVectorBar;': '\u2954',
              '&RightVector;': '\u21C0',
              '&RightVectorBar;': '\u2953',
              '&Rightarrow;': '\u21D2',
              '&Ropf;': '\u211D',
              '&RoundImplies;': '\u2970',
              '&Rrightarrow;': '\u21DB',
              '&Rscr;': '\u211B',
              '&Rsh;': '\u21B1',
              '&RuleDelayed;': '\u29F4',
              '&SHCHcy;': '\u0429',
              '&SHcy;': '\u0428',
              '&SOFTcy;': '\u042C',
              '&Sacute;': '\u015A',
              '&Sc;': '\u2ABC',
              '&Scaron;': '\u0160',
              '&Scedil;': '\u015E',
              '&Scirc;': '\u015C',
              '&Scy;': '\u0421',
              '&Sfr;': '\u{1D516}',
              '&ShortDownArrow;': '\u2193',
              '&ShortLeftArrow;': '\u2190',
              '&ShortRightArrow;': '\u2192',
              '&ShortUpArrow;': '\u2191',
              '&Sigma;': '\u03A3',
              '&SmallCircle;': '\u2218',
              '&Sopf;': '\u{1D54A}',
              '&Sqrt;': '\u221A',
              '&Square;': '\u25A1',
              '&SquareIntersection;': '\u2293',
              '&SquareSubset;': '\u228F',
              '&SquareSubsetEqual;': '\u2291',
              '&SquareSuperset;': '\u2290',
              '&SquareSupersetEqual;': '\u2292',
              '&SquareUnion;': '\u2294',
              '&Sscr;': '\u{1D4AE}',
              '&Star;': '\u22C6',
              '&Sub;': '\u22D0',
              '&Subset;': '\u22D0',
              '&SubsetEqual;': '\u2286',
              '&Succeeds;': '\u227B',
              '&SucceedsEqual;': '\u2AB0',
              '&SucceedsSlantEqual;': '\u227D',
              '&SucceedsTilde;': '\u227F',
              '&SuchThat;': '\u220B',
              '&Sum;': '\u2211',
              '&Sup;': '\u22D1',
              '&Superset;': '\u2283',
              '&SupersetEqual;': '\u2287',
              '&Supset;': '\u22D1',
              '&THORN': '\xDE',
              '&THORN;': '\xDE',
              '&TRADE;': '\u2122',
              '&TSHcy;': '\u040B',
              '&TScy;': '\u0426',
              '&Tab;': '	',
              '&Tau;': '\u03A4',
              '&Tcaron;': '\u0164',
              '&Tcedil;': '\u0162',
              '&Tcy;': '\u0422',
              '&Tfr;': '\u{1D517}',
              '&Therefore;': '\u2234',
              '&Theta;': '\u0398',
              '&ThickSpace;': '\u205F\u200A',
              '&ThinSpace;': '\u2009',
              '&Tilde;': '\u223C',
              '&TildeEqual;': '\u2243',
              '&TildeFullEqual;': '\u2245',
              '&TildeTilde;': '\u2248',
              '&Topf;': '\u{1D54B}',
              '&TripleDot;': '\u20DB',
              '&Tscr;': '\u{1D4AF}',
              '&Tstrok;': '\u0166',
              '&Uacute': '\xDA',
              '&Uacute;': '\xDA',
              '&Uarr;': '\u219F',
              '&Uarrocir;': '\u2949',
              '&Ubrcy;': '\u040E',
              '&Ubreve;': '\u016C',
              '&Ucirc': '\xDB',
              '&Ucirc;': '\xDB',
              '&Ucy;': '\u0423',
              '&Udblac;': '\u0170',
              '&Ufr;': '\u{1D518}',
              '&Ugrave': '\xD9',
              '&Ugrave;': '\xD9',
              '&Umacr;': '\u016A',
              '&UnderBar;': '_',
              '&UnderBrace;': '\u23DF',
              '&UnderBracket;': '\u23B5',
              '&UnderParenthesis;': '\u23DD',
              '&Union;': '\u22C3',
              '&UnionPlus;': '\u228E',
              '&Uogon;': '\u0172',
              '&Uopf;': '\u{1D54C}',
              '&UpArrow;': '\u2191',
              '&UpArrowBar;': '\u2912',
              '&UpArrowDownArrow;': '\u21C5',
              '&UpDownArrow;': '\u2195',
              '&UpEquilibrium;': '\u296E',
              '&UpTee;': '\u22A5',
              '&UpTeeArrow;': '\u21A5',
              '&Uparrow;': '\u21D1',
              '&Updownarrow;': '\u21D5',
              '&UpperLeftArrow;': '\u2196',
              '&UpperRightArrow;': '\u2197',
              '&Upsi;': '\u03D2',
              '&Upsilon;': '\u03A5',
              '&Uring;': '\u016E',
              '&Uscr;': '\u{1D4B0}',
              '&Utilde;': '\u0168',
              '&Uuml': '\xDC',
              '&Uuml;': '\xDC',
              '&VDash;': '\u22AB',
              '&Vbar;': '\u2AEB',
              '&Vcy;': '\u0412',
              '&Vdash;': '\u22A9',
              '&Vdashl;': '\u2AE6',
              '&Vee;': '\u22C1',
              '&Verbar;': '\u2016',
              '&Vert;': '\u2016',
              '&VerticalBar;': '\u2223',
              '&VerticalLine;': '|',
              '&VerticalSeparator;': '\u2758',
              '&VerticalTilde;': '\u2240',
              '&VeryThinSpace;': '\u200A',
              '&Vfr;': '\u{1D519}',
              '&Vopf;': '\u{1D54D}',
              '&Vscr;': '\u{1D4B1}',
              '&Vvdash;': '\u22AA',
              '&Wcirc;': '\u0174',
              '&Wedge;': '\u22C0',
              '&Wfr;': '\u{1D51A}',
              '&Wopf;': '\u{1D54E}',
              '&Wscr;': '\u{1D4B2}',
              '&Xfr;': '\u{1D51B}',
              '&Xi;': '\u039E',
              '&Xopf;': '\u{1D54F}',
              '&Xscr;': '\u{1D4B3}',
              '&YAcy;': '\u042F',
              '&YIcy;': '\u0407',
              '&YUcy;': '\u042E',
              '&Yacute': '\xDD',
              '&Yacute;': '\xDD',
              '&Ycirc;': '\u0176',
              '&Ycy;': '\u042B',
              '&Yfr;': '\u{1D51C}',
              '&Yopf;': '\u{1D550}',
              '&Yscr;': '\u{1D4B4}',
              '&Yuml;': '\u0178',
              '&ZHcy;': '\u0416',
              '&Zacute;': '\u0179',
              '&Zcaron;': '\u017D',
              '&Zcy;': '\u0417',
              '&Zdot;': '\u017B',
              '&ZeroWidthSpace;': '\u200B',
              '&Zeta;': '\u0396',
              '&Zfr;': '\u2128',
              '&Zopf;': '\u2124',
              '&Zscr;': '\u{1D4B5}',
              '&aacute': '\xE1',
              '&aacute;': '\xE1',
              '&abreve;': '\u0103',
              '&ac;': '\u223E',
              '&acE;': '\u223E\u0333',
              '&acd;': '\u223F',
              '&acirc': '\xE2',
              '&acirc;': '\xE2',
              '&acute': '\xB4',
              '&acute;': '\xB4',
              '&acy;': '\u0430',
              '&aelig': '\xE6',
              '&aelig;': '\xE6',
              '&af;': '\u2061',
              '&afr;': '\u{1D51E}',
              '&agrave': '\xE0',
              '&agrave;': '\xE0',
              '&alefsym;': '\u2135',
              '&aleph;': '\u2135',
              '&alpha;': '\u03B1',
              '&amacr;': '\u0101',
              '&amalg;': '\u2A3F',
              '&amp': '&',
              '&amp;': '&',
              '&and;': '\u2227',
              '&andand;': '\u2A55',
              '&andd;': '\u2A5C',
              '&andslope;': '\u2A58',
              '&andv;': '\u2A5A',
              '&ang;': '\u2220',
              '&ange;': '\u29A4',
              '&angle;': '\u2220',
              '&angmsd;': '\u2221',
              '&angmsdaa;': '\u29A8',
              '&angmsdab;': '\u29A9',
              '&angmsdac;': '\u29AA',
              '&angmsdad;': '\u29AB',
              '&angmsdae;': '\u29AC',
              '&angmsdaf;': '\u29AD',
              '&angmsdag;': '\u29AE',
              '&angmsdah;': '\u29AF',
              '&angrt;': '\u221F',
              '&angrtvb;': '\u22BE',
              '&angrtvbd;': '\u299D',
              '&angsph;': '\u2222',
              '&angst;': '\xC5',
              '&angzarr;': '\u237C',
              '&aogon;': '\u0105',
              '&aopf;': '\u{1D552}',
              '&ap;': '\u2248',
              '&apE;': '\u2A70',
              '&apacir;': '\u2A6F',
              '&ape;': '\u224A',
              '&apid;': '\u224B',
              '&apos;': "'",
              '&approx;': '\u2248',
              '&approxeq;': '\u224A',
              '&aring': '\xE5',
              '&aring;': '\xE5',
              '&ascr;': '\u{1D4B6}',
              '&ast;': '*',
              '&asymp;': '\u2248',
              '&asympeq;': '\u224D',
              '&atilde': '\xE3',
              '&atilde;': '\xE3',
              '&auml': '\xE4',
              '&auml;': '\xE4',
              '&awconint;': '\u2233',
              '&awint;': '\u2A11',
              '&bNot;': '\u2AED',
              '&backcong;': '\u224C',
              '&backepsilon;': '\u03F6',
              '&backprime;': '\u2035',
              '&backsim;': '\u223D',
              '&backsimeq;': '\u22CD',
              '&barvee;': '\u22BD',
              '&barwed;': '\u2305',
              '&barwedge;': '\u2305',
              '&bbrk;': '\u23B5',
              '&bbrktbrk;': '\u23B6',
              '&bcong;': '\u224C',
              '&bcy;': '\u0431',
              '&bdquo;': '\u201E',
              '&becaus;': '\u2235',
              '&because;': '\u2235',
              '&bemptyv;': '\u29B0',
              '&bepsi;': '\u03F6',
              '&bernou;': '\u212C',
              '&beta;': '\u03B2',
              '&beth;': '\u2136',
              '&between;': '\u226C',
              '&bfr;': '\u{1D51F}',
              '&bigcap;': '\u22C2',
              '&bigcirc;': '\u25EF',
              '&bigcup;': '\u22C3',
              '&bigodot;': '\u2A00',
              '&bigoplus;': '\u2A01',
              '&bigotimes;': '\u2A02',
              '&bigsqcup;': '\u2A06',
              '&bigstar;': '\u2605',
              '&bigtriangledown;': '\u25BD',
              '&bigtriangleup;': '\u25B3',
              '&biguplus;': '\u2A04',
              '&bigvee;': '\u22C1',
              '&bigwedge;': '\u22C0',
              '&bkarow;': '\u290D',
              '&blacklozenge;': '\u29EB',
              '&blacksquare;': '\u25AA',
              '&blacktriangle;': '\u25B4',
              '&blacktriangledown;': '\u25BE',
              '&blacktriangleleft;': '\u25C2',
              '&blacktriangleright;': '\u25B8',
              '&blank;': '\u2423',
              '&blk12;': '\u2592',
              '&blk14;': '\u2591',
              '&blk34;': '\u2593',
              '&block;': '\u2588',
              '&bne;': '=\u20E5',
              '&bnequiv;': '\u2261\u20E5',
              '&bnot;': '\u2310',
              '&bopf;': '\u{1D553}',
              '&bot;': '\u22A5',
              '&bottom;': '\u22A5',
              '&bowtie;': '\u22C8',
              '&boxDL;': '\u2557',
              '&boxDR;': '\u2554',
              '&boxDl;': '\u2556',
              '&boxDr;': '\u2553',
              '&boxH;': '\u2550',
              '&boxHD;': '\u2566',
              '&boxHU;': '\u2569',
              '&boxHd;': '\u2564',
              '&boxHu;': '\u2567',
              '&boxUL;': '\u255D',
              '&boxUR;': '\u255A',
              '&boxUl;': '\u255C',
              '&boxUr;': '\u2559',
              '&boxV;': '\u2551',
              '&boxVH;': '\u256C',
              '&boxVL;': '\u2563',
              '&boxVR;': '\u2560',
              '&boxVh;': '\u256B',
              '&boxVl;': '\u2562',
              '&boxVr;': '\u255F',
              '&boxbox;': '\u29C9',
              '&boxdL;': '\u2555',
              '&boxdR;': '\u2552',
              '&boxdl;': '\u2510',
              '&boxdr;': '\u250C',
              '&boxh;': '\u2500',
              '&boxhD;': '\u2565',
              '&boxhU;': '\u2568',
              '&boxhd;': '\u252C',
              '&boxhu;': '\u2534',
              '&boxminus;': '\u229F',
              '&boxplus;': '\u229E',
              '&boxtimes;': '\u22A0',
              '&boxuL;': '\u255B',
              '&boxuR;': '\u2558',
              '&boxul;': '\u2518',
              '&boxur;': '\u2514',
              '&boxv;': '\u2502',
              '&boxvH;': '\u256A',
              '&boxvL;': '\u2561',
              '&boxvR;': '\u255E',
              '&boxvh;': '\u253C',
              '&boxvl;': '\u2524',
              '&boxvr;': '\u251C',
              '&bprime;': '\u2035',
              '&breve;': '\u02D8',
              '&brvbar': '\xA6',
              '&brvbar;': '\xA6',
              '&bscr;': '\u{1D4B7}',
              '&bsemi;': '\u204F',
              '&bsim;': '\u223D',
              '&bsime;': '\u22CD',
              '&bsol;': '\\',
              '&bsolb;': '\u29C5',
              '&bsolhsub;': '\u27C8',
              '&bull;': '\u2022',
              '&bullet;': '\u2022',
              '&bump;': '\u224E',
              '&bumpE;': '\u2AAE',
              '&bumpe;': '\u224F',
              '&bumpeq;': '\u224F',
              '&cacute;': '\u0107',
              '&cap;': '\u2229',
              '&capand;': '\u2A44',
              '&capbrcup;': '\u2A49',
              '&capcap;': '\u2A4B',
              '&capcup;': '\u2A47',
              '&capdot;': '\u2A40',
              '&caps;': '\u2229\uFE00',
              '&caret;': '\u2041',
              '&caron;': '\u02C7',
              '&ccaps;': '\u2A4D',
              '&ccaron;': '\u010D',
              '&ccedil': '\xE7',
              '&ccedil;': '\xE7',
              '&ccirc;': '\u0109',
              '&ccups;': '\u2A4C',
              '&ccupssm;': '\u2A50',
              '&cdot;': '\u010B',
              '&cedil': '\xB8',
              '&cedil;': '\xB8',
              '&cemptyv;': '\u29B2',
              '&cent': '\xA2',
              '&cent;': '\xA2',
              '&centerdot;': '\xB7',
              '&cfr;': '\u{1D520}',
              '&chcy;': '\u0447',
              '&check;': '\u2713',
              '&checkmark;': '\u2713',
              '&chi;': '\u03C7',
              '&cir;': '\u25CB',
              '&cirE;': '\u29C3',
              '&circ;': '\u02C6',
              '&circeq;': '\u2257',
              '&circlearrowleft;': '\u21BA',
              '&circlearrowright;': '\u21BB',
              '&circledR;': '\xAE',
              '&circledS;': '\u24C8',
              '&circledast;': '\u229B',
              '&circledcirc;': '\u229A',
              '&circleddash;': '\u229D',
              '&cire;': '\u2257',
              '&cirfnint;': '\u2A10',
              '&cirmid;': '\u2AEF',
              '&cirscir;': '\u29C2',
              '&clubs;': '\u2663',
              '&clubsuit;': '\u2663',
              '&colon;': ':',
              '&colone;': '\u2254',
              '&coloneq;': '\u2254',
              '&comma;': ',',
              '&commat;': '@',
              '&comp;': '\u2201',
              '&compfn;': '\u2218',
              '&complement;': '\u2201',
              '&complexes;': '\u2102',
              '&cong;': '\u2245',
              '&congdot;': '\u2A6D',
              '&conint;': '\u222E',
              '&copf;': '\u{1D554}',
              '&coprod;': '\u2210',
              '&copy': '\xA9',
              '&copy;': '\xA9',
              '&copysr;': '\u2117',
              '&crarr;': '\u21B5',
              '&cross;': '\u2717',
              '&cscr;': '\u{1D4B8}',
              '&csub;': '\u2ACF',
              '&csube;': '\u2AD1',
              '&csup;': '\u2AD0',
              '&csupe;': '\u2AD2',
              '&ctdot;': '\u22EF',
              '&cudarrl;': '\u2938',
              '&cudarrr;': '\u2935',
              '&cuepr;': '\u22DE',
              '&cuesc;': '\u22DF',
              '&cularr;': '\u21B6',
              '&cularrp;': '\u293D',
              '&cup;': '\u222A',
              '&cupbrcap;': '\u2A48',
              '&cupcap;': '\u2A46',
              '&cupcup;': '\u2A4A',
              '&cupdot;': '\u228D',
              '&cupor;': '\u2A45',
              '&cups;': '\u222A\uFE00',
              '&curarr;': '\u21B7',
              '&curarrm;': '\u293C',
              '&curlyeqprec;': '\u22DE',
              '&curlyeqsucc;': '\u22DF',
              '&curlyvee;': '\u22CE',
              '&curlywedge;': '\u22CF',
              '&curren': '\xA4',
              '&curren;': '\xA4',
              '&curvearrowleft;': '\u21B6',
              '&curvearrowright;': '\u21B7',
              '&cuvee;': '\u22CE',
              '&cuwed;': '\u22CF',
              '&cwconint;': '\u2232',
              '&cwint;': '\u2231',
              '&cylcty;': '\u232D',
              '&dArr;': '\u21D3',
              '&dHar;': '\u2965',
              '&dagger;': '\u2020',
              '&daleth;': '\u2138',
              '&darr;': '\u2193',
              '&dash;': '\u2010',
              '&dashv;': '\u22A3',
              '&dbkarow;': '\u290F',
              '&dblac;': '\u02DD',
              '&dcaron;': '\u010F',
              '&dcy;': '\u0434',
              '&dd;': '\u2146',
              '&ddagger;': '\u2021',
              '&ddarr;': '\u21CA',
              '&ddotseq;': '\u2A77',
              '&deg': '\xB0',
              '&deg;': '\xB0',
              '&delta;': '\u03B4',
              '&demptyv;': '\u29B1',
              '&dfisht;': '\u297F',
              '&dfr;': '\u{1D521}',
              '&dharl;': '\u21C3',
              '&dharr;': '\u21C2',
              '&diam;': '\u22C4',
              '&diamond;': '\u22C4',
              '&diamondsuit;': '\u2666',
              '&diams;': '\u2666',
              '&die;': '\xA8',
              '&digamma;': '\u03DD',
              '&disin;': '\u22F2',
              '&div;': '\xF7',
              '&divide': '\xF7',
              '&divide;': '\xF7',
              '&divideontimes;': '\u22C7',
              '&divonx;': '\u22C7',
              '&djcy;': '\u0452',
              '&dlcorn;': '\u231E',
              '&dlcrop;': '\u230D',
              '&dollar;': '$',
              '&dopf;': '\u{1D555}',
              '&dot;': '\u02D9',
              '&doteq;': '\u2250',
              '&doteqdot;': '\u2251',
              '&dotminus;': '\u2238',
              '&dotplus;': '\u2214',
              '&dotsquare;': '\u22A1',
              '&doublebarwedge;': '\u2306',
              '&downarrow;': '\u2193',
              '&downdownarrows;': '\u21CA',
              '&downharpoonleft;': '\u21C3',
              '&downharpoonright;': '\u21C2',
              '&drbkarow;': '\u2910',
              '&drcorn;': '\u231F',
              '&drcrop;': '\u230C',
              '&dscr;': '\u{1D4B9}',
              '&dscy;': '\u0455',
              '&dsol;': '\u29F6',
              '&dstrok;': '\u0111',
              '&dtdot;': '\u22F1',
              '&dtri;': '\u25BF',
              '&dtrif;': '\u25BE',
              '&duarr;': '\u21F5',
              '&duhar;': '\u296F',
              '&dwangle;': '\u29A6',
              '&dzcy;': '\u045F',
              '&dzigrarr;': '\u27FF',
              '&eDDot;': '\u2A77',
              '&eDot;': '\u2251',
              '&eacute': '\xE9',
              '&eacute;': '\xE9',
              '&easter;': '\u2A6E',
              '&ecaron;': '\u011B',
              '&ecir;': '\u2256',
              '&ecirc': '\xEA',
              '&ecirc;': '\xEA',
              '&ecolon;': '\u2255',
              '&ecy;': '\u044D',
              '&edot;': '\u0117',
              '&ee;': '\u2147',
              '&efDot;': '\u2252',
              '&efr;': '\u{1D522}',
              '&eg;': '\u2A9A',
              '&egrave': '\xE8',
              '&egrave;': '\xE8',
              '&egs;': '\u2A96',
              '&egsdot;': '\u2A98',
              '&el;': '\u2A99',
              '&elinters;': '\u23E7',
              '&ell;': '\u2113',
              '&els;': '\u2A95',
              '&elsdot;': '\u2A97',
              '&emacr;': '\u0113',
              '&empty;': '\u2205',
              '&emptyset;': '\u2205',
              '&emptyv;': '\u2205',
              '&emsp13;': '\u2004',
              '&emsp14;': '\u2005',
              '&emsp;': '\u2003',
              '&eng;': '\u014B',
              '&ensp;': '\u2002',
              '&eogon;': '\u0119',
              '&eopf;': '\u{1D556}',
              '&epar;': '\u22D5',
              '&eparsl;': '\u29E3',
              '&eplus;': '\u2A71',
              '&epsi;': '\u03B5',
              '&epsilon;': '\u03B5',
              '&epsiv;': '\u03F5',
              '&eqcirc;': '\u2256',
              '&eqcolon;': '\u2255',
              '&eqsim;': '\u2242',
              '&eqslantgtr;': '\u2A96',
              '&eqslantless;': '\u2A95',
              '&equals;': '=',
              '&equest;': '\u225F',
              '&equiv;': '\u2261',
              '&equivDD;': '\u2A78',
              '&eqvparsl;': '\u29E5',
              '&erDot;': '\u2253',
              '&erarr;': '\u2971',
              '&escr;': '\u212F',
              '&esdot;': '\u2250',
              '&esim;': '\u2242',
              '&eta;': '\u03B7',
              '&eth': '\xF0',
              '&eth;': '\xF0',
              '&euml': '\xEB',
              '&euml;': '\xEB',
              '&euro;': '\u20AC',
              '&excl;': '!',
              '&exist;': '\u2203',
              '&expectation;': '\u2130',
              '&exponentiale;': '\u2147',
              '&fallingdotseq;': '\u2252',
              '&fcy;': '\u0444',
              '&female;': '\u2640',
              '&ffilig;': '\uFB03',
              '&fflig;': '\uFB00',
              '&ffllig;': '\uFB04',
              '&ffr;': '\u{1D523}',
              '&filig;': '\uFB01',
              '&fjlig;': 'fj',
              '&flat;': '\u266D',
              '&fllig;': '\uFB02',
              '&fltns;': '\u25B1',
              '&fnof;': '\u0192',
              '&fopf;': '\u{1D557}',
              '&forall;': '\u2200',
              '&fork;': '\u22D4',
              '&forkv;': '\u2AD9',
              '&fpartint;': '\u2A0D',
              '&frac12': '\xBD',
              '&frac12;': '\xBD',
              '&frac13;': '\u2153',
              '&frac14': '\xBC',
              '&frac14;': '\xBC',
              '&frac15;': '\u2155',
              '&frac16;': '\u2159',
              '&frac18;': '\u215B',
              '&frac23;': '\u2154',
              '&frac25;': '\u2156',
              '&frac34': '\xBE',
              '&frac34;': '\xBE',
              '&frac35;': '\u2157',
              '&frac38;': '\u215C',
              '&frac45;': '\u2158',
              '&frac56;': '\u215A',
              '&frac58;': '\u215D',
              '&frac78;': '\u215E',
              '&frasl;': '\u2044',
              '&frown;': '\u2322',
              '&fscr;': '\u{1D4BB}',
              '&gE;': '\u2267',
              '&gEl;': '\u2A8C',
              '&gacute;': '\u01F5',
              '&gamma;': '\u03B3',
              '&gammad;': '\u03DD',
              '&gap;': '\u2A86',
              '&gbreve;': '\u011F',
              '&gcirc;': '\u011D',
              '&gcy;': '\u0433',
              '&gdot;': '\u0121',
              '&ge;': '\u2265',
              '&gel;': '\u22DB',
              '&geq;': '\u2265',
              '&geqq;': '\u2267',
              '&geqslant;': '\u2A7E',
              '&ges;': '\u2A7E',
              '&gescc;': '\u2AA9',
              '&gesdot;': '\u2A80',
              '&gesdoto;': '\u2A82',
              '&gesdotol;': '\u2A84',
              '&gesl;': '\u22DB\uFE00',
              '&gesles;': '\u2A94',
              '&gfr;': '\u{1D524}',
              '&gg;': '\u226B',
              '&ggg;': '\u22D9',
              '&gimel;': '\u2137',
              '&gjcy;': '\u0453',
              '&gl;': '\u2277',
              '&glE;': '\u2A92',
              '&gla;': '\u2AA5',
              '&glj;': '\u2AA4',
              '&gnE;': '\u2269',
              '&gnap;': '\u2A8A',
              '&gnapprox;': '\u2A8A',
              '&gne;': '\u2A88',
              '&gneq;': '\u2A88',
              '&gneqq;': '\u2269',
              '&gnsim;': '\u22E7',
              '&gopf;': '\u{1D558}',
              '&grave;': '`',
              '&gscr;': '\u210A',
              '&gsim;': '\u2273',
              '&gsime;': '\u2A8E',
              '&gsiml;': '\u2A90',
              '&gt': '>',
              '&gt;': '>',
              '&gtcc;': '\u2AA7',
              '&gtcir;': '\u2A7A',
              '&gtdot;': '\u22D7',
              '&gtlPar;': '\u2995',
              '&gtquest;': '\u2A7C',
              '&gtrapprox;': '\u2A86',
              '&gtrarr;': '\u2978',
              '&gtrdot;': '\u22D7',
              '&gtreqless;': '\u22DB',
              '&gtreqqless;': '\u2A8C',
              '&gtrless;': '\u2277',
              '&gtrsim;': '\u2273',
              '&gvertneqq;': '\u2269\uFE00',
              '&gvnE;': '\u2269\uFE00',
              '&hArr;': '\u21D4',
              '&hairsp;': '\u200A',
              '&half;': '\xBD',
              '&hamilt;': '\u210B',
              '&hardcy;': '\u044A',
              '&harr;': '\u2194',
              '&harrcir;': '\u2948',
              '&harrw;': '\u21AD',
              '&hbar;': '\u210F',
              '&hcirc;': '\u0125',
              '&hearts;': '\u2665',
              '&heartsuit;': '\u2665',
              '&hellip;': '\u2026',
              '&hercon;': '\u22B9',
              '&hfr;': '\u{1D525}',
              '&hksearow;': '\u2925',
              '&hkswarow;': '\u2926',
              '&hoarr;': '\u21FF',
              '&homtht;': '\u223B',
              '&hookleftarrow;': '\u21A9',
              '&hookrightarrow;': '\u21AA',
              '&hopf;': '\u{1D559}',
              '&horbar;': '\u2015',
              '&hscr;': '\u{1D4BD}',
              '&hslash;': '\u210F',
              '&hstrok;': '\u0127',
              '&hybull;': '\u2043',
              '&hyphen;': '\u2010',
              '&iacute': '\xED',
              '&iacute;': '\xED',
              '&ic;': '\u2063',
              '&icirc': '\xEE',
              '&icirc;': '\xEE',
              '&icy;': '\u0438',
              '&iecy;': '\u0435',
              '&iexcl': '\xA1',
              '&iexcl;': '\xA1',
              '&iff;': '\u21D4',
              '&ifr;': '\u{1D526}',
              '&igrave': '\xEC',
              '&igrave;': '\xEC',
              '&ii;': '\u2148',
              '&iiiint;': '\u2A0C',
              '&iiint;': '\u222D',
              '&iinfin;': '\u29DC',
              '&iiota;': '\u2129',
              '&ijlig;': '\u0133',
              '&imacr;': '\u012B',
              '&image;': '\u2111',
              '&imagline;': '\u2110',
              '&imagpart;': '\u2111',
              '&imath;': '\u0131',
              '&imof;': '\u22B7',
              '&imped;': '\u01B5',
              '&in;': '\u2208',
              '&incare;': '\u2105',
              '&infin;': '\u221E',
              '&infintie;': '\u29DD',
              '&inodot;': '\u0131',
              '&int;': '\u222B',
              '&intcal;': '\u22BA',
              '&integers;': '\u2124',
              '&intercal;': '\u22BA',
              '&intlarhk;': '\u2A17',
              '&intprod;': '\u2A3C',
              '&iocy;': '\u0451',
              '&iogon;': '\u012F',
              '&iopf;': '\u{1D55A}',
              '&iota;': '\u03B9',
              '&iprod;': '\u2A3C',
              '&iquest': '\xBF',
              '&iquest;': '\xBF',
              '&iscr;': '\u{1D4BE}',
              '&isin;': '\u2208',
              '&isinE;': '\u22F9',
              '&isindot;': '\u22F5',
              '&isins;': '\u22F4',
              '&isinsv;': '\u22F3',
              '&isinv;': '\u2208',
              '&it;': '\u2062',
              '&itilde;': '\u0129',
              '&iukcy;': '\u0456',
              '&iuml': '\xEF',
              '&iuml;': '\xEF',
              '&jcirc;': '\u0135',
              '&jcy;': '\u0439',
              '&jfr;': '\u{1D527}',
              '&jmath;': '\u0237',
              '&jopf;': '\u{1D55B}',
              '&jscr;': '\u{1D4BF}',
              '&jsercy;': '\u0458',
              '&jukcy;': '\u0454',
              '&kappa;': '\u03BA',
              '&kappav;': '\u03F0',
              '&kcedil;': '\u0137',
              '&kcy;': '\u043A',
              '&kfr;': '\u{1D528}',
              '&kgreen;': '\u0138',
              '&khcy;': '\u0445',
              '&kjcy;': '\u045C',
              '&kopf;': '\u{1D55C}',
              '&kscr;': '\u{1D4C0}',
              '&lAarr;': '\u21DA',
              '&lArr;': '\u21D0',
              '&lAtail;': '\u291B',
              '&lBarr;': '\u290E',
              '&lE;': '\u2266',
              '&lEg;': '\u2A8B',
              '&lHar;': '\u2962',
              '&lacute;': '\u013A',
              '&laemptyv;': '\u29B4',
              '&lagran;': '\u2112',
              '&lambda;': '\u03BB',
              '&lang;': '\u27E8',
              '&langd;': '\u2991',
              '&langle;': '\u27E8',
              '&lap;': '\u2A85',
              '&laquo': '\xAB',
              '&laquo;': '\xAB',
              '&larr;': '\u2190',
              '&larrb;': '\u21E4',
              '&larrbfs;': '\u291F',
              '&larrfs;': '\u291D',
              '&larrhk;': '\u21A9',
              '&larrlp;': '\u21AB',
              '&larrpl;': '\u2939',
              '&larrsim;': '\u2973',
              '&larrtl;': '\u21A2',
              '&lat;': '\u2AAB',
              '&latail;': '\u2919',
              '&late;': '\u2AAD',
              '&lates;': '\u2AAD\uFE00',
              '&lbarr;': '\u290C',
              '&lbbrk;': '\u2772',
              '&lbrace;': '{',
              '&lbrack;': '[',
              '&lbrke;': '\u298B',
              '&lbrksld;': '\u298F',
              '&lbrkslu;': '\u298D',
              '&lcaron;': '\u013E',
              '&lcedil;': '\u013C',
              '&lceil;': '\u2308',
              '&lcub;': '{',
              '&lcy;': '\u043B',
              '&ldca;': '\u2936',
              '&ldquo;': '\u201C',
              '&ldquor;': '\u201E',
              '&ldrdhar;': '\u2967',
              '&ldrushar;': '\u294B',
              '&ldsh;': '\u21B2',
              '&le;': '\u2264',
              '&leftarrow;': '\u2190',
              '&leftarrowtail;': '\u21A2',
              '&leftharpoondown;': '\u21BD',
              '&leftharpoonup;': '\u21BC',
              '&leftleftarrows;': '\u21C7',
              '&leftrightarrow;': '\u2194',
              '&leftrightarrows;': '\u21C6',
              '&leftrightharpoons;': '\u21CB',
              '&leftrightsquigarrow;': '\u21AD',
              '&leftthreetimes;': '\u22CB',
              '&leg;': '\u22DA',
              '&leq;': '\u2264',
              '&leqq;': '\u2266',
              '&leqslant;': '\u2A7D',
              '&les;': '\u2A7D',
              '&lescc;': '\u2AA8',
              '&lesdot;': '\u2A7F',
              '&lesdoto;': '\u2A81',
              '&lesdotor;': '\u2A83',
              '&lesg;': '\u22DA\uFE00',
              '&lesges;': '\u2A93',
              '&lessapprox;': '\u2A85',
              '&lessdot;': '\u22D6',
              '&lesseqgtr;': '\u22DA',
              '&lesseqqgtr;': '\u2A8B',
              '&lessgtr;': '\u2276',
              '&lesssim;': '\u2272',
              '&lfisht;': '\u297C',
              '&lfloor;': '\u230A',
              '&lfr;': '\u{1D529}',
              '&lg;': '\u2276',
              '&lgE;': '\u2A91',
              '&lhard;': '\u21BD',
              '&lharu;': '\u21BC',
              '&lharul;': '\u296A',
              '&lhblk;': '\u2584',
              '&ljcy;': '\u0459',
              '&ll;': '\u226A',
              '&llarr;': '\u21C7',
              '&llcorner;': '\u231E',
              '&llhard;': '\u296B',
              '&lltri;': '\u25FA',
              '&lmidot;': '\u0140',
              '&lmoust;': '\u23B0',
              '&lmoustache;': '\u23B0',
              '&lnE;': '\u2268',
              '&lnap;': '\u2A89',
              '&lnapprox;': '\u2A89',
              '&lne;': '\u2A87',
              '&lneq;': '\u2A87',
              '&lneqq;': '\u2268',
              '&lnsim;': '\u22E6',
              '&loang;': '\u27EC',
              '&loarr;': '\u21FD',
              '&lobrk;': '\u27E6',
              '&longleftarrow;': '\u27F5',
              '&longleftrightarrow;': '\u27F7',
              '&longmapsto;': '\u27FC',
              '&longrightarrow;': '\u27F6',
              '&looparrowleft;': '\u21AB',
              '&looparrowright;': '\u21AC',
              '&lopar;': '\u2985',
              '&lopf;': '\u{1D55D}',
              '&loplus;': '\u2A2D',
              '&lotimes;': '\u2A34',
              '&lowast;': '\u2217',
              '&lowbar;': '_',
              '&loz;': '\u25CA',
              '&lozenge;': '\u25CA',
              '&lozf;': '\u29EB',
              '&lpar;': '(',
              '&lparlt;': '\u2993',
              '&lrarr;': '\u21C6',
              '&lrcorner;': '\u231F',
              '&lrhar;': '\u21CB',
              '&lrhard;': '\u296D',
              '&lrm;': '\u200E',
              '&lrtri;': '\u22BF',
              '&lsaquo;': '\u2039',
              '&lscr;': '\u{1D4C1}',
              '&lsh;': '\u21B0',
              '&lsim;': '\u2272',
              '&lsime;': '\u2A8D',
              '&lsimg;': '\u2A8F',
              '&lsqb;': '[',
              '&lsquo;': '\u2018',
              '&lsquor;': '\u201A',
              '&lstrok;': '\u0142',
              '&lt': '<',
              '&lt;': '<',
              '&ltcc;': '\u2AA6',
              '&ltcir;': '\u2A79',
              '&ltdot;': '\u22D6',
              '&lthree;': '\u22CB',
              '&ltimes;': '\u22C9',
              '&ltlarr;': '\u2976',
              '&ltquest;': '\u2A7B',
              '&ltrPar;': '\u2996',
              '&ltri;': '\u25C3',
              '&ltrie;': '\u22B4',
              '&ltrif;': '\u25C2',
              '&lurdshar;': '\u294A',
              '&luruhar;': '\u2966',
              '&lvertneqq;': '\u2268\uFE00',
              '&lvnE;': '\u2268\uFE00',
              '&mDDot;': '\u223A',
              '&macr': '\xAF',
              '&macr;': '\xAF',
              '&male;': '\u2642',
              '&malt;': '\u2720',
              '&maltese;': '\u2720',
              '&map;': '\u21A6',
              '&mapsto;': '\u21A6',
              '&mapstodown;': '\u21A7',
              '&mapstoleft;': '\u21A4',
              '&mapstoup;': '\u21A5',
              '&marker;': '\u25AE',
              '&mcomma;': '\u2A29',
              '&mcy;': '\u043C',
              '&mdash;': '\u2014',
              '&measuredangle;': '\u2221',
              '&mfr;': '\u{1D52A}',
              '&mho;': '\u2127',
              '&micro': '\xB5',
              '&micro;': '\xB5',
              '&mid;': '\u2223',
              '&midast;': '*',
              '&midcir;': '\u2AF0',
              '&middot': '\xB7',
              '&middot;': '\xB7',
              '&minus;': '\u2212',
              '&minusb;': '\u229F',
              '&minusd;': '\u2238',
              '&minusdu;': '\u2A2A',
              '&mlcp;': '\u2ADB',
              '&mldr;': '\u2026',
              '&mnplus;': '\u2213',
              '&models;': '\u22A7',
              '&mopf;': '\u{1D55E}',
              '&mp;': '\u2213',
              '&mscr;': '\u{1D4C2}',
              '&mstpos;': '\u223E',
              '&mu;': '\u03BC',
              '&multimap;': '\u22B8',
              '&mumap;': '\u22B8',
              '&nGg;': '\u22D9\u0338',
              '&nGt;': '\u226B\u20D2',
              '&nGtv;': '\u226B\u0338',
              '&nLeftarrow;': '\u21CD',
              '&nLeftrightarrow;': '\u21CE',
              '&nLl;': '\u22D8\u0338',
              '&nLt;': '\u226A\u20D2',
              '&nLtv;': '\u226A\u0338',
              '&nRightarrow;': '\u21CF',
              '&nVDash;': '\u22AF',
              '&nVdash;': '\u22AE',
              '&nabla;': '\u2207',
              '&nacute;': '\u0144',
              '&nang;': '\u2220\u20D2',
              '&nap;': '\u2249',
              '&napE;': '\u2A70\u0338',
              '&napid;': '\u224B\u0338',
              '&napos;': '\u0149',
              '&napprox;': '\u2249',
              '&natur;': '\u266E',
              '&natural;': '\u266E',
              '&naturals;': '\u2115',
              '&nbsp': '\xA0',
              '&nbsp;': '\xA0',
              '&nbump;': '\u224E\u0338',
              '&nbumpe;': '\u224F\u0338',
              '&ncap;': '\u2A43',
              '&ncaron;': '\u0148',
              '&ncedil;': '\u0146',
              '&ncong;': '\u2247',
              '&ncongdot;': '\u2A6D\u0338',
              '&ncup;': '\u2A42',
              '&ncy;': '\u043D',
              '&ndash;': '\u2013',
              '&ne;': '\u2260',
              '&neArr;': '\u21D7',
              '&nearhk;': '\u2924',
              '&nearr;': '\u2197',
              '&nearrow;': '\u2197',
              '&nedot;': '\u2250\u0338',
              '&nequiv;': '\u2262',
              '&nesear;': '\u2928',
              '&nesim;': '\u2242\u0338',
              '&nexist;': '\u2204',
              '&nexists;': '\u2204',
              '&nfr;': '\u{1D52B}',
              '&ngE;': '\u2267\u0338',
              '&nge;': '\u2271',
              '&ngeq;': '\u2271',
              '&ngeqq;': '\u2267\u0338',
              '&ngeqslant;': '\u2A7E\u0338',
              '&nges;': '\u2A7E\u0338',
              '&ngsim;': '\u2275',
              '&ngt;': '\u226F',
              '&ngtr;': '\u226F',
              '&nhArr;': '\u21CE',
              '&nharr;': '\u21AE',
              '&nhpar;': '\u2AF2',
              '&ni;': '\u220B',
              '&nis;': '\u22FC',
              '&nisd;': '\u22FA',
              '&niv;': '\u220B',
              '&njcy;': '\u045A',
              '&nlArr;': '\u21CD',
              '&nlE;': '\u2266\u0338',
              '&nlarr;': '\u219A',
              '&nldr;': '\u2025',
              '&nle;': '\u2270',
              '&nleftarrow;': '\u219A',
              '&nleftrightarrow;': '\u21AE',
              '&nleq;': '\u2270',
              '&nleqq;': '\u2266\u0338',
              '&nleqslant;': '\u2A7D\u0338',
              '&nles;': '\u2A7D\u0338',
              '&nless;': '\u226E',
              '&nlsim;': '\u2274',
              '&nlt;': '\u226E',
              '&nltri;': '\u22EA',
              '&nltrie;': '\u22EC',
              '&nmid;': '\u2224',
              '&nopf;': '\u{1D55F}',
              '&not': '\xAC',
              '&not;': '\xAC',
              '&notin;': '\u2209',
              '&notinE;': '\u22F9\u0338',
              '&notindot;': '\u22F5\u0338',
              '&notinva;': '\u2209',
              '&notinvb;': '\u22F7',
              '&notinvc;': '\u22F6',
              '&notni;': '\u220C',
              '&notniva;': '\u220C',
              '&notnivb;': '\u22FE',
              '&notnivc;': '\u22FD',
              '&npar;': '\u2226',
              '&nparallel;': '\u2226',
              '&nparsl;': '\u2AFD\u20E5',
              '&npart;': '\u2202\u0338',
              '&npolint;': '\u2A14',
              '&npr;': '\u2280',
              '&nprcue;': '\u22E0',
              '&npre;': '\u2AAF\u0338',
              '&nprec;': '\u2280',
              '&npreceq;': '\u2AAF\u0338',
              '&nrArr;': '\u21CF',
              '&nrarr;': '\u219B',
              '&nrarrc;': '\u2933\u0338',
              '&nrarrw;': '\u219D\u0338',
              '&nrightarrow;': '\u219B',
              '&nrtri;': '\u22EB',
              '&nrtrie;': '\u22ED',
              '&nsc;': '\u2281',
              '&nsccue;': '\u22E1',
              '&nsce;': '\u2AB0\u0338',
              '&nscr;': '\u{1D4C3}',
              '&nshortmid;': '\u2224',
              '&nshortparallel;': '\u2226',
              '&nsim;': '\u2241',
              '&nsime;': '\u2244',
              '&nsimeq;': '\u2244',
              '&nsmid;': '\u2224',
              '&nspar;': '\u2226',
              '&nsqsube;': '\u22E2',
              '&nsqsupe;': '\u22E3',
              '&nsub;': '\u2284',
              '&nsubE;': '\u2AC5\u0338',
              '&nsube;': '\u2288',
              '&nsubset;': '\u2282\u20D2',
              '&nsubseteq;': '\u2288',
              '&nsubseteqq;': '\u2AC5\u0338',
              '&nsucc;': '\u2281',
              '&nsucceq;': '\u2AB0\u0338',
              '&nsup;': '\u2285',
              '&nsupE;': '\u2AC6\u0338',
              '&nsupe;': '\u2289',
              '&nsupset;': '\u2283\u20D2',
              '&nsupseteq;': '\u2289',
              '&nsupseteqq;': '\u2AC6\u0338',
              '&ntgl;': '\u2279',
              '&ntilde': '\xF1',
              '&ntilde;': '\xF1',
              '&ntlg;': '\u2278',
              '&ntriangleleft;': '\u22EA',
              '&ntrianglelefteq;': '\u22EC',
              '&ntriangleright;': '\u22EB',
              '&ntrianglerighteq;': '\u22ED',
              '&nu;': '\u03BD',
              '&num;': '#',
              '&numero;': '\u2116',
              '&numsp;': '\u2007',
              '&nvDash;': '\u22AD',
              '&nvHarr;': '\u2904',
              '&nvap;': '\u224D\u20D2',
              '&nvdash;': '\u22AC',
              '&nvge;': '\u2265\u20D2',
              '&nvgt;': '>\u20D2',
              '&nvinfin;': '\u29DE',
              '&nvlArr;': '\u2902',
              '&nvle;': '\u2264\u20D2',
              '&nvlt;': '<\u20D2',
              '&nvltrie;': '\u22B4\u20D2',
              '&nvrArr;': '\u2903',
              '&nvrtrie;': '\u22B5\u20D2',
              '&nvsim;': '\u223C\u20D2',
              '&nwArr;': '\u21D6',
              '&nwarhk;': '\u2923',
              '&nwarr;': '\u2196',
              '&nwarrow;': '\u2196',
              '&nwnear;': '\u2927',
              '&oS;': '\u24C8',
              '&oacute': '\xF3',
              '&oacute;': '\xF3',
              '&oast;': '\u229B',
              '&ocir;': '\u229A',
              '&ocirc': '\xF4',
              '&ocirc;': '\xF4',
              '&ocy;': '\u043E',
              '&odash;': '\u229D',
              '&odblac;': '\u0151',
              '&odiv;': '\u2A38',
              '&odot;': '\u2299',
              '&odsold;': '\u29BC',
              '&oelig;': '\u0153',
              '&ofcir;': '\u29BF',
              '&ofr;': '\u{1D52C}',
              '&ogon;': '\u02DB',
              '&ograve': '\xF2',
              '&ograve;': '\xF2',
              '&ogt;': '\u29C1',
              '&ohbar;': '\u29B5',
              '&ohm;': '\u03A9',
              '&oint;': '\u222E',
              '&olarr;': '\u21BA',
              '&olcir;': '\u29BE',
              '&olcross;': '\u29BB',
              '&oline;': '\u203E',
              '&olt;': '\u29C0',
              '&omacr;': '\u014D',
              '&omega;': '\u03C9',
              '&omicron;': '\u03BF',
              '&omid;': '\u29B6',
              '&ominus;': '\u2296',
              '&oopf;': '\u{1D560}',
              '&opar;': '\u29B7',
              '&operp;': '\u29B9',
              '&oplus;': '\u2295',
              '&or;': '\u2228',
              '&orarr;': '\u21BB',
              '&ord;': '\u2A5D',
              '&order;': '\u2134',
              '&orderof;': '\u2134',
              '&ordf': '\xAA',
              '&ordf;': '\xAA',
              '&ordm': '\xBA',
              '&ordm;': '\xBA',
              '&origof;': '\u22B6',
              '&oror;': '\u2A56',
              '&orslope;': '\u2A57',
              '&orv;': '\u2A5B',
              '&oscr;': '\u2134',
              '&oslash': '\xF8',
              '&oslash;': '\xF8',
              '&osol;': '\u2298',
              '&otilde': '\xF5',
              '&otilde;': '\xF5',
              '&otimes;': '\u2297',
              '&otimesas;': '\u2A36',
              '&ouml': '\xF6',
              '&ouml;': '\xF6',
              '&ovbar;': '\u233D',
              '&par;': '\u2225',
              '&para': '\xB6',
              '&para;': '\xB6',
              '&parallel;': '\u2225',
              '&parsim;': '\u2AF3',
              '&parsl;': '\u2AFD',
              '&part;': '\u2202',
              '&pcy;': '\u043F',
              '&percnt;': '%',
              '&period;': '.',
              '&permil;': '\u2030',
              '&perp;': '\u22A5',
              '&pertenk;': '\u2031',
              '&pfr;': '\u{1D52D}',
              '&phi;': '\u03C6',
              '&phiv;': '\u03D5',
              '&phmmat;': '\u2133',
              '&phone;': '\u260E',
              '&pi;': '\u03C0',
              '&pitchfork;': '\u22D4',
              '&piv;': '\u03D6',
              '&planck;': '\u210F',
              '&planckh;': '\u210E',
              '&plankv;': '\u210F',
              '&plus;': '+',
              '&plusacir;': '\u2A23',
              '&plusb;': '\u229E',
              '&pluscir;': '\u2A22',
              '&plusdo;': '\u2214',
              '&plusdu;': '\u2A25',
              '&pluse;': '\u2A72',
              '&plusmn': '\xB1',
              '&plusmn;': '\xB1',
              '&plussim;': '\u2A26',
              '&plustwo;': '\u2A27',
              '&pm;': '\xB1',
              '&pointint;': '\u2A15',
              '&popf;': '\u{1D561}',
              '&pound': '\xA3',
              '&pound;': '\xA3',
              '&pr;': '\u227A',
              '&prE;': '\u2AB3',
              '&prap;': '\u2AB7',
              '&prcue;': '\u227C',
              '&pre;': '\u2AAF',
              '&prec;': '\u227A',
              '&precapprox;': '\u2AB7',
              '&preccurlyeq;': '\u227C',
              '&preceq;': '\u2AAF',
              '&precnapprox;': '\u2AB9',
              '&precneqq;': '\u2AB5',
              '&precnsim;': '\u22E8',
              '&precsim;': '\u227E',
              '&prime;': '\u2032',
              '&primes;': '\u2119',
              '&prnE;': '\u2AB5',
              '&prnap;': '\u2AB9',
              '&prnsim;': '\u22E8',
              '&prod;': '\u220F',
              '&profalar;': '\u232E',
              '&profline;': '\u2312',
              '&profsurf;': '\u2313',
              '&prop;': '\u221D',
              '&propto;': '\u221D',
              '&prsim;': '\u227E',
              '&prurel;': '\u22B0',
              '&pscr;': '\u{1D4C5}',
              '&psi;': '\u03C8',
              '&puncsp;': '\u2008',
              '&qfr;': '\u{1D52E}',
              '&qint;': '\u2A0C',
              '&qopf;': '\u{1D562}',
              '&qprime;': '\u2057',
              '&qscr;': '\u{1D4C6}',
              '&quaternions;': '\u210D',
              '&quatint;': '\u2A16',
              '&quest;': '?',
              '&questeq;': '\u225F',
              '&quot': '"',
              '&quot;': '"',
              '&rAarr;': '\u21DB',
              '&rArr;': '\u21D2',
              '&rAtail;': '\u291C',
              '&rBarr;': '\u290F',
              '&rHar;': '\u2964',
              '&race;': '\u223D\u0331',
              '&racute;': '\u0155',
              '&radic;': '\u221A',
              '&raemptyv;': '\u29B3',
              '&rang;': '\u27E9',
              '&rangd;': '\u2992',
              '&range;': '\u29A5',
              '&rangle;': '\u27E9',
              '&raquo': '\xBB',
              '&raquo;': '\xBB',
              '&rarr;': '\u2192',
              '&rarrap;': '\u2975',
              '&rarrb;': '\u21E5',
              '&rarrbfs;': '\u2920',
              '&rarrc;': '\u2933',
              '&rarrfs;': '\u291E',
              '&rarrhk;': '\u21AA',
              '&rarrlp;': '\u21AC',
              '&rarrpl;': '\u2945',
              '&rarrsim;': '\u2974',
              '&rarrtl;': '\u21A3',
              '&rarrw;': '\u219D',
              '&ratail;': '\u291A',
              '&ratio;': '\u2236',
              '&rationals;': '\u211A',
              '&rbarr;': '\u290D',
              '&rbbrk;': '\u2773',
              '&rbrace;': '}',
              '&rbrack;': ']',
              '&rbrke;': '\u298C',
              '&rbrksld;': '\u298E',
              '&rbrkslu;': '\u2990',
              '&rcaron;': '\u0159',
              '&rcedil;': '\u0157',
              '&rceil;': '\u2309',
              '&rcub;': '}',
              '&rcy;': '\u0440',
              '&rdca;': '\u2937',
              '&rdldhar;': '\u2969',
              '&rdquo;': '\u201D',
              '&rdquor;': '\u201D',
              '&rdsh;': '\u21B3',
              '&real;': '\u211C',
              '&realine;': '\u211B',
              '&realpart;': '\u211C',
              '&reals;': '\u211D',
              '&rect;': '\u25AD',
              '&reg': '\xAE',
              '&reg;': '\xAE',
              '&rfisht;': '\u297D',
              '&rfloor;': '\u230B',
              '&rfr;': '\u{1D52F}',
              '&rhard;': '\u21C1',
              '&rharu;': '\u21C0',
              '&rharul;': '\u296C',
              '&rho;': '\u03C1',
              '&rhov;': '\u03F1',
              '&rightarrow;': '\u2192',
              '&rightarrowtail;': '\u21A3',
              '&rightharpoondown;': '\u21C1',
              '&rightharpoonup;': '\u21C0',
              '&rightleftarrows;': '\u21C4',
              '&rightleftharpoons;': '\u21CC',
              '&rightrightarrows;': '\u21C9',
              '&rightsquigarrow;': '\u219D',
              '&rightthreetimes;': '\u22CC',
              '&ring;': '\u02DA',
              '&risingdotseq;': '\u2253',
              '&rlarr;': '\u21C4',
              '&rlhar;': '\u21CC',
              '&rlm;': '\u200F',
              '&rmoust;': '\u23B1',
              '&rmoustache;': '\u23B1',
              '&rnmid;': '\u2AEE',
              '&roang;': '\u27ED',
              '&roarr;': '\u21FE',
              '&robrk;': '\u27E7',
              '&ropar;': '\u2986',
              '&ropf;': '\u{1D563}',
              '&roplus;': '\u2A2E',
              '&rotimes;': '\u2A35',
              '&rpar;': ')',
              '&rpargt;': '\u2994',
              '&rppolint;': '\u2A12',
              '&rrarr;': '\u21C9',
              '&rsaquo;': '\u203A',
              '&rscr;': '\u{1D4C7}',
              '&rsh;': '\u21B1',
              '&rsqb;': ']',
              '&rsquo;': '\u2019',
              '&rsquor;': '\u2019',
              '&rthree;': '\u22CC',
              '&rtimes;': '\u22CA',
              '&rtri;': '\u25B9',
              '&rtrie;': '\u22B5',
              '&rtrif;': '\u25B8',
              '&rtriltri;': '\u29CE',
              '&ruluhar;': '\u2968',
              '&rx;': '\u211E',
              '&sacute;': '\u015B',
              '&sbquo;': '\u201A',
              '&sc;': '\u227B',
              '&scE;': '\u2AB4',
              '&scap;': '\u2AB8',
              '&scaron;': '\u0161',
              '&sccue;': '\u227D',
              '&sce;': '\u2AB0',
              '&scedil;': '\u015F',
              '&scirc;': '\u015D',
              '&scnE;': '\u2AB6',
              '&scnap;': '\u2ABA',
              '&scnsim;': '\u22E9',
              '&scpolint;': '\u2A13',
              '&scsim;': '\u227F',
              '&scy;': '\u0441',
              '&sdot;': '\u22C5',
              '&sdotb;': '\u22A1',
              '&sdote;': '\u2A66',
              '&seArr;': '\u21D8',
              '&searhk;': '\u2925',
              '&searr;': '\u2198',
              '&searrow;': '\u2198',
              '&sect': '\xA7',
              '&sect;': '\xA7',
              '&semi;': ';',
              '&seswar;': '\u2929',
              '&setminus;': '\u2216',
              '&setmn;': '\u2216',
              '&sext;': '\u2736',
              '&sfr;': '\u{1D530}',
              '&sfrown;': '\u2322',
              '&sharp;': '\u266F',
              '&shchcy;': '\u0449',
              '&shcy;': '\u0448',
              '&shortmid;': '\u2223',
              '&shortparallel;': '\u2225',
              '&shy': '\xAD',
              '&shy;': '\xAD',
              '&sigma;': '\u03C3',
              '&sigmaf;': '\u03C2',
              '&sigmav;': '\u03C2',
              '&sim;': '\u223C',
              '&simdot;': '\u2A6A',
              '&sime;': '\u2243',
              '&simeq;': '\u2243',
              '&simg;': '\u2A9E',
              '&simgE;': '\u2AA0',
              '&siml;': '\u2A9D',
              '&simlE;': '\u2A9F',
              '&simne;': '\u2246',
              '&simplus;': '\u2A24',
              '&simrarr;': '\u2972',
              '&slarr;': '\u2190',
              '&smallsetminus;': '\u2216',
              '&smashp;': '\u2A33',
              '&smeparsl;': '\u29E4',
              '&smid;': '\u2223',
              '&smile;': '\u2323',
              '&smt;': '\u2AAA',
              '&smte;': '\u2AAC',
              '&smtes;': '\u2AAC\uFE00',
              '&softcy;': '\u044C',
              '&sol;': '/',
              '&solb;': '\u29C4',
              '&solbar;': '\u233F',
              '&sopf;': '\u{1D564}',
              '&spades;': '\u2660',
              '&spadesuit;': '\u2660',
              '&spar;': '\u2225',
              '&sqcap;': '\u2293',
              '&sqcaps;': '\u2293\uFE00',
              '&sqcup;': '\u2294',
              '&sqcups;': '\u2294\uFE00',
              '&sqsub;': '\u228F',
              '&sqsube;': '\u2291',
              '&sqsubset;': '\u228F',
              '&sqsubseteq;': '\u2291',
              '&sqsup;': '\u2290',
              '&sqsupe;': '\u2292',
              '&sqsupset;': '\u2290',
              '&sqsupseteq;': '\u2292',
              '&squ;': '\u25A1',
              '&square;': '\u25A1',
              '&squarf;': '\u25AA',
              '&squf;': '\u25AA',
              '&srarr;': '\u2192',
              '&sscr;': '\u{1D4C8}',
              '&ssetmn;': '\u2216',
              '&ssmile;': '\u2323',
              '&sstarf;': '\u22C6',
              '&star;': '\u2606',
              '&starf;': '\u2605',
              '&straightepsilon;': '\u03F5',
              '&straightphi;': '\u03D5',
              '&strns;': '\xAF',
              '&sub;': '\u2282',
              '&subE;': '\u2AC5',
              '&subdot;': '\u2ABD',
              '&sube;': '\u2286',
              '&subedot;': '\u2AC3',
              '&submult;': '\u2AC1',
              '&subnE;': '\u2ACB',
              '&subne;': '\u228A',
              '&subplus;': '\u2ABF',
              '&subrarr;': '\u2979',
              '&subset;': '\u2282',
              '&subseteq;': '\u2286',
              '&subseteqq;': '\u2AC5',
              '&subsetneq;': '\u228A',
              '&subsetneqq;': '\u2ACB',
              '&subsim;': '\u2AC7',
              '&subsub;': '\u2AD5',
              '&subsup;': '\u2AD3',
              '&succ;': '\u227B',
              '&succapprox;': '\u2AB8',
              '&succcurlyeq;': '\u227D',
              '&succeq;': '\u2AB0',
              '&succnapprox;': '\u2ABA',
              '&succneqq;': '\u2AB6',
              '&succnsim;': '\u22E9',
              '&succsim;': '\u227F',
              '&sum;': '\u2211',
              '&sung;': '\u266A',
              '&sup1': '\xB9',
              '&sup1;': '\xB9',
              '&sup2': '\xB2',
              '&sup2;': '\xB2',
              '&sup3': '\xB3',
              '&sup3;': '\xB3',
              '&sup;': '\u2283',
              '&supE;': '\u2AC6',
              '&supdot;': '\u2ABE',
              '&supdsub;': '\u2AD8',
              '&supe;': '\u2287',
              '&supedot;': '\u2AC4',
              '&suphsol;': '\u27C9',
              '&suphsub;': '\u2AD7',
              '&suplarr;': '\u297B',
              '&supmult;': '\u2AC2',
              '&supnE;': '\u2ACC',
              '&supne;': '\u228B',
              '&supplus;': '\u2AC0',
              '&supset;': '\u2283',
              '&supseteq;': '\u2287',
              '&supseteqq;': '\u2AC6',
              '&supsetneq;': '\u228B',
              '&supsetneqq;': '\u2ACC',
              '&supsim;': '\u2AC8',
              '&supsub;': '\u2AD4',
              '&supsup;': '\u2AD6',
              '&swArr;': '\u21D9',
              '&swarhk;': '\u2926',
              '&swarr;': '\u2199',
              '&swarrow;': '\u2199',
              '&swnwar;': '\u292A',
              '&szlig': '\xDF',
              '&szlig;': '\xDF',
              '&target;': '\u2316',
              '&tau;': '\u03C4',
              '&tbrk;': '\u23B4',
              '&tcaron;': '\u0165',
              '&tcedil;': '\u0163',
              '&tcy;': '\u0442',
              '&tdot;': '\u20DB',
              '&telrec;': '\u2315',
              '&tfr;': '\u{1D531}',
              '&there4;': '\u2234',
              '&therefore;': '\u2234',
              '&theta;': '\u03B8',
              '&thetasym;': '\u03D1',
              '&thetav;': '\u03D1',
              '&thickapprox;': '\u2248',
              '&thicksim;': '\u223C',
              '&thinsp;': '\u2009',
              '&thkap;': '\u2248',
              '&thksim;': '\u223C',
              '&thorn': '\xFE',
              '&thorn;': '\xFE',
              '&tilde;': '\u02DC',
              '&times': '\xD7',
              '&times;': '\xD7',
              '&timesb;': '\u22A0',
              '&timesbar;': '\u2A31',
              '&timesd;': '\u2A30',
              '&tint;': '\u222D',
              '&toea;': '\u2928',
              '&top;': '\u22A4',
              '&topbot;': '\u2336',
              '&topcir;': '\u2AF1',
              '&topf;': '\u{1D565}',
              '&topfork;': '\u2ADA',
              '&tosa;': '\u2929',
              '&tprime;': '\u2034',
              '&trade;': '\u2122',
              '&triangle;': '\u25B5',
              '&triangledown;': '\u25BF',
              '&triangleleft;': '\u25C3',
              '&trianglelefteq;': '\u22B4',
              '&triangleq;': '\u225C',
              '&triangleright;': '\u25B9',
              '&trianglerighteq;': '\u22B5',
              '&tridot;': '\u25EC',
              '&trie;': '\u225C',
              '&triminus;': '\u2A3A',
              '&triplus;': '\u2A39',
              '&trisb;': '\u29CD',
              '&tritime;': '\u2A3B',
              '&trpezium;': '\u23E2',
              '&tscr;': '\u{1D4C9}',
              '&tscy;': '\u0446',
              '&tshcy;': '\u045B',
              '&tstrok;': '\u0167',
              '&twixt;': '\u226C',
              '&twoheadleftarrow;': '\u219E',
              '&twoheadrightarrow;': '\u21A0',
              '&uArr;': '\u21D1',
              '&uHar;': '\u2963',
              '&uacute': '\xFA',
              '&uacute;': '\xFA',
              '&uarr;': '\u2191',
              '&ubrcy;': '\u045E',
              '&ubreve;': '\u016D',
              '&ucirc': '\xFB',
              '&ucirc;': '\xFB',
              '&ucy;': '\u0443',
              '&udarr;': '\u21C5',
              '&udblac;': '\u0171',
              '&udhar;': '\u296E',
              '&ufisht;': '\u297E',
              '&ufr;': '\u{1D532}',
              '&ugrave': '\xF9',
              '&ugrave;': '\xF9',
              '&uharl;': '\u21BF',
              '&uharr;': '\u21BE',
              '&uhblk;': '\u2580',
              '&ulcorn;': '\u231C',
              '&ulcorner;': '\u231C',
              '&ulcrop;': '\u230F',
              '&ultri;': '\u25F8',
              '&umacr;': '\u016B',
              '&uml': '\xA8',
              '&uml;': '\xA8',
              '&uogon;': '\u0173',
              '&uopf;': '\u{1D566}',
              '&uparrow;': '\u2191',
              '&updownarrow;': '\u2195',
              '&upharpoonleft;': '\u21BF',
              '&upharpoonright;': '\u21BE',
              '&uplus;': '\u228E',
              '&upsi;': '\u03C5',
              '&upsih;': '\u03D2',
              '&upsilon;': '\u03C5',
              '&upuparrows;': '\u21C8',
              '&urcorn;': '\u231D',
              '&urcorner;': '\u231D',
              '&urcrop;': '\u230E',
              '&uring;': '\u016F',
              '&urtri;': '\u25F9',
              '&uscr;': '\u{1D4CA}',
              '&utdot;': '\u22F0',
              '&utilde;': '\u0169',
              '&utri;': '\u25B5',
              '&utrif;': '\u25B4',
              '&uuarr;': '\u21C8',
              '&uuml': '\xFC',
              '&uuml;': '\xFC',
              '&uwangle;': '\u29A7',
              '&vArr;': '\u21D5',
              '&vBar;': '\u2AE8',
              '&vBarv;': '\u2AE9',
              '&vDash;': '\u22A8',
              '&vangrt;': '\u299C',
              '&varepsilon;': '\u03F5',
              '&varkappa;': '\u03F0',
              '&varnothing;': '\u2205',
              '&varphi;': '\u03D5',
              '&varpi;': '\u03D6',
              '&varpropto;': '\u221D',
              '&varr;': '\u2195',
              '&varrho;': '\u03F1',
              '&varsigma;': '\u03C2',
              '&varsubsetneq;': '\u228A\uFE00',
              '&varsubsetneqq;': '\u2ACB\uFE00',
              '&varsupsetneq;': '\u228B\uFE00',
              '&varsupsetneqq;': '\u2ACC\uFE00',
              '&vartheta;': '\u03D1',
              '&vartriangleleft;': '\u22B2',
              '&vartriangleright;': '\u22B3',
              '&vcy;': '\u0432',
              '&vdash;': '\u22A2',
              '&vee;': '\u2228',
              '&veebar;': '\u22BB',
              '&veeeq;': '\u225A',
              '&vellip;': '\u22EE',
              '&verbar;': '|',
              '&vert;': '|',
              '&vfr;': '\u{1D533}',
              '&vltri;': '\u22B2',
              '&vnsub;': '\u2282\u20D2',
              '&vnsup;': '\u2283\u20D2',
              '&vopf;': '\u{1D567}',
              '&vprop;': '\u221D',
              '&vrtri;': '\u22B3',
              '&vscr;': '\u{1D4CB}',
              '&vsubnE;': '\u2ACB\uFE00',
              '&vsubne;': '\u228A\uFE00',
              '&vsupnE;': '\u2ACC\uFE00',
              '&vsupne;': '\u228B\uFE00',
              '&vzigzag;': '\u299A',
              '&wcirc;': '\u0175',
              '&wedbar;': '\u2A5F',
              '&wedge;': '\u2227',
              '&wedgeq;': '\u2259',
              '&weierp;': '\u2118',
              '&wfr;': '\u{1D534}',
              '&wopf;': '\u{1D568}',
              '&wp;': '\u2118',
              '&wr;': '\u2240',
              '&wreath;': '\u2240',
              '&wscr;': '\u{1D4CC}',
              '&xcap;': '\u22C2',
              '&xcirc;': '\u25EF',
              '&xcup;': '\u22C3',
              '&xdtri;': '\u25BD',
              '&xfr;': '\u{1D535}',
              '&xhArr;': '\u27FA',
              '&xharr;': '\u27F7',
              '&xi;': '\u03BE',
              '&xlArr;': '\u27F8',
              '&xlarr;': '\u27F5',
              '&xmap;': '\u27FC',
              '&xnis;': '\u22FB',
              '&xodot;': '\u2A00',
              '&xopf;': '\u{1D569}',
              '&xoplus;': '\u2A01',
              '&xotime;': '\u2A02',
              '&xrArr;': '\u27F9',
              '&xrarr;': '\u27F6',
              '&xscr;': '\u{1D4CD}',
              '&xsqcup;': '\u2A06',
              '&xuplus;': '\u2A04',
              '&xutri;': '\u25B3',
              '&xvee;': '\u22C1',
              '&xwedge;': '\u22C0',
              '&yacute': '\xFD',
              '&yacute;': '\xFD',
              '&yacy;': '\u044F',
              '&ycirc;': '\u0177',
              '&ycy;': '\u044B',
              '&yen': '\xA5',
              '&yen;': '\xA5',
              '&yfr;': '\u{1D536}',
              '&yicy;': '\u0457',
              '&yopf;': '\u{1D56A}',
              '&yscr;': '\u{1D4CE}',
              '&yucy;': '\u044E',
              '&yuml': '\xFF',
              '&yuml;': '\xFF',
              '&zacute;': '\u017A',
              '&zcaron;': '\u017E',
              '&zcy;': '\u0437',
              '&zdot;': '\u017C',
              '&zeetrf;': '\u2128',
              '&zeta;': '\u03B6',
              '&zfr;': '\u{1D537}',
              '&zhcy;': '\u0436',
              '&zigrarr;': '\u21DD',
              '&zopf;': '\u{1D56B}',
              '&zscr;': '\u{1D4CF}',
              '&zwj;': '\u200D',
              '&zwnj;': '\u200C',
            },
            characters: {
              Æ: '&AElig;',
              '&': '&amp;',
              Á: '&Aacute;',
              Ă: '&Abreve;',
              Â: '&Acirc;',
              А: '&Acy;',
              '\u{1D504}': '&Afr;',
              À: '&Agrave;',
              Α: '&Alpha;',
              Ā: '&Amacr;',
              '\u2A53': '&And;',
              Ą: '&Aogon;',
              '\u{1D538}': '&Aopf;',
              '\u2061': '&af;',
              Å: '&angst;',
              '\u{1D49C}': '&Ascr;',
              '\u2254': '&coloneq;',
              Ã: '&Atilde;',
              Ä: '&Auml;',
              '\u2216': '&ssetmn;',
              '\u2AE7': '&Barv;',
              '\u2306': '&doublebarwedge;',
              Б: '&Bcy;',
              '\u2235': '&because;',
              ℬ: '&bernou;',
              Β: '&Beta;',
              '\u{1D505}': '&Bfr;',
              '\u{1D539}': '&Bopf;',
              '\u02D8': '&breve;',
              '\u224E': '&bump;',
              Ч: '&CHcy;',
              '\xA9': '&copy;',
              Ć: '&Cacute;',
              '\u22D2': '&Cap;',
              '\u2145': '&DD;',
              ℭ: '&Cfr;',
              Č: '&Ccaron;',
              Ç: '&Ccedil;',
              Ĉ: '&Ccirc;',
              '\u2230': '&Cconint;',
              Ċ: '&Cdot;',
              '\xB8': '&cedil;',
              '\xB7': '&middot;',
              Χ: '&Chi;',
              '\u2299': '&odot;',
              '\u2296': '&ominus;',
              '\u2295': '&oplus;',
              '\u2297': '&otimes;',
              '\u2232': '&cwconint;',
              '\u201D': '&rdquor;',
              '\u2019': '&rsquor;',
              '\u2237': '&Proportion;',
              '\u2A74': '&Colone;',
              '\u2261': '&equiv;',
              '\u222F': '&DoubleContourIntegral;',
              '\u222E': '&oint;',
              ℂ: '&complexes;',
              '\u2210': '&coprod;',
              '\u2233': '&awconint;',
              '\u2A2F': '&Cross;',
              '\u{1D49E}': '&Cscr;',
              '\u22D3': '&Cup;',
              '\u224D': '&asympeq;',
              '\u2911': '&DDotrahd;',
              Ђ: '&DJcy;',
              Ѕ: '&DScy;',
              Џ: '&DZcy;',
              '\u2021': '&ddagger;',
              '\u21A1': '&Darr;',
              '\u2AE4': '&DoubleLeftTee;',
              Ď: '&Dcaron;',
              Д: '&Dcy;',
              '\u2207': '&nabla;',
              Δ: '&Delta;',
              '\u{1D507}': '&Dfr;',
              '\xB4': '&acute;',
              '\u02D9': '&dot;',
              '\u02DD': '&dblac;',
              '`': '&grave;',
              '\u02DC': '&tilde;',
              '\u22C4': '&diamond;',
              '\u2146': '&dd;',
              '\u{1D53B}': '&Dopf;',
              '\xA8': '&uml;',
              '\u20DC': '&DotDot;',
              '\u2250': '&esdot;',
              '\u21D3': '&dArr;',
              '\u21D0': '&lArr;',
              '\u21D4': '&iff;',
              '\u27F8': '&xlArr;',
              '\u27FA': '&xhArr;',
              '\u27F9': '&xrArr;',
              '\u21D2': '&rArr;',
              '\u22A8': '&vDash;',
              '\u21D1': '&uArr;',
              '\u21D5': '&vArr;',
              '\u2225': '&spar;',
              '\u2193': '&downarrow;',
              '\u2913': '&DownArrowBar;',
              '\u21F5': '&duarr;',
              '\u0311': '&DownBreve;',
              '\u2950': '&DownLeftRightVector;',
              '\u295E': '&DownLeftTeeVector;',
              '\u21BD': '&lhard;',
              '\u2956': '&DownLeftVectorBar;',
              '\u295F': '&DownRightTeeVector;',
              '\u21C1': '&rightharpoondown;',
              '\u2957': '&DownRightVectorBar;',
              '\u22A4': '&top;',
              '\u21A7': '&mapstodown;',
              '\u{1D49F}': '&Dscr;',
              Đ: '&Dstrok;',
              Ŋ: '&ENG;',
              Ð: '&ETH;',
              É: '&Eacute;',
              Ě: '&Ecaron;',
              Ê: '&Ecirc;',
              Э: '&Ecy;',
              Ė: '&Edot;',
              '\u{1D508}': '&Efr;',
              È: '&Egrave;',
              '\u2208': '&isinv;',
              Ē: '&Emacr;',
              '\u25FB': '&EmptySmallSquare;',
              '\u25AB': '&EmptyVerySmallSquare;',
              Ę: '&Eogon;',
              '\u{1D53C}': '&Eopf;',
              Ε: '&Epsilon;',
              '\u2A75': '&Equal;',
              '\u2242': '&esim;',
              '\u21CC': '&rlhar;',
              ℰ: '&expectation;',
              '\u2A73': '&Esim;',
              Η: '&Eta;',
              Ë: '&Euml;',
              '\u2203': '&exist;',
              '\u2147': '&exponentiale;',
              Ф: '&Fcy;',
              '\u{1D509}': '&Ffr;',
              '\u25FC': '&FilledSmallSquare;',
              '\u25AA': '&squf;',
              '\u{1D53D}': '&Fopf;',
              '\u2200': '&forall;',
              ℱ: '&Fscr;',
              Ѓ: '&GJcy;',
              '>': '&gt;',
              Γ: '&Gamma;',
              Ϝ: '&Gammad;',
              Ğ: '&Gbreve;',
              Ģ: '&Gcedil;',
              Ĝ: '&Gcirc;',
              Г: '&Gcy;',
              Ġ: '&Gdot;',
              '\u{1D50A}': '&Gfr;',
              '\u22D9': '&ggg;',
              '\u{1D53E}': '&Gopf;',
              '\u2265': '&geq;',
              '\u22DB': '&gtreqless;',
              '\u2267': '&geqq;',
              '\u2AA2': '&GreaterGreater;',
              '\u2277': '&gtrless;',
              '\u2A7E': '&ges;',
              '\u2273': '&gtrsim;',
              '\u{1D4A2}': '&Gscr;',
              '\u226B': '&gg;',
              Ъ: '&HARDcy;',
              '\u02C7': '&caron;',
              '^': '&Hat;',
              Ĥ: '&Hcirc;',
              ℌ: '&Poincareplane;',
              ℋ: '&hamilt;',
              ℍ: '&quaternions;',
              '\u2500': '&boxh;',
              Ħ: '&Hstrok;',
              '\u224F': '&bumpeq;',
              Е: '&IEcy;',
              Ĳ: '&IJlig;',
              Ё: '&IOcy;',
              Í: '&Iacute;',
              Î: '&Icirc;',
              И: '&Icy;',
              İ: '&Idot;',
              ℑ: '&imagpart;',
              Ì: '&Igrave;',
              Ī: '&Imacr;',
              '\u2148': '&ii;',
              '\u222C': '&Int;',
              '\u222B': '&int;',
              '\u22C2': '&xcap;',
              '\u2063': '&ic;',
              '\u2062': '&it;',
              Į: '&Iogon;',
              '\u{1D540}': '&Iopf;',
              Ι: '&Iota;',
              ℐ: '&imagline;',
              Ĩ: '&Itilde;',
              І: '&Iukcy;',
              Ï: '&Iuml;',
              Ĵ: '&Jcirc;',
              Й: '&Jcy;',
              '\u{1D50D}': '&Jfr;',
              '\u{1D541}': '&Jopf;',
              '\u{1D4A5}': '&Jscr;',
              Ј: '&Jsercy;',
              Є: '&Jukcy;',
              Х: '&KHcy;',
              Ќ: '&KJcy;',
              Κ: '&Kappa;',
              Ķ: '&Kcedil;',
              К: '&Kcy;',
              '\u{1D50E}': '&Kfr;',
              '\u{1D542}': '&Kopf;',
              '\u{1D4A6}': '&Kscr;',
              Љ: '&LJcy;',
              '<': '&lt;',
              Ĺ: '&Lacute;',
              Λ: '&Lambda;',
              '\u27EA': '&Lang;',
              ℒ: '&lagran;',
              '\u219E': '&twoheadleftarrow;',
              Ľ: '&Lcaron;',
              Ļ: '&Lcedil;',
              Л: '&Lcy;',
              '\u27E8': '&langle;',
              '\u2190': '&slarr;',
              '\u21E4': '&larrb;',
              '\u21C6': '&lrarr;',
              '\u2308': '&lceil;',
              '\u27E6': '&lobrk;',
              '\u2961': '&LeftDownTeeVector;',
              '\u21C3': '&downharpoonleft;',
              '\u2959': '&LeftDownVectorBar;',
              '\u230A': '&lfloor;',
              '\u2194': '&leftrightarrow;',
              '\u294E': '&LeftRightVector;',
              '\u22A3': '&dashv;',
              '\u21A4': '&mapstoleft;',
              '\u295A': '&LeftTeeVector;',
              '\u22B2': '&vltri;',
              '\u29CF': '&LeftTriangleBar;',
              '\u22B4': '&trianglelefteq;',
              '\u2951': '&LeftUpDownVector;',
              '\u2960': '&LeftUpTeeVector;',
              '\u21BF': '&upharpoonleft;',
              '\u2958': '&LeftUpVectorBar;',
              '\u21BC': '&lharu;',
              '\u2952': '&LeftVectorBar;',
              '\u22DA': '&lesseqgtr;',
              '\u2266': '&leqq;',
              '\u2276': '&lg;',
              '\u2AA1': '&LessLess;',
              '\u2A7D': '&les;',
              '\u2272': '&lsim;',
              '\u{1D50F}': '&Lfr;',
              '\u22D8': '&Ll;',
              '\u21DA': '&lAarr;',
              Ŀ: '&Lmidot;',
              '\u27F5': '&xlarr;',
              '\u27F7': '&xharr;',
              '\u27F6': '&xrarr;',
              '\u{1D543}': '&Lopf;',
              '\u2199': '&swarrow;',
              '\u2198': '&searrow;',
              '\u21B0': '&lsh;',
              Ł: '&Lstrok;',
              '\u226A': '&ll;',
              '\u2905': '&Map;',
              М: '&Mcy;',
              '\u205F': '&MediumSpace;',
              ℳ: '&phmmat;',
              '\u{1D510}': '&Mfr;',
              '\u2213': '&mp;',
              '\u{1D544}': '&Mopf;',
              Μ: '&Mu;',
              Њ: '&NJcy;',
              Ń: '&Nacute;',
              Ň: '&Ncaron;',
              Ņ: '&Ncedil;',
              Н: '&Ncy;',
              '\u200B': '&ZeroWidthSpace;',
              '\n': '&NewLine;',
              '\u{1D511}': '&Nfr;',
              '\u2060': '&NoBreak;',
              '\xA0': '&nbsp;',
              ℕ: '&naturals;',
              '\u2AEC': '&Not;',
              '\u2262': '&nequiv;',
              '\u226D': '&NotCupCap;',
              '\u2226': '&nspar;',
              '\u2209': '&notinva;',
              '\u2260': '&ne;',
              '\u2242\u0338': '&nesim;',
              '\u2204': '&nexists;',
              '\u226F': '&ngtr;',
              '\u2271': '&ngeq;',
              '\u2267\u0338': '&ngeqq;',
              '\u226B\u0338': '&nGtv;',
              '\u2279': '&ntgl;',
              '\u2A7E\u0338': '&nges;',
              '\u2275': '&ngsim;',
              '\u224E\u0338': '&nbump;',
              '\u224F\u0338': '&nbumpe;',
              '\u22EA': '&ntriangleleft;',
              '\u29CF\u0338': '&NotLeftTriangleBar;',
              '\u22EC': '&ntrianglelefteq;',
              '\u226E': '&nlt;',
              '\u2270': '&nleq;',
              '\u2278': '&ntlg;',
              '\u226A\u0338': '&nLtv;',
              '\u2A7D\u0338': '&nles;',
              '\u2274': '&nlsim;',
              '\u2AA2\u0338': '&NotNestedGreaterGreater;',
              '\u2AA1\u0338': '&NotNestedLessLess;',
              '\u2280': '&nprec;',
              '\u2AAF\u0338': '&npreceq;',
              '\u22E0': '&nprcue;',
              '\u220C': '&notniva;',
              '\u22EB': '&ntriangleright;',
              '\u29D0\u0338': '&NotRightTriangleBar;',
              '\u22ED': '&ntrianglerighteq;',
              '\u228F\u0338': '&NotSquareSubset;',
              '\u22E2': '&nsqsube;',
              '\u2290\u0338': '&NotSquareSuperset;',
              '\u22E3': '&nsqsupe;',
              '\u2282\u20D2': '&vnsub;',
              '\u2288': '&nsubseteq;',
              '\u2281': '&nsucc;',
              '\u2AB0\u0338': '&nsucceq;',
              '\u22E1': '&nsccue;',
              '\u227F\u0338': '&NotSucceedsTilde;',
              '\u2283\u20D2': '&vnsup;',
              '\u2289': '&nsupseteq;',
              '\u2241': '&nsim;',
              '\u2244': '&nsimeq;',
              '\u2247': '&ncong;',
              '\u2249': '&napprox;',
              '\u2224': '&nsmid;',
              '\u{1D4A9}': '&Nscr;',
              Ñ: '&Ntilde;',
              Ν: '&Nu;',
              Œ: '&OElig;',
              Ó: '&Oacute;',
              Ô: '&Ocirc;',
              О: '&Ocy;',
              Ő: '&Odblac;',
              '\u{1D512}': '&Ofr;',
              Ò: '&Ograve;',
              Ō: '&Omacr;',
              Ω: '&ohm;',
              Ο: '&Omicron;',
              '\u{1D546}': '&Oopf;',
              '\u201C': '&ldquo;',
              '\u2018': '&lsquo;',
              '\u2A54': '&Or;',
              '\u{1D4AA}': '&Oscr;',
              Ø: '&Oslash;',
              Õ: '&Otilde;',
              '\u2A37': '&Otimes;',
              Ö: '&Ouml;',
              '\u203E': '&oline;',
              '\u23DE': '&OverBrace;',
              '\u23B4': '&tbrk;',
              '\u23DC': '&OverParenthesis;',
              '\u2202': '&part;',
              П: '&Pcy;',
              '\u{1D513}': '&Pfr;',
              Φ: '&Phi;',
              Π: '&Pi;',
              '\xB1': '&pm;',
              ℙ: '&primes;',
              '\u2ABB': '&Pr;',
              '\u227A': '&prec;',
              '\u2AAF': '&preceq;',
              '\u227C': '&preccurlyeq;',
              '\u227E': '&prsim;',
              '\u2033': '&Prime;',
              '\u220F': '&prod;',
              '\u221D': '&vprop;',
              '\u{1D4AB}': '&Pscr;',
              Ψ: '&Psi;',
              '"': '&quot;',
              '\u{1D514}': '&Qfr;',
              ℚ: '&rationals;',
              '\u{1D4AC}': '&Qscr;',
              '\u2910': '&drbkarow;',
              '\xAE': '&reg;',
              Ŕ: '&Racute;',
              '\u27EB': '&Rang;',
              '\u21A0': '&twoheadrightarrow;',
              '\u2916': '&Rarrtl;',
              Ř: '&Rcaron;',
              Ŗ: '&Rcedil;',
              Р: '&Rcy;',
              ℜ: '&realpart;',
              '\u220B': '&niv;',
              '\u21CB': '&lrhar;',
              '\u296F': '&duhar;',
              Ρ: '&Rho;',
              '\u27E9': '&rangle;',
              '\u2192': '&srarr;',
              '\u21E5': '&rarrb;',
              '\u21C4': '&rlarr;',
              '\u2309': '&rceil;',
              '\u27E7': '&robrk;',
              '\u295D': '&RightDownTeeVector;',
              '\u21C2': '&downharpoonright;',
              '\u2955': '&RightDownVectorBar;',
              '\u230B': '&rfloor;',
              '\u22A2': '&vdash;',
              '\u21A6': '&mapsto;',
              '\u295B': '&RightTeeVector;',
              '\u22B3': '&vrtri;',
              '\u29D0': '&RightTriangleBar;',
              '\u22B5': '&trianglerighteq;',
              '\u294F': '&RightUpDownVector;',
              '\u295C': '&RightUpTeeVector;',
              '\u21BE': '&upharpoonright;',
              '\u2954': '&RightUpVectorBar;',
              '\u21C0': '&rightharpoonup;',
              '\u2953': '&RightVectorBar;',
              ℝ: '&reals;',
              '\u2970': '&RoundImplies;',
              '\u21DB': '&rAarr;',
              ℛ: '&realine;',
              '\u21B1': '&rsh;',
              '\u29F4': '&RuleDelayed;',
              Щ: '&SHCHcy;',
              Ш: '&SHcy;',
              Ь: '&SOFTcy;',
              Ś: '&Sacute;',
              '\u2ABC': '&Sc;',
              Š: '&Scaron;',
              Ş: '&Scedil;',
              Ŝ: '&Scirc;',
              С: '&Scy;',
              '\u{1D516}': '&Sfr;',
              '\u2191': '&uparrow;',
              Σ: '&Sigma;',
              '\u2218': '&compfn;',
              '\u{1D54A}': '&Sopf;',
              '\u221A': '&radic;',
              '\u25A1': '&square;',
              '\u2293': '&sqcap;',
              '\u228F': '&sqsubset;',
              '\u2291': '&sqsubseteq;',
              '\u2290': '&sqsupset;',
              '\u2292': '&sqsupseteq;',
              '\u2294': '&sqcup;',
              '\u{1D4AE}': '&Sscr;',
              '\u22C6': '&sstarf;',
              '\u22D0': '&Subset;',
              '\u2286': '&subseteq;',
              '\u227B': '&succ;',
              '\u2AB0': '&succeq;',
              '\u227D': '&succcurlyeq;',
              '\u227F': '&succsim;',
              '\u2211': '&sum;',
              '\u22D1': '&Supset;',
              '\u2283': '&supset;',
              '\u2287': '&supseteq;',
              Þ: '&THORN;',
              '\u2122': '&trade;',
              Ћ: '&TSHcy;',
              Ц: '&TScy;',
              '	': '&Tab;',
              Τ: '&Tau;',
              Ť: '&Tcaron;',
              Ţ: '&Tcedil;',
              Т: '&Tcy;',
              '\u{1D517}': '&Tfr;',
              '\u2234': '&therefore;',
              Θ: '&Theta;',
              '\u205F\u200A': '&ThickSpace;',
              '\u2009': '&thinsp;',
              '\u223C': '&thksim;',
              '\u2243': '&simeq;',
              '\u2245': '&cong;',
              '\u2248': '&thkap;',
              '\u{1D54B}': '&Topf;',
              '\u20DB': '&tdot;',
              '\u{1D4AF}': '&Tscr;',
              Ŧ: '&Tstrok;',
              Ú: '&Uacute;',
              '\u219F': '&Uarr;',
              '\u2949': '&Uarrocir;',
              Ў: '&Ubrcy;',
              Ŭ: '&Ubreve;',
              Û: '&Ucirc;',
              У: '&Ucy;',
              Ű: '&Udblac;',
              '\u{1D518}': '&Ufr;',
              Ù: '&Ugrave;',
              Ū: '&Umacr;',
              _: '&lowbar;',
              '\u23DF': '&UnderBrace;',
              '\u23B5': '&bbrk;',
              '\u23DD': '&UnderParenthesis;',
              '\u22C3': '&xcup;',
              '\u228E': '&uplus;',
              Ų: '&Uogon;',
              '\u{1D54C}': '&Uopf;',
              '\u2912': '&UpArrowBar;',
              '\u21C5': '&udarr;',
              '\u2195': '&varr;',
              '\u296E': '&udhar;',
              '\u22A5': '&perp;',
              '\u21A5': '&mapstoup;',
              '\u2196': '&nwarrow;',
              '\u2197': '&nearrow;',
              ϒ: '&upsih;',
              Υ: '&Upsilon;',
              Ů: '&Uring;',
              '\u{1D4B0}': '&Uscr;',
              Ũ: '&Utilde;',
              Ü: '&Uuml;',
              '\u22AB': '&VDash;',
              '\u2AEB': '&Vbar;',
              В: '&Vcy;',
              '\u22A9': '&Vdash;',
              '\u2AE6': '&Vdashl;',
              '\u22C1': '&xvee;',
              '\u2016': '&Vert;',
              '\u2223': '&smid;',
              '|': '&vert;',
              '\u2758': '&VerticalSeparator;',
              '\u2240': '&wreath;',
              '\u200A': '&hairsp;',
              '\u{1D519}': '&Vfr;',
              '\u{1D54D}': '&Vopf;',
              '\u{1D4B1}': '&Vscr;',
              '\u22AA': '&Vvdash;',
              Ŵ: '&Wcirc;',
              '\u22C0': '&xwedge;',
              '\u{1D51A}': '&Wfr;',
              '\u{1D54E}': '&Wopf;',
              '\u{1D4B2}': '&Wscr;',
              '\u{1D51B}': '&Xfr;',
              Ξ: '&Xi;',
              '\u{1D54F}': '&Xopf;',
              '\u{1D4B3}': '&Xscr;',
              Я: '&YAcy;',
              Ї: '&YIcy;',
              Ю: '&YUcy;',
              Ý: '&Yacute;',
              Ŷ: '&Ycirc;',
              Ы: '&Ycy;',
              '\u{1D51C}': '&Yfr;',
              '\u{1D550}': '&Yopf;',
              '\u{1D4B4}': '&Yscr;',
              Ÿ: '&Yuml;',
              Ж: '&ZHcy;',
              Ź: '&Zacute;',
              Ž: '&Zcaron;',
              З: '&Zcy;',
              Ż: '&Zdot;',
              Ζ: '&Zeta;',
              ℨ: '&zeetrf;',
              ℤ: '&integers;',
              '\u{1D4B5}': '&Zscr;',
              á: '&aacute;',
              ă: '&abreve;',
              '\u223E': '&mstpos;',
              '\u223E\u0333': '&acE;',
              '\u223F': '&acd;',
              â: '&acirc;',
              а: '&acy;',
              æ: '&aelig;',
              '\u{1D51E}': '&afr;',
              à: '&agrave;',
              ℵ: '&aleph;',
              α: '&alpha;',
              ā: '&amacr;',
              '\u2A3F': '&amalg;',
              '\u2227': '&wedge;',
              '\u2A55': '&andand;',
              '\u2A5C': '&andd;',
              '\u2A58': '&andslope;',
              '\u2A5A': '&andv;',
              '\u2220': '&angle;',
              '\u29A4': '&ange;',
              '\u2221': '&measuredangle;',
              '\u29A8': '&angmsdaa;',
              '\u29A9': '&angmsdab;',
              '\u29AA': '&angmsdac;',
              '\u29AB': '&angmsdad;',
              '\u29AC': '&angmsdae;',
              '\u29AD': '&angmsdaf;',
              '\u29AE': '&angmsdag;',
              '\u29AF': '&angmsdah;',
              '\u221F': '&angrt;',
              '\u22BE': '&angrtvb;',
              '\u299D': '&angrtvbd;',
              '\u2222': '&angsph;',
              '\u237C': '&angzarr;',
              ą: '&aogon;',
              '\u{1D552}': '&aopf;',
              '\u2A70': '&apE;',
              '\u2A6F': '&apacir;',
              '\u224A': '&approxeq;',
              '\u224B': '&apid;',
              "'": '&apos;',
              å: '&aring;',
              '\u{1D4B6}': '&ascr;',
              '*': '&midast;',
              ã: '&atilde;',
              ä: '&auml;',
              '\u2A11': '&awint;',
              '\u2AED': '&bNot;',
              '\u224C': '&bcong;',
              '\u03F6': '&bepsi;',
              '\u2035': '&bprime;',
              '\u223D': '&bsim;',
              '\u22CD': '&bsime;',
              '\u22BD': '&barvee;',
              '\u2305': '&barwedge;',
              '\u23B6': '&bbrktbrk;',
              б: '&bcy;',
              '\u201E': '&ldquor;',
              '\u29B0': '&bemptyv;',
              β: '&beta;',
              ℶ: '&beth;',
              '\u226C': '&twixt;',
              '\u{1D51F}': '&bfr;',
              '\u25EF': '&xcirc;',
              '\u2A00': '&xodot;',
              '\u2A01': '&xoplus;',
              '\u2A02': '&xotime;',
              '\u2A06': '&xsqcup;',
              '\u2605': '&starf;',
              '\u25BD': '&xdtri;',
              '\u25B3': '&xutri;',
              '\u2A04': '&xuplus;',
              '\u290D': '&rbarr;',
              '\u29EB': '&lozf;',
              '\u25B4': '&utrif;',
              '\u25BE': '&dtrif;',
              '\u25C2': '&ltrif;',
              '\u25B8': '&rtrif;',
              '\u2423': '&blank;',
              '\u2592': '&blk12;',
              '\u2591': '&blk14;',
              '\u2593': '&blk34;',
              '\u2588': '&block;',
              '=\u20E5': '&bne;',
              '\u2261\u20E5': '&bnequiv;',
              '\u2310': '&bnot;',
              '\u{1D553}': '&bopf;',
              '\u22C8': '&bowtie;',
              '\u2557': '&boxDL;',
              '\u2554': '&boxDR;',
              '\u2556': '&boxDl;',
              '\u2553': '&boxDr;',
              '\u2550': '&boxH;',
              '\u2566': '&boxHD;',
              '\u2569': '&boxHU;',
              '\u2564': '&boxHd;',
              '\u2567': '&boxHu;',
              '\u255D': '&boxUL;',
              '\u255A': '&boxUR;',
              '\u255C': '&boxUl;',
              '\u2559': '&boxUr;',
              '\u2551': '&boxV;',
              '\u256C': '&boxVH;',
              '\u2563': '&boxVL;',
              '\u2560': '&boxVR;',
              '\u256B': '&boxVh;',
              '\u2562': '&boxVl;',
              '\u255F': '&boxVr;',
              '\u29C9': '&boxbox;',
              '\u2555': '&boxdL;',
              '\u2552': '&boxdR;',
              '\u2510': '&boxdl;',
              '\u250C': '&boxdr;',
              '\u2565': '&boxhD;',
              '\u2568': '&boxhU;',
              '\u252C': '&boxhd;',
              '\u2534': '&boxhu;',
              '\u229F': '&minusb;',
              '\u229E': '&plusb;',
              '\u22A0': '&timesb;',
              '\u255B': '&boxuL;',
              '\u2558': '&boxuR;',
              '\u2518': '&boxul;',
              '\u2514': '&boxur;',
              '\u2502': '&boxv;',
              '\u256A': '&boxvH;',
              '\u2561': '&boxvL;',
              '\u255E': '&boxvR;',
              '\u253C': '&boxvh;',
              '\u2524': '&boxvl;',
              '\u251C': '&boxvr;',
              '\xA6': '&brvbar;',
              '\u{1D4B7}': '&bscr;',
              '\u204F': '&bsemi;',
              '\\': '&bsol;',
              '\u29C5': '&bsolb;',
              '\u27C8': '&bsolhsub;',
              '\u2022': '&bullet;',
              '\u2AAE': '&bumpE;',
              ć: '&cacute;',
              '\u2229': '&cap;',
              '\u2A44': '&capand;',
              '\u2A49': '&capbrcup;',
              '\u2A4B': '&capcap;',
              '\u2A47': '&capcup;',
              '\u2A40': '&capdot;',
              '\u2229\uFE00': '&caps;',
              '\u2041': '&caret;',
              '\u2A4D': '&ccaps;',
              č: '&ccaron;',
              ç: '&ccedil;',
              ĉ: '&ccirc;',
              '\u2A4C': '&ccups;',
              '\u2A50': '&ccupssm;',
              ċ: '&cdot;',
              '\u29B2': '&cemptyv;',
              '\xA2': '&cent;',
              '\u{1D520}': '&cfr;',
              ч: '&chcy;',
              '\u2713': '&checkmark;',
              χ: '&chi;',
              '\u25CB': '&cir;',
              '\u29C3': '&cirE;',
              '\u02C6': '&circ;',
              '\u2257': '&cire;',
              '\u21BA': '&olarr;',
              '\u21BB': '&orarr;',
              '\u24C8': '&oS;',
              '\u229B': '&oast;',
              '\u229A': '&ocir;',
              '\u229D': '&odash;',
              '\u2A10': '&cirfnint;',
              '\u2AEF': '&cirmid;',
              '\u29C2': '&cirscir;',
              '\u2663': '&clubsuit;',
              ':': '&colon;',
              ',': '&comma;',
              '@': '&commat;',
              '\u2201': '&complement;',
              '\u2A6D': '&congdot;',
              '\u{1D554}': '&copf;',
              '\u2117': '&copysr;',
              '\u21B5': '&crarr;',
              '\u2717': '&cross;',
              '\u{1D4B8}': '&cscr;',
              '\u2ACF': '&csub;',
              '\u2AD1': '&csube;',
              '\u2AD0': '&csup;',
              '\u2AD2': '&csupe;',
              '\u22EF': '&ctdot;',
              '\u2938': '&cudarrl;',
              '\u2935': '&cudarrr;',
              '\u22DE': '&curlyeqprec;',
              '\u22DF': '&curlyeqsucc;',
              '\u21B6': '&curvearrowleft;',
              '\u293D': '&cularrp;',
              '\u222A': '&cup;',
              '\u2A48': '&cupbrcap;',
              '\u2A46': '&cupcap;',
              '\u2A4A': '&cupcup;',
              '\u228D': '&cupdot;',
              '\u2A45': '&cupor;',
              '\u222A\uFE00': '&cups;',
              '\u21B7': '&curvearrowright;',
              '\u293C': '&curarrm;',
              '\u22CE': '&cuvee;',
              '\u22CF': '&cuwed;',
              '\xA4': '&curren;',
              '\u2231': '&cwint;',
              '\u232D': '&cylcty;',
              '\u2965': '&dHar;',
              '\u2020': '&dagger;',
              ℸ: '&daleth;',
              '\u2010': '&hyphen;',
              '\u290F': '&rBarr;',
              ď: '&dcaron;',
              д: '&dcy;',
              '\u21CA': '&downdownarrows;',
              '\u2A77': '&eDDot;',
              '\xB0': '&deg;',
              δ: '&delta;',
              '\u29B1': '&demptyv;',
              '\u297F': '&dfisht;',
              '\u{1D521}': '&dfr;',
              '\u2666': '&diams;',
              ϝ: '&gammad;',
              '\u22F2': '&disin;',
              '\xF7': '&divide;',
              '\u22C7': '&divonx;',
              ђ: '&djcy;',
              '\u231E': '&llcorner;',
              '\u230D': '&dlcrop;',
              $: '&dollar;',
              '\u{1D555}': '&dopf;',
              '\u2251': '&eDot;',
              '\u2238': '&minusd;',
              '\u2214': '&plusdo;',
              '\u22A1': '&sdotb;',
              '\u231F': '&lrcorner;',
              '\u230C': '&drcrop;',
              '\u{1D4B9}': '&dscr;',
              ѕ: '&dscy;',
              '\u29F6': '&dsol;',
              đ: '&dstrok;',
              '\u22F1': '&dtdot;',
              '\u25BF': '&triangledown;',
              '\u29A6': '&dwangle;',
              џ: '&dzcy;',
              '\u27FF': '&dzigrarr;',
              é: '&eacute;',
              '\u2A6E': '&easter;',
              ě: '&ecaron;',
              '\u2256': '&eqcirc;',
              ê: '&ecirc;',
              '\u2255': '&eqcolon;',
              э: '&ecy;',
              ė: '&edot;',
              '\u2252': '&fallingdotseq;',
              '\u{1D522}': '&efr;',
              '\u2A9A': '&eg;',
              è: '&egrave;',
              '\u2A96': '&eqslantgtr;',
              '\u2A98': '&egsdot;',
              '\u2A99': '&el;',
              '\u23E7': '&elinters;',
              ℓ: '&ell;',
              '\u2A95': '&eqslantless;',
              '\u2A97': '&elsdot;',
              ē: '&emacr;',
              '\u2205': '&varnothing;',
              '\u2004': '&emsp13;',
              '\u2005': '&emsp14;',
              '\u2003': '&emsp;',
              ŋ: '&eng;',
              '\u2002': '&ensp;',
              ę: '&eogon;',
              '\u{1D556}': '&eopf;',
              '\u22D5': '&epar;',
              '\u29E3': '&eparsl;',
              '\u2A71': '&eplus;',
              ε: '&epsilon;',
              '\u03F5': '&varepsilon;',
              '=': '&equals;',
              '\u225F': '&questeq;',
              '\u2A78': '&equivDD;',
              '\u29E5': '&eqvparsl;',
              '\u2253': '&risingdotseq;',
              '\u2971': '&erarr;',
              ℯ: '&escr;',
              η: '&eta;',
              ð: '&eth;',
              ë: '&euml;',
              '\u20AC': '&euro;',
              '!': '&excl;',
              ф: '&fcy;',
              '\u2640': '&female;',
              ﬃ: '&ffilig;',
              ﬀ: '&fflig;',
              ﬄ: '&ffllig;',
              '\u{1D523}': '&ffr;',
              ﬁ: '&filig;',
              fj: '&fjlig;',
              '\u266D': '&flat;',
              ﬂ: '&fllig;',
              '\u25B1': '&fltns;',
              ƒ: '&fnof;',
              '\u{1D557}': '&fopf;',
              '\u22D4': '&pitchfork;',
              '\u2AD9': '&forkv;',
              '\u2A0D': '&fpartint;',
              '\xBD': '&half;',
              '\u2153': '&frac13;',
              '\xBC': '&frac14;',
              '\u2155': '&frac15;',
              '\u2159': '&frac16;',
              '\u215B': '&frac18;',
              '\u2154': '&frac23;',
              '\u2156': '&frac25;',
              '\xBE': '&frac34;',
              '\u2157': '&frac35;',
              '\u215C': '&frac38;',
              '\u2158': '&frac45;',
              '\u215A': '&frac56;',
              '\u215D': '&frac58;',
              '\u215E': '&frac78;',
              '\u2044': '&frasl;',
              '\u2322': '&sfrown;',
              '\u{1D4BB}': '&fscr;',
              '\u2A8C': '&gtreqqless;',
              ǵ: '&gacute;',
              γ: '&gamma;',
              '\u2A86': '&gtrapprox;',
              ğ: '&gbreve;',
              ĝ: '&gcirc;',
              г: '&gcy;',
              ġ: '&gdot;',
              '\u2AA9': '&gescc;',
              '\u2A80': '&gesdot;',
              '\u2A82': '&gesdoto;',
              '\u2A84': '&gesdotol;',
              '\u22DB\uFE00': '&gesl;',
              '\u2A94': '&gesles;',
              '\u{1D524}': '&gfr;',
              ℷ: '&gimel;',
              ѓ: '&gjcy;',
              '\u2A92': '&glE;',
              '\u2AA5': '&gla;',
              '\u2AA4': '&glj;',
              '\u2269': '&gneqq;',
              '\u2A8A': '&gnapprox;',
              '\u2A88': '&gneq;',
              '\u22E7': '&gnsim;',
              '\u{1D558}': '&gopf;',
              ℊ: '&gscr;',
              '\u2A8E': '&gsime;',
              '\u2A90': '&gsiml;',
              '\u2AA7': '&gtcc;',
              '\u2A7A': '&gtcir;',
              '\u22D7': '&gtrdot;',
              '\u2995': '&gtlPar;',
              '\u2A7C': '&gtquest;',
              '\u2978': '&gtrarr;',
              '\u2269\uFE00': '&gvnE;',
              ъ: '&hardcy;',
              '\u2948': '&harrcir;',
              '\u21AD': '&leftrightsquigarrow;',
              ℏ: '&plankv;',
              ĥ: '&hcirc;',
              '\u2665': '&heartsuit;',
              '\u2026': '&mldr;',
              '\u22B9': '&hercon;',
              '\u{1D525}': '&hfr;',
              '\u2925': '&searhk;',
              '\u2926': '&swarhk;',
              '\u21FF': '&hoarr;',
              '\u223B': '&homtht;',
              '\u21A9': '&larrhk;',
              '\u21AA': '&rarrhk;',
              '\u{1D559}': '&hopf;',
              '\u2015': '&horbar;',
              '\u{1D4BD}': '&hscr;',
              ħ: '&hstrok;',
              '\u2043': '&hybull;',
              í: '&iacute;',
              î: '&icirc;',
              и: '&icy;',
              е: '&iecy;',
              '\xA1': '&iexcl;',
              '\u{1D526}': '&ifr;',
              ì: '&igrave;',
              '\u2A0C': '&qint;',
              '\u222D': '&tint;',
              '\u29DC': '&iinfin;',
              '\u2129': '&iiota;',
              ĳ: '&ijlig;',
              ī: '&imacr;',
              ı: '&inodot;',
              '\u22B7': '&imof;',
              Ƶ: '&imped;',
              '\u2105': '&incare;',
              '\u221E': '&infin;',
              '\u29DD': '&infintie;',
              '\u22BA': '&intercal;',
              '\u2A17': '&intlarhk;',
              '\u2A3C': '&iprod;',
              ё: '&iocy;',
              į: '&iogon;',
              '\u{1D55A}': '&iopf;',
              ι: '&iota;',
              '\xBF': '&iquest;',
              '\u{1D4BE}': '&iscr;',
              '\u22F9': '&isinE;',
              '\u22F5': '&isindot;',
              '\u22F4': '&isins;',
              '\u22F3': '&isinsv;',
              ĩ: '&itilde;',
              і: '&iukcy;',
              ï: '&iuml;',
              ĵ: '&jcirc;',
              й: '&jcy;',
              '\u{1D527}': '&jfr;',
              '\u0237': '&jmath;',
              '\u{1D55B}': '&jopf;',
              '\u{1D4BF}': '&jscr;',
              ј: '&jsercy;',
              є: '&jukcy;',
              κ: '&kappa;',
              ϰ: '&varkappa;',
              ķ: '&kcedil;',
              к: '&kcy;',
              '\u{1D528}': '&kfr;',
              ĸ: '&kgreen;',
              х: '&khcy;',
              ќ: '&kjcy;',
              '\u{1D55C}': '&kopf;',
              '\u{1D4C0}': '&kscr;',
              '\u291B': '&lAtail;',
              '\u290E': '&lBarr;',
              '\u2A8B': '&lesseqqgtr;',
              '\u2962': '&lHar;',
              ĺ: '&lacute;',
              '\u29B4': '&laemptyv;',
              λ: '&lambda;',
              '\u2991': '&langd;',
              '\u2A85': '&lessapprox;',
              '\xAB': '&laquo;',
              '\u291F': '&larrbfs;',
              '\u291D': '&larrfs;',
              '\u21AB': '&looparrowleft;',
              '\u2939': '&larrpl;',
              '\u2973': '&larrsim;',
              '\u21A2': '&leftarrowtail;',
              '\u2AAB': '&lat;',
              '\u2919': '&latail;',
              '\u2AAD': '&late;',
              '\u2AAD\uFE00': '&lates;',
              '\u290C': '&lbarr;',
              '\u2772': '&lbbrk;',
              '{': '&lcub;',
              '[': '&lsqb;',
              '\u298B': '&lbrke;',
              '\u298F': '&lbrksld;',
              '\u298D': '&lbrkslu;',
              ľ: '&lcaron;',
              ļ: '&lcedil;',
              л: '&lcy;',
              '\u2936': '&ldca;',
              '\u2967': '&ldrdhar;',
              '\u294B': '&ldrushar;',
              '\u21B2': '&ldsh;',
              '\u2264': '&leq;',
              '\u21C7': '&llarr;',
              '\u22CB': '&lthree;',
              '\u2AA8': '&lescc;',
              '\u2A7F': '&lesdot;',
              '\u2A81': '&lesdoto;',
              '\u2A83': '&lesdotor;',
              '\u22DA\uFE00': '&lesg;',
              '\u2A93': '&lesges;',
              '\u22D6': '&ltdot;',
              '\u297C': '&lfisht;',
              '\u{1D529}': '&lfr;',
              '\u2A91': '&lgE;',
              '\u296A': '&lharul;',
              '\u2584': '&lhblk;',
              љ: '&ljcy;',
              '\u296B': '&llhard;',
              '\u25FA': '&lltri;',
              ŀ: '&lmidot;',
              '\u23B0': '&lmoustache;',
              '\u2268': '&lneqq;',
              '\u2A89': '&lnapprox;',
              '\u2A87': '&lneq;',
              '\u22E6': '&lnsim;',
              '\u27EC': '&loang;',
              '\u21FD': '&loarr;',
              '\u27FC': '&xmap;',
              '\u21AC': '&rarrlp;',
              '\u2985': '&lopar;',
              '\u{1D55D}': '&lopf;',
              '\u2A2D': '&loplus;',
              '\u2A34': '&lotimes;',
              '\u2217': '&lowast;',
              '\u25CA': '&lozenge;',
              '(': '&lpar;',
              '\u2993': '&lparlt;',
              '\u296D': '&lrhard;',
              '\u200E': '&lrm;',
              '\u22BF': '&lrtri;',
              '\u2039': '&lsaquo;',
              '\u{1D4C1}': '&lscr;',
              '\u2A8D': '&lsime;',
              '\u2A8F': '&lsimg;',
              '\u201A': '&sbquo;',
              ł: '&lstrok;',
              '\u2AA6': '&ltcc;',
              '\u2A79': '&ltcir;',
              '\u22C9': '&ltimes;',
              '\u2976': '&ltlarr;',
              '\u2A7B': '&ltquest;',
              '\u2996': '&ltrPar;',
              '\u25C3': '&triangleleft;',
              '\u294A': '&lurdshar;',
              '\u2966': '&luruhar;',
              '\u2268\uFE00': '&lvnE;',
              '\u223A': '&mDDot;',
              '\xAF': '&strns;',
              '\u2642': '&male;',
              '\u2720': '&maltese;',
              '\u25AE': '&marker;',
              '\u2A29': '&mcomma;',
              м: '&mcy;',
              '\u2014': '&mdash;',
              '\u{1D52A}': '&mfr;',
              '\u2127': '&mho;',
              µ: '&micro;',
              '\u2AF0': '&midcir;',
              '\u2212': '&minus;',
              '\u2A2A': '&minusdu;',
              '\u2ADB': '&mlcp;',
              '\u22A7': '&models;',
              '\u{1D55E}': '&mopf;',
              '\u{1D4C2}': '&mscr;',
              μ: '&mu;',
              '\u22B8': '&mumap;',
              '\u22D9\u0338': '&nGg;',
              '\u226B\u20D2': '&nGt;',
              '\u21CD': '&nlArr;',
              '\u21CE': '&nhArr;',
              '\u22D8\u0338': '&nLl;',
              '\u226A\u20D2': '&nLt;',
              '\u21CF': '&nrArr;',
              '\u22AF': '&nVDash;',
              '\u22AE': '&nVdash;',
              ń: '&nacute;',
              '\u2220\u20D2': '&nang;',
              '\u2A70\u0338': '&napE;',
              '\u224B\u0338': '&napid;',
              ŉ: '&napos;',
              '\u266E': '&natural;',
              '\u2A43': '&ncap;',
              ň: '&ncaron;',
              ņ: '&ncedil;',
              '\u2A6D\u0338': '&ncongdot;',
              '\u2A42': '&ncup;',
              н: '&ncy;',
              '\u2013': '&ndash;',
              '\u21D7': '&neArr;',
              '\u2924': '&nearhk;',
              '\u2250\u0338': '&nedot;',
              '\u2928': '&toea;',
              '\u{1D52B}': '&nfr;',
              '\u21AE': '&nleftrightarrow;',
              '\u2AF2': '&nhpar;',
              '\u22FC': '&nis;',
              '\u22FA': '&nisd;',
              њ: '&njcy;',
              '\u2266\u0338': '&nleqq;',
              '\u219A': '&nleftarrow;',
              '\u2025': '&nldr;',
              '\u{1D55F}': '&nopf;',
              '\xAC': '&not;',
              '\u22F9\u0338': '&notinE;',
              '\u22F5\u0338': '&notindot;',
              '\u22F7': '&notinvb;',
              '\u22F6': '&notinvc;',
              '\u22FE': '&notnivb;',
              '\u22FD': '&notnivc;',
              '\u2AFD\u20E5': '&nparsl;',
              '\u2202\u0338': '&npart;',
              '\u2A14': '&npolint;',
              '\u219B': '&nrightarrow;',
              '\u2933\u0338': '&nrarrc;',
              '\u219D\u0338': '&nrarrw;',
              '\u{1D4C3}': '&nscr;',
              '\u2284': '&nsub;',
              '\u2AC5\u0338': '&nsubseteqq;',
              '\u2285': '&nsup;',
              '\u2AC6\u0338': '&nsupseteqq;',
              ñ: '&ntilde;',
              ν: '&nu;',
              '#': '&num;',
              '\u2116': '&numero;',
              '\u2007': '&numsp;',
              '\u22AD': '&nvDash;',
              '\u2904': '&nvHarr;',
              '\u224D\u20D2': '&nvap;',
              '\u22AC': '&nvdash;',
              '\u2265\u20D2': '&nvge;',
              '>\u20D2': '&nvgt;',
              '\u29DE': '&nvinfin;',
              '\u2902': '&nvlArr;',
              '\u2264\u20D2': '&nvle;',
              '<\u20D2': '&nvlt;',
              '\u22B4\u20D2': '&nvltrie;',
              '\u2903': '&nvrArr;',
              '\u22B5\u20D2': '&nvrtrie;',
              '\u223C\u20D2': '&nvsim;',
              '\u21D6': '&nwArr;',
              '\u2923': '&nwarhk;',
              '\u2927': '&nwnear;',
              ó: '&oacute;',
              ô: '&ocirc;',
              о: '&ocy;',
              ő: '&odblac;',
              '\u2A38': '&odiv;',
              '\u29BC': '&odsold;',
              œ: '&oelig;',
              '\u29BF': '&ofcir;',
              '\u{1D52C}': '&ofr;',
              '\u02DB': '&ogon;',
              ò: '&ograve;',
              '\u29C1': '&ogt;',
              '\u29B5': '&ohbar;',
              '\u29BE': '&olcir;',
              '\u29BB': '&olcross;',
              '\u29C0': '&olt;',
              ō: '&omacr;',
              ω: '&omega;',
              ο: '&omicron;',
              '\u29B6': '&omid;',
              '\u{1D560}': '&oopf;',
              '\u29B7': '&opar;',
              '\u29B9': '&operp;',
              '\u2228': '&vee;',
              '\u2A5D': '&ord;',
              ℴ: '&oscr;',
              ª: '&ordf;',
              º: '&ordm;',
              '\u22B6': '&origof;',
              '\u2A56': '&oror;',
              '\u2A57': '&orslope;',
              '\u2A5B': '&orv;',
              ø: '&oslash;',
              '\u2298': '&osol;',
              õ: '&otilde;',
              '\u2A36': '&otimesas;',
              ö: '&ouml;',
              '\u233D': '&ovbar;',
              '\xB6': '&para;',
              '\u2AF3': '&parsim;',
              '\u2AFD': '&parsl;',
              п: '&pcy;',
              '%': '&percnt;',
              '.': '&period;',
              '\u2030': '&permil;',
              '\u2031': '&pertenk;',
              '\u{1D52D}': '&pfr;',
              φ: '&phi;',
              ϕ: '&varphi;',
              '\u260E': '&phone;',
              π: '&pi;',
              ϖ: '&varpi;',
              ℎ: '&planckh;',
              '+': '&plus;',
              '\u2A23': '&plusacir;',
              '\u2A22': '&pluscir;',
              '\u2A25': '&plusdu;',
              '\u2A72': '&pluse;',
              '\u2A26': '&plussim;',
              '\u2A27': '&plustwo;',
              '\u2A15': '&pointint;',
              '\u{1D561}': '&popf;',
              '\xA3': '&pound;',
              '\u2AB3': '&prE;',
              '\u2AB7': '&precapprox;',
              '\u2AB9': '&prnap;',
              '\u2AB5': '&prnE;',
              '\u22E8': '&prnsim;',
              '\u2032': '&prime;',
              '\u232E': '&profalar;',
              '\u2312': '&profline;',
              '\u2313': '&profsurf;',
              '\u22B0': '&prurel;',
              '\u{1D4C5}': '&pscr;',
              ψ: '&psi;',
              '\u2008': '&puncsp;',
              '\u{1D52E}': '&qfr;',
              '\u{1D562}': '&qopf;',
              '\u2057': '&qprime;',
              '\u{1D4C6}': '&qscr;',
              '\u2A16': '&quatint;',
              '?': '&quest;',
              '\u291C': '&rAtail;',
              '\u2964': '&rHar;',
              '\u223D\u0331': '&race;',
              ŕ: '&racute;',
              '\u29B3': '&raemptyv;',
              '\u2992': '&rangd;',
              '\u29A5': '&range;',
              '\xBB': '&raquo;',
              '\u2975': '&rarrap;',
              '\u2920': '&rarrbfs;',
              '\u2933': '&rarrc;',
              '\u291E': '&rarrfs;',
              '\u2945': '&rarrpl;',
              '\u2974': '&rarrsim;',
              '\u21A3': '&rightarrowtail;',
              '\u219D': '&rightsquigarrow;',
              '\u291A': '&ratail;',
              '\u2236': '&ratio;',
              '\u2773': '&rbbrk;',
              '}': '&rcub;',
              ']': '&rsqb;',
              '\u298C': '&rbrke;',
              '\u298E': '&rbrksld;',
              '\u2990': '&rbrkslu;',
              ř: '&rcaron;',
              ŗ: '&rcedil;',
              р: '&rcy;',
              '\u2937': '&rdca;',
              '\u2969': '&rdldhar;',
              '\u21B3': '&rdsh;',
              '\u25AD': '&rect;',
              '\u297D': '&rfisht;',
              '\u{1D52F}': '&rfr;',
              '\u296C': '&rharul;',
              ρ: '&rho;',
              ϱ: '&varrho;',
              '\u21C9': '&rrarr;',
              '\u22CC': '&rthree;',
              '\u02DA': '&ring;',
              '\u200F': '&rlm;',
              '\u23B1': '&rmoustache;',
              '\u2AEE': '&rnmid;',
              '\u27ED': '&roang;',
              '\u21FE': '&roarr;',
              '\u2986': '&ropar;',
              '\u{1D563}': '&ropf;',
              '\u2A2E': '&roplus;',
              '\u2A35': '&rotimes;',
              ')': '&rpar;',
              '\u2994': '&rpargt;',
              '\u2A12': '&rppolint;',
              '\u203A': '&rsaquo;',
              '\u{1D4C7}': '&rscr;',
              '\u22CA': '&rtimes;',
              '\u25B9': '&triangleright;',
              '\u29CE': '&rtriltri;',
              '\u2968': '&ruluhar;',
              '\u211E': '&rx;',
              ś: '&sacute;',
              '\u2AB4': '&scE;',
              '\u2AB8': '&succapprox;',
              š: '&scaron;',
              ş: '&scedil;',
              ŝ: '&scirc;',
              '\u2AB6': '&succneqq;',
              '\u2ABA': '&succnapprox;',
              '\u22E9': '&succnsim;',
              '\u2A13': '&scpolint;',
              с: '&scy;',
              '\u22C5': '&sdot;',
              '\u2A66': '&sdote;',
              '\u21D8': '&seArr;',
              '\xA7': '&sect;',
              ';': '&semi;',
              '\u2929': '&tosa;',
              '\u2736': '&sext;',
              '\u{1D530}': '&sfr;',
              '\u266F': '&sharp;',
              щ: '&shchcy;',
              ш: '&shcy;',
              '\xAD': '&shy;',
              σ: '&sigma;',
              ς: '&varsigma;',
              '\u2A6A': '&simdot;',
              '\u2A9E': '&simg;',
              '\u2AA0': '&simgE;',
              '\u2A9D': '&siml;',
              '\u2A9F': '&simlE;',
              '\u2246': '&simne;',
              '\u2A24': '&simplus;',
              '\u2972': '&simrarr;',
              '\u2A33': '&smashp;',
              '\u29E4': '&smeparsl;',
              '\u2323': '&ssmile;',
              '\u2AAA': '&smt;',
              '\u2AAC': '&smte;',
              '\u2AAC\uFE00': '&smtes;',
              ь: '&softcy;',
              '/': '&sol;',
              '\u29C4': '&solb;',
              '\u233F': '&solbar;',
              '\u{1D564}': '&sopf;',
              '\u2660': '&spadesuit;',
              '\u2293\uFE00': '&sqcaps;',
              '\u2294\uFE00': '&sqcups;',
              '\u{1D4C8}': '&sscr;',
              '\u2606': '&star;',
              '\u2282': '&subset;',
              '\u2AC5': '&subseteqq;',
              '\u2ABD': '&subdot;',
              '\u2AC3': '&subedot;',
              '\u2AC1': '&submult;',
              '\u2ACB': '&subsetneqq;',
              '\u228A': '&subsetneq;',
              '\u2ABF': '&subplus;',
              '\u2979': '&subrarr;',
              '\u2AC7': '&subsim;',
              '\u2AD5': '&subsub;',
              '\u2AD3': '&subsup;',
              '\u266A': '&sung;',
              '\xB9': '&sup1;',
              '\xB2': '&sup2;',
              '\xB3': '&sup3;',
              '\u2AC6': '&supseteqq;',
              '\u2ABE': '&supdot;',
              '\u2AD8': '&supdsub;',
              '\u2AC4': '&supedot;',
              '\u27C9': '&suphsol;',
              '\u2AD7': '&suphsub;',
              '\u297B': '&suplarr;',
              '\u2AC2': '&supmult;',
              '\u2ACC': '&supsetneqq;',
              '\u228B': '&supsetneq;',
              '\u2AC0': '&supplus;',
              '\u2AC8': '&supsim;',
              '\u2AD4': '&supsub;',
              '\u2AD6': '&supsup;',
              '\u21D9': '&swArr;',
              '\u292A': '&swnwar;',
              ß: '&szlig;',
              '\u2316': '&target;',
              τ: '&tau;',
              ť: '&tcaron;',
              ţ: '&tcedil;',
              т: '&tcy;',
              '\u2315': '&telrec;',
              '\u{1D531}': '&tfr;',
              θ: '&theta;',
              ϑ: '&vartheta;',
              þ: '&thorn;',
              '\xD7': '&times;',
              '\u2A31': '&timesbar;',
              '\u2A30': '&timesd;',
              '\u2336': '&topbot;',
              '\u2AF1': '&topcir;',
              '\u{1D565}': '&topf;',
              '\u2ADA': '&topfork;',
              '\u2034': '&tprime;',
              '\u25B5': '&utri;',
              '\u225C': '&trie;',
              '\u25EC': '&tridot;',
              '\u2A3A': '&triminus;',
              '\u2A39': '&triplus;',
              '\u29CD': '&trisb;',
              '\u2A3B': '&tritime;',
              '\u23E2': '&trpezium;',
              '\u{1D4C9}': '&tscr;',
              ц: '&tscy;',
              ћ: '&tshcy;',
              ŧ: '&tstrok;',
              '\u2963': '&uHar;',
              ú: '&uacute;',
              ў: '&ubrcy;',
              ŭ: '&ubreve;',
              û: '&ucirc;',
              у: '&ucy;',
              ű: '&udblac;',
              '\u297E': '&ufisht;',
              '\u{1D532}': '&ufr;',
              ù: '&ugrave;',
              '\u2580': '&uhblk;',
              '\u231C': '&ulcorner;',
              '\u230F': '&ulcrop;',
              '\u25F8': '&ultri;',
              ū: '&umacr;',
              ų: '&uogon;',
              '\u{1D566}': '&uopf;',
              υ: '&upsilon;',
              '\u21C8': '&uuarr;',
              '\u231D': '&urcorner;',
              '\u230E': '&urcrop;',
              ů: '&uring;',
              '\u25F9': '&urtri;',
              '\u{1D4CA}': '&uscr;',
              '\u22F0': '&utdot;',
              ũ: '&utilde;',
              ü: '&uuml;',
              '\u29A7': '&uwangle;',
              '\u2AE8': '&vBar;',
              '\u2AE9': '&vBarv;',
              '\u299C': '&vangrt;',
              '\u228A\uFE00': '&vsubne;',
              '\u2ACB\uFE00': '&vsubnE;',
              '\u228B\uFE00': '&vsupne;',
              '\u2ACC\uFE00': '&vsupnE;',
              в: '&vcy;',
              '\u22BB': '&veebar;',
              '\u225A': '&veeeq;',
              '\u22EE': '&vellip;',
              '\u{1D533}': '&vfr;',
              '\u{1D567}': '&vopf;',
              '\u{1D4CB}': '&vscr;',
              '\u299A': '&vzigzag;',
              ŵ: '&wcirc;',
              '\u2A5F': '&wedbar;',
              '\u2259': '&wedgeq;',
              '\u2118': '&wp;',
              '\u{1D534}': '&wfr;',
              '\u{1D568}': '&wopf;',
              '\u{1D4CC}': '&wscr;',
              '\u{1D535}': '&xfr;',
              ξ: '&xi;',
              '\u22FB': '&xnis;',
              '\u{1D569}': '&xopf;',
              '\u{1D4CD}': '&xscr;',
              ý: '&yacute;',
              я: '&yacy;',
              ŷ: '&ycirc;',
              ы: '&ycy;',
              '\xA5': '&yen;',
              '\u{1D536}': '&yfr;',
              ї: '&yicy;',
              '\u{1D56A}': '&yopf;',
              '\u{1D4CE}': '&yscr;',
              ю: '&yucy;',
              ÿ: '&yuml;',
              ź: '&zacute;',
              ž: '&zcaron;',
              з: '&zcy;',
              ż: '&zdot;',
              ζ: '&zeta;',
              '\u{1D537}': '&zfr;',
              ж: '&zhcy;',
              '\u21DD': '&zigrarr;',
              '\u{1D56B}': '&zopf;',
              '\u{1D4CF}': '&zscr;',
              '\u200D': '&zwj;',
              '\u200C': '&zwnj;',
            },
          },
        });
    },
    92642: function (V, A) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.numericUnicodeMap = {
          0: 65533,
          128: 8364,
          130: 8218,
          131: 402,
          132: 8222,
          133: 8230,
          134: 8224,
          135: 8225,
          136: 710,
          137: 8240,
          138: 352,
          139: 8249,
          140: 338,
          142: 381,
          145: 8216,
          146: 8217,
          147: 8220,
          148: 8221,
          149: 8226,
          150: 8211,
          151: 8212,
          152: 732,
          153: 8482,
          154: 353,
          155: 8250,
          156: 339,
          158: 382,
          159: 376,
        });
    },
    59726: function (V, A) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.fromCodePoint =
          String.fromCodePoint ||
          function (f) {
            return String.fromCharCode(
              Math.floor((f - 65536) / 1024) + 55296,
              ((f - 65536) % 1024) + 56320,
            );
          }),
        (A.getCodePoint = String.prototype.codePointAt
          ? function (f, x) {
              return f.codePointAt(x);
            }
          : function (f, x) {
              return (
                (f.charCodeAt(x) - 55296) * 1024 +
                f.charCodeAt(x + 1) -
                56320 +
                65536
              );
            }),
        (A.highSurrogateFrom = 55296),
        (A.highSurrogateTo = 56319);
    },
    66188: function (V, A) {
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default =
          /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g),
        (A.matchToToken = function (f) {
          var x = { type: 'invalid', value: f[0], closed: void 0 };
          return (
            f[1]
              ? ((x.type = 'string'), (x.closed = !!(f[3] || f[4])))
              : f[5]
              ? (x.type = 'comment')
              : f[6]
              ? ((x.type = 'comment'), (x.closed = !!f[7]))
              : f[8]
              ? (x.type = 'regex')
              : f[9]
              ? (x.type = 'number')
              : f[10]
              ? (x.type = 'name')
              : f[11]
              ? (x.type = 'punctuator')
              : f[12] && (x.type = 'whitespace'),
            x
          );
        });
    },
    4704: function (V, A, f) {
      'use strict';
      var x,
        T = f(34155);
      (x = { value: !0 }), (A.rf = w), (x = r);
      var C = f(8530);
      let g = !1;
      function h(a) {
        return { gutter: a.grey, marker: a.red.bold, message: a.red.bold };
      }
      const d = /\r\n|[\n\r\u2028\u2029]/;
      function u(a, o, n) {
        const e = Object.assign({ column: 0, line: -1 }, a.start),
          i = Object.assign({}, e, a.end),
          { linesAbove: s = 2, linesBelow: c = 3 } = n || {},
          m = e.line,
          S = e.column,
          y = i.line,
          j = i.column;
        let P = Math.max(m - (s + 1), 0),
          R = Math.min(o.length, y + c);
        m === -1 && (P = 0), y === -1 && (R = o.length);
        const k = y - m,
          O = {};
        if (k)
          for (let q = 0; q <= k; q++) {
            const B = q + m;
            if (!S) O[B] = !0;
            else if (q === 0) {
              const te = o[B - 1].length;
              O[B] = [S, te - S + 1];
            } else if (q === k) O[B] = [0, j];
            else {
              const te = o[B - q].length;
              O[B] = [0, te];
            }
          }
        else
          S === j ? (S ? (O[m] = [S, 0]) : (O[m] = !0)) : (O[m] = [S, j - S]);
        return { start: P, end: R, markerLines: O };
      }
      function w(a, o, n = {}) {
        const e =
            (n.highlightCode || n.forceColor) && (0, C.shouldHighlight)(n),
          i = (0, C.getChalk)(n),
          s = h(i),
          c = (q, B) => (e ? q(B) : B),
          m = a.split(d),
          { start: S, end: y, markerLines: j } = u(o, m, n),
          P = o.start && typeof o.start.column == 'number',
          R = String(y).length;
        let O = (e ? (0, C.default)(a, n) : a)
          .split(d, y)
          .slice(S, y)
          .map((q, B) => {
            const te = S + 1 + B,
              D = ` ${` ${te}`.slice(-R)} |`,
              I = j[te],
              M = !j[te + 1];
            if (I) {
              let G = '';
              if (Array.isArray(I)) {
                const K = q
                    .slice(0, Math.max(I[0] - 1, 0))
                    .replace(/[^\t]/g, ' '),
                  ue = I[1] || 1;
                (G = [
                  `
 `,
                  c(s.gutter, D.replace(/\d/g, ' ')),
                  ' ',
                  K,
                  c(s.marker, '^').repeat(ue),
                ].join('')),
                  M && n.message && (G += ' ' + c(s.message, n.message));
              }
              return [
                c(s.marker, '>'),
                c(s.gutter, D),
                q.length > 0 ? ` ${q}` : '',
                G,
              ].join('');
            } else return ` ${c(s.gutter, D)}${q.length > 0 ? ` ${q}` : ''}`;
          }).join(`
`);
        return (
          n.message &&
            !P &&
            (O = `${' '.repeat(R + 1)}${n.message}
${O}`),
          e ? i.reset(O) : O
        );
      }
      function r(a, o, n, e = {}) {
        if (!g) {
          g = !0;
          const s =
            'Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.';
          if (T.emitWarning) T.emitWarning(s, 'DeprecationWarning');
          else {
            const c = new Error(s);
            (c.name = 'DeprecationWarning'), console.warn(new Error(s));
          }
        }
        return (n = Math.max(n, 0)), w(a, { start: { column: n, line: o } }, e);
      }
    },
    27749: function (V, A) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.isIdentifierChar = w),
        (A.isIdentifierName = r),
        (A.isIdentifierStart = u);
      let f =
          '\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC',
        x =
          '\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F';
      const T = new RegExp('[' + f + ']'),
        C = new RegExp('[' + f + x + ']');
      f = x = null;
      const g = [
          0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4,
          48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35,
          5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2,
          1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2,
          1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55,
          7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53,
          11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7,
          1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0,
          14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22,
          0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46,
          39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19,
          3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42,
          14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2,
          23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22,
          0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1,
          2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33,
          125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026,
          582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18,
          689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8,
          8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309,
          106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2,
          11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4,
          6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2,
          30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322,
          29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0,
          1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0,
          2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2,
          0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421,
          42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938, 6,
          4191,
        ],
        h = [
          509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166,
          1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10,
          3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13,
          2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56,
          1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0,
          82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84,
          14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120,
          6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7,
          17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2,
          1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7,
          14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0,
          12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3,
          149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6,
          2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499,
          13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239,
        ];
      function d(a, o) {
        let n = 65536;
        for (let e = 0, i = o.length; e < i; e += 2) {
          if (((n += o[e]), n > a)) return !1;
          if (((n += o[e + 1]), n >= a)) return !0;
        }
        return !1;
      }
      function u(a) {
        return a < 65
          ? a === 36
          : a <= 90
          ? !0
          : a < 97
          ? a === 95
          : a <= 122
          ? !0
          : a <= 65535
          ? a >= 170 && T.test(String.fromCharCode(a))
          : d(a, g);
      }
      function w(a) {
        return a < 48
          ? a === 36
          : a < 58
          ? !0
          : a < 65
          ? !1
          : a <= 90
          ? !0
          : a < 97
          ? a === 95
          : a <= 122
          ? !0
          : a <= 65535
          ? a >= 170 && C.test(String.fromCharCode(a))
          : d(a, g) || d(a, h);
      }
      function r(a) {
        let o = !0;
        for (let n = 0; n < a.length; n++) {
          let e = a.charCodeAt(n);
          if ((e & 64512) === 55296 && n + 1 < a.length) {
            const i = a.charCodeAt(++n);
            (i & 64512) === 56320 &&
              (e = 65536 + ((e & 1023) << 10) + (i & 1023));
          }
          if (o) {
            if (((o = !1), !u(e))) return !1;
          } else if (!w(e)) return !1;
        }
        return !o;
      }
    },
    29649: function (V, A, f) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        Object.defineProperty(A, 'isIdentifierChar', {
          enumerable: !0,
          get: function () {
            return x.isIdentifierChar;
          },
        }),
        Object.defineProperty(A, 'isIdentifierName', {
          enumerable: !0,
          get: function () {
            return x.isIdentifierName;
          },
        }),
        Object.defineProperty(A, 'isIdentifierStart', {
          enumerable: !0,
          get: function () {
            return x.isIdentifierStart;
          },
        }),
        Object.defineProperty(A, 'isKeyword', {
          enumerable: !0,
          get: function () {
            return T.isKeyword;
          },
        }),
        Object.defineProperty(A, 'isReservedWord', {
          enumerable: !0,
          get: function () {
            return T.isReservedWord;
          },
        }),
        Object.defineProperty(A, 'isStrictBindOnlyReservedWord', {
          enumerable: !0,
          get: function () {
            return T.isStrictBindOnlyReservedWord;
          },
        }),
        Object.defineProperty(A, 'isStrictBindReservedWord', {
          enumerable: !0,
          get: function () {
            return T.isStrictBindReservedWord;
          },
        }),
        Object.defineProperty(A, 'isStrictReservedWord', {
          enumerable: !0,
          get: function () {
            return T.isStrictReservedWord;
          },
        });
      var x = f(27749),
        T = f(25562);
    },
    25562: function (V, A) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.isKeyword = w),
        (A.isReservedWord = g),
        (A.isStrictBindOnlyReservedWord = d),
        (A.isStrictBindReservedWord = u),
        (A.isStrictReservedWord = h);
      const f = {
          keyword: [
            'break',
            'case',
            'catch',
            'continue',
            'debugger',
            'default',
            'do',
            'else',
            'finally',
            'for',
            'function',
            'if',
            'return',
            'switch',
            'throw',
            'try',
            'var',
            'const',
            'while',
            'with',
            'new',
            'this',
            'super',
            'class',
            'extends',
            'export',
            'import',
            'null',
            'true',
            'false',
            'in',
            'instanceof',
            'typeof',
            'void',
            'delete',
          ],
          strict: [
            'implements',
            'interface',
            'let',
            'package',
            'private',
            'protected',
            'public',
            'static',
            'yield',
          ],
          strictBind: ['eval', 'arguments'],
        },
        x = new Set(f.keyword),
        T = new Set(f.strict),
        C = new Set(f.strictBind);
      function g(r, a) {
        return (a && r === 'await') || r === 'enum';
      }
      function h(r, a) {
        return g(r, a) || T.has(r);
      }
      function d(r) {
        return C.has(r);
      }
      function u(r, a) {
        return h(r, a) || d(r);
      }
      function w(r) {
        return x.has(r);
      }
    },
    8530: function (V, A, f) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = n),
        (A.getChalk = o),
        (A.shouldHighlight = a);
      var x = f(66188),
        T = f(29649),
        C = f(61765);
      const g = new Set(['as', 'async', 'from', 'get', 'of', 'set']);
      function h(e) {
        return {
          keyword: e.cyan,
          capitalized: e.yellow,
          jsxIdentifier: e.yellow,
          punctuator: e.yellow,
          number: e.magenta,
          string: e.green,
          regex: e.magenta,
          comment: e.grey,
          invalid: e.white.bgRed.bold,
        };
      }
      const d = /\r\n|[\n\r\u2028\u2029]/,
        u = /^[()[\]{}]$/;
      let w;
      {
        const e = /^[a-z][\w-]*$/i,
          i = function (s, c, m) {
            if (s.type === 'name') {
              if (
                (0, T.isKeyword)(s.value) ||
                (0, T.isStrictReservedWord)(s.value, !0) ||
                g.has(s.value)
              )
                return 'keyword';
              if (
                e.test(s.value) &&
                (m[c - 1] === '<' || m.slice(c - 2, c) == '</')
              )
                return 'jsxIdentifier';
              if (s.value[0] !== s.value[0].toLowerCase()) return 'capitalized';
            }
            return s.type === 'punctuator' && u.test(s.value)
              ? 'bracket'
              : s.type === 'invalid' && (s.value === '@' || s.value === '#')
              ? 'punctuator'
              : s.type;
          };
        w = function* (s) {
          let c;
          for (; (c = x.default.exec(s)); ) {
            const m = x.matchToToken(c);
            yield { type: i(m, c.index, s), value: m.value };
          }
        };
      }
      function r(e, i) {
        let s = '';
        for (const { type: c, value: m } of w(i)) {
          const S = e[c];
          S
            ? (s += m.split(d).map((y) => S(y)).join(`
`))
            : (s += m);
        }
        return s;
      }
      function a(e) {
        return !!C.supportsColor || e.forceColor;
      }
      function o(e) {
        return e.forceColor ? new C.constructor({ enabled: !0, level: 1 }) : C;
      }
      function n(e, i = {}) {
        if (e !== '' && a(i)) {
          const s = o(i),
            c = h(s);
          return r(c, e);
        } else return e;
      }
    },
  },
]);

//# sourceMappingURL=526.f17b66c0.async.js.map
