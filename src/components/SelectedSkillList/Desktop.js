import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedSkillList extends Component {
  renderList() {
    const { selectedCellsById } = this.props.grid;
    let skillList = Object.keys(selectedCellsById)
      .map(cellId => {
        return selectedCellsById[cellId].name;
      })
      .sort();

    return skillList.map((item, index) => {
      return (
        <li
          className={`active-grid list-group-item ${
            this.props.darkMode ? 'bg-dark' : null
          }`}
          key={index}
        >
          {item}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="active-grid-list">
        <div
          className={`card mt-5 ${
            this.props.darkMode ? 'text-white bg-dark' : null
          }`}
        >
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
  grid: state.grid,
  darkMode: state.darkMode.mode
});

export default connect(mapStateToProps)(SelectedSkillList);
