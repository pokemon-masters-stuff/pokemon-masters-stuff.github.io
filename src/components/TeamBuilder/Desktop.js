import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import TeamMember from './TeamMember';
import { allTrainerPictures, allThumbnails } from '../../utils/constants';

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
  const slot1 = 'Alakazam';
  const slot2 = 'Mew';
  const slot3 = 'Charizard';
  let teamMembers = [slot1, slot2, slot3];
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
              image={allTrainerPictures['sabrina']}
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
              <img src={allThumbnails['alakazam']} style={{ height: 60 }} />
            </div>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card} position="relative">
            <CardMedia
              component="img"
              alt="Trainer Image"
              height="256"
              image={allTrainerPictures['oak']}
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
              <img src={allThumbnails['mew']} style={{ height: 60 }} />
            </div>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card} position="relative">
            <CardMedia
              component="img"
              alt="Trainer Image"
              height="256"
              image={allTrainerPictures['red']}
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
              <img src={allThumbnails['charizard']} style={{ height: 60 }} />
            </div>
          </Card>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          {teamMembers.map((value, index) => (
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
