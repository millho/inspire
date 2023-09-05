import { AppState } from "../AppState.js";
import { TodoController } from "../controllers/TodoController.js";
import { Todo } from "../models/Todo.js";


export const InspireView = /*HTML*/`
<div class="container-fluid p-3">
    <section class="row">
        <div class="col-2 text-light">
            <h1 id="clock">
            </h1>
        </div>
        <div class="col-2 text-light" id="weather">
        </div>
    </section>
    <section class="row">
        <div class="col-4">
            <form class="" onsubmit="app.TodoController.createTodo()">
                <div class="mb-3 blurred">
                    <input required name="description" type="description" placeholder="Enter Todo" class="form-control" id="inputTodo">
                    <button type="submit" class="btn btn-info text-light elevation-3"><i class="mdi mdi-folder-plus-outline"></i></button>
                </div>
            </form>
            <div class="text-light mb-3 blurred" id="todos-left">
            </div>
            <div class="blurred" id="todo-list">
            </div>
        </div>    
        <div class="col-4 text-light" id="quote">
        </div>      
    </section>
</div>
`