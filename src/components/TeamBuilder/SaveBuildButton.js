import React, { Fragment, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import UI from '../../utils/translations';
import {
  saveCurrentTeamBuild,
  deleteSelectedTeamBuild,
} from '../../actions/actionCreators';
import syncPairNamesAndIds from '../../data/syncPairNamesAndIds.json';

const SaveBuildButton = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  const teamMembers = useSelector((state) => state.grid.teamMembers);
  const teamSavedBuilds = useSelector((state) =>
    state.grid.teamSavedBuilds.allIds.map(
      (id) => state.grid.teamSavedBuilds.byIds[id]
    )
  );
  const newBuildNameRef = useRef(null);

  const [isSaveBuildModalVisible, setIsSaveBuildModalVisible] = useState(false);

  const handleOnCloseSaveBuildModal = () => {
    setIsSaveBuildModalVisible(false);
  };

  const handleOnOpenSaveBuildModal = () => {
    if (
      teamMembers.slot1 &&
      teamMembers.slot2 &&
      teamMembers.slot3 &&
      (syncPairNamesAndIds['en'][teamMembers.slot1].trainerName ===
        syncPairNamesAndIds['en'][teamMembers.slot2].trainerName ||
        syncPairNamesAndIds['en'][teamMembers.slot1].trainerName ===
          syncPairNamesAndIds['en'][teamMembers.slot3].trainerName ||
        syncPairNamesAndIds['en'][teamMembers.slot2].trainerName ===
          syncPairNamesAndIds['en'][teamMembers.slot3].trainerName)
    ) {
      return alert(
        'A Trainer with the same name is already on this team. Please choose another.'
      );
    } else {
      setIsSaveBuildModalVisible(true);
    }
  };

  // handleOnClickSaveBuild = () => {
  //   setIsSaveBuildModalVisible(true);
  // };

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
        {UI['Save Build'][language]}
      </Button>

      <Dialog
        open={isSaveBuildModalVisible}
        onClose={handleOnCloseSaveBuildModal}
      >
        <DialogTitle>{UI['Save Build'][language]}</DialogTitle>
        <DialogContent>
          <TextField
            // className={classes.buildNameField}
            label={UI['Build name'][language]}
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
