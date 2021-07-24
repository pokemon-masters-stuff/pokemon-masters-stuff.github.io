import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FeedbackIcon from '@material-ui/icons/Feedback';
import FeedbackForm from '../../FeedbackForm';
import styles from './styles';
import { logout } from '../../../actions/actionCreators';
import AnnouncementModal from '../../AnnouncementModal';
import ContributeModal from '../../ContributeModal';
import LanguageModal from '../../LanguageModal';
import UI from '../../../utils/translations';
import Divider from '@material-ui/core/Divider';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import HomeIcon from '@material-ui/icons/Home'; // for Sync Grid Helper home page
import ExposureIcon from '@material-ui/icons/Exposure';
import ViewColumnIcon from '@material-ui/icons/ViewColumn'; // for teams
import SearchIcon from '@material-ui/icons/Search';

function Sidebar(props) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const language = useSelector((state) => state.language.currentLanguage);
  const dispatch = useDispatch();
  const handleOnClickLogout = () => {
    dispatch(logout());
  };

  const [open, setOpen] = useState(false);

  const { classes, isOpened, onCloseHandler } = props;

  const handleOnClose = () =>
    typeof onCloseHandler === 'function' ? onCloseHandler() : null;

  const handleClickOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Drawer open={isOpened} onClose={handleOnClose}>
      <List className={classes.listRoot}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem button onClick={handleOnClose}>
            <ListItemIcon className={classes.listIcon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={UI['Home'][language]} />
          </ListItem>
        </Link>
        {isAuthenticated ? (
          <Link
            to="/builds/popular"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ListItem button onClick={handleOnClose}>
              <ListItemIcon className={classes.listIcon}>
                <WhatshotIcon />
              </ListItemIcon>
              <ListItemText primary={UI['Popular Builds'][language]} />
            </ListItem>
          </Link>
        ) : (
          <ListItem
            button
            onClick={handleOnClose}
            data-toggle="modal"
            data-target="#loginOrRegisterModal"
          >
            <ListItemIcon className={classes.listIcon}>
              <WhatshotIcon />
            </ListItemIcon>
            <ListItemText primary={UI['Popular Builds'][language]} />
          </ListItem>
        )}

        <Link
          to="/team-builder"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ListItem button onClick={handleOnClose}>
            <ListItemIcon className={classes.listIcon}>
              <ViewColumnIcon />
            </ListItemIcon>
            <ListItemText primary={UI['Team Builder'][language]} />
          </ListItem>
        </Link>

        {isAuthenticated ? (
          <Link
            to="/teams/popular"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ListItem button onClick={handleOnClose}>
              <ListItemIcon className={classes.listIcon}>
                <WhatshotIcon />
              </ListItemIcon>
              <ListItemText primary={UI['Popular Teams'][language]} />
            </ListItem>
          </Link>
        ) : (
          <ListItem
            button
            onClick={handleOnClose}
            data-toggle="modal"
            data-target="#loginOrRegisterModal"
          >
            <ListItemIcon className={classes.listIcon}>
              <WhatshotIcon />
            </ListItemIcon>
            <ListItemText primary={UI['Popular Teams'][language]} />
          </ListItem>
        )}

        <Link
          to="/gacha-odds-calculator"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ListItem button onClick={handleOnClose}>
            <ListItemIcon className={classes.listIcon}>
              <ExposureIcon />
            </ListItemIcon>
            <ListItemText primary={UI['Gacha Odds Calculator'][language]} />
          </ListItem>
        </Link>

        <Link
          to="/egg-pokemon"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ListItem button onClick={handleOnClose}>
            <ListItemIcon className={classes.listIcon}>
              <Brightness1Icon />
            </ListItemIcon>
            <ListItemText primary={UI['Egg Pokémon'][language]} />
          </ListItem>
        </Link>

        <Link
          to="/skill-finder"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ListItem button onClick={handleOnClose}>
            <ListItemIcon className={classes.listIcon}>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <>
                  Skill Finder
                  <sup> NEW</sup>
                </>
              }
            />
          </ListItem>
        </Link>
      </List>

      <Divider />

      <List className={classes.listRoot}>
        <AnnouncementModal classes={classes} />
        <ContributeModal classes={classes} />
        <ListItem button onClick={handleClickOpenModal}>
          <ListItemIcon className={classes.listIcon}>
            <FeedbackIcon />
          </ListItemIcon>
          <ListItemText primary={UI['Submit Feedback'][language]} />
        </ListItem>
        <FeedbackForm open={open} onCloseModalHandler={handleCloseModal} />
        <LanguageModal classes={classes} />

        {isAuthenticated ? (
          <ListItem button onClick={handleOnClickLogout}>
            <ListItemIcon className={classes.listIcon}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={UI['Logout'][language]} />
          </ListItem>
        ) : (
          <Fragment>
            <ListItem
              button
              onClick={handleOnClose}
              data-toggle="modal"
              data-target="#loginModal"
            >
              <ListItemIcon className={classes.listIcon}>
                <VpnKeyIcon />
              </ListItemIcon>
              <ListItemText primary={UI['Login'][language]} />
            </ListItem>

            <ListItem
              button
              onClick={handleOnClose}
              data-toggle="modal"
              data-target="#registerModal"
            >
              <ListItemIcon className={classes.listIcon}>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary={UI['Register'][language]} />
            </ListItem>
          </Fragment>
        )}
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(Sidebar);
