import { Box } from '@mui/material';

import PageTable from '../../entities/pageTable/PageTable';
import PageHeader from '../../widgets/pageHeader/PageHeader';
import useGetProjects from './hooks/useGetProjects';

const ProjectsPage = () => {
  const { projectsArray, headerArray, refetch } = useGetProjects();
  return (
    <Box component={'section'} sx={{ height: '100%' }}>
      <PageHeader title="Проекты" />
      <PageTable array={projectsArray} headerArray={headerArray} refetch={refetch} />
    </Box>
  );
};
export default ProjectsPage;
