import { Table } from "@mantine/core";
import { IDataTableHeader } from "../../interfaces";

interface ITableHeaderProps {
  columns: IDataTableHeader[];
}

export const TableHeader = ({ columns }: ITableHeaderProps) => {
  return (
    <Table.Thead bg="gray.0">
      <Table.Tr>
        {columns.map((column) => (
          <Table.Th
            key={column.key}
            className={`white-space-no-wrap`}
            style={{ width: `${column.width || "auto"}` }}
          >
            {column.title}
          </Table.Th>
        ))}
      </Table.Tr>
    </Table.Thead>
  );
};
