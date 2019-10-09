import * as React from 'react';
import { withComponents } from 'dx-react-core-rtl';
import { TableRowDetail as TableRowDetailBase } from 'dx-react-grid-rtl';
import { TableDetailToggleCell as ToggleCell } from '../templates/table-detail-toggle-cell';
import { TableDetailCell as Cell } from '../templates/table-detail-cell';
import { TableRow as Row } from '../templates/table-row';

const TableRowDetailWithWidth = props => <TableRowDetailBase toggleColumnWidth={40} {...props} />;
TableRowDetailWithWidth.components = TableRowDetailBase.components;

export const TableRowDetail = withComponents({ Row, Cell, ToggleCell })(TableRowDetailWithWidth);

TableRowDetail.COLUMN_TYPE = TableRowDetailBase.COLUMN_TYPE;
TableRowDetail.ROW_TYPE = TableRowDetailBase.ROW_TYPE;
