import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ShareBuildModal from '../common/ShareBuildModal';
import EditBuildModal from '../common/EditBuildModal';
import ReactTooltip from 'react-tooltip';
import { HexGrid, Layout, Hexagon, Text, Pattern } from '../../Hexagon';
import Comments from '../common/Comments';
import styles from './styles';
import {
  getFillColorByMoveType,
  renderMoveName,
  addSyncLvReq
} from '../../../utils/functions';
import {
  addLike,
  removeLike,
  deleteBuild
} from '../../../actions/actionCreators';
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
  reuniclusGridDataZH
} from '../../../data';
import {} from '../../../actions/actionCreators';
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
  golisopod
} from '../../../images/PokemonThumbnails';

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
  golisopod
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
    reuniclusGridDataDE
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
    reuniclusGridDataEN
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
    reuniclusGridDataES
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
    reuniclusGridDataFR
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
    reuniclusGridDataIT
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
    reuniclusGridDataJA
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
    reuniclusGridDataKO
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
    reuniclusGridDataZH
  }
};

class BuildItem extends Component {
  _isMounted = false;

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
    this.handleClickLike = this.handleClickLike.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    setTimeout(() => this.fitMapToScreen(), 1000);
    window.addEventListener('resize', this.fitMapToScreen);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.initialRender ||
      this.state.mouseEntered !== nextState.mouseEntered ||
      this.props.language !== nextProps.language ||
      this.props.build.likes !== nextProps.build.likes ||
      this.props.build.comments !== nextProps.build.comments ||
      this.props.build.description !== nextProps.build.description ||
      this.props.darkMode !== nextProps.darkMode
    );
  }

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  componentWillUnmount() {
    this._isMounted = false;
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
        width: 800,
        height: 768,
        viewbox: '-50 -50 100 100'
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

    if (this._isMounted) {
      this.setState(prevState => ({
        ...prevState,
        initialRender: false,
        mapSizeBoundaries: {
          ...prevState.mapSizeBoundaries,
          ...updatedMapSizeBoundaries
        }
      }));
    }
  };

  mouseEnter = () => {
    this.setState({ mouseEntered: true });
  };

  mouseLeave = () => {
    this.setState({ mouseEntered: false });
  };

  handleClickLike = (build, buildLiked, e) => {
    buildLiked
      ? this.props.removeLike(build._id)
      : this.props.addLike(build._id);
  };

  handleClickDelete = (build, e) => {
    window.confirm('Are you sure you wish to delete this build?') &&
      this.props.deleteBuild(build._id);
  };

  renderHexagonCells = (classes, pokemon, build) =>
    allSyncGrids[this.props.language][
      `${pokemon}GridData${this.props.language.toUpperCase()}`
    ].map((cell, index) => {
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
          <Text
            className={`build ${this.props.darkMode ? classes.darkMode : null}`}
          >
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

  renderIcons = (build, currentUser) => {
    const arrayOfUsersLikedThisBuild = build.likes.map(like => {
      return like.user;
    });
    const buildLiked = arrayOfUsersLikedThisBuild.includes(currentUser._id);

    return (
      <Fragment>
        {currentUser._id === build.user ? (
          <Fragment>
            <div className="col-sm-4">
              <IconButton
                value={build}
                data-toggle="modal"
                data-target={`#editBuildModal${build._id}`}
              >
                <EditIcon />
              </IconButton>
              <EditBuildModal
                index={build._id}
                description={build.description}
              />
              <IconButton
                value={build}
                onClick={this.handleClickDelete.bind(this, build)}
              >
                <DeleteIcon />
              </IconButton>

              <Button
                variant="outlined"
                data-toggle="modal"
                data-target={`#shareLinkModal${build._id}`}
              >
                Share
              </Button>
              <ShareBuildModal index={build._id} url={build.url} />

              <IconButton
                value={build}
                onClick={this.handleClickLike.bind(this, build, buildLiked)}
              >
                {buildLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              {build.likes.length}
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="col-sm-3 offset-sm-1">
              <Button
                variant="outlined"
                data-toggle="modal"
                data-target={`#shareLinkModal${build._id}`}
              >
                Share
              </Button>
              <ShareBuildModal index={build._id} url={build.url} />

              <IconButton
                value={build}
                onClick={this.handleClickLike.bind(this, build, buildLiked)}
              >
                {buildLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              {build.likes.length}
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  };

  render() {
    const currentUser = this.props.auth.user || '';
    const { mapSizeBoundaries, initialRender } = this.state;
    const { classes, build, darkMode } = this.props;
    const pokemon = build.pokemon.toLowerCase();

    return initialRender ? (
      <div className={classes.progressWrapper}>
        <CircularProgress color="secondary" />
      </div>
    ) : (
      <div
        className={
          darkMode ? classes.buildContainerDark : classes.buildContainer
        }
      >
        <Paper
          elevation={3}
          className={darkMode ? classes.buildNameDark : classes.buildName}
        >
          <div className="row">
            <div className="col-sm-8">
              <span
                style={{
                  fontWeight: 'bold',
                  color: '#bdbdbd'
                }}
              >
                Build Name:{' '}
              </span>
              <span>
                {build.buildName}
                <span style={{ fontWeight: 'bold', color: '#bdbdbd' }}>
                  {' '}
                  by{' '}
                </span>
                {build.username}
              </span>
            </div>
            {this.renderIcons(build, currentUser)}
          </div>
        </Paper>
        <Divider />
        <Paper
          style={!darkMode ? { backgroundColor: fade('#fafafa', 0.4) } : null}
        >
          <div className="row">
            <div
              className="col-sm mt-2"
              style={{
                display: 'flex',
                flexFlow: 'row wrap',
                alignItems: 'center',
                marginLeft: -120
              }}
            >
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
                display: 'flex',
                flexFlow: 'row wrap',
                alignItems: 'center',
                marginLeft: -110
              }}
            >
              <div>
                <p>
                  <span style={{ fontWeight: 'bold', color: '#bdbdbd' }}>
                    Remaining Energy:{' '}
                  </span>
                  <span style={{ fontWeight: 'bold' }}>
                    {build.remainingEnergy}
                  </span>
                </p>
                <p>
                  <span style={{ fontWeight: 'bold', color: '#bdbdbd' }}>
                    Orbs Spent:{' '}
                  </span>
                  <span style={{ fontWeight: 'bold' }}>{build.orbSpent}</span>
                </p>
                <Typography style={{ color: '#bdbdbd', fontWeight: 'bold' }}>
                  Description:
                </Typography>
                <p
                  style={{
                    display: 'inline-block',
                    wordBreak: 'break-word',
                    whiteSpace: 'pre-line',
                    paddingRight: 10
                  }}
                >
                  {build.description || 'None'}
                </p>
                <p>
                  <span style={{ color: '#bdbdbd', fontWeight: 'bold' }}>
                    Date:{' '}
                  </span>
                  <span>{build.date.substring(0, 10)}</span>
                </p>
              </div>
            </div>
          </div>

          <Comments build={build} classes={classes} />
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemon.selectedPokemon.toLowerCase(),
  grid: state.grid,
  darkMode: state.darkMode.mode,
  auth: state.auth,
  language: state.language.currentLanguage
});

export default connect(mapStateToProps, { addLike, removeLike, deleteBuild })(
  withStyles(styles)(BuildItem)
);
