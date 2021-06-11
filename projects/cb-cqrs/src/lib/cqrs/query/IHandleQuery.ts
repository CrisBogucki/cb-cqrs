export interface IHandleQuery<T,R> {
  handle(query: T) : R;
}
