import React from 'react';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SyncPairNamesAndIds from '../../data/syncPairNamesAndIds.json';

export default function SyncPairNameField(props) {
  const { label, syncPairName, handleOnChange } = props;
  const language = useSelector((state) => state.language.currentLanguage);
  const syncPairNames = Object.keys(SyncPairNamesAndIds[language]);

  const defaultProps = {
    options: syncPairNames.sort(),
    getOptionLabel: (option) => option,
  };

  const [value, setValue] = React.useState(null);

  return (
    <div style={{ width: 250 }}>
      <Autocomplete
        {...defaultProps}
        id={label}
        autoComplete
        includeInputInList
        value={syncPairName}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
        onChange={handleOnChange}
        renderInput={(params) => (
          <TextField {...params} label={label} margin="normal" />
        )}
      />
    </div>
  );
}
