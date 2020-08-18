import { Controller, Get, Req } from '@nestjs/common';
import { RegistryService } from '../services/registry.service';
import { Request } from 'express';

@Controller('v2')
export class RegistryController {
  constructor(private readonly registryService: RegistryService) {}

  @Get('_catalog')
  async listRepositories(): Promise<string> {
    const content = await this.registryService.listRepositories();
    return this.prepareReturn(content);
  }

  @Get(':repository/manifests/:tag')
  async getManifest(@Req() request: Request): Promise<string> {
    const repository = request.params.repository;
    const tag = request.params.tag;
    const content = await this.registryService.getManifest(repository, tag);
    return this.prepareReturn(content);
  }

  @Get(':repository/tags/list')
  async listTags(@Req() request: Request): Promise<string> {
    const repository = request.params.repository;
    const content = await this.registryService.listTags(repository);
    return this.prepareReturn(content);
  }

  private prepareReturn(response) {
    return JSON.stringify(response);
  }
}
