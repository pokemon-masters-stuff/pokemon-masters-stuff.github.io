import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedSkillList extends Component {
  renderList() {
    const {selectedCellsById} = this.props.grid;

    return Object.keys(selectedCellsById).map((cellId) => {
      return (
        <li className="active-grid list-group-item" key={cellId}>
          {selectedCellsById[cellId].name}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="active-grid-list">
        <div className="card mt-5">
          <div className="card-body">
            <h5 className="card-title">
              Remaining Energy: {this.props.grid.remainingEnergy}
              <p>Orbs Spent: {this.props.grid.orbSpent}</p>
            </h5>
            <ul className="list-group list-group-flush">
              {' '}
              {this.renderList()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  grid: state.grid
});

export default connect(mapStateToProps)(SelectedSkillList);
