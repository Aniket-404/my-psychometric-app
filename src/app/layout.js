// src/app/layout.js
'use client'; // Ensure this is a client component

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your theme

const Layout = ({ children }) => {
  return (
    <html lang="en"> {/* Add the <html> tag */}
      <body> {/* Add the <body> tag */}
        <ThemeProvider theme={theme}>
          <div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
