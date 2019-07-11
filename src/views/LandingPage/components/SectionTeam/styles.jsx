export default theme => ({
  gridTeam: {
    marginTop: '0.5rem'
  },
  avatar: {
    margin: 'auto',
    width: '120px',
    height: '120px',
    marginTop: '-6rem'
  },
  paperTeam: {
    padding: '2rem',
    textAlign: 'center',
    boxShadow: '0 10px 30px -10px rgba(0,64,32,.2)'
  },
  name: {
    color: theme.palette.primary.main,
    fontSize: '1.8rem',
    fontWeight: 'bold',
    paddingTop: '1rem'
  },
  role: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    marginTop: '0.65rem'
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: '1rem',
    textAlign: 'left'
  }
});
