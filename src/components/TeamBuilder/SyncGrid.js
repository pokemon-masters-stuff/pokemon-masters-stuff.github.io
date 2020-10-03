import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactTooltip from 'react-tooltip';
import { HexGrid, Layout, Hexagon, Text, Pattern } from '../Hexagon';
import styles from './styles';
import { getQueryStringValue } from '../../queryString';
import syncPairNamesAndIds from '../../data/syncPairNamesAndIds.json';
import {
  addToTeamGridList,
  removeFromTeamGridList,
  subtractFromTeamRemainingEnergy,
  addBackToTeamRemainingEnergy,
  updateTeamUrl,
  // setTeamSyncLevels,
} from '../../actions/actionCreators';
import {
  getFillColorByMoveType,
  renderMoveName,
  // addSyncLvReq,
  checkSelectabilityBasedOnSyncLv,
  removeHyphens,
  capitalizeSyncPairNameForUrl,
  getPokemonDataByName,
} from '../../utils/functions';
import { allSyncGrids } from '../../utils/constants';
import UI from '../../utils/translations';

// To combine with GridMap. Need to pass pokemon, grid, viewbox, and actions as props
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

  componentDidMount() {
    setTimeout(() => this.fitMapToScreen(), 1000);
    window.addEventListener('resize', this.fitMapToScreen);
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
        width: 650,
        height: 800,
        viewbox: '-38.5 -50 100 100',
      };
    }

    if (
      clientWrappingBoundaries.width > 960 &&
      clientWrappingBoundaries.width < 1200
    ) {
      updatedMapSizeBoundaries = {
        width: 650,
        height: 768,
        viewbox: '-38.5 -50 100 100',
      };
    }

    if (clientWrappingBoundaries.width <= 960) {
      updatedMapSizeBoundaries = {
        width: 650,
        height: 768,
        viewbox: '-38.5 -50 100 100',
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

    if (!this.props.grid.teamSelectedCellsById[this.props.slot][data.cellId]) {
      this.props.addToTeamGridList({ gridData: data, slot: this.props.slot });
      this.props.subtractFromTeamRemainingEnergy({
        gridData: data,
        slot: this.props.slot,
      });
      this.props.updateTeamUrl();
    } else {
      this.props.removeFromTeamGridList({
        gridData: data,
        slot: this.props.slot,
      });
      this.props.addBackToTeamRemainingEnergy({
        gridData: data,
        slot: this.props.slot,
      });
      this.props.updateTeamUrl();
    }
  }

  renderHexagonCells = (classes) =>
    allSyncGrids[this.props.language][
      `${removeHyphens(
        this.props.pokemon
      )}GridData${this.props.language.toUpperCase()}`
    ].map((cell, index) => {
      // remove "Move:" from the start of moveName
      let moveName =
        cell.move.name.substring(0, 5) === 'Move:'
          ? cell.move.name.substring(6)
          : cell.move.name;

      console.log('sync level', this.props.syncLevel);
      const isSeletableBasedOnSyncLv = checkSelectabilityBasedOnSyncLv(
        this.props.pokemon,
        cell,
        this.props.syncLevel
      );

      const hexagonProps = {
        data: {
          cellId: cell.cellId,
          // name: nameWithSyncLvRequirement || moveName,
          name: moveName,
          description: cell.move.description,
          energy: cell.move.energyCost,
          moveId: cell.ability.moveId,
          value: cell.ability.value,
          type: cell.ability.type,
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
        }),
        onClickHandler:
          isSeletableBasedOnSyncLv ||
          this.props.grid.teamSelectedCellsById[this.props.slot][cell.cellId]
            ? (e, data) => this.handleClick(e, index, data)
            : null,
        className: this.props.darkMode
          ? this.props.grid.teamSelectedCellsById[this.props.slot][cell.cellId]
            ? 'selected dark-mode'
            : 'dark-mode'
          : this.props.grid.teamSelectedCellsById[this.props.slot][cell.cellId]
          ? 'selected'
          : null,
      };

      const renderedMoveName = renderMoveName(
        cell.move.name,
        cell.ability.abilityId,
        this.props.language
      );

      return (
        <Hexagon {...hexagonProps}>
          <Text className={this.props.darkMode ? classes.darkMode : null}>
            {isSeletableBasedOnSyncLv ? renderedMoveName : ''}
          </Text>
          {this.state.screenWidth < 960 &&
          cell.move.energyCost !== undefined &&
          isSeletableBasedOnSyncLv ? (
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
    return getPokemonDataByName(this.props.pokemon).monsterActorId ===
      undefined ? (
      <Text className={classes.selectedPokemonCell}>
        {removeHyphens(this.props.pokemon)}
      </Text>
    ) : null;
  };

  render() {
    const { mapSizeBoundaries, initialRender } = this.state;
    const { classes, language } = this.props;

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
            link={`https://pokemonmasters.s3.us-east-2.amazonaws.com/Monster/128px/${
              getPokemonDataByName(this.props.pokemon).monsterActorId
            }_128.ktx.png`}
            size={{ x: 10, y: 10 }}
          />
        </HexGrid>
        {this.state.screenWidth >= 960 &&
        this.props.grid.gridData.energy !== undefined ? (
          <ReactTooltip className="tooltip" effect="solid" id="skillTooltip">
            <ul style={{ margin: 0, padding: 0, fontSize: 16 }}>
              <li>{this.props.grid.gridData.name}</li>
              <li>
                {UI['Energy'][language]}: {this.props.grid.gridData.energy}
              </li>
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
  grid: state.grid,
  darkMode: state.darkMode.mode,
  language: state.language.currentLanguage,
});

export default connect(mapStateToProps, {
  addToTeamGridList,
  removeFromTeamGridList,
  subtractFromTeamRemainingEnergy,
  addBackToTeamRemainingEnergy,
  updateTeamUrl,
  // setTeamSyncLevels,
})(withStyles(styles)(GridMap));
