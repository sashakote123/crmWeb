import { Link } from 'react-router';

import { useState } from 'react';

import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import DeleteAlert from '../../entities/deleteAlert/DeleteAlert';
import EditTaskForm from '../../entities/editTaskForm/EditTaskForm';
import Notasks from '../../entities/noTasks/NoTasks';
import StatusBlock from '../../entities/statusBlock/StatusBlock';
import type { IProjectItem } from '../../shared/types';
import pencil from './assets/pencil.svg';
import trash from './assets/trash.svg';
import useGetTasks from './hooks/useGetTasks';

const TasksTable = () => {
  const { tasksArray, headerArray, refetch } = useGetTasks();
  const [editingProject, setEditingProject] = useState<IProjectItem | null>(null);
  const [deletingProject, setDeletingProject] = useState<IProjectItem | null>(null);

  return !tasksArray.length ? (
    <Notasks />
  ) : (
    <TableContainer sx={{ borderRadius: '20px', p: 1 }} component={Paper}>
      {editingProject && (
        <EditTaskForm
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

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headerArray.map((item) => {
              return (
                <TableCell key={item} align="left">
                  {item}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tasksArray.map((row: IProjectItem) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Link to={`${row.id}`}>{row.id}</Link>
              </TableCell>

              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.desc}</TableCell>
              <TableCell align="left">{row.author}</TableCell>
              <TableCell align="left">{row.invitedMembers}</TableCell>
              <TableCell align="left">
                <StatusBlock statusCode={row.status} />
              </TableCell>
              <TableCell sx={{ minWidth: '60px' }} align="left">
                <Button onClick={() => setEditingProject(row)}>
                  <img src={pencil} alt="pencil" />
                </Button>
              </TableCell>
              <TableCell sx={{ minWidth: '60px' }} align="left">
                <Button onClick={() => setDeletingProject(row)}>
                  <img src={trash} alt="trash" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TasksTable;
