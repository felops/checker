import React, { Fragment } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Grid,
  Typography
} from '@material-ui/core';

// Component styles
import styles from './styles';

const ValidateInput = props => {
  const { classes, text } = props;

  return (
    <Fragment>
      <Typography
        className={classes.title}
        variant="h1"
      >
        {text}
      </Typography>
      <Grid
        container
        justify="center"
      >
        <div className={classes.separator} />
      </Grid>
    </Fragment>
  );
};

ValidateInput.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string
};

export default withStyles(styles)(ValidateInput);
