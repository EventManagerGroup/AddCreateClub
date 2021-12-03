import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const SidebarData = [
  {
    title: "Add/Create Club",
    icon: <AddCircleIcon />,
    path: "/home/ac",
  },
  {
    title: "My Clubs",
    icon: <ViewAgendaIcon />,
    path: "/home/clubs"
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    path: "/home/settings"
  },
  {
    title: "Sign out",
    icon: <ExitToAppIcon />,
    path: "/home/signout"
  },
];
