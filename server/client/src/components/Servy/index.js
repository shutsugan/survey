import React from 'react';

import './index.css';

const Servy = ({servy}) => (
  <div className="servy flex flex-column mr-bt">
    <h3 className="servy__title pd-card mr-none">{servy.title}</h3>
    <p className="servy__text mr-none pd-card">{servy.body}</p>
    <div className="servy__vote">YES: {servy.yes} | NO: {servy.no}</div>
    <small className="servy__date pd-card">{servy.dateSent}</small>
  </div>
);

export default Servy;
