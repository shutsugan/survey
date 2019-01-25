import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Fab = ({path}) => (
  <Link
    className="fab"
    to={path}>

    +
  </Link>
);

export default Fab;
