import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HexGrid, Layout, Hexagon, Text, Pattern } from '../Hexagon';
import {
  pikachuGridData,
  torkoalGridData,
  infernapeGridData,
  dewgongGridData,
  haxorusGridData,
  kingdraGridData,
  serperiorGridData,
  vileplumeGridData
} from '../../data';
import {
  selectGrid,
  deselectGrid,
  addToGridList,
  removeFromGridList,
  subtractFromRemainingEnergy,
  addBackToRemainingEnergy,
  resetGrids
} from '../../actions/actionCreators';

const allSyncGrids = {
  pikachuGridData,
  torkoalGridData,
  infernapeGridData,
  dewgongGridData,
  haxorusGridData,
  kingdraGridData,
  serperiorGridData,
  vileplumeGridData
};

class GridMap extends Component {
  handleClick(e, index, data) {
    e.stopPropagation();

    if (this.props.grid.isSelectedArray[data.cellNum].selected === false) {
      this.props.selectGrid(data.cellNum);
      this.props.addToGridList(data);
      this.props.subtractFromRemainingEnergy(data);
    } else {
      this.props.deselectGrid(data.cellNum);
      this.props.removeFromGridList(data);
      this.props.addBackToRemainingEnergy(data);
    }
  }

  render() {
    const allGrids = allSyncGrids[`${this.props.pokemon}GridData`].map(
      (cell, index) => {
        let hexagonProps = {
          key: index,
          q: cell.q,
          r: cell.r,
          s: 0,
          data: cell.data,
          fill: 'white',
          onMouseEnter: this.mouseEnter,
          onMouseLeave: this.mouseLeave
        };

        if (index !== 0) {
          hexagonProps = {
            ...hexagonProps,
            fill: cell.fill,
            onClickHandler: (e, data) => this.handleClick(e, index, data),
            className: this.props.grid.isSelectedArray[cell.data.cellNum]
              .selected
              ? 'selected'
              : null
          };
        }

        return (
          <Hexagon {...hexagonProps}>
            <Text>{cell.data.name}</Text>
          </Hexagon>
        );
      }
    );

    return (
      <HexGrid width={1200} height={760} viewBox="-15 -50 120 100">
        <Layout
          size={{ x: 4.5, y: 4.5 }}
          flat={true}
          spacing={1.1}
          origin={{ x: 0, y: 0 }}
        >
          {allGrids}
        </Layout>
        <Pattern
          id="pat-3"
          link="https://img.icons8.com/material-sharp/24/000000/lock.png"
        />
      </HexGrid>
    );
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemon.selectedPokemon.toLowerCase(),
  grid: state.grid
});

export default connect(mapStateToProps, {
  selectGrid,
  deselectGrid,
  addToGridList,
  removeFromGridList,
  subtractFromRemainingEnergy,
  addBackToRemainingEnergy,
  resetGrids
})(GridMap);
