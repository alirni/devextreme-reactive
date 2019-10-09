import { withComponents } from 'dx-react-core-rtl';
import { TableBandHeader as TableBandHeaderBase } from 'dx-react-grid-rtl';
import { Cell } from '../templates/table-band-header/cell';
import { BandedHeaderCell } from '../templates/table-band-header/banded-header-cell';
import { InvisibleCell } from '../templates/table-band-header/invisible-cell';
import { TableRow as Row } from '../templates/table-row';

export const TableBandHeader = withComponents({
  Cell, Row, BandedHeaderCell, InvisibleCell,
})(TableBandHeaderBase);

TableBandHeader.ROW_TYPE = TableBandHeaderBase.ROW_TYPE;
