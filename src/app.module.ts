import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RegistryController } from './controllers/registry.controller';
import { AppService } from './app.service';
import { RegistryService } from './services/registry.service';

@Module({
  imports: [],
  controllers: [AppController, RegistryController],
  providers: [AppService, RegistryService],
})
export class AppModule {}
