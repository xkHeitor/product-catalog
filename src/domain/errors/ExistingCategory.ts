export default class ExistingCategory extends Error {

    constructor() {
        super("Existing Category");
        this.name = "ExistingCategoryError";
    }

}