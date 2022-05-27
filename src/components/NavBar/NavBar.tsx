import { FC } from 'react';
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  EventSeat,
  styled,
  Toolbar,
  Typography,
} from '../../material-ui';
import { useTranslation } from '../../utils';

const AppBarStyled = styled(AppBar)({
  backgroundColor: 'white',
});

export const NavBar: FC = () => {
  const { t } = useTranslation();

  return (
    <div data-testid='NavBar'>
      <AppBarStyled position='static'>
        <Toolbar>
          <Box alignItems='center' display='flex'>
            <EventSeat fontSize='large' sx={{ color: 'text.primary' }} />
            <Typography variant='h5' color='text.primary' component='span'>
              EventsApp
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <ButtonGroup variant='text' aria-label='text button group'>
              <Button sx={{ color: 'text.primary' }}>{t('events.upcomingEvents')}</Button>
              <Button sx={{ color: 'text.primary' }} href='/events/liked'>
                {t('events.favouriteEvents')}
              </Button>
            </ButtonGroup>
          </Box>
        </Toolbar>
      </AppBarStyled>
    </div>
  );
};

export default NavBar;
