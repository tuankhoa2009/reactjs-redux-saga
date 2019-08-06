import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import TaskItem from '../TaskItem';

class TaskList extends Component {
  render() {
    const { classes, status, tasks } = this.props;
    return (
      <Grid item md={4} xs={12} key={status.value}>
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.lable}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map(task => {
            return (
              <TaskItem
                task={task}
                status={status}
                key={task.status}
              ></TaskItem>
            );
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
