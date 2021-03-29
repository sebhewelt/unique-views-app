import { getFileReader } from "./getFileReader";

test("return an instance of a FileReader", () => {
  const file = new File(["file"], "file");
  const fileReaderMock = {
    readAsText: jest.fn(),
    onloadend: jest.fn(),
    onerror: jest.fn(),
  };
  Object.defineProperty(global, "FileReader", {
    writable: true,
    value: jest.fn().mockImplementation(() => fileReaderMock),
  });

  expect(getFileReader(file)).toBe(fileReaderMock);
});
