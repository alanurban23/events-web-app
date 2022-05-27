import React, { FC } from 'react';
import { EventsBox } from '..';
import {
  Box,
  Container,
  styled,
  Tab,
  Typography,
  TabPanel,
  TabContext,
  TabList,
} from '../../material-ui';
import { EventType } from '../../models';
import { useTranslation } from '../../utils';

interface TabProps {
  id: string;
  'aria-controls': string;
}

const CategoryBoxContainer = styled(Box)({
  width: '100%',
});

const CategoryBoxTab = styled(Box)({
  borderBottom: 1,
  borderBottomStyle: 'solid',
  borderColor: 'divider',
});

function tabProps(index: number): TabProps {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const EventsSection: FC = () => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string): void => {
    setValue(newValue);
  };

  return (
    <div data-testid='EventsSection'>
      <Container maxWidth='lg'>
        <Typography gutterBottom variant='h4' component='span'>
          {t('events.name')}
        </Typography>

        <TabContext value={value}>
          <CategoryBoxContainer>
            <CategoryBoxTab>
              <TabList onChange={handleChange} aria-label={t('categoryEventsSection.tab')}>
                <Tab label={t('events.pastEvents')} value='1' {...tabProps(0)} />
                <Tab label={t('events.pendingEvents')} value='2' {...tabProps(1)} />
                <Tab label={t('events.upcomingEvents')} value='3' {...tabProps(2)} />
              </TabList>
            </CategoryBoxTab>
            <TabPanel value='1'>
              <EventsBox eventType={EventType.PAST} size={3} />
            </TabPanel>
            <TabPanel value='2'>
              <EventsBox eventType={EventType.PENDING} size={3} />
            </TabPanel>
            <TabPanel value='3'>
              <EventsBox eventType={EventType.UPCOMING} size={3} />
            </TabPanel>
          </CategoryBoxContainer>
        </TabContext>
      </Container>
    </div>
  );
};
