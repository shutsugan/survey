import React from 'react';

import ServyList from '../ServyList';

import './index.css';

const DashBoard = _ => (
	<div className="dashboard flex flex-column">
		<h2 className="page-title mr-lf">DashBoard Page</h2>
		<ServyList />
	</div>
);

export default DashBoard;
