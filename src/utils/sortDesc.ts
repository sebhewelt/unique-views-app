import { DataDisplayableFormatType } from "types";

export const sortDesc = (
  data: DataDisplayableFormatType
): DataDisplayableFormatType =>
  data.sort((a: any, b: any) => (a[1] > b[1] ? -1 : 1));
