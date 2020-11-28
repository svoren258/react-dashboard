import { useMediaQuery } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Page } from '../models/Page';
import { User } from '../models/User';
import { getUsersEndpointUrl } from '../common/constants';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import SnackBar from './SnackBar';
import UsersTable from './UsersTable';
import UsersList from './UsersList';

function Users(props: { activePage: (page: Page) => void }): JSX.Element {
  const matchesLtSm = useMediaQuery('(max-width: 649px)');
  const [users, loading, hasError] = useFetch<User[]>(getUsersEndpointUrl());
  useEffect(() => {
    props.activePage(Page.USERS);
  }, []);
  const renderUsers = () => {
    if (matchesLtSm) {
      return users && <UsersList users={users} />;
    }
    return users && <UsersTable users={users} />;
  };

  return (
    <div>
      {loading && <Loading />}
      {renderUsers()}
      {hasError && <SnackBar />}
    </div>
  );
}
export default Users;
