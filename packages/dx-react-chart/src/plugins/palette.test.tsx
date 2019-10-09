import * as React from 'react';
import { mount } from 'enzyme';
import { PluginHost } from 'dx-react-core-rtl';
import { pluginDepsToComponents, getComputedState } from '@devexpress/dx-testing';
import { Palette } from './palette';

describe('Palette', () => {
  it('should provide options', () => {
    const scheme = ['a', 'b', 'c'];
    const tree = mount((
      <PluginHost>
        {pluginDepsToComponents({})}
        <Palette scheme={scheme} />
      </PluginHost>
    ));

    expect(getComputedState(tree)).toEqual({
      palette: scheme,
    });
  });
});
