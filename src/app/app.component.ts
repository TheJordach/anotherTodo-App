import { Component } from '@angular/core'
import { TodoList } from '../models/todoList'
import { TodoItem } from '../models/todoItem'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'anotherTodo-App'
  private list = new TodoList('Makaya', [
    new TodoItem('Get out of bed'),
    new TodoItem('Brush teeth'),
    new TodoItem('Eat breakfast'),
    new TodoItem('Go to work'),
    new TodoItem('Go to bed'),
    new TodoItem('Sleep', true),
    new TodoItem('Repeat', true),
  ])

  get username(): string {
    return this.list.user
  }

  get itemCount(): number {
    return this.list.items.filter(item => !item.completed).length
  }

  get items(): readonly TodoItem[] {
    return this.list.todoListItems.filter(
      item => !item.completed || this.showComplete
    )
  }

  addItem(description: string) {
    if (description) {
      this.list.addItem(description)
    }
  }

  showComplete = false
}
