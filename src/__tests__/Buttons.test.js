import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Buttons from '../components/Buttons';

afterEach(cleanup);

describe('Buttons', () => {
  test('should render without error', () => {
    render(<Buttons />);
  });

  test('should update state when button is clicked', () => {
    const { getByText } = render(<Buttons />);
    const button = getByText('7');
    fireEvent.click(button);
    const answer = '7';
    expect(answer).toBe('7');
  });

  test('should correctly perform calculations when buttons are clicked', () => {
    const { getByText } = render(<Buttons />);
    const button7 = getByText('7');
    const buttonX = getByText('x');
    const button3 = getByText('3');
    const buttonEqual = getByText('=');
    fireEvent.click(button7);
    fireEvent.click(buttonX);
    fireEvent.click(button3);
    fireEvent.click(buttonEqual);
    const answer = parseInt(button7.textContent, 10) * parseInt(button3.textContent, 10);
    expect(`${answer}`).toBe('21');
  });

  test('matches snapshot for new button', () => {
    const tree = renderer.create(<Buttons />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
