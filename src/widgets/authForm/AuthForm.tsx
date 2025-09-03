import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { useState } from 'react';

import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import { setUser } from '../../app/store/userSlice';
import TextInput from '../../features/textInput/TextInput';
import { type FormFields, secondFormSchema } from '../../shared/formSchema/secondFormSchema';

const StyledBox = styled(Box)(() => ({
  width: '100%',
}));

const StyledButton = styled(Button)(() => ({
  borderRadius: '8px',
  width: '100%',
  height: '44px',
  background: '#1886e5',
}));

const inputsArray = [
  {
    title: 'Логин (Email)',
    name: 'email',
    placeholder: 'example@mail.com',
    alert: 'Некорректный логин',
  },
  { title: 'Пароль', name: 'password', type: 'password', alert: 'Некорректный пароль' },
];

const AuthForm = () => {
  const methods = useForm<FormFields>({
    resolver: zodResolver(secondFormSchema),
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [isError, setIsError] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    const usersArray = await (await fetch('http://localhost:3000/users')).json();
    usersArray.map(
      (item: { email: string; password: string; firstName: string; lastName: string }) => {
        if (item.email === data.email && item.password === data.password) {
          dispatch(
            setUser({ firstName: item.firstName, lastName: item.lastName, email: item.email })
          );
          navigate('/start');
          return true;
        }
        setIsError(true);
      }
    );
  };

  return (
    <Box component={'section'} sx={{ p: '10px', maxWidth: 580, mx: 'auto', boxShadow: 'none' }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontSize: '42px',
          fontWeight: '700',
          lineHeight: '110%',
          marginBottom: '48px',
        }}
      >
        Авторизация
      </Typography>
      {isError && (
        <Typography sx={{ color: '#f34c41', mt: 2 }}>Неверный Email или пароль</Typography>
      )}
      <Divider sx={{ marginBottom: '48px' }} />
      <FormProvider {...methods}>
        <Box component="form" onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            {inputsArray.map((item) => {
              return (
                <TextInput
                  key={item.title}
                  title={item.title}
                  name={item.name}
                  type={item.type}
                  placeholder={item.placeholder}
                  alert={item.alert}
                />
              );
            })}

            <StyledBox>
              <StyledButton type="submit" variant="contained" size="large">
                <Typography
                  sx={{
                    textTransform: 'none',
                    color: '#fff',
                    letterSpacing: '0.03em',
                    fontWeight: '500',
                  }}
                >
                  Войти
                </Typography>
              </StyledButton>
            </StyledBox>
          </Grid>
        </Box>
      </FormProvider>
    </Box>
  );
};
export default AuthForm;
