/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useState } from 'react';
import { useEventsData } from '../../../hooks';
import { EventProps } from '../../../models';
import { INITIALIZE_PAGE_NUMBER, SIZE_IN_PAGE } from '../../../utils';
import { LazyLoadingList } from '../..';

export const EventsList = (props: EventProps): JSX.Element => {
  const { eventType, page, size } = props;

  const [pageNumberState, setPageNumberState] = useState(page || INITIALIZE_PAGE_NUMBER);
  const [sizeState] = useState(size || SIZE_IN_PAGE);

  const eventsData = useEventsData({ eventType, size: sizeState, page: pageNumberState });

  useEffect(() => {}, [pageNumberState]);

  return (
    <div data-testid='EventsList'>
      <LazyLoadingList
        data={eventsData.events}
        pageNumberState={pageNumberState}
        setPageNumberState={setPageNumberState}
      />
    </div>
  );
};
