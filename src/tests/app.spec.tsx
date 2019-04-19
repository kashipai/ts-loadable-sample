import * as React from 'react';
import { expect } from 'chai';
import { mount, configure } from 'enzyme';
import { spy } from 'sinon';
import NavigationComponent from '../components/navigation';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });

spy(NavigationComponent.prototype, 'componentDidMount');

describe('<NavigationComponent/>', () => {
	it('Should have two links', () => {
		//expect(1).to.equal(1);
		const wrapper = mount(<NavigationComponent />);
		expect(NavigationComponent.prototype.componentDidMount).to.have.property('callCount', 1);
	});

	it('should fail', () => {
		expect(1).to.equal(1);
	});
});
