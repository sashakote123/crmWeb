import { useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

const ProjectsPage = () => {
  const [projectsArray, setProjectsArray] = useState([]);
  return (
    <Box component={'section'} sx={{ height: '100%' }}>
      {!projectsArray.length ? (
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
          <Typography textAlign={'center'} variant="h4">
            Привет, Vera, у тебя еще нет ни одного проекта
          </Typography>
          <Button
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
      ) : (
        <>jopa</>
      )}
    </Box>
  );
};
export default ProjectsPage;
