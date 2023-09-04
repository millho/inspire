

export class Quote {
    constructor(data) {
        this.id = data._id
        this.content = data.content
        this.author = data.author
    }

    get quoteTemplate() {
        return /*HTML*/`
        <div class="quote-content mb-3 blurred">
            <h4>${this.content}</h4>
        </div>
        <div class="quote-author blurred">
            <h5>${this.author}</h5>
        </div>`
    }
}