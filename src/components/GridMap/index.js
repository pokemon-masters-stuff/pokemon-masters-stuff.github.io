import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactTooltip from 'react-tooltip';
import { HexGrid, Layout, Hexagon, Text } from '../Hexagon';
import {
  pikachuGridData,
  torkoalGridData,
  infernapeGridData,
  dewgongGridData,
  haxorusGridData,
  kingdraGridData,
  serperiorGridData,
  vileplumeGridData,
  mewGridData,
  metagrossGridData,
  shortenedMoveNameByCellId
} from '../../data';
import {
  addToGridList,
  removeFromGridList,
  subtractFromRemainingEnergy,
  addBackToRemainingEnergy,
  resetGrids
} from '../../actions/actionCreators';
import styles from './styles';

const allSyncGrids = {
  pikachuGridData,
  torkoalGridData,
  infernapeGridData,
  dewgongGridData,
  haxorusGridData,
  kingdraGridData,
  serperiorGridData,
  vileplumeGridData,
  mewGridData,
  metagrossGridData
};

class GridMap extends Component {
  state = {
    initialRender: true,
    mapSizeBoundaries: {
      width: '100vw',
      height: 440,
      viewbox: '-35 -35 70 70'
    },
    screenWidth: document.body.clientWidth
  };

  componentDidMount() {
    setTimeout(() => this.fitMapToScreen(), 1000);
    window.addEventListener('resize', this.fitMapToScreen);
  }

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.fitMapToScreen);
  }

  fitMapToScreen = () => {
    const clientWrappingBoundaries = {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    };
    let updatedMapSizeBoundaries = {
      ...this.state.mapSizeBoundaries
    };

    if (clientWrappingBoundaries.width > 1200) {
      updatedMapSizeBoundaries = {
        width: 800,
        height: 768,
        viewbox: '-50 -50 100 100'
      };
    }

    if (
      clientWrappingBoundaries.width > 960 &&
      clientWrappingBoundaries.width < 1200
    ) {
      updatedMapSizeBoundaries = {
        width: '100vw',
        height: 768,
        viewbox: '-15 -50 100 100'
      };
    }

    if (clientWrappingBoundaries.width <= 960) {
      updatedMapSizeBoundaries = {
        width: '100vw',
        height: 768,
        viewbox: '-50 -50 100 100'
      };
    }

    if (clientWrappingBoundaries.width < 768) {
      updatedMapSizeBoundaries = {
        width: '100vw',
        height: (
          ((clientWrappingBoundaries.width / 100) * 73.28) / 2 +
          clientWrappingBoundaries.width
        ).toFixed(),
        viewbox: '-35 -35 70 70'
      };
    }

    this.setState(prevState => ({
      ...prevState,
      initialRender: false,
      mapSizeBoundaries: {
        ...prevState.mapSizeBoundaries,
        ...updatedMapSizeBoundaries
      }
    }));
  };

  handleClick(e, index, data) {
    e.stopPropagation();

    if (!this.props.grid.selectedCellsById[data.cellId]) {
      this.props.addToGridList(data);
      this.props.subtractFromRemainingEnergy(data);
    } else {
      this.props.removeFromGridList(data);
      this.props.addBackToRemainingEnergy(data);
    }
  }

  getFillColorByMoveType = ({ type, group, isLocked }) => {
    let colorsByTypeDef = {
      statsBoost: '#66b6ec', // blue
      passive: '#fff04d', // yellow
      moveEffect: '#f24646', // red
      movePowerBoost: '#73d958', // green
      moveAccuracyBoost: '#73d958', // green
      syncBoost: '#d12deb', // purple
      locked: '#dedbd3' // gray
    };
    let colorsByTypeId = {
      1: colorsByTypeDef.statsBoost,
      2: colorsByTypeDef.statsBoost,
      3: colorsByTypeDef.statsBoost,
      4: colorsByTypeDef.statsBoost,
      5: colorsByTypeDef.statsBoost,
      6: colorsByTypeDef.statsBoost,
      7: colorsByTypeDef.passive,
      8: colorsByTypeDef.moveEffect,
      9: colorsByTypeDef.movePowerBoost,
      10: colorsByTypeDef.moveAccuracyBoost
    };
    let cellColor = colorsByTypeDef.syncBoost;

    if (group !== 3) {
      cellColor = colorsByTypeId[type];
    }

    if (isLocked) {
      cellColor = colorsByTypeDef.locked;
    }

    return cellColor;
  };

  renderMoveName = (moveName, abilityId) => {
    let renderedMoveName = moveName;

    if (moveName.length > 11) {
      if (shortenedMoveNameByCellId[abilityId]) {
        renderedMoveName = shortenedMoveNameByCellId[abilityId];
      }
    }

    return renderedMoveName;
  };

  renderHexagonCells = () =>
    allSyncGrids[`${this.props.pokemon}GridData`].map((cell, index) => {
      // remove "Move:" from the start of moveName
      let moveName =
        cell.move.name.substring(0, 5) === 'Move:'
          ? cell.move.name.substring(6)
          : cell.move.name;

      let pokemon = this.props.pokemon;
      let nameWithSyncLvRequirement;
      if (
        pokemon === 'pikachu' ||
        pokemon === 'dewgong' ||
        pokemon === 'infernape' ||
        pokemon === 'haxorus' ||
        pokemon === 'kingdra' ||
        pokemon === 'metagross'
      ) {
        if (
          (cell.coords.q === 0 && cell.coords.r === 3) ||
          (cell.coords.q === 0 && cell.coords.r === -3) ||
          (cell.coords.q === 1 && cell.coords.r === -5) ||
          (cell.coords.q === 2 && cell.coords.r === -6) ||
          (cell.coords.q === -3 && cell.coords.r === -1) ||
          (cell.coords.q === -2 && cell.coords.r === -2) ||
          (cell.coords.q === 2 && cell.coords.r === 2) ||
          (cell.coords.q === 3 && cell.coords.r === 1) ||
          (cell.coords.q === -1 && cell.coords.r === 5) ||
          (cell.coords.q === -2 && cell.coords.r === 6)
        ) {
          nameWithSyncLvRequirement = moveName + ' [Sync Lv3]';
        } else if (
          (cell.coords.q === 3 && cell.coords.r === -6) ||
          (cell.coords.q === 2 && cell.coords.r === -5) ||
          (cell.coords.q === 1 && cell.coords.r === -4) ||
          (cell.coords.q === -1 && cell.coords.r === -2) ||
          (cell.coords.q === -2 && cell.coords.r === -1) ||
          (cell.coords.q === -3 && cell.coords.r === 0) ||
          (cell.coords.q === 3 && cell.coords.r === 0) ||
          (cell.coords.q === 2 && cell.coords.r === 1) ||
          (cell.coords.q === 1 && cell.coords.r === 2) ||
          (cell.coords.q === -1 && cell.coords.r === 4) ||
          (cell.coords.q === -2 && cell.coords.r === 5) ||
          (cell.coords.q === -3 && cell.coords.r === 6)
        ) {
          nameWithSyncLvRequirement = moveName + ' [Sync Lv2]';
        }
      }

      if (pokemon === 'torkoal' || pokemon === 'vileplume') {
        if (
          (cell.coords.q === 0 && cell.coords.r === 3) ||
          (cell.coords.q === 0 && cell.coords.r === -3) ||
          (cell.coords.q === 2 && cell.coords.r === -6) ||
          (cell.coords.q === 1 && cell.coords.r === -5) ||
          (cell.coords.q === -1 && cell.coords.r === -4) ||
          (cell.coords.q === -2 && cell.coords.r === -4) ||
          (cell.coords.q === 2 && cell.coords.r === 2) ||
          (cell.coords.q === 1 && cell.coords.r === 2) ||
          (cell.coords.q === -1 && cell.coords.r === 3) ||
          (cell.coords.q === -2 && cell.coords.r === 4)
        ) {
          nameWithSyncLvRequirement = moveName + ' [Sync Lv3]';
        } else if (
          (cell.coords.q === 3 && cell.coords.r === -6) ||
          (cell.coords.q === 2 && cell.coords.r === -5) ||
          (cell.coords.q === 1 && cell.coords.r === -4) ||
          (cell.coords.q === -1 && cell.coords.r === -3) ||
          (cell.coords.q === -2 && cell.coords.r === -3) ||
          (cell.coords.q === -3 && cell.coords.r === -3) ||
          (cell.coords.q === 3 && cell.coords.r === 0) ||
          (cell.coords.q === 3 && cell.coords.r === 1) ||
          (cell.coords.q === 2 && cell.coords.r === 1) ||
          (cell.coords.q === -3 && cell.coords.r === 3) ||
          (cell.coords.q === -3 && cell.coords.r === 4) ||
          (cell.coords.q === -2 && cell.coords.r === 3)
        ) {
          nameWithSyncLvRequirement = moveName + ' [Sync Lv2]';
        }
      }

      if (pokemon === 'serperior') {
        if (
          (cell.coords.q === 0 && cell.coords.r === 3) ||
          (cell.coords.q === 0 && cell.coords.r === -3) ||
          (cell.coords.q === 2 && cell.coords.r === -6) ||
          (cell.coords.q === 1 && cell.coords.r === -5) ||
          (cell.coords.q === -1 && cell.coords.r === -3) ||
          (cell.coords.q === -3 && cell.coords.r === -2) ||
          (cell.coords.q === 2 && cell.coords.r === 4) ||
          (cell.coords.q === 1 && cell.coords.r === 4) ||
          (cell.coords.q === -1 && cell.coords.r === 4) ||
          (cell.coords.q === -3 && cell.coords.r === 5)
        ) {
          nameWithSyncLvRequirement = moveName + ' [Sync Lv3]';
        } else if (
          (cell.coords.q === 3 && cell.coords.r === -6) ||
          (cell.coords.q === 2 && cell.coords.r === -5) ||
          (cell.coords.q === 1 && cell.coords.r === -4) ||
          (cell.coords.q === -1 && cell.coords.r === -2) ||
          (cell.coords.q === -2 && cell.coords.r === -2) ||
          (cell.coords.q === -3 && cell.coords.r === -1) ||
          (cell.coords.q === 1 && cell.coords.r === 3) ||
          (cell.coords.q === 2 && cell.coords.r === 3) ||
          (cell.coords.q === 3 && cell.coords.r === 3) ||
          (cell.coords.q === -3 && cell.coords.r === 4) ||
          (cell.coords.q === -2 && cell.coords.r === 4) ||
          (cell.coords.q === -1 && cell.coords.r === 3)
        ) {
          nameWithSyncLvRequirement = moveName + ' [Sync Lv2]';
        }
      }

      if (pokemon === 'mew') {
        if (
          (cell.coords.q === 3 && cell.coords.r === -4) ||
          (cell.coords.q === 4 && cell.coords.r === -4) ||
          (cell.coords.q === 4 && cell.coords.r === -3) ||
          (cell.coords.q === 1 && cell.coords.r === 3) ||
          (cell.coords.q === 0 && cell.coords.r === 4) ||
          (cell.coords.q === -1 && cell.coords.r === 4) ||
          (cell.coords.q === -3 && cell.coords.r === -1) ||
          (cell.coords.q === -4 && cell.coords.r === 0) ||
          (cell.coords.q === -4 && cell.coords.r === 1)
        ) {
          nameWithSyncLvRequirement = moveName + ' [Sync Lv3]';
        } else if (
          (cell.coords.q === -1 && cell.coords.r === -3) ||
          (cell.coords.q === 0 && cell.coords.r === -4) ||
          (cell.coords.q === 1 && cell.coords.r === -4) ||
          (cell.coords.q === 4 && cell.coords.r === -1) ||
          (cell.coords.q === 4 && cell.coords.r === 0) ||
          (cell.coords.q === 3 && cell.coords.r === 1) ||
          (cell.coords.q === -3 && cell.coords.r === 4) ||
          (cell.coords.q === -4 && cell.coords.r === 4) ||
          (cell.coords.q === -4 && cell.coords.r === 3)
        ) {
          nameWithSyncLvRequirement = moveName + ' [Sync Lv2]';
        }
      }

      const hexagonProps = {
        data: {
          cellId: cell.cellId,
          name: nameWithSyncLvRequirement || moveName,
          description: cell.move.description,
          energy: cell.move.energyCost
        },
        onMouseEnter: this.mouseEnter,
        onMouseLeave: this.mouseLeave,
        key: cell.cellId,
        q: cell.coords.q,
        r: cell.coords.r,
        s: 0,
        fill: this.getFillColorByMoveType({
          type: cell.ability.type,
          group: cell.move.group,
          isLocked: cell.move.locked
        }),
        onClickHandler: (e, data) => this.handleClick(e, index, data),
        className: this.props.grid.selectedCellsById[cell.cellId]
          ? 'selected'
          : null
      };

      return (
        <Hexagon {...hexagonProps}>
          <Text>
            {this.renderMoveName(cell.move.name, cell.ability.abilityId)}
          </Text>
          {this.state.screenWidth < 960 &&
          cell.move.energyCost !== undefined ? (
            <text
              className="energy-inside-grid"
              textAnchor="middle"
              x="0"
              y="1.6em"
            >
              ({cell.move.energyCost})
            </text>
          ) : null}
        </Hexagon>
      );
    });

  render() {
    const { mapSizeBoundaries, initialRender } = this.state;
    const { classes } = this.props;

    return initialRender ? (
      <div className={classes.progressWrapper}>
        <CircularProgress color="secondary" />
      </div>
    ) : (
      <div>
        <HexGrid
          width={mapSizeBoundaries.width}
          height={mapSizeBoundaries.height}
          viewBox={mapSizeBoundaries.viewbox}
        >
          <Layout
            size={{ x: 4.5, y: 4.5 }}
            flat={true}
            spacing={1.1}
            origin={{ x: 0, y: 0 }}
          >
            <Hexagon q={0} r={0} s={0} fill="#fff" data={{ cellId: 0 }}>
              <Text className={classes.selectedPokemonCell}>
                {this.props.pokemon}
              </Text>
            </Hexagon>
            {this.renderHexagonCells()}
          </Layout>
        </HexGrid>
        {this.state.screenWidth >= 960 ? (
          <ReactTooltip id="skillTooltip">
            <ul style={{ margin: 0, padding: 0 }}>
              <li>{this.props.grid.gridData.name}</li>
              <li>Energy: {this.props.grid.gridData.energy}</li>
              {this.props.grid.gridData.description ? (
                <li style={{ marginTop: 1 }}>
                  {this.props.grid.gridData.description}
                </li>
              ) : null}
            </ul>
          </ReactTooltip>
        ) : null}
      </div>
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
})(withStyles(styles)(GridMap));
