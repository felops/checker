export default theme => ({
  root: {
    position: 'fixed',
    width: '100%',
    borderBottom: `1px solid ${theme.palette.border}`,
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    height: '64px',
    zIndex: theme.zIndex.appBar
  },
  toolbar: {
    minHeight: 'auto',
    width: '100%'
  },
  actionButton: {
    marginLeft: 'auto'
  },
  signInButton: {
    marginRight: '10px'
  },
  headerMenu: {
    cursor: 'pointer',
    lineHeighjt: 1.5,
    marginRight: '20px',
    color: theme.palette.primary.main,
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial',
    '&:hover': {
      borderBottom: `1px solid ${theme.palette.secondary.main}`
    },
    '&:active': {
      color: `1px solid ${theme.palette.primary.light}`,
      borderBottom: `1px solid ${theme.palette.secondary.main}`
    }
  },
  headerMenuActive: {
    color: theme.palette.primary.dark,
    borderBottom: `1px solid ${theme.palette.secondary.main}`
  },
  cursorPointer: {
    cursor: 'pointer'
  }
});
