import { ProductCategoryModel } from './../../../data/models/ProductCategory';
import { CategoryRepository } from "../../../data/contracts/repositories/CategoryRepository";

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

    async getByName(name: string): Promise<ProductCategoryModel|undefined> {
        return this.categories.find(category => category.name === name);
    }

    async save(name: string): Promise<void> {
        const nextId = this.categories.length +1;
        const productCateogry = { name, id: nextId };
        this.categories.push(productCateogry);
    }

    async clear(): Promise<void> {
        this.categories = [];
    }
}