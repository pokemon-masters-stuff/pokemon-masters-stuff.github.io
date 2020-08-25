import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SyncGrid from './SyncGrid';
import LoadBuildDropdown from './LoadBuildDropdown';
import SyncLevelDropdown from './SyncLevelDropdown';
import { MovesAndSkillsButtonMobile } from '../MovesAndSkills';
import { setTeamSyncLevels } from '../../actions/actionCreators';

const TeamMember = (props) => {
  const dispatch = useDispatch();
  const { pokemon, slot } = props;
  const language = useSelector((state) => state.language.currentLanguage);
  const syncLevels = useSelector((state) => state.team.syncLevels);
  const remainingEnergy = useSelector((state) => state.team.remainingEnergy);
  const orbSpent = useSelector((state) => state.team.orbSpent);
  const selectedCellsById = useSelector(
    (state) => state.team.selectedCellsById[slot]
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

  const handleOnOpenMovesAndSkillsModal = () => {
    setIsMovesAndSkillsModalVisible(true);
  };

  return (
    <div style={{ position: 'relative', paddingTop: 5 }}>
      <SyncLevelDropdown
        syncLevel={syncLevel}
        handleChangeSyncLevel={handleChangeSyncLevel}
      />
      <LoadBuildDropdown {...props} />
      <br />
      <div style={{ position: 'absolute', top: 0, right: 0, margin: 10 }}>
        E: {remainingEnergy[slot]}/60
        <br />
        O: {orbSpent[slot]}/750
      </div>

      <div style={{ marginLeft: 8 }}>
        <MovesAndSkillsButtonMobile
          pokemon={pokemon}
          selectedCellsById={selectedCellsById}
          syncLevel={syncLevel}
          language={language}
          isMovesAndSkillsModalVisible={isMovesAndSkillsModalVisible}
          setIsMovesAndSkillsModalVisible={setIsMovesAndSkillsModalVisible}
        />
      </div>

      <SyncGrid {...props} syncLevel={syncLevel} />
    </div>
  );
};

export default TeamMember;
