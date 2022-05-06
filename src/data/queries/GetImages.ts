import { GetImages } from './../contracts/queries/Image';
import { ImageRepository } from './../contracts/repositories/ImageRepository';
import { ProductImageModel } from '../models/ProductImage';

export default class GetImagesQuery implements GetImages {
    
    constructor(private readonly imageRepository: ImageRepository) {}

    async handle(): Promise<ProductImageModel[]> {
        return this.imageRepository.getAll();
    }

}