export class ResultContent {

    private message: string;
    private content: Object;

    static of() {
        return new ResultContent();
    }

    withContent(content: Object): ResultContent {
        this.content = content;
        return this;
    }

    withMessage(message: string): ResultContent {
        this.message = message;
        return this;
    }

    build(): Object {
        return {
            message: this.message,
            content: this.content
        };
    }

}