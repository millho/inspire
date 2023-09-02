import { AppState } from "../AppState.js"
import { generateId } from "../utils/GenerateId.js"


export class Todo {
    constructor(data) {
        this.id = data.id
        this.completed = data.completed || false
        this.description = data.description
        this.creatorId = data.creatorId || generateId()
    }

    get todoTemplate() {
        return /*HTML*/`
        <div class="d-flex justify-content-between my-3">
            ${this.isComplete}
            <p class="m-1 w-100 justify-content-start my-auto text-light">${this.description}</p>
            <button class="m-1 btn text-light" onclick="app.TodoController.deleteTodo('${this.id}')"><i class="mdi mdi-delete"></i></button>
        </div>
        `
    }

    get isComplete() {
        if (this.completed == true) {
            return/*HTML*/`
            <input type="checkbox" checked onchange="app.TodoController.completeTodo('${this.id}')">
            `
        } else {
            return/*HTML*/`
            <input class="m-1" type="checkbox" onchange="app.TodoController.completeTodo('${this.id}')">
            `
        }
    }
}