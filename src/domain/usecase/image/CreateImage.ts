import { ProductImageModel } from '../../../data/models/ProductImage';
import { ProductImage } from '../../entity/ProductImage';

export interface CreateImage {

    execute: (productImage: ProductImage) => Promise<ProductImageModel>

}