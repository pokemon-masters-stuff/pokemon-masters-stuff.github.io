import React, { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import TeamMemberContainer from './TeamMemberContainer';
import syncPairNamesAndIds from '../../data/syncPairNamesAndIds.json';
import SyncPairNameField from './SyncPairNameField';
import {
  setTeam,
  updateTeamUrl,
  setTeamSyncLevels,
  loadTeamGridFromUrl,
  resetTeam,
} from '../../actions/actionCreators';
import { removeHyphens } from '../../utils/functions';
import { getQueryStringValue } from '../../queryString';
import SaveBuildButton from './SaveBuildButton';
import LoadTeamBuildDropdown from './LoadTeamBuildDropdown';
import ResetTeamButton from './ResetTeamButton';
import { allSyncGrids } from '../../utils/constants';
import ShareTeamButton from './ShareTeamButton';
import ShareTeamModal from './ShareTeamModal';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 70,
  },
  paper: {
    height: 800,
    width: 500,
  },
  textField: {
    marginTop: 5,
  },
  card: {
    margin: 1,
    marginTop: 15,
    width: 150,
    position: 'relative',
    display: 'inline-block',
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

  const slot1OnChangeHandler = (e, newValue) => {
    let syncPair1EnglishName = newValue
      ? syncPairNamesAndIds[language][newValue].syncPairEnglishName
      : '';
    // console.log('syncPair1EnglishName', syncPair1EnglishName);
    dispatch(setTeam({ slot: 'slot1', syncPair: syncPair1EnglishName }));
    dispatch(updateTeamUrl());
  };
  const slot2OnChangeHandler = (e, newValue) => {
    let syncPair2EnglishName = newValue
      ? syncPairNamesAndIds[language][newValue].syncPairEnglishName
      : '';
    dispatch(setTeam({ slot: 'slot2', syncPair: syncPair2EnglishName }));
    dispatch(updateTeamUrl());
  };
  const slot3OnChangeHandler = (e, newValue) => {
    let syncPair3EnglishName = newValue
      ? syncPairNamesAndIds[language][newValue].syncPairEnglishName
      : '';
    dispatch(setTeam({ slot: 'slot3', syncPair: syncPair3EnglishName }));
    dispatch(updateTeamUrl());
  };

  let teamMember1Data = syncPairNamesAndIds['en'][teamMembers.slot1] || null;
  let teamMember2Data = syncPairNamesAndIds['en'][teamMembers.slot2] || null;
  let teamMember3Data = syncPairNamesAndIds['en'][teamMembers.slot3] || null;

  const loadUrlTeamData = () => {
    if (
      getQueryStringValue('sp1', location.search) ||
      getQueryStringValue('sp2', location.search) ||
      getQueryStringValue('sp3', location.search)
    ) {
      dispatch(resetTeam());
    }
    let syncPair1;
    if (getQueryStringValue('sp1', location.search)) {
      if (
        getQueryStringValue('sp1', location.search) === 'Lt.Surge_Electrode'
      ) {
        syncPair1 = 'Lt. Surge & Electrode';
      } else if (
        getQueryStringValue('sp1', location.search) === 'CrasherWake_Floatzel'
      ) {
        syncPair1 = 'Crasher Wake & Floatzel';
      } else {
        syncPair1 = getQueryStringValue('sp1', location.search)
          .split('_')
          .join(' & ');
      }
      dispatch(setTeam({ slot: 'slot1', syncPair: syncPair1 }));
      let pokemon1 = syncPairNamesAndIds['en'][syncPair1].pokemonEnglishName;
      // console.log('pokemon1', pokemon1);
      let syncPair1SyncLevel;
      if (getQueryStringValue('s1', location.search)) {
        syncPair1SyncLevel = getQueryStringValue('s1', location.search);
        dispatch(
          setTeamSyncLevels({
            slot: 'slot1',
            syncLevel: syncPair1SyncLevel,
          })
        );
      } else {
        dispatch(
          setTeamSyncLevels({
            slot: 'slot1',
            syncLevel: '5',
          })
        );
      }

      if (getQueryStringValue('g1', location.search)) {
        let remainingEnergy = Number(
          getQueryStringValue('e1', location.search)
        );
        let orbSpent = Number(getQueryStringValue('o1', location.search));
        let cellData = {};
        let selectedCellByIdFromUrl = {};

        getQueryStringValue('g1', location.search).map((id) => {
          cellData =
            allSyncGrids[language][
              `${removeHyphens(
                pokemon1
              ).toLowerCase()}GridData${language.toUpperCase()}`
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
              slot: 'slot1',
              selectedCellByIdFromUrl,
              remainingEnergy,
              orbSpent,
            })
          );
        });
      }
    }

    let syncPair2;
    if (getQueryStringValue('sp2', location.search)) {
      if (
        getQueryStringValue('sp2', location.search) === 'Lt.Surge_Electrode'
      ) {
        syncPair2 = 'Lt. Surge & Electrode';
      } else if (
        getQueryStringValue('sp2', location.search) === 'CrasherWake_Floatzel'
      ) {
        syncPair2 = 'Crasher Wake & Floatzel';
      } else {
        syncPair2 = getQueryStringValue('sp2', location.search)
          .split('_')
          .join(' & ');
      }
      dispatch(setTeam({ slot: 'slot2', syncPair: syncPair2 }));
      let pokemon2 = syncPairNamesAndIds['en'][syncPair2].pokemonEnglishName;
      // console.log('pokemon2', pokemon2);
      let syncPair2SyncLevel;
      if (getQueryStringValue('s2', location.search)) {
        syncPair2SyncLevel = getQueryStringValue('s2', location.search);
        dispatch(
          setTeamSyncLevels({
            slot: 'slot2',
            syncLevel: syncPair2SyncLevel,
          })
        );
      } else {
        dispatch(
          setTeamSyncLevels({
            slot: 'slot2',
            syncLevel: '5',
          })
        );
      }

      if (getQueryStringValue('g2', location.search)) {
        let remainingEnergy = Number(
          getQueryStringValue('e2', location.search)
        );
        let orbSpent = Number(getQueryStringValue('o2', location.search));
        let cellData = {};
        let selectedCellByIdFromUrl = {};

        getQueryStringValue('g2', location.search).map((id) => {
          cellData =
            allSyncGrids[language][
              `${removeHyphens(
                pokemon2
              ).toLowerCase()}GridData${language.toUpperCase()}`
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
              slot: 'slot2',
              selectedCellByIdFromUrl,
              remainingEnergy,
              orbSpent,
            })
          );
        });
      }
    }

    let syncPair3;
    if (getQueryStringValue('sp3', location.search)) {
      if (
        getQueryStringValue('sp3', location.search) === 'Lt.Surge_Electrode'
      ) {
        syncPair3 = 'Lt. Surge & Electrode';
      } else if (
        getQueryStringValue('sp3', location.search) === 'CrasherWake_Floatzel'
      ) {
        syncPair3 = 'Crasher Wake & Floatzel';
      } else {
        syncPair3 = getQueryStringValue('sp3', location.search)
          .split('_')
          .join(' & ');
      }
      dispatch(setTeam({ slot: 'slot3', syncPair: syncPair3 }));
      let pokemon3 = syncPairNamesAndIds['en'][syncPair3].pokemonEnglishName;
      // console.log('pokemon3', pokemon3);
      let syncPair3SyncLevel;
      if (getQueryStringValue('s3', location.search)) {
        syncPair3SyncLevel = getQueryStringValue('s3', location.search);
        dispatch(
          setTeamSyncLevels({
            slot: 'slot3',
            syncLevel: syncPair3SyncLevel,
          })
        );
      } else {
        dispatch(
          setTeamSyncLevels({
            slot: 'slot3',
            syncLevel: '5',
          })
        );
      }

      if (getQueryStringValue('g3', location.search)) {
        let remainingEnergy = Number(
          getQueryStringValue('e3', location.search)
        );
        let orbSpent = Number(getQueryStringValue('o3', location.search));
        let cellData = {};
        let selectedCellByIdFromUrl = {};

        getQueryStringValue('g3', location.search).map((id) => {
          cellData =
            allSyncGrids[language][
              `${removeHyphens(
                pokemon3
              ).toLowerCase()}GridData${language.toUpperCase()}`
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
              slot: 'slot3',
              selectedCellByIdFromUrl,
              remainingEnergy,
              orbSpent,
            })
          );
        });
      }
    }
  };

  useEffect(() => {
    loadUrlTeamData();
    dispatch(updateTeamUrl());
  }, []);

  return (
    <Fragment>
      <Grid container className={classes.root} spacing={3}>
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <SyncPairNameField
              label={'Left'}
              syncPairName={
                syncPairNamesAndIds['en'][teamMembers.slot1]
                  ? syncPairNamesAndIds['en'][teamMembers.slot1][
                      'syncPairNameByLanguage'
                    ][language]
                  : ''
              }
              handleOnChange={slot1OnChangeHandler}
            />
          </Grid>
          <Grid item>
            <SyncPairNameField
              label={'Middle'}
              syncPairName={
                syncPairNamesAndIds['en'][teamMembers.slot2]
                  ? syncPairNamesAndIds['en'][teamMembers.slot1][
                      'syncPairNameByLanguage'
                    ][language]
                  : ''
              }
              handleOnChange={slot2OnChangeHandler}
            />
          </Grid>
          <Grid item>
            <SyncPairNameField
              label={'Right'}
              syncPairName={
                syncPairNamesAndIds['en'][teamMembers.slot3]
                  ? syncPairNamesAndIds['en'][teamMembers.slot1][
                      'syncPairNameByLanguage'
                    ][language]
                  : ''
              }
              handleOnChange={slot3OnChangeHandler}
            />
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ marginTop: 5 }}
        >
          <div style={{ marginTop: 10, paddingBottom: 10 }}>
            <SaveBuildButton />
          </div>
          <LoadTeamBuildDropdown />
          <ResetTeamButton />
          <ShareTeamButton />
          <ShareTeamModal />
        </Grid>
        <Grid container justify="center" spacing={0}>
          <Grid item>
            <Card className={classes.card} position="relative">
              {teamMember1Data ? (
                <div>
                  <CardMedia
                    component="img"
                    alt="Trainer Image"
                    height="256"
                    image={`https://pokemonmasters.s3.us-east-2.amazonaws.com/Trainer/256px/${teamMember1Data.trainerActorId}_256.ktx.png`}
                    title="Trainer Image"
                    position="absolute"
                  />
                  <div
                    style={{
                      top: 105,
                      left: 0,
                      position: 'absolute',
                      zIndex: 30,
                    }}
                  >
                    <svg style={{ width: 150 }}>
                      <circle
                        cx="105"
                        cy="105"
                        r="39"
                        stroke="white"
                        strokeWidth="10"
                        fillOpacity="0"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      top: 107,
                      left: 0,
                      position: 'absolute',
                      zIndex: 10,
                    }}
                  >
                    <svg style={{ width: 150 }}>
                      <polygon
                        points="0 155 155 80 155 155"
                        stroke="white"
                        strokeWidth="10"
                        fill="grey"
                      />
                      <circle
                        cx="105"
                        cy="105"
                        r="39"
                        stroke="white"
                        strokeWidth="0"
                        fill="grey"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      top: 180,
                      left: 73,
                      position: 'absolute',
                      zIndex: 20,
                    }}
                  >
                    <img
                      src={`https://pokemonmasters.s3.us-east-2.amazonaws.com/Monster/128px/${teamMember1Data.monsterActorId}_128.ktx.png`}
                      style={{ height: 60 }}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <CardMedia component="img" height="256" position="absolute" />
                  <div
                    style={{
                      top: 105,
                      left: 0,
                      position: 'absolute',
                      zIndex: 30,
                    }}
                  >
                    <svg style={{ width: 150 }}>
                      <circle
                        cx="105"
                        cy="105"
                        r="39"
                        stroke="white"
                        strokeWidth="10"
                        fillOpacity="0"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      top: 107,
                      left: 0,
                      position: 'absolute',
                      zIndex: 10,
                    }}
                  >
                    <svg style={{ width: 150 }}>
                      <polygon
                        points="0 155 155 80 155 155"
                        stroke="white"
                        strokeWidth="10"
                        fill="grey"
                      />
                      <circle
                        cx="105"
                        cy="105"
                        r="39"
                        stroke="white"
                        strokeWidth="0"
                        fill="grey"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      top: 180,
                      left: 73,
                      position: 'absolute',
                      zIndex: 20,
                    }}
                  ></div>
                </div>
              )}
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card} position="relative">
              {teamMember2Data ? (
                <div>
                  <CardMedia
                    component="img"
                    alt="Trainer Image"
                    height="256"
                    image={`https://pokemonmasters.s3.us-east-2.amazonaws.com/Trainer/256px/${teamMember2Data.trainerActorId}_256.ktx.png`}
                    title="Trainer Image"
                    position="absolute"
                  />
                  <div
                    style={{
                      top: 105,
                      left: 0,
                      position: 'absolute',
                      zIndex: 30,
                    }}
                  >
                    <svg style={{ width: 150 }}>
                      <circle
                        cx="105"
                        cy="105"
                        r="39"
                        stroke="white"
                        strokeWidth="10"
                        fillOpacity="0"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      top: 107,
                      left: 0,
                      position: 'absolute',
                      zIndex: 10,
                    }}
                  >
                    <svg style={{ width: 150 }}>
                      <polygon
                        points="0 155 155 80 155 155"
                        stroke="white"
                        strokeWidth="10"
                        fill="grey"
                      />
                      <circle
                        cx="105"
                        cy="105"
                        r="39"
                        stroke="white"
                        strokeWidth="0"
                        fill="grey"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      top: 180,
                      left: 73,
                      position: 'absolute',
                      zIndex: 20,
                    }}
                  >
                    <img
                      src={`https://pokemonmasters.s3.us-east-2.amazonaws.com/Monster/128px/${teamMember2Data.monsterActorId}_128.ktx.png`}
                      style={{ height: 60 }}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <CardMedia component="img" height="256" position="absolute" />
                  <div
                    style={{
                      top: 105,
                      left: 0,
                      position: 'absolute',
                      zIndex: 30,
                    }}
                  >
                    <svg style={{ width: 150 }}>
                      <circle
                        cx="105"
                        cy="105"
                        r="39"
                        stroke="white"
                        strokeWidth="10"
                        fillOpacity="0"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      top: 107,
                      left: 0,
                      position: 'absolute',
                      zIndex: 10,
                    }}
                  >
                    <svg style={{ width: 150 }}>
                      <polygon
                        points="0 155 155 80 155 155"
                        stroke="white"
                        strokeWidth="10"
                        fill="grey"
                      />
                      <circle
                        cx="105"
                        cy="105"
                        r="39"
                        stroke="white"
                        strokeWidth="0"
                        fill="grey"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      top: 180,
                      left: 73,
                      position: 'absolute',
                      zIndex: 20,
                    }}
                  ></div>
                </div>
              )}
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card} position="relative">
              {teamMember3Data ? (
                <div>
                  <CardMedia
                    component="img"
                    alt="Trainer Image"
                    height="256"
                    image={`https://pokemonmasters.s3.us-east-2.amazonaws.com/Trainer/256px/${teamMember3Data.trainerActorId}_256.ktx.png`}
                    title="Trainer Image"
                    position="absolute"
                  />
                  <div
                    style={{
                      top: 105,
                      left: 0,
                      position: 'absolute',
                      zIndex: 30,
                    }}
                  >
                    <svg style={{ width: 150 }}>
                      <circle
                        cx="105"
                        cy="105"
                        r="39"
                        stroke="white"
                        strokeWidth="10"
                        fillOpacity="0"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      top: 107,
                      left: 0,
                      position: 'absolute',
                      zIndex: 10,
                    }}
                  >
                    <svg style={{ width: 150 }}>
                      <polygon
                        points="0 155 155 80 155 155"
                        stroke="white"
                        strokeWidth="10"
                        fill="grey"
                      />
                      <circle
                        cx="105"
                        cy="105"
                        r="39"
                        stroke="white"
                        strokeWidth="0"
                        fill="grey"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      top: 180,
                      left: 73,
                      position: 'absolute',
                      zIndex: 20,
                    }}
                  >
                    <img
                      src={`https://pokemonmasters.s3.us-east-2.amazonaws.com/Monster/128px/${teamMember3Data.monsterActorId}_128.ktx.png`}
                      style={{ height: 60 }}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <CardMedia component="img" height="256" position="absolute" />
                  <div
                    style={{
                      top: 105,
                      left: 0,
                      position: 'absolute',
                      zIndex: 30,
                    }}
                  >
                    <svg style={{ width: 150 }}>
                      <circle
                        cx="105"
                        cy="105"
                        r="39"
                        stroke="white"
                        strokeWidth="10"
                        fillOpacity="0"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      top: 107,
                      left: 0,
                      position: 'absolute',
                      zIndex: 10,
                    }}
                  >
                    <svg style={{ width: 150 }}>
                      <polygon
                        points="0 155 155 80 155 155"
                        stroke="white"
                        strokeWidth="10"
                        fill="grey"
                      />
                      <circle
                        cx="105"
                        cy="105"
                        r="39"
                        stroke="white"
                        strokeWidth="0"
                        fill="grey"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      top: 180,
                      left: 73,
                      position: 'absolute',
                      zIndex: 20,
                    }}
                  ></div>
                </div>
              )}
            </Card>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            {teamMember1Data ? (
              teamMember1Data.grided ? (
                <Grid item>
                  <Paper className={classes.paper}>
                    <TeamMemberContainer
                      pokemon={teamMember1Data[
                        'pokemonEnglishName'
                      ].toLowerCase()}
                      slot={'slot1'}
                    />
                  </Paper>
                </Grid>
              ) : null
            ) : null}
            {teamMember2Data ? (
              teamMember2Data.grided ? (
                <Grid item>
                  <Paper className={classes.paper}>
                    <TeamMemberContainer
                      pokemon={teamMember2Data[
                        'pokemonEnglishName'
                      ].toLowerCase()}
                      slot={'slot2'}
                    />
                  </Paper>
                </Grid>
              ) : null
            ) : null}
            {teamMember3Data ? (
              teamMember3Data.grided ? (
                <Grid item>
                  <Paper className={classes.paper}>
                    <TeamMemberContainer
                      pokemon={teamMember3Data[
                        'pokemonEnglishName'
                      ].toLowerCase()}
                      slot={'slot3'}
                    />
                  </Paper>
                </Grid>
              ) : null
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default TeamBuilder;
