import { PropTypes } from '@mui/material';
import { CSSProperties } from 'react';
import { EventModel } from '.';

export interface LikeProps {
  item: EventModel;
  style?: CSSProperties;
  color?: PropTypes.Color | 'warning' | 'error';
}
export type FavoriteType = EventModel;
