import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Head from '../Head';
import Fab from '../Fab';

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
					<Route exact path="/" render={_ => <Landing />} />
					<Route exact path="/servys" render={_ => <DashBoard />} />
					<Route path="/servys/new" render={_ => <ServyNew />} />
					<Fab path="/servys/new" />
				</Suspense>
			</BrowserRouter>
		</div>
	);
};

export default connect(null, actions)(App);
