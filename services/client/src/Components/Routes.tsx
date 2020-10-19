import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Templates from 'Pages/Templates';
import Template from 'Pages/Template';
import Samples from 'Pages/Samples';
import Sample from 'Pages/Sample';
import Profile from 'Pages/Profile';

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path='/samples' component={Samples} />
			<Route exact path='/samples/:sampleId' component={Sample} />
			<Route exact path='/templates'  component={Templates} />
			<Route exact path='/templates/:templateId' component={Template} />
			<Route exact path='/profile' component={Profile} />
		</Switch>
	</Router>
);

export default Routes;