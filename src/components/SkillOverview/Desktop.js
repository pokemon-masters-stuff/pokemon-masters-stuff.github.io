import React, { Component } from 'react';
import { connect } from 'react-redux';

class SkillOverview extends Component {
  renderContent() {
    if (this.props.grid.gridData.name) {
      return (
        <div className="card">
          <ul>
            <li className="text-center m-2">
              <strong>{this.props.grid.gridData.name}</strong>
            </li>
            {Boolean(this.props.grid.gridData.description) && (
              <li className="text-center mb-0" style={{padding: "0 24px 8px"}}>
                {this.props.grid.gridData.description}
              </li>
            )}
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

export default connect(mapStateToProps)(SkillOverview);
