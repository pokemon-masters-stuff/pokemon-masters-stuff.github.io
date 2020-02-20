import React from 'react';
import { useDispatch } from 'react-redux';
import { resetGrids } from '../../actions/actionCreators';
import './desktop.css';

const SaveBuildButton = () => {
  //   const [isSaveBuildModalVisible, setIsSaveBuildModalVisible] = React.useState(
  //     false
  //   );

  const dispatch = useDispatch();

  const handleOnClick = () => dispatch(resetGrids());

  //   const handleOnOpenSaveBuildModal = () =>
  //     setIsSaveBuildModalVisible({ isSaveBuildModalVisible: true });

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        id="feedback-button"
        data-toggle="modal"
        data-target="#saveBuildModal"
      >
        Save Build
      </button>

      <div
        class="modal fade"
        id="saveBuildModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h4 class="modal-title w-100 font-weight-bold">
                Save a new build
              </h4>
            </div>
            <div class="modal-body mx-3">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="save"
                  placeholder="Build name"
                />
              </div>
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <button class="btn btn-default">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveBuildButton;
