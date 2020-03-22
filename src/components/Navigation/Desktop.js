import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FeedbackFormDesktop } from '../FeedbackForm';
import { AnnouncementModalDesktop } from '../AnnouncementModal';
import Logout from '../auth/Logout';
import LoginOrRegisterModal from '../auth/LoginOrRegisterModal';

const Navigation = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
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
              Announcement
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
                  Popular Builds
                </Link>
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-dark"
                data-toggle="modal"
                data-target="#loginOrRegisterModal"
              >
                Popular Builds
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
          Submit Feedback
        </button>
        <FeedbackFormDesktop />
        {isAuthenticated ? (
          <Logout />
        ) : (
          <Fragment>
            <button
              type="button"
              className="btn btn-dark"
              id="feedback-button"
              data-toggle="modal"
              data-target="#registerModal"
            >
              Register
            </button>
            <button
              type="button"
              className="btn btn-dark"
              id="feedback-button"
              data-toggle="modal"
              data-target="#loginModal"
            >
              Login
            </button>
          </Fragment>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
