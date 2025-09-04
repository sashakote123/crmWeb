import { Box } from '@mui/material';

import TasksTable from '../../features/tasksTable/TasksTable';
import TasksPageHeader from '../../widgets/tasksPageHeader/TasksPageHeader';

const TasksPage = () => {
  return (
    <Box component={'section'} sx={{ height: '100%' }}>
      <TasksPageHeader />
      <TasksTable />
    </Box>
  );
};
export default TasksPage;
