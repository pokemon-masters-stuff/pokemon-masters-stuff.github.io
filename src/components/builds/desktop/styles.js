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
  buildNameDark: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    lineHeight: 4,
    paddingLeft: 20,
    backgroundColor: '#586e75'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  buildContainerDark: {
    borderRadius: 5
  },
  buildContainer: {
    borderRadius: 5
  }
}));
