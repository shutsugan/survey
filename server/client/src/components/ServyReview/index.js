import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

import './index.css';

const ServyReview = ({handleReview, formValues, submitServy, history}) => {
  const values = Object.values(formValues);
  const keys = Object.keys(formValues);

  const rows = values.map((value, index) => (
    <div className="servy-field" key={index}>
      <span className="servy-field__label">{keys[index]}</span>
      <div className="servy-field__input">{value}</div>
    </div>
  ));

  return (
    <div className="servy-review">
      <h2 className="servy-form__title">Review the form</h2>
      <div className="servy-form__form">

        {rows}
        <div className="servy-form__button-wrapper">
          <button
            className="servy-form__button"
            onClick={handleReview}>

            Cancel
          </button>
          <button
            className="servy-form__button"
            onClick={_ => submitServy(formValues, history)}>

            Send
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({form}) => {
  return {formValues: form.servyForm.values}
};

export default connect(mapStateToProps, actions)(withRouter(ServyReview));
