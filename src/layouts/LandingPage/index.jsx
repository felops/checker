import React, { Component, Fragment } from 'react';

// Externals
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

// Material helpers
import { withWidth } from '@material-ui/core';

// Custom components
import { Topbar, Footer } from './components';

class LandingPage extends Component {
  constructor(props) {
    super(props);

    const isMobile = ['xs', 'sm', 'md'].includes(props.width);

    this.state = {
      isOpen: !isMobile
    };
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <Topbar />
        <main>
          {children}
          <Footer />
        </main>
      </Fragment>
    );
  }
}

LandingPage.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string.isRequired
};

export default compose(
  withWidth()
)(LandingPage);
