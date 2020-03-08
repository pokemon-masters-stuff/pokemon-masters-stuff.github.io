import { createStyles } from '@material-ui/core/styles';

export default createStyles(theme => ({
  listRoot: {
    width: "100%",
    minWidth: 220,
    maxWidth: 360,
  },
  listIcon: {
    minWidth: theme.spacing(3),
    marginRight: theme.spacing(2),
  },
}));