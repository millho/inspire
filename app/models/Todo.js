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
        <div>${this.description}</div>
        <button onclick="app.TodoController.deleteTodo('${this.id}')"><i class="mdi mdi-nuke"></i></button>
        `
    }
}