import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

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
    const { classes } = this.props;

    return (
      <section
        className={classes.sectionHero}
        id="content"
      >
        <Grid container>
          <Grid
            item
            xs={6}
          >
            <div className={classes.gridHero}>
              <Typography
                className={classes.title}
                variant="h1"
              >
                The unique service of email verification with 100% of validation garanteed
              </Typography>
              <Typography
                className={classes.subtitle}
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
            </div>
          </Grid>
          <Grid
            item
            xs={6}
          >
            <img
              alt="mail"
              className={classes.image}
              src="images/landingpage/correct-email.png"
            />
          </Grid>
        </Grid>
      </section>
    );
  }
}

SectionHero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SectionHero);
