// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from 'react';

export default class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ''
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div
        className="modal fade"
        id="feedbackModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="feedbackModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered mt-5 w-50"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="feedBackModalLongTitle">
                Feedback
              </h5>
            </div>
            <div className="modal-body">
              <form
                onSubmit={this.submitForm}
                action="https://formspree.io/xyywkgow"
                method="POST"
              >
                <textarea
                  type="text"
                  className="form-control"
                  id="textboxid"
                  name="message"
                />
                {status === 'SUCCESS' ? (
                  <p className="mt-2">Thank you for the feedback!</p>
                ) : (
                  <button className="mt-2 btn btn-primary">Submit</button>
                )}
                {status === 'ERROR' && <p>Ooops! There was an error.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
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
