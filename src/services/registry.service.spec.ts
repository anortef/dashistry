import { Test, TestingModule } from '@nestjs/testing';
import { RegistryService } from './registry.service';
import settings from '../settings';
import nock from 'nock';
import { RepositoriesList, TagsList, Manifests } from '../interfaces/registry.interfaces';

describe('RegistryService', () => {
  let registryService: RegistryService;

  beforeEach( async () => {
    nock(settings.registry.url)
      .persist()
      .get('/v2/_catalog')
      .reply(200, {repositories:["alpine","debian","ubuntu"]});
    nock(settings.registry.url)
      .persist()
      .get('/v2/ubuntu/tags/list')
      .reply(200, {name: "ubuntu", tags: ["latest"]})
    registryService = new RegistryService();
  });

  it('returns a RepositoriesList object', async () => {
    const expected: RepositoriesList = {repositories: ["alpine","debian","ubuntu"]};
    const actual = await registryService.listRepositories();
    expect(actual).toEqual(expected);
  });

  it('returns a TagLists object', async () => {
    const expected: TagsList = {name: "ubuntu", tags: ["latest"]};
    const actual = await registryService.listTags('ubuntu');
    expect(actual).toEqual(expected);
  });

});
