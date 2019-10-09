import { PureComputed } from 'dx-core-rtl';

export type ViewBoundTextFn = PureComputed<
  [Date, Date, string, Date, number], string
>;
