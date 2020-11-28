import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserEndpointUrl } from '../common/constants';
import { useUserDetailStyles } from '../common/styles';
import useFetch from '../hooks/useFetch';
import { InfoItems } from '../models/InfoItems';
import { MatchParams } from '../models/MatchParams';
import { Page } from '../models/Page';
import { User } from '../models/User';
import Avatar from '@material-ui/core/Avatar';
import Loading from './Loading';
import PostsList from './PostsList';
import SnackBar from './SnackBar';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import HouseIcon from '@material-ui/icons/House';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import LanguageIcon from '@material-ui/icons/Language';

function UserDetail(props: { activePage: (page: Page) => void }): JSX.Element {
  const classes = useUserDetailStyles();
  const { userId } = useParams<MatchParams>();
  const [user, loading, hasError] = useFetch<User>(getUserEndpointUrl(userId));

  const infoItems: { [key in InfoItems]: string | undefined } = {
    [InfoItems.Email]: user?.email,
    [InfoItems.Address]: `${user?.address.street}, ${user?.address.city}`,
    [InfoItems.Phone]: user?.phone,
    [InfoItems.Website]: user?.website,
  };
  const getInfoItemIcon = (item: InfoItems) => {
    if (item === InfoItems.Email) {
      return <AlternateEmailIcon />;
    } else if (item === InfoItems.Address) {
      return <HouseIcon />;
    } else if (item === InfoItems.Phone) {
      return <LocalPhoneIcon />;
    } else if (item === InfoItems.Website) {
      return <LanguageIcon />;
    }
    return undefined;
  };
  const getInfoItems = (): JSX.Element[] =>
    Object.entries(infoItems).map(([key, value], index) => (
      <div key={index} className={classes.infoItem}>
        <div className={classes.infoItemLabel}>
          {getInfoItemIcon(key as InfoItems)}
          <h4>{key}</h4>
        </div>
        <p>{value}</p>
      </div>
    ));
  useEffect(() => {
    props.activePage(Page.USER_DETAIL);
  }, []);
  return (
    <div>
      {loading && <Loading />}
      {!loading && (
        <div className={classes.userDetailContainer}>
          <div className={classes.userInfoWrapper}>
            <div className={classes.userAvatarWrapper}>
              <Avatar className={classes.avatar} />
              <h2>{(user && user.name) || ''}</h2>
            </div>
            <div className={classes.infoItemsWrapper}>{getInfoItems()}</div>
          </div>
          <div className={classes.postsWrapper}>
            <h3 className={classes.infoItem}>Posts (10)</h3>
            <PostsList userId={userId} />
          </div>
        </div>
      )}
      {hasError && <SnackBar />}
    </div>
  );
}
export default UserDetail;
