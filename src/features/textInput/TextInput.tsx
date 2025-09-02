import { useFormContext } from 'react-hook-form';

import styled from '@emotion/styled';
import { Box, Button, TextField, Typography } from '@mui/material';

import x from './assets/x.svg';

const StyledForm = styled(TextField)(() => ({
  width: '100%',
  //   height: '56px',
  border: 'none',
  borderRadius: '12px',
  borderBottom: '1px solid #c1c7cd',
  fontSize: '16px',
  '& fieldset': { display: 'none' },
}));

const StyledBox = styled(Box)(() => ({
  width: '100%',
}));

const StyledTypography = styled(Typography)(() => ({
  marginBottom: '8px',
  fontSize: '14px',
  lineHeight: '140%',
}));

interface Props {
  title: string;
  name: string;
  placeholder?: string;
  type?: string;
}

const TextInput: React.FC<Props> = ({ title, name, placeholder, type }) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  return (
    <StyledBox sx={{ position: 'relative' }}>
      <StyledTypography>
        {title}
        {errors.root ? <>Errro</> : null}
      </StyledTypography>
      <StyledForm {...register(name)} type={type ?? 'text'} name={name} placeholder={placeholder} />
      <Button
        onClick={() => setValue(name, '')}
        sx={{ position: 'absolute', right: 0, bottom: '9px' }}
      >
        <img src={x} alt="x" />
      </Button>
    </StyledBox>
  );
};
export default TextInput;
