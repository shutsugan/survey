import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button';

import './index.css';

const Head = ({auth}) => {
	const nav_button = auth === null
		? ''
		: auth
			? <Button path="/api/logout/" name="Logout"/>
			: <Button path="/auth/google/" name="Sigin with google"/>;

	return (
		<header className="head">
			<a className="logo">Servy</a>
			<nav className="nav">{nav_button}</nav>
		</header>
	);
};

const mapStateToProps = ({auth}) => ({auth});

export default connect(mapStateToProps)(Head);