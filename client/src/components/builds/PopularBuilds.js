import React, {
  Component,
  Fragment,
  useState,
  useEffect,
  useRef,
  memo
} from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { getBuilds, getMoreBuilds } from '../../actions/actionCreators';
import InfiniteScroll from 'react-infinite-scroller';
import BuildItem from './BuildItem';

class PopularBuilds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMoreItems: false
    };
    this.loadItems = this.loadItems.bind(this);
  }

  // componentDidMount() {
  //   console.log('initial load', this.props.filter, this.props.sort, 5);
  //   // this.props.getBuilds(this.props.filter, this.props.sort, 5);
  //   if (this.props.builds.length < this.props.totalCount) {
  //     this.setState({ hasMoreItems: true });
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('this sort', this.props.sort);
  //   console.log('next props sort', nextProps.sort);
  //   return (
  //     this.state.hasMoreItems ||
  //     this.props.sort !== nextProps.sort ||
  //     this.props.filter !== nextProps.filter
  //   );
  // }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.sort !== prevProps.sort ||
      this.props.filter !== prevProps.filter
    ) {
      this.props.getBuilds(this.props.filter, this.props.sort, 5);
    }
    // if (this.props.builds.length < this.props.totalCount) {
    //   this.setState({ hasMoreItems: true });
    // }
  }

  loadItems = () => {
    let count = this.props.builds.length;
    let limit = Math.min(5, this.props.totalCount);
    console.log('subsequent load');
    console.log('builds.length', this.props.builds.length);
    if (this.props.builds.length === 0) {
      return;
    }
    // setCount(builds.length);
    console.log('count', count);
    console.log('limit', limit);
    console.log('totalCount', this.props.totalCount);
    if (count !== 0 && count + 5 <= this.props.totalCount) {
      console.log('loading 5 more items');
      console.log('count', count);
      console.log('limit', limit);
      console.log('totalCount', this.props.totalCount);

      this.props.getMoreBuilds(
        this.props.filter,
        this.props.sort,
        count,
        limit
      );
    } else {
      console.log('last batch');
      limit = this.props.totalCount - count;
      console.log('limit', limit);
      this.props.getMoreBuilds(
        this.props.filter,
        this.props.sort,
        count,
        limit
      );
      this.setState({ hasMoreItems: false });
    }

    //   setLimit(5);
    //
    //   console.log('count', count);
    //   console.log('limit', limit);
    //   dispatch(getMoreBuilds(filter, sort, count, limit));
    // } else {
    //   console.log('loading the rest');
    //   setLimit(totalCount - setCount);
    //   console.log('count', count);
    //   console.log('limit', limit);
    //   dispatch(getMoreBuilds(filter, sort, count, limit));
    //   setHasMoreItems(false);
    // }
  };
  render() {
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadItems}
        hasMore={this.state.hasMoreItems}
        loader={
          <div
            key={`${Math.floor(Math.random() * 1000)}-min`}
            className="loader"
          >
                      Loading ...         
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

export default connect(mapStateToProps, { getBuilds, getMoreBuilds })(
  PopularBuilds
);

// const PopularBuilds = () => {
//   const [hasMoreItems, setHasMoreItems] = useState(false);
//   const dispatch = useDispatch();
//   const builds = useSelector(state => state.grid.builds);
//   // const [count, setCount] = useState(builds.length);
//   // const [limit, setLimit] = useState(5);
//   const sort = useSelector(state => state.grid.sort);
//   const filter = useSelector(state => state.grid.filter);
//   const totalCount = useSelector(state => state.grid.totalCount);

//   useEffect(() => {
//     if (builds.length === 0) {
//       console.log('initial load', filter, sort, 5);
//       dispatch(getBuilds(filter, sort, 5));
//     }
//     setHasMoreItems(true);
//   }, []);

//   // const mounted = useRef();
//   // useEffect(() => {
//   //   if (!mounted.current) {
//   //     mounted.current = true;
//   //   } else {
//   //     dispatch(getBuilds(filter, sort, 5));
//   //   }
//   // });

//   const loadItems = () => {
//     let count = builds.length;
//     let limit = Math.min(5, totalCount);
//     console.log('subsequent load');
//     console.log('builds.length', builds.length);
//     if (builds.length === 0) {
//       return;
//     }
//     // setCount(builds.length);
//     console.log('count', count);
//     console.log('limit', limit);
//     console.log('totalCount', totalCount);
//     if (count !== 0 && count + 5 <= totalCount) {
//       console.log('loading 5 more items');
//       console.log('count', count);
//       console.log('limit', limit);
//       console.log('totalCount', totalCount);
//       dispatch(getMoreBuilds(filter, sort, count, limit));
//     } else {
//       limit = totalCount - count;
//       // dispatch(getMoreBuilds(filter, sort, count, limit));
//       // setHasMoreItems(false);
//     }

//     //   setLimit(5);
//     //
//     //   console.log('count', count);
//     //   console.log('limit', limit);
//     //   dispatch(getMoreBuilds(filter, sort, count, limit));
//     // } else {
//     //   console.log('loading the rest');
//     //   setLimit(totalCount - setCount);
//     //   console.log('count', count);
//     //   console.log('limit', limit);
//     //   dispatch(getMoreBuilds(filter, sort, count, limit));
//     //   setHasMoreItems(false);
//     // }
//   };

//   return (
//     <InfiniteScroll
//       pageStart={0}
//       loadMore={loadItems}
//       hasMore={hasMoreItems}
//       loader={
//         <div key={`${Math.floor(Math.random() * 1000)}-min`} className="loader">
//                     Loading ...
//         </div>
//       }
//     >
//
//       {builds.map(build => (
//         <BuildItem key={build._id} build={build} />
//       ))}
//
//     </InfiniteScroll>
//   );
// };
// export default PopularBuilds;
