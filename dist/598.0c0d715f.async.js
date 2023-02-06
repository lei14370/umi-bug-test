(self.webpackChunk = self.webpackChunk || []).push([
  [598],
  {
    86548: function (Ye, de, i) {
      'use strict';
      i.d(de, {
        Z: function () {
          return R;
        },
      });
      var ue = i(1413),
        s = i(67294),
        $e = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z',
                },
              },
            ],
          },
          name: 'edit',
          theme: 'outlined',
        },
        U = $e,
        z = i(84089),
        P = function (H, fe) {
          return s.createElement(
            z.Z,
            (0, ue.Z)((0, ue.Z)({}, H), {}, { ref: fe, icon: U }),
          );
        };
      P.displayName = 'EditOutlined';
      var R = s.forwardRef(P);
    },
    952: function (Ye, de, i) {
      'use strict';
      var ue = i(97269);
      de.ZP = ue.A;
    },
    90081: function (Ye, de, i) {
      'use strict';
      i.d(de, {
        U: function () {
          return J;
        },
      });
      var ue = i(91),
        s = i(1413),
        $e = i(97685),
        U = i(85893),
        z = i(50888),
        P = i(73177),
        R = i(58720),
        $ = i(55241),
        H = i(80442),
        fe = i(67294),
        Ee = i(4942),
        d = i(14855),
        ve = function (M) {
          var Se = ''.concat(M.antCls, '-progress-bg');
          return (0, Ee.Z)({}, M.componentCls, {
            '&-multiple': {
              paddingBlockStart: 6,
              paddingBlockEnd: 12,
              paddingInline: 8,
            },
            '&-progress': {
              '&-success': (0, Ee.Z)({}, Se, {
                backgroundColor: M.colorSuccess,
              }),
              '&-error': (0, Ee.Z)({}, Se, { backgroundColor: M.colorError }),
              '&-warning': (0, Ee.Z)({}, Se, {
                backgroundColor: M.colorWarning,
              }),
            },
            '&-rule': {
              display: 'flex',
              alignItems: 'center',
              '&-icon': {
                '&-default': {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '14px',
                  height: '22px',
                  '&-circle': {
                    width: '6px',
                    height: '6px',
                    backgroundColor: M.colorTextSecondary,
                    borderRadius: '4px',
                  },
                },
                '&-loading': { color: M.colorPrimary },
                '&-error': { color: M.colorError },
                '&-success': { color: M.colorSuccess },
              },
              '&-text': { color: M.colorText },
            },
          });
        };
      function Ke(it) {
        return (0, d.Xj)('InlineErrorFormItem', function (M) {
          var Se = (0, s.Z)(
            (0, s.Z)({}, M),
            {},
            { componentCls: '.'.concat(it) },
          );
          return [ve(Se)];
        });
      }
      var rt = ['label', 'rules', 'name', 'children', 'popoverProps'],
        Te = ['errorType', 'rules', 'name', 'popoverProps', 'children'],
        Ge = {
          marginBlockStart: -5,
          marginBlockEnd: -5,
          marginInlineStart: 0,
          marginInlineEnd: 0,
        },
        ot = function (M) {
          var Se = M.inputProps,
            Ie = M.input,
            We = M.extra,
            lt = M.errorList,
            xe = M.popoverProps,
            Be = (0, fe.useState)(!1),
            st = (0, $e.Z)(Be, 2),
            ct = st[0],
            vt = st[1],
            pt = (0, fe.useState)([]),
            St = (0, $e.Z)(pt, 2),
            wt = St[0],
            Rt = St[1],
            xt = (0, fe.useContext)(R.ZP.ConfigContext),
            Zt = xt.getPrefixCls,
            Pt = Zt(),
            mt = Ke(''.concat(Pt, '-form-item-with-help')),
            zt = mt.wrapSSR,
            Ot = mt.hashId;
          (0, fe.useEffect)(
            function () {
              Se.validateStatus !== 'validating' && Rt(Se.errors);
            },
            [Se.errors, Se.validateStatus],
          );
          var Ct = (0, P.X)(wt.length < 1 ? !1 : ct, function (Qe) {
            Qe !== ct && vt(Qe);
          });
          return (0, U.jsx)(
            $.Z,
            (0, s.Z)(
              (0, s.Z)(
                (0, s.Z)(
                  {
                    trigger: (xe == null ? void 0 : xe.trigger) || 'focus',
                    placement:
                      (xe == null ? void 0 : xe.placement) || 'topRight',
                  },
                  Ct,
                ),
                {},
                {
                  getPopupContainer: xe == null ? void 0 : xe.getPopupContainer,
                  getTooltipContainer:
                    xe == null ? void 0 : xe.getTooltipContainer,
                  content: zt(
                    (0, U.jsxs)('div', {
                      className: ''
                        .concat(Pt, '-form-item-with-help ')
                        .concat(Ot),
                      children: [
                        Se.validateStatus === 'validating'
                          ? (0, U.jsx)(z.Z, {})
                          : null,
                        lt,
                      ],
                    }),
                  ),
                },
                xe,
              ),
              {},
              { children: (0, U.jsxs)('div', { children: [Ie, We] }) },
            ),
            'popover',
          );
        },
        Bt = function (M) {
          var Se = M.label,
            Ie = M.rules,
            We = M.name,
            lt = M.children,
            xe = M.popoverProps,
            Be = (0, ue.Z)(M, rt);
          return (0, U.jsx)(
            H.Z.Item,
            (0, s.Z)(
              (0, s.Z)(
                {
                  preserve: !1,
                  name: We,
                  rules: Ie,
                  hasFeedback: !0,
                  _internalItemRender: {
                    mark: 'pro_table_render',
                    render: function (ct, vt) {
                      return (0, U.jsx)(
                        ot,
                        (0, s.Z)({ inputProps: ct, popoverProps: xe }, vt),
                      );
                    },
                  },
                },
                Be,
              ),
              {},
              {
                style: (0, s.Z)(
                  (0, s.Z)({}, Ge),
                  Be == null ? void 0 : Be.style,
                ),
                children: lt,
              },
            ),
          );
        },
        J = function (M) {
          var Se = M.errorType,
            Ie = M.rules,
            We = M.name,
            lt = M.popoverProps,
            xe = M.children,
            Be = (0, ue.Z)(M, Te);
          return We && Ie != null && Ie.length && Se === 'popover'
            ? (0, U.jsx)(
                Bt,
                (0, s.Z)(
                  (0, s.Z)({ name: We, rules: Ie, popoverProps: lt }, Be),
                  {},
                  { children: xe },
                ),
              )
            : (0, U.jsx)(
                H.Z.Item,
                (0, s.Z)(
                  (0, s.Z)({ rules: Ie }, Be),
                  {},
                  {
                    style: (0, s.Z)((0, s.Z)({}, Ge), Be.style),
                    name: We,
                    children: xe,
                  },
                ),
              );
        };
    },
    99509: function (Ye, de, i) {
      'use strict';
      i.d(de, {
        X: function () {
          return qt;
        },
      });
      var ue = i(85893),
        s = i(67294),
        $e = i(63606),
        U = i(57132),
        z = i(86548),
        P = i(94184),
        R = i.n(P),
        $ = i(20640),
        H = i.n($),
        fe = i(48555),
        Ee = i(50344),
        d = i(8410),
        ve = i(21770),
        Ke = i(98423),
        rt = i(42550),
        Te = i(53124),
        Ge = i(74342),
        ot = i(15105),
        Bt = function (a, p) {
          var e = {};
          for (var t in a)
            Object.prototype.hasOwnProperty.call(a, t) &&
              p.indexOf(t) < 0 &&
              (e[t] = a[t]);
          if (a != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var n = 0, t = Object.getOwnPropertySymbols(a);
              n < t.length;
              n++
            )
              p.indexOf(t[n]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(a, t[n]) &&
                (e[t[n]] = a[t[n]]);
          return e;
        };
      const J = {
        border: 0,
        background: 'transparent',
        padding: 0,
        lineHeight: 'inherit',
        display: 'inline-block',
      };
      var M = s.forwardRef((a, p) => {
          const e = (v) => {
              const { keyCode: f } = v;
              f === ot.Z.ENTER && v.preventDefault();
            },
            t = (v) => {
              const { keyCode: f } = v,
                { onClick: y } = a;
              f === ot.Z.ENTER && y && y();
            },
            { style: n, noStyle: u, disabled: c } = a,
            r = Bt(a, ['style', 'noStyle', 'disabled']);
          let l = {};
          return (
            u || (l = Object.assign({}, J)),
            c && (l.pointerEvents = 'none'),
            (l = Object.assign(Object.assign({}, l), n)),
            s.createElement(
              'div',
              Object.assign({ role: 'button', tabIndex: 0, ref: p }, r, {
                onKeyDown: e,
                onKeyUp: t,
                style: l,
              }),
            )
          );
        }),
        Se = i(79370),
        Ie = i(83062),
        We = i(1413),
        lt = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z',
                },
              },
            ],
          },
          name: 'enter',
          theme: 'outlined',
        },
        xe = lt,
        Be = i(84089),
        st = function (p, e) {
          return s.createElement(
            Be.Z,
            (0, We.Z)((0, We.Z)({}, p), {}, { ref: e, icon: xe }),
          );
        };
      st.displayName = 'EnterOutlined';
      var ct = s.forwardRef(st),
        vt = i(56994),
        pt = i(96159),
        St = i(67968),
        wt = i(92138),
        Rt = i(47673),
        xt = i(49867);
      const Zt = (a, p, e, t) => {
          const { sizeMarginHeadingVerticalEnd: n, fontWeightStrong: u } = t;
          return {
            marginBottom: n,
            color: e,
            fontWeight: u,
            fontSize: a,
            lineHeight: p,
          };
        },
        Pt = (a) => {
          const p = [1, 2, 3, 4, 5],
            e = {};
          return (
            p.forEach((t) => {
              e[
                `
      h${t}&,
      div&-h${t},
      div&-h${t} > textarea,
      h${t}
    `
              ] = Zt(
                a[`fontSizeHeading${t}`],
                a[`lineHeightHeading${t}`],
                a.colorTextHeading,
                a,
              );
            }),
            e
          );
        },
        mt = (a) => {
          const { componentCls: p } = a;
          return {
            'a&, a': Object.assign(Object.assign({}, (0, xt.N)(a)), {
              textDecoration: a.linkDecoration,
              '&:active, &:hover': { textDecoration: a.linkHoverDecoration },
              [`&[disabled], &${p}-disabled`]: {
                color: a.colorTextDisabled,
                cursor: 'not-allowed',
                '&:active, &:hover': { color: a.colorTextDisabled },
                '&:active': { pointerEvents: 'none' },
              },
            }),
          };
        },
        zt = () => ({
          code: {
            margin: '0 0.2em',
            paddingInline: '0.4em',
            paddingBlock: '0.2em 0.1em',
            fontSize: '85%',
            background: 'rgba(150, 150, 150, 0.1)',
            border: '1px solid rgba(100, 100, 100, 0.2)',
            borderRadius: 3,
          },
          kbd: {
            margin: '0 0.2em',
            paddingInline: '0.4em',
            paddingBlock: '0.15em 0.1em',
            fontSize: '90%',
            background: 'rgba(150, 150, 150, 0.06)',
            border: '1px solid rgba(100, 100, 100, 0.2)',
            borderBottomWidth: 2,
            borderRadius: 3,
          },
          mark: { padding: 0, backgroundColor: wt.EV[2] },
          'u, ins': {
            textDecoration: 'underline',
            textDecorationSkipInk: 'auto',
          },
          's, del': { textDecoration: 'line-through' },
          strong: { fontWeight: 600 },
          'ul, ol': {
            marginInline: 0,
            marginBlock: '0 1em',
            padding: 0,
            li: {
              marginInline: '20px 0',
              marginBlock: 0,
              paddingInline: '4px 0',
              paddingBlock: 0,
            },
          },
          ul: { listStyleType: 'circle', ul: { listStyleType: 'disc' } },
          ol: { listStyleType: 'decimal' },
          'pre, blockquote': { margin: '1em 0' },
          pre: {
            padding: '0.4em 0.6em',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            background: 'rgba(150, 150, 150, 0.1)',
            border: '1px solid rgba(100, 100, 100, 0.2)',
            borderRadius: 3,
            code: {
              display: 'inline',
              margin: 0,
              padding: 0,
              fontSize: 'inherit',
              fontFamily: 'inherit',
              background: 'transparent',
              border: 0,
            },
          },
          blockquote: {
            paddingInline: '0.6em 0',
            paddingBlock: 0,
            borderInlineStart: '4px solid rgba(100, 100, 100, 0.2)',
            opacity: 0.85,
          },
        }),
        Ot = (a) => {
          const { componentCls: p } = a,
            t = (0, Rt.e5)(a).inputPaddingVertical + 1;
          return {
            '&-edit-content': {
              position: 'relative',
              'div&': {
                insetInlineStart: -a.paddingSM,
                marginTop: -t,
                marginBottom: `calc(1em - ${t}px)`,
              },
              [`${p}-edit-content-confirm`]: {
                position: 'absolute',
                insetInlineEnd: a.marginXS + 2,
                insetBlockEnd: a.marginXS,
                color: a.colorTextDescription,
                fontWeight: 'normal',
                fontSize: a.fontSize,
                fontStyle: 'normal',
                pointerEvents: 'none',
              },
              textarea: {
                margin: '0!important',
                MozTransition: 'none',
                height: '1em',
              },
            },
          };
        },
        Ct = (a) => ({
          '&-copy-success': {
            [`
    &,
    &:hover,
    &:focus`]: { color: a.colorSuccess },
          },
        }),
        Qe = () => ({
          [`
  a&-ellipsis,
  span&-ellipsis
  `]: { display: 'inline-block', maxWidth: '100%' },
          '&-single-line': { whiteSpace: 'nowrap' },
          '&-ellipsis-single-line': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            'a&, span&': { verticalAlign: 'bottom' },
          },
          '&-ellipsis-multiple-line': {
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          },
        }),
        ze = (a) => {
          const { componentCls: p, sizeMarginHeadingVerticalStart: e } = a;
          return {
            [p]: Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              {
                                color: a.colorText,
                                wordBreak: 'break-word',
                                lineHeight: a.lineHeight,
                                '&&-secondary': {
                                  color: a.colorTextDescription,
                                },
                                '&&-success': { color: a.colorSuccess },
                                '&&-warning': { color: a.colorWarning },
                                '&&-danger': {
                                  color: a.colorError,
                                  'a&:active, a&:focus': {
                                    color: a.colorErrorActive,
                                  },
                                  'a&:hover': { color: a.colorErrorHover },
                                },
                                '&&-disabled': {
                                  color: a.colorTextDisabled,
                                  cursor: 'not-allowed',
                                  userSelect: 'none',
                                },
                                [`
        div&,
        p
      `]: { marginBottom: '1em' },
                              },
                              Pt(a),
                            ),
                            {
                              [`
      & + h1&,
      & + h2&,
      & + h3&,
      & + h4&,
      & + h5&
      `]: { marginTop: e },
                              [`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]: {
                                [`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]: { marginTop: e },
                              },
                            },
                          ),
                          zt(),
                        ),
                        mt(a),
                      ),
                      {
                        [`
        ${p}-expand,
        ${p}-edit,
        ${p}-copy
      `]: Object.assign(Object.assign({}, (0, xt.N)(a)), {
                          marginInlineStart: a.marginXXS,
                        }),
                      },
                    ),
                    Ot(a),
                  ),
                  Ct(a),
                ),
                Qe(),
              ),
              { '&-rtl': { direction: 'rtl' } },
            ),
          };
        };
      var Jt = (0, St.Z)('Typography', (a) => [ze(a)], {
          sizeMarginHeadingVerticalStart: '1.2em',
          sizeMarginHeadingVerticalEnd: '0.5em',
        }),
        rn = (a) => {
          let {
            prefixCls: p,
            'aria-label': e,
            className: t,
            style: n,
            direction: u,
            maxLength: c,
            autoSize: r = !0,
            value: l,
            onSave: v,
            onCancel: f,
            onEnd: y,
            component: b,
            enterIcon: m = s.createElement(ct, null),
          } = a;
          const g = s.useRef(null),
            h = s.useRef(!1),
            x = s.useRef(),
            [K, Q] = s.useState(l);
          s.useEffect(() => {
            Q(l);
          }, [l]),
            s.useEffect(() => {
              if (g.current && g.current.resizableTextArea) {
                const { textArea: V } = g.current.resizableTextArea;
                V.focus();
                const { length: N } = V.value;
                V.setSelectionRange(N, N);
              }
            }, []);
          const W = (V) => {
              let { target: N } = V;
              Q(N.value.replace(/[\n\r]/g, ''));
            },
            I = () => {
              h.current = !0;
            },
            me = () => {
              h.current = !1;
            },
            te = (V) => {
              let { keyCode: N } = V;
              h.current || (x.current = N);
            },
            ye = () => {
              v(K.trim());
            },
            B = (V) => {
              let {
                keyCode: N,
                ctrlKey: le,
                altKey: Me,
                metaKey: Ue,
                shiftKey: ke,
              } = V;
              x.current === N &&
                !h.current &&
                !le &&
                !Me &&
                !Ue &&
                !ke &&
                (N === ot.Z.ENTER
                  ? (ye(), y == null || y())
                  : N === ot.Z.ESC && f());
            },
            w = () => {
              ye();
            },
            ae = b ? `${p}-${b}` : '',
            [X, q] = Jt(p),
            Z = R()(
              p,
              `${p}-edit-content`,
              { [`${p}-rtl`]: u === 'rtl' },
              t,
              ae,
              q,
            );
          return X(
            s.createElement(
              'div',
              { className: Z, style: n },
              s.createElement(vt.Z, {
                ref: g,
                maxLength: c,
                value: K,
                onChange: W,
                onKeyDown: te,
                onKeyUp: B,
                onCompositionStart: I,
                onCompositionEnd: me,
                onBlur: w,
                'aria-label': e,
                rows: 1,
                autoSize: r,
              }),
              m !== null
                ? (0, pt.Tm)(m, { className: `${p}-edit-content-confirm` })
                : null,
            ),
          );
        };
      function It(a, p) {
        return s.useMemo(() => {
          const e = !!a;
          return [
            e,
            Object.assign(
              Object.assign({}, p),
              e && typeof a == 'object' ? a : null,
            ),
          ];
        }, [a]);
      }
      var Nt = (a, p) => {
          const e = s.useRef(!1);
          s.useEffect(() => {
            e.current ? a() : (e.current = !0);
          }, p);
        },
        on = function (a, p) {
          var e = {};
          for (var t in a)
            Object.prototype.hasOwnProperty.call(a, t) &&
              p.indexOf(t) < 0 &&
              (e[t] = a[t]);
          if (a != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var n = 0, t = Object.getOwnPropertySymbols(a);
              n < t.length;
              n++
            )
              p.indexOf(t[n]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(a, t[n]) &&
                (e[t[n]] = a[t[n]]);
          return e;
        },
        Yt = s.forwardRef((a, p) => {
          var {
              prefixCls: e,
              component: t = 'article',
              className: n,
              setContentRef: u,
              children: c,
              direction: r,
            } = a,
            l = on(a, [
              'prefixCls',
              'component',
              'className',
              'setContentRef',
              'children',
              'direction',
            ]);
          const { getPrefixCls: v, direction: f } = s.useContext(Te.E_),
            y = r != null ? r : f;
          let b = p;
          u && (b = (0, rt.sQ)(p, u));
          const m = v('typography', e),
            [g, h] = Jt(m),
            x = R()(m, { [`${m}-rtl`]: y === 'rtl' }, n, h);
          return g(
            s.createElement(t, Object.assign({ className: x, ref: b }, l), c),
          );
        });
      function Qt(a) {
        const p = typeof a;
        return p === 'string' || p === 'number';
      }
      function Ht(a) {
        let p = 0;
        return (
          a.forEach((e) => {
            Qt(e) ? (p += String(e).length) : (p += 1);
          }),
          p
        );
      }
      function Oe(a, p) {
        let e = 0;
        const t = [];
        for (let n = 0; n < a.length; n += 1) {
          if (e === p) return t;
          const u = a[n],
            r = Qt(u) ? String(u).length : 1,
            l = e + r;
          if (l > p) {
            const v = p - e;
            return t.push(String(u).slice(0, v)), t;
          }
          t.push(u), (e = l);
        }
        return a;
      }
      const $t = 0,
        Lt = 1,
        Wt = 2,
        kt = 3,
        Vt = 4;
      var o = (a) => {
          let {
            enabledMeasure: p,
            children: e,
            text: t,
            width: n,
            fontSize: u,
            rows: c,
            onEllipsis: r,
          } = a;
          const [[l, v, f], y] = s.useState([0, 0, 0]),
            [b, m] = s.useState($t),
            [g, h] = s.useState(0),
            x = s.useRef(null),
            K = s.useRef(null),
            Q = s.useMemo(() => (0, Ee.Z)(t), [t]),
            W = s.useMemo(() => Ht(Q), [Q]),
            I = s.useMemo(
              () => (!p || b !== kt ? e(Q, !1) : e(Oe(Q, v), v < W)),
              [p, b, e, Q, v, W],
            );
          (0, d.Z)(() => {
            p && n && u && W && (m(Lt), y([0, Math.ceil(W / 2), W]));
          }, [p, n, u, t, W, c]),
            (0, d.Z)(() => {
              var B;
              b === Lt &&
                h(
                  ((B = x.current) === null || B === void 0
                    ? void 0
                    : B.offsetHeight) || 0,
                );
            }, [b]),
            (0, d.Z)(() => {
              var B, w;
              if (g) {
                if (b === Lt) {
                  const ae =
                      ((B = K.current) === null || B === void 0
                        ? void 0
                        : B.offsetHeight) || 0,
                    X = c * g;
                  ae <= X ? (m(Vt), r(!1)) : m(Wt);
                } else if (b === Wt)
                  if (l !== f) {
                    const ae =
                        ((w = K.current) === null || w === void 0
                          ? void 0
                          : w.offsetHeight) || 0,
                      X = c * g;
                    let q = l,
                      Z = f;
                    l === f - 1 ? (Z = l) : ae <= X ? (q = v) : (Z = v);
                    const V = Math.ceil((q + Z) / 2);
                    y([q, V, Z]);
                  } else m(kt), r(!0);
              }
            }, [b, l, f, c, g]);
          const me = { width: n, whiteSpace: 'normal', margin: 0, padding: 0 },
            te = (B, w, ae) =>
              s.createElement(
                'span',
                {
                  'aria-hidden': !0,
                  ref: w,
                  style: Object.assign(
                    {
                      position: 'fixed',
                      display: 'block',
                      left: 0,
                      top: 0,
                      zIndex: -9999,
                      visibility: 'hidden',
                      pointerEvents: 'none',
                      fontSize: Math.floor(u / 2) * 2,
                    },
                    ae,
                  ),
                },
                B,
              ),
            ye = (B, w) => {
              const ae = Oe(Q, B);
              return te(e(ae, !0), w, me);
            };
          return s.createElement(
            s.Fragment,
            null,
            I,
            p &&
              b !== kt &&
              b !== Vt &&
              s.createElement(
                s.Fragment,
                null,
                te('lg', x, { wordBreak: 'keep-all', whiteSpace: 'nowrap' }),
                b === Lt ? te(e(Q, !1), K, me) : ye(v, K),
              ),
          );
        },
        O = (a) => {
          let {
            enabledEllipsis: p,
            isEllipsis: e,
            children: t,
            tooltipProps: n,
          } = a;
          return !(n != null && n.title) || !p
            ? t
            : s.createElement(
                Ie.Z,
                Object.assign({ open: e ? void 0 : !1 }, n),
                t,
              );
        },
        C = function (a, p) {
          var e = {};
          for (var t in a)
            Object.prototype.hasOwnProperty.call(a, t) &&
              p.indexOf(t) < 0 &&
              (e[t] = a[t]);
          if (a != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var n = 0, t = Object.getOwnPropertySymbols(a);
              n < t.length;
              n++
            )
              p.indexOf(t[n]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(a, t[n]) &&
                (e[t[n]] = a[t[n]]);
          return e;
        };
      function j(a, p) {
        let {
            mark: e,
            code: t,
            underline: n,
            delete: u,
            strong: c,
            keyboard: r,
            italic: l,
          } = a,
          v = p;
        function f(y, b) {
          y && (v = s.createElement(b, {}, v));
        }
        return (
          f(c, 'strong'),
          f(n, 'u'),
          f(u, 'del'),
          f(t, 'code'),
          f(e, 'mark'),
          f(r, 'kbd'),
          f(l, 'i'),
          v
        );
      }
      function Y(a, p, e) {
        return a === !0 || a === void 0 ? p : a || (e && p);
      }
      function ee(a) {
        return a === !1 ? [!1, !1] : Array.isArray(a) ? a : [a];
      }
      const F = '...';
      var ce = s.forwardRef((a, p) => {
          var e, t, n;
          const {
              prefixCls: u,
              className: c,
              style: r,
              type: l,
              disabled: v,
              children: f,
              ellipsis: y,
              editable: b,
              copyable: m,
              component: g,
              title: h,
            } = a,
            x = C(a, [
              'prefixCls',
              'className',
              'style',
              'type',
              'disabled',
              'children',
              'ellipsis',
              'editable',
              'copyable',
              'component',
              'title',
            ]),
            { getPrefixCls: K, direction: Q } = s.useContext(Te.E_),
            W = (0, Ge.E)('Text')[0],
            I = s.useRef(null),
            me = s.useRef(null),
            te = K('typography', u),
            ye = (0, Ke.Z)(x, [
              'mark',
              'code',
              'delete',
              'underline',
              'strong',
              'keyboard',
              'italic',
            ]),
            [B, w] = It(b),
            [ae, X] = (0, ve.Z)(!1, { value: w.editing }),
            { triggerType: q = ['icon'] } = w,
            Z = (E) => {
              var L;
              E && ((L = w.onStart) === null || L === void 0 || L.call(w)),
                X(E);
            };
          Nt(() => {
            var E;
            ae || (E = me.current) === null || E === void 0 || E.focus();
          }, [ae]);
          const V = (E) => {
              E == null || E.preventDefault(), Z(!0);
            },
            N = (E) => {
              var L;
              (L = w.onChange) === null || L === void 0 || L.call(w, E), Z(!1);
            },
            le = () => {
              var E;
              (E = w.onCancel) === null || E === void 0 || E.call(w), Z(!1);
            },
            [Me, Ue] = It(m),
            [ke, Ve] = s.useState(!1),
            qe = s.useRef(),
            Mt = {};
          Ue.format && (Mt.format = Ue.format);
          const gt = () => {
              window.clearTimeout(qe.current);
            },
            _ = (E) => {
              var L;
              E == null || E.preventDefault(),
                E == null || E.stopPropagation(),
                H()(Ue.text || String(f) || '', Mt),
                Ve(!0),
                gt(),
                (qe.current = window.setTimeout(() => {
                  Ve(!1);
                }, 3e3)),
                (L = Ue.onCopy) === null || L === void 0 || L.call(Ue, E);
            };
          s.useEffect(() => gt, []);
          const [Ze, _e] = s.useState(!1),
            [je, bt] = s.useState(!1),
            [jt, Tt] = s.useState(!1),
            [Dt, sn] = s.useState(!1),
            [_t, cn] = s.useState(!1),
            [Ft, dn] = s.useState(!0),
            [et, k] = It(y, { expandable: !1 }),
            Pe = et && !jt,
            { rows: tt = 1 } = k,
            en = s.useMemo(
              () =>
                !Pe ||
                k.suffix !== void 0 ||
                k.onEllipsis ||
                k.expandable ||
                B ||
                Me,
              [Pe, k, B, Me],
            );
          (0, d.Z)(() => {
            et &&
              !en &&
              (_e((0, Se.G)('webkitLineClamp')), bt((0, Se.G)('textOverflow')));
          }, [en, et]);
          const He = s.useMemo(
              () => (en ? !1 : tt === 1 ? je : Ze),
              [en, je, Ze],
            ),
            yt = Pe && (He ? _t : Dt),
            ut = Pe && tt === 1 && He,
            At = Pe && tt > 1 && He,
            gn = (E) => {
              var L;
              Tt(!0), (L = k.onExpand) === null || L === void 0 || L.call(k, E);
            },
            [Sn, nt] = s.useState(0),
            [xn, Gt] = s.useState(0),
            Xt = (E, L) => {
              let { offsetWidth: De } = E;
              var Je;
              nt(De),
                Gt(
                  parseInt(
                    (Je = window.getComputedStyle) === null || Je === void 0
                      ? void 0
                      : Je.call(window, L).fontSize,
                    10,
                  ) || 0,
                );
            },
            un = (E) => {
              var L;
              sn(E),
                Dt !== E &&
                  ((L = k.onEllipsis) === null || L === void 0 || L.call(k, E));
            };
          s.useEffect(() => {
            const E = I.current;
            if (et && He && E) {
              const L = At
                ? E.offsetHeight < E.scrollHeight
                : E.offsetWidth < E.scrollWidth;
              _t !== L && cn(L);
            }
          }, [et, He, f, At, Ft]),
            s.useEffect(() => {
              const E = I.current;
              if (
                typeof IntersectionObserver == 'undefined' ||
                !E ||
                !He ||
                !Pe
              )
                return;
              const L = new IntersectionObserver(() => {
                dn(!!E.offsetParent);
              });
              return (
                L.observe(E),
                () => {
                  L.disconnect();
                }
              );
            }, [He, Pe]);
          let ft = {};
          k.tooltip === !0
            ? (ft = { title: (e = w.text) !== null && e !== void 0 ? e : f })
            : s.isValidElement(k.tooltip)
            ? (ft = { title: k.tooltip })
            : typeof k.tooltip == 'object'
            ? (ft = Object.assign(
                { title: (t = w.text) !== null && t !== void 0 ? t : f },
                k.tooltip,
              ))
            : (ft = { title: k.tooltip });
          const tn = s.useMemo(() => {
            const E = (L) => ['string', 'number'].includes(typeof L);
            if (!(!et || He)) {
              if (E(w.text)) return w.text;
              if (E(f)) return f;
              if (E(h)) return h;
              if (E(ft.title)) return ft.title;
            }
          }, [et, He, h, ft.title, yt]);
          if (ae)
            return s.createElement(rn, {
              value:
                (n = w.text) !== null && n !== void 0
                  ? n
                  : typeof f == 'string'
                  ? f
                  : '',
              onSave: N,
              onCancel: le,
              onEnd: w.onEnd,
              prefixCls: te,
              className: c,
              style: r,
              direction: Q,
              component: g,
              maxLength: w.maxLength,
              autoSize: w.autoSize,
              enterIcon: w.enterIcon,
            });
          const bn = () => {
              const { expandable: E, symbol: L } = k;
              if (!E) return null;
              let De;
              return (
                L ? (De = L) : (De = W.expand),
                s.createElement(
                  'a',
                  {
                    key: 'expand',
                    className: `${te}-expand`,
                    onClick: gn,
                    'aria-label': W.expand,
                  },
                  De,
                )
              );
            },
            nn = () => {
              if (!B) return;
              const { icon: E, tooltip: L } = w,
                De = (0, Ee.Z)(L)[0] || W.edit,
                Je = typeof De == 'string' ? De : '';
              return q.includes('icon')
                ? s.createElement(
                    Ie.Z,
                    { key: 'edit', title: L === !1 ? '' : De },
                    s.createElement(
                      M,
                      {
                        ref: me,
                        className: `${te}-edit`,
                        onClick: V,
                        'aria-label': Je,
                      },
                      E || s.createElement(z.Z, { role: 'button' }),
                    ),
                  )
                : null;
            },
            yn = () => {
              if (!Me) return;
              const { tooltips: E, icon: L } = Ue,
                De = ee(E),
                Je = ee(L),
                Ut = ke ? Y(De[1], W.copied) : Y(De[0], W.copy),
                an = ke ? W.copied : W.copy,
                hn = typeof Ut == 'string' ? Ut : an;
              return s.createElement(
                Ie.Z,
                { key: 'copy', title: Ut },
                s.createElement(
                  M,
                  {
                    className: R()(`${te}-copy`, ke && `${te}-copy-success`),
                    onClick: _,
                    'aria-label': hn,
                  },
                  ke
                    ? Y(Je[1], s.createElement($e.Z, null), !0)
                    : Y(Je[0], s.createElement(U.Z, null), !0),
                ),
              );
            },
            fn = (E) => [E && bn(), nn(), yn()],
            vn = (E) => [
              E &&
                s.createElement(
                  'span',
                  { 'aria-hidden': !0, key: 'ellipsis' },
                  F,
                ),
              k.suffix,
              fn(E),
            ];
          return s.createElement(
            fe.Z,
            { onResize: Xt, disabled: !Pe || He },
            (E) =>
              s.createElement(
                O,
                { tooltipProps: ft, enabledEllipsis: Pe, isEllipsis: yt },
                s.createElement(
                  Yt,
                  Object.assign(
                    {
                      className: R()(
                        {
                          [`${te}-${l}`]: l,
                          [`${te}-disabled`]: v,
                          [`${te}-ellipsis`]: et,
                          [`${te}-single-line`]: Pe && tt === 1,
                          [`${te}-ellipsis-single-line`]: ut,
                          [`${te}-ellipsis-multiple-line`]: At,
                        },
                        c,
                      ),
                      prefixCls: u,
                      style: Object.assign(Object.assign({}, r), {
                        WebkitLineClamp: At ? tt : void 0,
                      }),
                      component: g,
                      ref: (0, rt.sQ)(E, I, p),
                      direction: Q,
                      onClick: q.includes('text') ? V : void 0,
                      'aria-label': tn == null ? void 0 : tn.toString(),
                      title: h,
                    },
                    ye,
                  ),
                  s.createElement(
                    o,
                    {
                      enabledMeasure: Pe && !He,
                      text: f,
                      rows: tt,
                      width: Sn,
                      fontSize: xn,
                      onEllipsis: un,
                    },
                    (L, De) => {
                      let Je = L;
                      return (
                        L.length &&
                          De &&
                          tn &&
                          (Je = s.createElement(
                            'span',
                            { key: 'show-content', 'aria-hidden': !0 },
                            Je,
                          )),
                        j(a, s.createElement(s.Fragment, null, Je, vn(De)))
                      );
                    },
                  ),
                ),
              ),
          );
        }),
        we = function (a, p) {
          var e = {};
          for (var t in a)
            Object.prototype.hasOwnProperty.call(a, t) &&
              p.indexOf(t) < 0 &&
              (e[t] = a[t]);
          if (a != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var n = 0, t = Object.getOwnPropertySymbols(a);
              n < t.length;
              n++
            )
              p.indexOf(t[n]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(a, t[n]) &&
                (e[t[n]] = a[t[n]]);
          return e;
        },
        Re = s.forwardRef((a, p) => {
          var { ellipsis: e, rel: t } = a,
            n = we(a, ['ellipsis', 'rel']);
          const u = Object.assign(Object.assign({}, n), {
            rel:
              t === void 0 && n.target === '_blank' ? 'noopener noreferrer' : t,
          });
          return (
            delete u.navigate,
            s.createElement(
              ce,
              Object.assign({}, u, { ref: p, ellipsis: !!e, component: 'a' }),
            )
          );
        }),
        G = s.forwardRef((a, p) =>
          s.createElement(
            ce,
            Object.assign({ ref: p }, a, { component: 'div' }),
          ),
        ),
        T = function (a, p) {
          var e = {};
          for (var t in a)
            Object.prototype.hasOwnProperty.call(a, t) &&
              p.indexOf(t) < 0 &&
              (e[t] = a[t]);
          if (a != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var n = 0, t = Object.getOwnPropertySymbols(a);
              n < t.length;
              n++
            )
              p.indexOf(t[n]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(a, t[n]) &&
                (e[t[n]] = a[t[n]]);
          return e;
        };
      const he = (a, p) => {
        var { ellipsis: e } = a,
          t = T(a, ['ellipsis']);
        const n = s.useMemo(
          () =>
            e && typeof e == 'object'
              ? (0, Ke.Z)(e, ['expandable', 'rows'])
              : e,
          [e],
        );
        return s.createElement(
          ce,
          Object.assign({ ref: p }, t, { ellipsis: n, component: 'span' }),
        );
      };
      var oe = s.forwardRef(he),
        ne = function (a, p) {
          var e = {};
          for (var t in a)
            Object.prototype.hasOwnProperty.call(a, t) &&
              p.indexOf(t) < 0 &&
              (e[t] = a[t]);
          if (a != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var n = 0, t = Object.getOwnPropertySymbols(a);
              n < t.length;
              n++
            )
              p.indexOf(t[n]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(a, t[n]) &&
                (e[t[n]] = a[t[n]]);
          return e;
        };
      const D = [1, 2, 3, 4, 5];
      var pe = s.forwardRef((a, p) => {
        const { level: e = 1 } = a,
          t = ne(a, ['level']);
        let n;
        return (
          D.includes(e) ? (n = `h${e}`) : (n = 'h1'),
          s.createElement(ce, Object.assign({ ref: p }, t, { component: n }))
        );
      });
      const A = Yt;
      (A.Text = oe), (A.Link = Re), (A.Title = pe), (A.Paragraph = G);
      var ie = A,
        Le = function (p) {
          var e;
          return !!(
            (!(p == null || (e = p.valueType) === null || e === void 0) &&
              e.toString().startsWith('date')) ||
            (p == null ? void 0 : p.valueType) === 'select' ||
            (p != null && p.valueEnum)
          );
        },
        dt = function (p) {
          var e;
          return ((e = p.ellipsis) === null || e === void 0
            ? void 0
            : e.showTitle) === !1
            ? !1
            : p.ellipsis;
        },
        qt = function (p, e, t) {
          if (e.copyable || e.ellipsis) {
            var n = e.copyable && t ? { text: t, tooltips: ['', ''] } : void 0,
              u = Le(e),
              c =
                dt(e) && t
                  ? {
                      tooltip:
                        (e == null ? void 0 : e.tooltip) !== !1 && u
                          ? (0, ue.jsx)('div', {
                              className: 'pro-table-tooltip-text',
                              children: p,
                            })
                          : t,
                    }
                  : !1;
            return (0, ue.jsx)(ie.Text, {
              style: { width: '100%', margin: 0, padding: 0 },
              title: '',
              copyable: n,
              ellipsis: c,
              children: p,
            });
          }
          return p;
        };
    },
    2026: function (Ye, de, i) {
      'use strict';
      i.d(de, {
        w: function () {
          return s;
        },
      });
      var ue = i(22270),
        s = function (U, z, P) {
          return z === void 0 ? U : (0, ue.h)(U, z, P);
        };
    },
    51544: function (Ye, de, i) {
      'use strict';
      i.d(de, {
        aX: function () {
          return Vt;
        },
        cx: function () {
          return $t;
        },
        sN: function () {
          return Oe;
        },
        CB: function () {
          return mn;
        },
      });
      var ue = i(74902),
        s = i(74165),
        $e = i(84506),
        U = i(15861),
        z = i(97685),
        P = i(4942),
        R = i(91),
        $ = i(1413),
        H = i(71002),
        fe = i(85893),
        Ee = i(50888),
        d = i(71060),
        ve = i(27790),
        Ke = i(80442),
        rt = i(21640),
        Te = i(94184),
        Ge = i.n(Te),
        ot = i(21770),
        Bt = i(15105),
        J = i(67294),
        it = i(98423),
        M = i(53124),
        Se = i(55241),
        Ie = i(96159),
        We = i(71577),
        lt = i(5214),
        xe = i(86743),
        Be = i(74342),
        st = i(24457),
        ct = i(81643),
        vt = i(60590),
        pt = i(67968);
      const St = (o) => {
        const {
          componentCls: S,
          iconCls: O,
          zIndexPopup: C,
          colorText: j,
          colorWarning: Y,
          marginXS: ee,
          fontSize: F,
          fontWeightStrong: be,
          lineHeight: ce,
        } = o;
        return {
          [S]: {
            zIndex: C,
            [`${S}-inner-content`]: { color: j },
            [`${S}-message`]: {
              position: 'relative',
              marginBottom: ee,
              color: j,
              fontSize: F,
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'start',
              [`> ${S}-message-icon ${O}`]: {
                color: Y,
                fontSize: F,
                flex: 'none',
                lineHeight: 1,
                paddingTop: (Math.round(F * ce) - F) / 2,
              },
              '&-title': { flex: 'auto', marginInlineStart: ee },
              '&-title-only': { fontWeight: be },
            },
            [`${S}-description`]: {
              position: 'relative',
              marginInlineStart: F + ee,
              marginBottom: ee,
              color: j,
              fontSize: F,
            },
            [`${S}-buttons`]: {
              textAlign: 'end',
              button: { marginInlineStart: ee },
            },
          },
        };
      };
      var wt = (0, pt.Z)(
          'Popconfirm',
          (o) => St(o),
          (o) => {
            const { zIndexPopupBase: S } = o;
            return { zIndexPopup: S + 60 };
          },
        ),
        Rt = function (o, S) {
          var O = {};
          for (var C in o)
            Object.prototype.hasOwnProperty.call(o, C) &&
              S.indexOf(C) < 0 &&
              (O[C] = o[C]);
          if (o != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var j = 0, C = Object.getOwnPropertySymbols(o);
              j < C.length;
              j++
            )
              S.indexOf(C[j]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(o, C[j]) &&
                (O[C[j]] = o[C[j]]);
          return O;
        };
      const xt = (o) => {
        const {
            prefixCls: S,
            okButtonProps: O,
            cancelButtonProps: C,
            title: j,
            description: Y,
            cancelText: ee,
            okText: F,
            okType: be = 'primary',
            icon: ce = J.createElement(rt.Z, null),
            showCancel: we = !0,
            close: Ne,
            onConfirm: Re,
            onCancel: re,
          } = o,
          { getPrefixCls: G } = J.useContext(M.E_);
        return J.createElement(
          Be.Z,
          { componentName: 'Popconfirm', defaultLocale: st.Z.Popconfirm },
          (T) =>
            J.createElement(
              'div',
              { className: `${S}-inner-content` },
              J.createElement(
                'div',
                { className: `${S}-message` },
                ce &&
                  J.createElement(
                    'span',
                    { className: `${S}-message-icon` },
                    ce,
                  ),
                J.createElement(
                  'div',
                  {
                    className: Ge()(`${S}-message-title`, {
                      [`${S}-message-title-only`]: !!Y,
                    }),
                  },
                  (0, ct.Z)(j),
                ),
              ),
              Y &&
                J.createElement(
                  'div',
                  { className: `${S}-description` },
                  (0, ct.Z)(Y),
                ),
              J.createElement(
                'div',
                { className: `${S}-buttons` },
                we &&
                  J.createElement(
                    We.Z,
                    Object.assign({ onClick: re, size: 'small' }, C),
                    ee != null ? ee : T.cancelText,
                  ),
                J.createElement(
                  xe.Z,
                  {
                    buttonProps: Object.assign(
                      Object.assign({ size: 'small' }, (0, lt.n)(be)),
                      O,
                    ),
                    actionFn: Re,
                    close: Ne,
                    prefixCls: G('btn'),
                    quitOnNullishReturnValue: !0,
                    emitEvent: !0,
                  },
                  F != null ? F : T.okText,
                ),
              ),
            ),
        );
      };
      function Zt(o) {
        const { prefixCls: S, placement: O, className: C, style: j } = o,
          Y = Rt(o, ['prefixCls', 'placement', 'className', 'style']),
          { getPrefixCls: ee } = J.useContext(M.E_),
          F = ee('popconfirm', S),
          [be] = wt(F);
        return be(
          J.createElement(vt.ZP, {
            placement: O,
            className: Ge()(F, C),
            style: j,
            content: J.createElement(xt, Object.assign({ prefixCls: F }, Y)),
          }),
        );
      }
      var Pt = function (o, S) {
        var O = {};
        for (var C in o)
          Object.prototype.hasOwnProperty.call(o, C) &&
            S.indexOf(C) < 0 &&
            (O[C] = o[C]);
        if (o != null && typeof Object.getOwnPropertySymbols == 'function')
          for (
            var j = 0, C = Object.getOwnPropertySymbols(o);
            j < C.length;
            j++
          )
            S.indexOf(C[j]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(o, C[j]) &&
              (O[C[j]] = o[C[j]]);
        return O;
      };
      const mt = J.forwardRef((o, S) => {
        const { getPrefixCls: O } = J.useContext(M.E_),
          [C, j] = (0, ot.Z)(!1, {
            value: o.open,
            defaultValue: o.defaultOpen,
          }),
          Y = (A, ie) => {
            var Le;
            j(A, !0),
              (Le = o.onOpenChange) === null ||
                Le === void 0 ||
                Le.call(o, A, ie);
          },
          ee = (A) => {
            Y(!1, A);
          },
          F = (A) => {
            var ie;
            return (ie = o.onConfirm) === null || ie === void 0
              ? void 0
              : ie.call(void 0, A);
          },
          be = (A) => {
            var ie;
            Y(!1, A),
              (ie = o.onCancel) === null || ie === void 0 || ie.call(void 0, A);
          },
          ce = (A) => {
            A.keyCode === Bt.Z.ESC && C && Y(!1, A);
          },
          we = (A) => {
            const { disabled: ie = !1 } = o;
            ie || Y(A);
          },
          {
            prefixCls: Ne,
            placement: Re = 'top',
            trigger: re = 'click',
            okType: G = 'primary',
            icon: T = J.createElement(rt.Z, null),
            children: he,
            overlayClassName: oe,
          } = o,
          ne = Pt(o, [
            'prefixCls',
            'placement',
            'trigger',
            'okType',
            'icon',
            'children',
            'overlayClassName',
          ]),
          D = O('popconfirm', Ne),
          Ce = Ge()(D, oe),
          [pe] = wt(D);
        return pe(
          J.createElement(
            Se.Z,
            Object.assign({}, (0, it.Z)(ne, ['title']), {
              trigger: re,
              placement: Re,
              onOpenChange: we,
              open: C,
              ref: S,
              overlayClassName: Ce,
              content: J.createElement(
                xt,
                Object.assign({ okType: G, icon: T }, o, {
                  prefixCls: D,
                  close: ee,
                  onConfirm: F,
                  onCancel: be,
                }),
              ),
              'data-popover-inject': !0,
            }),
            (0, Ie.Tm)(he, {
              onKeyDown: (A) => {
                var ie, Le;
                J.isValidElement(he) &&
                  ((Le = he == null ? void 0 : (ie = he.props).onKeyDown) ===
                    null ||
                    Le === void 0 ||
                    Le.call(ie, A)),
                  ce(A);
              },
            }),
          ),
        );
      });
      mt._InternalPanelDoNotUseOrYouWillBeFired = Zt;
      var zt = mt,
        Ot = i(84164),
        Ct = i(60869),
        Qe = i(94787),
        ze = i(20059),
        Jt = i(45520),
        Xe = i(48171),
        rn = i(10178),
        It = i(41036),
        Et = i(27068),
        Nt = i(26369),
        on = i(92210),
        ln = ['map_row_parentKey'],
        Yt = ['map_row_parentKey', 'map_row_key'],
        Qt = ['map_row_key'],
        Ht = function (S) {
          return (ve.ZP.warn || ve.ZP.warning)(S);
        },
        Oe = function (S) {
          return Array.isArray(S) ? S.join(',') : S;
        };
      function $t(o, S) {
        var O,
          C = o.getRowKey,
          j = o.row,
          Y = o.data,
          ee = o.childrenColumnName,
          F = ee === void 0 ? 'children' : ee,
          be = (O = Oe(o.key)) === null || O === void 0 ? void 0 : O.toString(),
          ce = new Map();
        function we(Re, re, G) {
          Re.forEach(function (T, he) {
            var oe = (G || 0) * 10 + he,
              ne = C(T, oe).toString();
            T && (0, H.Z)(T) === 'object' && F in T && we(T[F] || [], ne, oe);
            var D = (0, $.Z)(
              (0, $.Z)({}, T),
              {},
              { map_row_key: ne, children: void 0, map_row_parentKey: re },
            );
            delete D.children, re || delete D.map_row_parentKey, ce.set(ne, D);
          });
        }
        S === 'top' && ce.set(be, (0, $.Z)((0, $.Z)({}, ce.get(be)), j)),
          we(Y),
          S === 'update' && ce.set(be, (0, $.Z)((0, $.Z)({}, ce.get(be)), j)),
          S === 'delete' && ce.delete(be);
        var Ne = function (re) {
          var G = new Map(),
            T = [],
            he = function () {
              var ne =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : !1;
              re.forEach(function (D) {
                if (D.map_row_parentKey && !D.map_row_key) {
                  var Ce = D.map_row_parentKey,
                    pe = (0, R.Z)(D, ln);
                  if ((G.has(Ce) || G.set(Ce, []), ne)) {
                    var A;
                    (A = G.get(Ce)) === null || A === void 0 || A.push(pe);
                  }
                }
              });
            };
          return (
            he(S === 'top'),
            re.forEach(function (oe) {
              if (oe.map_row_parentKey && oe.map_row_key) {
                var ne,
                  D = oe.map_row_parentKey,
                  Ce = oe.map_row_key,
                  pe = (0, R.Z)(oe, Yt);
                G.has(Ce) && (pe[F] = G.get(Ce)),
                  G.has(D) || G.set(D, []),
                  (ne = G.get(D)) === null || ne === void 0 || ne.push(pe);
              }
            }),
            he(S === 'update'),
            re.forEach(function (oe) {
              if (!oe.map_row_parentKey) {
                var ne = oe.map_row_key,
                  D = (0, R.Z)(oe, Qt);
                if (ne && G.has(ne)) {
                  var Ce = (0, $.Z)(
                    (0, $.Z)({}, D),
                    {},
                    (0, P.Z)({}, F, G.get(ne)),
                  );
                  T.push(Ce);
                  return;
                }
                T.push(D);
              }
            }),
            T
          );
        };
        return Ne(ce);
      }
      function Lt(o, S) {
        var O = o.recordKey,
          C = o.onSave,
          j = o.row,
          Y = o.children,
          ee = o.newLineConfig,
          F = o.editorType,
          be = o.tableName,
          ce = (0, J.useContext)(It.J),
          we = Ke.Z.useFormInstance(),
          Ne = (0, Ct.Z)(!1),
          Re = (0, z.Z)(Ne, 2),
          re = Re[0],
          G = Re[1],
          T = (0, Xe.J)(
            (0, U.Z)(
              (0, s.Z)().mark(function he() {
                var oe, ne, D, Ce, pe, A, ie, Le, dt;
                return (0, s.Z)().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            (ne = F === 'Map'),
                            (D = [be, Array.isArray(O) ? O[0] : O]
                              .map(function (p) {
                                return p == null ? void 0 : p.toString();
                              })
                              .flat(1)
                              .filter(Boolean)),
                            G(!0),
                            (a.next = 6),
                            we.validateFields(D, { recursive: !0 })
                          );
                        case 6:
                          return (
                            (Ce =
                              ((oe = ce.getFieldFormatValue) === null ||
                              oe === void 0
                                ? void 0
                                : oe.call(ce, D)) || we.getFieldValue(D)),
                            Array.isArray(O) &&
                              O.length > 1 &&
                              ((pe = (0, $e.Z)(O)),
                              (A = pe.slice(1)),
                              (ie = (0, Qe.default)(Ce, A)),
                              (0, ze.Z)(Ce, A, ie)),
                            (Le = ne ? (0, ze.Z)({}, D, Ce, !0) : Ce),
                            (a.next = 11),
                            C == null
                              ? void 0
                              : C(O, (0, on.T)({}, j, Le), j, ee)
                          );
                        case 11:
                          return (dt = a.sent), G(!1), a.abrupt('return', dt);
                        case 16:
                          throw (
                            ((a.prev = 16),
                            (a.t0 = a.catch(0)),
                            console.log(a.t0),
                            G(!1),
                            a.t0)
                          );
                        case 21:
                        case 'end':
                          return a.stop();
                      }
                  },
                  he,
                  null,
                  [[0, 16]],
                );
              }),
            ),
          );
        return (
          (0, J.useImperativeHandle)(S, function () {
            return { save: T };
          }),
          (0, fe.jsxs)(
            'a',
            {
              onClick: (function () {
                var he = (0, U.Z)(
                  (0, s.Z)().mark(function ne(D) {
                    return (0, s.Z)().wrap(
                      function (pe) {
                        for (;;)
                          switch ((pe.prev = pe.next)) {
                            case 0:
                              return (
                                D.stopPropagation(),
                                D.preventDefault(),
                                (pe.prev = 2),
                                (pe.next = 5),
                                T()
                              );
                            case 5:
                              pe.next = 9;
                              break;
                            case 7:
                              (pe.prev = 7), (pe.t0 = pe.catch(2));
                            case 9:
                            case 'end':
                              return pe.stop();
                          }
                      },
                      ne,
                      null,
                      [[2, 7]],
                    );
                  }),
                );
                function oe(ne) {
                  return he.apply(this, arguments);
                }
                return oe;
              })(),
              children: [
                re
                  ? (0, fe.jsx)(Ee.Z, { style: { marginInlineEnd: 8 } })
                  : null,
                Y || '\u4FDD\u5B58',
              ],
            },
            'save',
          )
        );
      }
      var Wt = function (S) {
          var O = S.recordKey,
            C = S.onDelete,
            j = S.row,
            Y = S.children,
            ee = S.deletePopconfirmMessage,
            F = (0, Ct.Z)(function () {
              return !1;
            }),
            be = (0, z.Z)(F, 2),
            ce = be[0],
            we = be[1],
            Ne = (0, Xe.J)(
              (0, U.Z)(
                (0, s.Z)().mark(function Re() {
                  var re;
                  return (0, s.Z)().wrap(
                    function (T) {
                      for (;;)
                        switch ((T.prev = T.next)) {
                          case 0:
                            return (
                              (T.prev = 0),
                              we(!0),
                              (T.next = 4),
                              C == null ? void 0 : C(O, j)
                            );
                          case 4:
                            return (
                              (re = T.sent), we(!1), T.abrupt('return', re)
                            );
                          case 9:
                            return (
                              (T.prev = 9),
                              (T.t0 = T.catch(0)),
                              console.log(T.t0),
                              we(!1),
                              T.abrupt('return', null)
                            );
                          case 14:
                          case 'end':
                            return T.stop();
                        }
                    },
                    Re,
                    null,
                    [[0, 9]],
                  );
                }),
              ),
            );
          return Y !== !1
            ? (0, fe.jsx)(
                zt,
                {
                  title: ee,
                  onConfirm: function () {
                    return Ne();
                  },
                  children: (0, fe.jsxs)('a', {
                    children: [
                      ce
                        ? (0, fe.jsx)(Ee.Z, { style: { marginInlineEnd: 8 } })
                        : null,
                      Y || '\u5220\u9664',
                    ],
                  }),
                },
                'delete',
              )
            : null;
        },
        kt = function (S) {
          var O = S.recordKey,
            C = S.tableName,
            j = S.newLineConfig,
            Y = S.editorType,
            ee = S.onCancel,
            F = S.cancelEditable,
            be = S.row,
            ce = S.cancelText,
            we = (0, J.useContext)(It.J),
            Ne = Ke.Z.useFormInstance();
          return (0, fe.jsx)(
            'a',
            {
              onClick: (function () {
                var Re = (0, U.Z)(
                  (0, s.Z)().mark(function G(T) {
                    var he, oe, ne, D, Ce, pe;
                    return (0, s.Z)().wrap(function (ie) {
                      for (;;)
                        switch ((ie.prev = ie.next)) {
                          case 0:
                            return (
                              T.stopPropagation(),
                              T.preventDefault(),
                              (oe = Y === 'Map'),
                              (ne = [C, O].flat(1).filter(Boolean)),
                              (D =
                                ((he = we.getFieldFormatValue) === null ||
                                he === void 0
                                  ? void 0
                                  : he.call(we, ne)) || Ne.getFieldValue(ne)),
                              (Ce = oe ? (0, ze.Z)({}, ne, D) : D),
                              (ie.next = 8),
                              ee == null ? void 0 : ee(O, Ce, be, j)
                            );
                          case 8:
                            return (
                              (pe = ie.sent),
                              F(O),
                              Ne.setFieldsValue(
                                (0, P.Z)(
                                  {},
                                  O,
                                  oe ? (0, Qe.default)(be, ne) : be,
                                ),
                              ),
                              ie.abrupt('return', pe)
                            );
                          case 12:
                          case 'end':
                            return ie.stop();
                        }
                    }, G);
                  }),
                );
                function re(G) {
                  return Re.apply(this, arguments);
                }
                return re;
              })(),
              children: ce || '\u53D6\u6D88',
            },
            'cancel',
          );
        };
      function Vt(o, S) {
        var O = S.recordKey,
          C = S.newLineConfig,
          j = S.saveText,
          Y = S.deleteText,
          ee = (0, J.forwardRef)(Lt),
          F = (0, J.createRef)();
        return {
          save: (0, fe.jsx)(
            ee,
            (0, $.Z)((0, $.Z)({}, S), {}, { row: o, ref: F, children: j }),
            'save' + O,
          ),
          saveRef: F,
          delete:
            (C == null ? void 0 : C.options.recordKey) !== O
              ? (0, fe.jsx)(
                  Wt,
                  (0, $.Z)((0, $.Z)({}, S), {}, { row: o, children: Y }),
                  'delete' + O,
                )
              : void 0,
          cancel: (0, fe.jsx)(
            kt,
            (0, $.Z)((0, $.Z)({}, S), {}, { row: o }),
            'cancel' + O,
          ),
        };
      }
      function mn(o) {
        var S = (0, J.useState)(void 0),
          O = (0, z.Z)(S, 2),
          C = O[0],
          j = O[1],
          Y = (0, J.useRef)(new Map()),
          ee = (0, J.useRef)(void 0);
        (0, Et.Au)(
          function () {
            var c = new Map(),
              r = function l(v, f) {
                v == null ||
                  v.forEach(function (y, b) {
                    var m,
                      g = f == null ? b.toString() : f + '_' + b.toString();
                    c.set(g, Oe(o.getRowKey(y, -1))),
                      c.set(
                        (m = Oe(o.getRowKey(y, -1))) === null || m === void 0
                          ? void 0
                          : m.toString(),
                        g,
                      ),
                      o.childrenColumnName &&
                        y[o.childrenColumnName] &&
                        l(y[o.childrenColumnName], g);
                  });
              };
            r(o.dataSource), (Y.current = c);
          },
          [o.dataSource],
        ),
          (ee.current = C);
        var F = o.type || 'single',
          be = (0, Ot.Z)(o.dataSource, 'children', o.getRowKey),
          ce = (0, z.Z)(be, 1),
          we = ce[0],
          Ne = (0, Ct.Z)([], {
            value: o.editableKeys,
            onChange: o.onChange
              ? function (c) {
                  var r;
                  o == null ||
                    (r = o.onChange) === null ||
                    r === void 0 ||
                    r.call(
                      o,
                      c.filter(function (l) {
                        return l !== void 0;
                      }),
                      c
                        .map(function (l) {
                          return we(l);
                        })
                        .filter(function (l) {
                          return l !== void 0;
                        }),
                    );
                }
              : void 0,
          }),
          Re = (0, z.Z)(Ne, 2),
          re = Re[0],
          G = Re[1],
          T = (0, J.useMemo)(
            function () {
              var c =
                F === 'single' ? (re == null ? void 0 : re.slice(0, 1)) : re;
              return new Set(c);
            },
            [(re || []).join(','), F],
          ),
          he = (0, Nt.D)(re),
          oe = (0, Xe.J)(function (c) {
            var r,
              l,
              v,
              f,
              y =
                (r = o.getRowKey(c, c.index)) === null ||
                r === void 0 ||
                (l = r.toString) === null ||
                l === void 0
                  ? void 0
                  : l.call(r),
              b =
                (v = o.getRowKey(c, -1)) === null ||
                v === void 0 ||
                (f = v.toString) === null ||
                f === void 0
                  ? void 0
                  : f.call(v),
              m = re.map(function (x) {
                return x == null ? void 0 : x.toString();
              }),
              g =
                (he == null
                  ? void 0
                  : he.map(function (x) {
                      return x == null ? void 0 : x.toString();
                    })) || [],
              h =
                (o.tableName && !!(g != null && g.includes(b))) ||
                !!(g != null && g.includes(y));
            return {
              recordKey: b,
              isEditable:
                (o.tableName && (m == null ? void 0 : m.includes(b))) ||
                (m == null ? void 0 : m.includes(y)),
              preIsEditable: h,
            };
          }),
          ne = (0, Xe.J)(function (c) {
            return T.size > 0 &&
              F === 'single' &&
              o.onlyOneLineEditorAlertMessage !== !1
              ? (Ht(
                  o.onlyOneLineEditorAlertMessage ||
                    '\u53EA\u80FD\u540C\u65F6\u7F16\u8F91\u4E00\u884C',
                ),
                !1)
              : (T.add(c), G(Array.from(T)), !0);
          }),
          D = (0, Xe.J)(
            (function () {
              var c = (0, U.Z)(
                (0, s.Z)().mark(function r(l, v) {
                  var f, y;
                  return (0, s.Z)().wrap(function (m) {
                    for (;;)
                      switch ((m.prev = m.next)) {
                        case 0:
                          if (
                            ((f = Oe(l).toString()),
                            (y = Y.current.get(f)),
                            !(
                              !T.has(f) &&
                              y &&
                              (v == null || v) &&
                              o.tableName
                            ))
                          ) {
                            m.next = 5;
                            break;
                          }
                          return D(y, !1), m.abrupt('return');
                        case 5:
                          return (
                            C && C.options.recordKey === l && j(void 0),
                            T.delete(f),
                            T.delete(Oe(l)),
                            G(Array.from(T)),
                            m.abrupt('return', !0)
                          );
                        case 10:
                        case 'end':
                          return m.stop();
                      }
                  }, r);
                }),
              );
              return function (r, l) {
                return c.apply(this, arguments);
              };
            })(),
          ),
          Ce = (0, rn.D)(
            (0, U.Z)(
              (0, s.Z)().mark(function c() {
                var r,
                  l,
                  v,
                  f,
                  y = arguments;
                return (0, s.Z)().wrap(function (m) {
                  for (;;)
                    switch ((m.prev = m.next)) {
                      case 0:
                        for (l = y.length, v = new Array(l), f = 0; f < l; f++)
                          v[f] = y[f];
                        (r = o.onValuesChange) === null ||
                          r === void 0 ||
                          r.call.apply(r, [o].concat(v));
                      case 2:
                      case 'end':
                        return m.stop();
                    }
                }, c);
              }),
            ),
            64,
          ),
          pe = (0, Xe.J)(function (c, r) {
            var l;
            if (o.onValuesChange) {
              var v = o.dataSource;
              re.forEach(function (g) {
                if ((C == null ? void 0 : C.options.recordKey) !== g) {
                  var h = g.toString(),
                    x = (0, Qe.default)(
                      r,
                      [o.tableName || '', h].flat(1).filter(function (K) {
                        return K || K === 0;
                      }),
                    );
                  x &&
                    (v = $t(
                      {
                        data: v,
                        getRowKey: o.getRowKey,
                        row: x,
                        key: h,
                        childrenColumnName: o.childrenColumnName || 'children',
                      },
                      'update',
                    ));
                }
              });
              var f = o.tableName
                  ? (0, Qe.default)(c, [o.tableName || ''].flat(1))
                  : c,
                y =
                  (l = Object.keys(f || {}).pop()) === null || l === void 0
                    ? void 0
                    : l.toString(),
                b = (0, $.Z)(
                  (0, $.Z)({}, C == null ? void 0 : C.defaultValue),
                  (0, Qe.default)(
                    r,
                    [o.tableName || '', y.toString()]
                      .flat(1)
                      .filter(function (g) {
                        return g || g === 0;
                      }),
                  ),
                ),
                m = Y.current.has(Oe(y))
                  ? v.find(function (g, h) {
                      var x,
                        K =
                          (x = o.getRowKey(g, h)) === null || x === void 0
                            ? void 0
                            : x.toString();
                      return K === y;
                    })
                  : b;
              Ce.run(m || b, v);
            }
          }),
          A = (0, J.useRef)(new Map());
        (0, J.useEffect)(
          function () {
            A.current.forEach(function (c, r) {
              T.has(r) || A.current.delete(r);
            });
          },
          [A, T],
        );
        var ie = (0, Xe.J)(
            (function () {
              var c = (0, U.Z)(
                (0, s.Z)().mark(function r(l, v) {
                  var f, y, b, m;
                  return (0, s.Z)().wrap(
                    function (h) {
                      for (;;)
                        switch ((h.prev = h.next)) {
                          case 0:
                            if (
                              ((f = Oe(l)),
                              (y = Y.current.get(l.toString())),
                              !(
                                !T.has(f) &&
                                y &&
                                (v == null || v) &&
                                o.tableName
                              ))
                            ) {
                              h.next = 6;
                              break;
                            }
                            return (h.next = 5), ie(y, !1);
                          case 5:
                            return h.abrupt('return', h.sent);
                          case 6:
                            return (
                              (b =
                                A.current.get(f) ||
                                A.current.get(f.toString())),
                              (h.prev = 7),
                              (h.next = 10),
                              b == null ||
                              (m = b.current) === null ||
                              m === void 0
                                ? void 0
                                : m.save()
                            );
                          case 10:
                            h.next = 15;
                            break;
                          case 12:
                            return (
                              (h.prev = 12),
                              (h.t0 = h.catch(7)),
                              h.abrupt('return', !1)
                            );
                          case 15:
                            return (
                              T.delete(f),
                              T.delete(f.toString()),
                              G(Array.from(T)),
                              h.abrupt('return', !0)
                            );
                          case 19:
                          case 'end':
                            return h.stop();
                        }
                    },
                    r,
                    null,
                    [[7, 12]],
                  );
                }),
              );
              return function (r, l) {
                return c.apply(this, arguments);
              };
            })(),
          ),
          Le = (0, Xe.J)(function (c, r) {
            if (
              r != null &&
              r.parentKey &&
              !Y.current.has(Oe(r == null ? void 0 : r.parentKey).toString())
            )
              return (
                console.warn(
                  "can't find record by key",
                  r == null ? void 0 : r.parentKey,
                ),
                !1
              );
            if (ee.current && o.onlyAddOneLineAlertMessage !== !1)
              return (
                Ht(
                  o.onlyAddOneLineAlertMessage ||
                    '\u53EA\u80FD\u65B0\u589E\u4E00\u884C',
                ),
                !1
              );
            if (
              T.size > 0 &&
              F === 'single' &&
              o.onlyOneLineEditorAlertMessage !== !1
            )
              return (
                Ht(
                  o.onlyOneLineEditorAlertMessage ||
                    '\u53EA\u80FD\u540C\u65F6\u7F16\u8F91\u4E00\u884C',
                ),
                !1
              );
            var l = o.getRowKey(c, -1);
            if (!l)
              throw (
                ((0, Jt.ET)(
                  !!l,
                  `\u8BF7\u8BBE\u7F6E recordCreatorProps.record \u5E76\u8FD4\u56DE\u4E00\u4E2A\u552F\u4E00\u7684key  
  https://procomponents.ant.design/components/editable-table#editable-%E6%96%B0%E5%BB%BA%E8%A1%8C`,
                ),
                new Error(
                  '\u8BF7\u8BBE\u7F6E recordCreatorProps.record \u5E76\u8FD4\u56DE\u4E00\u4E2A\u552F\u4E00\u7684key',
                ))
              );
            if (
              (T.add(l),
              G(Array.from(T)),
              (r == null ? void 0 : r.newRecordType) === 'dataSource' ||
                o.tableName)
            ) {
              var v,
                f = {
                  data: o.dataSource,
                  getRowKey: o.getRowKey,
                  row: (0, $.Z)(
                    (0, $.Z)({}, c),
                    {},
                    {
                      map_row_parentKey:
                        r != null && r.parentKey
                          ? (v = Oe(r == null ? void 0 : r.parentKey)) ===
                              null || v === void 0
                            ? void 0
                            : v.toString()
                          : void 0,
                    },
                  ),
                  key: l,
                  childrenColumnName: o.childrenColumnName || 'children',
                };
              o.setDataSource(
                $t(
                  f,
                  (r == null ? void 0 : r.position) === 'top'
                    ? 'top'
                    : 'update',
                ),
              );
            } else j({ defaultValue: c, options: (0, $.Z)((0, $.Z)({}, r), {}, { recordKey: l }) });
            return !0;
          }),
          dt = (0, d.YB)(),
          qt =
            (o == null ? void 0 : o.saveText) ||
            dt.getMessage('editableTable.action.save', '\u4FDD\u5B58'),
          a =
            (o == null ? void 0 : o.deleteText) ||
            dt.getMessage('editableTable.action.delete', '\u5220\u9664'),
          p =
            (o == null ? void 0 : o.cancelText) ||
            dt.getMessage('editableTable.action.cancel', '\u53D6\u6D88'),
          e = (0, Xe.J)(
            (function () {
              var c = (0, U.Z)(
                (0, s.Z)().mark(function r(l, v, f, y) {
                  var b, m, g, h, x, K, Q;
                  return (0, s.Z)().wrap(function (I) {
                    for (;;)
                      switch ((I.prev = I.next)) {
                        case 0:
                          return (
                            (h = y || ee.current || {}),
                            (x = h.options),
                            (I.next = 3),
                            o == null || (b = o.onSave) === null || b === void 0
                              ? void 0
                              : b.call(o, l, v, f, y)
                          );
                        case 3:
                          if (
                            ((K = I.sent),
                            D(l),
                            !(
                              !(x != null && x.parentKey) &&
                              (x == null ? void 0 : x.recordKey) === l
                            ))
                          ) {
                            I.next = 8;
                            break;
                          }
                          return (
                            (x == null ? void 0 : x.position) === 'top'
                              ? o.setDataSource(
                                  [v].concat((0, ue.Z)(o.dataSource)),
                                )
                              : o.setDataSource(
                                  [].concat((0, ue.Z)(o.dataSource), [v]),
                                ),
                            I.abrupt('return', K)
                          );
                        case 8:
                          return (
                            (Q = {
                              data: o.dataSource,
                              getRowKey: o.getRowKey,
                              row: x
                                ? (0, $.Z)(
                                    (0, $.Z)({}, v),
                                    {},
                                    {
                                      map_row_parentKey:
                                        (m = Oe(
                                          (g =
                                            x == null
                                              ? void 0
                                              : x.parentKey) !== null &&
                                            g !== void 0
                                            ? g
                                            : '',
                                        )) === null || m === void 0
                                          ? void 0
                                          : m.toString(),
                                    },
                                  )
                                : v,
                              key: l,
                              childrenColumnName:
                                o.childrenColumnName || 'children',
                            }),
                            o.setDataSource(
                              $t(
                                Q,
                                (x == null ? void 0 : x.position) === 'top'
                                  ? 'top'
                                  : 'update',
                              ),
                            ),
                            I.abrupt('return', K)
                          );
                        case 11:
                        case 'end':
                          return I.stop();
                      }
                  }, r);
                }),
              );
              return function (r, l, v, f) {
                return c.apply(this, arguments);
              };
            })(),
          ),
          t = (0, Xe.J)(
            (function () {
              var c = (0, U.Z)(
                (0, s.Z)().mark(function r(l, v) {
                  var f, y, b;
                  return (0, s.Z)().wrap(function (g) {
                    for (;;)
                      switch ((g.prev = g.next)) {
                        case 0:
                          return (
                            (y = {
                              data: o.dataSource,
                              getRowKey: o.getRowKey,
                              row: v,
                              key: l,
                              childrenColumnName:
                                o.childrenColumnName || 'children',
                            }),
                            (g.next = 3),
                            o == null ||
                            (f = o.onDelete) === null ||
                            f === void 0
                              ? void 0
                              : f.call(o, l, v)
                          );
                        case 3:
                          return (b = g.sent), (g.next = 6), D(l);
                        case 6:
                          return (
                            o.setDataSource($t(y, 'delete')),
                            g.abrupt('return', b)
                          );
                        case 8:
                        case 'end':
                          return g.stop();
                      }
                  }, r);
                }),
              );
              return function (r, l) {
                return c.apply(this, arguments);
              };
            })(),
          ),
          n = (0, Xe.J)(
            (function () {
              var c = (0, U.Z)(
                (0, s.Z)().mark(function r(l, v, f, y) {
                  var b, m;
                  return (0, s.Z)().wrap(function (h) {
                    for (;;)
                      switch ((h.prev = h.next)) {
                        case 0:
                          return (
                            (h.next = 2),
                            o == null ||
                            (b = o.onCancel) === null ||
                            b === void 0
                              ? void 0
                              : b.call(o, l, v, f, y)
                          );
                        case 2:
                          return (m = h.sent), h.abrupt('return', m);
                        case 4:
                        case 'end':
                          return h.stop();
                      }
                  }, r);
                }),
              );
              return function (r, l, v, f) {
                return c.apply(this, arguments);
              };
            })(),
          ),
          u = function (r) {
            var l = o.getRowKey(r, r.index),
              v = {
                saveText: qt,
                cancelText: p,
                deleteText: a,
                addEditRecord: Le,
                recordKey: l,
                cancelEditable: D,
                index: r.index,
                tableName: o.tableName,
                newLineConfig: C,
                onCancel: n,
                onDelete: t,
                onSave: e,
                editableKeys: re,
                setEditableRowKeys: G,
                deletePopconfirmMessage:
                  o.deletePopconfirmMessage ||
                  ''.concat(
                    dt.getMessage('deleteThisLine', '\u5220\u9664\u6B64\u884C'),
                    '?',
                  ),
              },
              f = Vt(r, v);
            return (
              o.tableName
                ? A.current.set(Y.current.get(Oe(l)) || Oe(l), f.saveRef)
                : A.current.set(Oe(l), f.saveRef),
              o.actionRender
                ? o.actionRender(r, v, {
                    save: f.save,
                    delete: f.delete,
                    cancel: f.cancel,
                  })
                : [f.save, f.delete, f.cancel]
            );
          };
        return {
          editableKeys: re,
          setEditableRowKeys: G,
          isEditable: oe,
          actionRender: u,
          startEditable: ne,
          cancelEditable: D,
          addEditRecord: Le,
          saveEditable: ie,
          newLineRecord: C,
          preEditableKeys: he,
          onValuesChange: pe,
        };
      }
    },
    49867: function (Ye, de, i) {
      'use strict';
      i.d(de, {
        N: function () {
          return ue;
        },
      });
      const ue = (s) => ({
        color: s.colorLink,
        textDecoration: 'none',
        outline: 'none',
        cursor: 'pointer',
        transition: `color ${s.motionDurationSlow}`,
        '&:focus, &:hover': { color: s.colorLinkHover },
        '&:active': { color: s.colorLinkActive },
      });
    },
    84164: function (Ye, de, i) {
      'use strict';
      i.d(de, {
        Z: function () {
          return s;
        },
      });
      var ue = i(67294);
      function s($e, U, z) {
        const P = ue.useRef({});
        function R($) {
          if (
            !P.current ||
            P.current.data !== $e ||
            P.current.childrenColumnName !== U ||
            P.current.getRowKey !== z
          ) {
            let fe = function (Ee) {
              Ee.forEach((d, ve) => {
                const Ke = z(d, ve);
                H.set(Ke, d),
                  d && typeof d == 'object' && U in d && fe(d[U] || []);
              });
            };
            const H = new Map();
            fe($e),
              (P.current = {
                data: $e,
                childrenColumnName: U,
                kvMap: H,
                getRowKey: z,
              });
          }
          return P.current.kvMap.get($);
        }
        return [R];
      }
    },
    49502: function (Ye, de, i) {
      'use strict';
      i.d(de, {
        Z: function () {
          return p;
        },
      });
      var ue = i(97937),
        s = i(89705),
        $e = i(24969),
        U = i(94184),
        z = i.n(U),
        P = i(87462),
        R = i(4942),
        $ = i(1413),
        H = i(97685),
        fe = i(71002),
        Ee = i(91),
        d = i(67294),
        ve = i(31131),
        Ke = i(21770),
        rt = i(62874),
        Te = (0, d.createContext)(null),
        Ge = d.forwardRef(function (e, t) {
          var n = e.prefixCls,
            u = e.className,
            c = e.style,
            r = e.id,
            l = e.active,
            v = e.tabKey,
            f = e.children;
          return d.createElement(
            'div',
            {
              id: r && ''.concat(r, '-panel-').concat(v),
              role: 'tabpanel',
              tabIndex: l ? 0 : -1,
              'aria-labelledby': r && ''.concat(r, '-tab-').concat(v),
              'aria-hidden': !l,
              style: c,
              className: z()(n, l && ''.concat(n, '-active'), u),
              ref: t,
            },
            f,
          );
        }),
        ot = Ge,
        Bt = ['key', 'forceRender', 'style', 'className'];
      function J(e) {
        var t = e.id,
          n = e.activeKey,
          u = e.animated,
          c = e.tabPosition,
          r = e.destroyInactiveTabPane,
          l = d.useContext(Te),
          v = l.prefixCls,
          f = l.tabs,
          y = u.tabPane,
          b = ''.concat(v, '-tabpane');
        return d.createElement(
          'div',
          { className: z()(''.concat(v, '-content-holder')) },
          d.createElement(
            'div',
            {
              className: z()(
                ''.concat(v, '-content'),
                ''.concat(v, '-content-').concat(c),
                (0, R.Z)({}, ''.concat(v, '-content-animated'), y),
              ),
            },
            f.map(function (m) {
              var g = m.key,
                h = m.forceRender,
                x = m.style,
                K = m.className,
                Q = (0, Ee.Z)(m, Bt),
                W = g === n;
              return d.createElement(
                rt.Z,
                (0, P.Z)(
                  {
                    key: g,
                    visible: W,
                    forceRender: h,
                    removeOnLeave: !!r,
                    leavedClassName: ''.concat(b, '-hidden'),
                  },
                  u.tabPaneMotion,
                ),
                function (I, me) {
                  var te = I.style,
                    ye = I.className;
                  return d.createElement(
                    ot,
                    (0, P.Z)({}, Q, {
                      prefixCls: b,
                      id: t,
                      tabKey: g,
                      animated: y,
                      active: W,
                      style: (0, $.Z)((0, $.Z)({}, x), te),
                      className: z()(K, ye),
                      ref: me,
                    }),
                  );
                },
              );
            }),
          ),
        );
      }
      var it = i(74902),
        M = i(48555),
        Se = i(75164),
        Ie = i(42550),
        We = { width: 0, height: 0, left: 0, top: 0 };
      function lt(e, t, n) {
        return (0, d.useMemo)(
          function () {
            for (
              var u,
                c = new Map(),
                r =
                  t.get((u = e[0]) === null || u === void 0 ? void 0 : u.key) ||
                  We,
                l = r.left + r.width,
                v = 0;
              v < e.length;
              v += 1
            ) {
              var f = e[v].key,
                y = t.get(f);
              if (!y) {
                var b;
                y =
                  t.get(
                    (b = e[v - 1]) === null || b === void 0 ? void 0 : b.key,
                  ) || We;
              }
              var m = c.get(f) || (0, $.Z)({}, y);
              (m.right = l - m.left - m.width), c.set(f, m);
            }
            return c;
          },
          [
            e
              .map(function (u) {
                return u.key;
              })
              .join('_'),
            t,
            n,
          ],
        );
      }
      function xe(e) {
        var t = (0, d.useRef)(),
          n = (0, d.useRef)(!1);
        function u() {
          for (var c = arguments.length, r = new Array(c), l = 0; l < c; l++)
            r[l] = arguments[l];
          n.current ||
            (Se.Z.cancel(t.current),
            (t.current = (0, Se.Z)(function () {
              e.apply(void 0, r);
            })));
        }
        return (
          (0, d.useEffect)(function () {
            return (
              (n.current = !1),
              function () {
                (n.current = !0), Se.Z.cancel(t.current);
              }
            );
          }, []),
          u
        );
      }
      function Be(e) {
        var t = (0, d.useRef)([]),
          n = (0, d.useState)({}),
          u = (0, H.Z)(n, 2),
          c = u[1],
          r = (0, d.useRef)(typeof e == 'function' ? e() : e),
          l = xe(function () {
            var f = r.current;
            t.current.forEach(function (y) {
              f = y(f);
            }),
              (t.current = []),
              (r.current = f),
              c({});
          });
        function v(f) {
          t.current.push(f), l();
        }
        return [r.current, v];
      }
      function st(e, t) {
        var n = d.useRef(e),
          u = d.useState({}),
          c = (0, H.Z)(u, 2),
          r = c[1];
        function l(v) {
          var f = typeof v == 'function' ? v(n.current) : v;
          f !== n.current && t(f, n.current), (n.current = f), r({});
        }
        return [n.current, l];
      }
      var ct = 0.1,
        vt = 0.01,
        pt = 20,
        St = Math.pow(0.995, pt);
      function wt(e, t) {
        var n = (0, d.useState)(),
          u = (0, H.Z)(n, 2),
          c = u[0],
          r = u[1],
          l = (0, d.useState)(0),
          v = (0, H.Z)(l, 2),
          f = v[0],
          y = v[1],
          b = (0, d.useState)(0),
          m = (0, H.Z)(b, 2),
          g = m[0],
          h = m[1],
          x = (0, d.useState)(),
          K = (0, H.Z)(x, 2),
          Q = K[0],
          W = K[1],
          I = (0, d.useRef)();
        function me(X) {
          var q = X.touches[0],
            Z = q.screenX,
            V = q.screenY;
          r({ x: Z, y: V }), window.clearInterval(I.current);
        }
        function te(X) {
          if (c) {
            X.preventDefault();
            var q = X.touches[0],
              Z = q.screenX,
              V = q.screenY;
            r({ x: Z, y: V });
            var N = Z - c.x,
              le = V - c.y;
            t(N, le);
            var Me = Date.now();
            y(Me), h(Me - f), W({ x: N, y: le });
          }
        }
        function ye() {
          if (c && (r(null), W(null), Q)) {
            var X = Q.x / g,
              q = Q.y / g,
              Z = Math.abs(X),
              V = Math.abs(q);
            if (Math.max(Z, V) < ct) return;
            var N = X,
              le = q;
            I.current = window.setInterval(function () {
              if (Math.abs(N) < vt && Math.abs(le) < vt) {
                window.clearInterval(I.current);
                return;
              }
              (N *= St), (le *= St), t(N * pt, le * pt);
            }, pt);
          }
        }
        var B = (0, d.useRef)();
        function w(X) {
          var q = X.deltaX,
            Z = X.deltaY,
            V = 0,
            N = Math.abs(q),
            le = Math.abs(Z);
          N === le
            ? (V = B.current === 'x' ? q : Z)
            : N > le
            ? ((V = q), (B.current = 'x'))
            : ((V = Z), (B.current = 'y')),
            t(-V, -V) && X.preventDefault();
        }
        var ae = (0, d.useRef)(null);
        (ae.current = {
          onTouchStart: me,
          onTouchMove: te,
          onTouchEnd: ye,
          onWheel: w,
        }),
          d.useEffect(function () {
            function X(N) {
              ae.current.onTouchStart(N);
            }
            function q(N) {
              ae.current.onTouchMove(N);
            }
            function Z(N) {
              ae.current.onTouchEnd(N);
            }
            function V(N) {
              ae.current.onWheel(N);
            }
            return (
              document.addEventListener('touchmove', q, { passive: !1 }),
              document.addEventListener('touchend', Z, { passive: !1 }),
              e.current.addEventListener('touchstart', X, { passive: !1 }),
              e.current.addEventListener('wheel', V),
              function () {
                document.removeEventListener('touchmove', q),
                  document.removeEventListener('touchend', Z);
              }
            );
          }, []);
      }
      var Rt = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      function xt(e, t, n, u, c, r, l) {
        var v = l.tabs,
          f = l.tabPosition,
          y = l.rtl,
          b,
          m,
          g;
        return (
          ['top', 'bottom'].includes(f)
            ? ((b = 'width'), (m = y ? 'right' : 'left'), (g = Math.abs(n)))
            : ((b = 'height'), (m = 'top'), (g = -n)),
          (0, d.useMemo)(
            function () {
              if (!v.length) return [0, 0];
              for (var h = v.length, x = h, K = 0; K < h; K += 1) {
                var Q = e.get(v[K].key) || Rt;
                if (Q[m] + Q[b] > g + t) {
                  x = K - 1;
                  break;
                }
              }
              for (var W = 0, I = h - 1; I >= 0; I -= 1) {
                var me = e.get(v[I].key) || Rt;
                if (me[m] < g) {
                  W = I + 1;
                  break;
                }
              }
              return [W, x];
            },
            [
              e,
              t,
              u,
              c,
              r,
              g,
              f,
              v
                .map(function (h) {
                  return h.key;
                })
                .join('_'),
              y,
            ],
          )
        );
      }
      function Zt(e) {
        var t;
        return (
          e instanceof Map
            ? ((t = {}),
              e.forEach(function (n, u) {
                t[u] = n;
              }))
            : (t = e),
          JSON.stringify(t)
        );
      }
      function Pt(e, t) {
        var n = e.prefixCls,
          u = e.editable,
          c = e.locale,
          r = e.style;
        return !u || u.showAdd === !1
          ? null
          : d.createElement(
              'button',
              {
                ref: t,
                type: 'button',
                className: ''.concat(n, '-nav-add'),
                style: r,
                'aria-label':
                  (c == null ? void 0 : c.addAriaLabel) || 'Add tab',
                onClick: function (v) {
                  u.onEdit('add', { event: v });
                },
              },
              u.addIcon || '+',
            );
      }
      var mt = d.forwardRef(Pt),
        zt = d.forwardRef(function (e, t) {
          var n = e.position,
            u = e.prefixCls,
            c = e.extra;
          if (!c) return null;
          var r,
            l = {};
          return (
            (0, fe.Z)(c) === 'object' && !d.isValidElement(c)
              ? (l = c)
              : (l.right = c),
            n === 'right' && (r = l.right),
            n === 'left' && (r = l.left),
            r
              ? d.createElement(
                  'div',
                  { className: ''.concat(u, '-extra-content'), ref: t },
                  r,
                )
              : null
          );
        }),
        Ot = zt,
        Ct = i(60057),
        Qe = i(97868),
        ze = i(15105);
      function Jt(e, t) {
        var n = e.prefixCls,
          u = e.id,
          c = e.tabs,
          r = e.locale,
          l = e.mobile,
          v = e.moreIcon,
          f = v === void 0 ? 'More' : v,
          y = e.moreTransitionName,
          b = e.style,
          m = e.className,
          g = e.editable,
          h = e.tabBarGutter,
          x = e.rtl,
          K = e.removeAriaLabel,
          Q = e.onTabClick,
          W = e.getPopupContainer,
          I = e.popupClassName,
          me = (0, d.useState)(!1),
          te = (0, H.Z)(me, 2),
          ye = te[0],
          B = te[1],
          w = (0, d.useState)(null),
          ae = (0, H.Z)(w, 2),
          X = ae[0],
          q = ae[1],
          Z = ''.concat(u, '-more-popup'),
          V = ''.concat(n, '-dropdown'),
          N = X !== null ? ''.concat(Z, '-').concat(X) : null,
          le = r == null ? void 0 : r.dropdownAriaLabel;
        function Me(_, Ze) {
          _.preventDefault(),
            _.stopPropagation(),
            g.onEdit('remove', { key: Ze, event: _ });
        }
        var Ue = d.createElement(
          Qe.ZP,
          {
            onClick: function (Ze) {
              var _e = Ze.key,
                je = Ze.domEvent;
              Q(_e, je), B(!1);
            },
            prefixCls: ''.concat(V, '-menu'),
            id: Z,
            tabIndex: -1,
            role: 'listbox',
            'aria-activedescendant': N,
            selectedKeys: [X],
            'aria-label': le !== void 0 ? le : 'expanded dropdown',
          },
          c.map(function (_) {
            var Ze = g && _.closable !== !1 && !_.disabled;
            return d.createElement(
              Qe.sN,
              {
                key: _.key,
                id: ''.concat(Z, '-').concat(_.key),
                role: 'option',
                'aria-controls': u && ''.concat(u, '-panel-').concat(_.key),
                disabled: _.disabled,
              },
              d.createElement('span', null, _.label),
              Ze &&
                d.createElement(
                  'button',
                  {
                    type: 'button',
                    'aria-label': K || 'remove',
                    tabIndex: 0,
                    className: ''.concat(V, '-menu-item-remove'),
                    onClick: function (je) {
                      je.stopPropagation(), Me(je, _.key);
                    },
                  },
                  _.closeIcon || g.removeIcon || '\xD7',
                ),
            );
          }),
        );
        function ke(_) {
          for (
            var Ze = c.filter(function (Tt) {
                return !Tt.disabled;
              }),
              _e =
                Ze.findIndex(function (Tt) {
                  return Tt.key === X;
                }) || 0,
              je = Ze.length,
              bt = 0;
            bt < je;
            bt += 1
          ) {
            _e = (_e + _ + je) % je;
            var jt = Ze[_e];
            if (!jt.disabled) {
              q(jt.key);
              return;
            }
          }
        }
        function Ve(_) {
          var Ze = _.which;
          if (!ye) {
            [ze.Z.DOWN, ze.Z.SPACE, ze.Z.ENTER].includes(Ze) &&
              (B(!0), _.preventDefault());
            return;
          }
          switch (Ze) {
            case ze.Z.UP:
              ke(-1), _.preventDefault();
              break;
            case ze.Z.DOWN:
              ke(1), _.preventDefault();
              break;
            case ze.Z.ESC:
              B(!1);
              break;
            case ze.Z.SPACE:
            case ze.Z.ENTER:
              X !== null && Q(X, _);
              break;
          }
        }
        (0, d.useEffect)(
          function () {
            var _ = document.getElementById(N);
            _ && _.scrollIntoView && _.scrollIntoView(!1);
          },
          [X],
        ),
          (0, d.useEffect)(
            function () {
              ye || q(null);
            },
            [ye],
          );
        var qe = (0, R.Z)({}, x ? 'marginRight' : 'marginLeft', h);
        c.length || ((qe.visibility = 'hidden'), (qe.order = 1));
        var Mt = z()((0, R.Z)({}, ''.concat(V, '-rtl'), x)),
          gt = l
            ? null
            : d.createElement(
                Ct.Z,
                {
                  prefixCls: V,
                  overlay: Ue,
                  trigger: ['hover'],
                  visible: c.length ? ye : !1,
                  transitionName: y,
                  onVisibleChange: B,
                  overlayClassName: z()(Mt, I),
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                  getPopupContainer: W,
                },
                d.createElement(
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(n, '-nav-more'),
                    style: qe,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': Z,
                    id: ''.concat(u, '-more'),
                    'aria-expanded': ye,
                    onKeyDown: Ve,
                  },
                  f,
                ),
              );
        return d.createElement(
          'div',
          {
            className: z()(''.concat(n, '-nav-operations'), m),
            style: b,
            ref: t,
          },
          gt,
          d.createElement(mt, { prefixCls: n, locale: r, editable: g }),
        );
      }
      var Xe = d.memo(d.forwardRef(Jt), function (e, t) {
        return t.tabMoving;
      });
      function rn(e) {
        var t,
          n = e.prefixCls,
          u = e.id,
          c = e.active,
          r = e.tab,
          l = r.key,
          v = r.label,
          f = r.disabled,
          y = r.closeIcon,
          b = e.closable,
          m = e.renderWrapper,
          g = e.removeAriaLabel,
          h = e.editable,
          x = e.onClick,
          K = e.onFocus,
          Q = e.style,
          W = ''.concat(n, '-tab'),
          I = h && b !== !1 && !f;
        function me(B) {
          f || x(B);
        }
        function te(B) {
          B.preventDefault(),
            B.stopPropagation(),
            h.onEdit('remove', { key: l, event: B });
        }
        var ye = d.createElement(
          'div',
          {
            key: l,
            'data-node-key': l,
            className: z()(
              W,
              ((t = {}),
              (0, R.Z)(t, ''.concat(W, '-with-remove'), I),
              (0, R.Z)(t, ''.concat(W, '-active'), c),
              (0, R.Z)(t, ''.concat(W, '-disabled'), f),
              t),
            ),
            style: Q,
            onClick: me,
          },
          d.createElement(
            'div',
            {
              role: 'tab',
              'aria-selected': c,
              id: u && ''.concat(u, '-tab-').concat(l),
              className: ''.concat(W, '-btn'),
              'aria-controls': u && ''.concat(u, '-panel-').concat(l),
              'aria-disabled': f,
              tabIndex: f ? null : 0,
              onClick: function (w) {
                w.stopPropagation(), me(w);
              },
              onKeyDown: function (w) {
                [ze.Z.SPACE, ze.Z.ENTER].includes(w.which) &&
                  (w.preventDefault(), me(w));
              },
              onFocus: K,
            },
            v,
          ),
          I &&
            d.createElement(
              'button',
              {
                type: 'button',
                'aria-label': g || 'remove',
                tabIndex: 0,
                className: ''.concat(W, '-remove'),
                onClick: function (w) {
                  w.stopPropagation(), te(w);
                },
              },
              y || h.removeIcon || '\xD7',
            ),
        );
        return m ? m(ye) : ye;
      }
      var It = rn,
        Et = function (t) {
          var n = t.current || {},
            u = n.offsetWidth,
            c = u === void 0 ? 0 : u,
            r = n.offsetHeight,
            l = r === void 0 ? 0 : r;
          return [c, l];
        },
        Nt = function (t, n) {
          return t[n ? 0 : 1];
        };
      function on(e, t) {
        var n,
          u = d.useContext(Te),
          c = u.prefixCls,
          r = u.tabs,
          l = e.className,
          v = e.style,
          f = e.id,
          y = e.animated,
          b = e.activeKey,
          m = e.rtl,
          g = e.extra,
          h = e.editable,
          x = e.locale,
          K = e.tabPosition,
          Q = e.tabBarGutter,
          W = e.children,
          I = e.onTabClick,
          me = e.onTabScroll,
          te = (0, d.useRef)(),
          ye = (0, d.useRef)(),
          B = (0, d.useRef)(),
          w = (0, d.useRef)(),
          ae = (0, d.useRef)(),
          X = (0, d.useRef)(),
          q = (0, d.useRef)(),
          Z = K === 'top' || K === 'bottom',
          V = st(0, function (ge, Fe) {
            Z && me && me({ direction: ge > Fe ? 'left' : 'right' });
          }),
          N = (0, H.Z)(V, 2),
          le = N[0],
          Me = N[1],
          Ue = st(0, function (ge, Fe) {
            !Z && me && me({ direction: ge > Fe ? 'top' : 'bottom' });
          }),
          ke = (0, H.Z)(Ue, 2),
          Ve = ke[0],
          qe = ke[1],
          Mt = (0, d.useState)([0, 0]),
          gt = (0, H.Z)(Mt, 2),
          _ = gt[0],
          Ze = gt[1],
          _e = (0, d.useState)([0, 0]),
          je = (0, H.Z)(_e, 2),
          bt = je[0],
          jt = je[1],
          Tt = (0, d.useState)([0, 0]),
          Dt = (0, H.Z)(Tt, 2),
          sn = Dt[0],
          _t = Dt[1],
          cn = (0, d.useState)([0, 0]),
          Ft = (0, H.Z)(cn, 2),
          dn = Ft[0],
          et = Ft[1],
          k = Be(new Map()),
          Pe = (0, H.Z)(k, 2),
          tt = Pe[0],
          en = Pe[1],
          He = lt(r, tt, bt[0]),
          yt = Nt(_, Z),
          ut = Nt(bt, Z),
          At = Nt(sn, Z),
          gn = Nt(dn, Z),
          Sn = yt < ut + At,
          nt = Sn ? yt - gn : yt - At,
          xn = ''.concat(c, '-nav-operations-hidden'),
          Gt = 0,
          Xt = 0;
        Z && m
          ? ((Gt = 0), (Xt = Math.max(0, ut - nt)))
          : ((Gt = Math.min(0, nt - ut)), (Xt = 0));
        function un(ge) {
          return ge < Gt ? Gt : ge > Xt ? Xt : ge;
        }
        var ft = (0, d.useRef)(),
          tn = (0, d.useState)(),
          bn = (0, H.Z)(tn, 2),
          nn = bn[0],
          yn = bn[1];
        function fn() {
          yn(Date.now());
        }
        function vn() {
          window.clearTimeout(ft.current);
        }
        wt(w, function (ge, Fe) {
          function se(Ae, at) {
            Ae(function (ht) {
              var Kn = un(ht + at);
              return Kn;
            });
          }
          return yt >= ut ? !1 : (Z ? se(Me, ge) : se(qe, Fe), vn(), fn(), !0);
        }),
          (0, d.useEffect)(
            function () {
              return (
                vn(),
                nn &&
                  (ft.current = window.setTimeout(function () {
                    yn(0);
                  }, 100)),
                vn
              );
            },
            [nn],
          );
        var E = xt(
            He,
            nt,
            Z ? le : Ve,
            ut,
            At,
            gn,
            (0, $.Z)((0, $.Z)({}, e), {}, { tabs: r }),
          ),
          L = (0, H.Z)(E, 2),
          De = L[0],
          Je = L[1],
          Ut = function () {
            var Fe =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : b,
              se = He.get(Fe) || {
                width: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
              };
            if (Z) {
              var Ae = le;
              m
                ? se.right < le
                  ? (Ae = se.right)
                  : se.right + se.width > le + nt &&
                    (Ae = se.right + se.width - nt)
                : se.left < -le
                ? (Ae = -se.left)
                : se.left + se.width > -le + nt &&
                  (Ae = -(se.left + se.width - nt)),
                qe(0),
                Me(un(Ae));
            } else {
              var at = Ve;
              se.top < -Ve
                ? (at = -se.top)
                : se.top + se.height > -Ve + nt &&
                  (at = -(se.top + se.height - nt)),
                Me(0),
                qe(un(at));
            }
          },
          an = {};
        K === 'top' || K === 'bottom'
          ? (an[m ? 'marginRight' : 'marginLeft'] = Q)
          : (an.marginTop = Q);
        var hn = r.map(function (ge, Fe) {
            var se = ge.key;
            return d.createElement(It, {
              id: f,
              prefixCls: c,
              key: se,
              tab: ge,
              style: Fe === 0 ? void 0 : an,
              closable: ge.closable,
              editable: h,
              active: se === b,
              renderWrapper: W,
              removeAriaLabel: x == null ? void 0 : x.removeAriaLabel,
              onClick: function (at) {
                I(se, at);
              },
              onFocus: function () {
                Ut(se),
                  fn(),
                  w.current &&
                    (m || (w.current.scrollLeft = 0),
                    (w.current.scrollTop = 0));
              },
            });
          }),
          Tn = function () {
            return en(function () {
              var Fe = new Map();
              return (
                r.forEach(function (se) {
                  var Ae,
                    at = se.key,
                    ht =
                      (Ae = ae.current) === null || Ae === void 0
                        ? void 0
                        : Ae.querySelector('[data-node-key="'.concat(at, '"]'));
                  ht &&
                    Fe.set(at, {
                      width: ht.offsetWidth,
                      height: ht.offsetHeight,
                      left: ht.offsetLeft,
                      top: ht.offsetTop,
                    });
                }),
                Fe
              );
            });
          };
        (0, d.useEffect)(
          function () {
            Tn();
          },
          [
            r
              .map(function (ge) {
                return ge.key;
              })
              .join('_'),
          ],
        );
        var Cn = xe(function () {
            var ge = Et(te),
              Fe = Et(ye),
              se = Et(B);
            Ze([ge[0] - Fe[0] - se[0], ge[1] - Fe[1] - se[1]]);
            var Ae = Et(q);
            _t(Ae);
            var at = Et(X);
            et(at);
            var ht = Et(ae);
            jt([ht[0] - Ae[0], ht[1] - Ae[1]]), Tn();
          }),
          Ln = r.slice(0, De),
          Mn = r.slice(Je + 1),
          wn = [].concat((0, it.Z)(Ln), (0, it.Z)(Mn)),
          jn = (0, d.useState)(),
          Rn = (0, H.Z)(jn, 2),
          Dn = Rn[0],
          An = Rn[1],
          Kt = He.get(b),
          Zn = (0, d.useRef)();
        function Pn() {
          Se.Z.cancel(Zn.current);
        }
        (0, d.useEffect)(
          function () {
            var ge = {};
            return (
              Kt &&
                (Z
                  ? (m ? (ge.right = Kt.right) : (ge.left = Kt.left),
                    (ge.width = Kt.width))
                  : ((ge.top = Kt.top), (ge.height = Kt.height))),
              Pn(),
              (Zn.current = (0, Se.Z)(function () {
                An(ge);
              })),
              Pn
            );
          },
          [Kt, Z, m],
        ),
          (0, d.useEffect)(
            function () {
              Ut();
            },
            [b, Zt(Kt), Zt(He), Z],
          ),
          (0, d.useEffect)(
            function () {
              Cn();
            },
            [m],
          );
        var On = !!wn.length,
          pn = ''.concat(c, '-nav-wrap'),
          En,
          $n,
          In,
          Nn;
        return (
          Z
            ? m
              ? (($n = le > 0), (En = le + yt < ut))
              : ((En = le < 0), ($n = -le + yt < ut))
            : ((In = Ve < 0), (Nn = -Ve + yt < ut)),
          d.createElement(
            M.Z,
            { onResize: Cn },
            d.createElement(
              'div',
              {
                ref: (0, Ie.x1)(t, te),
                role: 'tablist',
                className: z()(''.concat(c, '-nav'), l),
                style: v,
                onKeyDown: function () {
                  fn();
                },
              },
              d.createElement(Ot, {
                ref: ye,
                position: 'left',
                extra: g,
                prefixCls: c,
              }),
              d.createElement(
                'div',
                {
                  className: z()(
                    pn,
                    ((n = {}),
                    (0, R.Z)(n, ''.concat(pn, '-ping-left'), En),
                    (0, R.Z)(n, ''.concat(pn, '-ping-right'), $n),
                    (0, R.Z)(n, ''.concat(pn, '-ping-top'), In),
                    (0, R.Z)(n, ''.concat(pn, '-ping-bottom'), Nn),
                    n),
                  ),
                  ref: w,
                },
                d.createElement(
                  M.Z,
                  { onResize: Cn },
                  d.createElement(
                    'div',
                    {
                      ref: ae,
                      className: ''.concat(c, '-nav-list'),
                      style: {
                        transform: 'translate('
                          .concat(le, 'px, ')
                          .concat(Ve, 'px)'),
                        transition: nn ? 'none' : void 0,
                      },
                    },
                    hn,
                    d.createElement(mt, {
                      ref: q,
                      prefixCls: c,
                      locale: x,
                      editable: h,
                      style: (0, $.Z)(
                        (0, $.Z)({}, hn.length === 0 ? void 0 : an),
                        {},
                        { visibility: On ? 'hidden' : null },
                      ),
                    }),
                    d.createElement('div', {
                      className: z()(
                        ''.concat(c, '-ink-bar'),
                        (0, R.Z)(
                          {},
                          ''.concat(c, '-ink-bar-animated'),
                          y.inkBar,
                        ),
                      ),
                      style: Dn,
                    }),
                  ),
                ),
              ),
              d.createElement(
                Xe,
                (0, P.Z)({}, e, {
                  removeAriaLabel: x == null ? void 0 : x.removeAriaLabel,
                  ref: X,
                  prefixCls: c,
                  tabs: wn,
                  className: !On && xn,
                  tabMoving: !!nn,
                }),
              ),
              d.createElement(Ot, {
                ref: B,
                position: 'right',
                extra: g,
                prefixCls: c,
              }),
            ),
          )
        );
      }
      var ln = d.forwardRef(on),
        Yt = ['renderTabBar'],
        Qt = ['label', 'key'];
      function Ht(e) {
        var t = e.renderTabBar,
          n = (0, Ee.Z)(e, Yt),
          u = d.useContext(Te),
          c = u.tabs;
        if (t) {
          var r = (0, $.Z)(
            (0, $.Z)({}, n),
            {},
            {
              panes: c.map(function (l) {
                var v = l.label,
                  f = l.key,
                  y = (0, Ee.Z)(l, Qt);
                return d.createElement(
                  ot,
                  (0, P.Z)({ tab: v, key: f, tabKey: f }, y),
                );
              }),
            },
          );
          return t(r, ln);
        }
        return d.createElement(ln, n);
      }
      var Oe = i(80334);
      function $t() {
        var e =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : { inkBar: !0, tabPane: !1 },
          t;
        return (
          e === !1
            ? (t = { inkBar: !1, tabPane: !1 })
            : e === !0
            ? (t = { inkBar: !0, tabPane: !1 })
            : (t = (0, $.Z)(
                { inkBar: !0 },
                (0, fe.Z)(e) === 'object' ? e : {},
              )),
          t.tabPaneMotion && t.tabPane === void 0 && (t.tabPane = !0),
          !t.tabPaneMotion && t.tabPane && (t.tabPane = !1),
          t
        );
      }
      var Lt = [
          'id',
          'prefixCls',
          'className',
          'items',
          'direction',
          'activeKey',
          'defaultActiveKey',
          'editable',
          'animated',
          'tabPosition',
          'tabBarGutter',
          'tabBarStyle',
          'tabBarExtraContent',
          'locale',
          'moreIcon',
          'moreTransitionName',
          'destroyInactiveTabPane',
          'renderTabBar',
          'onChange',
          'onTabClick',
          'onTabScroll',
          'getPopupContainer',
          'popupClassName',
        ],
        Wt = 0;
      function kt(e, t) {
        var n,
          u = e.id,
          c = e.prefixCls,
          r = c === void 0 ? 'rc-tabs' : c,
          l = e.className,
          v = e.items,
          f = e.direction,
          y = e.activeKey,
          b = e.defaultActiveKey,
          m = e.editable,
          g = e.animated,
          h = e.tabPosition,
          x = h === void 0 ? 'top' : h,
          K = e.tabBarGutter,
          Q = e.tabBarStyle,
          W = e.tabBarExtraContent,
          I = e.locale,
          me = e.moreIcon,
          te = e.moreTransitionName,
          ye = e.destroyInactiveTabPane,
          B = e.renderTabBar,
          w = e.onChange,
          ae = e.onTabClick,
          X = e.onTabScroll,
          q = e.getPopupContainer,
          Z = e.popupClassName,
          V = (0, Ee.Z)(e, Lt),
          N = d.useMemo(
            function () {
              return (v || []).filter(function (k) {
                return k && (0, fe.Z)(k) === 'object' && 'key' in k;
              });
            },
            [v],
          ),
          le = f === 'rtl',
          Me = $t(g),
          Ue = (0, d.useState)(!1),
          ke = (0, H.Z)(Ue, 2),
          Ve = ke[0],
          qe = ke[1];
        (0, d.useEffect)(function () {
          qe((0, ve.Z)());
        }, []);
        var Mt = (0, Ke.Z)(
            function () {
              var k;
              return (k = N[0]) === null || k === void 0 ? void 0 : k.key;
            },
            { value: y, defaultValue: b },
          ),
          gt = (0, H.Z)(Mt, 2),
          _ = gt[0],
          Ze = gt[1],
          _e = (0, d.useState)(function () {
            return N.findIndex(function (k) {
              return k.key === _;
            });
          }),
          je = (0, H.Z)(_e, 2),
          bt = je[0],
          jt = je[1];
        (0, d.useEffect)(
          function () {
            var k = N.findIndex(function (tt) {
              return tt.key === _;
            });
            if (k === -1) {
              var Pe;
              (k = Math.max(0, Math.min(bt, N.length - 1))),
                Ze((Pe = N[k]) === null || Pe === void 0 ? void 0 : Pe.key);
            }
            jt(k);
          },
          [
            N.map(function (k) {
              return k.key;
            }).join('_'),
            _,
            bt,
          ],
        );
        var Tt = (0, Ke.Z)(null, { value: u }),
          Dt = (0, H.Z)(Tt, 2),
          sn = Dt[0],
          _t = Dt[1];
        (0, d.useEffect)(function () {
          u || (_t('rc-tabs-'.concat(Wt)), (Wt += 1));
        }, []);
        function cn(k, Pe) {
          ae == null || ae(k, Pe);
          var tt = k !== _;
          Ze(k), tt && (w == null || w(k));
        }
        var Ft = {
            id: sn,
            activeKey: _,
            animated: Me,
            tabPosition: x,
            rtl: le,
            mobile: Ve,
          },
          dn,
          et = (0, $.Z)(
            (0, $.Z)({}, Ft),
            {},
            {
              editable: m,
              locale: I,
              moreIcon: me,
              moreTransitionName: te,
              tabBarGutter: K,
              onTabClick: cn,
              onTabScroll: X,
              extra: W,
              style: Q,
              panes: null,
              getPopupContainer: q,
              popupClassName: Z,
            },
          );
        return d.createElement(
          Te.Provider,
          { value: { tabs: N, prefixCls: r } },
          d.createElement(
            'div',
            (0, P.Z)(
              {
                ref: t,
                id: u,
                className: z()(
                  r,
                  ''.concat(r, '-').concat(x),
                  ((n = {}),
                  (0, R.Z)(n, ''.concat(r, '-mobile'), Ve),
                  (0, R.Z)(n, ''.concat(r, '-editable'), m),
                  (0, R.Z)(n, ''.concat(r, '-rtl'), le),
                  n),
                  l,
                ),
              },
              V,
            ),
            dn,
            d.createElement(Ht, (0, P.Z)({}, et, { renderTabBar: B })),
            d.createElement(
              J,
              (0, P.Z)({ destroyInactiveTabPane: ye }, Ft, { animated: Me }),
            ),
          ),
        );
      }
      var Vt = d.forwardRef(kt),
        mn = Vt,
        o = mn,
        S = i(53124),
        O = i(97647),
        C = i(33603);
      const j = { motionAppear: !1, motionEnter: !0, motionLeave: !0 };
      function Y(e) {
        let t =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : { inkBar: !0, tabPane: !1 },
          n;
        return (
          t === !1
            ? (n = { inkBar: !1, tabPane: !1 })
            : t === !0
            ? (n = { inkBar: !0, tabPane: !0 })
            : (n = Object.assign(
                { inkBar: !0 },
                typeof t == 'object' ? t : {},
              )),
          n.tabPane &&
            (n.tabPaneMotion = Object.assign(Object.assign({}, j), {
              motionName: (0, C.mL)(e, 'switch'),
            })),
          n
        );
      }
      var ee = i(50344),
        F = function (e, t) {
          var n = {};
          for (var u in e)
            Object.prototype.hasOwnProperty.call(e, u) &&
              t.indexOf(u) < 0 &&
              (n[u] = e[u]);
          if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var c = 0, u = Object.getOwnPropertySymbols(e);
              c < u.length;
              c++
            )
              t.indexOf(u[c]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, u[c]) &&
                (n[u[c]] = e[u[c]]);
          return n;
        };
      function be(e) {
        return e.filter((t) => t);
      }
      function ce(e, t) {
        if (e) return e;
        const n = (0, ee.Z)(t).map((u) => {
          if (d.isValidElement(u)) {
            const { key: c, props: r } = u,
              l = r || {},
              { tab: v } = l,
              f = F(l, ['tab']);
            return Object.assign(Object.assign({ key: String(c) }, f), {
              label: v,
            });
          }
          return null;
        });
        return be(n);
      }
      var Ne = () => null,
        Re = i(67968),
        re = i(45503),
        G = i(14747),
        T = i(67771),
        oe = (e) => {
          const { componentCls: t, motionDurationSlow: n } = e;
          return [
            {
              [t]: {
                [`${t}-switch`]: {
                  '&-appear, &-enter': {
                    transition: 'none',
                    '&-start': { opacity: 0 },
                    '&-active': { opacity: 1, transition: `opacity ${n}` },
                  },
                  '&-leave': {
                    position: 'absolute',
                    transition: 'none',
                    inset: 0,
                    '&-start': { opacity: 1 },
                    '&-active': { opacity: 0, transition: `opacity ${n}` },
                  },
                },
              },
            },
            [(0, T.oN)(e, 'slide-up'), (0, T.oN)(e, 'slide-down')],
          ];
        };
      const ne = (e) => {
          const {
            componentCls: t,
            tabsCardHorizontalPadding: n,
            tabsCardHeadBackground: u,
            tabsCardGutter: c,
            colorSplit: r,
          } = e;
          return {
            [`${t}-card`]: {
              [`> ${t}-nav, > div > ${t}-nav`]: {
                [`${t}-tab`]: {
                  margin: 0,
                  padding: n,
                  background: u,
                  border: `${e.lineWidth}px ${e.lineType} ${r}`,
                  transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                },
                [`${t}-tab-active`]: {
                  color: e.colorPrimary,
                  background: e.colorBgContainer,
                },
                [`${t}-ink-bar`]: { visibility: 'hidden' },
              },
              [`&${t}-top, &${t}-bottom`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab + ${t}-tab`]: {
                    marginLeft: { _skip_check_: !0, value: `${c}px` },
                  },
                },
              },
              [`&${t}-top`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab`]: {
                    borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
                  },
                  [`${t}-tab-active`]: {
                    borderBottomColor: e.colorBgContainer,
                  },
                },
              },
              [`&${t}-bottom`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab`]: {
                    borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,
                  },
                  [`${t}-tab-active`]: { borderTopColor: e.colorBgContainer },
                },
              },
              [`&${t}-left, &${t}-right`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab + ${t}-tab`]: { marginTop: `${c}px` },
                },
              },
              [`&${t}-left`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab`]: {
                    borderRadius: {
                      _skip_check_: !0,
                      value: `${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`,
                    },
                  },
                  [`${t}-tab-active`]: {
                    borderRightColor: {
                      _skip_check_: !0,
                      value: e.colorBgContainer,
                    },
                  },
                },
              },
              [`&${t}-right`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab`]: {
                    borderRadius: {
                      _skip_check_: !0,
                      value: `0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`,
                    },
                  },
                  [`${t}-tab-active`]: {
                    borderLeftColor: {
                      _skip_check_: !0,
                      value: e.colorBgContainer,
                    },
                  },
                },
              },
            },
          };
        },
        D = (e) => {
          const {
            componentCls: t,
            tabsHoverColor: n,
            dropdownEdgeChildVerticalPadding: u,
          } = e;
          return {
            [`${t}-dropdown`]: Object.assign(Object.assign({}, (0, G.Wf)(e)), {
              position: 'absolute',
              top: -9999,
              left: { _skip_check_: !0, value: -9999 },
              zIndex: e.zIndexPopup,
              display: 'block',
              '&-hidden': { display: 'none' },
              [`${t}-dropdown-menu`]: {
                maxHeight: e.tabsDropdownHeight,
                margin: 0,
                padding: `${u}px 0`,
                overflowX: 'hidden',
                overflowY: 'auto',
                textAlign: { _skip_check_: !0, value: 'left' },
                listStyleType: 'none',
                backgroundColor: e.colorBgContainer,
                backgroundClip: 'padding-box',
                borderRadius: e.borderRadiusLG,
                outline: 'none',
                boxShadow: e.boxShadow,
                '&-item': Object.assign(Object.assign({}, G.vS), {
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: e.tabsDropdownWidth,
                  margin: 0,
                  padding: `${e.paddingXXS}px ${e.paddingSM}px`,
                  color: e.colorText,
                  fontWeight: 'normal',
                  fontSize: e.fontSize,
                  lineHeight: e.lineHeight,
                  cursor: 'pointer',
                  transition: `all ${e.motionDurationSlow}`,
                  '> span': { flex: 1, whiteSpace: 'nowrap' },
                  '&-remove': {
                    flex: 'none',
                    marginLeft: { _skip_check_: !0, value: e.marginSM },
                    color: e.colorTextDescription,
                    fontSize: e.fontSizeSM,
                    background: 'transparent',
                    border: 0,
                    cursor: 'pointer',
                    '&:hover': { color: n },
                  },
                  '&:hover': { background: e.controlItemBgHover },
                  '&-disabled': {
                    '&, &:hover': {
                      color: e.colorTextDisabled,
                      background: 'transparent',
                      cursor: 'not-allowed',
                    },
                  },
                }),
              },
            }),
          };
        },
        Ce = (e) => {
          const { componentCls: t, margin: n, colorSplit: u } = e;
          return {
            [`${t}-top, ${t}-bottom`]: {
              flexDirection: 'column',
              [`> ${t}-nav, > div > ${t}-nav`]: {
                margin: `0 0 ${n}px 0`,
                '&::before': {
                  position: 'absolute',
                  right: { _skip_check_: !0, value: 0 },
                  left: { _skip_check_: !0, value: 0 },
                  borderBottom: `${e.lineWidth}px ${e.lineType} ${u}`,
                  content: "''",
                },
                [`${t}-ink-bar`]: {
                  height: e.lineWidthBold,
                  '&-animated': {
                    transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`,
                  },
                },
                [`${t}-nav-wrap`]: {
                  '&::before, &::after': {
                    top: 0,
                    bottom: 0,
                    width: e.controlHeight,
                  },
                  '&::before': {
                    left: { _skip_check_: !0, value: 0 },
                    boxShadow: e.boxShadowTabsOverflowLeft,
                  },
                  '&::after': {
                    right: { _skip_check_: !0, value: 0 },
                    boxShadow: e.boxShadowTabsOverflowRight,
                  },
                  [`&${t}-nav-wrap-ping-left::before`]: { opacity: 1 },
                  [`&${t}-nav-wrap-ping-right::after`]: { opacity: 1 },
                },
              },
            },
            [`${t}-top`]: {
              [`> ${t}-nav,
        > div > ${t}-nav`]: {
                '&::before': { bottom: 0 },
                [`${t}-ink-bar`]: { bottom: 0 },
              },
            },
            [`${t}-bottom`]: {
              [`> ${t}-nav, > div > ${t}-nav`]: {
                order: 1,
                marginTop: `${n}px`,
                marginBottom: 0,
                '&::before': { top: 0 },
                [`${t}-ink-bar`]: { top: 0 },
              },
              [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
                order: 0,
              },
            },
            [`${t}-left, ${t}-right`]: {
              [`> ${t}-nav, > div > ${t}-nav`]: {
                flexDirection: 'column',
                minWidth: e.controlHeight * 1.25,
                [`${t}-tab`]: {
                  padding: `${e.paddingXS}px ${e.paddingLG}px`,
                  textAlign: 'center',
                },
                [`${t}-tab + ${t}-tab`]: { margin: `${e.margin}px 0 0 0` },
                [`${t}-nav-wrap`]: {
                  flexDirection: 'column',
                  '&::before, &::after': {
                    right: { _skip_check_: !0, value: 0 },
                    left: { _skip_check_: !0, value: 0 },
                    height: e.controlHeight,
                  },
                  '&::before': {
                    top: 0,
                    boxShadow: e.boxShadowTabsOverflowTop,
                  },
                  '&::after': {
                    bottom: 0,
                    boxShadow: e.boxShadowTabsOverflowBottom,
                  },
                  [`&${t}-nav-wrap-ping-top::before`]: { opacity: 1 },
                  [`&${t}-nav-wrap-ping-bottom::after`]: { opacity: 1 },
                },
                [`${t}-ink-bar`]: {
                  width: e.lineWidthBold,
                  '&-animated': {
                    transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`,
                  },
                },
                [`${t}-nav-list, ${t}-nav-operations`]: {
                  flex: '1 0 auto',
                  flexDirection: 'column',
                },
              },
            },
            [`${t}-left`]: {
              [`> ${t}-nav, > div > ${t}-nav`]: {
                [`${t}-ink-bar`]: { right: { _skip_check_: !0, value: 0 } },
              },
              [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
                marginLeft: { _skip_check_: !0, value: `-${e.lineWidth}px` },
                borderLeft: {
                  _skip_check_: !0,
                  value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
                },
                [`> ${t}-content > ${t}-tabpane`]: {
                  paddingLeft: { _skip_check_: !0, value: e.paddingLG },
                },
              },
            },
            [`${t}-right`]: {
              [`> ${t}-nav, > div > ${t}-nav`]: {
                order: 1,
                [`${t}-ink-bar`]: { left: { _skip_check_: !0, value: 0 } },
              },
              [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
                order: 0,
                marginRight: { _skip_check_: !0, value: -e.lineWidth },
                borderRight: {
                  _skip_check_: !0,
                  value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
                },
                [`> ${t}-content > ${t}-tabpane`]: {
                  paddingRight: { _skip_check_: !0, value: e.paddingLG },
                },
              },
            },
          };
        },
        pe = (e) => {
          const { componentCls: t, padding: n } = e;
          return {
            [t]: {
              '&-small': {
                [`> ${t}-nav`]: {
                  [`${t}-tab`]: {
                    padding: `${e.paddingXS}px 0`,
                    fontSize: e.fontSize,
                  },
                },
              },
              '&-large': {
                [`> ${t}-nav`]: {
                  [`${t}-tab`]: { padding: `${n}px 0`, fontSize: e.fontSizeLG },
                },
              },
            },
            [`${t}-card`]: {
              [`&${t}-small`]: {
                [`> ${t}-nav`]: {
                  [`${t}-tab`]: { padding: `${e.paddingXXS * 1.5}px ${n}px` },
                },
                [`&${t}-bottom`]: {
                  [`> ${t}-nav ${t}-tab`]: {
                    borderRadius: `0 0 ${e.borderRadius}px ${e.borderRadius}px`,
                  },
                },
                [`&${t}-top`]: {
                  [`> ${t}-nav ${t}-tab`]: {
                    borderRadius: `${e.borderRadius}px ${e.borderRadius}px 0 0`,
                  },
                },
                [`&${t}-right`]: {
                  [`> ${t}-nav ${t}-tab`]: {
                    borderRadius: {
                      _skip_check_: !0,
                      value: `0 ${e.borderRadius}px ${e.borderRadius}px 0`,
                    },
                  },
                },
                [`&${t}-left`]: {
                  [`> ${t}-nav ${t}-tab`]: {
                    borderRadius: {
                      _skip_check_: !0,
                      value: `${e.borderRadius}px 0 0 ${e.borderRadius}px`,
                    },
                  },
                },
              },
              [`&${t}-large`]: {
                [`> ${t}-nav`]: {
                  [`${t}-tab`]: {
                    padding: `${e.paddingXS}px ${n}px ${e.paddingXXS * 1.5}px`,
                  },
                },
              },
            },
          };
        },
        A = (e) => {
          const {
              componentCls: t,
              tabsActiveColor: n,
              tabsHoverColor: u,
              iconCls: c,
              tabsHorizontalGutter: r,
            } = e,
            l = `${t}-tab`;
          return {
            [l]: {
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              padding: `${e.paddingSM}px 0`,
              fontSize: `${e.fontSize}px`,
              background: 'transparent',
              border: 0,
              outline: 'none',
              cursor: 'pointer',
              '&-btn, &-remove': Object.assign(
                { '&:focus:not(:focus-visible), &:active': { color: n } },
                (0, G.Qy)(e),
              ),
              '&-btn': { outline: 'none', transition: 'all 0.3s' },
              '&-remove': {
                flex: 'none',
                marginRight: { _skip_check_: !0, value: -e.marginXXS },
                marginLeft: { _skip_check_: !0, value: e.marginXS },
                color: e.colorTextDescription,
                fontSize: e.fontSizeSM,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                transition: `all ${e.motionDurationSlow}`,
                '&:hover': { color: e.colorTextHeading },
              },
              '&:hover': { color: u },
              [`&${l}-active ${l}-btn`]: {
                color: e.colorPrimary,
                textShadow: e.tabsActiveTextShadow,
              },
              [`&${l}-disabled`]: {
                color: e.colorTextDisabled,
                cursor: 'not-allowed',
              },
              [`&${l}-disabled ${l}-btn, &${l}-disabled ${t}-remove`]: {
                '&:focus, &:active': { color: e.colorTextDisabled },
              },
              [`& ${l}-remove ${c}`]: { margin: 0 },
              [c]: { marginRight: { _skip_check_: !0, value: e.marginSM } },
            },
            [`${l} + ${l}`]: {
              margin: { _skip_check_: !0, value: `0 0 0 ${r}px` },
            },
          };
        },
        ie = (e) => {
          const {
            componentCls: t,
            tabsHorizontalGutter: n,
            iconCls: u,
            tabsCardGutter: c,
          } = e;
          return {
            [`${t}-rtl`]: {
              direction: 'rtl',
              [`${t}-nav`]: {
                [`${t}-tab`]: {
                  margin: { _skip_check_: !0, value: `0 0 0 ${n}px` },
                  [`${t}-tab:last-of-type`]: {
                    marginLeft: { _skip_check_: !0, value: 0 },
                  },
                  [u]: {
                    marginRight: { _skip_check_: !0, value: 0 },
                    marginLeft: { _skip_check_: !0, value: `${e.marginSM}px` },
                  },
                  [`${t}-tab-remove`]: {
                    marginRight: { _skip_check_: !0, value: `${e.marginXS}px` },
                    marginLeft: {
                      _skip_check_: !0,
                      value: `-${e.marginXXS}px`,
                    },
                    [u]: { margin: 0 },
                  },
                },
              },
              [`&${t}-left`]: {
                [`> ${t}-nav`]: { order: 1 },
                [`> ${t}-content-holder`]: { order: 0 },
              },
              [`&${t}-right`]: {
                [`> ${t}-nav`]: { order: 0 },
                [`> ${t}-content-holder`]: { order: 1 },
              },
              [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab + ${t}-tab`]: {
                    marginRight: { _skip_check_: !0, value: `${c}px` },
                    marginLeft: { _skip_check_: !0, value: 0 },
                  },
                },
              },
            },
            [`${t}-dropdown-rtl`]: { direction: 'rtl' },
            [`${t}-menu-item`]: {
              [`${t}-dropdown-rtl`]: {
                textAlign: { _skip_check_: !0, value: 'right' },
              },
            },
          };
        },
        Le = (e) => {
          const {
            componentCls: t,
            tabsCardHorizontalPadding: n,
            tabsCardHeight: u,
            tabsCardGutter: c,
            tabsHoverColor: r,
            tabsActiveColor: l,
            colorSplit: v,
          } = e;
          return {
            [t]: Object.assign(
              Object.assign(
                Object.assign(Object.assign({}, (0, G.Wf)(e)), {
                  display: 'flex',
                  [`> ${t}-nav, > div > ${t}-nav`]: {
                    position: 'relative',
                    display: 'flex',
                    flex: 'none',
                    alignItems: 'center',
                    [`${t}-nav-wrap`]: {
                      position: 'relative',
                      display: 'flex',
                      flex: 'auto',
                      alignSelf: 'stretch',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      transform: 'translate(0)',
                      '&::before, &::after': {
                        position: 'absolute',
                        zIndex: 1,
                        opacity: 0,
                        transition: `opacity ${e.motionDurationSlow}`,
                        content: "''",
                        pointerEvents: 'none',
                      },
                    },
                    [`${t}-nav-list`]: {
                      position: 'relative',
                      display: 'flex',
                      transition: `opacity ${e.motionDurationSlow}`,
                    },
                    [`${t}-nav-operations`]: {
                      display: 'flex',
                      alignSelf: 'stretch',
                    },
                    [`${t}-nav-operations-hidden`]: {
                      position: 'absolute',
                      visibility: 'hidden',
                      pointerEvents: 'none',
                    },
                    [`${t}-nav-more`]: {
                      position: 'relative',
                      padding: n,
                      background: 'transparent',
                      border: 0,
                      '&::after': {
                        position: 'absolute',
                        right: { _skip_check_: !0, value: 0 },
                        bottom: 0,
                        left: { _skip_check_: !0, value: 0 },
                        height: e.controlHeightLG / 8,
                        transform: 'translateY(100%)',
                        content: "''",
                      },
                    },
                    [`${t}-nav-add`]: Object.assign(
                      {
                        minWidth: `${u}px`,
                        marginLeft: { _skip_check_: !0, value: `${c}px` },
                        padding: `0 ${e.paddingXS}px`,
                        background: 'transparent',
                        border: `${e.lineWidth}px ${e.lineType} ${v}`,
                        borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
                        outline: 'none',
                        cursor: 'pointer',
                        color: e.colorText,
                        transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                        '&:hover': { color: r },
                        '&:active, &:focus:not(:focus-visible)': { color: l },
                      },
                      (0, G.Qy)(e),
                    ),
                  },
                  [`${t}-extra-content`]: { flex: 'none' },
                  [`${t}-ink-bar`]: {
                    position: 'absolute',
                    background: e.colorPrimary,
                    pointerEvents: 'none',
                  },
                }),
                A(e),
              ),
              {
                [`${t}-content`]: { position: 'relative', width: '100%' },
                [`${t}-content-holder`]: {
                  flex: 'auto',
                  minWidth: 0,
                  minHeight: 0,
                },
                [`${t}-tabpane`]: {
                  outline: 'none',
                  '&-hidden': { display: 'none' },
                },
              },
            ),
            [`${t}-centered`]: {
              [`> ${t}-nav, > div > ${t}-nav`]: {
                [`${t}-nav-wrap`]: {
                  [`&:not([class*='${t}-nav-wrap-ping'])`]: {
                    justifyContent: 'center',
                  },
                },
              },
            },
          };
        };
      var dt = (0, Re.Z)(
          'Tabs',
          (e) => {
            const t = e.controlHeightLG,
              n = (0, re.TS)(e, {
                tabsHoverColor: e.colorPrimaryHover,
                tabsActiveColor: e.colorPrimaryActive,
                tabsCardHorizontalPadding: `${
                  (t - Math.round(e.fontSize * e.lineHeight)) / 2 - e.lineWidth
                }px ${e.padding}px`,
                tabsCardHeight: t,
                tabsCardGutter: e.marginXXS / 2,
                tabsHorizontalGutter: 32,
                tabsCardHeadBackground: e.colorFillAlter,
                dropdownEdgeChildVerticalPadding: e.paddingXXS,
                tabsActiveTextShadow: '0 0 0.25px currentcolor',
                tabsDropdownHeight: 200,
                tabsDropdownWidth: 120,
              });
            return [pe(n), ie(n), Ce(n), D(n), ne(n), Le(n), oe(n)];
          },
          (e) => ({ zIndexPopup: e.zIndexPopupBase + 50 }),
        ),
        qt = function (e, t) {
          var n = {};
          for (var u in e)
            Object.prototype.hasOwnProperty.call(e, u) &&
              t.indexOf(u) < 0 &&
              (n[u] = e[u]);
          if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var c = 0, u = Object.getOwnPropertySymbols(e);
              c < u.length;
              c++
            )
              t.indexOf(u[c]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, u[c]) &&
                (n[u[c]] = e[u[c]]);
          return n;
        };
      function a(e) {
        var {
            type: t,
            className: n,
            size: u,
            onEdit: c,
            hideAdd: r,
            centered: l,
            addIcon: v,
            popupClassName: f,
            children: y,
            items: b,
            animated: m,
          } = e,
          g = qt(e, [
            'type',
            'className',
            'size',
            'onEdit',
            'hideAdd',
            'centered',
            'addIcon',
            'popupClassName',
            'children',
            'items',
            'animated',
          ]);
        const { prefixCls: h, moreIcon: x = d.createElement(s.Z, null) } = g,
          {
            getPrefixCls: K,
            direction: Q,
            getPopupContainer: W,
          } = d.useContext(S.E_),
          I = K('tabs', h),
          [me, te] = dt(I);
        let ye;
        t === 'editable-card' &&
          (ye = {
            onEdit: (X, q) => {
              let { key: Z, event: V } = q;
              c == null || c(X === 'add' ? V : Z, X);
            },
            removeIcon: d.createElement(ue.Z, null),
            addIcon: v || d.createElement($e.Z, null),
            showAdd: r !== !0,
          });
        const B = K(),
          w = ce(b, y),
          ae = Y(I, m);
        return me(
          d.createElement(O.Z.Consumer, null, (X) => {
            const q = u !== void 0 ? u : X;
            return d.createElement(
              o,
              Object.assign(
                {
                  direction: Q,
                  getPopupContainer: W,
                  moreTransitionName: `${B}-slide-up`,
                },
                g,
                {
                  items: w,
                  className: z()(
                    {
                      [`${I}-${q}`]: q,
                      [`${I}-card`]: ['card', 'editable-card'].includes(t),
                      [`${I}-editable-card`]: t === 'editable-card',
                      [`${I}-centered`]: l,
                    },
                    n,
                    te,
                  ),
                  popupClassName: z()(f, te),
                  editable: ye,
                  moreIcon: x,
                  prefixCls: I,
                  animated: ae,
                },
              ),
            );
          }),
        );
      }
      a.TabPane = Ne;
      var p = a;
    },
    20640: function (Ye, de, i) {
      'use strict';
      var ue = i(11742),
        s = { 'text/plain': 'Text', 'text/html': 'Url', default: 'Text' },
        $e = 'Copy to clipboard: #{key}, Enter';
      function U(P) {
        var R =
          (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
        return P.replace(/#{\s*key\s*}/g, R);
      }
      function z(P, R) {
        var $,
          H,
          fe,
          Ee,
          d,
          ve,
          Ke = !1;
        R || (R = {}), ($ = R.debug || !1);
        try {
          (fe = ue()),
            (Ee = document.createRange()),
            (d = document.getSelection()),
            (ve = document.createElement('span')),
            (ve.textContent = P),
            (ve.ariaHidden = 'true'),
            (ve.style.all = 'unset'),
            (ve.style.position = 'fixed'),
            (ve.style.top = 0),
            (ve.style.clip = 'rect(0, 0, 0, 0)'),
            (ve.style.whiteSpace = 'pre'),
            (ve.style.webkitUserSelect = 'text'),
            (ve.style.MozUserSelect = 'text'),
            (ve.style.msUserSelect = 'text'),
            (ve.style.userSelect = 'text'),
            ve.addEventListener('copy', function (Te) {
              if ((Te.stopPropagation(), R.format))
                if (
                  (Te.preventDefault(), typeof Te.clipboardData == 'undefined')
                ) {
                  $ && console.warn('unable to use e.clipboardData'),
                    $ && console.warn('trying IE specific stuff'),
                    window.clipboardData.clearData();
                  var Ge = s[R.format] || s.default;
                  window.clipboardData.setData(Ge, P);
                } else
                  Te.clipboardData.clearData(),
                    Te.clipboardData.setData(R.format, P);
              R.onCopy && (Te.preventDefault(), R.onCopy(Te.clipboardData));
            }),
            document.body.appendChild(ve),
            Ee.selectNodeContents(ve),
            d.addRange(Ee);
          var rt = document.execCommand('copy');
          if (!rt) throw new Error('copy command was unsuccessful');
          Ke = !0;
        } catch (Te) {
          $ && console.error('unable to copy using execCommand: ', Te),
            $ && console.warn('trying IE specific stuff');
          try {
            window.clipboardData.setData(R.format || 'text', P),
              R.onCopy && R.onCopy(window.clipboardData),
              (Ke = !0);
          } catch (Ge) {
            $ && console.error('unable to copy using clipboardData: ', Ge),
              $ && console.error('falling back to prompt'),
              (H = U('message' in R ? R.message : $e)),
              window.prompt(H, P);
          }
        } finally {
          d &&
            (typeof d.removeRange == 'function'
              ? d.removeRange(Ee)
              : d.removeAllRanges()),
            ve && document.body.removeChild(ve),
            fe();
        }
        return Ke;
      }
      Ye.exports = z;
    },
    79370: function (Ye, de, i) {
      'use strict';
      i.d(de, {
        G: function () {
          return U;
        },
      });
      var ue = i(98924),
        s = function (P) {
          if ((0, ue.Z)() && window.document.documentElement) {
            var R = Array.isArray(P) ? P : [P],
              $ = window.document.documentElement;
            return R.some(function (H) {
              return H in $.style;
            });
          }
          return !1;
        },
        $e = function (P, R) {
          if (!s(P)) return !1;
          var $ = document.createElement('div'),
            H = $.style[P];
          return ($.style[P] = R), $.style[P] !== H;
        };
      function U(z, P) {
        return !Array.isArray(z) && P !== void 0 ? $e(z, P) : s(z);
      }
    },
    11742: function (Ye) {
      Ye.exports = function () {
        var de = document.getSelection();
        if (!de.rangeCount) return function () {};
        for (
          var i = document.activeElement, ue = [], s = 0;
          s < de.rangeCount;
          s++
        )
          ue.push(de.getRangeAt(s));
        switch (i.tagName.toUpperCase()) {
          case 'INPUT':
          case 'TEXTAREA':
            i.blur();
            break;
          default:
            i = null;
            break;
        }
        return (
          de.removeAllRanges(),
          function () {
            de.type === 'Caret' && de.removeAllRanges(),
              de.rangeCount ||
                ue.forEach(function ($e) {
                  de.addRange($e);
                }),
              i && i.focus();
          }
        );
      };
    },
  },
]);

//# sourceMappingURL=598.0c0d715f.async.js.map
