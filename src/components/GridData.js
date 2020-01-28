import React, { Component } from 'react';
import { connect } from 'react-redux';

class GridData extends Component {
  renderContent() {
    if (this.props.grid.gridData.description) {
      return (
        <div className="card">
          <div className="card-body">
            <ul>
              <li className="text-center mb-2">
                <strong>{this.props.grid.gridData.description}</strong>
              </li>
              <li className="text-center mb-0">
                <strong>Energy: {this.props.grid.gridData.energy}</strong>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

const mapStateToProps = state => ({
  grid: state.grid
});

export default connect(mapStateToProps)(GridData);
