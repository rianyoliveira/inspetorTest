import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShowList from '../components/ShowList';
import ShowDetails from '../components/ShowDetails';

const Router = () => {
	return(
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={ShowList} />
				<Route path="show/:id" component={ShowDetails} />
			</Switch>
		</BrowserRouter>
	);
}

export default Router;