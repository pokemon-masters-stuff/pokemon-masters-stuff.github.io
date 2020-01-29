import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveGridList extends Component {
  renderList() {
    return this.props.grid.activeGridList.map((item, index) => {
      return (
        <li className="active-grid list-group-item" key={index}>
          {item}
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
              <p>Orbs spent: {this.props.grid.orbSpent}</p>
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

export default connect(mapStateToProps)(ActiveGridList);
