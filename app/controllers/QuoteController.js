import { AppState } from "../AppState.js";
import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawQuote() {
    let dailyQuote = AppState.dailyQuote
    setHTML('quote', dailyQuote.quoteTemplate)
}

export class QuoteController {
    constructor() {
        AppState.on('account', this.getQuote)
        AppState.on('dailyImage', _drawQuote)
    }

    async getQuote() {
        try {
            await quoteService.getQuote()
        } catch (error) {
            Pop.error(error)
        }
    }
}