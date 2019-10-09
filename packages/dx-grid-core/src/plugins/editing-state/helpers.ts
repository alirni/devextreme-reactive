import { PureComputed } from 'dx-core-rtl';
import { RowId, RowChanges } from '../../types';

export const getRowChange: PureComputed<[RowChanges, RowId], any> = (
  rowChanges, rowId,
) => rowChanges[rowId] || {};
