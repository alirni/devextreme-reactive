import { withComponents } from 'dx-react-core-rtl';
import { PagingPanel as PagingPanelBase } from 'dx-react-grid-rtl';
import { Pager as Container } from '../templates/paging-panel/pager';

export const PagingPanel = withComponents({ Container })(PagingPanelBase);
