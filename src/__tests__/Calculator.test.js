import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

it('it matches snapshot', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should return  Calculator Component', () => {
  render(<Calculator />);
});
