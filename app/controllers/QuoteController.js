import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";


export class QuoteController {
    constructor() {
        this.getQuote()
    }

    async getQuote() {
        try {
            await quoteService.getQuote()
        } catch (error) {
            Pop.error(error)
        }
    }
}