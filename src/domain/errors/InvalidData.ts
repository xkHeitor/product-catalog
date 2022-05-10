export default class InvalidData extends Error {

    constructor() {
        super("Invalid Data");
        this.name = "InvalidDataError";
    }

}