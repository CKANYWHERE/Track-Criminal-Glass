import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/DashboardRounded';
import TrackIcon from '@material-ui/icons/AccessibilityNew';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import PictureComponent from './Picture-Component';
import Grid from '@material-ui/core/Grid';
import Information from './Information';
import Chart from './Chart';
import MyDrawer from '../Static-Component/MyDrawer';



const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  navtop:{
    textAlign:'center'
  },
  textField: {
    marginLeft: 600,
    marginRight: 20,
    width: 700,
  },
  grid:{
    flexGrow:1,
  },
});

class TrackMain extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  
  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        
        {<div classes={classes.navtop}>
          <Typography variant="h6" color="inherit" >
          Hello, Admin</Typography>
          </div>
        }
        
        <Divider />
        <List>
          {['대시보드', '범인추가', '범인리스트'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? <InboxIcon />: false} 
                {index === 1 ? <TrackIcon />: false}
                {index === 2 ? <ListIcon />:false}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
    
  const SearchBar = (
    <div>
      <TextField
        id="standard-search"
        type="search"
        inputProps={{ style: { fontFamily: 'Arial', color: 'inherit'}}}
        style={{ color: 'white',backgroundColor:'white'}}
        className={classes.textField}
        color="inherit"
        variant="outlined"
        InputProps ={{
         startAdornment:<InputAdornment position = "start"> 
         <IconButton><SearchIcon /></IconButton>
         </InputAdornment>
        }}
      >
      </TextField>
      
    </div>
  );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              DashBoard
            </Typography>
            {SearchBar}
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swap with js to avoid SEO duplication of links. */}
        
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
          
            <div>
              {drawer}
            </div>
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <div className={classes.grid}>
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <PictureComponent />
              </Grid>   
              <Grid item xs={6}>
                <Information />
              </Grid>
              
              <Grid container justify="center">
              <div><Chart/></div>
              </Grid>

            </Grid>
          
            </div>
        </main>
      </div>
    );
  }
}

TrackMain.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TrackMain);