import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserEndpointUrl } from '../common/constants';
import { useUserDetailStyles } from '../common/styles';
import useFetch from '../hooks/useFetch';
import { MatchParams } from '../models/MatchParams';
import { Page } from '../models/Page';
import { User } from '../models/User';
import Avatar from '@material-ui/core/Avatar';
import Loading from './Loading';
import PostsList from './PostsList';
import SnackBar from './SnackBar';

function UserDetail(props: { activePage: (page: Page) => void }): JSX.Element {
  const classes = useUserDetailStyles();
  const { userId } = useParams<MatchParams>();
  const [user, loading, hasError] = useFetch<User>(getUserEndpointUrl(userId));
  useEffect(() => {
    props.activePage(Page.USER_DETAIL);
  }, []);
  return (
    <div className={classes.userDetailContainer}>
      {loading && <Loading />}
      <div className={classes.userInfoWrapper}>
        <div className={classes.userAvatarWrapper}>
          <Avatar className={classes.avatar} />
          <h2>{(user && user.name) || ''}</h2>
        </div>
        <div className={classes.infoItem}>
          <h4>Email</h4>
          <p>{user && user.email}</p>
        </div>
        <div className={classes.infoItem}>
          <h4>Address</h4>
          <p>{user && user.address.street}</p>
        </div>
        <div className={classes.infoItem}>
          <h4>Phone</h4>
          <p>{user && user.phone}</p>
        </div>
        <div className={classes.infoItem}>
          <h4>Website</h4>
          <p>{user && user.website}</p>
        </div>
      </div>
      <h3 className={classes.infoItem}>Posts</h3>
      <div className={classes.postsWrapper}>
        <PostsList userId={userId} />
      </div>
      {hasError && <SnackBar />}
    </div>
  );
}
export default UserDetail;
