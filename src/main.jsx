import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Routes/App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './Styles/Common.scss';

const customTheme = extendTheme({
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '960px',
    xl: '1024px',
    '2xl': '1200px',
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "'Spoqa Han Sans Neo', 'sans-serif'",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider theme={customTheme} resetCSS={true}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
