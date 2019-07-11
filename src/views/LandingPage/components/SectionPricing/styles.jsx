export default theme => ({
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    transition: 'all .6s cubic-bezier(.78,.14,.15,.86)',
    boxShadow: '0 10px 30px -10px rgba(0,64,32,.2)',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 30px 30px -10px rgba(0,64,32,.2)',
      transition: 'all .6s cubic-bezier(.78,.14,.15,.86)'
    },
  },
  plan: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: theme.palette.text.secondary
  },
  subPlan: {
    padding: '0.5rem',
    color: theme.palette.primary.main
  },
  price: {
    margin: '2rem'
  },
  priceTag: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    lineHeight: '3rem'
  },
  priceSymbol: {
    margin: '0 0.2rem',
    fontSize: '1.5rem'
  },
  priceText: {
    paddingTop: '0.85rem',
    color: theme.palette.text.secondary
  },
  list: {
    paddingTop: '1rem',
    listStyleType: 'none'
  },
  item: {
    padding: '1rem 0',
    borderColor: 'rgba(0, 0, 0, 0.07)'
  },
  button: {
    marginTop: '2rem'
  }
});
