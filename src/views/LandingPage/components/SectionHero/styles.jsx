export default theme => ({
  sectionHero: {
    margin: '3rem 0rem -6rem'
  },
  gridHero: {
    minHeight: '85vh'
  },
  image: {
    maxWidth: '45vw',
    maxHeight: '45vh'
  },
  centerImage: {
    textAlign: 'center'
  },
  title: {
    fontSize: '3.5rem',
    lineHeight: '4rem',
    color:  theme.palette.primary.main
  },
  subtitle: {
    fontSize: '2rem',
    lineHeight: '3rem',
    margin: '3rem 0rem',
    color: theme.palette.text.secondary
  },
  mobileTitle: {
    fontSize: '2rem',
    lineHeight: '2.5rem'
  },
  mobileSubtitle: {
    fontSize: '1.3rem',
    lineHeight: '2rem',
    margin: '2rem 0rem'
  }
});
