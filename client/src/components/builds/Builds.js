import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBuilds } from '../../actions/actionCreators';
import BuildItem from './BuildItem';

const Builds = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('getbuilds');
    dispatch(getBuilds());
  }, [getBuilds]);

  return (
    <div>
      <BuildItem />
    </div>
  );
};

export default Builds;
