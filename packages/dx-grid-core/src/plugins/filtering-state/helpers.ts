import { PureComputed } from 'dx-core-rtl';
import { Filter } from '../../types';

export const getColumnFilterConfig: PureComputed<
  [Filter[], string], Filter | null
> = (filters, columnName) => (
  filters.length && filters.filter(s => s.columnName === columnName)[0] || null
);
