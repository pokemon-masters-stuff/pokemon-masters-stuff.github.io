import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SyncGrid from './SyncGrid';
import ResetIndividualGridButton from './ResetIndividualGridButton';
import LoadIndividualBuildDropdown from './LoadIndividualBuildDropdown';
import SyncLevelDropdown from './SyncLevelDropdown';
import { MovesAndSkillsButtonMobile } from '../MovesAndSkills';
import { setTeamSyncLevels } from '../../actions/actionCreators';

const TeamMemberContainer = (props) => {
  const dispatch = useDispatch();
  const { pokemon, slot } = props;
  const language = useSelector((state) => state.language.currentLanguage);
  const syncLevels = useSelector((state) => state.grid.teamSyncLevels);
  const remainingEnergy = useSelector(
    (state) => state.grid.teamRemainingEnergy
  );
  const orbSpent = useSelector((state) => state.grid.teamOrbSpent);
  const selectedCellsById = useSelector(
    (state) => state.grid.teamSelectedCellsById[slot]
  );
  const [syncLevel, setSyncLevel] = useState(syncLevels[slot]);

  const handleChangeSyncLevel = (syncLevel) => {
    setSyncLevel(syncLevel);
    dispatch(setTeamSyncLevels({ slot: slot, syncLevel: syncLevel }));
  };

  const [
    isMovesAndSkillsModalVisible,
    setIsMovesAndSkillsModalVisible,
  ] = useState(false);

  // const handleOnOpenMovesAndSkillsModal = () => {
  //   setIsMovesAndSkillsModalVisible(true);
  // };
  console.log('slot', slot);

  return (
    <div style={{ position: 'relative', paddingTop: 5 }}>
      <SyncLevelDropdown
        syncLevel={syncLevels[slot]}
        handleChangeSyncLevel={handleChangeSyncLevel}
      />
      <LoadIndividualBuildDropdown {...props} />
      <br />
      <div style={{ position: 'absolute', top: 0, right: 0, margin: 10 }}>
        E: {remainingEnergy[slot]}/60
        <br />
        O: {orbSpent[slot]}/750
      </div>

      <div style={{ marginLeft: 8, marginTop: -7 }}>
        <MovesAndSkillsButtonMobile
          pokemon={pokemon}
          selectedCellsById={selectedCellsById}
          syncLevel={syncLevel}
          language={language}
          isMovesAndSkillsModalVisible={isMovesAndSkillsModalVisible}
          setIsMovesAndSkillsModalVisible={setIsMovesAndSkillsModalVisible}
        />
      </div>
      <div style={{ marginLeft: 8, marginTop: 8 }}>
        <ResetIndividualGridButton slot={slot} />
      </div>
      <div style={{ marginTop: -70 }}>
        <SyncGrid {...props} syncLevel={syncLevel} />
      </div>
    </div>
  );
};

export default TeamMemberContainer;
