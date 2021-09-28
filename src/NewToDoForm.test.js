import { render, screen } from '@testing-library/react';
import NewToDoForm from './NewToDoForm';

test('if renders without crashing', () => {
  render(<NewToDoForm />);
});

test("if matches snapshot", () => {
  const {asFragment} = render(<NewToDoForm />);
  expect(asFragment()).toMatchSnapshot();
})

