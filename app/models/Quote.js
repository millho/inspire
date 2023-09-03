

export class Quote {
    constructor(data) {
        this.id = data._id
        this.content = data.content
        this.author = data.author
    }

    get quoteTemplate() {
        return /*HTML*/`
        <div class="quote-content">
            <h4>${this.content}</h4>
        </div>
        <div class="quote-author">
            <h5>${this.author}</h5>
        </div>`
    }
}