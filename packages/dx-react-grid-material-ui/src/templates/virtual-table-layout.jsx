import * as React from 'react';
import {
  TableLayout,
  VirtualTableLayout as VirtualTableLayoutCore,
} from 'dx-react-grid-rtl';

const MINIMAL_COLUMN_WIDTH = 120;

export const VirtualTableLayout = props => (
  <TableLayout
    layoutComponent={VirtualTableLayoutCore}
    minColumnWidth={MINIMAL_COLUMN_WIDTH}
    {...props}
  />
);
