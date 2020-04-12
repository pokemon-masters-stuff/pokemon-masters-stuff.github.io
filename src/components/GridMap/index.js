import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactTooltip from 'react-tooltip';
import { HexGrid, Layout, Hexagon, Text, Pattern } from '../Hexagon';
import styles from './styles';
import { getQueryStringValue, clearQueryStringValue } from '../../queryString';
import {
  getFillColorByMoveType,
  renderMoveName,
  addSyncLvReq,
} from '../../utils/functions';
import {
  pikachuGridDataDE,
  torkoalGridDataDE,
  infernapeGridDataDE,
  dewgongGridDataDE,
  haxorusGridDataDE,
  kingdraGridDataDE,
  serperiorGridDataDE,
  vileplumeGridDataDE,
  mewGridDataDE,
  metagrossGridDataDE,
  charizardGridDataDE,
  palossandGridDataDE,
  liepardGridDataDE,
  rotomGridDataDE,
  houndoomGridDataDE,
  raichuGridDataDE,
  alakazamGridDataDE,
  helioliskGridDataDE,
  golisopodGridDataDE,
  salazzleGridDataDE,
  masquerainGridDataDE,
  meowsticGridDataDE,
  reuniclusGridDataDE,
  pikachuGridDataEN,
  torkoalGridDataEN,
  infernapeGridDataEN,
  dewgongGridDataEN,
  haxorusGridDataEN,
  kingdraGridDataEN,
  serperiorGridDataEN,
  vileplumeGridDataEN,
  mewGridDataEN,
  metagrossGridDataEN,
  charizardGridDataEN,
  palossandGridDataEN,
  liepardGridDataEN,
  rotomGridDataEN,
  houndoomGridDataEN,
  raichuGridDataEN,
  alakazamGridDataEN,
  helioliskGridDataEN,
  golisopodGridDataEN,
  salazzleGridDataEN,
  masquerainGridDataEN,
  meowsticGridDataEN,
  reuniclusGridDataEN,
  pikachuGridDataES,
  torkoalGridDataES,
  infernapeGridDataES,
  dewgongGridDataES,
  haxorusGridDataES,
  kingdraGridDataES,
  serperiorGridDataES,
  vileplumeGridDataES,
  mewGridDataES,
  metagrossGridDataES,
  charizardGridDataES,
  palossandGridDataES,
  liepardGridDataES,
  rotomGridDataES,
  houndoomGridDataES,
  raichuGridDataES,
  alakazamGridDataES,
  helioliskGridDataES,
  golisopodGridDataES,
  salazzleGridDataES,
  masquerainGridDataES,
  meowsticGridDataES,
  reuniclusGridDataES,
  pikachuGridDataFR,
  torkoalGridDataFR,
  infernapeGridDataFR,
  dewgongGridDataFR,
  haxorusGridDataFR,
  kingdraGridDataFR,
  serperiorGridDataFR,
  vileplumeGridDataFR,
  mewGridDataFR,
  metagrossGridDataFR,
  charizardGridDataFR,
  palossandGridDataFR,
  liepardGridDataFR,
  rotomGridDataFR,
  houndoomGridDataFR,
  raichuGridDataFR,
  alakazamGridDataFR,
  helioliskGridDataFR,
  golisopodGridDataFR,
  salazzleGridDataFR,
  masquerainGridDataFR,
  meowsticGridDataFR,
  reuniclusGridDataFR,
  pikachuGridDataIT,
  torkoalGridDataIT,
  infernapeGridDataIT,
  dewgongGridDataIT,
  haxorusGridDataIT,
  kingdraGridDataIT,
  serperiorGridDataIT,
  vileplumeGridDataIT,
  mewGridDataIT,
  metagrossGridDataIT,
  charizardGridDataIT,
  palossandGridDataIT,
  liepardGridDataIT,
  rotomGridDataIT,
  houndoomGridDataIT,
  raichuGridDataIT,
  alakazamGridDataIT,
  helioliskGridDataIT,
  golisopodGridDataIT,
  salazzleGridDataIT,
  masquerainGridDataIT,
  meowsticGridDataIT,
  reuniclusGridDataIT,
  pikachuGridDataJA,
  torkoalGridDataJA,
  infernapeGridDataJA,
  dewgongGridDataJA,
  haxorusGridDataJA,
  kingdraGridDataJA,
  serperiorGridDataJA,
  vileplumeGridDataJA,
  mewGridDataJA,
  metagrossGridDataJA,
  charizardGridDataJA,
  palossandGridDataJA,
  liepardGridDataJA,
  rotomGridDataJA,
  houndoomGridDataJA,
  raichuGridDataJA,
  alakazamGridDataJA,
  helioliskGridDataJA,
  golisopodGridDataJA,
  salazzleGridDataJA,
  masquerainGridDataJA,
  meowsticGridDataJA,
  reuniclusGridDataJA,
  pikachuGridDataKO,
  torkoalGridDataKO,
  infernapeGridDataKO,
  dewgongGridDataKO,
  haxorusGridDataKO,
  kingdraGridDataKO,
  serperiorGridDataKO,
  vileplumeGridDataKO,
  mewGridDataKO,
  metagrossGridDataKO,
  charizardGridDataKO,
  palossandGridDataKO,
  liepardGridDataKO,
  rotomGridDataKO,
  houndoomGridDataKO,
  raichuGridDataKO,
  alakazamGridDataKO,
  helioliskGridDataKO,
  golisopodGridDataKO,
  salazzleGridDataKO,
  masquerainGridDataKO,
  meowsticGridDataKO,
  reuniclusGridDataKO,
  pikachuGridDataZH,
  torkoalGridDataZH,
  infernapeGridDataZH,
  dewgongGridDataZH,
  haxorusGridDataZH,
  kingdraGridDataZH,
  serperiorGridDataZH,
  vileplumeGridDataZH,
  mewGridDataZH,
  metagrossGridDataZH,
  charizardGridDataZH,
  palossandGridDataZH,
  liepardGridDataZH,
  rotomGridDataZH,
  houndoomGridDataZH,
  raichuGridDataZH,
  alakazamGridDataZH,
  helioliskGridDataZH,
  golisopodGridDataZH,
  salazzleGridDataZH,
  masquerainGridDataZH,
  meowsticGridDataZH,
  reuniclusGridDataZH,
} from '../../data';
import {
  selectPokemon,
  addToGridList,
  removeFromGridList,
  subtractFromRemainingEnergy,
  addBackToRemainingEnergy,
  resetGrids,
  loadGridFromUrl,
  updateUrl,
} from '../../actions/actionCreators';
import {
  charizard,
  pikachu,
  raichu,
  vileplume,
  alakazam,
  dewgong,
  mew,
  houndoom,
  kingdra,
  torkoal,
  infernape,
  metagross,
  rotom,
  serperior,
  liepard,
  palossand,
  haxorus,
  masquerain,
  reuniclus,
  heliolisk,
  meowstic,
  salazzle,
  golisopod,
} from '../../images/PokemonThumbnails';

const allThumbnails = {
  charizard,
  pikachu,
  raichu,
  vileplume,
  alakazam,
  dewgong,
  mew,
  houndoom,
  kingdra,
  torkoal,
  infernape,
  metagross,
  rotom,
  serperior,
  liepard,
  palossand,
  haxorus,
  masquerain,
  reuniclus,
  heliolisk,
  meowstic,
  salazzle,
  golisopod,
};

const allSyncGrids = {
  de: {
    pikachuGridDataDE,
    torkoalGridDataDE,
    infernapeGridDataDE,
    dewgongGridDataDE,
    haxorusGridDataDE,
    kingdraGridDataDE,
    serperiorGridDataDE,
    vileplumeGridDataDE,
    mewGridDataDE,
    metagrossGridDataDE,
    charizardGridDataDE,
    palossandGridDataDE,
    liepardGridDataDE,
    rotomGridDataDE,
    houndoomGridDataDE,
    raichuGridDataDE,
    alakazamGridDataDE,
    helioliskGridDataDE,
    golisopodGridDataDE,
    salazzleGridDataDE,
    masquerainGridDataDE,
    meowsticGridDataDE,
    reuniclusGridDataDE,
  },
  en: {
    pikachuGridDataEN,
    torkoalGridDataEN,
    infernapeGridDataEN,
    dewgongGridDataEN,
    haxorusGridDataEN,
    kingdraGridDataEN,
    serperiorGridDataEN,
    vileplumeGridDataEN,
    mewGridDataEN,
    charizardGridDataEN,
    metagrossGridDataEN,
    palossandGridDataEN,
    liepardGridDataEN,
    rotomGridDataEN,
    houndoomGridDataEN,
    raichuGridDataEN,
    alakazamGridDataEN,
    helioliskGridDataEN,
    golisopodGridDataEN,
    salazzleGridDataEN,
    masquerainGridDataEN,
    meowsticGridDataEN,
    reuniclusGridDataEN,
  },
  es: {
    pikachuGridDataES,
    torkoalGridDataES,
    infernapeGridDataES,
    dewgongGridDataES,
    haxorusGridDataES,
    kingdraGridDataES,
    serperiorGridDataES,
    vileplumeGridDataES,
    mewGridDataES,
    metagrossGridDataES,
    charizardGridDataES,
    palossandGridDataES,
    liepardGridDataES,
    rotomGridDataES,
    houndoomGridDataES,
    raichuGridDataES,
    alakazamGridDataES,
    helioliskGridDataES,
    golisopodGridDataES,
    salazzleGridDataES,
    masquerainGridDataES,
    meowsticGridDataES,
    reuniclusGridDataES,
  },
  fr: {
    pikachuGridDataFR,
    torkoalGridDataFR,
    infernapeGridDataFR,
    dewgongGridDataFR,
    haxorusGridDataFR,
    kingdraGridDataFR,
    serperiorGridDataFR,
    vileplumeGridDataFR,
    mewGridDataFR,
    metagrossGridDataFR,
    charizardGridDataFR,
    palossandGridDataFR,
    liepardGridDataFR,
    rotomGridDataFR,
    houndoomGridDataFR,
    raichuGridDataFR,
    alakazamGridDataFR,
    helioliskGridDataFR,
    golisopodGridDataFR,
    salazzleGridDataFR,
    masquerainGridDataFR,
    meowsticGridDataFR,
    reuniclusGridDataFR,
  },
  it: {
    pikachuGridDataIT,
    torkoalGridDataIT,
    infernapeGridDataIT,
    dewgongGridDataIT,
    haxorusGridDataIT,
    kingdraGridDataIT,
    serperiorGridDataIT,
    vileplumeGridDataIT,
    mewGridDataIT,
    metagrossGridDataIT,
    charizardGridDataIT,
    palossandGridDataIT,
    liepardGridDataIT,
    rotomGridDataIT,
    houndoomGridDataIT,
    raichuGridDataIT,
    alakazamGridDataIT,
    helioliskGridDataIT,
    golisopodGridDataIT,
    salazzleGridDataIT,
    masquerainGridDataIT,
    meowsticGridDataIT,
    reuniclusGridDataIT,
  },
  ja: {
    pikachuGridDataJA,
    torkoalGridDataJA,
    infernapeGridDataJA,
    dewgongGridDataJA,
    haxorusGridDataJA,
    kingdraGridDataJA,
    serperiorGridDataJA,
    vileplumeGridDataJA,
    mewGridDataJA,
    metagrossGridDataJA,
    charizardGridDataJA,
    palossandGridDataJA,
    liepardGridDataJA,
    rotomGridDataJA,
    houndoomGridDataJA,
    raichuGridDataJA,
    alakazamGridDataJA,
    helioliskGridDataJA,
    golisopodGridDataJA,
    salazzleGridDataJA,
    masquerainGridDataJA,
    meowsticGridDataJA,
    reuniclusGridDataJA,
  },
  ko: {
    pikachuGridDataKO,
    torkoalGridDataKO,
    infernapeGridDataKO,
    dewgongGridDataKO,
    haxorusGridDataKO,
    kingdraGridDataKO,
    serperiorGridDataKO,
    vileplumeGridDataKO,
    mewGridDataKO,
    metagrossGridDataKO,
    charizardGridDataKO,
    palossandGridDataKO,
    liepardGridDataKO,
    rotomGridDataKO,
    houndoomGridDataKO,
    raichuGridDataKO,
    alakazamGridDataKO,
    helioliskGridDataKO,
    golisopodGridDataKO,
    salazzleGridDataKO,
    masquerainGridDataKO,
    meowsticGridDataKO,
    reuniclusGridDataKO,
  },
  zh: {
    pikachuGridDataZH,
    torkoalGridDataZH,
    infernapeGridDataZH,
    dewgongGridDataZH,
    haxorusGridDataZH,
    kingdraGridDataZH,
    serperiorGridDataZH,
    vileplumeGridDataZH,
    mewGridDataZH,
    metagrossGridDataZH,
    charizardGridDataZH,
    palossandGridDataZH,
    liepardGridDataZH,
    rotomGridDataZH,
    houndoomGridDataZH,
    raichuGridDataZH,
    alakazamGridDataZH,
    helioliskGridDataZH,
    golisopodGridDataZH,
    salazzleGridDataZH,
    masquerainGridDataZH,
    meowsticGridDataZH,
    reuniclusGridDataZH,
  },
};

// const gridUrlLookUpData = {}; // Used this to generate data/grids/allDisplacedGridData;
class GridMap extends Component {
  state = {
    initialRender: true,
    mapSizeBoundaries: {
      width: '100vw',
      height: 440,
      viewbox: '-35 -35 70 70',
    },
    screenWidth: document.body.clientWidth,
  };

  loadUrlGridData() {
    let pokemonFromUrl;
    if (getQueryStringValue('p')) {
      pokemonFromUrl = getQueryStringValue('p');
      this.props.selectPokemon(pokemonFromUrl);
    }

    // if user uses an url that includes grid data, generate gridmap based on url
    if (getQueryStringValue('grid')) {
      this.props.resetGrids();
      let remainingEnergy = Number(getQueryStringValue('e'));
      let orbSpent = Number(getQueryStringValue('o'));

      let cellData = {};
      let selectedCellByIdFromUrl = {};

      getQueryStringValue('grid').map((id) => {
        cellData =
          allSyncGrids[this.props.language][
            `${pokemonFromUrl.toLowerCase()}GridData${this.props.language.toUpperCase()}`
          ][Number(id)];

        selectedCellByIdFromUrl = {
          cellId: cellData.cellId,
          name: cellData.move.name,
          description: cellData.move.description,
          energy: cellData.move.energyCost,
        };

        return this.props.loadGridFromUrl(
          selectedCellByIdFromUrl,
          remainingEnergy,
          orbSpent
        );
      });
    }
  }

  componentDidMount() {
    setTimeout(() => this.fitMapToScreen(), 1000);
    window.addEventListener('resize', this.fitMapToScreen);
    this.loadUrlGridData();

    getQueryStringValue('p') && this.props.updateUrl(getQueryStringValue('p'));
  }

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.fitMapToScreen);
    // clearQueryStringValue();
  }

  fitMapToScreen = () => {
    const clientWrappingBoundaries = {
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    };
    let updatedMapSizeBoundaries = {
      ...this.state.mapSizeBoundaries,
    };

    if (clientWrappingBoundaries.width > 1200) {
      updatedMapSizeBoundaries = {
        width: 800,
        height: 768,
        viewbox: '-50 -50 100 100',
      };
    }

    if (
      clientWrappingBoundaries.width > 960 &&
      clientWrappingBoundaries.width < 1200
    ) {
      updatedMapSizeBoundaries = {
        width: '100vw',
        height: 768,
        viewbox: '-15 -50 100 100',
      };
    }

    if (clientWrappingBoundaries.width <= 960) {
      updatedMapSizeBoundaries = {
        width: '100vw',
        height: 768,
        viewbox: '-50 -50 100 100',
      };
    }

    if (clientWrappingBoundaries.width < 768) {
      updatedMapSizeBoundaries = {
        width: '100vw',
        height: (
          ((clientWrappingBoundaries.width / 100) * 73.28) / 2 +
          clientWrappingBoundaries.width
        ).toFixed(),
        viewbox: '-35 -35 70 70',
      };
    }

    this.setState((prevState) => ({
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

    if (!this.props.grid.selectedCellsById[data.cellId]) {
      this.props.addToGridList(data);
      this.props.subtractFromRemainingEnergy(data);
      this.props.updateUrl(
        this.props.pokemon.charAt(0).toUpperCase() + this.props.pokemon.slice(1)
      );
    } else {
      this.props.removeFromGridList(data);
      this.props.addBackToRemainingEnergy(data);
      this.props.updateUrl(
        this.props.pokemon.charAt(0).toUpperCase() + this.props.pokemon.slice(1)
      );
    }
  }

  renderHexagonCells = (classes) =>
    allSyncGrids[this.props.language][
      `${this.props.pokemon}GridData${this.props.language.toUpperCase()}`
    ].map((cell, index) => {
      // remove "Move:" from the start of moveName
      let moveName =
        cell.move.name.substring(0, 5) === 'Move:'
          ? cell.move.name.substring(6)
          : cell.move.name;

      const nameWithSyncLvRequirement = addSyncLvReq(
        this.props.pokemon,
        cell,
        moveName
      );

      // Used this to generate data/grids/allDisplacedGridData. TODO: refactor
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
          energy: cell.move.energyCost,
        },
        onMouseEnter: this.mouseEnter,
        onMouseLeave: this.mouseLeave,
        key: cell.cellId,
        q: cell.coords.q,
        r: cell.coords.r,
        s: 0,
        fill: getFillColorByMoveType({
          type: cell.ability.type,
          group: cell.move.group,
          isLocked: cell.move.locked,
        }),
        onClickHandler: (e, data) => this.handleClick(e, index, data),
        className: this.props.darkMode
          ? this.props.grid.selectedCellsById[cell.cellId]
            ? 'selected dark-mode'
            : 'dark-mode'
          : this.props.grid.selectedCellsById[cell.cellId]
          ? 'selected'
          : null,
      };

      return (
        <Hexagon {...hexagonProps}>
          <Text className={this.props.darkMode ? classes.darkMode : null}>
            {renderMoveName(cell.move.name, cell.ability.abilityId)}
          </Text>
          {this.state.screenWidth < 960 &&
          cell.move.energyCost !== undefined ? (
            <text
              className="energy-inside-grid"
              textAnchor="middle"
              x="0"
              y="1.6em"
              style={this.props.darkMode ? { fill: 'white' } : null}
            >
              ({cell.move.energyCost})
            </text>
          ) : null}
        </Hexagon>
      );
    });

  renderCenterGridText = (classes) => {
    // Only renders text when no picture available
    return allThumbnails[`${this.props.pokemon}`] === undefined ? (
      <Text className={classes.selectedPokemonCell}>{this.props.pokemon}</Text>
    ) : null;
  };

  render() {
    const { mapSizeBoundaries, initialRender } = this.state;
    const { classes } = this.props;

    // console.log(gridUrlLookUpData); // Used this to generate data/grids/allDisplacedGridData. TODO: refactor

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
            {this.renderHexagonCells(classes)}
          </Layout>
          <Pattern
            id={this.props.pokemon}
            link={allThumbnails[`${this.props.pokemon}`]}
            size={{ x: 10, y: 10 }}
          />
        </HexGrid>
        {this.state.screenWidth >= 960 &&
        this.props.grid.gridData.energy !== undefined ? (
          <ReactTooltip className="tooltip" effect="solid" id="skillTooltip">
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

const mapStateToProps = (state) => ({
  pokemon: state.pokemon.selectedPokemon.toLowerCase(),
  grid: state.grid,
  darkMode: state.darkMode.mode,
  language: state.language.currentLanguage,
});

export default connect(mapStateToProps, {
  selectPokemon,
  addToGridList,
  removeFromGridList,
  subtractFromRemainingEnergy,
  addBackToRemainingEnergy,
  resetGrids,
  loadGridFromUrl,
  updateUrl,
})(withStyles(styles)(GridMap));
