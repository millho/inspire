import { AboutController } from "./controllers/AboutController.js";
import { ClockController } from "./controllers/ClockController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ImageController } from "./controllers/ImageController.js";
import { QuoteController } from "./controllers/QuoteController.js";
import { TodoController } from "./controllers/TodoController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { WeatherController } from "./controllers/WeatherController.js";
import { AboutView } from "./views/AboutView.js";
import { InspireView } from "./views/InspireView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [TodoController, ImageController, QuoteController, WeatherController, ClockController],
    view: `
<div class="container-fluid p-3">
    <section class="row justify-content-between">
        <div class="col-2 mb-3 ms-3 text-center blurred rounded elevation-5 text-light">
            <h1 id="clock">
            </h1>
        </div>
        <div class="col-4 text-light" id="quote">
        </div>
        <div class="col-2" id="weather">
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
    </section>
</div>`
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */