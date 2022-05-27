import { CSSProperties, FC } from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Typography,
  Button,
  LinkIcon,
  Grid,
  Divider,
  Chip,
  AttachMoneyIcon,
  EventIcon,
  Box,
} from '../../material-ui';

import { BreadcrumbNavigation, Image, ImageStyleProps, LikeButton } from '..';
import { EventModel } from '../../models';
import noPicture from '../../images/no-picture.png';
import { useTranslation } from '../../utils';

const ImageStyle: ImageStyleProps = {
  container: { display: 'flex', position: 'relative' },
  image: { margin: 'auto', width: '100%', maxHeight: '700px' },
};

const PositionTopStyle: CSSProperties = { position: 'absolute', bottom: '5%', right: '5%' };

const EVENT_IMAGE_COMMON_NAME = 'TABLET_LANDSCAPE_16_9';

export interface EventState {
  event: EventModel;
}

export const Event: FC = () => {
  const { t } = useTranslation();
  const event = useSelector<EventState, EventModel>((state: EventState) => state.event);

  const getPriceLabel = (): string =>
    event.priceRanges ? `${event.priceRanges[0].min} - ${event.priceRanges[0].max}` : '';

  const findLargeImage = (): string | undefined =>
    event.images?.find((image) => image.url.includes(EVENT_IMAGE_COMMON_NAME))?.url;

  const getDataLabel = (): string => {
    const eventDateStart = event && event.dates && event.dates.start;
    return (
      eventDateStart &&
      `${eventDateStart.localDate ? eventDateStart.localDate : ''} ${
        eventDateStart.localTime ? eventDateStart.localTime : ''
      }`
    );
  };

  const getAddressLabel = (): string => {
    const venueAddress = event._embedded?.venues[0];
    return (
      venueAddress &&
      `${venueAddress.address.line1}, ${venueAddress.city.name}, ${venueAddress.country.name}`
    );
  };

  return (
    <div data-testid='Event'>
      <BreadcrumbNavigation lastPath={event?.name} />
      {event && (
        <Container maxWidth='lg'>
          <Image alt={event.name} src={findLargeImage() || noPicture} style={ImageStyle}>
            <Chip
              icon={<AttachMoneyIcon />}
              color='warning'
              label={getPriceLabel()}
              variant='filled'
              sx={PositionTopStyle}
            />
            <LikeButton item={event} color='warning' style={PositionTopStyle} />
          </Image>
          <Grid container sx={{ alignItems: 'center', mt: 2 }}>
            <Grid item xs={10}>
              <Typography variant='h2' component='div' gutterBottom>
                {event.name}
              </Typography>
              <Typography
                variant='h6'
                component='div'
                gutterBottom
                sx={{ color: 'text.secondary' }}
              >
                {getAddressLabel()}
              </Typography>
              {event && (
                <Typography
                  variant='subtitle1'
                  component='div'
                  gutterBottom
                  sx={{ color: 'text.secondary' }}
                >
                  {event.info}
                </Typography>
              )}
            </Grid>
            <Grid item xs={2}>
              <Box sx={{ display: 'grid', p: 1, m: 1 }}>
                <Button
                  href={event?.url ?? '#'}
                  variant='outlined'
                  startIcon={<LinkIcon />}
                  sx={{ mx: 'auto', mb: 2 }}
                >
                  {t('event.goToEvent')}
                </Button>
                <Chip
                  icon={<EventIcon />}
                  color='default'
                  label={getDataLabel()}
                  variant='outlined'
                />
              </Box>
            </Grid>
          </Grid>
          <Divider />
        </Container>
      )}
    </div>
  );
};
