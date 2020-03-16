import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getBuilds,
  getMoreBuilds,
  clearBuilds
} from '../../../actions/actionCreators';
import InfiniteScroll from 'react-infinite-scroll-component';
import BuildItem from './BuildItem';
import Box from '@material-ui/core/Box';

class PopularBuilds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMoreItems: false
    };
    this.loadItems = this.loadItems.bind(this);
  }

  componentDidMount() {
    this.props.clearBuilds();
    this.setState({ hasMoreItems: true });
    this.props.getBuilds(this.props.filter, this.props.sort, 5);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.sort !== prevProps.sort ||
      this.props.filter !== prevProps.filter
    ) {
      this.setState({ hasMoreItems: true });
      this.props.getBuilds(this.props.filter, this.props.sort, 5);
    }
  }

  componentWillUnmount() {
    this.props.clearBuilds();
  }

  loadItems = () => {
    const { builds, totalCount, filter, sort } = this.props;
    let limit = Math.min(5, totalCount);
    let count = builds.length;

    if (builds.length >= totalCount) {
      this.setState({ hasMoreItems: false });
      return;
    }

    setTimeout(() => {
      this.props.getMoreBuilds(filter, sort, count, limit);
    }, 500);
  };

  render() {
    return (
      <InfiniteScroll
        style={{ overflowX: 'hidden' }}
        dataLength={this.props.builds.length}
        next={this.loadItems}
        hasMore={this.state.hasMoreItems}
        loader={
          <div
            className="alert alert-success"
            role="alert"
            key={`${Math.floor(Math.random() * 1000)}-min`}
          >
            Loading...
          </div>
        }
      >
              
        {this.props.builds.map(build => (
          <BuildItem key={build._id} build={build} />
        ))}
            
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = state => ({
  builds: state.grid.builds,
  sort: state.grid.sort,
  filter: state.grid.filter,
  totalCount: state.grid.totalCount
});

export default connect(mapStateToProps, {
  getBuilds,
  getMoreBuilds,
  clearBuilds
})(PopularBuilds);
