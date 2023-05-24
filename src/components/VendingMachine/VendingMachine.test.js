import { render } from '@testing-library/react';
import VendingMachine from './VendingMachine';

test('renders without crashing', () => {
  render(<VendingMachine />);
});
