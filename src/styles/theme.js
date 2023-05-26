import { ThemeProvider } from 'styled-components';

import theme from "../themes/default";
import GlobalStyles from './globals';

const color = {
  colors: {
    primary: 'linear-gradient(270deg, #eb7474, #ba1010)',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;