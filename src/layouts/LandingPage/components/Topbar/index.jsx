import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles, withWidth } from '@material-ui/core';

// Material components
import {
  Button,
  Toolbar
} from '@material-ui/core';

// Component styles
import styles from './styles';

class Topbar extends Component {
  render() {
    const {
      classes,
      className,
      width
    } = this.props;

    const rootClassName = classNames(classes.root, className);
    const isMobile = ['xs', 'sm'].includes(width);

    return (
      <div className={rootClassName}>
        <Toolbar className={classes.toolbar}>
          <LinkScroll
            className={classes.cursorPointer}
            duration={500}
            offset={-100}
            smooth
            spy
            to="content"
          >
            <img
              alt="Brainalytica logo"
              className={classes.logoImage}
              src="/images/logo.png"
            />
          </LinkScroll>
          <div className={classes.actionButton}>
            {!isMobile && (
              <Fragment>
                <LinkScroll
                  activeClass={classes.headerMenuActive}
                  className={classes.headerMenu}
                  duration={500}
                  offset={-100}
                  smooth
                  spy
                  to="how"
                >
                  How it Works
                </LinkScroll>
                <LinkScroll
                  activeClass={classes.headerMenuActive}
                  className={classes.headerMenu}
                  duration={500}
                  offset={-100}
                  smooth
                  spy
                  to="features"
                >
                  Features
                </LinkScroll>
                <LinkScroll
                  activeClass={classes.headerMenuActive}
                  className={classes.headerMenu}
                  duration={500}
                  isDynamic
                  offset={-100}
                  smooth
                  spy
                  to="why"
                >
                  Why Checker?
                </LinkScroll>
                <LinkScroll
                  activeClass={classes.headerMenuActive}
                  className={classes.headerMenu}
                  duration={500}
                  offset={-100}
                  smooth
                  spy
                  to="pricing"
                >
                  Princing
                </LinkScroll>
              </Fragment>
            )}
            <Link
              className={classes.signInButton}
              to="/sign-in"
            >
              <Button
                color="primary"
                variant="outlined"
              >
                SIGN IN
              </Button>
            </Link>
            <Link
              to="/sign-up"
            >
              <Button
                color="primary"
                variant="contained"
              >
                SIGN UP
              </Button>
            </Link>
          </div>
        </Toolbar>
      </div>
    );
  }
}

Topbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default compose(
  withRouter,
  withStyles(styles),
  withWidth()
)(Topbar);
