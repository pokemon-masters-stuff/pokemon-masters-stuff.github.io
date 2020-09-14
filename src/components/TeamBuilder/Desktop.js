import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import TeamMember from './TeamMember';
import { trainerPictures, pokemonPictures } from '../../utils/constants';
import syncPairNamesAndIds from '../../data/syncPairNamesAndIds.json';

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
  const slot1 = 'Sabrina & Alakazam';
  const slot2 = 'Professor Oak & Mew';
  const slot3 = 'Red & Charizard';
  let teamMember1 = syncPairNamesAndIds[language][slot1];
  let teamMember2 = syncPairNamesAndIds[language][slot2];
  let teamMember3 = syncPairNamesAndIds[language][slot3];
  let pokemonNamesArray = [
    teamMember1['pokemonName'],
    teamMember2['pokemonName'],
    teamMember3['pokemonName'],
  ];

  console.log('pokemonNamesArray', pokemonNamesArray);
  // To Add SaveTeam, LoadTeam, ShareTeam, Reset, SelectPokemon
  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid container justify="center" spacing={3}>
        <Grid item>
          <TextField
            className={classes.textField}
            id="filled-search"
            label="Left"
            type="search"
            variant="filled"
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textField}
            id="filled-search"
            label="Middle"
            type="search"
            variant="filled"
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textField}
            id="filled-search"
            label="Right"
            type="search"
            variant="filled"
          />
        </Grid>
      </Grid>

      <Grid container justify="center" spacing={0}>
        <Grid item>
          <Card className={classes.card} position="relative">
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
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card} position="relative">
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
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card} position="relative">
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
          </Card>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          {pokemonNamesArray.map((value, index) => (
            <Grid key={index} item>
              <Paper className={classes.paper}>
                <TeamMember
                  pokemon={value.toLowerCase()}
                  slot={`slot${index + 1}`}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TeamBuilder;
