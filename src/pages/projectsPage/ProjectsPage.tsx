import { Box } from '@mui/material';

import PageTable from '../../entities/pageTable/PageTable';
import PageHeader from '../../widgets/pageHeader/PageHeader';
import useGetProjects from './hooks/useGetProjects';

const ProjectsPage = () => {
  const { projectsArray, headerArray, refetch } = useGetProjects();
  return (
    <Box component={'section'} sx={{ height: '100%' }}>
      <PageHeader type="projects" title="Проекты" />
      <PageTable
        type="projects"
        array={projectsArray}
        headerArray={headerArray}
        refetch={refetch}
      />
    </Box>
  );
};
export default ProjectsPage;
