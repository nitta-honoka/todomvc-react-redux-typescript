
export type Todo = {
  id?: number,
  text?: string,
  completed?: boolean
}

export type Todos = Todo[]

export interface Payload {
  id: number,
  text: string
}
