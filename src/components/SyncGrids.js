import React, { Component } from 'react';
import { connect } from 'react-redux';
import PikachuGrids from './PikachuGrids';

class SyncGrids extends Component {
  //   state = {};

  renderContent() {
    console.log('this.props.pokemon', this.props.pokemon);
    switch (this.props.pokemon) {
      case 'Pikachu':
        return <PikachuGrids />;
      default:
        return <div>Please select Pokemon from the dropdown</div>;
    }
  }
  render() {
    console.log('this.props in SynGrids', this.props);
    return <div className="grids-wrapper">{this.renderContent()}</div>;
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemon,
  grid: state.grid
});

export default connect(mapStateToProps)(SyncGrids);
