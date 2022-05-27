import '@testing-library/jest-dom/extend-expect';
import { concatArrays, removeAllUndefinedProperties, generateRandomString } from '.';
import { EventsMock } from '../mocks/EventEmptyModel';
import { getEnv, objectToQueryString } from './helpers';

describe('Helpers', () => {
  describe('objectToQueryString helper', () => {
    test('objectToQueryString', () => {
      const beforeData = { size: 3, startDateTime: '2021-10-13' };
      const afterData = '&size=3&startDateTime=2021-10-13';

      expect(objectToQueryString(beforeData)).toBe(afterData);
    });

    test('empty objectToQueryString', () => {
      const beforeData = {};
      const afterData = '';

      expect(objectToQueryString(beforeData)).toBe(afterData);
    });
  });

  describe('getEnv helper', () => {
    test('getEnv exist', () => {
      const beforeData = getEnv('API_TYPE');
      const afterData = 'events';

      expect(beforeData).toBe(afterData);
    });

    test('getEnv did not exist', () => {
      const beforeData = getEnv('API_TYPEE');
      const afterData = undefined;

      expect(beforeData).toBe(afterData);
    });
  });

  describe('removeAllUndefinedProperties helper', () => {
    test('Remove undefined value from object', () => {
      const beforeData = { size: 3, page: undefined };
      const afterData = { size: 3 };

      expect(removeAllUndefinedProperties(beforeData)).toStrictEqual(afterData);
    });

    test('Pass empty object', () => {
      const beforeData = {};
      const afterData = {};

      expect(removeAllUndefinedProperties(beforeData)).toStrictEqual(afterData);
    });
  });

  describe('concatArrays helper', () => {
    test('Merging two arrays', () => {
      const firstArray = EventsMock[0];
      const secondArray = EventsMock[1];
      const toBe = [EventsMock[0], EventsMock[1]];

      expect(concatArrays(firstArray, secondArray)).toStrictEqual(toBe);
    });
  });

  describe('generateRandomString helper', () => {
    test('Generate random string', () => {
      expect(generateRandomString()).toHaveLength(8);
    });
  });
});
