import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { EVENT_STORAGE_KEY } from '../components';
import { EventModel, LikeProps } from '../models';
import { setEventFavorites } from '../action-creators';

interface EventsLikedProps {
  favorites: EventModel[];
  dislike: () => void;
  like: () => void;
  setLiked: () => void;
  isLiked: boolean | number;
}

export const useEventsLiked = (props?: LikeProps): EventsLikedProps => {
  const dispatch = useDispatch();
  const item = props && props.item;
  const [favorites, setFavorites] = useState<EventModel[]>([]);
  const isLiked = !!item && favorites.length && !!favorites.find((el) => el.id === item.id);

  const saveToLocalStorage = (items: EventModel[]): void => {
    localStorage.setItem(EVENT_STORAGE_KEY, JSON.stringify(items));
  };

  const getFromLocalStorage = (): EventModel[] =>
    JSON.parse(localStorage.getItem(EVENT_STORAGE_KEY) || '{}');

  const setLiked = (): void => {
    const storageItems = getFromLocalStorage();
    setEventFavorites(storageItems, dispatch);
    setFavorites(storageItems);
  };

  const saveFavorites = (favoritesItems: EventModel[]): void => {
    setFavorites(favoritesItems);
    saveToLocalStorage(favoritesItems);
  };

  const dislike = (): void => {
    const storageItems = getFromLocalStorage();
    const newFavoriteList = (item && storageItems.filter((el) => el.id !== item.id)) || [];

    setEventFavorites(newFavoriteList, dispatch);
    saveFavorites(newFavoriteList);
  };

  const like = (): void => {
    const storageItems = getFromLocalStorage();
    const newFavoriteList = (item && favorites && [...storageItems, item]) || [];

    saveFavorites(newFavoriteList);
  };

  return {
    favorites,
    isLiked,
    dislike,
    like,
    setLiked,
  };
};
