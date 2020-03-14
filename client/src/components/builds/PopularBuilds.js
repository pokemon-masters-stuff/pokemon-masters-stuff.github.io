import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBuilds } from '../../actions/actionCreators';
import InfiniteScroll from 'react-infinite-scroller';
import BuildItem from './BuildItem';

const PopularBuilds = () => {
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const dispatch = useDispatch();
  const builds = useSelector(state => state.grid.builds);

  useEffect(() => {
    dispatch(getBuilds());
  }, [getBuilds]);

  const loadItems = page => {
    console.log('loading more items');
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
