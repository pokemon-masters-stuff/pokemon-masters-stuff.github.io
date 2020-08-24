import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SyncGrid from './SyncGrid';
import LoadBuildDropdown from './LoadBuildDropdown';
import SyncLevelDropdown from './SyncLevelDropdown';
import { MovesAndSkillsButtonDesktop } from '../MovesAndSkills';
import { setTeamSyncLevels } from '../../actions/actionCreators';

const TeamMember = (props) => {
  const dispatch = useDispatch();
  const { pokemon, slot } = props;
  const teamSyncLevels = useSelector((state) => state.team.teamSyncLevels);
  const [syncLevel, setSyncLevel] = useState(teamSyncLevels[slot]);

  const handleChangeSyncLevel = (syncLevel) => {
    setSyncLevel(syncLevel);
    dispatch(setTeamSyncLevels({ slot: slot, syncLevel: syncLevel }));
  };

  return (
    <div>
      {/* <MovesAndSkillsButtonDesktop
        pokemon={pokemon}
        slot={slot}
      /> */}
      <SyncLevelDropdown
        syncLevel={syncLevel}
        handleChangeSyncLevel={handleChangeSyncLevel}
      />
      <LoadBuildDropdown {...props} />
      <SyncGrid {...props} syncLevel={syncLevel} />
    </div>
  );
};

export default TeamMember;
