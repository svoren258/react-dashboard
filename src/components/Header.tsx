import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { navStyle, useHeaderStyles } from '../common/styles';
import { Page } from '../models/Page';

function Header(props: {
  onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  title: string;
}): JSX.Element {
  const classes = useHeaderStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            onClick={props.onClick}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          <Link style={navStyle} to="/">
            <Button className={classes.backToHomeButton} disabled={props.title === Page.HOME_PAGE} color="inherit">
              Back to Home
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;
