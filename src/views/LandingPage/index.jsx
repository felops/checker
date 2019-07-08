import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid } from '@material-ui/core';

// Shared layouts
import { LandingPage as LandingPageLayout } from 'layouts';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  }
});

class Account extends Component {
  state = { tabIndex: 0 };

  render() {
    const { classes } = this.props;

    return (
      <LandingPageLayout>
        <div className={classes.root}>
          <Grid
            container
            spacing={4}
          >
            <p>Welcome Back!</p>
          </Grid>
        </div>
      </LandingPageLayout>
    );
  }
}

Account.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Account);
