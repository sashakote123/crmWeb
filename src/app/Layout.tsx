// Layout.tsx
import React, { type ReactNode } from 'react';

import { Box } from '@mui/material';

import Header from '../widgets/header/Header';
import Navigation from '../widgets/navigation/Navigation';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Navigation />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: '64px',
          width: `calc(100% - 86px)`,
          transition: 'width 0.3s ease',
          height: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
