import { createStyles } from '@material-ui/core/styles';

export default createStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  subToolbar: {
    background: theme.palette.background.paper,
    color: theme.palette.common.black,
  }
}));