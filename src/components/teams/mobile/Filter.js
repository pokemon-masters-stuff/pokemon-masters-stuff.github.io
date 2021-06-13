import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  changeTeamSyncPairFilter,
  changeTeamTagFilter,
} from '../../../actions/actionCreators';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import syncPairNamesAndIds from '../../../data/syncPairNamesAndIds.json';
import TextField from '@material-ui/core/TextField';
import { tags } from '../../../utils/constants';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import UI from '../../../utils/translations';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  bottomNav: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 2000,
  },
});

const Filter = (props) => {
  const syncPairFilter = useSelector((state) => state.team.syncPairFilter);
  const teamTagFilter = useSelector((state) => state.team.teamTagFilter);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  const [isFilterModalVisible, setIsFilterVisible] = useState(false);
  const [teamSyncPairFilter, setTeamSyncPairFilter] = useState(syncPairFilter);
  const [tagFilter, setTagFilter] = useState(teamTagFilter);

  const handleOnOpenFilterModal = () => {
    setIsFilterVisible(true);
  };
  const handleOnCloseFilterModal = () => {
    setTagFilter(teamTagFilter);
    setIsFilterVisible(false);
  };

  let syncPairs = Object.values(syncPairNamesAndIds);

  const handleChangeSyncPairFilter = (value) => {
    if (value) {
      setTeamSyncPairFilter(value.trainerId);
    } else {
      setTeamSyncPairFilter('None');
    }
  };

  const handleChangeTagFilter = (value) => {
    setTagFilter(value);
  };

  const handleOnSubmit = () => {
    if (teamSyncPairFilter) {
      dispatch(changeTeamSyncPairFilter(teamSyncPairFilter));
    } else {
      dispatch(changeTeamSyncPairFilter('None'));
    }
    dispatch(changeTeamTagFilter(tagFilter));
  };

  return (
    <>
      <Button
        variant="outlined"
        style={{ padding: 6.5 }}
        onClick={handleOnOpenFilterModal}
      >
        {/* {UI['Moves & Skills'][language]} */}
        <FilterListIcon />
        Filters
      </Button>

      <Dialog open={isFilterModalVisible} onClose={handleOnCloseFilterModal}>
        <DialogTitle>Filters</DialogTitle>
        <DialogContent dividers style={{ width: '100vw' }}>
          <div style={{ width: '65vw' }}>
            <Autocomplete
              id={`tag-filter`}
              size="small"
              multiple
              value={tagFilter}
              options={tags}
              getOptionLabel={(option) =>
                UI[option] ? UI[option][language] : option
              }
              autoComplete
              includeInputInList
              onChange={(event, value) => handleChangeTagFilter(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  margin="normal"
                  placeholder={UI['Tags'][language]}
                />
              )}
            />
          </div>
          <br />
          <div style={{ width: '65vw' }}>
            <Autocomplete
              id={`team-filter`}
              size="small"
              value={
                syncPairNamesAndIds[syncPairFilter]
                  ? syncPairNamesAndIds[syncPairFilter]
                  : ''
              }
              options={syncPairs.sort((a, b) => {
                let x = a['syncPairNameByLanguage'][language];
                let y = b['syncPairNameByLanguage'][language];
                return x < y ? -1 : x > y ? 1 : 0;
              })}
              getOptionLabel={(option) =>
                option['syncPairNameByLanguage']
                  ? option.isEggmon
                    ? `${option['syncPairNameByLanguage'][language]} (${option['roleTypeNameByLanguage'][language]})`
                    : option['syncPairNameByLanguage'][language]
                  : ''
              }
              autoComplete
              includeInputInList
              onChange={(event, value) => handleChangeSyncPairFilter(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  margin="normal"
                  placeholder={UI['Sync Pair'][language]}
                />
              )}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnCloseFilterModal}>
            {UI['Close'][language]}
          </Button>
          <Button onClick={handleOnSubmit}>{UI['Submit'][language]}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default withRouter(Filter);
