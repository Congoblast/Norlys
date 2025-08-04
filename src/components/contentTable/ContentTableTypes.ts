export interface TableColumn {
  key: string | number;
  label: string;
}

export interface BaseTableProps {
  columns: TableColumn[];
}
