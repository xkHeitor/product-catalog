import Http from '../../presentation/contracts/Http';
import { readdirSync } from 'fs';

export const setupRoutes = (app: Http): void => {
      readdirSync(`${__dirname}/../routes`).map(async fileName => {
      (await import (`../routes/${fileName}`)).default(app);
    })
  }