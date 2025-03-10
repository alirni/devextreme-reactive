import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import moment from 'moment';
import { NUMBER_EDITOR, getRecurrenceOptions, changeRecurrenceOptions } from '@devexpress/dx-scheduler-core';

const styles = ({ spacing, typography }) => ({
  textEditor: {
    width: 'calc(100% - 4.5em)',
  },
  label: {
    width: '4.5em',
  },
  input: {
    paddingBottom: spacing(2.75),
  },
  radioLabel: {
    fontSize: typography.fontSize + 1,
  },
  dateEditor: {
    width: 'calc(100% - 4.5em)',
  },
  formControl: {
    marginRight: 0,
  },
  controlLabel: {
    width: '100%',
  },
});

const EndRepeatEditorBase = ({
  classes,
  getMessage,
  labelComponent: Label,
  textEditorComponent: TextEditor,
  dateEditorComponent: DateEditor,
  onFieldChange,
  appointmentData,
  locale,
  readOnly,
  ...restProps
}) => {
  const [count, setCount] = React.useState(1);
  const [endDate, setEndDate] = React.useState(appointmentData.endDate);

  const { rRule } = appointmentData;
  const recurrenceOptions = React.useMemo(() => getRecurrenceOptions(rRule) || {}, [rRule]);
  const changeRecurrenceCount = React.useCallback(nextCount => onFieldChange({
    rRule: changeRecurrenceOptions({ ...recurrenceOptions, count: nextCount }),
  }), [recurrenceOptions, onFieldChange]);
  const changeRecurrenceEndDate = React.useCallback((date) => {
    if (moment(date).isValid()) {
      onFieldChange({
        rRule: changeRecurrenceOptions({ ...recurrenceOptions, until: date }),
      });
    }
  }, [recurrenceOptions, onFieldChange]);

  const countEditorProps = React.useMemo(() => ({
    endAdornment: <InputAdornment position="end">{getMessage('occurrencesLabel')}</InputAdornment>,
  }), []);

  const recurrenceCount = recurrenceOptions.count || count;
  const recurrenceEndDate = recurrenceOptions.until || endDate;
  let value;
  if (recurrenceOptions.count) {
    value = 'endAfter';
  } else if (recurrenceOptions.until) {
    value = 'endBy';
  } else {
    value = 'never';
  }

  const onRadioGroupValueChange = (event) => {
    let change;
    switch (event.target.value) {
      case 'endAfter':
        setEndDate(recurrenceOptions.until || endDate);
        change = { count, until: undefined };
        break;
      case 'endBy':
        setCount(recurrenceOptions.count || count);
        change = { count: undefined, until: endDate };
        break;
      case 'never':
        setEndDate(recurrenceOptions.until || endDate);
        setCount(recurrenceOptions.count || count);
        change = { count: undefined, until: undefined };
        break;
      default:
        break;
    }
    onFieldChange({
      rRule: changeRecurrenceOptions({
        ...recurrenceOptions, ...change,
      }),
    });
  };
  return (
    <RadioGroup
      onChange={onRadioGroupValueChange}
      value={value}
      {...restProps}
    >
      <FormControlLabel
        value="never"
        control={<Radio color="primary" />}
        label={getMessage('never')}
        classes={{ label: classes.radioLabel }}
      />
      <FormControlLabel
        className={classes.formControl}
        value="endAfter"
        classes={{ label: classes.controlLabel }}
        control={<Radio color="primary" />}
        label={(
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Label
              className={classes.label}
              text={getMessage('onLabel')}
            />
            <TextEditor
              readOnly={readOnly || value !== 'endAfter'}
              className={classes.textEditor}
              value={recurrenceCount}
              type={NUMBER_EDITOR}
              onValueChange={changeRecurrenceCount}
              InputProps={countEditorProps}
            />
          </Grid>
        )}
      />
      <FormControlLabel
        className={classes.formControl}
        classes={{ label: classes.controlLabel }}
        value="endBy"
        control={<Radio color="primary" />}
        label={(
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Label
              className={classes.label}
              text={getMessage('afterLabel')}
            />
            <DateEditor
              className={classes.dateEditor}
              readOnly={readOnly || value !== 'endBy'}
              value={recurrenceEndDate}
              onValueChange={changeRecurrenceEndDate}
              allowKeyboardControl={false}
              locale={locale}
              excludeTime={appointmentData.allDay}
            />
          </Grid>
        )}
      />
    </RadioGroup>
  );
};


EndRepeatEditorBase.propTypes = {
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  dateEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  classes: PropTypes.object.isRequired,
  getMessage: PropTypes.func,
  onFieldChange: PropTypes.func,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool,
  }).isRequired,
  readOnly: PropTypes.bool,
};

EndRepeatEditorBase.defaultProps = {
  onFieldChange: () => undefined,
  getMessage: () => undefined,
  readOnly: false,
};

export const EndRepeatEditor = withStyles(styles)(EndRepeatEditorBase, { name: 'EndRepeatEditor' });
