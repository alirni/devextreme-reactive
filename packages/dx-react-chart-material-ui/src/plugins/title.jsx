import { withComponents } from 'dx-react-core-rtl';
import { Title as TitleBase } from '@devexpress/dx-react-chart';
import { Text } from '../templates/title/text';

export const Title = withComponents({ Text })(TitleBase);
