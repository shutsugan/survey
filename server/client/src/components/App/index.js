import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Head from '../Head';

import './index.css';

const DashBoard = _ => (<h2>DashBoard</h2>);
const ServyNew = _ => (<h2>ServyNew</h2>);
const Landing = _ => (<h2>Landing</h2>);

const App = ({fetchUser}) => {
	useEffect(_ => {
		fetchUser();
	});

	return (
		<div>
			<BrowserRouter>
				<Fragment>
					<Head />
					<Route exact path="/" component={Landing} />
					<Route exact path="/servys" component={DashBoard} />
					<Route path="/servys/new" component={ServyNew} />
				</Fragment>
			</BrowserRouter>
		</div>
	);
};

export default connect(null, actions)(App);