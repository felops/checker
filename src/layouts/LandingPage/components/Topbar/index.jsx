import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Button,
  Toolbar,
} from '@material-ui/core';

// Component styles
import styles from './styles';

class Topbar extends Component {
  render() {
    const {
      classes,
      className
    } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName}>
        <Toolbar className={classes.toolbar}>
          <Link to="/">
            <img
              alt="Brainalytica logo"
              className={classes.logoImage}
              src="/images/logos/brainalytica_logo.svg"
            />
          </Link>
          <Link
            className={classes.signInButton}
            to="/sign-in"
          >
            <Button
              color="primary"
              variant="contained"
            >
              ENTRAR
            </Button>
          </Link>
        </Toolbar>
      </div>
    );
  }
}

Topbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(Topbar);
