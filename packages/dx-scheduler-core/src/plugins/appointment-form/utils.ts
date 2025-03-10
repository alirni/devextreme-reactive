import {
  LONG_WEEK_DAY_OPTIONS, DAY_LONG_MONTH_OPTIONS,
  LONG_MONTH_OPTIONS,
} from '@devexpress/dx-scheduler-core';
import { PureComputed } from '@devexpress/dx-core';
import { Option, OptionsFormatterFn, DateFormatterFn } from '../../types';
import {
  MONTHS_DATES, REPEAT_TYPES_ARRAY, WEEK_NUMBER_LABELS, DAYS_IN_WEEK,
} from './constants';
import { getDaysOfWeekDates, getDaysOfWeekArray } from './helpers';

export const getWeekNumberLabels: OptionsFormatterFn = getMessage =>
  WEEK_NUMBER_LABELS.map((weekNumberLabel, index) => ({
    text: getMessage(weekNumberLabel),
    id: index,
  }));

export const getDaysOfWeek: PureComputed<
  [(date: Date, formatOptions: object) => string, number], Array<Option>
> = (formatDate, firstDayOfWeek) => {
  const daysOfWeekArray = getDaysOfWeekArray(firstDayOfWeek);
  const daysOfWeekDates = getDaysOfWeekDates(firstDayOfWeek);
  return daysOfWeekDates.map(
    (day, index) => ({
      text: getDayOfWeek(day, formatDate),
      id: index + 1 < DAYS_IN_WEEK ? daysOfWeekArray[index + 1] : daysOfWeekArray[0],
    }),
  );
};

export const getMonths: DateFormatterFn = formatDate => MONTHS_DATES.map((month, index) => ({
  text: getMonth(month, formatDate),
  id: getMonthId(index),
}));

export const getMonthsWithOf: PureComputed<
  [(messageKey: string) => string, (date: Date, formatOptions: object) => string],
    Array<Option>
> = (getMessage, formatDate) => MONTHS_DATES.map((month, index) => ({
  text: getMonthWithOf(month, getMessage, formatDate),
  id: getMonthId(index),
}));

const getMonthWithOf = (
  date: Date,
  getMessage: (messageKey: string) => string,
  formatDate: (date: Date, formatOptions: object) => string,
) => getMessage('ofLabel')
  + formatDate(date, DAY_LONG_MONTH_OPTIONS).replace(/[\d.,]/g, '').toString();

const getMonth = (
  date: Date,
  formatDate: (date: Date, formatOptions: object) => string,
) => formatDate(date, LONG_MONTH_OPTIONS);

const getDayOfWeek = (
  date: Date,
  formatDate: (date: Date, formatOptions: object) => string,
) => formatDate(date, LONG_WEEK_DAY_OPTIONS);

const getMonthId: PureComputed<
  [number], number
> = index => index + 1;

export const getAvailableRecurrenceOptions: OptionsFormatterFn = getMessage =>
  REPEAT_TYPES_ARRAY.map(type => ({
    text: getMessage(type),
    id: type,
  }));
