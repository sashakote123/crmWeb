import { Box } from '@mui/material';

import ProjectsTable from '../../features/projectsTable/ProjectsTable';
import ProjectsPageHeader from '../../widgets/projectsPageHeader/ProjectsPageHeader';

const ProjectsPage = () => {
  return (
    <Box component={'section'} sx={{ height: '100%' }}>
      <ProjectsPageHeader />
      <ProjectsTable />
    </Box>
  );
};
export default ProjectsPage;
