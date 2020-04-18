import React from 'react';
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import UI from '../../utils/translations';
import styles from './styles';

function SkillOverview(props) {
  const { classes, skill, description, energy } = props;
  const language = useSelector((state) => state.language.currentLanguage);
  return (
    Boolean(skill) && (
      <div className={classes.skillOverviewCardWrapper}>
        <Card className={classes.skillOverviewCard} variant="outlined">
          <CardContent>
            <Typography
              variant="h6"
              component="p"
              className={classes.skillOverviewCardTitle}
            >
              {skill}
            </Typography>
            {Boolean(description) && (
              <Typography
                variant="body2"
                component="p"
                gutterBottom
                className={classes.skillOverviewContent}
              >
                {description}
              </Typography>
            )}
            <Typography
              variant="body1"
              component="p"
              className={classes.skillOverviewContent}
            >
              {UI['Energy Cost'][language]}: {energy}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  );
}

export default withStyles(styles)(SkillOverview);
