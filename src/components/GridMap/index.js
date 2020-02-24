import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactTooltip from 'react-tooltip';
import { HexGrid, Layout, Hexagon, Text, Pattern } from '../Hexagon';
import { listOfPokemonsWithId } from '../../data';
import {
  pikachuSvgLink,
  vileplumeSvgLink,
  dewgongSvgLink,
  torkoalSvgLink,
  serperiorSvgLink,
  kingdraSvgLink,
  haxorusSvgLink,
  infernapeSvgLink,
  metagrossSvgLink,
  mewSvgLink,
  charizardSvgLink,
  alakazamSvgLink,
  houndoomSvgLink,
  liepardSvgLink,
  palossandSvgLink,
  raichuSvgLink,
  rotomSvgLink
} from '../../images/PokemonSvgLink/';
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
  charizardGridData,
  palossandGridData,
  liepardGridData,
  rotomGridData,
  houndoomGridData,
  raichuGridData,
  alakazamGridData,
  shortenedMoveNameByCellId,
  allDisplayedGridData
} from '../../data';
import {
  addToGridList,
  removeFromGridList,
  subtractFromRemainingEnergy,
  addBackToRemainingEnergy,
  resetGrids,
  loadGridFromUrl,
  updateUrl
} from '../../actions/actionCreators';
import styles from './styles';
import {
  getGridQueryStringValue,
  filterGridQueryStringValue,
  setGridQueryStringValue,
  getQueryStringValue,
  setQueryStringValue
} from '../../queryString';

const allSvgLinks = {
  pikachuSvgLink,
  vileplumeSvgLink,
  dewgongSvgLink,
  torkoalSvgLink,
  serperiorSvgLink,
  kingdraSvgLink,
  haxorusSvgLink,
  infernapeSvgLink,
  metagrossSvgLink,
  mewSvgLink,
  charizardSvgLink,
  alakazamSvgLink,
  houndoomSvgLink,
  liepardSvgLink,
  palossandSvgLink,
  raichuSvgLink,
  rotomSvgLink
};

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
  charizardGridData,
  metagrossGridData,
  palossandGridData,
  liepardGridData,
  rotomGridData,
  houndoomGridData,
  raichuGridData,
  alakazamGridData
};

// const gridUrlLookUpData = {};
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

  // TODO: refactor
  loadUrlGridData() {
    // if user uses an url that includes grid data
    if (getGridQueryStringValue('grid')) {
      this.props.resetGrids();
      let remainingEnergy = getQueryStringValue('e');
      let orbSpent = Number(getQueryStringValue('o'));
      let characterId;
      listOfPokemonsWithId.map(obj => {
        return obj.name === getQueryStringValue('p')
          ? (characterId = obj.characterId)
          : null;
      });
      let cellIdArray = getGridQueryStringValue('grid').map(id => {
        return characterId.toString().slice(0, -3) + id;
      });
      cellIdArray.map(id => {
        return this.props.loadGridFromUrl(
          allDisplayedGridData[id],
          remainingEnergy,
          orbSpent
        );
      });
    } else {
      // if user goes to root url but grids were selected in the previous session and were preserved by redux-persist
      for (const property in this.props.grid.selectedCellsById) {
        setGridQueryStringValue(
          'grid',
          this.props.grid.selectedCellsById[property].cellId
            .toString()
            .slice(-2)
        );
      }
    }
  }

  componentDidMount() {
    setTimeout(() => this.fitMapToScreen(), 1000);
    window.addEventListener('resize', this.fitMapToScreen);
    // gridUrlLookUpData !== {} && this.loadUrlGridData();
    this.loadUrlGridData();
  }

  componentDidUpdate() {
    ReactTooltip.rebuild();
    setQueryStringValue('e', this.props.grid.remainingEnergy);
    setQueryStringValue('o', this.props.grid.orbSpent);

    // TODO: refactor. causing component to rerender when clicking a grid
    if (this.props.grid.url !== window.location.href) {
      this.props.updateUrl(window.location.href);
    }
    // console.log('did update', gridUrlLookUpData); // TODO: refactor
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
      setGridQueryStringValue('grid', `${data.cellId.toString().slice(-2)}`);
    } else {
      this.props.removeFromGridList(data);
      this.props.addBackToRemainingEnergy(data);
      filterGridQueryStringValue('grid', `${data.cellId.toString().slice(-2)}`);
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
        pokemon === 'charizard' ||
        pokemon === 'dewgong' ||
        pokemon === 'infernape' ||
        pokemon === 'haxorus' ||
        pokemon === 'kingdra' ||
        pokemon === 'metagross' ||
        pokemon === 'houndoom' ||
        pokemon === 'raichu'
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

      if (
        pokemon === 'torkoal' ||
        pokemon === 'vileplume' ||
        pokemon === 'palossand' ||
        pokemon === 'liepard'
      ) {
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

      if (
        pokemon === 'serperior' ||
        pokemon === 'alakazam' ||
        pokemon === 'rotom'
      ) {
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

      // TODO: refactor
      // gridUrlLookUpData[cell.cellId] = {
      //   cellId: cell.cellId,
      //   name: nameWithSyncLvRequirement || moveName,
      //   description: cell.move.description,
      //   energy: cell.move.energyCost
      // };

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

  renderCenterGridText = classes => {
    // Only renders text when no picture available
    return allSvgLinks[`${this.props.pokemon}SvgLink`] === undefined ? (
      <Text className={classes.selectedPokemonCell}>{this.props.pokemon}</Text>
    ) : null;
  };

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
            <Hexagon
              q={0}
              r={0}
              s={0}
              fill={`url(#${this.props.pokemon})`}
              data={{ cellId: 0 }}
              className={'center-grid'}
            >
              {this.renderCenterGridText(classes)}
            </Hexagon>
            {this.renderHexagonCells()}
          </Layout>
          <Pattern
            id={this.props.pokemon}
            link={allSvgLinks[`${this.props.pokemon}SvgLink`]}
            size={{ x: 10, y: 10 }}
          />
        </HexGrid>
        {this.state.screenWidth >= 960 &&
        this.props.grid.gridData.energy !== undefined ? (
          <ReactTooltip effect="solid" id="skillTooltip">
            <ul style={{ margin: 0, padding: 0, fontSize: 16 }}>
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
  resetGrids,
  loadGridFromUrl,
  updateUrl
})(withStyles(styles)(GridMap));
