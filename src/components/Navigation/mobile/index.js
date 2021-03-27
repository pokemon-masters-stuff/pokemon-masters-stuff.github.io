import React, { useState, Fragment } from 'react';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import styles from './styles';
import Nav from './Nav';
import SubToolbar from './SubToolbar';
import Sidebar from './Sidebar';
import LoginOrRegisterModal from '../../auth/LoginOrRegisterModal';

function Navigation(props) {
  const {
    classes,
    // onOpenNavHandler,
    data,
    // isNavOpened,
    // handleOnCloseNav,
  } = props;

  const [isOpened, setisOpened] = useState(false);

  const onOpenHandler = () => {
    setisOpened(true);
  };

  const onCloseHandler = () => {
    setisOpened(false);
  };

  return (
    <Fragment>
      <AppBar position="fixed">
        <Nav onOpenNavHandler={onOpenHandler} />
        {data ? <SubToolbar data={data} classes={classes} /> : null}
        <Sidebar isOpened={isOpened} onCloseHandler={onCloseHandler} />
      </AppBar>
      <LoginOrRegisterModal />
    </Fragment>
  );
}

export default withStyles(styles)(Navigation);
