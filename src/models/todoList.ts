import { TodoItem } from './todoItem'

export class TodoList {
  constructor(
    public user: string,
    public items: TodoItem[] = []
  ) {}

  addItem(task: string) {
    this.items.push(new TodoItem(task))
  }

  get itemsNotCompleted(): readonly TodoItem[] {
    return this.items.filter(item => !item.completed)
  }

  get todoListItems(): readonly TodoItem[] {
    return this.items
  }
}
