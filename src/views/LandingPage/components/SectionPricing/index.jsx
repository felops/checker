import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography
} from '@material-ui/core';

// Material icons
import {
  Done as DoneIcon,
  Clear as ClearIcon
} from '@material-ui/icons';

import Chip from '@material-ui/core/Chip';

// Shared layouts
import { Title } from 'components';

// Component styles
import styles from './styles';

class SectionPricing extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Title text="Pricing" />
        <Grid
          container
          spacing={6}
        >
          <Grid
            item
            xs={4}
          >
            <Paper className={classes.paper}>
              <Box mb={2}>
                <Typography className={classes.plan}>BASIC</Typography>
                <Typography className={classes.subPlan}>For who is starting</Typography>
              </Box>
              <Divider />
              <div className={classes.price}>
                <Typography className={classes.priceTag}>
                  <span className={classes.priceSymbol}>$</span>
                  19
                </Typography>
                <Chip
                  color="primary"
                  label="per month"
                  size="small"
                  variant="outlined"
                />
                <Typography className={classes.priceText}>Best option for who is just starting and need a powerful email validator</Typography>
              </div>
              <Divider />
              <ul className={classes.list}>
                <li className={classes.item}>
                  <Chip
                    color="secondary"
                    icon={<DoneIcon />}
                    label="Individual Validation"
                  />
                </li>
                <li className={classes.item}>
                  <Chip
                    icon={<ClearIcon />}
                    label="History Record"
                  />
                </li>
                <li className={classes.item}>
                  <Chip
                    icon={<ClearIcon />}
                    label="Bulk Validation"
                  />
                </li>
              </ul>
              <Link to="/sign-up">
                <Button
                  className={classes.button}
                  color="primary"
                  size="large"
                  variant="contained"
                >
                  GET STARTED
                </Button>
              </Link>
            </Paper>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <Paper className={classes.paper}>
              <Box mb={2}>
                <Typography className={classes.plan}>BUSSINESS</Typography>
                <Typography className={classes.subPlan}>Fow who is growing</Typography>
              </Box>
              <Divider />
              <div className={classes.price}>
                <Typography className={classes.priceTag}>
                  <span className={classes.priceSymbol}>$</span>
                  39
                </Typography>
                <Chip
                  color="primary"
                  label="per month"
                  size="small"
                  variant="outlined"
                />
                <Typography className={classes.priceText}>Best option for who has a bussiness and need to validate emails</Typography>
              </div>
              <Divider />
              <ul className={classes.list}>
                <li className={classes.item}>
                  <Chip
                    color="secondary"
                    icon={<DoneIcon />}
                    label="Individual Validation"
                  />
                </li>
                <li className={classes.item}>
                  <Chip
                    color="secondary"
                    icon={<DoneIcon />}
                    label="History Record"
                  />
                </li>
                <li className={classes.item}>
                  <Chip
                    icon={<ClearIcon />}
                    label="Bulk Validation"
                  />
                </li>
              </ul>
              <Link to="/sign-up">
                <Button
                  className={classes.button}
                  color="primary"
                  size="large"
                  variant="contained"
                >
                  GET STARTED
                </Button>
              </Link>
            </Paper>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <Paper className={classes.paper}>
              <Box mb={2}>
                <Typography className={classes.plan}>UNLIMITED</Typography>
                <Typography className={classes.subPlan}>Fow who is BIG</Typography>
              </Box>
              <Divider />
              <div className={classes.price}>
                <Typography className={classes.priceTag}>
                  <span className={classes.priceSymbol}>$</span>
                  99
                </Typography>
                <Chip
                  color="primary"
                  label="per month"
                  size="small"
                  variant="outlined"
                />
                <Typography className={classes.priceText}>Best option for who is big and can't have any mistake in email validation</Typography>
              </div>
              <Divider />
              <ul className={classes.list}>
                <li className={classes.item}>
                  <Chip
                    color="secondary"
                    icon={<DoneIcon />}
                    label="Individual Validation"
                  />
                </li>
                <li className={classes.item}>
                  <Chip
                    color="secondary"
                    icon={<DoneIcon />}
                    label="History Record"
                  />
                </li>
                <li className={classes.item}>
                  <Chip
                    color="secondary"
                    icon={<DoneIcon />}
                    label="Bulk Validation"
                  />
                </li>
              </ul>
              <Link to="/sign-up">
                <Button
                  className={classes.button}
                  color="primary"
                  size="large"
                  variant="contained"
                >
                  GET STARTED
                </Button>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

SectionPricing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SectionPricing);
