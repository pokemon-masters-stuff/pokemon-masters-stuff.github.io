import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveCurrentBuild } from '../../actions/actionCreators';
import './desktop.css';

class SaveBuildButton extends Component {
  constructor(props) {
    super(props);
    this.newBuildNameRef = React.createRef();
  }

  handleOnSaveBuild = () => {
    this.props.saveCurrentBuild({
      selectedPokemon: this.props.pokemon.selectedPokemon,
      buildName: this.newBuildNameRef.value
    });
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#saveBuildModal"
        >
          Save Build
        </button>

        <div
          className="modal fade"
          id="saveBuildModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">
                  Save a new build
                </h4>
              </div>
              <div className="modal-body mx-3">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="save"
                    placeholder="Build name"
                    ref={this.newBuildNameRef}
                  />
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button
                  className="btn btn-default"
                  onClick={this.handleOnSaveBuild}
                  data-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  pokemon: state.pokemon,
  grid: state.grid,
  savedBuilds: state.grid.savedBuilds.allIds.map(
    id => state.grid.savedBuilds.byIds[id]
  )
});

export default connect(mapStateToProps, { saveCurrentBuild })(SaveBuildButton);
