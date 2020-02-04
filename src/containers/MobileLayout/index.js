import React, {Component} from 'react';
import ReactGA from 'react-ga';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import MenuIcon from '@material-ui/icons/Menu';
import ListIcon from '@material-ui/icons/List';
import FeedbackIcon from '@material-ui/icons/Feedback';
import CloseIcon from '@material-ui/icons/Close';

import SelectPokemonDropdown from "../../components/SelectPokemonDropdown";
import GridMap from "../../components/GridMap";
import styles from './styles';

ReactGA.initialize('UA-157426792-1');

class MobileApp extends Component {
  state = {
    isNavOpened: false,
    isSkillListOpened: false
  };

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  handleOnCloseNav = () => this.setState({isNavOpened: false});

  handleOnOpenNav = () => this.setState({isNavOpened: true});

  handleOnCloseSkillList = () => this.setState({isSkillListOpened: false});

  handleOnOpenSkillList = () => this.setState({isSkillListOpened: true});

  handleOnChangePokemon(value) {
    console.log(value);
  }

  render() {
    const {isNavOpened, isSkillListOpened} = this.state;
    const {classes} = this.props;

    return (
      <>
        <Drawer open={isNavOpened} onClose={this.handleOnCloseNav}>
          <List>
            <ListItem button>
              <ListItemIcon><FeedbackIcon /></ListItemIcon>
              <ListItemText primary="Submit Feedback" />
            </ListItem>
          </List>
        </Drawer>

        <Drawer anchor="right" open={isSkillListOpened} onClose={this.handleOnCloseSkillList}>
          <List dense>
            <ListItem key="Thunderbolt Power + 4">
              <ListItemText primary="Thunderbolt Power + 4" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <CloseIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem key="Sp.Atk + 5">
              <ListItemText primary="Sp.Atk + 5" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <CloseIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem key="Thunder of Newfound Passion Power + 25">
              <ListItemText primary="Thunder of Newfound Passion Power + 25" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <CloseIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem key="Sp.Atk + 10">
              <ListItemText primary="Sp.Atk + 10" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <CloseIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Drawer>

        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={this.handleOnOpenNav}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sync Grid Helper
            </Typography>
          </Toolbar>

          <Toolbar className={classes.subToolbar}>
            <Typography variant="body1" className={classes.title}>
              Remaining Energy: 55
            </Typography>
            <Typography variant="body1" className={classes.title}>
              Orbs spent: 60
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.mainContainer}>
        <Grid container className={classes.pokemonControls} alignItems="center" justify="space-around">
          <Grid item>
            <SelectPokemonDropdown onChangeHandler={this.handleOnChangePokemon} />
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={this.handleOnOpenSkillList} startIcon={<ListIcon />}>Active List</Button>
          </Grid>
        </Grid>

        <Grid container alignItems="stretch" justify="center">
          <Grid item xs={12}>
            <div className={classes.syncGridWrapper}>
              <GridMap />
            </div>
          </Grid>
        </Grid>

        <div className={classes.skillOverviewCardWrapper}>
            <Card className={classes.skillOverviewCard} variant="outlined">
              <CardContent>
                <Typography variant="body2" component="p">
                  Thunder of Newfound Passion Power
                </Typography>
                <Typography color="textSecondary">
                  + 25
                </Typography>
              </CardContent>
              <CardActions className={classes.skillOverviewCardFooter}>
                <Button size="small" color="secondary">Select</Button>
              </CardActions>
            </Card>
        </div>
      </div>
      </>
    );
  }
}

export default withStyles(styles)(MobileApp);
