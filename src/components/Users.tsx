import { useMediaQuery } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import useFetch from '../hooks/useFetch';
import { Page } from '../models/Page';
import { User } from '../models/User';
import { getUsersEndpointUrl } from '../common/constants';
import Loading from './Loading';
import SnackBar from './SnackBar';
import UsersTable from './UsersTable';
import UsersList from './UsersList';

const users = (props: { activePage: (page: Page) => void }): JSX.Element => {
  const matchesLtSm = useMediaQuery('(max-width: 649px)');
  const isMountedRef = useRef(true);
  const [users, loading, hasError] = useFetch<User[]>({ isMountedRef, url: getUsersEndpointUrl() });
  useEffect(() => {
    props.activePage(Page.USERS);
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {users ? (matchesLtSm && <UsersList users={users} />) || <UsersTable users={users} /> : null}
      {hasError && <SnackBar />}
    </div>
  );
};
export default users;
