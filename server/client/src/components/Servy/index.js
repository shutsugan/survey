import React from 'react';

import './index.css';

const Servy = ({servy}) => (
  <div className="servy">
    <h3 className="sevy__title">{servy.title}</h3>
    <small>{servy.subject}</small>
    <p>{servy.body}</p>
    <div className="servy__vote">YES: {servy.yes} | NO: {servy.no}</div>
    <small>{servy.dateSent}</small>
  </div>
);

export default Servy;
