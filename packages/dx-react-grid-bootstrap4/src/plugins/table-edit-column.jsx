import { withComponents } from 'dx-react-core-rtl';
import { TableEditColumn as TableEditColumnBase } from 'dx-react-grid-rtl';
import {
  EditCommandHeadingCell as HeaderCell,
  EditCommandCell as Cell,
  CommandButton as Command,
} from '../templates/table-edit-command-cell';

export const TableEditColumn = withComponents({ Cell, HeaderCell, Command })(TableEditColumnBase);

TableEditColumn.COLUMN_TYPE = TableEditColumnBase.COLUMN_TYPE;
