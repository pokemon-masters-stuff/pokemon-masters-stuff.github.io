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
            <p>
              Several users reported continuous crashes when selecting cells.
              I'm still looking into the causes but I suspect it is related to
              the Share feature.{' '}
            </p>
            <p>
              I created a test branch where the Share feature is disabled and
              deployed it on Heroku. Please try out the link below and let me
              know if the issue goes away. Thank you.
            </p>
            https://pokemon-masters-stuff.herokuapp.com/
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <a href="https://pokemon-masters-stuff.herokuapp.com/">
              Go To This Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
