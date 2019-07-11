import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  CircularProgress,
  Typography
} from '@material-ui/core';

// Material icons
import { Done as DoneIcon } from '@material-ui/icons';

// Shared components
import { Paper } from 'components';

// Component styles
import styles from './styles';

class ValidEmails extends Component {
  render() {
    const { classes, className, totalValid, isLoading, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Paper
        {...rest}
        className={rootClassName}
      >
        <div className={classes.content}>
          <div className={classes.details}>
            <Typography
              className={classes.title}
              variant="body2"
            >
              VALID EMAILS
            </Typography>
            {isLoading &&
              <CircularProgress
                className={classes.value}
                size={24}
              />
            }
            {!isLoading &&
              <Typography
                className={classes.value}
                variant="h3"
              >
                {totalValid}
              </Typography>
            }
          </div>
          <div className={classes.iconWrapper}>
            <DoneIcon className={classes.icon} />
          </div>
        </div>
      </Paper>
    );
  }
}

ValidEmails.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  totalValid: PropTypes.number
};

export default withStyles(styles)(ValidEmails);
