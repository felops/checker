import React, { Component, Fragment } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Typography
} from '@material-ui/core';

// Shared layouts
import { Title } from 'components';

// Component styles
import styles from './styles';

class SectionWhy extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Title text="Why Checker" />
        <Typography className={classes.title}>You may ask why you should use Checker. We ask you: why not? We are just the best option you can get as low as a penny per day.</Typography>
        <Typography className={classes.subtile}>If you are not convinced yet, here are some considerations:</Typography>
        <ul className={classes.ul}>
          <li>
            <Typography className={classes.list}>
              Checker is the number one tool in email validation;
            </Typography>
          </li>
          <li>
            <Typography className={classes.list}>
              We are trusted by our customers and none of them ever complained about our service;
            </Typography>
          </li>
          <li>
            <Typography className={classes.list}>
              Our services are used by the most innovative company on the world: <a href="http://www.wildrydes.com/">Wild Rydes</a>.
            </Typography>
          </li>
        </ul>
      </Fragment>
    );
  }
}

SectionWhy.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SectionWhy);
