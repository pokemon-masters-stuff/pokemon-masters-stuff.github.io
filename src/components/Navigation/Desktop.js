import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FeedbackFormDesktop } from '../FeedbackForm';
import { AnnouncementModalDesktop } from '../AnnouncementModal';
import { ContributeModalDesktop } from '../ContributeModal';
import Logout from '../auth/Logout';
import LoginOrRegisterModal from '../auth/LoginOrRegisterModal';
import { LanguageDropdownDesktop } from '../LanguageDropdown';
import UI from '../../utils/translations';

const Navigation = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const language = useSelector((state) => state.language.currentLanguage);
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container container-s">
        <span className="navbar-brand mb-0 h1">
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            Sync Grid Helper
          </Link>
        </span>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <button
              type="button"
              className="btn btn-dark"
              id="announcement-button"
              data-toggle="modal"
              data-target="#announcementModal"
            >
              {UI['Announcements'][language]}
            </button>
            <AnnouncementModalDesktop />
          </li>
          <li className="nav-item active">
            {isAuthenticated ? (
              <button type="button" className="btn btn-dark">
                <Link
                  to="/builds/popular"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  {UI['Popular Builds'][language]}
                </Link>
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-dark"
                data-toggle="modal"
                data-target="#loginOrRegisterModal"
              >
                {UI['Popular Builds'][language]}
              </button>
            )}
            <LoginOrRegisterModal />
          </li>
        </ul>
        <button
          type="button"
          className="btn btn-dark"
          id="feedback-button"
          data-toggle="modal"
          data-target="#feedbackModal"
        >
          {UI['Submit Feedback'][language]}
        </button>

        <button
          type="button"
          className="btn btn-dark"
          id="contribute-button"
          data-toggle="modal"
          data-target="#contributeModal"
        >
          {UI['Contribute'][language]}
        </button>
        <ContributeModalDesktop />

        <LanguageDropdownDesktop />
        <FeedbackFormDesktop />
        {isAuthenticated ? (
          <Logout />
        ) : (
          <Fragment>
            <button
              type="button"
              className="btn btn-dark"
              id="register-button"
              data-toggle="modal"
              data-target="#registerModal"
            >
              {UI['Register'][language]}
            </button>
            <button
              type="button"
              className="btn btn-dark"
              id="login-button"
              data-toggle="modal"
              data-target="#loginModal"
            >
              {UI['Login'][language]}
            </button>
          </Fragment>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
