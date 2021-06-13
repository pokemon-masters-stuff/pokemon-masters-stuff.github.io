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
    paddingLeft: 10,
    backgroundColor: '#586e75',
    minHeight: 60,
  },
  teamNameDark: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10,
    backgroundColor: '#586e75',
    minHeight: 60,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  teamContainerDark: {
    borderRadius: 5,
  },
  teamContainer: {
    borderRadius: 5,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  subToolbar: {
    background: theme.palette.background.paper,
    color: theme.palette.common.black,
  },
  expanded: {
    '&$expanded': {
      margin: 0,
    },
  },
}));
