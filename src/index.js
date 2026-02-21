import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './contexts/ThemeContext'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const container = document.getElementById('root');
const root = createRoot(container);
const muiTheme = createTheme();

root.render(
    <ThemeProvider theme={muiTheme}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ThemeProvider>
);

reportWebVitals();
