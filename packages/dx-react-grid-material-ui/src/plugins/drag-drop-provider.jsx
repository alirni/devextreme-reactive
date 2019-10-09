import { withComponents } from 'dx-react-core-rtl';
import { DragDropProvider as DragDropProviderBase } from 'dx-react-grid-rtl';
import { Container, Column } from '../templates/drag-drop';

export const DragDropProvider = withComponents({ Container, Column })(DragDropProviderBase);
