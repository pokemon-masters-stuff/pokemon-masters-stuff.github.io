import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBuilds, getMoreBuilds } from '../../actions/actionCreators';
import InfiniteScroll from 'react-infinite-scroller';
import BuildItem from './BuildItem';

const PopularBuilds = () => {
  const [hasMoreItems, setHasMoreItems] = useState(false);
  const dispatch = useDispatch();
  const builds = useSelector(state => state.grid.builds);
  // const [count, setCount] = useState(builds.length);
  // const [limit, setLimit] = useState(5);
  // const sort = useSelector(state => state.grid.sort);
  const filter = useSelector(state => state.grid.filter);
  const totalCount = useSelector(state => state.grid.totalCount);
  const sort = 'popular';
  useEffect(() => {
    if (builds.length === 0) {
      console.log('initial load', filter, sort, 5);
      dispatch(getBuilds(filter, sort, 5));
    }
    setHasMoreItems(true);
  }, []);

  const loadItems = () => {
    let count = builds.length;
    let limit = Math.min(5, totalCount);
    console.log('subsequent load');
    console.log('builds.length', builds.length);
    if (builds.length === 0) {
      return;
    }
    // setCount(builds.length);
    console.log('count', count);
    console.log('limit', limit);
    console.log('totalCount', totalCount);
    if (count !== 0 && count + 5 <= totalCount) {
      console.log('loading 5 more items');
      console.log('count', count);
      console.log('limit', limit);
      console.log('totalCount', totalCount);
      dispatch(getMoreBuilds(filter, sort, count, limit));
    } else {
      limit = totalCount - count;
      // dispatch(getMoreBuilds(filter, sort, count, limit));
      // setHasMoreItems(false);
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

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadItems}
      hasMore={hasMoreItems}
      loader={
        <div key={`${Math.floor(Math.random() * 1000)}-min`} className="loader">
                    Loading ...         
        </div>
      }
    >
            
      {builds.map(build => (
        <BuildItem key={build._id} build={build} />
      ))}
          
    </InfiniteScroll>
  );
};
export default PopularBuilds;
