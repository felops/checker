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
import { AttachMoney as AttachMoneyIcon } from '@material-ui/icons';

// Shared components
import { Paper } from 'components';

// Component styles
import styles from './styles';

class Profit extends Component {
  render() {
    const { classes, className, total, isLoading, ...rest } = this.props;

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
              TOTAL SPENT
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
                ${total.toFixed(2)}
              </Typography>
            }
          </div>
          <div className={classes.iconWrapper}>
            <AttachMoneyIcon className={classes.icon} />
          </div>
        </div>
      </Paper>
    );
  }
}

Profit.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  total: PropTypes.number
};

export default withStyles(styles)(Profit);
