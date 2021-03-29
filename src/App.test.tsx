import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";

test("Renders the app", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("When file is uploaded", () => {
  test("user sees two tables", async () => {
    const file = new File(["file"], "fileName");
    const { getByText } = render(<App />);
    const formElement = getByText("Upload a log file");
    Object.defineProperty(formElement, "files", {
      value: [file],
    });
    act(() => {
      fireEvent.drop(formElement);
    });
    let tableElement1, tableElement2;
    await waitFor(() => {
      tableElement1 = getByText("Views total (webpage)");
      tableElement2 = getByText("Unique views total (webpage)");
    });

    expect(tableElement1).toBeInTheDocument();
    expect(tableElement2).toBeInTheDocument();
  });
});
