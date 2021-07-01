import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTeam } from '../../../actions/actionCreators';
import TextField from '@material-ui/core/TextField';
import Alert from '../../Alert';
import LuckySkillDropdown from '../../LuckySkillDropdown';
import UI from '../../../utils/translations';
import { tags } from '../../../utils/constants';
import { getSyncPairNameAndIdByTrainerId } from '../../../utils/functions';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import EditSyncLevelDropdown from '../../PublishTeamButton/EditSyncLevelDropdown';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

export default function EditTeamModal(props) {
  const { team } = props;
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  const darkMode = useSelector((state) => state.darkMode.mode);

  const [syncPair1SyncLevel, setSyncPair1SyncLevel] = useState(
    team.syncPairs.slot1.syncLevel
  );
  const [syncPair2SyncLevel, setSyncPair2SyncLevel] = useState(
    team.syncPairs.slot2.syncLevel
  );
  const [syncPair3SyncLevel, setSyncPair3SyncLevel] = useState(
    team.syncPairs.slot3.syncLevel
  );

  const [syncPair1LuckySkill1Id, setSyncPair1LuckySkill1Id] = useState(
    team.syncPairs.slot1.luckySkillIds[0]
  );
  const [syncPair2LuckySkill1Id, setSyncPair2LuckySkill1Id] = useState(
    team.syncPairs.slot2.luckySkillIds[0]
  );
  const [syncPair3LuckySkill1Id, setSyncPair3LuckySkill1Id] = useState(
    team.syncPairs.slot3.luckySkillIds[0]
  );

  const [newTeamDesc, setNewTeamDesc] = useState(team.description);
  const [selectedTags, setSelectedTags] = useState(team.tags);
  const [newDemoUrl, setNewDemoUrl] = useState(team.demoUrl);
  const [agreedToRules, setAgreedToRules] = useState(
    team.demoUrl ? true : false
  );
  const [isSyncPair1EX, setIsSyncPair1EX] = useState(team.syncPairs.slot1.isEX);
  const [isSyncPair2EX, setIsSyncPair2EX] = useState(team.syncPairs.slot2.isEX);
  const [isSyncPair3EX, setIsSyncPair3EX] = useState(team.syncPairs.slot3.isEX);

  const handleChangeSlot1SyncLevel = (syncLevel) => {
    setSyncPair1SyncLevel(syncLevel.toString());
  };
  const handleChangeSlot2SyncLevel = (syncLevel) => {
    setSyncPair2SyncLevel(syncLevel.toString());
  };
  const handleChangeSlot3SyncLevel = (syncLevel) => {
    setSyncPair3SyncLevel(syncLevel.toString());
  };
  const handleChangeTeamDesc = (event) => {
    setNewTeamDesc(event.target.value);
  };
  const handleAutoCompleteChange = (event, value) => {
    setSelectedTags(value);
  };
  const handleChangeDemoUrl = (event) => {
    setNewDemoUrl(event.target.value);
  };
  const handleAgreeToRules = (event) => {
    setAgreedToRules(true);
  };
  const handleDisagreeToRules = (event) => {
    setAgreedToRules(false);
    setNewDemoUrl('');
  };

  const onSubmit = () => {
    if (newDemoUrl && !agreedToRules) {
      return alert('You must agree to the rules');
    }

    let updatedTeamData = {
      description: newTeamDesc,
      demoUrl: newDemoUrl,
      tags: selectedTags,
      syncPairs: {
        slot1: {
          luckySkillIds: [syncPair1LuckySkill1Id],
          syncLevel: syncPair1SyncLevel,
          isEX: isSyncPair1EX,
        },
        slot2: {
          luckySkillIds: [syncPair2LuckySkill1Id],
          syncLevel: syncPair2SyncLevel,
          isEX: isSyncPair2EX,
        },
        slot3: {
          luckySkillIds: [syncPair3LuckySkill1Id],
          syncLevel: syncPair3SyncLevel,
          isEX: isSyncPair3EX,
        },
      },
    };
    dispatch(editTeam(team._id, updatedTeamData));
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id={`editTeamModal${team._id}`}
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
              <h4 className="modal-title w-100 font-weight-bold">Edit</h4>
            </div>
            <div className="modal-body mx-3">
              {/* <div className="alert alert-info" role="alert">
                This function is temporarily disabled to allow for a feature
                update. Please check back later.
              </div> */}

              <div className="form-group">
                <textarea
                  type="text"
                  className={`form-control ${
                    darkMode ? 'text-white bg-dark' : null
                  }`}
                  id="desc"
                  // placeholder={UI['Team description'][language]}
                  placeholder="Team description"
                  key="team-desc"
                  onChange={handleChangeTeamDesc}
                  value={newTeamDesc}
                />
              </div>

              <div className="form-group">
                <Tooltip
                  title="Supports YouTube,
                    Twitch,
                    Facebook,
                    SoundCloud,
                    Streamable,
                    Vidme,
                    Vimeo,
                    Wistia,
                    DailyMotion,
                    Vidyard,
                    and Kaltura"
                  placement="bottom-start"
                >
                  <input
                    type="text"
                    className={`form-control ${
                      darkMode ? 'text-white bg-dark' : null
                    }`}
                    id="demo-url"
                    // placeholder={UI['Team name'][language]}
                    placeholder="Demo Url eg. https://youtu.be/ciKIWXVhS0M"
                    key="demo-url"
                    onChange={handleChangeDemoUrl}
                    value={newDemoUrl}
                  />
                </Tooltip>
              </div>

              {newDemoUrl && !agreedToRules ? (
                <div
                  className="alert alert-info"
                  role="alert"
                  style={{ lineHeight: 1.4 }}
                >
                  {UI['Please read'][language]}
                  <ol style={{ marginLeft: 17 }}>
                    <li>{UI['Rule1'][language]}</li>
                    <li>{UI['Rule2'][language]}</li>
                    <li>{UI['Rule3'][language]}</li>
                  </ol>
                  <button
                    className={`btn btn-sm btn-primary mr-3`}
                    onClick={handleAgreeToRules}
                  >
                    {UI['Agree'][language]}
                  </button>
                  <button
                    className={`btn btn-sm btn-primary`}
                    onClick={handleDisagreeToRules}
                  >
                    {UI['Disagree'][language]}
                  </button>
                </div>
              ) : null}

              <div className="form-group">
                <Autocomplete
                  size="small"
                  multiple
                  id={`tags-standard-${team._id}`}
                  options={tags}
                  getOptionLabel={(option) =>
                    UI[option] ? UI[option][language] : option
                  }
                  onChange={handleAutoCompleteChange}
                  value={selectedTags}
                  renderInput={(params) => (
                    <TextField {...params} variant="outlined" label="Tags" />
                  )}
                />
              </div>

              {getSyncPairNameAndIdByTrainerId(
                team.syncPairs.slot1.trainerId
              ) ? (
                <>
                  <Divider />
                  <Typography
                    // className={classes.dividerFullWidth}
                    color="textSecondary"
                    display="block"
                    variant="caption"
                  >
                    {
                      getSyncPairNameAndIdByTrainerId(
                        team.syncPairs.slot1.trainerId
                      ).syncPairNameByLanguage[language]
                    }
                  </Typography>
                  <div className="form-group" style={{ marginTop: 10 }}>
                    <LuckySkillDropdown
                      luckySkillId={syncPair1LuckySkill1Id}
                      setLuckySkillId={setSyncPair1LuckySkill1Id}
                    />
                    <EditSyncLevelDropdown
                      syncLv={Number(syncPair1SyncLevel)}
                      handleChange={handleChangeSlot1SyncLevel}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox color="primary" checked={isSyncPair1EX} />
                      }
                      label="EX"
                      labelPlacement="end"
                      style={{ marginLeft: 10 }}
                      onChange={(e) => {
                        setIsSyncPair1EX(!isSyncPair1EX);
                      }}
                    />
                  </div>
                </>
              ) : (
                ''
              )}
              {getSyncPairNameAndIdByTrainerId(
                team.syncPairs.slot2.trainerId
              ) ? (
                <>
                  <Divider />
                  <Typography
                    // className={classes.dividerFullWidth}
                    color="textSecondary"
                    display="block"
                    variant="caption"
                  >
                    {
                      getSyncPairNameAndIdByTrainerId(
                        team.syncPairs.slot2.trainerId
                      ).syncPairNameByLanguage[language]
                    }
                  </Typography>
                  <div className="form-group" style={{ marginTop: 10 }}>
                    <LuckySkillDropdown
                      luckySkillId={syncPair2LuckySkill1Id}
                      setLuckySkillId={setSyncPair2LuckySkill1Id}
                    />
                    <EditSyncLevelDropdown
                      syncLv={Number(syncPair2SyncLevel)}
                      handleChange={handleChangeSlot2SyncLevel}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox color="primary" checked={isSyncPair2EX} />
                      }
                      label="EX"
                      labelPlacement="end"
                      style={{ marginLeft: 10 }}
                      onChange={(e) => {
                        setIsSyncPair2EX(!isSyncPair2EX);
                      }}
                    />
                  </div>
                </>
              ) : (
                ''
              )}
              {getSyncPairNameAndIdByTrainerId(
                team.syncPairs.slot3.trainerId
              ) ? (
                <>
                  <Divider />
                  <Typography
                    // className={classes.dividerFullWidth}
                    color="textSecondary"
                    display="block"
                    variant="caption"
                  >
                    {
                      getSyncPairNameAndIdByTrainerId(
                        team.syncPairs.slot3.trainerId
                      ).syncPairNameByLanguage[language]
                    }
                  </Typography>
                  <div className="form-group" style={{ marginTop: 10 }}>
                    <LuckySkillDropdown
                      luckySkillId={syncPair3LuckySkill1Id}
                      setLuckySkillId={setSyncPair3LuckySkill1Id}
                    />
                    <EditSyncLevelDropdown
                      syncLv={Number(syncPair3SyncLevel)}
                      handleChange={handleChangeSlot3SyncLevel}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox color="primary" checked={isSyncPair3EX} />
                      }
                      label="EX"
                      labelPlacement="end"
                      style={{ marginLeft: 10 }}
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
                onClick={onSubmit}
              >
                {/* {UI['Finish'][language]} */}
                Finish
              </button>
              <button
                className={`btn btn-default ${darkMode ? 'text-white' : null}`}
                data-dismiss="modal"
                onClick={handleDisagreeToRules}
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
