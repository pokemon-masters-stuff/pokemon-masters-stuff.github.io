import React from 'react';
import { useSelector } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ShareBuildModal = ({ index, url }) => {
  const darkMode = useSelector(state => state.darkMode.mode);

  return (
    <div
      className="modal fade"
      id={`shareLinkModal${index}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div
          className={`modal-content ${darkMode ? 'text-white bg-dark' : null}`}
        >
          <div className="modal-header text-center">
            <h4 className="modal-title w-100 font-weight-bold">
              Share this link
            </h4>
          </div>
          <div className="modal-body mx-3">
            <div className="form-group">
              <input
                type="text"
                className={`form-control ${
                  darkMode ? 'text-white bg-dark' : null
                }`}
                value={url}
                readOnly
              />
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <CopyToClipboard text={url}>
              <button
                className={`btn btn-default ${darkMode ? 'text-white' : null}`}
                data-dismiss="modal"
              >
                Copy to Clipboard
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareBuildModal;
