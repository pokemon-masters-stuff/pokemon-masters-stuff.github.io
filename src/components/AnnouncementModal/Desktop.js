import React from 'react';
import { useSelector } from 'react-redux';

export default function AnnouncementModal() {
  const darkMode = useSelector(state => state.darkMode.mode);
  return (
    <div
      className="modal fade"
      id="announcementModal"
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
            <h4 className="modal-title w-100 font-weight-bold">Announcement</h4>
          </div>
          <div className="modal-body mx-3">
            <ol>
              <li>Fixed crashing issues</li>
              <li>Shortened url links (old links still compatible)</li>
            </ol>
          </div>
          {/* <div className="modal-footer d-flex justify-content-center">
            <a href="https://pokemon-masters-stuff.herokuapp.com/">
              Go To This Link
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
