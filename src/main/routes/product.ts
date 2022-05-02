import { adaptRoute } from './../adapters/expressRouter';
import { makeGetProductController } from './../factory/getProductsController';
import { Router } from 'express';

export default (router: Router): void => {
    router.get('/products', adaptRoute(makeGetProductController()))
}