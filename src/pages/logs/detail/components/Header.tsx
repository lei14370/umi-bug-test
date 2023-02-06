/* @flow */
import { getTheme } from '../utils/dom/css';
import type { Theme } from '../styles';

const headerStyle = (theme: Theme) => ({
  fontSize: '2em',
  fontFamily: 'sans-serif',
  color: theme.headerColor,
  whiteSpace: 'pre-wrap',
  // Top bottom margin spaces header
  // Right margin revents overlap with close button
  margin: '0 2rem 0.75rem 0',
  flex: '0 0 auto',
  maxHeight: '50%',
  overflow: 'auto',
});

type HeaderPropType = {
  headerText: string;
};

function Header(props: HeaderPropType) {
  const theme = getTheme();
  return <div style={headerStyle(theme)}>{props.headerText}</div>;
}

export default Header;
