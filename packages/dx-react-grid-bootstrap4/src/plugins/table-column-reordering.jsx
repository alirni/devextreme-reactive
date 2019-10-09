import { withComponents } from 'dx-react-core-rtl';
import { TableColumnReordering as TableColumnReorderingBase } from 'dx-react-grid-rtl';
import { TableInvisibleRow as Row } from '../templates/table-invisible-row';
import { TableReorderingCell as Cell } from '../templates/table-reordering-cell';

export const TableColumnReordering = withComponents({ Row, Cell })(TableColumnReorderingBase);
