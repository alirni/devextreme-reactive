import * as React from 'react';
import { withComponents } from 'dx-react-core-rtl';
import { TableGroupRow as TableGroupRowBase } from 'dx-react-grid-rtl';
import { Cell } from '../templates/table-group-cell/cell';
import { TableRow as Row } from '../templates/table-row';
import { Content } from '../templates/table-group-cell/content';
import { ExpandButton as Icon } from '../templates/parts/expand-button';

const TableGroupRowWithIndent = props => <TableGroupRowBase indentColumnWidth={33} {...props} />;
TableGroupRowWithIndent.components = TableGroupRowBase.components;

export const TableGroupRow = withComponents({
  Row, Cell, Content, Icon,
})(TableGroupRowWithIndent);

TableGroupRow.COLUMN_TYPE = TableGroupRowBase.COLUMN_TYPE;
TableGroupRow.ROW_TYPE = TableGroupRowBase.ROW_TYPE;
