

export const InspireView = /*HTML*/`
<div class="container-fluid">
    <section class="row">
        <div class="col-3">
            <section class="row">
                <form onsubmit="app.TodoController.createTodo()">
                    <div class="mb-3">
                        <label for="inputTodo" class="form-label">Enter Todo</label>
                        <input required name="description" type="description" class="form-control" id="inputTodo">
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-info text-light elevation-3"><i class="mdi mdi-folder-plus-outline"></i></button>
                    </div>
                </form>
                <div id="todo-list"></div>
            </section>
        </div>
    </section>
</div>
`