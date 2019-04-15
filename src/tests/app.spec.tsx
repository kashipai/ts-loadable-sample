import * as TestRenderer from 'react-test-renderer';
import NavigationComponent from '../components/navigation';

let renderer: TestRenderer.ReactTestRenderer;
let instance: TestRenderer.ReactTestInstance;

describe('Test App', () => {
	describe('Test Navigation Bar', () => {
		it('Should have two links', (done) => {
			renderer = TestRenderer.create(<NavigationComponent />);
			console.log(renderer.toJSON());
		});
	});
});
