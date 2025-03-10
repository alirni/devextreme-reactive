import * as React from 'react';
import { createShallow, getClasses, createMount } from '@material-ui/core/test-utils';
import { getRecurrenceOptions, changeRecurrenceOptions } from '@devexpress/dx-scheduler-core';
import { EndRepeatEditor } from './end-repeat-editor';

jest.mock('@devexpress/dx-scheduler-core', () => ({
  ...require.requireActual('@devexpress/dx-scheduler-core'),
  getRecurrenceOptions: jest.fn(),
  changeRecurrenceOptions: jest.fn(),
}));

describe('AppointmentForm recurrence RadioGroup', () => {
  const defaultProps = {
    textEditorComponent: () => null,
    labelComponent: () => null,
    dateEditorComponent: () => null,
    onFieldChange: jest.fn(),
    getMessage: jest.fn(),
    appointmentData: {
      startDate: new Date(2019, 1, 1, 0, 0),
      endDate: new Date(2019, 1, 1, 0, 30),
      rRule: 'RRULE:FREQ=YEARLY',
    },
    locale: 'en-US',
  };
  let classes;
  let shallow;
  let mount;
  beforeAll(() => {
    classes = getClasses(<EndRepeatEditor {...defaultProps} />);
    shallow = createShallow({ dive: true });
  });
  beforeEach(() => {
    mount = createMount();
    getRecurrenceOptions.mockImplementation(() => ({}));
    changeRecurrenceOptions.mockImplementation(testValue => testValue);
  });
  afterEach(() => {
    mount.cleanUp();
  });
  describe('EndRepeatEditor', () => {
    it('should pass rest props to the root element', () => {
      const tree = shallow((
        <EndRepeatEditor data={{ a: 1 }} {...defaultProps} />
      ));

      expect(tree.props().data)
        .toMatchObject({ a: 1 });
    });

    it('should render its components correctly', () => {
      const tree = mount((
        <EndRepeatEditor {...defaultProps} />
      ));

      const labels = tree.find(defaultProps.labelComponent);
      expect(labels)
        .toHaveLength(2);
      expect(labels.at(0).is(`.${classes.label}`))
        .toBeTruthy();
      expect(labels.at(1).is(`.${classes.label}`))
        .toBeTruthy();

      const textEditor = tree.find(defaultProps.textEditorComponent);
      expect(textEditor)
        .toHaveLength(1);
      expect(textEditor.at(0).is(`.${classes.textEditor}`))
        .toBeTruthy();

      const dateEditorComponent = tree.find(defaultProps.dateEditorComponent);
      expect(dateEditorComponent)
        .toHaveLength(1);
      expect(dateEditorComponent.at(0).is(`.${classes.dateEditor}`))
        .toBeTruthy();
    });

    it('should handle appointment field changes', () => {
      const tree = mount((
        <EndRepeatEditor {...defaultProps} />
      ));

      tree.find(defaultProps.textEditorComponent).at(0).prop('onValueChange')('abc');
      expect(defaultProps.onFieldChange)
        .toHaveBeenCalledWith({
          rRule: {
            ...getRecurrenceOptions(),
            count: 'abc',
          },
        });

      const testDate = new Date(2019, 1, 1);
      tree.find(defaultProps.dateEditorComponent).at(0).prop('onValueChange')(testDate);
      expect(defaultProps.onFieldChange)
        .toHaveBeenCalledWith({
          rRule: {
            ...getRecurrenceOptions(),
            until: testDate,
          },
        });
    });

    it('should handle switching and call a handler with correct parameters', () => {
      const tree = shallow((
        <EndRepeatEditor {...defaultProps} />
      ));

      tree.prop('onChange')({ target: { value: 'never' } });
      expect(defaultProps.onFieldChange)
        .toHaveBeenCalledWith({
          rRule: {
            ...getRecurrenceOptions(),
          },
        });

      tree.prop('onChange')({ target: { value: 'endBy' } });
      expect(defaultProps.onFieldChange)
        .toHaveBeenCalledWith({
          rRule: {
            ...getRecurrenceOptions(),
            until: defaultProps.appointmentData.startDate,
          },
        });

      tree.prop('onChange')({ target: { value: 'endAfter' } });
      expect(defaultProps.onFieldChange)
        .toHaveBeenCalledWith({
          rRule: {
            ...getRecurrenceOptions(),
            count: 1,
          },
        });
    });

    it('should call getMessage with proper parameters', () => {
      shallow((
        <EndRepeatEditor {...defaultProps} />
      ));

      expect(defaultProps.getMessage)
        .toHaveBeenCalledWith('never');
      expect(defaultProps.getMessage)
        .toHaveBeenCalledWith('onLabel');
      expect(defaultProps.getMessage)
        .toHaveBeenCalledWith('occurrencesLabel');
      expect(defaultProps.getMessage)
        .toHaveBeenCalledWith('afterLabel');
    });

    it('should work even if rule is undefined', () => {
      const tree = shallow((
        <EndRepeatEditor {...defaultProps} appointmentData={{}} />
      ));

      expect(tree.exists())
        .toBeTruthy();
    });
  });
});
