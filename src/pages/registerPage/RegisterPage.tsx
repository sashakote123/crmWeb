import { useSelector } from 'react-redux';
import { Link } from 'react-router';

import { Box, Portal, Typography } from '@mui/material';

import type { RootState } from '../../app/store/store';
import ThemeSwitcher from '../../features/themeSwitcher/ThemeSwitcher';
import RegisterForm from '../../widgets/registerForm/RegisterForm';
import img1 from './assets/registerImage1.png';
import img2 from './assets/registerImage2.png';

const RegisterPage = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <Portal>
      <Box
        component={'section'}
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 9999,
          width: '100vw',
          height: 'calc(100vh + 200px)',
          backgroundColor: 'background.paper',
          color: 'text.primary',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '50%',
            height: 'calc(100vh + 200px)',
            padding: '29px',
            backgroundColor: `${theme === 'light' ? '#F8F8F8' : '#101C2F'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '@media (max-width: 900px)': {
              display: 'none',
            },
          }}
        >
          <img src={theme === 'light' ? img1 : img2} alt="img" />
        </Box>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            padding: '51px 80px',
            '@media (max-width: 900px)': {
              padding: '30px 30px',
            },
          }}
        >
          <Box
            sx={{
              mb: 10,
              '@media (max-width: 900px)': {
                display: 'none',
              },
            }}
          >
            <ThemeSwitcher />
          </Box>

          <RegisterForm />
          <Typography sx={{ mt: 5, alignSelf: 'flex-start' }}>
            <Link to={'/auth'}>У вас уже есть учетная запись?</Link>
          </Typography>
        </Box>
      </Box>
    </Portal>
  );
};
export default RegisterPage;
