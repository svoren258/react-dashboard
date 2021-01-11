import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useLoadingStyles } from '../common/styles';

const loading = (): JSX.Element => {
  const { root } = useLoadingStyles();

  return (
    <div className={root}>
      <CircularProgress />
    </div>
  );
};

export default loading;
