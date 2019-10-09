import { withComponents } from 'dx-react-core-rtl';
import { ViewSwitcher as ViewSwitcherBase } from '@devexpress/dx-react-scheduler';
import { Switcher } from '../templates/view-switcher/switcher';

export const ViewSwitcher = withComponents({ Switcher })(ViewSwitcherBase);
