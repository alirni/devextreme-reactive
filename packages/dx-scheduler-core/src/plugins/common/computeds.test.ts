import moment from 'moment';
import {
  dayScale as dayScaleComputed, availableViews, viewCellsData,
  startViewDate, endViewDate, timeScale,
} from './computeds';

describe('#dayScale', () => {
  const currentDate = new Date(2018, 5, 24);
  it('should return default day units', () => {
    const units = dayScaleComputed(currentDate, 0, 7);
    expect(units).toHaveLength(7);
  });

  it('should return day units depend on first day of week', () => {
    let units = dayScaleComputed('2018-07-01', 1, 7);

    expect(units[0]).toEqual(new Date(2018, 5, 25));
    expect(units[6]).toEqual(new Date(2018, 6, 1));

    units = dayScaleComputed(currentDate, 3, 7);

    expect(units[0]).toEqual(new Date(2018, 5, 20));
    expect(units[6]).toEqual(new Date(2018, 5, 26));
  });

  it('should return day units depend on day count', () => {
    let units = dayScaleComputed(currentDate, 0, 5);

    expect(units[0]).toEqual(currentDate);
    expect(units[units.length - 1]).toEqual(new Date(2018, 5, 28));

    units = dayScaleComputed(currentDate, 0, 14);

    expect(units[0]).toEqual(currentDate);
    expect(units[units.length - 1]).toEqual(new Date(2018, 6, 7));
  });

  it('can exclude days', () => {
    const units = dayScaleComputed(currentDate, 0, 7, [0, 6]);

    expect(units).toHaveLength(5);
    expect(units[0]).toEqual(new Date(2018, 5, 25));
    expect(units[units.length - 1]).toEqual(new Date(2018, 5, 29));
  });

  it('can excluded days depend on day count', () => {
    const units = dayScaleComputed(currentDate, 0, 5, [1, 3]);

    expect(units).toHaveLength(3);
    expect(units[0]).toEqual(currentDate);
    expect(units[units.length - 1]).toEqual(new Date(2018, 5, 28));
  });

  it('should return day units for one day', () => {
    const units = dayScaleComputed('2018-07-01', undefined, 1);

    expect(units[0]).toEqual(new Date(2018, 6, 1));
  });

  it('should return day units for day depend on day count', () => {
    const units = dayScaleComputed('2018-07-01', undefined, 3);

    expect(units[0]).toEqual(new Date(2018, 6, 1));
    expect(units[1]).toEqual(new Date(2018, 6, 2));
    expect(units[2]).toEqual(new Date(2018, 6, 3));
  });
});

describe('#timeScale', () => {
  const currentDate = new Date(2018, 5, 28);
  const firstDateOfWeek = new Date(2018, 5, 25);
  const format = date => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  it('should start calculation from start view date', () => {
    const units = timeScale(currentDate, 1, 0, 1, 30);
    expect(format(units[0].start))
      .toEqual(format(firstDateOfWeek));
  });
  it('should return time units', () => {
    const units = timeScale(currentDate, 1, 0, 24, 30);
    expect(units).toHaveLength(48);
    expect(units[0].start.getHours()).toBe(0);
    expect(units[0].start.getMinutes()).toBe(0);
    expect(units[0].end.getHours()).toBe(0);
    expect(units[0].end.getMinutes()).toBe(30);

    expect(units[47].start.getHours()).toBe(23);
    expect(units[47].start.getMinutes()).toBe(30);
    expect(units[47].end.getHours()).toBe(23);
    expect(units[47].end.getMinutes()).toBe(59);
  });

  it('should return time units depend on start/end day hours', () => {
    const units = timeScale(currentDate, 1, 10, 11, 30);
    expect(units[0].start.getHours()).toBe(10);
    expect(units[0].start.getMinutes()).toBe(0);
    expect(units[0].end.getHours()).toBe(10);
    expect(units[0].end.getMinutes()).toBe(30);

    expect(units[1].start.getHours()).toBe(10);
    expect(units[1].start.getMinutes()).toBe(30);
    expect(units[1].end.getHours()).toBe(10);
    expect(units[1].end.getMinutes()).toBe(59);
  });

  it('should return time units depend on cell duration', () => {
    const units = timeScale(currentDate, 1, 10, 11, 20);
    expect(units[0].start.getHours()).toBe(10);
    expect(units[0].start.getMinutes()).toBe(0);
    expect(units[0].end.getHours()).toBe(10);
    expect(units[0].end.getMinutes()).toBe(20);

    expect(units[1].start.getHours()).toBe(10);
    expect(units[1].start.getMinutes()).toBe(20);
    expect(units[1].end.getHours()).toBe(10);
    expect(units[1].end.getMinutes()).toBe(40);
  });
});

describe('#availableViews', () => {
  it('should return available view names if views is not defined', () => {
    expect(availableViews(undefined, 'Month', 'Month'))
      .toEqual([{ name: 'Month', displayName: 'Month' }]);
  });

  it('should return available view names if view is expected', () => {
    expect(availableViews([{ name: 'Month', displayName: undefined }], 'Month', 'Month'))
      .toEqual([{ name: 'Month', displayName: undefined }]);
  });

  it('should return available view names if view is not expected', () => {
    expect(availableViews([{ name: 'Week', displayName: 'Week view' }], 'Month', 'Month view'))
      .toEqual([
        { name: 'Week', displayName: 'Week view' },
        { name: 'Month', displayName: 'Month view' },
      ]);
  });
});

describe('#viewCellsData', () => {
  it('should work', () => {
    const currentDate = '2018-10-09 10:00';
    const firstDayOfWeek = undefined;
    const intervalCount = 2;
    const startDayHour = 10;
    const endDayHour = 11;
    const cellDuration = 30;

    expect(viewCellsData(
      currentDate, firstDayOfWeek,
      intervalCount, undefined, startDayHour,
      endDayHour, cellDuration,
    )).toEqual([
      [
        {
          startDate: new Date('2018-10-9 10:00'),
          endDate: new Date('2018-10-9 10:30'),
          today: false,
        },
        {
          startDate: new Date('2018-10-10 10:00'),
          endDate: new Date('2018-10-10 10:30'),
          today: false,
        },
      ],
      [
        {
          startDate: new Date('2018-10-9 10:30'),
          endDate: new Date('2018-10-9 10:59'),
          today: false,
        },
        {
          startDate: new Date('2018-10-10 10:30'),
          endDate: new Date('2018-10-10 10:59'),
          today: false,
        },
      ],
    ]);
  });

  it('should mark today day', () => {
    const currentDate = new Date('2018-10-9');
    const firstDayOfWeek = undefined;
    const intervalCount = 1;
    const startDayHour = 10;
    const endDayHour = 11;
    const cellDuration = 30;

    expect(viewCellsData(
      currentDate, firstDayOfWeek,
      intervalCount, undefined, startDayHour,
      endDayHour, cellDuration,
      currentDate,
    )).toEqual([
      [{
        startDate: new Date('2018-10-9 10:00'), endDate: new Date('2018-10-9 10:30'), today: true,
      }],
      [{
        startDate: new Date('2018-10-9 10:30'), endDate: new Date('2018-10-9 10:59'), today: true,
      }],
    ]);
  });
});

describe('#startViewDate', () => {
  const viewCells = [
    [{ startDate: moment('2018-06-10'), endDate: moment('2018-06-11') }],
    [{ startDate: moment('2018-06-11'), endDate: moment('2018-06-12') }],
  ];

  it('should work', () => {
    expect(startViewDate(viewCells))
      .toEqual(moment('2018-06-10').toDate());
  });
});

describe('#endViewDate', () => {
  const viewCells = [
    [{ startDate: moment('2018-06-10'), endDate: moment('2018-06-11') }],
    [
      { startDate: moment('2018-06-11 10:00'), endDate: moment('2018-06-12 10:30') },
      { startDate: moment('2018-06-11 10:30'), endDate: moment('2018-06-12 11:00') },
    ],
  ];

  it('should work', () => {
    expect(endViewDate(viewCells))
      .toEqual(moment('2018-06-12 10:59:59').toDate());
  });
});
