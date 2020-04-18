import React, { Fragment, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBuild } from '../../actions/actionCreators';
import Alert from '../Alert';
import './desktop.css';
import Button from '@material-ui/core/Button';
import UI from '../../utils/translations';

const PublishBuildButton = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  const darkMode = useSelector((state) => state.darkMode.mode);
  const pokemon = useSelector((state) => state.pokemon);
  const grid = useSelector((state) => state.grid);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const newBuildNameRef = useRef(null);
  const newBuildDescRef = useRef(null);

  const handleOnPublishBuild = () => {
    if (Object.keys(grid.selectedCellsById).length === 0) {
      alert('You cannot publish an empty grid');
      return;
    }
    if (!newBuildNameRef.current.value) {
      alert('Name is required');
      return;
    }
    let data = {
      buildName: newBuildNameRef.current.value,
      description: newBuildDescRef.current.value,
      pokemon: pokemon.selectedPokemon,
      selectedCellsById: grid.selectedCellsById,
      remainingEnergy: grid.remainingEnergy,
      orbSpent: grid.orbSpent,
      url: grid.url,
    };
    dispatch(addBuild(data));
  };

  return (
    <Fragment>
      <Button
        variant="outlined"
        data-toggle="modal"
        data-target={
          isAuthenticated ? '#publishBuildModal' : '#loginOrRegisterModal'
        }
      >
        {UI['Publish this build'][language]}
      </Button>
      <div
        className="modal fade"
        id="publishBuildModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
        style={{ zIndex: 2000 }}
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
                  key={`${Math.floor(Math.random() * 1000)}-min`}
                  defaultValue=""
                  ref={newBuildNameRef}
                />
              </div>

              <div className="form-group">
                <textarea
                  rows="5"
                  type="text"
                  className={`form-control ${
                    darkMode ? 'text-white bg-dark' : null
                  }`}
                  id="desc"
                  placeholder={UI['Build description'][language]}
                  key={`${Math.floor(Math.random() * 1000)}-min`}
                  defaultValue=""
                  ref={newBuildDescRef}
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
};

export default PublishBuildButton;
