import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import UI from '../../utils/translations';

const AnnouncementModal = (props) => {
  const language = useSelector((state) => state.language.currentLanguage);

  const [isAnnouncementModalVisible, setIsAnnouncementModalVisible] = useState(
    false
  );

  const handleOnOpenAnnouncementModal = () => {
    setIsAnnouncementModalVisible(true);
  };

  const handleOnCloseAnnouncementModal = () => {
    setIsAnnouncementModalVisible(false);
  };

  return (
    <Fragment>
      <ListItem button onClick={handleOnOpenAnnouncementModal}>
        <ListItemIcon className={props.classes.listIcon}>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary={UI['Announcements'][language]} />
      </ListItem>

      <Dialog
        open={isAnnouncementModalVisible}
        onClose={handleOnCloseAnnouncementModal}
      >
        <DialogTitle>{UI['Announcements'][language]}</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            4/19/2020:
            <br />
            <br />
            Added multi-language support for UI. Credit to Jo from Discord for
            the Italian translations. He also abbreviated all the Italian skill
            names. It was a lot of work so many thanks to him!
            <br />
            <br />
            For the other languages I relied on Google Translate. If you see any
            mistranslation, you can help me correct it by editing this Google
            Doc:
            <br />
            https://docs.google.com/document/d/19HZYH4QvrnB-G52n18igDVOWtJKgvJUCxTk3v7Y6gEU/edit?usp=sharing
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            target="_blank"
            href="https://docs.google.com/document/d/19HZYH4QvrnB-G52n18igDVOWtJKgvJUCxTk3v7Y6gEU/edit?usp=sharing"
            color="primary"
            autoFocus
          >
            Open link in new tab
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default AnnouncementModal;
