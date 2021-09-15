import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export type Color = 'success' | 'info' | 'warning' | 'error';

const Notification = ({message, state, vertical, horizontal, severity, OnClose}: {message: string, state: boolean, vertical: "top" | "bottom", horizontal: "left" | "center" | "right", severity: Color, OnClose: (event?: React.SyntheticEvent, reason?: string) => void}) => {

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={state}
        onClose={OnClose}
        key={vertical + horizontal}
      >
        <Alert severity={severity}>{message}</Alert>
      </Snackbar>
    </div>
  );
}

export default Notification

// TODO: ALERT POPUP FOR CRITICAL LOW BATTERY