import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Shared components
import {
  Portlet,
  PortletContent,
  ValidateInput
} from 'components';

// Component styles
import styles from './styles';

// Service methods
const validateEmail = async (email) => (
  await fetch('/api/v1/email/validate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  })
    .then(response =>
      response
        .json()
        .then(({data, error}) => ({ status: response.status, data, error }))
    )
)

class EmailValidateInput extends Component {
  state = {
    isLoading: false,
    email: ''
  }

  handleValidate = async () => {
    try {
      this.setState({ isLoading: true });

      let email = await validateEmail(this.state.email)

      if(email.status === 200) {
        this.setState({ isLoading: false });

        if(this.props.onValidate) {
          this.props.onValidate(email.data)
        }
      } else {
        this.setState({
          isLoading: false,
          snackbar: {
            show: true,
            message: email.error
          }
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        serviceError: error
      });
    }
  };

  onChange = e => this.setState({ email: e.target.value })

  render() {
    const { classes, className } = this.props;
    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet className={rootClassName}>
        <PortletContent
          className={classes.portletContent}
          noPadding
        >
          <ValidateInput
            isLoading={this.state.isLoading}
            onChange={this.onChange}
            onClick={this.handleValidate}
          />
        </PortletContent>
      </Portlet>
    );
  }
}

EmailValidateInput.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onValidate: PropTypes.func
};

export default withStyles(styles)(EmailValidateInput);
