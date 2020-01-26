import React, { Component } from 'react';
import { connect } from 'react-redux';

class GridData extends Component {
  renderContent() {
    return (
      <div className="grid-data">
        <ul>
          <li>Description: {this.props.grid.gridData.description}</li>
          <li>Energy Cost: {this.props.grid.gridData.energy}</li>
        </ul>
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

// export default GridData;

const mapStateToProps = state => ({
  grid: state.grid
});

export default connect(mapStateToProps)(GridData);
