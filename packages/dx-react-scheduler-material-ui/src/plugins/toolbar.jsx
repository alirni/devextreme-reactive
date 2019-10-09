import { withComponents } from 'dx-react-core-rtl';
import { Toolbar as ToolbarBase } from '@devexpress/dx-react-scheduler';
import { Toolbar as Root } from '../templates/toolbar/toolbar';
import { FlexibleSpace } from '../templates/toolbar/flexible-space';

export const Toolbar = withComponents({ Root, FlexibleSpace })(ToolbarBase);
