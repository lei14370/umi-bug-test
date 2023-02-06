/* eslint-disable */
/* @flow */
import React, { useState } from 'react';

import type { Theme } from '../styles';
import { getTheme } from '../utils/dom/css';
const _collapsibleStyle = {
  cursor: 'pointer',
  border: 'none',
  display: 'block',
  width: '100%',
  textAlign: 'left',
  fontFamily: 'Consolas, Menlo, monospace',
  fontSize: '1em',
  padding: '0px',
  lineHeight: '1.5',
};

const collapsibleCollapsedStyle = (theme: Theme) => ({
  ..._collapsibleStyle,
  color: theme.color,
  background: theme.background,
  marginBottom: '1.5em',
});

const collapsibleExpandedStyle = (theme: Theme) => ({
  ..._collapsibleStyle,
  color: theme.color,
  background: theme.background,
  marginBottom: '0.6em',
});

type CollapsiblePropsType = {
  children: React.ReactElement<any>[];
};

function Collapsible(props: CollapsiblePropsType) {
  const theme = getTheme();
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const count = props.children.length;
  return (
    <div>
      <button
        onClick={toggleCollapsed}
        style={
          collapsed
            ? collapsibleCollapsedStyle(theme)
            : collapsibleExpandedStyle(theme)
        }
      >
        {(collapsed ? '▶' : '▼') +
          ` ${count} stack frames were ` +
          (collapsed ? 'collapsed.' : 'expanded.')}
      </button>
      <div style={{ display: collapsed ? 'none' : 'block' }}>
        {props.children}
        <button
          onClick={toggleCollapsed}
          style={collapsibleExpandedStyle(theme)}
        >
          {`▲ ${count} stack frames were expanded.`}
        </button>
      </div>
    </div>
  );
}

export default Collapsible;
