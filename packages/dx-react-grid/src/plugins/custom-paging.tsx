import * as React from 'react';
import { Getter, Plugin } from 'dx-react-core-rtl';
import { CustomPagingProps } from '../types';

const pluginDependencies = [
  { name: 'PagingState' },
];

class CustomPagingBase extends React.PureComponent<CustomPagingProps> {
  static defaultProps = {
    totalCount: 0,
  };

  render() {
    const { totalCount } = this.props;

    return (
      <Plugin
        name="CustomPaging"
        dependencies={pluginDependencies}
      >
        <Getter name="totalCount" value={totalCount} />
      </Plugin>
    );
  }
}

/** A plugin that allows implementing a custom totalCount calculation logic. */
export const CustomPaging: React.ComponentType<CustomPagingProps> = CustomPagingBase;
