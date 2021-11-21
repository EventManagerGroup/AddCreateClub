import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonIcon from '@mui/icons-material/Person';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const SidebarData = [
  {
    title: "Add/Create Club",
    icon: <AddCircleIcon />,
    path: "/",
  },
  {
    title: "Profile",
    icon: <PersonIcon />,
    path: "/profile"
  },
  {
    title: "View Clubs",
    icon: <ViewAgendaIcon />,
    path: "/clubs"
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    path: "/settings"
  },
  {
    title: "Sign out",
    icon: <ExitToAppIcon />,
    path: "/login"
  },
];
