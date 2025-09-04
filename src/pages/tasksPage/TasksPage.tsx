import { Box } from '@mui/material';

import PageTable from '../../entities/pageTable/PageTable';
import PageHeader from '../../widgets/pageHeader/PageHeader';
import useGetTasks from './hooks/useGetTasks';

const TasksPage = () => {
  const { tasksArray, headerArray, refetch } = useGetTasks();

  return (
    <Box component={'section'} sx={{ height: '100%' }}>
      <PageHeader type="tasks" title="Задачи" sorted />
      <PageTable type="tasks" array={tasksArray} headerArray={headerArray} refetch={refetch} />
    </Box>
  );
};
export default TasksPage;
