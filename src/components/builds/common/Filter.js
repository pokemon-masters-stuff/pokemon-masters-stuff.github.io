import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPokemonNameByTrainerId } from '../../../utils/functions';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import SelectPokemonModal from '../../SelectPokemonDropdown/Modal';

const Filter = (props) => {
  const { classes, pokemonFilter, handleChangePokemonFilter, mode } = props;
  const language = useSelector((state) => state.language.currentLanguage);
  const [isFilterModalVisible, setIsFilterVisible] = useState(false);

  const handleOnOpenFilterModal = () => {
    setIsFilterVisible(true);
  };

  return (
    <>
      <Button
        variant={mode === 'desktop' ? 'text' : 'outlined'}
        style={{
          textTransform: 'none',
          fontFamily: 'inherit',
          fontSize: 'inherit',
        }}
        onClick={handleOnOpenFilterModal}
      >
        {pokemonFilter && pokemonFilter == 'None' ? <FilterListIcon /> : null}
        {pokemonFilter && pokemonFilter !== 'None'
          ? getPokemonNameByTrainerId(pokemonFilter, language)
          : 'Pokemon'}
      </Button>
      <SelectPokemonModal
        classes={classes}
        trainerId={pokemonFilter}
        onChangeHandler={handleChangePokemonFilter}
        isSelectPokemonModalOpen={isFilterModalVisible}
        setIsSelectPokemonModalOpen={setIsFilterVisible}
        usedAsFilter={true}
      />
    </>
  );
};

export default withRouter(Filter);
