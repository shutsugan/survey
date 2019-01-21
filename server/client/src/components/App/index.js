import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Head from '../Head';

import './index.css';

const DashBoard = lazy(_ => import('../DashBoard'));
const ServyNew = lazy(_ => import('../ServyNew'));
const Landing = lazy(_ => import('../Landing'));

const App = ({fetchUser}) => {
	useEffect(_ => {
		fetchUser();
	});

	return (
		<div>
			<BrowserRouter>
				<Suspense fallback={<div>Loading...</div>}>
					<Head />
					<Route exact path="/" component={Landing} />
					<Route exact path="/servys" component={DashBoard} />
					<Route path="/servys/new" component={ServyNew} />
				</Suspense>
			</BrowserRouter>
		</div>
	);
};

export default connect(null, actions)(App);