import { connect } from 'react-redux';
import { HexGrid, HexUtils, Layout, Hexagon, Hex, Text } from './Hexagon';

import {
  addToGridList,
  removeFromGridList,
  displayGridData
} from '../actions/actionCreators';

import React, { Component } from 'react';
import '../assets/Grids.css';

let pikachuGridRawData = [
  { q: 0, r: 0, s: 0, data: {}, fill: 'pat-1' },
  { q: 0, r: -1, s: 1, data: { description: 'Speed + 5', energy: 0 } },
  { q: 0, r: 1, s: -1, data: { description: 'Defense + 5', energy: 0 } },
  { q: 1, r: -1, s: 0, data: { description: 'HP + 10', energy: 0 } },
  { q: 1, r: 0, s: -1, data: { description: 'Sp.Atk + 5', energy: 0 } },
  { q: -1, r: 1, s: 0, data: { description: 'Sp.Atk + 5', energy: 0 } },
  { q: -1, r: 0, s: 1, data: { description: 'Sp.Def + 5', energy: 0 } }
];

class PikachuGrids extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: pikachuGridRawData.map(element => false)
    };
    this.handleClick = this.handleClick.bind(this);
    console.log('isSelected array', this.state.isSelected);
  }

  handleClick(e, index) {
    console.log('this.props', this.props.grid.gridData);
    if (this.state.isSelected[index] === false) {
      // if not selected before, add energy cost and add description to display, vice versa
      console.log('will add to active grid list');
      this.props.addToGridList(this.props.grid.gridData);
    } else {
      console.log('will remove from active grid list');
      this.props.removeFromGridList(this.props.grid.gridData);
    }

    // then update the isSelect attribute
    const newIsSelected = [...this.state.isSelected];
    newIsSelected[index] = !this.state.isSelected[index];
    this.setState(
      { isSelected: newIsSelected },
      console.log('isSelected arr', this.state.isSelected)
    );
  }

  render() {
    const allGrids = pikachuGridRawData.map((cell, index) => {
      return (
        <Hexagon
          key={index}
          q={cell.q}
          r={cell.r}
          s={cell.s}
          data={cell.data}
          isSelected={this.state.isSelected[index]}
          fill={this.state.isSelected[index] ? 'pat-1' : cell.fill}
          onClick={e => this.handleClick(e, index)}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >
          <Text>{cell.data.description}</Text>
        </Hexagon>
      );
    });

    return (
      <div className="hex-grids">
        <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
          {/* Grid with manually inserted hexagons */}
          <Layout
            size={{ x: 5, y: 5 }}
            flat={true}
            spacing={1.1}
            origin={{ x: 0, y: 0 }}
          >
            {allGrids}
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

// export default PikachuGrids;

const mapStateToProps = state => ({
  pokemon: state.pokemon,
  grid: state.grid
});

export default connect(mapStateToProps, {
  addToGridList,
  removeFromGridList
  // displayGridData
})(PikachuGrids);
