export type AppEnvironment = 'development' | 'production';
export type Errors<TError> = { [key in keyof TError]: string };
export type CustomOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
