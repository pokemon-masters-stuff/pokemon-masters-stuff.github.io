import { createStyles } from '@material-ui/core/styles';

export default createStyles(theme => ({
  mainContainer: {
    width: '100%',
    paddingTop: 136,
    paddingBottom: 195
  },
  syncGridWrapper: {
    width: '100%',
    height: '100%',
    overflow: 'scroll'
  },
  buildNameField: {
    minWidth: 230
  }
}));
