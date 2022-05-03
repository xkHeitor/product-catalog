import { setupRoutes } from './routes';
import Http from "../../presentation/contracts/Http";
export default class App {

    constructor(private app: Http) {
        setupRoutes(app);
    }

    public async startServer(port: number): Promise<void> {
        await this.app.listen(port);
        console.log(`Server running at: http://localhost:${port}`);
    }

}