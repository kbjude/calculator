import Display from './../../Display'
import { string } from 'prop-types';
import { ButtonPanel } from './../../ButtonPanel';

describe('Calculator', () => {
    it("passing test", () => {
        expect(true).toBeTruthy();
    });

    it('Display result', () => {
        expect(Display.props).toBe(Display.result);
    })

    it('Checks for type', () => {
        expect(Display.propTypes).toString();
    })

})