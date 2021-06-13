import { createStyles } from '@material-ui/core/styles';

export default createStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  menuPaper: {
    maxHeight: 500,
  },
  darkMode: {
    fill: 'white',
  },
  card: {
    margin: 3,
    marginTop: 15,
    height: 300,
    width: 110,
    position: 'relative',
    display: 'inline-block',
  },
  fab: {
    color: 'primary',
    position: 'absolute',
    top: 2,
    right: 2,
    label: 'Gender',
  },
  progressWrapper: {
    position: ' absolute',
    top: ' 50%',
    left: ' 50%',
    transform: ' translate(-50%, -50%)',
  },
}));
