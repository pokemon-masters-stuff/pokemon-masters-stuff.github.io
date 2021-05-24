import React, { useEffect } from 'react';
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
import {
  removeHyphens,
  convertSyncPairNameFromUrl,
} from '../../../utils/functions';
import { getQueryStringValue } from '../../../queryString';
import SaveTeamButton from '../common/SaveTeamButton';
import LoadTeamDropdown from '../common/LoadTeamDropdown';
import ResetTeamButton from '../common/ResetTeamButton';
import { allSyncGrids } from '../../../utils/constants';
import ShareTeamButton from '../common/ShareTeamButton';
import SyncPairCard from '../common/SyncPairCard';
import LoginOrRegisterModal from '../../auth/LoginOrRegisterModal';

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
  const darkMode = useSelector((state) => state.darkMode.mode);

  const onChangeHandler = (e, newValue, slot) => {
    let syncPairEnglishName = newValue
      ? syncPairNamesAndIds[language][newValue].syncPairEnglishName
      : '';
    dispatch(setTeam({ slot: slot, syncPair: syncPairEnglishName }));
    dispatch(updateTeamUrl());
  };

  let teamMember1Data = syncPairNamesAndIds['en'][teamMembers.slot1] || null;
  let teamMember2Data = syncPairNamesAndIds['en'][teamMembers.slot2] || null;
  let teamMember3Data = syncPairNamesAndIds['en'][teamMembers.slot3] || null;

  const loadTeamFromUrl = () => {
    if (
      getQueryStringValue('sp1', location.search) ||
      getQueryStringValue('sp2', location.search) ||
      getQueryStringValue('sp3', location.search)
    ) {
      dispatch(resetTeam());
    }
    let syncPair1;
    if (getQueryStringValue('sp1', location.search)) {
      syncPair1 = convertSyncPairNameFromUrl(
        getQueryStringValue('sp1', location.search)
      );
      if (syncPairNamesAndIds['en'][syncPair1]) {
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
      } else {
        alert(
          "There is an error in the URL. The sync pair on the left won't be displayed due to misspelled name."
        );
      }
    }

    let syncPair2;
    if (getQueryStringValue('sp2', location.search)) {
      syncPair2 = convertSyncPairNameFromUrl(
        getQueryStringValue('sp2', location.search)
      );
      if (syncPairNamesAndIds['en'][syncPair2]) {
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
      } else {
        alert(
          "There is an error in the URL. The sync pair in the middle won't be displayed due to misspelled name."
        );
      }
    }

    let syncPair3;
    if (getQueryStringValue('sp3', location.search)) {
      syncPair3 = convertSyncPairNameFromUrl(
        getQueryStringValue('sp3', location.search)
      );
      if (syncPairNamesAndIds['en'][syncPair3]) {
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
      } else {
        alert(
          "There is an error in the URL. The sync pair on the right won't be displayed due to misspelled name."
        );
      }
    }
  };

  useEffect(() => {
    loadTeamFromUrl();
    dispatch(updateTeamUrl());
  }, []);

  return (
    <div
      className={`App ${darkMode ? 'dark-mode' : null}`}
      style={{ paddingBottom: 150 }}
    >
      {/* <AppBar position="fixed">
        <Nav onOpenNavHandler={handleOnOpenNav} />
        <NavigationMobile
          isOpened={isNavOpened}
          onCloseHandler={handleOnCloseNav}
        />{' '}
      </AppBar> */}

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
        </Grid>
        <Grid container justify="center" spacing={0}>
          {[teamMember1Data, teamMember2Data, teamMember3Data].map(
            (teamMemberData, index) => (
              <SyncPairCard
                teamMemberData={teamMemberData}
                key={index}
                index={index}
                syncPairName={
                  syncPairNamesAndIds['en'][teamMembers[`slot${index + 1}`]]
                    ? syncPairNamesAndIds['en'][
                        teamMembers[`slot${index + 1}`]
                      ]['syncPairNameByLanguage'][language]
                    : ''
                }
                handleOnChange={onChangeHandler}
              />
            )
          )}
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="center" spacing={0}>
            {[teamMember1Data, teamMember2Data, teamMember3Data].map(
              (teamMemberData, index) =>
                teamMemberData ? (
                  teamMemberData.grided ? (
                    <Grid item key={index}>
                      <SyncGridContainer
                        pokemon={teamMemberData[
                          'pokemonEnglishName'
                        ].toLowerCase()}
                        slot={`slot${index + 1}`}
                        syncPairName={
                          syncPairNamesAndIds['en'][
                            teamMembers[`slot${index + 1}`]
                          ]
                            ? syncPairNamesAndIds['en'][
                                teamMembers[`slot${index + 1}`]
                              ]['syncPairNameByLanguage'][language]
                            : ''
                        }
                      />
                    </Grid>
                  ) : null
                ) : null
            )}
          </Grid>
        </Grid>
      </Grid>
      <LoginOrRegisterModal />
    </div>
  );
}

export default TeamBuilder;
