import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getTeams, clearTeams } from '../../../actions/actionCreators';
import TeamItemMobile from '../mobile/TeamItem';
import TeamItemDesktop from '../desktop/TeamItem';
import Pagination from '@material-ui/lab/Pagination';

class PopularTeams extends Component {
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
    this.props.clearTeams();
    this.props.getTeams(
      this.props.pokemonFilter,
      Number(this.props.syncLevelFilter.charAt(0)),
      this.props.sort,
      0,
      this.state.rowsPerPage
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.sort !== prevProps.sort ||
      this.props.pokemonFilter !== prevProps.pokemonFilter ||
      this.props.syncLevelFilter !== prevProps.syncLevelFilter
    ) {
      this.props.getTeams(
        this.props.pokemonFilter,
        Number(this.props.syncLevelFilter.charAt(0)),
        this.props.sort,
        0,
        5
      );
      this.setState({ page: 1 });
    }
    if (this.props.totalTeamCount !== prevProps.totalTeamCount) {
      this.setState({
        totalPageCount: Math.ceil(
          this.props.totalTeamCount / this.state.rowsPerPage
        ),
      });
    }
  }

  componentWillUnmount() {
    this.props.clearTeams();
  }

  handleChangePage = (event, newPage) => {
    const { totalTeamCount, pokemonFilter, syncLevelFilter, sort } = this.props;
    let limit = Math.min(5, totalTeamCount);
    let skip = (newPage - 1) * this.state.rowsPerPage;

    this.props.clearTeams();

    this.setState({ page: newPage });

    this.props.getTeams(
      pokemonFilter,
      Number(syncLevelFilter.charAt(0)),
      sort,
      skip,
      limit
    );
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
    this.setState({ page: 1 });
  };

  render() {
    const { page, totalPageCount } = this.state;
    const { screenSize } = this.props;
    return (
      // <div className="alert alert-info" role="alert">
      //   This page is temporarily disabled to allow for a feature update. Please
      //   check back later.
      // </div>

      <Fragment>
        {screenSize === 'small'
          ? this.props.teams.map((team) => (
              <TeamItemMobile key={team._id} team={team} />
            ))
          : this.props.teams.map((team) => (
              <TeamItemDesktop key={team._id} team={team} />
            ))}

        {totalPageCount ? (
          <Pagination
            page={page}
            onChange={this.handleChangePage}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
        <div style={{ height: '70px' }}></div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  teams: state.team.teams,
  sort: state.team.sort,
  pokemonFilter: state.team.pokemonFilter,
  syncLevelFilter: state.team.syncLevelFilter,
  totalTeamCount: state.team.totalTeamCount,
});

export default connect(mapStateToProps, {
  getTeams,
  clearTeams,
})(PopularTeams);
