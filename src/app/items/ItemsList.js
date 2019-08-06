import React from 'react'
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';

import { Link } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  itemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    marginTop: '1.5em'
  },
  headerStatus: {
    padding: '20px 20px',
    borderLeft: '5px solid',
    borderColor: theme.palette.primary.main,
    boxShadow: 'none',
    borderRadius: '0px'
  },
  itemsListControls: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  arrowBackBox: {
    width: '30px',
    height: '30px',
    backgroundColor: '#ababab',
    textAlign: 'center',
  },
  arrowBackIcon: {
    marginTop: '25%',
    marginLeft: '25%',
    color: 'white',
    fontSize: '15px'
  },
  item: {
    marginBottom: '12px',
    backgroundColor: theme.palette.common.white,
    borderLeft: '5px solid',
    borderColor: theme.palette.primary.main
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  totalText: {
    margin: '0',
    lineHeight: '1.2em'
  },
  stockStatusProgress: {
    height: 20,
  },
  progress: {
    marginTop: '40%',
    marginLeft: '50%'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    float: 'right'
  },
  searchTextField: {
    float: 'left',
  },
  statusInProgress: {
    textAlign: 'center',
    padding: '8px',
    borderRadius: '4px',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main
  },
  statusOnHold: {
    textAlign: 'center',
    padding: '8px',
    borderRadius: '4px',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main
  },
  price: {
    color: '#43a047',
    textAlign: 'center',
  },
  centerAlign: {
    textAlign: 'center',
  }
});

class ItemsList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      localItems: [],
      sortValue: null
    };
  }

  componentDidMount() {
    this.props.fetchItems(this.props.match.params.id);
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.setState({
        localItems: Object.assign([], this.props.items)
      });
    }
  }

  defineStatusStyles(status) {
    if (status === "in-progress") {
      return this.props.classes.statusInProgress
    } else {
      return this.props.classes.statusOnHold
    }
  }

  calculateInStock(items) {
    return items.reduce((accumulator, item) => accumulator + item.stock, 0);
  }

  calculateTotalStock(items) {
    return items.reduce((accumulator, item) => accumulator + item.total, 0);
  }

  calculateStockStatus(items) {
    if (items.length !== 0) {
      return Math.round(this.calculateInStock(items)/this.calculateTotalStock(items)*100);
    } else {
      return 0
    }
  }

  sortItems(term, items) {
    return items.sort(item =>  {
      if (item.status === term) return -1;
      if (item.status === term) return 1;
      return 0;
    });
  }

  filterItems(term) {
    if (term && term !== '') {
      this.setState({
        localItems: this.state.localItems.filter(item => item.status === term)
      });
    } else {
      this.setState({
        localItems: Object.assign([], this.props.items)
      });
    }
  }

  handleKeyDown = (event) => {
    let term = event.target.value;
    if (event.key === 'Enter') {
      this.filterItems(term)
    }
  }

  handleSortOnChange = (event) => {
    let term = event.target.value;
    this.setState({
      sortValue: term
    });
    if (term && term !== '') {
      this.setState({
        localItems: this.sortItems(term, this.state.localItems)
      });
    } else {
      this.setState({
        localItems: Object.assign([], this.props.items)
      });
    }
  }

  handleFilterOnChange = (event) => {
    let term = event.target.value;
    if (!term && term === '') {
      this.setState({
        localItems: Object.assign([], this.props.items)
      });
    }
  }

  render() {

    const sortOptions = [
      { label: 'in-progress' },
      { label: 'on-hold' }
    ];

    if (this.props.loading) {
      return (
        <Container className={this.props.classes.itemsContainer}>
          <CircularProgress 
            className={this.props.classes.progress}
          />
        </Container> 
      );
    } else {
      return (
        <Container className={this.props.classes.itemsContainer}>
          <Grid container spacing={2} className={this.props.classes.itemsListHeader}>
            <Grid item xs>
              <Typography variant="overline" className={this.props.title}>
                <Link to="/inventory">
                  <Box className={this.props.classes.arrowBackBox}>
                    <ArrowBackIos className={this.props.classes.arrowBackIcon}></ArrowBackIos>
                  </Box>
                </Link>
                <Box fontSize={25} fontWeight={700}>
                  Inventory {this.props.match.params.id}
                </Box> 
              </Typography>
            </Grid>
            <Grid item xs>
              <Paper className={this.props.classes.headerStatus} >
                <Typography variant="overline" component="h3">
                  Stock status
                </Typography>
                <Typography style={{display: 'inline-block'}} variant="overline" component="span">
                  <Box fontSize={35} className={this.props.classes.totalText} fontWeight={700}>
                    {this.calculateInStock(this.props.items)}
                  </Box>
                </Typography>
                <Typography style={{display: 'inline-block', marginLeft: '5px'}} variant="overline" component="span">
                  <Box fontSize={12} className={this.props.classes.totalText} fontWeight={300}>
                    in stock
                  </Box>
                </Typography>
                <Typography style={{display: 'inline-block', marginLeft: '5px', float: 'right'}} variant="overline" component="span">
                  <Box fontSize={35} className={this.props.classes.totalText} fontWeight={700}>
                    {this.calculateStockStatus(this.props.items)}%
                  </Box>
                </Typography>
                <LinearProgress className={this.props.classes.stockStatusProgress} color="secondary" variant="determinate" value={this.calculateStockStatus(this.props.items)}/>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={2} justify="space-between" className={this.props.classes.itemsListControls}>
            <Grid item xs>
              <TextField
                id="standard-search"
                label="Filter by status"
                type="search"
                className={this.props.classes.searchTextField}
                onChange={(event) => this.handleFilterOnChange(event)}
                onKeyDown={(event) => this.handleKeyDown(event)}
                margin="normal"
              />
            </Grid>
            <Grid item xs>
              <TextField
                id="items-sort"
                select
                label="Sort by status"
                className={this.props.classes.textField}
                value={this.state.sortValue}
                onChange={(event) => this.handleSortOnChange(event)}
                isClearable={true}
                placeholder=''
                SelectProps={{
                  MenuProps: {
                    className: this.props.classes.menu,
                  },
                }}
                margin="normal"
              >
                {sortOptions.map(option => (
                  <MenuItem key={option.value} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
                <MenuItem key="clear" value=''>
                  none
                </MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs>
              <List>
                <ListItem key="list-header">
                  <Grid container justify="space-between" spacing={2}>
                    <Grid item xs>
                      <ListItemText
                        primary="Item ID"
                      />
                    </Grid>
                    <Grid item xs>
                      <ListItemText
                        primary="Status"
                        className={this.props.classes.centerAlign}
                      />
                    </Grid>
                    <Grid item xs>
                      <ListItemText
                        primary="In-stock"
                        className={this.props.classes.centerAlign}
                      />
                    </Grid>
                    <Grid item xs>
                      <ListItemText
                        primary="Total"
                        className={this.props.classes.centerAlign}
                      />
                    </Grid>
                    <Grid item xs>
                      <ListItemText
                        primary="Price"
                        className={this.props.classes.centerAlign}
                      />
                    </Grid>
                    <Grid item xs={1} md={1}>
                    </Grid>
                  </Grid>
                </ListItem>
                {this.state.localItems.map(item => (
                  <ListItem key={item.id} className={this.props.classes.item}>
                    <Grid container justify="space-between" alignItems="center" alignContent="center" spacing={2}>
                      <Grid item xs>
                        <ListItemText
                          primary={item.id}
                        />
                      </Grid>
                      <Grid item xs>
                        <ListItemText className={this.defineStatusStyles(item.status)}
                          primary={item.status}
                        />
                      </Grid>
                      <Grid item xs>
                        <ListItemText
                          primary={item.stock}
                          className={this.props.classes.centerAlign}
                        />
                      </Grid>
                      <Grid item xs>
                        <ListItemText
                          primary={item.total}
                          className={this.props.classes.centerAlign}
                        />
                      </Grid>
                      <Grid item xs>
                        <ListItemText className={this.props.classes.price}
                          primary={item.price + ' $'}
                          secondary="/ unit"
                        />
                      </Grid>
                      <Grid item xs={1} md={1}>
                        <IconButton color="primary" className={this.props.classes.button} aria-label="add to shopping cart">
                          <AddShoppingCartIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </ListItem>
                ))}
                {this.state.localItems.length === 0 && 
                 <ListItem className={this.props.classes.item}>
                  <Grid container justify="space-between" alignItems="center" alignContent="center" spacing={2}>
                      <Grid item xs>
                        <ListItemText
                          primary="No items"
                        />
                      </Grid>
                    </Grid>
                  </ListItem>
                }
              </List>
            </Grid>
          </Grid>
        </Container> 
      );
    }
  }
}

export default withStyles(styles)(ItemsList);

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
