import { PureComputed } from 'dx-core-rtl';

export const clamp: PureComputed<[number, number]> = (value, max) => (
  Math.max(Math.min(value, max), 0)
);
