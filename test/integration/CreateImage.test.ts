import { ImageRepository } from '../../src/data/contracts/repositories/ImageRepository';
import { ProductImageModel } from './../../src/data/models/ProductImage';
import { ProductImage } from './../../src/domain/entity/ProductImage';
import { RepositoryFactory } from '../../src/data/factories/Repository';
import MemoryRepositoryFactory from '../../src/infra/factory/repository/Memory';
import CreateImageService from '../../src/data/services/image/CreateImage';


describe("Create a image", () => {
    
    let repository: RepositoryFactory;
    
    beforeEach(async () => {
        repository = new MemoryRepositoryFactory();
        const imageRepository: ImageRepository = repository.createImageRepository();
        await imageRepository.clear();
    });

    it("Should create a image with success", async (): Promise<void> => {
        const imageService: CreateImageService = new CreateImageService(repository);
        const productImage: ProductImage = { name: "Photo 4k", url: "http://img.teste.com" };
        const response: ProductImageModel = await imageService.execute(productImage);
        expect(response).toEqual(expect.objectContaining({ ...productImage, id: 3 }));
    });

});