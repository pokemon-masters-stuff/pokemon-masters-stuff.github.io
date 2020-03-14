import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBuilds } from '../../actions/actionCreators';
import InfiniteScroll from 'react-infinite-scroller';
import BuildItem from './BuildItem';

const PopularBuilds = () => {
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const dispatch = useDispatch();
  const builds = useSelector(state => state.grid.builds);
  const sort = useSelector(state => state.grid.sort);
  const filter = useSelector(state => state.grid.filter);
  const count = useSelector(state => state.grid.count);

  useEffect(() => {
    // dispatch(getBuilds(filter, sort, skip, limit));
    dispatch(getBuilds(filter, sort, 0, 5));
  }, [getBuilds]);

  const loadItems = page => {
    if (builds.length <= count) {
      console.log('loading more items');
      dispatch(getBuilds(filter, sort, 5, 5));
    } else {
      setHasMoreItems(false);
    }
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
