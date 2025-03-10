import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import classNames from 'classnames';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';

const styles = ({ spacing }) => ({
  label: {
    width: '4.5em',
  },
  select: {
    width: 'calc((100% - 5.5em) * 3 / 7)',
    maxWidth: '8em',
  },
  longSelect: {
    width: 'calc((100% - 5.5em) * 4 / 7)',
    minWidth: 'calc(100% - 13.5em)',
    marginLeft: '1em',
  },
  formControlLabel: {
    alignItems: 'flex-start',
  },
  formControl: {
    marginRight: 0,
    marginTop: spacing(1),
    marginBottom: spacing(1),
  },
  doubleSelect: {
    marginLeft: '4.5em',
    width: 'calc(100% - 4.5em)',
    marginTop: spacing(1),
  },
  radioButton: {
    marginTop: spacing(0.75),
  },
  controlLabel: {
    width: '100%',
  },
});

const ChangeWeekNumberEditorBase = React.memo(({
  classes,
  getMessage,
  labelComponent: Label,
  selectComponent: Select,
  readOnly,
  className,
  weekNumber,
  weekNumbers,
  changeWeekNumber,
  month,
  months,
  changeMonth,
  dayOfWeek,
  daysOfWeek,
  changeDayOfWeek,
  ...restProps
}) => (
  <FormControlLabel
    value="onDayOfWeek"
    className={classNames(classes.formControlLabel, classes.formControl, className)}
    classes={{ label: classes.controlLabel }}
    control={<Radio color="primary" className={classes.radioButton} />}
    {...restProps}
    label={(
      <div>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Label
            className={classes.label}
            text={getMessage('theLabel')}
          />
          <Select
            className={classes.select}
            value={weekNumber}
            onValueChange={changeWeekNumber}
            readOnly={readOnly}
            availableOptions={weekNumbers}
          />
          <Select
            className={classes.longSelect}
            value={dayOfWeek}
            onValueChange={changeDayOfWeek}
            readOnly={readOnly}
            availableOptions={daysOfWeek}
          />
        </Grid>
        <Select
          className={classes.doubleSelect}
          value={month}
          onValueChange={changeMonth}
          readOnly={readOnly}
          availableOptions={months}
        />
      </div>
    )}
  />
));

ChangeWeekNumberEditorBase.propTypes = {
  classes: PropTypes.object.isRequired,
  getMessage: PropTypes.func,
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  readOnly: PropTypes.bool,
  month: PropTypes.number.isRequired,
  changeMonth: PropTypes.func.isRequired,
  months: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  weekNumber: PropTypes.number.isRequired,
  changeWeekNumber: PropTypes.func.isRequired,
  weekNumbers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  dayOfWeek: PropTypes.number.isRequired,
  changeDayOfWeek: PropTypes.func.isRequired,
  daysOfWeek: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  className: PropTypes.string,
};

ChangeWeekNumberEditorBase.defaultProps = {
  getMessage: () => undefined,
  readOnly: false,
  className: undefined,
};

export const ChangeWeekNumberEditor = withStyles(styles)(ChangeWeekNumberEditorBase, { name: 'ChangeWeekNumberEditor' });
