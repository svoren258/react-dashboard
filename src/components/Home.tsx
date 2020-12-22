import React, { useEffect } from 'react';
import { useHomeStyles } from '../common/styles';
import { Page } from '../models/Page';
import HomeIcon from '@material-ui/icons/Home';

const home = (props: { activePage: (page: Page) => void }): JSX.Element => {
  const classes = useHomeStyles();
  useEffect(() => {
    props.activePage(Page.HOME_PAGE);
  }, []);
  return (
    <div className={classes.homePageContainer}>
      <h1 className={classes.homePage}>Welcome Home!</h1>
      <HomeIcon fontSize={'large'} />
    </div>
  );
};
export default home;
