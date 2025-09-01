import { NavLink } from 'react-router';

import { useState } from 'react';

import {
  Box,
  Button,
  Divider,
  Drawer,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';

import calendar from './assets/calendar.svg';
import invites from './assets/invites.svg';
import logout from './assets/logout.svg';
import menu from './assets/menu.svg';
import profile from './assets/profile.svg';
import projects from './assets/projects.svg';
import settings from './assets/settings.svg';
import start from './assets/start.svg';
import tasks from './assets/tasks.svg';
import users from './assets/users.svg';
import type { ILinkItem } from './types';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const drawerWidth = expanded ? 240 : 86;

  const menuItems: ILinkItem[] = [
    { title: 'Главная', icon: start, ref: '/' },
    { title: 'Задачи', icon: tasks, ref: '/2' },
    { title: 'Проекты', icon: projects, ref: '/3' },
    { title: 'Приглашение', icon: invites, ref: '/3' },
    { title: 'Календарь', icon: calendar, ref: '/3' },
    { title: 'Участники', icon: users, ref: '/3' },
    { title: 'Профиль', icon: profile, ref: '/3' },
    // { title: 'Дашборд3', icon: settings, ref: '/3' },
    // { title: 'Дашборд3', icon: logout, ref: '/3' },
  ];

  const bottomList: ILinkItem[] = [
    { title: 'Настройки', icon: settings, ref: '/3' },
    { title: 'Выйти', icon: logout, ref: '/3' },
  ];

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const StyledNavLink = styled(NavLink)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    gap: '12px',
    color: 'inherit',
    width: '100%',
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
  }));

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          transition: 'width 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: drawerWidth,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingY: '30px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '46px' }}>
          <Button onClick={toggleMenu}>
            <img src={menu} alt="menu" />
          </Button>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {menuItems.map((item: ILinkItem) => {
              return (
                <ListItem
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <StyledNavLink to={item.ref}>
                    <img src={item.icon} alt={item.title} />
                    {expanded && (
                      <ListItemText
                        primary={<Typography variant="body2">{item.title}</Typography>}
                      />
                    )}
                  </StyledNavLink>
                </ListItem>
              );
            })}
          </List>
        </Box>

        <Divider />
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {bottomList.map((item: ILinkItem) => {
            return (
              <ListItem
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <StyledNavLink to={item.ref}>
                  <img src={item.icon} alt={item.title} />
                  {expanded && (
                    <ListItemText primary={<Typography variant="body2">{item.title}</Typography>} />
                  )}
                </StyledNavLink>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};
export default Navigation;
