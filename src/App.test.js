import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginPage from "./pages/LoginPage";

describe("LoginPage", () => {
  it("should render the form", () => {
    const { getByTestId } = render(<LoginPage />);
    const emailInput = getByTestId("email-input");
    const passwordInput = getByTestId("password-input");
    const loginButton = getByTestId("email-input");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it("should dispatch the LoginEmail action when the form is submitted", () => {
    const dispatch = jest.fn();
    const { getByTestId } = render(<LoginPage dispatch={dispatch} />);
    const emailInput = getByTestId("email-input");
    const passwordInput = getByTestId("password-input");
    const loginButton = getByTestId("btn");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(loginButton);

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "auth/loginEmail",
        payload: { email: "test@example.com", password: "password" },
      })
    );
  });
});
