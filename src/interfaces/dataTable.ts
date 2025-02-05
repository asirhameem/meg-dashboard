export interface IDataTable {
  head: IDataTableHeader[];
  body: IDataTableRows[];
}

export interface IDataTableHeader {
  key: string;
  title: string;
  type: 'index' | 'text' | 'action' | 'image' | 'jsx';
  width?: string;
  actions?: {
    type: 'view' | 'edit' | 'delete',
    display: 'icon' | 'text',
    icon: 'view' | 'edit' | 'delete',
    text: string,
  }[]
}

export interface IDataTableRows {
  [key: string]: string | number | boolean | JSX.Element;
}

export interface IDataTableAction {
  view?: (id: unknown) => void
  edit?: (id: unknown) => void
  delete?: (id: unknown) => void
}