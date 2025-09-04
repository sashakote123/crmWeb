import { useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

import CreateProjectForm from '../../entities/createProjectForm/CreateProjectForm';
import cards from './assets/cards.svg';
import list from './assets/list.svg';
import man from './assets/man.svg';
import plus from './assets/plus.svg';

interface Props {
  title: string;
  sorted?: boolean;
}

const PageHeader: React.FC<Props> = ({ title, sorted }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <Box display={'flex'} justifyContent={'space-between'} mb={6}>
      {isVisible && <CreateProjectForm isOpen={isVisible} setIsOpen={setIsVisible} />}

      <Box display={'flex'} alignItems={'center'} gap={'67px'}>
        <Typography sx={{ fontSize: '32px' }} fontWeight={600}>
          {title}
        </Typography>
        {sorted && (
          <Box>
            <Button sx={{ minWidth: 'auto', p: 0.5 }}>
              <img src={cards} alt="cards" />
            </Button>
            <Button sx={{ minWidth: 'auto', p: 0.5 }}>
              <img style={{ width: '90%' }} src={list} alt="list" />
            </Button>
          </Box>
        )}
      </Box>

      <Box>
        <Button sx={{ minWidth: 'auto', p: 0.5 }} onClick={() => setIsVisible(true)}>
          <img src={plus} alt="plus" />
        </Button>
        <Button sx={{ minWidth: 'auto', p: 0.5 }}>
          <img src={man} alt="man" />
        </Button>
      </Box>
    </Box>
  );
};
export default PageHeader;
