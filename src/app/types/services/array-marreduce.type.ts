// типичное применение:
export interface ArrayMapReduce<I, O> {
  mapReduce(data: Array<I>): O;
}
