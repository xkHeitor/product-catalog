import { ProductImage } from './../../src/domain/entity/ProductImage';
import { RepositoryFactory } from './../../src/data/factory/Repository';
import MemoryRepositoryFactory from '../../src/infra/factory/repository/Memory';
import CreateImageService from '../../src/data/services/CreateImage';


describe("Create a image", () => {
    
    let repository: RepositoryFactory;
    
    beforeEach(async () => {
        repository = new MemoryRepositoryFactory();
        const imageRepository = repository.createImageRepository();
        await imageRepository.clear();
    });

    it("Should create a image with success", async () => {
        const imageService = new CreateImageService(repository);
        const productImage: ProductImage = { name: "Photo 4k", url: "http://img.teste.com" };
        const response = await imageService.execute(productImage);
        expect(response).toEqual(expect.objectContaining({ ...productImage, id: 3 }));
    });

});