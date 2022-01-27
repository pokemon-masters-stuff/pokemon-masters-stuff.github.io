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

  const [isAnnouncementModalVisible, setIsAnnouncementModalVisible] =
    useState(false);

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
            Note: If you are having issues with a blank or black screen on our
            site, please try the following: (Credit to Hephesto)
            <ol style={{ marginLeft: 30 }}>
              <li>Open your Browser</li>
              <li>Click the three dots on the top right corner. ⋮</li>
              <li>Go to "Site Settings" (One of the last options)</li>
              <li>Click on "All sites" (First option)</li>
              <li>Search and click the "pokemon-masters-stuff" site</li>
              <li>Click "Clear & Reset"</li>
            </ol>
            Please note that this will remove your login and your saved
            builds&teams from the site as well, but will fix the issue. You can
            publish your builds&teams before clearing storage so you can access
            them later. Sorry for the inconvenience.
            <br />
            <br />
            1/27/2022:
            <br />
            Added new grids and eggmon.
            <br />
            <br />
            12/12/2021:
            <br />
            Added search field in the pokemon dropdown. Also fixed a bug related
            to Mewtwo's grid.
            <br />
            <br />
            12/21/2021:
            <br />
            Added new grids.
            <br />
            <br />
            11/24/2021:
            <br />
            Added new grids.
            <br />
            <br />
            10/27/2021:
            <br />
            Added new grids.
            <br />
            <br />
            9/28/2021:
            <br />
            Added new grids and eggmons.
            <br />
            <br />
            9/14/2021:
            <br />
            Added new grids.
            <br />
            <br />
            8/26/2021:
            <br />
            Added new grids and new eggmons.
            <br />
            <br />
            7/28/2021:
            <br />
            Added new grids.
            <br />
            <br />
            7/23/2021:
            <br />
            Added Skill Finder.
            <br />
            <br />
            7/20/2021:
            <br />
            Added stats and skills info for nongrid sync pairs.
            <br />
            <br />
            7/1/2021:
            <br />
            Happy Bidoof Day! Added some QoL improvements and a demo component
            to popular teams page so players can link to videos. The video
            player is from https://www.npmjs.com/package/react-player. All
            credits go to the original developers.
            <br />
            <br />
            6/28/2021:
            <br />
            Added new grids and eggmons.
            <br />
            <br />
            6/13/2021:
            <br />
            Added Popular Teams page.
            <br />
            <br />
            5/30/2021:
            <br />
            Added sync move level and lucky skills to builds. You can now filter
            by sync move level.
            <br />
            <br />
            5/27/2021:
            <br />
            Added new grids.
            <br />
            <br />
            4/26/2021:
            <br />
            Added new grids and Eggmons - Ninetales, Magmar, and Rapidash.
            <br />
            <br />
            3/29/2021:
            <br />
            Added new grids.
            <br />
            <br />
            2/27/2021:
            <br />
            Slightly improved skill name abbreviations for non-English versions.
            <br />
            <br />
            2/24/2021:
            <br />
            Added new grids and eggmons. Still missing the 4th moves for
            Clefable and Wigglytuff.
            <br />
            <br />
            1/26/2021:
            <br />
            Added new grids.
            <br />
            <br />
            1/15/2021:
            <br />
            Updated stats for Lv130.
            <br />
            <br />
            1/14/2021:
            <br />
            Fixed error where Swampert loses Dizzying Power after mega
            evolution.
            <br />
            <br />
            12/21/2020:
            <br />
            Added new grids and egg Pokemon.
            <br />
            <br />
            11/26/2020:
            <br />
            Added new grids and egg Pokemon.
            <br />
            <br />
            11/4/2020:
            <br />
            Added Volcarona.
            <br />
            <br />
            10/31/2020:
            <br />
            Added new egg Pokemon. Removed old Blastoise grid.
            <br />
            <br />
            10/28/2020:
            <br />
            Added new grids. New egg Pokemon will be added soon.
            <br />
            <br />
            10/3/2020:
            <br />
            Added Team Builder.
            <br />
            <br />
            9/28/2020:
            <br />
            Added new grids. Old Blastoise grid is kept for reference. Also
            updated stats to lv125.
            <br />
            <br />
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
