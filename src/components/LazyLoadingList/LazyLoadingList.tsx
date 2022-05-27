import { uniqueId } from 'lodash';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Grid, Container, CircularProgress, styled } from '../../material-ui';
import { EventModel } from '../../models';
import { concatArrays, SIZE_IN_PAGE } from '../../utils';
import CardBox from '../CardBox/CardBox';

const CircularProgressSize = 100;
const ScrollThreshold = 1;

const CircularProgressStyled = styled(CircularProgress)({
  position: 'relative',
  bottom: 0,
  left: '50%',
  display: 'block',
});

const LazyLoadingListStyled = styled(InfiniteScroll)({
  overflow: 'hidden !important',
});

interface LazyLoadingListProps {
  data: EventModel[] | undefined;
  setPageNumberState: any;
  pageNumberState: number;
  pageSize?: number;
}

export const LazyLoadingList = (props: LazyLoadingListProps): JSX.Element => {
  const { data, pageNumberState, setPageNumberState, pageSize } = props;
  const [itemsPageSize] = useState(pageSize || SIZE_IN_PAGE);
  const [hasMore, setHasMore] = useState(false);

  const { isLiked, dislike, like, setLiked } = useEventsLiked({ item });
  const [allEvents, setAllEvents] = useState<EventModel[]>([]);

  const fetchMoreData = (): void => {
    setPageNumberState(pageNumberState + 1);
  };

  useEffect(() => {
    if (data) {
      const sumEvents = concatArrays(...allEvents, ...data);
      setAllEvents(sumEvents);
    }
  }, [pageNumberState]);

  useEffect(() => {
    if (data) {
      setAllEvents(data);
      setHasMore(data.length >= itemsPageSize);
    }
  }, [data, data?.length]);

  return (
    <div data-testid='LazyLoadingList'>
      <LazyLoadingListStyled
        className='infinite-scroll'
        style={{ overflow: 'hidden' }}
        dataLength={allEvents ? allEvents.length : 0}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<CircularProgressStyled size={CircularProgressSize} />}
        scrollThreshold={ScrollThreshold}
      >
        <Container>
          <Grid container spacing={4}>
            {allEvents &&
              allEvents.map((event) => (
                <Grid key={uniqueId()} item xs={4} sx={{ my: 2 }}>
                  <CardBox key={uniqueId()} event={event} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </LazyLoadingListStyled>
    </div>
  );
};
