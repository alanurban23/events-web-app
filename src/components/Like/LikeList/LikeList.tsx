import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LazyLoadingList } from '../..';
import { useEventsLiked } from '../../../hooks/EventsLiked';
import { Container } from '../../../material-ui';
import { EventModel } from '../../../models';
import { PaginationParameters } from '../../../models/Pagination';
import { INITIALIZE_PAGE_NUMBER } from '../../../utils';

export interface LikeListState {
  event: EventModel[];
}

const LikeList: FC<PaginationParameters> = ({ page }: PaginationParameters) => {
  const { setLiked } = useEventsLiked();
  const favoritesEvents = useSelector<LikeListState, EventModel[]>(
    (state: LikeListState) => state.event,
  );
  const [pageNumberState, setPageNumberState] = useState(page || INITIALIZE_PAGE_NUMBER);

  useEffect(() => {
    setLiked();
  }, []);

  return (
    <div data-testid='LikeList'>
      <Container maxWidth='lg'>
        <LazyLoadingList
          data={favoritesEvents}
          pageNumberState={pageNumberState}
          setPageNumberState={setPageNumberState}
        />
      </Container>
    </div>
  );
};

export default LikeList;
