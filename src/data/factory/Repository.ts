import { CategoryRepository } from '../contracts/repository/CategoryRepository';
import { ImageRepository } from '../contracts/repository/ImageRepository';
import { ProductRepository } from '../contracts/repository/ProductRepository';

export interface RepositoryFactory {

    createProductRepository(): ProductRepository;
    createCategoryRepository(): CategoryRepository;
    createImageRepository(): ImageRepository;

}