// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export default class FeedBackForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  render() {
    const { status } = this.state;
    const { open, onCloseModalHandler } = this.props;

    const handleCloseModal = () =>
      typeof onCloseModalHandler === 'function' ? onCloseModalHandler() : null;

    return (
      <Dialog
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="form-dialog-title"
        fullWidth={false}
      >
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xyywkgow"
          method="POST"
        >
          <DialogTitle id="form-dialog-title">Feedback</DialogTitle>
          <DialogContent>
            {/* FormSpree doesn't support MUI Textfield or Button */}
            <textarea
              type="text"
              className="form-control"
              id="textboxid"
              name="message"
            />
          </DialogContent>
          <DialogActions>
            {status === 'SUCCESS' ? (
              <DialogContentText>Thanks!</DialogContentText>
            ) : (
              <button className="btn btn-primary mr-3">Submit</button>
            )}
            {status === 'ERROR' && (
              <DialogContentText>Ooops! There was an error.</DialogContentText>
            )}
          </DialogActions>
        </form>
      </Dialog>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}
