import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetGrids, updateUrl } from '../../actions/actionCreators';

const ResetGridButton = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemon.selectedPokemon);

  const handleOnClick = () => {
    dispatch(resetGrids());
    dispatch(updateUrl(pokemon));
  };

  return (
    <button
      type="button"
      className="btn btn-warning ml-2"
      onClick={handleOnClick}
      style={{ position: 'relative', zIndex: 999 }}
    >
      Reset
    </button>
  );
};

export default ResetGridButton;
