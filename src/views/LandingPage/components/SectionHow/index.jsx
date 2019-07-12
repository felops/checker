import React, { Component, Fragment } from 'react';

// Externals
import PropTypes from 'prop-types';
import compose from 'recompose/compose';

// Material helpers
import { withStyles, withWidth } from '@material-ui/core';

// Material components
import {
  Grid,
  Typography
} from '@material-ui/core';

// Shared layouts
import { Title } from 'components';

// Component styles
import styles from './styles';

class SectionHow extends Component {
  render() {
    const { classes, width } = this.props;
    const isMobile = ['xs', 'sm'].includes(width);

    return (
      <Fragment>
        <Title text="How it Works" />
        <Grid
          alignItems="center"
          container
          justify="center"
          spacing={isMobile ? 3 : 5}
        >
          <Grid
            className={classes.marginBottom + ' ' + classes.textAlignRight}
            item
            xs={6}
          >
            <img
              alt="mail"
              className={classes.image}
              src="images/landingpage/how/many-emails.png"
            />
          </Grid>
          <Grid
            className={classes.marginBottom}
            item
            xs={6}
          >
            <Typography variant="h4">
              INPUT THE EMAILS
            </Typography>
            <Typography className={classes.text}>
              Input the email you would like to validate in our system.
            </Typography>
          </Grid>
          <Grid
            className={classes.marginBottom + ' ' + classes.textAlignRight}
            item
            xs={6}
          >
            <Typography variant="h4">
              EMAIL VALIDATION
            </Typography>
            <Typography
              className={classes.text + ' ' + classes.floatRight}
            >
              Our system work to assure that the inserted email is valid.
            </Typography>
          </Grid>
          <Grid
            className={classes.marginBottom}
            item
            xs={6}
          >
            <img
              alt="mail"
              className={classes.image}
              src="images/landingpage/how/validate-email.png"
            />
          </Grid>
          <Grid
            className={classes.marginBottom + ' ' + classes.textAlignRight}
            item
            xs={6}
          >
            <img
              alt="mail"
              className={classes.image}
              src="images/landingpage/how/sent-email.png"
            />
          </Grid>
          <Grid
            className={classes.marginBottom}
            item
            xs={6}
          >
            <Typography variant="h4">
              READY TO USE
            </Typography>
            <Typography className={classes.text}>
              After validating the emails you can build your list to send emails without taking any risk for your server reputation.
            </Typography>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

SectionHow.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default compose(
  withStyles(styles),
  withWidth()
)(SectionHow);
