import { CategoryRepository } from '../contracts/repositories/CategoryRepository';
import { ImageRepository } from '../contracts/repositories/ImageRepository';
import { ProductRepository } from '../contracts/repositories/ProductRepository';

export interface RepositoryFactory {

    createProductRepository(): ProductRepository;
    createCategoryRepository(): CategoryRepository;
    createImageRepository(): ImageRepository;

}