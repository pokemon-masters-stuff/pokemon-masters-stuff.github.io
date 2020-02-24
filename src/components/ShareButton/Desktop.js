import React, { Component } from 'react';
import { connect } from 'react-redux';
import './desktop.css';

class ShareButton extends Component {
  // state = {
  //   url: window.location.href
  // };
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.url !== prevState.url) {
  //     this.setState({ url: window.location.href });
  //   }
  // }
  render() {
    console.log(this.props.url);
    return (
      <div>
        <button
          type="button"
          className="btn btn-success"
          data-toggle="modal"
          data-target="#shareLinkModal"
          style={{ position: 'relative', zIndex: 999 }}
        >
          Share Link
        </button>

        <div
          className="modal fade"
          id="shareLinkModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">
                  Share this link
                </h4>
              </div>
              <div className="modal-body mx-3">{this.props.url.link}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  url: state.url
});

export default connect(mapStateToProps, {})(ShareButton);
