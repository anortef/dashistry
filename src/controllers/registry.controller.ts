import { Controller, Get } from '@nestjs/common';
import { RegistryService } from '../services/registry.service';

@Controller('v2')
export class RegistryController {
  constructor(private readonly registryService: RegistryService) {}

  @Get('_catalog')
  async listRepositories(): Promise<string> {
    return JSON.stringify(await this.registryService.listRepositories());
  }

}
