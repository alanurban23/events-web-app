export type PaginationParametersType = {
  [key: string]: number | string | undefined;
};

export interface PaginationParameters extends PaginationParametersType {
  size?: number;
  page?: number;
}
