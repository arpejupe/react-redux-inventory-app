import React from 'react'
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';

import { Link } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Whatshot from '@material-ui/icons/Whatshot';

import { withStyles } from '@material-ui/core/styles';

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
  },
  inventoryLink: {
    textDecoration: 'none',
  }
};

class InventoryList extends React.Component {
  
  componentDidMount() {
    this.props.actions.fetchInventory();
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
              <Link key={inv.id} to={`inventory/${inv.id}`} className={this.props.classes.inventoryLink} variant="inherit" color="inherit" underline="none">
                <Box className={this.props.classes.inventoryBox} boxShadow={1} key={inv.id} p={3} m={2}>      
                  <Whatshot className={this.props.classes.inventoryIcon} color="secondary"></Whatshot>
                  <Typography align="center" color="secondary">{inv.name}</Typography>
                </Box>
              </Link>
            ))}
          </Grid>
        </Container> 
      );
    }
  }
}

export default withStyles(styles)(InventoryList);

InventoryList.propTypes = {
  inventory: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
