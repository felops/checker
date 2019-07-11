import React, { Component, Fragment } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Grid,
  Typography
} from '@material-ui/core';

// Shared layouts
import { Title } from 'components';

// Component styles
import styles from './styles';

class SectionFeatures extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Title text="Features" />
        <Grid
          container
          justify="center"
          spacing={10}
        >
          <Grid
            item
            md={4}
            xs={12}
          >
            <div className={classes.imageWrapper}>
              <img
                alt="Technology"
                className={classes.image}
                src="images/landingpage/features/server.png"
              />
            </div>
            <Typography className={classes.title}>Advanced Technology</Typography>
            <Typography className={classes.subtitle}>
              Our system were developed among the last years an we are always improving our technology. Being the first tool of the category, we are also pioneer in using artifical inteligence to predict if an email is valid.
            </Typography>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
          >
            <div className={classes.imageWrapper}>
              <img
                alt="Garantee"
                className={classes.image}
                src="images/landingpage/features/email-campaign.png"
              />
            </div>
            <Typography className={classes.title}>Guarantee of Delivery</Typography>
            <Typography className={classes.subtitle}>
              All our validated emails were delivered since we launched. This is our compromise, continuing delivering the best email validator ever!
            </Typography>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
          >
            <div className={classes.imageWrapper}>
              <img
                alt="Best Price"
                className={classes.image}
                src="images/landingpage/features/wallet.png"
              />
            </div>
            <Typography className={classes.title}>Best Price</Typography>
            <Typography className={classes.subtitle}>
              Absolutely the best price on the market. Our competitors charge high for a ineficient service with hidden fees. We keep the simplicity to charge and to delivery the best results.
            </Typography>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

SectionFeatures.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SectionFeatures);
