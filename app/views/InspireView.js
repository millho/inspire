import { AppState } from "../AppState.js";
import { TodoController } from "../controllers/TodoController.js";
import { Todo } from "../models/Todo.js";


export const InspireView = /*HTML*/`
<div class="container-fluid">
    <section class="row">
        <div class="col-4">
            <section class="row">
                <form class="" onsubmit="app.TodoController.createTodo()">
                    <div class="mb-3">
                        <input required name="description" type="description" placeholder="Enter Todo" class="form-control" id="inputTodo">
                        <button type="submit" class="btn btn-info text-light elevation-3"><i class="mdi mdi-folder-plus-outline"></i></button>
                    </div>
                </form>

                <div id="todo-list">
                </div>
            </section>
        </div>
    </section>
</div>
`