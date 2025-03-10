import * as React from 'react';
import * as PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = {
  cell: {
    userSelect: 'none',
    border: 'none',
    padding: 0,
    textAlign: 'center',
    verticalAlign: 'middle',
    '&:last-child': {
      padding: 0,
    },
  },
};

const HeaderCellBase = ({
  classes,
  children,
  className,
  ...restProps
}) => (
  <TableCell
    className={classNames({
      [classes.cell]: true,
    }, className)}
    {...restProps}
  >
    {children}
  </TableCell>
);

HeaderCellBase.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

HeaderCellBase.defaultProps = {
  children: undefined,
  className: undefined,
};

export const HeaderCell = withStyles(styles, { name: 'HeaderCell' })(HeaderCellBase);
