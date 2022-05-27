import { CardBox } from '../..';
import { useEventsData } from '../../../hooks';
import { ArrowRightAlt, Box, Button, createTheme, styled } from '../../../material-ui';
import { EventModel, EventProps } from '../../../models';
import { useHistory } from '../../../routes';
import { useTranslation } from '../../../utils';

const theme = createTheme();

const EventBoxContainer = styled(Box)({
  display: 'flex',
});

const EventBoxButton = styled(Button)`
  margin-top: ${theme.spacing(2)};
  float: right;
`;

export const EventsBox = (props: EventProps): JSX.Element => {
  const history = useHistory();
  const { t } = useTranslation();
  const { events, error } = useEventsData(props);

  const onClickShowMore = (): void => {
    history.push('/events/upcoming');
  };

  return (
    <div data-testid='EventsBox'>
      <EventBoxContainer>
        {error && t('apiErrors.requestFailed')}
        {events?.length === 0 && t('emptyData')}
        {events && events.map((event: EventModel) => <CardBox key={event.id} event={event} />)}
      </EventBoxContainer>
      <EventBoxButton variant='contained' endIcon={<ArrowRightAlt />} onClick={onClickShowMore}>
        {t('showMore')}
      </EventBoxButton>
    </div>
  );
};

export default EventsBox;
