import { RESTDataSource } from '@apollo/datasource-rest';
import { config } from 'dotenv';

type Breach = {
    Name: String 
    Domain: String
}

export class API extends RESTDataSource {

  override baseURL = '';

  constructor({ cache }) {
     super({cache});
     this.baseURL = config().parsed.URL;
  }

  async getUrl(path): Promise<string> {
    return path;
  }

  async getBreaches(slug: string): Promise<Breach> {
    return this.get<Breach>(await this.getUrl(`breaches`));
  }

}


