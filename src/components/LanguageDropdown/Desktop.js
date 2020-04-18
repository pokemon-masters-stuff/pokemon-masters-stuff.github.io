import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../../actions/actionCreators';
import UI from '../../utils/translations';

const LanguageDropdown = () => {
  const language = useSelector((state) => state.language.currentLanguage);
  const dispatch = useDispatch();
  const onClick = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn btn-dark dropdown-toggle"
        id="languageDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {UI['Language'][language]}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button
          className={`dropdown-item ${language === 'de' ? 'active' : null}`}
          type="button"
          value="de"
          onClick={onClick}
        >
          de
        </button>
        <button
          className={`dropdown-item ${language === 'en' ? 'active' : null}`}
          type="button"
          value="en"
          onClick={onClick}
        >
          en
        </button>
        <button
          className={`dropdown-item ${language === 'es' ? 'active' : null}`}
          type="button"
          value="es"
          onClick={onClick}
        >
          es
        </button>
        <button
          className={`dropdown-item ${language === 'fr' ? 'active' : null}`}
          type="button"
          value="fr"
          onClick={onClick}
        >
          fr
        </button>
        <button
          className={`dropdown-item ${language === 'it' ? 'active' : null}`}
          type="button"
          value="it"
          onClick={onClick}
        >
          it
        </button>
        <button
          className={`dropdown-item ${language === 'ja' ? 'active' : null}`}
          type="button"
          value="ja"
          onClick={onClick}
        >
          ja
        </button>
        <button
          className={`dropdown-item ${language === 'ko' ? 'active' : null}`}
          type="button"
          value="ko"
          onClick={onClick}
        >
          ko
        </button>
        <button
          className={`dropdown-item ${language === 'zh' ? 'active' : null}`}
          type="button"
          value="zh"
          onClick={onClick}
        >
          zh
        </button>
      </div>
    </div>
  );
};

export default LanguageDropdown;
