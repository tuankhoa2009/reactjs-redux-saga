import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../../components/TaskForm/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class TaskForm extends Component {
  render() {
    const { open, classes, onclose } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onclose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Thêm mới công việc'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              id="standard-name"
              label="Name"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="standard-multiline-flexible"
              label="Multiline"
              multiline
              rowsMax="4"
              margin="normal"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onclose} color="primary">
            Cancle
          </Button>
          <Button onClick={onclose} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskForm);
