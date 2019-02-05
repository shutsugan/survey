import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../Button';

import './index.css';

const Hero = ({auth}) => {
  const content = auth
    ? <Link
      to={auth ? '/servys' : '/'}
      className="button">

      DashBoard
    </Link>
    : <Button path="/auth/google/" name="Google Sigin" />
  return (
    <div className="hero flex flex-column flex-center">
      <h1 className="hero-title align-center">Get your surveys done with ease</h1>
      <p className="hero-text align-center">send your services to be answered by tech-savvy community and get the most best results that will help you improve your business</p>
      <strong className="align-center mr-bt">Start now by creating your account</strong>
      {content}
    </div>
  );
}

const mapStateToProps = ({auth}) => ({auth});

export default connect(mapStateToProps)(Hero);
