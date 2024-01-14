
export type OptionalInterface<A> = {
    [K in keyof A]?: A[K];
  };