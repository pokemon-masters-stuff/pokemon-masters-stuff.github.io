import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import MovesAndSkillsModal from './Modal';
import UI from '../../utils/translations';

const MovesAndSkillsButton = (props) => {
  const language = useSelector((state) => state.language.currentLanguage);
  const { pokemon, grid, syncLevel } = props;

  const [
    isMovesAndSkillsModalVisible,
    setIsMovesAndSkillsModalVisible,
  ] = useState(false);

  const handleOnOpenMovesAndSkillsModal = () => {
    setIsMovesAndSkillsModalVisible(true);
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-info"
        onClick={handleOnOpenMovesAndSkillsModal}
        style={{ position: 'relative', zIndex: 999 }}
      >
        {UI['Moves & Skills'][language]}
      </button>
      <MovesAndSkillsModal
        pokemon={pokemon}
        grid={grid}
        syncLevel={syncLevel}
        language={language}
        isMovesAndSkillsModalVisible={isMovesAndSkillsModalVisible}
        setIsMovesAndSkillsModalVisible={setIsMovesAndSkillsModalVisible}
      />
    </Fragment>
  );
};

export default MovesAndSkillsButton;
