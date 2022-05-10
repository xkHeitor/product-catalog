import { ProductModel } from './../../models/Product';
import { GetProductsModel } from './../../models/GetProduct';
import { ProductImageModel } from '../../models/ProductImage';
import { ProductCategoryModel } from '../../models/ProductCategory';
import { GetProducts } from '../../../domain/usecase/product/GetProducts';
import { ImageRepository } from '../../contracts/repositories/ImageRepository';
import { ProductRepository } from '../../contracts/repositories/ProductRepository';
import { RepositoryFactory } from '../../factories/Repository';
import { CategoryRepository } from '../../contracts/repositories/CategoryRepository';

export class GetProductsService implements GetProducts {
    
    private productRepository: ProductRepository;
    private categoryRepository: CategoryRepository;
    private imageRepository: ImageRepository;

    constructor(readonly repositoryFactory: RepositoryFactory) {
        this.productRepository = repositoryFactory.createProductRepository();
        this.categoryRepository = repositoryFactory.createCategoryRepository();
        this.imageRepository = repositoryFactory.createImageRepository();
    }

    async execute(): Promise<GetProductsModel[]> {
        const dataProducts: ProductModel[] = await this.productRepository.getProducts();
        const getProducts: GetProductsModel[] = [];

        for(const item of dataProducts) {
            const category:ProductCategoryModel|undefined = await this.categoryRepository.getById(item.idCategory);
            const image: ProductImageModel|undefined = await this.imageRepository.getById(item.idImage);
            
            if(!category?.id || !image?.id) continue;

            const productModel: ProductModel = {
                name: item.name, description: item.description, code: item.code, 
                price: item.price, idImage: image?.id , idCategory: category?.id
            };
            const getProduct: GetProductsModel = { 
                product: productModel, image, category 
            };
            getProducts.push(getProduct);
        }

        return getProducts;
    }

}