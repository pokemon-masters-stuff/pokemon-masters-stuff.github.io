import React, { Component } from 'react';
import { connect } from 'react-redux';
import PikachuGrids from './PikachuGrids';

class SyncGrids extends Component {
  renderContent() {
    switch (this.props.pokemon) {
      case 'Pikachu':
        return <PikachuGrids />;
      default:
        return <div>Please select Pokemon from the dropdown</div>;
    }
  }
  render() {
    return <div className="grids-wrapper">{this.renderContent()}</div>;
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemon,
  grid: state.grid
});

export default connect(mapStateToProps)(SyncGrids);
