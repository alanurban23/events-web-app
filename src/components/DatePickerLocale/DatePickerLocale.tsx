import i18next from 'i18next';
import { useState } from 'react';
import { DateAdapter, DatePicker, LocalizationProvider, TextField } from '../../material-ui';
import { localeMap } from '../../translations/Locales';
import { getEnv } from '../../utils';

type DatePickerProps = {
  label: string;
  onChangeDate: any;
  defaultDate: Date;
};

export const DatePickerLocale: React.FC<DatePickerProps> = ({
  label,
  defaultDate,
  onChangeDate,
}) => {
  const [locale] = useState<string>(localeMap[i18next.language]);
  const [{ format, mask }] = useState({
    format: getEnv('DATE_PICKER_FORMAT'),
    mask: getEnv('DATE_PICKER_MASK'),
  });

  return (
    <div data-testid='DatePickerLocale'>
      <LocalizationProvider dateAdapter={DateAdapter} locale={locale}>
        <DatePicker
          inputFormat={format}
          mask={mask}
          label={label}
          value={defaultDate}
          onChange={onChangeDate}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DatePickerLocale;
