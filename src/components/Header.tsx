import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { navStyle, useHeaderStyles } from '../common/styles';
import { Page } from '../models/Page';

const header = (props: {
  onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  title: string;
}): JSX.Element => {
  const { root, menuButton, title, backToHomeButton } = useHeaderStyles();

  return (
    <div className={root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton onClick={props.onClick} edge="start" className={menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={title}>
            {props.title}
          </Typography>
          <Link style={navStyle} to="/">
            <Button className={backToHomeButton} disabled={props.title === Page.HOME_PAGE} color="inherit">
              Back to Home
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default header;
