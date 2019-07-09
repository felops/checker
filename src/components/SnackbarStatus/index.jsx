import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default function SnackbarStatus(props) {
  const classes = useStyles1();
  const { className, message, onClose, open, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      autoHideDuration={5000}
      onClose={onClose}
      open={open}
    >
      <SnackbarContent
        action={[
          <IconButton
            aria-label="Close"
            color="inherit"
            key="close"
            onClick={onClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ]}
        aria-describedby="client-snackbar"
        className={clsx(classes[variant], className)}
        message={
          <span
            className={classes.message}
            id="client-snackbar"
          >
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
        {...other}
      />
    </Snackbar>
  );
}

SnackbarStatus.propTypes = {
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};
