import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HexGrid, Layout, Hexagon, Text } from '../Hexagon';
import ResetGridButton from '../ResetGridButton';
import { torkoalGridData } from './PokemonData/SyncGridData';
import {
  addToGridList,
  removeFromGridList,
  subtractFromRemainingEnergy,
  addBackToRemainingEnergy,
  resetGrids
} from '../../actions/actionCreators';

class TorkoalGrids extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: torkoalGridData.map(element => false)
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
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

  handleClickReset() {
    this.setState({ isSelected: torkoalGridData.map(element => false) });
    this.props.resetGrids();
  }

  render() {
    const allGrids = torkoalGridData.map((cell, index) => {
      if (index === 0) {
        return (
          <Hexagon
            key={index}
            q={cell.q}
            r={cell.r}
            s={0}
            data={cell.data}
            fill={'white'}
            onMouseEnter={this.mouseEnter}
            onMouseLeave={this.mouseLeave}
          >
            <Text>{cell.data.name}</Text>
          </Hexagon>
        );
      } else {
        return (
          <Hexagon
            key={index}
            q={cell.q}
            r={cell.r}
            s={0}
            data={cell.data}
            isSelected={this.state.isSelected[index]}
            fill={this.state.isSelected[index] ? 'white' : cell.fill}
            onClick={e => this.handleClick(e, index)}
            onMouseEnter={this.mouseEnter}
            onMouseLeave={this.mouseLeave}
          >
            <Text>{cell.data.name}</Text>
          </Hexagon>
        );
      }
    });

    return (
      <div>
        <div className="hex-grids">
          <ResetGridButton onClickHandler={this.handleClickReset} />
          <HexGrid width={1200} height={760} viewBox="-15 -50 120 100">
            <Layout
              size={{ x: 4.5, y: 4.5 }}
              flat={true}
              spacing={1.1}
              origin={{ x: 0, y: 0 }}
            >
              {allGrids}
            </Layout>
          </HexGrid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  grid: state.grid
});

export default connect(mapStateToProps, {
  addToGridList,
  removeFromGridList,
  subtractFromRemainingEnergy,
  addBackToRemainingEnergy,
  resetGrids
})(TorkoalGrids);
