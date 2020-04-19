import React from 'react';
import { useSelector } from 'react-redux';
import UI from '../../utils/translations';

export default function AnnouncementModal() {
  const darkMode = useSelector((state) => state.darkMode.mode);
  const language = useSelector((state) => state.language.currentLanguage);

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
              {UI['Announcements'][language]}
            </h4>
          </div>
          <div className="modal-body mx-3">
            4/19/2020:
            <br />
            <br />
            Added multi-language support for UI. Credit to Jo from Discord for
            the Italian translations. He also abbreviated all the Italian skill
            names. It was a lot of work so many thanks to him!
            <br />
            <br />
            For the other languages I relied on Google Translate. If you see any
            mistranslation, you can help me correct it by editing this Google
            Doc:
            <br />
            https://docs.google.com/document/d/19HZYH4QvrnB-G52n18igDVOWtJKgvJUCxTk3v7Y6gEU/edit?usp=sharing
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <a
              href="https://docs.google.com/document/d/19HZYH4QvrnB-G52n18igDVOWtJKgvJUCxTk3v7Y6gEU/edit?usp=sharing"
              target="_blank"
            >
              Open link in new tab
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
