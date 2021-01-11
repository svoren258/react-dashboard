import { Divider, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { navStyle, useListStyles } from '../common/styles';
import { Routes } from '../models/Routes';
import { User } from '../models/User';

const usersList = (props: { users: User[] }): JSX.Element => {
  const { root } = useListStyles();

  return (
    <List component="nav" className={root} aria-label="mailbox folders">
      {props.users.map((user) => (
        <div key={user.id}>
          <Link style={navStyle} to={`/${Routes.USERS}/${user.id}`}>
            <ListItem button>
              <ListItemText primary={user.name} />
            </ListItem>
          </Link>
          <Divider />
        </div>
      ))}
    </List>
  );
};
export default usersList;
