export default class NotFound extends Error {

    constructor() {
        super("Not Found");
        this.name = "NotFoundError";
    }

}