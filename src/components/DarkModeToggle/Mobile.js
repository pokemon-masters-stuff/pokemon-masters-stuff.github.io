import React from "react";
import Switch from "@material-ui/core/Switch";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../../actions/actionCreators";

export default function DarkModeToggle() {
  const darkMode = useSelector((state) => state.darkMode.mode);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("dark-mode");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = () => {
    darkMode
      ? document.body.classList.remove("dark-mode")
      : document.body.classList.add("dark-mode");
    dispatch(changeMode());
  };

  return (
    <Switch
      checked={darkMode}
      onChange={handleChange}
      value="checked"
      color="secondary"
      inputProps={{ "aria-label": "secondary checkbox" }}
    />
  );
}
