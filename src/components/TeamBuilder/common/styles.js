import { createStyles } from '@material-ui/core/styles';

export default createStyles((theme) => ({
  progressWrapper: {
    position: ' absolute',
    top: ' 50%',
    left: ' 50%',
    transform: ' translate(-50%, -50%)',
  },
  selectedPokemonCell: {
    textTransform: 'capitalize',
  },
  darkMode: {
    fill: 'white',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  syncLevel: {
    margin: theme.spacing(1),
    minWidth: 20,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  expanded: {
    '&$expanded': {
      margin: 0,
    },
  },
}));
