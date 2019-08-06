import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { STATUS } from './../../constants';
import TaskList from './../../components/TaskList';
import TaskForm from './../../components/TaskForm';
import styles from '../Taskboard/styles';

const listTask = [
  {
    id: 1,
    title: 'Read Book',
    description: 'Read book with me',
    status: 0
  },
  {
    id: 2,
    title: 'Play football',
    description: 'Fifaonline 4',
    status: 2
  },
  {
    id: 3,
    title: 'Play game',
    description: '',
    status: 1
  }
];

class TaskBoard extends Component {
  state = {
    open: false
  };

  renderBoard = () => {
    const { classes } = this.props;

    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUS.map((status, index) => {
          const taskFiltered = listTask.filter(
            task => task.status == status.value
          );
          return (
            <TaskList
              status={status}
              tasks={taskFiltered}
              key={status.value}
            ></TaskList>
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  openForm = () => {
    this.setState({
      open: true
    });
  };

  renderForm = () => {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onclose={this.handleClose}></TaskForm>;

    return xhtml;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon />
          Add new tasks
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}
TaskBoard.proTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(TaskBoard);
