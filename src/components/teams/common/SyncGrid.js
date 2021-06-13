import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactTooltip from 'react-tooltip';
import { HexGrid, Layout, Hexagon, Text, Pattern } from '../../Hexagon';
import styles from './styles';
import {
  getFillColorByMoveType,
  renderMoveName,
  checkSelectabilityBasedOnSyncLv,
  getPokemonDataByTrainerId,
} from '../../../utils/functions';
import { allSyncGrids } from '../../../data/exportGridsAsObject';
import UI from '../../../utils/translations';
import { pokemonPictures } from '../../../images/Pokemon/exportImagesAsObject';

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

  renderHexagonCells = (classes, teamMemberData) =>
    allSyncGrids[this.props.language][
      `trainerId_${
        teamMemberData.trainerId
      }_GridData${this.props.language.toUpperCase()}`
    ].map((cell, index) => {
      // remove "Move:" from the start of moveName
      let moveName =
        cell.move.name.substring(0, 5) === 'Move:'
          ? cell.move.name.substring(6)
          : cell.move.name;

      const isSeletableBasedOnSyncLv = checkSelectabilityBasedOnSyncLv(
        teamMemberData.trainerId,
        cell,
        teamMemberData.syncLevel.toString()
      );

      const hexagonProps = {
        data: {
          cellId: cell.cellId,
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
        className: this.props.darkMode
          ? teamMemberData.selectedCellsById[cell.cellId]
            ? 'selected dark-mode'
            : 'dark-mode'
          : teamMemberData.selectedCellsById[cell.cellId]
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

  renderCenterGridText = (classes, teamMemberData) => {
    // Only renders text when no picture available
    return getPokemonDataByTrainerId(teamMemberData.trainerId)
      .monsterActorId === undefined ? (
      <Text className={classes.selectedPokemonCell}>:P</Text>
    ) : null;
  };

  render() {
    const { mapSizeBoundaries, initialRender } = this.state;
    const { classes, language, teamMemberData } = this.props;

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
              fill={`url(#${teamMemberData.trainerId})`}
              data={{ cellId: 0 }}
              className={'center-grid'}
            >
              {this.renderCenterGridText(classes, teamMemberData)}
            </Hexagon>
            {this.renderHexagonCells(classes, teamMemberData)}
          </Layout>
          <Pattern
            id={teamMemberData.trainerId}
            link={
              pokemonPictures[
                getPokemonDataByTrainerId(teamMemberData.trainerId)
                  .monsterActorId + '_128'
              ]
            }
            size={{ x: 10, y: 10 }}
          />
        </HexGrid>
        {this.props.grid.gridData.energy !== undefined ? (
          <ReactTooltip
            className="tooltip"
            effect="solid"
            id="skillTooltip"
            overridePosition={({ left, top }, _e, _t, node) => {
              return {
                top,
                left: typeof node === 'string' ? left : Math.max(left, 0),
              };
            }}
          >
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
  // addToTeamGridList,
  // removeFromTeamGridList,
  // subtractFromTeamRemainingEnergy,
  // addBackToTeamRemainingEnergy,
  // updateTeamUrl,
  // setTeamSyncLevels,
})(withStyles(styles)(GridMap));
