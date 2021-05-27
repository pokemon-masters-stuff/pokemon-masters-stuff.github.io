import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBuild } from '../../actions/actionCreators';
import Alert from '../Alert';
import './desktop.css';
import LuckySkillDropdown from '../LuckySkillDropdown';
import UI from '../../utils/translations';

export default function PublishBuildModal() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  const darkMode = useSelector((state) => state.darkMode.mode);
  const pokemon = useSelector((state) => state.pokemon);
  const grid = useSelector((state) => state.grid);

  const [luckySkillId, setLuckySkillId] = useState('0');
  const [newBuildName, setNewBuildName] = useState('');
  const [newBuildDesc, setNewBuildDesc] = useState('');

  const handleChangeBuildName = (event) => {
    setNewBuildName(event.target.value);
  };
  const handleChangeBuildDesc = (event) => {
    setNewBuildDesc(event.target.value);
  };

  const handleOnPublishBuild = () => {
    if (Object.keys(grid.selectedCellsById).length === 0) {
      alert('You cannot publish an empty grid');
      return;
    }
    if (!newBuildName) {
      alert('Name is required');
      return;
    }
    if (grid.remainingEnergy < 0) {
      alert('You cannot publish a grid that exceeds the energy limit.');
      return;
    }

    let syncLevelForServer;

    if (grid.syncLevel === '1') {
      syncLevelForServer = 1;
    } else if (grid.syncLevel === '2') {
      syncLevelForServer = 2;
    } else {
      syncLevelForServer = 3;
    }

    let data = {
      buildName: newBuildName,
      description: newBuildDesc,
      pokemon: pokemon.selectedPokemon,
      selectedCellsById: grid.selectedCellsById,
      remainingEnergy: grid.remainingEnergy,
      orbSpent: grid.orbSpent,
      url: grid.url,
      syncLevel: syncLevelForServer,
      luckySkillId: luckySkillId,
    };

    dispatch(addBuild(data));
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id="publishBuildModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div
            className={`modal-content ${
              darkMode ? 'text-white bg-dark' : null
            }`}
          >
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">
                {UI['Publish current build'][language]}
              </h4>
            </div>
            <div className="modal-body mx-3">
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control ${
                    darkMode ? 'text-white bg-dark' : null
                  }`}
                  id="name"
                  placeholder={UI['Build name'][language]}
                  // key={`${Math.floor(Math.random() * 1000)}-min`}
                  key="build-name"
                  onChange={handleChangeBuildName}
                  value={newBuildName}
                />
              </div>

              <div className="form-group">
                <textarea
                  type="text"
                  className={`form-control ${
                    darkMode ? 'text-white bg-dark' : null
                  }`}
                  id="desc"
                  placeholder={UI['Build description'][language]}
                  // key={`${Math.floor(Math.random() * 1000)}-min`}
                  key="build-desc"
                  onChange={handleChangeBuildDesc}
                  value={newBuildDesc}
                />
              </div>
              <div className="form-group">
                <LuckySkillDropdown
                  luckySkillId={luckySkillId}
                  setLuckySkillId={setLuckySkillId}
                />
              </div>

              <div className="form-group">{UI['Note'][language]}</div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                className={`btn btn-default ${darkMode ? 'text-white' : null}`}
                onClick={handleOnPublishBuild}
                data-dismiss="modal"
              >
                {UI['Publish'][language]}
              </button>
              <button
                className={`btn btn-default ${darkMode ? 'text-white' : null}`}
                data-dismiss="modal"
              >
                {UI['Close'][language]}
              </button>
            </div>
            <Alert />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
