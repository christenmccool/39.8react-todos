import { render, screen, fireEvent } from '@testing-library/react';
import ToDoList from './ToDoList';

test('if renders without crashing', () => {
  render(<ToDoList />);
});

test("if matches snapshot", () => {
  const {asFragment} = render(<ToDoList />);
  expect(asFragment()).toMatchSnapshot();
})

test("if new todo is added", () => {
  const { queryByLabelText, queryByText, queryByRole, debug } = render(<ToDoList />);
  
  expect(queryByText("Sweep floor")).not.toBeInTheDocument();
  expect(queryByText("Complete")).not.toBeInTheDocument();
  expect(queryByText("X")).not.toBeInTheDocument();
  expect(queryByText("Edit")).not.toBeInTheDocument();

  const task = queryByLabelText("New task");
  const low = queryByRole("radio", {name: "Low"});
  const medium = queryByRole("radio", {name: "Medium"});
  const high = queryByRole("radio", {name: "High"});
  const button = queryByText("Add");

  fireEvent.change(task, { target: { value: 'Sweep floor' } });
  fireEvent.change(low, { target: { checked: true } });
  fireEvent.click(button);

  expect(queryByText("Sweep floor")).toBeInTheDocument();
  expect(queryByText("Complete")).toBeInTheDocument();
  expect(queryByText("X")).toBeInTheDocument();
  expect(queryByText("Edit")).toBeInTheDocument();
})

test("if todo is deleted", () => {
  const { queryByLabelText, queryByText, queryByRole, debug } = render(<ToDoList />);
  
  const task = queryByLabelText("New task");
  const low = queryByRole("radio", {name: "Low"});
  const medium = queryByRole("radio", {name: "Medium"});
  const high = queryByRole("radio", {name: "High"});
  const button = queryByText("Add");

  fireEvent.change(task, { target: { value: 'Sweep floor' } });
  fireEvent.change(low, { target: { checked: true } });
  fireEvent.click(button);

  expect(queryByText("Sweep floor")).toBeInTheDocument();
  expect(queryByText("Complete")).toBeInTheDocument();
  expect(queryByText("X")).toBeInTheDocument();
  expect(queryByText("Edit")).toBeInTheDocument();

  const deleteBtn = queryByText("X");
  fireEvent.click(deleteBtn);
  
  setTimeout(() => {
    expect(queryByText("Sweep floor")).not.toBeInTheDocument();
    expect(queryByText("Complete")).not.toBeInTheDocument();
    expect(queryByText("X")).not.toBeInTheDocument();
    expect(queryByText("Edit")).not.toBeInTheDocument();
  }, 3000);

})