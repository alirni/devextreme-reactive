import { withComponents } from 'dx-react-core-rtl';
import { TableColumnReordering as TableColumnReorderingBase } from 'dx-react-grid-rtl';
import { TableReorderingCell as Cell } from '../templates/table-reordering-cell';
import { TableInvisibleRow as Row } from '../templates/table-invisible-row';

export const TableColumnReordering = withComponents({ Row, Cell })(TableColumnReorderingBase);
