import React from 'react';
import { Badge } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const ServiceSiderLink = ({ link, linkName, isNew, onClose }) => {
  let activeStyle = {
    backgroundColor: '#ededed',
    borderRadius: '5px',
    fontWeight: 600,
  };

  return (
    <NavLink
      onClick={onClose}
      to={link}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      <li>
        {linkName}
        {isNew && (
          <Badge ml="3px" bg="#ffc34e">
            new<span className="Twinkle-ani">❗️</span>
          </Badge>
        )}
      </li>
    </NavLink>
  );
};
