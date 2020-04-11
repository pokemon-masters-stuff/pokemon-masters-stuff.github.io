import React, { Fragment, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';

const AnnouncementModal = (props) => {
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
        <ListItemText primary="Announcements" />
      </ListItem>

      <Dialog
        open={isAnnouncementModalVisible}
        onClose={handleOnCloseAnnouncementModal}
      >
        <DialogTitle>{'Announcements'}</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            4/11/2020:
            <br />
            Added multi-language support for Pokemon names.
            <br />
            <br />
            3/29/2020:
            <br />
            Added multi-language support for Skill Names and Skill Descriptions.
            Still need to work on skill name abbreviations but I need help on
            that. If you believe you can help please send me a feedback with
            your contact info so I can get in touch with you. Thanks in advance!
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default AnnouncementModal;
