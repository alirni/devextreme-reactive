import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Grid as GridBase } from 'dx-react-grid-rtl';
import { Root } from './templates/layout';

export const Grid = ({ children, ...props }) => (
  <GridBase
    rootComponent={Root}
    {...props}
  >
    {children}
  </GridBase>
);

Grid.Root = Root;

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
