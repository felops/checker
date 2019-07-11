import React from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Button,
  CircularProgress,
  Divider,
  Input
} from '@material-ui/core';

// Material icons
import { MailOutlined as MailIcon } from '@material-ui/icons';

// Component styles
import styles from './styles';

const ValidateInput = props => {
  const { classes, className, style, isLoading, onClick, onChange, disabledButton, value, ...rest } = props;

  const rootClassName = classNames(classes.root, className);

  return (
    <div
      className={rootClassName}
      style={style}
    >
      <MailIcon className={classes.icon} />
      <Divider className={classes.divider} />
      <Input
        {...rest}
        autoFocus
        className={classes.input}
        disableUnderline
        onChange={onChange}
        placeholder="Enter single email for validating"
        value={value}
      />
      {!isLoading &&
        <Button
          color="primary"
          disabled={disabledButton}
          onClick={onClick}
        >
          VALIDATE
        </Button>
      }
      {isLoading &&
        <CircularProgress
          className={classes.buttonProgress}
          size={20}
        />
      }
    </div>
  );
};

ValidateInput.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  disabledButton: PropTypes.bool,
  isLoading: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.string
};

ValidateInput.defaultProps = {
  onChange: () => {}
};

export default withStyles(styles)(ValidateInput);
