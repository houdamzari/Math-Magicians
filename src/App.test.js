import { render } from '@testing-library/react';
import Calculator from './components/Calculator';

test('The calculator component should be rendered on screen', () => {
  render(<Calculator />);
});
