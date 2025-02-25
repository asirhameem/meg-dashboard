import { Box, Table } from "@mantine/core";
import { TableHeader } from "./TableHeader";
import TableBody from "./TableBody";
import {
  IDataTableAction,
  IDataTableHeader,
  IDataTableRows,
} from "../../interfaces";

interface IDataTableProps {
  columns: IDataTableHeader[];
  rows: IDataTableRows[];
  actions?: IDataTableAction;
  striped?: boolean;
  highlightOnHover?: boolean;
  withTableBorder?: boolean;
  withColumnBorders?: boolean;
}

export function DataTable({
  columns,
  rows,
  actions,
  striped = false,
  highlightOnHover = false,
  withTableBorder = false,
  withColumnBorders = false,
}: IDataTableProps) {
  return (
    <Box>
      <Table
        stickyHeader
        stickyHeaderOffset={60}
        striped={striped}
        highlightOnHover={highlightOnHover}
        withTableBorder={withTableBorder}
        withColumnBorders={withColumnBorders}
        verticalSpacing="md"
      >
        <TableHeader columns={columns} />
        <TableBody rows={rows} columns={columns} actions={actions} />
      </Table>
    </Box>
  );
}
