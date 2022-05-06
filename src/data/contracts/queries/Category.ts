import { ProductCategoryModel } from './../../models/ProductCategory';

export interface GetCategories {
    handle: () => Promise<ProductCategoryModel[]>
}

export interface GetCategory {
    handle: (name: string) => Promise<ProductCategoryModel|undefined>
}