import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiICons from 'react-icons/bi'

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Criar Eventos',
    path: '/events',
    icon: <BiICons.BiCalendarEvent/>,
    cName: 'nav-text'
  },
  {
    title: 'Amigos',
    path: '/friends',
    icon: <FaIcons.FaUserFriends />,
    cName: 'nav-text'
  }]