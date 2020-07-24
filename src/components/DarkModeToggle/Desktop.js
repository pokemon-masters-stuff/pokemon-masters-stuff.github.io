import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../../actions/actionCreators";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const DarkModeToggle = () => {
  const darkMode = useSelector((state) => state.darkMode.mode);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("dark-mode");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnClick = () => {
    darkMode
      ? document.body.classList.remove("dark-mode")
      : document.body.classList.add("dark-mode");
    dispatch(changeMode());
  };

  return (
    <button className="dark-mode-toggle" onClick={handleOnClick}>
      <Brightness4Icon />
    </button>
  );
};

export default DarkModeToggle;
