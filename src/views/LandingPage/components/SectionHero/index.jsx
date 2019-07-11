import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

// Externals
import PropTypes from 'prop-types';
import compose from 'recompose/compose';

// Material helpers
import { withStyles, withWidth } from '@material-ui/core';

// Material components
import {
  Button,
  Grid,
  Typography
} from '@material-ui/core';

// Component styles
import styles from './styles';

class SectionHero extends Component {
  render() {
    const { classes, width } = this.props;
    const isMobile = ['xs', 'sm'].includes(width);

    return (
      <section
        className={classes.sectionHero}
        id="content"
      >
        <Grid
          alignItems="center"
          className={classes.gridHero}
          container
          justify="center"
        >
          <Grid
            className={classes.centerImage}
            item
            md={6}
            sm={12}
          >
            <img
              alt="mail"
              className={classes.image}
              src="images/landingpage/correct-email.png"
            />
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
          >
            <Typography
              className={clsx(classes.title, isMobile && classes.mobileTitle)}
              variant="h1"
            >
              The unique service of email verification with 100% of validation garanteed
            </Typography>
            <Typography
              className={clsx(classes.subtitle, isMobile && classes.mobileSubtitle)}
              variant="h3"
            >
              Try now and assure it or we will give you double of your paid money back
            </Typography>
            <Link to="/sign-up">
              <Button
                color="primary"
                size="large"
                variant="contained"
              >
                Try for Free
              </Button>
            </Link>
          </Grid>
        </Grid>
      </section>
    );
  }
}

SectionHero.propTypes = {
  classes: PropTypes.object.isRequired
};

SectionHero.propTypes = {
  width: PropTypes.string.isRequired
};

export default compose(
  withStyles(styles),
  withWidth()
)(SectionHero);
