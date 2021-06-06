import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTeam } from '../../actions/actionCreators';
import Alert from '../Alert';
import './desktop.css';
import LuckySkillDropdown from '../LuckySkillDropdown';
import UI from '../../utils/translations';
import { getPokemonDataByTrainerId } from '../../utils/functions';

export default function PublishTeamModal() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  const darkMode = useSelector((state) => state.darkMode.mode);
  const trainerId = useSelector((state) => state.id.trainerId);
  // const pokemon = useSelector((state) => state.pokemon);
  const grid = useSelector((state) => state.grid);
  const syncPair =
    getPokemonDataByTrainerId(trainerId).syncPairNameByLanguage['en'];

  const [luckySkill1Id, setLuckySkill1Id] = useState('0');
  const [newTeamName, setNewTeamName] = useState('');
  const [newTeamDesc, setNewTeamDesc] = useState('');

  const handleChangeTeamName = (event) => {
    setNewTeamName(event.target.value);
  };
  const handleChangeTeamDesc = (event) => {
    setNewTeamDesc(event.target.value);
  };

  const handleOnPublishTeam = () => {
    if (Object.keys(grid.selectedCellsById).length === 0) {
      alert('You cannot publish an empty grid');
      return;
    }
    if (!newTeamName) {
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
      teamName: newTeamName,
      description: newTeamDesc,
      // to add trainerId here
      trainerId: trainerId,
      // pokemon: pokemon.selectedPokemon,
      syncPair: syncPair,
      selectedCellsById: grid.selectedCellsById,
      remainingEnergy: grid.remainingEnergy,
      orbSpent: grid.orbSpent,
      url: grid.url,
      syncLevel: syncLevelForServer,
      luckySkillIds: [luckySkill1Id],
    };

    dispatch(addTeam(data));
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id="publishTeamModal"
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
                {UI['Publish current team'][language]}
              </h4>
            </div>
            <div className="modal-body mx-3">
              {/* <div className="alert alert-info" role="alert">
                This function is temporarily disabled to allow for a feature
                update. Please check back later.
              </div> */}

              <div className="form-group">
                <input
                  type="text"
                  className={`form-control ${
                    darkMode ? 'text-light bg-secondary' : null
                  }`}
                  disabled
                  id="syncLevel"
                  placeholder={UI['Sync Move Level'][language]}
                  key="team-sync-level"
                  value={`${UI['Sync Move Level'][language]}: ${
                    Number(grid.syncLevel) < 3 ? grid.syncLevel : '3+'
                  }`}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className={`form-control ${
                    darkMode ? 'text-white bg-dark' : null
                  }`}
                  id="name"
                  placeholder={UI['Team name'][language]}
                  key="team-name"
                  onChange={handleChangeTeamName}
                  value={newTeamName}
                />
              </div>

              <div className="form-group">
                <textarea
                  type="text"
                  className={`form-control ${
                    darkMode ? 'text-white bg-dark' : null
                  }`}
                  id="desc"
                  placeholder={UI['Team description'][language]}
                  key="team-desc"
                  onChange={handleChangeTeamDesc}
                  value={newTeamDesc}
                />
              </div>
              <div className="form-group">
                <LuckySkillDropdown
                  luckySkillId={luckySkill1Id}
                  setLuckySkillId={setLuckySkill1Id}
                />
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                className={`btn btn-default ${darkMode ? 'text-white' : null}`}
                onClick={handleOnPublishTeam}
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
