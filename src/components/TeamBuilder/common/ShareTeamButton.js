import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import UI from '../../../utils/translations';
import {
  // getPokemonDataByTrainerId,
  getSyncPairNameAndIdByTrainerId,
} from '../../../utils/functions';

const ShareTeamButton = () => {
  const language = useSelector((state) => state.language.currentLanguage);
  const darkMode = useSelector((state) => state.darkMode.mode);
  const url = useSelector((state) => state.grid.teamUrl);
  const teamMembers = useSelector((state) => state.grid.teamMembers);

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
      new Set(arrayOfTeamMemberTrainerNameIds).size // if contains duplicates
    ) {
      return alert(
        'A Trainer with the same name is already on this team. Please choose another.'
      );
    }
  };

  return (
    <Fragment>
      <Button
        variant="outlined"
        data-toggle="modal"
        data-target="#shareTeamModal"
        onClick={handleOnOpenShareTeamModal}
      >
        {UI['Share'][language]}
      </Button>
      {arrayOfTeamMemberTrainerNameIds.length !==
      new Set(arrayOfTeamMemberTrainerNameIds).size ? null : (
        <div
          className="modal fade"
          id="shareTeamModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div
              className={`modal-content ${
                darkMode ? 'text-white bg-dark' : null
              }`}
            >
              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">
                  {UI['Share this link'][language]}
                </h4>
              </div>
              <div className="modal-body mx-3">
                <div className="form-group">
                  <input
                    type="text"
                    className={`form-control ${
                      darkMode ? 'text-white bg-dark' : null
                    }`}
                    value={url}
                    readOnly
                  />
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <CopyToClipboard text={url}>
                  <button
                    className={`btn btn-default ${
                      darkMode ? 'text-white' : null
                    }`}
                    data-dismiss="modal"
                  >
                    {UI['Copy to Clipboard'][language]}
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ShareTeamButton;
