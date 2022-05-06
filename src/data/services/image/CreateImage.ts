import { ProductImageModel } from '../../models/ProductImage';
import { RepositoryFactory } from '../../factories/Repository';
import { ImageRepository } from '../../contracts/repositories/ImageRepository';
import { ProductImage } from '../../../domain/entity/ProductImage';
import { CreateImage } from '../../../domain/usecase/image/CreateImage';
import DuplicateImage from '../../../domain/errors/DuplicateImage';

export default class CreateImageService implements CreateImage {
    
    private imageRepository: ImageRepository;

    constructor(readonly repositoryFactory: RepositoryFactory) {
        this.imageRepository = repositoryFactory.createImageRepository();
    }

    async execute(productImage: ProductImage): Promise<ProductImageModel> {
        let dataImage: ProductImageModel|undefined = await this.imageRepository.getByURl(productImage.url);
        if(dataImage) throw new DuplicateImage();

        await this.imageRepository.save(productImage.name, productImage.url);
        dataImage = await this.imageRepository.getByURl(productImage.url);
        if(!dataImage) throw new Error("Could not save this image");
        return dataImage;
    }

}