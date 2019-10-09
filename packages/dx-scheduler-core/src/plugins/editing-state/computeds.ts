import { PureComputed } from 'dx-core-rtl';
import { AppointmentId, AppointmentChanges } from '../../types';

export const changedAppointmentById: PureComputed<
  [object, AppointmentId], AppointmentChanges
> = (changes, appointmentId) => (
  { [appointmentId]: changes }
);
