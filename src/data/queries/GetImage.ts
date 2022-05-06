import { GetImage } from './../contracts/queries/Image';
import { ImageRepository } from './../contracts/repositories/ImageRepository';
import { ProductImageModel } from '../models/ProductImage';

export default class GetImageQuery implements GetImage {
    
    constructor(private readonly imageRepository: ImageRepository) {}

    async handle(url: string): Promise<ProductImageModel|undefined> {
        return this.imageRepository.getByURl(url);
    }

}