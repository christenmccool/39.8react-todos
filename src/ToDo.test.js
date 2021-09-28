import { render, screen } from '@testing-library/react';
import ToDo from './ToDo';

test('if renders without crashing', () => {
  render(<ToDo />);
});

test("if matches snapshot", () => {
  const {asFragment} = render(<ToDo />);
  expect(asFragment()).toMatchSnapshot();
})

