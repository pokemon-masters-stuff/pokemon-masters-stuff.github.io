import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core';
import Alert from '../../Alert';
import styles from './styles';
import { editBuild } from '../../../actions/actionCreators';
import EditSyncLevelDropdown from './EditSyncLevelDropdown';
import LuckySkillDropdown from '../../LuckySkillDropdown';

const EditBuildModal = (props) => {
  const { classes, index, description, syncLevel, luckySkillIds } = props;
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.mode);
  const [desc, setDesc] = useState(description);
  const [syncLv, setSyncLv] = useState(syncLevel);
  const [luckySkill1Id, setLuckySkill1Id] = useState(
    luckySkillIds ? luckySkillIds[0] : '0'
  );

  const handleChangeDesc = (e) => {
    setDesc(e.target.value);
  };

  const onSubmit = () => {
    dispatch(editBuild(index, desc, syncLv, [luckySkill1Id]));
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
            <EditSyncLevelDropdown syncLv={syncLv} setSyncLv={setSyncLv} />

            <LuckySkillDropdown
              luckySkillId={luckySkill1Id}
              setLuckySkillId={setLuckySkill1Id}
            />

            <div className="form-group">
              <textarea
                type="text"
                className={`form-control ${
                  darkMode ? 'text-white bg-dark' : null
                }`}
                id="desc"
                value={desc}
                onChange={handleChangeDesc}
                rows={10}
              />
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button
              className={`btn btn-default ${darkMode ? 'text-white' : null}`}
              onClick={onSubmit}
              // data-dismiss="modal"
            >
              Finish
            </button>
            <button
              className={`btn btn-default ${darkMode ? 'text-white' : null}`}
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
          <Alert />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(EditBuildModal);
