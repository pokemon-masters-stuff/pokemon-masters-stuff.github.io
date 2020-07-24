import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getLikedBuilds, clearBuilds } from "../../../actions/actionCreators";
import BuildItemMobile from "../mobile/BuildItem";
import BuildItemDesktop from "../desktop/BuildItem";
import Pagination from "@material-ui/lab/Pagination";

class LikedBuilds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      rowsPerPage: 5,
      totalPageCount: null,
    };
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  componentDidMount() {
    this.props.clearBuilds();
    this.props.getLikedBuilds(
      this.props.filter,
      this.props.sort,
      0,
      this.state.rowsPerPage
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.sort !== prevProps.sort ||
      this.props.filter !== prevProps.filter
    ) {
      this.props.getLikedBuilds(this.props.filter, this.props.sort, 0, 5);
      this.setState({ page: 1 });
    }
    if (this.props.totalBuildCount !== prevProps.totalBuildCount) {
      this.setState({
        totalPageCount: Math.ceil(
          this.props.totalBuildCount / this.state.rowsPerPage
        ),
      });
    }
  }

  componentWillUnmount() {
    this.props.clearBuilds();
  }

  handleChangePage = (event, newPage) => {
    const { totalBuildCount, filter, sort } = this.props;
    let limit = Math.min(5, totalBuildCount);
    let skip = (newPage - 1) * this.state.rowsPerPage;

    this.props.clearBuilds();

    this.setState({ page: newPage });

    this.props.getLikedBuilds(filter, sort, skip, limit);
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
    this.setState({ page: 1 });
  };

  render() {
    const { page, totalPageCount } = this.state;
    const { screenSize } = this.props;
    return (
      <Fragment>
        {screenSize === "small"
          ? this.props.builds.map((build) => (
              <BuildItemMobile key={build._id} build={build} />
            ))
          : this.props.builds.map((build) => (
              <BuildItemDesktop key={build._id} build={build} />
            ))}

        {totalPageCount ? (
          <Pagination
            page={page}
            onChange={this.handleChangePage}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 15,
            }}
            count={totalPageCount}
            color="primary"
          />
        ) : (
          <div className="alert alert-info" role="alert">
            No record found.
          </div>
        )}
        <div style={{ height: "70px" }}></div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  builds: state.build.builds,
  sort: state.build.sort,
  filter: state.build.filter,
  totalBuildCount: state.build.totalBuildCount,
});

export default connect(mapStateToProps, {
  getLikedBuilds,
  clearBuilds,
})(LikedBuilds);
