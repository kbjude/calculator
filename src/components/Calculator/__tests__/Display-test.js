import Display from '../../Display';

describe('Display', () => {
  it('Display result', () => {
    expect(Display.props).toBe(Display.result);
  });

  it('Checks for type', () => {
    expect(Display.propTypes).toString();
  });
});
