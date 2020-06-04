import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LanguageIcon from '@material-ui/icons/Language';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import UI from '../../utils/translations';
import { setLanguage } from '../../actions/actionCreators';

const LanguageModal = (props) => {
  const language = useSelector((state) => state.language.currentLanguage);
  const dispatch = useDispatch();

  const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);

  const handleOnOpenLanguageModal = () => {
    setIsLanguageModalVisible(true);
  };

  const handleOnCloseLanguageModal = () => {
    setIsLanguageModalVisible(false);
  };

  const onClick = (value) => {
    dispatch(setLanguage(value));
    handleOnCloseLanguageModal();
  };

  return (
    <Fragment>
      <ListItem button onClick={handleOnOpenLanguageModal}>
        <ListItemIcon className={props.classes.listIcon}>
          <LanguageIcon />
        </ListItemIcon>
        <ListItemText primary={UI['Language'][language]} />
      </ListItem>

      <Dialog
        open={isLanguageModalVisible}
        onClose={handleOnCloseLanguageModal}
        fullWidth={true}
        maxWidth={'xs'}
      >
        <DialogTitle style={{ textAlign: 'center' }}>
          {UI['Language'][language]}
        </DialogTitle>
        <DialogContent dividers>
          <List>
            <ListItem
              style={{ textAlign: 'center' }}
              button
              onClick={() => onClick('de')}
            >
              <ListItemText primary="Deutsch" />
            </ListItem>
            <ListItem
              style={{ textAlign: 'center' }}
              button
              onClick={() => onClick('en')}
            >
              <ListItemText primary="English" />
            </ListItem>
            <ListItem
              style={{ textAlign: 'center' }}
              button
              onClick={() => onClick('es')}
            >
              <ListItemText primary="Español" />
            </ListItem>
            <ListItem
              style={{ textAlign: 'center' }}
              button
              onClick={() => onClick('fr')}
            >
              <ListItemText primary="Français" />
            </ListItem>
            <ListItem
              style={{ textAlign: 'center' }}
              button
              onClick={() => onClick('it')}
            >
              <ListItemText primary="Italiano" />
            </ListItem>
            <ListItem
              style={{ textAlign: 'center' }}
              button
              onClick={() => onClick('ja')}
            >
              <ListItemText primary="日本語" />
            </ListItem>
            <ListItem
              style={{ textAlign: 'center' }}
              button
              onClick={() => onClick('ko')}
            >
              <ListItemText primary="한국어" />
            </ListItem>
            <ListItem
              style={{ textAlign: 'center' }}
              button
              onClick={() => onClick('zh')}
            >
              <ListItemText primary="繁體中文" />
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default LanguageModal;
