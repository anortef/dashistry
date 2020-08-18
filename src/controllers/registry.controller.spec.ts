import { Test, TestingModule } from '@nestjs/testing';
import { RegistryController } from './registry.controller';
import { RegistryService } from '../services/registry.service';
import settings from '../settings';
import nock from 'nock';

describe('RegistryController', () => {
  let registryController: RegistryController;

  beforeEach(async () => {
    nock(settings.registry.url)
      .persist()
      .get('/v2/_catalog')
      .reply(200, {repositories:["alpine","debian","ubuntu"]});
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RegistryController],
      providers: [RegistryService]
    }).compile();

    registryController = app.get<RegistryController>(RegistryController)
  });

  it('list repositories', async () => {
    const expected = JSON.stringify({repositories:["alpine","debian","ubuntu"]});
    expect(await registryController.listRepositories()).toBe(expected);
  })
});
