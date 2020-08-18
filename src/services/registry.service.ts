import axios from 'axios'
import { Injectable } from '@nestjs/common';
import settings from '../settings';
import { RepositoriesList, TagsList, Manifests } from '../interfaces/registry.interfaces';

@Injectable()
export class RegistryService {
  async listRepositories(): Promise<RepositoriesList> {
    const response = await axios.get<RepositoriesList>(settings.registry.url + '/v2/_catalog');
    const content: RepositoriesList = response.data;
    return content;
  }

  async listTags(repository: string): Promise<TagsList> {
    const response = await axios.get<TagsList>(settings.registry.url + `/v2/${repository}/tags/list`)
    const content: TagsList = response.data;
    return content;
  }

  async getManifest(repository: string, tag: string): Promise<Manifests> {
    const response = await axios.get<Manifests>(settings.registry.url + `/v2/${repository}/manifests/${tag}`)
    const content: Manifests = response.data;
    return content;
  }
}
