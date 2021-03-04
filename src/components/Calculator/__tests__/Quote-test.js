import renderer from 'react-test-renderer';
import Quote from '../../Quote';

test('checks for quote', () => {
  expect(Quote).toString('Imagination is more important than knowledge');
});