import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../../../actions/actionCreators';
import UI from '../../../utils/translations';

const AddCommentModal = ({ index }) => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  const darkMode = useSelector((state) => state.darkMode.mode);
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    dispatch(addComment(index, text));
    setText('');
  };

  return (
    <div
      className="modal fade"
      id={`addComment${index}`}
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
              {UI['Add a comment'][language]}
            </h4>
          </div>
          <div className="modal-body mx-3">
            <div className="form-group">
              <textarea
                type="text"
                className={`form-control ${
                  darkMode ? 'text-white bg-dark' : null
                }`}
                id="text"
                value={text}
                onChange={onChange}
                rows={6}
              />
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button
              className={`btn btn-default ${darkMode ? 'text-white' : null}`}
              onClick={onSubmit}
              data-dismiss="modal"
            >
              {UI['Submit'][language]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCommentModal;
