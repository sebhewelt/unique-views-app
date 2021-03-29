import { useMemo } from "react";
import { sortDesc } from "utils/sortDesc";
import { DataDisplayableFormatType } from "types";
import "./Table.css";

interface TableProps {
  title: string;
  data: DataDisplayableFormatType;
}

export const Table = ({ title, data }: TableProps) => {
  const sortedData = useMemo(() => sortDesc(data), [data]);

  return sortedData.length > 0 ? (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>{title}</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map(([prop, value]) => (
          <tr key={prop}>
            <td>{prop}</td>
            <td>{value} views</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
};
