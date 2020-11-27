import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { navStyle, useUserTableStyles } from '../common/styles';
import { User } from '../models/User';
import { Link } from 'react-router-dom';
import { Routes } from '../models/Routes';

function UsersTable(props: { users: User[] }): JSX.Element {
  const classes = useUserTableStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
                <Link style={navStyle} to={`/${Routes.USERS}/${user.id}`}>
                  {user.name}
                </Link>
              </TableCell>

              <TableCell>{user.email}</TableCell>
              <TableCell>{user.address.street}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default UsersTable;
