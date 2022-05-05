export default class DuplicateImage extends  Error {
    constructor() {
        super("Duplicate Image");
        this.name = "DuplicateImageError";
    }
}