import { withComponents } from 'dx-react-core-rtl';
import { TableColumnVisibility as TableColumnVisibilityBase } from 'dx-react-grid-rtl';
import { EmptyMessage } from '../templates/empty-message';

export const TableColumnVisibility = withComponents({ EmptyMessage })(TableColumnVisibilityBase);
