import { Box } from '@mui/material';

import ProjectCard from '../../widgets/projectCard/ProjectCard';
import ProjectPageHeader from '../../widgets/projectPageHeader/ProjectPageHeader';
import useGetProject from './hooks/useGetProject';

const ProjectPage = () => {
  const { project, refetch } = useGetProject();

  console.log(project);
  return !project ? (
    <>Error</>
  ) : (
    <Box>
      <ProjectPageHeader name={project?.name} />
      <ProjectCard project={project} refetch={refetch} />
    </Box>
  );
};
export default ProjectPage;
