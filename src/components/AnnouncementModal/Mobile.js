import React, { Fragment, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';

const AnnouncementModal = props => {
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
            3/23/2020:
            <br />
            1. Added new sync grids.
            <br />
            2. You can now comment on other people's builds.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default AnnouncementModal;
