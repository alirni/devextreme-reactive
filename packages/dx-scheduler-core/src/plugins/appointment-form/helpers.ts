import moment from 'moment';
import { PureComputed } from 'dx-core-rtl';
import { Action, StartDate, EndDate } from '../../types';

export const callActionIfExists: PureComputed<[Action, object], void> = (action, payload) => {
  if (action) {
    action(payload);
  }
};

export const isAllDayCell: PureComputed<
  [StartDate, EndDate], boolean
> = (
  startDate, endDate,
) => moment(endDate as EndDate).diff(moment(startDate as StartDate), 'days') >= 1;
