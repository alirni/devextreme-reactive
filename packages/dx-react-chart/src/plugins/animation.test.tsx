import * as React from 'react';
import { mount } from 'enzyme';
import { PluginHost } from 'dx-react-core-rtl';
import { pluginDepsToComponents, getComputedState } from '@devexpress/dx-testing';
import { buildAnimatedStyleGetter } from '@devexpress/dx-chart-core';
import { Animation } from './animation';

describe('Animation', () => {
  it('should provide optinos', () => {
    const tree = mount((
      <PluginHost>
        <Animation />
        {pluginDepsToComponents({})}
      </PluginHost>
    ));

    expect(getComputedState(tree)).toEqual({
      getAnimatedStyle: buildAnimatedStyleGetter,
    });
  });
});
