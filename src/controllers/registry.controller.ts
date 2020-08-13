import { Controller, Get } from '@nestjs/common';
import { RegistryService } from '../services/registry.service';

@Controller('v2')
export class RegistryController {
  constructor(private readonly registryService: RegistryService) {}

  @Get('_catalog')
  listRepositories(): string {
    return JSON.stringify(this.registryService.listRepositories());
  }

}
