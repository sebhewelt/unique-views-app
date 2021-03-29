import { sortDesc } from "./sortDesc";
import { DataDisplayableFormatType } from "types";

test("Sorts data descendingly", () => {
  const unsorted: DataDisplayableFormatType = [
    ["key1", 1],
    ["key3", 3],
    ["key2", 2],
  ];

  const sorted = [
    ["key3", 3],
    ["key2", 2],
    ["key1", 1],
  ];

  expect(sortDesc(unsorted)).toStrictEqual(sorted);
});
