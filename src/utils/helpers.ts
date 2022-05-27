import moment from 'moment';
import { GENERATED_STRING_LENGTH } from '.';
import { EventModel } from '../models';

const objectToQueryString = (obj: Record<string, unknown>): string =>
  Object.keys(obj)
    .map((key) => `&${key}=${obj[key]}`)
    .join('');

const getEnv = (name: string): string | undefined =>
  process.env[`REACT_APP_${name.toUpperCase().split(' ').join('_')}`];

const concatArrays = (...args: EventModel[]): EventModel[] => args.flat();

const removeAllUndefinedProperties = (
  parameters: Record<string, unknown>,
): Record<string, unknown> =>
  Object.keys(parameters)
    .filter((k) => parameters[k] != null)
    .reduce((a, k) => ({ ...a, [k]: parameters[k] }), {});

const getFormattedCurrentDate = moment().utc().format();

const generateRandomString = (length = GENERATED_STRING_LENGTH): string =>
  `_${Math.random().toString(length).substring(2, 9)}`;

export {
  objectToQueryString,
  getEnv,
  concatArrays,
  removeAllUndefinedProperties,
  generateRandomString,
  getFormattedCurrentDate,
};
