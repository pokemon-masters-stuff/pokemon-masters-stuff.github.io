import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Nav from '../MainAppbar/Nav';
import { NavigationMobile } from '../Navigation';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 150,
    },
  },
}));

function binomial(n, k, p) {
  if (typeof n !== 'number' || typeof k !== 'number' || typeof p !== 'number') {
    return false;
  }
  let coeff = 1;
  let x = n - k + 1;
  for (x; x <= n; x++) coeff *= x;
  for (x = 1; x <= k; x++) coeff /= x;

  return coeff * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

const GachaOddsCalculator = () => {
  const classes = useStyles();
  const darkMode = useSelector((state) => state.darkMode.mode);
  const [paidScouts, setPaidScouts] = useState(0);
  const [nonPaidScouts, setNonPaidScouts] = useState(0);
  const [focusRate, setFocusRate] = useState(2);
  const [fiveStarRate, setFiveStarRate] = useState(7);
  const [isNavOpened, setIsNavOpened] = useState(false);

  const handleChangeFocusRate = (event) => {
    setFocusRate(parseFloat(event.target.value));
  };

  const handleChangeFiveStarRate = (event) => {
    setFiveStarRate(parseFloat(event.target.value));
  };

  const handleChangePaidScouts = (event) => {
    setPaidScouts(parseFloat(event.target.value));
  };
  const handleChangeNonPaidScouts = (event) => {
    setNonPaidScouts(parseFloat(event.target.value));
  };

  const handleOnCloseNav = () => setIsNavOpened(false);

  const handleOnOpenNav = () => setIsNavOpened(true);

  let totalScouts = parseFloat(paidScouts + nonPaidScouts);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : null}`}>
      <div className="content">
        <div className="container container-s">
          <AppBar position="fixed">
            <Nav onOpenNavHandler={handleOnOpenNav} />
            <NavigationMobile
              isOpened={isNavOpened}
              onCloseHandler={handleOnCloseNav}
            />{' '}
          </AppBar>
          <Paper width={1} style={{ padding: 50, marginTop: 40 }}>
            <form className={classes.root}>
              <h3>Gacha Odds Calculator</h3>
              <Divider />
              <br />
              <h4>Inputs: </h4>
              <div
                className="row"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <TextField
                  id="outlined-number"
                  label="Rate of Target Unit"
                  type="number"
                  value={focusRate}
                  onChange={handleChangeFocusRate}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  margin="dense"
                />{' '}
                <Tooltip
                  title="2% for focus unit. Check in-game offering rate for non-focus
                units"
                  placement="top"
                  enterTouchDelay
                >
                  <HelpOutlineIcon />
                </Tooltip>
              </div>
              <div
                className="row"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <TextField
                  id="outlined-number"
                  label="Rate of 5-Star Unit"
                  type="number"
                  value={fiveStarRate}
                  onChange={handleChangeFiveStarRate}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  margin="dense"
                />{' '}
                <Tooltip
                  title="7% for Spotlight Scout. 10% for Poke Fair Scout"
                  placement="top"
                  enterTouchDelay
                >
                  <HelpOutlineIcon />
                </Tooltip>
              </div>
              <div className="row">
                <TextField
                  id="outlined-number"
                  label="Paid Scouts"
                  type="number"
                  value={paidScouts}
                  onChange={handleChangePaidScouts}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  margin="dense"
                />
              </div>
              <div className="row">
                <TextField
                  id="outlined-number"
                  label="Non-Paid Scouts"
                  type="number"
                  value={nonPaidScouts}
                  onChange={handleChangeNonPaidScouts}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  margin="dense"
                />
              </div>
              <br />
              <Divider />
              <br />
              <h4>Results: </h4>
              Total number of scouts:{' '}
              <span style={{ color: 'red' }}>{totalScouts}</span>
              <br />
              Total gems spent:{' '}
              <span style={{ color: 'red' }}>
                {paidScouts * 100 + nonPaidScouts * 300}{' '}
              </span>{' '}
              (Paid: <span style={{ color: 'red' }}> {paidScouts * 100}</span>;
              Non-Paid:{' '}
              <span style={{ color: 'red' }}>{nonPaidScouts * 300}</span> )
              <br />
              <br />
              Probability of summoning at least 1 focus unit:&nbsp; &nbsp;
              <span style={{ color: 'red' }}>
                {1 - binomial(totalScouts, 0, focusRate / 100)}
              </span>
              <br />
              Probability of summoning at least 2 focus units:{' '}
              <span style={{ color: 'red' }}>
                {1 -
                  binomial(totalScouts, 0, focusRate / 100) -
                  binomial(totalScouts, 1, focusRate / 100)}
              </span>
              <br />
              Probability of summoning at least 3 focus units:{' '}
              <span style={{ color: 'red' }}>
                {1 -
                  binomial(totalScouts, 0, focusRate / 100) -
                  binomial(totalScouts, 1, focusRate / 100) -
                  binomial(totalScouts, 2, focusRate / 100)}
              </span>
              <br />
              Probability of summoning at least 4 focus units:{' '}
              <span style={{ color: 'red' }}>
                {1 -
                  binomial(totalScouts, 0, focusRate / 100) -
                  binomial(totalScouts, 1, focusRate / 100) -
                  binomial(totalScouts, 2, focusRate / 100) -
                  binomial(totalScouts, 3, focusRate / 100)}
              </span>
              <br />
              Probability of summoning at least 5 focus units:{' '}
              <span style={{ color: 'red' }}>
                {1 -
                  binomial(totalScouts, 0, focusRate / 100) -
                  binomial(totalScouts, 1, focusRate / 100) -
                  binomial(totalScouts, 2, focusRate / 100) -
                  binomial(totalScouts, 3, focusRate / 100) -
                  binomial(totalScouts, 4, focusRate / 100)}
              </span>
              <br />
              <br />
              You can expect a total of{' '}
              <span style={{ color: 'red' }}>
                {Math.floor((totalScouts * fiveStarRate) / 100)}{' '}
              </span>{' '}
              5-Star units (focus and non-focus).
              <br />
            </form>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default GachaOddsCalculator;
