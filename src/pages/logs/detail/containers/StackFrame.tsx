/* @flow */
import CodeBlock from './StackFrameCodeBlock';

import type { Theme } from '../styles';
import { getTheme } from '../utils/dom/css';
const linkStyle = () => ({
  fontSize: '0.9em',
  marginBottom: '0.9em',
});

const anchorStyle = (theme: Theme) => ({
  textDecoration: 'none',
  color: theme.anchorColor,
  cursor: 'pointer',
});

const codeAnchorStyle = () => ({
  cursor: 'pointer',
});

function StackFrame(props: any) {
  const theme = getTheme();
  const { functionName, url, codeBlockProps } = props;
  return (
    <div>
      <div>{functionName}</div>
      <div style={linkStyle()}>
        <span style={anchorStyle(theme)}>{url}</span>
      </div>
      {codeBlockProps && (
        <span>
          <span style={codeAnchorStyle()}>
            <CodeBlock {...codeBlockProps} />
          </span>
        </span>
      )}
    </div>
  );
}

export default StackFrame;
