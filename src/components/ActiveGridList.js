import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveGridList extends Component {
  renderContent() {
    return (
      <div className="grid-data">
        <ul>
          <li>Description: {this.props.grid.description}</li>
          <li>Energy Cost: {this.props.grid.energy}</li>
        </ul>
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

// export default ActiveGridList;

const mapStateToProps = state => ({
  grid: state.grid
});

export default connect(mapStateToProps)(ActiveGridList);
