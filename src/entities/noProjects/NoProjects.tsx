import { useSelector } from 'react-redux';

import { useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

import type { RootState } from '../../app/store/store';
import CreateProjectForm from '../createProjectForm/CreateProjectForm';

const NoProjects = () => {
  const user = useSelector((store: RootState) => store.user);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '94px',
        height: '100%',
      }}
    >
      {isModalVisible && (
        <CreateProjectForm isOpen={isModalVisible} setIsOpen={setIsModalVisible} />
      )}
      <Typography textAlign={'center'} variant="h4">
        Привет, {user.firstName}, у тебя еще нет ни одного проекта
      </Typography>
      <Button
        onClick={() => setIsModalVisible((prev) => !prev)}
        sx={{
          width: '314px',
          height: '60px',
          borderRadius: '8px',
          backgroundColor: '#1886e5',
          textTransform: 'none',
          fontSize: '32px',
        }}
      >
        + Создать проект
      </Button>
    </Box>
  );
};
export default NoProjects;
