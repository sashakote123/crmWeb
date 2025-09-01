import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import ThemeSwitcher from '../../features/themeSwitcher/ThemeSwitcher';
import icon from './assets/icon.svg';

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            marginLeft: '86px',
          }}
        >
          <ThemeSwitcher />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <Box sx={{ position: 'relative' }}>
              <img src={icon} alt="icon" />
              <Typography
                sx={{
                  position: 'absolute',
                  width: '16px',
                  height: '16px',
                  right: '-5px',
                  top: '-5px',
                  backgroundColor: '#F3750D',
                  borderRadius: '50%',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px',
                }}
              >
                6
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <Box
                sx={{
                  width: '44px',
                  height: '44px',
                  backgroundColor: '#979797',
                  borderRadius: '50%',
                }}
              >
                <img />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: '700',
                  }}
                >
                  Vera Kora
                </Typography>
                <Typography
                  sx={{
                    fontWeight: '500',
                    fontSize: '12px',
                  }}
                >
                  Админ
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
