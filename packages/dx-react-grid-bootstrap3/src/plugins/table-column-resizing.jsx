import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TableColumnResizing as TableColumnResizingBase } from 'dx-react-grid-rtl';

export class TableColumnResizing extends React.PureComponent {
  render() {
    const { minColumnWidth, ...restProps } = this.props;
    return (
      <TableColumnResizingBase
        {...restProps}
        minColumnWidth={minColumnWidth}
      />
    );
  }
}

TableColumnResizing.propTypes = {
  minColumnWidth: PropTypes.number,
};

TableColumnResizing.defaultProps = {
  minColumnWidth: 45,
};
