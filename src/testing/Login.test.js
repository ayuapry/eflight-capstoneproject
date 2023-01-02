import { render, screen } from "@testing-library/react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

test("renders learn react link", () => {
  render(<LoginPage />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});
