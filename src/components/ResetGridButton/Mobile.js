import React from 'react';
import Button from '@material-ui/core/Button';
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
    <Button variant="outlined" onClick={handleOnClick}>
      {UI['Reset'][language]}
    </Button>
  );
};

export default ResetGridButton;
