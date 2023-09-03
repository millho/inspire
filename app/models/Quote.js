

export class Quote {
    constructor(data) {
        this.id = data._id
        this.content = data.content
        this.author = data.author
    }
}