import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/DashboardRounded';
import TrackIcon from '@material-ui/icons/AccessibilityNew';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';



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

function MyDrawer(props){
    
    const { classes, theme } = this.props;
      return(
      <div >
          <div className={classes.toolbar} />
            
          {<div classes={classes.navtop}>
              <Typography variant="h6" color="inherit" >
              Hello, Admin</Typography>
              </div>
            }
            {
              console.log("asdf")
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
    }


export default (MyDrawer);