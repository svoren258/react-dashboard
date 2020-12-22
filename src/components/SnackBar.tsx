import React, { useState, SyntheticEvent, MouseEvent, Fragment } from 'react';
import { Button, Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const simpleSnackbar = (): JSX.Element => {
  const [open, setOpen] = useState(true);
  const handleClose = (_: SyntheticEvent | MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Fetch failed"
        action={
          <Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Fragment>
        }
      />
    </div>
  );
};
export default simpleSnackbar;
