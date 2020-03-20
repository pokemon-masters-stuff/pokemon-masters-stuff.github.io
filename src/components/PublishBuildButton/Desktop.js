import React, { Fragment, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBuild } from '../../actions/actionCreators';
import Alert from '../Alert';
import './desktop.css';
import LoginOrRegisterModal from '../auth/LoginOrRegisterModal';

export default function PublishBuildButton() {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.darkMode.mode);
  const pokemon = useSelector(state => state.pokemon);
  const grid = useSelector(state => state.grid);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
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
      url: grid.url
    };
    dispatch(addBuild(data));
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={
          isAuthenticated ? '#publishBuildModal' : '#loginOrRegisterModal'
        }
        style={{ position: 'relative', zIndex: 999 }}
      >
        Publish
      </button>
      <LoginOrRegisterModal />

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
                Publish current build
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
                  placeholder="Build name"
                  key={`${Math.floor(Math.random() * 1000)}-min`}
                  defaultValue=""
                  ref={newBuildNameRef}
                />
              </div>

              <div className="form-group">
                <textarea
                  type="text"
                  className={`form-control ${
                    darkMode ? 'text-white bg-dark' : null
                  }`}
                  id="desc"
                  placeholder="Build description (Optional. Can be edited later.)"
                  key={`${Math.floor(Math.random() * 1000)}-min`}
                  defaultValue=""
                  ref={newBuildDescRef}
                />
              </div>
              <div className="form-group">
                Note: Once a build is published, You will only be able to edit
                its description.
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                className={`btn btn-default ${darkMode ? 'text-white' : null}`}
                onClick={handleOnPublishBuild}
                data-dismiss="modal"
              >
                Publish
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
    </Fragment>
  );
}
