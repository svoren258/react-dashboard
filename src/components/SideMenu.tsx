import React, { Fragment } from 'react';
import clsx from 'clsx';
import { List, ListItem, ListItemIcon, ListItemText, Drawer } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { navStyle, useSideMenuStyles } from '../common/styles';
import { Routes } from '../models/Routes';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const sideMenu = (props: {
  open: boolean;
  toggleDrawer: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
}): JSX.Element => {
  const classes = useSideMenuStyles();

  const getIcon = (route: Routes) => {
    if (route === Routes.USERS) {
      return <AccountCircleIcon />;
    } else if (route === Routes.TIME) {
      return <AccessTimeIcon />;
    } else if (route === Routes.TRANSPORT) {
      return <AirportShuttleIcon />;
    } else if (route === Routes.EMAIL) {
      return <AlternateEmailIcon />;
    } else {
      return undefined;
    }
  };

  const menuList = () => {
    return (
      <div className={clsx(classes.list)} role="presentation" onClick={props.toggleDrawer}>
        <List>
          {Object.values(Routes).map((title, index) => (
            <Link key={index} style={navStyle} to={`/${title}`}>
              <ListItem button key={title}>
                <ListItemIcon>{getIcon(title)}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );
  };
  return (
    <Fragment key={'left'}>
      <Drawer anchor={'left'} onClose={props.toggleDrawer} open={props.open}>
        {menuList()}
      </Drawer>
    </Fragment>
  );
};

export default sideMenu;
