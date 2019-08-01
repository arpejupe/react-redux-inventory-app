import React from 'react';

import { Link } from 'react-router-dom';

import TypoGraphy from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  home: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    marginTop: '2.5em'
  },
  divider: {
    margin: '10px 0px',
  }
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.home} >
      <Container maxWidth="md">
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <TypoGraphy variant="h4" color="inherit">
              Home Page
            </TypoGraphy>
            <br></br>
            <TypoGraphy variant="body1" color="inherit">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </TypoGraphy>
          </Grid>
          <Grid item xs={6}>
            <TypoGraphy variant="h6" color="inherit">
              About Inventory
            </TypoGraphy>
            <Divider className={classes.divider} variant="fullWidth" />
            <TypoGraphy variant="body1" color="inherit">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </TypoGraphy>
          </Grid>
          <Grid item xs={6}>
            <TypoGraphy variant="h6" color="inherit">
              About Items
            </TypoGraphy>
            <Divider className={classes.divider} variant="fullWidth" />
            <TypoGraphy variant="body1" color="inherit">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </TypoGraphy>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" 
                    color="secondary" 
                    className={classes.button}
                    component={Link}
                    to="/inventory"
            >
              Go to inventory
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;