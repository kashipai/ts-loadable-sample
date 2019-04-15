import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return <div>Hello</div>;
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
