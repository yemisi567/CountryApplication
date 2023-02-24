
import { render, fireEvent, screen } from "@testing-library/react";
import Home from "../../pages/Home";

describe('Home', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should handle onChange and onInput correctly', () => {
    render(<Home />);
    const inputElement = screen.getByTestId('search-input');
    const selectElement = screen.getByTestId('select-input');

    fireEvent.change(inputElement, { target: { value: 'query' } });
    fireEvent.change(selectElement, { target: { value: 'all' } });

    expect(inputElement.value).toBe('query');
    expect(selectElement.value).toBe('all');
  });
});