import { RepositoryFactory } from './../../data/factories/Repository';
import { setupRoutes as startRoutes }  from './routes';
import Http from "../../presentation/contracts/Http";
import MemoryRepositoryFactory from '../../infra/factory/repository/Memory';
export default class App {

    constructor(private app: Http) {
        this.setupRoutes(app);
    }

    public async startServer(port: number): Promise<void> {
        await this.app.listen(port);
        console.log(`Server running at: http://localhost:${port}`);
    }

    private async setupRoutes(app: Http): Promise<void> {
        const repositoryFactory: RepositoryFactory = await this.startRepository();
        startRoutes(app, repositoryFactory);
    }

    private async startRepository(): Promise<RepositoryFactory> {
        return new MemoryRepositoryFactory();
    }

}