import React, { Fragment, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  saveCurrentBuild,
  deleteSelectedBuild,
} from '../../actions/actionCreators';
import UI from '../../utils/translations';
import './desktop.css';

export default function SaveBuildButton() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  const darkMode = useSelector((state) => state.darkMode.mode);
  const pokemon = useSelector((state) => state.pokemon);
  const savedBuilds = useSelector((state) =>
    state.grid.savedBuilds.allIds.map((id) => state.grid.savedBuilds.byIds[id])
  );
  const newBuildNameRef = useRef(null);

  const handleOnSaveBuild = () => {
    let userConfirmation = true;
    if (newBuildNameRef.current.value) {
      // If already have a save with the same name, delete old save
      for (let build in savedBuilds) {
        if (
          savedBuilds[build].name === newBuildNameRef.current.value &&
          savedBuilds[build].pokemon === pokemon.selectedPokemon
        ) {
          userConfirmation = window.confirm(
            'There is a save with the same name. Do you wish to overwrite it?'
          );
          userConfirmation &&
            dispatch(
              deleteSelectedBuild({
                buildId: savedBuilds[build].id,
              })
            );
        }
      }
      userConfirmation &&
        dispatch(
          saveCurrentBuild({
            selectedPokemon: pokemon.selectedPokemon,
            buildName: newBuildNameRef.current.value,
          })
        );
    } else alert('Please enter a name');
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#saveBuildModal"
        style={{ position: 'relative', zIndex: 999 }}
      >
        {UI['Save Build'][language]}
      </button>

      <div
        className="modal fade"
        id="saveBuildModal"
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
                {UI['Save Build'][language]}
              </h4>
            </div>
            <div className="modal-body mx-3">
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control ${
                    darkMode ? 'text-white bg-dark' : null
                  }`}
                  id="save"
                  placeholder={UI['Build name'][language]}
                  key={`${Math.floor(Math.random() * 1000)}-min`}
                  defaultValue=""
                  ref={newBuildNameRef}
                />
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                className={`btn btn-default ${darkMode ? 'text-white' : null}`}
                onClick={handleOnSaveBuild}
                data-dismiss="modal"
              >
                {UI['Save'][language]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
