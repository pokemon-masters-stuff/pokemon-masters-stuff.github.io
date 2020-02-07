import React, { Component } from 'react';
import ReactGA from 'react-ga';

import SyncGrids from '../../components/SyncGrids';
import ActiveGridList from '../../components/ActiveGridList';
import { FeedbackFormDesktop } from '../../components/FeedbackForm';

class DesktopLayout extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container container-s">
            <span className="navbar-brand mb-0 h1">Sync Grid Helper</span>

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
        <div className="content">
          <div className="container container-s">
            <div className="row">
              <div className="col-sm-8">
                <div style={{ marginTop: 24 }}>
                  <SyncGrids />
                </div>
              </div>
              <div className="col-sm-4 position-static mt-5">
                <ActiveGridList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DesktopLayout;
