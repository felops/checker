import React, { Component, Fragment } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Avatar,
  Grid,
  Paper,
  Typography
} from '@material-ui/core';

// Shared layouts
import { Title } from 'components';

// Component styles
import styles from './styles';

class SectionTeam extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Title text="Meet the Team" />
        <Grid
          container
          justify="center"
        >
          <div className={classes.separator} />
        </Grid>
        <Grid
          alignItems="center"
          container
          justify="center"
          spacing={10}
        >
          <Grid
            item
            md={4}
            xs={12}
          >
            <Paper className={classes.paperTeam}>
              <Avatar
                alt="Bernardo Rocha"
                className={classes.avatar}
                src="/images/avatars/bernardo.jpg"
              />
              <Typography className={classes.name}>Bernardo Rocha</Typography>
              <Typography className={classes.role}>CEO</Typography>
              <Typography className={classes.description}>Bernardo is the founder the Checker. His idea to create Checker came after several fails in marketing campaigns because of invalid emails.</Typography>
            </Paper>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
          >
            <Paper className={classes.paperTeam}>
              <Avatar
                alt="Daniel Henrique"
                className={classes.avatar}
                src="/images/avatars/daniel.jpg"
              />
              <Typography className={classes.name}>Daniel Henrique</Typography>
              <Typography className={classes.role}>CTO</Typography>
              <Typography className={classes.description}>Daniel is our tech guide. With his vast experience and advanced knowledge in microservices, he comes to the Checker to make our tool even better.</Typography>
            </Paper>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
          >
            <Paper className={classes.paperTeam}>
              <Avatar
                alt="Felipe Lopes"
                className={classes.avatar}
                src="/images/avatars/felipe.jpg"
              />
              <Typography className={classes.name}>Felipe Lopes</Typography>
              <Typography className={classes.role}>Full Stack Developer</Typography>
              <Typography className={classes.description}>Felipe is the new developer of the Checker. He started programming when he was 16 years and since then improved to learn the cutting-edge technologies.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

SectionTeam.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SectionTeam);
