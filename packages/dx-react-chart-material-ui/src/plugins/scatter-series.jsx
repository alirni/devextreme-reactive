import { withComponents } from 'dx-react-core-rtl';
import { ScatterSeries as ScatterSeriesBase } from '@devexpress/dx-react-chart';
import { Point } from '../templates/series/point';

export const ScatterSeries = withComponents({ Point })(ScatterSeriesBase);
