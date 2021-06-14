import React, { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import styles from './styles';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import SyncGridContainer from '../common/SyncGridContainer';
import syncPairNamesAndIds from '../../../data/syncPairNamesAndIds.json';
import {
  removeLikeFromTeam,
  addLikeToTeam,
  deleteTeam,
} from '../../../actions/actionCreators';
import SyncPairCard from '../common/SyncPairCard';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ShareTeamModal from '../common/ShareTeamModal';
import EditTeamModal from '../common/EditTeamModal';
import UI from '../../../utils/translations';
import LUCKY_SKILL_LIST from '../../../data/luckySkills.json';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Comments from '../common/Comments';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     marginTop: 70,
//   },
//   textField: {
//     marginTop: 5,
//   },
//   control: {
//     padding: theme.spacing(3),
//   },
// }));

function TeamItem(props) {
  // const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  const darkMode = useSelector((state) => state.darkMode.mode);
  const currentUser = useSelector((state) => state.auth.user);
  const { team, classes } = props;

  const handleClickLike = (team, teamLiked, e) => {
    teamLiked
      ? dispatch(removeLikeFromTeam(team._id))
      : dispatch(addLikeToTeam(team._id));
  };

  const handleClickDelete = (team) => {
    window.confirm('Are you sure you wish to delete this team?') &&
      dispatch(deleteTeam(team._id));
  };

  const renderIcons = (team, currentUser) => {
    const arrayOfUsersLikedThisTeam = team.likes.map((like) => {
      return like.user;
    });
    const teamLiked = arrayOfUsersLikedThisTeam.includes(currentUser._id);

    return (
      <Fragment>
        {currentUser._id === team.user ? (
          <Fragment>
            <div className="col-sm-4">
              <IconButton
                value={team}
                data-toggle="modal"
                data-target={`#editTeamModal${team._id}`}
              >
                <EditIcon />
              </IconButton>
              <EditTeamModal team={team} />
              <IconButton
                value={team}
                onClick={(event) => handleClickDelete(team)}
              >
                <DeleteIcon />
              </IconButton>

              <Button
                variant="outlined"
                data-toggle="modal"
                data-target={`#shareLinkModal${team._id}`}
              >
                Share
              </Button>
              <ShareTeamModal index={team._id} url={team.teamUrl} />

              <IconButton
                value={team}
                onClick={(event) => handleClickLike(team, teamLiked)}
              >
                {teamLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              {team.likes.length}
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="col-sm-3 offset-sm-1">
              <Button
                variant="outlined"
                data-toggle="modal"
                data-target={`#shareLinkModal${team._id}`}
              >
                Share
              </Button>
              <ShareTeamModal index={team._id} url={team.url} />

              <IconButton
                value={team}
                onClick={(event) => handleClickLike(team, teamLiked)}
              >
                {teamLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              {team.likes.length}
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  };

  return (
    <div
      className={darkMode ? classes.teamContainerDark : classes.teamContainer}
    >
      <Paper
        elevation={3}
        className={darkMode ? classes.teamNameDark : classes.teamName}
      >
        <div className="row">
          <div className="col-sm-8">
            <span
              style={{
                fontWeight: 'bold',
                color: '#bdbdbd',
              }}
            >
              {UI['Team name'][language]}:{' '}
            </span>
            <span>
              {team.teamName}
              <span style={{ fontWeight: 'bold', color: '#bdbdbd' }}> by </span>
              {team.username}
            </span>
          </div>
          {renderIcons(team, currentUser)}
        </div>
      </Paper>
      <Divider />
      <Paper
        style={!darkMode ? { backgroundColor: fade('#fafafa', 0.4) } : null}
      >
        <div className="row" style={{ paddingTop: 10 }}>
          <div
            className="col-sm mt-2"
            style={{
              display: 'flex',
              flexFlow: 'row wrap',
              alignItems: 'center',
              // marginLeft: -120,
            }}
          >
            <Grid container alignItems="center" justify="center">
              {/* <div style={{ marginLeft: 69 }}> */}
              {[
                team.syncPairs.slot1,
                team.syncPairs.slot2,
                team.syncPairs.slot3,
              ].map((teamMemberData, index) => (
                <SyncPairCard
                  key={index}
                  index={index}
                  teamMemberData={teamMemberData}
                />
              ))}
              {/* </div> */}

              {/* <Grid item xs={12}>
                  <Grid container justify="center" spacing={3}> */}
              <div
                style={{
                  width: '100%',
                  marginTop: 20,
                }}
              >
                {[
                  team.syncPairs.slot1,
                  team.syncPairs.slot2,
                  team.syncPairs.slot3,
                ].map((teamMemberData, index) =>
                  teamMemberData.trainerId ? (
                    syncPairNamesAndIds[teamMemberData.trainerId].isGrided &&
                    teamMemberData.selectedCellsById ? (
                      // <Grid item key={index}>
                      <SyncGridContainer
                        key={`sync-grid-${index + 1}-${team._id}`}
                        teamMemberData={teamMemberData}
                        slot={`slot${index + 1}`}
                        marginT={-10}
                        paddingB={-10}
                      />
                    ) : // </Grid>
                    null
                  ) : null
                )}
              </div>
            </Grid>
            {/* </Grid>
                </Grid>
              </Grid> */}
          </div>
          <div
            className="col-sm"
            style={{
              paddingLeft: 0,
              display: 'flex',
              flexFlow: 'row wrap',
              alignItems: 'center',
              // marginLeft: -110,
            }}
          >
            <div>
              <Typography style={{ color: '#bdbdbd', fontWeight: 'bold' }}>
                {UI['Description'][language]}:
              </Typography>
              <p
                style={{
                  display: 'inline-block',
                  wordBreak: 'break-word',
                  whiteSpace: 'pre-line',
                  paddingRight: 10,
                }}
              >
                {team.description || 'None'}
              </p>
              <p>
                <span style={{ fontWeight: 'bold', color: '#bdbdbd' }}>
                  {UI['Lucky Skill'][language]}:{' '}
                </span>
                <br />
                {[
                  team.syncPairs.slot1,
                  team.syncPairs.slot2,
                  team.syncPairs.slot3,
                ].map((teamMemberData, index) =>
                  teamMemberData.trainerId ? (
                    <span key={`lucky-skill-${index}`}>
                      {`${
                        syncPairNamesAndIds[teamMemberData.trainerId][
                          'syncPairNameByLanguage'
                        ][language]
                      }${
                        syncPairNamesAndIds[teamMemberData.trainerId][
                          'isEggmon'
                        ]
                          ? ' (' +
                            syncPairNamesAndIds[teamMemberData.trainerId][
                              'roleTypeNameByLanguage'
                            ][language] +
                            ')'
                          : ''
                      }`}
                      :{' '}
                      {LUCKY_SKILL_LIST[teamMemberData.luckySkillIds[0]][
                        language
                      ] || '-'}
                      <br />
                    </span>
                  ) : null
                )}
              </p>

              <Typography style={{ color: '#bdbdbd', fontWeight: 'bold' }}>
                {UI['Tags'][language]}:
              </Typography>
              <div
                style={{
                  display: 'inline-block',
                  wordBreak: 'break-word',
                  whiteSpace: 'pre-line',
                  paddingRight: 10,
                }}
              >
                {team.tags.length !== 0
                  ? team.tags.map((tag, index) => (
                      <Chip
                        key={`tag-${index}`}
                        label={UI[tag] ? UI[tag][language] : tag}
                        size="small"
                        style={{ marginRight: 5 }}
                      />
                    ))
                  : 'None'}
              </div>
              <br />
              <br />
              <p>
                <span style={{ color: '#bdbdbd', fontWeight: 'bold' }}>
                  {UI['Date'][language]}:{' '}
                </span>
                <span>{team.date.substring(0, 10)}</span>
              </p>
            </div>
          </div>
        </div>

        <Comments team={team} classes={classes} />
      </Paper>
    </div>
  );
}

// export default TeamItem;
export default withStyles(styles)(TeamItem);
