import { ProductImageModel } from './../models/ProductImage';
export interface ImageRepository {

    getById(idImage: number): Promise<ProductImageModel>

}