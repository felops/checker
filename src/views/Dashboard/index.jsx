import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Shared services
import { getEmailsKPI, getLatestEmails } from 'services/email/index';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Custom components
import {
  EmailInput,
  EmailsTable,
  Kpis
} from './components';

// Shared components
import { SnackbarStatus } from 'components';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  item: {
    height: '100%'
  }
});

class Dashboard extends Component {
  state = {
    kpi: {
      isLoading: false,
      totalEmails: 0,
      validEmails: 0
    },
    emails: {
      isLoading: true,
      emails: [],
    },
    snackbar: {
      show: false,
      message: '',
      variant: 'error'
    },
  }

  componentDidMount() {
    this.getLatestEmails();
    this.getKPIs();
  }

  async getLatestEmails() {
    try {
      this.setState({ isLoading: true });

      const { emails } = await getLatestEmails();

      this.setState({
        emails: {
          isLoading: false,
          emails
        }
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        error
      });
    }
  }

  async getKPIs() {
    try {
      this.setState({ kpi: { isLoading: true } });

      const { kpi } = await getEmailsKPI();

      this.setState({
        kpi: {
          ...kpi,
          isLoading: false
        }
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        error
      });
    }
  }

  onValidate = emailData => {
    let { email, isValid } = emailData

    this.setState({
      snackbar: {
        show: true,
        message: isValid ? email + ' is a valid email!' : email + ' is a invalid email.',
        variant: isValid ? 'success' : 'error'
      }
    }, () => {
      this.getLatestEmails()
      this.getKPIs()
    })
  }

  handleCloseSnackbar = () => {
    this.setState({
      snackbar: {
        ...this.state.snackbar,
        show: false,
      }
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Dashboard">
        <div className={classes.root}>
          <Grid
            container
            spacing={4}
          >
            <Kpis
              isLoading={this.state.kpi.isLoading}
              totalEmails={this.state.kpi.totalEmails}
              validEmails={this.state.kpi.validEmails}
            />
            <Grid
              item
              lg={6}
              md={6}
              xl={8}
              xs={12}
            >
              <EmailInput onValidate={this.onValidate} />
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              <EmailsTable
                className={classes.item}
                emails={this.state.emails.emails}
                isLoading={this.state.emails.isLoading}
              />
            </Grid>
          </Grid>
        </div>
        <SnackbarStatus
          message={this.state.snackbar.message}
          onClose={this.handleCloseSnackbar}
          open={this.state.snackbar.show}
          variant={this.state.snackbar.variant}
        />
      </DashboardLayout>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
