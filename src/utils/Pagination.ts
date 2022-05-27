import { PaginationParameters } from '../models/Pagination';

export const createPaginationParameters = (
  parameters: PaginationParameters,
): PaginationParameters =>
  Object.keys(parameters)
    .filter((k) => parameters[k] != null)
    .reduce((a, k) => ({ ...a, [k]: parameters[k] }), {});
