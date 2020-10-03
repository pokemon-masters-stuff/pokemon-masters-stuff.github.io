import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SyncPairNamesAndIds from '../../../data/syncPairNamesAndIds.json';
import { changeGender } from '../../../actions/actionCreators';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: 3,
    marginTop: 15,
    height: 300,
    width: 110,
    position: 'relative',
    display: 'inline-block',
  },
  fab: {
    color: 'primary',
    position: 'absolute',
    top: 2,
    right: 2,
    label: 'Gender',
  },
}));

function SyncPairCard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  const { teamMemberData, index, syncPairName, handleOnChange } = props;
  const syncPairNames = Object.keys(SyncPairNamesAndIds[language]);
  const gender = useSelector((state) => state.gender.selectedGender);

  const [
    isSelectSyncPairModalVisible,
    setIsSelectSyncPairModalVisible,
  ] = useState(false);

  const handleOnCloseSelectSyncPairModal = () => {
    setIsSelectSyncPairModalVisible(false);
  };

  const onClickCard = () => {
    setIsSelectSyncPairModalVisible(true);
  };

  const handleOnChangeSyncPair = (e, newValue) => {
    handleOnChange(e, newValue, `slot${index + 1}`);
    setIsSelectSyncPairModalVisible(false);
  };

  const defaultProps = {
    options: syncPairNames.sort(),
    getOptionLabel: (option) => option,
  };

  let trainerActorId = teamMemberData ? teamMemberData.trainerActorId : '';
  if (gender === 'Female' && trainerActorId === 'hero') {
    trainerActorId = 'heroine';
  }

  const onChangeGender = () => {
    dispatch(changeGender());
  };

  return (
    <Fragment>
      <Card className={classes.card} position="relative" variant="outlined">
        {trainerActorId === 'hero' || trainerActorId === 'heroine' ? (
          <Fab
            aria-label={'Gender'}
            className={classes.fab}
            variant="round"
            size="small"
            onClick={onChangeGender}
            style={{ zIndex: 9999 }}
          >
            <RefreshIcon />
          </Fab>
        ) : null}

        <CardActionArea onClick={onClickCard}>
          {teamMemberData ? (
            <div>
              <CardMedia
                component="img"
                alt="Trainer Image"
                height="250"
                image={`https://pokemonmasters.s3.us-east-2.amazonaws.com/Trainer/256px/${trainerActorId}_256.ktx.png`}
                title="Trainer Image"
                position="absolute"
              />
              <div
                style={{
                  top: 0,
                  left: 0,
                  position: 'absolute',
                  zIndex: 30,
                }}
              >
                <svg style={{ height: 300 }}>
                  <circle
                    cx="65"
                    cy="235"
                    r="40"
                    stroke="white"
                    strokeWidth="10"
                    fillOpacity="0"
                  />
                </svg>
              </div>
              <div
                style={{
                  top: 0,
                  left: 0,
                  position: 'absolute',
                  zIndex: 10,
                }}
              >
                <svg style={{ height: 300 }}>
                  <polygon
                    points="-10 260 130 220 130 310 -10 310"
                    stroke="white"
                    strokeWidth="10"
                    fill="grey"
                  />
                  <circle
                    cx="65"
                    cy="235"
                    r="40"
                    stroke="white"
                    strokeWidth="0"
                    fill="grey"
                  />
                </svg>
              </div>
              <div
                style={{
                  top: 209,
                  left: 35,
                  position: 'absolute',
                  zIndex: 20,
                }}
              >
                <img
                  src={`https://pokemonmasters.s3.us-east-2.amazonaws.com/Monster/128px/${teamMemberData.monsterActorId}_128.ktx.png`}
                  style={{ height: 60 }}
                />
              </div>
            </div>
          ) : (
            <div>
              <CardMedia
                component="img"
                alt="Trainer Image"
                height="250"
                image={
                  'https://pokemonmasters.s3.us-east-2.amazonaws.com/Trainer/256px/empty_256.png'
                }
                title="Trainer Image"
                position="absolute"
              />
              <div
                style={{
                  top: 0,
                  left: 0,
                  position: 'absolute',
                  zIndex: 30,
                }}
              >
                <svg style={{ height: 300 }}>
                  <circle
                    cx="65"
                    cy="235"
                    r="39"
                    stroke="white"
                    strokeWidth="10"
                    fillOpacity="0"
                  />
                </svg>
              </div>
              <div
                style={{
                  top: 0,
                  left: 0,
                  position: 'absolute',
                  zIndex: 10,
                }}
              >
                <svg style={{ height: 300 }}>
                  <polygon
                    points="-10 260 130 220 130 310 -10 310"
                    stroke="white"
                    strokeWidth="10"
                    fill="grey"
                  />
                  <circle
                    cx="65"
                    cy="235"
                    r="39"
                    stroke="white"
                    strokeWidth="0"
                    fill="grey"
                  />
                </svg>
              </div>
            </div>
          )}
        </CardActionArea>
      </Card>

      <Dialog
        open={isSelectSyncPairModalVisible}
        onClose={handleOnCloseSelectSyncPairModal}
        fullWidth={true}
        maxWidth={'xs'}
      >
        <DialogTitle style={{ textAlign: 'center' }}>
          {/* {UI['Language'][language]} */}
          Select Sync Pair
        </DialogTitle>
        <DialogContent dividers>
          <Autocomplete
            {...defaultProps}
            id={syncPairName}
            autoComplete
            includeInputInList
            value={syncPairName}
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
            onChange={handleOnChangeSyncPair}
            renderInput={(params) => <TextField {...params} margin="normal" />}
          />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}

export default SyncPairCard;
