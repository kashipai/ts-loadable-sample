import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Link, Route, BrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';
import LoadingComponent from './components/loading';
import Navbar from 'reactstrap/lib/Navbar';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';
import Collapse from 'reactstrap/lib/Collapse';
import Nav from 'reactstrap/lib/Nav';
import NavItem from 'reactstrap/lib/NavItem';
import NavLink from 'reactstrap/lib/NavLink';

const HomeComponent = loadable(() => import('./components/home'), {
	fallback: <LoadingComponent />
});

const AboutComponent = loadable(() => import('./components/about'), {
	fallback: <LoadingComponent />
});

interface NavigationComponentState {
	isOpen: boolean;
}
class NavigationComponent extends React.Component<{}, NavigationComponentState> {
	constructor(props: any) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
				<Navbar color="dark" dark expand="md">
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/about">About</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

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
