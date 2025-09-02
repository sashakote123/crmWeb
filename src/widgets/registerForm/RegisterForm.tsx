import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form';

import styled from '@emotion/styled';
import { Box, Button, Checkbox, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import TextInput from '../../features/textInput/TextInput';
import type { IFormFields } from './types';

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
  { title: 'Имя', name: 'firstName', placeholder: 'Введите ваше имя' },
  { title: 'Фамилия', name: 'lastName', placeholder: 'Введите вашу фамилию' },
  { title: 'Email', name: 'email', placeholder: 'example@mail.com' },
  { title: 'Пароль', name: 'password', type: 'password' },
];

const RegisterForm = () => {
  const methods = useForm<IFormFields>({});

  const onSubmit: SubmitHandler<IFormFields> = (data: IFormFields) => {
    console.log(data);
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
        Регистрация
      </Typography>
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
                />
              );
            })}

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox />
              <Typography>
                Нажимая на кнопку «зарегистрироваться» вы соглашаетесь с Условиями использования и
                Политикой конфиденциальности
              </Typography>
            </Box>

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
                  Зарегистрироваться
                </Typography>
              </StyledButton>
            </StyledBox>
          </Grid>
        </Box>
      </FormProvider>
    </Box>
  );
};
export default RegisterForm;
