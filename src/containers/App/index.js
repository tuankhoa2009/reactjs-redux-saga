import React, { Component } from 'react';
import styles from './styles.js';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Taskboard from '../Taskboard/index.js';
import theme from './../../commons/Theme';
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      // <div className={classes.box}>
      //   <div className={classes.shape}>Reactjs</div>
      //   <div className={classes.shape}>Angular</div>
      //   <div className={classes.shape}>Vuejs</div>

      // </div>
      <ThemeProvider theme={theme}>
        <Taskboard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
