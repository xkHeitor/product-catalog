import { ProductImage } from './../../domain/entity/ProductImage';
export interface ImageRepository {

    getById(idImage: number): Promise<ProductImage|undefined>

}