import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useLoadingStyles } from '../common/styles';

const loading = (): JSX.Element => {
  const classes = useLoadingStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

export default loading;
