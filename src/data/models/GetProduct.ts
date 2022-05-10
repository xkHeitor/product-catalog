import { ProductModel } from './Product';
import { ProductCategory } from './../../domain/entity/ProductCategory';
import { ProductImage } from './../../domain/entity/ProductImage';

export type GetProductsModel = {
    product: ProductModel, image: ProductImage, category: ProductCategory
}