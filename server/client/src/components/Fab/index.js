import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './index.css';

const Fab = ({path, auth}) => {
  const content = auth
    ? <Link
        className="fab flex flex-center"
        to={path}>

        +
      </Link>
    : <></>;

  return content;
}

const mapStateToProps = ({auth}) => ({auth});

export default connect(mapStateToProps)(Fab);
