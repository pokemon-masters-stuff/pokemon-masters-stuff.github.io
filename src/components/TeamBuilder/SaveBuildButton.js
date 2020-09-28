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

const SaveBuildButton = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  // const darkMode = useSelector((state) => state.darkMode.mode);
  const teamMembers = useSelector((state) => state.grid.teamMembers);
  const teamSavedBuilds = useSelector((state) =>
    state.grid.teamSavedBuilds.allIds.map(
      (id) => state.grid.teamSavedBuilds.byIds[id]
    )
  );
  const newBuildNameRef = useRef(null);

  // handleOnSaveBuild = () => {
  //   let userConfirmation = true;
  //   if (this.newBuildNameRef.current.value) {
  //     // If already has a save with the same name, delete old save
  //     for (let build in this.props.savedBuilds) {
  //       if (
  //         this.props.savedBuilds[build].name ===
  //           this.newBuildNameRef.current.value &&
  //         this.props.savedBuilds[build].pokemon ===
  //           this.props.pokemon.selectedPokemon
  //       ) {
  //         userConfirmation = window.confirm(
  //           'There is a save with the same name. Do you wish to overwrite it?'
  //         );
  //         userConfirmation &&
  //           this.props.deleteSelectedBuild({
  //             buildId: this.props.savedBuilds[build].id,
  //           });
  //       }
  //     }
  //     userConfirmation &&
  //       this.props.saveCurrentBuild({
  //         selectedPokemon: this.props.pokemon.selectedPokemon,
  //         buildName: this.newBuildNameRef.current.value,
  //       });
  //     this.handleOnCloseSaveBuildModal();
  //   } else {
  //     alert('Please enter a name');
  //   }
  // };
  const [isSaveBuildModalVisible, setIsSaveBuildModalVisible] = useState(false);

  const handleOnCloseSaveBuildModal = () => {
    setIsSaveBuildModalVisible(false);
  };

  const handleOnOpenSaveBuildModal = () => {
    setIsSaveBuildModalVisible(true);
  };

  // handleOnClickSaveBuild = () => {
  //   setIsSaveBuildModalVisible(true);
  // };

  const handleOnSaveBuild = () => {
    let userConfirmation = true;
    if (newBuildNameRef.current.value) {
      // If already have a save with the same name, delete old save
      for (let build in teamSavedBuilds) {
        if (
          teamSavedBuilds[build].name === newBuildNameRef.current.value &&
          teamSavedBuilds[build].pokemon === teamMembers
        ) {
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
