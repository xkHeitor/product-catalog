import { ProductCategoryModel } from './../../models/ProductCategory';
import { ProductImageModel } from './../../models/ProductImage';
import { CategoryRepository } from './../../contracts/repositories/CategoryRepository';
import { ImageRepository } from './../../contracts/repositories/ImageRepository';
import { ProductRepository } from './../../contracts/repositories/ProductRepository';
import { RepositoryFactory } from './../../factories/Repository';
import { CreateProduct } from "../../../domain/usecase/product/CreateProduct";
import { ProductModel } from "../../models/Product";
import InvalidData from '../../../domain/errors/InvalidData';
import Product from '../../../domain/entity/Product';

export default class CreateProductService implements CreateProduct {
    
    private productRepository: ProductRepository;
    private imageRepository: ImageRepository;
    private categoryRepository: CategoryRepository;

    constructor(readonly repositoryFactory: RepositoryFactory) {
        this.productRepository = repositoryFactory.createProductRepository();
        this.imageRepository = repositoryFactory.createImageRepository();
        this.categoryRepository = repositoryFactory.createCategoryRepository();
    }

    async execute(productModel: ProductModel): Promise<Product> {
        const image: ProductImageModel|undefined = await this.imageRepository.getById(productModel.idImage);      
        const category: ProductCategoryModel|undefined = await this.categoryRepository.getById(productModel.idCategory);
        if(!image || !category) throw new InvalidData();
        const product: Product = new Product(productModel.name, productModel.description, productModel.code, productModel.price, image, category);
        await this.productRepository.save(productModel);
        return product;
    }

}