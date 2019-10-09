import * as React from 'react';
import { DataTypeProvider } from 'dx-react-grid-rtl';

const Formatter = ({ value }) => (value ? 'Yes' : 'No');

export const BooleanTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={Formatter}
    {...props}
  />
);
