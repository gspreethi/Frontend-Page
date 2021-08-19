import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useState} from 'react'

export default function FormDialog(props) {
  const [data,setData]=useState('');
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (data) => {
    console.log(data);
    //postUserInfo(data);
      
    fetch('http://localhost:8080/questions',{
              method:'POST',
              body:JSON.stringify(data),
              headers:{'Content-Type':'application/json'},
         })
          .then(res=>res.json())
          .then(json=>setData(json.data))
  };
  

  return (
    <div>
       <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Secret Questions</DialogTitle>

        <DialogContent>
          <DialogContentText>
           Answer these Questions and use them to recover/reset the password
          </DialogContentText>
          <TextField autoFocus margin="dense" id="que1" label="What is your first School Name?" type="text" fullWidth/>
          <TextField autoFocus margin="dense" id="que2" label="What is your favourite dish?" type="text" fullWidth/>
          <TextField autoFocus margin="dense" id="que3" label="What is your favourite Holiday destination?" type="text" fullWidth/>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} onSubmit={handleSubmit}color="primary"></Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
