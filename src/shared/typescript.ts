export type FilterRemoveField<T, S extends string> = {
  [P in keyof T as Exclude<P, S>]: T[P];
};
