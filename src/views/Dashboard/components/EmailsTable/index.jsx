import React, { Component, Fragment } from 'react';

// Externals
import classNames from 'classnames';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Box,
  Chip,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';

// Material icons
import {
  Done as DoneIcon,
  Clear as ClearIcon
} from '@material-ui/icons';

// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent
} from 'components';

// Component styles
import styles from './styles';

class EmailsTable extends Component {
  render() {
    const { classes, className, isLoading, emails } = this.props;

    const rootClassName = classNames(classes.root, className);
    const showEmails = !isLoading && emails.length > 0;

    return (
      <Portlet className={rootClassName}>
        {!isLoading && !showEmails && (
          <Box
            className={classes.emptyStateWrapper}
            m={8}
          >
            <Typography
              className={classes.emptyStateTitle}
              variant="h4"
            >
              Ops, you didn't validate any email yet.
            </Typography>
            <Typography
              className={classes.emptyStateText}
              variant="subtitle1"
            >
              Validate your first email typing an email in the input above.
            </Typography>
          </Box>
        )}
        {isLoading && (
          <div className={classes.progressWrapper}>
            <CircularProgress />
          </div>
        )}
        {showEmails && (
          <Fragment>
            <PortletHeader noDivider>
              <PortletLabel title="Latest validated mails" />
            </PortletHeader>
            <PerfectScrollbar>
              <PortletContent
                className={classes.portletContent}
                noPadding
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Email</TableCell>
                      <TableCell align="left">Status</TableCell>
                      <TableCell/>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {emails.sort((a,b) => moment(b.createdAt).diff(moment(a.createdAt))).map(data => (
                      <TableRow
                        className={classes.tableRow}
                        hover
                        key={data.id}
                      >
                        <TableCell>{data.email}</TableCell>
                        <TableCell>
                          <div className={classes.statusWrapper}>
                            <Chip
                              color={data.isValid ? 'primary' : 'default'}
                              icon={data.isValid ?  <DoneIcon /> : <ClearIcon />}
                              label={data.isValid ? 'Valid' : 'Invalid'}
                            />
                          </div>
                        </TableCell>
                        <TableCell>
                          {moment(data.createdAt).fromNow()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </PortletContent>
            </PerfectScrollbar>
          </Fragment>
        )}
      </Portlet>
    );
  }
}

EmailsTable.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  emails: PropTypes.array,
  emailsTotal: PropTypes.number,
  isLoading: PropTypes.bool
};

export default withStyles(styles)(EmailsTable);
