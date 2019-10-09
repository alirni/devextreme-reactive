import { TableColumn, TableRow } from './table.types';
import { PureComputed } from 'dx-core-rtl';

/** @internal */
export type HeaderColumnChain = { start: number, columns: ReadonlyArray<TableColumn> };
/** @internal */
export type HeaderColumnChainRow = HeaderColumnChain[];
/** @internal */
export type HeaderColumnChainRows = HeaderColumnChainRow[];

/** @internal */
export type ShouldSplitChainFn = PureComputed<
  [HeaderColumnChain, TableColumn, number],
  boolean
>;

/** @internal */
export type ExtendColumnChainFn = PureComputed<[TableColumn], {}>;

/** @internal */
export type GetHeaderColumnChainsFn<P0, P1 = any, P2 = any> = PureComputed<
  [P0, P1, P2],
  HeaderColumnChainRows
>;

/** @internal */
export type SplitHeaderColumnChainsFn = PureComputed<
  [HeaderColumnChainRows, TableColumn[], ShouldSplitChainFn, ExtendColumnChainFn]
>;

/** @internal */
export type FindChainByColumnIndexFn = PureComputed<
  [HeaderColumnChainRow, number],
  HeaderColumnChain
>;

/** @internal */
export type GenerateChainsFn = PureComputed<[TableRow[], TableColumn[]], HeaderColumnChainRows>;
