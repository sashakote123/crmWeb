import { useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

import CreateProjectForm from '../../entities/createProjectForm/CreateProjectForm';
import man from './assets/man.svg';
import plus from './assets/plus.svg';

const ProjectsPageHeader = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <Box display={'flex'} justifyContent={'space-between'} mb={6}>
      {isVisible && <CreateProjectForm isOpen={isVisible} setIsOpen={setIsVisible} />}

      <Typography sx={{ fontSize: '32px' }} fontWeight={600}>
        Проекты
      </Typography>
      <Box>
        <Button onClick={() => setIsVisible(true)}>
          <img src={plus} alt="plus" />
        </Button>
        <Button>
          <img src={man} alt="man" />
        </Button>
      </Box>
    </Box>
  );
};
export default ProjectsPageHeader;
