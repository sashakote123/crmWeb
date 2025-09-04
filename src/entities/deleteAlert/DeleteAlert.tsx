import { useSelector } from 'react-redux';

import { Box, Button, Fade, Modal, Typography } from '@mui/material';

import type { RootState } from '../../app/store/store';
import type { IProjectItem, typeOfPage } from '../../shared/types';

interface Props {
  object: IProjectItem;

  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: () => Promise<void>;

  type: typeOfPage;
}

const DeleteAlert: React.FC<Props> = ({ object, isOpen, setIsOpen, refetch, type }) => {
  const theme = useSelector((store: RootState) => store.theme.theme);

  const onSubmit = async () => {
    await fetch(`http://localhost:3000/${type}/${object.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
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
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: 797,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            color={`${theme === 'light' ? '#2B2D33' : 'rgba(255, 255, 255, 0.7)'}`}
            fontSize={32}
            textAlign={'center'}
            fontWeight={500}
            mb={'42px'}
          >
            Вы уверены, что хотите удалить проект?
          </Typography>
          <Typography
            color={`${theme === 'light' ? '#2B2D33' : 'rgba(255, 255, 255, 0.7)'}`}
            fontSize={16}
            textAlign={'center'}
            fontWeight={500}
            mb={'48px'}
          >
            После удаления проекта, вы не сможете восстановить его
          </Typography>
          <Box display={'flex'} width={'100%'} justifyContent={'center'} gap={2}>
            <Button
              sx={{
                border: '2px solid #1886e5',
                backgroundColor: `${theme === 'light' ? '#fff' : '#0A111C'}`,
              }}
              onClick={() => setIsOpen(false)}
            >
              <Typography
                textTransform={'none'}
                color={`${theme === 'light' ? 'rgba(10, 17, 28, 0.8)' : '#fff'}`}
              >
                Отменить
              </Typography>
            </Button>
            <Button sx={{ backgroundColor: '#1886E5' }} onClick={onSubmit}>
              <Typography textTransform={'none'}>Удалить</Typography>
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
export default DeleteAlert;
