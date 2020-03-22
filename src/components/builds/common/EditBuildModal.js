import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editBuild } from '../../../actions/actionCreators';

const EditBuildModal = ({ index, description }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.darkMode.mode);
  const [desc, setDesc] = useState(description);

  const onChange = e => {
    setDesc(e.target.value);
  };

  const onSubmit = () => {
    dispatch(editBuild(index, desc));
  };

  return (
    <div
      className="modal fade"
      id={`editLinkModal${index}`}
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
            <h4 className="modal-title w-100 font-weight-bold">
              Edit description
            </h4>
          </div>
          <div className="modal-body mx-3">
            <div className="form-group">
              <textarea
                type="text"
                className={`form-control ${
                  darkMode ? 'text-white bg-dark' : null
                }`}
                id="desc"
                value={desc}
                onChange={onChange}
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

export default EditBuildModal;
