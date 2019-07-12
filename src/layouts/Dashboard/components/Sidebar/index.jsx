import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';

// Material icons
import {
  DashboardOutlined as DashboardIcon,
  MailOutlined as MailIcon,
} from '@material-ui/icons';

// Component styles
import styles from './styles';

const ForwardNavLink = React.forwardRef((props, ref) => <NavLink {...props} innerRef={ref} />);

class Sidebar extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      fullName: ''
    }
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    this.setState({
      user: {
        ...user,
        fullName: user.firstName + ' ' + user.lastName
      }
    })
  }

  render() {
    const { classes, className } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <nav className={rootClassName}>
        <div className={classes.logoWrapper}>
          <Link
            className={classes.logoLink}
            to="/dashboard"
          >
            <img
              alt="Brainalytica logo"
              className={classes.logoImage}
              src="/images/logo.png"
            />
          </Link>
        </div>
        <Divider className={classes.logoDivider} />
        <div className={classes.profile}>
          <Link to="/account">
            <Avatar
              alt={this.state.user.fullName}
              className={classes.avatar}
            >
              {this.state.user.firstName.substr(0,1)}{this.state.user.lastName.substr(0,1)}
            </Avatar>
          </Link>
          <Typography
            className={classes.nameText}
            variant="h6"
          >
            {this.state.user.fullName}
          </Typography>
          <Typography
            className={classes.bioText}
            variant="caption"
          >
            {this.state.user.email}
          </Typography>
        </div>
        <Divider className={classes.profileDivider} />
        <List
          component="div"
          disablePadding
        >
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={ForwardNavLink}
            to="/dashboard"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Dashboard"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={ForwardNavLink}
            to="/emails"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <MailIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Validated Emails"
            />
          </ListItem>
        </List>
      </nav>
    );
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
