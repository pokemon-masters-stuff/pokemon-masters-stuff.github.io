import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersBuilds } from '../../actions/actionCreators';
import BuildItem from './BuildItem';

const UsersBuilds = () => {
  const dispatch = useDispatch();
  const builds = useSelector(state => state.grid.builds);
  useEffect(() => {
    dispatch(getUsersBuilds());
  }, [getUsersBuilds]);

  return (
    <Fragment>
      {builds.map(build => (
        <BuildItem key={build._id} build={build} />
      ))}
    </Fragment>
  );
};

export default UsersBuilds;
