import { adaptRoute } from '../adapters/ExpressRouter';
import { makeGetProductController } from '../factory/GetProductsController';
import { Router } from 'express';

export default (router: Router): void => {
    router.get('/products', adaptRoute(makeGetProductController()))
}