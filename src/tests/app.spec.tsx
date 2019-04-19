import * as React from 'react';
import { expect } from 'chai';
import { mount, configure, shallow, render } from 'enzyme';
import { spy } from 'sinon';
import NavigationComponent from '../components/navigation';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import NavLink from 'reactstrap/lib/NavLink';

configure({ adapter: new ReactSixteenAdapter() });

spy(NavigationComponent.prototype, 'componentDidMount');

describe('<NavigationComponent/>', () => {
	it('Should mount', () => {
		//expect(1).to.equal(1);
		const wrapper = mount(<NavigationComponent />);
		expect(NavigationComponent.prototype.componentDidMount).to.have.property('callCount', 1);
	});

	it('Should contain two links', () => {
		const wrapper = render(<NavigationComponent />);
		expect(wrapper.find('.nav-link').length).to.equal(2);
	});
});
