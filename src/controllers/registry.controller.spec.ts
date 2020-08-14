import { Test, TestingModule } from '@nestjs/testing';
import { RegistryController } from './registry.controller';
import { RegistryService } from '../services/registry.service';
describe('RegistryController', () => {
  let registryController: RegistryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RegistryController],
      providers: [RegistryService]
    }).compile();

    registryController = app.get<RegistryController>(RegistryController)
  });

  it('list repositories', () => {
    const expected = '["alpine","debian","ubuntu"]';
    expect(registryController.listRepositories()).toBe(expected);
  })
});
