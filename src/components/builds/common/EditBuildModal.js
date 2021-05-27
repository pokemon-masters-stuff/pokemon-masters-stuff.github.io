import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { editBuild } from '../../../actions/actionCreators';
import LuckySkillDropdown from '../../LuckySkillDropdown';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const EditBuildModal = (props) => {
  const { classes, index, description, syncLevel, luckySkillId } = props;
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.mode);
  const [desc, setDesc] = useState(description);
  const [syncLv, setSyncLv] = useState(syncLevel);
  const [luckySkill, setLuckySkill] = useState(luckySkillId);

  const handleChangeDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleChangeSyncLv = (event) => {
    console.log('event', event.target.value);
    if (event.target.value) {
      console.log('event.target.value', event.target.value);
      setSyncLv(event.target.value);
    }
  };

  const onSubmit = () => {
    dispatch(editBuild(index, desc, syncLv, luckySkill));
  };

  return (
    <div
      className="modal fade"
      id={`editBuildModal${index}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
      style={{ zIndex: 4000 }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div
          className={`modal-content ${darkMode ? 'text-white bg-dark' : null}`}
        >
          <div className="modal-header text-center">
            <h4 className="modal-title w-100 font-weight-bold">Edit</h4>
          </div>
          <div className="modal-body mx-3">
            <FormControl
              variant="outlined"
              size="small"
              className={classes.formControl}
              color="primary"
            >
              <InputLabel id="syncLv">Sync</InputLabel>
              <Select
                value={syncLv}
                labelId="syncLv"
                onChange={handleChangeSyncLv}
              >
                <MenuItem key={3} value={'3'}>
                  3+
                </MenuItem>
                <MenuItem key={2} value={'2'}>
                  2
                </MenuItem>
                <MenuItem key={1} value={'1'}>
                  1
                </MenuItem>
              </Select>
            </FormControl>

            <LuckySkillDropdown
              luckySkillId={luckySkill}
              setLuckySkillId={setLuckySkill}
            />

            <div className="form-group">
              <p>Edit Description:</p>
              <textarea
                type="text"
                className={`form-control ${
                  darkMode ? 'text-white bg-dark' : null
                }`}
                id="desc"
                value={desc}
                onChange={handleChangeDesc}
                rows={12}
              />
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button
              className={`btn btn-default ${darkMode ? 'text-white' : null}`}
              onClick={onSubmit}
              data-dismiss="modal"
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(EditBuildModal);
