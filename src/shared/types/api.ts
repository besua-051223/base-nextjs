export type ApiResponse<T> = {
  error_code: string | null;
  data: T;
};
