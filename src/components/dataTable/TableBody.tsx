import { Table } from "@mantine/core";
import {
  IDataTableAction,
  IDataTableHeader,
  IDataTableRows,
} from "../../interfaces";
import { EyeIcon } from "../../assets";

interface ITableBodyProps {
  rows: IDataTableRows[];
  columns: IDataTableHeader[];
  actions?: IDataTableAction;
}

const TableBody = ({ rows, columns, actions }: ITableBodyProps) => {
  const handleAction = (action: string, row: unknown) => {
    if (action === "view") {
      actions?.view(row);
    }
  };
  return (
    <>
      <Table.Tbody>
        {rows.map((row, rowIndex) => {
          return (
            <Table.Tr key={rowIndex}>
              {columns.map((column) => {
                if (column.type === "action") {
                  return (
                    <Table.Td key={column.key}>
                      {column.actions?.map((action, index) => {
                        return (
                          <button
                            key={index}
                            className="button-icon"
                            data-icon={action.icon}
                            onClick={() => handleAction(action.type, row)}
                          >
                            {action.display === "icon" && (
                              <>{action.icon === "eye" && <EyeIcon />}</>
                            )}
                            {action.display === "text" && (
                              <span>{action.text}</span>
                            )}
                          </button>
                        );
                      })}
                    </Table.Td>
                  );
                } else if (column.type === "jsx") {
                  return (
                    <Table.Td key={column.key}>{row[column.key]}</Table.Td>
                  );
                } else if (column.type === "image") {
                  return (
                    <Table.Td key={column.key}>
                      <img
                        src={row[column.key] as string}
                        alt={column.title}
                        className="table-image"
                      />
                    </Table.Td>
                  );
                } else if (column.type === "index") {
                  return <Table.Td key={column.key}>{rowIndex + 1}</Table.Td>;
                } else {
                  return (
                    <Table.Td key={column.key}>{row[column.key]}</Table.Td>
                  );
                }
              })}
            </Table.Tr>
          );
        })}
      </Table.Tbody>
    </>
  );
};
export default TableBody;
