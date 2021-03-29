import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { FileUploader } from ".";

const fn = jest.fn();

test("Sets the {accept} attribute on the file input", async () => {
  const acceptType = "text/*";
  const { container } = render(
    <FileUploader parseData={fn} acceptTypes={[acceptType]} />
  );
  const input = container.querySelector("input");

  expect(input).toHaveAttribute("accept", acceptType);
});

test("Displays an error notification on upload error", async () => {
  const acceptType = ".log";
  const { getByText } = render(
    <FileUploader parseData={fn} acceptTypes={[acceptType]} />
  );
  const formElement = getByText("Upload a log file");
  const errorText = `There was a problem with your upload. Make sure to use one of the following MIME types: ${acceptType}`;
  Object.defineProperty(formElement, "files", {
    value: [],
  });
  fireEvent.drop(formElement);
  await waitFor(() => getByText(errorText));

  expect(getByText(errorText)).toBeInTheDocument();
});

test("Uploads a file & lists the file name", async () => {
  const rows = ["Text 1", "Text 2", "Text 3"];
  const uploadSuccessText = "The upload was successful!";
  const fileName = "example.log";
  const file = new File([rows.join("\n")], fileName);
  const { getByText } = render(
    <FileUploader parseData={fn} acceptTypes={[".log"]} />
  );
  const formElement = getByText("Upload a log file");
  Object.defineProperty(formElement, "files", {
    value: [{ ...file, name: fileName }],
  });
  fireEvent.drop(formElement);
  await waitFor(() => getByText(uploadSuccessText));

  expect(getByText(uploadSuccessText)).toBeInTheDocument();
  expect(getByText(fileName)).toBeInTheDocument();
});
