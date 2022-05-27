import '@testing-library/jest-dom/extend-expect';
import { createPaginationParameters } from './Pagination';

describe('Pagination', () => {
  test('createPaginationParameters', () => {
    const beforeData = { size: 3, page: undefined };
    const afterData = { size: 3 };

    expect(createPaginationParameters(beforeData)).toStrictEqual(afterData);
  });
});
