import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { resetTeamGrids } from '../../actions/actionCreators';
import UI from '../../utils/translations';

const ResetTeamButton = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  //   const pokemon = useSelector((state) => state.pokemon.selectedPokemon);

  const handleOnClick = () => {
    dispatch(resetTeamGrids());
    // dispatch(updateUrl(pokemon));
  };

  return (
    <Button variant="outlined" onClick={handleOnClick}>
      {UI['Reset'][language]}
    </Button>
  );
};

export default ResetTeamButton;
