import React from 'react';

import './index.css';

const Button = ({path, name}) => (
	<a href={path} className="button">{name}</a>
);

export default Button;