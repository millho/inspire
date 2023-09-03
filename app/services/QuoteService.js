import { api } from "./AxiosService.js"


class QuoteService {
    async getQuote() {
        const res = await api.get('/api/')
    }

}

export const quoteService = new QuoteService