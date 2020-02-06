import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

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
import styles from "./styles";

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
    initialRender: true,
    mapSizeBoundaries: {
      width: '100vw',
      height: 440,
      viewbox: '-35 -35 70 70',
    },
  };

  componentDidMount() {
    setTimeout(() => this.fitMapToScreen(), 1000);
    window.addEventListener('resize', this.fitMapToScreen);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.fitMapToScreen);
  }

  fitMapToScreen = () => {
    const clientWrappingBoundaries = {
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    };
    let updatedMapSizeBoundaries = {
      ...this.state.mapSizeBoundaries,
    };

    if (clientWrappingBoundaries.width > 960) {
      updatedMapSizeBoundaries = {
        ...updatedMapSizeBoundaries,
        height: 768,
        viewbox: '-15 -50 100 100',
      };
    }

    if (clientWrappingBoundaries.width <= 960) {
      updatedMapSizeBoundaries = {
        ...updatedMapSizeBoundaries,
        height: 768,
        viewbox: '-50 -50 100 100',
      };
    }

    if (clientWrappingBoundaries.width < 768) {
      updatedMapSizeBoundaries = {
        ...updatedMapSizeBoundaries,
        height: ((clientWrappingBoundaries.width / 100 * 73.28) / 2 +
          clientWrappingBoundaries.width).toFixed(),
        viewbox: '-35 -35 70 70',
      };
    }

    this.setState(prevState => ({
      ...prevState,
      initialRender: false,
      mapSizeBoundaries: {
        ...prevState.mapSizeBoundaries,
        ...updatedMapSizeBoundaries,
      },
    }));
  };

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

  renderHexagonCells = () => allSyncGrids[`${this.props.pokemon}GridData`].map(
    (cell, index) => {
      let hexagonProps = {
        key: index,
        q: cell.q,
        r: cell.r,
        s: 0,
        data: cell.data,
        fill: 'white',
        onMouseEnter: this.mouseEnter,
        onMouseLeave: this.mouseLeave,
      };

      if (index !== 0) {
        hexagonProps = {
          ...hexagonProps,
          fill: cell.fill,
          onClickHandler: (e, data) => this.handleClick(e, index, data),
          className: this.props.grid.isSelectedArray[cell.data.cellNum].selected
            ? 'selected'
            : null,
        };
      }

      return (
        <Hexagon {...hexagonProps}>
          <Text>{cell.data.name}</Text>
        </Hexagon>
      );
    },
  );

  render() {
    const {mapSizeBoundaries, initialRender} = this.state;
    const {classes} = this.props;

    return initialRender
      ? <div className={classes.progressWrapper}><CircularProgress color="secondary" /></div>
      : (
        <HexGrid
          width={mapSizeBoundaries.width}
          height={mapSizeBoundaries.height}
          viewBox={mapSizeBoundaries.viewbox}
        >
          <Layout
            size={{x: 4.5, y: 4.5}}
            flat={true}
            spacing={1.1}
            origin={{x: 0, y: 0}}
          >
            {this.renderHexagonCells()}
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
  grid: state.grid,
});

export default connect(mapStateToProps, {
  selectGrid,
  deselectGrid,
  addToGridList,
  removeFromGridList,
  subtractFromRemainingEnergy,
  addBackToRemainingEnergy,
  resetGrids,
})(withStyles(styles)(GridMap));
