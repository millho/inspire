import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "./AxiosService.js"


class TodoService {
    async getTodo() {
        const res = await api.get('/api/todos')
        let todoArray = res.data.map(data => new Todo(data))
        AppState.todo = todoArray
    }

    async createTodo(formData) {
        const res = await api.post('/api/todos', formData)
        let newTodo = new Todo(res.data)
        AppState.todo.push(newTodo)
        AppState.emit('todo')
    }

    async deleteTodo(todoId) {
        const res = await api.delete(`/api/todos/${todoId}`)
        AppState.todo = AppState.todo.filter(todo => todo.id != todoId)
    }

    async completeTodo(todoId) {
        const todo = AppState.todo.find(todo => todo.id == todoId)
        todo.completed = !todo.completed
        const res = await api.put(`/api/todos/${todoId}`, todo)
        AppState.emit('todo')
    }
}

export const todoService = new TodoService