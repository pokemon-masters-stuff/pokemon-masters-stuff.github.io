import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import MovesAndSkillsModal from './Modal';
import UI from '../../utils/translations';

const MovesAndSkillsButton = () => {
  const language = useSelector((state) => state.language.currentLanguage);

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
        language={language}
        isMovesAndSkillsModalVisible={isMovesAndSkillsModalVisible}
        setIsMovesAndSkillsModalVisible={setIsMovesAndSkillsModalVisible}
      />
    </Fragment>
  );
};

export default MovesAndSkillsButton;
