import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetGrids, updateUrl } from '../../actions/actionCreators';
import UI from '../../utils/translations';

const ResetGridButton = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  const pokemon = useSelector((state) => state.pokemon.selectedPokemon);

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
      {UI['Reset'][language]}
    </button>
  );
};

export default ResetGridButton;
