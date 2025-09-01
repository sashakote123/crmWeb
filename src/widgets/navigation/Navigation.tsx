import { NavLink } from 'react-router';

import { useState } from 'react';

import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';

import calendar2 from './assets/calendar2.svg';
import calendar from './assets/calendar.svg';
import invites2 from './assets/invites2.svg';
import invites from './assets/invites.svg';
import logout from './assets/logout.svg';
import menu from './assets/menu.svg';
import profile2 from './assets/profile2.svg';
import profile from './assets/profile.svg';
import projects2 from './assets/projects2.svg';
import projects from './assets/projects.svg';
import settings from './assets/settings.svg';
import start2 from './assets/start2.svg';
import start from './assets/start.svg';
import tasks2 from './assets/tasks2.svg';
import tasks from './assets/tasks.svg';
import users2 from './assets/users2.svg';
import users from './assets/users.svg';
import type { ILinkItem } from './types';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const drawerWidth = expanded ? 240 : 86;

  const menuItems: ILinkItem[] = [
    { title: 'Главная', icon: start, activeIcon: start2, ref: '/' },
    { title: 'Задачи', icon: tasks, activeIcon: tasks2, ref: '/tasks' },
    { title: 'Проекты', icon: projects, activeIcon: projects2, ref: '/projects' },
    { title: 'Приглашение', icon: invites, activeIcon: invites2, ref: '/invites' },
    { title: 'Календарь', icon: calendar, activeIcon: calendar2, ref: '/calendar' },
    { title: 'Участники', icon: users, activeIcon: users2, ref: '/users' },
    { title: 'Профиль', icon: profile, activeIcon: profile2, ref: '/profile' },
  ];

  const bottomList: ILinkItem[] = [
    { title: 'Настройки', icon: settings, ref: '/settings' },
    { title: 'Выйти', icon: logout, ref: '/logout' },
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
          overflowX: 'hidden',
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
                    {({ isActive }) => (
                      <>
                        <img src={isActive ? item.activeIcon : item.icon} alt={item.title} />
                        {expanded && (
                          <ListItemText
                            primary={
                              <Typography
                                variant="body2"
                                sx={{
                                  color: isActive ? '#1886e5' : null,
                                  fontWeight: isActive ? 600 : 400,
                                  transition: 'color 0.2s ease, font-weight 0.2s ease',
                                }}
                              >
                                {item.title}
                              </Typography>
                            }
                          />
                        )}
                      </>
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
