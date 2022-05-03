import { makeGetProductController } from '../factory/GetProductsController';
import Http from '../../presentation/contracts/Http';

export default (http: Http): void => {
    http.route('get', '/products', makeGetProductController());
}