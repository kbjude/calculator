import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import {
  render, screen,
} from '@testing-library/react';
import App from '../../App';


it('renders page', () => {
    const theApp = renderer.create(<BrowserRouter><App /></BrowserRouter>).toJSON();
    expect(theApp).toMatchSnapshot();
  });

  describe('Home Page', () => {
    test('contains a welcome remark', () => {
      render(<BrowserRouter><App /></BrowserRouter>);
  
      expect(screen.getByTestId('home')).toHaveTextContent('Home Page');
    });
  });