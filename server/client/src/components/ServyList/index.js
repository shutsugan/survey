import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Servy from '../Servy';
import * as actions from '../../actions';

import './index.css';

const ServyList = ({servys, fetchServys}) => {
  useEffect(_ => {
    fetchServys()
  }, []);

  const servyList = servys
    .reverse()
    .map(servy => <Servy key={servy._id} servy={servy} />);

  return (
    <div className="servy-list">
      {servyList}
    </div>
  );
};

const mapStateToProps = ({servys}) => {
  console.log(servys);
  return {servys};
}

export default connect(mapStateToProps, actions)(ServyList);
