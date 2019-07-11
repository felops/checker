import React, { Component, Fragment } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material components
import { Grid } from '@material-ui/core';

// Shared components
import {
  Spent,
  TotalEmails,
  ValidEmails
} from './components';

export default class Kpis extends Component {
  render() {
    const { isLoading, totalEmails, validEmails } = this.props;

    return (
      <Fragment>
        <Grid
          item
          lg={4}
          sm={8}
          xl={4}
          xs={12}
        >
          <TotalEmails
            isLoading={isLoading}
            total={totalEmails}
          />
        </Grid>
        <Grid
          item
          lg={4}
          sm={8}
          xl={4}
          xs={12}
        >
          <ValidEmails
            isLoading={isLoading}
            valid={validEmails}
          />
        </Grid>
        <Grid
          item
          lg={4}
          sm={8}
          xl={4}
          xs={12}
        >
          <Spent
            isLoading={isLoading}
            total={totalEmails * 0.5}
          />
        </Grid>
      </Fragment>
    );
  }
}

Kpis.propTypes = {
  isLoading: PropTypes.bool,
  totalEmails: PropTypes.string,
  validEmails: PropTypes.string
};
