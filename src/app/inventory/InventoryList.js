import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';

import ButtonBase from '@material-ui/core/ButtonBase';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Whatshot from '@material-ui/icons/Whatshot';

import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';

const styles = {
  inventoryList: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    marginTop: '1.5em'
  },
  inventoryBox: {
    backgroundColor: 'white',
    textAlign: 'center'
  },
  inventoryIcon: {
    marginBottom: '0.05em',
    fontSize: '4.5rem',
  },
  inventoryHeader: {
    marginLeft: '1em',
    fontSize: '15px'
  },
  progress: {
    marginTop: '40%',
    marginLeft: '50%'
  }
};

class InventoryList extends React.Component {
  
  componentDidMount() {
    this.props.fetchInventory();
  }

  render() {
    if (this.props.loading) {
      return (
        <Container className={this.props.classes.inventoryList}>
          <CircularProgress 
            className={this.props.classes.progress}
          />
        </Container> 
      );
    } else {
      return (
        <Container className={this.props.classes.inventoryList}>
          <Typography className={this.props.classes.inventoryHeader} 
                      variant="overline" 
                      display="block" 
                      gutterBottom>
                        My Inventory
          </Typography>
          <Grid container>
            {this.props.inventory.map(inv => (
              <ButtonBase focusRipple key={inv.id} onClick={this.props.getItems}>
                <Box className={this.props.classes.inventoryBox} boxShadow={1} key={inv.id} p={3} m={2}>      
                  <Whatshot className={this.props.classes.inventoryIcon} color="secondary"></Whatshot>
                  <Typography align="center" color="secondary">{inv.name}</Typography>
                </Box>
              </ButtonBase>
            ))}
          </Grid>
        </Container> 
      );
    }
  }
}

export default withStyles(styles)(InventoryList);