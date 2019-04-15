import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Link, Route, BrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';
import LoadingComponent from './components/loading';

const HomeComponent = loadable(() => import('./components/home'), {
	fallback: <LoadingComponent />
});

const AboutComponent = loadable(() => import('./components/about'), {
	fallback: <LoadingComponent />
});

class App extends React.Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<Router>
				<div>
					<ul>
						<li>
							<Link to={'/'}>Home</Link>
						</li>
						<li>
							<Link to={'/about'}>About</Link>
						</li>
					</ul>
					<Switch>
						<Route exact path="/" component={HomeComponent} />
						<Route exact path="/about" component={AboutComponent} />
					</Switch>
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
