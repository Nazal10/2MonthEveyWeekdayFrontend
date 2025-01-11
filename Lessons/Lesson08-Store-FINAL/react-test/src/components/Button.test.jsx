import { render, screen } from "@testing-library/react";
import "@testing-library/dom";
import Button from "./Button";

test ("is there a button", () => {
    render(<Button id="btn" />);
    expect(screen.getByTestId("btn")).toBeInTheDocument();

});

test ("Button text is true", () => {
    render(<Button text="Hello" />);
    expect(screen.getByTestId("Hello")).toBeInTheDocument();

});
