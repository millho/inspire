import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"


class QuoteService {
    async getQuote() {
        const res = await api.get('/api/quotes')
        AppState.dailyQuote = new Quote(res.data)
    }
}

export const quoteService = new QuoteService