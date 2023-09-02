import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { todoService } from "../services/TodoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawTodo() {
    let todos = AppState.todo
    let content = ''
    todos.forEach(todo => content += todo.todoTemplate)
    setHTML('todo-list', content)
}

export class TodoController {
    constructor() {
        AppState.on('account', this.getTodo)
        AppState.on('todo', _drawTodo)
    }

    async getTodo() {
        try {
            await todoService.getTodo()
        } catch (error) {
            Pop.error(error)
        }
    }

    async createTodo() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            const formData = getFormData(form)
            // @ts-ignore
            await todoService.createTodo(formData)
            // @ts-ignore
            form.reset()
        } catch (error) {
            Pop.error(error)
        }
    }

    async deleteTodo(todoId) {
        try {
            if (await Pop.confirm('Are you sure?')) {
                await todoService.deleteTodo(todoId)
            }
        } catch (error) {
            Pop.error(error)
        }
    }

    async completeTodo(todoId) {
        try {
            await todoService.completeTodo(todoId)
        } catch (error) {
            Pop.error(error)
        }
    }

    todoCount() {
        AppState.todo.length
    }
}