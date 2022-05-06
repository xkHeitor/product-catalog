import { ProductCategoryModel } from './../../models/ProductCategory';

export interface GetCategories {

    handle: () => Promise<ProductCategoryModel[]>

}