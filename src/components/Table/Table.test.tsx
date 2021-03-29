import React from "react";
import { render } from "@testing-library/react";
import { Table } from ".";
import { DataDisplayableFormatType } from "types";

test("Doesn't render if {data} is empty", () => {
  const title = "Title";
  const { container } = render(<Table title={title} data={[]} />);

  expect(container.firstChild).toBe(null);
});

test("Displays the passed {title} and {data}", () => {
  const title = "Title";
  const key1 = "key1";
  const val1 = 123;

  const { getByText } = render(<Table title={title} data={[[key1, val1]]} />);

  expect(getByText(title)).toBeInTheDocument();
  expect(getByText(key1)).toBeInTheDocument();
  expect(getByText(`${val1} views`)).toBeInTheDocument();
});

test("Displays {data} sorted descendingly", () => {
  const title = "Title";
  const val1 = 1;
  const val2 = 2;
  const val3 = 3;
  const data: DataDisplayableFormatType = [
    ["key1", val1],
    ["key2", val2],
    ["key3", val3],
  ];

  const { container } = render(<Table title={title} data={data} />);

  const tableRows = container.querySelectorAll("tbody tr");

  expect(tableRows[0]).toContainHTML(`${val3} views`);
  expect(tableRows[1]).toContainHTML(`${val2} views`);
  expect(tableRows[2]).toContainHTML(`${val1} views`);
});
