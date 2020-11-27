import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import UsersList from './components/UsersList';
import UserDetail from './components/UserDetail';
import { Page } from './models/Page';
import { ChildRoutes, Routes } from './models/Routes';
import PostDetail from './components/PostDetail';

interface AppState {
  isMenuOpen: boolean;
  activePage: Page;
}

const useStyles = makeStyles({
  contentWrapper: {
    marginTop: '75px',
  },
});

function App(): JSX.Element {
  const classes = useStyles();
  const [state, setState] = useState<AppState>({
    isMenuOpen: false,
    activePage: Page.HOME_PAGE,
  });

  const toggleMenu = () => {
    setState({ ...state, isMenuOpen: !state.isMenuOpen });
  };
  const setActivePage = (currentPage: Page) => {
    setState({ ...state, activePage: currentPage });
  };

  const sideMenu = () => {
    if (state.isMenuOpen) {
      return <SideMenu toggleDrawer={() => toggleMenu()} open={state.isMenuOpen} />;
    }
    return undefined;
  };

  return (
    <Router>
      <Header onClick={() => toggleMenu()} title={state.activePage} />
      {sideMenu()}
      <div className={classes.contentWrapper}>
        <Switch>
          <Route path="/" exact>
            <Home activePage={setActivePage} />
          </Route>
          <Route path={`/${Routes.USERS}`} exact>
            <UsersList activePage={setActivePage} />
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
}

export default App;
