export default theme => ({
  root: {},
  portletContent: {
    minWidth: '600px'
  },
  newEntryButton: {
    marginLeft: theme.spacing.unit
  },
  progressWrapper: {
    padding: theme.spacing.unit * 3,
    display: 'flex',
    justifyContent: 'center'
  },
  tableRow: {
    cursor: 'pointer'
  },
  statusWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing.unit
  }
});
