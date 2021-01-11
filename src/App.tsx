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
  const { contentWrapper } = useAppStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState(Page.HOME_PAGE);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const sideMenu = isMenuOpen ? <SideMenu toggleDrawer={toggleMenu} open={isMenuOpen} /> : null;

  return (
    <Router>
      <Header onClick={toggleMenu} title={activePage} />
      {sideMenu}
      <div className={contentWrapper}>
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
