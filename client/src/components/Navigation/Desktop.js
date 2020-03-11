import React from 'react';
import { Link } from 'react-router-dom';
import { FeedbackFormDesktop } from '../../components/FeedbackForm';
import { AnnouncementModalDesktop } from '../../components/AnnouncementModal';

const Navigation = () => {
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
            <button type="button" className="btn btn-dark">
              <Link
                to="/builds"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Popular Builds
              </Link>
            </button>
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
      </div>
    </nav>
  );
};

export default Navigation;
