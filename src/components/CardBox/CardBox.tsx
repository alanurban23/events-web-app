/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fab } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { LikeButton } from '..';
import { setEventId } from '../../action-creators';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from '../../material-ui';
import { CardBoxProps } from '../../models';
import { getRouteType, redirectToWithId, useHistory, useLocation } from '../../routes';
import { useTranslation } from '../../utils';

const EventCardActions = styled(CardActions)({
  justifyContent: 'flex-end',
});

const CardBox: FC<CardBoxProps> = (props) => {
  const location = useLocation() || {};
  const { event } = props;
  const { t } = useTranslation();
  const history = useHistory();
  const venues = event._embedded.venues[0];
  const dispatch = useDispatch();

  const goToEvent = (): void => {
    setEventId(event, dispatch);
    redirectToWithId(history, getRouteType(location.pathname), event.id);
  };

  return (
    <Card data-testid='CardBox' sx={{ mr: 2 }}>
      <CardMedia
        component='img'
        height='140'
        image={event.images[0] && event.images[0].url}
        alt={t('events.event.image')}
      />
      <LikeButton item={event} color='warning' />
      {/* <FabStyled size='small' aria-label={t('add')}>
      </FabStyled> */}
      <CardContent>
        <Typography gutterBottom variant='h5' component='span'>
          {event.name}
        </Typography>
        <Typography variant='body2' color='text.secondary' component='span'>
          {venues && venues.name}, {venues.city.name}
        </Typography>
      </CardContent>
      <EventCardActions>
        <Button size='small' onClick={() => goToEvent()}>
          {t('events.event.show')}
        </Button>
      </EventCardActions>
    </Card>
  );
};

export default CardBox;
