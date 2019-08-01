import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import LowPriority from '@material-ui/icons/LowPriority';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  headerlink: {
    textDecoration: 'none',
    color: 'white'
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <LowPriority color="inherit"></LowPriority>
          <TypoGraphy variant="h5" color="inherit">
            <Link to="/" className={classes.headerlink} variant="inherit" color="inherit" underline="none">
              Stockpiler
            </Link>
          </TypoGraphy>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;