import { Injectable } from '@nestjs/common';

@Injectable()
export class RegistryService {
  listRepositories(): Array<string> {
    return [
      "alpine",
      "debian",
      "ubuntu"
    ]
  }
}
