import { createStyles } from '@material-ui/core/styles';

export default createStyles(theme => ({
  listTitle: {
    padding: theme.spacing(0, 2, 1)
  },
  listDivider: {
    marginBottom: theme.spacing(2)
  },
  listRoot: {
    width: "100%",
    minWidth: 220,
    maxWidth: 360,
  },
}));