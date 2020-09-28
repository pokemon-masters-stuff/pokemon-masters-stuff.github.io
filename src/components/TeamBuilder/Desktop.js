import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import TeamMemberContainer from './TeamMemberContainer';
import { trainerPictures, pokemonPictures } from '../../utils/constants';
import syncPairNamesAndIds from '../../data/syncPairNamesAndIds.json';
import SyncPairNameField from './SyncPairNameField';
import { setTeam } from '../../actions/actionCreators';
import SaveBuildButton from './SaveBuildButton';
import LoadTeamBuildDropdown from './LoadTeamBuildDropdown';
import ResetTeamButton from './ResetTeamButton';

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
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  const teamMembers = useSelector((state) => state.grid.teamMembers);
  const slot1OnChangeHandler = (e, newValue) => {
    dispatch(setTeam({ slot: 'slot1', syncPair: newValue }));
  };
  const slot2OnChangeHandler = (e, newValue) => {
    dispatch(setTeam({ slot: 'slot2', syncPair: newValue }));
  };
  const slot3OnChangeHandler = (e, newValue) => {
    dispatch(setTeam({ slot: 'slot3', syncPair: newValue }));
  };

  let teamMember1Data =
    syncPairNamesAndIds[language][teamMembers.slot1] || null;
  let teamMember2Data =
    syncPairNamesAndIds[language][teamMembers.slot2] || null;
  let teamMember3Data =
    syncPairNamesAndIds[language][teamMembers.slot3] || null;

  // To Add ShareTeam
  return (
    <Fragment>
      <Grid container className={classes.root} spacing={3}>
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <SyncPairNameField
              label={'Left'}
              syncPairName={teamMembers.slot1}
              handleOnChange={slot1OnChangeHandler}
            />
          </Grid>
          <Grid item>
            <SyncPairNameField
              label={'Middle'}
              syncPairName={teamMembers.slot2}
              handleOnChange={slot2OnChangeHandler}
            />
          </Grid>
          <Grid item>
            <SyncPairNameField
              label={'Right'}
              syncPairName={teamMembers.slot3}
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
                    image={
                      trainerPictures[teamMember1Data.trainerActorId + '_256']
                    }
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
                      src={
                        pokemonPictures[teamMember1Data.monsterActorId + '_128']
                      }
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
                    image={
                      trainerPictures[teamMember2Data.trainerActorId + '_256']
                    }
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
                      src={
                        pokemonPictures[teamMember2Data.monsterActorId + '_128']
                      }
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
                    image={
                      trainerPictures[teamMember3Data.trainerActorId + '_256']
                    }
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
                      src={
                        pokemonPictures[teamMember3Data.monsterActorId + '_128']
                      }
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
                      pokemon={teamMember1Data['pokemonName'].toLowerCase()}
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
                      pokemon={teamMember2Data['pokemonName'].toLowerCase()}
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
                      pokemon={teamMember3Data['pokemonName'].toLowerCase()}
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
