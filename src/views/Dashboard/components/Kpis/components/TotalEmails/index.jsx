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
import { Email as EmailIcon } from '@material-ui/icons';

// Shared components
import {
  Paper
} from 'components';

// Component styles
import styles from './styles';

class TotalEmails extends Component {
  render() {
    const { classes, className, totalEmails, isLoading, ...rest } = this.props;

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
              VALIDATED EMAILS
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
                {totalEmails}
              </Typography>
            }
          </div>
          <div className={classes.iconWrapper}>
            <EmailIcon className={classes.icon} />
          </div>
        </div>
      </Paper>
    );
  }
}

TotalEmails.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  totalEmails: PropTypes.number
};

export default withStyles(styles)(TotalEmails);
