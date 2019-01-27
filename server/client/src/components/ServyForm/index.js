import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import ServyField from '../ServyField';
import validateEmails from '../../utils/validateEmails';

import './index.css';

const field_name = ['title', 'subject', 'body', 'recipients'];
const fields = field_name.map(field => (
  <Field
    key={field}
    type="text"
    name={field}
    label={field}
    component={ServyField}
  />
));

const validate = values => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  field_name.forEach(field => {
    if (!values[field]) errors[field] = 'You must Provide a value';
  });

  return errors;
};
//handleSubmit
const ServyForm = ({handleSubmit, handleReview}) => {
  return (
    <div className="servy-form">
      <h2 className="servy-form__title">Add a new servy</h2>
      <form
        className="servy-form__form"
        onSubmit={handleSubmit(values => handleReview(values))}>

        {fields}
        <div className="servy-form__button-wrapper">
          <Link className="servy-form__button" to="/servys">Cancel</Link>
          <button className="servy-form__button" type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  validate,
  form: 'servyForm',
  destroyOnUnmount: false
})(ServyForm);
