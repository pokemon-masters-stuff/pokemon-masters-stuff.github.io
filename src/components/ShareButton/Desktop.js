import React, { Component } from 'react';
import { connect } from 'react-redux';
import './desktop.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ShareButton extends Component {
  render() {
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
              <div className="modal-body mx-3">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={this.props.url}
                    readOnly
                  />
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <CopyToClipboard text={this.props.url}>
                  <button className="btn btn-default" data-dismiss="modal">
                    Copy to Clipboard
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  url: state.grid.url
});

export default connect(mapStateToProps, {})(ShareButton);
