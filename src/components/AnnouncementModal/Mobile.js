import React, { Fragment, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';

const AnnouncementModal = () => {
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
      <IconButton
        style={{ color: 'white' }}
        onClick={handleOnOpenAnnouncementModal}
      >
        <InfoIcon />
      </IconButton>

      <Dialog
        open={isAnnouncementModalVisible}
        onClose={handleOnCloseAnnouncementModal}
      >
        <DialogTitle>{'Announcements'}</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            3/23/2020:
            <br />
            Added new sync grids.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default AnnouncementModal;
