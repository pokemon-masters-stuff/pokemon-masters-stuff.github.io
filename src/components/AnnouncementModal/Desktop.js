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
            <h4 className="modal-title w-100 font-weight-bold">
              Announcements
            </h4>
          </div>
          <div className="modal-body mx-3">
            3/29/2020:
            <br />
            Added multi-language support for Skill Names and Skill Descriptions.
            Still need to work on skill name abbreviations but I need help on
            that. If you believe you can help please send me a feedback with
            your contact info so I can get in touch with you. Thanks in advance!
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
