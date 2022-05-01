import { ProductImage } from './../../domain/entity/ProductImage';
import { ProductCategory } from './../../domain/entity/ProductCategory';
import { ImageRepository } from './../contracts/ImageRepository';
import { ProductRepository } from './../contracts/ProductRepository';
import { RepositoryFactory } from './../factory/Repository';
import { GetProducts } from "../../domain/usecase/GetProducts";
import { CategoryRepository } from '../contracts/CategoryRepository';
import Product from "../../domain/entity/Product";

export class GetProductsService implements GetProducts {
    
    private productRepository: ProductRepository;
    private categoryRepository: CategoryRepository;
    private imageRepository: ImageRepository;

    constructor(readonly repositoryFactory: RepositoryFactory) {
        this.productRepository = repositoryFactory.createProductRepository();
        this.categoryRepository = repositoryFactory.createCategoryRepository();
        this.imageRepository = repositoryFactory.createImageRepository();
    }

    async execute(): Promise<Product[]> {
        const dataProducts = await this.productRepository.getProducts();
        const products = [];

        for(const item of dataProducts) {
            const category = await this.categoryRepository.getById(item.idCategory);
            const productCategory: ProductCategory = { name: category?.name || "Empty" };

            const image = await this.imageRepository.getById(item.idImage);
            const productImage: ProductImage = { name: image?.name || "img", url: image?.url || "none" };

            const product = new Product(item.name, item.description, item.code, item.price, productImage, productCategory);
            products.push(product);
        }

        return products;
    }

}