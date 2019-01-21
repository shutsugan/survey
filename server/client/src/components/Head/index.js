import React from 'react';

import './index.css';

const Head = _ => {
	return (
		<header className="head">
			<a className="logo">Servy</a>
			<nav className="nav">
				<a href="/auth/google" className="button">
					Signin with google
				</a>
			</nav>
		</header>
	);
};

export default Head;