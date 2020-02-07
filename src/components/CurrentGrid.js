import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentGrid extends Component {
  renderContent() {
    if (this.props.grid.gridData.description) {
      return (
        <div className="card">
          <ul>
            <li className="text-center m-2">
              <strong>{this.props.grid.gridData.description}</strong>
            </li>
            <li className="text-center mb-0">
              <strong>Energy: {this.props.grid.gridData.energy}</strong>
            </li>
          </ul>
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

export default connect(mapStateToProps)(CurrentGrid);
