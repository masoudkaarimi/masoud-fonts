// Import Module
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Error from '../pages/Error';

function Routes() {
	return (
		<div className='container'>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/contact' component={Contact} />
					<Route path='*' component={Error} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default Routes;
