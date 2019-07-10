import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Shared components
import { SearchInput } from 'components';

// Component styles
import styles from './styles';

class SearchToolbar extends Component {
  render() {
    const { classes, className, onChange } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName}>
        <div className={classes.row}>
          <SearchInput
            className={classes.searchInput}
            onChange={onChange}
            placeholder="Search email"
          />
          <span className={classes.spacer} />
        </div>
      </div>
    );
  }
}

SearchToolbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

export default withStyles(styles)(SearchToolbar);
