import { withComponents } from 'dx-react-core-rtl';
import { SearchPanel as SearchPanelBase } from 'dx-react-grid-rtl';
import { SearchPanelInput as Input } from '../templates/search-panel-input';

export const SearchPanel = withComponents({ Input })(SearchPanelBase);
