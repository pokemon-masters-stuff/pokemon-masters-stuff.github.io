import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SyncGridContainer from './SyncGridContainer';
import syncPairNamesAndIds from '../../../data/syncPairNamesAndIds.json';
import {
  setTeam,
  updateTeamUrl,
  setTeamSyncLevels,
  loadTeamGridFromUrl,
  resetTeam,
} from '../../../actions/actionCreators';
import { getQueryStringValue } from '../../../queryString';
import SaveTeamButton from '../common/SaveTeamButton';
import LoadTeamDropdown from '../common/LoadTeamDropdown';
import ResetTeamButton from '../common/ResetTeamButton';
import { allSyncGrids } from '../../../data/exportGridsAsObject';
import ShareTeamButton from '../common/ShareTeamButton';
import SyncPairCard from '../common/SyncPairCard';
import { lookupTrainerIdBySyncPairNameFromUrl } from '../../../data/lookupTables';
import PublishTeamButton from '../../PublishTeamButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 70,
  },
  textField: {
    marginTop: 5,
  },
  control: {
    padding: theme.spacing(3),
  },
}));

function TeamBuilder() {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  const teamMembers = useSelector((state) => state.grid.teamMembers);

  const onChangeHandler = (e, newValue, slot) => {
    let syncPairTrainerId = newValue || '';
    dispatch(setTeam({ slot: slot, syncPair: syncPairTrainerId }));
    dispatch(updateTeamUrl());
  };

  let teamMember1Data = syncPairNamesAndIds[teamMembers.slot1] || null;
  let teamMember2Data = syncPairNamesAndIds[teamMembers.slot2] || null;
  let teamMember3Data = syncPairNamesAndIds[teamMembers.slot3] || null;

  const loadTeamFromUrl = () => {
    if (
      getQueryStringValue('id1', location.search) ||
      getQueryStringValue('id2', location.search) ||
      getQueryStringValue('id3', location.search) ||
      getQueryStringValue('sp1', location.search) ||
      getQueryStringValue('sp2', location.search) ||
      getQueryStringValue('sp3', location.search)
    ) {
      dispatch(resetTeam());

      let indexArray = [1, 2, 3];
      indexArray.forEach((index) => {
        let syncPairTrainerId;
        if (
          getQueryStringValue(`id${index}`, location.search) ||
          getQueryStringValue(`sp${index}`, location.search)
        ) {
          syncPairTrainerId = getQueryStringValue(`id${index}`, location.search)
            ? getQueryStringValue(`id${index}`, location.search)
            : lookupTrainerIdBySyncPairNameFromUrl[
                getQueryStringValue(`sp${index}`, location.search).toLowerCase()
              ];

          if (syncPairNamesAndIds[syncPairTrainerId]) {
            dispatch(
              setTeam({ slot: `slot${index}`, syncPair: syncPairTrainerId })
            );
            let syncLevel;
            if (getQueryStringValue(`s${index}`, location.search)) {
              syncLevel = getQueryStringValue(`s${index}`, location.search);
              dispatch(
                setTeamSyncLevels({
                  slot: `slot${index}`,
                  syncLevel: syncLevel,
                })
              );
            } else {
              dispatch(
                setTeamSyncLevels({
                  slot: `slot${index}`,
                  syncLevel: '5',
                })
              );
            }

            if (getQueryStringValue(`g${index}`, location.search)) {
              let remainingEnergy = Number(
                getQueryStringValue(`e${index}`, location.search)
              );
              let orbSpent = Number(
                getQueryStringValue(`o${index}`, location.search)
              );
              let cellData = {};
              let selectedCellByIdFromUrl = {};

              getQueryStringValue(`g${index}`, location.search).map((id) => {
                if (
                  allSyncGrids[language][
                    `trainerId_${syncPairTrainerId}_GridData${language.toUpperCase()}`
                  ][Number(id)]
                ) {
                  cellData =
                    allSyncGrids[language][
                      `trainerId_${syncPairTrainerId}_GridData${language.toUpperCase()}`
                    ][Number(id)];

                  selectedCellByIdFromUrl = {
                    cellId: cellData.cellId,
                    name: cellData.move.name,
                    description: cellData.move.description,
                    energy: cellData.move.energyCost,
                    moveId: cellData.ability.moveId,
                    value: cellData.ability.value,
                    type: cellData.ability.type,
                  };

                  return dispatch(
                    loadTeamGridFromUrl({
                      slot: `slot${index}`,
                      selectedCellByIdFromUrl,
                      remainingEnergy,
                      orbSpent,
                    })
                  );
                } else if (
                  allSyncGrids[language][
                    `trainerId_${syncPairTrainerId}_GridData${language.toUpperCase()}`
                  ][Number(id) - 42]
                ) {
                  cellData =
                    allSyncGrids[language][
                      `trainerId_${syncPairTrainerId}_GridData${language.toUpperCase()}`
                    ][Number(id) - 42];

                  selectedCellByIdFromUrl = {
                    cellId: cellData.cellId,
                    name: cellData.move.name,
                    description: cellData.move.description,
                    energy: cellData.move.energyCost,
                    moveId: cellData.ability.moveId,
                    value: cellData.ability.value,
                    type: cellData.ability.type,
                  };

                  return dispatch(
                    loadTeamGridFromUrl({
                      slot: `slot${index}`,
                      selectedCellByIdFromUrl,
                      remainingEnergy,
                      orbSpent,
                    })
                  );
                } else {
                  alert('Invalid URL. One or more grids cannot be loaded');
                }
              });
            }
          } else {
            alert('Invalid URL. One or more sync pairs cannot be loaded');
          }
        }
      });
    }
  };

  useEffect(() => {
    loadTeamFromUrl();
    dispatch(updateTeamUrl());
  }, []);

  return (
    <Fragment>
      <Grid container className={classes.root} spacing={3}>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ marginTop: 5 }}
        >
          <div style={{ marginTop: 10, paddingBottom: 10 }}>
            <SaveTeamButton />
          </div>
          <LoadTeamDropdown />
          <ShareTeamButton />
          <div style={{ marginLeft: 8 }}>
            <ResetTeamButton />
          </div>
          <div style={{ marginLeft: 8 }}>
            <PublishTeamButton />
          </div>
        </Grid>
        <Grid container justify="center" spacing={0}>
          {[teamMember1Data, teamMember2Data, teamMember3Data].map(
            (teamMemberData, index) => (
              <SyncPairCard
                key={index}
                index={index}
                teamMemberData={teamMemberData}
                handleOnChange={onChangeHandler}
              />
            )
          )}
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            {[teamMember1Data, teamMember2Data, teamMember3Data].map(
              (teamMemberData, index) =>
                teamMemberData ? (
                  teamMemberData.isGrided ? (
                    <Grid item key={index}>
                      <SyncGridContainer
                        trainerId={teamMemberData['trainerId']}
                        slot={`slot${index + 1}`}
                      />
                    </Grid>
                  ) : null
                ) : null
            )}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default TeamBuilder;
