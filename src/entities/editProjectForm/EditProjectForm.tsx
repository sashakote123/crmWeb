import { type SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import {
  Box,
  Button,
  Fade,
  FormControl,
  Grid,
  MenuItem,
  Modal,
  Select,
  styled,
  TextField,
  Typography,
} from '@mui/material';

import type { RootState } from '../../app/store/store';
import type { IFormFields, IProjectItem } from './types';

interface Props {
  project: IProjectItem;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: () => Promise<void>;
}

const selectArray = [
  { status: 'Идея', value: 1 },
  { status: 'Разработка', value: 2 },
  { status: 'Готово', value: 3 },
];

const EditProjectForm: React.FC<Props> = ({ project, isOpen, setIsOpen, refetch }) => {
  const theme = useSelector((store: RootState) => store.theme.theme);
  const userEmail = useSelector((store: RootState) => store.user.email);

  const { register, handleSubmit, watch } = useForm<IFormFields>();

  const StyledTypography = styled(Typography)(() => ({
    marginBottom: '8px',
    fontSize: '14px',
    lineHeight: '140%',
    color: `${theme === 'light' ? '#2B2D33' : 'rgba(255, 255, 255, 0.7)'}`,
  }));

  const onSubmit: SubmitHandler<IFormFields> = async (data: IFormFields) => {
    await fetch(`http://localhost:3000/projects/${project.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, author: userEmail }),
    });
    setIsOpen(false);
    refetch();
  };

  return (
    <Modal
      open={isOpen}
      closeAfterTransition
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
          },
        },
      }}
    >
      <Fade in={true}>
        <Box
          component={'form'}
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: 515,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: 32,
              fontWeight: 700,
              textAlign: 'center',
              mb: 7,
              color: 'text.primary',
            }}
          >
            Редактирование
          </Typography>
          <Grid container spacing={5} mb={9} maxWidth={435}>
            <Box width="100%">
              <StyledTypography>Название проекта</StyledTypography>
              <TextField
                {...register('name')}
                sx={{
                  '& .MuiInputBase-root': {
                    height: '32px',
                  },
                  '& .MuiInputBase-input': {
                    height: '32px',
                    padding: '0 12px',
                    display: 'flex',
                    alignItems: 'center',
                  },
                  '& fieldset': {
                    display: 'none',
                  },
                }}
                fullWidth
                defaultValue={project.name}
              />
            </Box>
            <Box width="100%">
              <StyledTypography>Описание проекта</StyledTypography>
              <TextField
                {...register('desc')}
                sx={{ height: '80px', '& fieldset': { display: 'none' } }}
                fullWidth
                defaultValue={project.desc}
              />
            </Box>
            <Box width={145}>
              <FormControl fullWidth>
                <Select {...register('status')} value={watch('status') || ''} displayEmpty>
                  <MenuItem value={''} disabled>
                    Статус
                  </MenuItem>
                  {selectArray.map((item) => {
                    return (
                      <MenuItem key={item.value} value={item.value}>
                        {item.status}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>

            <Box width="100%">
              <StyledTypography>Пригласить в проект</StyledTypography>
              <TextField
                {...register('invitedMembers')}
                sx={{
                  '& .MuiInputBase-root': {
                    height: '32px',
                  },
                  '& .MuiInputBase-input': {
                    height: '32px',
                    padding: '0 12px',
                    display: 'flex',
                    alignItems: 'center',
                  },
                  '& fieldset': {
                    display: 'none',
                  },
                }}
                fullWidth
                defaultValue={project.invitedMembers}
              />
            </Box>
          </Grid>

          <Box display={'flex'} gap={2}>
            <Button
              sx={{
                border: '2px solid #1886e5',
                backgroundColor: `${theme === 'light' ? '#fff' : '#0A111C'}`,
              }}
              onClick={() => setIsOpen(false)}
              variant="contained"
            >
              <Typography
                color={`${theme === 'light' ? 'rgba(10, 17, 28, 0.8)' : '#fff'}`}
                textTransform={'none'}
              >
                Отменить
              </Typography>
            </Button>
            <Button type="submit" sx={{ backgroundColor: '#1886E5' }} variant="contained">
              <Typography color="#fff" textTransform={'none'}>
                Редактировать
              </Typography>
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
export default EditProjectForm;
