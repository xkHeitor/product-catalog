import { ProductCategoryModel } from './../../../data/models/ProductCategory';
import { CategoryRepository } from "../../../data/contracts/CategoryRepository";

export default class CategoryMemoryRepository implements CategoryRepository {
    
    private categories: ProductCategoryModel[];

    constructor() {
        this.categories = [
            { name: "PC", id: 1 },
            { name: "Phone", id: 2 }
        ];
    }

    async getById(idCategory: number): Promise<ProductCategoryModel|undefined> {
        return this.categories.find(category => category.id === idCategory);
    }

}