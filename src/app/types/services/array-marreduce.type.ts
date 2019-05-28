// типичное применение: агрегация нескольких респонсов в одну сущность
export interface ArrayMapReduce<I, O> {
  mapReduce(data: Array<I>): O;
}
