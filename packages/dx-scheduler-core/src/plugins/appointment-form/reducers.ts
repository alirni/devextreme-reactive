import { PureReducer } from 'dx-core-rtl';
import { AppointmentModel, AppointmentDataPayload } from '../../types';

export const setAppointmentData: PureReducer<
  AppointmentModel, AppointmentDataPayload
> = (prevAppointmentData, { appointmentData }) => appointmentData;
