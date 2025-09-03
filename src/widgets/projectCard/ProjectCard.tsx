import { useState } from 'react';

import { Box, Button, Divider, List, ListItem, Paper, Typography } from '@mui/material';

import DeleteAlert from '../../entities/deleteAlert/DeleteAlert';
import EditProjectForm from '../../entities/editProjectForm/EditProjectForm';
import StatusBlock from '../../entities/statusBlock/StatusBlock';
import type { IProjectItem } from '../../shared/types';
import pencil from './assets/pencil.svg';
import trash from './assets/trash.svg';

interface Props {
  project: IProjectItem;
  refetch: () => Promise<void>;
}

const ProjectCard: React.FC<Props> = ({ project, refetch }) => {
  const [editingProject, setEditingProject] = useState<IProjectItem | null>(null);
  const [deletingProject, setDeletingProject] = useState<IProjectItem | null>(null);

  return (
    <Paper elevation={2} sx={{ p: 4, m: 3 }}>
      {editingProject && (
        <EditProjectForm
          project={editingProject}
          isOpen={!!editingProject}
          setIsOpen={() => setEditingProject(null)}
          refetch={refetch}
        />
      )}

      {deletingProject && (
        <DeleteAlert
          project={deletingProject}
          isOpen={!!deletingProject}
          setIsOpen={() => setDeletingProject(null)}
          refetch={refetch}
        />
      )}

      <Box display={'flex'} gap={2} justifyContent={'space-between'} alignItems={'center'} mb={6}>
        <Box display={'flex'} gap={8} alignItems={'center'}>
          <Typography fontSize={20} fontWeight={600}>
            {project.name}
          </Typography>
          <StatusBlock statusCode={project.status} />
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <Box display={'flex'} gap={2} mr={2}>
            <Typography>13.02.2024 </Typography>
            <Typography>ЧЧ:ММ</Typography>
          </Box>
          <Typography>-</Typography>
          <Box display={'flex'} gap={2} ml={2}>
            <Typography>13.02.2024 </Typography>
            <Typography>ЧЧ:ММ</Typography>
          </Box>
          <Divider orientation="vertical" sx={{ ml: 3 }} />
          <Box width={36} height={36}>
            <Button onClick={() => setEditingProject(project)}>
              <img src={pencil} alt="pencil" />
            </Button>
          </Box>
          <Box width={36} height={36}>
            <Button onClick={() => setDeletingProject(project)}>
              <img src={trash} alt="trash" />
            </Button>
          </Box>
        </Box>
      </Box>

      <Box display={'flex'} gap={3}>
        <List>
          <ListItem sx={{ mb: 10 }}>
            <Typography>Описание</Typography>
          </ListItem>
          <ListItem>
            <Typography>Кто создал задачу</Typography>
          </ListItem>
          <ListItem>
            <Typography>Куратор</Typography>
          </ListItem>
          <ListItem>
            <Typography>Исполнитель</Typography>
          </ListItem>
        </List>

        <Divider orientation="vertical" />
        <List>
          <ListItem sx={{ mb: 10 }}>
            <Typography>{project.desc}</Typography>
          </ListItem>
          <ListItem>
            <Typography>{project.author}</Typography>
          </ListItem>
          <ListItem>
            <Typography>{project.author}</Typography>
          </ListItem>
          <ListItem>
            <Typography>{project.invitedMembers}</Typography>
          </ListItem>
        </List>
      </Box>
    </Paper>
  );
};
export default ProjectCard;
