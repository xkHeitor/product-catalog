export default class InvalidPrice extends Error {

    constructor () {
        super("Invalid Price");
        this.name = "InvalidPriceError";
    }

}