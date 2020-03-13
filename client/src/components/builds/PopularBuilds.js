import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBuilds } from '../../actions/actionCreators';
import BuildItem from './BuildItem';

const PopularBuilds = () => {
  const dispatch = useDispatch();
  const builds = useSelector(state => state.grid.builds);
  useEffect(() => {
    dispatch(getBuilds());
  }, [getBuilds]);

  return (
    <Fragment>
      {builds.map(build => (
        <BuildItem key={build._id} build={build} />
      ))}
    </Fragment>
  );
};

export default PopularBuilds;
