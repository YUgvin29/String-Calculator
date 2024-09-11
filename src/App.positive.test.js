import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component - Positive Test Cases", () => {
  test("No numbers input", () => {
    render(<App />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "  " } });
    fireEvent.click(screen.getByText("ADD"));
    expect(screen.getByText("Sum of two numbers is 0")).toBeInTheDocument();
  });

  test("Sum of one number without delimiters", () => {
    render(<App />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "1" } });
    fireEvent.click(screen.getByText("ADD"));
    expect(screen.getByText("Sum of above numbers is 1")).toBeInTheDocument();
  });
  test("Sum of two numbers with comma as delimiters", () => {
    render(<App />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "1,2" } });
    fireEvent.click(screen.getByText("ADD"));
    expect(screen.getByText("Sum of above numbers is 3")).toBeInTheDocument();
  });

  test("Sum of numbers with new lines and commas", () => {
    render(<App />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "1\n2,3" },
    });
    fireEvent.click(screen.getByText("ADD"));
    expect(screen.getByText("Sum of above numbers is 6")).toBeInTheDocument();
  });

  test("Sum of numbers with custom delimiter", () => {
    render(<App />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "//;\n1;2" },
    });
    fireEvent.click(screen.getByText("ADD"));
    expect(screen.getByText("Sum of above numbers is 3")).toBeInTheDocument();
  });
});
