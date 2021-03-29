import React from "react";
import { render, screen } from "@testing-library/react";

import { Header } from ".";
import { APP_NAME } from "consts";

test("Renders app name", () => {
  render(<Header />);
  const linkElement = screen.getByText(APP_NAME);
  expect(linkElement).toBeInTheDocument();
});
