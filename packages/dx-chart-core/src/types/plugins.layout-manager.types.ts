import { Size } from 'dx-react-core-rtl';
import { NumberArray } from './chart-core.types';

/** @internal */
export type BBoxes = {
  readonly [placeholder: string]: Size;
};
/** @internal */
export type BBoxesChange = {
  readonly bBox: Size;
  readonly placeholder: string;
};

/** @internal */
export type RangesCache = {
  readonly [name: string]: NumberArray;
};
