import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ShareBuildModal from "../common/ShareBuildModal";
import EditBuildModal from "../common/EditBuildModal";
import ReactTooltip from "react-tooltip";
import { HexGrid, Layout, Hexagon, Text, Pattern } from "../../Hexagon";
import styles from "./styles";
import Comments from "../common/Comments";
import {
  addLike,
  removeLike,
  deleteBuild,
} from "../../../actions/actionCreators";
import {
  getFillColorByMoveType,
  renderMoveName,
  // addSyncLvReq,
  removeHyphens,
} from "../../../utils/functions";
import { allThumbnails, allSyncGrids } from "../../../utils/constants";
import BuildDescription from "./BuildDescription";

class BuildItem extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      initialRender: true,
      mapSizeBoundaries: {
        width: "100vw",
        height: 440,
        viewbox: "-35 -35 70 70",
      },
      screenWidth: document.body.clientWidth,
    };
    this.handleClickLike = this.handleClickLike.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    setTimeout(() => this.fitMapToScreen(), 1000);
    window.addEventListener("resize", this.fitMapToScreen);
  }

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  componentWillUnmount() {
    this._isMounted = false;
    window.removeEventListener("resize", this.fitMapToScreen);
  }

  fitMapToScreen = () => {
    const clientWrappingBoundaries = {
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    };
    let updatedMapSizeBoundaries = {
      ...this.state.mapSizeBoundaries,
    };

    if (clientWrappingBoundaries.width <= 960) {
      updatedMapSizeBoundaries = {
        width: "100vw",
        height: 768,
        viewbox: "-50 -50 100 100",
      };
    }

    if (clientWrappingBoundaries.width < 768) {
      updatedMapSizeBoundaries = {
        width: "100vw",
        height: (
          ((clientWrappingBoundaries.width / 100) * 73.28) / 2 +
          clientWrappingBoundaries.width
        ).toFixed(),
        viewbox: "-35 -35 70 70",
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

  handleClickLike = (build, buildLiked, e) => {
    buildLiked
      ? this.props.removeLike(build._id)
      : this.props.addLike(build._id);
  };

  handleClickDelete = (build, e) => {
    window.confirm("Are you sure you wish to delete this build?") &&
      this.props.deleteBuild(build._id);
  };

  renderHexagonCells = (classes, pokemon, build) =>
    allSyncGrids[this.props.language][
      `${removeHyphens(pokemon)}GridData${this.props.language.toUpperCase()}`
    ].map((cell, index) => {
      // remove "Move:" from the start of moveName
      let moveName =
        cell.move.name.substring(0, 5) === "Move:"
          ? cell.move.name.substring(6)
          : cell.move.name;

      // const nameWithSyncLvRequirement = addSyncLvReq(pokemon, cell, moveName);

      const hexagonProps = {
        data: {
          cellId: cell.cellId,
          // name: nameWithSyncLvRequirement || moveName,
          name: moveName,
          description: cell.move.description,
          energy: cell.move.energyCost,
        },
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
            ? "selected dark-mode build"
            : "dark-mode build"
          : build.selectedCellsById[cell.cellId]
          ? "selected build"
          : "build",
      };
      return (
        <Hexagon {...hexagonProps}>
          <Text
            className={`build ${this.props.darkMode ? classes.darkMode : null}`}
          >
            {renderMoveName(
              cell.move.name,
              cell.ability.abilityId,
              this.props.language
            )}
          </Text>
          {this.state.screenWidth < 960 &&
          cell.move.energyCost !== undefined ? (
            <text
              className="energy-inside-grid"
              textAnchor="middle"
              x="0"
              y="1.6em"
              style={this.props.darkMode ? { fill: "white" } : null}
            >
              ({cell.move.energyCost})
            </text>
          ) : null}
        </Hexagon>
      );
    });

  renderCenterGridText = (classes, pokemon) => {
    // Only renders text when no picture available
    return allThumbnails[`${removeHyphens(pokemon)}`] === undefined ? (
      <Text className={classes.selectedPokemonCell}>
        {removeHyphens(pokemon)}
      </Text>
    ) : null;
  };

  renderIcons = (build, currentUser) => {
    const arrayOfUsersLikedThisBuild = build.likes.map((like) => {
      return like.user;
    });
    const buildLiked = arrayOfUsersLikedThisBuild.includes(currentUser._id);

    return (
      <Fragment>
        {currentUser._id === build.user ? (
          <Fragment>
            <IconButton
              value={build}
              data-toggle="modal"
              data-target={`#editBuildModal${build._id}`}
            >
              <EditIcon />
            </IconButton>
            <EditBuildModal index={build._id} description={build.description} />
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
            <span style={{ marginLeft: -6 }}>{build.likes.length}</span>
          </Fragment>
        ) : (
          <Fragment>
            <Button
              variant="outlined"
              data-toggle="modal"
              data-target={`#shareLinkModal${build._id}`}
              style={{ marginLeft: 10 }}
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
            <span style={{ marginLeft: -6 }}>{build.likes.length}</span>
          </Fragment>
        )}
      </Fragment>
    );
  };

  render() {
    const currentUser = this.props.auth.user || "";
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
        <Paper className={darkMode ? classes.buildNameDark : classes.buildName}>
          <div className="pl-1 pr-1">
            <span
              style={{
                fontWeight: "bold",
                color: "#bdbdbd",
              }}
            >
              Name:{" "}
            </span>
            <span style={{ color: "white" }}>{build.buildName}</span>
            <span style={{ fontWeight: "bold", color: "#bdbdbd" }}> by </span>
            <span style={{ color: "white" }}>{build.username}</span>
          </div>
        </Paper>
        <Divider light />
        <Paper>
          <div className="pl-1 pr-1">
            {this.renderIcons(build, currentUser)}
          </div>
        </Paper>
        <Divider light />
        <Paper
          style={
            !darkMode
              ? { backgroundColor: fade("#fafafa", 0.6) }
              : { backgroundColor: "black" }
          }
        >
          <BuildDescription build={build} classes={classes} />

          <Comments build={build} classes={classes} />

          <div className="mt-3 pb-3">
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
                  className={"center-grid"}
                >
                  {this.renderCenterGridText(classes, pokemon)}
                </Hexagon>
                {this.renderHexagonCells(classes, pokemon, build)}
              </Layout>
              <Pattern
                id={pokemon}
                link={allThumbnails[`${removeHyphens(pokemon)}`]}
                size={{ x: 10, y: 10 }}
              />
            </HexGrid>
            {this.props.grid.gridData.energy !== undefined ? (
              <ReactTooltip
                className="tooltip-mobile"
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
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemon: state.pokemon.selectedPokemon.toLowerCase(),
  grid: state.grid,
  darkMode: state.darkMode.mode,
  auth: state.auth,
  language: state.language.currentLanguage,
});

export default connect(mapStateToProps, { addLike, removeLike, deleteBuild })(
  withStyles(styles)(BuildItem)
);
