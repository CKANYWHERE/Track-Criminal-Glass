import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = {
  card: {
    minWidth: 370,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper:{
      textAlign:"center",
  }
};

function Information(props) {
  const { classes } = props;

  return (
    <Card className={classes.card} style={{backgroundColor: '#edf2ff'}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Tracking
        </Typography>
        <Typography variant="h5" component="h2">
          Today's Target
        </Typography>
        <p></p>
        <Paper className={classes.paper} elevation={1} >
        <Typography variant="h5" component="h3">
          이름
        </Typography>
        <p></p>
        <Typography component="p">
          엄상진
        </Typography>
      </Paper>

       <p></p>
        <Paper className={classes.paper} elevation={1}  >
        
        <Typography variant="h5" component="h3">
          생년월일
        </Typography>
        <p></p>
        <Typography component="p">
          2018-11-08
        </Typography>
      </Paper>

       <p></p>
        <Paper className={classes.paper} elevation={1} >
        
        <Typography variant="h5" component="h3">
          특징
        </Typography>
        <p></p>
        <Typography component="p">
          못생김
        </Typography>
      </Paper>

       <p></p>
        <Paper className={classes.paper} elevation={1}>
        
        <Typography variant="h5" component="h3">
            주소
        </Typography>
        <p></p>
        <Typography component="p">
          경상북도 포항시 ㅁㄴㅇㄹ
        </Typography>
      </Paper>

       <p></p>
        <Paper className={classes.paper} elevation={1}>
        
        <Typography variant="h5" component="h3">
            범인 ID
        </Typography>
        <p></p>
        <Typography component="p">
          100853
        </Typography>
      </Paper>
      
      </CardContent>
    </Card>
  );
}

Information.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Information);