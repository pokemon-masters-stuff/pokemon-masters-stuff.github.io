import { createStyles } from '@material-ui/core/styles';

export default createStyles(theme => ({
  progressWrapper: {
    position: ' absolute',
    top: ' 50%',
    left: ' 50%',
    transform: ' translate(-50%, -50%)'
  },
  selectedPokemonCell: {
    textTransform: 'capitalize'
  },
  darkMode: {
    fill: 'white'
  },
  buildName: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    lineHeight: 4,
    paddingLeft: 20
  },
  description: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  }
}));
