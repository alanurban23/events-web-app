import { FC, useEffect, useState } from 'react';
import { DatePickerLocale } from '..';
import { Autocomplete, Box, Button, Container, Stack, styled, TextField } from '../../material-ui';
import { useTranslation } from '../../utils';

const events = [{ title: 'The Shawshank Redemption' }];
const localization = [{ title: 'Poland' }];

const SearchContainer = styled(Box)({
  height: '10em',
});

const SearchBody = styled(Stack)({
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)',
  padding: '2em',
});

export const Search: FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const { t } = useTranslation();

  // Remove warning because it is not needed
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [startDate, endDate]);

  return (
    <div data-testid='Search'>
      <Container maxWidth='lg'>
        <SearchContainer>
          <SearchBody direction='row' spacing={2}>
            <Autocomplete
              sx={{ width: 300, bgcolor: 'white' }}
              id='searchEvent'
              freeSolo
              options={events.map((option) => option.title)}
              renderInput={(params) => <TextField {...params} label={t('searchEvent')} />}
            />
            <Autocomplete
              sx={{ width: 300, bgcolor: 'white' }}
              id='localization'
              freeSolo
              options={localization.map((option) => option.title)}
              renderInput={(params) => <TextField {...params} label={t('localization')} />}
            />
            <DatePickerLocale
              label={t('startDate')}
              onChangeDate={setStartDate}
              defaultDate={startDate}
            />
            <DatePickerLocale
              label={t('endDate')}
              onChangeDate={setEndDate}
              defaultDate={endDate}
            />
            <Button variant='contained'>{t('search')}</Button>
          </SearchBody>
        </SearchContainer>
      </Container>
    </div>
  );
};

export default Search;
