import React from 'react';
import { reduxForm, Field } from 'redux-form';

import ServyField from '../ServyField';

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

const ServyForm = ({handleSubmit}) => {
  return (
    <div className="servy-form">
      <h2 className="servy-form__title">Add a new servy</h2>
      <form
        className="servy-form__form"
        onSubmit={handleSubmit(values => console.log(values))}>

        {fields}
        <button className="servy-form__button" type="submit">Send</button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'servyForm'
})(ServyForm);
