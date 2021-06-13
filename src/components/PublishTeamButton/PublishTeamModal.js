import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTeam, setTeamSyncLevels } from '../../actions/actionCreators';
import TextField from '@material-ui/core/TextField';
import Alert from '../Alert';
import './index.css';
import LuckySkillDropdown from '../LuckySkillDropdown';
import UI from '../../utils/translations';
import { tags } from '../../utils/constants';
import { getSyncPairNameAndIdByTrainerId } from '../../utils/functions';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import EditSyncLevelDropdown from './EditSyncLevelDropdown';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

export default function PublishTeamModal() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  const darkMode = useSelector((state) => state.darkMode.mode);

  const teamMembers = useSelector((state) => state.grid.teamMembers);
  const teamRemainingEnergy = useSelector(
    (state) => state.grid.teamRemainingEnergy
  );
  const teamOrbSpent = useSelector((state) => state.grid.teamOrbSpent);
  const teamSelectedCellsById = useSelector(
    (state) => state.grid.teamSelectedCellsById
  );
  const teamUrl = useSelector((state) => state.grid.teamUrl);
  const teamSyncLevels = useSelector((state) => state.grid.teamSyncLevels);

  const [syncPair1LuckySkill1Id, setSyncPair1LuckySkill1Id] = useState('0');
  const [syncPair2LuckySkill1Id, setSyncPair2LuckySkill1Id] = useState('0');
  const [syncPair3LuckySkill1Id, setSyncPair3LuckySkill1Id] = useState('0');
  const [newTeamName, setNewTeamName] = useState('');
  const [newTeamDesc, setNewTeamDesc] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [isSyncPair1EX, setIsSyncPair1EX] = useState(false);
  const [isSyncPair2EX, setIsSyncPair2EX] = useState(false);
  const [isSyncPair3EX, setIsSyncPair3EX] = useState(false);

  const handleChangeSlot1SyncLevel = (syncLevel) => {
    dispatch(
      setTeamSyncLevels({ slot: 'slot1', syncLevel: syncLevel.toString() })
    );
  };
  const handleChangeSlot2SyncLevel = (syncLevel) => {
    dispatch(
      setTeamSyncLevels({ slot: 'slot2', syncLevel: syncLevel.toString() })
    );
  };
  const handleChangeSlot3SyncLevel = (syncLevel) => {
    dispatch(
      setTeamSyncLevels({ slot: 'slot3', syncLevel: syncLevel.toString() })
    );
  };

  let syncPairs = {
    slot1: {
      trainerId: teamMembers.slot1,
      syncLevel: teamMembers.slot1 ? Number(teamSyncLevels.slot1) : 0,
      syncPairName: getSyncPairNameAndIdByTrainerId(teamMembers.slot1)
        ? getSyncPairNameAndIdByTrainerId(teamMembers.slot1)
            .syncPairNameByLanguage['en']
        : '',
      luckySkillIds: [syncPair1LuckySkill1Id],
      selectedCellsById: teamSelectedCellsById.slot1,
      remainingEnergy: teamRemainingEnergy.slot1,
      orbSpent: teamOrbSpent.slot1,
      isEX: isSyncPair1EX,
    },
    slot2: {
      trainerId: teamMembers.slot2,
      syncLevel: teamMembers.slot2 ? Number(teamSyncLevels.slot2) : 0,
      syncPairName: getSyncPairNameAndIdByTrainerId(teamMembers.slot2)
        ? getSyncPairNameAndIdByTrainerId(teamMembers.slot2)
            .syncPairNameByLanguage['en']
        : '',
      luckySkillIds: [syncPair2LuckySkill1Id],
      selectedCellsById: teamSelectedCellsById.slot2,
      remainingEnergy: teamRemainingEnergy.slot2,
      orbSpent: teamOrbSpent.slot2,
      isEX: isSyncPair2EX,
    },
    slot3: {
      trainerId: teamMembers.slot3,
      syncLevel: teamMembers.slot3 ? Number(teamSyncLevels.slot3) : 0,
      syncPairName: getSyncPairNameAndIdByTrainerId(teamMembers.slot3)
        ? getSyncPairNameAndIdByTrainerId(teamMembers.slot3)
            .syncPairNameByLanguage['en']
        : '',
      luckySkillIds: [syncPair3LuckySkill1Id],
      selectedCellsById: teamSelectedCellsById.slot3,
      remainingEnergy: teamRemainingEnergy.slot3,
      orbSpent: teamOrbSpent.slot3,
      isEX: isSyncPair3EX,
    },
  };

  let teamTrainerIds = [
    teamMembers.slot1,
    teamMembers.slot2,
    teamMembers.slot3,
    '',
  ];

  const handleChangeTeamName = (event) => {
    setNewTeamName(event.target.value);
  };
  const handleChangeTeamDesc = (event) => {
    setNewTeamDesc(event.target.value);
  };

  const handleAutoCompleteChange = (event, value) => {
    setSelectedTags(value);
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

  const handleOnPublishTeam = () => {
    // if (Object.keys(grid.selectedCellsById).length === 0) {
    //   alert('You cannot publish an empty grid');
    //   return;
    // }
    if (
      arrayOfTeamMemberTrainerNameIds.length !==
      new Set(arrayOfTeamMemberTrainerNameIds).size // if contains duplicates
    ) {
      return alert(
        'A Trainer with the same name is already on this team. Please choose another.'
      );
    }

    if (!newTeamName) {
      alert('Name is required');
      return;
    }
    if (
      teamRemainingEnergy.slot1 < 0 ||
      teamRemainingEnergy.slot2 < 0 ||
      teamRemainingEnergy.slot3 < 0
    ) {
      alert('You cannot publish a grid that exceeds the energy limit.');
      return;
    }

    let data = {
      teamName: newTeamName,
      description: newTeamDesc,
      syncPairs: syncPairs,
      trainerIds: teamTrainerIds,
      teamUrl: teamUrl,
      tags: selectedTags,
      // add common theme skills
    };

    dispatch(addTeam(data));
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id="publishTeamModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
        style={{ zIndex: 1100 }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div
            className={`modal-content ${
              darkMode ? 'text-white bg-dark' : null
            }`}
          >
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">
                {/* {UI['Publish current team'][language]} */}
                {UI['Publish'][language]}
              </h4>
            </div>
            <div className="modal-body mx-3">
              {/* <div className="alert alert-info" role="alert">
                This function is temporarily disabled to allow for a feature
                update. Please check back later.
              </div> */}

              <div className="form-group">
                <input
                  type="text"
                  className={`form-control ${
                    darkMode ? 'text-white bg-dark' : null
                  }`}
                  id="name"
                  placeholder={UI['Team name'][language]}
                  // placeholder="Team name"
                  key="team-name"
                  onChange={handleChangeTeamName}
                  value={newTeamName}
                />
              </div>

              <div className="form-group">
                <textarea
                  type="text"
                  className={`form-control ${
                    darkMode ? 'text-white bg-dark' : null
                  }`}
                  id="desc"
                  // placeholder={UI['Team description'][language]}
                  placeholder={UI['Description'][language]}
                  key="team-desc"
                  onChange={handleChangeTeamDesc}
                  value={newTeamDesc}
                />
              </div>

              <div className="form-group">
                <Autocomplete
                  size="small"
                  multiple
                  id="tags-standard"
                  options={tags}
                  getOptionLabel={(option) =>
                    UI[option] ? UI[option][language] : option
                  }
                  onChange={handleAutoCompleteChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label={UI['Tags'][language]}
                    />
                  )}
                />
              </div>

              {getSyncPairNameAndIdByTrainerId(teamMembers.slot1) ? (
                <>
                  <Divider />
                  <Typography
                    // className={classes.dividerFullWidth}
                    color="textSecondary"
                    display="block"
                    variant="caption"
                  >
                    {
                      getSyncPairNameAndIdByTrainerId(teamMembers.slot1)
                        .syncPairNameByLanguage[language]
                    }
                  </Typography>

                  <div className="form-group" style={{ marginTop: 10 }}>
                    <LuckySkillDropdown
                      luckySkillId={syncPair1LuckySkill1Id}
                      setLuckySkillId={setSyncPair1LuckySkill1Id}
                    />
                    <EditSyncLevelDropdown
                      syncLv={Number(teamSyncLevels.slot1)}
                      handleChange={handleChangeSlot1SyncLevel}
                    />
                    <FormControlLabel
                      value="EX"
                      control={<Checkbox color="primary" />}
                      label="EX"
                      labelPlacement="end"
                      style={{ marginLeft: 10, marginTop: 7 }}
                      onChange={(e) => {
                        setIsSyncPair1EX(!isSyncPair1EX);
                      }}
                    />
                  </div>
                </>
              ) : (
                ''
              )}
              {getSyncPairNameAndIdByTrainerId(teamMembers.slot2) ? (
                <>
                  <Divider />
                  <Typography
                    // className={classes.dividerFullWidth}
                    color="textSecondary"
                    display="block"
                    variant="caption"
                  >
                    {
                      getSyncPairNameAndIdByTrainerId(teamMembers.slot2)
                        .syncPairNameByLanguage[language]
                    }
                  </Typography>
                  <div className="form-group" style={{ marginTop: 10 }}>
                    <LuckySkillDropdown
                      luckySkillId={syncPair2LuckySkill1Id}
                      setLuckySkillId={setSyncPair2LuckySkill1Id}
                    />
                    <EditSyncLevelDropdown
                      syncLv={Number(teamSyncLevels.slot2)}
                      handleChange={handleChangeSlot2SyncLevel}
                    />
                    <FormControlLabel
                      value="EX"
                      control={<Checkbox color="primary" />}
                      label="EX"
                      labelPlacement="end"
                      style={{ marginLeft: 10, marginTop: 7 }}
                      onChange={(e) => {
                        setIsSyncPair2EX(!isSyncPair2EX);
                      }}
                    />
                  </div>
                </>
              ) : (
                ''
              )}
              {getSyncPairNameAndIdByTrainerId(teamMembers.slot3) ? (
                <>
                  <Divider />
                  <Typography
                    // className={classes.dividerFullWidth}
                    color="textSecondary"
                    display="block"
                    variant="caption"
                  >
                    {
                      getSyncPairNameAndIdByTrainerId(teamMembers.slot3)
                        .syncPairNameByLanguage[language]
                    }
                  </Typography>
                  <div className="form-group" style={{ marginTop: 10 }}>
                    <LuckySkillDropdown
                      luckySkillId={syncPair3LuckySkill1Id}
                      setLuckySkillId={setSyncPair3LuckySkill1Id}
                    />
                    <EditSyncLevelDropdown
                      syncLv={Number(teamSyncLevels.slot3)}
                      handleChange={handleChangeSlot3SyncLevel}
                    />
                    <FormControlLabel
                      value="EX"
                      control={<Checkbox color="primary" />}
                      label="EX"
                      labelPlacement="end"
                      style={{ marginLeft: 10, marginTop: 7 }}
                      onChange={(e) => {
                        setIsSyncPair3EX(!isSyncPair3EX);
                      }}
                    />
                  </div>
                </>
              ) : (
                ''
              )}
            </div>

            <div className="modal-footer d-flex justify-content-center">
              <button
                className={`btn btn-default ${darkMode ? 'text-white' : null}`}
                onClick={handleOnPublishTeam}
              >
                {UI['Publish'][language]}
              </button>
              <button
                className={`btn btn-default ${darkMode ? 'text-white' : null}`}
                data-dismiss="modal"
              >
                {UI['Close'][language]}
              </button>
            </div>
            <Alert />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
