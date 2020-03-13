import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLikedBuilds } from '../../actions/actionCreators';
import BuildItem from './BuildItem';

const LikedBuilds = () => {
  const dispatch = useDispatch();
  const builds = useSelector(state => state.grid.builds);
  useEffect(() => {
    dispatch(getLikedBuilds());
  }, [getLikedBuilds]);

  return (
    <Fragment>
      {builds.map(build => (
        <BuildItem key={build._id} build={build} />
      ))}
    </Fragment>
  );
};

export default LikedBuilds;
