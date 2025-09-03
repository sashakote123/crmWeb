import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';

import { ThemeProvider } from '@emotion/react';

import AuthPage from '../pages/authPage/AuthPage';
import CalendarPage from '../pages/calendarPage/CalendarPage';
import InvitesPage from '../pages/invitesPage/InvitesPage';
import ProfilePage from '../pages/profilePage/ProfilePage';
import ProjectPage from '../pages/projectPage/ProjectPage';
import ProjectsPage from '../pages/projectsPage/ProjectsPage';
import RegisterPage from '../pages/registerPage/RegisterPage';
import StartPage from '../pages/startPage/StartPage';
import TasksPage from '../pages/tasksPage/TasksPage';
import UsersPage from '../pages/usersPage/UsersPage';
import { darkTheme, lightTheme } from '../shared/theme';
import Layout from './Layout';
import { type RootState } from './store/store';

function App() {
  const themeMode = useSelector((state: RootState) => state.theme.theme);

  return (
    <div>
      <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
        <Layout>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="/invites" element={<InvitesPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="projects/:id" element={<ProjectPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
