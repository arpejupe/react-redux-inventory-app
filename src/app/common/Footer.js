import React from 'react'

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: '#4e4e4e',
    maxWidth: '100%'
 },
 typography: {
   color: '#e4e4e4',
   fontSize: '14px',
 }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.footer}>
      <Typography className={classes.typography} 
                  align="center" 
                  variant="body1">
                    Copyright 2019 - Arttu Pekkarinen
      </Typography>
    </Container>
  );
}

export default Footer;