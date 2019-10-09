import { PureComputed } from 'dx-core-rtl';
import { TABLE_EDIT_COMMAND_TYPE } from './constants';
import { TableColumn } from '../../types';

export const tableColumnsWithEditing: PureComputed<[TableColumn[], number?]> = (
  tableColumns, width,
) => [
  { width, key: TABLE_EDIT_COMMAND_TYPE.toString(), type: TABLE_EDIT_COMMAND_TYPE },
  ...tableColumns];
