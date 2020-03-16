import React from 'react';
import Button from '@material-ui/core/Button';
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
    <Button variant="outlined" onClick={handleOnClick}>
      Reset
    </Button>
  );
};

export default ResetGridButton;
