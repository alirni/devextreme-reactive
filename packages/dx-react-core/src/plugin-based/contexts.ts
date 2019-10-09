import * as React from 'react';
import { PluginHost, PluginPositionFn } from 'dx-core-rtl';

/** @internal */
export interface TemplateHostInterface {
  params(...args): any;
  templates(...args): any;
}

/** @internal */
export const PluginHostContext = React.createContext<PluginHost | null>(null);
/** @internal */
export const PositionContext = React.createContext<PluginPositionFn>(() => []);
/** @internal */
export const TemplateHostContext = React.createContext<TemplateHostInterface | null>(null);
