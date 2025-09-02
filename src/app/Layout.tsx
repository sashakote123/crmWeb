import { type ReactNode } from 'react';

import { Box, ScopedCssBaseline } from '@mui/material';

import Header from '../widgets/header/Header';
import Navigation from '../widgets/navigation/Navigation';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ScopedCssBaseline>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <Navigation />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            mt: '64px',
            // width: `calc(100% - 86px)`,
            transition: 'width 0.3s ease',
            minHeight: 'calc(100vh - 56px)',
          }}
        >
          {children}
        </Box>
      </Box>
    </ScopedCssBaseline>
  );
};

export default Layout;
