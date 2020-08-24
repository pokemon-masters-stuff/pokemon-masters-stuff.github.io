import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TeamMember from './TeamMember';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 70,
  },
  paper: {
    height: 800,
    width: 500,
  },
  control: {
    padding: theme.spacing(3),
  },
}));

function TeamBuilder() {
  const classes = useStyles();
  const slot1 = 'Pikachu';
  const slot2 = 'Mew';
  const slot3 = 'Charizard';
  let teamMembers = [slot1, slot2, slot3];
  // To Add SaveTeam, LoadTeam, ShareTeam, Reset, SelectPokemon
  return (
    <Grid container className={classes.root} spacing={3}>
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
