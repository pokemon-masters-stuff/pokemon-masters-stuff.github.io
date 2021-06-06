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
import ShareTeamModal from '../common/ShareTeamModal';
import EditTeamModal from '../common/EditTeamModal';
import ReactTooltip from 'react-tooltip';
import { HexGrid, Layout, Hexagon, Text, Pattern } from '../../Hexagon';
import Comments from '../common/Comments';
import styles from './styles';
import {
  addLike,
  removeLike,
  deleteTeam,
} from '../../../actions/actionCreators';
import {
  getFillColorByMoveType,
  renderMoveName,
  getPokemonDataByTrainerId,
  checkSelectabilityBasedOnSyncLv,
} from '../../../utils/functions';
import { allSyncGrids } from '../../../data/exportGridsAsObject';
import { pokemonPictures } from '../../../images/Pokemon/exportImagesAsObject';
import UI from '../../../utils/translations';
import LUCKY_SKILL_LIST from '../../../data/luckySkills.json';
import { lookupTrainerIdByPokemonName } from '../../../data/lookupTables';

class TeamItem extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      initialRender: true,
      mapSizeBoundaries: {
        width: '100vw',
        height: 440,
        viewbox: '-35 -35 70 70',
      },
      screenWidth: document.body.clientWidth,
      mouseEntered: false,
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
      this.props.build.syncLevel !== nextProps.build.syncLevel ||
      this.props.build.luckySkillIds !== nextProps.build.luckySkillIds ||
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
        width: 800,
        height: 768,
        viewbox: '-50 -50 100 100',
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

    if (this._isMounted) {
      this.setState((prevState) => ({
        ...prevState,
        initialRender: false,
        mapSizeBoundaries: {
          ...prevState.mapSizeBoundaries,
          ...updatedMapSizeBoundaries,
        },
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
      this.props.deleteTeam(build._id);
  };

  renderHexagonCells = (classes, trainerId, build) =>
    allSyncGrids[this.props.language][
      `trainerId_${trainerId}_GridData${this.props.language.toUpperCase()}`
    ].map((cell, index) => {
      // remove "Move:" from the start of moveName
      let moveName =
        cell.move.name.substring(0, 5) === 'Move:'
          ? cell.move.name.substring(6)
          : cell.move.name;

      // const nameWithSyncLvRequirement = addSyncLvReq(pokemon, cell, moveName);
      let isSeletableBasedOnSyncLv = true;
      if (build.syncLevel) {
        isSeletableBasedOnSyncLv = checkSelectabilityBasedOnSyncLv(
          trainerId,
          cell,
          build.syncLevel.toString()
        );
      }

      const hexagonProps = {
        data: {
          cellId: cell.cellId,
          // name: nameWithSyncLvRequirement || moveName,
          name: moveName,
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
        className: this.props.darkMode
          ? build.selectedCellsById[cell.cellId]
            ? 'selected dark-mode build'
            : 'dark-mode build'
          : build.selectedCellsById[cell.cellId]
          ? 'selected build'
          : 'build',
      };
      return (
        <Hexagon {...hexagonProps}>
          <Text
            className={`build ${this.props.darkMode ? classes.darkMode : null}`}
          >
            {isSeletableBasedOnSyncLv
              ? renderMoveName(
                  cell.move.name,
                  cell.ability.abilityId,
                  this.props.language
                )
              : ''}
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

  renderCenterGridText = (classes, trainerId) => {
    // Only renders text when no picture available
    return getPokemonDataByTrainerId(trainerId).monsterActorId === undefined ? (
      <Text className={classes.selectedPokemonCell}>:P</Text>
    ) : null;
  };

  renderIcons = (build, currentUser) => {
    const arrayOfUsersLikedThisTeam = build.likes.map((like) => {
      return like.user;
    });
    const buildLiked = arrayOfUsersLikedThisTeam.includes(currentUser._id);

    return (
      <Fragment>
        {currentUser._id === build.user ? (
          <Fragment>
            <div className="col-sm-4">
              <IconButton
                value={build}
                data-toggle="modal"
                data-target={`#editTeamModal${build._id}`}
              >
                <EditIcon />
              </IconButton>
              <EditTeamModal
                index={build._id}
                description={build.description}
                syncLevel={build.syncLevel}
                luckySkillIds={build.luckySkillIds}
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
              <ShareTeamModal index={build._id} url={build.url} />

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
              <ShareTeamModal index={build._id} url={build.url} />

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
    const { classes, build, darkMode, language } = this.props;
    const pokemon = build.pokemon.toLowerCase();
    const trainerId = build.trainerId
      ? build.trainerId
      : lookupTrainerIdByPokemonName[build.pokemon.toLowerCase()];

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
                  color: '#bdbdbd',
                }}
              >
                {UI['Team name'][language]}:{' '}
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
                marginLeft: -120,
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
                    fill={`url(#${trainerId})`}
                    data={{ cellId: 0 }}
                    className={'center-grid'}
                  >
                    {this.renderCenterGridText(classes, trainerId)}
                  </Hexagon>
                  {this.renderHexagonCells(classes, trainerId, build)}
                </Layout>
                <Pattern
                  id={trainerId}
                  link={
                    pokemonPictures[
                      getPokemonDataByTrainerId(trainerId).monsterActorId +
                        '_128'
                    ]
                  }
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
                marginLeft: -110,
              }}
            >
              <div>
                <p>
                  <span style={{ fontWeight: 'bold', color: '#bdbdbd' }}>
                    {UI['Remaining Energy'][language]}:{' '}
                  </span>
                  <span style={{ fontWeight: 'bold' }}>
                    {build.remainingEnergy}
                  </span>
                </p>
                <p>
                  <span style={{ fontWeight: 'bold', color: '#bdbdbd' }}>
                    {UI['Orbs Spent'][language]}:{' '}
                  </span>
                  <span style={{ fontWeight: 'bold' }}>{build.orbSpent}</span>
                </p>

                {build.syncLevel ? (
                  <p>
                    <span style={{ fontWeight: 'bold', color: '#bdbdbd' }}>
                      {UI['Sync Move Level'][language]}:{' '}
                    </span>
                    <span style={{ fontWeight: 'bold' }}>
                      {build.syncLevel === 3 ? '3+' : build.syncLevel}
                    </span>
                  </p>
                ) : null}

                {build.luckySkillIds && build.luckySkillIds.length !== 0 ? (
                  <p>
                    <span style={{ fontWeight: 'bold', color: '#bdbdbd' }}>
                      {UI['Lucky Skill'][language]}:{' '}
                    </span>
                    <span>
                      {LUCKY_SKILL_LIST[build.luckySkillIds[0]][language] ||
                        '-'}
                    </span>
                  </p>
                ) : null}

                <Typography style={{ color: '#bdbdbd', fontWeight: 'bold' }}>
                  {UI['Description'][language]}:
                </Typography>
                <p
                  style={{
                    display: 'inline-block',
                    wordBreak: 'break-word',
                    whiteSpace: 'pre-line',
                    paddingRight: 10,
                  }}
                >
                  {build.description || 'None'}
                </p>
                <p>
                  <span style={{ color: '#bdbdbd', fontWeight: 'bold' }}>
                    {UI['Date'][language]}:{' '}
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

const mapStateToProps = (state) => ({
  // pokemon: state.pokemon.selectedPokemon.toLowerCase(),
  grid: state.grid,
  darkMode: state.darkMode.mode,
  auth: state.auth,
  language: state.language.currentLanguage,
});

export default connect(mapStateToProps, { addLike, removeLike, deleteTeam })(
  withStyles(styles)(TeamItem)
);
