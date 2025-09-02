import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form';

import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import TextInput from '../../features/textInput/TextInput';
import { type FormFields, formSchema } from '../../shared/formSchema/formSchema';
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
  { title: 'Логин (Email)', name: 'email', placeholder: 'example@mail.com' },
  { title: 'Пароль', name: 'password', type: 'password' },
];

const AuthForm = () => {
  const methods = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data: FormFields) => {
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
        Авторизация
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
