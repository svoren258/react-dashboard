import React, { useState } from 'react';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import UserDetail from './components/UserDetail';
import { Page } from './models/Page';
import { ChildRoutes, Routes } from './models/Routes';
import PostDetail from './components/PostDetail';
import { useAppStyles } from './common/styles';

const app = (): JSX.Element => {
  const classes = useAppStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState(Page.HOME_PAGE);

  const toggleMenu = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  const sideMenu = () => {
    if (isMenuOpen) {
      return <SideMenu toggleDrawer={toggleMenu} open={isMenuOpen} />;
    }
    return undefined;
  };

  return (
    <Router>
      <Header onClick={toggleMenu} title={activePage} />
      {sideMenu()}
      <div className={classes.contentWrapper}>
        <Switch>
          <Route path="/" exact>
            <Home activePage={setActivePage} />
          </Route>
          <Route path={`/${Routes.USERS}`} exact>
            <Users activePage={setActivePage} />
          </Route>
          <Route path={`/${Routes.USERS}/:userId`} exact>
            <UserDetail activePage={setActivePage} />
          </Route>
          <Route path={`/${Routes.USERS}/:userId/${ChildRoutes.POSTS}/:postId`} exact>
            <PostDetail activePage={setActivePage} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default app;
