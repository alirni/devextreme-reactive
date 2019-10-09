import { PureReducer } from 'dx-core-rtl';
import { AppointmentMeta } from '../../types';

export const setAppointmentMeta: PureReducer<AppointmentMeta, AppointmentMeta> = (
  prevAppointmentMeta,
  { target, data },
) => ({ target, data });
