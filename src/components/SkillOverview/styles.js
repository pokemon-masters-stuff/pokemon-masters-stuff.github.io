import { createStyles } from '@material-ui/core/styles';

export default createStyles(theme => ({
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
}));