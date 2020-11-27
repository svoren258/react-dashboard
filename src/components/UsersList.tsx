import React, { useEffect } from 'react';
import { Page } from '../models/Page';
import { User } from '../models/User';
import { getUsersEndpointUrl } from '../common/constants';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import SnackBar from './SnackBar';
import UsersTable from './UsersTable';

function UsersList(props: { activePage: (page: Page) => void }): JSX.Element {
  const [users, loading, hasError] = useFetch<User[]>(getUsersEndpointUrl());
  useEffect(() => {
    props.activePage(Page.USERS_TABLE);
  }, []);
  return (
    <div>
      {loading && <Loading />}
      {users && <UsersTable users={users} />}
      {hasError && <SnackBar />}
    </div>
  );
}
export default UsersList;
