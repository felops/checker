import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Shared services
import { getEmails } from 'services/email/index';

// Custom components
import { SearchToolbar, EmailsTable } from './components';

// Component styles
import styles from './style';

class UserList extends Component {
  state = {
    emails: {
      isLoading: true,
      emails: [],
      filteredEmails: [],
    }
  }

  componentDidMount() {
    this.getEmails();
  }

  async getEmails() {
    try {
      this.setState({ isLoading: true });

      const { emails } = await getEmails();

      this.setState({
        emails: {
          isLoading: false,
          emails,
          filteredEmails: emails
        }
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        error
      });
    }
  }

  onChange = e => {
    let filter = e.target.value,
      emails = this.state.emails.emails

    this.setState({
      emails: {
        isLoading: false,
        emails: emails,
        filteredEmails: emails.filter(e => e.email.includes(filter))
      }
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Validated Emails">
        <div className={classes.root}>
          <SearchToolbar onChange={this.onChange} />
          <div className={classes.content}>
            <EmailsTable
              emails={this.state.emails.filteredEmails}
              isLoading={this.state.emails.isLoading}
            />
          </div>
        </div>
      </DashboardLayout>
    );
  }
}

UserList.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserList);
