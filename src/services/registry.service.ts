import AxiosStatic from 'axios'
import { Injectable } from '@nestjs/common';
import settings from '../settings';

@Injectable()
export class RegistryService {
  async listRepositories(): Promise<Array<string>> {
    const response = await AxiosStatic.get(settings.registry.url + '/v2/_catalog')
    return response.data.repositories;
  }
}
