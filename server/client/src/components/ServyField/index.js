import React from 'react';

import './index.css';

const ServyField = ({input, label, meta: {error, touched}}) => (
  <div className="servy-field full flex flex-column mr-bt">
    <label className="servy-field__label">{label}</label>
    <input className="servy-field__input" {...input} />
    <div className="error">{touched && error}</div>
  </div>
);

export default ServyField;
