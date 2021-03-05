
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../../Quote';

it('Succesfully displays', () => {
  const quote = renderer.create(<BrowserRouter><Quote /></BrowserRouter>).toJSON();
  expect(quote).toMatchSnapshot();
});
