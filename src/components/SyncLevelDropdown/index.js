import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { setSyncLevel, updateUrl } from '../../actions/actionCreators';
import SyncLevelDropdownFormControl from './SyncLevelDropdown';

function SyncLevelDropdown(props) {
  const dispatch = useDispatch();

  const syncLevel = useSelector((state) => state.grid.syncLevel);
  const trainerId = useSelector((state) => state.id.trainerId);

  const handleChangeSyncLevel = (event) => {
    dispatch(setSyncLevel(event.target.value));
    dispatch(updateUrl(trainerId));
  };

  return (
    <SyncLevelDropdownFormControl
      syncLevel={syncLevel}
      handleChangeSyncLevel={handleChangeSyncLevel}
    />
  );
}

export default withStyles(styles)(SyncLevelDropdown);
