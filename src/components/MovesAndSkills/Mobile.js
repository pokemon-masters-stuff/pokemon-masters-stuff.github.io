import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import MovesAndSkillsModal from './Modal';
import UI from '../../utils/translations';

const MovesAndSkillsButton = (props) => {
  const language = useSelector((state) => state.language.currentLanguage);
  const { pokemon, selectedCellsById, syncLevel } = props;

  const [
    isMovesAndSkillsModalVisible,
    setIsMovesAndSkillsModalVisible,
  ] = useState(false);

  const handleOnOpenMovesAndSkillsModal = () => {
    setIsMovesAndSkillsModalVisible(true);
  };
  return (
    <Fragment>
      <Button
        variant="outlined"
        style={{ marginTop: 10 }}
        onClick={handleOnOpenMovesAndSkillsModal}
      >
        {UI['Moves & Skills'][language]}
      </Button>

      <MovesAndSkillsModal
        pokemon={pokemon}
        selectedCellsById={selectedCellsById}
        syncLevel={syncLevel}
        language={language}
        isMovesAndSkillsModalVisible={isMovesAndSkillsModalVisible}
        setIsMovesAndSkillsModalVisible={setIsMovesAndSkillsModalVisible}
      />
    </Fragment>
  );
};

export default MovesAndSkillsButton;
