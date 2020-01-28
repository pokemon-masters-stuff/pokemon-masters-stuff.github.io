import React, { Component } from 'react';
import { connect } from 'react-redux';

class GridData extends Component {
  renderContent() {
    return (
      <div className="grid-data">
        <p className="text-center">
          <strong>{this.props.grid.gridData.description}</strong>
        </p>
        <p className="text-center">
          <strong>
            {this.props.grid.gridData.description ? 'Energy:' : ''}{' '}
            {this.props.grid.gridData.energy}
          </strong>
        </p>
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

const mapStateToProps = state => ({
  grid: state.grid
});

export default connect(mapStateToProps)(GridData);
