/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect } from 'react';
import { Fab } from '@mui/material';
import { useTranslation } from '../../../utils';
import { useEventsLiked } from '../../../hooks/EventsLiked';
import { FavoriteIcon, FavoriteBorderIcon, styled } from '../../../material-ui';
import { LikeProps } from '../../../models';

export const EVENT_STORAGE_KEY = 'event-favorites-list';

const FabStyled = styled(Fab)({
  position: 'relative',
  top: '-1.5em',
  marginRight: '1em',
  float: 'right',
});

export const LikeButton: FC<LikeProps> = ({ item, style }) => {
  const { isLiked, dislike, like, setLiked } = useEventsLiked({ item });
  const { t } = useTranslation();

  const onClickLike = (): void => (isLiked ? dislike() : like());

  // useEffect(() => {
  //   console.log('setLiked');
  //   setLiked();
  // }, [setLiked]);

  return (
    <div data-testid='LikeButton'>
      <FabStyled
        aria-label={isLiked ? t('event.dislike') : t('event.like')}
        color='secondary'
        sx={style}
        onClick={() => onClickLike()}
      >
        {isLiked ? <FavoriteIcon fontSize='large' /> : <FavoriteBorderIcon fontSize='large' />}
      </FabStyled>
    </div>
  );
};
