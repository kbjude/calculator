import Display from '../../Display'
import { string } from 'prop-types';

describe('Display', () => {
    it('Display result', () => {
        expect(Display.props).toBe(Display.result);
    })

    it('Checks for type', () => {
        expect(Display.propTypes).toString();
    })

})