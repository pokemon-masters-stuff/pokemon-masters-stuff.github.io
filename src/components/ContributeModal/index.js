import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import InfoIcon from '@material-ui/icons/Info';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogActions from '@material-ui/core/DialogActions';
// import Button from '@material-ui/core/Button';
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import UI from "../../utils/translations";

const ContributeModal = (props) => {
  const language = useSelector((state) => state.language.currentLanguage);

  const [isContributeModalVisible, setIsContributeModalVisible] = useState(
    false
  );

  const handleOnOpenContributeModal = () => {
    setIsContributeModalVisible(true);
  };

  const handleOnCloseContributeModal = () => {
    setIsContributeModalVisible(false);
  };

  return (
    <Fragment>
      <ListItem button onClick={handleOnOpenContributeModal}>
        <ListItemIcon className={props.classes.listIcon}>
          <AccessibilityNewIcon />
        </ListItemIcon>
        <ListItemText primary={UI["Contribute"][language]} />
      </ListItem>

      <Dialog
        open={isContributeModalVisible}
        onClose={handleOnCloseContributeModal}
      >
        <DialogTitle>{UI["Contribute Title"][language]}</DialogTitle>
        <DialogContent dividers>
          <DialogContentText
            style={{
              display: "inline-block",
              wordBreak: "break-word",
              whiteSpace: "pre-line",
              paddingRight: 10,
            }}
          >
            Hi everyone. As you know some grids look kind of messy right now due
            to skill names spilling out over the edge of the hexagons. I want to
            make the grids more legible and I really need your help.
            <br />
            <br />
            For each language I've complied a list of skill names to be
            abbreviated. Please check them out and update them if you have time.
            Every little bit helps. Thank you.
            <br />
            <br />
            <ul>
              <li>
                <a
                  href="https://docs.google.com/document/d/1cbqSZfYxr-xEoC39mBWl3JD81Cgztq2OVVtQs0zSjpw/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  German
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1gWGFU8T31Tca1KRYe7VP8AnSbPf30z9nujMGSJfWdZ8/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spanish
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/19Vkn5ZVHSdwQmTiZTUs2W2cQTX3SbCjBmcmkKhBguoM/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  French
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1MORNFg9_ILZxQGNOtvuiQHeBQ1bZWiGasjDgU_Emefc/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Japanese
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1foljTMI6yFMaYx4PuJSPoaEpgTImAzr2eFg9W5W3Ktw/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Korean
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1MLDIZ16iI9CxP2_U4J4blzJHkiFySCs3nptAY4JthcI/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Traditional Chinese
                </a>
              </li>
              <li>Italian (Completed by Jo)</li>
              {/* <li>Spanish (Completed by Zinfogel)</li> */}
            </ul>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button
            target="_blank"
            href="https://docs.google.com/document/d/19HZYH4QvrnB-G52n18igDVOWtJKgvJUCxTk3v7Y6gEU/edit?usp=sharing"
            color="primary"
            autoFocus
          >
            Open link in new tab
          </Button>
        </DialogActions> */}
      </Dialog>
    </Fragment>
  );
};

export default ContributeModal;
