import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Container
} from '@material-ui/core';

// Shared layouts
import { LandingPage as LandingPageLayout } from 'layouts';

// Custom components
import {
  SectionHero,
  SectionHow,
  SectionFeatures,
  SectionWhy,
  SectionPricing,
  SectionTeam
} from './components';

// Component styles
import styles from './style';

class Account extends Component {
  state = { tabIndex: 0 };

  render() {
    const { classes } = this.props;

    return (
      <LandingPageLayout>
        <Container
          className={classes.root}
          maxWidth="xl"
        >
          <SectionHero />
        </Container>
        <Container
          className={classes.root}
          maxWidth="lg"
        >
          <section id="how">
            <SectionHow />
          </section>
          <section id="features">
            <SectionFeatures />
          </section>
          <section id="why">
            <SectionWhy />
          </section>
          <section id="pricing">
            <SectionPricing />
          </section>
          <section id="team">
            <SectionTeam />
          </section>
        </Container>
      </LandingPageLayout>
    );
  }
}

Account.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Account);
