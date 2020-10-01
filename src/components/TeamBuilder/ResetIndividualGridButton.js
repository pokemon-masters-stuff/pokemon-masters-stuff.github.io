import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import {
  resetIndividualGrid,
  updateTeamUrl,
} from '../../actions/actionCreators';
import UI from '../../utils/translations';

const ResetGridButton = (props) => {
  const { slot } = props;
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  //   const pokemon = useSelector((state) => state.pokemon.selectedPokemon);

  const handleOnClick = () => {
    dispatch(resetIndividualGrid(slot));
    dispatch(updateTeamUrl());
  };

  return (
    <Button variant="outlined" onClick={handleOnClick}>
      {UI['Reset'][language]}
    </Button>
  );
};

export default ResetGridButton;
