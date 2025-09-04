import { Link } from 'react-router';

import { useState } from 'react';

import {
  Box,
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
import EditProjectForm from '../../entities/editProjectForm/EditProjectForm';
import NoProjects from '../../entities/noProjects/NoProjects';
import StatusBlock from '../../entities/statusBlock/StatusBlock';
import type { IProjectItem } from '../../shared/types';
import pencil from './assets/pencil.svg';
import trash from './assets/trash.svg';

interface Props {
  array: IProjectItem[];
  headerArray: string[];
  refetch: () => Promise<void>;
}

const PageTable: React.FC<Props> = ({ array, headerArray, refetch }) => {
  const [editingProject, setEditingProject] = useState<IProjectItem | null>(null);
  const [deletingProject, setDeletingProject] = useState<IProjectItem | null>(null);

  return !array.length ? (
    <NoProjects />
  ) : (
    <TableContainer sx={{ borderRadius: '20px', p: 1 }} component={Paper}>
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
          {array.map((row: IProjectItem) => (
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
                <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                  <Button sx={{ minWidth: 'auto', p: 1 }} onClick={() => setEditingProject(row)}>
                    <img src={pencil} alt="pencil" />
                  </Button>
                  <Button sx={{ minWidth: 'auto', p: 1 }} onClick={() => setDeletingProject(row)}>
                    <img src={trash} alt="trash" />
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default PageTable;
