import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import { Calculator } from '../../App';

it('Displaying out puts', () => {
  const calc = renderer.create(<BrowserRouter>< calculate /></BrowserRouter>).toJSON();
  expect(calc).toMatchSnapshot();
});

describe('Showing Components', () => {
  it('On the page', () => {
    render(<BrowserRouter><Calculator /></BrowserRouter>);

    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('0');
    expect(screen.getAllByRole('heading')[2]).toBeUndefined;
  });

  test('Showing Calculator Value', () => {
    render(<BrowserRouter><Calculator /></BrowserRouter>);
    fireEvent.click(screen.getByText('9'));
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('9');
  });

  test('Carrying out a subraction', () => {
    render(<BrowserRouter><Calculator /></BrowserRouter>);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('2');
  });
});