import React from 'react';

import './index.css';

const ServyField = ({input, label}) => (
  <div className="servy-field">
    <label>{label}</label>
    <input className="servy-field__input" {...input} />
  </div>
);

export default ServyField;
