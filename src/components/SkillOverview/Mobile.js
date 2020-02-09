import React from 'react';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

function SkillOverview(props) {
  const { classes, skill, energy } = props;

  return (
    Boolean(skill) && (
      <div className={classes.skillOverviewCardWrapper}>
        <Card className={classes.skillOverviewCard} variant="outlined">
          <CardContent>
            <Typography variant="body2" component="p">
              {skill}
              <br /> Energy Cost: {energy}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  );
}

export default withStyles(styles)(SkillOverview);
