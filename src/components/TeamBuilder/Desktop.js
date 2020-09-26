import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import TeamMember from './TeamMember';
import { trainerPictures, pokemonPictures } from '../../utils/constants';
import syncPairNamesAndIds from '../../data/syncPairNamesAndIds.json';
import SyncPairNameField from './SyncPairNameField';

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
  const language = useSelector((state) => state.language.currentLanguage);
  const classes = useStyles();
  const [slot1, setSlot1] = React.useState('');
  const [slot2, setSlot2] = React.useState('');
  const [slot3, setSlot3] = React.useState('');
  const slot1OnChangeHandler = (e, newValue) => {
    setSlot1(newValue);
  };
  const slot2OnChangeHandler = (e, newValue) => {
    setSlot2(newValue);
  };
  const slot3OnChangeHandler = (e, newValue) => {
    setSlot3(newValue);
  };

  let teamMember1 = syncPairNamesAndIds[language][slot1] || null;
  let teamMember2 = syncPairNamesAndIds[language][slot2] || null;
  let teamMember3 = syncPairNamesAndIds[language][slot3] || null;
  // let pokemonNamesArray = [
  //   teamMember1['pokemonName'],
  //   teamMember2['pokemonName'],
  //   teamMember3['pokemonName'],
  // ];

  // console.log('pokemonNamesArray', pokemonNamesArray);

  // To Add SaveTeam, LoadTeam, ShareTeam, Reset, SelectPokemon
  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid container justify="center" spacing={3}>
        <Grid item>
          <SyncPairNameField
            label={'Left'}
            syncPairName={slot1}
            handleOnChange={slot1OnChangeHandler}
          />
        </Grid>
        <Grid item>
          <SyncPairNameField
            label={'Middle'}
            syncPairName={slot2}
            handleOnChange={slot2OnChangeHandler}
          />
        </Grid>
        <Grid item>
          <SyncPairNameField
            label={'Right'}
            syncPairName={slot3}
            handleOnChange={slot3OnChangeHandler}
          />
        </Grid>
      </Grid>

      <Grid container justify="center" spacing={0}>
        <Grid item>
          <Card className={classes.card} position="relative">
            {teamMember1 ? (
              <div>
                <CardMedia
                  component="img"
                  alt="Trainer Image"
                  height="256"
                  image={trainerPictures[teamMember1.trainerActorId + '_256']}
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
                      r="40"
                      stroke="white"
                      strokeWidth="6"
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
                      points="0 153 153 70 153 153"
                      stroke="white"
                      strokeWidth="6"
                      fill="grey"
                    />
                    <circle
                      cx="105"
                      cy="105"
                      r="40"
                      stroke="white"
                      strokeWidth="3"
                      fill="grey"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    top: 185,
                    left: 78,
                    position: 'absolute',
                    zIndex: 20,
                  }}
                >
                  <img
                    src={pokemonPictures[teamMember1.monsterActorId + '_128']}
                    style={{ height: 60 }}
                  />
                </div>
              </div>
            ) : null}
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card} position="relative">
            {teamMember2 ? (
              <div>
                <CardMedia
                  component="img"
                  alt="Trainer Image"
                  height="256"
                  image={trainerPictures[teamMember2.trainerActorId + '_256']}
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
                      r="40"
                      stroke="white"
                      strokeWidth="6"
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
                      points="0 153 153 70 153 153"
                      stroke="white"
                      strokeWidth="6"
                      fill="grey"
                    />
                    <circle
                      cx="105"
                      cy="105"
                      r="40"
                      stroke="white"
                      strokeWidth="3"
                      fill="grey"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    top: 185,
                    left: 78,
                    position: 'absolute',
                    zIndex: 20,
                  }}
                >
                  <img
                    src={pokemonPictures[teamMember2.monsterActorId + '_128']}
                    style={{ height: 60 }}
                  />
                </div>
              </div>
            ) : null}
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card} position="relative">
            {teamMember3 ? (
              <div>
                <CardMedia
                  component="img"
                  alt="Trainer Image"
                  height="256"
                  image={trainerPictures[teamMember3.trainerActorId + '_256']}
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
                      r="40"
                      stroke="white"
                      strokeWidth="6"
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
                      points="0 153 153 70 153 153"
                      stroke="white"
                      strokeWidth="6"
                      fill="grey"
                    />
                    <circle
                      cx="105"
                      cy="105"
                      r="40"
                      stroke="white"
                      strokeWidth="3"
                      fill="grey"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    top: 185,
                    left: 78,
                    position: 'absolute',
                    zIndex: 20,
                  }}
                >
                  <img
                    src={pokemonPictures[teamMember3.monsterActorId + '_128']}
                    style={{ height: 60 }}
                  />
                </div>
              </div>
            ) : null}
          </Card>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          {teamMember1 ? (
            teamMember1.grided ? (
              <Grid item>
                <Paper className={classes.paper}>
                  <TeamMember
                    pokemon={teamMember1['pokemonName'].toLowerCase()}
                    slot={'slot1'}
                  />
                </Paper>
              </Grid>
            ) : null
          ) : null}
          {teamMember2 ? (
            teamMember2.grided ? (
              <Grid item>
                <Paper className={classes.paper}>
                  <TeamMember
                    pokemon={teamMember2['pokemonName'].toLowerCase()}
                    slot={'slot2'}
                  />
                </Paper>
              </Grid>
            ) : null
          ) : null}
          {teamMember3 ? (
            teamMember3.grided ? (
              <Grid item>
                <Paper className={classes.paper}>
                  <TeamMember
                    pokemon={teamMember3['pokemonName'].toLowerCase()}
                    slot={'slot3'}
                  />
                </Paper>
              </Grid>
            ) : null
          ) : null}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TeamBuilder;
