import { Image } from './models/Image.js'
import { Quote } from './models/Quote.js'
import { Todo } from './models/Todo.js'
import { Value } from './models/Value.js'
import { Weather } from './models/Weather.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { isValidProp } from './utils/IsValidProp.js'
import { loadState } from './utils/Store.js'

class ObservableAppState extends EventEmitter {

  /**@type {Todo[]} */
  todo = []

  /**@type {Image | null} */
  dailyImage = null

  /**@type {Quote | null} */
  dailyQuote = null

  /**@type {Weather | null} */
  dailyWeather = null

  time = null

  page = ''
  user = null
  /** @type {import('./models/Account.js').Account | null} */
  // @ts-ignore
  account = null
  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])
  socketData = []

  // Used to load initial data
  init() {

  }
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})