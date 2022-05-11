import Http from '../../presentation/contracts/Http';
import { RepositoryFactory } from './../../data/factories/Repository';
import { readdirSync } from 'fs';

export const setupRoutes = (app: Http, repositoryFactory: RepositoryFactory): 
void => {
      readdirSync(`${__dirname}/../routes`).map(async fileName => {
      (await import (`../routes/${fileName}`)).default(app, repositoryFactory);
    })
  }