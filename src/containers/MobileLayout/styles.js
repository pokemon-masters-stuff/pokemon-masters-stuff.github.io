import {createStyles} from '@material-ui/core/styles';

export default createStyles(theme => ({
  mainContainer: {
    width: "100%",
    // height: "100vh",
    paddingTop: 112,
    paddingBottom: 116
  },
  root: {
    flexGrow: 1,
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
  pokemonControls: {
    margin: theme.spacing(2, 0),
  },
  syncGridWrapper: {
    width: '100%',
    height: '100%',
    overflow: 'scroll',
    // paddingBottom: 116
  },
  skillOverviewCardWrapper: {
    position: "fixed",
    top: "auto",
    left: -1,
    right: -1,
    bottom: 0,
  },
  skillOverviewCard: {
    minWidth: 275,
    textAlign: "center",
  },
  skillOverviewCardTitle: {
    fontSize: 14,
  },
  skillOverviewCardFooter: {
    justifyContent: "center",
    paddingTop: 0,
  },
  bottomAppbar: {
    top: "auto",
    bottom: 0,
    background: theme.palette.background.paper,
    color: theme.palette.common.black,
  },
}));