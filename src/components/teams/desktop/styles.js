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
  teamName: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    lineHeight: 4,
    paddingLeft: 20,
  },
  teamNameDark: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    lineHeight: 4,
    paddingLeft: 20,
    backgroundColor: '#586e75',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  syncPairFilter: {
    margin: theme.spacing(1),
    minWidth: 500,
  },
  teamContainerDark: {
    borderRadius: 5,
  },
  teamContainer: {
    borderRadius: 5,
  },
}));
