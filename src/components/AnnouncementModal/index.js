import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import UI from '../../utils/translations';

const AnnouncementModal = (props) => {
  const language = useSelector((state) => state.language.currentLanguage);

  const [isAnnouncementModalVisible, setIsAnnouncementModalVisible] = useState(
    false
  );

  const handleOnOpenAnnouncementModal = () => {
    setIsAnnouncementModalVisible(true);
  };

  const handleOnCloseAnnouncementModal = () => {
    setIsAnnouncementModalVisible(false);
  };

  return (
    <Fragment>
      <ListItem button onClick={handleOnOpenAnnouncementModal}>
        <ListItemIcon className={props.classes.listIcon}>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary={UI['Announcements'][language]} />
      </ListItem>

      <Dialog
        open={isAnnouncementModalVisible}
        onClose={handleOnCloseAnnouncementModal}
      >
        <DialogTitle>{UI['Announcements'][language]}</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            9/7/2020:
            <br />
            Added new grids.
            <br />
            <br />
            8/27/2020:
            <br />
            Added Italian skill name abbreviations for the July sync grids.
            Thanks to Jo from Discord!
            <br />
            <br />
            8/25/2020:
            <br />
            Added new grids and egg pokemon.
            <br />
            <br />
            8/22/2020:
            <br />
            Updated German UI and added a lot more German skill name
            abbreviations thanks to Bistacompact!
            <br />
            <br />
            8/2/2020:
            <br />
            Added German skill name abbreviations thanks to Bistacompact.
            <br />
            <br />
            7/29/2020:
            <br />
            Added new grids and egg pokemon.
            <br />
            <br />
            7/22/2020:
            <br />
            Added Egg Pokemon page.
            <br />
            <br />
            7/21/2020:
            <br />
            Added Italian skill name abbreviations for the new sync grids.
            Thanks to Jo from Discord!
            <br />
            <br />
            6/29/2020:
            <br />
            Added more skill name abbreviations. Thanks to props777 for the
            Japanese version, Azonite for the Chinese version, Rheia for the
            Korean version, Palpal and Tijklify for the French version, and
            Zinfogel for the Spanish version!
            <br />
            <br />
            6/28/2020:
            <br />
            Added Gacha Odds Calculator. Added Spanish skill name abbreviations
            thanks to Zinfogel.
            <br />
            <br />
            6/25/2020:
            <br />
            Added sync grids for Hilda, Koga, Morty, and Serena.
            <br />
            <br />
            6/23/2020:
            <br />
            Added stats to the Moves&Skills modal.
            <br />
            <br />
            6/9/2020:
            <br />
            Added Italian skill name abbreviations for the new sync grids.
            Thanks to Jo from Discord!
            <br />
            <br />
            6/3/2020:
            <br />
            Added Moves and Skills modal. Popular Builds button moved into
            sidebar.
            <br />
            <br />
            5/25/2020:
            <br />
            Added grids for Starmie, Torterra, Empoleon, Sharpedo, and Leavanny.
            <br />
            <br />
            5/9/2020:
            <br />
            Added Spanish skill name abbreviations for all sync grids thanks to
            Felipow and Zinfogel. I really appreciate your help!
            <br />
            <br />
            5/8/2020:
            <br />
            1. You can now select sync levels and the grids will change
            accordingly. Also added to url so other people with the link will
            see the same thing
            <br />
            2. Further shortened url. Thanks to u/f3xjc for teaching me how to
            b64 encode!
            <br />
            <br />
            5/7/2020:
            <br />
            Added Italian skill name abbreviations for the new sync grids.
            Thanks to Jo from Discord!
            <br />
            <br />
            4/30/2020:
            <br />
            Fixed French UI translation errors thanks to EternalStay!
            <br />
            <br />
            4/27/2020:
            <br />
            Added grids for Garchomp, Lucario, Milotic, Swanna, Gallade, and
            Steelix.
            <br />
            <br />
            4/19/2020:
            <br />
            Added multi-language support for UI. Credit to Jo from Discord for
            the Italian translations. He also abbreviated all the Italian skill
            names. It was a lot of work so many thanks to him!
            <br />
            <br />
            For the other languages I relied on Google Translate. If you see any
            mistranslation, you can help me correct it by editing this Google
            Doc:
            <br />
            https://docs.google.com/document/d/19HZYH4QvrnB-G52n18igDVOWtJKgvJUCxTk3v7Y6gEU/edit?usp=sharing
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            target="_blank"
            href="https://docs.google.com/document/d/19HZYH4QvrnB-G52n18igDVOWtJKgvJUCxTk3v7Y6gEU/edit?usp=sharing"
            color="primary"
            autoFocus
          >
            Open link in new tab
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default AnnouncementModal;
