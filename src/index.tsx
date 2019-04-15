import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Link, Route, BrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';
import LoadingComponent from './components/loading';
import NavigationComponent from './components/navigation';

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
				<NavigationComponent />
				<Switch>
					<Route exact path="/" component={HomeComponent} />
					<Route exact path="/about" component={AboutComponent} />
				</Switch>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
