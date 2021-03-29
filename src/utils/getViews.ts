import { DataDisplayableFormatType } from "types";

export type CountViewsType = { [path: string]: { size: number } };
export type CountUniqueViewsType = { [path: string]: Set<string> };
export type GetViewsReturnType = {
  views: DataDisplayableFormatType;
  uniqueViews: DataDisplayableFormatType;
};

const getDisplayableData = (
  data: CountViewsType | CountUniqueViewsType
): DataDisplayableFormatType =>
  Object.keys(data).map((path) => {
    return [path, data[path].size];
  });

export const getViews = (fileByLine: string[]): GetViewsReturnType => {
  const views: CountViewsType = {};
  const uniqueViews: CountUniqueViewsType = {};

  fileByLine.forEach((line: string) => {
    if (!line) return; // Don't process empty line
    const [path, ip] = line.split(/\s/);

    // If path exists, update size, otherwise start counting from 1
    views[path] ? views[path].size++ : (views[path] = { size: 1 });

    // If path exists add to a Set, otherwise create a new set
    uniqueViews[path]
      ? uniqueViews[path].add(ip)
      : (uniqueViews[path] = new Set([ip]));
  });

  return {
    views: getDisplayableData(views),
    uniqueViews: getDisplayableData(uniqueViews),
  };
};
