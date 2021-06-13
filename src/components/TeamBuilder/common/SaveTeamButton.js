import React, { Fragment, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import UI from '../../../utils/translations';
import {
  saveCurrentTeamBuild,
  deleteSelectedTeamBuild,
} from '../../../actions/actionCreators';
import { getSyncPairNameAndIdByTrainerId } from '../../../utils/functions';

const SaveBuildButton = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  const teamMembers = useSelector((state) => state.grid.teamMembers);

  const teamSavedBuilds = useSelector((state) =>
    state.grid.teamSavedBuilds.allIds.map(
      (id) => state.grid.teamSavedBuilds.byIds[id]
    )
  );
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

  const newBuildNameRef = useRef(null);

  const [isSaveBuildModalVisible, setIsSaveBuildModalVisible] = useState(false);

  const handleOnCloseSaveBuildModal = () => {
    setIsSaveBuildModalVisible(false);
  };

  const handleOnOpenSaveBuildModal = () => {
    if (
      arrayOfTeamMemberTrainerNameIds.length !==
      new Set(arrayOfTeamMemberTrainerNameIds).size // if contains duplicates
    ) {
      return alert(
        'A Trainer with the same name is already on this team. Please choose another.'
      );
    } else {
      setIsSaveBuildModalVisible(true);
    }
  };

  const handleOnSaveBuild = () => {
    let userConfirmation = true;
    if (newBuildNameRef.current.value) {
      // If already have a save with the same name, delete old save
      for (let build in teamSavedBuilds) {
        if (teamSavedBuilds[build].name === newBuildNameRef.current.value) {
          userConfirmation = window.confirm(
            'There is a save with the same name. Do you wish to overwrite it?'
          );
          userConfirmation &&
            dispatch(
              deleteSelectedTeamBuild({
                buildId: teamSavedBuilds[build].id,
              })
            );
        }
      }
      userConfirmation &&
        dispatch(
          saveCurrentTeamBuild({
            buildName: newBuildNameRef.current.value,
          })
        );
      setIsSaveBuildModalVisible(false);
    } else alert('Please enter a name');
  };

  return (
    <Fragment>
      <Button
        variant="outlined"
        // data-toggle="modal"
        // data-target="#saveBuildModal"
        onClick={handleOnOpenSaveBuildModal}
      >
        {UI['Save Team'][language]}
      </Button>

      <Dialog
        open={isSaveBuildModalVisible}
        onClose={handleOnCloseSaveBuildModal}
      >
        <DialogTitle>{UI['Save Team'][language]}</DialogTitle>
        <DialogContent>
          <TextField
            // className={classes.buildNameField}
            label={UI['Team name'][language]}
            placeholder="Enter a name as a reference"
            inputProps={{ ref: newBuildNameRef }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnCloseSaveBuildModal}>
            {UI['Close'][language]}
          </Button>
          <Button onClick={handleOnSaveBuild}>{UI['Save'][language]}</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default SaveBuildButton;
