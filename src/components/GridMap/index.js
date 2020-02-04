import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HexGrid, Layout, Hexagon, Text, Pattern } from '../Hexagon';
import ResetGridButton from '../ResetGridButton';
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
  state = {
    isSelected: allSyncGrids[`${this.props.pokemon}GridData`].map(
      element => false
    )
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.pokemon !== this.props.pokemon) {
      this.setState({
        isSelected: allSyncGrids[`${this.props.pokemon}GridData`].map(
          element => false
        )
      });
      this.props.resetGrids();
    }

    return true;
  }

  handleClick(e, index) {
    if (this.state.isSelected[index] === false) {
      this.props.addToGridList(this.props.grid.gridData);
      this.props.subtractFromRemainingEnergy(this.props.grid.gridData);
    } else {
      this.props.removeFromGridList(this.props.grid.gridData);
      this.props.addBackToRemainingEnergy(this.props.grid.gridData);
    }

    const newIsSelected = [...this.state.isSelected];
    newIsSelected[index] = !this.state.isSelected[index];
    this.setState({ isSelected: newIsSelected });
  }

  handleClickReset = () => {
    this.setState({
      isSelected: allSyncGrids[`${this.props.pokemon}GridData`].map(
        element => false
      )
    });
    this.props.resetGrids();
  };

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
            // fill: this.state.isSelected[index] ? 'white' : cell.fill,
            fill: cell.fill,
            onClick: e => this.handleClick(e, index),
            isSelected: this.state.isSelected[index],
            className: this.state.isSelected[index] ? 'selected' : null
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
  addToGridList,
  removeFromGridList,
  subtractFromRemainingEnergy,
  addBackToRemainingEnergy,
  resetGrids
})(GridMap);
