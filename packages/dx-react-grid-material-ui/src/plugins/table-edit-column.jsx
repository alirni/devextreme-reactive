import { withComponents } from 'dx-react-core-rtl';
import { TableEditColumn as TableEditColumnBase } from 'dx-react-grid-rtl';
import {
  EditCommandHeadingCell as HeaderCell,
  EditCommandCell as Cell,
  CommandButton as Command,
} from '../templates/table-edit-command-cell';
import { withPatchedProps } from '../utils/with-patched-props';

const TableEditColumnWithWidth = withPatchedProps(props => ({
  width: 150,
  ...props,
}))(TableEditColumnBase);

TableEditColumnWithWidth.components = TableEditColumnBase.components;

export const TableEditColumn = withComponents({
  Cell, HeaderCell, Command,
})(TableEditColumnWithWidth);

TableEditColumn.COLUMN_TYPE = TableEditColumnBase.COLUMN_TYPE;
