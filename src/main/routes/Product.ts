import { RepositoryFactory } from './../../data/factories/Repository';
import { makePostProductController } from './../factory/GetProductsController';
import { makeGetProductController } from '../factory/GetProductsController';
import Http from '../../presentation/contracts/Http';

export default (http: Http, repositoryFactory: RepositoryFactory): void => {
    http.route('get', '/products', makeGetProductController(repositoryFactory));
    http.route('post', '/products', makePostProductController(repositoryFactory));
}