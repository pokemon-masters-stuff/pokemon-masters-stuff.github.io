import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import UI from '../../../utils/translations';
import {
  // getPokemonDataByTrainerId,
  getSyncPairNameAndIdByTrainerId,
} from '../../../utils/functions';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const ShareTeamButton = () => {
  const language = useSelector((state) => state.language.currentLanguage);
  const url = useSelector((state) => state.grid.teamUrl);
  const teamMembers = useSelector((state) => state.grid.teamMembers);
  const [isShareTeamModalVisible, setIsShareTeamModalVisible] = useState(false);

  const handleOnCloseShareTeamModal = () => {
    setIsShareTeamModalVisible(false);
  };

  let arrayOfTeamMemberTrainerNameIds = [
    getSyncPairNameAndIdByTrainerId(teamMembers.slot1)
      ? getSyncPairNameAndIdByTrainerId(teamMembers.slot1).trainerNameId
      : 'Empty_Slot_1',
    getSyncPairNameAndIdByTrainerId(teamMembers.slot2)
      ? getSyncPairNameAndIdByTrainerId(teamMembers.slot2).trainerNameId
      : 'Empty_Slot_2',
    getSyncPairNameAndIdByTrainerId(teamMembers.slot3)
      ? getSyncPairNameAndIdByTrainerId(teamMembers.slot3).trainerNameId
      : 'Empty_Slot_3',
  ];
  const handleOnOpenShareTeamModal = () => {
    if (
      arrayOfTeamMemberTrainerNameIds.length !==
        new Set(arrayOfTeamMemberTrainerNameIds).size || // if contains duplicates
      (arrayOfTeamMemberTrainerNameIds.includes('ch0117') &&
        arrayOfTeamMemberTrainerNameIds.includes('ch0001'))
    ) {
      return alert(
        'A Trainer with the same name is already on this team. Please choose another.'
      );
    } else {
      setIsShareTeamModalVisible(true);
    }
  };

  return (
    <Fragment>
      <Button variant="outlined" onClick={handleOnOpenShareTeamModal}>
        {UI['Share'][language]}
      </Button>
      <Dialog
        open={isShareTeamModalVisible}
        onClose={handleOnCloseShareTeamModal}
      >
        <DialogTitle> {UI['Share this link'][language]}</DialogTitle>
        <DialogContent>
          <TextField value={url} />
        </DialogContent>

        <DialogActions>
          <CopyToClipboard text={url}>
            <Button onClick={handleOnCloseShareTeamModal}>
              {UI['Copy to Clipboard'][language]}
            </Button>
          </CopyToClipboard>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default ShareTeamButton;
