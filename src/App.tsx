import { ThemeProvider } from 'styled-components';
import Home from './pages/home';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
