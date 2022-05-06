import { ProductImageModel } from '../../models/ProductImage';

export interface ImageRepository {

    getAll(): Promise<ProductImageModel[]>
    getById(idImage: number): Promise<ProductImageModel|undefined>
    getByURl(url: string): Promise<ProductImageModel|undefined>
    save(name: string, url: string): Promise<void>
    clear(): Promise<void>

}