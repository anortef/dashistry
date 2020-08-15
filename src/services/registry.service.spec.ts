import { Test, TestingModule } from '@nestjs/testing';
import { RegistryService } from './registry.service';
import settings from '../settings';
import nock from 'nock';


describe('RegistryService', () => {
  let registryService: RegistryService;

  beforeEach( async () => {
    nock(settings.registry.url)
      .persist()
      .get('/v2/_catalog')
      .reply(200, {repositories:["alpine","debian","ubuntu"]});
    registryService = new RegistryService();
  });

  it('returns an array of repositories', async () => {
    const expected = ["alpine","debian","ubuntu"];
    expect(await registryService.listRepositories()).toEqual(expected);
  });

});
