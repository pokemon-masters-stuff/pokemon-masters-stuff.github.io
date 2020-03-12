import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ReactTooltip from 'react-tooltip';
import { HexGrid, Layout, Hexagon, Text, Pattern } from '../Hexagon';
import styles from './styles';
import {
  getFillColorByMoveType,
  renderMoveName,
  addSyncLvReq
} from '../../utils/functions';
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
  alakazamGridData
} from '../../data';
import {} from '../../actions/actionCreators';
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
  haxorus
} from '../../images/PokemonThumbnails/';

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
  haxorus
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

class BuildItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialRender: true,
      mapSizeBoundaries: {
        width: '100vw',
        height: 440,
        viewbox: '-35 -35 70 70'
      },
      screenWidth: document.body.clientWidth,
      mouseEntered: false
    };
  }

  componentDidMount() {
    setTimeout(() => this.fitMapToScreen(), 1000);
    window.addEventListener('resize', this.fitMapToScreen);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.initialRender ||
      this.state.mouseEntered !== nextState.mouseEntered
    );
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

  mouseEnter = () => {
    this.setState({ mouseEntered: true });
  };

  mouseLeave = () => {
    this.setState({ mouseEntered: false });
  };

  renderHexagonCells = (classes, pokemon, build) =>
    allSyncGrids[`${pokemon}GridData`].map((cell, index) => {
      // remove "Move:" from the start of moveName
      let moveName =
        cell.move.name.substring(0, 5) === 'Move:'
          ? cell.move.name.substring(6)
          : cell.move.name;

      const nameWithSyncLvRequirement = addSyncLvReq(pokemon, cell, moveName);

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
        fill: getFillColorByMoveType({
          type: cell.ability.type,
          group: cell.move.group,
          isLocked: cell.move.locked
        }),
        className: this.props.darkMode
          ? build.selectedCellsById[cell.cellId]
            ? 'selected dark-mode build'
            : 'dark-mode build'
          : build.selectedCellsById[cell.cellId]
          ? 'selected build'
          : 'build'
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

  renderCenterGridText = (classes, pokemon) => {
    // Only renders text when no picture available
    return allThumbnails[`${pokemon}`] === undefined ? (
      <Text className={classes.selectedPokemonCell}>{pokemon}</Text>
    ) : null;
  };

  render() {
    const { mapSizeBoundaries, initialRender } = this.state;
    const { classes, build } = this.props;
    const pokemon = build.pokemon.toLowerCase();

    return initialRender ? (
      <div className={classes.progressWrapper}>
        <CircularProgress color="secondary" />
      </div>
    ) : (
      <div>
        <Paper elevation={3} className={classes.buildName}>
          <div className="row">
            <div className="col-sm-9">
              <Typography
                variant="displayInline"
                color="inherit"
                style={{ fontWeight: 'bold' }}
              >
                Build Name:{' '}
              </Typography>
              <Typography variant="displayInline">
                {build.buildName} by {build.username}
              </Typography>
            </div>
            <div className="col-sm-1 mr-0">Share</div>
            <div className="col-sm-1 offset-sm-1">
              <FavoriteBorderIcon /> {build.likes.length}
            </div>
          </div>
        </Paper>

        <div
          className="row"
          style={{
            backgroundColor: '#1E1E1E',
            marginRight: -3,
            marginLeft: -3
          }}
        >
          <div
            className="col-sm mt-2"
            style={{
              marginLeft: -150,
              display: 'flex',
              flexFlow: 'row wrap',
              alignItems: 'center'
            }}
          >
            {/* <button
              className="btn btn-primary border"
              style={{ marginLeft: 150, width: 250 }}
            >
              Like
            </button>
            <button
              className="btn btn-success border"
              style={{ marginLeft: 10, width: 250 }}
            >
              Share
            </button> */}
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
                  fill={`url(#${pokemon})`}
                  data={{ cellId: 0 }}
                  className={'center-grid'}
                >
                  {this.renderCenterGridText(classes, pokemon)}
                </Hexagon>
                {this.renderHexagonCells(classes, pokemon, build)}
              </Layout>
              <Pattern
                id={pokemon}
                link={allThumbnails[`${pokemon}`]}
                size={{ x: 10, y: 10 }}
              />
            </HexGrid>
            {this.state.screenWidth >= 960 &&
            this.props.grid.gridData.energy !== undefined ? (
              <ReactTooltip
                className="tooltip"
                effect="solid"
                id="skillTooltip"
              >
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
          <div
            className="col-sm"
            style={{
              paddingLeft: 0,
              marginLeft: -80,
              display: 'flex',
              flexFlow: 'row wrap',
              alignItems: 'center'
            }}
          >
            <div>
              <p style={{ color: 'white', fontWeight: 'bold' }}>
                Remaining Energy: {build.remainingEnergy}
              </p>
              <p style={{ color: 'white', fontWeight: 'bold' }}>
                Orbs Spent: {build.orbSpent}
              </p>
              <Typography style={{ color: 'white', fontWeight: 'bold' }}>
                Description:
              </Typography>
              <p style={{ color: 'white' }}>{build.description || 'none'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemon.selectedPokemon.toLowerCase(),
  grid: state.grid,
  darkMode: state.darkMode.mode
});

export default connect(mapStateToProps, {})(withStyles(styles)(BuildItem));
