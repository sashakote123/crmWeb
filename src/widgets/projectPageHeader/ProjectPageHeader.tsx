import { Link } from 'react-router';

import { Box, Typography } from '@mui/material';

import arrow from './assets/arrow.svg';

interface Props {
  name: string;
}

const ProjectPageHeader: React.FC<Props> = ({ name }) => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} mb={6}>
      <Box display={'flex'} alignItems={'center'} gap={'14px'}>
        <Link to={'/projects'}>
          <img src={arrow} alt="arrow" />
        </Link>
        <Typography sx={{ fontSize: '32px' }} fontWeight={600}>
          Карточка проекта
        </Typography>
      </Box>

      <Typography sx={{ fontSize: '20px' }} fontWeight={600}>
        {name}
      </Typography>
    </Box>
  );
};
export default ProjectPageHeader;
