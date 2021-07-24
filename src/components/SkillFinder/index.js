import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import movesAndPassives from '../../data/movesAndPassives.json';
import Grid from '@material-ui/core/Grid';
import SyncGridContainer from '../teams/common/SyncGridContainer';
import { allSyncGrids } from '../../data/exportGridsAsObject';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const SkillFinder = (props) => {
  const { classes, screenSize } = props;
  const language = useSelector((state) => state.language.currentLanguage);
  const [skill, setSkill] = useState(null);

  let skills = Object.values(movesAndPassives);

  const handleOnChangeSkill = async (e, newValue) => {
    if (newValue) {
      await setSkill(newValue);
    } else {
      await setSkill(null);
    }
  };

  const renderSyncGridContainer = (trainer, index) => {
    let syncPairData = {
      trainerId: trainer.trainerId,
      syncLevel: 5,
      selectedCellsById: {},
      remainingEnergy: 60,
      orbSpent: 0,
      isEX: false,
    };

    let showGrid = false;

    syncPairData.trainerId = trainer.trainerId;
    if (trainer.grid) {
      showGrid = true;
      let selectedCellById = {};
      let updatedSelectedCellsById = {};

      allSyncGrids[language][
        `trainerId_${trainer.trainerId}_GridData${language.toUpperCase()}`
      ].map((cellData) => {
        if (
          cellData.ability.abilityId.toString() === skill.skillId.toString()
        ) {
          selectedCellById = {
            cellId: cellData.cellId,
            name: cellData.move.name,
            description: cellData.move.description,
            energy: cellData.move.energyCost,
            moveId: cellData.ability.moveId,
            passiveId: cellData.ability.passiveId,
            value: cellData.ability.value,
            type: cellData.ability.type,
          };
          updatedSelectedCellsById = {
            ...updatedSelectedCellsById,
            [cellData.cellId]: selectedCellById,
          };
          syncPairData.selectedCellsById = updatedSelectedCellsById;
        } else if (
          cellData.ability.passiveId.toString() === skill.skillId.toString()
        ) {
          selectedCellById = {
            cellId: cellData.cellId,
            name: cellData.move.name,
            description: cellData.move.description,
            energy: cellData.move.energyCost,
            moveId: cellData.ability.moveId,
            passiveId: cellData.ability.passiveId,
            value: cellData.ability.value,
            type: cellData.ability.type,
          };
          updatedSelectedCellsById = {
            ...updatedSelectedCellsById,
            [cellData.cellId]: selectedCellById,
          };
          syncPairData.selectedCellsById = updatedSelectedCellsById;
        }
      });
    }

    return (
      <div
        key={`sync-grid-container-${index + 1}`}
        style={{
          width: '100%',
          marginTop: 1,
        }}
      >
        <Grid item key={index}>
          <SyncGridContainer
            teamMemberData={syncPairData}
            showGrid={showGrid}
            isSkillFinder={true}
          />
        </Grid>
      </div>
    );
  };

  return (
    <>
      <div
        style={{
          paddingTop: 20,
          marginBottom: 30,
          paddingBottom: 30,
          width: '80%',
          margin: 'auto',
          maxWidth: 600,
        }}
      >
        <Autocomplete
          id={`skill-finder`}
          options={skills.sort((a, b) => {
            let x = a['skillNameByLanguage'][language];
            let y = b['skillNameByLanguage'][language];
            return x < y ? -1 : x > y ? 1 : 0;
          })}
          getOptionLabel={(option) =>
            option['skillNameByLanguage']
              ? `${option['skillNameByLanguage'][language]}`
              : ''
          }
          autoComplete
          includeInputInList
          onChange={handleOnChangeSkill}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <>
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                    {params.InputProps.startAdornment}
                  </>
                ),
              }}
              margin="normal"
              placeholder={`eg. ${movesAndPassives['16010501']['skillNameByLanguage'][language]}`}
            />
          )}
        />
      </div>
      <div
        style={
          screenSize === 'small' ? null : { maxWidth: 600, margin: 'auto' }
        }
      >
        <Grid item xs={12}>
          <Grid container justify="center" spacing={0}>
            {skill
              ? skill.trainers
                ? Object.values(skill.trainers).map((trainer, index) =>
                    renderSyncGridContainer(trainer, index)
                  )
                : null
              : null}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default withStyles(styles)(SkillFinder);
