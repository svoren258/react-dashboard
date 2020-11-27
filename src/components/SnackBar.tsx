import React from 'react';
import { Button, Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function SimpleSnackbar(): JSX.Element {
  const [open, setOpen] = React.useState(true);
  const handleClose = (_: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
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
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
export default SimpleSnackbar;
