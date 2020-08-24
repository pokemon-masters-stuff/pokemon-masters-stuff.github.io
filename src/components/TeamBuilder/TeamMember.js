import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SyncGrid from './SyncGrid';
import LoadBuildDropdown from './LoadBuildDropdown';
import SyncLevelDropdown from './SyncLevelDropdown';
import { setTeamSyncLevels } from '../../actions/actionCreators';

const TeamMember = (props) => {
  const dispatch = useDispatch();
  const teamSyncLevels = useSelector((state) => state.team.teamSyncLevels);
  const [syncLevel, setSyncLevel] = useState(teamSyncLevels[props.slot]);

  const handleChangeSyncLevel = (syncLevel) => {
    setSyncLevel(syncLevel);
    dispatch(setTeamSyncLevels({ slot: props.slot, syncLevel: syncLevel }));
  };

  return (
    <div>
      <SyncLevelDropdown
        {...props}
        syncLevel={syncLevel}
        handleChangeSyncLevel={handleChangeSyncLevel}
      />
      <LoadBuildDropdown {...props} />
      <SyncGrid {...props} syncLevel={syncLevel} />
    </div>
  );
};

export default TeamMember;
