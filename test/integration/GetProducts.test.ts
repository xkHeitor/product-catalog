import { RepositoryFactory } from "../../src/data/factory/Repository";
import { GetProductsService } from "../../src/data/services/product/GetProducts";
import MemoryRepositoryFactory from "../../src/infra/factory/repository/Memory";

describe("Get Products", () => {

    let repository: RepositoryFactory;

    beforeEach(() => {
        repository = new MemoryRepositoryFactory();
    });

    it("should return a list products", async () => {
        const getProductsService = new GetProductsService(repository);
        const products = await getProductsService.execute();
        const [ product1, product2 ] = products;
        expect(product1.name).toBe("iPhone 13");
        expect(product2.price).toBe(8200.88);
    });

});