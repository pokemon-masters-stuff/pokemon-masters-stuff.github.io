import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
  getPokemonNameList,
  getNewPokemonNameList,
  getPokemonDataByTrainerId,
  getEggPokemonNameList,
} from '../../utils/functions';
import styles from './styles';
import { updateUrl, setSyncLevel } from '../../actions/actionCreators';
import { useSelector, useDispatch } from 'react-redux';
import { pokemonPictures } from '../../images/Pokemon/exportImagesAsObject';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import MenuList from '@material-ui/core/MenuList';
import { typesByLanguage, rolesByLanguage } from '../../utils/constants';
import UI from '../../utils/translations';
import { icons } from '../../images/Icons/exportImagesAsObject';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import syncPairNamesAndIds from '../../data/syncPairNamesAndIds.json';

function SelectPokemonModal(props) {
  const dispatch = useDispatch();
  const {
    classes,
    trainerId,
    onChangeHandler,
    isSelectPokemonModalOpen,
    setIsSelectPokemonModalOpen,
    usedAsFilter,
    isEgg,
  } = props;
  const [role, setRole] = useState('none');
  const [type, setType] = useState(0);
  const language = useSelector((state) => state.language.currentLanguage);
  let syncPairs = Object.values(syncPairNamesAndIds);
  let gridedSyncPairs = [];
  let eggSyncPairs = [];

  syncPairs.forEach((syncPair) => {
    if (syncPair.isGrided) {
      gridedSyncPairs.push(syncPair);
    }
    if (syncPair.isEggmon) {
      eggSyncPairs.push(syncPair);
    }
  });

  let syncPairArray = isEgg ? eggSyncPairs : gridedSyncPairs;

  const handleCloseSelectPokemonModal = (event) => {
    setIsSelectPokemonModalOpen(false);
  };

  const handleChangeRole = (event) => {
    setRole(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleSelectPokemon = (e, trainerId) => {
    if (isEgg) {
      onChangeHandler(trainerId);
      setIsSelectPokemonModalOpen(false);
    } else {
      if (!usedAsFilter) {
        onChangeHandler(trainerId);
        dispatch(updateUrl(trainerId));
        dispatch(setSyncLevel('5'));
        setIsSelectPokemonModalOpen(false);
      }
      if (usedAsFilter) {
        onChangeHandler(trainerId);
        setIsSelectPokemonModalOpen(false);
      }
    }
  };

  return (
    <Dialog
      open={isSelectPokemonModalOpen}
      onClose={handleCloseSelectPokemonModal}
      style={{ zIndex: 2000 }}
    >
      {usedAsFilter ? null : <DialogTitle>Select Pokémon</DialogTitle>}

      <DialogContent>
        <FormControl
          variant="outlined"
          size="small"
          className={classes.formControl}
          color="primary"
        >
          <InputLabel id="select-role">Role</InputLabel>
          <Select
            labelId="select-role"
            onChange={handleChangeRole}
            defaultValue=""
            value={role}
            MenuProps={{
              style: { zIndex: 3000 },
            }}
            style={{ height: 45 }}
          >
            <MenuItem key={`role-none`} value={'none'}>
              —
            </MenuItem>
            {Object.entries(rolesByLanguage).map(([key, value]) => (
              <MenuItem key={`role-${key}`} value={key}>
                {/* {value[language]} */}
                <img
                  // width="20"
                  height="25"
                  src={icons[value['en'].split(' ').join('')]}
                />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          variant="outlined"
          size="small"
          className={classes.formControl}
          color="primary"
        >
          <InputLabel id="select-type">Type</InputLabel>
          <Select
            labelId="select-type"
            onChange={handleChangeType}
            defaultValue=""
            value={type}
            MenuProps={{
              style: { zIndex: 3000 },
            }}
            style={{ height: 45 }}
          >
            {Object.entries(typesByLanguage).map(([key, value]) => (
              <MenuItem key={`type-${key}`} value={key}>
                {/* {value[language]} */}
                {icons[value['en']] ? (
                  <img
                    // width="20"
                    height="25"
                    src={icons[value['en']]}
                  />
                ) : (
                  value[language]
                )}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Autocomplete
          id={`sync-pair-filter`}
          size="small"
          disablePortal
          disableClearable
          value={
            syncPairNamesAndIds[trainerId] ? syncPairNamesAndIds[trainerId] : ''
          }
          options={syncPairArray.sort((a, b) => {
            let x = a['syncPairNameByLanguage'][language];
            let y = b['syncPairNameByLanguage'][language];
            return x < y ? -1 : x > y ? 1 : 0;
          })}
          getOptionLabel={(option) =>
            option['syncPairNameByLanguage']
              ? option.isEggmon
                ? `${option['syncPairNameByLanguage'][language]} (${option['roleTypeNameByLanguage'][language]})`
                : option['syncPairNameByLanguage'][language]
              : ''
          }
          autoComplete
          includeInputInList
          onChange={(event, value) =>
            handleSelectPokemon(event, value ? value.trainerId : trainerId)
          }
          renderInput={(params) => (
            <TextField
              style={{ left: 10, width: '90%' }}
              {...params}
              margin="normal"
              placeholder={UI['Sync Pair'][language]}
            />
          )}
        />

        <MenuList>
          {usedAsFilter ? (
            <MenuItem
              key="None"
              onClick={(e) => handleSelectPokemon(e, 'None')}
            >
              {`----- (${UI['Reset'][language]})`}
            </MenuItem>
          ) : null}

          {!isEgg ? (
            <div>
              <ListSubheader disableSticky={true}>New</ListSubheader>
              {getNewPokemonNameList(language, role, type).map(
                (syncPairData, index) => (
                  <MenuItem
                    key={index}
                    onClick={(e) =>
                      handleSelectPokemon(e, syncPairData.trainerId)
                    }
                  >
                    <>
                      <img
                        width="40"
                        height="40"
                        src={
                          pokemonPictures[
                            getPokemonDataByTrainerId(syncPairData.trainerId)
                              .monsterActorId + '_128'
                          ]
                        }
                      />
                      &nbsp;
                    </>
                    {syncPairData.value}
                  </MenuItem>
                )
              )}
              <ListSubheader disableSticky={true}>All</ListSubheader>

              {getPokemonNameList(language, role, type).map(
                (syncPairData, index) => (
                  <MenuItem
                    key={index}
                    onClick={(e) =>
                      handleSelectPokemon(e, syncPairData.trainerId)
                    }
                  >
                    <div>
                      <img
                        width="40"
                        height="40"
                        src={
                          pokemonPictures[
                            getPokemonDataByTrainerId(syncPairData.trainerId)
                              .monsterActorId + '_128'
                          ]
                        }
                      />
                      &nbsp;
                    </div>
                    {syncPairData.value}
                  </MenuItem>
                )
              )}
            </div>
          ) : (
            <div>
              {getEggPokemonNameList(language, role, type).map(
                (syncPairData, index) => (
                  <MenuItem
                    key={index}
                    onClick={(e) =>
                      handleSelectPokemon(e, syncPairData.trainerId)
                    }
                  >
                    {syncPairData.value}
                  </MenuItem>
                )
              )}
            </div>
          )}
        </MenuList>
      </DialogContent>
    </Dialog>
  );
}

export default withStyles(styles)(SelectPokemonModal);
