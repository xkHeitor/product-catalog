import { ProductImage } from './../../src/domain/entity/ProductImage';
import { ImageRepository } from './../../src/data/contracts/repositories/ImageRepository';
import { ProductImageModel } from './../../src/data/models/ProductImage';
import { GetImages, GetImage } from './../../src/data/contracts/queries/Image';
import MemoryRepositoryFactory from '../../src/infra/factory/repository/Memory';
import { RepositoryFactory } from './../../src/data/factories/Repository';
import GetImagesQuery from '../../src/data/queries/GetImages';
import GetImageQuery from '../../src/data/queries/GetImage';

describe("Image Query", () => {

    let repositoryFactory: RepositoryFactory;
    let imageRepository: ImageRepository;;
    const producImage: ProductImage = { name: "Photo Teste", url: "http://img1.com"};

    beforeEach(() => {
        repositoryFactory = new MemoryRepositoryFactory();
        imageRepository = repositoryFactory.createImageRepository();
    });

    it("Should get all images", async () => {
        const query: GetImages = new GetImagesQuery(imageRepository);
        await imageRepository.save(producImage.name, producImage.url);
        const images: ProductImageModel[] = await query.handle();
        const numberImages = images.length;
        expect(numberImages > 0).toBeTruthy();
    });

    it("Should get a image by url", async () => {
        const query: GetImage = new GetImageQuery(imageRepository);
        await imageRepository.save(producImage.name, producImage.url);
        const image: ProductImageModel|undefined = await query.handle(producImage.url);
        expect(image?.name).toBe(producImage.name);
    });

});