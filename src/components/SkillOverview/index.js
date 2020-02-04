import React from 'react';
import {withStyles} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import styles from "./styles";

function SkillOverview(props) {
  const {classes, skill, onSkillSelectHandler} = props;

  const handleOnSkillSelect = () => (typeof onSkillSelectHandler === "function") ? onSkillSelectHandler(skill) : null;

  return (
    Boolean(skill) && (
      <div className={classes.skillOverviewCardWrapper}>
        <Card className={classes.skillOverviewCard} variant="outlined">
          <CardContent>
            <Typography variant="body2" component="p">
              {skill}
            </Typography>
          </CardContent>
          <CardActions className={classes.skillOverviewCardFooter}>
            <Button size="small" variant="contained" color="secondary" onClick={handleOnSkillSelect}>Select</Button>
          </CardActions>
        </Card>
      </div>
    )
  );
}

export default withStyles(styles)(SkillOverview);
