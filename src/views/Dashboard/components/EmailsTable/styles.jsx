export default theme => ({
  root: {},
  portletContent: {
    minWidth: '600px'
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
  emptyStateWrapper: {
    textAlign: 'center'
  },
  emptyStateText: {
    color: '#66788A'
  },
  emptyStateTitle: {
    color: '#66788A',
    marginBottom: '1rem'
  }
});
