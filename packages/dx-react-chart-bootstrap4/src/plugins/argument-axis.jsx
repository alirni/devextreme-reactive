import { withComponents } from 'dx-react-core-rtl';
import { ArgumentAxis as ArgumentAxisBase } from '@devexpress/dx-react-chart';
import { Root } from '../templates/axis/root';
import { Tick } from '../templates/axis/tick';
import { Label } from '../templates/axis/label';
import { Line } from '../templates/axis/line';
import { Grid } from '../templates/axis/grid';

export const ArgumentAxis = withComponents({
  Root, Tick, Label, Line, Grid,
})(ArgumentAxisBase);
