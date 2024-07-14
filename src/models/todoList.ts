import { TodoItem } from './todoItem'

export class TodoList {
  constructor(
    public user: string,
    public items: TodoItem[] = []
  ) {}

  addTodo(task: string) {
    this.items.push(new TodoItem(task))
  }

  get itemsNotCompleted(): readonly TodoItem[] {
    return this.items.filter(item => !item.completed)
  }

  get todoListitems(): readonly TodoItem[] {
    return this.items
  }
}
