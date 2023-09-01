import React from 'react';
import {Grid} from '@material-ui/core';
// import { ReactDOM } from 'react-dom';
// import ReactDOM from 'react-dom';
import Details  from './components/Details/Details';
// import { PushToTalkButton , PushToTalkButtonContainer ,ErrorPanel } from '@speechly/react-ui';
import Main from './components/Main/Main';
import useStyles from './styles';
const App =() =>{
const classes=useStyles();
    return(
        <div>
            <Grid className={classes.Grid} container spacing={0} alignItems="center" justify="center" style={{height :'100vh'}}>
                <Grid items xs={12} sm={4}>
                    <Details title="Income"/>
                </Grid>
                <Grid items xs={12} sm={3}>
                    <Main/>
                </Grid>
                <Grid items xs={12} sm={4}>
                    <Details title="Expense"/>
                </Grid>
            </Grid>
          
        </div>
    )
}
export default App;
